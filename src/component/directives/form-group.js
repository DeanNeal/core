import { Utils } from '../../core';
export function _formGroup(array, data) {
    array.forEach(item => {
        // let attr = item.attr;
        
        item.elem.addEventListener('keyup', (e) => {
            let formGroup = this.getComponentVariable(item.attr.split('.'));
            let attr = e.target.getAttribute('ac-form-control');

            if (attr) {
                formGroup.controls[attr].setValue(e.target.value);
                formGroup.controls[attr].markAsDirty();
                formGroup.controls[attr].isValid() ? e.target.classList.remove('ac-invalid') : e.target.classList.add('ac-invalid');
            }

            formGroup._validate();
            formGroup._getValues();

            this.props._callAll();
        }, false);

        item.elem.addEventListener('submit', (e) => {
            let formGroup = this.getComponentVariable(item.attr.split('.'));
            let focusState = false;
            let controls = e.target.querySelectorAll('[ac-form-control]');

            controls.forEach(target => {
                let attr = target.getAttribute('ac-form-control');
                if (formGroup.controls[attr].isValid() === false && !focusState) {
                    focusState = true;
                    formGroup.controls[attr].markAsDirty();
                    formGroup.controls[attr].validate();
                    formGroup.controls[attr].isValid() ? target.classList.remove('ac-invalid') : target.classList.add('ac-invalid');
                    target.focus();
                }
            });

            this.props._callAll();
        });
    });
}