export function _computed(params) {
    if (params) {
        for (let computed in params) {
            try {
                let newValue = params[computed].call(this);
                this.props.set(computed, newValue, true)
            } catch (err) {
                throw new Error(err + '; ' + this.constructor.name);
            }
        }
    }
}