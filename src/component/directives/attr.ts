import { ILoopParams, IDirectiveParams } from "src/interfaces";

export function _attr(array: IDirectiveParams[], loopParams: ILoopParams) {
    array.forEach((item: IDirectiveParams) => {
        let array = item.attr.split(',');

        array.forEach((prop: string) => {
            let params = prop.replace(/ +/g, "").split(':');
            let attrName = params[0];
            let r;

            r = this.getPropsByScope(params[1], loopParams);

            (r || r === 0) ? item.elem.setAttribute(attrName, r) : item.elem.removeAttribute(attrName);
        });
    });
}