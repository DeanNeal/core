import { Component, ObservableModel } from '../core';
import { DIRECTIVES_NAMES } from '../component/const/directives';
import { EVENTS_NAMES } from '../component/const/events';
import { Directives } from '../component/Directives';

export default function ComponentDecorator(decoratorParams) {
    return function decorator(Class) {
        return (root, options) => {
            Class.prototype = Object.setPrototypeOf(Class.prototype, Component.prototype);
            let instance = new Class();
            Component.componentConstructor.call(instance, root, decoratorParams);
            return instance;
        };
    }
}
