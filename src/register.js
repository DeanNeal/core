import { RouteSwitcher, Http } from './core';
import { Component } from './component/component';

export function Register(options) {
    // console.time('modules')

    if (options.styles) {
        loadStyle(options.styles);
    }

    if (options.serverUrl) {
        if (typeof options.serverUrl === 'string') {
            Http.setServerUrl(options.serverUrl);
        } else {
            throw new Error('directives must be a string');
        }
    }

    if (options.stores) {
        if (options.stores instanceof Object) {
            Component.STORES = options.stores;
        } else {
            throw new Error('stores must be an object');
        }
    }

    Component.COMPONENTS = [];
    Component.CUSTOM_DIRECTIVES = []; // for custom directives
    RouteSwitcher.ROUTES = options.routes;
    Component.root = options.root;


    options.components.forEach(c=> registerComponent(c));

    if (options.directives) {
        if (options.directives instanceof Array) {
            // Component.CUSTOM_DIRECTIVES = options.directives;
            options.directives.forEach(d=> registerDirective(d));
        } else {
            throw new Error('directives must be an array');
        }
    }

    if (options.modules instanceof Array) {
        options.modules.forEach(module => {
            module.forEach(component => {
                registerComponent(component);
            });
        });
    } else {
        throw new Error('modules must be an array');
    }

    let rootEl = document.querySelectorAll(options.root.selector)[0];
    if (rootEl) {
        let rootComponent = new options.root(rootEl);
        rootComponent.root.setAttribute('ac-version', VERSION);
    } else {
        console.warn('There is no root component');
    }

}

function registerComponent(component) {
    //avoid repeated components
    if(Component.COMPONENTS.map(r=>r.selector).indexOf(component.selector) > -1) {
         throw new Error('Duplicate declaration; ' + component.selector);
    }

    if (component instanceof Component.constructor) {
        Component.COMPONENTS.push(component);
    } else {
        console.warn('Wrong type of component');
    }
}

function registerDirective(directive) {
    //avoid repeated directives
    directive.params.selector;
    if(Component.CUSTOM_DIRECTIVES.map(r=>r.params.selector).indexOf(directive.params.selector) > -1) {
         throw new Error('Duplicate declaration; ' + directive.params.selector);
    }

    Component.CUSTOM_DIRECTIVES.push(directive);
}


function loadStyle(styles) {
    if (styles) {
        let css = styles.toString(),
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        // document.head.append(style);
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}