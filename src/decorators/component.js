import { Component, ObservableModel } from '../core';
import { DIRECTIVES_NAMES } from '../component/const/directives';
import { EVENTS_NAMES } from '../component/const/events';
import { Directives } from '../component/Directives';

export default function ComponentDecorator(decoratorParams) {
    return function decorator(Class) {
        let func = (root, props) => {

            decoratorParams.props = Object.assign(decoratorParams.props || {}, props);
            let proto = Component.prototype;
            if (decoratorParams.super) {
                proto = decoratorParams.super.prototype = Object.setPrototypeOf(decoratorParams.super.prototype, Component.prototype);
            }
            Class.prototype = Object.setPrototypeOf(Class.prototype, proto);
            let instance = new Class();

            if(decoratorParams.stores){
                decoratorParams.stores.forEach(store=>{
                    Object.defineProperty(instance, store + 'Store', { value: Component.STORES[store] || null, writable: false });
                })
            }

            Component.componentConstructor.call(instance, root, decoratorParams);
            return instance;
        };
        func.selector = decoratorParams.selector;

        return func;
    }
}