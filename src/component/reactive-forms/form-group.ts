import { Utils } from './../../utils/utils';
import { SimpleObjectOfAny } from 'src/interfaces';

export class FormControl {
    public valid: boolean = true;
    public dirty: boolean = false;
    public value: string;
    public initValue: string;
    public validators: [];
    public errors = {};
    public elem;
    public elems = [];
    public parent;

    constructor(params: [any, []], parent: FormGroup) {
        this.value = params[0] || '';
        this.initValue = params[0] || '';
        this.validators = params[1] || [];
        Object.defineProperty(this, 'parent', { value: parent, writable: false })
    }

    setElem(elem: HTMLElement) {
        this.elem = elem;
        this.elems.push(elem);
        this.setValue(this.value, true, false);
    }

    setValue(value: any, silent: boolean = false, validate: boolean = true) {
        this.value = value;
        if (this.elem && Utils.isTextField(this.elem)) {
            this.elem.value = value;
        } else if (this.elem.type === 'checkbox') {
            this.elem.checked = value.includes(this.elem.value);
        } else if (this.elem.type === 'radio') {
            this.elem.checked = value == this.elem.value;
        }

        this.parent.getValues();

        if (!silent) {
            this.markAsDirty();
            this.parent.onChangeCallback();
        }

        if (validate) {
            this.parent._validate();
        }
    }

    validate() {
        if (this.validators.length) {

            this.errors = {};
            this.validators.forEach((v: any) => {
                let validator = v(this);
                if (!validator[1] && Object.keys(this.errors).length === 0 && this.dirty) {
                    this.errors[validator[0]] = true;
                }
            });

            this.valid = this.validators.filter((validator: any) => validator(this)[1]).length === this.validators.length;
        } else {
            this.valid = true;
        }

        this.toggleClass();
    }

    toggleClass() {
        if (this.elem) {
            if (this.dirty) {
                this.valid ? this.elem.classList.remove('form-invalid') : this.elem.classList.add('form-invalid');
            } else {
                this.elem.classList.remove('form-invalid');
            }
        }
    }

    isValid() {
        this.validate();
        return this.valid;
    }

    markAsDirty() {
        this.dirty = true;
    }

    reset() {
        this.valid = true;
        this.dirty = false;
        this.errors = {};
        this.value = this.initValue;

        this.elems.forEach(elem => {
            if (elem && Utils.isTextField(elem)) {
                elem.value = this.initValue;
            } else if (this.elem.type === 'checkbox') {
                elem.checked = this.initValue.includes(elem.value);
            } else if (this.elem.type === 'radio') {
                elem.checked = this.initValue == elem.value;
            }
        });

    }
}

export class FormGroup {
    public valid: boolean = false;
    public controls;
    public value;
    public component;
    public onChangeCallback = () => { }

    constructor(controls: SimpleObjectOfAny) {
        this.valid = false;
        this.controls = {};
        this.value = {};
        this.component = null;
        this.onChangeCallback = () => { };

        for (let control in controls) {
            this.controls[control] = new FormControl(controls[control], this);
        }
        this._validate();
        this.getValues();
    }

    onChange(callback) {
        this.onChangeCallback = callback;
    }

    getValues() {
        let result = {};
        for (let control in this.controls) {
            result[control] = this.controls[control].value;
        }
        this.value = result;
        return result;
    }

    reset() {
        for (let control in this.controls) {
            this.controls[control].reset();
        }

        this._validate();
        this.getValues();
    }

    _validate() {
        let valid = [];
        for (let control in this.controls) {
            this.controls[control].validate(); // check current state
            valid.push(this.controls[control].valid);
        }

        this.valid = valid.filter(r => r).length === Object.keys(this.controls).length;

        if (this.component) {
            this.component.changeDetection();
        }
    }

    setValue(name, value) {
        if (typeof name === 'string') {
            this.controls[name].setValue(value);
            this.getValues();
        } else if (typeof name === 'object') {

            for (let key in name) {
                this.controls[key].setValue(name[key], false, false);
            }

            this._validate();
            this.getValues();
            this.onChangeCallback();
        }
    }

    isValid() {
        this._validate();
        return this.valid;
    }

    setComponent(component) {
        this.component = component;
    }
}