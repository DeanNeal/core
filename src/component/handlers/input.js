export function _input(array) {
    array.forEach(item => {

        let array = item.attr.replace(/ +/g, "").split(',');
        let inputParams = {};
        array.forEach(item => {
            let variable = item.split(':')[0];
            let params = item.split(':')[1].split('.');
            inputParams[variable] = this.getComponentVariable(params);
        });
        item.elem.COMPONENT.INPUT(inputParams);
    });
}