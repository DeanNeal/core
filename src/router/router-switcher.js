import Router from './router-core';
import { Component, GlobalData } from './../core';

export class RouteSwitcher {
    constructor(root, parent) {
        this.routes = RouteSwitcher.ROUTES;
        this.root = root;
        this.children = {};
        this.parent = parent;
        this.root.COMPONENT = this;
        this.constructorName = this.constructor.name;
        this.onCreate();
    }

    onCreate() {
        this.routes.forEach(route => {
            Router
                .on(route.path, (params) => {
                    if (this.prevPage !== route.path) { // don't refresh parent router
                        // REMOVE ALL COMPONENTS BEFORE CLEARING
                        this.destroyChildren(this.root);
                        this.renderComponent(this, route, params);
                        this.prevPage = route.path;
                    }


                    let childComp = this.children[Object.keys(this.children)[0]][0];
                    let router = childComp.root.querySelectorAll('child-route-switcher')[0];


                    if (router) {
                        this.destroyChildren(router);
                        let newComp = new ChildRouter(router, childComp);
                        if (childComp) {
                            childComp.children[newComp.constructor.name] = [];
                            childComp.children[newComp.constructor.name].push(newComp);
                        }

                        let current = this.routes.filter(item => item.path === route.path)[0];
                        let path = Router.getCurrentFullPath()[1];
                        let child = this.getChild(current, path);

                        if (this.prevChild !== path || !this.prevChild) {
                            this.renderComponent(newComp, child, params);
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

    getComponentName(route) {
        return Component.COMPONENTS.filter(r => r.selector === route.component)[0];
    }

    renderComponent(component, route, params) {
        if (route) {
            let newCompObject = this.getComponentName(route); //Component.COMPONENTS.filter(r => r.selector === route.component)[0];
            if (newCompObject) {
                let newComp = document.createElement(route.component);
                this.checkAccess(component.root, newComp, route, () => {
                    let a = new newCompObject(newComp, {}, component);
                    component.children = {};
                    component.children[a.constructor.name] = [];
                    component.children[a.constructor.name].push(a);
                });

            } else {
                this.appendEmpty(component.root);
            }

        } else {
            this.appendEmpty(component.root);
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
        if (this.root.childNodes[0]) {
            this.destroyAllChildren(this.root.childNodes[0].COMPONENT.children);

        }
        root.innerHTML = null;
    }

    destroyAllChildren(children) {
        for (let key in children) {
            children[key].forEach(child => {
                this.destroyAllChildren(child.children);
                child.children = [];
                // console.log(child);
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

class ChildRouter extends RouteSwitcher {
    constructor(root, parent) {
        super(root, parent);
    }

    onCreate() {

    }
    destroy() {

    }
}