import Styles from './styles/main.scss';
import { Register } from '../core';
import {DatepickerComponent} from '../controls';

import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { HeaderComponent } from './components/header/header.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { ControlsComponent } from './components/controls/controls.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import Docs from './components/documentation';


import UpperCaseDirective from './directives/upper-case.directive.js';


import { Routes } from './router.js';

Register({
    root: {
        c: RootComponent,
        selector: 'app-root'
    },
    styles: Styles,
    components: [
        { c: HeaderComponent, selector: 'app-header' },
        { c: HomeComponent, selector: 'app-home' },
        { c: PluginsComponent, selector: 'app-plugins' },
        { c: ControlsComponent, selector: 'app-controls' },
        { c: NotFoundComponent, selector: 'app-not-found' },

        {c: DatepickerComponent, selector: 'app-datepicker'}
    ],
    directives: [
        UpperCaseDirective
    ],
    modules: [Docs],
    routes: Routes

});