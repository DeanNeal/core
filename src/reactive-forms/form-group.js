export class FormControl {
    constructor(params) {
        this.valid = true;
        this.dirty = false;
        this.value = params[0] || '';
        this.validators = params[1];
    }

    setElem(elem) {
        this.elem = elem;
        this.setValue(this.value);
    }

    setValue(value) {
        this.value = value;
        if (this.elem) {
            this.elem.value = value;
        }
        this.validate();
    }

    validate() {
        if (this.validators.length) {
            this.valid = this.validators.filter(validator => validator(this)).length === this.validators.length;
        } else {
            this.valid = true;
        }

        this.toggleClass();
    }

    toggleClass() {
        if (this.elem && this.dirty) {
            this.valid ? this.elem.classList.remove('ac-invalid') : this.elem.classList.add('ac-invalid');
        }
    }

    isValid() {
        this.validate();
        return this.valid;
    }

    markAsDirty() {
        this.dirty = true;
    }

    refresh() {
        this.valid = true;
        this.dirty = false;
        if (this.elem) {
            this.elem.classList.remove('ac-invalid')
        }
    }
}

export class FormGroup {
    constructor(controls) {
        this.valid = false;
        this.controls = {};
        this.value = {};
        this.component = null;

        for (let control in controls) {
            this.controls[control] = new FormControl(controls[control]);
        }
        this._validate();
        this.getValues();
    }

    getValues() {
        let result = {};
        for (let control in this.controls) {
            result[control] = this.controls[control].value;
        }
        this.value = result;
        return result;
    }

    refresh() {
        for (let control in this.controls) {
            this.controls[control].refresh();
        }
        if (this.component) {
            this.component.props._callAll();
        }
    }

    _validate() {
        let valid = [];
        for (let control in this.controls) {
            this.controls[control].validate(); // check current state
            valid.push(this.controls[control].valid);
        }
        let isValid = valid.filter(r => r).length === Object.keys(this.controls).length;

        this.valid = isValid;
    }

    isValid() {
        this._validate();
        return this.valid;
    }

    setComponent(component) {
        this.component = component;
    }
}