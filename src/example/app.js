import Styles from './styles/main.scss';
// import { Register } from '../core';

// import { HomeComponent } from './components/home/home.component';
// import { ContainerComponent } from './components/container/container.component';
// import { HeaderComponent } from './components/header/header.component';
// import { PluginsComponent} from './components/plugins/plugins.component';


// import Docs from './components/documentation';

// import { Routes } from './router.js';
// Register({
//     components: [
//         { c: HomeComponent, selector: 'app-home' },
//         { c: ContainerComponent, selector: 'app-container' },
//         { c: HeaderComponent, selector: 'app-header' },
//         { c: PluginsComponent, selector: 'app-plugins'}
//     ],
//     modules: [
//         Docs
//     ],
//     serverUrl: '',
//     routes: Routes,
//     styles: Styles,
//     onReady: () => {

//     }
// });

let COMPONENTS = [];

import { Router, ObservableModel } from '../core';
import { PRIVATES } from '../component/private';
import { Directives } from '../component/Directives';
import { DIRECTIVES_NAMES } from '../component/const/directives';
import { EVENTS_NAMES } from '../component/const/events';

class Init {
    constructor(options) {
        this.root = options.root;
        this.COMPONENTS = options.components;
        loadStyle(options.styles);
        new RootComponent(options.root);
    }
}

class Component {
    constructor(root, options) {
        this.root = root;
        this.tpl = options.template || 'Empty template';
        this.props = new ObservableModel(options.props);

        for (let array in PRIVATES.DIRECTIVES) {
            PRIVATES.DIRECTIVES[array].set(this, []);
        }

        PRIVATES.EVENTS.set(this, []);
        PRIVATES.SUBSCRIPTIONS.set(this, []);
        PRIVATES.GLOBAL_EVENTS.set(this, null);
        // PRIVATES.HOST.EVENTS.set(this, custom.hostEvents);
        // PRIVATES.HOST.CLASS.set(this, custom.hostClasses);
        // PRIVATES.HOST.STYLE.set(this, custom.hostStyles);

        this.props.sub(r => {
                Directives._for.call(this, PRIVATES.DIRECTIVES['ac-for'].get(this));
                Directives._props.call(this, PRIVATES.DIRECTIVES['ac-value'].get(this));
                Directives._input.call(this, PRIVATES.DIRECTIVES['ac-input'].get(this));
                Directives._props.call(this, PRIVATES.DIRECTIVES['ac-model'].get(this));
                Directives._style.call(this, PRIVATES.DIRECTIVES['ac-style'].get(this));
                Directives._if.call(this, PRIVATES.DIRECTIVES['ac-if'].get(this));
                Directives._class.call(this, PRIVATES.DIRECTIVES['ac-class'].get(this));
                Directives._attr.call(this, PRIVATES.DIRECTIVES['ac-attr'].get(this));
                Directives._link.call(this, PRIVATES.DIRECTIVES['ac-link'].get(this));
                Directives._hostClasses.call(this, PRIVATES.HOST.CLASS.get(this));
                Directives._hostStyles.call(this, PRIVATES.HOST.STYLE.get(this));
            this.onUpdate();
        });

        this.render();
    }

    render() {
        this.root.innerHTML = this.tpl;

        DIRECTIVES_NAMES.forEach(directive => {
            Directives._init.call(this, this.root, directive, PRIVATES.DIRECTIVES[directive]);
        });

        EVENTS_NAMES.forEach(directive => {
            Directives._initEvent.call(this, this.root, directive, PRIVATES.EVENTS);
        });

        Directives._model.call(this, PRIVATES.DIRECTIVES['ac-model'].get(this));
        Directives._on.call(this, PRIVATES.DIRECTIVES['ac-on'].get(this));
        Directives._outside.call(this, PRIVATES.DIRECTIVES['ac-outside'].get(this));
        Directives._pattern.call(this, PRIVATES.DIRECTIVES['ac-pattern'].get(this));
        Directives._elRef.call(this, PRIVATES.DIRECTIVES['ac-ref'].get(this));
        Directives._events.call(this, PRIVATES.EVENTS.get(this));
        Directives._hostEvents.call(this, PRIVATES.HOST.EVENTS.get(this));

        if (PRIVATES.DIRECTIVES['ac-link'].get(this).length || PRIVATES.DIRECTIVES['ac-for'].get(this).length) {
            this.routerSub = Router.onChange(() => {
                let a = this.root.querySelectorAll('[href]');
                a.forEach(item => {
                    let fullRoute = Router.getCurrentFullPath();
                    let attr = item.getAttribute('href');
                    let setActive = attr === fullRoute.join('/') || (fullRoute[0] === attr && !item.getAttribute('ac-link-exact'))
                    setActive ? item.classList.add('active') : item.classList.remove('active')
                });
            });
        }
        this.onInit();
        this.compile();
    }

