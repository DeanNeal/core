export function _model(array) {
    array.forEach(item => {
        let params = item.attr.split('.');

        item.elem.addEventListener('keyup', (e) => {
            let value = e.currentTarget.value;
            this.props.set(params[params.length - 1], value);
        }, false);

        if (item.elem.type === 'checkbox' || item.elem.type === 'radio') {
            item.elem.addEventListener('change', (e) => {
                let params = item.attr.split('.');
                let last = params[params.length - 1];
                params.splice(-1, 1);
                let r = params.reduce((o, i) => o[i], this);
                r[last] = item.elem.type === 'radio' ? e.currentTarget.value : e.currentTarget.checked;
                this.props._callAll();
            }, false);
        }

        item.elem.addEventListener('modelChange', (e) => {
            this.props.set(params[params.length - 1], e.detail);
        }, false);
    });
}