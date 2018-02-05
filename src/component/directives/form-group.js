import { Utils } from '../../core';
export function _formGroup(array, data) {
    array.forEach(item => {
        let formControls = item.elem.querySelectorAll('[ac-form-control]');
        formControls = Array.prototype.map.call(formControls, r=> {
            let attr = r.getAttribute('ac-form-control');
            r.removeAttribute('ac-form-control');
            r.dataset.name = attr;
            return r;
        });
        
        let formGroup = this.getComponentVariable(item.attr.split('.'));

        if (formGroup) {
            formGroup.setComponent(this);
            item.elem.setAttribute('novalidate', 'novalidate');
            formControls.forEach(control => {
                let attr = control.dataset.name;
                if (formGroup.controls[attr]) {
                    formGroup.controls[attr].setElem(control);;
                } else {
                    throw new Error('Control doesn\'t exist; ' + attr);
                }
            });

            item.elem.addEventListener('input', (e) => {
                let attr = e.target.dataset.name;
                setValues(formControls, attr, e, item, formGroup);
            }, false);

            item.elem.addEventListener('change', (e) => {
                let attr = e.target.dataset.name;
                setValues(formControls, attr, e, item, formGroup);
            }, false);

            item.elem.addEventListener('submit', (e) => {
                let focusState = false;

                formControls.forEach(target => {
                    let attr = target.dataset.name;
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

function setValues(formControls, attr, event, item, formGroup) {
    formControls.forEach(elem =>{
        if (elem.dataset.name === attr &&  elem.localName === 'input') {
            switch (elem.type) {
                case 'checkbox':
                    if (attr) {
                        let checkboxes = item.elem.querySelectorAll('input[type="checkbox"]:checked');
                        let values = Array.prototype.map.call(checkboxes, r => r.value).filter(r=> r);
                        if(!values.length){
                            values = '';
                        }
                        formGroup.setValue(attr, values);
                    }
                break;
                case 'radio':
                    if (attr) {
                        formGroup.setValue(attr, event.target.value);
                    }
                    break;
                case 'text':
                case 'email':
                case 'password':
                    formGroup.setValue(attr, event.target.value);
                    elem.value = event.target.value;
                    break;
            }

        }
    });
}
