import { Utils, Component } from '../../core';
import API from './../../api';

export function _if(array, data, loopParams) {
    array.forEach(item => {
        let params = item.attr;

        try {
            let r = this.getPropsByScope(params, data, loopParams);
            if (r) {
                
                if (!item.elem.parentNode) { // insert only if elem doesn't exists
                    // if (Utils.isCustomElement(item.elem)) {
                    //     API.COMPONENTS.forEach(comp => {
                    //         if (comp.selector === item.elem.localName) {
                    //             //console.log(item);
                    //             new comp(item.elem, {}, this);//TODO now it's unnecessary
                    //         }
                    //     });
                    // }
                    // Utils.insertAfter(item.elem, item.comment)
                    
                    item.comment.replaceWith(item.elem);
                }
            } else {

                item.elem.replaceWith(item.comment);

                // if (Utils.isCustomElement(item.elem)) {
                //     if (item.elem.COMPONENT) {
                //         item.elem.COMPONENT = null;
                //         delete item.elem.COMPONENT;
                //     }
                // } else {
                //     item.elem.remove()
                // }
            }
        } catch (err) {
            throw new Error(this.constructor.name + '; ' + err);
        }
    });
}