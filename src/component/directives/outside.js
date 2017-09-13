import {PRIVATES} from '../private';
import {GlobalEvents} from '../../core';

export function _outside(array) {
    array.forEach(item => {
        let attr = item.attr;

        PRIVATES.GLOBAL_EVENTS.set(this, GlobalEvents.onClick((e) => {
            let ouside = this.shadow ? item.elem.contains(e.path[0]) : item.elem.contains(e.target);
            if (!ouside) {
                this[attr].call(this, e);
            }
        }, item));
    });
}