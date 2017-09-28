export function _model(array) {
    array.forEach(item => {
        item.elem.addEventListener('keyup', (e) => {
            this.setComponentVariable(item.attr, e.currentTarget.value);
        }, false);

        if (item.elem.type === 'checkbox' || item.elem.type === 'radio') {
            item.elem.addEventListener('change', (e) => {
                this.setComponentVariable(item.attr, item.elem.type === 'radio' ? e.currentTarget.value : e.currentTarget.checked);
            }, false);
        }

        item.elem.addEventListener('modelChange', (e) => {
            this.setComponentVariable(item.attr, e.detail);
        }, false);
    });
}