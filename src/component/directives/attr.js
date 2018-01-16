export function _attr(array, data) {
    array.forEach(item => {
        let array = item.attr.split(',');

        array.forEach(prop => {
            let params = prop.replace(/ +/g, "").split(':');
            let attrName = params[0];
            let variable = params[1].split('.');
            let r = this.getComponentVariable(variable, data);

            (r || r === 0) ? item.elem.setAttribute(attrName, r) : item.elem.removeAttribute(attrName);
        });
    });
}