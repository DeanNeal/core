import { Component, Router, TemplateEngine } from '../../core';

export function _link(array, data) {
    array.forEach(item => {
        item.elem.removeEventListener('click', item.callback, false); // remove previous handler

        let route = item.attr; //TemplateEngine(item.attr, data || this);

        let regExp = /{{([^%>]+)?}}/g;
        let matches = item.attr.match(regExp);
        let params = regExp.exec(item.attr)
        if (params) {
            let r = this.getComponentVariable(params[1].split('.'), data);
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