    compile() {
        COMPONENTS.forEach(comp => {console.log(this.root, comp.selector);
            let component = this.root.querySelectorAll(comp.selector)[0];
            if (component) {
                new comp.c(component);
            }
        });
    }

    getComponentVariable(variable, data) {
        if (data && typeof data !== 'object') return data;
        return variable.reduce((o, i, index) => {
            if (!o[i] && o[i] !== 0) { // in case when variable is undefined
                return index === variable.length - 1 ? null : {};
            } else {
                return o[i]
            }
        }, data || this)
    }

    onUpdate() {

    }

    onInit() {

    }
}

class RootComponent extends Component {
    constructor(root) {
        super(root, {
            template: `
<app-header></app-header>
<route-switcher></route-switcher>
<app-footer></app-footer>

            `
        })
    }
}

class HeaderComponent extends Component {
    constructor(root) {
        super(root, {
            template: `

<header>
    <div class="logo">
        <a class="gantt--main-menu-item" ac-link="/">
            ACE JS
        </a>
    </div>
    <ul class="gantt--main-menu">
        <li><a class="gantt--main-menu-item" ac-link="documentation">Documentation</a></li>
        <li><a class="gantt--main-menu-item" ac-link="plugins">Plugins</a></li>
        <!-- <li><a class="gantt--main-menu-item" ac-link="todo">TODO MVVM</a></li> -->
    </ul>
</header>

            `,
            props: {
                value: 'TEST!!!'
            }
        })
    }

    onInit() {
        this.props.set('value', 'FUCK YES MAN')
    }
}


class HomeComponent extends Component {
    constructor(root){
        super(root, {
            template: `
            <div class="app-container">
  <h1>ACE JS</h1>
  <p><b>AceJs</b> - is a front-end framework based on web components technology.</p>
  <button type="" ac-link="documentation" class="app-btn">GET STARTED</button>
</div>
`
        })
    }
}



let Routes = [
    { path: '/', component: 'app-home' },
    { path: 'plugins', component: 'app-plugins' },
    {
        path: 'documentation',
        component: 'app-documentation',
        children: [
            { path: '/', component: 'app-documentation-quick-start' },
            { path: 'how-to-install', component: 'app-documentation-how-to-install' },
            { path: 'architecture', component: 'app-documentation-architecture' },
            { path: 'component', component: 'app-documentation-component' },
            { path: 'lifecycle', component: 'app-documentation-lifecycle' },
            { path: 'utils', component: 'app-documentation-utils' },
            { path: 'directives', component: 'app-documentation-directives' },
            { path: 'modules', component: 'app-documentation-modules' },
            { path: 'smart-object', component: 'app-documentation-smart-object' },
            { path: 'router-config', component: 'app-documentation-router-config' },
            { path: 'http-module', component: 'app-documentation-http-module' },
            { path: 'http-methods', component: 'app-documentation-http-methods' }
        ]
    },
    { path: '404', component: 'app-not-found' } // wrong route
];


class RouteSwitcher {
    constructor(root) {
        this.routes = Routes;
        this.root = root;
        this.onCreate();
    }

    compile() {
        COMPONENTS.forEach(comp => {console.log(this.root, comp.selector);
            let component = this.root.querySelectorAll(comp.selector)[0];
            if (component) {
                new comp.c(component);
            }
        });
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

                        let newComp = document.createElement(route.component);
                        this.root.appendChild(newComp);
                        this.prevPage = route.path;
                    }

                    this.compile();

                    // let router = this.root.querySelectorAll('child-route-switcher')[0];
                    // if (router) {
                    //     router.innerHTML = null;
                    //     let current = this.routes.filter(item => item.path === route.path)[0];
                    //     let path = Router.getCurrentFullPath()[1];
                    //     let child = path ?
                    //         current.children.filter(item => item.path === path)[0] :
                    //         current.children.filter(item => item.path === '' || item.path === '/')[0];

                    //     if (this.prevChild !== path || !this.prevChild) {
                    //         if (child) {
                    //             let newComp = document.createElement(child.component);
                    //             router.appendChild(newComp);
                    //         } else {
                    //             let newComp = document.createElement('div');
                    //             newComp.innerHTML = `Please specify a component for this route <b style="color: red">${Router.getCurrentFullPath().join('/')}</b>!`;
                    //             router.appendChild(newComp);
                    //         }
                    //         this.prevChild = path;
                    //     }
                    // }


                }, route.children);
        });
        Router.update();
    }
}


COMPONENTS = [
        { c: HeaderComponent, selector: 'app-header' },
        { c: RouteSwitcher, selector: 'route-switcher' },
        { c: HomeComponent, selector: 'app-home'}
    ]

new Init({
    root: document.querySelectorAll('app-root')[0],
    styles: Styles,
    components: COMPONENTS
});


function loadStyle(styles) {
    if (styles) {
        let css = styles.toString(),
            //head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.head.append(style);
    }
}