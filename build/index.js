/*!
 * ace-js 0.2.2
 * May be freely distributed under the MIT license 
 * Author: Bogdan Zinkevich
 * Last update: 2017-9-27 16:20:04
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
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate_name_"];
/******/ 	this["webpackHotUpdate_name_"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(callback) { // eslint-disable-line no-unused-vars
/******/ 		if(typeof XMLHttpRequest === "undefined")
/******/ 			return callback(new Error("No browser support"));
/******/ 		try {
/******/ 			var request = new XMLHttpRequest();
/******/ 			var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 			request.open("GET", requestPath, true);
/******/ 			request.timeout = 10000;
/******/ 			request.send(null);
/******/ 		} catch(err) {
/******/ 			return callback(err);
/******/ 		}
/******/ 		request.onreadystatechange = function() {
/******/ 			if(request.readyState !== 4) return;
/******/ 			if(request.status === 0) {
/******/ 				// timeout
/******/ 				callback(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 			} else if(request.status === 404) {
/******/ 				// no update available
/******/ 				callback();
/******/ 			} else if(request.status !== 200 && request.status !== 304) {
/******/ 				// other failure
/******/ 				callback(new Error("Manifest request to " + requestPath + " failed."));
/******/ 			} else {
/******/ 				// success
/******/ 				try {
/******/ 					var update = JSON.parse(request.responseText);
/******/ 				} catch(e) {
/******/ 					callback(e);
/******/ 					return;
/******/ 				}
/******/ 				callback(null, update);
/******/ 			}
/******/ 		};
/******/ 	}

/******/ 	
/******/ 	
/******/ 	// Copied from https://github.com/facebook/react/blob/bef45b0/src/shared/utils/canDefineProperty.js
/******/ 	var canDefineProperty = false;
/******/ 	try {
/******/ 		Object.defineProperty({}, "x", {
/******/ 			get: function() {}
/******/ 		});
/******/ 		canDefineProperty = true;
/******/ 	} catch(x) {
/******/ 		// IE will fail on defineProperty
/******/ 	}
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "0c184db7f11dbb087598"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					if(me.children.indexOf(request) < 0)
/******/ 						me.children.push(request);
/******/ 				} else hotCurrentParents = [moduleId];
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name)) {
/******/ 				if(canDefineProperty) {
/******/ 					Object.defineProperty(fn, name, (function(name) {
/******/ 						return {
/******/ 							configurable: true,
/******/ 							enumerable: true,
/******/ 							get: function() {
/******/ 								return __webpack_require__[name];
/******/ 							},
/******/ 							set: function(value) {
/******/ 								__webpack_require__[name] = value;
/******/ 							}
/******/ 						};
/******/ 					}(name)));
/******/ 				} else {
/******/ 					fn[name] = __webpack_require__[name];
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		function ensure(chunkId, callback) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			__webpack_require__.e(chunkId, function() {
/******/ 				try {
/******/ 					callback.call(null, fn);
/******/ 				} finally {
/******/ 					finishChunkLoading();
/******/ 				}
/******/ 	
/******/ 				function finishChunkLoading() {
/******/ 					hotChunksLoading--;
/******/ 					if(hotStatus === "prepare") {
/******/ 						if(!hotWaitingFilesMap[chunkId]) {
/******/ 							hotEnsureUpdateChunk(chunkId);
/******/ 						}
/******/ 						if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 							hotUpdateDownloaded();
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		}
/******/ 		if(canDefineProperty) {
/******/ 			Object.defineProperty(fn, "e", {
/******/ 				enumerable: true,
/******/ 				value: ensure
/******/ 			});
/******/ 		} else {
/******/ 			fn.e = ensure;
/******/ 		}
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback;
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback;
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "number")
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 				else
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailibleFilesMap = {};
/******/ 	var hotCallback;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply, callback) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		if(typeof apply === "function") {
/******/ 			hotApplyOnUpdate = false;
/******/ 			callback = apply;
/******/ 		} else {
/******/ 			hotApplyOnUpdate = apply;
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 		hotSetStatus("check");
/******/ 		hotDownloadManifest(function(err, update) {
/******/ 			if(err) return callback(err);
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				callback(null, null);
/******/ 				return;
/******/ 			}
/******/ 	
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotAvailibleFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			for(var i = 0; i < update.c.length; i++)
/******/ 				hotAvailibleFilesMap[update.c[i]] = true;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			hotCallback = callback;
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 1;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailibleFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailibleFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var callback = hotCallback;
/******/ 		hotCallback = null;
/******/ 		if(!callback) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate, callback);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			callback(null, outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options, callback) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		if(typeof options === "function") {
/******/ 			callback = options;
/******/ 			options = {};
/******/ 		} else if(options && typeof options === "object") {
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		} else {
/******/ 			options = {};
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function getAffectedStuff(module) {
/******/ 			var outdatedModules = [module];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice();
/******/ 			while(queue.length > 0) {
/******/ 				var moduleId = queue.pop();
/******/ 				var module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return new Error("Aborted because of self decline: " + moduleId);
/******/ 				}
/******/ 				if(moduleId === 0) {
/******/ 					return;
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return new Error("Aborted because of declined dependency: " + moduleId + " in " + parentId);
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push(parentId);
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return [outdatedModules, outdatedDependencies];
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				var moduleId = toModuleId(id);
/******/ 				var result = getAffectedStuff(moduleId);
/******/ 				if(!result) {
/******/ 					if(options.ignoreUnaccepted)
/******/ 						continue;
/******/ 					hotSetStatus("abort");
/******/ 					return callback(new Error("Aborted because " + moduleId + " is not accepted"));
/******/ 				}
/******/ 				if(result instanceof Error) {
/******/ 					hotSetStatus("abort");
/******/ 					return callback(result);
/******/ 				}
/******/ 				appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 				addAllToSet(outdatedModules, result[0]);
/******/ 				for(var moduleId in result[1]) {
/******/ 					if(Object.prototype.hasOwnProperty.call(result[1], moduleId)) {
/******/ 						if(!outdatedDependencies[moduleId])
/******/ 							outdatedDependencies[moduleId] = [];
/******/ 						addAllToSet(outdatedDependencies[moduleId], result[1][moduleId]);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(var i = 0; i < outdatedModules.length; i++) {
/******/ 			var moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			var moduleId = queue.pop();
/******/ 			var module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(var j = 0; j < disposeHandlers.length; j++) {
/******/ 				var cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(var j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				var idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				for(var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 					var dependency = moduleOutdatedDependencies[j];
/******/ 					var idx = module.children.indexOf(dependency);
/******/ 					if(idx >= 0) module.children.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(var moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(var i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					var dependency = moduleOutdatedDependencies[i];
/******/ 					var cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(var i = 0; i < callbacks.length; i++) {
/******/ 					var cb = callbacks[i];
/******/ 					try {
/******/ 						cb(outdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(var i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			var moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else if(!error)
/******/ 					error = err;
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return callback(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		callback(null, outdatedModules);
/******/ 	}

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
/******/ 			loaded: false,
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: hotCurrentParents,
/******/ 			children: []
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

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

/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };

/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(0);
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
	exports.Store = exports.Http = exports.Plugins = exports.Utils = exports.GlobalEvents = exports.TemplateEngine = exports.RouteSwitcher = exports.Router = exports.Component = exports.Register = exports.Decorators = exports.ObservableCollection = exports.ObservableModel = undefined;

	var _observable = __webpack_require__(7);

	var _decorators = __webpack_require__(8);

	var Decorators = _interopRequireWildcard(_decorators);

	var _register = __webpack_require__(32);

	var _component = __webpack_require__(33);

	var _routerSwitcher = __webpack_require__(35);

	var _routerCore = __webpack_require__(36);

	var _routerCore2 = _interopRequireDefault(_routerCore);

	var _templateEngine = __webpack_require__(37);

	var _globalEvents = __webpack_require__(38);

	var _globalEvents2 = _interopRequireDefault(_globalEvents);

	var _utils = __webpack_require__(39);

	var _plugins = __webpack_require__(40);

	var Plugins = _interopRequireWildcard(_plugins);

	var _http = __webpack_require__(42);

	var _store = __webpack_require__(43);

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
	exports.Http = _http.Http;
	exports.Store = _store.Store;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ObservableCollection = exports.ObservableModel = exports.Observable = undefined;

	var _class, _class2;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _decorators = __webpack_require__(8);

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

	    return ObservableModel;
	}(Observable)) || _class;

	var ObservableCollection = exports.ObservableCollection = (0, _decorators.IfArray)(_class2 = function (_Observable2) {
	    _inherits(ObservableCollection, _Observable2);

	    function ObservableCollection(options) {
	        _classCallCheck(this, ObservableCollection);

	        return _possibleConstructorReturn(this, (ObservableCollection.__proto__ || Object.getPrototypeOf(ObservableCollection)).call(this, options));
	    }

	    _createClass(ObservableCollection, [{
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
	exports.ComponentDecorator = exports.IfArray = exports.IfObject = undefined;

	var _ifObject = __webpack_require__(9);

	var _ifObject2 = _interopRequireDefault(_ifObject);

	var _ifArray = __webpack_require__(10);

	var _ifArray2 = _interopRequireDefault(_ifArray);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.IfObject = _ifObject2.default;
	exports.IfArray = _ifArray2.default;
	exports.ComponentDecorator = _component2.default;

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
	exports.default = ComponentDecorator;

	var _core = __webpack_require__(6);

	var _private = __webpack_require__(12);

	var _directives = __webpack_require__(13);

	var _events = __webpack_require__(14);

	var _Directives = __webpack_require__(15);

	function ComponentDecorator(decoratorParams) {
	    return function decorator(Class) {
	        return function (root, options) {
	            Class.prototype = Object.setPrototypeOf(Class.prototype, _core.Component.prototype);
	            var instance = new Class();
	            _core.Component.componentConstructor.call(instance, root, decoratorParams);
	            return instance;
	        };
	    };
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PRIVATES = undefined;

	var _directives = __webpack_require__(13);

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
	}; // import { EVENTS } from './const/events';


	_directives.DIRECTIVES_NAMES.forEach(function (directive) {
	    PRIVATES.DIRECTIVES[directive] = new WeakMap();
	});

	exports.PRIVATES = PRIVATES;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var DIRECTIVES_NAMES = exports.DIRECTIVES_NAMES = ['ac-for', 'ac-style', 'ac-value', 'ac-input', 'ac-model', 'ac-if', 'ac-class', 'ac-link', 'ac-attr', 'ac-on', 'ac-pattern', 'ac-outside', 'ac-ref'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENTS_NAMES = exports.EVENTS_NAMES = ['click', 'keyup', 'change', 'mouseover', 'mouseout', 'mousedown', 'mouseup', 'scroll', 'mousewheel', 'submit', 'focus', 'blur', 'dragstart'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Directives = undefined;

	var _style2 = __webpack_require__(16);

	var _props2 = __webpack_require__(17);

	var _pattern2 = __webpack_require__(18);

	var _if2 = __webpack_require__(19);

	var _class2 = __webpack_require__(20);

	var _elRef2 = __webpack_require__(21);

	var _for2 = __webpack_require__(22);

	var _model2 = __webpack_require__(25);

	var _attr2 = __webpack_require__(26);

	var _input2 = __webpack_require__(27);

	var _link2 = __webpack_require__(28);

	var _event = __webpack_require__(24);

	var _outside2 = __webpack_require__(29);

	var _on2 = __webpack_require__(30);

	var _init2 = __webpack_require__(23);

	var _host = __webpack_require__(31);

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
	    _events: _event._events,
	    eventUnitCore: _event.eventUnitCore,
	    removeEventListeners: _event.removeEventListeners,
	    _outside: _outside2._outside,
	    _on: _on2._on,
	    _init: _init2._init,
	    _initEvent: _init2._initEvent,
	    _hostEvents: _host._hostEvents,
	    _hostClasses: _host._hostClasses,
	    _hostStyles: _host._hostStyles
	};

	exports.Directives = Directives;

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
	                var _r = _this.getComponentVariable(equality[0].split('.'), data);

	                return !!equality[1];
	            }

	            var params = res.split('.');
	            var r = _this.getComponentVariable(params, data);
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._for = _for;

	var _core = __webpack_require__(6);

	var _index = __webpack_require__(15);

	var _init2 = __webpack_require__(23);

	var _events = __webpack_require__(14);

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

	                    // loop through the old element's attributes and give them to the new element
	                    for (var _i = 0; _i < item.elem.attributes.length; _i++) {
	                        prevContent.setAttribute(item.elem.attributes[_i].nodeName, item.elem.attributes[_i].nodeValue);
	                    }

	                    item.items.push(prevContent);
	                    item.parent.insertBefore(prevContent, item.comment);

	                    forAttachForLoop.call(_this, prevContent, array[i]);
	                    bindClassForLoop.call(_this, prevContent, array[i]);
	                    styleUnitForLoop.call(_this, prevContent, array[i]);
	                    bindIfForLoop.call(_this, prevContent, array[i]);
	                    bindPropsToViewForLoop.call(_this, prevContent, array[i]);
	                    bindAttrsForLoop.call(_this, prevContent, array[i]);
	                    addLinksRefsForLoop.call(_this, prevContent, array[i]);

	                    eventsForLoop.call(_this, prevContent, array[i]);
	                }
	                return;
	            }

	            if (item.cached.length !== array.length) {
	                item.items.forEach(function (item) {
	                    item.remove();
	                });
	                item.items = [];
	                for (var _i2 = 0; _i2 <= array.length - 1; _i2++) {
	                    var newComp = _core.Component.COMPONENTS.filter(function (r) {
	                        return r.selector === compName;
	                    })[0];
	                    // if(newComp) {
	                    var newEl = document.createElement(compName);
	                    _this.root.appendChild(newEl);
	                    new newComp.c(newEl, Object.assign({}, array[_i2]));
	                    // }

	                    // loop through the old element's attributes and give them to the new element
	                    for (var _i3 = 0; _i3 < item.elem.attributes.length; _i3++) {
	                        newEl.setAttribute(item.elem.attributes[_i3].nodeName, item.elem.attributes[_i3].nodeValue);
	                    }
	                    item.items.push(newEl);
	                    item.parent.insertBefore(newEl, item.comment);
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

	function eventsForLoop(root, context) {
	    var _this2 = this;

	    var array = [];

	    _events.EVENTS_NAMES.forEach(function (directive) {
	        array.push(_index.Directives._initEvent.call(_this2, root, directive, [], context));
	    });

	    array = array.reduce(function (a, b) {
	        return a.concat(b);
	    }, []);
	    _index.Directives._events.call(this, array);
	}

	function addLinksRefsForLoop(root, data) {
	    var array = _index.Directives._init.call(this, root, 'ac-link');
	    _index.Directives._link.call(this, array, data);
	}

	function bindAttrsForLoop(root, data) {
	    var array = _index.Directives._init.call(this, root, 'ac-attr');
	    _index.Directives._attr.call(this, array, data);
	}

	function bindIfForLoop(root, data) {
	    var array = _index.Directives._init(root, 'ac-if');
	    _index.Directives._if.call(this, array, data);
	}

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._init = _init;
	exports._initEvent = _initEvent;

	var _private = __webpack_require__(12);

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

	            if (directive === 'ac-for' && _elem.getAttribute('ac-inner-loop')) {
	                _elem.removeAttribute('ac-inner-loop');
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

	function _initEvent(root, directive, newArray, context) {
	    var array = newArray || [];
	    var targets = root.querySelectorAll('[ac-' + directive + ']');
	    if (root.getAttribute('ac-' + directive)) {
	        var obj = _event.createEventObject.call(this, root, directive, context);
	        array.get ? array.get(this).push(obj) : array.push(obj);
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = targets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _elem2 = _step3.value;

	            var _obj2 = _event.createEventObject.call(this, _elem2, directive, context);
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._events = _events;
	exports.removeEventListeners = removeEventListeners;
	exports.createEventObject = createEventObject;

	var _private = __webpack_require__(12);

	function _events(array) {
	    array.forEach(function (newEvent) {
	        newEvent.el.addEventListener(newEvent.event.toLowerCase(), newEvent.f, false);
	    });
	}

	function removeEventListeners(array) {
	    array.forEach(function (eventItem, i) {
	        eventItem.el.removeEventListener(eventItem.event, eventItem.f, false);
	    });
	}

	function createEventObject(elem, event, context) {
	    var _this = this;

	    var funcParams = elem.getAttribute('ac-' + event);
	    elem.removeAttribute('ac-' + event);
	    var params = funcParams.replace(/ +/g, "").split(':');
	    var fnName = params[0];
	    var newEvent = {
	        fnName: fnName,
	        event: event,
	        el: elem,
	        f: function f(e) {
	            var regExp = /\(([^)]+)\)/;
	            var fnParams = regExp.exec(fnName); // get value between brackets
	            var args = [];
	            var functionName = fnName.replace(regExp, ''); // remove everything between brackets

	            if (fnParams) {
	                fnParams[1].replace(/ +/g, "").split(',').forEach(function (res) {
	                    var arg = new Function('return ' + res).apply(context || _this);
	                    args.push(arg);
	                });
	            }

	            if (_this[functionName]) {
	                var _functionName;

	                (_functionName = _this[functionName]).call.apply(_functionName, [_this, e].concat(args));
	            } else {
	                console.warn('You have no function in your component');
	            }
	        }
	    };

	    return newEvent;
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

	        var route = (0, _core.TemplateEngine)(item.attr, data || _this);
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

	var _private = __webpack_require__(12);

	var _core = __webpack_require__(6);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Register = Register;

	var _core = __webpack_require__(6);

	var _component = __webpack_require__(33);

	function Register(options) {
	    // console.time('modules')

	    if (options.styles) {
	        loadStyle(options.styles);
	    }

	    if (options.serverUrl) {
	        _core.Http.setServerUrl(options.serverUrl);
	    }
	    _component.Component.COMPONENTS = options.components;
	    _core.RouteSwitcher.ROUTES = options.routes;

	    options.modules.forEach(function (module) {
	        module.forEach(function (component) {
	            registerComponent(component);
	        });
	    });

	    var rootEl = document.querySelectorAll(options.root.selector)[0];
	    if (rootEl) {
	        new options.root.c(rootEl);
	    } else {
	        console.warn('There is no root component');
	    }
	}

	function registerComponent(component) {
	    if (component.c instanceof _component.Component.constructor) {
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
	        document.head.append(style);
	    }
	}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Component = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _private = __webpack_require__(12);

	var _interpolation = __webpack_require__(34);

	var _interpolation2 = _interopRequireDefault(_interpolation);

	var _Directives = __webpack_require__(15);

	var _directives = __webpack_require__(13);

	var _events = __webpack_require__(14);

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

	            // if (this.options.interpolation) {
	            //Interpolation.interpolationInit.call(this, this.root, this.$interpolationArray);
	            // }

	            this.compile(); // render custom elements
	            this.compileRouter(); // render main router
	            // console.log(this);

	            _directives.DIRECTIVES_NAMES.forEach(function (directive) {
	                _Directives.Directives._init.call(_this, _this.root, directive, _private.PRIVATES.DIRECTIVES[directive]);
	            });

	            _events.EVENTS_NAMES.forEach(function (directive) {
	                _Directives.Directives._initEvent.call(_this, _this.root, directive, _private.PRIVATES.EVENTS);
	            });

	            _Directives.Directives._model.call(this, _private.PRIVATES.DIRECTIVES['ac-model'].get(this));
	            _Directives.Directives._on.call(this, _private.PRIVATES.DIRECTIVES['ac-on'].get(this));
	            _Directives.Directives._outside.call(this, _private.PRIVATES.DIRECTIVES['ac-outside'].get(this));
	            _Directives.Directives._pattern.call(this, _private.PRIVATES.DIRECTIVES['ac-pattern'].get(this));
	            _Directives.Directives._elRef.call(this, _private.PRIVATES.DIRECTIVES['ac-ref'].get(this));
	            _Directives.Directives._events.call(this, _private.PRIVATES.EVENTS.get(this));
	            _Directives.Directives._hostEvents.call(this, _private.PRIVATES.HOST.EVENTS.get(this));

	            if (_private.PRIVATES.DIRECTIVES['ac-link'].get(this).length || _private.PRIVATES.DIRECTIVES['ac-for'].get(this).length) {
	                this.$routerSub = _core.Router.onChange(function () {
	                    var a = _this.root.querySelectorAll('[href]');
	                    a.forEach(function (item) {
	                        var fullRoute = _core.Router.getCurrentFullPath();
	                        var attr = item.getAttribute('href');
	                        var setActive = attr === fullRoute.join('/') || fullRoute[0] === attr && !item.getAttribute('ac-link-exact');
	                        setActive ? item.classList.add('active') : item.classList.remove('active');
	                    });
	                });
	            }

	            this.onInit();
	        }
	    }, {
	        key: 'listenToPropsChanges',
	        value: function listenToPropsChanges() {
	            var _this2 = this;

	            this.props.sub(function (r) {
	                _Directives.Directives._for.call(_this2, _private.PRIVATES.DIRECTIVES['ac-for'].get(_this2));
	                _Directives.Directives._props.call(_this2, _private.PRIVATES.DIRECTIVES['ac-value'].get(_this2));
	                _Directives.Directives._input.call(_this2, _private.PRIVATES.DIRECTIVES['ac-input'].get(_this2));
	                _Directives.Directives._props.call(_this2, _private.PRIVATES.DIRECTIVES['ac-model'].get(_this2));
	                _Directives.Directives._style.call(_this2, _private.PRIVATES.DIRECTIVES['ac-style'].get(_this2));
	                _Directives.Directives._if.call(_this2, _private.PRIVATES.DIRECTIVES['ac-if'].get(_this2));
	                _Directives.Directives._class.call(_this2, _private.PRIVATES.DIRECTIVES['ac-class'].get(_this2));
	                _Directives.Directives._attr.call(_this2, _private.PRIVATES.DIRECTIVES['ac-attr'].get(_this2));
	                _Directives.Directives._link.call(_this2, _private.PRIVATES.DIRECTIVES['ac-link'].get(_this2));
	                _Directives.Directives._hostClasses.call(_this2, _private.PRIVATES.HOST.CLASS.get(_this2));
	                _Directives.Directives._hostStyles.call(_this2, _private.PRIVATES.HOST.STYLE.get(_this2));

	                // Interpolation.interpolationRun.call(this, this.$interpolationArray);

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
	                            new comp.c(r);
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
	                new _core.RouteSwitcher(router);
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

	            _private.PRIVATES.SUBSCRIPTIONS.set(this, rest);
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
	            } else {
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
	            _Directives.Directives.removeEventListeners.call(this, _private.PRIVATES.EVENTS.get(this));

	            // unsubscribe from global events
	            if (_private.PRIVATES.GLOBAL_EVENTS.get(this)) {
	                _private.PRIVATES.GLOBAL_EVENTS.get(this).unsubscribe();
	            }
	            //unsubscribe from router changes
	            if (this.$routerSub) {
	                // console.log('destroyed', this);
	                this.$routerSub.unsubscribe();
	            }

	            //unsubscribe from components subscribers
	            _private.PRIVATES.SUBSCRIPTIONS.get(this).forEach(function (item) {
	                return item.unsubscribe();
	            });

	            this.root = null;
	            this.onDestroy();
	        }
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

	            Object.defineProperty(this, 'options', {
	                value: Object.assign({}, options),
	                writable: false
	            });

	            Object.defineProperty(this, 'tpl', { value: options.template || 'Empty template', writable: false });
	            Object.defineProperty(this, 'props', { value: new _core.ObservableModel(options.props), writable: false });

	            Object.defineProperty(this, 'type', { value: options.type, writable: false });

	            Object.defineProperty(this, '$refs', { value: {}, writable: false });
	            Object.defineProperty(this, '$attrs', { value: {}, writable: false });
	            Object.defineProperty(this, '$routerSub', { value: null, writable: true });

	            this.root.COMPONENT = this;

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
	            for (var array in _private.PRIVATES.DIRECTIVES) {
	                _private.PRIVATES.DIRECTIVES[array].set(this, []);
	            }

	            _private.PRIVATES.EVENTS.set(this, []);
	            _private.PRIVATES.SUBSCRIPTIONS.set(this, []);
	            _private.PRIVATES.GLOBAL_EVENTS.set(this, null);
	            _private.PRIVATES.HOST.EVENTS.set(this, options.hostEvents);
	            _private.PRIVATES.HOST.CLASS.set(this, options.hostClasses);
	            _private.PRIVATES.HOST.STYLE.set(this, options.hostStyles);

	            this.$interpolationArray = [];
	        }
	    }]);

	    return Component;
	}();

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Interpolation = {
	    interpolationInit: function interpolationInit(root, array) {
	        // let regExp = /{{[^%>]+?}}/g;
	        // let matches = root.innerHTML.match(regExp);

	        // if(matches) {        
	        //     matches.forEach((match, i) => {
	        //         let a = deepSearch(array, root, match);
	        //         // console.log(a, match);
	        //         // item.elem.innerHTML = item.elem.innerHTML.replace(expression[0], '<div ac-interpolaction>  </div>');
	        //         // let r = this.getComponentVariable(expression[1].split('.'), this.props)
	        //         // item.elem.innerHTML = item.cached.innerHTML.replace(expression[0], r);
	        //     });
	        // }
	    },

	    interpolationRun: function interpolationRun(array) {
	        // array.forEach(item=>{
	        //     // console.log(item);
	        // })
	    }
	};

	function deepSearch(array, node, match) {
	    node.childNodes.forEach(function (r) {
	        var regExp = /{{([^%>]+)?}}/;
	        var expression = regExp.exec(r.textContent);

	        console.log(r.textContent.trim());
	        if (r.nodeType === 3 && r.textContent.trim() === match) {

	            array.push({
	                elem: r
	            });
	        }
	        deepSearch(array, r, match);
	    });
	    return array;
	}
	exports.default = Interpolation;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RouteSwitcher = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _routerCore = __webpack_require__(36);

	var _routerCore2 = _interopRequireDefault(_routerCore);

	var _core = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RouteSwitcher = exports.RouteSwitcher = function () {
	    function RouteSwitcher(root) {
	        _classCallCheck(this, RouteSwitcher);

	        this.routes = RouteSwitcher.ROUTES;
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
	                        // REMOVE ALL COMPONENTS BEFORE CLEARING
	                        _this.destroyChild(_this.root);
	                        _this.root.innerHTML = null;

	                        var newCompEmpty = _core.Component.COMPONENTS.filter(function (r) {
	                            return r.selector === route.component;
	                        })[0];
	                        if (newCompEmpty) {
	                            var newComp = document.createElement(route.component);
	                            _this.root.appendChild(newComp);
	                            new newCompEmpty.c(newComp, { routeParams: params });
	                        } else {
	                            _this.appendEmpty(_this.root);
	                        }

	                        _this.prevPage = route.path;
	                    }

	                    var router = _this.root.querySelectorAll('child-route-switcher')[0];

	                    if (router) {
	                        _this.destroyChild(router);
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
	                                var _newCompEmpty = _core.Component.COMPONENTS.filter(function (r) {
	                                    return r.selector === child.component;
	                                })[0];
	                                new _newCompEmpty.c(_newComp);
	                            } else {
	                                _this.appendEmpty(router);
	                            }
	                            _this.prevChild = path;
	                        }
	                    }
	                }, route.children);
	            });
	            _routerCore2.default.update();
	        }
	    }, {
	        key: 'destroyChild',
	        value: function destroyChild(root) {
	            _core.Component.COMPONENTS.forEach(function (r) {
	                var a = root.querySelectorAll(r.selector);
	                a.forEach(function (r) {
	                    r.COMPONENT.destroy();
	                });
	            });
	        }
	    }, {
	        key: 'appendEmpty',
	        value: function appendEmpty(root) {
	            var newComp = document.createElement('div');
	            newComp.innerHTML = 'Please specify a component for this route <b style="color: red">' + _routerCore2.default.getCurrentFullPath().join('/') + '</b>!';
	            root.appendChild(newComp);
	        }
	    }]);

	    return RouteSwitcher;
	}();

/***/ }),
/* 36 */
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

	            var a = _this.getCurrentRoute(_this.getFullStringPath());
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
	        key: 'getFullStringPath',
	        value: function getFullStringPath() {
	            return location.pathname.substr(1) || '/';
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
	    }
	};

	exports.Utils = Utils;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Sortable = undefined;

	var _sortable = __webpack_require__(41);

	var _sortable2 = _interopRequireDefault(_sortable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Sortable = _sortable2.default;

/***/ }),
/* 41 */
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

	            if (target && target !== this.dragEl && target.nodeName === this.dragEl.nodeName && target.parentNode === this.dragEl.parentNode) {
	                if (target.nextElementSibling === this.dragEl) {
	                    this.root.insertBefore(this.dragEl, target);
	                } else if (!target.nextElementSibling) {
	                    this.insertAfter(this.dragEl, target);
	                } else {
	                    this.root.insertBefore(this.dragEl, target.nextElementSibling);
	                }
	            }
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
/* 42 */
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
	        key: 'makeRequest',
	        value: function makeRequest(opts) {
	            var _this3 = this;

	            return new Promise(function (resolve, reject) {
	                var xhr = new XMLHttpRequest();
	                xhr.open(opts.method, _this3.server + opts.url);
	                xhr.onload = function () {
	                    if (this.status >= 200 && this.status < 300) {
	                        resolve(xhr.response);
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

	            return response.then(function (res) {
	                return JSON.parse(res);
	            }).then(function (res) {
	                return _this8.createEntity(res);
	            }).catch(function (err) {
	                return Promise.reject(err);
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
/* 43 */
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