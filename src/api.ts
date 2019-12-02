
import {RouteSwitcher} from './router/router-switcher';
import { Component } from './component/component';
import {Directive } from './decorators/directive';

class API {
    public rootComponent;
    public rootInstance;
    public config;
    public COMPONENTS;
    public CUSTOM_DIRECTIVES;
    public _SERVICES;
    public _READY_SERVICES;

    constructor() {
        this.rootComponent = null;
        this.rootInstance = null;
        this.config = {};
        this.COMPONENTS = [];
        this.CUSTOM_DIRECTIVES = [];
        this._SERVICES = [];
        this._READY_SERVICES = [];
    }

    setServices(options) {
        options.forEach(r => {
            if (Array.isArray(r)) {
                r.forEach(r => {
                    this._SERVICES.push(r);
                })
            } else {
                this._SERVICES.push(r);
            }
        });
    }

    injectorGet(service, Class) {
        let instanceName = (Class ? Class.name : '');
        if (typeof service !== 'function') {
            throw new Error('Is not a service; ' + instanceName);
        }

        let injectedService = this._SERVICES.filter(r => r === service)[0];
        let readyService = this._READY_SERVICES.filter(r => {
            if (!service.class) throw new Error(service.name + ' service must be injected; See ' + instanceName);
            return r instanceof service.class;
        });
        if (readyService.length) {
            return readyService[0];
        } else {
            if (injectedService) {
                let readyService = new injectedService();
                this._READY_SERVICES.push(readyService);
                return readyService
            } else {
                if (service.class) {
                    throw new Error('Service doesn\'t exist; ' + service.class.name + '; See ' + instanceName);
                } else {
                    throw new Error(service.name + ' service must be injected; See ' + instanceName);
                }

            }
        }
    }

    register(options) {
        // this.loadStyle(options.styles);

        // if (options.services && options.services.length) {
        //     this.setServices(options.services);
        // }

        // RouteSwitcher.ROUTES = options.routes;
        // this.rootComponent = options.root;

        if(options.components) {
            if (options.components instanceof Array) {
                options.components.forEach(c => c());//this.registerComponent(c));
            } else {
                throw new Error('components must be an array');
            }
        }
        
        // if (options.directives) {
        //     if (options.directives instanceof Array) {
        //         options.directives.forEach(d => this.registerDirective(d));
        //     } else {
        //         throw new Error('directives must be an array');
        //     }
        // }

        // if(options.import) {        
        //     if (options.import instanceof Array) {
        //         options.import.forEach(module => {
        //             if (Array.isArray(module)) {
        //                 module.forEach(component => {
        //                     this.registerComponent(component);
        //                 });
        //             } else {
        //                 throw new Error('imported data must be an array');
        //             }
        //         });
        //     } else {
        //         throw new Error('imported data must be an array');
        //     }
        // }

        // let rootEl = document.querySelectorAll(options.root.selector)[0];
        // if (rootEl) {
        //     let rootComponent = options.root(rootEl);
        //     // rootComponent.root.setAttribute('app-version', VERSION);
        // } else {
        //     console.warn('There is no root component');
        // }


        //TODO
        // customElements.define('expanding-list', ExpandingList, { extends: "ul" });

        // this.isReady.set(true);
    }

    // registerComponent(component) {
        //avoid repeated components
        // if (this.COMPONENTS.map(r => r.selector).indexOf(component.selector) > -1) {
        //     throw new Error('Duplicate declaration; ' + component.selector);
        // }


        // if (component.super && Object.is(component.super.prototype, Component.prototype)) {
        //     this.COMPONENTS.push(component);
        // } else {
        //     throw new Error(component.name + ' must me inherited from ComponentDecorator');
        // }
    // }

    registerDirective(directive) {
        //avoid repeated directives
        if(Object.is(directive.super.prototype, Directive.prototype)) {
            if (this.CUSTOM_DIRECTIVES.map(r => r.params.selector).indexOf(directive.params.selector) > -1) {
                throw new Error('Duplicate declaration; ' + directive.params.selector);
            }
            this.CUSTOM_DIRECTIVES.push(directive);
        } else {
            throw new Error(directive.name + ' must me inherited from DirectiveDecorator');
        }
    }


    loadStyle(styles) {
        if (styles) {
            let css = styles.toString(),
                style = document.createElement('style');

            style.type = 'text/css';
            if (style['styleSheet']) {
                style['styleSheet'].cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            // document.head.append(style);
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }
}

export default new API();