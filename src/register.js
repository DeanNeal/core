import { RouteSwitcher, Component, GlobalData, Http} from './core';
import {RegisterRouteElement} from './router/router-switcher';

export function Register(options) {
    // console.time('modules')
    if (!options.routes) {
        console.warn('You should set routes!');
    } else {
        new RegisterRouteElement(options.routes);
    }

    if (options.styles) {
        loadStyle(options.styles);
    }

    if(options.serverUrl){
        Http.setServerUrl(options.serverUrl);
    }

    options.components.forEach(component => {
        registerComponent(component);
    });

    options.modules.forEach(module => {
        module.forEach(component => {
            registerComponent(component);
        });
    });

    GlobalData.set('appIsReady', true);
    // console.timeEnd('modules')
}

function registerComponent(component) {
    if (component.c instanceof Component.constructor) {
        RegisterElement(component);
    } else {
        console.warn('Wrong type of component');
    }
}

export function RegisterElement(comp) {
    let ElemProto = Object.create(HTMLElement.prototype);
    let elem;
    ElemProto.createdCallback = function(params) {
        let attrs = {};
        for (let i = 0; i < this.attributes.length; i++) {
            attrs[this.attributes[i].nodeName] = this.attributes[i].nodeValue
        }

        //temporary solution
        let props = window.temporaryObj || {};
        delete window.temporaryObj;
        elem = new comp.c({ ce: this, attrs, props });
        this.COMPONENT = elem;
    };

    ElemProto.detachedCallback = function() {
        // elem.destroy();
        //  elem = undefined;
        Component.destroy.call(this.COMPONENT);
    };

    ElemProto.attachedCallback = function() {
        elem.onAttach();
        // this.COMPONENT.onAttach();
    };

    ElemProto.attributeChangedCallback = function(a, b, c) {
        // elem.props.update(a, c);
    };

    document.registerElement(comp.selector, {
        prototype: ElemProto
    });
}


// let elem;
// class BasicElement extends HTMLElement {
//     constructor(params) {
//         super(params);
//     }
//     connectedCallback(params) {
//         // this.textContent = 'Just a basic custom element.';
//         console.log(params);
//         let attrs = {};
//         for (let i = 0; i < this.attributes.length; i++) {
//             attrs[this.attributes[i].nodeName] = this.attributes[i].nodeValue
//         }
//
//         let test = window.temporaryObj || {};// Object.assign({}, window.temporaryObj);
//         delete window.temporaryObj;
//         elem = new comp.c({ce: this, attrs: attrs, props: test});
//         this.COMPONENT = elem;
//     }
//
//     disconnectedCallback() {
//         this.COMPONENT.destroy();
//     }
//
//     attributeChangedCallback(attrName, oldVal, newVal) {
//     }
// }
// customElements.define(comp.selector, BasicElement);




function loadStyle(styles) {
    if (styles) {
        let css = styles.toString(),
            //head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.head.append(style);
    }
}