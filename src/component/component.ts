import { Router, RouteSwitcher, TemplateEngine, Utils } from '../core';

import Interpolation from './interpolation/interpolation';
import { Directives } from './directives';
import { DIRECTIVES_NAMES } from './const/directives';
import { EVENTS_NAMES } from './const/events';
import API from '../api';


export class Component  {
    private root: HTMLElement;
    private children = {};
    private tpl;
    private $refs = {};
    private $propsSub;
    private $attrs = {};
    private _props;
    private _directives = {};
    private _events = [];
    private _interpolation = [];
    private _subscriptions = [];
    private _host = {
        events: [],
        class: [],
        style: [],
        hidden: []
    };
    private _computed = [];
    private _custom_directive = [];

    // constructor(root, options) {
    //     // this.componentConstructor(root, options);
    // }

    componentConstructor(root: HTMLElement, options: any, extraData?) {
        Object.defineProperty(this, 'root', { value: root, writable: false });
        Object.defineProperty(this, 'children', { value: {}, writable: false });
        Object.defineProperty(this, 'tpl', { value: options.template, writable: false });
        Object.defineProperty(this, '$attrs', { value: {}, writable: true });
        Object.defineProperty(this, '_host', { value: {
            events: [],
            class: [],
            style: [],
            hidden: []
        }, writable: true });
        Object.defineProperty(this, '_events', { value: [], writable: true });
        Object.defineProperty(this, '_interpolation', { value: [], writable: true });
        Object.defineProperty(this, '_subscriptions', { value: [], writable: true });
        Object.defineProperty(this, '_computed', { value: [], writable: true });
        Object.defineProperty(this, '_custom_directive', { value: [], writable: true });
        
        let attrs = {};

        for (let i = 0; i < root.attributes.length; i++) {
            attrs[root.attributes[i].nodeName] = root.attributes[i].nodeValue
        }

        if (attrs['bind-form-control'] && attrs['bind-model']) {
            throw new Error('Using of bind-model inside bind-form-group is forbidden');
        }

        this.$attrs = attrs;

        this.root['COMPONENT'] = this;

        // if (this instanceof API.rootComponent.class) {
        //     API.rootInstance = this;
        // }

        this.setPrivates(options);


        if (this.root.getAttribute('bind-for')) {
            // console.warn('Foor loop is detected!')
        } else {
            this.render();
            this.listenToPropsChanges();
            this.onInit(extraData);
        }
    }

    setPrivates(options) {
        const directives = {};

        DIRECTIVES_NAMES.forEach(directive => {
            directives[directive.name] = [];
        });

        Object.defineProperty(this, '_directives', { value: directives, writable: false });

        // this._events = [];
        // this._subscriptions = [];
        // PRIVATES.GLOBAL_EVENTS.set(this, null);
        this._host.events = options.hostEvents;
        this._host.class = options.hostClasses;
        this._host.style = options.hostStyles;
        this._host.hidden = [{
            prop: options.hostHidden,
            comment: document.createComment(this.constructor.name),
            cached: this['root']
        }];
        
        this._interpolation = [];//.set(this, []);
        
        this._computed = options.computed;

        API.CUSTOM_DIRECTIVES.forEach((directive) => {
            if (!this._custom_directive[directive.params.selector]) {
                this._custom_directive[directive.params.selector] = new WeakMap();
            }
            this._custom_directive[directive.params.selector].set(this, []);
        });      
    }

    render() {
        // this.root.innerHTML = this.preCompileTpl(this.tpl);
        this.onAttach();

        // this.compile(); // render custom elements
        // this.compileRouter(); // render main router
        // console.log(this);

        Directives._init.call(this, this.root, 'bind-for', this._directives['for']);// exclude interpolation from bind-for


        Interpolation._init.call(this, this.root, this._interpolation);

        //internal directives
        DIRECTIVES_NAMES.forEach(directive => {
            if (directive.name !== 'for') {
                // Directives._init.call(this, this.root, directive.alias, PRIVATES.DIRECTIVES[directive.name]);
                Directives._init.call(this, this.root, directive.alias, this._directives[directive.name]);
            }
        });

        //events
        EVENTS_NAMES.forEach(event => {
            Directives._initEvent.call(this, this.root, event, this._events);
        });

        //custom directives
        API.CUSTOM_DIRECTIVES.forEach((Directive) => {
            let array = Directives._init.call(this, this.root, Directive.params.selector, this._custom_directive[Directive.params.selector]);
            if (array) {
                array.get(this).map(item => {
                    item.directive = new Directive(item.elem);
                });
            }
        });

        Directives._dropdown.call(this, this._directives['dropdown']);
        Directives._lazy.call(this, this._directives['lazy-load']);

        Directives._model.call(this, this._directives['model']);
        Directives._on.call(this, this._directives['on']);
        Directives._outside.call(this, this._directives['outside']);
        Directives._pattern.call(this, this._directives['pattern']);//TODO
        Directives._elRef.call(this, this._directives['ref']);
        Directives._events.call(this, this._events);
        Directives._hostEvents.call(this, this._host.events);

        Directives._formGroup.call(this, this._directives['form-group']);


        // this.onInit();
    }

