import { IEvent, ILoopParams } from "src/interfaces";

export function _events(array: IEvent[]) {
    array.forEach((newEvent: IEvent) => {
        newEvent.el.addEventListener(newEvent.event.toLowerCase(), newEvent.f, false);
    });
}

export function removeEventListeners(array: IEvent[]) {
    array.forEach((newEvent: IEvent, i: number) => {
        newEvent.el.removeEventListener(newEvent.event, newEvent.f, false);
    });
}

export function createEventObject(elem: HTMLElement, event: string, loopParams: ILoopParams): IEvent {
    let funcParams = elem.getAttribute(`bind-${event}`).replace(/ +/g, "");

    let once = { state: false };

    let modifiers = funcParams.split('|')[1] ? (funcParams.split('|')[1].split(',')) : [];

    let regExp = /\(([^)]+)\)|\(()\)/;

    //  regExp.exec(funcParams); // get value between brackets

    let functionName = funcParams.replace(regExp, '').split('|')[0]; // remove everything between brackets

    let newEvent = {
        fnName: functionName,
        event: event,
        el: elem,
        f: (e: Event) => {

            callModifiers.call(this, modifiers, e, elem, once).subscribe(() => {
                const methods = funcParams.split('|')[0].split(';').filter(r => r).map(r => 'this.' + r);
                const extra = methods.some(r => regExp.exec(r)[1] === '$event');

                const r = this.getPropsByScope(methods, loopParams, extra ? { $event: e } : {});

                if (r instanceof Error) {
                    throw new Error(r.toString());
                }
            });

        }
    };

    return newEvent;
}

const modifierCode = {
    stop: (e: Event) => { e.stopPropagation(); },
    prevent: (e: Event) => { e.preventDefault(); },
    once: () => { },
    self: () => { }
};

function callModifiers(modifiers: string[], event: any, elem: HTMLElement, once: { state: boolean }) {
    modifiers.forEach((mod: string) => {
        if (modifierCode[mod]) {
            modifierCode[mod](event, elem);
        } else {
            console.warn(this.constructor.name + '; Unknown modifier');
        }
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