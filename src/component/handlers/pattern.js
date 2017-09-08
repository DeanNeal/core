export function _pattern(array) {
    array.forEach(item => {
        let attr = item.attr.split(':');
        let pattern = new RegExp(attr[0], 'gi');

        item.elem.addEventListener('keyup', (e) => {
            let value = e.target.value;

            if (value.match(pattern)) {
                item.elem.style.borderColor = '';
                item.elem.setCustomValidity('');
            } else {
                item.elem.style.borderColor = '#ff6666';
                item.elem.setCustomValidity(attr[1]);
            }
        }, false);
    });
}