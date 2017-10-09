import { Utils } from '../../core';
export function _props(array, data) {
    array.forEach(item => {
        if (Utils.isCustomElement(item.elem) === false) {
            let params = item.attr.split('|'),
                r;
            let formatter = params[1] ? Utils.removeSpacesFromString(params[1]) : null;
            let formatterData = params[1] ? params[1].split(':') : null;

            if (formatterData) {
                formatter = formatterData[0].trim();
                formatterData = formatterData[1].trim();
            }

            let currentVariable = Utils.removeSpacesFromString(params[0]).split('.');

            if (formatter && formatter === 'json') {
                r = JSON.stringify(this.getComponentVariable(currentVariable, data));
            } else if (formatter && formatter === 'date') {
                r = this.getComponentVariable(currentVariable, data);
                r = Utils.getDateByFormat(r, formatterData || '');
            } else {
                r = this.getComponentVariable(currentVariable, data);
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
                item.elem.innerHTML = r;
            }
        }

    });
}