/*!
 * ace-js 0.1.0
 * May be freely distributed under the MIT license 
 * Author: Bogdan Zinkevich
 * Last update: 2017-9-13 18:53:31
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("index", [], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Store = exports.Http = exports.Utils = exports.GlobalEvents = exports.TemplateEngine = exports.RouteSwitcher = exports.Router = exports.Component = exports.Register = exports.SmartObject = undefined;

	var _model = __webpack_require__(2);

	var _register = __webpack_require__(3);

	var _component = __webpack_require__(6);

	var _routerSwitcher = __webpack_require__(4);

	var _routerCore = __webpack_require__(5);

	var _routerCore2 = _interopRequireDefault(_routerCore);

	var _templateEngine = __webpack_require__(27);

	var _globalEvents = __webpack_require__(28);

	var _globalEvents2 = _interopRequireDefault(_globalEvents);

	var _utils = __webpack_require__(29);

	var _http = __webpack_require__(30);

	var _store = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SmartObject = _model.SmartObject;
	exports.Register = _register.Register;
	exports.Component = _component.Component;
	exports.Router = _routerCore2.default;
	exports.RouteSwitcher = _routerSwitcher.RouteSwitcher;
	exports.TemplateEngine = _templateEngine.TemplateEngine;
	exports.GlobalEvents = _globalEvents2.default;
	exports.Utils = _utils.Utils;
	exports.Http = _http.Http;
	exports.Store = _store.Store;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SmartObject = exports.SmartObject = function () {
	    function SmartObject(options) {
	        _classCallCheck(this, SmartObject);

	        this._data = options || {};
	        this.lId = -1;
	        if (options) {
	            this.defineProperties(options);
	        }

	        this.callbacksArray = [];
	    }

	    _createClass(SmartObject, [{
	        key: 'defineProperties',
	        value: function defineProperties(options) {
	            var _this = this;

	            Object.keys(options).forEach(function (key) {
	                _this.defineProperty(key, options[key]);
	            });
	        }
	    }, {
	        key: 'defineProperty',
	        value: function defineProperty(key, value) {
	            var _this2 = this;

	            Object.defineProperty(this, key, {
	                set: function set(value) {
	                    return _this2.set(key, value);
	                },
	                get: function get() {
	                    return _this2.get(key);
	                },
	                configurable: true
	            });
	        }
	    }, {
	        key: 'sub',
	        value: function sub(f) {
	            var _this3 = this;

	            this.callbacksArray.push({ f: f, id: ++this.lId });

	            f.call(this, this._data);

	            var a = Number(this.lId);
	            return {
	                unsubscribe: function unsubscribe() {
	                    // console.log(this.callbacksArray.length);
	                    _this3.unsubscribe(a);
	                }
	            };
	        }
	    }, {
	        key: 'unsubscribe',
	        value: function unsubscribe(id) {
	            this.callbacksArray = this.callbacksArray.filter(function (r) {
	                return r.id !== id;
	            });
	            // console.log(this.callbacksArray);
	        }
	    }, {
	        key: 'reset',
	        value: function reset(data) {
	            this._data = data;
	            this.defineProperties(data);
	            this._callAll();
	        }
	    }, {
	        key: 'set',
	        value: function set(data, value) {

	            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object') {
	                if (data.length || data.length === 0) {
	                    this._data = data;
	                } else {
	                    for (var key in data) {
	                        this._data[key] = data[key];
	                    }
	                    this.defineProperties(data);
	                }
	            } else {
	                this.defineProperty(data, value);
	                this._data[data] = value;
	            }

	            this._callAll();
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            return this._data[key];
	        }
	    }, {
	        key: '_callAll',
	        value: function _callAll() {
	            var _this4 = this;

	            this.callbacksArray.forEach(function (r) {
	                if (_this4._data) {
	                    r.f.call(_this4, _this4._data);
	                }
	            });
	        }
	    }, {
	        key: 'add',
	        value: function add(data, model) {
	            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
	                this._data.push(data);
	            } else {
	                this[data].push(model);
	            }

	            this._callAll();
	        }
	    }, {
	        key: 'save',
	        value: function save(params) {
	            var res = this._data.map(function (item) {
	                if (item.id === params.id) {
	                    item = params;
	                }
	                return item;
	            });
	            this.set(res);
	        }
	    }, {
	        key: 'last',
	        value: function last() {
	            return this._data[this._data.length - 1];
	        }
	    }, {
	        key: 'remove',
	        value: function remove(id) {
	            this._data = this._data.filter(function (item) {
	                return item.id != id;
	            });
	            this._callAll();
	        }
	    }]);

	    return SmartObject;
	}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Register = Register;
	exports.RegisterElement = RegisterElement;

	var _core = __webpack_require__(1);

	var _routerSwitcher = __webpack_require__(4);

	function Register(options) {
	    // console.time('modules')

	    if (options.styles) {
	        loadStyle(options.styles);
	    }

	    if (options.serverUrl) {
	        _core.Http.setServerUrl(options.serverUrl);
	    }

	    options.components.forEach(function (component) {
	        registerComponent(component);
	    });

	    options.modules.forEach(function (module) {
	        module.forEach(function (component) {
	            registerComponent(component);
	        });
	    });

	    if (!options.routes) {
	        console.warn('You should set routes!');
	    } else {
	        new _routerSwitcher.RegisterRouteElement(options.routes);
	    }

	    if (options.onReady) {
	        options.onReady.call(this);
	    }
	    // console.timeEnd('modules')
	}

	function registerComponent(component) {
	    if (component.c instanceof _core.Component.constructor) {
	        RegisterElement(component);
	    } else {
	        console.warn('Wrong type of component');
	    }
	}

	function RegisterElement(comp) {
	    var ElemProto = Object.create(HTMLElement.prototype);
	    var elem = void 0;
	    ElemProto.createdCallback = function (params) {
	        var attrs = {};
	        for (var i = 0; i < this.attributes.length; i++) {
	            attrs[this.attributes[i].nodeName] = this.attributes[i].nodeValue;
	        }

	        //temporary solution
	        var props = window.temporaryObj || {};
	        delete window.temporaryObj;
	        elem = new comp.c({ ce: this, attrs: attrs, props: props });
	        this.COMPONENT = elem;
	    };

	    ElemProto.detachedCallback = function () {
	        // elem.destroy();
	        //  elem = undefined;
	        _core.Component.destroy.call(this.COMPONENT);
	    };

	    ElemProto.attachedCallback = function () {
	        elem.onAttach();
	        // this.COMPONENT.onAttach();
	    };

	    ElemProto.attributeChangedCallback = function (a, b, c) {
	        // elem.props.update(a, c);
	    };

	    document.registerElement(comp.selector, {
	        prototype: ElemProto
	    });
	}

	// let elem;
	// class BasicElement extends HTMLElement {
	//     constructor(params) {
	//         super(params);
	//     }
	//     connectedCallback(params) {
	//         // this.textContent = 'Just a basic custom element.';
	//         console.log(params);
	//         let attrs = {};
	//         for (let i = 0; i < this.attributes.length; i++) {
	//             attrs[this.attributes[i].nodeName] = this.attributes[i].nodeValue
	//         }
	//
	//         let test = window.temporaryObj || {};// Object.assign({}, window.temporaryObj);
	//         delete window.temporaryObj;
	//         elem = new comp.c({ce: this, attrs: attrs, props: test});
	//         this.COMPONENT = elem;
	//     }
	//
	//     disconnectedCallback() {
	//         this.COMPONENT.destroy();
	//     }
	//
	//     attributeChangedCallback(attrName, oldVal, newVal) {
	//     }
	// }
	// customElements.define(comp.selector, BasicElement);


	function loadStyle(styles) {
	    if (styles) {
	        var css = styles.toString(),

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RouteSwitcher = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.RegisterRouteElement = RegisterRouteElement;

	var _routerCore = __webpack_require__(5);

	var _routerCore2 = _interopRequireDefault(_routerCore);

	var _core = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RouteSwitcher = exports.RouteSwitcher = function () {
	    function RouteSwitcher(routes, root) {
	        _classCallCheck(this, RouteSwitcher);

	        this.routes = routes;
	        this.root = root;
	        this.onCreate();
	    }

	    _createClass(RouteSwitcher, [{
	        key: 'onCreate',
	        value: function onCreate() {
	            var _this = this;

	            this.routes.forEach(function (route) {
	                _routerCore2.default.on(route.path, function (params) {
	                    if (_this.prevPage !== route.path) {
	                        // don't refresh parent router
	                        _this.root.innerHTML = null;
	                        if (params) {
	                            window.temporaryObj = Object.assign({ id: parseInt(params) });
	                        }

	                        var newComp = document.createElement(route.component);
	                        _this.root.appendChild(newComp);
	                        _this.prevPage = route.path;
	                    }

	                    var router = _this.root.querySelectorAll('child-route-switcher')[0];
	                    if (router) {
	                        router.innerHTML = null;
	                        var current = _this.routes.filter(function (item) {
	                            return item.path === route.path;
	                        })[0];
	                        var path = _routerCore2.default.getCurrentFullPath()[1];
	                        var child = path ? current.children.filter(function (item) {
	                            return item.path === path;
	                        })[0] : current.children.filter(function (item) {
	                            return item.path === '' || item.path === '/';
	                        })[0];

	                        if (_this.prevChild !== path || !_this.prevChild) {
	                            if (child) {
	                                var _newComp = document.createElement(child.component);
	                                router.appendChild(_newComp);
	                            } else {
	                                var _newComp2 = document.createElement('div');
	                                _newComp2.innerHTML = 'Please specify a component for this route <b style="color: red">' + _routerCore2.default.getCurrentFullPath().join('/') + '</b>!';
	                                router.appendChild(_newComp2);
	                            }
	                            _this.prevChild = path;
	                        }
	                    }
	                }, route.children);
	            });
	            _routerCore2.default.update();
	        }
	    }]);

	    return RouteSwitcher;
	}();

	function RegisterRouteElement(routes) {
	    var ElemProto = Object.create(HTMLElement.prototype);
	    var elem = void 0;
	    ElemProto.createdCallback = function (params) {
	        elem = new RouteSwitcher(routes, this);
	    };

	    ElemProto.detachedCallback = function () {};

	    ElemProto.attachedCallback = function () {};

	    ElemProto.attributeChangedCallback = function (a, b, c) {};

	    document.registerElement('route-switcher', {
	        prototype: ElemProto
	    });
	}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Router = function () {
	    function Router() {
	        var _this = this;

	        _classCallCheck(this, Router);

	        this.routes = [];
	        this.subscribtions = [];
	        this._id = -1;
	        this.prevPath = null;
	        window.addEventListener('popstate', function (e) {
	            // Make sure popstate doesn't run on init -- this is a common issue with Safari and old versions of Chrome
	            if (self.state && self.state.previousState === null) return false;

	            var a = _this.getCurrentRoute(_this.getCurrentPath());
	            if (a) {
	                a.callback();
	                _this.runSubscribtions();
	                _this.prevPath = a.path;
	                console.log(_this.subscribtions);
	            }
	        });
	    }

	    _createClass(Router, [{
	        key: 'getCurrentPath',
	        value: function getCurrentPath() {
	            return location.pathname.split('/').filter(function (item) {
	                return item;
	            })[0] || '/';
	        }
	    }, {
	        key: 'getCurrentFullPath',
	        value: function getCurrentFullPath() {
	            return location.pathname.split('/').filter(function (item) {
	                return item;
	            }) || '/';
	        }
	    }, {
	        key: 'getCurrentRoute',
	        value: function getCurrentRoute(path) {
	            var match = this.routes.filter(function (route) {
	                var a = path.split('/');
	                var b = route.path.split('/');

	                if (a[1] && a[0] === b[0]) {
	                    route.params = a[1];
	                    route.newPath = path;
	                    return true;
	                }

	                route.newPath = route.path;
	                return path === route.path;
	            })[0];
	            var notFound = this.routes.filter(function (route) {
	                return route.path === '404';
	            })[0];
	            return match || notFound;
	        }
	    }, {
	        key: 'getRouterState',
	        value: function getRouterState() {
	            var a = location.pathname.split('/').filter(function (item) {
	                return item;
	            });
	            return {
	                stage: a[0],
	                params: a[1]
	            };
	        }
	    }, {
	        key: 'on',
	        value: function on(path, callback) {
	            this.routes.push({ path: path, callback: callback });
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this.navigate(location.pathname.substr(1) || '/', true);
	        }
	    }, {
	        key: 'navigate',
	        value: function navigate(path, silent) {
	            var a = this.getCurrentRoute(path);
	            if (a && this.prevPath !== path) {
	                if (!silent) {
	                    this.path(a.newPath);
	                }

	                a.callback.call(this, a.params);
	                this.runSubscribtions();
	            }
	            this.prevPath = path;
	        }
	    }, {
	        key: 'path',
	        value: function path(pathname) {
	            if ('string' === typeof pathname) {
	                window.history.pushState({}, null, pathname);
	                return this;
	            }
	        }
	    }, {
	        key: 'runSubscribtions',
	        value: function runSubscribtions() {
	            var _this2 = this;

	            this.subscribtions.forEach(function (item) {
	                item.fn.call(_this2, _this2.getCurrentPath(), _this2.getCurrentFullPath());
	            });
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(fn) {
	            var context = this;
	            this._id++;
	            this.subscribtions.push({ fn: fn, id: this._id });
	            var a = Number(this._id);
	            return {
	                unsubscribe: function unsubscribe() {
	                    context.subscribtions = context.subscribtions.filter(function (item) {
	                        return item.id !== a;
	                    });
	                }
	            };
	        }
	    }]);

	    return Router;
	}();

	exports.default = new Router();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Component = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(1);

	var _private = __webpack_require__(7);

	var _directives = __webpack_require__(9);

	var _Directives = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = exports.Component = function () {
	    function Component() {
	        var _this = this;

	        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	        _classCallCheck(this, Component);

	        this.tpl = custom.template || 'Empty template';
	        // this.styles = custom.styles;
	        this.shadow = custom.shadow || false;
	        this.type = custom.type;

	        this.props = new _core.SmartObject(options.props);
	        this.root = null;

	        Component.setPrivates.call(this, custom);

	        this.ui = {};
	        // console.log(options.ce.attributes);
	        if (options.ce.getAttribute('ac-for')) {
	            // console.warn('Foor loop is detected!')
	        } else {
	            options.ce ? Component.render.call(this, options.ce) : console.warn('Component data is expected. See your component constructor!');
	            this.props.sub(function (r) {
	                _Directives.Directives._for.call(_this, _private.PRIVATES.DIRECTIVES['ac-for'].get(_this));
	                _Directives.Directives._props.call(_this, _private.PRIVATES.DIRECTIVES['ac-value'].get(_this));
	                _Directives.Directives._input.call(_this, _private.PRIVATES.DIRECTIVES['ac-input'].get(_this));
	                _Directives.Directives._props.call(_this, _private.PRIVATES.DIRECTIVES['ac-model'].get(_this));
	                _Directives.Directives._style.call(_this, _private.PRIVATES.DIRECTIVES['ac-style'].get(_this));
	                _Directives.Directives._if.call(_this, _private.PRIVATES.DIRECTIVES['ac-if'].get(_this));
	                _Directives.Directives._class.call(_this, _private.PRIVATES.DIRECTIVES['ac-class'].get(_this));
	                _Directives.Directives._attr.call(_this, _private.PRIVATES.DIRECTIVES['ac-attr'].get(_this));
	                _Directives.Directives._hostClasses.call(_this, _private.PRIVATES.HOST.CLASS.get(_this));
	                _Directives.Directives._hostStyles.call(_this, _private.PRIVATES.HOST.STYLE.get(_this));
	                _this.onUpdate();
	            });
	        }
	    }

	    _createClass(Component, [{
	        key: 'setSubscriptions',
	        value: function setSubscriptions() {
	            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	                rest[_key] = arguments[_key];
	            }

	            _private.PRIVATES.SUBSCRIPTIONS.set(this, rest);
	        }
	    }, {
	        key: 'preCompileTpl',
	        value: function preCompileTpl(html) {
	            // DIRECTIVES_NAMES.forEach(directive=>{
	            //     var stringToGoIntoTheRegex = '@'+directive.split('-')[1];
	            //     var regex = new RegExp(stringToGoIntoTheRegex, "g");
	            //     html = html.replace(regex, `ac-${directive.split('-')[1]}`)
	            // });
	            return html;
	        }
	    }, {
	        key: 'INPUT',
	        value: function INPUT() {}

	        /***********************************************/

	    }, {
	        key: 'emit',
	        value: function emit(event, data, parentName) {
	            var myEvent = new CustomEvent(event, {
	                detail: data,
	                bubbles: true,
	                cancelable: false
	            });

	            if (parentName) {
	                this.getParentComponent(parentName).dispatchEvent(myEvent);
	            } else {
	                this.root.dispatchEvent(myEvent);
	            }
	        }

	        // broadcast(q, name, data) {
	        //     let myEvent = new CustomEvent(event, {
	        //         detail: data,
	        //         bubbles: true,
	        //         cancelable: false
	        //     });
	        //     q.dispatchEvent(myEvent);
	        // }

	    }, {
	        key: 'onCreate',
	        value: function onCreate() {}
	    }, {
	        key: 'onUpdate',
	        value: function onUpdate() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }, {
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onAttach',
	        value: function onAttach() {}
	    }, {
	        key: 'getElement',
	        value: function getElement(target) {
	            return this.root.querySelectorAll(target);
	        }
	    }, {
	        key: 'getRoot',
	        value: function getRoot() {
	            return this.root;
	        }
	    }, {
	        key: 'getComponentVariable',
	        value: function getComponentVariable(variable, data) {
	            if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') return data;
	            return variable.reduce(function (o, i, index) {
	                if (!o[i] && o[i] !== 0) {
	                    // in case when variable is undefined
	                    return index === variable.length - 1 ? null : {};
	                } else {
	                    return o[i];
	                }
	            }, data || this);
	        }
	    }, {
	        key: 'getParentComponent',
	        value: function getParentComponent(parentName) {
	            var root = this.root;
	            while (root && parentName !== root.constructor.name) {
	                root = root.parentNode;
	            }
	            return root;
	        }
	    }], [{
	        key: 'setPrivates',
	        value: function setPrivates(custom) {
	            for (var array in _private.PRIVATES.DIRECTIVES) {
	                _private.PRIVATES.DIRECTIVES[array].set(this, []);
	            }

	            _private.PRIVATES.EVENTS.set(this, []);
	            _private.PRIVATES.SUBSCRIPTIONS.set(this, []);
	            _private.PRIVATES.GLOBAL_EVENTS.set(this, null);
	            _private.PRIVATES.HOST.EVENTS.set(this, custom.hostEvents);
	            _private.PRIVATES.HOST.CLASS.set(this, custom.hostClasses);
	            _private.PRIVATES.HOST.STYLE.set(this, custom.hostStyles);
	        }
	    }, {
	        key: 'render',
	        value: function render(o) {
	            var _this2 = this;

	            this.onCreate();
	            this.root = this.shadow ? o.createShadowRoot() : o;
	            this.root.innerHTML = this.preCompileTpl(this.tpl);
	            // this.loadStyle();

	            _directives.DIRECTIVES_NAMES.forEach(function (directive) {
	                _Directives.Directives._init.call(_this2, _this2.root, directive, _private.PRIVATES.DIRECTIVES[directive]);
	            });

	            _Directives.Directives._model.call(this, _private.PRIVATES.DIRECTIVES['ac-model'].get(this));
	            _Directives.Directives._link.call(this, _private.PRIVATES.DIRECTIVES['ac-link'].get(this));
	            _Directives.Directives._on.call(this, _private.PRIVATES.DIRECTIVES['ac-on'].get(this));

	            _Directives.Directives._outside.call(this, _private.PRIVATES.DIRECTIVES['ac-outside'].get(this));
	            _Directives.Directives._pattern.call(this, _private.PRIVATES.DIRECTIVES['ac-pattern'].get(this));
	            _Directives.Directives._elRef.call(this, _private.PRIVATES.DIRECTIVES['ac-ref'].get(this));

	            _Directives.Directives.eventListeners.call(this, this.root);

	            _Directives.Directives._hostEvents.call(this, _private.PRIVATES.HOST.EVENTS.get(this));

	            if (_private.PRIVATES.DIRECTIVES['ac-link'].get(this).length || _private.PRIVATES.DIRECTIVES['ac-for'].get(this).length) {
	                this.routerSub = _core.Router.onChange(function () {
	                    var a = _this2.root.querySelectorAll('[href]');
	                    a.forEach(function (item) {
	                        var fullRoute = _core.Router.getCurrentFullPath();
	                        var attr = item.getAttribute('href');
	                        var setActive = attr === fullRoute.join('/') || fullRoute[0] === attr && !item.getAttribute('frameworkLinkExact');
	                        setActive ? item.classList.add('active') : item.classList.remove('active');
	                    });
	                });
	            }
	            this.onInit();
	        }
	    }, {
	        key: 'on',
	        value: function on(event, f) {
	            var _this3 = this;

	            this.root.addEventListener(event, function (e) {
	                e.stopPropagation(); // to prevent further propagation
	                f.call(_this3, e, e.detail);
	            });
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            _Directives.Directives.removeEventListeners.call(this, _private.PRIVATES.EVENTS.get(this));
	            // unsubscribe from global events
	            if (_private.PRIVATES.GLOBAL_EVENTS.get(this)) {
	                _private.PRIVATES.GLOBAL_EVENTS.get(this).unsubscribe();
	            }
	            //unsubscribe from router changes
	            if (this.routerSub) {
	                // console.log('destroyed', this);
	                this.routerSub.unsubscribe();
	            }
	            _private.PRIVATES.SUBSCRIPTIONS.get(this).forEach(function (item) {
	                return item.unsubscribe();
	            });
	            this.onDestroy();
	        }
	    }]);

	    return Component;
	}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PRIVATES = undefined;

	var _events = __webpack_require__(8);

	var _directives = __webpack_require__(9);

	var PRIVATES = {
	    DIRECTIVES: {},
	    EVENTS: new WeakMap(),
	    SUBSCRIPTIONS: new WeakMap(),
	    GLOBAL_EVENTS: new WeakMap(),
	    HOST: {
	        CLASS: new WeakMap(),
	        STYLE: new WeakMap(),
	        EVENTS: new WeakMap()
	    }
	};

	_directives.DIRECTIVES_NAMES.forEach(function (directive) {
	    PRIVATES.DIRECTIVES[directive] = new WeakMap();
	});

	exports.PRIVATES = PRIVATES;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENTS = exports.EVENTS = ['Click', 'Keyup', 'Change', 'Mouseover', 'Mouseout', 'MouseDown', 'MouseUp', 'Scroll', 'Mousewheel', 'Submit', 'Focus', 'Blur'];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var DIRECTIVES_NAMES = exports.DIRECTIVES_NAMES = ['ac-for', 'ac-style', 'ac-value', 'ac-input', 'ac-model', 'ac-if', 'ac-class', 'ac-link', 'ac-attr', 'ac-on', 'ac-pattern', 'ac-outside', 'ac-ref'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Directives = undefined;

	var _style2 = __webpack_require__(11);

	var _props2 = __webpack_require__(12);

	var _pattern2 = __webpack_require__(13);

	var _if2 = __webpack_require__(14);

	var _class2 = __webpack_require__(15);

	var _elRef2 = __webpack_require__(16);

	var _for2 = __webpack_require__(17);

	var _model2 = __webpack_require__(19);

	var _attr2 = __webpack_require__(20);

	var _input2 = __webpack_require__(21);

	var _link2 = __webpack_require__(22);

	var _event = __webpack_require__(23);

	var _outside2 = __webpack_require__(24);

	var _on2 = __webpack_require__(25);

	var _init2 = __webpack_require__(18);

	var _host = __webpack_require__(26);

	var Directives = {
	    _style: _style2._style,
	    _props: _props2._props,
	    _pattern: _pattern2._pattern,
	    _if: _if2._if,
	    _class: _class2._class,
	    _elRef: _elRef2._elRef,
	    _for: _for2._for,
	    _model: _model2._model,
	    _attr: _attr2._attr,
	    _input: _input2._input,
	    _link: _link2._link,
	    setActiveLink: _link2.setActiveLink,
	    eventUnitCore: _event.eventUnitCore,
	    eventListeners: _event.eventListeners,
	    removeEventListeners: _event.removeEventListeners,
	    _outside: _outside2._outside,
	    _on: _on2._on,
	    _init: _init2._init,
	    _hostEvents: _host._hostEvents,
	    _hostClasses: _host._hostClasses,
	    _hostStyles: _host._hostStyles
	};

	exports.Directives = Directives;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._style = _style;
	function _style(array, data) {
	    var _this = this;

	    array.forEach(function (item) {
	        var array = item.attr.split(',');

	        array.forEach(function (prop) {
	            var minus = false;
	            var params = prop.replace(/ +/g, "").split(':');
	            var styleName = params[0];
	            if (params[1][0] === '-') {
	                params[1] = params[1].substr(1);
	                minus = true;
	            }
	            var variable = params[1].split('.');
	            var r = _this.getComponentVariable(variable, data);
	            r = minus ? '-' + r : r;
	            r ? item.elem.style[styleName] = r : item.elem.style[styleName] = '';
	        });
	    });
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._props = _props;

	var _core = __webpack_require__(1);

	function _props(array, data) {
	    var _this = this;

	    array.forEach(function (item) {
	        var params = item.attr.split('.');
	        var r = _this.getComponentVariable(params, data);

	        if (_core.Utils.isCustomElement(item.elem)) {
	            return;
	        }
	        //TODO rewrite with switch
	        if (item.elem.localName === 'input') {
	            if (item.elem.type === 'checkbox') r ? item.elem.setAttribute('checked', true) : item.elem.removeAttribute('checked');
	            if (item.elem.type === 'radio') {
	                item.elem.value === r ? item.elem.setAttribute('checked', true) : item.elem.removeAttribute('selected');
	            }
	            if (item.elem.type === 'text' || item.elem.type === 'email' || item.elem.type === 'password') item.elem.value = r;
	        } else {
	            item.elem.innerHTML = r;
	        }
	    });
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._pattern = _pattern;
	function _pattern(array) {
	    array.forEach(function (item) {
	        var attr = item.attr.split(':');
	        var pattern = new RegExp(attr[0], 'gi');

	        item.elem.addEventListener('keyup', function (e) {
	            var value = e.target.value;

	            if (value.match(pattern)) {
	                item.elem.style.borderColor = '';
	                item.elem.setCustomValidity('');
	            } else {
	                item.elem.style.borderColor = '#ff6666';
	                item.elem.setCustomValidity(attr[1]);
	            }
	        }, false);
	    });
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._if = _if;

	var _core = __webpack_require__(1);

	function _if(array) {
	    var _this = this;

	    array.forEach(function (item) {
	        var attr = item.attr;
	        var conditions = attr.replace(/ +/g, "").split('&&');

	        conditions = conditions.map(function (res) {
	            var reverse = false;
	            // let a = eval('this.' + attr);
	            if (res[0] === '!') {
	                res = res.substring(1);
	                reverse = true;
	            }

	            if (res.indexOf('==') > -1 || res.indexOf('===') > -1) {
	                var equality = res.indexOf('===') > -1 ? res.replace(/ +/g, "").split('===') : res.replace(/ +/g, "").split('==');
	                var _r = _this.getComponentVariable(equality[0].split('.'));

	                return !!equality[1];
	            }

	            var params = res.split('.');
	            var r = _this.getComponentVariable(params);
	            r = reverse ? !r : r;

	            return !!r;
	        });

	        if (conditions.filter(function (item) {
	            return item;
	        }).length === conditions.length) {
	            if (!item.elem.parentNode) {
	                // insert only if elem doesn't exists
	                _core.Utils.insertAfter(item.cached, item.comment);
	            }
	        } else {
	            item.elem.remove();
	        }
	    });
	}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._class = _class;
	function _class(array, data) {
	    var _this = this;

	    array.forEach(function (item) {
	        var array = item.attr.split(',');

	        var root = item.elem;
	        array.forEach(function (prop) {
	            if (prop[0] !== '@') {
	                var reverse = false;
	                var params = prop.replace(/ +/g, "").split(':');
	                if (params[1][0] === '!') {
	                    params[1] = params[1].substring(1);
	                    reverse = true;
	                }
	                var className = params[0];
	                var variable = params[1].split('.');
	                var r = _this.getComponentVariable(variable, data);
	                r = reverse ? !r : r;
	                r ? root.classList.add(className) : root.classList.remove(className);
	            } else {
	                var _params = prop.split('@');
	                var _variable = _params[1].split('.');
	                var _r = _this.getComponentVariable(_variable, data);

	                //remove previous class

	                if (item.prev) {
	                    root.classList.remove(item.prev);
	                }
	                item.prev = _r;

	                root.classList.add(_r);
	            }
	        });
	    });
	}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._elRef = _elRef;
	function _elRef(array) {
	    var _this = this;

	    array.forEach(function (item) {
	        var attr = item.attr;
	        _this.ui[attr] = item.elem;
	    });
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._for = _for;

	var _core = __webpack_require__(1);

	var _index = __webpack_require__(10);

	var _init2 = __webpack_require__(18);

	function _for(array, data) {
	    var _this = this;

	    if (array.length) {
	        //console.log(this); //console.time('modules')
	        array.forEach(function (item) {
	            var compName = item.elem.localName;

	            array = _this.getComponentVariable(item.attr.split('.'), data) || [];

	            if (!_core.Utils.isCustomElement(item.elem)) {
	                item.items.forEach(function (item) {
	                    item.remove();
	                });
	                item.items = [];
	                for (var i = 0; i <= array.length - 1; i++) {
	                    var prevContent = item.elem.cloneNode(true);
	                    prevContent.removeAttribute('ac-for');
	                    item.items.push(prevContent);
	                    item.parent.insertBefore(prevContent, item.comment);
	                    forAttachForLoop.call(_this, prevContent, array[i]);
	                    _index.Directives.eventListeners.call(_this, prevContent, array[i]);
	                    bindClassForLoop.call(_this, prevContent, array[i]);
	                    styleUnitForLoop.call(_this, prevContent, array[i]);
	                    // // bindIfForLoop.call(this, prevContent, array[i]);de
	                    bindPropsToViewForLoop.call(_this, prevContent, array[i]);
	                    bindAttrsForLoop.call(_this, prevContent, array[i]);
	                    addLinksRefsForLoop.call(_this, prevContent, array[i]);
	                }
	                return;
	            }

	            if (item.cached.length !== array.length) {
	                item.items.forEach(function (item) {
	                    item.remove();
	                });
	                item.items = [];
	                for (var _i = 0; _i <= array.length - 1; _i++) {
	                    window.temporaryObj = Object.assign({}, array[_i]);
	                    var q = document.createElement(compName);
	                    item.items.push(q);
	                    item.parent.insertBefore(q, item.comment);
	                }
	            }

	            item.items.forEach(function (elem, i) {
	                if (JSON.stringify(item.cached[i]) !== JSON.stringify(array[i])) {
	                    if (!elem.COMPONENT) {
	                        console.warn('Please create component with name ' + compName);
	                        return;
	                    }
	                    elem.COMPONENT.props.set(array[i]);
	                }
	            });

	            item.cached = JSON.parse(JSON.stringify(array));
	        }); //console.timeEnd('modules')
	    }
	}

	function addLinksRefsForLoop(root, data) {
	    var array = _index.Directives._init.call(this, root, 'ac-link');
	    _index.Directives._link.call(this, array, data);
	}

	function bindAttrsForLoop(root, data) {
	    var array = _index.Directives._init.call(this, root, 'ac-attr');
	    _index.Directives._attr.call(this, array, data);
	}

	// function bindIfForLoop(root, data) {
	//     let array = Directives._init(root, 'frameworkIf');
	//     Directives._if.call(this, array, data);
	// }

	function forAttachForLoop(root, data) {
	    var array = _index.Directives._init.call(this, root, 'ac-for');
	    _index.Directives._for.call(this, array, data);
	}

	function bindPropsToViewForLoop(root, data) {
	    var array = _index.Directives._init.call(this, root, 'ac-value');
	    _index.Directives._props.call(this, array, data);
	}

	function styleUnitForLoop(root, data) {
	    var array = _index.Directives._init.call(this, root, 'ac-style');
	    _index.Directives._style.call(this, array, data);
	}

	function bindClassForLoop(root, data) {
	    var array = _index.Directives._init.call(this, root, 'ac-class');
	    _index.Directives._class.call(this, array, data);
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._init = _init;

	var _private = __webpack_require__(7);

	var _core = __webpack_require__(1);

	function _init(root, directive, newArray) {
	    var array = newArray || [];

	    var attr = root.getAttribute(directive);
	    if (attr && !_core.Utils.isCustomElement(root)) {
	        // only for loops
	        var obj = {
	            elem: root,
	            attr: attr,
	            items: [],
	            parent: root.parentNode,
	            cached: root
	        };

	        array.get ? array.get(this).push(obj) : array.push(obj);
	        root.removeAttribute(directive);
	        if (directive === 'ac-for') elem.remove();
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = root.querySelectorAll('[' + directive + ']')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _elem = _step.value;

	            var _attr = _elem.getAttribute(directive);

	            // exclude inner loops
	            if (directive === 'ac-for' && _elem.querySelectorAll('[ac-for]').length) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = _elem.querySelectorAll('[ac-for]')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var innerElem = _step2.value;

	                        innerElem.setAttribute('frameworkInnerLoop', true);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }
	            }

	            if (directive === 'ac-for' && _elem.getAttribute('frameworkInnerLoop')) {
	                _elem.removeAttribute('frameworkInnerLoop');
	                return;
	            }

	            var _obj = {
	                elem: _elem,
	                attr: _attr,
	                comment: _core.Utils.insertAfter(document.createComment(directive + ': ' + _attr), _elem),
	                items: [],
	                parent: _elem.parentNode,
	                cached: _elem
	            };
	            array.get ? array.get(this).push(_obj) : array.push(_obj);
	            _elem.removeAttribute(directive);
	            if (directive === 'ac-for') _elem.remove();
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return array;
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._model = _model;
	function _model(array) {
	    var _this = this;

	    array.forEach(function (item) {
	        var params = item.attr.split('.');

	        item.elem.addEventListener('keyup', function (e) {
	            var value = e.currentTarget.value;
	            _this.props.set(params[params.length - 1], value);
	        }, false);

	        if (item.elem.type === 'checkbox' || item.elem.type === 'radio') {
	            item.elem.addEventListener('change', function (e) {
	                var params = item.attr.split('.');
	                var last = params[params.length - 1];
	                params.splice(-1, 1);
	                var r = params.reduce(function (o, i) {
	                    return o[i];
	                }, _this);
	                r[last] = item.elem.type === 'radio' ? e.currentTarget.value : e.currentTarget.checked;
	                _this.props._callAll();
	            }, false);
	        }

	        item.elem.addEventListener('modelChange', function (e) {
	            _this.props.set(params[params.length - 1], e.detail);
	        }, false);
	    });
	}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._attr = _attr;
	function _attr(array, data) {
	    var _this = this;

	    array.forEach(function (item) {
	        var array = item.attr.split(',');

	        array.forEach(function (prop) {
	            var params = prop.replace(/ +/g, "").split(':');
	            var attrName = params[0];
	            var variable = params[1].split('.');
	            var r = _this.getComponentVariable(variable, data);

	            r ? item.elem.setAttribute(attrName, r) : item.elem.removeAttribute(attrName);
	        });
	    });
	}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._input = _input;
	function _input(array) {
	    var _this = this;

	    array.forEach(function (item) {

	        var array = item.attr.replace(/ +/g, "").split(',');
	        var inputParams = {};
	        array.forEach(function (item) {
	            var variable = item.split(':')[0];
	            var params = item.split(':')[1].split('.');
	            inputParams[variable] = _this.getComponentVariable(params);
	        });
	        item.elem.COMPONENT.INPUT(inputParams);
	    });
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._link = _link;

	var _core = __webpack_require__(1);

	function _link(array, data) {
	    var _this = this;

	    array.forEach(function (item) {
	        var route = getRoute.call(_this, item, data);
	        item.elem.addEventListener('click', function (e) {
	            e.preventDefault();
	            _core.Router.navigate(route);
	        }, false);
	        item.elem.setAttribute('href', route || '/');
	    });
	}

	function getRoute(item, data) {
	    var route = '';
	    var params = item.attr.split('.');
	    if (params[0][0] === '@') {
	        params[0] = params[0].substr(1);
	        route = this.getComponentVariable(params, data);
	    } else {
	        route = item.attr;
	    }
	    return route;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.eventUnitCore = eventUnitCore;
	exports.eventListeners = eventListeners;
	exports.removeEventListeners = removeEventListeners;

	var _private = __webpack_require__(7);

	var _events = __webpack_require__(8);

	function eventUnitCore(elem, event, data) {
	    var _this = this;

	    var funcParams = elem.getAttribute('framework' + event);
	    elem.removeAttribute('framework' + event);
	    var params = funcParams.replace(/ +/g, "").split(':');
	    var fnName = params[0];
	    var newEvent = {
	        fnName: fnName,
	        event: event,
	        el: elem,
	        f: function f(e) {
	            e.preventDefault();
	            if (_this[fnName]) {
	                _this[fnName].call(_this, e, params[1] || data);
	            } else {
	                console.warn('You have no function in your component');
	            }
	        }
	    };

	    _private.PRIVATES.EVENTS.get(this).push(newEvent);
	    newEvent.el.addEventListener(newEvent.event.toLowerCase(), newEvent.f, false);
	}

	function eventListeners(root, data) {
	    var _this2 = this;

	    _events.EVENTS.forEach(function (event) {
	        var targets = root.querySelectorAll('[framework' + event + ']');
	        if (root.getAttribute('framework' + event)) {
	            eventUnitCore.call(_this2, root, event, data);
	        }

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = targets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var elem = _step.value;

	                eventUnitCore.call(_this2, elem, event, data);
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	    });
	}

	function removeEventListeners(array) {
	    array.forEach(function (eventItem, i) {
	        eventItem.el.removeEventListener(eventItem.event, eventItem.f, false);
	    });
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._outside = _outside;

	var _private = __webpack_require__(7);

	var _core = __webpack_require__(1);

	function _outside(array) {
	    var _this = this;

	    array.forEach(function (item) {
	        var attr = item.attr;

	        _private.PRIVATES.GLOBAL_EVENTS.set(_this, _core.GlobalEvents.onClick(function (e) {
	            var ouside = _this.shadow ? item.elem.contains(e.path[0]) : item.elem.contains(e.target);
	            if (!ouside) {
	                _this[attr].call(_this, e);
	            }
	        }, item));
	    });
	}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._on = _on;

	var _core = __webpack_require__(1);

	function _on(array) {
	    var _this = this;

	    array.forEach(function (item) {
	        var listeners = item.attr;
	        listeners = listeners.replace(/ +/g, "").split(',');

	        if (listeners.length) {
	            listeners.forEach(function (listener) {
	                var eventName = listener.split(':')[0];
	                var fn = _this[listener.split(':')[1]];
	                _core.Component.on.call(_this, eventName, fn);
	            });
	        }
	    });
	}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._hostEvents = _hostEvents;
	exports._hostClasses = _hostClasses;
	exports._hostStyles = _hostStyles;
	function _hostEvents(events) {
	    for (var event in events) {
	        var fn = this[events[event]].bind(this);
	        this.root.addEventListener(event, fn, false);
	    }
	}

	function _hostClasses(hostClasses) {
	    for (var className in hostClasses) {
	        var attr = hostClasses[className];
	        var reverse = false;
	        if (attr[0] === '!') {
	            attr = attr.substr(1);
	            reverse = true;
	        }

	        var r = this.getComponentVariable(attr.split('.'));
	        r = reverse ? !r : r;
	        r ? this.root.classList.add(className) : this.root.classList.remove(className);
	    }
	}

	function _hostStyles(hostStyles) {
	    for (var styleName in hostStyles) {
	        if (typeof hostStyles[styleName].value === 'string') {
	            var r = this.getComponentVariable(hostStyles[styleName].value.split('.'));
	            this.root.style[styleName] = r + hostStyles[styleName].suffix;
	        } else {
	            this.root.style[styleName] = hostStyles[styleName].value + hostStyles[styleName].preffix;
	        }
	    }
	}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.TemplateEngine = TemplateEngine;
	// export function TemplateEngine(html, options = {}) {
	//     let re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0, match;
	//     let add = function(line, js) {
	//         js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
	//             (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
	//         return add;
	//     };
	//     while(match = re.exec(html)) {
	//         add(html.slice(cursor, match.index))(match[1], true);
	//         cursor = match.index + match[0].length;
	//     }
	//     add(html.substr(cursor, html.length - cursor));
	//     code += 'return r.join("");';
	//     return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
	// }
	String.prototype.replaceAll = function (search, replace) {
	    return this.split(search).join(replace);
	};

	function TemplateEngine(html) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (typeof options === 'string') {
	        html = html.replaceAll("{{this}}", options ? options : '');
	    }
	    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	        for (var prop in options) {
	            html = html.replaceAll("{{" + prop + "}}", options[prop]);
	        }
	    }
	    return html;
	}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GlobalEvents = function () {
	    function GlobalEvents() {
	        var _this = this;

	        _classCallCheck(this, GlobalEvents);

	        this.lId = 0;
	        this.clicksArray = [];

	        window.addEventListener('click', function (e) {
	            _this.clicksArray.forEach(function (r) {
	                return r.cb.call(_this, e);
	            });
	        }, false);
	    }

	    _createClass(GlobalEvents, [{
	        key: 'onClick',
	        value: function onClick(cb, item) {
	            var _this2 = this;

	            var a = Number(this.lId++);
	            var obj = {
	                cb: cb,
	                id: a,
	                unsubscribe: function unsubscribe() {
	                    _this2.unsubscribe(a, item);
	                }
	            };

	            this.clicksArray.push(obj);
	            return obj;
	        }
	    }, {
	        key: 'unsubscribe',
	        value: function unsubscribe(id, item) {
	            // console.log(id);
	            this.clicksArray = this.clicksArray.filter(function (r) {
	                var res = r.id !== id;
	                return res;
	            });

	            // console.log(this.clicksArray.length);
	        }
	    }]);

	    return GlobalEvents;
	}();

	exports.default = new GlobalEvents();

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var scrollArray = [];
	var Utils = {
	    serialize: function serialize(form) {
	        var obj = {};
	        var elements = form.querySelectorAll("input, select, textarea");
	        for (var i = 0; i < elements.length; ++i) {
	            var element = elements[i];
	            var name = element.name;
	            var value = element.value;

	            if (name) {
	                obj[name] = value;
	            }
	        }

	        return obj;
	    },

	    randomInteger: function randomInteger(min, max) {
	        var rand = min - 0.5 + Math.random() * (max - min + 1);
	        rand = Math.round(rand);
	        return rand;
	    },
	    addDays: function addDays(date, count) {
	        var clone = new Date(date.getTime());
	        return new Date(clone.setDate(clone.getDate() + count));
	    },
	    getDateByFormat: function getDateByFormat(date, format) {
	        var result = '';
	        date = new Date(date);
	        var year = date.getFullYear().toString();
	        var month = (date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
	        var day = date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate();
	        var hh = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours();
	        var mm = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes();
	        switch (format) {
	            case 'yyyy-mm-dd':
	                result = year + '-' + month + '-' + day;
	                break;
	            case 'yyyymmdd':
	                result = year + month + day;
	                break;
	            case 'yyyy/mm/dd':
	                result = year + '/' + month + '/' + day;
	                break;
	            case 'yyyy-mm-dd hh:mm':
	                result = year + '-' + month + '-' + day + ' ' + hh + ':' + mm;
	                break;
	            case 'hh:mm':
	                result = hh + ':' + mm;
	                break;
	            case 'dd.mm.yyyy':
	                result = day + '.' + month + '.' + year;
	                break;
	        }
	        return result;
	    },
	    getDaysBetweenDates: function getDaysBetweenDates(dt1, dt2) {
	        dt1 = new Date(dt1);
	        dt2 = new Date(dt2);
	        var a = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate());
	        var b = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate());

	        return Math.floor(Math.abs(a - b) / (1000 * 60 * 60 * 24));
	    },
	    closest: function closest(array, num) {
	        var i = 0;
	        var minDiff = 1000;
	        var ans = void 0;
	        for (i in array) {
	            var m = Math.abs(num - array[i]);
	            if (m < minDiff) {
	                minDiff = m;
	                ans = array[i];
	            }
	        }
	        return ans;
	    },
	    insertAfter: function insertAfter(elem, refElem) {
	        var parent = refElem.parentNode;
	        var next = refElem.nextSibling;
	        if (next) {
	            return parent.insertBefore(elem, next);
	        } else {
	            return parent.appendChild(elem);
	        }
	    },
	    isCustomElement: function isCustomElement(element) {
	        if (element.tagName.indexOf("-") !== -1) {
	            return true;
	        }
	        var isAttribute = element.getAttribute("is");
	        if (isAttribute === null) {
	            return false;
	        }
	        return isAttribute.indexOf("-") !== -1;
	    },
	    changeSortingId: function changeSortingId(array, params) {
	        return array.map(function (item) {
	            item.active = item.id === params.id;
	            return item;
	        });
	    },
	    sorting: function sorting(array, params, reverse) {
	        if (reverse) {
	            alert(2);
	            array.reverse();
	        } else {
	            switch (params.type) {
	                // case 'date':
	                //     array.sort((a, b) => {
	                //         return new Date(a.data[params.id]).getTime() - new Date(b.data[params.id]).getTime();
	                //     });
	                //     break;
	                case 'string':
	                    array.sort(function (a, b) {
	                        if (a[params.id] > b[params.id]) {
	                            return -1;
	                        } else {
	                            return 1;
	                        }
	                    });
	                    break;
	                // case 'role':
	                //     array.sort((a, b) => {
	                //         if (a.data.role.name.toLowerCase() > b.data.role.name.toLowerCase()) {
	                //             return -1;
	                //         } else {
	                //             return 1;
	                //         }
	                //     });
	                //     break;
	                // case 'name':
	                //     array.sort((a, b) => {
	                //         let personA = a.data.person;
	                //         let personB = b.data.person;
	                //         if (personA && personB && personA.firstName && personB.firstName &&
	                //             (personA.firstName.toLowerCase() > personB.firstName.toLowerCase())) {
	                //             return -1;
	                //         } else {
	                //             return 1;
	                //         }
	                //     });
	                //     break;
	                // case 'region':
	                //     array.sort((a, b) => {
	                //         let personA = a.data.person;
	                //         let personB = b.data.person;
	                //         if (personA && personB && personA.address.country && personB.address.country &&
	                //             (personA.address.country.nicename.toLowerCase() > personB.address.country.nicename.toLowerCase())) {
	                //             return -1;
	                //         } else {
	                //             return 1;
	                //         }
	                //     });
	                //     break;
	                // case 'number':
	                //     array.sort((a, b) => {
	                //         return a.data[params.id] - b.data[params.id];
	                //     });
	                //     break;
	            }
	        }

	        return array;
	    },
	    scrollTop: function scrollTop(element, to, duration) {
	        this.scrollTo('top', element, to, duration);
	    },
	    scrollLeft: function scrollLeft(element, to, duration) {
	        this.scrollTo('left', element, to, duration);
	    },
	    scrollTo: function scrollTo(direction, element, to, duration) {
	        if (scrollArray.filter(function (r) {
	            return r.isEqualNode(element);
	        }).length === 0) {
	            scrollArray.push(element);
	            // console.log('start');
	            var start = direction === 'left' ? element.scrollLeft : element.scrollTop,
	                change = to - start,
	                currentTime = 0,
	                increment = 20;

	            this.animateScroll({ direction: direction, element: element, increment: increment, currentTime: currentTime, change: change, start: start, duration: duration });
	        }
	    },
	    animateScroll: function animateScroll(r) {
	        var _this = this;

	        r.currentTime += r.increment;
	        if (r.direction === 'left') r.element.scrollLeft = this.easeInOutQuad(r.currentTime, r.start, r.change, r.duration);
	        if (r.direction === 'top') r.element.scrollTop = this.easeInOutQuad(r.currentTime, r.start, r.change, r.duration);

	        if (r.currentTime < r.duration) {
	            setTimeout(function () {
	                _this.animateScroll(r);
	            }, r.increment);
	        } else {
	            // console.log('finish');
	            scrollArray.forEach(function (item, i) {
	                if (item.isEqualNode(r.element)) {
	                    scrollArray.splice(i, 1);
	                }
	            });
	        }
	    },
	    easeInOutQuad: function easeInOutQuad(t, b, c, d) {
	        t /= d / 2;
	        if (t < 1) return c / 2 * t * t + b;
	        t--;
	        return -c / 2 * (t * (t - 2) - 1) + b;
	    }
	};

	exports.Utils = Utils;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Http = exports.Collection = exports.Model = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(2);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var methods = ['get', 'post', 'put', 'delete'];

	var Model = exports.Model = function () {
	    function Model(res) {
	        _classCallCheck(this, Model);

	        this.links = {};
	        this.data = res.data;
	        this.collection = null;
	    }

	    _createClass(Model, [{
	        key: 'remove',
	        value: function remove() {
	            this.collection.remove(this);
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            this.data[key] = value;
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            return this.data[key];
	        }
	    }]);

	    return Model;
	}();

	var Collection = exports.Collection = function () {
	    function Collection() {
	        var _this = this;

	        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        _classCallCheck(this, Collection);

	        this.links = {};
	        this.models = options.map(function (model) {
	            model.collection = _this;
	            return model;
	        });
	    }

	    _createClass(Collection, [{
	        key: 'first',
	        value: function first() {
	            return this.models[0] ? this.models[0] : null;
	        }

	        // add model to collection

	    }, {
	        key: 'add',
	        value: function add(model) {
	            this.models.push(model);
	        }
	    }, {
	        key: 'unshift',
	        value: function unshift(model) {
	            this.models.unshift(model);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(model) {
	            var _this2 = this;

	            this.models.forEach(function (item, i) {
	                if (model === item) {
	                    _this2.models.splice(i, 1);
	                }
	            });
	        }
	    }, {
	        key: 'find',
	        value: function find(id) {
	            var model = this.models.filter(function (item) {
	                return item.data._id == id;
	            })[0];
	            return model;
	        }
	    }, {
	        key: 'findBy',
	        value: function findBy(name, id) {
	            return this.models.filter(function (item) {
	                return item.data[name] == id;
	            })[0] || {};
	        }
	    }, {
	        key: 'findAllBy',
	        value: function findAllBy(name, id) {
	            return this.models.filter(function (item) {
	                return item.data[name] == id;
	            }) || [];
	        }
	    }]);

	    return Collection;
	}();

	var HttpModule = function () {
	    function HttpModule() {
	        _classCallCheck(this, HttpModule);

	        this.catalog = new _model.SmartObject();
	        this.server = '';
	    }

	    _createClass(HttpModule, [{
	        key: 'get',
	        value: function get(url, params, settings) {
	            var urlParams = new URLSearchParams();
	            var newParams = '';
	            for (var key in params) {
	                urlParams.set(key, params[key]);
	            }

	            if (params && Object.keys(params).length) {
	                newParams += '?' + urlParams.toString();
	            }

	            return this.request('get', url + newParams, params, settings);
	        }
	    }, {
	        key: 'post',
	        value: function post(url, params, settings) {
	            return this.request('post', url, params, settings);
	        }
	    }, {
	        key: 'put',
	        value: function put(url, params, settings) {
	            return this.request('put', url, params, settings);
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(url, params, settings) {
	            return this.request('delete', url, params, settings);
	        }
	    }, {
	        key: 'request',
	        value: function request(type, url) {
	            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	            var settings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	            return fetch(this.server + url, {
	                method: type,
	                headers: settings.headers,
	                body: params
	            });
	        }
	    }, {
	        key: 'remoteRequest',
	        value: function remoteRequest(type, url, params) {
	            return fetch(url, {
	                method: type,
	                body: params
	            }).then(function (res) {
	                return res.json();
	            });
	        }
	    }, {
	        key: 'setServerUrl',
	        value: function setServerUrl(url) {
	            this.server = url;
	        }
	    }, {
	        key: 'setInterceptor',
	        value: function setInterceptor() {}
	        //TODO


	        // get entry point

	    }, {
	        key: 'getCatalog',
	        value: function getCatalog(url) {
	            var _this3 = this;

	            return this.hMRequest('get', url).then(function (res) {
	                _this3.catalog.set(res);
	                return res;
	            });
	        }
	    }, {
	        key: 'getModel',
	        value: function getModel(response) {
	            var context = this;

	            var FactoryModel = function (_Model) {
	                _inherits(FactoryModel, _Model);

	                function FactoryModel(options) {
	                    _classCallCheck(this, FactoryModel);

	                    var _this4 = _possibleConstructorReturn(this, (FactoryModel.__proto__ || Object.getPrototypeOf(FactoryModel)).call(this, options));

	                    if (response.links) {
	                        response.links.map(function (link) {
	                            _this4.links['' + link.rel] = link.href; // for access to raw link
	                            methods.forEach(function (method) {
	                                if (link.href) {
	                                    _this4[method + '_' + link.rel] = function (params, id) {
	                                        return context.hMRequest(method, link.href, params, id);
	                                    };
	                                }
	                            });
	                        });
	                    }

	                    return _this4;
	                }

	                return FactoryModel;
	            }(Model);

	            return new FactoryModel(response);
	        }

	        // creates new collection

	    }, {
	        key: 'getCollection',
	        value: function getCollection(response) {
	            var _this5 = this;

	            var models = response.map(function (model) {
	                return _this5.getModel(model);
	            });

	            var FactoryCollection = function (_Collection) {
	                _inherits(FactoryCollection, _Collection);

	                function FactoryCollection(models) {
	                    _classCallCheck(this, FactoryCollection);

	                    return _possibleConstructorReturn(this, (FactoryCollection.__proto__ || Object.getPrototypeOf(FactoryCollection)).call(this, models));
	                }

	                return FactoryCollection;
	            }(Collection);

	            return new FactoryCollection(models);
	        }

	        // makes request with current params

	    }, {
	        key: 'hMRequest',
	        value: function hMRequest(method, url) {
	            var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	            var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

	            var sub = void 0;
	            var context = this;
	            switch (method) {
	                case 'get':
	                    sub = this.middleware(this[method](url, args, { headers: context.getGetHeaders() }));
	                    break;
	                case 'post':
	                    sub = this.middleware(this[method](url, args, this.getHeaders()));
	                    break;
	                case 'put':
	                    sub = this.middleware(this[method](url, args, this.getHeaders()));
	                    break;
	                case 'delete':
	                    sub = this.middleware(this[method](url, this.getHeaders()));
	                    break;
	            }

	            return sub;
	        }

	        // 

	    }, {
	        key: 'middleware',
	        value: function middleware(response) {
	            var _this7 = this;

	            return response.then(function (res) {
	                return res.json();
	            }).then(function (res) {
	                return _this7.createEntity(res);
	            }).catch(function (err) {
	                return null;
	            });
	        }
	    }, {
	        key: 'getHeaders',
	        value: function getHeaders() {
	            var headers = new Headers();
	            var token = JSON.parse(localStorage.getItem('token'));
	            if (token) {
	                headers.append('Authorization', 'Bearer ' + token);
	            }
	            return { headers: headers };
	        }
	    }, {
	        key: 'getGetHeaders',
	        value: function getGetHeaders() {
	            var headers = new Headers();
	            return headers;
	        }
	    }, {
	        key: 'createEntity',
	        value: function createEntity(response) {
	            var result = void 0;
	            if (response instanceof Array) {
	                if (response[0] && response[0].data) {
	                    result = this.getCollection(response);
	                } else {
	                    result = new Collection();
	                    response.forEach(function (item) {
	                        result.add({ label: item, id: item });
	                    });
	                }
	            } else if (response.data) {
	                result = this.getModel(response);
	            }
	            return result;
	        }
	    }]);

	    return HttpModule;
	}();

	var Http = new HttpModule();
	exports.Http = Http;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Store = exports.Store = function () {
	    function Store() {
	        _classCallCheck(this, Store);
	    }

	    _createClass(Store, [{
	        key: "init",
	        value: function init() {}
	    }]);

	    return Store;
	}();

/***/ })
/******/ ])
});
;