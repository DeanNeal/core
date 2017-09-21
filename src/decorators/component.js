import { Component, ObservableModel } from '../core';
import { PRIVATES } from '../component/private';
import { DIRECTIVES_NAMES } from '../component/const/directives';
import { EVENTS_NAMES } from '../component/const/events';
import { Directives } from '../component/Directives';

export default function ComponentDecorator(decoratorParams) {
    return function decorator(Class) {
        return (args) => {

            Class.prototype = Object.setPrototypeOf(Class.prototype, Component.prototype);
            let instance = new Class(args);


            instance.tpl = decoratorParams.template || 'Empty template';
            // this.styles = custom.styles;
            instance.shadow = decoratorParams.shadow || false;
            instance.type = decoratorParams.type;

            instance.props = new ObservableModel(args.props);
            instance.root = null;


            Component.setPrivates.call(instance, {});

            instance.ui = {};
            // console.log(options.ce.attributes);
            if (args.ce.getAttribute('ac-for')) {
                // console.warn('Foor loop is detected!')
            } else {
                args.ce ? Component.render.call(instance, args.ce) : console.warn('Component data is expected. See your component constructor!');
                instance.props.sub(r => {
                    Directives._for.call(instance, PRIVATES.DIRECTIVES['ac-for'].get(instance));
                    Directives._props.call(instance, PRIVATES.DIRECTIVES['ac-value'].get(instance));
                    Directives._input.call(instance, PRIVATES.DIRECTIVES['ac-input'].get(instance));
                    Directives._props.call(instance, PRIVATES.DIRECTIVES['ac-model'].get(instance));
                    Directives._style.call(instance, PRIVATES.DIRECTIVES['ac-style'].get(instance));
                    Directives._if.call(instance, PRIVATES.DIRECTIVES['ac-if'].get(instance));
                    Directives._class.call(instance, PRIVATES.DIRECTIVES['ac-class'].get(instance));
                    Directives._attr.call(instance, PRIVATES.DIRECTIVES['ac-attr'].get(instance));
                    Directives._link.call(instance, PRIVATES.DIRECTIVES['ac-link'].get(instance));
                    Directives._hostClasses.call(instance, PRIVATES.HOST.CLASS.get(instance));
                    Directives._hostStyles.call(instance, PRIVATES.HOST.STYLE.get(instance));
                    instance.onUpdate();
                });
            }


            return instance;
        };
    }
}