import { Router, Application } from "../core";
import { Utils } from "../utils/utils";


// class ChildRouter extends RouteSwitcher {
//     constructor(root, parent) {
//         super(root, parent);
//     }

//     onCreate() {

//     }
//     destroy() {

//     }
// }

export default function RouterDecorator(decoratorParams) {
    return function decorator(Class) {
        Class.prototype.register = function () {
            const routes = decoratorParams.routes;
            if (customElements.get('route-switcher')) {
                throw new Error(decoratorParams.selector + ' is already declared');
                return;
            }
            window.customElements.define('route-switcher', class extends HTMLElement {
                connectedCallback() {
                    let prevPage;
                    let prevChild;

                    routes.forEach(route => {
                        Router
                            .on(route.path, (params) => {
                                if (prevPage !== route.path) { // don't refresh parent router
                                    // REMOVE ALL COMPONENTS BEFORE CLEARING
                                    this.destroyChildren(this);
                                    this.renderComponent(this, route, params);
                                    prevPage = route.path;
                                    prevChild = null;
                                }


                                let childComp;
                                let router;

                                if (Object.keys(this.children).length) {
                                    childComp = this.children[Object.keys(this.children)[0]][0];
                                    if (childComp && childComp.root) {
                                        router = childComp.root.querySelectorAll('child-route-switcher')[0];
                                    }
                                }

                                // if (router) {
                                //     this.destroyChildren(router);
                                //     let newComp = new ChildRouter(router, childComp);
                                //     if (childComp) {
                                //         childComp.children[newComp.constructor.name] = [];
                                //         childComp.children[newComp.constructor.name].push(newComp);
                                //     }

                                //     let current = routes.filter(item => item.path === route.path)[0];
                                //     let path = Router.getCurrentFullPath()[1];
                                //     let child = this.getChild(current, path);

                                //     if (prevChild !== path || !prevChild) {
                                //         this.renderComponent(newComp, child, params);
                                //         prevChild = path;
                                //     }
                                // }

                                this.setActiveLink();
                            });
                    });
                    Router.update();


                }

                setActiveLink() {
                    // let a = Application.rootInstance.root.querySelectorAll('[href]'); //this.root.querySelectorAll('[href]');
                    // a.forEach(item => {
                    //     let fullRoute = Router.getCurrentFullPath();
                    //     let fullPath = Router.getFullStringPath();
                    //     let attr = item.getAttribute('href');
                    //     let setActive = attr === fullPath || (fullRoute[0] === attr && !item.getAttribute('bind-link-exact'));
                    //     setActive ? item.classList.add('active') : item.classList.remove('active')
                    // });
                }

                getChild(current, path) {
                    return path ? current.children.filter(item => item.path === path)[0] :
                        current.children.filter(item => item.path === '' || item.path === '/')[0];
                }

                renderComponent(component, route, params) {
                    if (route) {
                        let newCompObject = this.getComponentName(route); //Component.COMPONENTS.filter(r => r.selector === route.component)[0];

                        if (newCompObject) {
                            let newComp = document.createElement(route.component);
                            this.checkAccess(component, newComp, route, () => {
                                let a = new newCompObject(newComp, {}, component);
                                // component.children = {};
                                // component.children[a.constructor.name] = [];
                                // component.children[a.constructor.name].push(a);
                            });

                        } else {
                            this.appendEmpty(component);
                        }

                    } else {
                        this.appendEmpty(component.root);
                    }
                }

                getComponentName(route) {
                    return Application.COMPONENTS.filter(r => r.selector === route.component)[0];
                }

                appendEmpty(root) {
                    let newComp = document.createElement('div');
                    newComp.innerHTML = `Please specify a component for this route <b style="color: red">${Router.getCurrentFullPath().join('/')}</b>!`;
                    root.appendChild(newComp);
                }

                checkAccess(root, newComp, route, cb) {
                    if (route.protector) {

                        let protector = Application.injectorGet(route.protector); //new route.protector();
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
                    let elements = root.querySelectorAll('*');
                    elements.forEach(node => {
                        if (Utils.isCustomElement(node)) {
                            node.COMPONENT && node.COMPONENT.destroy();
                        }
                    })

                    // if (root.childNodes[0]) {
                    //     let currentChild = root.childNodes[0].COMPONENT;
                    //     if(currentChild) {
                    //         this.destroyAllChildren(currentChild.children);
                    //         currentChild.destroy();
                    //     }
                    // }
                    root.innerHTML = '';
                }

                disconnectedCallback() {

                }
            });
        }


    }
}