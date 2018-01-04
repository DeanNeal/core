/*!
 * ace-js 0.6.4
 * May be freely distributed under the MIT license 
 * Author: Bogdan Zinkevich
 * Last update: 2018-1-4 21:16:28
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
/******/ 	__webpack_require__.p = "build";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Validators = exports.FormGroup = exports.Store = exports.Http = exports.Controls = exports.Plugins = exports.Utils = exports.GlobalEvents = exports.TemplateEngine = exports.RouteSwitcher = exports.Router = exports.Component = exports.Register = exports.Decorators = exports.ObservableCollection = exports.ObservableModel = undefined;

	var _observable = __webpack_require__(7);

	var _decorators = __webpack_require__(8);

	var Decorators = _interopRequireWildcard(_decorators);

	var _register = __webpack_require__(39);

	var _component = __webpack_require__(34);

	var _routerSwitcher = __webpack_require__(40);

	var _routerCore = __webpack_require__(41);

	var _routerCore2 = _interopRequireDefault(_routerCore);

	var _templateEngine = __webpack_require__(42);

	var _globalEvents = __webpack_require__(43);

	var _globalEvents2 = _interopRequireDefault(_globalEvents);

	var _utils = __webpack_require__(44);

	var _plugins = __webpack_require__(45);

	var Plugins = _interopRequireWildcard(_plugins);

	var _controls = __webpack_require__(48);

	var Controls = _interopRequireWildcard(_controls);

	var _http = __webpack_require__(64);

	var _store = __webpack_require__(53);

	var _formGroup = __webpack_require__(65);

	var _validators = __webpack_require__(66);

	__webpack_require__(67);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.ObservableModel = _observable.ObservableModel;
	exports.ObservableCollection = _observable.ObservableCollection;
	exports.Decorators = Decorators;
	exports.Register = _register.Register;
	exports.Component = _component.Component;
	exports.Router = _routerCore2.default;
	exports.RouteSwitcher = _routerSwitcher.RouteSwitcher;
	exports.TemplateEngine = _templateEngine.TemplateEngine;
	exports.GlobalEvents = _globalEvents2.default;
	exports.Utils = _utils.Utils;
	exports.Plugins = Plugins;
	exports.Controls = Controls;
	exports.Http = _http.Http;
	exports.Store = _store.Store;
	exports.FormGroup = _formGroup.FormGroup;
	exports.Validators = _validators.Validators;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ObservableCollection = exports.ObservableModel = exports.Observable = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _class, _class2;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// import deepmerge from 'deepmerge';
	// import objectMerge from 'object-merge';


	var _decorators = __webpack_require__(8);

	var _merge = __webpack_require__(37);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observable = exports.Observable = function () {
	    function Observable(options) {
	        _classCallCheck(this, Observable);

	        this.lId = -1;
	        if (options) {
	            this.defineProperties(options);
	        }

	        this.callbacksArray = [];
	    }

	    _createClass(Observable, [{
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
	        key: 'clear',
	        value: function clear() {
	            this._data = {};
	            this._callAll();
	        }
	    }, {
	        key: 'getData',
	        value: function getData() {
	            return this._data;
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
	    }]);

	    return Observable;
	}();

	var ObservableModel = exports.ObservableModel = (0, _decorators.IfObject)(_class = function (_Observable) {
	    _inherits(ObservableModel, _Observable);

	    function ObservableModel(options) {
	        _classCallCheck(this, ObservableModel);

	        var _this5 = _possibleConstructorReturn(this, (ObservableModel.__proto__ || Object.getPrototypeOf(ObservableModel)).call(this, options));

	        _this5._data = options || {};
	        return _this5;
	    }

	    _createClass(ObservableModel, [{
	        key: 'reset',
	        value: function reset(data) {
	            this._data = data;
	            this.defineProperties(data);
	            this._callAll();
	        }
	    }, {
	        key: 'set',
	        value: function set(data, value, silent) {
	            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object') {
	                this._data = (0, _merge2.default)(this._data, data);
	                this.defineProperties(data);
	            } else {
	                this.defineProperty(data, value);
	                this._data[data] = value;
	            }

	            if (!silent) {
	                this._callAll();
	            }
	        }
	    }]);

	    return ObservableModel;
	}(Observable)) || _class;

	var ObservableCollection = exports.ObservableCollection = (0, _decorators.IfArray)(_class2 = function (_Observable2) {
	    _inherits(ObservableCollection, _Observable2);

	    function ObservableCollection(options) {
	        _classCallCheck(this, ObservableCollection);

	        return _possibleConstructorReturn(this, (ObservableCollection.__proto__ || Object.getPrototypeOf(ObservableCollection)).call(this, options));
	    }

	    _createClass(ObservableCollection, [{
	        key: 'set',
	        value: function set(data, value, silent) {
	            this._data = data;
	            if (!silent) {
	                this._callAll();
	            }
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
	        key: 'push',
	        value: function push(data, model) {
	            this._data.push(data);
	            this._callAll();
	        }
	    }, {
	        key: 'unshift',
	        value: function unshift(data, model) {
	            this._data.unshift(data);
	            this._callAll();
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

	    return ObservableCollection;
	}(Observable)) || _class2;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DirectiveDecorator = exports.ComponentDecorator = exports.IfArray = exports.IfObject = undefined;

	var _ifObject = __webpack_require__(9);

	var _ifObject2 = _interopRequireDefault(_ifObject);

	var _ifArray = __webpack_require__(10);

	var _ifArray2 = _interopRequireDefault(_ifArray);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _directive = __webpack_require__(36);

	var _directive2 = _interopRequireDefault(_directive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.IfObject = _ifObject2.default;
	exports.IfArray = _ifArray2.default;
	exports.ComponentDecorator = _component2.default;
	exports.DirectiveDecorator = _directive2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = IfObject;
	function IfObject(Class) {
	    return function (data) {
	        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && Array.isArray(data) === false || !data) {
	            var instance = new Class(data);
	            instance._data = data || {};
	            return instance;
	        } else {
	            throw new Error('Should be an Object');
	        }
	    };
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = IfArray;
	function IfArray(Class) {
	    return function (data) {
	        if (Array.isArray(data) || !data) {
	            var instance = new Class(data);
	            instance._data = data || [];
	            return instance;
	        } else {
	            throw new Error('Should be an Array');
	        }
	    };
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = ComponentDecorator;

	var _core = __webpack_require__(6);

	var _directives = __webpack_require__(12);

	var _events = __webpack_require__(13);

	var _Directives = __webpack_require__(14);

	function ComponentDecorator(decoratorParams) {
	    return function decorator(Class) {
	        var func = function func(root, props, parent) {

	            decoratorParams.props = _extends(decoratorParams.props || {}, props);
	            var proto = _core.Component.prototype;
	            if (decoratorParams.super) {
	                proto = decoratorParams.super.prototype = Object.setPrototypeOf(decoratorParams.super.prototype, _core.Component.prototype);
	            }
	            Class.prototype = Object.setPrototypeOf(Class.prototype, proto);
	            var instance = new Class();

	            if (decoratorParams.stores) {
	                decoratorParams.stores.forEach(function (store) {
	                    Object.defineProperty(instance, store + 'Store', { value: _core.Component.STORES[store] || null, writable: false });
	                });
	            }

	            _core.Component.componentConstructor.call(instance, root, decoratorParams);
	            if (parent) {
	                // Object.defineProperty(instance, 'parent', { value: parent, writable: false });
	                instance.parent = parent;
	            }
	            // instance.constructorName = instance.constructor.name;
	            return instance;
	        };
	        func.selector = decoratorParams.selector;
	        func.class = Class;
	        return func;
	    };
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var DIRECTIVES_NAMES = exports.DIRECTIVES_NAMES = ['ac-for', 'ac-style', 'ac-value', 'ac-input', 'ac-model', 'ac-if', 'ac-class', 'ac-link', 'ac-attr', 'ac-on', 'ac-pattern', 'ac-outside', 'ac-ref',
	// 'ac-form-validation',
	'ac-form-group'];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENTS_NAMES = exports.EVENTS_NAMES = ['click', 'keyup', 'change', 'mouseout', 'mouseover', 'mouseenter', 'mouseleave', 'mousedown', 'mouseup', 'scroll', 'mousewheel', 'submit', 'focus', 'blur', 'dragstart'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Directives = undefined;

	var _style2 = __webpack_require__(15);

	var _props2 = __webpack_require__(16);

	var _pattern2 = __webpack_require__(17);

	var _if2 = __webpack_require__(18);

	var _class2 = __webpack_require__(19);

	var _elRef2 = __webpack_require__(20);

	var _for2 = __webpack_require__(21);

	var _model2 = __webpack_require__(25);

	var _attr2 = __webpack_require__(26);

	var _input2 = __webpack_require__(27);

	var _link2 = __webpack_require__(28);

	var _event = __webpack_require__(24);

	var _outside2 = __webpack_require__(29);

	var _on2 = __webpack_require__(30);

	var _init2 = __webpack_require__(22);

	var _host = __webpack_require__(31);

	var _formGroup2 = __webpack_require__(32);

	var _customDirective2 = __webpack_require__(33);

	var _computed2 = __webpack_require__(35);

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
	    _events: _event._events,
	    eventUnitCore: _event.eventUnitCore,
	    removeEventListeners: _event.removeEventListeners,
	    _outside: _outside2._outside,
	    _on: _on2._on,
	    _init: _init2._init,
	    _initEvent: _init2._initEvent,
	    _hostEvents: _host._hostEvents,
	    _hostClasses: _host._hostClasses,
	    _hostStyles: _host._hostStyles,
	    _hostHidden: _host._hostHidden,
	    _formGroup: _formGroup2._formGroup,
	    _customDirective: _customDirective2._customDirective,
	    _computed: _computed2._computed
	};

	exports.Directives = Directives;

/***/ }),
/* 15 */
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

	        // for objects
	        // let a=  new Function('return ' + array).apply(this.props._data);
	        // for(let key in a){
	        //     item.elem.style[key] = a[key];
	        // }

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._props = _props;

	var _core = __webpack_require__(6);

	function _props(array, data) {
	    var _this = this;

	    array.forEach(function (item) {
	        if (_core.Utils.isCustomElement(item.elem) === false) {
	            var params = item.attr.split('|'),
	                r = void 0;
	            var formatter = params[1] ? _core.Utils.removeSpacesFromString(params[1]) : null;
	            var formatterData = params[1] ? params[1].split(':') : null;

	            if (formatterData) {
	                formatter = formatterData[0].trim();
	                formatterData = formatterData[1] ? formatterData[1].trim() : null;
	            }

	            var currentVariable = _core.Utils.removeSpacesFromString(params[0]).split('.');

	            if (formatter && formatter === 'json') {
	                r = JSON.stringify(_this.getComponentVariable(currentVariable, data));
	            } else if (formatter && formatter === 'date') {
	                r = _this.getComponentVariable(currentVariable, data);
	                r = _core.Utils.getDateByFormat(r, formatterData || '');
	            } else {
	                r = _this.getComponentVariable(currentVariable, data);
	            }

	            if (item.elem.localName === 'input') {
	                switch (item.elem.type) {
	                    case 'checkbox':
	                        r ? item.elem.setAttribute('checked', true) : item.elem.removeAttribute('checked');
	                        break;
	                    case 'radio':
	                        item.elem.value === r ? item.elem.setAttribute('checked', true) : item.elem.removeAttribute('selected');
	                        break;
	                    case 'text':
	                    case 'email':
	                    case 'password':
	                        item.elem.value = r;
	                        break;

	                }
	            } else {
	                item.elem.innerHTML = r;
	            }
	        }
	    });
	}

/***/ }),
/* 17 */
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
	        var title = item.elem.getAttribute('ac-pattern-title');
	        item.elem.addEventListener('keyup', function (e) {
	            var value = e.target.value;

	            if (value.match(pattern)) {
	                item.elem.setCustomValidity('');
	            } else {
	                item.elem.setCustomValidity(title);
	            }
	        }, false);
	    });
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._if = _if;

	var _core = __webpack_require__(6);

	function _if(array, data) {
	    var _this = this;

	    array.forEach(function (item) {
	        var attr = item.attr; //.replace(/@+/g, "this.props."); // @ -alias of this.props

	        try {
	            var r = new Function('return ' + attr).apply(data || _this.props);
	            if (r) {
	                if (!item.elem.parentNode) {
	                    // insert only if elem doesn't exists
	                    if (_core.Utils.isCustomElement(item.elem)) {
	                        _core.Component.COMPONENTS.forEach(function (comp) {
	                            if (comp.selector === item.elem.localName) {
	                                //console.log(item);
	                                new comp(item.elem, {}, _this);
	                            }
	                        });
	                    }
	                    _core.Utils.insertAfter(item.elem, item.comment);
	                }
	            } else {

	                if (_core.Utils.isCustomElement(item.elem)) {
	                    if (item.elem.COMPONENT) {
	                        item.elem.COMPONENT.destroy();
	                        item.elem.COMPONENT = null;
	                        delete item.elem.COMPONENT;
	                    }
	                }

	                item.elem.remove();
	            }
	        } catch (err) {
	            throw new Error(_this.constructor.name + '; ' + err);
	        }

	        // let conditions = attr.replace(/ +/g, "").split('&&');

	        // conditions = conditions.map(res => {
	        //     let reverse = false;
	        //     // let a = eval('this.' + attr);
	        //     if (res[0] === '!') {
	        //         res = res.substring(1);
	        //         reverse = true;
	        //     }

	        //     if (res.indexOf('==') > -1 || res.indexOf('===') > -1) {
	        //         let equality = res.indexOf('===') > -1 ? res.replace(/ +/g, "").split('===') : res.replace(/ +/g, "").split('==');
	        //         let r = this.getComponentVariable(equality[0].split('.'), data);

	        //         return !!equality[1];
	        //     }

	        //     let params = res.split('.');
	        //     let r = this.getComponentVariable(params, data);
	        //     r = reverse ? !r : r;

	        //     return !!r;
	        // });

	        // if (conditions.filter(item => item).length === conditions.length) {
	        //     if (!item.elem.parentNode) { // insert only if elem doesn't exists
	        //         Utils.insertAfter(item.cached, item.comment)
	        //     }
	        // } else {
	        //     item.elem.remove()
	        // }
	    });
	}
	// childNode[4].parentNode.insertBefore(childNode[4], childNode[3]);

/***/ }),
/* 19 */
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
	        var attr = item.attr;
	        var root = item.elem;

	        array.forEach(function (prop) {

	            try {

	                if (prop[0] === '@') {
	                    var params = prop.split('@');
	                    var variable = params[1].split('.');
	                    var r = _this.getComponentVariable(variable, data);

	                    //remove previous class
	                    if (item.prev) {
	                        root.classList.remove(item.prev);
	                    }
	                    item.prev = r;

	                    if (r) {
	                        root.classList.add(r);
	                    }
	                } else {
	                    var _params = prop.replace(/ +/g, "").split(':');
	                    var className = _params[0];
	                    var _r = new Function('return ' + _params[1]).apply(data || _this.props);

	                    _r ? root.classList.add(className) : root.classList.remove(className);
	                }
	            } catch (err) {
	                throw new Error(_this.constructor.name + '; ' + err);
	            }
	        });
	    });
	}

