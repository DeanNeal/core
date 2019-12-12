// import { Router, RouteSwitcher, TemplateEngine, Utils } from '../core';

import Interpolation from './interpolation/interpolation';
import { Directives } from './directives';
import { DIRECTIVES_NAMES } from './const/directives';
import { EVENTS_NAMES } from './const/events';
import API from '../api';

interface IOptions {
    template: string;
    hostListeners: { [key: string]: any };
    hostAttrs: { [key: string]: any };
}

export class BaseComponent {
    private root: HTMLElement;
    private host: HTMLElement;
    public $refs: { [key: string]: HTMLElement } = {};
    // private _props;
    private _directives = {};
    private _events = [];
    private _interpolation = [];
    private _subscriptions = [];
    private _hostBinding: { [key: string]: any } = {
        events: [],
        attr: []
    };

    private _custom_directive = [];

    constructor() {

    }

    componentConstructor(root: HTMLElement, options: IOptions) {
        Object.defineProperty(this, 'root', { value: root, writable: false });
        Object.defineProperty(this, 'host', {
            get: () => {
                return this.root instanceof DocumentFragment ? this.root['host'] : this.root;
            }
        });


        Object.defineProperty(this, '$refs', { value: {}, writable: false });
        Object.defineProperty(this, '_hostBinding', {
            value: {
                events: [],
                attr: []
            }, writable: true
        });
        Object.defineProperty(this, '_events', { value: [], writable: true });
        Object.defineProperty(this, '_interpolation', { value: [], writable: true });
        Object.defineProperty(this, '_subscriptions', { value: [], writable: true });

        Object.defineProperty(this, '_custom_directive', { value: [], writable: true });

        Object.defineProperty(this, 'modelChangeListener', { value: this.modelChangeListener.bind(this), writable: false });
        Object.defineProperty(this, 'inputListener', { value: this.inputListener.bind(this), writable: false });
        Object.defineProperty(this, 'destroyListener', { value: this.destroyListener.bind(this), writable: false });

        Object.defineProperty(this, '$inputParams', { value: [], writable: false });


        let attrs = {};

        if (root.attributes) {
            for (let i = 0; i < root.attributes.length; i++) {
                attrs[root.attributes[i].nodeName] = root.attributes[i].nodeValue
            }

            if (attrs['bind-form-control'] && attrs['bind-model']) {
                throw new Error('Using of bind-model inside bind-form-group is forbidden');
            }


            Object.defineProperty(this, '$attrs', { value: attrs, writable: false, enumerable: false });
        }


        this.setPrivates(options);

        this.addListeners();

        this.initDirectives();

        this.onInit();

        this.changeDetection();
    }

    setPrivates(options) {
        const directives = {};

        DIRECTIVES_NAMES.forEach(directive => {
            directives[directive.name] = [];
        });

        Object.defineProperty(this, '_directives', { value: directives, writable: false });

        this._hostBinding.events = options.hostListeners;

        for (let key in options.hostAttrs) {
            this._hostBinding.attr[key] = {
                fn: options.hostAttrs[key],
                prevValue: undefined
            };
        }

        this._interpolation = [];

        API.CUSTOM_DIRECTIVES.forEach((directive) => {
            if (!this._custom_directive[directive.params.selector]) {
                this._custom_directive[directive.params.selector] = new WeakMap();//TODO
            }
            this._custom_directive[directive.params.selector].set(this, []);
        });
    }

