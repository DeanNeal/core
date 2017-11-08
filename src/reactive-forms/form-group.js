export class FormControl {
    constructor(params) {
        this.valid = true;
        this.dirty = false;
        this.validators = params.validators;
        this.value = null;

        if (params.value) {
            this.setValue(params.value);
        } else {
            this.validate();
        }
    }

    setValue(value) {
        this.value = value;
        this.dirty = true;
        this.validate();
    }

    validate() {
        this.validators.forEach(validator => {
            this.valid = validator(this);
        });
    }

    isValid() {
        return this.valid;
    }

    markAsDirty() {
        this.dirty = true;
    }
}

export class FormGroup {
    constructor(controls) {
        this.valid = false;
        this.controls = {};
        this.value = {};

        for (let control in controls) {
            this.controls[control] = new FormControl(controls[control]);
        }

    }

    _getValues() {
        let result = {};
        for (let control in this.controls) {
            result[control] = this.controls[control].value;
        }
        this.value = result;
        return result;
    }

    _validate() {
        let valid = [];
        for (let control in this.controls) {
            valid.push(this.controls[control].valid);
        }
        let isValid = valid.filter(r => r).length === Object.keys(this.controls).length;

        this.valid = isValid;
    }

    isValid() {
        return this.valid;
    }
}