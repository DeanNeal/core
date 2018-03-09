import { Router, RouteSwitcher, TemplateEngine, Utils} from '../core';

import { PRIVATES } from '../component/private';
import Interpolation from './interpolation/interpolation';
import { Directives } from '../component/directives';
import { DIRECTIVES_NAMES } from '../component/const/directives';
import { EVENTS_NAMES } from '../component/const/events';
import API from'./../api';

export class Component {

    constructor(root, options) {
        Component.componentConstructor.call(this, root, options);
    }

    static componentConstructor(root, options, extraData) {
        this.root = root; //;console.log(root);

        Object.defineProperty(this, 'children', { value: {}, writable: false });

        Object.defineProperty(this, 'tpl', { value: options.template || '', writable: false });

        Object.defineProperty(this, '$refs', { value: {}, writable: false });

        let attrs = {};

        for (let i = 0; i < root.attributes.length; i++) {
            attrs[root.attributes[i].nodeName] = root.attributes[i].nodeValue
        }

        if(attrs['bind-form-control'] && attrs['bind-model']) {
            throw new Error('Using of bind-model inside bind-form-group is forbidden');
        }

        Object.defineProperty(this, '$attrs', { value: attrs, writable: false });

        this.root.COMPONENT = this;

        if (this instanceof API.rootComponent.class) {
            API.rootInstance = this;
        }

        Component.setPrivates.call(this, options);

        if (this.root.getAttribute('bind-for')) {
            // console.warn('Foor loop is detected!')
        } else {
            this.render();
            this.listenToPropsChanges();
            this.onInit(extraData);
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

        PRIVATES.INTERPOLATION.set(this, []);
    }


    render() {
        this.root.innerHTML = this.preCompileTpl(this.tpl);
        this.onAttach();

        this.compile(); // render custom elements
        this.compileRouter(); // render main router
        // console.log(this);

        Directives._init.call(this, this.root, 'bind-for', PRIVATES.DIRECTIVES['for']);// exclude interpolation from bind-for


        Interpolation._init.call(this, this.root, PRIVATES.INTERPOLATION);

        //internal directives
        DIRECTIVES_NAMES.forEach(directive => {
            if(directive.name !== 'for') {
                Directives._init.call(this, this.root, directive.alias, PRIVATES.DIRECTIVES[directive.name]);
            }
        });

        //events
        EVENTS_NAMES.forEach(event => {
            Directives._initEvent.call(this, this.root, event, PRIVATES.EVENTS);
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

        Directives._dropdown.call(this, PRIVATES.DIRECTIVES['dropdown'].get(this));
        Directives._lazy.call(this, PRIVATES.DIRECTIVES['lazy-load'].get(this));

        Directives._model.call(this, PRIVATES.DIRECTIVES['model'].get(this));
        Directives._on.call(this, PRIVATES.DIRECTIVES['on'].get(this));
        Directives._outside.call(this, PRIVATES.DIRECTIVES['outside'].get(this));
        Directives._pattern.call(this, PRIVATES.DIRECTIVES['pattern'].get(this));//TODO
        Directives._elRef.call(this, PRIVATES.DIRECTIVES['ref'].get(this));
        Directives._events.call(this, PRIVATES.EVENTS.get(this));
        Directives._hostEvents.call(this, PRIVATES.HOST.EVENTS.get(this));

        Directives._formGroup.call(this, PRIVATES.DIRECTIVES['form-group'].get(this));


        // this.onInit();
    }

    listenToPropsChanges() {
        let $propsSub = this.props.sub(r => {
            Directives._computed.call(this, PRIVATES.COMPUTED.get(this)); // should go first

            Directives._if.call(this, PRIVATES.DIRECTIVES['if'].get(this));
            Directives._for.call(this, PRIVATES.DIRECTIVES['for'].get(this));
            Directives._value.call(this, PRIVATES.DIRECTIVES['value'].get(this));
            Directives._input.call(this, PRIVATES.DIRECTIVES['input'].get(this));
            Directives._value.call(this, PRIVATES.DIRECTIVES['model'].get(this));
            Directives._style.call(this, PRIVATES.DIRECTIVES['style'].get(this));
            Directives._class.call(this, PRIVATES.DIRECTIVES['class'].get(this));
            Directives._attr.call(this, PRIVATES.DIRECTIVES['attr'].get(this));
            Directives._link.call(this, PRIVATES.DIRECTIVES['link'].get(this));
            Directives._hostClasses.call(this, PRIVATES.HOST.CLASS.get(this));
            Directives._hostStyles.call(this, PRIVATES.HOST.STYLE.get(this));
            Directives._hostHidden.call(this, PRIVATES.HOST.HIDDEN.get(this));


            Interpolation._update.call(this, PRIVATES.INTERPOLATION.get(this));

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
            html = html.replace(regex, `bind-${event}`)
        });

        DIRECTIVES_NAMES.forEach(directive => {
           let stringToGoIntoTheRegex = ':'+ directive.name;
           let regex = new RegExp(stringToGoIntoTheRegex, "g");
           html = html.replace(regex, `${directive.alias}`)
        });

        return html;
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

    getAllVariables() {
        return  Object.keys(this.props.getData());
    }

    getPropsByScope(value, scope, loopParams) {
        let r;
        let variable = value.split('.')
        let listOfVariables = this.getAllVariables();
        let listOfVariablesValues = listOfVariables.map(r=> this.props.get(r));
        
        if(loopParams && loopParams.iterator) { 
            listOfVariables.push(loopParams.iterator);
            listOfVariablesValues.push(scope);

            if(loopParams.index || loopParams.index === 0) {
                if(listOfVariables.indexOf('index') > -1) {
                    listOfVariablesValues[listOfVariables.indexOf('index')] = loopParams.index;
                } else {
                    listOfVariables.push('index');
                    listOfVariablesValues.push(loopParams.index);
                }
            } else {
                listOfVariables.push('index'); // if index doesn't exist
            }
            if(loopParams.key) {                
                listOfVariables.push('key');
                listOfVariablesValues.push(loopParams.key);
            }
        }

        try {
            r = new Function(listOfVariables, 'return ' + value).apply(this, listOfVariablesValues);
        } catch(err) {
            // throw new Error(err + '; ' + this);
            // console.warn(err + '; ' + this);
        }

        return r;
    }

    setComponentVariable(string, value, loopParams, collectionName, data) {
        let params = string.split('.'); /*data ? string.split('.') : ('props.' + string).split('.');*/
        let lastProp = params[params.length - 1];


        if(params[0] === loopParams) {
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

        this.destroyPrivates(PRIVATES);
        this.root.remove();
        this.root = null;
    }

    destroyPrivates(privates) {
        for(let val in privates) {
            if(privates[val].constructor.name === 'WeakMap'){
                privates[val].delete(this);
            } else {
                this.destroyPrivates(privates[val]);
            }
        }
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

    onInit() {

    }
}