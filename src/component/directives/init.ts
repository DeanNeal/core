// import {PRIVATES} from '../private';
import { Utils } from '../../core';
import { createEventObject } from './event';
import api from '../../api';


export function _initLoop(root, directive, newArray) {
    let array = newArray || [];

    let attr = root.getAttribute ? root.getAttribute(directive) : null;

    if (attr) {
        let obj:any = {
            elem: root,
            attr,
            items: [],
            parent: root.parentNode,
            cached: root
        };

        // only for certain directives
        if (directive === 'bind-if') {
            obj.comment = document.createComment(directive + ': ' + attr);//Utils.insertAfter(document.createComment(directive + ': ' + attr), root);
            obj.cachedIndexes = [];
            obj.rootCached = null;
            obj.interpolationArray = [];
        }

        array.push(obj);
        root.removeAttribute(directive);

        return array;
    }

    if (directive === 'bind-params' && Utils.isCustomElement(root)) {
        const outer = initParams(root);
        if (outer) {
            array.push(outer);
        }
        return array;
    }

    return _init.call(this, root, directive, newArray);
}

export function _init(root, directive, newArray) {
    let array = newArray || [];
    let host = root.host || root;

    //syntax sugar [params]=""
    if (directive === 'bind-params' && Utils.isCustomElement(host)) {

        api.REGISTERED_COMPONENTS.forEach(compName => {
            root.querySelectorAll(`${compName}`).forEach(elem => {
                const inner = initParams(elem);

                if (inner) {
                    array.push(inner);
                }
            });
        })

        return array;
    }

    root.querySelectorAll(`[${directive}]`).forEach(elem => {
        let attr = elem.getAttribute(directive);

        // exclude inner loops
        if (directive === 'bind-for' && elem.querySelectorAll('[bind-for]').length) {
            for (let innerElem of elem.querySelectorAll(`[bind-for]`)) {
                innerElem.setAttribute('bind-inner-loop', true);
            }
        }

        if (directive === 'bind-for' && elem.getAttribute('bind-inner-loop')) {
            elem.removeAttribute('bind-inner-loop');
            return;
        }

        let obj:any = {
            elem,
            attr,
            items: [],
            parent: elem.parentNode,
            cached: elem
        };

        // only for certain directives
        if (directive === 'bind-for' || directive === 'bind-if') {
            obj.comment = Utils.insertAfter(document.createComment(directive + ': ' + attr), elem);
            obj.cachedIndexes = [];
            obj.rootCached = null;
            obj.interpolationArray = [];
        }

        array.push(obj);
        elem.removeAttribute(directive);
        if (directive === 'bind-for') elem.remove();
    });

    return array;
}


export function _initEvent(root, directive, newArray, data, loopParams) {
    let array = newArray || [];
    let targets = root.querySelectorAll(`[bind-${directive}]`);
    if (root.getAttribute && root.getAttribute(`bind-${directive}`)) {
        let obj = createEventObject.call(this, root, directive, data, loopParams);
        array.get ? array.get(this).push(obj) : array.push(obj);
    }

    for (let elem of targets) {
        let obj = createEventObject.call(this, elem, directive, data, loopParams);
        array.get ? array.get(this).push(obj) : array.push(obj);
    }
    return array;
}

function initParams(el) {
    let obj;
    let elem = el.host || el;
    const attrAr = [...elem.attributes].map((attr) => {
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