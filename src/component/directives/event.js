import { PRIVATES } from '../private';
import { Utils } from '../../core';

export function _events(array) {
    array.forEach(newEvent => {
        let modifiers = getEventMod(newEvent.el);
        newEvent.el.addEventListener(newEvent.event.toLowerCase(), newEvent.f, modifiers.indexOf('capture') > -1 ? true : false);
        newEvent.el.removeAttribute('ac-mod');
        newEvent.el.removeAttribute('ac-kmod')
    });
}

export function removeEventListeners(array) {
    array.forEach((newEvent, i) => {
        let modifiers = getEventMod(newEvent.el);
        newEvent.el.removeEventListener(newEvent.event, newEvent.f, modifiers.indexOf('capture') > -1 ? true : false);
    });
}

function getEventMod(elem) {
    return elem.getAttribute('ac-mod') ? elem.getAttribute('ac-mod').replace(/ +/g, "").split(',') : [];
}

function getKeyMod(elem) {
    return elem.getAttribute('ac-kmod') ? elem.getAttribute('ac-kmod').replace(/ +/g, "") : null;
}

export function createEventObject(elem, event, context) {
    let funcParams = elem.getAttribute(`ac-${event}`);
    elem.removeAttribute(`ac-${event}`);
    let params = funcParams.replace(/ +/g, "").split(':');
    let fnName = params[0];
    let modifiers = getEventMod(elem);
    let kModifiers = getKeyMod(elem);
    let once = { state: false };

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
                callModifiers.call(this, modifiers, e, elem, once).subscribe(res => {
                    if (kModifiers) {
                        callKModifiers.call(this, e, kModifiers, () => {
                            this[functionName].call(this, e, ...args);
                        });
                    } else {
                        this[functionName].call(this, e, ...args);
                    }
                });
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

function stop(e) {
    e.stopPropagation();
}

function prevent(e) {
    e.preventDefault();
}

function callModifiers(modifiers, event, elem, once) {
    modifiers.forEach(mod => {
        if (modifierCode[mod]) {
            modifierCode[mod](event, elem);
        }
        // else {
        //     console.warn(this.constructor.name + '; Unknown modifier');
        // }
    });

    function selfModifier(f) {
        if (modifiers.indexOf('self') > -1 && event.target.isEqualNode(elem)) {
            once.state = true; // change only when event was fired
            f.call(this);
        } else if (modifiers.indexOf('self') === -1) {
            once.state = true; // change only when event was fired
            f.call(this);
        }
    }

    return {
        subscribe: (f) => {
            if (modifiers.indexOf('once') > -1 && !once.state) {
                selfModifier(f);
            } else if (modifiers.indexOf('once') === -1) {
                selfModifier(f);
            }

        }
    }
}

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

function callKModifiers(e, modifiers, cb) {
    if (typeof keyCodes[modifiers] === 'number' && e.keyCode === keyCodes[modifiers]) {
        cb.call();
    } else if (typeof keyCodes[modifiers] === 'object' && keyCodes[modifiers].indexOf(e.keyCode) > -1) {
        cb.call();
    }
}