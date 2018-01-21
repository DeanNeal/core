import { Utils, Component} from '../../core';
import API from'./../../api';

export function _if(array, data, loopIterator) {
    array.forEach(item => {
        let params = item.attr; //.replace(/@+/g, "this.props."); // @ -alias of this.props

        try {
            let r = this.getPropsByScope(params, data, loopIterator); //new Function('return ' + attr).apply(data || this.props);
            if (r) {
                if (!item.elem.parentNode) { // insert only if elem doesn't exists
                    if (Utils.isCustomElement(item.elem)) {
                        API.COMPONENTS.forEach(comp => {
                            if (comp.selector === item.elem.localName) {
                                //console.log(item);
                                new comp(item.elem, {}, this);
                            }
                        });
                    }
                    Utils.insertAfter(item.elem, item.comment)
                }
            } else {

                if (Utils.isCustomElement(item.elem)) {
                    if (item.elem.COMPONENT) {
                        item.elem.COMPONENT.destroy();
                        item.elem.COMPONENT = null;
                        delete item.elem.COMPONENT;
                    }
                }

                item.elem.remove()
            }
        } catch (err) {
            throw new Error(this.constructor.name + '; ' + err);
        }
    });
}