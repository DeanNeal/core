/*!
 * ace-js 0.8.15
 * May be freely distributed under the MIT license 
 * Author: Bogdan Zinkevich
 * Last update: 2018-2-20 14:55:32
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("demo", [], factory);
	else if(typeof exports === 'object')
		exports["demo"] = factory();
	else
		root["demo"] = factory();
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

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _main = __webpack_require__(2);

	var _main2 = _interopRequireDefault(_main);

	var _core = __webpack_require__(6);

	var _controls = __webpack_require__(49);

	var _home = __webpack_require__(67);

	var _root = __webpack_require__(69);

	var _header = __webpack_require__(71);

	var _controls2 = __webpack_require__(73);

	var _notFound = __webpack_require__(75);

	var _documentation = __webpack_require__(77);

	var _documentation2 = _interopRequireDefault(_documentation);

	var _plugins = __webpack_require__(118);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _upperCaseDirective = __webpack_require__(125);

	var _upperCaseDirective2 = _interopRequireDefault(_upperCaseDirective);

	var _router = __webpack_require__(126);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_core.API.register({
	    root: _root.RootComponent,
	    styles: _main2.default,
	    components: [_header.HeaderComponent, _home.HomeComponent, _controls2.ControlsComponent, _notFound.NotFoundComponent, _controls.DatepickerComponent, _controls.BarChartComponent, _controls.LineChartComponent],
	    directives: [_upperCaseDirective2.default],
	    import: [_documentation2.default, _plugins2.default, _controls.TreeDebugComponent],
	    routes: _router.Routes

	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.i(__webpack_require__(4), "");

	// module
	exports.push([module.id, ".content--end {\n  justify-content: flex-end;\n}\n\n.content--space-between {\n  justify-content: space-between;\n}\n\n.content--center {\n  align-items: center;\n}\n\n.flex {\n  display: flex;\n}\n\n.input-file {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n.app-container {\n  width: 1024px;\n  margin: 0 auto;\n}\n\n.app-btn {\n  border: none;\n  background: none;\n  padding: 10px 30px;\n  cursor: pointer;\n  color: white;\n  position: relative;\n  background-color: #17b6ed;\n  border-radius: 2px;\n}\n\n.app-btn.small {\n  width: 150px;\n}\n\n.app-btn input[type='file'] {\n  opacity: 0;\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.app-btn:hover {\n  background-color: #46c5f1;\n}\n\nheader {\n  height: 60px;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  background-color: #ffffff;\n}\n\nheader .logo {\n  float: left;\n}\n\nheader .logo img {\n  width: auto;\n  height: 39px;\n}\n\nheader .logo .gantt--main-menu-item {\n  /*padding: 0 $step * 8 0 0;*/\n  height: 39px;\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: bold;\n}\n\nheader .gantt--main-menu {\n  display: flex;\n  height: 100%;\n  float: left;\n  align-items: center;\n}\n\nheader .gantt--main-menu .gantt--main-menu-item {\n  color: #191919;\n  position: relative;\n}\n\nheader .gantt--main-menu .gantt--main-menu-item.active:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  border-bottom: 3px solid #f9d710;\n}\n\nheader .gantt--main-menu-item {\n  padding: 10px;\n  height: 100%;\n  display: block;\n  text-decoration: none;\n  color: #676767;\n  font-size: 16px;\n  font-weight: 300;\n}\n\nheader .gantt--main-menu-item:hover {\n  opacity: 0.8;\n}\n\nheader .right-menu {\n  float: right;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n\nheader .right-menu .search-input {\n  margin-right: 10px;\n}\n\nheader .right-menu .search-input input[type=\"text\"] {\n  height: 39px;\n  padding: 0 32px 0 12px;\n  font-size: 16px;\n  border: none;\n  border-top: 3px solid transparent;\n  border-bottom: 3px solid #f9d710;\n  box-sizing: border-box;\n}\n\nheader .right-menu .search-input input[type=\"text\"]:focus {\n  border: 3px solid #0a0a0a;\n  padding-right: 29px;\n}\n\nheader .right-menu .search-input i {\n  color: #0a0a0a;\n  position: absolute;\n  top: 0;\n  right: 8px;\n  font-size: 18px;\n  bottom: 0;\n  margin: auto;\n  width: 18px;\n  height: 18px;\n}\n\nheader .right-menu .profile-menu {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 14px;\n  color: #191919;\n  font-weight: 500;\n  position: relative;\n  cursor: pointer;\n}\n\nheader .right-menu .profile-menu .avatar {\n  background-size: cover !important;\n  background-position: center center !important;\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n}\n\nheader .right-menu .profile-menu .username {\n  margin-right: 10px;\n}\n\nfooter {\n  background-size: 46px;\n  background-position: 0;\n  height: 40px;\n}\n\nfooter .info-panel {\n  font-size: 0;\n  display: inline-flex;\n  justify-content: flex-start;\n  padding: 4px 8px;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3);\n}\n\nfooter .info-panel__item {\n  font-size: 12px;\n  display: block;\n  min-width: 200px;\n  background-color: #ffffff;\n  border: 1px solid #0a0a0a;\n  text-align: right;\n  line-height: 16px;\n  padding: 8px;\n  text-transform: uppercase;\n}\n\nfooter .info-panel__item + .info-panel__item {\n  margin-left: 12px;\n}\n\napp-home {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  text-align: center;\n}\n\napp-home .app-home__bottom {\n  margin-top: 90px;\n}\n\napp-not-found {\n  width: 100%;\n}\n\napp-not-found h1 {\n  display: flex;\n  /* flex-direction: column; */\n  /* flex: 1; */\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100% - 60px);\n  margin: 0;\n}\n\napp-documentation {\n  width: 100%;\n}\n\napp-documentation .main-content {\n  width: 100%;\n  display: flex;\n}\n\napp-documentation .main-content .main-list {\n  width: 15%;\n  border-right: 1px solid #ccc;\n  padding: 20px 40px 20px 40px;\n  overflow: auto;\n}\n\napp-documentation .main-content .main-list .list-head {\n  margin-bottom: 5px;\n}\n\napp-documentation .main-content .main-list > li {\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\napp-documentation .main-content .main-list ol .active {\n  color: #17b6ed;\n}\n\napp-documentation .main-content .main-list ol li {\n  padding-left: 20px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 400;\n}\n\napp-documentation .main-content .main-list ol li a {\n  color: #000;\n  display: block;\n  padding: 5px;\n}\n\napp-documentation .main-content .main-list ol li a:hover {\n  background: #f5f5f5;\n}\n\napp-documentation .main-content .main-list ol li:hover {\n  text-decoration: underline;\n}\n\napp-documentation .main-content .documentation-section {\n  width: 85%;\n  padding-left: 20px;\n  overflow: auto;\n  padding: 20px 40px 20px 40px;\n}\n\napp-documentation main {\n  height: 100%;\n  display: flex;\n  flex: 1;\n  user-select: none;\n  position: relative;\n  border-bottom: 1px solid #ccc;\n}\n\napp-documentation .code-block {\n  display: block;\n  margin: 10px 0 10px;\n  font-size: 14px;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: rgba(247, 247, 247, 0.85);\n  border: 1px solid #f3eeee;\n  border-radius: 4px;\n}\n\napp-documentation .code-block .code-header {\n  background: #ccc;\n  padding: 10px;\n}\n\napp-documentation .code-block .attr {\n  color: #17b6ed;\n}\n\napp-documentation .code-block .text {\n  font-weight: bold;\n}\n\napp-documentation .folder-structure {\n  padding: 20px;\n  width: 50%;\n}\n\napp-documentation .folder-structure .children {\n  position: relative;\n  overflow: hidden;\n  padding-left: 24px;\n}\n\napp-documentation .folder-structure .children:first-child {\n  padding: 0;\n}\n\napp-documentation .folder-structure--item {\n  padding: 5px 0px;\n  position: relative;\n}\n\napp-documentation .folder-structure--item .folder-structure--item {\n  padding-left: 30px;\n}\n\napp-documentation .folder-structure--item .folder-structure--item:before {\n  content: \"\";\n  left: 10px;\n  bottom: 15px;\n  width: 16px;\n  height: 9999px;\n  position: absolute;\n  border-width: 0 0 1px 1px;\n  border-style: solid;\n  border-color: #ccc;\n  border-radius: 0 0 0 3px;\n}\n\napp-documentation .comment {\n  display: inline-block;\n  color: #aaa;\n}\n\napp-documentation pre {\n  padding: 10px;\n}\n\napp-documentation .kwd {\n  color: #17b6ed;\n}\n\napp-documentation .str {\n  color: #d4ce10;\n}\n\napp-documentation .typ {\n  color: red;\n}\n\napp-documentation .met {\n  color: #00d400;\n}\n\napp-documentation .white {\n  color: #fff;\n}\n\napp-documentation .title {\n  font-family: 'Roboto', sans-serif;\n  margin-right: 20px;\n}\n\napp-documentation .section-title {\n  font-size: 16px;\n  margin-top: 20px;\n  border-bottom: 1px solid #ccc;\n  padding: 6px;\n}\n\napp-documentation .in-development {\n  color: red;\n}\n\napp-documentation .text {\n  width: 500px;\n  font-weight: 300;\n  margin: 10px 0;\n}\n\napp-documentation .block {\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\napp-documentation .label {\n  padding: 3px 5px;\n  display: inline-block;\n  color: #17b6ed;\n  font-weight: bold;\n  font-size: 16px;\n  border-radius: 3px;\n  border: 1px solid;\n}\n\nchild-route-switcher {\n  display: block;\n  width: 60%;\n}\n\napp-documentation-directives .clicked {\n  color: green;\n}\n\napp-documentation-directives .unclicked {\n  color: red;\n}\n\napp-documentation-architecture {\n  width: 100%;\n}\n\napp-documentation-forms .ac-error[type] {\n  border: 1px solid rgba(255, 0, 0, 0.47);\n}\n\napp-documentation-forms .input {\n  margin: 10px 0px;\n}\n\napp-documentation-forms .input input {\n  border: 1px solid #ccc;\n  padding: 4px;\n}\n\napp-documentation-forms button {\n  cursor: pointer;\n  padding: 4px;\n  border: none;\n  background: #17b6ed;\n  color: #fff;\n  border-radius: 4px;\n}\n\napp-plugins,\napp-controls {\n  width: 100%;\n}\n\napp-plugins .main-content,\napp-controls .main-content {\n  width: 100%;\n  display: flex;\n}\n\napp-plugins .main-content .main-list,\napp-controls .main-content .main-list {\n  width: 15%;\n  border-right: 1px solid #ccc;\n  padding: 20px 40px 20px 40px;\n  overflow: auto;\n}\n\napp-plugins .main-content .main-list .list-head,\napp-controls .main-content .main-list .list-head {\n  margin-bottom: 5px;\n}\n\napp-plugins .main-content .main-list .active,\napp-controls .main-content .main-list .active {\n  color: #17b6ed;\n}\n\napp-plugins .main-content .main-list li,\napp-controls .main-content .main-list li {\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\napp-plugins .main-content .main-list li a,\napp-controls .main-content .main-list li a {\n  color: #000;\n  display: block;\n  padding: 5px;\n}\n\napp-plugins .main-content .main-list li a:hover,\napp-controls .main-content .main-list li a:hover {\n  color: #17b6ed;\n  background: #f5f5f5;\n}\n\napp-plugins .main-content .plugins-section,\napp-controls .main-content .plugins-section {\n  width: 85%;\n  padding-left: 20px;\n  overflow: auto;\n  padding: 20px 40px 20px 40px;\n}\n\napp-plugins main,\napp-controls main {\n  height: 100%;\n  display: flex;\n  flex: 1;\n  user-select: none;\n  position: relative;\n  border-bottom: 1px solid #ccc;\n}\n\napp-container {\n  width: 100%;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-bottom: 20px;\n}\n\nh1 {\n  font-size: 26px;\n}\n\nh2 {\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\np {\n  font-size: 14px;\n  margin-bottom: 15px;\n  line-height: 2;\n}\n\na {\n  color: #17b6ed;\n  cursor: pointer;\n}\n\nimg {\n  width: 100%;\n}\n\nb {\n  font-weight: 700;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.relative {\n  position: relative;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.attached-file {\n  display: flex;\n  height: 40px;\n  align-items: center;\n  margin: 5px 0px;\n  justify-content: space-between;\n}\n\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\n.dropdown-container {\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.dropdown {\n  position: absolute;\n  background: #fff;\n  border: 1px solid #ccc;\n  /* bottom: 0; */\n  top: 100%;\n  z-index: 1000;\n  width: 200px;\n  right: 0;\n  opacity: 0;\n  margin-top: 35px;\n  visibility: hidden;\n  transition-property: all;\n  transition-duration: 0.3s;\n  transition-timing-function: ease;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.dropdown ul li.active {\n  background: #f1f1f1;\n}\n\n.dropdown ul li a {\n  font-size: 12px;\n  padding: 10px;\n  display: block;\n}\n\n.dropdown ul li:hover {\n  background: #f1f1f1;\n}\n\n.dropdown.open {\n  opacity: 1;\n  visibility: visible;\n  margin-top: 0;\n}\n\napp-status-dropdown .dropdown-value {\n  cursor: pointer;\n  padding: 4px;\n  color: #fff;\n  border-radius: 4px;\n  background: #17b6ed;\n}\n\napp-status-dropdown .dropdown-value.done {\n  background: #5db95d;\n}\n\napp-status-dropdown .dropdown-value.in_progress {\n  background: #17b6ed;\n}\n\napp-status-dropdown .dropdown-value.feedback {\n  background: #c3c3c3;\n}\n\napp-color-dropdown .dropdown {\n  left: 0;\n  max-height: 200px;\n  padding: 5px;\n  overflow: auto;\n}\n\napp-color-dropdown .dropdown-item {\n  margin: 5px;\n  cursor: pointer;\n  border-radius: 100%;\n  transition: 0.2s all;\n}\n\napp-color-dropdown .dropdown-item.active {\n  transform: scale(1.2);\n}\n\napp-color-dropdown .dropdown-item:hover {\n  transform: scale(1.2);\n}\n\napp-color-dropdown .dropdown-item-color {\n  border-radius: 100%;\n  width: 30px;\n  height: 30px;\n}\n\napp-color-dropdown .dropdown ul {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n}\n\napp-color-dropdown .dropdown-value {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n}\n\napp-assignee-dropdown .profile-menu {\n  align-items: center;\n  display: flex;\n}\n\napp-assignee-dropdown .avatar {\n  width: 30px;\n  display: flex;\n  margin-right: 10px;\n  background-size: cover !important;\n  background-position: center;\n  height: 30px;\n  border-radius: 100%;\n}\n\napp-common-dropdown {\n  display: inline-block;\n}\n\napp-common-dropdown .dropdown-value {\n  cursor: pointer;\n  padding: 4px;\n  color: #fff;\n  border-radius: 4px;\n  background: #cccccc;\n}\n\n.content--end {\n  justify-content: flex-end;\n}\n\n.content--space-between {\n  justify-content: space-between;\n}\n\n.content--center {\n  align-items: center;\n}\n\n.flex {\n  display: flex;\n}\n\n.input-file {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n.app-container {\n  width: 1024px;\n  margin: 0 auto;\n}\n\n.app-btn {\n  border: none;\n  background: none;\n  padding: 10px 30px;\n  cursor: pointer;\n  color: white;\n  position: relative;\n  background-color: #17b6ed;\n  border-radius: 2px;\n}\n\n.app-btn.small {\n  width: 150px;\n}\n\n.app-btn input[type='file'] {\n  opacity: 0;\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.app-btn:hover {\n  background-color: #46c5f1;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-bottom: 20px;\n}\n\nh1 {\n  font-size: 26px;\n}\n\nh2 {\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\np {\n  font-size: 14px;\n  margin-bottom: 15px;\n  line-height: 2;\n}\n\na {\n  color: #17b6ed;\n  cursor: pointer;\n}\n\nimg {\n  width: 100%;\n}\n\nb {\n  font-weight: 700;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.relative {\n  position: relative;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.attached-file {\n  display: flex;\n  height: 40px;\n  align-items: center;\n  margin: 5px 0px;\n  justify-content: space-between;\n}\n\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\n.app-form__row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.app-form__row.col-2 .app-form__label {\n  width: 48%;\n}\n\n.app-form__label {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n}\n\n.app-form__label__text {\n  margin-bottom: 5px;\n  color: #aaa;\n  font-weight: normal;\n}\n\n.app-form__subtitle {\n  position: absolute;\n  bottom: 11px;\n  left: 11px;\n}\n\n.app-form__subtitle + .app-form__label__input {\n  padding-left: 21px;\n}\n\n.app-form__label__input {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n}\n\n.app-form__label__textarea {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n  resize: vertical;\n  max-height: 300px;\n}\n\n.app-form + .app-form {\n  margin-top: 30px;\n}\n\n.input.error {\n  border: 1px solid rgba(255, 0, 0, 0.47);\n}\n\n.input {\n  position: relative;\n}\n\n.input input[type=text],\n.input input[type=email],\n.input input[type=password] {\n  border: none;\n  width: 100%;\n}\n\n.input input[type=text].ac-invalid + .input-border,\n.input input[type=email].ac-invalid + .input-border,\n.input input[type=password].ac-invalid + .input-border {\n  border-color: red;\n}\n\n.input-border {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  border-radius: 4px;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border: 1px solid #bfbfbf;\n}\n\n.modal-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n}\n\n.modal-container .modal {\n  position: fixed;\n  width: 40%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: #fff;\n  margin: auto;\n  height: 80%;\n  box-shadow: 0px 0px 20px -2px #000;\n  padding: 30px;\n  min-width: 800px;\n  border-radius: 3px;\n  overflow: auto;\n}\n\n.modal-container .modal-bottom {\n  float: right;\n}\n\n.modal-container .modal-bottom .app-btn {\n  margin-left: 10px;\n}\n\n.modal-container .modal.crop {\n  user-select: none;\n  /*.tag_frame_inner{*/\n  /*width: 550px;*/\n  /*}*/\n}\n\n.modal-container .modal.crop .tag_faded {\n  background: #000;\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n  cursor: crosshair;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 1030;\n  position: absolute;\n}\n\n.modal-container .modal.crop .tag_frame {\n  position: absolute;\n  cursor: move;\n  z-index: 1040;\n  left: 0;\n  top: 0;\n  width: 200px;\n  height: 200px;\n  display: block;\n  overflow: hidden;\n  text-align: left;\n  direction: ltr;\n}\n\n.modal-container .modal.crop .tag_frame_resizer {\n  position: absolute;\n  background-color: #f2f2f2;\n  width: 10px;\n  height: 10px;\n  z-index: 9999;\n  opacity: 0.3;\n  transition-property: opacity;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n\n.modal-container .modal.crop .tag_frame_resizer:hover {\n  opacity: 0.9;\n}\n\n.modal-container .modal.crop .j-modal__content {\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\n.modal-container .modal.crop .j-modal__preview {\n  margin: auto;\n  display: block;\n  border-radius: 100%;\n  width: 25%;\n}\n\n.modal-container .modal.crop .j-modal__crop_container {\n  position: relative;\n  margin: 0px auto;\n  font-size: 0px;\n}\n\n.j-calendar {\n  display: inline-flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background: #fff;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  position: absolute;\n  z-index: 1;\n  font-weight: normal;\n}\n\n.j-calendar__wrap {\n  display: flex;\n}\n\n.j-calendar__item + .j-calendar__item .j-calendar__content {\n  border-left: 1px solid #d9d9d9;\n}\n\n.j-calendar__item + .j-calendar__item .j-calendar__header {\n  border-left: 1px solid #d9d9d9;\n}\n\n.j-calendar__header {\n  width: 285px;\n  height: 50px;\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  font-size: 15px;\n  color: #fff;\n  background: #17b6ed;\n}\n\n.j-calendar__header__center,\n.j-calendar__header__left,\n.j-calendar__header__right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.j-calendar__header__left,\n.j-calendar__header__right {\n  width: 50px;\n  cursor: pointer;\n}\n\n.j-calendar__header__left:hover,\n.j-calendar__header__right:hover {\n  background: #11a2d5;\n}\n\n.j-calendar__header__empty {\n  width: 50px;\n}\n\n.j-calendar__content {\n  width: 285px;\n  padding: 10px;\n}\n\n.j-calendar__days {\n  display: flex;\n}\n\n.j-calendar__days__item {\n  width: 14.285%;\n  font-size: 13px;\n  cursor: default;\n  text-align: center;\n}\n\n.j-calendar__days__item--output {\n  color: #17b6ed;\n}\n\n.j-calendar__date {\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 5px;\n}\n\n.j-calendar__date__item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  width: 14.285%;\n  font-size: 13px;\n  position: relative;\n}\n\n.j-calendar__date__item.empty {\n  opacity: 0;\n  cursor: default !important;\n}\n\n.j-calendar__date__item:before {\n  content: '';\n  width: 26px;\n  height: 26px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  position: absolute;\n  border-radius: 100%;\n  z-index: -1;\n}\n\n.j-calendar__date__item:hover {\n  color: #17b6ed;\n  cursor: pointer;\n}\n\n.j-calendar__date__item--active {\n  color: #fff !important;\n  cursor: pointer;\n}\n\n.j-calendar__date__item--active:before {\n  background: #17b6ed;\n}\n\n.j-calendar__date__item--active:hover:before {\n  background: #17b6ed !important;\n}\n\n.j-calendar__date__item--today {\n  cursor: pointer;\n}\n\n.j-calendar__date__item--today:before {\n  border: 1px solid #17b6ed;\n}\n\n.j-calendar__date__item--inactive {\n  cursor: default !important;\n  color: #b7b7b7 !important;\n}\n\n.j-calendar__date__item--inactive:hover:before {\n  background: none !important;\n}\n\n.j-calendar__date__item--empty {\n  cursor: default;\n}\n\n.j-calendar__bottom {\n  margin: 15px 0;\n  text-align: center;\n}\n\n/*!\r\n * animate.css -http://daneden.me/animate\r\n * Version - 3.5.2\r\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\r\n *\r\n * Copyright (c) 2017 Daniel Eden\r\n */\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  animation-duration: 2s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  animation-duration: .75s;\n}\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%, 43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n}\n\n.bounce {\n  animation-name: bounce;\n  transform-origin: center bottom;\n}\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  animation-name: pulse;\n}\n\n@keyframes rubberBand {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  animation-name: rubberBand;\n}\n\n@keyframes shake {\n  from, to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  animation-name: shake;\n}\n\n@keyframes headShake {\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  animation-timing-function: ease-in-out;\n  animation-name: headShake;\n}\n\n@keyframes swing {\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  transform-origin: top center;\n  animation-name: swing;\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes wobble {\n  from {\n    transform: none;\n  }\n\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.wobble {\n  animation-name: wobble;\n}\n\n@keyframes jello {\n  from, 11.1%, to {\n    transform: none;\n  }\n\n  22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    transform: skewX(0.39063deg) skewY(0.39063deg);\n  }\n\n  88.8% {\n    transform: skewX(-0.19531deg) skewY(-0.19531deg);\n  }\n}\n\n.jello {\n  animation-name: jello;\n  transform-origin: center;\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  animation-name: bounceIn;\n}\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInDown {\n  animation-name: bounceInDown;\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  animation-name: bounceInLeft;\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  animation-name: bounceInRight;\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  animation-name: bounceInUp;\n}\n\n@keyframes bounceOut {\n  20% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\n\n.bounceOut {\n  animation-name: bounceOut;\n}\n\n@keyframes bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  animation-name: bounceOutDown;\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  animation-name: bounceOutLeft;\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  animation-name: bounceOutRight;\n}\n\n@keyframes bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  animation-name: bounceOutUp;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  animation-name: fadeInDown;\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInDownBig {\n  animation-name: fadeInDownBig;\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig {\n  animation-name: fadeInLeftBig;\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInRightBig {\n  animation-name: fadeInRightBig;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInUpBig {\n  animation-name: fadeInUpBig;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  animation-name: fadeOutDown;\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  animation-name: fadeOutDownBig;\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  animation-name: fadeOutLeft;\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  animation-name: fadeOutLeftBig;\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  animation-name: fadeOutRight;\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  animation-name: fadeOutRightBig;\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  animation-name: fadeOutUp;\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  animation-name: fadeOutUpBig;\n}\n\n@keyframes flip {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  animation-name: flip;\n}\n\n@keyframes flipInX {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipInX;\n}\n\n@keyframes flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipInY;\n}\n\n@keyframes flipOutX {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@keyframes flipOutY {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipOutY;\n}\n\n@keyframes lightSpeedIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  animation-name: lightSpeedIn;\n  animation-timing-function: ease-out;\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  animation-name: lightSpeedOut;\n  animation-timing-function: ease-in;\n}\n\n@keyframes rotateIn {\n  from {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: center;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  animation-name: rotateIn;\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  animation-name: rotateInDownLeft;\n}\n\n@keyframes rotateInDownRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  animation-name: rotateInDownRight;\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  animation-name: rotateInUpLeft;\n}\n\n@keyframes rotateInUpRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  animation-name: rotateInUpRight;\n}\n\n@keyframes rotateOut {\n  from {\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  animation-name: rotateOut;\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  animation-name: rotateOutDownLeft;\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  animation-name: rotateOutDownRight;\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  animation-name: rotateOutUpLeft;\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  animation-name: rotateOutUpRight;\n}\n\n@keyframes hinge {\n  0% {\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  animation-name: hinge;\n}\n\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.rollIn {\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  animation-name: rollOut;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  animation-name: zoomIn;\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInDown {\n  animation-name: zoomInDown;\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInLeft {\n  animation-name: zoomInLeft;\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInRight {\n  animation-name: zoomInRight;\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInUp {\n  animation-name: zoomInUp;\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  animation-name: zoomOut;\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomOutDown {\n  animation-name: zoomOutDown;\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  animation-name: zoomOutLeft;\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  animation-name: zoomOutRight;\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomOutUp {\n  animation-name: zoomOutUp;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  animation-name: slideInDown;\n}\n\n@keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  animation-name: slideInLeft;\n}\n\n@keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  animation-name: slideInRight;\n}\n\n@keyframes slideInUp {\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  animation-name: slideInUp;\n}\n\n@keyframes slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  animation-name: slideOutDown;\n}\n\n@keyframes slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  animation-name: slideOutLeft;\n}\n\n@keyframes slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  animation-name: slideOutRight;\n}\n\n@keyframes slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  animation-name: slideOutUp;\n}", ""]);

	// exports

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*!\r\n * Generated with CSS Flag Sprite generator (https://www.flag-sprites.com/)\r\n */\r\n\r\n.flag {\r\n    display: inline-block;\r\n    width: 32px;\r\n    height: 32px;\r\n    background: url(" + __webpack_require__(5) + ") no-repeat;\r\n}\r\n\r\n\r\n.flag.flag-sc {\r\n    background-position: -448px -352px;\r\n}\r\n\r\n.flag.flag-cz {\r\n    background-position: -96px -96px;\r\n}\r\n\r\n.flag.flag-gb {\r\n    background-position: -256px -128px;\r\n}\r\n\r\n.flag.flag-bh {\r\n    background-position: -192px -32px;\r\n}\r\n\r\n.flag.flag-et {\r\n    background-position: -32px -128px;\r\n}\r\n\r\n.flag.flag-cn {\r\n    background-position: -384px -64px;\r\n}\r\n\r\n.flag.flag-tv {\r\n    background-position: -320px -416px;\r\n}\r\n\r\n.flag.flag-mo {\r\n    background-position: -64px -288px;\r\n}\r\n\r\n.flag.flag-cy {\r\n    background-position: -64px -96px;\r\n}\r\n\r\n.flag.flag-se {\r\n    background-position: -32px -384px;\r\n}\r\n\r\n.flag.flag-us {\r\n    background-position: 0 -448px;\r\n}\r\n\r\n.flag.flag-ru {\r\n    background-position: -320px -352px;\r\n}\r\n\r\n.flag.flag-cv {\r\n    background-position: -32px -96px;\r\n}\r\n\r\n.flag.flag-fm {\r\n    background-position: -128px -128px;\r\n}\r\n\r\n.flag.flag-no {\r\n    background-position: -128px -320px;\r\n}\r\n\r\n.flag.flag-tr {\r\n    background-position: -256px -416px;\r\n}\r\n\r\n.flag.flag-bs {\r\n    background-position: -416px -32px;\r\n}\r\n\r\n.flag.flag-bj {\r\n    background-position: -256px -32px;\r\n}\r\n\r\n.flag.flag-at {\r\n    background-position: -352px 0;\r\n}\r\n\r\n.flag.flag-zm {\r\n    background-position: -416px -448px;\r\n}\r\n\r\n.flag.flag-ie {\r\n    background-position: -32px -192px;\r\n}\r\n\r\n.flag.flag-ug {\r\n    background-position: -448px -416px;\r\n}\r\n\r\n.flag.flag-va {\r\n    background-position: -96px -448px;\r\n}\r\n\r\n.flag.flag-bz {\r\n    background-position: -64px -64px;\r\n}\r\n\r\n.flag.flag-cd {\r\n    background-position: -128px -64px;\r\n}\r\n\r\n.flag.flag-sd {\r\n    background-position: 0 -384px;\r\n}\r\n\r\n.flag.flag-pa {\r\n    background-position: -288px -320px;\r\n}\r\n\r\n.flag.flag-ca {\r\n    background-position: -96px -64px;\r\n}\r\n\r\n.flag.flag-ps {\r\n    background-position: -64px -352px;\r\n}\r\n\r\n.flag.flag-bm {\r\n    background-position: -288px -32px;\r\n}\r\n\r\n.flag.flag-eg {\r\n    background-position: -384px -96px;\r\n}\r\n\r\n.flag.flag-bi {\r\n    background-position: -224px -32px;\r\n}\r\n\r\n.flag.flag-il {\r\n    background-position: -64px -192px;\r\n}\r\n\r\n.flag.flag-nz {\r\n    background-position: -224px -320px;\r\n}\r\n\r\n.flag.flag-py {\r\n    background-position: -160px -352px;\r\n}\r\n\r\n.flag.flag-na {\r\n    background-position: -416px -288px;\r\n}\r\n\r\n.flag.flag-cm {\r\n    background-position: -352px -64px;\r\n}\r\n\r\n.flag.flag-cu {\r\n    background-position: 0 -96px;\r\n}\r\n\r\n.flag.flag-ba {\r\n    background-position: 0 -32px;\r\n}\r\n\r\n.flag.flag-eh {\r\n    background-position: -416px -96px;\r\n}\r\n\r\n.flag.flag-an {\r\n    background-position: -224px 0;\r\n}\r\n\r\n.flag.flag-vn {\r\n    background-position: -256px -448px;\r\n}\r\n\r\n.flag.flag-mg {\r\n    background-position: -352px -256px;\r\n}\r\n\r\n.flag.flag-tm {\r\n    background-position: -160px -416px;\r\n}\r\n\r\n.flag.flag-tn {\r\n    background-position: -192px -416px;\r\n}\r\n\r\n.flag.flag-dm {\r\n    background-position: -224px -96px;\r\n}\r\n\r\n.flag.flag-gh {\r\n    background-position: -416px -128px;\r\n}\r\n\r\n.flag.flag-bf {\r\n    background-position: -128px -32px;\r\n}\r\n\r\n.flag.flag-az {\r\n    background-position: -448px 0;\r\n}\r\n\r\n.flag.flag-vc {\r\n    background-position: -128px -448px;\r\n}\r\n\r\n.flag.flag-gq {\r\n    background-position: -128px -160px;\r\n}\r\n\r\n.flag.flag-lk {\r\n    background-position: 0 -256px;\r\n}\r\n\r\n.flag.flag-sa {\r\n    background-position: -384px -352px;\r\n}\r\n\r\n.flag.flag-bd {\r\n    background-position: -64px -32px;\r\n}\r\n\r\n.flag.flag-td {\r\n    background-position: 0 -416px;\r\n}\r\n\r\n.flag.flag-je {\r\n    background-position: -352px -192px;\r\n}\r\n\r\n.flag.flag-mh {\r\n    background-position: -384px -256px;\r\n}\r\n\r\n.flag.flag-ro {\r\n    background-position: -256px -352px;\r\n}\r\n\r\n.flag.flag-vu {\r\n    background-position: -288px -448px;\r\n}\r\n\r\n.flag.flag-pr {\r\n    background-position: -32px -352px;\r\n}\r\n\r\n.flag.flag-lt {\r\n    background-position: -96px -256px;\r\n}\r\n\r\n.flag.flag-am {\r\n    background-position: -192px 0;\r\n}\r\n\r\n.flag.flag-uy {\r\n    background-position: -32px -448px;\r\n}\r\n\r\n.flag.flag-fj {\r\n    background-position: -96px -128px;\r\n}\r\n\r\n.flag.flag-ci {\r\n    background-position: -256px -64px;\r\n}\r\n\r\n.flag.flag-pf {\r\n    background-position: -352px -320px;\r\n}\r\n\r\n.flag.flag-er {\r\n    background-position: -448px -96px;\r\n}\r\n\r\n.flag.flag-nc {\r\n    background-position: -448px -288px;\r\n}\r\n\r\n.flag.flag-kn {\r\n    background-position: -160px -224px;\r\n}\r\n\r\n.flag.flag-ms {\r\n    background-position: -160px -288px;\r\n}\r\n\r\n.flag.flag-bo {\r\n    background-position: -352px -32px;\r\n}\r\n\r\n.flag.flag-au {\r\n    background-position: -384px 0;\r\n}\r\n\r\n.flag.flag-ve {\r\n    background-position: -160px -448px;\r\n}\r\n\r\n.flag.flag-im {\r\n    background-position: -128px -192px;\r\n}\r\n\r\n.flag.flag-gl {\r\n    background-position: 0 -160px;\r\n}\r\n\r\n.flag.flag-ge {\r\n    background-position: -320px -128px;\r\n}\r\n\r\n.flag.flag-zw {\r\n    background-position: -448px -448px;\r\n}\r\n\r\n.flag.flag-kg {\r\n    background-position: -32px -224px;\r\n}\r\n\r\n.flag.flag-vi {\r\n    background-position: -224px -448px;\r\n}\r\n\r\n.flag.flag-dz {\r\n    background-position: -288px -96px;\r\n}\r\n\r\n.flag.flag-ir {\r\n    background-position: -224px -192px;\r\n}\r\n\r\n.flag.flag-cl {\r\n    background-position: -320px -64px;\r\n}\r\n\r\n.flag.flag-cg {\r\n    background-position: -192px -64px;\r\n}\r\n\r\n.flag.flag-hn {\r\n    background-position: -352px -160px;\r\n}\r\n\r\n.flag.flag-ad {\r\n    background-position: 0 0;\r\n}\r\n\r\n.flag.flag-mu {\r\n    background-position: -224px -288px;\r\n}\r\n\r\n.flag.flag-lu {\r\n    background-position: -128px -256px;\r\n}\r\n\r\n.flag.flag-mk {\r\n    background-position: -416px -256px;\r\n}\r\n\r\n.flag.flag-ht {\r\n    background-position: -416px -160px;\r\n}\r\n\r\n.flag.flag-tz {\r\n    background-position: -384px -416px;\r\n}\r\n\r\n.flag.flag-bw {\r\n    background-position: 0 -64px;\r\n}\r\n\r\n.flag.flag-sk {\r\n    background-position: -128px -384px;\r\n}\r\n\r\n.flag.flag-ws {\r\n    background-position: -320px -448px;\r\n}\r\n\r\n.flag.flag-za {\r\n    background-position: -384px -448px;\r\n}\r\n\r\n.flag.flag-fo {\r\n    background-position: -160px -128px;\r\n}\r\n\r\n.flag.flag-mq {\r\n    background-position: -96px -288px;\r\n}\r\n\r\n.flag.flag-by {\r\n    background-position: -32px -64px;\r\n}\r\n\r\n.flag.flag-mm {\r\n    background-position: 0 -288px;\r\n}\r\n\r\n.flag.flag-md {\r\n    background-position: -288px -256px;\r\n}\r\n\r\n.flag.flag-it {\r\n    background-position: -288px -192px;\r\n}\r\n\r\n.flag.flag-bb {\r\n    background-position: -32px -32px;\r\n}\r\n\r\n.flag.flag-ai {\r\n    background-position: -128px 0;\r\n}\r\n\r\n.flag.flag-mx {\r\n    background-position: -320px -288px;\r\n}\r\n\r\n.flag.flag-ao {\r\n    background-position: -256px 0;\r\n}\r\n\r\n.flag.flag-tj {\r\n    background-position: -96px -416px;\r\n}\r\n\r\n.flag.flag-ee {\r\n    background-position: -352px -96px;\r\n}\r\n\r\n.flag.flag-bt {\r\n    background-position: -448px -32px;\r\n}\r\n\r\n.flag.flag-mz {\r\n    background-position: -384px -288px;\r\n}\r\n\r\n.flag.flag-qa {\r\n    background-position: -192px -352px;\r\n}\r\n\r\n.flag.flag-is {\r\n    background-position: -256px -192px;\r\n}\r\n\r\n.flag.flag-gd {\r\n    background-position: -288px -128px;\r\n}\r\n\r\n.flag.flag-sy {\r\n    background-position: -384px -384px;\r\n}\r\n\r\n.flag.flag-my {\r\n    background-position: -352px -288px;\r\n}\r\n\r\n.flag.flag-ag {\r\n    background-position: -96px 0;\r\n}\r\n\r\n.flag.flag-tw {\r\n    background-position: -352px -416px;\r\n}\r\n\r\n.flag.flag-br {\r\n    background-position: -384px -32px;\r\n}\r\n\r\n.flag.flag-to {\r\n    background-position: -224px -416px;\r\n}\r\n\r\n.flag.flag-gr {\r\n    background-position: -160px -160px;\r\n}\r\n\r\n.flag.flag-ki {\r\n    background-position: -96px -224px;\r\n}\r\n\r\n.flag.flag-af {\r\n    background-position: -64px 0;\r\n}\r\n\r\n.flag.flag-mn {\r\n    background-position: -32px -288px;\r\n}\r\n\r\n.flag.flag-cr {\r\n    background-position: -448px -64px;\r\n}\r\n\r\n.flag.flag-fi {\r\n    background-position: -64px -128px;\r\n}\r\n\r\n.flag.flag-km {\r\n    background-position: -128px -224px;\r\n}\r\n\r\n.flag.flag-kr {\r\n    background-position: -224px -224px;\r\n}\r\n\r\n.flag.flag-li {\r\n    background-position: -448px -224px;\r\n}\r\n\r\n.flag.flag-do {\r\n    background-position: -256px -96px;\r\n}\r\n\r\n.flag.flag-gt {\r\n    background-position: -192px -160px;\r\n}\r\n\r\n.flag.flag-jp {\r\n    background-position: -448px -192px;\r\n}\r\n\r\n.flag.flag-jm {\r\n    background-position: -384px -192px;\r\n}\r\n\r\n.flag.flag-pe {\r\n    background-position: -320px -320px;\r\n}\r\n\r\n.flag.flag-so {\r\n    background-position: -256px -384px;\r\n}\r\n\r\n.flag.flag-dk {\r\n    background-position: -192px -96px;\r\n}\r\n\r\n.flag.flag-vg {\r\n    background-position: -192px -448px;\r\n}\r\n\r\n.flag.flag-me {\r\n    background-position: -320px -256px;\r\n}\r\n\r\n.flag.flag-ua {\r\n    background-position: -416px -416px;\r\n}\r\n\r\n.flag.flag-ar {\r\n    background-position: -288px 0;\r\n}\r\n\r\n.flag.flag-co {\r\n    background-position: -416px -64px;\r\n}\r\n\r\n.flag.flag-gw {\r\n    background-position: -256px -160px;\r\n}\r\n\r\n.flag.flag-gi {\r\n    background-position: -448px -128px;\r\n}\r\n\r\n.flag.flag-mc {\r\n    background-position: -256px -256px;\r\n}\r\n\r\n.flag.flag-kw {\r\n    background-position: -256px -224px;\r\n}\r\n\r\n.flag.flag-bn {\r\n    background-position: -320px -32px;\r\n}\r\n\r\n.flag.flag-gg {\r\n    background-position: -384px -128px;\r\n}\r\n\r\n.flag.flag-ni {\r\n    background-position: -64px -320px;\r\n}\r\n\r\n.flag.flag-pw {\r\n    background-position: -128px -352px;\r\n}\r\n\r\n.flag.flag-es {\r\n    background-position: 0 -128px;\r\n}\r\n\r\n.flag.flag-lr {\r\n    background-position: -32px -256px;\r\n}\r\n\r\n.flag.flag-hu {\r\n    background-position: -448px -160px;\r\n}\r\n\r\n.flag.flag-gu {\r\n    background-position: -224px -160px;\r\n}\r\n\r\n.flag.flag-np {\r\n    background-position: -160px -320px;\r\n}\r\n\r\n.flag.flag-mr {\r\n    background-position: -128px -288px;\r\n}\r\n\r\n.flag.flag-jo {\r\n    background-position: -416px -192px;\r\n}\r\n\r\n.flag.flag-lb {\r\n    background-position: -384px -224px;\r\n}\r\n\r\n.flag.flag-be {\r\n    background-position: -96px -32px;\r\n}\r\n\r\n.flag.flag-tg {\r\n    background-position: -32px -416px;\r\n}\r\n\r\n.flag.flag-pk {\r\n    background-position: -448px -320px;\r\n}\r\n\r\n.flag.flag-lc {\r\n    background-position: -416px -224px;\r\n}\r\n\r\n.flag.flag-tc {\r\n    background-position: -448px -384px;\r\n}\r\n\r\n.flag.flag-sr {\r\n    background-position: -288px -384px;\r\n}\r\n\r\n.flag.flag-ec {\r\n    background-position: -320px -96px;\r\n}\r\n\r\n.flag.flag-gp {\r\n    background-position: -96px -160px;\r\n}\r\n\r\n.flag.flag-nl {\r\n    background-position: -96px -320px;\r\n}\r\n\r\n.flag.flag-iq {\r\n    background-position: -192px -192px;\r\n}\r\n\r\n.flag.flag-pl {\r\n    background-position: 0 -352px;\r\n}\r\n\r\n.flag.flag-al {\r\n    background-position: -160px 0;\r\n}\r\n\r\n.flag.flag-si {\r\n    background-position: -96px -384px;\r\n}\r\n\r\n.flag.flag-id {\r\n    background-position: 0 -192px;\r\n}\r\n\r\n.flag.flag-ga {\r\n    background-position: -224px -128px;\r\n}\r\n\r\n.flag.flag-kh {\r\n    background-position: -64px -224px;\r\n}\r\n\r\n.flag.flag-ky {\r\n    background-position: -288px -224px;\r\n}\r\n\r\n.flag.flag-om {\r\n    background-position: -256px -320px;\r\n}\r\n\r\n.flag.flag-pt {\r\n    background-position: -96px -352px;\r\n}\r\n\r\n.flag.flag-tt {\r\n    background-position: -288px -416px;\r\n}\r\n\r\n.flag.flag-as {\r\n    background-position: -320px 0;\r\n}\r\n\r\n.flag.flag-la {\r\n    background-position: -352px -224px;\r\n}\r\n\r\n.flag.flag-sv {\r\n    background-position: -352px -384px;\r\n}\r\n\r\n.flag.flag-mw {\r\n    background-position: -288px -288px;\r\n}\r\n\r\n.flag.flag-ng {\r\n    background-position: -32px -320px;\r\n}\r\n\r\n.flag.flag-sl {\r\n    background-position: -160px -384px;\r\n}\r\n\r\n.flag.flag-gn {\r\n    background-position: -64px -160px;\r\n}\r\n\r\n.flag.flag-kz {\r\n    background-position: -320px -224px;\r\n}\r\n\r\n.flag.flag-ls {\r\n    background-position: -64px -256px;\r\n}\r\n\r\n.flag.flag-lv {\r\n    background-position: -160px -256px;\r\n}\r\n\r\n.flag.flag-pg {\r\n    background-position: -384px -320px;\r\n}\r\n\r\n.flag.flag-sm {\r\n    background-position: -192px -384px;\r\n}\r\n\r\n.flag.flag-fr {\r\n    background-position: -192px -128px;\r\n}\r\n\r\n.flag.flag-gy {\r\n    background-position: -288px -160px;\r\n}\r\n\r\n.flag.flag-ph {\r\n    background-position: -416px -320px;\r\n}\r\n\r\n.flag.flag-ma {\r\n    background-position: -224px -256px;\r\n}\r\n\r\n.flag.flag-rs {\r\n    background-position: -288px -352px;\r\n}\r\n\r\n.flag.flag-rw {\r\n    background-position: -352px -352px;\r\n}\r\n\r\n.flag.flag-sg {\r\n    background-position: -64px -384px;\r\n}\r\n\r\n.flag.flag-aw {\r\n    background-position: -416px 0;\r\n}\r\n\r\n.flag.flag-sn {\r\n    background-position: -224px -384px;\r\n}\r\n\r\n.flag.flag-sb {\r\n    background-position: -416px -352px;\r\n}\r\n\r\n.flag.flag-ck {\r\n    background-position: -288px -64px;\r\n}\r\n\r\n.flag.flag-dj {\r\n    background-position: -160px -96px;\r\n}\r\n\r\n.flag.flag-de {\r\n    background-position: -128px -96px;\r\n}\r\n\r\n.flag.flag-hk {\r\n    background-position: -320px -160px;\r\n}\r\n\r\n.flag.flag-tl {\r\n    background-position: -128px -416px;\r\n}\r\n\r\n.flag.flag-in {\r\n    background-position: -160px -192px;\r\n}\r\n\r\n.flag.flag-mv {\r\n    background-position: -256px -288px;\r\n}\r\n\r\n.flag.flag-kp {\r\n    background-position: -192px -224px;\r\n}\r\n\r\n.flag.flag-cf {\r\n    background-position: -160px -64px;\r\n}\r\n\r\n.flag.flag-sz {\r\n    background-position: -416px -384px;\r\n}\r\n\r\n.flag.flag-ne {\r\n    background-position: 0 -320px;\r\n}\r\n\r\n.flag.flag-th {\r\n    background-position: -64px -416px;\r\n}\r\n\r\n.flag.flag-ml {\r\n    background-position: -448px -256px;\r\n}\r\n\r\n.flag.flag-ye {\r\n    background-position: -352px -448px;\r\n}\r\n\r\n.flag.flag-uz {\r\n    background-position: -64px -448px;\r\n}\r\n\r\n.flag.flag-nr {\r\n    background-position: -192px -320px;\r\n}\r\n\r\n.flag.flag-ch {\r\n    background-position: -224px -64px;\r\n}\r\n\r\n.flag.flag-re {\r\n    background-position: -224px -352px;\r\n}\r\n\r\n.flag.flag-hr {\r\n    background-position: -384px -160px;\r\n}\r\n\r\n.flag.flag-st {\r\n    background-position: -320px -384px;\r\n}\r\n\r\n.flag.flag-ke {\r\n    background-position: 0 -224px;\r\n}\r\n\r\n.flag.flag-bg {\r\n    background-position: -160px -32px;\r\n}\r\n\r\n.flag.flag-ae {\r\n    background-position: -32px 0;\r\n}\r\n\r\n.flag.flag-mt {\r\n    background-position: -192px -288px;\r\n}\r\n\r\n.flag.flag-ly {\r\n    background-position: -192px -256px;\r\n}\r\n\r\n.flag.flag-gm {\r\n    background-position: -32px -160px;\r\n}\r\n", ""]);

	// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__.p + "src/example/styles/flags.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Validators = exports.FormGroup = exports.ModalController = exports.API = exports.Http = exports.Controls = exports.Plugins = exports.Utils = exports.GlobalEvents = exports.TemplateEngine = exports.RouteSwitcher = exports.Router = exports.Inject = exports.Component = exports.Decorators = exports.Observable = undefined;

	var _observable = __webpack_require__(7);

	var _decorators = __webpack_require__(8);

	var Decorators = _interopRequireWildcard(_decorators);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _inject = __webpack_require__(43);

	var _inject2 = _interopRequireDefault(_inject);

	var _routerSwitcher = __webpack_require__(22);

	var _routerCore = __webpack_require__(23);

	var _routerCore2 = _interopRequireDefault(_routerCore);

	var _templateEngine = __webpack_require__(44);

	var _globalEvents = __webpack_require__(45);

	var _globalEvents2 = _interopRequireDefault(_globalEvents);

	var _utils = __webpack_require__(24);

	var _plugins = __webpack_require__(46);

	var Plugins = _interopRequireWildcard(_plugins);

	var _controls = __webpack_require__(49);

	var Controls = _interopRequireWildcard(_controls);

	var _http = __webpack_require__(62);

	var _api = __webpack_require__(21);

	var _api2 = _interopRequireDefault(_api);

	var _modal = __webpack_require__(63);

	var _formGroup = __webpack_require__(64);

	var _validators = __webpack_require__(65);

	__webpack_require__(66);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.Observable = _observable.Observable;
	exports.Decorators = Decorators;
	exports.Component = _component2.default;
	exports.Inject = _inject2.default;
	exports.Router = _routerCore2.default;
	exports.RouteSwitcher = _routerSwitcher.RouteSwitcher;
	exports.TemplateEngine = _templateEngine.TemplateEngine;
	exports.GlobalEvents = _globalEvents2.default;
	exports.Utils = _utils.Utils;
	exports.Plugins = Plugins;
	exports.Controls = Controls;
	exports.Http = _http.Http;
	exports.API = _api2.default;
	exports.ModalController = _modal.ModalController;
	exports.FormGroup = _formGroup.FormGroup;
	exports.Validators = _validators.Validators;

	// import { Component } from './component/component';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Observable = exports.ObservableNumber = exports.ObservableString = exports.ObservableBoolean = exports.ObservableCollection = exports.ObservableModel = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _class, _class2;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _decorators = __webpack_require__(8);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// import deepmerge from 'deepmerge';
	// import objectMerge from 'object-merge';
	// import merge from 'merge';

	var AbstractObservable = function () {
	    function AbstractObservable(options) {
	        _classCallCheck(this, AbstractObservable);

	        this.lId = -1;
	        if (options) {
	            this.defineProperties(options);
	        }

	        this.callbacksArray = [];
	    }

	    _createClass(AbstractObservable, [{
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
	                listeners: this.callbacksArray,
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
	                // if (this._data) {
	                r.f.call(_this4, _this4._data);
	                // }
	            });
	        }
	    }]);

	    return AbstractObservable;
	}();

	var ObservableModel = exports.ObservableModel = (0, _decorators.IfObject)(_class = function (_AbstractObservable) {
	    _inherits(ObservableModel, _AbstractObservable);

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
	                this._data = _extends({}, this._data, data);
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
	}(AbstractObservable)) || _class;

	var ObservableCollection = exports.ObservableCollection = (0, _decorators.IfArray)(_class2 = function (_AbstractObservable2) {
	    _inherits(ObservableCollection, _AbstractObservable2);

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
	        key: 'first',
	        value: function first() {
	            return this._data[0];
	        }
	    }, {
	        key: 'filter',
	        value: function filter(cb) {
	            return this._data.filter(cb);
	        }
	    }, {
	        key: 'sort',
	        value: function sort(cb) {
	            return this._data.sort(cb);
	        }
	    }, {
	        key: 'splice',
	        value: function splice(cb) {
	            return this._data.splice(cb);
	        }
	    }, {
	        key: 'splice',
	        value: function splice(cb) {
	            return this._data.splice(cb);
	        }
	    }, {
	        key: 'slice',
	        value: function slice() {
	            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	                rest[_key] = arguments[_key];
	            }

	            return this._data.slice(rest);
	        }
	    }, {
	        key: 'pop',
	        value: function pop() {
	            return this._data.pop();
	        }
	    }, {
	        key: 'reverse',
	        value: function reverse() {
	            this._data.reverse();
	            this._callAll();
	        }
	    }, {
	        key: 'push',
	        value: function push(data, model) {
	            this._data.push(data);
	            this._callAll();
	        }
	    }, {
	        key: 'shift',
	        value: function shift() {
	            this._data.shift(data);
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
	}(AbstractObservable)) || _class2;

	var ObservableBoolean = exports.ObservableBoolean = function (_AbstractObservable3) {
	    _inherits(ObservableBoolean, _AbstractObservable3);

	    function ObservableBoolean(options) {
	        _classCallCheck(this, ObservableBoolean);

	        var _this7 = _possibleConstructorReturn(this, (ObservableBoolean.__proto__ || Object.getPrototypeOf(ObservableBoolean)).call(this, options));

	        _this7._data = options || false;
	        return _this7;
	    }

	    _createClass(ObservableBoolean, [{
	        key: 'set',
	        value: function set(data, silent) {
	            if (typeof data == 'boolean') {
	                this._data = data;
	            } else {
	                throw new Error('Only boolean');
	            }

	            if (!silent) {
	                this._callAll();
	            }
	        }
	    }]);

	    return ObservableBoolean;
	}(AbstractObservable);

	var ObservableString = exports.ObservableString = function (_AbstractObservable4) {
	    _inherits(ObservableString, _AbstractObservable4);

	    function ObservableString(options) {
	        _classCallCheck(this, ObservableString);

	        var _this8 = _possibleConstructorReturn(this, (ObservableString.__proto__ || Object.getPrototypeOf(ObservableString)).call(this, options));

	        _this8._data = options || false;
	        return _this8;
	    }

	    _createClass(ObservableString, [{
	        key: 'set',
	        value: function set(data, silent) {
	            if (typeof data == 'string') {
	                this._data = data;
	            } else {
	                throw new Error('Only string');
	            }

	            if (!silent) {
	                this._callAll();
	            }
	        }
	    }]);

	    return ObservableString;
	}(AbstractObservable);

	var ObservableNumber = exports.ObservableNumber = function (_AbstractObservable5) {
	    _inherits(ObservableNumber, _AbstractObservable5);

	    function ObservableNumber(options) {
	        _classCallCheck(this, ObservableNumber);

	        var _this9 = _possibleConstructorReturn(this, (ObservableNumber.__proto__ || Object.getPrototypeOf(ObservableNumber)).call(this, options));

	        _this9._data = options || false;
	        return _this9;
	    }

	    _createClass(ObservableNumber, [{
	        key: 'set',
	        value: function set(data, silent) {
	            if (typeof data == 'number') {
	                this._data = data;
	            } else {
	                throw new Error('Only number');
	            }

	            if (!silent) {
	                this._callAll();
	            }
	        }
	    }]);

	    return ObservableNumber;
	}(AbstractObservable);

	var Observable = exports.Observable = function () {
	    function Observable(options) {
	        _classCallCheck(this, Observable);

	        return this.checkType(options);
	    }

	    _createClass(Observable, [{
	        key: 'checkType',
	        value: function checkType(options) {
	            if (Array.isArray(options)) {
	                return new ObservableCollection(options);
	            } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	                return new ObservableModel(options);
	            } else if (typeof options === 'number') {
	                return new ObservableNumber(options);
	            } else if (typeof options === 'string') {
	                return new ObservableString(options);
	            } else if (typeof options === 'boolean') {
	                return new ObservableBoolean(options);
	            } else {
	                throw new Error('Initial value must be set');
	            }
	        }
	    }]);

	    return Observable;
	}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Inject = exports.DirectiveDecorator = exports.ComponentDecorator = exports.IfArray = exports.IfObject = undefined;

	var _ifObject = __webpack_require__(9);

	var _ifObject2 = _interopRequireDefault(_ifObject);

	var _ifArray = __webpack_require__(10);

	var _ifArray2 = _interopRequireDefault(_ifArray);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _directive = __webpack_require__(25);

	var _directive2 = _interopRequireDefault(_directive);

	var _inject = __webpack_require__(43);

	var _inject2 = _interopRequireDefault(_inject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.IfObject = _ifObject2.default;
	exports.IfArray = _ifArray2.default;
	exports.ComponentDecorator = _component2.default;
	exports.DirectiveDecorator = _directive2.default;
	exports.Inject = _inject2.default;

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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = ComponentDecorator;

	var _component = __webpack_require__(12);

	var _observable = __webpack_require__(7);

	var _directives = __webpack_require__(14);

	var _events = __webpack_require__(31);

	var _directives2 = __webpack_require__(16);

	var _api = __webpack_require__(21);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ComponentDecorator(decoratorParams) {
	    return function decorator(Class) {
	        var func = function func(root, props, parent, extraData) {
	            var newProps = {};
	            try {
	                newProps = decoratorParams.props ? decoratorParams.props() : {};
	            } catch (err) {
	                throw new Error(err + '; props is not a function; ' + Class.name);
	            }

	            newProps = _extends(newProps, props);

	            var proto = _component.Component.prototype;
	            if (decoratorParams.super) {
	                proto = decoratorParams.super.prototype = Object.setPrototypeOf(decoratorParams.super.prototype, _component.Component.prototype);
	            }
	            Class.prototype = Object.setPrototypeOf(Class.prototype, proto);

	            var instance = new Class();

	            var services = [];
	            if (_typeof(decoratorParams.services) === 'object') {
	                for (var key in decoratorParams.services) {
	                    if (decoratorParams.services.hasOwnProperty(key) && decoratorParams.services[key]) {
	                        var injectedService = _api2.default.injectorGet(decoratorParams.services[key], Class);
	                        if (injectedService) {
	                            newProps[key] = injectedService;
	                            services.push({ key: key, injectedService: injectedService });
	                        }
	                    }
	                }
	            }

	            Object.defineProperty(instance, 'props', { value: new _observable.Observable(newProps), writable: false });

	            var _loop = function _loop(_key) {
	                Object.defineProperty(instance, _key, {
	                    set: function set(value) {
	                        return instance.props.set(_key, value);
	                    },
	                    get: function get() {
	                        return instance.props.get(_key);
	                    },
	                    configurable: true
	                });
	            };

	            for (var _key in newProps) {
	                _loop(_key);
	            }

	            services.forEach(function (res) {
	                Object.defineProperty(instance, res.key, {
	                    value: res.injectedService,
	                    writable: false
	                });
	                Object.defineProperty(instance.props, res.key, {
	                    value: res.injectedService,
	                    writable: false
	                });
	            });

	            _component.Component.componentConstructor.call(instance, root, decoratorParams, extraData);

	            // if(!instance.root.getAttribute('ac-for')) {
	            //     instance.onInit(extraData);
	            // }

	            if (parent) {
	                instance.parent = parent;
	            }
	            return instance;
	        };
	        func.selector = decoratorParams.selector;
	        func.class = Class;
	        func.super = _component.Component;
	        return func;
	    };
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Component = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _private = __webpack_require__(13);

	var _interpolation = __webpack_require__(15);

	var _interpolation2 = _interopRequireDefault(_interpolation);

	var _directives = __webpack_require__(16);

	var _directives2 = __webpack_require__(14);

	var _events = __webpack_require__(31);

	var _api = __webpack_require__(21);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	            this.compile(); // render custom elements
	            this.compileRouter(); // render main router
	            // console.log(this);

	            _directives.Directives._init.call(this, this.root, 'ac-for', _private.PRIVATES.DIRECTIVES['ac-for']); // exclude interpolation from ac-for


	            _interpolation2.default._init.call(this, this.root, _private.PRIVATES.INTERPOLATION);

	            //internal directives
	            _directives2.DIRECTIVES_NAMES.forEach(function (directive) {
	                if (directive !== 'ac-for') {
	                    _directives.Directives._init.call(_this, _this.root, directive, _private.PRIVATES.DIRECTIVES[directive]);
	                }
	            });

	            //events
	            _events.EVENTS_NAMES.forEach(function (directive) {
	                _directives.Directives._initEvent.call(_this, _this.root, directive, _private.PRIVATES.EVENTS);
	            });

	            //custom directives
	            _api2.default.CUSTOM_DIRECTIVES.forEach(function (Directive) {
	                var array = _directives.Directives._init.call(_this, _this.root, Directive.params.selector, _private.PRIVATES.CUSTOM_DIRECTIVES[Directive.params.selector]);
	                if (array) {
	                    array.get(_this).map(function (item) {
	                        item.directive = new Directive(item.elem);
	                    });
	                }
	            });

	            _directives.Directives._dropdown.call(this, _private.PRIVATES.DIRECTIVES['ac-dropdown'].get(this));

	            _directives.Directives._model.call(this, _private.PRIVATES.DIRECTIVES['ac-model'].get(this));
	            _directives.Directives._on.call(this, _private.PRIVATES.DIRECTIVES['ac-on'].get(this));
	            _directives.Directives._outside.call(this, _private.PRIVATES.DIRECTIVES['ac-outside'].get(this));
	            _directives.Directives._pattern.call(this, _private.PRIVATES.DIRECTIVES['ac-pattern'].get(this)); //TODO
	            _directives.Directives._elRef.call(this, _private.PRIVATES.DIRECTIVES['ac-ref'].get(this));
	            _directives.Directives._events.call(this, _private.PRIVATES.EVENTS.get(this));
	            _directives.Directives._hostEvents.call(this, _private.PRIVATES.HOST.EVENTS.get(this));

	            _directives.Directives._formGroup.call(this, _private.PRIVATES.DIRECTIVES['ac-form-group'].get(this));

	            // this.onInit();
	        }
	    }, {
	        key: 'listenToPropsChanges',
	        value: function listenToPropsChanges() {
	            var _this2 = this;

	            var $propsSub = this.props.sub(function (r) {
	                _directives.Directives._computed.call(_this2, _private.PRIVATES.COMPUTED.get(_this2)); // should go first

	                _directives.Directives._if.call(_this2, _private.PRIVATES.DIRECTIVES['ac-if'].get(_this2));
	                _directives.Directives._for.call(_this2, _private.PRIVATES.DIRECTIVES['ac-for'].get(_this2));
	                _directives.Directives._value.call(_this2, _private.PRIVATES.DIRECTIVES['ac-value'].get(_this2));
	                _directives.Directives._input.call(_this2, _private.PRIVATES.DIRECTIVES['ac-input'].get(_this2));
	                _directives.Directives._value.call(_this2, _private.PRIVATES.DIRECTIVES['ac-model'].get(_this2));
	                _directives.Directives._style.call(_this2, _private.PRIVATES.DIRECTIVES['ac-style'].get(_this2));
	                _directives.Directives._class.call(_this2, _private.PRIVATES.DIRECTIVES['ac-class'].get(_this2));
	                _directives.Directives._attr.call(_this2, _private.PRIVATES.DIRECTIVES['ac-attr'].get(_this2));
	                _directives.Directives._link.call(_this2, _private.PRIVATES.DIRECTIVES['ac-link'].get(_this2));
	                _directives.Directives._hostClasses.call(_this2, _private.PRIVATES.HOST.CLASS.get(_this2));
	                _directives.Directives._hostStyles.call(_this2, _private.PRIVATES.HOST.STYLE.get(_this2));
	                _directives.Directives._hostHidden.call(_this2, _private.PRIVATES.HOST.HIDDEN.get(_this2));

	                _interpolation2.default._update.call(_this2, _private.PRIVATES.INTERPOLATION.get(_this2));

	                _directives.Directives._customDirective.call(_this2);
	                _this2.onUpdate();
	            });

	            Object.defineProperty(this, '$propsSub', { value: $propsSub, writable: false });
	        }
	    }, {
	        key: 'compile',
	        value: function compile() {
	            var _this3 = this;

	            _api2.default.COMPONENTS.forEach(function (comp) {
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
	            if (variable.length === 1 && variable[0] === 'this') return data || this.props.getData(); // entire props

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
	        key: 'getAllVariables',
	        value: function getAllVariables() {
	            return Object.keys(this.props.getData());
	        }
	    }, {
	        key: 'getPropsByScope',
	        value: function getPropsByScope(value, scope, loopParams) {
	            var _this4 = this;

	            var r = void 0;
	            var variable = value.split('.');
	            var listOfVariables = this.getAllVariables();
	            var listOfVariablesValues = listOfVariables.map(function (r) {
	                return _this4.props.get(r);
	            });

	            if (loopParams && loopParams.iterator) {
	                listOfVariables.push(loopParams.iterator);
	                listOfVariablesValues.push(scope);

	                if (loopParams.index || loopParams.index === 0) {
	                    listOfVariables.push('index');
	                    listOfVariablesValues.push(loopParams.index);
	                } else {
	                    listOfVariables.push('index');
	                    listOfVariablesValues.push(undefined);
	                }
	                if (loopParams.key) {
	                    listOfVariables.push('key');
	                    listOfVariablesValues.push(loopParams.key);
	                }
	            }

	            try {
	                r = new Function(listOfVariables, 'return ' + value).apply(this, listOfVariablesValues);
	            } catch (err) {
	                // throw new Error(err + '; ' + this);
	                // console.warn(err + '; ' + this);
	            }

	            return r;
	        }
	    }, {
	        key: 'setComponentVariable',
	        value: function setComponentVariable(string, value, loopParams, collectionName, data) {
	            var params = string.split('.'); /*data ? string.split('.') : ('props.' + string).split('.');*/
	            var lastProp = params[params.length - 1];

	            if (params[0] === loopParams) {
	                if (params.length > 1) {
	                    data[lastProp] = value;
	                    this.props._callAll();
	                }
	            } else {
	                var _params = ('props.' + string).split('.');
	                if (_params.length > 1) {
	                    _params.splice(-1, 1);
	                }

	                var target = _params.reduce(function (o, i) {
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

	            _directives.Directives.removeEventListeners.call(this, _private.PRIVATES.EVENTS.get(this));
	            console.log(_private.PRIVATES.SUBSCRIPTIONS);
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
	        key: '_onModelChange',
	        value: function _onModelChange() {}
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
	        value: function componentConstructor(root, options, extraData) {
	            this.root = root; //;console.log(root);

	            Object.defineProperty(this, 'children', { value: {}, writable: false });

	            Object.defineProperty(this, 'tpl', { value: options.template || 'Empty template', writable: false });

	            Object.defineProperty(this, '$refs', { value: {}, writable: false });

	            var attrs = {};

	            for (var i = 0; i < root.attributes.length; i++) {
	                attrs[root.attributes[i].nodeName] = root.attributes[i].nodeValue;
	            }

	            if (attrs['ac-form-control'] && attrs['ac-model']) {
	                throw new Error('Using of ac-model inside ac-form-group is forbidden');
	            }

	            Object.defineProperty(this, '$attrs', { value: attrs, writable: false });

	            this.root.COMPONENT = this;

	            if (this instanceof _api2.default.rootComponent.class) {
	                _api2.default.rootInstance = this;
	            }

	            Component.setPrivates.call(this, options);

	            if (this.root.getAttribute('ac-for')) {
	                // console.warn('Foor loop is detected!')
	            } else {
	                this.render();
	                this.listenToPropsChanges();
	                this.onInit(extraData);
	            }
	        }
	    }, {
	        key: 'setPrivates',
	        value: function setPrivates(options) {
	            var _this5 = this;

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

	            _api2.default.CUSTOM_DIRECTIVES.forEach(function (directive) {
	                if (!_private.PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector]) {
	                    _private.PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector] = new WeakMap();
	                }
	                _private.PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector].set(_this5, []);
	            });

	            _private.PRIVATES.INTERPOLATION.set(this, []);
	        }
	    }]);

	    return Component;
	}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PRIVATES = undefined;

	var _directives = __webpack_require__(14);

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
	    COMPUTED: new WeakMap(),
	    INTERPOLATION: new WeakMap()
	}; // import { EVENTS } from './const/events';


	_directives.DIRECTIVES_NAMES.forEach(function (directive) {
	    PRIVATES.DIRECTIVES[directive] = new WeakMap();
	});

	exports.PRIVATES = PRIVATES;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var DIRECTIVES_NAMES = exports.DIRECTIVES_NAMES = ['ac-for', 'ac-style', 'ac-value', 'ac-input', 'ac-model', 'ac-if', 'ac-class', 'ac-link', 'ac-attr', 'ac-on', 'ac-pattern', 'ac-outside', 'ac-ref', 'ac-form-group', 'ac-dropdown'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _directives = __webpack_require__(16);

	var _utils = __webpack_require__(24);

	// import { applyFormatter } from './../directives/value';
	var Interpolation = {
	    _init: function _init(root, newArray) {
	        var array = newArray || [];
	        var regExp = /({{[^%>]+?}})/g;
	        var self = this;

	        var items = _utils.Utils.getTextNodesIn(root, function (textNode, parent) {
	            if (textNode.nodeValue.match(regExp) /*regExp.test(textNode.nodeValue)*/ && textNode.parentNode.getAttribute('ac-avoid') !== '') {
	                var vars = textNode.nodeValue.split(regExp);
	                vars.filter(function (r) {
	                    return r;
	                }).forEach(function (r, i) {
	                    var tNode = document.createTextNode(r);
	                    var match = /{{([^}]+)}}/g.exec(r);
	                    if (match) {
	                        tNode.nodeValue = '';
	                        var obj = {
	                            node: tNode,
	                            value: match[1]
	                        };

	                        array.get ? array.get(self).push(obj) : array.push(obj);
	                    }
	                    textNode.parentNode.insertBefore(tNode, textNode);
	                });
	                textNode.remove();
	            }
	        });

	        return array;
	    },

	    _update: function _update(array, data, loopParams) {
	        var _this = this;

	        if (array.length) {
	            array.forEach(function (node) {
	                var params = node.value.split('|');
	                var r = _this.getPropsByScope(params[0], data, loopParams);
	                r = _utils.Utils.applyFormatter(r, params[1]);
	                node.node.nodeValue = r;
	            });
	        }
	    }
	};

	exports.default = Interpolation;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Directives = undefined;

	var _style2 = __webpack_require__(17);

	var _value2 = __webpack_require__(18);

	var _pattern2 = __webpack_require__(19);

	var _if2 = __webpack_require__(20);

	var _class2 = __webpack_require__(26);

	var _elRef2 = __webpack_require__(27);

	var _for2 = __webpack_require__(28);

	var _model2 = __webpack_require__(32);

	var _attr2 = __webpack_require__(33);

	var _input2 = __webpack_require__(34);

	var _link2 = __webpack_require__(35);

	var _event = __webpack_require__(30);

	var _outside2 = __webpack_require__(36);

	var _on2 = __webpack_require__(37);

	var _init2 = __webpack_require__(29);

	var _host = __webpack_require__(38);

	var _formGroup2 = __webpack_require__(39);

	var _customDirective2 = __webpack_require__(40);

	var _computed2 = __webpack_require__(41);

	var _dropdown2 = __webpack_require__(42);

	var Directives = {
	    _style: _style2._style,
	    _value: _value2._value,
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
	    _computed: _computed2._computed,
	    _dropdown: _dropdown2._dropdown
	};

	exports.Directives = Directives;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._style = _style;
	function _style(array, data, loopParams) {
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
	            // let variable = params[1].split('.');
	            var r = void 0;

	            r = _this.getPropsByScope(params[1], data, loopParams);
	            r = minus ? '-' + r : r;

	            r ? item.elem.style[styleName] = r : item.elem.style[styleName] = '';
	        });
	    });
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._value = _value;

	var _core = __webpack_require__(6);

	function _value(array, data, loopParams) {
	    var _this = this;

	    array.forEach(function (item) {
	        var params = item.attr.split('|'),
	            r = void 0;
	        var rowHtml = false;

	        r = _this.getPropsByScope(params[0], data, loopParams);
	        r = _core.Utils.applyFormatter(r, params[1]);
	        if (_core.Utils.isCustomElement(item.elem) === false) {

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
	                rowHtml ? item.elem.innerHTML = r : item.elem.textContent = r;
	            }
	        } else {
	            item.elem.COMPONENT._onModelChange(r);
	        }
	    });
	}

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._if = _if;

	var _core = __webpack_require__(6);

	var _api = __webpack_require__(21);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _if(array, data, loopParams) {
	    var _this = this;

	    array.forEach(function (item) {
	        var params = item.attr;

	        try {
	            var r = _this.getPropsByScope(params, data, loopParams);
	            if (r) {
	                if (!item.elem.parentNode) {
	                    // insert only if elem doesn't exists
	                    if (_core.Utils.isCustomElement(item.elem)) {
	                        _api2.default.COMPONENTS.forEach(function (comp) {
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
	    });
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _routerSwitcher = __webpack_require__(22);

	var _component = __webpack_require__(12);

	var _directive = __webpack_require__(25);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var API = function () {
	    function API() {
	        _classCallCheck(this, API);

	        this.rootComponent = null;
	        this.rootInstance = null;
	        this.config = {};
	        this.COMPONENTS = [];
	        this.CUSTOM_DIRECTIVES = [];
	        this._SERVICES = [];
	        this._READY_SERVICES = [];
	    }

	    _createClass(API, [{
	        key: 'setServices',
	        value: function setServices(options) {
	            var _this = this;

	            options.forEach(function (r) {
	                if (Array.isArray(r)) {
	                    r.forEach(function (r) {
	                        _this._SERVICES.push(r);
	                    });
	                } else {
	                    _this._SERVICES.push(r);
	                }
	            });
	        }
	    }, {
	        key: 'injectorGet',
	        value: function injectorGet(service, Class) {
	            var instanceName = Class ? Class.name : '';
	            if (typeof service !== 'function') {
	                throw new Error('Is not a service; ' + instanceName);
	            }

	            var injectedService = this._SERVICES.filter(function (r) {
	                return r === service;
	            })[0];
	            var readyService = this._READY_SERVICES.filter(function (r) {
	                if (!service.class) throw new Error(service.name + ' service must be injected; See ' + instanceName);
	                return r instanceof service.class;
	            });
	            if (readyService.length) {
	                return readyService[0];
	            } else {
	                if (injectedService) {
	                    var _readyService = new injectedService();
	                    this._READY_SERVICES.push(_readyService);
	                    return _readyService;
	                } else {
	                    if (service.class) {
	                        throw new Error('Service doesn\'t exist; ' + service.class.name + '; See ' + instanceName);
	                    } else {
	                        throw new Error(service.name + ' service must be injected; See ' + instanceName);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'register',
	        value: function register(options) {
	            var _this2 = this;

	            this.loadStyle(options.styles);

	            if (options.services && options.services.length) {
	                this.setServices(options.services);
	            }

	            _routerSwitcher.RouteSwitcher.ROUTES = options.routes;
	            this.rootComponent = options.root;

	            if (options.components) {
	                if (options.components instanceof Array) {
	                    options.components.forEach(function (c) {
	                        return _this2.registerComponent(c);
	                    });
	                } else {
	                    throw new Error('components must be an array');
	                }
	            }

	            if (options.directives) {
	                if (options.directives instanceof Array) {
	                    options.directives.forEach(function (d) {
	                        return _this2.registerDirective(d);
	                    });
	                } else {
	                    throw new Error('directives must be an array');
	                }
	            }

	            if (options.import) {
	                if (options.import instanceof Array) {
	                    options.import.forEach(function (module) {
	                        if (Array.isArray(module)) {
	                            module.forEach(function (component) {
	                                _this2.registerComponent(component);
	                            });
	                        } else {
	                            throw new Error('imported data must be an array');
	                        }
	                    });
	                } else {
	                    throw new Error('imported data must be an array');
	                }
	            }

	            var rootEl = document.querySelectorAll(options.root.selector)[0];
	            if (rootEl) {
	                var rootComponent = new options.root(rootEl);
	                rootComponent.root.setAttribute('ac-version', ("0.8.15"));
	            } else {
	                console.warn('There is no root component');
	            }

	            // this.isReady.set(true);
	        }
	    }, {
	        key: 'registerComponent',
	        value: function registerComponent(component) {
	            //avoid repeated components
	            if (this.COMPONENTS.map(function (r) {
	                return r.selector;
	            }).indexOf(component.selector) > -1) {
	                throw new Error('Duplicate declaration; ' + component.selector);
	            }

	            if (component.super && Object.is(component.super.prototype, _component.Component.prototype)) {
	                this.COMPONENTS.push(component);
	            } else {
	                throw new Error(component.name + ' must me inherited from ComponentDecorator');
	            }
	        }
	    }, {
	        key: 'registerDirective',
	        value: function registerDirective(directive) {
	            //avoid repeated directives
	            if (Object.is(directive.super.prototype, _directive.Directive.prototype)) {
	                if (this.CUSTOM_DIRECTIVES.map(function (r) {
	                    return r.params.selector;
	                }).indexOf(directive.params.selector) > -1) {
	                    throw new Error('Duplicate declaration; ' + directive.params.selector);
	                }
	                this.CUSTOM_DIRECTIVES.push(directive);
	            } else {
	                throw new Error(directive.name + ' must me inherited from DirectiveDecorator');
	            }
	        }
	    }, {
	        key: 'loadStyle',
	        value: function loadStyle(styles) {
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
	    }]);

	    return API;
	}();

	exports.default = new API();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RouteSwitcher = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _routerCore = __webpack_require__(23);

	var _routerCore2 = _interopRequireDefault(_routerCore);

	var _api = __webpack_require__(21);

	var _api2 = _interopRequireDefault(_api);

	var _utils = __webpack_require__(24);

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
	                        if (childComp.root) {
	                            router = childComp.root.querySelectorAll('child-route-switcher')[0];
	                        }
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
	            var a = _api2.default.rootInstance.root.querySelectorAll('[href]'); //this.root.querySelectorAll('[href]');
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
	            return _api2.default.COMPONENTS.filter(function (r) {
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

	                var protector = _api2.default.injectorGet(route.protector); //new route.protector();
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
	            var elements = root.querySelectorAll('*');
	            elements.forEach(function (node) {
	                if (_utils.Utils.isCustomElement(node)) {
	                    node.COMPONENT && node.COMPONENT.destroy();
	                }
	            });

	            // if (root.childNodes[0]) {
	            //     let currentChild = root.childNodes[0].COMPONENT;
	            //     if(currentChild) {
	            //         this.destroyAllChildren(currentChild.children);
	            //         currentChild.destroy();
	            //     }
	            // }
	            root.innerHTML = '';
	        }

	        // destroyAllChildren(children) {
	        //     for (let key in children) {
	        //         children[key].forEach(child => {
	        //             this.destroyAllChildren(child.children);
	        //             child.destroy();
	        //         })
	        //     }
	        // }

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
/* 23 */
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
/* 24 */
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

	    getDeepProp: function getDeepProp(data, prop) {
	        return prop.split('.').reduce(function (o, i) {
	            return o ? o[i] : null;
	        }, data);
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
	    },
	    indexInParent: function indexInParent(node) {
	        var children = node.parentNode.childNodes;
	        var num = 0;
	        for (var i = 0; i < children.length; i++) {
	            if (children[i] == node) return num;
	            if (children[i].nodeType == 1) num++;
	        }
	        return -1;
	    },


	    //ref http://cwestblog.com/2014/03/14/javascript-getting-all-text-nodes/
	    /**
	     * Gets an array of the matching text nodes contained by the specified element.
	     * @param  {!Element} elem
	     *     The DOM element which will be traversed.
	     * @param  {function(!Node,!Element):boolean} opt_fnFilter
	     *     Optional function that if a true-ish value is returned will cause the
	     *     text node in question to be added to the array to be returned from
	     *     getTextNodesIn().  The first argument passed will be the text node in
	     *     question while the second will be the parent of the text node.
	     * @return {!Array.<!--Node-->}
	     *     Array of the matching text nodes contained by the specified element.
	     */
	    getTextNodesIn: function getTextNodesIn(elem, opt_fnFilter) {
	        var textNodes = [];
	        if (elem) {
	            for (var nodes = elem.childNodes, i = nodes.length; i--;) {
	                var node = nodes[i],
	                    nodeType = node.nodeType;
	                if (nodeType == 3) {
	                    if (!opt_fnFilter || opt_fnFilter(node, elem)) {
	                        textNodes.push(node);
	                    }
	                } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
	                    textNodes = textNodes.concat(Utils.getTextNodesIn(node, opt_fnFilter));
	                }
	            }
	        }
	        return textNodes;
	    },


	    // getCustomElements(elem, opt_fnFilter){
	    //     let textNodes = [];
	    //     if (elem) {
	    //         for (let nodes = elem.childNodes, i = nodes.length; i--;) {
	    //             let node = nodes[i],
	    //                 nodeType = node.nodeType;
	    //             if (nodeType == 1) {
	    //                 if (!opt_fnFilter || opt_fnFilter(node, elem)) {
	    //                     textNodes.push(node);
	    //                 }
	    //             } 
	    //             else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
	    //                 textNodes = textNodes.concat(Utils.getTextNodesIn(node, opt_fnFilter));
	    //             }
	    //         }
	    //     }
	    //     return textNodes;
	    // },

	    applyFormatter: function applyFormatter(r, params) {
	        var formatterData = params ? params.split(':') : null;
	        var formatter = params ? Utils.removeSpacesFromString(params) : null;
	        if (formatterData) {
	            formatter = formatterData[0].trim();
	            formatterData = formatterData[1] ? formatterData[1].trim() : null;
	        }

	        if (formatter && formatter === 'json') {
	            r = JSON.stringify(r);
	        } else if (formatter && formatter === 'date') {
	            r = Utils.getDateByFormat(r, formatterData || '');
	        } else if (formatter && formatter === 'html') {
	            rowHtml = true;
	        } else if (formatter) {
	            throw new Error('Unknown formatter ' + formatter);
	        } else {
	            r = r;
	        }

	        if (!r && r !== 0) {
	            r = '';
	        }
	        return r;
	    },
	    getValueBetweenBrackets: function getValueBetweenBrackets(str, cb, err) {
	        var regExp = /\(([^)]+)\)|\(()\)/;
	        var res = regExp.exec(str);
	        if (res && res[1]) {
	            cb(res[1]);
	        } else {
	            err && err();
	        }
	    },
	    isTextField: function isTextField(elem) {
	        return elem.type === 'text' || elem.type === 'email' || elem.type === 'password' || elem.type === 'textarea';
	    }
	};

	exports.Utils = Utils;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = DirectiveDecorator;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Directive = exports.Directive = function Directive() {
	    _classCallCheck(this, Directive);
	};

	function DirectiveDecorator(decoratorParams) {
	    return function decorator(Class) {
	        Class.params = decoratorParams;
	        Class.prototype = Object.setPrototypeOf(Class.prototype, Directive.prototype);
	        Class.super = Directive;
	        return Class;
	    };
	}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._class = _class;
	function _class(array, data, loopParams) {
	    var _this = this;

	    array.forEach(function (item) {
	        var array = item.attr.replace(/ +/g, "").split(',');
	        var attr = item.attr;
	        var root = item.elem;

	        array.forEach(function (prop) {
	            try {
	                if (prop[0] === '@') {
	                    var params = prop.split('@');
	                    var r = void 0;

	                    if (item.prev) {
	                        root.classList.remove(item.prev);
	                    }

	                    // inside ac-for
	                    r = _this.getPropsByScope(params[1], data, loopParams);

	                    //remove previous class
	                    item.prev = r;

	                    if (r) {
	                        root.classList.add(r);
	                    }
	                } else {
	                    var _params = prop.replace(/ +/g, "").split(':');
	                    var className = _params[0];
	                    var _r = void 0;

	                    // inside ac-for
	                    _r = _this.getPropsByScope(_params[1], data, loopParams);

	                    _r ? root.classList.add(className) : root.classList.remove(className);
	                }
	            } catch (err) {
	                throw new Error(_this.constructor.name + '; ' + err);
	            }
	        });
	    });
	}

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports._for = _for;

	var _core = __webpack_require__(6);

	var _index = __webpack_require__(16);

	var _init2 = __webpack_require__(29);

	var _events = __webpack_require__(31);

	var _api = __webpack_require__(21);

	var _api2 = _interopRequireDefault(_api);

	var _interpolation = __webpack_require__(15);

	var _interpolation2 = _interopRequireDefault(_interpolation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _for(array, data) {
	    var _this = this;

	    if (array.length) {
	        //console.log(this); //console.time('modules')
	        array.forEach(function (item) {
	            var compName = item.elem.localName;
	            var loopIterator = { iterator: null };
	            var collectionName = void 0;
	            var array = []; //this.getComponentVariable(item.attr.split('.'), data) || [];
	            // let additionalParams = {};

	            if (item.attr.indexOf('let ') > -1 && item.attr.indexOf('of ') > -1) {
	                var params1 = item.attr.split('of')[0];
	                collectionName = item.attr.split('of')[1].replace(/ +/g, "");
	                var lParams = params1.split('let ')[1].replace(/ +/g, "");
	                // let func = `for(${params1} in this.${collectionName}) { } return this.${collectionName}`;
	                _core.Utils.getValueBetweenBrackets(lParams, function (value) {
	                    var params = value.split(',');
	                    loopIterator.iterator = params[0];
	                    if (params.indexOf('key') > -1) {
	                        loopIterator.key = true;
	                    }
	                    if (params.indexOf('index') > -1) {
	                        loopIterator.index = true;
	                    }
	                }, function () {
	                    loopIterator.iterator = lParams;
	                });

	                var arg = void 0;
	                try {
	                    // arg = new Function(func).apply(data || this.props);
	                    arg = _core.Utils.getDeepProp(data || _this.props, collectionName) || [];
	                } catch (e) {
	                    arg = [];
	                }

	                array = arg;
	            }
	            var keys = void 0;
	            if (array && !Array.isArray(array)) {
	                // if object
	                keys = Object.keys(array);
	                array = Object.keys(array).map(function (r) {
	                    return array[r];
	                });
	            }

	            if (_core.Utils.isCustomElement(item.elem)) {
	                customElements.call(_this, item, array, compName);
	            } else {
	                nativeElements.call(_this, item, array, loopIterator, collectionName, keys);
	            }
	        }); //console.timeEnd('modules')
	    }
	}

	function nativeElements(item, array, loopI, collectionName, keys) {
	    var _this2 = this;

	    if (item.cached.length !== array.length) {
	        item.items.forEach(function (item) {
	            item.remove();
	        });
	        item.items = [];
	        item.directives = [];
	        item.interpolationArray = [];
	        item.loopParams = [];

	        var _loop = function _loop(i) {
	            var prevContent = item.elem.cloneNode(true);

	            // loop through the old element's attributes and give them to the new element
	            for (var _i = 0; _i < item.elem.attributes.length; _i++) {
	                prevContent.setAttribute(item.elem.attributes[_i].nodeName, item.elem.attributes[_i].nodeValue);
	            }

	            item.items.push(prevContent);
	            item.parent.insertBefore(prevContent, item.comment);

	            item.directives[i] = {
	                for: _index.Directives._init.call(_this2, prevContent, 'ac-for')
	            };

	            item.interpolationArray[i] = _interpolation2.default._init.call(_this2, prevContent);

	            item.directives[i] = _extends(item.directives[i], {
	                // for:   Directives._init.call(this, prevContent, 'ac-for'), // should go first for correct work
	                class: _index.Directives._init.call(_this2, prevContent, 'ac-class'),
	                style: _index.Directives._init.call(_this2, prevContent, 'ac-style'),
	                attrs: _index.Directives._init.call(_this2, prevContent, 'ac-attr'),
	                if: _index.Directives._init.call(_this2, prevContent, 'ac-if'),
	                model: _index.Directives._init.call(_this2, prevContent, 'ac-model'),
	                props: _index.Directives._init.call(_this2, prevContent, 'ac-value'),
	                links: _index.Directives._init.call(_this2, prevContent, 'ac-link')
	            });

	            if (loopI) {
	                item.loopParams.push({
	                    iterator: loopI.iterator,
	                    index: loopI.index && i,
	                    key: loopI.key && keys && keys[i]
	                });
	            }

	            var eventsArray = [];

	            _events.EVENTS_NAMES.forEach(function (directive) {
	                eventsArray.push(_index.Directives._initEvent.call(_this2, prevContent, directive, [], array[i], item.loopParams[i]));
	            });
	            item.directives[i].events = eventsArray;

	            // updateElement.call(this, item, i, array[i], item.loopParams[i]);
	            bindModelToViewForLoop.call(_this2, item.directives[i].model, item.loopParams[i], collectionName, array[i]);
	        };

	        for (var i = 0; i <= array.length - 1; i++) {
	            _loop(i);
	        }
	    }

	    var curRootProps = JSONStr(this.props.getData());

	    item.items.forEach(function (elem, i) {
	        // if current or root prop has been changed
	        if (JSONStr(item.cached[i]) !== JSONStr(array[i]) || curRootProps !== item.rootCached) {
	            updateElement.call(_this2, item, i, array[i], item.loopParams[i]);
	        }
	    });

	    item.rootCached = JSONStr(this.props.getData());
	    item.cached = JSON.parse(JSONStr(array));
	}

	function customElements(item, array, compName) {
	    if (item.cached.length !== array.length) {
	        item.items.forEach(function (item) {
	            item.remove();
	        });
	        item.items = [];
	        this.children[item.elem.COMPONENT.constructor.name] = [];
	        for (var i = 0; i <= array.length - 1; i++) {
	            var newComp = _api2.default.COMPONENTS.filter(function (r) {
	                return r.selector === compName;
	            })[0];
	            // if(newComp) {
	            var newEl = document.createElement(compName);
	            // this.root.appendChild(newEl);
	            var instance = new newComp(newEl, array[i], this);
	            this.children[item.elem.COMPONENT.constructor.name].push(instance);
	            // }

	            // loop through the old element's attributes and give them to the new element
	            for (var _i2 = 0; _i2 < item.elem.attributes.length; _i2++) {
	                newEl.setAttribute(item.elem.attributes[_i2].nodeName, item.elem.attributes[_i2].nodeValue);
	            }
	            item.items.push(newEl);
	            item.parent.insertBefore(newEl, item.comment);
	        }
	        item.cached = []; // refresh cached array
	        item.cachedIndexes = item.items.map(function (r) {
	            return _core.Utils.indexInParent(r);
	        });
	    }

	    item.items.forEach(function (elem, i) {
	        if (_core.Utils.indexInParent(elem) !== item.cachedIndexes[i]) {
	            // check if order was changed
	            elem.parentNode.insertBefore(elem, elem.parentNode.children.item(i));
	        }

	        if (JSONStr(item.cached[i]) !== JSONStr(array[i])) {
	            if (!elem.COMPONENT) {
	                console.warn('Please create component with name ' + compName);
	                return;
	            }
	            elem.COMPONENT.props.set(array[i]);
	        }
	    });

	    item.cached = JSON.parse(JSONStr(array));
	    item.cachedIndexes = item.items.map(function (r) {
	        return _core.Utils.indexInParent(r);
	    });
	}

	// check for cyclic object references before stringifying
	function JSONStr(obj) {
	    var seen = [];

	    var replacer = function replacer(key, value) {
	        if (value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == "object") {
	            if (seen.indexOf(value) >= 0) {
	                return;
	            }
	            seen.push(value);
	        }
	        return value;
	    };

	    return JSON.stringify(obj, replacer);
	}

	function updateElement(item, i, data, loopParams) {
	    forAttachForLoop.call(this, item.directives[i].for, data);

	    bindInterPolation.call(this, item.interpolationArray[i], data, loopParams);

	    bindClassForLoop.call(this, item.directives[i].class, data, loopParams);
	    styleUnitForLoop.call(this, item.directives[i].style, data, loopParams);
	    bindIfForLoop.call(this, item.directives[i].if, data, loopParams);
	    bindValueToViewForLoop.call(this, item.directives[i].props, data, loopParams);
	    bindValueToViewForLoop.call(this, item.directives[i].model, data, loopParams);

	    bindAttrsForLoop.call(this, item.directives[i].attrs, data, loopParams);
	    addLinksRefsForLoop.call(this, item.directives[i].links, data, loopParams);
	    eventsForLoop.call(this, item.directives[i].events);
	}

	function eventsForLoop(array) {
	    array = array.reduce(function (a, b) {
	        return a.concat(b);
	    }, []);
	    _index.Directives._events.call(this, array);
	}

	function addLinksRefsForLoop(array, data, loopParams) {
	    _index.Directives._link.call(this, array, data, loopParams);
	}

	function bindAttrsForLoop(array, data, loopParams) {
	    _index.Directives._attr.call(this, array, data, loopParams);
	}

	function forAttachForLoop(array, data) {
	    _index.Directives._for.call(this, array, data);
	}

	function bindModelToViewForLoop(array, loopParams, collectionName, data) {
	    _index.Directives._model.call(this, array, loopParams, collectionName, data);
	}

	function bindValueToViewForLoop(array, data, loopParams) {
	    _index.Directives._value.call(this, array, data, loopParams);
	}

	function styleUnitForLoop(array, data, loopParams) {
	    _index.Directives._style.call(this, array, data, loopParams);
	}

	function bindClassForLoop(array, data, loopParams) {
	    _index.Directives._class.call(this, array, data, loopParams);
	}

	function bindIfForLoop(array, data, loopParams) {
	    _index.Directives._if.call(this, array, data, loopParams);
	}

	function bindInterPolation(array, data, loopParams) {
	    _interpolation2.default._update.call(this, array, data, loopParams);
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._init = _init;
	exports._initEvent = _initEvent;

	var _private = __webpack_require__(13);

	var _core = __webpack_require__(6);

	var _event = __webpack_require__(30);

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
	                _obj.cachedIndexes = [];
	                _obj.rootCached = null;
	                _obj.interpolationArray = [];
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

	function _initEvent(root, directive, newArray, data, loopParams) {
	    var array = newArray || [];
	    var targets = root.querySelectorAll('[ac-' + directive + ']');
	    if (root.getAttribute('ac-' + directive)) {
	        var obj = _event.createEventObject.call(this, root, directive, data, loopParams);
	        array.get ? array.get(this).push(obj) : array.push(obj);
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = targets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var elem = _step3.value;

	            var _obj2 = _event.createEventObject.call(this, elem, directive, data, loopParams);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports._events = _events;
	exports.removeEventListeners = removeEventListeners;
	exports.createEventObject = createEventObject;

	var _private = __webpack_require__(13);

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

	function createEventObject(elem, event, data, loopParams) {
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

	    if (this.props[functionName]) {
	        throw new Error('Duplicate identifier: ' + functionName + '; Rename method or variable in props');
	    }

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
	                        if (res.split('.')[0] === loopParams && loopParams.iterator) {
	                            arg = _this.getPropsByScope(res, data, loopParams);
	                        } else if (res === '$event') {
	                            arg = e;
	                        } else if (res === 'index') {
	                            arg = loopParams.index;
	                        } else if (res === 'key') {
	                            arg = loopParams.key;
	                        } else {
	                            arg = getInputArgs(res, _this.getPropsByScope(res, data, loopParams));
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

	                            (_functionName = _this[functionName]).call.apply(_functionName, [_this].concat(args));
	                        });
	                    } else {
	                        var _functionName2;

	                        (_functionName2 = _this[functionName]).call.apply(_functionName2, [_this].concat(args));
	                    }
	                });
	            } else {
	                console.warn('You have no function in your component');
	            }
	        }
	    };

	    return newEvent;
	}

	function getInputArgs(res, value) {
	    var type = void 0;
	    var arg = void 0;
	    try {
	        type = _typeof(new Function('return ' + res).apply(this));
	    } catch (e) {
	        type = undefined;
	    }

	    switch (type) {
	        case 'boolean':
	        case 'string':
	        case 'number':
	        case 'object':
	            arg = new Function('return ' + res).apply(this);
	            break;

	        default:
	            arg = value;
	            break;
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
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENTS_NAMES = exports.EVENTS_NAMES = ['click', 'keyup', 'change', 'mouseout', 'mouseover', 'mouseenter', 'mouseleave', 'mousedown', 'mouseup', 'scroll', 'mousewheel', 'submit', 'focus', 'blur', 'dragstart', 'dragend'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._model = _model;

	var _core = __webpack_require__(6);

	function _model(array, loopParams, collectionName, data) {
	    var _this = this;

	    array.forEach(function (item) {

	        if (item.attr === loopParams) {
	            throw new Error('Cannot assign to a reference or variable; ' + _this.constructor.name + '; ' + collectionName);
	        }
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
	                    item.elem.addEventListener('input', function (e) {
	                        _this.setComponentVariable(item.attr, e.currentTarget.value, loopParams, collectionName, data);
	                    }, false);
	                    break;
	            }
	        }

	        if (_core.Utils.isCustomElement(item.elem)) {
	            item.elem.addEventListener('modelChange', function (e) {
	                _this.setComponentVariable(item.attr, e.detail);
	            }, false);
	        }
	    });
	}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._attr = _attr;
	function _attr(array, data, loopParams) {
	    var _this = this;

	    array.forEach(function (item) {
	        var array = item.attr.split(',');

	        array.forEach(function (prop) {
	            var params = prop.replace(/ +/g, "").split(':');
	            var attrName = params[0];
	            // let variable = params[1].split('.');
	            var r = void 0; //= this.getComponentVariable(variable, data);

	            r = _this.getPropsByScope(params[1], data, loopParams);

	            r || r === 0 ? item.elem.setAttribute(attrName, r) : item.elem.removeAttribute(attrName);
	        });
	    });
	}

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._link = _link;

	var _core = __webpack_require__(6);

	function _link(array, data, loopParams) {
	    var _this = this;

	    array.forEach(function (item) {
	        item.elem.removeEventListener('click', item.callback, false); // remove previous handler

	        var route = item.attr; //TemplateEngine(item.attr, data || this);

	        var regExp = /{{([^%>]+)?}}/g;
	        var matches = item.attr.match(regExp);
	        var params = regExp.exec(item.attr);
	        if (params) {

	            var r = void 0; //= this.getComponentVariable(params[1].split('.'), data);
	            // let variable = params[1].split('.');

	            r = _this.getPropsByScope(params[1], data, loopParams);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._outside = _outside;

	var _private = __webpack_require__(13);

	var _core = __webpack_require__(6);

	function _outside(array) {
	    var _this = this;

	    array.forEach(function (item) {
	        var attr = item.attr;

	        _this.setSubscriptions(_core.GlobalEvents.click.sub(function (res) {
	            if (res.e) {
	                var ouside = _this.shadow ? item.elem.contains(res.e.path[0]) : item.elem.contains(res.e.target);
	                if (!ouside) {
	                    _this[attr] && _this[attr].call(_this, res.e);
	                }
	            }
	        }));
	    });
	}

/***/ }),
/* 37 */
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
/* 38 */
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
	            this.root.style[styleName] = r + (hostStyles[styleName].suffix || '');
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
/* 39 */
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
	        var formControls = item.elem.querySelectorAll('[ac-form-control]');
	        formControls = Array.prototype.map.call(formControls, function (r) {
	            var attr = r.getAttribute('ac-form-control');
	            r.removeAttribute('ac-form-control');
	            r.dataset.name = attr;
	            return r;
	        });

	        var formGroup = _this.getComponentVariable(item.attr.split('.'));

	        if (formGroup) {
	            formGroup.setComponent(_this);
	            item.elem.setAttribute('novalidate', 'novalidate');
	            formControls.forEach(function (control) {
	                var attr = control.dataset.name;
	                if (formGroup.controls[attr]) {
	                    formGroup.controls[attr].setElem(control);;
	                } else {
	                    throw new Error('Control doesn\'t exist; ' + attr);
	                }
	            });

	            item.elem.addEventListener('modelChange', function (e) {
	                var attr = e.target.dataset.name;
	                setValues(formControls, attr, e, item, formGroup);
	            }, false);

	            item.elem.addEventListener('input', function (e) {
	                var attr = e.target.dataset.name;
	                setValues(formControls, attr, e, item, formGroup);
	            }, false);

	            item.elem.addEventListener('change', function (e) {
	                var attr = e.target.dataset.name;
	                setValues(formControls, attr, e, item, formGroup);
	            }, false);

	            item.elem.addEventListener('submit', function (e) {
	                var focusState = false;

	                formControls.forEach(function (target) {
	                    var attr = target.dataset.name;
	                    var control = formGroup.controls[attr];
	                    if (control.isValid() === false && !focusState) {
	                        focusState = true;
	                        control.markAsDirty();
	                        control.validate();
	                        if (_core.Utils.isCustomElement(target)) {
	                            target.COMPONENT._onFocus();
	                            target.COMPONENT._onModelChange(control.value, control.dirty && !control.isValid());
	                        } else {
	                            target.focus();
	                        }
	                    }
	                });

	                formGroup._validate();
	            }, true);
	        }
	    });
	}

	function setValues(formControls, attr, event, item, formGroup) {
	    formControls.forEach(function (elem) {
	        if (elem.dataset.name === attr && (elem.localName === 'input' || elem.localName === 'textarea')) {
	            switch (elem.type) {
	                case 'checkbox':
	                    if (attr) {
	                        var checkboxes = item.elem.querySelectorAll('input[type="checkbox"]:checked');
	                        var values = Array.prototype.map.call(checkboxes, function (r) {
	                            return r.value;
	                        }).filter(function (r) {
	                            return r;
	                        });
	                        if (!values.length) {
	                            values = '';
	                        }
	                        formGroup.setValue(attr, values);
	                    }
	                    break;
	                case 'radio':
	                    if (attr) {
	                        formGroup.setValue(attr, event.target.value);
	                    }
	                    break;
	                case 'text':
	                case 'email':
	                case 'password':
	                case 'textarea':
	                    formGroup.setValue(attr, event.target.value);
	                    elem.value = event.target.value;
	                    break;
	            }
	        } else if (elem.dataset.name === attr && _core.Utils.isCustomElement(elem)) {
	            formGroup.setValue(attr, event.detail);
	        }
	    });
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._customDirective = _customDirective;

	var _component = __webpack_require__(12);

	var _api = __webpack_require__(21);

	var _api2 = _interopRequireDefault(_api);

	var _private = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _customDirective(array) {
	    var _this = this;

	    _api2.default.CUSTOM_DIRECTIVES.forEach(function (directive) {
	        var array = _private.PRIVATES.CUSTOM_DIRECTIVES[directive.params.selector].get(_this);
	        if (array && array.length) {
	            array.forEach(function (r) {
	                r.directive.onUpdate();
	            });
	        }
	    });
	}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._computed = _computed;
	function _computed(params) {
	    if (params) {
	        for (var computed in params) {
	            try {
	                var newValue = params[computed].call(this);
	                this.props.set(computed, newValue, true);
	            } catch (err) {
	                throw new Error(err + '; ' + this.constructor.name);
	            }
	        }
	    }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._dropdown = _dropdown;

	var _core = __webpack_require__(6);

	function _dropdown(array, data, loopParams) {
	    var _this = this;

	    array.forEach(function (item) {
	        var component = item.elem.COMPONENT;

	        component.setSubscriptions(_core.GlobalEvents.click.sub(function (res) {
	            if (res.e) {
	                var ouside = _this.shadow ? item.elem.contains(res.e.path[0]) : item.elem.contains(res.e.target);
	                if (!ouside) {
	                    component._outside && component._outside();
	                }
	            }
	        }));

	        component._outside = function () {
	            if (component.props.get('_show')) {
	                component.props.set('_show', false);
	                component.onClose && component.onClose();
	            }
	        };
	        component._open = function () {
	            if (component.getRoot().getAttribute('readonly') === null) {
	                component.props.set('_show', !component.props.get('_show'));
	                component.onOpen && component.onOpen();
	            }
	        };

	        component._close = function () {
	            if (component.props.get('_show')) {
	                component.props.set('_show', false);
	            }
	        };

	        component._onFocus = function () {
	            component._open();
	        };
	    });
	}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Inject;

	var _api = __webpack_require__(21);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Inject(decoratorParams) {
	    return function decorator(Class) {
	        var func = function func() {
	            var injected = [];
	            for (var key in decoratorParams) {
	                if (decoratorParams.hasOwnProperty(key) && decoratorParams[key]) {
	                    var injectedService = _api2.default.injectorGet(decoratorParams[key], Class);
	                    injected.push(injectedService);
	                }
	            }

	            var instance = new (Function.prototype.bind.apply(Class, [null].concat(injected)))();
	            return instance;
	        };

	        func.class = Class;

	        return func;
	    };
	}

/***/ }),
/* 44 */
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
/* 45 */
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

	    this.click = new _observable.Observable({});
	    window.addEventListener('click', function (e) {
	        _this.click.reset({ e: e });
	    }, true);
	};

	exports.default = new GlobalEvents();

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Chart = exports.Sortable = undefined;

	var _sortable = __webpack_require__(47);

	var _sortable2 = _interopRequireDefault(_sortable);

	var _aceChart = __webpack_require__(48);

	var _aceChart2 = _interopRequireDefault(_aceChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Sortable = _sortable2.default;
	exports.Chart = _aceChart2.default;

/***/ }),
/* 47 */
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
	                this.onDragEnd.call(this, this.root.querySelectorAll('[draggable]'));
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LineChartComponent = exports.BarChartComponent = exports.TreeDebugComponent = exports.DatepickerComponent = undefined;

	var _datepicker = __webpack_require__(50);

	var _tree = __webpack_require__(52);

	var _tree2 = _interopRequireDefault(_tree);

	var _barChart = __webpack_require__(57);

	var _lineChart = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.DatepickerComponent = _datepicker.DatepickerComponent;
	exports.TreeDebugComponent = _tree2.default;
	exports.BarChartComponent = _barChart.BarChartComponent;
	exports.LineChartComponent = _lineChart.LineChartComponent;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DatepickerComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _utils = __webpack_require__(24);

	var _decorators = __webpack_require__(8);

	var Decorators = _interopRequireWildcard(_decorators);

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
	    props: function props() {
	        return {
	            daysOfWeekShort: _utils.Utils.daysOfWeekShort,
	            formattedDate: _utils.Utils.getDateByFormat(TODAY, 'yyyy-mm-dd')
	        };
	    }
	}), _dec(_class = function () {
	    function DatepickerComponent(params) {
	        _classCallCheck(this, DatepickerComponent);
	    }

	    _createClass(DatepickerComponent, [{
	        key: '_onModelChange',
	        value: function _onModelChange(value, error) {

	            this.props.set({
	                model: new Date(value),
	                formattedDate: _utils.Utils.getDateByFormat(value, 'yyyy-mm-dd')
	            });
	            this.currentDate = new Date(value); // init view

	            this.update();
	        }
	    }, {
	        key: 'INPUT',
	        value: function INPUT(params) {
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
	                this._close();
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
	            var minDate = new Date(this.minDate);
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
/* 51 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<div ac-outside=\"_outside\" class=\"relative\">\r\n\t<div  style=\"width: 100%\" class=\"app-form__label__input\">\r\n\t\t<input type=\"text\" @click=\"_open($event)\" class=\"app-form__label__input full-width\" readonly ac-value=\"formattedDate\">\r\n\t\t<div class=\"app-form__border\"></div>\r\n\t\t<!-- <img class=\"datepicker-icon\" src=\"../../assets/img/hanging-calendar.svg\" alt=\"\"> -->\r\n\t</div>\r\n\r\n\t<div class=\"j-calendar\" ac-if=\"_show\" >\r\n\t    <div class=\"j-calendar__wrap\">\r\n\t        <div class=\"j-calendar__item\">\r\n\t            <div class=\"j-calendar__header\">\r\n\t                <div class=\"j-calendar__header__left\" @click=\"prev($event)\">\r\n\t                    <span>prev</span>\r\n\t                </div>\r\n\t                <div class=\"j-calendar__header__center\">\r\n\t\t                <span ac-value=\"currentMonth\"></span>\r\n\t\t                <span style=\"margin-left: 7px;\" ac-value=\"currentYear\"></span>\r\n\t                </div>\r\n\t                <div class=\"j-calendar__header__right\" @click=\"next($event)\">\r\n\t                    <span>Next</span>\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"j-calendar__content\">\r\n\t                <div class=\"j-calendar__days\">\r\n\t                    <div class=\"j-calendar__days__item\" ac-for=\"let item of daysOfWeekShort\">\r\n\t\t\t\t\t\t\t<span ac-value=\"item.index\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t                </div>\r\n\t                <div class=\"j-calendar__date\">\r\n\t                    <div class=\"j-calendar__date__item\" \r\n\t                    ac-class=\"j-calendar__date__item--today:item.today, j-calendar__date__item--active:item.selected, j-calendar__date__item--inactive: item.inactive\"\r\n\t                    ac-for=\"let item of countOfDays\"\r\n\t                    @click=\"select($event, item)\">{{item.index}}</div>\r\n\t                </div>\r\n\t            </div>\r\n\t        </div>\r\n\t    </div>\r\n\t</div>\r\n</div>\r\n";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _tree = __webpack_require__(53);

	var _treeItem = __webpack_require__(55);

	exports.default = [_tree.AceTreeComponent, _treeItem.AceTreeItemComponent];

/***/ }),
/* 53 */
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

	var _treeComponent = __webpack_require__(54);

	var _treeComponent2 = _interopRequireDefault(_treeComponent);

	var _api = __webpack_require__(21);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AceTreeComponent = exports.AceTreeComponent = (_dec = Decorators.ComponentDecorator({
	    selector: 'app-tree-debug',
	    template: _treeComponent2.default,
	    props: function props() {
	        return {
	            components: [],
	            visible: true
	        };
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
	            this.getChildren(_api2.default.rootInstance);
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
/* 54 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<button @click=\"load\">Load</button>\r\n<app-tree-item-debug ac-for=\"components\"></app-tree-item-debug>\r\n<style>\r\napp-tree-item-debug {\r\n    display: block;\r\n    padding: 5px 0;\r\n}\r\n\r\napp-tree-item-debug.children {\r\n    padding-left: 25px;\r\n}\r\n\r\n.toggle-btn {\r\n    cursor: pointer;\r\n    width: 12px;\r\n    height: 12px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: -22px;\r\n}\r\n.toggle-btn:before {\r\n    content: '\\25B6';\r\n    color: #757575;\r\n}\r\n.toggle-btn.active:before {\r\n    content: '\\25BC';\r\n    color: #757575;\r\n}\r\n\r\n.has-children {\r\n\tcursor: pointer;\r\n}\r\n</style>";

/***/ }),
/* 55 */
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

	var _component = __webpack_require__(12);

	var _treeItemComponent = __webpack_require__(56);

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
	    props: function props() {
	        return {
	            visible: false
	            // components: []
	        };
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
/* 56 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<div style=\"position: relative;\">\r\n\t<span @click=\"toggle\" class=\"toggle-btn\" ac-if=\"this.children.length\" ac-class=\"active: !this.visible\"></span>\r\n\t<span @click=\"toggle\" class=\"component-name\" ac-class=\"has-children: this.children.length\" ac-value=\"name\"></span>\r\n</div>\r\n\r\n<div ac-class=\"hidden: this.visible\">\r\n\t<app-tree-item-debug ac-for=\"let item of children\" class=\"children\"></app-tree-item-debug>\r\n</div>\r\n";

/***/ }),
/* 57 */
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

	var _barChart = __webpack_require__(58);

	var _barChart2 = _interopRequireDefault(_barChart);

	var _chart = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BarChartComponent = exports.BarChartComponent = (_dec = Decorators.ComponentDecorator({
	    selector: 'ace-bar-chart',
	    template: _barChart2.default,
	    props: function props() {
	        return {
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
	        };
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
	                    name: item.name,
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
/* 58 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<svg ac-ref=\"svg\" ac-attr=\"height: height, width: width\" ac-if=\"series.length\">\r\n    <rect class=\"highcharts-background\" x=\"0\" y=\"0\" ac-attr=\"height: height, width: width, fill: background\" rx=\"0\" ry=\"0\"></rect>\r\n    <text ac-attr=\"x: labelX\" text-anchor=\"middle\" class=\"acechart-title\" y=\"24\">\r\n        <tspan ac-value=\"title\"></tspan>\r\n    </text>\r\n    <text ac-attr=\"x: yLabelX, y: yLabelY, transform: yLabelTransform\" text-anchor=\"middle\" class=\"acecharts-axis-title\">\r\n        <tspan ac-value=\"yAxis.label\"></tspan>\r\n    </text>\r\n    <g class=\"acechart-grid acechart-yaxis-grid \">\r\n        <line ac-for=\"let item of xGrid\" ac-attr=\"x1: item.x1, x2: item.x2, y1: item.y1, y2: item.y2\" stroke=\"black\" stroke-width=\"1\" shape-rendering=\"crispEdges\" />\r\n    </g>\r\n    <g class=\"acechart-group\">\r\n        <rect ac-for=\"let item of series\" @mouseenter=\"mouseenter($event, item)\" @mouseleave=\"mouseleave($event)\" ac-attr=\"x: item.x, y: item.y, stroke: item.stroke, fill: item.fill, stroke-width: item.strokeWidth, width: item.width, height: item.height\"></rect>\r\n    </g>\r\n    <!--     <g class=\"acechart-axis-labels acechart-xaxis-labels \" transform=\"translate(40,0) scale(1 1)\">\r\n        <text ac-for=\"xLabels\" ac-attr=\"x: x, y: y\" text-anchor=\"start\" transform=\"translate(0,0)\">\r\n            <tspan ac-value=\"name\"></tspan>\r\n        </text>\r\n    </g> -->\r\n    <g class=\"acechart-axis-labels acechart-xaxis-labels \">\r\n        <text ac-for=\"let item of xGroupLabels\" ac-attr=\"x: item.x, y: item.y\" text-anchor=\"start\" transform=\"translate(0,0)\">\r\n            <tspan ac-value=\"item.name\"></tspan>\r\n        </text>\r\n    </g>\r\n    <g class=\"acechart-axis-labels acechart-yaxis-labels \">\r\n        <text ac-for=\"let item of yLabels\" ac-attr=\"x: item.x, y: item.y\" text-anchor=\"end\" transform=\"translate(0,0)\">\r\n            <tspan ac-value=\"item.name\"></tspan>\r\n        </text>\r\n    </g>\r\n</svg>\r\n<div class=\"acecharts-tooltip\" ac-class=\"open: tooltipIsShown\" ac-style=\"top: tooltipCoords.y, left: tooltipCoords.x\">\r\n    <div style=\"font-size: 12px;\">Languages</div>\r\n    <br>\r\n    <span ac-value=\"tooltipSelected.name\"></span>\r\n    <b ac-value=\"tooltipSelected.value\"></b>% of total\r\n</div>\r\n<div ac-if=\"!series.length\">Bar chart. There is no data to show</div>\r\n<style>\r\nace-bar-chart {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.acecharts-tooltip.open {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n\r\n\r\n.acecharts-tooltip {\r\n    position: absolute;\r\n    background: #fbf5f5c9;\r\n    /*width: 200px;*/\r\n    top: 0;\r\n    /*height: 100px;*/\r\n    transition: 0.2s;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    padding: 10px;\r\n    border: 1px solid #ddddde;\r\n    border-radius: 2px;\r\n}\r\n\r\n.acecharts-tooltip:after, .acecharts-tooltip:before {\r\n    top: 100%;\r\n    left: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n}\r\n\r\n.acecharts-tooltip:after {\r\n    border-color: rgba(247, 247, 247, 0);\r\n    border-top-color: #f7f7f7;\r\n    border-width: 10px;\r\n    margin-left: -10px;\r\n}\r\n.acecharts-tooltip:before {\r\n    border-color: rgba(221, 221, 222, 0);\r\n    border-top-color: #ddddde;\r\n    border-width: 11px;\r\n    margin-left: -11px;\r\n}\r\n\r\n.acechart-group rect {\r\n    /*fill: #5699dc;*/\r\n    transition: 0.5s;\r\n}\r\n\r\n.acechart-group rect:hover {\r\n    /*fill: #3e6a96;*/\r\n    opacity: 0.7;\r\n}\r\n\r\n.acechart-xaxis-labels text {\r\n    cursor: default;\r\n    font-size: 11px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n    transition: 0.5s;\r\n}\r\n\r\n.acecharts-axis-title {\r\n    cursor: default;\r\n    font-size: 12px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n}\r\n\r\n.acechart-title {\r\n    cursor: default;\r\n    font-size: 16px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n    transition: 0.5s;\r\n}\r\n\r\n.acechart-yaxis-labels text {\r\n    cursor: default;\r\n    font-size: 11px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n}\r\n\r\n.acechart-yaxis-grid line {\r\n    stroke: #ccc;\r\n}\r\n\r\n.acechart-group {}\r\n</style>";

/***/ }),
/* 59 */
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
/* 60 */
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

	var _lineChart = __webpack_require__(61);

	var _lineChart2 = _interopRequireDefault(_lineChart);

	var _chart = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LineChartComponent = exports.LineChartComponent = (_dec = Decorators.ComponentDecorator({
	    selector: 'ace-line-chart',
	    template: _lineChart2.default,
	    props: function props() {
	        return {
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
	        };
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
/* 61 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<svg ac-ref=\"svg\" ac-attr=\"height: height, width: width\" ac-if=\"series.length\">\r\n    <rect class=\"acechart-background\" x=\"0\" y=\"0\" ac-attr=\"height: height, width: width, fill: background\" rx=\"0\" ry=\"0\"></rect>\r\n    <text ac-attr=\"x: labelX\" text-anchor=\"middle\" class=\"acechart-title\" y=\"24\">\r\n        <tspan ac-value=\"title\"></tspan>\r\n    </text>\r\n    <g class=\"acechart-grid acechart-yaxis-grid \">\r\n        <line ac-for=\"let item of xGrid\" ac-attr=\"x1: item.x1, x2: item.x2, y1: item.y1, y2: item.y2\" stroke=\"black\" stroke-width=\"1\" shape-rendering=\"crispEdges\" />\r\n    </g>\r\n    <text ac-attr=\"x: yLabelX, y: yLabelY, transform: yLabelTransform\" text-anchor=\"middle\" class=\"acecharts-axis-title\">\r\n        <tspan ac-value=\"yAxis.label\"></tspan>\r\n    </text>\r\n    <g class=\"acechart-axis-labels acechart-yaxis-labels \">\r\n        <text ac-for=\"let item of yLabels\" ac-attr=\"x: item.x, y: item.y\" text-anchor=\"end\" transform=\"translate(0,0)\">\r\n            <tspan ac-value=\"item.name\"></tspan>\r\n        </text>\r\n    </g>\r\n    <g class=\"acechart-series\">\r\n        <path ac-for=\"let item of series\" fill=\"none\" ac-attr=\"d: item.d, stroke: item.stroke\" class=\"acechart-graph\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path>\r\n    </g>\r\n\r\n    <g class=\"acechart-markers\">\r\n        <g ac-for=\"let item of markers\"> \r\n            <rect ac-for=\"let item of items\" @mouseenter=\"mouseenter($event, item)\" @mouseleave=\"mouseleave($event)\" ac-attr=\"x: item.x, y: item.y, fill: item.fill, width: item.width, height: item.height\" ></rect>\r\n        </g>\r\n    </g>\r\n\r\n</svg>\r\n<div class=\"acecharts-tooltip\" ac-class=\"open: tooltipIsShown\" ac-style=\"top: tooltipCoords.y, left: tooltipCoords.x\">\r\n    <div style=\"font-size: 12px;\">Languages</div>\r\n    <br>\r\n    <span ac-value=\"tooltipSelected.name\"></span>\r\n    <b ac-value=\"tooltipSelected.value\"></b>\r\n</div>\r\n<div ac-if=\"!series.length\">Bar chart. There is no data to show</div>\r\n<style>\r\nace-line-chart {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.acecharts-tooltip.open {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.acechart-series path , .acechart-markers rect{\r\n    transition: 0.5s;\r\n}\r\n\r\n.acecharts-tooltip {\r\n    position: absolute;\r\n    background: #fbf5f5c9;\r\n    /*width: 200px;*/\r\n    top: 0;\r\n    /*height: 100px;*/\r\n    transition: 0.2s;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    padding: 10px;\r\n    border: 1px solid #ddddde;\r\n    border-radius: 2px;\r\n}\r\n\r\n.acecharts-tooltip:after,\r\n.acecharts-tooltip:before {\r\n    top: 100%;\r\n    left: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n}\r\n\r\n.acecharts-tooltip:after {\r\n    border-color: rgba(247, 247, 247, 0);\r\n    border-top-color: #f7f7f7;\r\n    border-width: 10px;\r\n    margin-left: -10px;\r\n}\r\n\r\n.acecharts-tooltip:before {\r\n    border-color: rgba(221, 221, 222, 0);\r\n    border-top-color: #ddddde;\r\n    border-width: 11px;\r\n    margin-left: -11px;\r\n}\r\n\r\n.acechart-group rect {\r\n    /*fill: #5699dc;*/\r\n    transition: 0.5s;\r\n}\r\n\r\n.acechart-group rect:hover {\r\n    /*fill: #3e6a96;*/\r\n    opacity: 0.7;\r\n}\r\n\r\n.acechart-xaxis-labels text {\r\n    cursor: default;\r\n    font-size: 11px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n    transition: 0.5s;\r\n}\r\n\r\n.acecharts-axis-title {\r\n    cursor: default;\r\n    font-size: 12px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n}\r\n\r\n.acechart-title {\r\n    cursor: default;\r\n    font-size: 16px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n    transition: 0.5s;\r\n}\r\n\r\n.acechart-yaxis-labels text {\r\n    cursor: default;\r\n    font-size: 11px;\r\n    font-family: Verdana, sans-serif;\r\n    fill: #666666;\r\n}\r\n\r\n.acechart-yaxis-grid line {\r\n    stroke: #ccc;\r\n}\r\n\r\n.acechart-group {}\r\n</style>";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HttpModule = function () {
	    function HttpModule() {
	        _classCallCheck(this, HttpModule);
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
	            var _this = this;

	            return new Promise(function (resolve, reject) {
	                var xhr = new XMLHttpRequest();

	                xhr.open(opts.method, opts.url);
	                xhr.onprogress = function (event) {
	                    if (_this.onprogressCallback) {
	                        _this.onprogressCallback.call(_this, event);
	                    }
	                };
	                xhr.onload = function () {
	                    if (this.status >= 200 && this.status < 300) {
	                        resolve(JSON.parse(xhr.response));
	                    } else {
	                        try {
	                            reject({
	                                status: this.status,
	                                statusText: xhr.statusText,
	                                response: JSON.parse(xhr.response)
	                            });
	                        } catch (err) {
	                            console.warn('Server error');
	                        }
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

	        // getParams(params) {
	        //     if (params && typeof params === 'object') {
	        //         params = Object.keys(params).map(function(key) {
	        //             return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
	        //         }).join('&');
	        //     }
	        //     return params;
	        // }


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

	        // setServerUrl(url) {
	        //     this.server = url;
	        // }

	    }, {
	        key: 'setInterceptor',
	        value: function setInterceptor() {
	            //TODO
	        }
	    }]);

	    return HttpModule;
	}();

	var Http = new HttpModule();
	exports.Http = Http;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ModalController = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var instances = [];

	var ModalController = exports.ModalController = function () {
	    function ModalController(component, props) {
	        _classCallCheck(this, ModalController);

	        this.props = _extends({}, props);
	        this.root = document.createElement('app-modal');
	        this.root.style.zIndex = 999;
	        this.component = component;
	        this.onCompleteCallback = null;
	        this.init();
	    }

	    _createClass(ModalController, [{
	        key: 'init',
	        value: function init() {
	            var comp = new this.component(this.root, {}, this, this.props);
	            document.body.appendChild(this.root);

	            var overlay = document.createElement('app-modal-overlay');
	            overlay.addEventListener('click', function (e) {
	                ModalController.close(comp);
	            }, false);
	            this.root.appendChild(overlay);

	            instances.push(this);
	        }
	    }, {
	        key: 'onComplete',
	        value: function onComplete(fn) {
	            this.onCompleteCallback = fn;
	        }
	    }], [{
	        key: 'close',
	        value: function close(comp) {
	            var elements = comp.root.querySelectorAll('*');
	            elements.forEach(function (node) {
	                if (_utils.Utils.isCustomElement(node)) {
	                    node.COMPONENT && node.COMPONENT.destroy();
	                }
	            });

	            document.body.removeChild(comp.root);
	            comp.destroy();
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm(comp, value) {
	            var instance = instances.filter(function (r) {
	                return r.componentInstance === comp;
	            })[0];
	            if (instance) {
	                if (instance.onCompleteCallback) {
	                    instance.onCompleteCallback.call(this, value);
	                }
	                instance.close();
	            }
	        }
	    }, {
	        key: 'dismiss',
	        value: function dismiss(comp) {
	            var instance = instances.filter(function (r) {
	                return r.componentInstance === comp;
	            })[0];
	            if (instance) {
	                instance.close();
	            }
	        }
	    }]);

	    return ModalController;
	}();

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FormGroup = exports.FormControl = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FormControl = exports.FormControl = function () {
	    function FormControl(params, parent) {
	        _classCallCheck(this, FormControl);

	        this.valid = true;
	        this.dirty = false;
	        this.value = params[0] || '';
	        this.initValue = params[0] || '';
	        this.validators = params[1] || [];
	        // this.parent = parent;
	        Object.defineProperty(this, 'parent', { value: parent, writable: false });
	        this.errors = {};
	    }

	    _createClass(FormControl, [{
	        key: 'setElem',
	        value: function setElem(elem) {
	            this.elem = elem;
	            this.setValue(this.value, true, false);
	        }
	    }, {
	        key: 'setValue',
	        value: function setValue(value) {
	            var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	            var validate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	            this.value = value;
	            if (this.elem && _utils.Utils.isTextField(this.elem)) {
	                this.elem.value = value;
	            }

	            if (this.elem && _utils.Utils.isCustomElement(this.elem)) {
	                if (this.elem.COMPONENT) {
	                    this.elem.COMPONENT._onModelChange(value, this.dirty && !this.isValid());
	                } else {
	                    throw new Error(this.elem.localName + ' is undefined');
	                }
	            }

	            this.parent.getValues();
	            if (!silent) {
	                this.markAsDirty();
	                this.parent.onChangeCallback();
	            }

	            if (validate) {
	                this.parent._validate();
	            }
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
	            this.value = this.initValue;
	            if (this.elem && _utils.Utils.isTextField(this.elem)) {
	                this.elem.value = this.initValue;
	            }
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

	            this._validate();
	            this.getValues();
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
	            if (typeof name === 'string') {
	                this.controls[name].setValue(value);
	                this.getValues();
	            } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {

	                for (var key in name) {
	                    this.controls[key].setValue(name[key], false, false);
	                }

	                this.getValues();
	                this.onChangeCallback();
	                this._validate();
	            }
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
/* 65 */
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
/* 66 */
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

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HomeComponent = undefined;

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _homeComponent = __webpack_require__(68);

	var _homeComponent2 = _interopRequireDefault(_homeComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeComponent = exports.HomeComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-home',
	    template: _homeComponent2.default
	}), _dec(_class = function HomeComponent(params) {
	    _classCallCheck(this, HomeComponent);
	}) || _class);

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<div class=\"app-container\">\r\n  <h1>ACE JS</h1>\r\n  <p><b>AceJs</b> - is a front-end framework based on web components technology.</p>\r\n  <button type=\"\" ac-link=\"documentation\" class=\"app-btn\">GET STARTED</button>\r\n</div>\r\n";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RootComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _rootComponent = __webpack_require__(70);

	var _rootComponent2 = _interopRequireDefault(_rootComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RootComponent = exports.RootComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-root',
	    template: _rootComponent2.default
	}), _dec(_class = function () {
	    function RootComponent(params) {
	        _classCallCheck(this, RootComponent);
	    }

	    _createClass(RootComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            // Http.getCatalog('/catalog');
	        }
	    }]);

	    return RootComponent;
	}()) || _class);

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<app-header></app-header>\r\n<route-switcher></route-switcher>\r\n<!-- <app-footer></app-footer> -->\r\n<!-- <app-notifications></app-notifications>\r\n<app-confirm-modal></app-confirm-modal> -->";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _decorators = __webpack_require__(8);

	var _headerComponent = __webpack_require__(72);

	var _headerComponent2 = _interopRequireDefault(_headerComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HeaderComponent = exports.HeaderComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-header',
	    template: _headerComponent2.default
	}), _dec(_class = function () {
	    function HeaderComponent(root) {
	        _classCallCheck(this, HeaderComponent);
	    }

	    _createClass(HeaderComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }, {
	        key: 'test',
	        value: function test(e) {}
	    }, {
	        key: 'keyup',
	        value: function keyup() {
	            console.log(1);
	        }
	    }]);

	    return HeaderComponent;
	}()) || _class);

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<header>\r\n    <!-- <span @click=\"test\" ac-emod=\"stop, prevent, enter\">1234</span> -->\r\n    <!-- <input @keyup=\"keyup\" ac-kmod=\"enter\" type=\"text\"> -->\r\n    <div class=\"logo\">\r\n        <a class=\"gantt--main-menu-item\" ac-link=\"/\">\r\n            ACE JS\r\n        </a>\r\n    </div>\r\n    <ul class=\"gantt--main-menu\">\r\n        <li><a class=\"gantt--main-menu-item\" ac-link=\"documentation\">Documentation</a></li>\r\n        <li><a class=\"gantt--main-menu-item\" ac-link=\"controls\">Controls</a></li>\r\n        <li><a class=\"gantt--main-menu-item\" ac-link=\"plugins/sortable\">Plugins</a></li>\r\n        <!-- <li><a class=\"gantt--main-menu-item\" ac-link=\"todo\">TODO MVVM</a></li> -->\r\n    </ul>\r\n</header>";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ControlsComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _controlsComponent = __webpack_require__(74);

	var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ControlsComponent = exports.ControlsComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-controls',
	    template: _controlsComponent2.default
	}), _dec(_class = function () {
	    function ControlsComponent(options) {
	        _classCallCheck(this, ControlsComponent);
	    }

	    _createClass(ControlsComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            this.props.set({
	                controls: [{
	                    name: 'Datepicker',
	                    route: 'controls/datepicker'
	                }],

	                date: new Date()
	            });
	        }
	    }]);

	    return ControlsComponent;
	}()) || _class);

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<main>\r\n\r\n    <div class=\"main-content justify-space-between\">\r\n\r\n        <ul class=\"main-list\">\r\n            <li ac-for=\"let item of controls\">\r\n                <a class=\"list-head\" ac-value=\"name\" ac-link=\"{{route}}\" ></a>\r\n            </li>\r\n        </ul>\r\n\r\n        <div class=\"plugins-section\">\r\n            <!-- <child-route-switcher></child-route-switcher> -->\r\n        \r\n        \t<h3>Datepicker</h3>\r\n            <div style=\"width: 200px\">\r\n                <app-datepicker ac-dropdown ac-model=\"date\"></app-datepicker>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>\r\n\r\n\r\n\r\n";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NotFoundComponent = undefined;

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _notFoundComponent = __webpack_require__(76);

	var _notFoundComponent2 = _interopRequireDefault(_notFoundComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NotFoundComponent = exports.NotFoundComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-not-found',
	    template: _notFoundComponent2.default
	}), _dec(_class = function NotFoundComponent(options) {
	    _classCallCheck(this, NotFoundComponent);
	}) || _class);

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<!-- <app-header></app-header> -->\r\n<h1 style=\"text-align: center\">Page not found</h1>";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _documentation = __webpack_require__(78);

	var _docQuickStart = __webpack_require__(80);

	var _docArchitecture = __webpack_require__(82);

	var _docComponent = __webpack_require__(85);

	var _docLifecycle = __webpack_require__(87);

	var _docUtils = __webpack_require__(89);

	var _directives = __webpack_require__(91);

	var _customDirectives = __webpack_require__(93);

	var _docInterpolation = __webpack_require__(95);

	var _docConditional = __webpack_require__(97);

	var _docListRendering = __webpack_require__(99);

	var _docForms = __webpack_require__(101);

	var _docEvents = __webpack_require__(103);

	var _docModules = __webpack_require__(105);

	var _docSmartObject = __webpack_require__(107);

	var _docHowTo = __webpack_require__(109);

	var _docRouterConfig = __webpack_require__(111);

	var _docHttpModule = __webpack_require__(113);

	var _docHttpMethods = __webpack_require__(115);

	var _exampleChild = __webpack_require__(117);

	exports.default = [_documentation.DocumentationComponent, _docQuickStart.DocQuickStartComponent, _docArchitecture.DocArchitectureComponent, _docHowTo.DocHowToComponent, _docComponent.DocComponentComponent, _docLifecycle.DocLifecycleComponent, _docUtils.DocUtilsComponent, _directives.DocDirectivesComponent, _customDirectives.DocCustomDirectivesComponent, _docInterpolation.DocInterpolationComponent, _docConditional.DocConditionalComponent, _docListRendering.DocListRenderingComponent, _docForms.DocFormsComponent, _docEvents.DocEventsComponent, _docModules.DocModulesComponent, _docSmartObject.DocSmartObjectComponent, _docRouterConfig.DocRouterConfigComponent, _docHttpModule.HttpModuleComponent, _docHttpMethods.HttpMethodsComponent, _exampleChild.ExampleChildComponent];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocumentationComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _documentationComponent = __webpack_require__(79);

	var _documentationComponent2 = _interopRequireDefault(_documentationComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// import ProjectsStore from 'store/projects.store';

	var DocumentationComponent = exports.DocumentationComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation',
	    template: _documentationComponent2.default
	}), _dec(_class = function () {
	    function DocumentationComponent(params) {
	        _classCallCheck(this, DocumentationComponent);
	    }

	    _createClass(DocumentationComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            // this.getElement('pre').forEach(item => {

	            // });

	            this.props.set({
	                version: ("0.8.15"),
	                'categories': [{
	                    name: 'Getting started',
	                    items: [{
	                        name: 'Quick start',
	                        route: 'documentation'
	                    }, {
	                        name: 'How to install',
	                        roure: 'how-to',
	                        route: 'documentation/how-to-install'
	                    }, {
	                        name: 'Architecture',
	                        route: 'documentation/architecture'
	                    }]
	                }, {
	                    name: 'Component',
	                    items: [{
	                        name: 'Component',
	                        route: 'documentation/component'
	                    }, {
	                        name: 'Lifecycle',
	                        route: 'documentation/lifecycle'
	                    }, {
	                        name: 'Props',
	                        route: 'documentation/props'
	                    }, {
	                        name: 'Modules',
	                        route: 'documentation/modules'
	                    }, {
	                        name: 'Utils',
	                        route: 'documentation/utils'
	                    }]
	                }, {
	                    name: 'Template',
	                    items: [{
	                        name: 'Interpolation',
	                        route: 'documentation/interpolation'
	                    }, {
	                        name: 'Directives',
	                        route: 'documentation/directives'
	                    }, {
	                        name: 'Custom directives',
	                        route: 'documentation/custom-directives'
	                    }, {
	                        name: 'Conditional rendering',
	                        route: 'documentation/conditional-rendering'
	                    }, {
	                        name: 'List rendering',
	                        route: 'documentation/list-rendering'
	                    }, {
	                        name: 'Classes & Styles',
	                        route: 'documentation/classes-styles'
	                    }, {
	                        name: 'Events',
	                        route: 'documentation/events'
	                    }, {
	                        name: 'Forms',
	                        route: 'documentation/forms'
	                    }]
	                }, {
	                    name: 'Data',
	                    items: [{
	                        name: 'Services',
	                        route: 'documentation/services'
	                    }, {
	                        name: 'Observable',
	                        route: 'documentation/smart-object'
	                    }]
	                }, {
	                    name: 'Routing',
	                    items: [{
	                        name: 'Router configuration',
	                        route: 'documentation/router-config'
	                    }, {
	                        name: 'Protectors',
	                        route: 'documentation/route-protectors'
	                    }]
	                }, {
	                    name: 'HTTP',
	                    items: [{
	                        name: 'Http module',
	                        route: 'documentation/http-module'
	                    }, {
	                        name: 'Http methods',
	                        route: 'documentation/http-methods'
	                    }, {
	                        name: 'Hypermedia API',
	                        route: 'documentation/multimedia-api'
	                    }]
	                }]
	            });
	        }
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocumentationComponent;
	}()) || _class);

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<main>\r\n\r\n    <div class=\"main-content justify-space-between\">\r\n\r\n        <ul class=\"main-list\">\r\n            <li style=\"font-size: 14px;padding: 5px; font-weight: 300;\">\r\n                v<small ac-value=\"version\"></small>\r\n            </li>\r\n            <li ac-for=\"let item of categories\">\r\n                <div class=\"list-head\" ac-value=\"item.name\"></div>\r\n                <ol class=\"list\">\r\n                    <li ac-for=\"let item of items\">\r\n                        <a ac-value=\"item.name\" ac-link=\"{{item.route}}\" ac-link-exact=\"true\"></a>\r\n                    </li>\r\n                </ol>\r\n            </li>\r\n        </ul>\r\n\r\n        <div class=\"documentation-section\">\r\n            <child-route-switcher></child-route-switcher>\r\n        </div>\r\n    </div>\r\n</main>";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocQuickStartComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docQuickStartComponent = __webpack_require__(81);

	var _docQuickStartComponent2 = _interopRequireDefault(_docQuickStartComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// import ProjectsStore from 'store/projects.store';


	var count = 100;
	var INDEX = 0;
	var INDEX_VALUE = 100 / count;
	// let state = true;
	var QWERTY = 1;

	var DocQuickStartComponent = exports.DocQuickStartComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-quick-start',
	    template: _docQuickStartComponent2.default,
	    props: function props() {
	        return {
	            particles: []
	        };
	    }
	}), _dec(_class = function () {
	    function DocQuickStartComponent(params) {
	        _classCallCheck(this, DocQuickStartComponent);
	    }

	    _createClass(DocQuickStartComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	        // this.getColors();
	        // setInterval(() => {
	        //     this.getColors();
	        // }, 60	);


	        // getColors() {
	        //     let particles = [];


	        //     // if (INDEX < count /*&& state*/) {
	        //         INDEX += INDEX_VALUE;
	        //     // }

	        //  // if (INDEX < INDEX_VALUE) {
	        //  //     state = true;
	        //  // }


	        //  // if (INDEX >= count || !state) {
	        //  //     INDEX -= INDEX_VALUE;
	        //  //     state = false;
	        //  // }

	        //     for (var i = 0; i <= count; i++) {
	        //     	// let modulo = (i * INDEX_VALUE + INDEX) % count;
	        //      //    particles.push({ name: i, bg: this.perc2color(i * INDEX_VALUE  - modulo) });

	        //      	let val = i * INDEX_VALUE;
	        //         particles.push({ name: i, bg: this.perc2color(i * INDEX_VALUE  ) });
	        //     }

	        //     this.particles = particles;
	        // }

	        // perc2color(perc) {
	        //     var r, g, b = 0;
	        //     if (perc < 50) {
	        //         r = 255;
	        //         g = Math.round(5.1 * perc);
	        //     } else {
	        //         g = 255;
	        //         r = Math.round(510 - 5.10 * perc);
	        //     }
	        //     var h = r * 0x10000 + g * 0x100 + b * 0x1;
	        //     return '#' + ('000000' + h.toString(16)).slice(-6);
	        // }

	        // colorLuminance(hex, lum) {

	        // 	// validate hex string
	        // 	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	        // 	if (hex.length < 6) {
	        // 		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	        // 	}
	        // 	lum = lum || 0;

	        // 	// convert to decimal and change luminosity
	        // 	var rgb = "#", c, i;
	        // 	for (i = 0; i < 3; i++) {
	        // 		c = parseInt(hex.substr(i*2,2), 16);
	        // 		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
	        // 		rgb += ("00"+c).substr(c.length);
	        // 	}

	        // 	return rgb;
	        // }

	        // shadeColor2(color, percent) {   
	        //     var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
	        //     return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
	        // }

	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocQuickStartComponent;
	}()) || _class);

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Tutorial</h3>\r\n<span class=\"text\">This tutorial will help you to create your first app based on our framework</span>\r\n<!-- \r\n<br>\r\n<div style=\"line-height: 0\">\r\n\t\r\n\t<span class=\"experiment\" ac-for=\"let particle of particles\" ac-style=\"background: particle.bg\"></span>\r\n</div>\r\n\r\n<style>\r\n\t.experiment {\r\n\t\twidth: 50px;\r\n\t\theight: 50px;\r\n\t\t/*font-size: 0;*/\r\n\t\tdisplay: inline-block;\r\n\t\tposition: relative;\r\n\t\r\n\r\n\t}\r\n</style> -->";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocArchitectureComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docArchitectureComponent = __webpack_require__(83);

	var _docArchitectureComponent2 = _interopRequireDefault(_docArchitectureComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// import ProjectsStore from 'store/projects.store';

	var DocArchitectureComponent = exports.DocArchitectureComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-architecture',
	    template: _docArchitectureComponent2.default
	}), _dec(_class = function () {
	    function DocArchitectureComponent(params) {
	        _classCallCheck(this, DocArchitectureComponent);
	    }

	    _createClass(DocArchitectureComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocArchitectureComponent;
	}()) || _class);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = "<h3>Architecture</h3>\r\n<b>Please follow this file structure:</b>\r\n<br>\r\n<div class=\"code-block folder-structure\">\r\n    <div class=\"folder-structure--item\">\r\n        AceJs project\r\n        <div class=\"children\">\r\n            <div class=\"folder-structure--item\">\r\n                dev\r\n            </div>\r\n            <div class=\"children\">\r\n                <div class=\"folder-structure--item\">components</div>\r\n                <div class=\"children\">\r\n                \t<div class=\"folder-structure--item\">component-one</div>\r\n                \t<div class=\"children\">\r\n                \t\t<div class=\"folder-structure--item\">component-one.component.js</div>\r\n                \t\t<div class=\"folder-structure--item\">component-one.component.html</div>\r\n                \t</div>\r\n                \t<div class=\"folder-structure--item\">component-two</div>\r\n                \t<div class=\"folder-structure--item\">component ...</div>\r\n                </div>\r\n                <div class=\"folder-structure--item\">stores</div>\r\n                <div class=\"folder-structure--item\">protectors</div>\r\n                <div class=\"folder-structure--item\">styles</div>\r\n                <div class=\"folder-structure--item\">app.js</div>\r\n                <div class=\"folder-structure--item\">assets\r\n                </div>\r\n                <div class=\"children\">\r\n                    <div class=\"folder-structure--item\">img</div>\r\n                    <div class=\"folder-structure--item\">fonts</div>\r\n                </div>\r\n                <div class=\"folder-structure--item\">routes.js</div>\r\n            </div>\r\n            <div class=\"folder-structure--item\">index.html</div>\r\n            <div class=\"folder-structure--item\">node_modules</div>\r\n            <div class=\"folder-structure--item\">package.json</div>\r\n            <div class=\"folder-structure--item\">webpack.config.js</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<b>You can see basic principles of AceJs on following picture: </b>\r\n<img src=\"" + __webpack_require__(84) + "\">\r\n\r\n\r\n<br><br>\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">app.js</div>\r\n    <pre>\r\n        import Styles from './styles/main.scss';\r\n        import { API } from '../core';\r\n        import { RootComponent } from './components/root/root.component';\r\n        import { HomeComponent } from './components/home/home.component';\r\n        import { HeaderComponent } from './components/header/header.component';\r\n\r\n        import Docs from './components/documentation';\r\n\r\n        import { Routes } from './router.js';\r\n        <b>API.register</b>({\r\n            <b>root</b>: {\r\n                c: RootComponent, selector: 'app-root'\r\n            },\r\n            <b>components</b>: [\r\n                { c: HomeComponent, selector: 'app-home' },\r\n                { c: HeaderComponent, selector: 'app-header' }\r\n            ],\r\n            <b>modules</b>: [\r\n                Docs\r\n            ],\r\n            <b>routes</b>: Routes,\r\n            <b>styles</b>: Styles\r\n        });\r\n    </pre>\r\n</div>";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__.p + "src/example/img/ace-brand.svg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocComponentComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docComponentComponent = __webpack_require__(86);

	var _docComponentComponent2 = _interopRequireDefault(_docComponentComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// import ProjectsStore from 'store/projects.store';

	var DocComponentComponent = exports.DocComponentComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-component',
	    template: _docComponentComponent2.default
	}), _dec(_class = function () {
	    function DocComponentComponent(params) {
	        _classCallCheck(this, DocComponentComponent);
	    }

	    _createClass(DocComponentComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocComponentComponent;
	}()) || _class);

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Example component</h3>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.js</div>\r\n    <pre>\r\n    import { <b>Component</b> } from 'ace-js';\r\n    import <b>Tpl</b> from './example.component.html';\r\n    export class <b>ExampleComponent</b> extends Component {\r\n        constructor(params) {\r\n            super(params, {\r\n                <b>template</b>: Tpl,\r\n                <b>props</b>: ()=> {\r\n                    return {\r\n                        title: 'Some title' \r\n                    }     \r\n                }\r\n                \r\n                <b>hostEvents</b>: {\r\n                    click: 'rootClick'\r\n                },\r\n                <b>hostClasses</b>: {\r\n                    selected: 'props.selected',\r\n                    hidden: '!props.visible'\r\n                },\r\n                <b>hostStyles</b>: {\r\n                    width: {value: 'props.width', suffix: 'px'}\r\n                }\r\n            });\r\n        }\r\n\r\n        onInit() {\r\n        \r\n        }\r\n    }\r\n</pre>\r\n</div>\r\n\r\n<div class=\"text\">or with decorator</div>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.js</div>\r\n    <pre>\r\n        import { <b>Component, Decorators</b> } from '../../../../core';\r\n\r\n        import <b>Tpl</b> from './doc-interpolation.component.html';\r\n\r\n\r\n        <b>@Decorators.ComponentDecorator</b>({\r\n            <b>template</b>: Tpl,\r\n            <b>props</b>: ()=> {\r\n                return {\r\n                     isVisible: true,\r\n                     title: 'test'\r\n                }     \r\n            }\r\n            <b>computed:</b>  {\r\n                titleNew : function() {\r\n                    return this.title.toUpperCase();\r\n                }\r\n            }\r\n        })\r\n        export class <b>ExampleComponent</b> {\r\n            onInit() {\r\n            \r\n            }\r\n        }\r\n</pre>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">template</b>\r\n    <span class=\"text\">Specifies <b>Tpl</b> template for current component </span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">props</b>\r\n    <span class=\"text\">Initial properties of component(must be as function)</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">hostEvents</b>\r\n    <span class=\"text\">Add <b>event listeners</b> to root element of component</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">hostClasses</b>\r\n    <span class=\"text\">Bind <b>classList</b> of root element with props. <br>\r\n        <b>selected</b> - key, as class name\r\n        <br>\r\n        <b>'props.selected'</b> - value, as propery to bind\r\n    </span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">hostStyles</b>\r\n    <span class=\"text\">Bind styles of root element with props. <br>\r\n        <b>width</b> - key, as css property <br>\r\n        <b>value</b>:string - property to bind <br>\r\n        <b>suffix</b>:string - for example 'px'\r\n    </span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">computed</b>\r\n    <span class=\"text\">Bind props with other props by one-way binding (must be as function)<br>\r\n    </span>\r\n</div>";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocLifecycleComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docLifecycleComponent = __webpack_require__(88);

	var _docLifecycleComponent2 = _interopRequireDefault(_docLifecycleComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocLifecycleComponent = exports.DocLifecycleComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-lifecycle',
	    template: _docLifecycleComponent2.default
	}), _dec(_class = function () {
	    function DocLifecycleComponent(params) {
	        _classCallCheck(this, DocLifecycleComponent);
	    }

	    _createClass(DocLifecycleComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocLifecycleComponent;
	}()) || _class);

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<div class=\"block\">\r\n    <b class=\"title\">onAttach()</b>\r\n    <span class=\"text\">Fires when component is attached to DOM</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">onInit()</b>\r\n    <span class=\"text\">Fires when component is initialized</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">onDestroy()</b>\r\n    <span class=\"text\">Fires when component is destroyed</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">onUpdate()</b>\r\n    <span class=\"text\">Fires when props of component is updated</span>\r\n</div>\r\n\r\n<div class=\"section-title\">Lifecycle diagram</div>";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocUtilsComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docUtilsComponent = __webpack_require__(90);

	var _docUtilsComponent2 = _interopRequireDefault(_docUtilsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocUtilsComponent = exports.DocUtilsComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-utils',
	    template: _docUtilsComponent2.default
	}), _dec(_class = function () {
	    function DocUtilsComponent(params) {
	        _classCallCheck(this, DocUtilsComponent);
	    }

	    _createClass(DocUtilsComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocUtilsComponent;
	}()) || _class);

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Utils</h3>\r\n<div class=\"block\">\r\n    <b class=\"title\">randomInteger(min max)</b> <span class=\"text\">get random number between min and max values</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">addDays(date, count)</b> <span class=\"text\">add <b>count</b> days to current <b>date</b></span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">getDateByFormat(date, format)</b>\r\n    <div class=\"text\">convert <b>date</b> with specified <b>format</b>\r\n        <br>\r\n        <b class=\"title\">Available formats: </b>\r\n        <div>\r\n            <b>yyyy-mm-dd</b><br>\r\n            <b>yyyymmdd</b><br>\r\n            <b>yyyy/mm/dd</b><br>\r\n            <b>yyyy-mm-dd hh:mm</b><br>\r\n            <b>hh:mm</b><br>\r\n            <b>dd.mm.yyyy</b>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">getDaysBetweenDates(dt1, dt2)</b> <span class=\"text\">get days count between two dates</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">closest(array, num)</b> <span class=\"text\">get closest value <b>num</b> from <b>array</b></span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">insertAfter(elem, refElem)</b> <span class=\"text\">Insert <b>elem</b> after specified <b>refElem</b></span>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">isCustomElement(element)</b> <span class=\"text\">Check if specified <b>element</b> is custom element</span>\r\n</div>\r\n\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">sorting(array, params, reverse)</b> <span\r\n        class=\"text\">Sort specified <b>array</b> with <b>params(type: string, id: string)</b>\r\n    <div><b>type</b> - type of sotring, <b>id</b> - prop for sorting</div>\r\n    <div><b>reverse</b> - opposite sorting</div></span>\r\n</div>\r\n\r\n\r\n\r\n\r\n";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocDirectivesComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _directivesComponent = __webpack_require__(92);

	var _directivesComponent2 = _interopRequireDefault(_directivesComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocDirectivesComponent = exports.DocDirectivesComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-directives',
	    template: _directivesComponent2.default,
	    props: function props() {
	        return {
	            value: 'value',
	            model: 'Something',
	            className: 'unclicked',
	            showClass: true,
	            isVisible: false,
	            width: '50px',
	            height: '100px',
	            qwerty: { test: 1 },
	            items: [{ name: 1, bg: '#ccc', route: '123', class: 'classname' }, { name: 2, class: 'test1' }, { name: 3 }],
	            image: 'https://www.w3schools.com/css/img_fjords.jpg'
	        };
	    }
	}), _dec(_class = function () {
	    function DocDirectivesComponent(params) {
	        _classCallCheck(this, DocDirectivesComponent);
	    }

	    _createClass(DocDirectivesComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'submit',
	        value: function submit(e) {
	            e.preventDefault();
	        }
	    }, {
	        key: 'changeClass',
	        value: function changeClass() {
	            this.props.set('className', 'clicked');
	        }
	    }, {
	        key: 'changeSize',
	        value: function changeSize() {
	            this.props.set({
	                height: '75px',
	                width: '100px'
	            });
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(item, event) {}
	    }, {
	        key: 'showElement',
	        value: function showElement() {
	            this.props.set('isVisible', !this.props.get('isVisible'));
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange() {
	            alert('Event from child');
	        }
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocDirectivesComponent;
	}()) || _class);

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Directives</h3>\r\n<div class=\"text\">Directives - special attributes with <b>ac-</b> prefix</div>\r\n<div class=\"text\">All properties of component are stored in special field called <b>props</b></div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-value=\"value\"</b>\r\n    <div class=\"text\">\r\n        Bind props <b>value</b> with certain element\r\n        <br>\r\n        <input type=\"text\" ac-value=\"value\">\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-model=\"model\"</b> \r\n    <div class=\"text\">\r\n        <b>Two way data binding</b> between <b>model</b> and html element\r\n        <br>\r\n        <div>\r\n            <input type=\"text\" ac-model=\"model\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-input=\"inputData: selectedValue\"</b>\r\n    <div class=\"text\">Allow send <b>selectedValue</b> from parent component to child component <b>inputData</b>.</div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-ref=\"element\"</b>\r\n    <div class=\"text\">Add <b>element</b> to ui list. ui - is a list of reference elements</div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">\r\n    ac-class=\"className: showClass\"\r\n    <br>\r\n    ac-class=\"@class\"\r\n    </b>\r\n    <div class=\"text\">Get 2 params: name of class, boolean(adds class if true). You can use\r\n        <b>comma(,)</b> symbol to specify several conditions. Also @ is available, so you can bind props to className\r\n        <br><br>\r\n        <button @click=\"changeClass\">Change class</button>\r\n        <b><span ac-class=\"@className\">Example</span></b>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-style=\"height: height\"</b>\r\n    <div class=\"text\">\r\n            Binds props to css rules. Gets 2 params: <b>height</b> - css rule and <b>value</b> - value from \r\n            <br><br>\r\n            <button @click=\"changeSize\">Change size</button>\r\n            <br><br>\r\n            <div style=\"border: 1px solid red\" ac-style=\"height: height, width: width\"></div>\r\n     </div>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-if=\"this.isVisible\"</b>\r\n    <div class=\"text\">Serve to hide or show element; Gets 1 params: <b>value</b>\r\n    <br><br>\r\n    <button @click=\"showElement\">Show</button>\r\n    <span ac-if=\"this.isVisible\">Element is shown now</span>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-for=\"items\"</b>\r\n    <div class=\"text\">Repeater. Creates instance for every element in collection <b>items</b>\r\n    <br><br>\r\n    <ul>\r\n        <li ac-for=\"let item of items\" \r\n        ac-value=\"item.name\" \r\n        ac-attr=\"width: item.bg\" \r\n        ac-style=\"background: item.bg\" \r\n      \r\n        ac-class=\"test: item.class === model, @item.class\" @click=\"onClick(item, $event)\">\r\n        </li>\r\n    </ul>\r\n \r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-attr=\"src: image\"</b>\r\n    <div class=\"text\">Binds attr <b>src</b> with url from <b>image</b>\r\n    <br>\r\n    <img ac-attr=\"src: image\" style=\"width: 200px\">\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-link=\"documentation\"</b>\r\n    <div class=\"text\">Serves for navigation inside application. In this case link leads to documentation page</div>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-on=\"change: onChange\"</b>\r\n    <div class=\"text\">\r\n    Add event listener to the root element of component, that listen to child events\r\n    <br><br>\r\n    <app-example-child ac-on=\"onChange: onChange\"></app-example-child>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-pattern=\"[0-9]\"</b>\r\n    <div class=\"text\">\r\n    Add <b>error class</b> to the element if value is invalid(doesn't match the pattern)\r\n    <form ac-submit=\"submit\">\r\n        <input required type=\"text\" ac-pattern=\"[0-9]: Invalid\">\r\n        <button>Submit</button>\r\n    </form>\r\n    \r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-outside=\"outsideClick\"</b>\r\n    <div class=\"text\">Trigger method <b>outsideClick</b> if user clicked beyond the element where ac-outside is specified</div>\r\n</div>";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocCustomDirectivesComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _customDirectivesComponent = __webpack_require__(94);

	var _customDirectivesComponent2 = _interopRequireDefault(_customDirectivesComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocCustomDirectivesComponent = exports.DocCustomDirectivesComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-custom-directives',
	    template: _customDirectivesComponent2.default,
	    props: function props() {
	        return {
	            test: 'test',
	            show: true
	        };
	    }
	}), _dec(_class = function () {
	    function DocCustomDirectivesComponent(params) {
	        _classCallCheck(this, DocCustomDirectivesComponent);
	    }

	    _createClass(DocCustomDirectivesComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }]);

	    return DocCustomDirectivesComponent;
	}()) || _class);

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Custom directives</h3>\r\n\r\n\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.directive.js</div>\r\n    <pre>\r\n\timport {Decorators} from 'core';\r\n\r\n\t@Decorators.DirectiveDecorator({\r\n\t    selector: 'upperCase'\r\n\t})\r\n\texport default class UpperCaseDirectove {\r\n\t    constructor(elem) {\r\n\t        this.elem = elem;\r\n\t    }\r\n\r\n\t    onUpdate() {\r\n\t        this.toUpperCase();\r\n\t    }\r\n\r\n\t    toUpperCase() {\r\n\t        this.elem.innerHTML = this.elem.innerHTML.toUpperCase();\r\n\t    }\r\n\t}\r\n</pre>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">onUpdate</b>\r\n    <div class=\"text\"><div>Triggeres when component is updated</div></div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.html</div>\r\n\t<pre><span><</span>span upperCase><span class=\"text\">test</span><span><</span>/span></pre>\r\n</div>\r\n\r\n<div class=\"text\">will be replaced with</div>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.html</div>\r\n\t<pre><span><</span>span upperCase><span class=\"text\">TEST</span><span><</span>/span></pre>\r\n</div>\r\n\r\n";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocInterpolationComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docInterpolationComponent = __webpack_require__(96);

	var _docInterpolationComponent2 = _interopRequireDefault(_docInterpolationComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocInterpolationComponent = exports.DocInterpolationComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-interpolation',
	    template: _docInterpolationComponent2.default,
	    props: function props() {
	        return {
	            isVisible: true,
	            title: 'test',
	            isReady: true
	        };
	    }
	}), _dec(_class = function () {
	    function DocInterpolationComponent() {
	        _classCallCheck(this, DocInterpolationComponent);
	    }

	    _createClass(DocInterpolationComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            // setInterval(()=>{
	            //     // this.props.set('title', new Date());
	            //     this.title = new Date();
	            // }, 1000);

	        }
	    }]);

	    return DocInterpolationComponent;
	}()) || _class);

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3 class=\"in-development\">In development!</h3>\r\n<h3>Interpolation</h3>\r\n\r\n<div class=\"section-title\">Text interpolation</div>\r\n\r\n<div class=\"text\"><b>Interpolation</b> - is one of the ways how to bind data with tempalte</div>\r\n<div class=\"text\">We use <b>'Mustache'</b> syntax, which means value from double curly braces will be replaced with the value from props.title</div>\r\n\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.js</div>\r\n    <pre>\r\n    import { <b>Component</b> } from 'ace-js';\r\n    import <b>Tpl</b> from './example.component.html';\r\n    export class <b>ExampleComponent</b> extends Component {\r\n        constructor(params) {\r\n            super(params, {\r\n                <b>template</b>: Tpl,\r\n                <b>props</b>: ()=> {\r\n                    return {\r\n                      title: 'Some title'        \r\n                    }\r\n                }\r\n            });\r\n        }\r\n\r\n    }\r\n</pre>\r\n</div>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.html</div>\r\n\t<pre><span><</span>span><span class=\"text\" ac-avoid>{{title}}</span><span><</span>/span></pre>\r\n</div>\r\n\r\n<div class=\"text\">will be replaced with props.title value</div>\r\n<div class=\"code-block\">\r\n\t<pre><span><</span>span><span class=\"text\">Some title</span><span><</span>/span></pre>\r\n</div>\r\n\r\n\r\n<div class=\"section-title\">Javascript expressions</div>\r\n<div class=\"code-block\">\r\n\t<pre><span><</span>span><span class=\"text\" ac-avoid>{{isReady ? 'OK' : 'FAIL'}}</span><span><</span>/span></pre>\r\n</div>\r\n<div class=\"text\">This expression will be calculated as ussual js expression</div>\r\n\r\n<br>\r\n<div class=\"text\">The alturnative way is using of <b class=\"label\">ac-value</b></div>";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocConditionalComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docConditionalComponent = __webpack_require__(98);

	var _docConditionalComponent2 = _interopRequireDefault(_docConditionalComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocConditionalComponent = exports.DocConditionalComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-conditional',
	    template: _docConditionalComponent2.default,
	    props: function props() {
	        return {
	            isVisible: true
	        };
	    }
	}), _dec(_class = function () {
	    function DocConditionalComponent(params) {
	        _classCallCheck(this, DocConditionalComponent);
	    }

	    _createClass(DocConditionalComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }]);

	    return DocConditionalComponent;
	}()) || _class);

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Conditional rendering</h3>\r\n<div class=\"section-title\">ac-if</div>\r\n\r\n<div class=\"code-block\">\r\n\t<pre><span><</span>span <b>ac-if</b>=\"<span class=\"attr\">isVisible</span>\"><span class=\"text\">Something</span><span><</span>/span></pre>\r\n</div>\r\n\r\n<div class=\"text\">In this case <b>ac-if</b> directive checks <b>isVisible</b> property and if it is true element will be added to the page, otherwise will be removed</div>";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocListRenderingComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docListRenderingComponent = __webpack_require__(100);

	var _docListRenderingComponent2 = _interopRequireDefault(_docListRenderingComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocListRenderingComponent = exports.DocListRenderingComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-list-rendering',
	    template: _docListRenderingComponent2.default,
	    props: function props() {
	        return {
	            qwerty: 1,
	            items: [{ name: 'Item1' }, { name: 'Item2' }, { name: 'Item3' }],
	            object: {
	                prop1: 'obj1',
	                prop2: 'obj2'
	            }
	        };
	    }
	}), _dec(_class = function () {
	    function DocListRenderingComponent(params) {
	        _classCallCheck(this, DocListRenderingComponent);
	    }

	    _createClass(DocListRenderingComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }, {
	        key: 'test',
	        value: function test(item, index, key) {
	            console.log(item, index, key);
	        }
	    }]);

	    return DocListRenderingComponent;
	}()) || _class);

