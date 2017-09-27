import Router from './router-core';
import { Component, GlobalData } from './../core';

export class RouteSwitcher {
    constructor(root) {
        this.routes = RouteSwitcher.ROUTES;
        this.root = root;
        this.onCreate();
    }

    onCreate() {
        this.routes.forEach(route => {
            Router
                .on(route.path, (params) => {
                    if (this.prevPage !== route.path) { // don't refresh parent router
                        // REMOVE ALL COMPONENTS BEFORE CLEARING
                        this.destroyChildren(this.root);
                        this.renderComponent(this.root, route, params);
                        this.prevPage = route.path;
                    }
 
                    let router = this.root.querySelectorAll('child-route-switcher')[0];

                    if (router) {
                        this.destroyChildren(router);
                        let current = this.routes.filter(item => item.path === route.path)[0];
                        let path = Router.getCurrentFullPath()[1];
                        let child = this.getChild(current, path);

                        if (this.prevChild !== path || !this.prevChild) {
                            this.renderComponent(router, child, params);
                            this.prevChild = path;
                        }
                    }
                });
        });
        Router.update();
    }

    getChild(current, path) {
        return path ? current.children.filter(item => item.path === path)[0] :
                      current.children.filter(item => item.path === '' || item.path === '/')[0];
    }

    renderComponent(root, route, params){
        if(route) {
            let newCompObject = Component.COMPONENTS.filter(r=> r.selector === route.component)[0];
            let newComp = document.createElement(route.component);
            this.checkAccess(root, newComp, route);
            new newCompObject.c(newComp, { routeParams: params });
        } else {
            this.appendEmpty(root);
        }
    }

    checkAccess(root, newComp, route) {
        if(route.protector){
            let protector = new route.protector();
            if(protector.check()){
                root.appendChild(newComp);
            } else {
                this.noAccess(root);
            }
        } else {
            root.appendChild(newComp);
        }

    }


    destroyChildren(root) {
        Component.COMPONENTS.forEach(r=>{
            let a = root.querySelectorAll(r.selector);
            a.forEach(r=>{
                 r.COMPONENT.destroy();
            });
        });
        root.innerHTML = null;
    }

    appendEmpty(root) {
        let newComp = document.createElement('div');
        newComp.innerHTML = `Please specify a component for this route <b style="color: red">${Router.getCurrentFullPath().join('/')}</b>!`;
        root.appendChild(newComp);
    }

    noAccess(root) {
        let newComp = document.createElement('div');
        newComp.innerHTML = `You have no access to this page`;
        newComp.className = 'no-access';
        root.appendChild(newComp);
    }
}