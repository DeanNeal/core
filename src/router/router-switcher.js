import Router from './router-core';
import { GlobalData } from './../core';

// export class RouteSwitcher {
//     constructor(routes, root) {
//         this.routes = routes;
//         this.root = root;
//         this.onCreate();
//     }

//     onCreate() {
//         this.routes.forEach(route => {
//             Router
//                 .on(route.path, (params) => {
//                     if (this.prevPage !== route.path) { // don't refresh parent router
//                         this.root.innerHTML = null;
//                         if (params) {
//                             window.temporaryObj = Object.assign({ id: parseInt(params) });
//                         }

//                         let newComp = document.createElement(route.component);
//                         this.root.appendChild(newComp);
//                         this.prevPage = route.path;
//                     }

//                     let router = this.root.querySelectorAll('child-route-switcher')[0];
//                     if (router) {
//                         router.innerHTML = null;
//                         let current = this.routes.filter(item => item.path === route.path)[0];
//                         let path = Router.getCurrentFullPath()[1];
//                         let child = path ?
//                             current.children.filter(item => item.path === path)[0] :
//                             current.children.filter(item => item.path === '' || item.path === '/')[0];

//                         if (this.prevChild !== path || !this.prevChild) {
//                             if (child) {
//                                 let newComp = document.createElement(child.component);
//                                 router.appendChild(newComp);
//                             } else {
//                                 let newComp = document.createElement('div');
//                                 newComp.innerHTML = `Please specify a component for this route <b style="color: red">${Router.getCurrentFullPath().join('/')}</b>!`;
//                                 router.appendChild(newComp);
//                             }
//                             this.prevChild = path;
//                         }
//                     }


//                 }, route.children);
//         });
//         Router.update();
//     }
// }


export class RouteSwitcher {
    constructor(root) {
        this.routes = window.Routes;
        this.root = root;
        this.onCreate();
    }

    compile() {

    }

    onCreate() {
        this.routes.forEach(route => {
            Router
                .on(route.path, (params) => {
                    if (this.prevPage !== route.path) { // don't refresh parent router
                        this.root.innerHTML = null;
                        if (params) {
                            window.temporaryObj = Object.assign({ id: parseInt(params) });
                        }

                        let newCompEmpty = window.COMPONENTS.filter(r=> r.selector === route.component)[0];
                        if(newCompEmpty) {
                            let newComp = document.createElement(route.component);
                            this.root.appendChild(newComp);
                            new newCompEmpty.c(newComp);
                        } else {
                            this.appendEmpty(this.root);
                        }
                        
                        this.prevPage = route.path;
                    }
 
                    let router = this.root.querySelectorAll('child-route-switcher')[0];

                    if (router) {
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
                                let newCompEmpty = window.COMPONENTS.filter(r=> r.selector === child.component)[0];
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

    appendEmpty(root) {
        let newComp = document.createElement('div');
        newComp.innerHTML = `Please specify a component for this route <b style="color: red">${Router.getCurrentFullPath().join('/')}</b>!`;
        root.appendChild(newComp);
    }
}


export function RegisterRouteElement(routes) {
    let ElemProto = Object.create(HTMLElement.prototype);
    let elem;
    ElemProto.createdCallback = function(params) {
        elem = new RouteSwitcher(routes, this);
    };

    ElemProto.detachedCallback = function() {

    };

    ElemProto.attachedCallback = function() {

    };

    ElemProto.attributeChangedCallback = function(a, b, c) {

    };

    document.registerElement('route-switcher', {
        prototype: ElemProto
    });
}