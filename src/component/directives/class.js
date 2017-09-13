export function _class(array, data) {
    array.forEach((item) => {
        let array = item.attr.split(',');

        let root = item.elem;
        array.forEach(prop => {
            if (prop[0] !== '@') {
                let reverse = false;
                let params = prop.replace(/ +/g, "").split(':');
                if (params[1][0] === '!') {
                    params[1] = params[1].substring(1);
                    reverse = true;
                }
                let className = params[0];
                let variable = params[1].split('.');
                let r = this.getComponentVariable(variable, data);
                r = reverse ? !r : r;
                r ? (root.classList.add(className)) : (root.classList.remove(className));
            } else {
                let params = prop.split('@');
                let variable = params[1].split('.');
                let r = this.getComponentVariable(variable, data);

                //remove previous class

                if (item.prev) {
                    root.classList.remove(item.prev)
                }
                item.prev = r;

                root.classList.add(r)
            }
        });
    });
}