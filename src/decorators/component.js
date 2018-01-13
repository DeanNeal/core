import { Component, ObservableModel } from '../core';
import { DIRECTIVES_NAMES } from '../component/const/directives';
import { EVENTS_NAMES } from '../component/const/events';
import { Directives } from '../component/Directives';
import API from'./../api';

export default function ComponentDecorator(decoratorParams) {
    return function decorator(Class) {
        let func = (root, props, parent) => {

            decoratorParams.props = Object.assign(decoratorParams.props || {}, props);
            let proto = Component.prototype;
            if (decoratorParams.super) {
                proto = decoratorParams.super.prototype = Object.setPrototypeOf(decoratorParams.super.prototype, Component.prototype);
            }
            Class.prototype = Object.setPrototypeOf(Class.prototype, proto);

            let instance = new Class();

            Object.defineProperty(instance, 'props', { value: new ObservableModel(Object.assign({}, decoratorParams.props)), writable: false });

            for(let key in decoratorParams.props) {
                Object.defineProperty(instance, key, {
                    set: value => instance.props.set(key, value),
                    get: () => instance.props.get(key),
                    configurable: true
                });
            }

            if(typeof decoratorParams.services === 'object') {
                for(let key in decoratorParams.services) {
                    if(decoratorParams.services.hasOwnProperty(key) && decoratorParams.services[key]){
                        let injectedService = API.injectorGet(decoratorParams.services[key], Class);
                        if(injectedService){

                          Object.defineProperty(instance, key, {
                            value: injectedService,
                              writable: false
                          });
                          Object.defineProperty(instance.props, key, {
                            value: injectedService,
                              writable: false
                          });
                        }
                    }
                }    
            }
            
            Component.componentConstructor.call(instance, root, decoratorParams);
            if (parent) {
                instance.parent = parent;
            }
            return instance;
        };
        func.selector = decoratorParams.selector;
        func.class = Class;
        return func;
    }
}