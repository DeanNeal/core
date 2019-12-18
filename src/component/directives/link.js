import { Router } from '../../core';

export function _link(array, loopParams) {
    array.forEach(item => {
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

        item.callback = (e) => {
            e.preventDefault();
            Router.navigate(route);
        };

        item.elem.addEventListener('click', item.callback, false);
        item.elem.setAttribute('href', route || '/');
    });
}