import Privates from '../private';
import {Utils} from '../../core';

export function _init(root, handlerAttr, privateArray) {
    let array = privateArray ? Privates[privateArray] : [];

    let attr = root.getAttribute(handlerAttr);
    if (attr && !Utils.isCustomElement(root)) { // only for loops
        let obj = {
            elem: root,
            attr,
            items: [],
            parent: root.parentNode,
            cached: root
        };

        array.get ? array.get(this).push(obj) : array.push(obj);
        root.removeAttribute(handlerAttr);
        if (handlerAttr === 'frameworkFor') elem.remove();
    }

    for (let elem of root.querySelectorAll(`[${handlerAttr}]`)) {
        let attr = elem.getAttribute(handlerAttr);

        // exclude inner loops
        if (handlerAttr === 'frameworkFor' && elem.querySelectorAll('[frameworkFor]').length) {
            for (let innerElem of elem.querySelectorAll(`[frameworkFor]`)) {
                innerElem.setAttribute('frameworkInnerLoop', true);
            }
        }

        if (handlerAttr === 'frameworkFor' && elem.getAttribute('frameworkInnerLoop')) {
            elem.removeAttribute('frameworkInnerLoop');
            return;
        }

        let obj = {
            elem,
            attr,
            comment: Utils.insertAfter(document.createComment(handlerAttr + ': ' + attr), elem),
            items: [],
            parent: elem.parentNode,
            cached: elem
        };
        array.get ? array.get(this).push(obj) : array.push(obj);
        elem.removeAttribute(handlerAttr);
        if (handlerAttr === 'frameworkFor') elem.remove();
    }
    return array;
}