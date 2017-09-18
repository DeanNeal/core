import {Component, Router, TemplateEngine} from '../../core';

export function _link(array, data) {
    array.forEach(item => {
        item.elem.removeEventListener('click', item.callback, false); // remove previous handler

        let route = TemplateEngine(item.attr, data || this);
        item.callback  = (e) => {
            e.preventDefault();
            Router.navigate(route);
        };

        item.elem.addEventListener('click', item.callback, false);
        item.elem.setAttribute('href', route || '/');
    });
}