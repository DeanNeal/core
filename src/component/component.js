import { Model, Router, SmartObject } from '../core';
import {PRIVATES, DIRECTIVES_NAMES  } from './private';
import { Handlers } from './handlers';

export class Component {
    constructor(options = {}, custom = {}) {
        this.tpl = custom.template || 'Empty template';
        // this.styles = custom.styles;
        this.shadow = custom.shadow || false;
        this.type = custom.type;

        this.props = new SmartObject(options.props);
        this.root = null;


        Component.setPrivates.call(this, custom);

        this.ui = {};

        if (options.ce.getAttribute('frameworkFor')) {
            // console.warn('Foor loop is detected!')
        } else {
            options.ce ? Component.render.call(this, options.ce) : console.warn('Component data is expected. See your component constructor!');
            this.props.sub(r => {//console.log(this);
                // Handlers._for.call(this, PRIVATES._forArrays.get(this));
                // Handlers._props.call(this, PRIVATES._modelArrays.get(this));
                // Handlers._input.call(this, PRIVATES._inputArrays.get(this));
                // Handlers._props.call(this, PRIVATES._valueArrays.get(this));
                // Handlers._style.call(this, PRIVATES._styleArrays.get(this));
                // Handlers._if.call(this, PRIVATES._ifArrays.get(this));
                // Handlers._class.call(this, PRIVATES._classArrays.get(this));
                // Handlers._attr.call(this, PRIVATES._attrArrays.get(this));
                // Handlers._hostClasses.call(this, PRIVATES._hostClasses.get(this));
                // Handlers._hostStyles.call(this, PRIVATES._hostStyles.get(this));

                Handlers._for.call(this, PRIVATES.DIRECTIVES['ac-for'].get(this));
                Handlers._props.call(this, PRIVATES.DIRECTIVES['ac-value'].get(this));
                Handlers._style.call(this, PRIVATES.DIRECTIVES['ac-style'].get(this));
                Handlers._if.call(this, PRIVATES.DIRECTIVES['ac-if'].get(this));
                Handlers._class.call(this, PRIVATES.DIRECTIVES['ac-class'].get(this));

                this.onUpdate();
            });
        }

    }

    setSubscriptions(...rest) {
        PRIVATES._subscriptions.set(this, rest);
    }

    static setPrivates(custom) {
        for(let array in PRIVATES.DIRECTIVES){
            PRIVATES.DIRECTIVES[array].set(this, []);
        }
        // Privates._subscriptions.set(this, []);
        // Privates._eventsArray.set(this, []);
        // Privates._forArrays.set(this, []);
        // Privates._styleArrays.set(this, []);
        // Privates._routeArrays.set(this, []);
        // Privates._valueArrays.set(this, []);
        // Privates._inputArrays.set(this, []);
        // Privates._modelArrays.set(this, []);
        // Privates._ifArrays.set(this, []);
        // Privates._classArrays.set(this, []);
        // Privates._refArrays.set(this, []);
        // Privates._attrArrays.set(this, []);
        // Privates._outsideArrays.set(this, []);
        // Privates._onArrays.set(this, []);
        // Privates._patternArrays.set(this, []);


        // PRIVATES.DIRECTIVES._globalEvents.set(this, null);
        // PRIVATES.DIRECTIVES._hostEvents.set(this, custom.hostEvents);
        // PRIVATES.DIRECTIVES._hostClasses.set(this, custom.hostClasses);
        // PRIVATES.DIRECTIVES._hostStyles.set(this, custom.hostStyles);
    }

    preCompileTpl(html){
        DIRECTIVES_NAMES.forEach(directive=>{
            var stringToGoIntoTheRegex = '@'+directive.split('-')[1];
            var regex = new RegExp(stringToGoIntoTheRegex, "g");
            html = html.replace(regex, `ac-${directive.split('-')[1]}`)
        });
        return html 
    }

