import Styles from './styles/main.scss';
import { Register, RouteSwitcher } from '../core';

import { HomeComponent } from './components/home/home.component';
// import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
// import { PluginsComponent} from './components/plugins/plugins.component';

// import Docs from './components/documentation';

import { Routes } from './router.js';


let COMPONENTS = [];


COMPONENTS = [
        { c: HeaderComponent, selector: 'app-header' },
        { c: RouteSwitcher, selector: 'route-switcher' },
        { c: HomeComponent, selector: 'app-home'}
    ]

Register({
    root: document.querySelectorAll('app-root')[0],
    styles: Styles,
    components: COMPONENTS
});


