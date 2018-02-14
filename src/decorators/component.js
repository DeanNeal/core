import {Component} from '../component/component';
import {Observable} from '../observable/observable';
import { DIRECTIVES_NAMES } from '../component/const/directives';
import { EVENTS_NAMES } from '../component/const/events';
import { Directives } from '../component/directives';
import API from './../api';

export default function ComponentDecorator(decoratorParams) {
    return function decorator(Class) {
        let func = (root, props, parent, extraData) => {
            let newProps = {};
            try {
                newProps = decoratorParams.props ? decoratorParams.props() : {};
            } catch (err) {
                throw new Error(err + '; props is not a function; ' + Class.name)
            }

            newProps = Object.assign(newProps, props);

            let proto = Component.prototype;
            if (decoratorParams.super) {
                proto = decoratorParams.super.prototype = Object.setPrototypeOf(decoratorParams.super.prototype, Component.prototype);
            }
            Class.prototype = Object.setPrototypeOf(Class.prototype, proto);

            let instance = new Class();

            let services = [];
            if (typeof decoratorParams.services === 'object') {
                for (let key in decoratorParams.services) {
                    if (decoratorParams.services.hasOwnProperty(key) && decoratorParams.services[key]) {
                        let injectedService = API.injectorGet(decoratorParams.services[key], Class);
                        if (injectedService) {
                            newProps[key] = injectedService;
                            services.push({ key, injectedService });
                        }
                    }
                }
            }

            Object.defineProperty(instance, 'props', { value: new Observable(newProps), writable: false });

            for (let key in newProps) {
                Object.defineProperty(instance, key, {
                    set: value => instance.props.set(key, value),
                    get: () => instance.props.get(key),
                    configurable: true
                });
            }

            services.forEach(res => {
                Object.defineProperty(instance, res.key, {
                    value: res.injectedService,
                    writable: false
                });
                Object.defineProperty(instance.props, res.key, {
                    value: res.injectedService,
                    writable: false
                });
            })

            Component.componentConstructor.call(instance, root, decoratorParams);
            instance.onInit(extraData);

            if (parent) {
                instance.parent = parent;
            }
            return instance;
        };
        func.selector = decoratorParams.selector;
        func.class = Class;
        func.super = Component;
        return func;
    }
}