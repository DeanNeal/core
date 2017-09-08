// import 'document-register-element';
import Styles from './styles/main.scss';
import { Register } from '../core';

import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';

// import { FooterComponent } from './components/footer/footer.component';
//route
import Docs from './components/documentation';

import { Routes } from './router.js';
Register({
    components: [
        { c: HomeComponent, selector: 'app-home' },
        { c: ContainerComponent, selector: 'app-container' },
        { c: HeaderComponent, selector: 'app-header' },

        // { c: FooterComponent, selector: 'app-footer' },
    ],
    modules: [
        Docs
    ],
    routes: Routes,
    styles: Styles
});