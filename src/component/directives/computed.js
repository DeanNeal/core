export function _computed(params) {
    if(params) {
        for(let computed in params){
            let newValue = params[computed].call(this.props);
            this.props.set(computed, newValue, true)
        }
    }
}