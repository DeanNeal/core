import { IDirectiveParams, ILoopParams } from "src/interfaces";

export function _style(array: IDirectiveParams[], loopParams: ILoopParams) {
    array.forEach((item: IDirectiveParams) => {
        let array = item.attr.split(',');

        array.forEach((prop: string) => {
            let minus = false;
            let params = prop.replace(/ +/g, "").split(':');
            let styleName = params[0];
            if (params[1][0] === '-') {
                params[1] = params[1].substr(1);
                minus = true;
            }

            let r = this.getPropsByScope(params[1], loopParams);
            r = minus ? '-' + r : r;

            r ? (item.elem.style[styleName] = r) : (item.elem.style[styleName] = '');
        });
    });
}