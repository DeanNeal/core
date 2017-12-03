import { PRIVATES } from '../private';
import { Utils } from '../../core';

export function _events(array) {
    array.forEach(newEvent => {
        newEvent.el.addEventListener(newEvent.event.toLowerCase(), newEvent.f, false);
    });
}

export function removeEventListeners(array) {
    array.forEach((eventItem, i) => {
        eventItem.el.removeEventListener(eventItem.event, eventItem.f, false);
    });
}

export function createEventObject(elem, event, context) {
    let funcParams = elem.getAttribute(`ac-${event}`);
    elem.removeAttribute(`ac-${event}`);
    let params = funcParams.replace(/ +/g, "").split(':');
    let fnName = params[0];
    let modifiers = elem.getAttribute('ac-mod') ? elem.getAttribute('ac-mod').replace(/ +/g, "").split(',') : [];
    let kModifiers = elem.getAttribute('ac-kmod') ? elem.getAttribute('ac-kmod').replace(/ +/g, "") : null;
    let newEvent = {
        fnName: fnName,
        event: event,
        el: elem,
        f: (e) => {
            let regExp = /\(([^)]+)\)/;
            let fnParams = regExp.exec(fnName); // get value between brackets
            let args = [];
            let functionName = fnName.replace(regExp, ''); // remove everything between brackets

            if (fnParams) {
                fnParams[1].replace(/ +/g, "").split(',').forEach(res => {
                    let arg = new Function('return ' + res).apply(context || this);
                    args.push(arg);
                });
            }

            if (this[functionName]) {
                callModifiers.call(this, modifiers, e);
                if (kModifiers) {
                    callKModifiers.call(this, e, kModifiers, () => {
                        this[functionName].call(this, e, ...args);
                    });
                } else {
                    this[functionName].call(this, e, ...args);
                }
            } else {
                console.warn('You have no function in your component');
            }
        }
    };

    return newEvent;
}

var modifierCode = {
    stop: stop,
    prevent: prevent
};

var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
};

function callModifiers(modifiers, event) {
    modifiers.forEach(mod => {
        if (modifierCode[mod]) {
            modifierCode[mod](event);
        } else {
            throw new Error(this.constructor.name + '; Unknown modifier');
        }
    });
}

function callKModifiers(e, modifiers, cb) {
    if (e.keyCode === keyCodes[modifiers]) {
        cb.call();
    }
}

function stop(e) {
    e.stopPropagation();
}

function prevent(e) {
    e.preventDefault();
}