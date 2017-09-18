import {PRIVATES} from '../private';

export function _events(array, data) {
    array.forEach(newEvent=>{
    	newEvent.customData = data;
        newEvent.el.addEventListener(newEvent.event.toLowerCase(), newEvent.f, false);
    });
}

export function removeEventListeners(array) {
    array.forEach((eventItem, i) => {
        eventItem.el.removeEventListener(eventItem.event, eventItem.f, false);
    });
}

export function createEventObject(elem, event) {
    let funcParams = elem.getAttribute(`ac-${event}`);
    elem.removeAttribute(`ac-${event}`);
    let params = funcParams.replace(/ +/g, "").split(':');
    let fnName = params[0];
    let newEvent = {
        fnName: fnName,
        event: event,
        el: elem,
        customData: {},
        f: (e) => {
            // e.preventDefault();
            if (this[fnName]) {
                this[fnName].call(this, e, params[1] || newEvent.customData);
            } else {
                console.warn('You have no function in your component');
            }
        }
    };
    
    return newEvent;
}