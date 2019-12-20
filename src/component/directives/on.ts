import { IDirectiveParams } from 'src/interfaces';


export function _on(array: IDirectiveParams[]) {
    array.forEach((item: IDirectiveParams) => {
        let listeners = item.attr.replace(/ +/g, "").split(',');

        if (listeners.length) {
            listeners.forEach((listener: string) => {
                let eventName = listener.split(':')[0];
                let fn = this[listener.split(':')[1]];
                on.call(this, eventName, fn, item.elem);
            });
        }
    });
}

function on(event: string, f: () => any, el: HTMLElement) {
    this.root.addEventListener(event, (e) => {
        if (e.target === el) { // listen to current component changes        
            e.stopPropagation(); // to prevent further propagation
            f.call(this, e, e.detail);
        }
    });
}