/***/ }),
/* 100 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Conditional rendering</h3>\r\n<div class=\"section-title\">ac-for with arrays</div>\r\n<br>\r\n<!-- props: <div>{{items|json}}</div> -->\r\n<div class=\"code-block\">\r\n    <pre>\t\r\n    props: ()=>{\r\n    \treturn {\r\n    \t\titems: [\r\n\t    \t\t{name: 'Item1'}, \r\n\t    \t\t{name: 'Item2'}, \r\n\t    \t\t{name: 'Item3'}\r\n    \t\t]\r\n    \t}\r\n    }\r\n\t</pre>\r\n</div>\r\n<div class=\"code-block\">\r\n\t<pre><span><</span>ul><<span>li </span <b>ac-for</b>=\"<span class=\"attr\">let (item, index) of item</span>\"><span class=\"text\" ac-avoid>{{index}}- {{item.name}}</span><span><</span>/li><span><</span>/ul></pre>\r\n</div>\r\nwill be replaces with\r\n<div class=\"code-block\">\r\n\t<pre><ul><li ac-for=\"let (item, index) of items\" @click=\"test(item)\" >{{index}}- {{item.name}} </li></ul></pre>\r\n</div>\r\n\r\n<div class=\"section-title\">ac-for with objects</div>\r\n<br>\r\n\r\n<div class=\"code-block\">\r\n    <pre>\t\r\n    props: ()=>{\r\n    \treturn {\r\n\t    \tobject: {\r\n\t    \t    prop1: 'obj1',\r\n\t    \t    prop2: 'obj2'\r\n\t    \t}\r\n    \t}\r\n    }\r\n\t</pre>\r\n</div>\r\n\r\n<div class=\"code-block\">\r\n\t<pre><span><</span>ul><<span>li </span <b>ac-for</b>=\"<span class=\"attr\">let (item, key, index) of item</span>\"><span class=\"text\" ac-avoid>{{index}}- {{key}} {{item}}</span><span><</span>/li><span><</span>/ul></pre>\r\n</div>\r\n<div class=\"code-block\">\r\n\t\t<pre><ul><li ac-for=\"let (item, index, key) of object\" @click=\"test(item)\" >{{index}}- {{key}} {{item}}</li></ul></pre>\r\n</div>";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocFormsComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docFormsComponent = __webpack_require__(102);

	var _docFormsComponent2 = _interopRequireDefault(_docFormsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocFormsComponent = exports.DocFormsComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-forms',
	    template: _docFormsComponent2.default,
	    props: function props() {
	        return {
	            checkbox: {},
	            model: {},
	            form: new _core.FormGroup({
	                name: ['', [_core.Validators.required, _core.Validators.regExp('^[0-9a-zA-Z- ]+$')]],
	                number: ['', [_core.Validators.required, _core.Validators.regExp('^[0-9a-zA-Z- ]+$')]],
	                checkbox: ['', [_core.Validators.required]],
	                radio: ['', [_core.Validators.required]]
	            })
	        };
	    }
	}), _dec(_class = function () {
	    function DocFormsComponent() {
	        _classCallCheck(this, DocFormsComponent);
	    }

	    _createClass(DocFormsComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'submit',
	        value: function submit(e, form) {}
	    }, {
	        key: 'submitReactive',
	        value: function submitReactive(e) {
	            e.preventDefault(e);
	            if (this.props.form.isValid()) {
	                var res = this.props.form.value;
	            }
	        }
	    }, {
	        key: 'keyup',
	        value: function keyup() {}
	    }]);

	    return DocFormsComponent;
	}()) || _class);

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Forms</h3>\r\n\r\n<div class=\"section-title\">Model driven form</div>\r\n<br>\r\n\r\n<div class=\"title\">[type=\"text\"]</div>\r\n    <div ac-value=\"input\"></div>\r\n<div class=\"input\">\r\n    <input type=\"text\" ac-model=\"input\">\r\n    <div class=\"input-border\"></div>\r\n</div>\r\n<div class=\"title\">[type=\"email\"]</div>\r\n    <div ac-value=\"email\"></div>\r\n<div class=\"input\">\r\n    <input type=\"email\" ac-model=\"email\">\r\n    <div class=\"input-border\"></div>\r\n</div>\r\n<div class=\"title\">[type=\"password\"]</div>\r\n    <div ac-value=\"password\"></div>\r\n<div class=\"input\">\r\n    <input type=\"password\" ac-model=\"password\">\r\n    <div class=\"input-border\"></div>\r\n</div>\r\n<div class=\"title\">[type=\"radio\"]</div>\r\n<div class=\"input\">\r\n    <div ac-value=\"radio\"></div>\r\n    <input type=\"radio\" ac-model=\"radio\" value=\"1\" name=\"radio\">\r\n    <input type=\"radio\" ac-model=\"radio\" value=\"2\" name=\"radio\">\r\n</div>\r\n<div class=\"title\">[type=\"checkbox\"]</div>\r\n<div class=\"input\">\r\n    <div ac-value=\"checkbox.check1\"></div>\r\n    <div ac-value=\"checkbox.check2\"></div>\r\n    <input type=\"checkbox\" ac-model=\"checkbox.check1\" value=\"1\">\r\n    <input type=\"checkbox\" ac-model=\"checkbox.check2\" value=\"2\">\r\n</div>\r\n\r\n<!-- <div class=\"section-title\">Form validation</div>\r\n\r\n<form ac-submit=\"submit\" ac-form-validation>\r\n    <div class=\"input\">\r\n        Result: <span ac-value=\"model : json\"></span>\r\n    </div>\r\n    <div class=\"input\">\r\n        <input type=\"text\" placeholder=\"name\" ac-model=\"model.name\" required ac-pattern=\"[0-9]\" ac-pattern-title=\"0-9\">\r\n        <div class=\"input-border\"></div>\r\n    </div>\r\n    <div class=\"input\">\r\n        <input type=\"email\" placeholder=\"email\" ac-model=\"model.email\" required>\r\n        <div class=\"input-border\"></div>\r\n    </div>\r\n    <div class=\"input\">\r\n        <input type=\"checkbox\" ac-model=\"model.checkbox\" required>\r\n    </div>\r\n    <button>Submit</button>\r\n</form> -->\r\n\r\n<div class=\"section-title\">Reactive forms</div>\r\n\r\n<form ac-submit=\"submitReactive($event)\" ac-form-group=\"form\">\r\n\t<br>\r\n\tIs valid: <span ac-value=\"form.valid\"></span>\r\n    <div class=\"input\">\r\n        <input type=\"text\" ac-form-control=\"name\">\r\n        <div class=\"input-border\"></div>\r\n        <span class=\"invalid-message\" ac-if=\"form.controls.name.errors.regExp && form.controls.name.dirty\">Invalid value</span>\r\n        <span class=\"invalid-message\" ac-if=\"form.controls.name.errors.required && form.controls.name.dirty\">Empty</span>\r\n    </div>\r\n\r\n    <div class=\"input\">\r\n        <input type=\"text\" ac-form-control=\"number\">\r\n        <div class=\"input-border\" ></div>\r\n        <span class=\"invalid-message\" ac-if=\"form.controls.number.errors.regExp && form.controls.number.dirty\">Invalid value</span>\r\n        <span class=\"invalid-message\" ac-if=\"form.controls.number.errors.required && form.controls.number.dirty\">Empty</span>\r\n    </div>\r\n\r\n    <div style=\"position: relative;\">Checkbox\r\n        <input type=\"checkbox\" ac-form-control=\"checkbox\" value=\"check-1\">\r\n        <input type=\"checkbox\" ac-form-control=\"checkbox\" value=\"check-2\">\r\n        <span class=\"invalid-message\" ac-if=\"form.controls.checkbox.errors.required && form.controls.checkbox.dirty\">Invalid value</span>\r\n    </div>\r\n\r\n    <div style=\"position: relative;\">Radio\r\n        <input type=\"radio\" name=\"radio\" ac-form-control=\"radio\" value=\"radio-1\">\r\n        <input type=\"radio\" name=\"radio\" ac-form-control=\"radio\" value=\"radio-2\">\r\n        <span class=\"invalid-message\" ac-if=\"form.controls.radio.errors.required && form.controls.radio.dirty\">Invalid value</span>\r\n    </div>\r\n\r\n    <div class=\"input\">\r\n        Result: <span ac-value=\"form.value | json\"></span>\r\n    </div>\r\n\r\n    <button>Submit</button>\r\n</form>\r\n\r\n\r\n<style>\r\n    .invalid-message{\r\n        position: absolute;\r\n        top: -14px;\r\n        font-size: 12px;\r\n        color: red;\r\n    }\r\n</style>\r\n<!-- <br>\r\n<br>\r\n<app-tree-debug></app-tree-debug> -->";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocEventsComponent = undefined;

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docEventsComponent = __webpack_require__(104);

	var _docEventsComponent2 = _interopRequireDefault(_docEventsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocEventsComponent = exports.DocEventsComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-events',
	    template: _docEventsComponent2.default,
	    props: function props() {
	        return {};
	    }
	}), _dec(_class = function DocEventsComponent() {
	    _classCallCheck(this, DocEventsComponent);
	}) || _class);

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Events</h3>\r\n<div class=\"section-title\">Event handling</div>\r\n\r\n<div class=\"code-block\">\r\n    <pre><span><</span>input <b>@click</b>=\"<span class=\"attr\">onClick($event, prop)</span>\"><span class=\"text\"></span></pre>\r\n</div>\r\n\r\n<div class=\"text\">Whole list of events: </div>\r\n\r\n<ol style=\"list-style: disc;padding: 10px 20px 20px 20px;\">\r\n    <li>click</li>\r\n    <li>mousedown</li>\r\n    <li>mouseup</li>\r\n    <li>keyup</li>\r\n    <li>change</li>\r\n    <li>mouseout</li>\r\n    <li>mouseover</li>\r\n    <li>mouseenter</li>\r\n    <li>mouseleave</li>\r\n    <li>click</li>\r\n    <li>scroll</li>\r\n    <li>mousewheel</li>\r\n    <li>submit</li>\r\n    <li>focus</li>\r\n    <li>blur</li>\r\n    <li>dragstart</li>\r\n    <li>dragend</li>\r\n</ol>\r\n\r\nAlso you can use <b>@</b> instead of <b>ac-</b>\r\n\r\n\r\n<div class=\"section-title\">ac-mod</div>\r\n\r\n<div class=\"code-block\">\r\n    <pre><span><</span>input <b>ac-mod</b>=\"<span class=\"attr\">prevent, stop, once, self, capture</span>\"><span class=\"text\"></span></pre>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-key=\"stop\"</b>\r\n    <div class=\"text\">\r\n        The event's propagation <b>will be stopped </b>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-key=\"prevent\"</b>\r\n    <div class=\"text\">\r\n        The submit event <b>will no longer reload the page</b>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-key=\"once\"</b>\r\n    <div class=\"text\">\r\n        The event will be triggered <b>once</b>, further triggering will be ignored\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-key=\"self\"</b>\r\n    <div class=\"text\">\r\n        The event will be triggered if <b>event.target is the element itself</b>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-key=\"capture\"</b>\r\n    <div class=\"text\">\r\n        Equals to <b>element.addEventListener('event', function(){}, true);</b>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"text\"></div>\r\n\r\n<div class=\"section-title\">ac-keymod</div>\r\n\r\n<div class=\"code-block\">\r\n    <pre><span><</span>input  <b>ac-mod</b>=\"<span class=\"attr\">prevent, stop, once, self, capture</span>\"><span class=\"text\"></span></pre>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-keymod=\"enter\"</b>\r\n    <div class=\"text\">\r\n        The event's will be triggered if <b>event.keyCode = '13'</b>\r\n    </div>\r\n</div>\r\n<div class=\"text\">Whole list of key modifier aliases:</div>\r\n<ol style=\"list-style: disc;padding: 10px 20px 20px 20px;\">\r\n    <li>esc</li>\r\n    <li>tab</li>\r\n    <li>enter</li>\r\n    <li>space</li>\r\n    <li>up</li>\r\n    <li>left</li>\r\n    <li>right</li>\r\n    <li>down</li>\r\n    <li>delete</li>\r\n</ol>";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocModulesComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docModulesComponent = __webpack_require__(106);

	var _docModulesComponent2 = _interopRequireDefault(_docModulesComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocModulesComponent = exports.DocModulesComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-modules',
	    template: _docModulesComponent2.default
	}), _dec(_class = function () {
	    function DocModulesComponent(params) {
	        _classCallCheck(this, DocModulesComponent);
	    }

	    _createClass(DocModulesComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocModulesComponent;
	}()) || _class);

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Modules</h3>\r\n<span class=\"text\">To simplify <b>app.js</b> you can split your code into modules</span>\r\n<br>\r\n<span class=\"text\">Call your module as <b>index.js</b> for easier using, so then just import <b>components/documentation</b> where index.js file is.</span>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">index.js</div>\r\n    <pre>\r\n        import {DocumentationComponent} from './documentation.component';\r\n        import {DocQuickStartComponent} from './quick-start/doc-quick-start.component';\r\n\r\n        export default [\r\n            {c: DocumentationComponent, selector: 'app-documentation'},\r\n            {c: DocQuickStartComponent, selector: 'app-documentation-quick-start'}\r\n            ...\r\n        ]\r\n</pre>\r\n</div>\r\n\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">app.js</div>\r\n    <pre>\r\n        import Docs from './components/documentation';\r\n        Register({\r\n            ...\r\n            modules: [\r\n                Docs\r\n                ...\r\n            ]\r\n            ...\r\n        });\r\n</pre>\r\n</div>\r\n";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocSmartObjectComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docSmartObjectComponent = __webpack_require__(108);

	var _docSmartObjectComponent2 = _interopRequireDefault(_docSmartObjectComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocSmartObjectComponent = exports.DocSmartObjectComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-smart-object',
	    template: _docSmartObjectComponent2.default
	}), _dec(_class = function () {
	    function DocSmartObjectComponent(params) {
	        _classCallCheck(this, DocSmartObjectComponent);
	    }

	    _createClass(DocSmartObjectComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            var a = new _core.Observable([]);

	            a.sub(function (res) {
	                console.log(res);
	            });
	            a.set('dsfdsf');
	        }
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocSmartObjectComponent;
	}()) || _class);

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Observables</h3>\r\n\r\n<div class=\"section-title\">Observable model</div>\r\n\r\n<div class=\"text\"><b>ObservableModel</b> - is a observable object with it's own methods.\r\n    <br>Every component has\r\n    <b>props</b> property which is ObservableModel.\r\n</div>\r\n<div class=\"text\">At first you should create ObservableModel with <b>new</b> operator, also you can use initial params</div>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">user.store.js</div>\r\n    <pre>\r\n        import { ObservableModel } from 'framework/model'\r\n\r\n        class UserStore extends Store {\r\n            constructor() {\r\n                super();\r\n                this.user = new ObservableModel();\r\n            }\r\n        }\r\n</pre>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">sub(()=> {})</b>\r\n    <span class=\"text\">Creates a subscriber that watch any changes of ObservableModel</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">set('name', 'New value')</b>\r\n    <span class=\"text\">Set new value</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">get('name')</b>\r\n    <span class=\"text\">Get value from by <b>name</b> prop</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">save(params)</b>\r\n    <span class=\"text\">Is used for updating of object bu id</span>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"section-title\">Observable collection</div>\r\n<div class=\"section-title\">Observable boolean</div>";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocHowToComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docHowToComponent = __webpack_require__(110);

	var _docHowToComponent2 = _interopRequireDefault(_docHowToComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// import ProjectsStore from 'store/projects.store';

	var DocHowToComponent = exports.DocHowToComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-how-to-install',
	    template: _docHowToComponent2.default
	}), _dec(_class = function () {
	    function DocHowToComponent(params) {
	        _classCallCheck(this, DocHowToComponent);
	    }

	    _createClass(DocHowToComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocHowToComponent;
	}()) || _class);

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>How to install</h3>\r\n<div class=\"text\">To add AceJs framework to your node_modules</div>\r\n<div class=\"code-block\">\r\n    <pre>\r\n    <b>npm i ace-js</b>\r\n</pre>\r\n</div>\r\n<div class=\"text\">Now you can develop your application with AceJs</div>\r\n<div class=\"code-block\">\r\n    <pre>\r\n\tlet <b>AceJs</b> = require('ace-js');\r\n\tor\r\n\timport {...} from 'ace-js';\r\n</pre>\r\n</div>\r\n<!--     <b>npm i</b> - install all node modules\r\n    <b>npm run dev</b> - starts the dev server\r\n    <b>npm run prod</b> - creates production index.js bundle -->";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocRouterConfigComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docRouterConfigComponent = __webpack_require__(112);

	var _docRouterConfigComponent2 = _interopRequireDefault(_docRouterConfigComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocRouterConfigComponent = exports.DocRouterConfigComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-router-config',
	    template: _docRouterConfigComponent2.default
	}), _dec(_class = function () {
	    function DocRouterConfigComponent(params) {
	        _classCallCheck(this, DocRouterConfigComponent);
	    }

	    _createClass(DocRouterConfigComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocRouterConfigComponent;
	}()) || _class);

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Router config</h3>\r\n<div class=\"text\">To run router you should create <b>_router.js</b> config file, where describes rules for navigation\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">path</b>\r\n    <span class=\"text\">current route compares with path, and if they match then component is rendered</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">component</b>\r\n    <span class=\"text\">defines what router should to show</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">children</b>\r\n    <span class=\"text\">specifies all the child routes activated under the current route</span>\r\n</div>\r\n\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">{path: <b>'/'</b>, component: 'app-home'}</b>\r\n    <span class=\"text\">leeds to <b>root</b> page</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">{path: <b>'example/:id'</b>, component: 'app-example-page'}</b>\r\n    <span class=\"text\">leeds to example page with <b>':id'</b> param</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\"> {\r\n        path: <b>'parent'</b>,\r\n        component: 'app-parent-component'}  </b>\r\n    <span class=\"text\">leeds to page <b>parent</b> with children</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">\r\n        {path: <b>''</b>, component: 'app-child-root}\r\n    </b>\r\n    <span class=\"text\">root child route</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">\r\n        {path: <b>'child-component'</b>, component: 'app-child-one'}\r\n    </b>\r\n    <span class=\"text\">shows <b>child-component</b> component inside parent component</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">\r\n        {path: '404', component: <b>'app-not-found'</b>}\r\n    </b>\r\n    <span class=\"text\">leeds to <b>'not found page'</b></span>\r\n</div>\r\n\r\n<br>\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">_router.js</div>\r\n    <pre>\r\n\r\n    export let Routes = [\r\n    {path: <b>'/'</b>, component: 'app-home'},\r\n    {path: <b>'example/:id'</b>, component: 'app-example-page'},\r\n    {\r\n            path: <b>'parent'</b>,\r\n            component: 'app-parent-component',\r\n            children: [\r\n                {path: <b>'/'</b>, component: 'app-child-root},\r\n                {path: <b>'child-component'</b>, component: 'app-child-one'}\r\n            ]\r\n        },\r\n        {path: '404', component: <b>'app-not-found'</b>}\r\n    ];\r\n</pre>\r\n</div>\r\n";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HttpModuleComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docHttpModuleComponent = __webpack_require__(114);

	var _docHttpModuleComponent2 = _interopRequireDefault(_docHttpModuleComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HttpModuleComponent = exports.HttpModuleComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-http-module',
	    template: _docHttpModuleComponent2.default
	}), _dec(_class = function () {
	    function HttpModuleComponent(params) {
	        _classCallCheck(this, HttpModuleComponent);
	    }

	    _createClass(HttpModuleComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return HttpModuleComponent;
	}()) || _class);

/***/ }),
/* 114 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Http module</h3>\r\n\r\n<div class=\"text\"><b>Http module</b> is part <b>core</b> module.</div>\r\n<div class=\"text\">To use this module you should <b>import {Http} from 'ace-js'</b></div>";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HttpMethodsComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docHttpMethodsComponent = __webpack_require__(116);

	var _docHttpMethodsComponent2 = _interopRequireDefault(_docHttpMethodsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HttpMethodsComponent = exports.HttpMethodsComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-documentation-http-methods',
	    template: _docHttpMethodsComponent2.default
	}), _dec(_class = function () {
	    function HttpMethodsComponent(params) {
	        _classCallCheck(this, HttpMethodsComponent);
	    }

	    _createClass(HttpMethodsComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'getWeater',
	        value: function getWeater() {
	            var _this = this;

	            _core.Http.makeRequest({ method: 'get', url: 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=31ff47785771280c27a522d0cc5c9cba&units=metric' }).then(function (res) {
	                _this.props.set('weather', res);
	            });
	        }
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return HttpMethodsComponent;
	}()) || _class);

/***/ }),
/* 116 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Http methods</h3>\r\n<div>Add <b>import {Http} from 'ace-js'</b> to your component, then</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">GET</b>\r\n    <div class=\"text\">\r\n        <div>Http.get(url).then(response=>{ })</div>\r\n        <br>\r\n        Example: \r\n        <button @click=\"getWeater\">Get weater info</button>\r\n        <div ac-if=\"weather\"> \r\n            City: <b ac-value=\"weather.name\"></b>\r\n            <br>\r\n            Temp: <b ac-value=\"weather.main.temp\"></b> C\r\n            <br>\r\n            Wind: <b ac-value=\"weather.wind.speed\"></b> m/s\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">POST</b>\r\n    <div class=\"text\"><div>Http.post(url, params).then(response=>{ })</div></div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">PUT</b>\r\n    <div class=\"text\"> <div>Http.put(url, params).then(response=>{ })</div></div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">DELETE</b>\r\n    <div class=\"text\"> <div>Http.delete(url).then(response=>{ })</div></div>\r\n</div>\r\n\r\n<div class=\"section-title\">Interceptors</div>\r\n<div class=\"text\">In your code you can use interceptors to add your own logic</div>\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.js</div>\r\n    <pre>\r\n        import { Component, Http } from 'ace-js';\r\n        import Tpl from './root.component.html';\r\n        import NotificaitonsStore from 'stores/notifications.store';\r\n        import UserStore from 'stores/user.store'\r\n        export class ExampleComponent extends Component {\r\n            constructor(params) {\r\n                super(params, {\r\n                    template: Tpl\r\n                });\r\n            }\r\n\r\n            onInit() {\r\n                Http.getCatalog('/catalog');\r\n                Http.onProgress(event => {\r\n                    console.log(event.loaded + ' / ' + event.total);\r\n                });\r\n                Http.onError(err => {\r\n                    switch (err.status) {\r\n                      case 401:\r\n                        UserStore.logout('auth');\r\n                        break;\r\n                      case 406:\r\n                        NotificaitonsStore.show({ type: 'error', text: err.response.message });\r\n                        UserStore.logout('auth');\r\n                        break;\r\n                      case 422:\r\n                        break;\r\n                      case 404:\r\n                        break;\r\n                      case 403:\r\n\r\n                        break;\r\n                      case 500:\r\n                      case 502:\r\n                        break;\r\n                      default:\r\n\r\n                        break;\r\n                    }\r\n                });\r\n            }\r\n        }\r\n    </pre>\r\n</div>";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ExampleChildComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ExampleChildComponent = exports.ExampleChildComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-example-child',
	    template: 'Child component <button @click="trigger">Emit \'change\' event </button>'
	}), _dec(_class = function () {
	    function ExampleChildComponent(params) {
	        _classCallCheck(this, ExampleChildComponent);
	    }

	    _createClass(ExampleChildComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'trigger',
	        value: function trigger() {
	            this.emit('onChange');
	        }
	    }]);

	    return ExampleChildComponent;
	}()) || _class);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _plugins = __webpack_require__(119);

	var _chart = __webpack_require__(121);

	var _sortable = __webpack_require__(123);

	exports.default = [_plugins.PluginsComponent, _chart.PluginsChartComponent, _sortable.PluginsSortableComponent];

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PluginsComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _pluginsComponent = __webpack_require__(120);

	var _pluginsComponent2 = _interopRequireDefault(_pluginsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PluginsComponent = exports.PluginsComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-plugins',
	    template: _pluginsComponent2.default,
	    props: function props() {
	        return {
	            plugins: [{
	                name: 'Sortable',
	                route: 'plugins/sortable'
	            }, {
	                name: 'Chart',
	                route: 'plugins/chart'
	            }]
	        };
	    }
	}), _dec(_class = function () {
	    function PluginsComponent(options) {
	        _classCallCheck(this, PluginsComponent);
	    }

	    _createClass(PluginsComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }]);

	    return PluginsComponent;
	}()) || _class);

/***/ }),
/* 120 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<main>\r\n\r\n    <div class=\"main-content justify-space-between\">\r\n\r\n        <ol class=\"main-list\">\r\n            <li ac-for=\"let item of plugins\">\r\n                <a class=\"list-head\" ac-link=\"{{route}}\"  ac-link-exact=\"true\">{{name}}</a>\r\n            </li>\r\n        </ol>\r\n\r\n        <div class=\"plugins-section\">\r\n            <child-route-switcher></child-route-switcher>\r\n        </div>\r\n    </div>\r\n</main>\r\n\r\n\r\n\r\n";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PluginsChartComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _chartComponent = __webpack_require__(122);

	var _chartComponent2 = _interopRequireDefault(_chartComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PluginsChartComponent = exports.PluginsChartComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-plugins-chart',
	    template: _chartComponent2.default,
	    props: function props() {
	        return {
	            barChartData: {
	                title: 'Programming languages',
	                yAxis: {
	                    // min: 0,
	                    label: 'Popularity'
	                },
	                background: '#f0f0f0',
	                series: [{ name: 'JS', value: 6 }, { name: 'JAVA', value: 5 }, { name: 'PHP', value: 8 }, { name: 'PYTHON', value: 10 }, { name: 'C', value: 15 }, { name: 'PERl', value: 5 }, { name: 'C#', value: 20 }],
	                height: 300,
	                width: 600,
	                labelX: 300
	            },
	            lineChartData: {
	                title: 'Programming languages',
	                yAxis: {
	                    // min: 0,
	                    label: 'Popularity'
	                },
	                background: '#f0f0f0',
	                series: [{ name: 'JS', value: [10, 20, 300, 50, 30] }, { name: 'JAVA', value: [100, 200, 300, 500, 300] }, { name: 'PHP', value: [1000, 500, 500, 400, 20] }],
	                xAxis: {
	                    categories: ['2010', '2011', '2012', '2013', '2014']
	                },
	                height: 300,
	                width: 600,
	                labelX: 300
	            }
	        };
	    }
	}), _dec(_class = function () {
	    function PluginsChartComponent() {
	        _classCallCheck(this, PluginsChartComponent);
	    }

	    _createClass(PluginsChartComponent, [{
	        key: 'onInit',
	        value: function onInit() {

	            // setInterval(() => {
	            //     let barChartData = this.props.get('barChartData');
	            //     let lineChartData = this.props.get('lineChartData');

	            //     barChartData.series = [
	            //         { name: 'JS', value: 6 * Math.random()},
	            //         { name: 'JAVA', value: 5 * Math.random()},
	            //         { name: 'PHP', value: 8 * Math.random()},
	            //         { name: 'PYTHON', value: 10 * Math.random()},
	            //         { name: 'C', value: 15 * Math.random()},
	            //         { name: 'PERl', value: 5 * Math.random()},
	            //         { name: 'C#', value: 20 * Math.random()}
	            //     ];

	            //     lineChartData.series = [
	            //         { name: 'JS', value: [10 * Math.random(), 20 * Math.random(),300 * Math.random(), 50 * Math.random(), 300 * Math.random()] },
	            //         { name: 'JAVA', value: [100 * Math.random(), 200 * Math.random(), 300 * Math.random(), 500 * Math.random(), 300 * Math.random()] },
	            //         { name: 'PHP', value: [2000 * Math.random(),500 * Math.random(),500 * Math.random(),400 * Math.random(),20 * Math.random()] }
	            //     ];
	            //     this.props.set({lineChartData, barChartData});
	            // }, 2000);
	        }
	    }]);

	    return PluginsChartComponent;
	}()) || _class);

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Bar chart</h3>\r\n<ace-bar-chart ac-input=\"data: @barChartData\"></ace-bar-chart>\r\n\r\n<br>\r\n<br>\r\n\r\n<h3>Line chart</h3>\r\n<ace-line-chart ac-input=\"data: @lineChartData\"></ace-line-chart>";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PluginsSortableComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _sortableComponent = __webpack_require__(124);

	var _sortableComponent2 = _interopRequireDefault(_sortableComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PluginsSortableComponent = exports.PluginsSortableComponent = (_dec = _core.Decorators.ComponentDecorator({
	    selector: 'app-plugins-sortable',
	    template: _sortableComponent2.default
	}), _dec(_class = function () {
	    function PluginsSortableComponent(options) {
	        _classCallCheck(this, PluginsSortableComponent);
	    }

	    _createClass(PluginsSortableComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            _core.Plugins.Sortable.init({
	                el: this.$refs.test
	            });
	        }
	    }]);

	    return PluginsSortableComponent;
	}()) || _class);

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Sortable</h3>\r\n<div ac-ref=\"test\">\r\n    <div draggable=\"true\" style=\"border: 1px solid #ccc; padding: 5px;display: block; width: 200px\">First Item</div>\r\n    <div draggable=\"true\" style=\"border: 1px solid #ccc; padding: 5px;display: block; width: 200px\">Second Item</div>\r\n    <div draggable=\"true\" style=\"border: 1px solid #ccc; padding: 5px;display: block; width: 200px\">Third Item</div>\r\n</div>";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UpperCaseDirectove = (_dec = _core.Decorators.DirectiveDecorator({
	    selector: 'upperCase'
	}), _dec(_class = function () {
	    function UpperCaseDirectove(elem) {
	        _classCallCheck(this, UpperCaseDirectove);

	        this.elem = elem;
	    }

	    _createClass(UpperCaseDirectove, [{
	        key: 'onUpdate',
	        value: function onUpdate() {
	            this.toUpperCase();
	        }
	    }, {
	        key: 'toUpperCase',
	        value: function toUpperCase() {
	            this.elem.innerHTML = this.elem.innerHTML.toUpperCase();
	        }
	    }]);

	    return UpperCaseDirectove;
	}()) || _class);
	exports.default = UpperCaseDirectove;

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Routes = exports.Routes = [{ path: '/', component: 'app-home' }, { path: 'controls', component: 'app-controls' }, {
	    path: 'plugins',
	    component: 'app-plugins',
	    children: [{ path: 'sortable', component: 'app-plugins-sortable' }, { path: 'chart', component: 'app-plugins-chart' }]
	}, {
	    path: 'documentation',
	    component: 'app-documentation',
	    children: [{ path: '/', component: 'app-documentation-quick-start' }, { path: 'how-to-install', component: 'app-documentation-how-to-install' }, { path: 'architecture', component: 'app-documentation-architecture' }, { path: 'component', component: 'app-documentation-component' }, { path: 'lifecycle', component: 'app-documentation-lifecycle' }, { path: 'utils', component: 'app-documentation-utils' }, { path: 'interpolation', component: 'app-documentation-interpolation' }, { path: 'directives', component: 'app-documentation-directives' }, { path: 'custom-directives', component: 'app-documentation-custom-directives' }, { path: 'conditional-rendering', component: 'app-documentation-conditional' }, { path: 'list-rendering', component: 'app-documentation-list-rendering' }, { path: 'events', component: 'app-documentation-events' }, { path: 'forms', component: 'app-documentation-forms' }, { path: 'modules', component: 'app-documentation-modules' }, { path: 'smart-object', component: 'app-documentation-smart-object' }, { path: 'router-config', component: 'app-documentation-router-config' }, { path: 'http-module', component: 'app-documentation-http-module' }, { path: 'http-methods', component: 'app-documentation-http-methods' }]
	}, { path: '404', component: 'app-not-found' // wrong route
	}];

/***/ })
/******/ ])
});
;