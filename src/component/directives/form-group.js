import { Utils } from '../../core';
export function _formGroup(array, data) {
    array.forEach(item => {
        let formGroup = this.getComponentVariable(item.attr.split('.'));
        formGroup.setComponent(this);
        item.elem.setAttribute('novalidate', 'novalidate');
        item.elem.querySelectorAll('[ac-form-control]').forEach(control=>{
            let attr = control.getAttribute('ac-form-control');
            formGroup.controls[attr].setElem(control);;
        });

        item.elem.addEventListener('keyup', (e) => {
            let attr = e.target.getAttribute('ac-form-control');
            if (attr) {
                formGroup.controls[attr].setValue(e.target.value);
            }
            this.props._callAll();
        }, false);

        item.elem.addEventListener('submit', (e) => {
            let focusState = false;
            let controls = e.target.querySelectorAll('[ac-form-control]');

            formGroup._validate();

            controls.forEach(target => {
                let attr = target.getAttribute('ac-form-control');
                if (formGroup.controls[attr].isValid() === false && !focusState) {
                    focusState = true;
                    formGroup.controls[attr].markAsDirty();
                    formGroup.controls[attr].validate();
                    target.focus();
                }
            });

            this.props._callAll();
        }, true);
    });
}