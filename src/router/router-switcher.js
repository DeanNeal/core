import Router from './router-core';
import { Component, GlobalData } from './../core';

export class RouteSwitcher {
    constructor(root) {
        this.routes = RouteSwitcher.ROUTES;
        this.root = root;
        this.children = {};
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

    renderComponent(root, route, params) {
        if (route) {
            let newCompObject = Component.COMPONENTS.filter(r => r.selector === route.component)[0];
            if (newCompObject) {
                let newComp = document.createElement(route.component);
                this.checkAccess(root, newComp, route, () => {
                    let a = new newCompObject(newComp, {}, this);
                    this.children = {};
                    this.children[a.constructor.name] = [];
                    this.children[a.constructor.name].push(a);
                });

            } else {
                this.appendEmpty(root);
            }

        } else {
            this.appendEmpty(root);
        }
    }

    checkAccess(root, newComp, route, cb) {
        if (route.protector) {
            let protector = new route.protector();
            if (protector.check()) {
                root.appendChild(newComp);
                cb();
            } else {
                // this.noAccess(root);
            }
        } else {
            root.appendChild(newComp);
            cb();
        }

    }


    destroyChildren(root) {
        // Component.COMPONENTS.forEach(r=>{
        //     let a = root.querySelectorAll(r.selector);
        //     a.forEach(r=>{console.log(1);
        //          // r.COMPONENT.destroy();
        //     });
        // });
        if (this.root.childNodes[0]) {
            this.destroyAllChildren(this.root.childNodes[0].COMPONENT.children);

        }
        root.innerHTML = null;
    }

    destroyAllChildren(children) {
        // children.forEach(child => {
        //     if(child.length) {
        //         child.forEach(r=>{

        //         });
        //     } else {
        //         this.destroyAllChildren(child.children);
        //         child.children = [];
        //     }
        //     child.destroy();
        // });
        for (let key in children) {
            children[key].forEach(child => {
                this.destroyAllChildren(child.children);
                child.children = [];
                child.destroy();
            })
        }
    }

    appendEmpty(root) {
        let newComp = document.createElement('div');
        newComp.innerHTML = `Please specify a component for this route <b style="color: red">${Router.getCurrentFullPath().join('/')}</b>!`;
        root.appendChild(newComp);
    }

    // noAccess(root) {
    //     let newComp = document.createElement('div');
    //     newComp.innerHTML = `You have no access to this page`;
    //     newComp.className = 'no-access';
    //     root.appendChild(newComp);
    // }
}