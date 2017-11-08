const Validators = {

    required() {
        return (control) => {
            return control.value ? true : false;
        }
    },
    regExp(exp) {
        return (control) => {
            const regexp = new RegExp(exp);
            return regexp.test(control.value);
        }
    }

};

export { Validators };