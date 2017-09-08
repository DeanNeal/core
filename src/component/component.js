import {Model, Router, SmartObject} from '../core';
import Privates from './private';
import {Handlers} from './handlers';

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
            this.props.sub(r => {
                Handlers._for.call(this, Privates._forArrays.get(this));
                Handlers._props.call(this, Privates._modelArrays.get(this));
                Handlers._input.call(this, Privates._inputArrays.get(this));
                Handlers._props.call(this, Privates._valueArrays.get(this));
                Handlers._style.call(this, Privates._styleArrays.get(this));
                Handlers._if.call(this, Privates._ifArrays.get(this));
                Handlers._class.call(this, Privates._classArrays.get(this));
                Handlers._attr.call(this, Privates._attrArrays.get(this));
                Handlers._hostClasses.call(this, Privates._hostClasses.get(this));
                Handlers._hostStyles.call(this, Privates._hostStyles.get(this));
                this.onUpdate();
            });
        }

    }

    setSubscriptions(...rest) {
        Privates._subscriptions.set(this, rest);
    }

    static setPrivates(custom) {
        Privates._subscriptions.set(this, []);
        Privates._eventsArray.set(this, []);
        Privates._forArrays.set(this, []);
        Privates._styleArrays.set(this, []);
        Privates._routeArrays.set(this, []);
        Privates._valueArrays.set(this, []);
        Privates._inputArrays.set(this, []);
        Privates._modelArrays.set(this, []);
        Privates._ifArrays.set(this, []);
        Privates._classArrays.set(this, []);
        Privates._refArrays.set(this, []);
        Privates._attrArrays.set(this, []);
        Privates._outsideArrays.set(this, []);
        Privates._patternArrays.set(this, []);
        Privates._globalEvents.set(this, null);
        Privates._hostEvents.set(this, custom.hostEvents);
        Privates._hostClasses.set(this, custom.hostClasses);
        Privates._hostStyles.set(this, custom.hostStyles);
    }

    static render(o) {
        this.onCreate();
        this.root = this.shadow ? o.createShadowRoot() : o;
        this.root.innerHTML = this.tpl;
        // this.loadStyle();

        Handlers._init.call(this, this.root, 'frameworkFor', '_forArrays');
        Handlers._init.call(this, this.root, 'frameworkStyle', '_styleArrays');
        Handlers._init.call(this, this.root, 'frameworkValue', '_valueArrays');
        Handlers._init.call(this, this.root, 'frameworkInput', '_inputArrays');
        Handlers._init.call(this, this.root, 'frameworkModel', '_modelArrays');
        Handlers._init.call(this, this.root, 'frameworkIf', '_ifArrays');
        Handlers._init.call(this, this.root, 'frameworkClass', '_classArrays');
        Handlers._init.call(this, this.root, 'frameworkRef', '_refArrays');
        Handlers._init.call(this, this.root, 'frameworkLink', '_routeArrays');
        Handlers._init.call(this, this.root, 'frameworkAttr', '_attrArrays');
        Handlers._init.call(this, this.root, 'frameworkOutside', '_outsideArrays');
        Handlers._init.call(this, this.root, 'frameworkPattern', '_patternArrays');

        for (let elem of this.getElement(`[frameworkSubscribe]`)) {
            let listeners = elem.getAttribute('frameworkSubscribe');
            listeners = listeners.split(',');
            if (listeners.length) {
                listeners.forEach(listener => {
                    listener = listener.replace(/ +/g, "");
                    Component.on.call(this, listener.split(':')[0], this[listener.split(':')[1]]);
                });
            }
            elem.removeAttribute('frameworkSubscribe');
        }

        Handlers._model.call(this, Privates._modelArrays.get(this));
        Handlers._outside.call(this, Privates._outsideArrays.get(this));
        Handlers._pattern.call(this, Privates._patternArrays.get(this));
        Handlers._elRef.call(this, Privates._refArrays.get(this));

        Handlers.eventListeners.call(this, this.root);
        Handlers._hostEvents.call(this, Privates._hostEvents.get(this));

        if (Privates._routeArrays.get(this).length || Privates._forArrays.get(this).length) {
            this.routerSub = Router.onChange(() => {
                let a = this.root.querySelectorAll('[href]');
                a.forEach(item => {
                    let fullRoute = Router.getCurrentFullPath();
                    let attr = item.getAttribute('href');
                    let setActive = attr === fullRoute.join('/') || (fullRoute[0] === attr && !item.getAttribute('frameworkLinkExact'))
                    setActive ? item.classList.add('active') : item.classList.remove('active')
                });
            });
        }
        Handlers._link.call(this, Privates._routeArrays.get(this));

        this.onInit();
    }

    INPUT() {
    }


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
        Handlers.removeEventListeners.call(this, Privates._eventsArray.get(this));
        // unsubscribe from global events
        if (Privates._globalEvents.get(this)) {
            Privates._globalEvents.get(this).unsubscribe();
        }
        //unsubscribe from router changes
        if (this.routerSub) {
            // console.log('destroyed', this);
            this.routerSub.unsubscribe();
        }
        Privates._subscriptions.get(this).forEach(item => item.unsubscribe());
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
        return variable.reduce((o, i) => o[i], data || this)
    }

    getParentComponent(parentName) {
        let root = this.root;
        while (root && parentName !== root.constructor.name) {
            root = root.parentNode;
        }
        return root;
    }
}
