import { BaseComponent } from './../component/component';
import { DIRECTIVES_NAMES } from './../component/const/directives';
import { EVENTS_NAMES } from './../component/const/events';
import { Utils } from './../core';

import 'zone.js';
declare let Zone: any;
import 'zone.js/dist/long-stack-trace-zone';
import { IComponentParams, IDirectiveName } from 'src/interfaces';


function preCompileTpl(html: string) {
    EVENTS_NAMES.forEach((event: string) => {
        let stringToGoIntoTheRegex = '@' + event;
        let regex = new RegExp(stringToGoIntoTheRegex, "g");
        html = html.replace(regex, `bind-${event}`)
    });

    DIRECTIVES_NAMES.forEach((directive: IDirectiveName) => {
        let stringToGoIntoTheRegex = ':' + directive.name;
        let regex = new RegExp(stringToGoIntoTheRegex, "g");
        html = html.replace(regex, `${directive.alias}`)
    });

    //convert camelCase into string with dashes
    html = html.replace(/\[(.*?)\]/g, (match: string, value: string) => {
        const newString = Utils.camelToSnake(value);
        return `[${newString}]`;
    });

    return html;
}


function appendStyles(decoratorParams: IComponentParams) {
    const style = document.createElement('style');
    const styleNode = document.createTextNode(decoratorParams.style);
    style.appendChild(styleNode);
    style.id = decoratorParams.selector;

    if (this.shadowRoot) {
        this.shadowRoot.prepend(style);
    } else {
        if (!document.head.querySelector('#' + decoratorParams.selector)) {
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }
}

export default function ComponentDecorator(decoratorParams: IComponentParams) {
    return (Class) => {

        Class.selector = decoratorParams.selector;
        Class.register = function () {
            if (customElements.get(decoratorParams.selector)) {
                throw new Error(decoratorParams.selector + ' is already declared');
            }
            
            window.customElements.define(decoratorParams.selector, class extends HTMLElement {
                constructor() {
                    super();
                }
                connectedCallback() {
                    if (this.getAttribute('bind-for')) {
                        alert('Error');
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

                    if (decoratorParams.style) {
                        appendStyles.call(this, decoratorParams);
                    }


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
                                // console.log("All MacroTasks have been completed.");
                                // instance.changeDetection();
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

        return Class;
    }
}

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
