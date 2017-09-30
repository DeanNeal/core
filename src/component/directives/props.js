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
            switch(item.elem.type){
                case 'checkbox':
                    r ? item.elem.setAttribute('checked', true) : item.elem.removeAttribute('checked');
                break;
                case 'radio':
                    item.elem.value === r ? item.elem.setAttribute('checked', true) : item.elem.removeAttribute('selected');
                break;
                case 'text':
                case 'email':
                case 'password':
                    item.elem.value = r;
                break;

            }
        } else {
            item.elem.innerHTML = r;
        }
    });
}