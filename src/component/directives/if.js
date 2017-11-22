import { Utils, Component } from '../../core';
export function _if(array, data) {
    array.forEach(item => {
        let attr = item.attr; //.replace(/@+/g, "this.props."); // @ -alias of this.props

        try {
            let r = new Function('return ' + attr).apply(data || this.props);
            if (r) {
                if (!item.elem.parentNode) { // insert only if elem doesn't exists
                    if (Utils.isCustomElement(item.elem)) {
                        Component.COMPONENTS.forEach(comp => {
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


        // let conditions = attr.replace(/ +/g, "").split('&&');

        // conditions = conditions.map(res => {
        //     let reverse = false;
        //     // let a = eval('this.' + attr);
        //     if (res[0] === '!') {
        //         res = res.substring(1);
        //         reverse = true;
        //     }

        //     if (res.indexOf('==') > -1 || res.indexOf('===') > -1) {
        //         let equality = res.indexOf('===') > -1 ? res.replace(/ +/g, "").split('===') : res.replace(/ +/g, "").split('==');
        //         let r = this.getComponentVariable(equality[0].split('.'), data);

        //         return !!equality[1];
        //     }

        //     let params = res.split('.');
        //     let r = this.getComponentVariable(params, data);
        //     r = reverse ? !r : r;

        //     return !!r;
        // });

        // if (conditions.filter(item => item).length === conditions.length) {
        //     if (!item.elem.parentNode) { // insert only if elem doesn't exists
        //         Utils.insertAfter(item.cached, item.comment)
        //     }
        // } else {
        //     item.elem.remove()
        // }
    });
}
// childNode[4].parentNode.insertBefore(childNode[4], childNode[3]);

export function _hostVisibility(params) {
    if (params.prop) {
        let r = this.getComponentVariable(params.prop.split('.'));
        // console.log(this);
        if (r) {
            // Utils.insertAfter(params.cached, params.comment);
            // params.comment.remove();
            params.comment.replaceWith(params.cached);

        } else {
            // Utils.insertAfter(params.comment, this.root);
            // this.root.remove()
            // child.replaceWith(span);
            params.cached.replaceWith(params.comment);
        }
    }
}