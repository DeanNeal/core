export function _style(array, data) {
    array.forEach(item => {
        let array = item.attr.split(',');

        array.forEach(prop => {
            let minus = false;
            let params = prop.replace(/ +/g, "").split(':');
            let styleName = params[0];
            if (params[1][0] === '-') {
                params[1] = params[1].substr(1);
                minus = true;
            }
            let variable = params[1].split('.');
            let r = this.getComponentVariable(variable, data);
            r = minus ? '-' + r : r;
            r ? (item.elem.style[styleName] = r) : (item.elem.style[styleName] = '');
        });
    });
}