const Validators = {

    required(control) {
        return ['required', control.value ? true : false];
    },
    email(control) {
		let exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (control) => {
            const regexp = new RegExp(exp);
            return ['email', regexp.test(control.value)];
        }
    },
    regExp(exp) {
        return (control) => {
            const regexp = new RegExp(exp);
            return ['regExp', regexp.test(control.value)];
        }
    }

};

export { Validators };