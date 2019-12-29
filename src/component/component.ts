// import { Router, RouteSwitcher, TemplateEngine, Utils } from '../core';

import Interpolation from './interpolation/interpolation';
import { Directives } from './directives';
import { DIRECTIVES_NAMES } from './const/directives';
import { EVENTS_NAMES } from './const/events';
import API from '../api';
import { getFilteredProperties } from './../decorators/input';
import { ILoopParams, IDirectiveName, IInput, IInterpolationItem, IEvent, SimpleObjectOfAny, IComponentParams } from 'src/interfaces';



export abstract class BaseComponent {
    private root: HTMLElement;
    private host: HTMLElement;
    public $refs: { [key: string]: HTMLElement } = {};

    private _directives: { [key: string]: {} } = {};
    private _events: IEvent[] = [];
    private _interpolation: IInterpolationItem[] = [];
    private _hostBinding: { [key: string]: {} } = {
        events: {},
        attr: {}
    };

    private _custom_directives = {};

    static selector() {

    }

    constructor(a, b, c) {
        debugger
    }

    register() {

    }

    componentConstructor(root: HTMLElement, options: IComponentParams): void {
        Object.defineProperty(this, 'root', { value: root, writable: false });
        Object.defineProperty(this, 'host', {
            get: (): HTMLElement => {
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

        Object.defineProperty(this, '_directives', { value: {}, writable: false });
        Object.defineProperty(this, '_events', { value: [], writable: true });
        Object.defineProperty(this, '_interpolation', { value: [], writable: true });

        Object.defineProperty(this, '_custom_directives', { value: {}, writable: true });

        Object.defineProperty(this, 'inputListener', { value: this.inputListener.bind(this), writable: false });
        Object.defineProperty(this, 'destroyListener', { value: this.destroyListener.bind(this), writable: false });

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

        this._hostBinding.events = options.hostListeners;

        for (let key in options.hostAttrs) {
            this._hostBinding.attr[key] = {
                fn: options.hostAttrs[key]
            };
        }

        this.addListeners();

        this.initDirectives();

        this.onInit();

        this.changeDetection();
    }

    initDirectives(): void {
        this.onAttach();

        this._directives['for'] = [];
        Directives._init.call(this, this.root, 'bind-for', this._directives['for']);// exclude interpolation, params from bind-for

        Interpolation._init.call(this, this.root, this._interpolation);

        //internal directives
        DIRECTIVES_NAMES.forEach((directive: IDirectiveName) => {
            if (!this._directives[directive.name]) this._directives[directive.name] = [];

            if (directive.name !== 'for') {
                Directives._init.call(this, this.root, directive.alias, this._directives[directive.name]);
            }
        });

        //events
        EVENTS_NAMES.forEach((event: string) => {
            Directives._initEvent.call(this, this.root, event, this._events);
        });

        //custom directives
        Directives._initCustom.call(this, this.root, this._custom_directives);


        // Directives._dropdown.call(this, this._directives['dropdown']);
        Directives._lazy.call(this, this._directives['lazy-load']);

        Directives._model.call(this, this._directives['model']);

        // Directives._outside.call(this, this._directives['outside']);
        Directives._pattern.call(this, this._directives['pattern']);//TODO
        Directives._elRef.call(this, this._directives['ref']);

        Directives._formGroup.call(this, this._directives['form-group']);
        Directives._events.call(this, this._events);
        Directives._hostEvents.call(this, this._hostBinding.events);



        Directives._on.call(this, this._directives['on']);
    }

    addListeners(): void {
        // this.host.addEventListener('model-change', this.modelChangeListener, false);
        this.host.addEventListener('input-params', this.inputListener, false);
        this.host.addEventListener('destroy', this.destroyListener, false);
    }

    inputListener(e: CustomEvent): void {
        for (let key in e.detail) {
            const inputProperties = getFilteredProperties(this);
            const exist = inputProperties.find((r: IInput) => r.sourceName === key);

            if (exist) {
                this[exist.propertyKey] = e.detail[key];
            } else {
                throw new Error('@Input property is not declared: ' + key);
            }
        }
    }

    destroyListener(): void {
        this.destroy();
    }

    removeListeners(): void {
        // this.host.removeEventListener('model-change', this.modelChangeListener, false);
        this.host.removeEventListener('input-params', this.inputListener, false);
        this.host.removeEventListener('destroy', this.destroyListener, false);
    }

    changeDetection(): void {
        this.beforeUpdate();
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

        Directives._customDirective.call(this, this._custom_directives);
        this.onUpdate();
    }

    // getComponentVariable(variable, data) {
    // debugger
    // if (data && typeof data !== 'object') return data;
    // if (variable.length === 1 && variable[0] === 'this') return data || this._props.getData(); // entire props

    // return variable.reduce((o, i, index) => {
    //     if (!o[i] && o[i] !== 0 && o[i] !== false) { // in case when variable is undefined
    //         return index === variable.length - 1 ? null : {};
    //     } else {
    //         return o[i]
    //     }
    // }, data || this._props)
    // }

    getAllVariables(): any[] {
        const getters: any[] = Reflect.ownKeys(this.constructor.prototype).filter((name: string) => {
            const getter = Reflect.getOwnPropertyDescriptor(this.constructor.prototype, name)["get"];

            return typeof getter === "function";
        });

        return Object.keys(this).concat(getters);
    }

    getLoopParams(loopParams: ILoopParams, arr: any[]) {
        arr.unshift({ ...loopParams });

        if (loopParams.parent) {
            this.getLoopParams(loopParams.parent, arr);
        }
        return arr;
    }

    getPropsByScope(value: string, loopParams: ILoopParams, extra?: SimpleObjectOfAny, showError?) {
        let r;
        let error;

        let listOfVariables = this.getAllVariables();
        let listOfVariablesValues = listOfVariables.map((r: string) => this[r]);

        if (extra) {
            for (let key in extra) {
                listOfVariables.push(key);
                listOfVariablesValues.push(extra[key]);
            }
        }

        if (loopParams) {
            let loops = this.getLoopParams(loopParams, []);

            loops.forEach(loop => {
                listOfVariables.push(loop.iterator);
                listOfVariablesValues.push(loop.value);

                if (loop.indexName) {
                    listOfVariables.push(loop.indexName);
                    listOfVariablesValues.push(loop.index);
                }
            });
        }

        try {
            r = new Function(listOfVariables.toString(), 'return ' + value).apply(this, listOfVariablesValues);
        } catch (err) {
            if (showError) {
                error = err;
            }
        }

        return r || error;
    }

    setComponentVariable(string: string, value: any, loopParams: ILoopParams): void {
        if (loopParams) {
            loopParams.value = value;
        } else {
            if (typeof value === 'string') value = `'${value}'`;

            const fn = `this.${string}=${value}`;

            new Function(``, fn).apply(this, []);
        }
    }

    destroy(): void {
        this.onDestroy();

        // remove all event listeners
        Directives.removeEventListeners.call(this, this._events);

        this.removeListeners();

        this.root.innerHTML = null;
    }

    onDestroy() {

    }

    onAttach() {

    }

    beforeUpdate() {

    }

    onUpdate() {

    }

    onInit() {

    }
}