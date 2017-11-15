import { Utils } from '../../core';

export function _input(array) {
    array.forEach(item => {
        if (item.elem.COMPONENT) {
            let array = Utils.removeSpacesFromString(item.attr).split(',');
            let inputParams = {};
            array.forEach(item => {
                let variable = item.split(':')[0];
                let params = item.split(':')[1];
                if (params[0] === '@') {
                    inputParams[variable] = this.getComponentVariable(params.replace(/@+/g, "").split('.'));
                } else {
                    inputParams[variable] = params;
                }
            });
            item.elem.COMPONENT.INPUT(inputParams);
        }
    });
}