const Validators = {

    required(control) {
        return control.value ? true : false;
    },
    email(control) {
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(control.value);
    },
    regExp(exp) {
        return (control) => {
            const regexp = new RegExp(exp);
            return regexp.test(control.value);
        }
    }

};

export { Validators };