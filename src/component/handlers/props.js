import {Utils} from '../../core';
export function _props(array, data) {
    array.forEach(item => {
        let params = item.attr.split('.');
        let r = this.getComponentVariable(params, data);

        r = r === '' ? '' : r;
        r = r === 0 ? 0 : r;
        if (Utils.isCustomElement(item.elem)) {
            return;
        }
        if (item.elem.localName === 'input') {
            if (item.elem.type === 'checkbox') r ? item.elem.setAttribute('checked', true) : item.elem.removeAttribute('checked');
            if (item.elem.type === 'radio') {
                item.elem.value === r ? item.elem.setAttribute('checked', true) : item.elem.removeAttribute('selected');
            }
            if (item.elem.type === 'text') item.elem.value = r;
        } else {
            item.elem.innerHTML = r;
        }
    });
}