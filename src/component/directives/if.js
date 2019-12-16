// import { Utils, Component } from '../../core';
// import API from './../../api';

export function _if(array, data, loopParams) {
    array.forEach(item => {
        let params = item.attr;

        try {
            let r = this.getPropsByScope(params, data, loopParams);
            if (r) {
                if (!item.elem.parentNode) { // insert only if elem doesn't exists
                    item.comment.replaceWith(item.elem);
                }
            } else {
                item.elem.replaceWith(item.comment);
            }
        } catch (err) {
            throw new Error(this.constructor.name + '; ' + err);
        }
    });
}