    listenToPropsChanges() {
        const $propsSub = this._props.sub(r => {
            Directives._computed.call(this, this._computed); // should go first

            Directives._if.call(this, this._directives['if']);
            Directives._for.call(this, this._directives['for']);
            Directives._value.call(this, this._directives['value']);
            Directives._input.call(this, this._directives['input']);
            Directives._value.call(this, this._directives['model']);
            Directives._style.call(this, this._directives['style']);
            Directives._class.call(this, this._directives['class']);
            Directives._attr.call(this, this._directives['attr']);
            Directives._link.call(this, this._directives['link']);
            Directives._hostClasses.call(this, this._host.class);
            Directives._hostStyles.call(this, this._host.style);
            Directives._hostHidden.call(this, this._host.hidden);

            Interpolation._update.call(this, this._interpolation);

            Directives._customDirective.call(this);
            this.onUpdate();
        });

        Object.defineProperty(this, '$propsSub', { value: $propsSub, writable: false });
    }

    compile() {
        API.COMPONENTS.forEach(comp => {
            let components = this.root.querySelectorAll(comp.selector);
            if (components.length) {
                components.forEach(r => {
                    if (!r.COMPONENT) { // don't reinitialize
                        let a = comp(r, {}, this);
                        if (!this.children[a.constructor.name]) {
                            this.children[a.constructor.name] = [];
                            this.children[a.constructor.name].push(a);
                        }
                    }
                });
            }
        });
    }

    // compileRouter() {
    //     let router = this.root.querySelectorAll('route-switcher')[0];
    //     if (router) {
    //         let newComp = new RouteSwitcher(router, this);
    //         if (!this.children[newComp.constructor.name]) {
    //             this.children[newComp.constructor.name] = [];
    //             this.children[newComp.constructor.name].push(newComp);
    //         }
    //     }
    // }

    setSubscriptions(...rest) {
        this._subscriptions = this._subscriptions.concat(rest);
    }

    getComponentVariable(variable, data) {
        if (data && typeof data !== 'object') return data;
        if (variable.length === 1 && variable[0] === 'this') return data || this._props.getData(); // entire props

        return variable.reduce((o, i, index) => {
            if (!o[i] && o[i] !== 0 && o[i] !== false) { // in case when variable is undefined
                return index === variable.length - 1 ? null : {};
            } else {
                return o[i]
            }
        }, data || this._props)
    }

    getAllVariables() {
        return Object.keys(this._props.getData());
    }

    getPropsByScope(value, scope, loopParams) {
        let r;
        let variable = value.split('.')
        let listOfVariables = this.getAllVariables();
        let listOfVariablesValues = listOfVariables.map(r => this._props.get(r));

        if (loopParams && loopParams.iterator) {
            listOfVariables.push(loopParams.iterator);
            listOfVariablesValues.push(scope);

            if (loopParams.index || loopParams.index === 0) {
                if (listOfVariables.indexOf('index') > -1) {
                    listOfVariablesValues[listOfVariables.indexOf('index')] = loopParams.index;
                } else {
                    listOfVariables.push('index');
                    listOfVariablesValues.push(loopParams.index);
                }
            } else {
                listOfVariables.push('index'); // if index doesn't exist
            }
            if (loopParams.key) {
                listOfVariables.push('key');
                listOfVariablesValues.push(loopParams.key);
            }
        }

        try {
            r = new Function(listOfVariables.toString(), 'return ' + value).apply(this, listOfVariablesValues);
        } catch (err) {
            // throw new Error(err + '; ' + this);
            // console.warn(err + '; ' + this);
        }

        return r;
    }

    setComponentVariable(string, value, loopParams, collectionName, data) {
        let params = string.split('.'); /*data ? string.split('.') : ('props.' + string).split('.');*/
        let lastProp = params[params.length - 1];


        if (params[0] === loopParams) {
            if (params.length > 1) {
                data[lastProp] = value;
                this._props._callAll();
            }
        } else {
            let params = ('props.' + string).split('.');
            if (params.length > 1) {
                params.splice(-1, 1);
            }

            let target = params.reduce((o, i) => o[i], this);
            if (target === this._props) { // use instanceof
                // target._data[lastProp] = value;
                this._props.set(lastProp, value);
            } else {
                target[lastProp] = value;
                this._props.set(this._props.getData());
            }
        }

    }

    getElement(target) {
        return this.root.querySelectorAll(target);
    }

    getRoot() {
        return this.root;
    }

    emit(event, data /*parentName*/) {
        let myEvent = new CustomEvent(event, {
            detail: data,
            bubbles: true,
            cancelable: false
        });

        // if (parentName) {
        //     this.getParentComponent(parentName).dispatchEvent(myEvent);
        // } else 
        if (this.root) {
            this.root.dispatchEvent(myEvent);
        }
    }

    // getParentComponent(parentName) {
    //     let root = this.root;
    //     while (root && parentName !== root.constructor.name) {
    //         root = root.parentNode;
    //     }
    //     return root;
    // }


    destroy() {
        // remove all event listeners
        this.onDestroy();
        if (this.$propsSub) {
            this.$propsSub.unsubscribe();
        }

        Directives.removeEventListeners.call(this, this._events);

        //unsubscribe from components subscribers
        this._subscriptions.forEach(item => item.unsubscribe());
    }

    INPUT() {

    }

    _onModelChange() {

    }

    onDestroy() {

    }

    onAttach() {

    }

    onUpdate() {

    }

    onInit(data?) {

    }
}