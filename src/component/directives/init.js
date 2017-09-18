import {PRIVATES} from '../private';
import {Utils} from '../../core';
import {createEventObject} from './event';
export function _init(root, directive, newArray) {
    let array = newArray || [];

    let attr = root.getAttribute(directive);
    if (attr && !Utils.isCustomElement(root)) { // only for loops
        let obj = {
            elem: root,
            attr,
            items: [],
            parent: root.parentNode,
            cached: root
        };

        array.get ? array.get(this).push(obj) : array.push(obj);
        root.removeAttribute(directive);
        if (directive === 'ac-for') elem.remove();
    }

    for (let elem of root.querySelectorAll(`[${directive}]`)) {
        let attr = elem.getAttribute(directive);

        // exclude inner loops
        if (directive === 'ac-for' && elem.querySelectorAll('[ac-for]').length) {
            for (let innerElem of elem.querySelectorAll(`[ac-for]`)) {
                innerElem.setAttribute('ac-inner-loop', true);
            }
        }

        if (directive === 'ac-for' && elem.getAttribute('ac-inner-loop')) {
            elem.removeAttribute('ac-inner-loop');
            return;
        }

        let obj = {
            elem,
            attr,
            comment: Utils.insertAfter(document.createComment(directive + ': ' + attr), elem),
            items: [],
            parent: elem.parentNode,
            cached: elem
        };
        array.get ? array.get(this).push(obj) : array.push(obj);
        elem.removeAttribute(directive);
        if (directive === 'ac-for') elem.remove();
    }

    return array;
}


export function _initEvent(root, directive, newArray) {
    let array = newArray || [];
    let targets = root.querySelectorAll(`[ac-${directive}]`);
    if (root.getAttribute(`ac-${directive}`)) {
        let obj = createEventObject.call(this, root, directive);
        array.get ? array.get(this).push(obj) : array.push(obj);
        
    }

    for (let elem of targets) {
        let obj = createEventObject.call(this, elem, directive);
        array.get ? array.get(this).push(obj) : array.push(obj);
    }
    return array;
}