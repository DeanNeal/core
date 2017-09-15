import { SmartObject } from './model/model';
import { Register } from './register';
import { Component } from './component/component';
import { RouteSwitcher } from './router/router-switcher';
import Router from './router/router-core';
import { TemplateEngine } from './template-engine';
import GlobalEvents from './global-events';
import { Utils } from './utils/utils';
import * as Plugins from './plugins';
import { Http } from './http.js';
import { Store } from './store.js';

export {
    SmartObject,
    Register,
    Component,
    Router,
    RouteSwitcher,
    TemplateEngine,
    GlobalEvents,
    Utils,
    Plugins,
    Http,
    Store
};