    initDirectives() {
        this.onAttach();

        Directives._init.call(this, this.root, 'bind-for', this._directives['for']);// exclude interpolation, params from bind-for

        Interpolation._init.call(this, this.root, this._interpolation);

        //internal directives
        DIRECTIVES_NAMES.forEach(directive => {
            if (directive.name !== 'for' ) {
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

        Directives._outside.call(this, this._directives['outside']);
        Directives._pattern.call(this, this._directives['pattern']);//TODO
        Directives._elRef.call(this, this._directives['ref']);
        Directives._events.call(this, this._events);
        Directives._hostEvents.call(this, this._hostBinding.events);

        Directives._formGroup.call(this, this._directives['form-group']);

        Directives._on.call(this, this._directives['on']);
    }

    addListeners() {
        this.host.addEventListener('model-change', this.modelChangeListener, false);
        this.host.addEventListener('input-params', this.inputListener, false);
        this.host.addEventListener('destroy', this.destroyListener, false);
    }

    inputListener(e) {

        for (let key in e.detail) {
            this[key] = e.detail[key];
        }

    }

    modelChangeListener(e) {
        // this._props.set(e.detail);
    }

    destroyListener() {
        this.destroy();
    }

    removeListeners() {
        this.host.removeEventListener('model-change', this.modelChangeListener, false);
        this.host.removeEventListener('input-params', this.inputListener, false);
        this.host.removeEventListener('destroy', this.destroyListener, false);
    }

    changeDetection() {
        Directives._if.call(this, this._directives['if']);
        Directives._for.call(this, this._directives['for']);
        Directives._value.call(this, this._directives['value']);
        Directives._input.call(this, this._directives['params']);
        Directives._value.call(this, this._directives['model']);
        Directives._style.call(this, this._directives['style']);
        Directives._class.call(this, this._directives['class']);
        Directives._attr.call(this, this._directives['attr']);
        Directives._link.call(this, this._directives['link']);
        Directives._hostAttr.call(this, this._hostBinding.attr);

        Interpolation._update.call(this, this._interpolation);

        Directives._customDirective.call(this);
        this.onUpdate();
    }

    setSubscriptions(...rest) {
        this._subscriptions = this._subscriptions.concat(rest);
    }

    getComponentVariable(variable, data) {
        debugger
        // if (data && typeof data !== 'object') return data;
        // if (variable.length === 1 && variable[0] === 'this') return data || this._props.getData(); // entire props

        // return variable.reduce((o, i, index) => {
        //     if (!o[i] && o[i] !== 0 && o[i] !== false) { // in case when variable is undefined
        //         return index === variable.length - 1 ? null : {};
        //     } else {
        //         return o[i]
        //     }
        // }, data || this._props)
    }

    getAllVariables() {
        // return Object.keys(this._props.getData());
        const getters: any[] = Reflect.ownKeys(this.constructor.prototype).filter(name => {
            const getter = Reflect.getOwnPropertyDescriptor(this.constructor.prototype, name)["get"];

            return typeof getter === "function";
        });

        return Object.keys(this).concat(getters);
    }

    getPropsByScope(value, scope, loopParams) {
        let r;
        let variable = value.split('.')
        let listOfVariables = this.getAllVariables();
        let listOfVariablesValues = listOfVariables.map(r => this[r]);

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
        // let params = string.split('.'); /*data ? string.split('.') : ('props.' + string).split('.');*/
        // let lastProp = params[params.length - 1];


        // if (params[0] === loopParams) {
        //     if (params.length > 1) {
        //         data[lastProp] = value;
        //         // this._props._callAll();
        //     }
        // } else {

        // let params = ('_props.' + string).split('.');
        // if (params.length > 1) {
        //     params.splice(-1, 1);
        // }

        // let target = params.reduce((o, i) => o[i], this);

        // if (target === this._props) { // use instanceof
        //     // target._data[lastProp] = value;
        //     // this._props.set(lastProp, value);
        //     this[lastProp] = value;
        // } else {
        //     target[lastProp] = value;
        //     this._props.set(this._props.getData());
        // }
        // let newValue;

        if (typeof value === 'string') value = `'${value}'`;

        const fn = `this.${string}=${value}`;

        new Function(``, fn).apply(this, []);
        // }
    }

    destroy() {
        this.onDestroy();

        // remove all event listeners
        Directives.removeEventListeners.call(this, this._events);

        //unsubscribe from components subscribers
        this._subscriptions.forEach(item => item.unsubscribe());

        this.removeListeners();

        this.root.innerHTML = null;
        // if (this.root instanceof DocumentFragment === false) {

        // }
    }

    _onModelChange() {

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