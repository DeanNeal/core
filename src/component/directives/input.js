// import { Utils } from '../../core';

export function _input(array, loopParams) {
    array.forEach(item => {
        let inputParams = {};
        
        item.attrs.forEach((attr) => {
            for(let key in attr) {
                inputParams[key] = this.getPropsByScope(attr[key], loopParams);
            }
        });

        const event = new CustomEvent('input-params', { detail: inputParams });
        item.elem.dispatchEvent(event);
    });
}