    static render(o) {
        this.onCreate();
        this.root = this.shadow ? o.createShadowRoot() : o;
        this.root.innerHTML = this.preCompileTpl(this.tpl);
        // this.loadStyle();
        
        DIRECTIVES_NAMES.forEach(directive=>{
           Handlers._init.call(this, this.root, directive);
        });

        Handlers._link.call(this, PRIVATES.DIRECTIVES['ac-link'].get(this));

        // Handlers._init.call(this, this.root, 'frameworkFor', '_forArrays');
        // Handlers._init.call(this, this.root, 'frameworkStyle', '_styleArrays');
        // Handlers._init.call(this, this.root, 'frameworkValue', '_valueArrays');
        // Handlers._init.call(this, this.root, 'frameworkInput', '_inputArrays');
        // Handlers._init.call(this, this.root, 'frameworkModel', '_modelArrays');
        // Handlers._init.call(this, this.root, 'frameworkIf', '_ifArrays');
        // Handlers._init.call(this, this.root, 'frameworkClass', '_classArrays');
        // Handlers._init.call(this, this.root, 'frameworkRef', '_refArrays');
        // Handlers._init.call(this, this.root, 'frameworkLink', '_routeArrays');
        // Handlers._init.call(this, this.root, 'frameworkAttr', '_attrArrays');
        // Handlers._init.call(this, this.root, 'frameworkOutside', '_outsideArrays');
        // Handlers._init.call(this, this.root, 'frameworkPattern', '_patternArrays');
        // Handlers._init.call(this, this.root, 'frameworkOn', '_onArrays');


        // Handlers._model.call(this, PRIVATES._modelArrays.get(this));
        // Handlers._outside.call(this, PRIVATES._outsideArrays.get(this));
        // Handlers._on.call(this, PRIVATES._onArrays.get(this));
        // Handlers._pattern.call(this, PRIVATES._patternArrays.get(this));
        // Handlers._elRef.call(this, PRIVATES._refArrays.get(this));

        // Handlers.eventListeners.call(this, this.root);
        // Handlers._hostEvents.call(this, PRIVATES._hostEvents.get(this));

        // if (PRIVATES._routeArrays.get(this).length || PRIVATES._forArrays.get(this).length) {
        //     this.routerSub = Router.onChange(() => {
        //         let a = this.root.querySelectorAll('[href]');
        //         a.forEach(item => {
        //             let fullRoute = Router.getCurrentFullPath();
        //             let attr = item.getAttribute('href');
        //             let setActive = attr === fullRoute.join('/') || (fullRoute[0] === attr && !item.getAttribute('frameworkLinkExact'))
        //             setActive ? item.classList.add('active') : item.classList.remove('active')
        //         });
        //     });
        // }
        // Handlers._link.call(this, PRIVATES._routeArrays.get(this));


        this.onInit();
    }

    INPUT() {}


    /***********************************************/

    static on(event, f) {
        this.root.addEventListener(event, (e) => {
            e.stopPropagation(); // to prevent further propagation
            f.call(this, e, e.detail);
        });
    }

    emit(event, data, parentName) {
        let myEvent = new CustomEvent(event, {
            detail: data,
            bubbles: true,
            cancelable: false
        });

        if (parentName) {
            this.getParentComponent(parentName).dispatchEvent(myEvent);
        } else {
            this.root.dispatchEvent(myEvent);
        }
    }

    // broadcast(q, name, data) {
    //     let myEvent = new CustomEvent(event, {
    //         detail: data,
    //         bubbles: true,
    //         cancelable: false
    //     });
    //     q.dispatchEvent(myEvent);
    // }

    static destroy() {
        Handlers.removeEventListeners.call(this, PRIVATES._eventsArray.get(this));
        // unsubscribe from global events
        if (PRIVATES._globalEvents.get(this)) {
            PRIVATES._globalEvents.get(this).unsubscribe();
        }
        //unsubscribe from router changes
        if (this.routerSub) {
            // console.log('destroyed', this);
            this.routerSub.unsubscribe();
        }
        PRIVATES._subscriptions.get(this).forEach(item => item.unsubscribe());
        this.onDestroy();
    }

    onCreate() {

    }

    onUpdate() {

    }

    onDestroy() {

    }

    onInit() {

    }

    onAttach() {

    }

    getElement(target) {
        return this.root.querySelectorAll(target);
    }

    getRoot() {
        return this.root;
    }

    getComponentVariable(variable, data) {
        if (data && typeof data !== 'object') return data;
        return variable.reduce((o, i, index) => {
            if (!o[i] && o[i] !== 0) { // in case when variable is undefined
                return index === variable.length - 1 ? null : {};
            } else {
                return o[i]
            }
        }, data || this)
    }

    getParentComponent(parentName) {
        let root = this.root;
        while (root && parentName !== root.constructor.name) {
            root = root.parentNode;
        }
        return root;
    }
}