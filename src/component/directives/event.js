import {PRIVATES} from '../private';

export function _events(array) {
    array.forEach(newEvent=>{
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
    let newEvent = {
        fnName: fnName,
        event: event,
        el: elem,
        f: (e) => {
            let regExp =  /\(([^)]+)\)/; 
            let fnParams = regExp.exec(fnName); // get value between brackets
            let args = [];
            fnName = fnName.replace(regExp, ''); // remove everything between brackets

            if(fnParams) {
                fnParams[1].replace(/ +/g, "").split(',').forEach(res=>{
                    let arg = new Function('return ' + res).apply(context || this);
                    args.push(arg);
                });
            }

            if (this[fnName]) {
                this[fnName].call(this, e, ...args);
            } else {
                console.warn('You have no function in your component');
            }
        }
    };
    
    return newEvent;
}