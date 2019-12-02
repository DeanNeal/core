import { Component } from '../component/component';
import { Observable, AbstractObservable, ObservableModel } from '../observable/observable';
import { DIRECTIVES_NAMES } from '../component/const/directives';
import { EVENTS_NAMES } from '../component/const/events';
import { Application } from '../core';


export default function ComponentDecorator(decoratorParams) {
    return function decorator(Class) {


        const registeredClass = class extends HTMLElement {

            static get selector() {
                return decoratorParams.selector;
            }

            connectedCallback() {
                let instance;
                let newProps = {};

                const template = document.createElement('template');
                template.innerHTML = preCompileTpl(decoratorParams.template);

                const clone = document.importNode(template.content, true);

                if (decoratorParams.useShadow) {
                    this.attachShadow({ mode: 'open' }).appendChild(clone);
                } else {
                    this.appendChild(clone);
                }
                let proto = Component.prototype;
                Object.setPrototypeOf(Class.prototype, proto);

                instance = new Class();

                if (!Application.rootComponent) {
                    Application.rootComponent = instance;
                }

                Object.keys(instance).forEach((key) => {
                    newProps[key] = instance[key];
                });

                // let services = [];
                // if (typeof decoratorParams.services === 'object') {
                //     for (let key in decoratorParams.services) {
                //         if (decoratorParams.services.hasOwnProperty(key) && decoratorParams.services[key]) {
                //             let injectedService = API.injectorGet(decoratorParams.services[key], Class);
                //             if (injectedService) {
                //                 newProps[key] = injectedService;
                //                 services.push({ key, injectedService });
                //             }
                //         }
                //     }
                // }

                Object.defineProperty(instance, '_props', { value: new ObservableModel(newProps), writable: false });

                for (let key in newProps) {
                    Object.defineProperty(instance, key, {
                        set: value => instance._props.set(key, value),
                        get: () => instance._props.get(key),
                        configurable: true
                    });
                }

                // services.forEach(res => {
                //     Object.defineProperty(instance, res.key, {
                //         value: res.injectedService,
                //         writable: false
                //     });
                //     Object.defineProperty(instance.props, res.key, {
                //         value: res.injectedService,
                //         writable: false
                //     });
                // })

                instance.componentConstructor.call(instance, this, decoratorParams, {});
            }

            disconnectedCallback() {
                // instance.destroy();
                this.innerHTML = '';
                // instance = undefined;
            }
        }


        function preCompileTpl(html) {

            EVENTS_NAMES.forEach(event => {
                let stringToGoIntoTheRegex = '@' + event;
                let regex = new RegExp(stringToGoIntoTheRegex, "g");
                html = html.replace(regex, `bind-${event}`)
            });

            DIRECTIVES_NAMES.forEach(directive => {
                let stringToGoIntoTheRegex = ':' + directive.name;
                let regex = new RegExp(stringToGoIntoTheRegex, "g");
                html = html.replace(regex, `${directive.alias}`)
            });

            return html;
        }

        window.customElements.define(decoratorParams.selector, registeredClass);

        return registeredClass;
    }
}