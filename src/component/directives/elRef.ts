import { IDirectiveParams } from "src/interfaces";

export function _elRef(array: IDirectiveParams[]) {
    array.forEach((item: IDirectiveParams) => {
        let attr = item.attr;
        this.$refs[attr] = item.elem;
    });
}