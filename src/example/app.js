import Styles from './styles/main.scss';
import { Register } from '../core';

import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { PluginsComponent} from './components/plugins/plugins.component';


import Docs from './components/documentation';

import { Routes } from './router.js';
Register({
    components: [
        { c: HomeComponent, selector: 'app-home' },
        { c: ContainerComponent, selector: 'app-container' },
        { c: HeaderComponent, selector: 'app-header' },
        { c: PluginsComponent, selector: 'app-plugins'}
    ],
    modules: [
        Docs
    ],
    serverUrl: '',
    routes: Routes,
    styles: Styles,
    onReady: () => {

    }
});