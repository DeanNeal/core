import {Utils} from '../../core';

export function _input(array) {
    array.forEach(item => {
        if(item.elem.COMPONENT){
            let array = Utils.removeSpacesFromString(item.attr).split(',');
            let inputParams = {};
            array.forEach(item => {
                let variable = item.split(':')[0];
                let params = item.split(':')[1].split('.');
                inputParams[variable] = this.getComponentVariable(params);
            });
            item.elem.COMPONENT.INPUT(inputParams);
        }
    });
}