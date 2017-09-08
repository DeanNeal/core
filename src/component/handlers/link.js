import {Component, Router} from '../../core';

export function _link(array, data) {
    array.forEach(item => {
        let route = getRoute.call(this, item, data);
        item.elem.addEventListener('click', (e) => {
            e.preventDefault();
            Router.navigate(route);
        }, false);
        item.elem.setAttribute('href', route || '/');
    });
}

function getRoute(item, data) {
    let route = '';
    let params = item.attr.split('.');
    if (params[0][0] === '@') {
        params[0] = params[0].substr(1);
        route = this.getComponentVariable(params, data);
    } else {
        route = item.attr;
    }
    return route;
}