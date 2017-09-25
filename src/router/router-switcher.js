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
                        this.destroyChild(this.root);
                        this.root.innerHTML = null; 
                    
                        let newCompEmpty = Component.COMPONENTS.filter(r=> r.selector === route.component)[0];
                        if(newCompEmpty) {
                            let newComp = document.createElement(route.component);
                            this.root.appendChild(newComp);
                            new newCompEmpty.c(newComp, { routeParams: params });
                        } else {
                            this.appendEmpty(this.root);
                        }
                        
                        this.prevPage = route.path;
                    }
 
                    let router = this.root.querySelectorAll('child-route-switcher')[0];

                    if (router) {
                        this.destroyChild(router);
                        router.innerHTML = null;
                        let current = this.routes.filter(item => item.path === route.path)[0];
                        let path = Router.getCurrentFullPath()[1];
                        let child = path ?
                            current.children.filter(item => item.path === path)[0] :
                            current.children.filter(item => item.path === '' || item.path === '/')[0];

                        if (this.prevChild !== path || !this.prevChild) {
                            if (child) {
                                let newComp = document.createElement(child.component);
                                router.appendChild(newComp);
                                let newCompEmpty = Component.COMPONENTS.filter(r=> r.selector === child.component)[0];
                                new newCompEmpty.c(newComp);
                            } else {
                                this.appendEmpty(router);
                            }
                            this.prevChild = path;
                        }
                    }
                }, route.children);
        });
        Router.update();
    }

    destroyChild(root) {
        Component.COMPONENTS.forEach(r=>{
            let a = root.querySelectorAll(r.selector);
            a.forEach(r=>{
                 r.COMPONENT.destroy();
            });
        });
    }

    appendEmpty(root) {
        let newComp = document.createElement('div');
        newComp.innerHTML = `Please specify a component for this route <b style="color: red">${Router.getCurrentFullPath().join('/')}</b>!`;
        root.appendChild(newComp);
    }
}