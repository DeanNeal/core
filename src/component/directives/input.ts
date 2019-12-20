import { ILoopParams, IDirectiveParams, SimpleObject } from "src/interfaces";

export function _input(array: IDirectiveParams[], loopParams: ILoopParams) {
    array.forEach((item: IDirectiveParams) => {
        let inputParams = {};

        item.attrs.forEach((attr: SimpleObject) => {
            for (let key in attr) {
                inputParams[key] = this.getPropsByScope(attr[key], loopParams);
            }
        });

        const event = new CustomEvent('input-params', { detail: inputParams });
        item.elem.dispatchEvent(event);
    });
}