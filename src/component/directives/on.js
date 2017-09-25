import { Component, Utils } from '../../core';


export function _on(array) {
    array.forEach(item => {
        let listeners = item.attr;
        listeners = listeners.replace(/ +/g, "").split(',');

        if (listeners.length) {
            listeners.forEach(listener => {
                let eventName = listener.split(':')[0];
                let fn = this[listener.split(':')[1]];
                on.call(this, eventName, fn, item.elem);
            });
        }
    });
}

function on(event, f, el) {
    this.root.addEventListener(event, (e) => {
        if(e.target === el) { // listen to current component changes        
            e.stopPropagation(); // to prevent further propagation
            f.call(this, e, e.detail);
        }
    });
}