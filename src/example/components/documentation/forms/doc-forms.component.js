import { Component, Decorators, FormGroup, Validators } from '../../../../core';
import Tpl from './doc-forms.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-forms',
    template: Tpl,
    props: ()=> {
        return {        
            checkbox: {

            },
            model: {

            },
            form: new FormGroup({
                name: ['', [Validators.required, Validators.regExp('^[0-9a-zA-Z- ]+$')]],
                number: ['', [Validators.required, Validators.regExp('^[0-9a-zA-Z- ]+$')]],
                checkbox: ['', [Validators.required]],
                radio: ['', [Validators.required]]
            })
        }

    }
})
export class DocFormsComponent {

    onInit() {

    }

    submit(e, form) {

    }

    submitReactive(e) {
        e.preventDefault(e);
        if (this.props.form.isValid()) {
            let res = this.props.form.value;
        } 

    }

    keyup() {
     
    }


}