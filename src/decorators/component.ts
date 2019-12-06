import { Component } from './../component/component';
import { Observable, AbstractObservable, ObservableModel } from '../observable/observable';
import { DIRECTIVES_NAMES } from './../component/const/directives';
import { EVENTS_NAMES } from './../component/const/events';
import { Application } from './../core';

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

export default function ComponentDecorator(decoratorParams) {
    return (Class) => {


        Class.prototype.register = function () {
            if (customElements.get(decoratorParams.selector)) {
                throw new Error(decoratorParams.selector + ' is already declared');
                return;

            }
            window.customElements.define(decoratorParams.selector, class extends HTMLElement {
                constructor() {
                    super();
                }
                connectedCallback() {
                    if (this.getAttribute('bind-for')) {
                        return;
                    }

                    let instance;
                    let newProps = {};


                    const template = document.createElement('template');
                    template.innerHTML = preCompileTpl(decoratorParams.template);

                    const clone = document.importNode(template.content, true);
                    let shadowDom;
                    if (decoratorParams.shadowDom) {
                        if(!this.shadowRoot) {
                            shadowDom = this.attachShadow({ mode: 'open' }).appendChild(clone);
                        }
                    } else {
                        this.appendChild(clone);
                    }

                    Object.setPrototypeOf(Class.prototype, Component.prototype);

                    Class.selector = decoratorParams.selector;

                    instance = new Class();

                    // if (!Application.rootComponent) {
                    // Application.rootComponent = instance;
                    // }

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

                    //add getters
                    Reflect.ownKeys(Class.prototype).filter(name => {
                        const getter = Reflect.getOwnPropertyDescriptor(Class.prototype, name)["get"];
                        if (typeof getter === "function") {
                            Object.defineProperty(newProps, name, {
                                set: value => {
                                    console.log('SET');
                                },
                                get: () => {
                                    return getter.call(instance);
                                },
                                // configurable: true,
                                enumerable: true
                            });
                        }
                    }) as string[];

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

                    // let mountedElement;
                    // if(shadowDom){
                    //     mountedElement = document.createElement("div");
                    //     mountedElement.appendChild(shadowDom);
                    //     debugger
                    // }

                    instance.componentConstructor.call(instance, (shadowDom ? this.shadowRoot : this), decoratorParams, {});
                }

                disconnectedCallback() {
                    const event = new CustomEvent('destroy', { detail: null });
                    this.dispatchEvent(event);
                }
            });
        }


        // return Class;
    }
}
