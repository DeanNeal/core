import { Utils } from '../../core';
export function _formGroup(array, data) {
    array.forEach(item => {
        let formGroup = this.getComponentVariable(item.attr.split('.'));
        if(formGroup) {        
            formGroup.setComponent(this);
            item.elem.setAttribute('novalidate', 'novalidate');
            item.elem.querySelectorAll('[ac-form-control]').forEach(control=>{
                let attr = control.getAttribute('ac-form-control');
                if(formGroup.controls[attr]) {
                    formGroup.controls[attr].setElem(control);;
                }  else {
                    throw new Error('Control doesn\'t exist; ' + attr);
                }
            });

            item.elem.addEventListener('keyup', (e) => {
                let attr = e.target.getAttribute('ac-form-control');
                if (attr) {
                    formGroup.setValue(attr, e.target.value);
                }
            }, false);

            item.elem.addEventListener('submit', (e) => {
                let focusState = false;
                let controls = e.target.querySelectorAll('[ac-form-control]');

                controls.forEach(target => {
                    let attr = target.getAttribute('ac-form-control');
                    if (formGroup.controls[attr].isValid() === false && !focusState) {
                        focusState = true;
                        formGroup.controls[attr].markAsDirty();
                        formGroup.controls[attr].validate();
                        target.focus();
                    }
                });

                formGroup._validate();
            }, true);
        }
    });
}