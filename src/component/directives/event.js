import {PRIVATES} from '../private';
import {EVENTS} from '../const/events';

export function eventUnitCore(elem, event, data) {
    let funcParams = elem.getAttribute(`framework${event}`);
    elem.removeAttribute(`framework${event}`);
    let params = funcParams.replace(/ +/g, "").split(':');
    let fnName = params[0];
    let newEvent = {
        fnName: fnName,
        event: event,
        el: elem,
        f: (e) => {
            e.preventDefault();
            if (this[fnName]) {
                this[fnName].call(this, e, params[1] || data);
            } else {
                console.warn('You have no function in your component');
            }
        }
    };
    
    PRIVATES.EVENTS.get(this).push(newEvent);
    newEvent.el.addEventListener(newEvent.event.toLowerCase(), newEvent.f, false);
}

export function eventListeners(root, data) {
    EVENTS.forEach(event => {
        let targets = root.querySelectorAll(`[framework${event}]`);
        if (root.getAttribute(`framework${event}`)) {
            eventUnitCore.call(this, root, event, data);
        }

        for (let elem of targets) {
            eventUnitCore.call(this, elem, event, data);
        }
    });
}

export function removeEventListeners(array) {
    array.forEach((eventItem, i) => {
        eventItem.el.removeEventListener(eventItem.event, eventItem.f, false);
    });
}