import { Router } from '../../core';
import { ILoopParams, IDirectiveParams } from 'src/interfaces';

export function _link(array: IDirectiveParams[], loopParams: ILoopParams) {
    array.forEach((item: any) => {
        item.elem.removeEventListener('click', item.callback, false); // remove previous handler

        let route = item.attr; //TemplateEngine(item.attr, data || this);

        let regExp = /{{([^%>]+)?}}/g;
        let matches = item.attr.match(regExp);
        let params = regExp.exec(item.attr)
        if (params) {

            let r;
            r = this.getPropsByScope(params[1], loopParams);

            route = item.attr.replace(regExp, r);
        }

        item.callback = (e: MouseEvent) => {
            e.preventDefault();
            Router.navigate(route);
        };

        item.elem.addEventListener('click', item.callback, false);
        item.elem.setAttribute('href', route || '/');
    });
}