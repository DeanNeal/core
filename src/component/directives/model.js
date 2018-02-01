export function _model(array, loopParams, collectionName, data) {
    array.forEach(item => {

        if(item.attr === loopParams) {
            throw new Error('Cannot assign to a reference or variable; ' + this.constructor.name + '; ' + collectionName);
        }
        if (item.elem.localName === 'input') {

            switch (item.elem.type) {
                case 'checkbox':
                    item.elem.addEventListener('change', (e) => {
                        this.setComponentVariable(item.attr, e.currentTarget.checked ? true: false);
                    }, false);
                    break;
                case 'radio':
                    item.elem.addEventListener('change', (e) => {
                        this.setComponentVariable(item.attr, e.currentTarget.value);
                    }, false);
                    break;
                case 'text':
                case 'email':
                case 'password':
                    item.elem.addEventListener('input', (e) => {
                        this.setComponentVariable(item.attr, e.currentTarget.value, loopParams, collectionName, data);
                    }, false);
                    break;
            }

        }

        item.elem.addEventListener('modelChange', (e) => {
            this.setComponentVariable(item.attr, e.detail);
        }, false);
    });
}