/***/ }),
/* 20 */
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
	        _this.$refs[attr] = item.elem;
	    });
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports._for = _for;

	var _core = __webpack_require__(6);

	var _index = __webpack_require__(14);

	var _init2 = __webpack_require__(22);

	var _events = __webpack_require__(13);

	function _for(array, data) {
	    var _this = this;

	    if (array.length) {
	        //console.log(this); //console.time('modules')
	        array.forEach(function (item) {
	            var compName = item.elem.localName;
	            var loopIterator = void 0;
	            var collectionName = void 0;
	            array = _this.getComponentVariable(item.attr.split('.'), data) || [];

	            if (item.attr.indexOf('let ') > -1 && item.attr.indexOf('of ') > -1) {
	                var params1 = item.attr.split('of')[0];
	                collectionName = item.attr.split('of')[1].replace(/ +/g, "");
	                loopIterator = params1.split('let ')[1].replace(/ +/g, "");
	                var func = 'for(' + params1 + ' of this.' + collectionName + ') { } return this.' + collectionName;

	                var arg = void 0;
	                try {
	                    arg = new Function(func).apply(data || _this.props);
	                } catch (e) {
	                    arg = [];
	                }

	                array = arg;
	            }

	            if (!_core.Utils.isCustomElement(item.elem)) {

	                if (item.cached.length !== array.length) {
	                    item.items.forEach(function (item) {
	                        item.remove();
	                    });
	                    item.items = [];
	                    item.directives = [];

	                    var _loop = function _loop(i) {
	                        var prevContent = item.elem.cloneNode(true);

	                        // loop through the old element's attributes and give them to the new element
	                        for (var _i = 0; _i < item.elem.attributes.length; _i++) {
	                            prevContent.setAttribute(item.elem.attributes[_i].nodeName, item.elem.attributes[_i].nodeValue);
	                        }

	                        item.items.push(prevContent);
	                        item.parent.insertBefore(prevContent, item.comment);

	                        item.directives[i] = {
	                            for: _index.Directives._init.call(_this, prevContent, 'ac-for'), // should go first for correct work
	                            class: _index.Directives._init.call(_this, prevContent, 'ac-class'),
	                            style: _index.Directives._init.call(_this, prevContent, 'ac-style'),
	                            attrs: _index.Directives._init.call(_this, prevContent, 'ac-attr'),
	                            if: _index.Directives._init.call(_this, prevContent, 'ac-if'),
	                            props: _index.Directives._init.call(_this, prevContent, 'ac-value'),
	                            links: _index.Directives._init.call(_this, prevContent, 'ac-link')
	                            // events: eventsArray
	                        };

	                        var eventsArray = [];

	                        _events.EVENTS_NAMES.forEach(function (directive) {
	                            eventsArray.push(_index.Directives._initEvent.call(_this, prevContent, directive, [], getCurrentProperty.bind(_this, item, collectionName, data, i), loopIterator));
	                        });
	                        item.directives[i].events = eventsArray;

	                        updateElement.call(_this, item, i, prevContent, array[i]);
	                    };

	                    for (var i = 0; i <= array.length - 1; i++) {
	                        _loop(i);
	                    }
	                }

	                item.items.forEach(function (elem, i) {
	                    if (JSON.stringify(item.cached[i]) !== JSON.stringify(array[i])) {
	                        updateElement.call(_this, item, i, elem, array[i]);
	                    }
	                });

	                item.cached = JSON.parse(JSON.stringify(array));
	            }

	            if (_core.Utils.isCustomElement(item.elem)) {
	                if (item.cached.length !== array.length) {
	                    item.items.forEach(function (item) {
	                        item.remove();
	                    });
	                    item.items = [];
	                    _this.children[item.elem.COMPONENT.constructor.name] = [];
	                    for (var i = 0; i <= array.length - 1; i++) {
	                        var newComp = _core.Component.COMPONENTS.filter(function (r) {
	                            return r.selector === compName;
	                        })[0];
	                        // if(newComp) {
	                        var newEl = document.createElement(compName);
	                        // this.root.appendChild(newEl);
	                        var a = new newComp(newEl, _extends({}, array[i]), _this);
	                        _this.children[item.elem.COMPONENT.constructor.name].push(a);
	                        // }

	                        // loop through the old element's attributes and give them to the new element
	                        for (var _i2 = 0; _i2 < item.elem.attributes.length; _i2++) {
	                            newEl.setAttribute(item.elem.attributes[_i2].nodeName, item.elem.attributes[_i2].nodeValue);
	                        }
	                        item.items.push(newEl);
	                        item.parent.insertBefore(newEl, item.comment);
	                    }
	                    item.cached = []; // refresh cached array
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
	            }
	        }); //console.timeEnd('modules')
	    }
	}

	function updateElement(item, i, elem, data) {
	    forAttachForLoop.call(this, item.directives[i].for, elem, data);
	    bindClassForLoop.call(this, item.directives[i].class, elem, data);
	    styleUnitForLoop.call(this, item.directives[i].style, elem, data);
	    bindIfForLoop.call(this, item.directives[i].if, elem, data);
	    bindPropsToViewForLoop.call(this, item.directives[i].props, elem, data);

	    bindAttrsForLoop.call(this, item.directives[i].attrs, elem, data);
	    addLinksRefsForLoop.call(this, item.directives[i].links, elem, data);
	    eventsForLoop.call(this, item.directives[i].events, elem);
	}

	function getCurrentProperty(item, collectionName, data, i) {
	    var props = this.getComponentVariable( /*item.attr.split('.')*/collectionName.split('.'), data) || [];
	    return props[i];
	}

	function eventsForLoop(array, root) {
	    // let array = [];

	    // EVENTS_NAMES.forEach(directive => {
	    //     array.push(Directives._initEvent.call(this, root, directive, [], context));
	    // });

	    array = array.reduce(function (a, b) {
	        return a.concat(b);
	    }, []);
	    _index.Directives._events.call(this, array);
	}

	function addLinksRefsForLoop(array, root, data) {
	    // let array = Directives._init.call(this, root, 'ac-link');
	    _index.Directives._link.call(this, array, data);
	}

	function bindAttrsForLoop(array, root, data) {
	    // let array = Directives._init.call(this, root, 'ac-attr');
	    _index.Directives._attr.call(this, array, data);
	}

	function bindIfForLoop(array, root, data) {
	    // let array = Directives._init(root, 'ac-if');
	    _index.Directives._if.call(this, array, data);
	}

	function forAttachForLoop(array, root, data) {
	    // let array = Directives._init.call(this, root, 'ac-for');
	    _index.Directives._for.call(this, array, data);
	}

	function bindPropsToViewForLoop(array, root, data) {
	    // let array = Directives._init.call(this, root, 'ac-value');
	    _index.Directives._props.call(this, array, data);
	}

	function styleUnitForLoop(array, root, data) {
	    // let array = Directives._init.call(this, root, 'ac-style');
	    _index.Directives._style.call(this, array, data);
	}

	function bindClassForLoop(array, root, data) {
	    // let array = Directives._init.call(this, root, 'ac-class');
	    _index.Directives._class.call(this, array, data);
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._init = _init;
	exports._initEvent = _initEvent;

	var _private = __webpack_require__(23);

	var _core = __webpack_require__(6);

	var _event = __webpack_require__(24);

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
	        // if (directive === 'ac-for') elem.remove();
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = root.querySelectorAll('[' + directive + ']')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var elem = _step.value;

	            var _attr = elem.getAttribute(directive);

	            // exclude inner loops
	            if (directive === 'ac-for' && elem.querySelectorAll('[ac-for]').length) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = elem.querySelectorAll('[ac-for]')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var innerElem = _step2.value;

	                        innerElem.setAttribute('ac-inner-loop', true);
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

	            if (directive === 'ac-for' && elem.getAttribute('ac-inner-loop')) {
	                elem.removeAttribute('ac-inner-loop');
	                return;
	            }

	            var _obj = {
	                elem: elem,
	                attr: _attr,
	                items: [],
	                parent: elem.parentNode,
	                cached: elem
	            };

	            // only for certain directives
	            if (directive === 'ac-for' || directive === 'ac-if') {
	                _obj.comment = _core.Utils.insertAfter(document.createComment(directive + ': ' + _attr), elem);
	            }
	            array.get ? array.get(this).push(_obj) : array.push(_obj);
	            elem.removeAttribute(directive);
	            if (directive === 'ac-for') elem.remove();
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

	function _initEvent(root, directive, newArray, context, loopIterator) {
	    var array = newArray || [];
	    var targets = root.querySelectorAll('[ac-' + directive + ']');
	    if (root.getAttribute('ac-' + directive)) {
	        var obj = _event.createEventObject.call(this, root, directive, context, loopIterator);
	        array.get ? array.get(this).push(obj) : array.push(obj);
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = targets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var elem = _step3.value;

	            var _obj2 = _event.createEventObject.call(this, elem, directive, context, loopIterator);
	            array.get ? array.get(this).push(_obj2) : array.push(_obj2);
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }

	    return array;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PRIVATES = undefined;

	var _directives = __webpack_require__(12);

	var PRIVATES = {
	    DIRECTIVES: {},
	    CUSTOM_DIRECTIVES: {},
	    EVENTS: new WeakMap(),
	    SUBSCRIPTIONS: new WeakMap(),
	    // GLOBAL_EVENTS: new WeakMap(),
	    HOST: {
	        CLASS: new WeakMap(),
	        STYLE: new WeakMap(),
	        EVENTS: new WeakMap(),
	        HIDDEN: new WeakMap()
	    },
	    COMPUTED: new WeakMap()
	}; // import { EVENTS } from './const/events';


	_directives.DIRECTIVES_NAMES.forEach(function (directive) {
	    PRIVATES.DIRECTIVES[directive] = new WeakMap();
	});

	exports.PRIVATES = PRIVATES;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports._events = _events;
	exports.removeEventListeners = removeEventListeners;
	exports.createEventObject = createEventObject;

	var _private = __webpack_require__(23);

	var _core = __webpack_require__(6);

	function _events(array) {
	    array.forEach(function (newEvent) {
	        var modifiers = getEventMod(newEvent.el);
	        newEvent.el.addEventListener(newEvent.event.toLowerCase(), newEvent.f, modifiers.indexOf('capture') > -1 ? true : false);
	        newEvent.el.removeAttribute('ac-mod');
	        newEvent.el.removeAttribute('ac-kmod');
	    });
	}

	function removeEventListeners(array) {
	    array.forEach(function (newEvent, i) {
	        var modifiers = getEventMod(newEvent.el);
	        newEvent.el.removeEventListener(newEvent.event, newEvent.f, modifiers.indexOf('capture') > -1 ? true : false);
	    });
	}

	function getEventMod(elem) {
	    return elem.getAttribute('ac-mod') ? elem.getAttribute('ac-mod').replace(/ +/g, "").split(',') : [];
	}

	function getKeyMod(elem) {
	    return elem.getAttribute('ac-kmod') ? elem.getAttribute('ac-kmod').replace(/ +/g, "") : null;
	}

	function createEventObject(elem, event, context, loopIterator) {
	    var _this = this;

	    var funcParams = elem.getAttribute('ac-' + event);
	    elem.removeAttribute('ac-' + event);
	    var fnName = funcParams.replace(/ +/g, "");
	    var modifiers = getEventMod(elem);
	    var kModifiers = getKeyMod(elem);
	    var once = { state: false };

	    var regExp = /\(([^)]+)\)|\(()\)/;
	    var fnParams = regExp.exec(fnName); // get value between brackets

	    var functionName = fnName.replace(regExp, ''); // remove everything between brackets

	    var newEvent = {
	        fnName: functionName,
	        event: event,
	        el: elem,
	        f: function f(e) {
	            var args = [];

	            if (fnParams) {
	                if (fnParams[1]) {
	                    fnParams[1].replace(/ +/g, "").split(',').forEach(function (res) {
	                        var arg = void 0;
	                        if (res === loopIterator) {
	                            arg = context();
	                        } else {
	                            arg = getInputArgs(res);
	                        }
	                        args.push(arg);
	                    });
	                } else {
	                    args.push(undefined);
	                }
	            }

	            if (_this[functionName]) {
	                callModifiers.call(_this, modifiers, e, elem, once).subscribe(function (res) {
	                    if (kModifiers) {
	                        callKModifiers.call(_this, e, kModifiers, function () {
	                            var _functionName;

	                            (_functionName = _this[functionName]).call.apply(_functionName, [_this, e].concat(args));
	                        });
	                    } else {
	                        var _functionName2;

	                        (_functionName2 = _this[functionName]).call.apply(_functionName2, [_this, e].concat(args));
	                    }
	                });
	            } else {
	                console.warn('You have no function in your component');
	            }
	        }
	    };

	    return newEvent;
	}

	function getInputArgs(res) {
	    var type = void 0;
	    var arg = void 0;
	    try {
	        type = _typeof(new Function('return ' + res).apply(this));
	    } catch (e) {
	        type = undefined;
	    }

	    if (type === 'string' || type === 'number' || type === 'object') {
	        arg = new Function('return ' + res).apply(this);
	    } else {
	        arg = new Function('return this.' + res).apply(this);
	    }
	    return arg;
	}

	var modifierCode = {
	    stop: stop,
	    prevent: prevent
	};

	function stop(e) {
	    e.stopPropagation();
	}

	function prevent(e) {
	    e.preventDefault();
	}

	function callModifiers(modifiers, event, elem, once) {
	    modifiers.forEach(function (mod) {
	        if (modifierCode[mod]) {
	            modifierCode[mod](event, elem);
	        }
	        // else {
	        //     console.warn(this.constructor.name + '; Unknown modifier');
	        // }
	    });

	    function selfModifier(f) {
	        if (modifiers.indexOf('self') > -1 && event.target.isEqualNode(elem)) {
	            once.state = true; // change only when event was fired
	            f.call(this);
	        } else if (modifiers.indexOf('self') === -1) {
	            once.state = true; // change only when event was fired
	            f.call(this);
	        }
	    }

	    return {
	        subscribe: function subscribe(f) {
	            if (modifiers.indexOf('once') > -1 && !once.state) {
	                selfModifier(f);
	            } else if (modifiers.indexOf('once') === -1) {
	                selfModifier(f);
	            }
	        }
	    };
	}

	var keyCodes = {
	    esc: 27,
	    tab: 9,
	    enter: 13,
	    space: 32,
	    up: 38,
	    left: 37,
	    right: 39,
	    down: 40,
	    'delete': [8, 46]
	};

	function callKModifiers(e, modifiers, cb) {
	    if (typeof keyCodes[modifiers] === 'number' && e.keyCode === keyCodes[modifiers]) {
	        cb.call();
	    } else if (_typeof(keyCodes[modifiers]) === 'object' && keyCodes[modifiers].indexOf(e.keyCode) > -1) {
	        cb.call();
	    }
	}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._model = _model;
	function _model(array) {
	    var _this = this;

	    array.forEach(function (item) {

	        if (item.elem.localName === 'input') {

	            switch (item.elem.type) {
	                case 'checkbox':
	                    item.elem.addEventListener('change', function (e) {
	                        _this.setComponentVariable(item.attr, e.currentTarget.checked ? true : false);
	                    }, false);
	                    break;
	                case 'radio':
	                    item.elem.addEventListener('change', function (e) {
	                        _this.setComponentVariable(item.attr, e.currentTarget.value);
	                    }, false);
	                    break;
	                case 'text':
	                case 'email':
	                case 'password':
	                    item.elem.addEventListener('keydown', function (e) {
	                        _this.setComponentVariable(item.attr, e.currentTarget.value);
	                    }, false);
	                    item.elem.addEventListener('keyup', function (e) {
	                        _this.setComponentVariable(item.attr, e.currentTarget.value);
	                    }, false);
	                    break;
	            }
	        }

	        item.elem.addEventListener('modelChange', function (e) {
	            _this.setComponentVariable(item.attr, e.detail);
	        }, false);
	    });
	}

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._input = _input;

	var _core = __webpack_require__(6);

	function _input(array) {
	    var _this = this;

	    array.forEach(function (item) {
	        if (item.elem.COMPONENT) {
	            var _array = _core.Utils.removeSpacesFromString(item.attr).split(',');
	            var inputParams = {};
	            _array.forEach(function (item) {
	                var variable = item.split(':')[0];
	                var params = item.split(':')[1];
	                if (params[0] === '@') {
	                    inputParams[variable] = _this.getComponentVariable(params.replace(/@+/g, "").split('.'));
	                } else {
	                    inputParams[variable] = params;
	                }
	            });
	            item.elem.COMPONENT.INPUT(inputParams);
	        }
	    });
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._link = _link;

	var _core = __webpack_require__(6);

	function _link(array, data) {
	    var _this = this;

	    array.forEach(function (item) {
	        item.elem.removeEventListener('click', item.callback, false); // remove previous handler

	        var route = item.attr; //TemplateEngine(item.attr, data || this);

	        var regExp = /{{([^%>]+)?}}/g;
	        var matches = item.attr.match(regExp);
	        var params = regExp.exec(item.attr);
	        if (params) {
	            var r = _this.getComponentVariable(params[1].split('.'), data);
	            route = item.attr.replace(regExp, r);
	        }

	        item.callback = function (e) {
	            e.preventDefault();
	            _core.Router.navigate(route);
	        };

	        item.elem.addEventListener('click', item.callback, false);
	        item.elem.setAttribute('href', route || '/');
	    });
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._outside = _outside;

	var _private = __webpack_require__(23);

	var _core = __webpack_require__(6);

	function _outside(array) {
	    var _this = this;

	    array.forEach(function (item) {
	        var attr = item.attr;

	        _this.setSubscriptions(_core.GlobalEvents.click.sub(function (res) {
	            if (res.e) {
	                var ouside = _this.shadow ? item.elem.contains(res.e.path[0]) : item.elem.contains(res.e.target);
	                if (!ouside) {
	                    _this[attr].call(_this, res.e);
	                }
	            }
	        }));
	    });
	}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._on = _on;

	var _core = __webpack_require__(6);

	function _on(array) {
	    var _this = this;

	    array.forEach(function (item) {
	        var listeners = item.attr;
	        listeners = listeners.replace(/ +/g, "").split(',');

	        if (listeners.length) {
	            listeners.forEach(function (listener) {
	                var eventName = listener.split(':')[0];
	                var fn = _this[listener.split(':')[1]];
	                on.call(_this, eventName, fn, item.elem);
	            });
	        }
	    });
	}

	function on(event, f, el) {
	    var _this2 = this;

	    this.root.addEventListener(event, function (e) {
	        if (e.target === el) {
	            // listen to current component changes        
	            e.stopPropagation(); // to prevent further propagation
	            f.call(_this2, e, e.detail);
	        }
	    });
	}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._hostEvents = _hostEvents;
	exports._hostClasses = _hostClasses;
	exports._hostStyles = _hostStyles;
	exports._hostHidden = _hostHidden;
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

	function _hostHidden(params) {
	    if (params.prop) {
	        var r = this.getComponentVariable(params.prop.split('.'));
	        // console.log(this);
	        if (r) {
	            params.cached.removeAttribute('hidden');
	        } else {
	            params.cached.setAttribute('hidden', true);
	        }
	    }
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._formGroup = _formGroup;

	var _core = __webpack_require__(6);

	function _formGroup(array, data) {
	    var _this = this;

	    array.forEach(function (item) {
	        var formGroup = _this.getComponentVariable(item.attr.split('.'));
	        formGroup.setComponent(_this);
	        item.elem.setAttribute('novalidate', 'novalidate');
	        item.elem.querySelectorAll('[ac-form-control]').forEach(function (control) {
	            var attr = control.getAttribute('ac-form-control');
	            formGroup.controls[attr].setElem(control);;
	        });

	        item.elem.addEventListener('keyup', function (e) {
	            var attr = e.target.getAttribute('ac-form-control');
	            if (attr) {
	                formGroup.setValue(attr, e.target.value);
	            }
	        }, false);

	        item.elem.addEventListener('submit', function (e) {
	            var focusState = false;
	            var controls = e.target.querySelectorAll('[ac-form-control]');

	            controls.forEach(function (target) {
	                var attr = target.getAttribute('ac-form-control');
	                if (formGroup.controls[attr].isValid() === false && !focusState) {
	                    focusState = true;
	                    formGroup.controls[attr].markAsDirty();
	                    formGroup.controls[attr].validate();
	                    target.focus();
	                }
	            });

	            formGroup._validate();
	        }, true);
	    });
	}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._customDirective = _customDirective;

	var _component = __webpack_require__(34);

	var _private = __webpack_require__(23);

	function _customDirective(array) {
	    var _this = this;

	    _component.Component.CUSTOM_DIRECTIVES.forEach(function (directive) {
	        var array = _private.PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector].get(_this);
	        if (array && array.length) {
	            array.forEach(function (r) {
	                r.directive.onUpdate();
	            });
	        }
	    });
	}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Component = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// import Interpolation from './interpolation/interpolation';


	var _core = __webpack_require__(6);

	var _private = __webpack_require__(23);

	var _Directives = __webpack_require__(14);

	var _directives = __webpack_require__(12);

	var _events = __webpack_require__(13);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = exports.Component = function () {
	    function Component(root, options) {
	        _classCallCheck(this, Component);

	        Component.componentConstructor.call(this, root, options);
	    }

	    _createClass(Component, [{
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            this.root.innerHTML = this.preCompileTpl(this.tpl);
	            this.onAttach();

	            // if (this.options.interpolation) {
	            //Interpolation.interpolationInit.call(this, this.root, this.$interpolationArray);
	            // }

	            this.compile(); // render custom elements
	            this.compileRouter(); // render main router
	            // console.log(this);

	            //internal directives
	            _directives.DIRECTIVES_NAMES.forEach(function (directive) {
	                _Directives.Directives._init.call(_this, _this.root, directive, _private.PRIVATES.DIRECTIVES[directive]);
	            });

	            //events
	            _events.EVENTS_NAMES.forEach(function (directive) {
	                _Directives.Directives._initEvent.call(_this, _this.root, directive, _private.PRIVATES.EVENTS);
	            });

	            //custom directives
	            Component.CUSTOM_DIRECTIVES.forEach(function (Directive) {
	                var array = _Directives.Directives._init.call(_this, _this.root, Directive.params.selector, _private.PRIVATES.CUSTOM_DIRECTIVES[Directive.params.selector]);
	                if (array) {
	                    array.get(_this).map(function (item) {
	                        item.directive = new Directive(item.elem);
	                    });
	                }
	            });

	            _Directives.Directives._model.call(this, _private.PRIVATES.DIRECTIVES['ac-model'].get(this));
	            _Directives.Directives._on.call(this, _private.PRIVATES.DIRECTIVES['ac-on'].get(this));
	            _Directives.Directives._outside.call(this, _private.PRIVATES.DIRECTIVES['ac-outside'].get(this));
	            _Directives.Directives._pattern.call(this, _private.PRIVATES.DIRECTIVES['ac-pattern'].get(this));
	            _Directives.Directives._elRef.call(this, _private.PRIVATES.DIRECTIVES['ac-ref'].get(this));
	            _Directives.Directives._events.call(this, _private.PRIVATES.EVENTS.get(this));
	            _Directives.Directives._hostEvents.call(this, _private.PRIVATES.HOST.EVENTS.get(this));

	            _Directives.Directives._formGroup.call(this, _private.PRIVATES.DIRECTIVES['ac-form-group'].get(this));

	            this.onInit();
	        }
	    }, {
	        key: 'listenToPropsChanges',
	        value: function listenToPropsChanges() {
	            var _this2 = this;

	            this.$propsSub = this.props.sub(function (r) {
	                _Directives.Directives._computed.call(_this2, _private.PRIVATES.COMPUTED.get(_this2)); // should go first

	                _Directives.Directives._if.call(_this2, _private.PRIVATES.DIRECTIVES['ac-if'].get(_this2));
	                _Directives.Directives._for.call(_this2, _private.PRIVATES.DIRECTIVES['ac-for'].get(_this2));
	                _Directives.Directives._props.call(_this2, _private.PRIVATES.DIRECTIVES['ac-value'].get(_this2));
	                _Directives.Directives._input.call(_this2, _private.PRIVATES.DIRECTIVES['ac-input'].get(_this2));
	                _Directives.Directives._props.call(_this2, _private.PRIVATES.DIRECTIVES['ac-model'].get(_this2));
	                _Directives.Directives._style.call(_this2, _private.PRIVATES.DIRECTIVES['ac-style'].get(_this2));
	                _Directives.Directives._class.call(_this2, _private.PRIVATES.DIRECTIVES['ac-class'].get(_this2));
	                _Directives.Directives._attr.call(_this2, _private.PRIVATES.DIRECTIVES['ac-attr'].get(_this2));
	                _Directives.Directives._link.call(_this2, _private.PRIVATES.DIRECTIVES['ac-link'].get(_this2));
	                _Directives.Directives._hostClasses.call(_this2, _private.PRIVATES.HOST.CLASS.get(_this2));
	                _Directives.Directives._hostStyles.call(_this2, _private.PRIVATES.HOST.STYLE.get(_this2));
	                _Directives.Directives._hostHidden.call(_this2, _private.PRIVATES.HOST.HIDDEN.get(_this2));

	                // Interpolation.interpolationRun.call(this, this.$interpolationArray);

	                _Directives.Directives._customDirective.call(_this2);
	                _this2.onUpdate();
	            });
	        }
	    }, {
	        key: 'compile',
	        value: function compile() {
	            var _this3 = this;

	            Component.COMPONENTS.forEach(function (comp) {
	                var components = _this3.root.querySelectorAll(comp.selector);
	                if (components.length) {
	                    components.forEach(function (r) {
	                        if (!r.COMPONENT) {
	                            // don't reinitialize
	                            var a = new comp(r, {}, _this3);
	                            if (!_this3.children[a.constructor.name]) {
	                                _this3.children[a.constructor.name] = [];
	                                _this3.children[a.constructor.name].push(a);
	                            }
	                        }
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'compileRouter',
	        value: function compileRouter() {
	            var router = this.root.querySelectorAll('route-switcher')[0];
	            if (router) {
	                var newComp = new _core.RouteSwitcher(router, this);
	                if (!this.children[newComp.constructor.name]) {
	                    this.children[newComp.constructor.name] = [];
	                    this.children[newComp.constructor.name].push(newComp);
	                }
	            }
	        }
	    }, {
	        key: 'preCompileTpl',
	        value: function preCompileTpl(html) {
	            this.compile(html);

	            _events.EVENTS_NAMES.forEach(function (event) {
	                var stringToGoIntoTheRegex = '@' + event;
	                var regex = new RegExp(stringToGoIntoTheRegex, "g");
	                html = html.replace(regex, 'ac-' + event);
	            });

	            return html;
	        }
	    }, {
	        key: 'setSubscriptions',
	        value: function setSubscriptions() {
	            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	                rest[_key] = arguments[_key];
	            }

	            _private.PRIVATES.SUBSCRIPTIONS.set(this, _private.PRIVATES.SUBSCRIPTIONS.get(this).concat(rest));
	        }
	    }, {
	        key: 'getComponentVariable',
	        value: function getComponentVariable(variable, data) {
	            if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') return data;
	            return variable.reduce(function (o, i, index) {
	                if (!o[i] && o[i] !== 0 && o[i] !== false) {
	                    // in case when variable is undefined
	                    return index === variable.length - 1 ? null : {};
	                } else {
	                    return o[i];
	                }
	            }, data || this.props);
	        }
	    }, {
	        key: 'setComponentVariable',
	        value: function setComponentVariable(string, value) {
	            var params = ('props.' + string).split('.');
	            var lastProp = params[params.length - 1];
	            if (params.length > 1) {
	                params.splice(-1, 1);
	            }

	            var target = params.reduce(function (o, i) {
	                return o[i];
	            }, this);
	            if (target === this.props) {
	                // use instanceof
	                // target._data[lastProp] = value;
	                this.props.set(lastProp, value);
	            } else {
	                target[lastProp] = value;
	                this.props.set(this.props.getData());
	            }
	        }
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
	        key: 'emit',
	        value: function emit(event, data, parentName) {
	            var myEvent = new CustomEvent(event, {
	                detail: data,
	                bubbles: true,
	                cancelable: false
	            });

	            if (parentName) {
	                this.getParentComponent(parentName).dispatchEvent(myEvent);
	            } else if (this.root) {
	                this.root.dispatchEvent(myEvent);
	            }
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
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            // remove all event listeners
	            this.onDestroy();
	            if (this.$propsSub) {
	                this.$propsSub.unsubscribe();
	            }

	            _Directives.Directives.removeEventListeners.call(this, _private.PRIVATES.EVENTS.get(this));

	            //unsubscribe from router changes
	            // if (this.$routerSub) {
	            //     // console.log('destroyed', this);
	            //     this.$routerSub.unsubscribe();
	            // }

	            //unsubscribe from components subscribers
	            _private.PRIVATES.SUBSCRIPTIONS.get(this).forEach(function (item) {
	                return item.unsubscribe();
	            });

	            // this.root.remove();
	            this.root = null;
	        }
	    }, {
	        key: 'INPUT',
	        value: function INPUT() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }, {
	        key: 'onAttach',
	        value: function onAttach() {}
	    }, {
	        key: 'onUpdate',
	        value: function onUpdate() {}
	    }, {
	        key: 'onInit',
	        value: function onInit() {}
	    }], [{
	        key: 'componentConstructor',
	        value: function componentConstructor(root, options) {
	            this.root = root; //;console.log(root);

	            var attrs = {};
	            this.children = {};

	            Object.defineProperty(this, 'options', {
	                value: _extends({}, options),
	                writable: false
	            });

	            Object.defineProperty(this, 'tpl', { value: options.template || 'Empty template', writable: false });
	            Object.defineProperty(this, 'props', { value: new _core.ObservableModel(_extends({}, options.props)), writable: false });

	            Object.defineProperty(this, 'type', { value: options.type, writable: false });

	            Object.defineProperty(this, '$refs', { value: {}, writable: false });

	            for (var i = 0; i < root.attributes.length; i++) {
	                attrs[root.attributes[i].nodeName] = root.attributes[i].nodeValue;
	            }

	            Object.defineProperty(this, '$attrs', { value: attrs, writable: false });
	            // Object.defineProperty(this, '$routerSub', { value: null, writable: true });

	            this.root.COMPONENT = this;

	            if (this instanceof Component.root.class) {
	                Component.rootInstance = this;
	            }

	            Component.setPrivates.call(this, options);

	            if (this.root.getAttribute('ac-for')) {
	                // console.warn('Foor loop is detected!')
	            } else {
	                this.render();
	                this.listenToPropsChanges();
	            }
	        }
	    }, {
	        key: 'setPrivates',
	        value: function setPrivates(options) {
	            var _this4 = this;

	            for (var array in _private.PRIVATES.DIRECTIVES) {
	                _private.PRIVATES.DIRECTIVES[array].set(this, []);
	            }

	            _private.PRIVATES.EVENTS.set(this, []);
	            _private.PRIVATES.SUBSCRIPTIONS.set(this, []);
	            // PRIVATES.GLOBAL_EVENTS.set(this, null);
	            _private.PRIVATES.HOST.EVENTS.set(this, options.hostEvents);
	            _private.PRIVATES.HOST.CLASS.set(this, options.hostClasses);
	            _private.PRIVATES.HOST.STYLE.set(this, options.hostStyles);
	            _private.PRIVATES.HOST.HIDDEN.set(this, {
	                prop: options.hostHidden,
	                comment: document.createComment(this.constructor.name),
	                cached: this.root
	            });
	            _private.PRIVATES.COMPUTED.set(this, options.computed);

	            Component.CUSTOM_DIRECTIVES.forEach(function (directive) {
	                if (!_private.PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector]) {
	                    _private.PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector] = new WeakMap();
	                }
	                _private.PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector].set(_this4, []);
	            });

	            // console.log(PRIVATES.CUSTOM_DIRECTIVES, this);

	            // this.$interpolationArray = [];
	        }
	    }]);

	    return Component;
	}();

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._computed = _computed;
	function _computed(params) {
	    if (params) {
	        for (var computed in params) {
	            var newValue = params[computed].call(this.props);
	            this.props.set(computed, newValue, true);
	        }
	    }
	}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = DirectiveDecorator;
	function DirectiveDecorator(decoratorParams) {
	    return function decorator(Class) {
	        Class.params = decoratorParams;
	        return Class;
	    };
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * @name JavaScript/NodeJS Merge v1.2.0
	 * @author yeikos
	 * @repository https://github.com/yeikos/js.merge

	 * Copyright 2014 yeikos - MIT license
	 * https://raw.github.com/yeikos/js.merge/master/LICENSE
	 */

	;(function(isNode) {

		/**
		 * Merge one or more objects 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */

		var Public = function(clone) {

			return merge(clone === true, false, arguments);

		}, publicName = 'merge';

		/**
		 * Merge two or more objects recursively 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */

		Public.recursive = function(clone) {

			return merge(clone === true, true, arguments);

		};

		/**
		 * Clone the input removing any reference
		 * @param mixed input
		 * @return mixed
		 */

		Public.clone = function(input) {

			var output = input,
				type = typeOf(input),
				index, size;

			if (type === 'array') {

				output = [];
				size = input.length;

				for (index=0;index<size;++index)

					output[index] = Public.clone(input[index]);

			} else if (type === 'object') {

				output = {};

				for (index in input)

					output[index] = Public.clone(input[index]);

			}

			return output;

		};

		/**
		 * Merge two objects recursively
		 * @param mixed input
		 * @param mixed extend
		 * @return mixed
		 */

		function merge_recursive(base, extend) {

			if (typeOf(base) !== 'object')

				return extend;

			for (var key in extend) {

				if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

					base[key] = merge_recursive(base[key], extend[key]);

				} else {

					base[key] = extend[key];

				}

			}

			return base;

		}

		/**
		 * Merge two or more objects
		 * @param bool clone
		 * @param bool recursive
		 * @param array argv
		 * @return object
		 */

		function merge(clone, recursive, argv) {

			var result = argv[0],
				size = argv.length;

			if (clone || typeOf(result) !== 'object')

				result = {};

			for (var index=0;index<size;++index) {

				var item = argv[index],

					type = typeOf(item);

				if (type !== 'object') continue;

				for (var key in item) {

					var sitem = clone ? Public.clone(item[key]) : item[key];

					if (recursive) {

						result[key] = merge_recursive(result[key], sitem);

					} else {

						result[key] = sitem;

					}

				}

			}

			return result;

		}

		/**
		 * Get type of variable
		 * @param mixed input
		 * @return string
		 *
		 * @see http://jsperf.com/typeofvar
		 */

		function typeOf(input) {

			return ({}).toString.call(input).slice(8, -1).toLowerCase();

		}

		if (isNode) {

			module.exports = Public;

		} else {

			window[publicName] = Public;

		}

	})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module)))

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Register = Register;

	var _core = __webpack_require__(6);

	var _component = __webpack_require__(34);

	function Register(options) {
	    // console.time('modules')

	    if (options.styles) {
	        loadStyle(options.styles);
	    }

	    if (options.serverUrl) {
	        if (typeof options.serverUrl === 'string') {
	            _core.Http.setServerUrl(options.serverUrl);
	        } else {
	            throw new Error('directives must be a string');
	        }
	    }

	    if (options.stores) {
	        if (options.stores instanceof Object) {
	            _component.Component.STORES = options.stores;
	        } else {
	            throw new Error('stores must be an object');
	        }
	    }

	    _component.Component.COMPONENTS = options.components;
	    _core.RouteSwitcher.ROUTES = options.routes;
	    _component.Component.CUSTOM_DIRECTIVES = []; // for custom directives
	    _component.Component.root = options.root;

	    if (options.directives) {
	        if (options.directives instanceof Array) {
	            _component.Component.CUSTOM_DIRECTIVES = options.directives;
	        } else {
	            throw new Error('directives must be an array');
	        }
	    }

	    if (options.modules instanceof Array) {
	        options.modules.forEach(function (module) {
	            module.forEach(function (component) {
	                registerComponent(component);
	            });
	        });
	    } else {
	        throw new Error('modules must be an array');
	    }

	    var rootEl = document.querySelectorAll(options.root.selector)[0];
	    if (rootEl) {
	        var rootComponent = new options.root(rootEl);
	        rootComponent.root.setAttribute('ac-version', ("0.6.4"));
	    } else {
	        console.warn('There is no root component');
	    }
	}

	function registerComponent(component) {
	    if (component instanceof _component.Component.constructor) {
	        _component.Component.COMPONENTS.push(component);
	    } else {
	        console.warn('Wrong type of component');
	    }
	}

	function loadStyle(styles) {
	    if (styles) {
	        var css = styles.toString(),
	            style = document.createElement('style');

	        style.type = 'text/css';
	        if (style.styleSheet) {
	            style.styleSheet.cssText = css;
	        } else {
	            style.appendChild(document.createTextNode(css));
	        }
	        // document.head.append(style);
	        document.getElementsByTagName('head')[0].appendChild(style);
	    }
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RouteSwitcher = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _routerCore = __webpack_require__(41);

	var _routerCore2 = _interopRequireDefault(_routerCore);

	var _core = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RouteSwitcher = exports.RouteSwitcher = function () {
	    function RouteSwitcher(root, parent) {
	        _classCallCheck(this, RouteSwitcher);

	        this.routes = RouteSwitcher.ROUTES;
	        this.root = root;
	        this.children = {};
	        this.parent = parent;
	        this.root.COMPONENT = this;
	        // this.constructorName = this.constructor.name;
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
	                        // REMOVE ALL COMPONENTS BEFORE CLEARING
	                        _this.destroyChildren(_this.root);
	                        _this.renderComponent(_this, route, params);
	                        _this.prevPage = route.path;
	                    }

	                    var childComp = void 0;
	                    var router = void 0;

	                    if (Object.keys(_this.children).length) {
	                        childComp = _this.children[Object.keys(_this.children)[0]][0];
	                        router = childComp.root.querySelectorAll('child-route-switcher')[0];
	                    }

	                    if (router) {
	                        _this.destroyChildren(router);
	                        var newComp = new ChildRouter(router, childComp);
	                        if (childComp) {
	                            childComp.children[newComp.constructor.name] = [];
	                            childComp.children[newComp.constructor.name].push(newComp);
	                        }

	                        var current = _this.routes.filter(function (item) {
	                            return item.path === route.path;
	                        })[0];
	                        var path = _routerCore2.default.getCurrentFullPath()[1];
	                        var child = _this.getChild(current, path);

	                        if (_this.prevChild !== path || !_this.prevChild) {
	                            _this.renderComponent(newComp, child, params);
	                            _this.prevChild = path;
	                        }
	                    }

	                    _this.setActiveLink();
	                });
	            });
	            _routerCore2.default.update();
	        }
	    }, {
	        key: 'setActiveLink',
	        value: function setActiveLink() {
	            var a = _core.Component.rootInstance.root.querySelectorAll('[href]'); //this.root.querySelectorAll('[href]');
	            a.forEach(function (item) {
	                var fullRoute = _routerCore2.default.getCurrentFullPath();
	                var fullPath = _routerCore2.default.getFullStringPath();
	                var attr = item.getAttribute('href');
	                var setActive = attr === fullPath || fullRoute[0] === attr && !item.getAttribute('ac-link-exact');
	                setActive ? item.classList.add('active') : item.classList.remove('active');
	            });
	        }
	    }, {
	        key: 'getChild',
	        value: function getChild(current, path) {
	            return path ? current.children.filter(function (item) {
	                return item.path === path;
	            })[0] : current.children.filter(function (item) {
	                return item.path === '' || item.path === '/';
	            })[0];
	        }
	    }, {
	        key: 'getComponentName',
	        value: function getComponentName(route) {
	            return _core.Component.COMPONENTS.filter(function (r) {
	                return r.selector === route.component;
	            })[0];
	        }
	    }, {
	        key: 'renderComponent',
	        value: function renderComponent(component, route, params) {
	            if (route) {
	                var newCompObject = this.getComponentName(route); //Component.COMPONENTS.filter(r => r.selector === route.component)[0];
	                if (newCompObject) {
	                    var newComp = document.createElement(route.component);
	                    this.checkAccess(component.root, newComp, route, function () {
	                        var a = new newCompObject(newComp, {}, component);
	                        component.children = {};
	                        component.children[a.constructor.name] = [];
	                        component.children[a.constructor.name].push(a);
	                    });
	                } else {
	                    this.appendEmpty(component.root);
	                }
	            } else {
	                this.appendEmpty(component.root);
	            }
	        }
	    }, {
	        key: 'checkAccess',
	        value: function checkAccess(root, newComp, route, cb) {
	            if (route.protector) {
	                var protector = new route.protector();
	                if (protector.check()) {
	                    root.appendChild(newComp);
	                    cb();
	                } else {
	                    // this.noAccess(root);
	                }
	            } else {
	                root.appendChild(newComp);
	                cb();
	            }
	        }
	    }, {
	        key: 'destroyChildren',
	        value: function destroyChildren(root) {
	            if (this.root.childNodes[0]) {
	                this.destroyAllChildren(this.root.childNodes[0].COMPONENT.children);
	            }
	            root.innerHTML = '';
	        }
	    }, {
	        key: 'destroyAllChildren',
	        value: function destroyAllChildren(children) {
	            var _this2 = this;

	            for (var key in children) {
	                children[key].forEach(function (child) {
	                    _this2.destroyAllChildren(child.children);
	                    child.children = [];
	                    // console.log(child);
	                    child.destroy();
	                });
	            }
	        }
	    }, {
	        key: 'appendEmpty',
	        value: function appendEmpty(root) {
	            var newComp = document.createElement('div');
	            newComp.innerHTML = 'Please specify a component for this route <b style="color: red">' + _routerCore2.default.getCurrentFullPath().join('/') + '</b>!';
	            root.appendChild(newComp);
	        }

	        // noAccess(root) {
	        //     let newComp = document.createElement('div');
	        //     newComp.innerHTML = `You have no access to this page`;
	        //     newComp.className = 'no-access';
	        //     root.appendChild(newComp);
	        // }

	    }]);

	    return RouteSwitcher;
	}();

	var ChildRouter = function (_RouteSwitcher) {
	    _inherits(ChildRouter, _RouteSwitcher);

	    function ChildRouter(root, parent) {
	        _classCallCheck(this, ChildRouter);

	        return _possibleConstructorReturn(this, (ChildRouter.__proto__ || Object.getPrototypeOf(ChildRouter)).call(this, root, parent));
	    }

	    _createClass(ChildRouter, [{
	        key: 'onCreate',
	        value: function onCreate() {}
	    }, {
	        key: 'destroy',
	        value: function destroy() {}
	    }]);

	    return ChildRouter;
	}(RouteSwitcher);

