import {Observable} from './observable/observable';
import * as Decorators from './decorators';
import Component from  './decorators/component';
import Inject from './decorators/inject';

// import { Component } from './component/component';
import { RouteSwitcher } from './router/router-switcher';
import Router from './router/router-core';
import { TemplateEngine } from './template-engine';
import GlobalEvents from './global-events';
import { Utils } from './utils/utils';
import * as Plugins from './plugins';

// import { Http } from './http.js';
import Application from './api';

import Events from './dispatcher';

// import {ModalController} from './controls/modal';

import {FormGroup} from './reactive-forms/form-group';
import {Validators} from './reactive-forms/validators';

import './polifills';

export {
    Observable,
    Decorators,
    Component,
    Inject,
    Router,
    RouteSwitcher,
    TemplateEngine,
    Events,
    GlobalEvents,
    Utils,
    Plugins,

    // Http,
    Application,

    // ModalController,

    FormGroup,
    Validators
};