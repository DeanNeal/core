import { RouteSwitcher, Http} from './core';
import {Component} from './component/component';

export function Register(options) {
    // console.time('modules')

    if (options.styles) {
        loadStyle(options.styles);
    }

    if (options.serverUrl) {
        Http.setServerUrl(options.serverUrl);
    }
    Component.COMPONENTS = options.components;
    RouteSwitcher.ROUTES = options.routes;

    options.modules.forEach(module => {
        module.forEach(component => {
             registerComponent(component);
        });
    });

    let rootEl = document.querySelectorAll(options.root.selector)[0];
    if(rootEl){ 
        new options.root.c(rootEl);
    } else {
        console.warn('There is no root component');
    }

}

function registerComponent(component) {
    if (component.c instanceof Component.constructor) {
        Component.COMPONENTS.push(component);
    } else {
        console.warn('Wrong type of component');
    }
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
        document.head.append(style);
    }
}