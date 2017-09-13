export function _elRef(array) {
    array.forEach(item => {
        let attr = item.attr;
        this.ui[attr] = item.elem;
    });
}