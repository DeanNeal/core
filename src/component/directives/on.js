import { Component, Utils } from '../../core';


export function _on(array) {
    array.forEach(item => {
        let listeners = item.attr;
        listeners = listeners.replace(/ +/g, "").split(',');

        if (listeners.length) {
            listeners.forEach(listener => {
                let eventName = listener.split(':')[0];
                let fn = this[listener.split(':')[1]];
                on.call(this, eventName, fn);
            });
        }
    });
}

function on(event, f) {
    this.root.addEventListener(event, (e) => {
        e.stopPropagation(); // to prevent further propagation
        f.call(this, e, e.detail);
    });
}