/***/ }),
/* 41 */
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
	        this.$params = undefined;
	        window.addEventListener('popstate', function (e) {
	            // Make sure popstate doesn't run on init -- this is a common issue with Safari and old versions of Chrome
	            if (self.state && self.state.previousState === null) return false;

	            var a = _this.getCurrentRoute(_this.getFullStringPath());
	            if (a) {
	                _this.prevPath = a.path;
	                a.callback();
	                _this.runSubscribtions();

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
	        key: 'getFullStringPath',
	        value: function getFullStringPath() {
	            return location.pathname.substr(1) || '/';
	        }
	    }, {
	        key: 'getCurrentRoute',
	        value: function getCurrentRoute(path) {
	            var _this2 = this;

	            var match = this.routes.filter(function (route) {
	                var a = path.split('/');
	                var b = route.path.split('/');

	                if (a[1] && a[0] === b[0]) {
	                    route.params = a[1];
	                    route.newPath = path;
	                    _this2.$params = route.params;
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
	        key: 'getParams',
	        value: function getParams() {
	            return this.$params;
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
	            var _this3 = this;

	            this.subscribtions.forEach(function (item) {
	                item.fn.call(_this3, _this3.getCurrentPath(), _this3.getCurrentFullPath());
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
/* 42 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TemplateEngine = TemplateEngine;
	function TemplateEngine(html) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var re = /{{([^%>]+)?}}/g,
	        reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
	        code = 'var r=[];\n',
	        cursor = 0,
	        match = void 0;
	    var add = function add(line, js) {
	        js ? code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n' : code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '';
	        return add;
	    };
	    while (match = re.exec(html)) {
	        add(html.slice(cursor, match.index))(match[1], true);
	        cursor = match.index + match[0].length;
	    }
	    add(html.substr(cursor, html.length - cursor));
	    code += 'return r.join("");';
	    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
	}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _observable = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GlobalEvents = function GlobalEvents() {
	    var _this = this;

	    _classCallCheck(this, GlobalEvents);

	    this.click = new _observable.ObservableModel();
	    window.addEventListener('click', function (e) {
	        _this.click.reset({ e: e });
	    }, true);
	};

	exports.default = new GlobalEvents();

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var scrollArray = [];
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	var daysOfWeekShort = ['Mo', 'Tu', 'Wen', 'Th', 'Fr', 'Sat', 'Sun'];
	var Utils = {
	    monthNames: monthNames,
	    monthNamesShort: monthNamesShort,
	    daysOfWeekShort: daysOfWeekShort,
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
	        date = new Date(date);
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
	            case 'mmm dd, yyyy':
	                result = monthNamesShort[date.getMonth()] + " " + day + ", " + year;
	                break;
	            default:
	                result = year + '-' + month + '-' + day;
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
	        params.reverse = !params.reverse;
	        return array.map(function (item) {
	            if (item.id === params.id) {
	                item.active = true;
	            } else {
	                item.active = false;
	                item.reverse = false;
	            }
	            return item;
	        });
	    },
	    sorting: function sorting(array, params) {
	        switch (params.type) {
	            case 'date':
	                array.sort(function (a, b) {
	                    return new Date(a[params.id]).getTime() - new Date(b[params.id]).getTime();
	                });
	                break;
	            case 'string':
	                array.sort(function (a, b) {
	                    if (a[params.id] < b[params.id]) {
	                        return -1;
	                    } else {
	                        return 1;
	                    }
	                });
	                break;
	            case 'number':
	                array.sort(function (a, b) {
	                    return a[params.id] - b[params.id];
	                });
	                break;
	        }

	        if (params.reverse) {
	            array.reverse();
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
	    },
	    removeSpacesFromString: function removeSpacesFromString(str) {
	        str = str || '';
	        return str.replace(/ +/g, "");
	    }
	};

	exports.Utils = Utils;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Chart = exports.Sortable = undefined;

	var _sortable = __webpack_require__(46);

	var _sortable2 = _interopRequireDefault(_sortable);

	var _aceChart = __webpack_require__(47);

	var _aceChart2 = _interopRequireDefault(_aceChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Sortable = _sortable2.default;
	exports.Chart = _aceChart2.default;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Sortable = function () {
	    function Sortable(root, cb) {
	        _classCallCheck(this, Sortable);

	        this._onDragstart = this._onDragstart.bind(this);
	        this._onDragOver = this._onDragOver.bind(this);
	        this._onDragEnd = this._onDragEnd.bind(this);
	        // this._onDrop = this._onDrop.bind(this);
	        this._onDragLeave = this._onDragLeave.bind(this);
	    }

	    _createClass(Sortable, [{
	        key: 'init',
	        value: function init(params) {
	            if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
	                this.root = params.el;
	                if (params.onDragEnd) {
	                    this.onDragEnd = params.onDragEnd;
	                }
	                this.addEvents();
	                this.addInexes();
	            } else {
	                console.warn('Please specify params as object');
	            }
	        }
	    }, {
	        key: 'addEvents',
	        value: function addEvents() {
	            this.root.addEventListener('dragstart', this._onDragstart, false);
	        }
	    }, {
	        key: 'addInexes',
	        value: function addInexes() {
	            [].forEach.call(this.root.children, function (el, i) {
	                el.setAttribute('data-index', i);
	            });
	        }
	    }, {
	        key: '_onDragstart',
	        value: function _onDragstart(evt, a) {
	            var _this = this;

	            this.dragEl = evt.target; // save element

	            // set type of d&d
	            evt.dataTransfer.effectAllowed = 'move';
	            evt.dataTransfer.setData('Text', this.dragEl.textContent);

	            this.root.addEventListener('dragover', this._onDragOver, false);
	            this.root.addEventListener('dragleave', this._onDragLeave, false);

	            // this.root.addEventListener('drop', this._onDrop, false);
	            this.root.addEventListener('dragend', this._onDragEnd, false);

	            // timeout is necessary, because dragEl shouldn't has ghost class
	            setTimeout(function () {
	                _this.dragEl.classList.add('ghost');
	            });
	        }
	    }, {
	        key: '_onDragLeave',
	        value: function _onDragLeave(e) {
	            var target = e.target;
	        }
	    }, {
	        key: '_onDragOver',
	        value: function _onDragOver(evt) {
	            evt.preventDefault();
	            evt.dataTransfer.dropEffect = 'move';
	            var target = this.target = evt.target;

	            var targetElem = target.closest('[draggable]');
	            if (this.dragEl !== targetElem) {
	                if (targetElem.nextElementSibling === this.dragEl) {
	                    this.root.insertBefore(this.dragEl, targetElem);
	                } else if (!targetElem.nextElementSibling) {
	                    this.insertAfter(this.dragEl, targetElem);
	                } else {
	                    this.root.insertBefore(this.dragEl, targetElem.nextElementSibling);
	                }
	            }
	            // if (target && target !== this.dragEl && target.nodeName === this.dragEl.nodeName /*&& target.parentNode === this.dragEl.parentNode*/) {
	            //     if (target.nextElementSibling === this.dragEl) {
	            //         this.root.insertBefore(this.dragEl, target);
	            //     } else if (!target.nextElementSibling) {
	            //         this.insertAfter(this.dragEl, target);
	            //     } else {
	            //         this.root.insertBefore(this.dragEl, target.nextElementSibling);
	            //     }
	            // }
	        }
	    }, {
	        key: '_onDragEnd',
	        value: function _onDragEnd(e) {
	            e.preventDefault();
	            this.dragEl.classList.remove('ghost');

	            if (this.onDragEnd) {
	                this.onDragEnd.call(this, this.root.children);
	            }

	            this.root.removeEventListener('dragover', this._onDragOver, false);
	            this.root.removeEventListener('dragleave', this._onDragLeave, false);
	            this.root.removeEventListener('dragend', this._onDragEnd, false);
	            // this.root.removeEventListener('drop', this._onDrop, false);
	        }

	        // _onDrop(e) {
	        //     let target = e.target;
	        //     this.dragEl.classList.remove('ghost');

	        //     // check if dragEl and target are not the same element and they both have the same nodeName
	        //     if (this.dragEl.draggable && target.draggable) {
	        //         if (this.onDrop) {
	        //             this.onDrop.call(this, this.root.children);
	        //         }
	        //     }
	        // }

	    }, {
	        key: 'insertAfter',
	        value: function insertAfter(elem, refElem) {
	            var parent = refElem.parentNode;
	            var next = refElem.nextSibling;
	            if (next) {
	                return parent.insertBefore(elem, next);
	            } else {
	                return parent.appendChild(elem);
	            }
	        }
	    }]);

	    return Sortable;
	}();

	exports.default = new Sortable();

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var colorsTheme = ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1", "#7cb5ec", "#434348"];

	var BarChart = function () {
	    function BarChart(options) {
	        _classCallCheck(this, BarChart);

	        this.options = options;
	        this.height = options.height || 250;
	        this.width = options.width || 250;
	        this.resultData = null;
	        this.onChangeCallback = function () {};
	    }

	    _createClass(BarChart, [{
	        key: "draw",
	        value: function draw() {
	            var svgHeight = this.getSvgHeight();
	            var svgWidth = this.getSvgWidth();

	            var chartData = this.getChartData(svgHeight, svgWidth);
	            var xLabels = this.getXLabels(svgHeight, svgWidth);
	            var xGroupLabels = this.getXGroupLabels(chartData, svgHeight, svgWidth);
	            var yLabels = this.getYLabels(svgHeight);

	            var xGrid = this.getXGrid(svgHeight);

	            this.onChangeCallback.call(this, { chartData: chartData, yLabels: yLabels, xLabels: xLabels, xGrid: xGrid, xGroupLabels: xGroupLabels });
	        }
	    }, {
	        key: "getSvgHeight",
	        value: function getSvgHeight() {
	            return this.height - 100;
	        }
	    }, {
	        key: "getSvgWidth",
	        value: function getSvgWidth() {
	            return this.width - 100;
	        }
	    }, {
	        key: "getXGrid",
	        value: function getXGrid(svgHeight) {
	            var xGrid = [];
	            var maxVal = this.getMaxValue(this.options.data.map(function (r) {
	                return r.value;
	            }));
	            var count = this.options.stepCount || this.getModulo(maxVal);
	            var stepHeight = svgHeight / count;

	            for (var i = 0; i <= count; i++) {
	                xGrid.push({
	                    x1: 40,
	                    x2: this.width - 40,
	                    y1: 50 + i * stepHeight,
	                    y2: 50 + i * stepHeight
	                });
	            }
	            return xGrid;
	        }
	    }, {
	        key: "getYLabels",
	        value: function getYLabels(svgHeight) {
	            var result = [];
	            var maxVal = this.getMaxValue(this.options.data.map(function (r) {
	                return r.value;
	            }));
	            var count = this.options.stepCount || this.getModulo(maxVal);
	            var stepHeight = svgHeight / count;

	            for (var i = 0; i <= count; i++) {
	                result.push({
	                    x: 30,
	                    y: 50 + i * stepHeight + 4, //svgHeight - i * stepHeight + 4,
	                    name: Math.abs(maxVal / count * (i - count)).toFixed(1)
	                });
	            }

	            return result;
	        }
	    }, {
	        key: "getChartData",
	        value: function getChartData(svgHeight, svgWidth) {
	            var _this = this;

	            var maxVal = this.getMaxValue(this.options.data.map(function (r) {
	                return r.value;
	            }));
	            var count = this.options.stepCount || this.getModulo(maxVal);
	            var stepHeight = svgHeight / (count + 1);

	            return this.options.data.map(function (r, i) {
	                return {
	                    x: i * (svgWidth / _this.options.data.length) + 50,
	                    y: svgHeight - svgHeight * (r.value / maxVal) + 50,
	                    // stroke: '#ffffff',
	                    stroeWidth: 1,
	                    fill: colorsTheme[i] || '#5699dc',
	                    width: 30,
	                    height: svgHeight * (r.value / maxVal),
	                    value: r.value
	                };
	            });
	        }
	    }, {
	        key: "getXLabels",
	        value: function getXLabels(svgHeight, svgWidth) {
	            var _this2 = this;

	            svgWidth = svgWidth - 40;
	            return this.options.data.map(function (r, i) {
	                return {
	                    x: i * (svgWidth / _this2.options.data.length) + 20,
	                    y: svgHeight + 15,
	                    name: r.value
	                };
	            });
	        }
	    }, {
	        key: "getXGroupLabels",
	        value: function getXGroupLabels(array, svgHeight, svgWidth) {
	            return array.map(function (r, i) {
	                return {
	                    x: r.x + 10,
	                    y: r.y - 4,
	                    name: r.value
	                };
	            });
	        }
	    }, {
	        key: "getModulo",
	        value: function getModulo(maxVal) {
	            var modulo = void 0;

	            switch (true) {
	                case maxVal % 6 === 0:
	                    console.log(6);
	                    modulo = 6;
	                    break;
	                case maxVal % 5 === 0:
	                    console.log(5);
	                    modulo = 5;
	                    break;
	                case maxVal % 4 === 0:
	                    console.log(4);
	                    modulo = 4;
	                    break;
	                case maxVal % 3 === 0:
	                    console.log(3);
	                    modulo = 3;
	                    break;
	                case maxVal % 2 === 0:
	                    console.log(2);
	                    modulo = 2;
	                    break;
	                default:
	                    modulo = 2;
	                    break;
	            }

	            return modulo;
	        }
	    }, {
	        key: "getMaxValue",
	        value: function getMaxValue(array) {
	            return Math.max.apply(null, array);
	        }
	    }, {
	        key: "onChange",
	        value: function onChange(f) {
	            this.onChangeCallback = f;
	        }
	    }, {
	        key: "setData",
	        value: function setData(data) {
	            this.options.data = [{ name: '4', value: 10 }, { name: '5', value: 15 }, { name: '6', value: 25 }];

	            var svgHeight = this.getSvgHeight();
	            var svgWidth = this.getSvgWidth();
	            var maxVal = this.getMaxValue(this.options.data.map(function (r) {
	                return r.value;
	            }));

	            var chartData = this.getChartData(svgHeight, svgWidth, maxVal);
	            // this.draw();
	            var xGrid = [];

	            for (var i = 0; i <= 5; i++) {
	                xGrid.push({ x1: 40, x2: this.width - 40, y1: svgHeight - i * 40, y2: svgHeight - i * 40 });
	            }

	            this.onChangeCallback.call(this, { chartData: chartData, yLabels: yLabels, xLabels: xLabels, xGrid: xGrid });
	        }
	    }, {
	        key: "append",
	        value: function append(tag) {
	            var elem = void 0;
	            return elem;
	        }
	    }]);

	    return BarChart;
	}();

	exports.default = BarChart;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LineChartComponent = exports.BarChartComponent = exports.TreeDebugComponent = exports.ModalStore = exports.ModalComponent = exports.DropdownComponent = exports.DatepickerComponent = undefined;

	var _datepicker = __webpack_require__(49);

	var _dropdown = __webpack_require__(50);

	var _modal = __webpack_require__(52);

	var _tree = __webpack_require__(54);

	var _tree2 = _interopRequireDefault(_tree);

	var _barChart = __webpack_require__(59);

	var _lineChart = __webpack_require__(62);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.DatepickerComponent = _datepicker.DatepickerComponent;
	exports.DropdownComponent = _dropdown.DropdownComponent;
	exports.ModalComponent = _modal.ModalComponent;
	exports.ModalStore = _modal.ModalStore;
	exports.TreeDebugComponent = _tree2.default;
	exports.BarChartComponent = _barChart.BarChartComponent;
	exports.LineChartComponent = _lineChart.LineChartComponent;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DatepickerComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _utils = __webpack_require__(44);

	var _decorators = __webpack_require__(8);

	var Decorators = _interopRequireWildcard(_decorators);

	var _dropdown = __webpack_require__(50);

	var _datepicker = __webpack_require__(51);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	var TODAY = new Date();

	var DatepickerComponent = exports.DatepickerComponent = (_dec = Decorators.ComponentDecorator({
	    selector: 'app-datepicker',
	    template: _datepicker2.default,
	    props: {
	        daysOfWeekShort: _utils.Utils.daysOfWeekShort,
	        formattedDate: _utils.Utils.getDateByFormat(TODAY, 'yyyy-mm-dd')
	    },
	    super: _dropdown.DropdownComponent
	}), _dec(_class = function () {
	    function DatepickerComponent(params) {
	        _classCallCheck(this, DatepickerComponent);
	    }

	    _createClass(DatepickerComponent, [{
	        key: 'INPUT',
	        value: function INPUT(params) {
	            if (params.model) {
	                this.props.set({
	                    model: new Date(params.model),
	                    formattedDate: _utils.Utils.getDateByFormat(params.model, 'yyyy-mm-dd')
	                });
	                this.currentDate = new Date(params.model); // init view
	            }

	            if (params.maxDate) {
	                this.maxDate = params.maxDate;
	            }

	            if (params.minDate) {
	                this.minDate = params.minDate;
	            }

	            this.update();
	        }
	    }, {
	        key: 'onInit',
	        value: function onInit() {
	            this.currentDate = TODAY;
	            this.update();
	        }
	    }, {
	        key: 'onOpen',
	        value: function onOpen() {
	            this.currentDate = new Date(this.props.get('model'));
	            this.update();
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this.props.set({
	                currentMonth: this.getCurrentMonth(),
	                currentYear: this.getCurrentYear(),
	                countOfDays: this.getCountOfDays()
	            });
	        }
	    }, {
	        key: 'select',
	        value: function select(event, params) {
	            if (params.inactive === false) {
	                this.emit('modelChange', params.date);
	                this.close();
	            }
	            event.stopPropagation();
	        }
	    }, {
	        key: 'prev',
	        value: function prev(e) {
	            e.stopPropagation();
	            this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1));
	            this.update();
	        }
	    }, {
	        key: 'next',
	        value: function next(e) {
	            e.stopPropagation();
	            this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + 1));
	            this.update();
	        }
	    }, {
	        key: 'getCurrentMonth',
	        value: function getCurrentMonth() {
	            var a = _utils.Utils.monthNames[this.currentDate.getMonth()];
	            // this.props.set('currentMonth', a);
	            return a;
	        }
	    }, {
	        key: 'getCurrentYear',
	        value: function getCurrentYear() {
	            var a = this.currentDate.getFullYear();
	            // this.props.set('currentYear', a);
	            return a;
	        }
	    }, {
	        key: 'getDays',
	        value: function getDays(date) {
	            date = new Date(date);
	            var year = date.getFullYear();
	            var month = date.getMonth();

	            var monthStart = new Date(year, month, 1);
	            var monthEnd = new Date(year, month + 1, 1);
	            var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
	            var days = [];
	            var minDate = new Date(this.minDate || new Date());
	            var maxDate = new Date(this.maxDate);
	            var emptyDays = monthStart.getDay() - 1; // get last dates of prev month

	            monthStart = _utils.Utils.addDays(monthStart, -emptyDays); // set start position

	            for (var i = 1; i < monthLength + 1 + emptyDays; i++) {
	                var _date = _utils.Utils.addDays(monthStart, i - 1);
	                var day = { index: _date.getDate(), date: _date, today: false, selected: false, inactive: false, empty: false };

	                if (i <= emptyDays) {
	                    day.empty = true;
	                }

	                if (new Date().toDateString() == day.date.toDateString()) {
	                    day.today = true;
	                }
	                if (this.props.get('model') && this.props.get('model').toDateString() == day.date.toDateString()) {
	                    day.selected = true;
	                }

	                // if (this.props.get('model') && this.props.get('model').toDateString() == day.date.toDateString()) {
	                //     day.selected = true;
	                // }

	                if (minDate && day.date.setHours(0, 0, 0, 0) < minDate.setHours(0, 0, 0, 0)) {
	                    day.inactive = true;
	                }
	                if (maxDate && day.date.setHours(0, 0, 0, 0) >= maxDate.setHours(0, 0, 0, 0)) {
	                    day.inactive = true;
	                }
	                days.push(day);
	            }

	            return days;
	        }
	    }, {
	        key: 'getCountOfDays',
	        value: function getCountOfDays() {
	            var a = this.getDays(this.currentDate);
	            // this.props.set('countOfDays', a);
	            return a;
	        }
	    }]);

	    return DatepickerComponent;
	}()) || _class);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DropdownComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _component = __webpack_require__(34);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DropdownComponent = exports.DropdownComponent = function () {
	    function DropdownComponent() {
	        _classCallCheck(this, DropdownComponent);
	    }

	    _createClass(DropdownComponent, [{
	        key: 'openMenu',
	        value: function openMenu(e) {
	            if (this.getRoot().getAttribute('readonly') === null) {
	                this.props.set('_show', !this.props.get('_show'));
	                this.onOpen();
	            }
	        }
	    }, {
	        key: 'outside',
	        value: function outside() {
	            if (this.props.get('_show')) {
	                this.onClose();
	                this.close();
	            }
	        }
	    }, {
	        key: 'onOpen',
	        value: function onOpen() {}
	    }, {
	        key: 'onClose',
	        value: function onClose() {}
	    }, {
	        key: 'close',
	        value: function close() {
	            if (this.props.get('_show')) {
	                this.props.set('_show', false);
	            }
	        }
	    }]);

	    return DropdownComponent;
	}();

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<div ac-outside=\"outside\" class=\"relative\">\r\n\t<div  style=\"width: 100%\" class=\"app-form__label__input\">\r\n\t\t<input type=\"text\" @click=\"openMenu\" class=\"app-form__label__input full-width\" readonly ac-value=\"formattedDate\">\r\n\t\t<div class=\"app-form__border\"></div>\r\n\t\t<!-- <img class=\"datepicker-icon\" src=\"../../assets/img/hanging-calendar.svg\" alt=\"\"> -->\r\n\t</div>\r\n\r\n\t<div class=\"j-calendar\" ac-if=\"this._show\" >\r\n\t    <div class=\"j-calendar__wrap\">\r\n\t        <div class=\"j-calendar__item\">\r\n\t            <div class=\"j-calendar__header\">\r\n\t                <div class=\"j-calendar__header__left\" @click=\"prev\">\r\n\t                    <span>prev</span>\r\n\t                </div>\r\n\t                <div class=\"j-calendar__header__center\">\r\n\t\t                <span ac-value=\"currentMonth\"></span>\r\n\t\t                <span style=\"margin-left: 7px;\" ac-value=\"currentYear\"></span>\r\n\t                </div>\r\n\t                <div class=\"j-calendar__header__right\" @click=\"next\">\r\n\t                    <span>Next</span>\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"j-calendar__content\">\r\n\t                <div class=\"j-calendar__days\">\r\n\t                    <div class=\"j-calendar__days__item\" ac-for=\"let item of daysOfWeekShort\">\r\n\t\t\t\t\t\t\t<span ac-value=\"index\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t                </div>\r\n\t                <div class=\"j-calendar__date\">\r\n\t                    <div class=\"j-calendar__date__item\" \r\n\t                    ac-class=\"j-calendar__date__item--today:this.today, j-calendar__date__item--active:this.selected, j-calendar__date__item--inactive: this.inactive\"\r\n\t                    ac-for=\"let item of countOfDays\"\r\n\t                    @click=\"select(item)\" ac-value=\"index\"></div>\r\n\t                </div>\r\n\t            </div>\r\n\t        </div>\r\n\t    </div>\r\n\t</div>\r\n</div>\r\n";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ModalComponent = exports.ModalStore = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(44);

	var _store = __webpack_require__(53);

	var _observable = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import {Component, Utils, Store, ObservableModel} from '../core';


	var ModalsStore = function (_Store) {
	    _inherits(ModalsStore, _Store);

	    function ModalsStore() {
	        _classCallCheck(this, ModalsStore);

	        var _this = _possibleConstructorReturn(this, (ModalsStore.__proto__ || Object.getPrototypeOf(ModalsStore)).call(this));

	        _this.modal = new _observable.ObservableModel({
	            visible: false,
	            modalData: null
	        });
	        return _this;
	    }

	    _createClass(ModalsStore, [{
	        key: 'init',
	        value: function init() {}
	    }, {
	        key: 'open',
	        value: function open(type) {
	            var _this2 = this;

	            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            setTimeout(function () {
	                _this2.type = type;
	                _this2.modal.set({
	                    type: type,
	                    visible: true,
	                    modalData: params.data || {},
	                    callback: params.callback
	                });
	            });
	        }
	    }, {
	        key: 'close',
	        value: function close(type) {
	            if (type === this.type) {
	                this.modal.set({
	                    visible: false
	                });
	            }
	        }
	    }]);

	    return ModalsStore;
	}(_store.Store);

	var ModalStore = new ModalsStore();

	var ModalComponent = function () {
	    function ModalComponent() {
	        _classCallCheck(this, ModalComponent);
	    }

	    _createClass(ModalComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            var _this3 = this;

	            this.setSubscriptions(ModalStore.modal.sub(function (r) {
	                if (r.visible && _this3.type === r.type) {
	                    // this.root.style.display = 'block';
	                    _this3.props.set(r);
	                    _this3.onOpen();
	                } else {
	                    _this3.props.set({ visible: false });
	                    // this.root.style.display = 'none';
	                    _this3.onClose();
	                }
	            }));
	        }
	    }, {
	        key: 'onOpen',
	        value: function onOpen() {}
	    }, {
	        key: 'onClose',
	        value: function onClose() {}
	    }, {
	        key: 'close',
	        value: function close() {
	            ModalStore.close(this.type);
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            ModalStore.close(this.type);
	        }
	    }, {
	        key: 'outside',
	        value: function outside(e, item) {
	            ModalStore.close(this.type);
	        }
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return ModalComponent;
	}();

	exports.ModalStore = ModalStore;
	exports.ModalComponent = ModalComponent;

/***/ }),
/* 53 */
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

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _tree = __webpack_require__(55);

	var _treeItem = __webpack_require__(57);

	exports.default = [_tree.AceTreeComponent, _treeItem.AceTreeItemComponent];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AceTreeComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _decorators = __webpack_require__(8);

	var Decorators = _interopRequireWildcard(_decorators);

	var _component = __webpack_require__(34);

	var _treeComponent = __webpack_require__(56);

	var _treeComponent2 = _interopRequireDefault(_treeComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AceTreeComponent = exports.AceTreeComponent = (_dec = Decorators.ComponentDecorator({
	    selector: 'app-tree-debug',
	    template: _treeComponent2.default,
	    props: {
	        components: [],
	        visible: true
	    },
	    hostHidden: 'visible'
	}), _dec(_class = function () {
	    function AceTreeComponent() {
	        _classCallCheck(this, AceTreeComponent);
	    }

	    _createClass(AceTreeComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            this.tree = [];
	        }
	    }, {
	        key: 'load',
	        value: function load() {
	            console.time('tree');
	            this.getChildren(_component.Component.rootInstance);
	            console.timeEnd('tree');

	            this.props.set('components', this.tree);
	        }
	    }, {
	        key: 'getChildren',
	        value: function getChildren(root) {
	            this.tree = [];
	            this.level = 0;
	            if (root.children) {
	                this.getAllChildren(root.children, this.tree);
	            }
	        }
	    }, {
	        key: 'getAllChildren',
	        value: function getAllChildren(children, tree) {
	            var _this = this;

	            for (var key in children) {
	                if (key !== 'AceTreeComponent') {
	                    (function () {
	                        var comp = { children: [], name: key };
	                        children[key].forEach(function (child) {
	                            tree.push(comp);
	                            _this.getAllChildren(child.children, comp.children);
	                        });
	                    })();
	                }
	            }
	        }
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return AceTreeComponent;
	}()) || _class);

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<button @click=\"load\">Load</button>\r\n<app-tree-item-debug ac-for=\"components\"></app-tree-item-debug>\r\n<style>\r\napp-tree-item-debug {\r\n    display: block;\r\n    padding: 5px 0;\r\n}\r\n\r\napp-tree-item-debug.children {\r\n    padding-left: 25px;\r\n}\r\n\r\n.toggle-btn {\r\n    cursor: pointer;\r\n    width: 12px;\r\n    height: 12px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: -22px;\r\n}\r\n.toggle-btn:before {\r\n    content: '\\25B6';\r\n    color: #757575;\r\n}\r\n.toggle-btn.active:before {\r\n    content: '\\25BC';\r\n    color: #757575;\r\n}\r\n\r\n.has-children {\r\n\tcursor: pointer;\r\n}\r\n</style>";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AceTreeItemComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _decorators = __webpack_require__(8);

	var Decorators = _interopRequireWildcard(_decorators);

	var _component = __webpack_require__(34);

	var _treeItemComponent = __webpack_require__(58);

	var _treeItemComponent2 = _interopRequireDefault(_treeItemComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AceTreeItemComponent = exports.AceTreeItemComponent = (_dec = Decorators.ComponentDecorator({
	    selector: 'app-tree-item-debug',
	    template: _treeItemComponent2.default,
	    hostEvents: {
	        click: 'toggle'
	    },
	    // hostClasses: {
	    //     'hidden': 'visible'
	    // },
	    // visibility: 'visible',
	    props: {
	        visible: false
	        // components: []
	    }
	}), _dec(_class = function () {
	    function AceTreeItemComponent() {
	        _classCallCheck(this, AceTreeItemComponent);
	    }

	    _createClass(AceTreeItemComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'toggle',
	        value: function toggle(e) {
	            e.stopPropagation();

	            this.props.set('visible', !this.props.get('visible'));
	        }
	    }]);

	    return AceTreeItemComponent;
	}()) || _class);

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<div style=\"position: relative;\">\r\n\t<span @click=\"toggle\" class=\"toggle-btn\" ac-if=\"this.children.length\" ac-class=\"active: !this.visible\"></span>\r\n\t<span @click=\"toggle\" class=\"component-name\" ac-class=\"has-children: this.children.length\" ac-value=\"name\"></span>\r\n</div>\r\n\r\n<div ac-class=\"hidden: this.visible\">\r\n\t<app-tree-item-debug ac-for=\"let item of children\" class=\"children\"></app-tree-item-debug>\r\n</div>\r\n";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BarChartComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _decorators = __webpack_require__(8);

	var Decorators = _interopRequireWildcard(_decorators);

	var _barChart = __webpack_require__(60);

	var _barChart2 = _interopRequireDefault(_barChart);

	var _chart = __webpack_require__(61);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BarChartComponent = exports.BarChartComponent = (_dec = Decorators.ComponentDecorator({
	    selector: 'ace-bar-chart',
	    template: _barChart2.default,
	    props: {
	        tooltipCoords: {
	            x: 0,
	            y: 0
	        },
	        xGrid: [],
	        xGroupLabels: [],
	        yLabels: [],
	        tooltipIsShown: false,
	        title: 'test chart',
	        colors: [],
	        background: '#eee',
	        yAxis: {
	            // min: 0,
	            label: ''
	        },
	        stepCount: 5,
	        series: [],
	        height: 300,
	        width: 600
	    },
	    super: _chart.Chart
	}), _dec(_class = function () {
	    function BarChartComponent() {
	        _classCallCheck(this, BarChartComponent);
	    }

	    _createClass(BarChartComponent, [{
	        key: 'INPUT',
	        value: function INPUT(params) {
	            var newParams = {};
	            for (var key in this.props.getData()) {
	                if (params.data[key]) {
	                    newParams[key] = params.data[key];
	                }
	            }

	            this.props.set(newParams);
	            this.draw();
	        }
	    }, {
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'mouseenter',
	        value: function mouseenter(e, item) {
	            clearTimeout(this._tooltipInterval);
	            this.props.set({
	                tooltipIsShown: true,
	                tooltipCoords: { x: item.x - 40 + 'px', y: item.y - 80 + 'px' },
	                tooltipSelected: {
	                    value: (item.value / this.props.get('series').reduce(function (a, b) {
	                        return a + b.value;
	                    }, 0) * 100).toFixed(2)
	                }
	            });
	        }
	    }, {
	        key: 'mouseleave',
	        value: function mouseleave(e) {
	            var _this = this;

	            if (this._tooltipInterval) {
	                clearTimeout(this._tooltipInterval);
	            }
	            this._tooltipInterval = setTimeout(function () {
	                _this.props.set({ 'tooltipIsShown': false });
	            }, 200);
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var svgHeight = this.getSvgHeight();
	            var svgWidth = this.getSvgWidth();

	            var series = this.getChartData(svgHeight, svgWidth);
	            // let xLabels = this.getXLabels(svgHeight, svgWidth);
	            var xGroupLabels = this.getXGroupLabels(series, svgHeight, svgWidth);
	            var yLabels = this.getYLabels(svgHeight);

	            var xGrid = this.getXGrid(svgHeight, svgWidth);

	            this.props.set({
	                series: series,
	                // xLabels: xLabels,
	                xGroupLabels: xGroupLabels,
	                yLabels: yLabels,
	                xGrid: xGrid,
	                yLabelX: 30,
	                yLabelY: this.props.get('height') / 2,
	                yLabelTransform: 'translate(0,0) rotate(270 26.140625 ' + this.props.get('height') / 2 + ')',
	                labelX: this.props.get('width') / 2
	            });
	        }
	    }, {
	        key: 'getXGrid',
	        value: function getXGrid(svgHeight, svgWidth) {
	            var xGrid = [];
	            var maxVal = this.getMaxValue(this.props.get('series').map(function (r) {
	                return r.value;
	            }));
	            var count = this.props.get('stepCount') || this.getModulo(maxVal);
	            var stepHeight = svgHeight / count;

	            for (var i = 0; i <= count; i++) {
	                xGrid.push({
	                    x1: _chart.Chart.xOffset / 2,
	                    x2: this.props.get('width') - _chart.Chart.xOffset / 2,
	                    y1: _chart.Chart.yOffset / 2 + i * stepHeight,
	                    y2: _chart.Chart.yOffset / 2 + i * stepHeight
	                });
	            }
	            return xGrid;
	        }
	    }, {
	        key: 'getYLabels',
	        value: function getYLabels(svgHeight) {
	            var result = [];
	            var maxVal = this.getMaxValue(this.props.get('series').map(function (r) {
	                return r.value;
	            }));
	            var count = this.props.get('stepCount') || this.getModulo(maxVal);
	            var stepHeight = svgHeight / count;

	            for (var i = 0; i <= count; i++) {
	                result.push({
	                    x: _chart.Chart.xOffset / 2 - 10,
	                    y: _chart.Chart.yOffset / 2 + i * stepHeight + 4, //svgHeight - i * stepHeight + 4,
	                    name: this.getTrueLabelName(Math.abs(maxVal / count * (i - count)))
	                });
	            }

	            return result;
	        }
	    }, {
	        key: 'getChartData',
	        value: function getChartData(svgHeight, svgWidth) {
	            var maxVal = this.getMaxValue(this.props.get('series').map(function (r) {
	                return r.value;
	            }));
	            var count = this.props.get('stepCount') || this.getModulo(maxVal);
	            var stepHeight = svgHeight / (count + 1);

	            var length = this.props.get('series').length - 1;
	            return this.props.get('series').map(function (r, i) {
	                // let a = ((svgWidth) / this.props.get('series').length) / (this.props.get('series').length);
	                return {
	                    x: i * (svgWidth / length - _chart.Chart.barWidth / length) + _chart.Chart.xOffset / 2,
	                    y: svgHeight - svgHeight * (r.value / maxVal) + _chart.Chart.yOffset / 2,
	                    // stroke: '#ffffff',
	                    stroeWidth: 1,
	                    fill: _chart.Chart.colorsTheme[i] || '#5699dc',
	                    width: _chart.Chart.barWidth,
	                    height: svgHeight * (r.value / maxVal),
	                    value: r.value
	                };
	            });
	        }

	        // getXLabels(svgHeight, svgWidth) {
	        //     svgWidth = svgWidth - 40;
	        //     return this.props.get('series').map((r, i) => {
	        //         return {
	        //             x: i * (svgWidth / this.props.get('series').length) + 20,
	        //             y: svgHeight + 15,
	        //             name: r.value
	        //         };
	        //     });
	        // }

	    }, {
	        key: 'getXGroupLabels',
	        value: function getXGroupLabels(series, svgHeight, svgWidth) {
	            var _this2 = this;

	            return series.map(function (r, i) {
	                return {
	                    x: r.x + 0,
	                    y: r.y - 4,
	                    name: (r.value / _this2.props.get('series').reduce(function (a, b) {
	                        return a + b.value;
	                    }, 0) * 100).toFixed(2) + '%'
	                };
	            });
	        }
	    }]);

	    return BarChartComponent;
	}()) || _class);

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<svg ac-ref=\"svg\" ac-attr=\"height: height, width: width\" ac-if=\"this.series.length\">\r\n    <rect class=\"highcharts-background\" x=\"0\" y=\"0\" ac-attr=\"height: height, width: width, fill: background\" rx=\"0\" ry=\"0\"></rect>\r\n    <text ac-attr=\"x: labelX\" text-anchor=\"middle\" class=\"acechart-title\" y=\"24\">\r\n        <tspan ac-value=\"title\"></tspan>\r\n    </text>\r\n    <text ac-attr=\"x: yLabelX, y: yLabelY, transform: yLabelTransform\" text-anchor=\"middle\" class=\"acecharts-axis-title\">\r\n        <tspan ac-value=\"yAxis.label\"></tspan>\r\n    </text>\r\n    <g class=\"acechart-grid acechart-yaxis-grid \">\r\n        <line ac-for=\"let item of xGrid\" ac-attr=\"x1: x1, x2: x2, y1: y1, y2: y2\" stroke=\"black\" stroke-width=\"1\" shape-rendering=\"crispEdges\" />\r\n    </g>\r\n    <g class=\"acechart-group\">\r\n        <rect ac-for=\"let item of series\" @mouseenter=\"mouseenter(item)\" @mouseleave=\"mouseleave\" ac-attr=\"x: x, y: y, stroke: stroke, fill: fill, stroke-width: strokeWidth, width: width, height: height\"></rect>\r\n    </g>\r\n    <!--     <g class=\"acechart-axis-labels acechart-xaxis-labels \" transform=\"translate(40,0) scale(1 1)\">\r\n        <text ac-for=\"xLabels\" ac-attr=\"x: x, y: y\" text-anchor=\"start\" transform=\"translate(0,0)\">\r\n            <tspan ac-value=\"name\"></tspan>\r\n        </text>\r\n    </g> -->\r\n    <g class=\"acechart-axis-labels acechart-xaxis-labels \">\r\n        <text ac-for=\"let item of xGroupLabels\" ac-attr=\"x: x, y: y\" text-anchor=\"start\" transform=\"translate(0,0)\">\r\n            <tspan ac-value=\"name\"></tspan>\r\n        </text>\r\n    </g>\r\n    <g class=\"acechart-axis-labels acechart-yaxis-labels \">\r\n        <text ac-for=\"let item of yLabels\" ac-attr=\"x: x, y: y\" text-anchor=\"end\" transform=\"translate(0,0)\">\r\n            <tspan ac-value=\"name\"></tspan>\r\n        </text>\r\n    </g>\r\n</svg>\r\n<div class=\"acecharts-tooltip\" ac-class=\"open: this.tooltipIsShown\" ac-style=\"top: tooltipCoords.y, left: tooltipCoords.x\">\r\n    <div style=\"font-size: 12px;\">Languages</div>\r\n    <br>\r\n    <span ac-value=\"tooltipSelected.name\"></span>\r\n    <b ac-value=\"tooltipSelected.value\"></b>% of total\r\n</div>\r\n<div ac-if=\"!this.series.length\">Bar chart. There is no data to show</div>\r\n<style>\r\nace-bar-chart {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.acecharts-tooltip.open {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n\r\n\r\n.acecharts-tooltip {\r\n    position: absolute;\r\n    background: #fbf5f5c9;\r\n    /*width: 200px;*/\r\n    top: 0;\r\n    /*height: 100px;*/\r\n    transition: 0.2s;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    padding: 10px;\r\n    border: 1px solid #ddddde;\r\n    border-radius: 2px;\r\n}\r\n\r\n.acecharts-tooltip:after, .acecharts-tooltip:before {\r\n    top: 100%;\r\n    left: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n}\r\n\r\n.acecharts-tooltip:after {\r\n    border-color: rgba(247, 247, 247, 0);\r\n    border-top-color: #f7f7f7;\r\n    border-width: 10px;\r\n    margin-left: -10px;\r\n}\r\n.acecharts-tooltip:before {\r\n    border-color: rgba(221, 221, 222, 0);\r\n    border-top-color: #ddddde;\r\n    border-width: 11px;\r\n    margin-left: -11px;\r\n}\r\n\r\n.acechart-group rect {\r\n    /*fill: #5699dc;*/\r\n    transition: 0.5s;\r\n}\r\n\r\n.acechart-group rect:hover {\r\n    /*fill: #3e6a96;*/\r\n    opacity: 0.7;\r\n}\r\n\r\n.acechart-xaxis-labels text {\r\n    cursor: default;\r\n    font-size: 11px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n    transition: 0.5s;\r\n}\r\n\r\n.acecharts-axis-title {\r\n    cursor: default;\r\n    font-size: 12px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n}\r\n\r\n.acechart-title {\r\n    cursor: default;\r\n    font-size: 16px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n    transition: 0.5s;\r\n}\r\n\r\n.acechart-yaxis-labels text {\r\n    cursor: default;\r\n    font-size: 11px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n}\r\n\r\n.acechart-yaxis-grid line {\r\n    stroke: #ccc;\r\n}\r\n\r\n.acechart-group {}\r\n</style>";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Chart = function () {
	    function Chart() {
	        _classCallCheck(this, Chart);
	    }

	    _createClass(Chart, [{
	        key: "getModulo",
	        value: function getModulo(maxVal) {
	            var modulo = void 0;

	            switch (true) {
	                case maxVal % 6 === 0:
	                    console.log(6);
	                    modulo = 6;
	                    break;
	                case maxVal % 5 === 0:
	                    console.log(5);
	                    modulo = 5;
	                    break;
	                case maxVal % 4 === 0:
	                    console.log(4);
	                    modulo = 4;
	                    break;
	                case maxVal % 3 === 0:
	                    console.log(3);
	                    modulo = 3;
	                    break;
	                case maxVal % 2 === 0:
	                    console.log(2);
	                    modulo = 2;
	                    break;
	                default:
	                    modulo = 2;
	                    break;
	            }

	            return modulo;
	        }
	    }, {
	        key: "getTrueLabelName",
	        value: function getTrueLabelName(value) {
	            var label = void 0;

	            switch (true) {
	                case value >= 1000000000:
	                    label = (value / 1000000000).toFixed(1) + 'G';
	                    break;
	                case value >= 1000000:
	                    label = (value / 1000000).toFixed(1) + 'M';
	                    break;
	                case value >= 1000:
	                    label = (value / 1000).toFixed(1) + 'K';
	                    break;
	                default:
	                    label = value.toFixed(1);
	                    break;
	            }

	            return label;
	        }
	    }, {
	        key: "getMaxValue",
	        value: function getMaxValue(array) {
	            return Math.max.apply(null, array);
	        }
	    }, {
	        key: "getSvgHeight",
	        value: function getSvgHeight() {
	            return this.props.get('height') - Chart.yOffset;
	        }
	    }, {
	        key: "getSvgWidth",
	        value: function getSvgWidth() {
	            return this.props.get('width') - Chart.xOffset;
	        }
	    }], [{
	        key: "colorsTheme",
	        get: function get() {
	            return ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1", "#7cb5ec", "#434348"];
	        }
	    }, {
	        key: "markerSize",
	        get: function get() {
	            return 8;
	        }
	    }, {
	        key: "xOffset",
	        get: function get() {
	            return 140;
	        }
	    }, {
	        key: "yOffset",
	        get: function get() {
	            return 100;
	        }
	    }, {
	        key: "barWidth",
	        get: function get() {
	            return 30;
	        }
	    }]);

	    return Chart;
	}();

	exports.Chart = Chart;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LineChartComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _decorators = __webpack_require__(8);

	var Decorators = _interopRequireWildcard(_decorators);

	var _lineChart = __webpack_require__(63);

	var _lineChart2 = _interopRequireDefault(_lineChart);

	var _chart = __webpack_require__(61);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LineChartComponent = exports.LineChartComponent = (_dec = Decorators.ComponentDecorator({
	    selector: 'ace-line-chart',
	    template: _lineChart2.default,
	    props: {
	        tooltipCoords: {
	            x: 0,
	            y: 0
	        },
	        xGrid: [],

	        yLabels: [],
	        xLabels: [],
	        tooltipIsShown: false,
	        title: 'test chart',
	        colors: [],
	        background: '#eee',
	        yAxis: {
	            // min: 0,
	            label: ''
	        },
	        stepCount: 5,
	        series: [],
	        xAxis: {
	            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	        },
	        height: 300,
	        width: 600
	    },
	    super: _chart.Chart
	}), _dec(_class = function () {
	    function LineChartComponent() {
	        _classCallCheck(this, LineChartComponent);
	    }

	    _createClass(LineChartComponent, [{
	        key: 'INPUT',
	        value: function INPUT(params) {
	            var newParams = {};
	            for (var key in this.props.getData()) {
	                if (params.data[key]) {
	                    newParams[key] = params.data[key];
	                }
	            }

	            this.props.set(newParams);
	            this.draw();
	        }
	    }, {
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'makePath',
	        value: function makePath(series) {
	            var _this = this;

	            var pathD = "M " + series[0].x + " " + (this.getSvgY(series[0].y) + _chart.Chart.yOffset / 2) + " ";
	            pathD += series.map(function (point, i) {
	                return "L " + point.x + " " + (_this.getSvgY(point.y) + _chart.Chart.yOffset / 2) + " ";
	            });

	            return pathD;
	        }
	    }, {
	        key: 'getSvgY',
	        value: function getSvgY(y, maxVal) {
	            var svgHeight = this.props.get('height') - _chart.Chart.yOffset;
	            // console.log(y);
	            return svgHeight - y * svgHeight;
	        }
	    }, {
	        key: 'getMaxX',
	        value: function getMaxX(series) {
	            var data = series;
	            return data[data.length - 1].x;
	        }
	    }, {
	        key: 'getMaxY',
	        value: function getMaxY(series) {
	            return series.reduce(function (max, p) {
	                return p.y > max ? p.y : max;
	            }, series[0].y);
	        }
	    }, {
	        key: 'mouseenter',
	        value: function mouseenter(e, item) {
	            clearTimeout(this._tooltipInterval);
	            this.props.set({
	                tooltipIsShown: true,
	                tooltipCoords: { x: item.x - 40 + 'px', y: item.y - 80 + 'px' },
	                tooltipSelected: {
	                    value: item.value.toFixed(2)
	                }
	            });
	        }
	    }, {
	        key: 'mouseleave',
	        value: function mouseleave(e) {
	            var _this2 = this;

	            if (this._tooltipInterval) {
	                clearTimeout(this._tooltipInterval);
	            }
	            this._tooltipInterval = setTimeout(function () {
	                _this2.props.set({ 'tooltipIsShown': false });
	            }, 200);
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var svgHeight = this.getSvgHeight();
	            var svgWidth = this.getSvgWidth();

	            var xLabels = this.getXLabels(svgHeight, svgWidth);
	            var yLabels = this.getYLabels(svgHeight);
	            var xGrid = this.getXGrid(svgHeight, svgWidth);
	            var series = this.getChartData(svgHeight, svgWidth);
	            var markers = this.getMarkers(svgHeight, svgWidth);

	            this.props.set({
	                series: series,
	                xLabels: xLabels,
	                yLabels: yLabels,
	                xGrid: xGrid,
	                yLabelX: 30,
	                markers: markers,
	                yLabelY: this.props.get('height') / 2,
	                yLabelTransform: 'translate(0,0) rotate(270 26.140625 ' + this.props.get('height') / 2 + ')',
	                labelX: this.props.get('width') / 2
	            });
	        }
	    }, {
	        key: 'getXGrid',
	        value: function getXGrid(svgHeight, svgWidth) {
	            var xGrid = [];
	            var maxVal = this.getMaxValue(this.props.get('series').map(function (r) {
	                return r.value;
	            }));
	            var count = this.props.get('stepCount') || this.getModulo(maxVal);
	            var stepHeight = svgHeight / count;

	            for (var i = 0; i <= count; i++) {
	                xGrid.push({
	                    x1: _chart.Chart.xOffset / 2,
	                    x2: this.props.get('width') - _chart.Chart.xOffset / 2,
	                    y1: _chart.Chart.yOffset / 2 + i * stepHeight,
	                    y2: _chart.Chart.yOffset / 2 + i * stepHeight
	                });
	            }
	            return xGrid;
	        }
	    }, {
	        key: 'getYLabels',
	        value: function getYLabels(svgHeight) {
	            var result = [];
	            var count = this.props.get('stepCount') || this.getModulo(maxVal);
	            var stepHeight = svgHeight / count;

	            var maxVal = this.getMaxSeriesVal();
	            var min = this.getMinXSeriesVal();

	            for (var i = 0; i <= count; i++) {
	                result.push({
	                    x: _chart.Chart.xOffset / 2 - 10,
	                    y: _chart.Chart.yOffset / 2 + i * stepHeight + 4,
	                    name: this.getTrueLabelName(Math.abs(maxVal / count * (i - count))) //Math.abs((maxVal / count) * (i - count)).toFixed(1)
	                });
	            }

	            return result;
	        }
	    }, {
	        key: 'getMaxSeriesVal',
	        value: function getMaxSeriesVal() {
	            var array = this.props.get('series').map(function (r) {
	                return r.value;
	            }).reduce(function (a, b) {
	                return a.concat(b);
	            }, []);
	            return Math.max.apply(Math, _toConsumableArray(array));
	        }
	    }, {
	        key: 'getMinXSeriesVal',
	        value: function getMinXSeriesVal() {
	            var array = this.props.get('series').map(function (r) {
	                return r.value;
	            }).reduce(function (a, b) {
	                return a.concat(b);
	            }, []);
	            return Math.min.apply(Math, _toConsumableArray(array));
	        }
	    }, {
	        key: 'getChartData',
	        value: function getChartData(svgHeight, svgWidth) {
	            var _this3 = this;

	            var max = this.getMaxSeriesVal();
	            var min = this.getMinXSeriesVal();
	            var array = this.props.get('xAxis').categories;
	            var length = array.length - 1;

	            return this.props.get('series').map(function (seria, index) {
	                var series = seria.value.map(function (r, i) {
	                    return {
	                        x: i * (svgWidth / length - _chart.Chart.barWidth / length) + _chart.Chart.xOffset / 2,
	                        y: r / max
	                    };
	                });
	                return {
	                    d: _this3.makePath(series),
	                    stroke: _chart.Chart.colorsTheme[index]
	                };
	            });
	        }
	    }, {
	        key: 'getMarkers',
	        value: function getMarkers(svgHeight, svgWidth) {
	            var max = this.getMaxSeriesVal();
	            var min = this.getMinXSeriesVal();
	            var array = this.props.get('xAxis').categories;
	            var length = array.length - 1;

	            return this.props.get('series').map(function (seria, i) {
	                return { items: seria.value.map(function (r, i) {
	                        return {
	                            x: i * (svgWidth / length - _chart.Chart.barWidth / length) + _chart.Chart.xOffset / 2 - _chart.Chart.markerSize / 2,
	                            y: svgHeight - r / max * svgHeight + _chart.Chart.yOffset / 2 - _chart.Chart.markerSize / 2,
	                            height: _chart.Chart.markerSize,
	                            width: _chart.Chart.markerSize,
	                            fill: '#aaa',
	                            value: r
	                        };
	                    }) };
	            });
	        }
	    }, {
	        key: 'getXLabels',
	        value: function getXLabels(svgHeight, svgWidth) {
	            var array = this.props.get('xAxis').categories;
	            var length = array.length - 1;
	            return array.map(function (r, i) {
	                return {
	                    x: i * (svgWidth / length - _chart.Chart.barWidth / length) + _chart.Chart.xOffset / 2,
	                    y: svgHeight + _chart.Chart.yOffset / 2 + 20,
	                    name: r
	                };
	            });
	        }
	    }]);

	    return LineChartComponent;
	}()) || _class);

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<svg ac-ref=\"svg\" ac-attr=\"height: height, width: width\" ac-if=\"this.series.length\">\r\n    <rect class=\"acechart-background\" x=\"0\" y=\"0\" ac-attr=\"height: height, width: width, fill: background\" rx=\"0\" ry=\"0\"></rect>\r\n    <text ac-attr=\"x: labelX\" text-anchor=\"middle\" class=\"acechart-title\" y=\"24\">\r\n        <tspan ac-value=\"title\"></tspan>\r\n    </text>\r\n    <g class=\"acechart-grid acechart-yaxis-grid \">\r\n        <line ac-for=\"let item of xGrid\" ac-attr=\"x1: x1, x2: x2, y1: y1, y2: y2\" stroke=\"black\" stroke-width=\"1\" shape-rendering=\"crispEdges\" />\r\n    </g>\r\n    <text ac-attr=\"x: yLabelX, y: yLabelY, transform: yLabelTransform\" text-anchor=\"middle\" class=\"acecharts-axis-title\">\r\n        <tspan ac-value=\"yAxis.label\"></tspan>\r\n    </text>\r\n    <g class=\"acechart-axis-labels acechart-yaxis-labels \">\r\n        <text ac-for=\"let item of yLabels\" ac-attr=\"x: x, y: y\" text-anchor=\"end\" transform=\"translate(0,0)\">\r\n            <tspan ac-value=\"name\"></tspan>\r\n        </text>\r\n    </g>\r\n    <g class=\"acechart-series\">\r\n        <path ac-for=\"let item of series\" fill=\"none\" ac-attr=\"d: d, stroke: stroke\" class=\"acechart-graph\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path>\r\n    </g>\r\n\r\n    <g class=\"acechart-markers\">\r\n        <g ac-for=\"let item of markers\"> \r\n            <rect ac-for=\"let item of items\" @mouseenter=\"mouseenter(item)\" @mouseleave=\"mouseleave\" ac-attr=\"x: x, y: y, fill: fill, width: width, height: height\" ></rect>\r\n        </g>\r\n    </g>\r\n\r\n</svg>\r\n<div class=\"acecharts-tooltip\" ac-class=\"open: this.tooltipIsShown\" ac-style=\"top: tooltipCoords.y, left: tooltipCoords.x\">\r\n    <div style=\"font-size: 12px;\">Languages</div>\r\n    <br>\r\n    <span ac-value=\"tooltipSelected.name\"></span>\r\n    <b ac-value=\"tooltipSelected.value\"></b>\r\n</div>\r\n<div ac-if=\"!this.series.length\">Bar chart. There is no data to show</div>\r\n<style>\r\nace-line-chart {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.acecharts-tooltip.open {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.acechart-series path , .acechart-markers rect{\r\n    transition: 0.5s;\r\n}\r\n\r\n.acecharts-tooltip {\r\n    position: absolute;\r\n    background: #fbf5f5c9;\r\n    /*width: 200px;*/\r\n    top: 0;\r\n    /*height: 100px;*/\r\n    transition: 0.2s;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    padding: 10px;\r\n    border: 1px solid #ddddde;\r\n    border-radius: 2px;\r\n}\r\n\r\n.acecharts-tooltip:after,\r\n.acecharts-tooltip:before {\r\n    top: 100%;\r\n    left: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n}\r\n\r\n.acecharts-tooltip:after {\r\n    border-color: rgba(247, 247, 247, 0);\r\n    border-top-color: #f7f7f7;\r\n    border-width: 10px;\r\n    margin-left: -10px;\r\n}\r\n\r\n.acecharts-tooltip:before {\r\n    border-color: rgba(221, 221, 222, 0);\r\n    border-top-color: #ddddde;\r\n    border-width: 11px;\r\n    margin-left: -11px;\r\n}\r\n\r\n.acechart-group rect {\r\n    /*fill: #5699dc;*/\r\n    transition: 0.5s;\r\n}\r\n\r\n.acechart-group rect:hover {\r\n    /*fill: #3e6a96;*/\r\n    opacity: 0.7;\r\n}\r\n\r\n.acechart-xaxis-labels text {\r\n    cursor: default;\r\n    font-size: 11px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n    transition: 0.5s;\r\n}\r\n\r\n.acecharts-axis-title {\r\n    cursor: default;\r\n    font-size: 12px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n}\r\n\r\n.acechart-title {\r\n    cursor: default;\r\n    font-size: 16px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n    transition: 0.5s;\r\n}\r\n\r\n.acechart-yaxis-labels text {\r\n    cursor: default;\r\n    font-size: 11px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n}\r\n\r\n.acechart-yaxis-grid line {\r\n    stroke: #ccc;\r\n}\r\n\r\n.acechart-group {}\r\n</style>";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Http = exports.Collection = exports.Model = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _observable = __webpack_require__(7);

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

	        this.catalog = new _observable.ObservableModel();
	        this.server = '';
	    }

	    _createClass(HttpModule, [{
	        key: 'onProgress',
	        value: function onProgress(f) {
	            if (f && f.constructor) {
	                this.onprogressCallback = f;
	            } else {
	                console.warn('Passed data must be a function');
	            }
	        }
	    }, {
	        key: 'onError',
	        value: function onError(f) {
	            if (f && f.constructor) {
	                this.onerrorCallback = f;
	            } else {
	                console.warn('Passed data must be a function');
	            }
	        }
	    }, {
	        key: 'makeRequest',
	        value: function makeRequest(opts) {
	            var _this3 = this;

	            return new Promise(function (resolve, reject) {
	                var xhr = new XMLHttpRequest();

	                xhr.open(opts.method, _this3.server + opts.url);
	                xhr.onprogress = function (event) {
	                    if (_this3.onprogressCallback) {
	                        _this3.onprogressCallback.call(_this3, event);
	                    }
	                };
	                xhr.onload = function () {
	                    if (this.status >= 200 && this.status < 300) {
	                        resolve(JSON.parse(xhr.response));
	                    } else {
	                        reject({
	                            status: this.status,
	                            statusText: xhr.statusText,
	                            response: JSON.parse(xhr.response)
	                        });
	                    }
	                };
	                xhr.onerror = function () {
	                    reject({
	                        status: this.status,
	                        statusText: xhr.statusText
	                    });
	                };

	                if (opts.headers) {
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = opts.headers.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var key = _step.value;

	                            xhr.setRequestHeader(key, opts.headers.get(key));
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
	                }

	                var params = opts.params;

	                if (opts.method.toLowerCase() === 'get') {
	                    if (params && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
	                        params = Object.keys(params).map(function (key) {
	                            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
	                        }).join('&');
	                    }
	                }

	                if (opts.method.toLowerCase() === 'post' || opts.method.toLowerCase() === 'put') {
	                    params = JSON.stringify(params);
	                }

	                xhr.send(params);
	            });
	        }
	    }, {
	        key: 'getParams',
	        value: function getParams(params) {
	            if (params && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
	                params = Object.keys(params).map(function (key) {
	                    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
	                }).join('&');
	            }
	            return params;
	        }
	    }, {
	        key: 'get',
	        value: function get(url, params, headers) {
	            return this.makeRequest({ method: 'get', url: url, params: params, headers: headers });
	        }
	    }, {
	        key: 'post',
	        value: function post(url, params, headers) {
	            return this.makeRequest({ method: 'post', url: url, params: params, headers: headers });
	        }
	    }, {
	        key: 'put',
	        value: function put(url, params, headers) {
	            return this.makeRequest({ method: 'put', url: url, params: params, headers: headers });
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(url, params, headers) {
	            return this.makeRequest({ method: 'delete', url: url, params: {}, headers: headers });
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
	            var _this4 = this;

	            return this.hMRequest('get', url).then(function (res) {
	                _this4.catalog.set(res);
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

	                    var _this5 = _possibleConstructorReturn(this, (FactoryModel.__proto__ || Object.getPrototypeOf(FactoryModel)).call(this, options));

	                    if (response.links) {
	                        response.links.map(function (link) {
	                            _this5.links['' + link.rel] = link.href; // for access to raw link
	                            methods.forEach(function (method) {
	                                if (link.href) {
	                                    _this5[method + '_' + link.rel] = function (params, id) {
	                                        return context.hMRequest(method, link.href, params, id);
	                                    };
	                                }
	                            });
	                        });
	                    }

	                    return _this5;
	                }

	                return FactoryModel;
	            }(Model);

	            return new FactoryModel(response);
	        }

	        // creates new collection

	    }, {
	        key: 'getCollection',
	        value: function getCollection(response) {
	            var _this6 = this;

	            var models = response.map(function (model) {
	                return _this6.getModel(model);
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

	            if (id) {
	                url += '/' + id;
	            }

	            switch (method) {
	                case 'get':
	                    sub = this.middleware(this[method](url, args, this.getGetHeaders()));
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
	            var _this8 = this;

	            return response
	            // .then(res => JSON.parse(res))
	            .then(function (res) {
	                return _this8.createEntity(res);
	            }).catch(function (err) {
	                if (_this8.onerrorCallback) {
	                    _this8.onerrorCallback.call(_this8, err);
	                }
	                if (err.status === 0) {
	                    throw new Error('Server error');
	                } else {
	                    return Promise.reject(err);
	                }
	            });
	        }
	    }, {
	        key: 'getHeaders',
	        value: function getHeaders() {
	            var headers = new Headers();
	            var token = localStorage.getItem('token');
	            headers.append('Content-Type', 'application/json');
	            if (token) {
	                headers.append('Authorization', 'Bearer ' + token);
	            }
	            return headers;
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
/* 65 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FormControl = exports.FormControl = function () {
	    function FormControl(params, parent) {
	        _classCallCheck(this, FormControl);

	        this.valid = true;
	        this.dirty = false;
	        this.value = params[0] || '';
	        this.initValue = params[0] || '';
	        this.validators = params[1];
	        this.parent = parent;
	        this.errors = {};
	    }

	    _createClass(FormControl, [{
	        key: 'setElem',
	        value: function setElem(elem) {
	            this.elem = elem;
	            this.setValue(this.value, true);
	        }
	    }, {
	        key: 'setValue',
	        value: function setValue(value, silent) {
	            this.value = value;
	            if (this.elem) {
	                this.elem.value = value;
	            }

	            this.parent.getValues();
	            if (!silent) {
	                this.markAsDirty();
	                this.parent.onChangeCallback();
	            }
	            // this.validate();
	            this.parent._validate();
	        }
	    }, {
	        key: 'validate',
	        value: function validate() {
	            var _this = this;

	            if (this.validators.length) {

	                this.errors = {};
	                this.validators.forEach(function (v) {
	                    var validator = v(_this);
	                    if (!validator[1] && Object.keys(_this.errors).length === 0 && _this.dirty) {
	                        _this.errors[validator[0]] = true;
	                    }
	                });

	                this.valid = this.validators.filter(function (validator) {
	                    return validator(_this)[1];
	                }).length === this.validators.length;
	            } else {
	                this.valid = true;
	            }

	            this.toggleClass();
	        }
	    }, {
	        key: 'toggleClass',
	        value: function toggleClass() {
	            if (this.elem) {
	                if (this.dirty) {
	                    this.valid ? this.elem.classList.remove('ac-invalid') : this.elem.classList.add('ac-invalid');
	                } else {
	                    this.elem.classList.remove('ac-invalid');
	                }
	            }
	        }
	    }, {
	        key: 'isValid',
	        value: function isValid() {
	            this.validate();
	            return this.valid;
	        }
	    }, {
	        key: 'markAsDirty',
	        value: function markAsDirty() {
	            this.dirty = true;
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.valid = true;
	            this.dirty = false;
	            this.setValue(this.initValue, true);
	        }
	    }]);

	    return FormControl;
	}();

	var FormGroup = exports.FormGroup = function () {
	    function FormGroup(controls) {
	        _classCallCheck(this, FormGroup);

	        this.valid = false;
	        this.controls = {};
	        this.value = {};
	        this.component = null;
	        this.onChangeCallback = function () {};

	        for (var control in controls) {
	            this.controls[control] = new FormControl(controls[control], this);
	        }
	        this._validate();
	        this.getValues();
	    }

	    _createClass(FormGroup, [{
	        key: 'onChange',
	        value: function onChange(callback) {
	            this.onChangeCallback = callback;
	        }
	    }, {
	        key: 'getValues',
	        value: function getValues() {
	            var result = {};
	            for (var control in this.controls) {
	                result[control] = this.controls[control].value;
	            }
	            this.value = result;
	            return result;
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            for (var control in this.controls) {
	                this.controls[control].reset();
	            }
	            if (this.component) {
	                this.component.props._callAll();
	            }
	        }
	    }, {
	        key: '_validate',
	        value: function _validate() {
	            var valid = [];
	            for (var control in this.controls) {
	                this.controls[control].validate(); // check current state
	                valid.push(this.controls[control].valid);
	            }

	            this.valid = valid.filter(function (r) {
	                return r;
	            }).length === Object.keys(this.controls).length;

	            if (this.component) {
	                this.component.props._callAll();
	            }
	        }
	    }, {
	        key: 'setValue',
	        value: function setValue(name, value) {
	            this.controls[name].setValue(value);
	            this.getValues();
	        }
	    }, {
	        key: 'isValid',
	        value: function isValid() {
	            this._validate();
	            return this.valid;
	        }
	    }, {
	        key: 'setComponent',
	        value: function setComponent(component) {
	            this.component = component;
	        }
	    }]);

	    return FormGroup;
	}();

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Validators = {
	    required: function required(control) {
	        return ['required', control.value ? true : false];
	    },
	    email: function email(control) {
	        var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        var regexp = new RegExp(exp);
	        return ['email', regexp.test(control.value)];
	    },
	    regExp: function regExp(exp) {
	        return function (control) {
	            var regexp = new RegExp(exp);
	            return ['regExp', regexp.test(control.value)];
	        };
	    }
	};

	exports.Validators = Validators;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	'use strict';

	// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
	(function (arr) {
	  arr.forEach(function (item) {
	    if (item.hasOwnProperty('remove')) {
	      return;
	    }
	    Object.defineProperty(item, 'remove', {
	      configurable: true,
	      enumerable: true,
	      writable: true,
	      value: function remove() {
	        this.parentNode.removeChild(this);
	      }
	    });
	  });
	})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

	// !window.addEventListener && (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
	//   WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
	//     var target = this;

	//     registry.unshift([target, type, listener, function (event) {
	//       event.currentTarget = target;
	//       event.preventDefault = function () { event.returnValue = false };
	//       event.stopPropagation = function () { event.cancelBubble = true };
	//       event.target = event.srcElement || target;

	//       listener.call(target, event);
	//     }]);

	//     this.attachEvent("on" + type, registry[0][3]);
	//   };

	//   WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
	//     for (var index = 0, register; register = registry[index]; ++index) {
	//       if (register[0] == this && register[1] == type && register[2] == listener) {
	//         return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
	//       }
	//     }
	//   };

	//   WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
	//     return this.fireEvent("on" + eventObject.type, eventObject);
	//   };
	// })(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);

/***/ })
/******/ ])
});
;