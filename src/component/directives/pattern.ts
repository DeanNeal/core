import { IDirectiveParams } from "src/interfaces";

export function _pattern(array: IDirectiveParams[]) {
    array.forEach((item: IDirectiveParams) => {
        let attr = item.attr.split(':');
        let pattern = new RegExp(attr[0], 'gi');
        let title = item.elem.getAttribute('bind-pattern-title');
        item.elem.addEventListener('keyup', (e) => {
            let value = (e.target as HTMLInputElement).value;

            if (value.match(pattern)) {
                (item.elem as HTMLInputElement).setCustomValidity('');
            } else {
                (item.elem as HTMLInputElement).setCustomValidity(title);
            }
        }, false);
    });
}