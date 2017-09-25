import { Router, RouteSwitcher, ObservableModel } from '../core';
import { PRIVATES } from '../component/private';
import { Directives } from '../component/Directives';
import { DIRECTIVES_NAMES } from '../component/const/directives';
import { EVENTS_NAMES } from '../component/const/events';


export class Component {
    constructor(root, options) {
        this.root = root;
        this.tpl = options.template || 'Empty template';
        this.props = new ObservableModel(options.props);
        this.type = options.type;

        this.ui = {};
        this.root.COMPONENT = this;
        Component.setPrivates.call(this, options);

        if (this.root.getAttribute('ac-for')) {
            // console.warn('Foor loop is detected!')
        } else {
            this.render();
            this.listenToPropsChanges();
        }
    }

    static setPrivates(options) {
        for (let array in PRIVATES.DIRECTIVES) {
            PRIVATES.DIRECTIVES[array].set(this, []);
        }

        PRIVATES.EVENTS.set(this, []);
        PRIVATES.SUBSCRIPTIONS.set(this, []);
        PRIVATES.GLOBAL_EVENTS.set(this, null);
        PRIVATES.HOST.EVENTS.set(this, options.hostEvents);
        PRIVATES.HOST.CLASS.set(this, options.hostClasses);
        PRIVATES.HOST.STYLE.set(this, options.hostStyles);
    }

    render() {
        this.root.innerHTML = this.preCompileTpl(this.tpl);

        this.compile(); // render custom elements

        this.compileRouter(); // render main router
        // console.log(this);

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

    listenToPropsChanges() {
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

    compile() {
        Component.COMPONENTS.forEach(comp => {
            let component = this.root.querySelectorAll(comp.selector);
            if (component.length) {
                component.forEach(r => {
                    if (!r.COMPONENT) { // don't reinitialize
                        new comp.c(r);
                    }
                });
            }
        });
    }

    compileRouter() {
        let router = this.root.querySelectorAll('route-switcher')[0];
        if (router) {
            new RouteSwitcher(router);
        }
    }

    preCompileTpl(html) {
        this.compile(html);

        EVENTS_NAMES.forEach(event => {
            let stringToGoIntoTheRegex = '@' + event;
            let regex = new RegExp(stringToGoIntoTheRegex, "g");
            html = html.replace(regex, `ac-${event}`)
        });
        // html = this.htmlInterpolation(html);
        return html
    }

    setSubscriptions(...rest) {
        PRIVATES.SUBSCRIPTIONS.set(this, rest);
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

    getElement(target) {
        return this.root.querySelectorAll(target);
    }

    getRoot() {
        return this.root;
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

    getParentComponent(parentName) {
        let root = this.root;
        while (root && parentName !== root.constructor.name) {
            root = root.parentNode;
        }
        return root;
    }


    destroy() {
        // remove all event listeners
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

        //unsubscribe from components subscribers
        PRIVATES.SUBSCRIPTIONS.get(this).forEach(item => item.unsubscribe());

        this.root = null;
        this.onDestroy();
    }

    onDestroy() {

    }

    onUpdate() {

    }

    onInit() {

    }
}