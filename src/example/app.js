import Styles from './styles/main.scss';
import { Register } from '../core';
import {DatepickerComponent, TreeDebugComponent, BarChartComponent} from '../controls';

import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { HeaderComponent } from './components/header/header.component';

import { ControlsComponent } from './components/controls/controls.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import Docs from './components/documentation';
import Plugins from './components/plugins';


import UpperCaseDirective from './directives/upper-case.directive.js';


import { Routes } from './router.js';

Register({
    root: RootComponent,
    styles: Styles,
    components: [
       HeaderComponent,
       HomeComponent,

       ControlsComponent,
       NotFoundComponent,
       DatepickerComponent,
       BarChartComponent
    ],
    directives: [
        UpperCaseDirective
    ],
    modules: [Docs, Plugins, TreeDebugComponent],
    routes: Routes

});