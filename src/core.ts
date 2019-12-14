import Application from './api';
// import {Observable} from './observable/observable';
// import * as Decorators from './decorators';
import Component from  './decorators/component';
import Route from  './decorators/router';
// import Inject from './decorators/inject';
import {Output} from './decorators/output';
import {Input} from './decorators/input';
import {EventEmitter} from './utils/event-emitter';
// import { Component } from './component/component';
// import { RouteSwitcher } from './router/router-switcher';
import Router from './router/router-core';
// import { TemplateEngine } from './template-engine';
// import GlobalEvents from './global-events';
import { Utils } from './utils/utils';
import * as Plugins from './plugins';

// import { Http } from './http.js';

import Events from './dispatcher';

// import {ModalController} from './controls/modal';

import {FormGroup} from './reactive-forms/form-group';
import {Validators} from './reactive-forms/validators';

import './polyfills';

export {
    EventEmitter,
    Component,
    Route,
    // Inject,
    Router,

    Output,
    Input,
    // RouteSwitcher,
    // TemplateEngine,
    Events,
    Utils,
    Plugins,

    // Http,
    Application,

    // ModalController,

    FormGroup,
    Validators
};