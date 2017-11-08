export function _class(array, data) {
    array.forEach((item) => {
        let array = item.attr.split(',');
        let attr = item.attr;
        let root = item.elem;
        // array.forEach(prop => {
        //     if (prop[0] !== '@') {
        //         let reverse = false;
        //         let params = prop.replace(/ +/g, "").split(':');
        //         if (params[1][0] === '!') {
        //             params[1] = params[1].substring(1);
        //             reverse = true;
        //         }
        //         let className = params[0];
        //         let variable = params[1].split('.');
        //         let r = this.getComponentVariable(variable, data);
        //         r = reverse ? !r : r;
        //         r ? (root.classList.add(className)) : (root.classList.remove(className));
        //     } else {
        //         let params = prop.split('@');
        //         let variable = params[1].split('.');
        //         let r = this.getComponentVariable(variable, data);

        //         //remove previous class

        //         if (item.prev) {
        //             root.classList.remove(item.prev)
        //         }
        //         item.prev = r;

        //         root.classList.add(r)
        //     }
        // });

        array.forEach(prop => {

            try {

                if (prop[0] === '@') {
                    let params = prop.split('@');
                    let variable = params[1].split('.');
                    let r = this.getComponentVariable(variable, data);

                    //remove previous class

                    if (item.prev) {
                        root.classList.remove(item.prev)
                    }
                    item.prev = r;

                    root.classList.add(r)
                } else {
                    let params = prop.replace(/ +/g, "").split(':');
                    let className = params[0];
                    let r = new Function('return ' + params[1]).apply(this.props);

                    r ? (root.classList.add(className)) : (root.classList.remove(className));
                }
            } catch (err) {
                throw new Error(this.constructor.name + '; ' + err);
            }
        });
    });
}