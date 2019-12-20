import { IEvent, ILoopParams } from "src/interfaces";

export function _events(array: IEvent[]) {
    array.forEach((newEvent: IEvent) => {
        let modifiers = getEventMod(newEvent.el);
        newEvent.el.addEventListener(newEvent.event.toLowerCase(), newEvent.f, modifiers.indexOf('capture') > -1 ? true : false);
        newEvent.el.removeAttribute('bind-mod');
        newEvent.el.removeAttribute('bind-kmod')
    });
}

export function removeEventListeners(array: IEvent[]) {
    array.forEach((newEvent: IEvent, i: number) => {
        let modifiers = getEventMod(newEvent.el);
        newEvent.el.removeEventListener(newEvent.event, newEvent.f, modifiers.indexOf('capture') > -1 ? true : false);
    });
}

function getEventMod(elem: HTMLElement): string[] {
    return elem.getAttribute('bind-mod') ? elem.getAttribute('bind-mod').replace(/ +/g, "").split(',') : [];
}

function getKeyMod(elem: HTMLElement): string {
    return elem.getAttribute('bind-kmod') ? elem.getAttribute('bind-kmod').replace(/ +/g, "") : null;
}

export function createEventObject(elem: HTMLElement, event: string, loopParams: ILoopParams): IEvent {
    let funcParams = elem.getAttribute(`bind-${event}`);
    elem.removeAttribute(`bind-${event}`);
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
                if (fnParams[1]) {
                    fnParams[1].replace(/ +/g, "").split(',').forEach((res: string) => {
                        let arg;
                        
                        if (res === '$event') {
                            arg = e;
                        } else {
                            arg = this.getPropsByScope(res, loopParams);
                        }

                        args.push(arg);
                    });
                } else {
                    args.push(undefined);
                }
            }

            if (this[functionName]) {
                callModifiers.call(this, modifiers, e, elem, once).subscribe(() => {
                    if (kModifiers) {
                        callKModifiers.call(this, e, kModifiers, () => {
                            this[functionName].call(this, ...args);
                        });
                    } else {
                        this[functionName].call(this, ...args);
                    }
                });
            } else {
                // console.warn('You have no function in your component');
                throw new Error('Unknown method ' + functionName);
            }
        }
    };

    return newEvent;
}

const modifierCode = {
    stop: stop,
    prevent: prevent
};

function stop(e: Event) {
    e.stopPropagation();
}

function prevent(e: Event) {
    e.preventDefault();
}

function callModifiers(modifiers: string[], event: any, elem: HTMLElement, once: { state: boolean }) {
    modifiers.forEach((mod: string) => {
        if (modifierCode[mod]) {
            modifierCode[mod](event, elem);
        }
        // else {
        //     console.warn(this.constructor.name + '; Unknown modifier');
        // }
    });

    function selfModifier(f: () => {}) {
        if (modifiers.indexOf('self') > -1 && event.target.isEqualNode(elem)) {
            once.state = true; // change only when event was fired
            f.call(this);
        } else if (modifiers.indexOf('self') === -1) {
            once.state = true; // change only when event was fired
            f.call(this);
        }
    }

    return {
        subscribe: (f: () => {}) => {
            if (modifiers.indexOf('once') > -1 && !once.state) {
                selfModifier(f);
            } else if (modifiers.indexOf('once') === -1) {
                selfModifier(f);
            }
        }
    }
}

const keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    delete: [8, 46]
};

function callKModifiers(e: KeyboardEvent, modifiers: string, cb) {
    if (typeof keyCodes[modifiers] === 'number' && e.keyCode === keyCodes[modifiers]) {
        cb.call();
    } else if (typeof keyCodes[modifiers] === 'object' && keyCodes[modifiers].indexOf(e.keyCode) > -1) {
        cb.call();
    }
}