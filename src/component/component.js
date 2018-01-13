import { Router, RouteSwitcher, ObservableBoolean, ObservableModel, TemplateEngine, Utils} from '../core';

import { PRIVATES } from '../component/private';
// import Interpolation from './interpolation/interpolation';
import { Directives } from '../component/Directives';
import { DIRECTIVES_NAMES } from '../component/const/directives';
import { EVENTS_NAMES } from '../component/const/events';
import API from'./../api';

export class Component {

    constructor(root, options) {
        Component.componentConstructor.call(this, root, options);
    }

    static componentConstructor(root, options) {
        this.root = root; //;console.log(root);

        let attrs = {};
        this.children = {};

        Object.defineProperty(this, 'options', {
            value: Object.assign({}, options),
            writable: false
        });

        Object.defineProperty(this, 'tpl', { value: options.template || 'Empty template', writable: false });
        // Object.defineProperty(this, 'props', { value: new ObservableModel(Object.assign({}, {}/*options.props*/)), writable: false });

        Object.defineProperty(this, 'type', { value: options.type, writable: false });


        Object.defineProperty(this, '$refs', { value: {}, writable: false });

        for (let i = 0; i < root.attributes.length; i++) {
            attrs[root.attributes[i].nodeName] = root.attributes[i].nodeValue
        }

        Object.defineProperty(this, '$attrs', { value: attrs, writable: false });

        this.root.COMPONENT = this;

        if (this instanceof Component.root.class) {
            Component.rootInstance = this;
        }

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
        // PRIVATES.GLOBAL_EVENTS.set(this, null);
        PRIVATES.HOST.EVENTS.set(this, options.hostEvents);
        PRIVATES.HOST.CLASS.set(this, options.hostClasses);
        PRIVATES.HOST.STYLE.set(this, options.hostStyles);
        PRIVATES.HOST.HIDDEN.set(this, {
            prop: options.hostHidden,
            comment: document.createComment(this.constructor.name),
            cached: this.root
        });
        PRIVATES.COMPUTED.set(this, options.computed);

        API.CUSTOM_DIRECTIVES.forEach((directive) => {
            if (!PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector]) {
                PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector] = new WeakMap();
            }
            PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector].set(this, []);
        });


        // console.log(PRIVATES.CUSTOM_DIRECTIVES, this);

        // this.$interpolationArray = [];
    }


    render() {
        this.root.innerHTML = this.preCompileTpl(this.tpl);
        this.onAttach();

        // if (this.options.interpolation) {
        //Interpolation.interpolationInit.call(this, this.root, this.$interpolationArray);
        // }

        this.compile(); // render custom elements
        this.compileRouter(); // render main router
        // console.log(this);

        //internal directives
        DIRECTIVES_NAMES.forEach(directive => {
            Directives._init.call(this, this.root, directive, PRIVATES.DIRECTIVES[directive]);
        });

        //events
        EVENTS_NAMES.forEach(directive => {
            Directives._initEvent.call(this, this.root, directive, PRIVATES.EVENTS);
        });

        //custom directives
        API.CUSTOM_DIRECTIVES.forEach((Directive) => {
            let array = Directives._init.call(this, this.root, Directive.params.selector, PRIVATES.CUSTOM_DIRECTIVES[Directive.params.selector]);
            if (array) {
                array.get(this).map(item => {
                    item.directive = new Directive(item.elem);
                });
            }
        });

        Directives._model.call(this, PRIVATES.DIRECTIVES['ac-model'].get(this));
        Directives._on.call(this, PRIVATES.DIRECTIVES['ac-on'].get(this));
        Directives._outside.call(this, PRIVATES.DIRECTIVES['ac-outside'].get(this));
        Directives._pattern.call(this, PRIVATES.DIRECTIVES['ac-pattern'].get(this));
        Directives._elRef.call(this, PRIVATES.DIRECTIVES['ac-ref'].get(this));
        Directives._events.call(this, PRIVATES.EVENTS.get(this));
        Directives._hostEvents.call(this, PRIVATES.HOST.EVENTS.get(this));

        Directives._formGroup.call(this, PRIVATES.DIRECTIVES['ac-form-group'].get(this));

        this.onInit();
    }

    listenToPropsChanges() {
        this.$propsSub = this.props.sub(r => {
            Directives._computed.call(this, PRIVATES.COMPUTED.get(this)); // should go first

            Directives._if.call(this, PRIVATES.DIRECTIVES['ac-if'].get(this));
            Directives._for.call(this, PRIVATES.DIRECTIVES['ac-for'].get(this));
            Directives._props.call(this, PRIVATES.DIRECTIVES['ac-value'].get(this));
            Directives._input.call(this, PRIVATES.DIRECTIVES['ac-input'].get(this));
            Directives._props.call(this, PRIVATES.DIRECTIVES['ac-model'].get(this));
            Directives._style.call(this, PRIVATES.DIRECTIVES['ac-style'].get(this));
            Directives._class.call(this, PRIVATES.DIRECTIVES['ac-class'].get(this));
            Directives._attr.call(this, PRIVATES.DIRECTIVES['ac-attr'].get(this));
            Directives._link.call(this, PRIVATES.DIRECTIVES['ac-link'].get(this));
            Directives._hostClasses.call(this, PRIVATES.HOST.CLASS.get(this));
            Directives._hostStyles.call(this, PRIVATES.HOST.STYLE.get(this));
            Directives._hostHidden.call(this, PRIVATES.HOST.HIDDEN.get(this));


            // Interpolation.interpolationRun.call(this, this.$interpolationArray);

            Directives._customDirective.call(this);
            this.onUpdate();
        });
    }

    compile() {
        API.COMPONENTS.forEach(comp => {
            let components = this.root.querySelectorAll(comp.selector);
            if (components.length) {
                components.forEach(r => {
                    if (!r.COMPONENT) { // don't reinitialize
                        let a = new comp(r, {}, this);
                        if (!this.children[a.constructor.name]) {
                            this.children[a.constructor.name] = [];
                            this.children[a.constructor.name].push(a);
                        }
                    }
                });
            }
        });
    }

    compileRouter() {
        let router = this.root.querySelectorAll('route-switcher')[0];
        if (router) {
            let newComp = new RouteSwitcher(router, this);
            if (!this.children[newComp.constructor.name]) {
                this.children[newComp.constructor.name] = [];
                this.children[newComp.constructor.name].push(newComp);
            }
        }
    }

    preCompileTpl(html) {
        this.compile(html);

        EVENTS_NAMES.forEach(event => {
            let stringToGoIntoTheRegex = '@' + event;
            let regex = new RegExp(stringToGoIntoTheRegex, "g");
            html = html.replace(regex, `ac-${event}`)
        });

        return html
    }

    setSubscriptions(...rest) {
        PRIVATES.SUBSCRIPTIONS.set(this, PRIVATES.SUBSCRIPTIONS.get(this).concat(rest));
    }

    getComponentVariable(variable, data) {
        if (data && typeof data !== 'object') return data;
        if(variable.length === 1 && variable[0] === 'this') return data || this.props.getData(); // entire props

        return variable.reduce((o, i, index) => {
            if (!o[i] && o[i] !== 0 && o[i] !== false) { // in case when variable is undefined
                return index === variable.length - 1 ? null : {};
            } else {
                return o[i]
            }
        }, data || this.props)
    }

    // setComponentVariable(string, value) {
    //     let params = ('props.' + string).split('.');
    //     let lastProp = params[params.length - 1];
    //     if (params.length > 1) {
    //         params.splice(-1, 1);
    //     }

    //     let target = params.reduce((o, i) => o[i], this);
    //     if (target === this.props) { // use instanceof
    //         // target._data[lastProp] = value;
    //         this.props.set(lastProp, value);
    //     } else {
    //         target[lastProp] = value;
    //         this.props.set(this.props.getData());
    //     }
    // }
    setComponentVariable(string, value, loopIterator, collectionName, data) {
        let params = string.split('.'); /*data ? string.split('.') : ('props.' + string).split('.');*/
        let lastProp = params[params.length - 1];


        if(params[0] === loopIterator) {
            if(params.length > 1){
                data[lastProp] = value;
                this.props._callAll();
            } 
        } else {
            let params = ('props.' + string).split('.');
            if (params.length > 1) {
                params.splice(-1, 1);
            }

           let target = params.reduce((o, i) => o[i], this);
           if (target === this.props) { // use instanceof
               // target._data[lastProp] = value;
               this.props.set(lastProp, value);
           } else {
               target[lastProp] = value;
               this.props.set(this.props.getData());
           } 
        }

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
        } else if (this.root) {
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
        this.onDestroy();
        if (this.$propsSub) {
            this.$propsSub.unsubscribe();
        }

        Directives.removeEventListeners.call(this, PRIVATES.EVENTS.get(this));

        //unsubscribe from components subscribers
        PRIVATES.SUBSCRIPTIONS.get(this).forEach(item => item.unsubscribe());

        // this.root.remove();
        this.root = null;
    }

    INPUT() {

    }

    onDestroy() {

    }

    onAttach() {

    }

    onUpdate() {

    }

    onInit() {

    }
}