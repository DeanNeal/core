import { BaseComponent } from './../component/component';
import { DIRECTIVES_NAMES } from './../component/const/directives';
import { EVENTS_NAMES } from './../component/const/events';
import { Utils } from './../core';

import 'zone.js';
declare let Zone: any;
import 'zone.js/dist/long-stack-trace-zone';

// const squareRegx = /\[.*?\]/g;


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

    //convert camelCase into string with dashes
    html = html.replace(/\[(.*?)\]/g, (match, value) => {
        const newString = Utils.camelToSnake(value);
        return `[${newString}]`;
    });

    return html;
}

export default function ComponentDecorator(decoratorParams) {
    return (Class) => {

        Class.selector = decoratorParams.selector;
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
                    const template = document.createElement('template');
                    template.innerHTML = preCompileTpl(decoratorParams.template);

                    const clone = document.importNode(template.content, true);

                    if (decoratorParams.shadowDom) {
                        if (!this.shadowRoot) {
                            this.attachShadow({ mode: 'open' }).appendChild(clone);
                        } else {
                            this.shadowRoot.appendChild(clone);
                        }
                    } else {
                        this.appendChild(clone);
                    }

                    // Class.selector = decoratorParams.selector;
                    Zone.current.fork({
                        name: decoratorParams.selector + ' zone',
                        // onInvoke: function(parentZoneDelegate, _, targetZone, delegate, applyThis, applyArgs, source) {
                        //     // console.log(parentZoneDelegate, _, targetZone, delegate, applyThis, applyArgs, source);
                        // },

                        onScheduleTask(parentZoneDelegate, _, targetZone, task) {
                            // console.log(
                            //     'Где-то мы вызвали асинхронный таск и его колбек будет чуть позже вызван в нашей зоне...'
                            // );

                            return parentZoneDelegate.scheduleTask(targetZone, task);
                        },

                        onInvokeTask(parentZoneDelegate, _, targetZone, task, applyThis, applyArgs) {
                            // console.log('Somewhere a callback of asynchronous task has been invoked...', parentZoneDelegate, _, targetZone, task, applyThis, applyArgs);
                            const delegate = parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
                            // if(task.eventName === 'input-params') return delegate;
                            instance.changeDetection();
                            return delegate;
                        },
                        // onCancelTask(parentZoneDelegate, _, targetZone, task) {
                        //     console.log(111, parentZoneDelegate, _, targetZone, task);
                        // },
                        onHasTask(parent, current, target, hasTask) {
                            if (hasTask.macroTask) {
                                console.log("There are outstanding MacroTasks.");
                            } else {
                                console.log("All MacroTasks have been completed.");
                                instance.changeDetection();
                            }
                        },
                        onHandleError: function (parentZoneDelegate, currentZone, targetZone, error) {
                            // console.log(error.stack);
                            throw new Error(error.stack);
                        }
                    }).run(() => {
                        Object.setPrototypeOf(Class.prototype, BaseComponent.prototype);

                        instance = new Class();

                        instance.componentConstructor.call(instance, (this.shadowRoot ? this.shadowRoot : this), decoratorParams, {});
                    });
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



 // Object.keys(instance).forEach((key) => {
 //     newProps[key] = instance[key];
 // });

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
 // Reflect.ownKeys(Class.prototype).filter(name => {
 //     const getter = Reflect.getOwnPropertyDescriptor(Class.prototype, name)["get"];
 //     if (typeof getter === "function") {
 //         Object.defineProperty(newProps, name, {
 //             set: value => {
 //                 console.log('SET');
 //             },
 //             get: () => {
 //                 return getter.call(instance);
 //             },
 //             // configurable: true,
 //             enumerable: true
 //         });
 //     }
 // }) as string[];


 // Object.defineProperty(instance, '_props', { value: new ObservableModel(newProps), writable: false });
 // const proxy = new Proxy(instance, {
 //     get(target, prop:any, receiver) {

 //         // if(Object.keys(instance).includes(prop)) {
 //         if(Reflect.ownKeys(Class.prototype).includes(prop)) {

 //         }


 //         return Reflect.get(target, prop, receiver); // (1)
 //     },
 //     set(target, prop:any, val, receiver) {
 //         // alert(`SET ${prop}=${val}`);
 //         // if(Reflect.ownKeys(instance).includes(prop)) {

 //         const success = Reflect.set(target, prop, val, receiver);
 //         if(success && Object.keys(instance).includes(prop)) {
 //             console.log(prop);
 //             instance.listenToPropsChanges();
 //         }
 //         return  success;// (2)
 //     }
 // });

 // Object.defineProperty(instance, '_props', { value: proxy, writable: false });

 // for (let key in newProps) {
 //     Object.defineProperty(instance, key, {
 //         set: value => {
 //             // instance._props.set(key, value)
 //             // instance._props[key] = value;

 //         },
 //         // get: () => {
 //         //     // instance._props.get(key)
 //         //     // return instance._props.get(key);

 //         //     return  Reflect.set(instance, key, newProps[key], proxy);
 //         // },
 //         configurable: true
 //     });
 // }


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
