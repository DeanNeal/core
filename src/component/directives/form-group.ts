// import { Utils } from '../../core';
import { IDirectiveParams } from 'src/interfaces';
import { FormGroup } from '../reactive-forms/form-group';

export function _formGroup(array: IDirectiveParams[], data) {
    array.forEach(item => {
        let formControls: NodeListOf<HTMLInputElement> = item.elem.querySelectorAll('[bind-form-control]');

        formControls = Array.prototype.map.call(formControls, r => {
            let attr = r.getAttribute('bind-form-control');
            r.removeAttribute('bind-form-control');
            r.dataset.name = attr;
            return r;
        });

        let formGroup = this.getPropsByScope(item.attr.replace(/ +/g, ""));

        if (formGroup) {
            formGroup.setComponent(this);
            item.elem.setAttribute('novalidate', 'novalidate');
            formControls.forEach(control => {
                let attr = control.dataset.name;
                if (formGroup.controls[attr]) {
                    formGroup.controls[attr].setElem(control);
                } else {
                    throw new Error('Control doesn\'t exist; ' + attr);
                }
            });

            item.elem.addEventListener('input', (e: KeyboardEvent) => {
                let attr = (e.target as HTMLInputElement).dataset.name;
                setValues(formControls, attr, e, item, formGroup);
            }, false);

            item.elem.addEventListener('change', (e: KeyboardEvent) => {
                let attr = (e.target as HTMLInputElement).dataset.name;
                setValues(formControls, attr, e, item, formGroup);
            }, false);

            item.elem.addEventListener('submit', (e: KeyboardEvent) => {
                let focusState = false;

                formControls.forEach((target: HTMLInputElement) => {
                    let attr = target.dataset.name;
                    let control = formGroup.controls[attr];
                    if (control.isValid() === false && !focusState) {
                        focusState = true;
                        control.markAsDirty();
                        // control.validate();
                        target.focus();
                    }
                });

                formGroup._validate();
            }, false);
        }
    });
}

function setValues(formControls: NodeListOf<HTMLInputElement>, attr: string, event: KeyboardEvent, item: IDirectiveParams, formGroup: FormGroup) {
    formControls.forEach(elem => {
        if (elem.dataset.name === attr && (elem.localName === 'input' || elem.localName === 'textarea')) {
            switch (elem.type) {
                case 'checkbox':
                    if (attr) {
                        let checkboxes = item.elem.querySelectorAll('input[type="checkbox"]:checked');
                        let values = Array.prototype.map.call(checkboxes, r => r.value).filter(r => r);
                        if (!values.length) {
                            values = '';
                        }

                        formGroup.setValue(attr, values);
                    }
                    break;
                case 'radio':
                    if (attr) {
                        formGroup.setValue(attr, (event.target as HTMLInputElement).value);
                    }
                    break;
                case 'text':
                case 'email':
                case 'number':
                case 'password':
                case 'textarea':
                    formGroup.setValue(attr, (event.target as HTMLInputElement).value);
                    break;
            }

        }
    });
}
