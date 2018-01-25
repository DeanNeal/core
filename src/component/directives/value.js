import { Utils } from '../../core';
export function _value(array, data, loopIterator) {
    array.forEach(item => {
        if (Utils.isCustomElement(item.elem) === false) {
            let params = item.attr.split('|'), r;
            let formatter = params[1] ? Utils.removeSpacesFromString(params[1]) : null;
            let formatterData = params[1] ? params[1].split(':') : null;
            let rowHtml = false;

            if (formatterData) {
                formatter = formatterData[0].trim();
                formatterData = formatterData[1] ? formatterData[1].trim() : null;
            }

            r = this.getPropsByScope(params[0], data, loopIterator);
            
            if (formatter && formatter === 'json') {
                r = JSON.stringify(r);
            } else if (formatter && formatter === 'date') {
                r = Utils.getDateByFormat(r, formatterData || '');
            } else if(formatter && formatter === 'html') {
                rowHtml = true;
            } else if(formatter) {
                throw new Error('Unknown formatter ' + formatter);
            } else {
                r = r;
            }

            if(!r) {
                r = '';
            }

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