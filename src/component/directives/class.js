export function _class(array, data, loopIterator) {
    array.forEach((item) => {
        let array = item.attr.replace(/ +/g, "").split(',');
        let attr = item.attr;
        let root = item.elem;

        array.forEach(prop => {
            try {
                if (prop[0] === '@') {
                    let params = prop.split('@');
                    let r;

                    if (item.prev) {
                        root.classList.remove(item.prev)
                    }

                    // inside ac-for
                    r = this.getPropsByScope(params[1], data, loopIterator);

                    //remove previous class
                    item.prev = r;

                    if (r) {
                        root.classList.add(r)
                    }
                } else {
                    let params = prop.replace(/ +/g, "").split(':');
                    let className = params[0];
                    let r;

                    // inside ac-for
                    r = this.getPropsByScope(params[1], data, loopIterator);

                    r ? (root.classList.add(className)) : (root.classList.remove(className));
                }
            } catch (err) {
                throw new Error(this.constructor.name + '; ' + err);
            }
        });
    });
}