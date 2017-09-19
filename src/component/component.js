import { Model, Router, SmartObject } from '../core';
import { PRIVATES } from './private';
import { DIRECTIVES_NAMES } from './const/directives';
import { EVENTS_NAMES } from './const/events';
import { Directives } from './Directives';

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
        // console.log(options.ce.attributes);
        if (options.ce.getAttribute('ac-for')) {
            // console.warn('Foor loop is detected!')
        } else {
            options.ce ? Component.render.call(this, options.ce) : console.warn('Component data is expected. See your component constructor!');
            this.props.sub(r => {
                Directives._for.call(this, PRIVATES.DIRECTIVES['ac-for'].get(this));
                Directives._props.call(this, PRIVATES.DIRECTIVES['ac-value'].get(this));
                Directives._input.call(this, PRIVATES.DIRECTIVES['ac-input'].get(this));
                Directives._props.call(this, PRIVATES.DIRECTIVES['ac-model'].get(this));
                Directives._style.call(this, PRIVATES.DIRECTIVES['ac-style'].get(this));
                Directives._if.call(this, PRIVATES.DIRECTIVES['ac-if'].get(this));
                Directives._class.call(this, PRIVATES.DIRECTIVES['ac-class'].get(this));
                Directives._attr.call(this, PRIVATES.DIRECTIVES['ac-attr'].get(this));
                Directives._link.call(this, PRIVATES.DIRECTIVES['ac-link'].get(this));
                Directives._hostClasses.call(this, PRIVATES.HOST.CLASS.get(this));
                Directives._hostStyles.call(this, PRIVATES.HOST.STYLE.get(this));
                this.onUpdate();
            });
        }

    }

    setSubscriptions(...rest) {
        PRIVATES.SUBSCRIPTIONS.set(this, rest);
    }

    static setPrivates(custom) {
        for (let array in PRIVATES.DIRECTIVES) {
            PRIVATES.DIRECTIVES[array].set(this, []);
        }

        PRIVATES.EVENTS.set(this, []);
        PRIVATES.SUBSCRIPTIONS.set(this, []);
        PRIVATES.GLOBAL_EVENTS.set(this, null);
        PRIVATES.HOST.EVENTS.set(this, custom.hostEvents);
        PRIVATES.HOST.CLASS.set(this, custom.hostClasses);
        PRIVATES.HOST.STYLE.set(this, custom.hostStyles);
    }

    preCompileTpl(html) {console.time('111');
        EVENTS_NAMES.forEach(event=>{
            let stringToGoIntoTheRegex = '@'+event;
            let regex = new RegExp(stringToGoIntoTheRegex, "g");
            html = html.replace(regex, `ac-${event}`)
        });
        return html
    }

    static render(o) {
        this.onCreate();
        this.root = this.shadow ? o.createShadowRoot() : o;
        this.root.innerHTML = this.preCompileTpl(this.tpl);
        // this.loadStyle();

        DIRECTIVES_NAMES.forEach(directive => {
            Directives._init.call(this, this.root, directive, PRIVATES.DIRECTIVES[directive]);
        });

        EVENTS_NAMES.forEach(directive => {
            Directives._initEvent.call(this, this.root, directive, PRIVATES.EVENTS);
        });

        Directives._model.call(this, PRIVATES.DIRECTIVES['ac-model'].get(this));
        Directives._on.call(this, PRIVATES.DIRECTIVES['ac-on'].get(this));
        Directives._outside.call(this, PRIVATES.DIRECTIVES['ac-outside'].get(this));
        Directives._pattern.call(this, PRIVATES.DIRECTIVES['ac-pattern'].get(this));
        Directives._elRef.call(this, PRIVATES.DIRECTIVES['ac-ref'].get(this));
        Directives._events.call(this, PRIVATES.EVENTS.get(this));
        Directives._hostEvents.call(this, PRIVATES.HOST.EVENTS.get(this));

        if (PRIVATES.DIRECTIVES['ac-link'].get(this).length || PRIVATES.DIRECTIVES['ac-for'].get(this).length) {
            this.routerSub = Router.onChange(() => {
                let a = this.root.querySelectorAll('[href]');
                a.forEach(item => {
                    let fullRoute = Router.getCurrentFullPath();
                    let attr = item.getAttribute('href');
                    let setActive = attr === fullRoute.join('/') || (fullRoute[0] === attr && !item.getAttribute('ac-link-exact'))
                    setActive ? item.classList.add('active') : item.classList.remove('active')
                });
            });
        }
        this.onInit();
    }

    INPUT() {}


    /***********************************************/

    // static on(event, f) {
    //     this.root.addEventListener(event, (e) => {
    //         e.stopPropagation(); // to prevent further propagation
    //         f.call(this, e, e.detail);
    //     });
    // }

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
        Directives.removeEventListeners.call(this, PRIVATES.EVENTS.get(this));
        // unsubscribe from global events
        if (PRIVATES.GLOBAL_EVENTS.get(this)) {
            PRIVATES.GLOBAL_EVENTS.get(this).unsubscribe();
        }
        //unsubscribe from router changes
        if (this.routerSub) {
            // console.log('destroyed', this);
            this.routerSub.unsubscribe();
        }
        PRIVATES.SUBSCRIPTIONS.get(this).forEach(item => item.unsubscribe());
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