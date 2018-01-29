import { Utils } from '../../core';
export function _value(array, data, loopIterator) {
    array.forEach(item => {
        if (Utils.isCustomElement(item.elem) === false) {
            let params = item.attr.split('|'),
                r;
            let rowHtml = false;

            r = this.getPropsByScope(params[0], data, loopIterator);
            r = Utils.applyFormatter(r, params[1]);

            if (item.elem.localName === 'input') {
                switch (item.elem.type) {
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
                rowHtml ? (item.elem.innerHTML = r) : (item.elem.textContent = r);
            }
        }

    });
}