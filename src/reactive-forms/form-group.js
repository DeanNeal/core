export class FormControl {
    constructor(params, parent) {
        this.valid = true;
        this.dirty = false;
        this.value = params[0] || '';
        this.initValue = params[0] || '';
        this.validators = params[1];
        this.parent = parent;
        this.errors = {};
    }

    setElem(elem) {
        this.elem = elem;
        this.setValue(this.value, true);
    }

    setValue(value, silent) {
        this.value = value;
        if (this.elem) {
            this.elem.value = value;
        }

        this.parent.getValues();
        if (!silent) {
            this.markAsDirty();
            this.parent.onChangeCallback();
        }
        // this.validate();
        this.parent._validate();
    }

    validate() {
        if (this.validators.length) {
            // this.valid = this.validators.filter(validator => validator(this)[1]).length === this.validators.length;
            this.errors = {};
            this.validators.forEach(v=>{
                let validator = v(this);
                if(!validator[1] && Object.keys(this.errors).length === 0) {
                    this.errors[validator[0]] = true;
                }
            });
            this.valid = Object.keys(this.errors).length === 0;
        } else {
            this.valid = true;
        }

        this.toggleClass();
    }

    toggleClass() {
        if(this.elem) {
            if (this.dirty) {
                this.valid ? this.elem.classList.remove('ac-invalid') : this.elem.classList.add('ac-invalid');
            } else {
                this.elem.classList.remove('ac-invalid');
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
        this.setValue(this.initValue, true);
    }
}

export class FormGroup {
    constructor(controls) {
        this.valid = false;
        this.controls = {};
        this.value = {};
        this.component = null;
        this.onChangeCallback = () => {};

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

        this.valid = valid.filter(r => r).length === Object.keys(this.controls).length;
    }

    setValue(name, value) {
        this.controls[name].setValue(value, true);
        this._validate();
        this.getValues();
        // this.onChangeCallback();
    }

    isValid() {
        this._validate();
        return this.valid;
    }

    setComponent(component) {
        this.component = component;
    }
}