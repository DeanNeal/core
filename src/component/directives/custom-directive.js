import { Component } from '../component';
import API from'../../api';
import { PRIVATES } from '../private';
export function _customDirective(array) {
    API.CUSTOM_DIRECTIVES.forEach((directive) => {
        let array = PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector].get(this);
        if(array && array.length){
            array.forEach(r=>{
                r.directive.onUpdate();
            });
        }
    });
}