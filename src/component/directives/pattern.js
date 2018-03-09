export function _pattern(array) {
    array.forEach(item => {
        let attr = item.attr.split(':');
        let pattern = new RegExp(attr[0], 'gi');
        let title = item.elem.getAttribute('bind-pattern-title');
        item.elem.addEventListener('keyup', (e) => {
            let value = e.target.value;

            if (value.match(pattern)) {
                item.elem.setCustomValidity('');
            } else {
                item.elem.setCustomValidity(title);
            }
        }, false);
    });
}