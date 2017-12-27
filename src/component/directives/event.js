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

export function createEventObject(elem, event, context, loopIterator) {
    let funcParams = elem.getAttribute(`ac-${event}`);
    elem.removeAttribute(`ac-${event}`);
    let fnName = funcParams.replace(/ +/g, "");
    let modifiers = getEventMod(elem);
    let kModifiers = getKeyMod(elem);
    let once = { state: false };

    let regExp = /\(([^)]+)\)|\(()\)/;
    let fnParams = regExp.exec(fnName); // get value between brackets
    
    let functionName = fnName.replace(regExp, ''); // remove everything between brackets

    let newEvent = {
        fnName: functionName,
        event: event,
        el: elem,
        f: (e) => {
            let args = [];

            if (fnParams) {
                if(fnParams[1]) {
                    fnParams[1].replace(/ +/g, "").split(',').forEach(res => {
                        let arg;
                        if(res === loopIterator) {
                            arg = context();
                        } else {
                            arg = getInputArgs(res);
                        }
                        args.push(arg);
                    });
                } else {
                    args.push(undefined);
                }
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


function getInputArgs(res) {
    let type;
    let arg;
    try {
        type = typeof new Function('return ' + res).apply(this);
    } catch(e) {
        type = undefined;
    }

    if(type === 'string' || type === 'number' || type === 'object'){
        arg = new Function('return ' + res).apply(this);
    } else {
        arg = new Function('return this.' + res).apply(this);
    }
    return arg;
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