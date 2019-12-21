// import {PRIVATES} from '../private';
import { Utils } from '../../core';
import { createEventObject } from './event';
import API from '../../api';
import { ILoopParams, IEvent, IDirectiveParams } from 'src/interfaces';

export function _initCustom(root: HTMLElement, newArray: IDirectiveParams[]) {
    let array = newArray || {};

    API.CUSTOM_DIRECTIVES.forEach((Directive) => {
        if (!array[Directive.params.selector]) {
            array[Directive.params.selector] = [];
        }

        let attr = root.getAttribute ? root.hasAttribute(Directive.params.selector) : null;
      
        if(attr) {

            let obj = {
                elem: root,
                directive: new Directive(root)
            };

            array[Directive.params.selector].push(obj);
            root.removeAttribute(Directive.params.selector);
        }

        root.querySelectorAll(`[${Directive.params.selector}]`).forEach((elem: HTMLElement) => {
            let obj = {
                elem: elem,
                directive: new Directive(elem)
            };

            array[Directive.params.selector].push(obj);
            elem.removeAttribute(Directive.params.selector);
        });
    });

    return array;
}

export function _initLoop(root: HTMLElement, directive: string, newArray: IDirectiveParams[]) {
    let array = newArray || [];

    let attr = root.getAttribute ? root.getAttribute(directive) : null;

    if (attr) {
        let obj: any = {
            elem: root,
            attr,
            items: [],
            parent: root.parentNode,
            cached: []
        };

        // only for certain directives
        if (directive === 'bind-if') {
            obj.comment = document.createComment(directive + ': ' + attr);
            obj.rootCached = null;
            obj.interpolationArray = [];
        }

        if (directive === 'bind-class') {
            obj.prevValue = [];
        }

        array.push(obj);
        root.removeAttribute(directive);
    }


    if (directive === 'bind-params' && Utils.isCustomElement(root)) {
        const outer = initParams(root);
        if (outer) {
            array.push(outer);
        }
    }

    let rest = _init.call(this, root, directive, newArray);
    array = [...array, ...rest];

    return array;
}

export function _init(root: any, directive: string, newArray: IDirectiveParams[]) {
    let array = newArray || [];
    let host = root.host || root;

    //syntax sugar [params]=""
    if (directive === 'bind-params' && Utils.isCustomElement(host)) {

        API.REGISTERED_COMPONENTS.forEach((compName: string) => {
            root.querySelectorAll(`${compName}`).forEach((elem: HTMLElement) => {
                const inner = initParams(elem);

                if (inner) {
                    array.push(inner);
                }
            });
        })

        return array;
    }

    root.querySelectorAll(`[${directive}]`).forEach((elem: HTMLElement) => {
        let attr = elem.getAttribute(directive);

        // exclude inner loops
        if (directive === 'bind-for' && elem.querySelectorAll('[bind-for]').length) {
            for (let innerElem of elem.querySelectorAll(`[bind-for]`)) {
                innerElem.setAttribute('bind-inner-loop', 'true');
            }
        }

        if (directive === 'bind-for' && elem.getAttribute('bind-inner-loop')) {
            elem.removeAttribute('bind-inner-loop');
            return;
        }

        let obj: any = {
            elem,
            attr,
            items: [],
            parent: elem.parentNode,
            cached: []
        };

        // only for certain directives
        if (directive === 'bind-for' || directive === 'bind-if') {
            obj.comment = Utils.insertAfter(document.createComment(directive + ': ' + attr), elem);
            obj.rootCached = null;
        }

        if (directive === 'bind-class') {
            obj.prevValue = [];
        }

        if (directive === 'bind-for') {
            obj.interpolationArray = [];
            obj.loopParams = [];
            obj.directives = [];
            obj.custom_directives = [];
        }

        array.push(obj);
        elem.removeAttribute(directive);
        if (directive === 'bind-for') elem.remove();
    });

    return array;
}


export function _initEvent(root: HTMLElement, directive: string, newArray: IEvent[], loopParams: ILoopParams): IEvent[] {
    let array = newArray || [];
    let targets = root.querySelectorAll(`[bind-${directive}]`);
    if (root.getAttribute && root.getAttribute(`bind-${directive}`)) {
        let obj = createEventObject.call(this, root, directive, loopParams);
        array.push(obj);
    }

    for (let elem of targets) {
        let obj = createEventObject.call(this, elem, directive, loopParams);
        array.push(obj);
    }
    return array;
}


function initParams(el: any): IDirectiveParams {
    let obj;
    let elem = el.host || el;
    const attrAr = [...elem.attributes].map((attr: Attr) => {
        let matchReg = /\[.*?\]/g;
        let match = attr.name.match(matchReg);

        if (match) {
            if (match[0] === '[]') throw new Error('The name of passed property must be specified: ' + this.constructor.name);
            elem.removeAttribute(attr.name);
            return {
                [Utils.camelCase(attr.name.replace(/\[(.*?)\]/g, "$1"))]: attr.value
            };
        }
    }).filter(r => r);

    if (attrAr.length) {
        obj = {
            elem: elem,
            attrs: attrAr
        }
    }

    return obj;
}