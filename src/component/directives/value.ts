import { Utils } from '../../core';
import { ILoopParams, IDirectiveParams } from 'src/interfaces';

export function _value(array: IDirectiveParams[], loopParams: ILoopParams) {
    array.forEach((item: IDirectiveParams) => {
        let params = item.attr.split('|'),
            r;
        let rowHtml = false;

        r = this.getPropsByScope(params[0], loopParams);
        r = Utils.applyFormatter(r, params[1]);
        if (Utils.isCustomElement(item.elem) === false) {

            if (item.elem.localName === 'input') {
                switch ((item.elem as HTMLInputElement).type) {
                    case 'checkbox':
                        r ? item.elem.setAttribute('checked', 'true') : item.elem.removeAttribute('checked');
                        break;
                    case 'radio':
                        (item.elem as HTMLInputElement).value === r ? item.elem.setAttribute('checked', 'true') : item.elem.removeAttribute('selected');
                        break;
                    case 'text':
                    case 'email':
                    case 'number':
                    case 'password':
                        (item.elem as HTMLInputElement).value = r;
                        break;

                }
            } else {
                rowHtml ? (item.elem.innerHTML = r) : (item.elem.textContent = r);
            }
        } else {
            // const event = new CustomEvent('model-change', {detail: r});
            // item.elem.dispatchEvent(event);
        }

    });
}