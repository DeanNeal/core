import {Utils} from '../../core';
export function _props(array, data) {
    array.forEach(item => {
        let params = item.attr.split('.');
        let r = this.getComponentVariable(params, data);

        if (Utils.isCustomElement(item.elem)) {
            return;
        }
        //TODO rewrite with switch
        if (item.elem.localName === 'input') {
            if (item.elem.type === 'checkbox') r ? item.elem.setAttribute('checked', true) : item.elem.removeAttribute('checked');
            if (item.elem.type === 'radio') {
                item.elem.value === r ? item.elem.setAttribute('checked', true) : item.elem.removeAttribute('selected');
            }
            if (item.elem.type === 'text' || item.elem.type === 'email' || item.elem.type === 'password') item.elem.value = r;
        } else {
            item.elem.innerHTML = r;
        }
    });
}