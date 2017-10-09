/*!
 * ace-js 0.3.4
 * May be freely distributed under the MIT license 
 * Author: Bogdan Zinkevich
 * Last update: 2017-10-9 15:43:13
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
/******/ 	var hotCurrentHash = "5677bed4939119ea4c77"; // eslint-disable-line no-unused-vars
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
/******/ 			var chunkId = 0;
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

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _main = __webpack_require__(2);

	var _main2 = _interopRequireDefault(_main);

	var _core = __webpack_require__(6);

	var _controls = __webpack_require__(45);

	var _home = __webpack_require__(51);

	var _root = __webpack_require__(53);

	var _header = __webpack_require__(55);

	var _plugins = __webpack_require__(57);

	var _controls2 = __webpack_require__(59);

	var _notFound = __webpack_require__(61);

	var _documentation = __webpack_require__(63);

	var _documentation2 = _interopRequireDefault(_documentation);

	var _upperCaseDirective = __webpack_require__(100);

	var _upperCaseDirective2 = _interopRequireDefault(_upperCaseDirective);

	var _router = __webpack_require__(101);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _core.Register)({
	    root: {
	        c: _root.RootComponent,
	        selector: 'app-root'
	    },
	    styles: _main2.default,
	    components: [{ c: _header.HeaderComponent, selector: 'app-header' }, { c: _home.HomeComponent, selector: 'app-home' }, { c: _plugins.PluginsComponent, selector: 'app-plugins' }, { c: _controls2.ControlsComponent, selector: 'app-controls' }, { c: _notFound.NotFoundComponent, selector: 'app-not-found' }, { c: _controls.DatepickerComponent, selector: 'app-datepicker' }],
	    directives: [_upperCaseDirective2.default],
	    modules: [_documentation2.default],
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
	exports.push([module.id, ".content--end {\n  justify-content: flex-end;\n}\n\n.content--space-between {\n  justify-content: space-between;\n}\n\n.content--center {\n  align-items: center;\n}\n\n.flex {\n  display: flex;\n}\n\n.input-file {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n.app-container {\n  width: 1024px;\n  margin: 0 auto;\n}\n\n.app-btn {\n  border: none;\n  background: none;\n  padding: 10px 30px;\n  cursor: pointer;\n  color: white;\n  position: relative;\n  background-color: #17b6ed;\n  border-radius: 2px;\n}\n\n.app-btn.small {\n  width: 150px;\n}\n\n.app-btn input[type='file'] {\n  opacity: 0;\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.app-btn:hover {\n  background-color: #46c5f1;\n}\n\nheader {\n  height: 60px;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  background-color: #ffffff;\n}\n\nheader .logo {\n  float: left;\n}\n\nheader .logo img {\n  width: auto;\n  height: 39px;\n}\n\nheader .logo .gantt--main-menu-item {\n  /*padding: 0 $step * 8 0 0;*/\n  height: 39px;\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: bold;\n}\n\nheader .gantt--main-menu {\n  display: flex;\n  height: 100%;\n  float: left;\n  align-items: center;\n}\n\nheader .gantt--main-menu .gantt--main-menu-item {\n  color: #191919;\n  position: relative;\n}\n\nheader .gantt--main-menu .gantt--main-menu-item.active:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  border-bottom: 3px solid #f9d710;\n}\n\nheader .gantt--main-menu-item {\n  padding: 10px;\n  height: 100%;\n  display: block;\n  text-decoration: none;\n  color: #676767;\n  font-size: 16px;\n  font-weight: 300;\n}\n\nheader .gantt--main-menu-item:hover {\n  opacity: 0.8;\n}\n\nheader .right-menu {\n  float: right;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n\nheader .right-menu .search-input {\n  margin-right: 10px;\n}\n\nheader .right-menu .search-input input[type=\"text\"] {\n  height: 39px;\n  padding: 0 32px 0 12px;\n  font-size: 16px;\n  border: none;\n  border-top: 3px solid transparent;\n  border-bottom: 3px solid #f9d710;\n  box-sizing: border-box;\n}\n\nheader .right-menu .search-input input[type=\"text\"]:focus {\n  border: 3px solid #0a0a0a;\n  padding-right: 29px;\n}\n\nheader .right-menu .search-input i {\n  color: #0a0a0a;\n  position: absolute;\n  top: 0;\n  right: 8px;\n  font-size: 18px;\n  bottom: 0;\n  margin: auto;\n  width: 18px;\n  height: 18px;\n}\n\nheader .right-menu .profile-menu {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 14px;\n  color: #191919;\n  font-weight: 500;\n  position: relative;\n  cursor: pointer;\n}\n\nheader .right-menu .profile-menu .avatar {\n  background-size: cover !important;\n  background-position: center center !important;\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n}\n\nheader .right-menu .profile-menu .username {\n  margin-right: 10px;\n}\n\nfooter {\n  background-size: 46px;\n  background-position: 0;\n  height: 40px;\n}\n\nfooter .info-panel {\n  font-size: 0;\n  display: inline-flex;\n  justify-content: flex-start;\n  padding: 4px 8px;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3);\n}\n\nfooter .info-panel__item {\n  font-size: 12px;\n  display: block;\n  min-width: 200px;\n  background-color: #ffffff;\n  border: 1px solid #0a0a0a;\n  text-align: right;\n  line-height: 16px;\n  padding: 8px;\n  text-transform: uppercase;\n}\n\nfooter .info-panel__item + .info-panel__item {\n  margin-left: 12px;\n}\n\napp-home {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  text-align: center;\n}\n\napp-home .app-home__bottom {\n  margin-top: 90px;\n}\n\napp-not-found {\n  width: 100%;\n}\n\napp-not-found h1 {\n  display: flex;\n  /* flex-direction: column; */\n  /* flex: 1; */\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100% - 60px);\n  margin: 0;\n}\n\napp-documentation {\n  width: 100%;\n}\n\napp-documentation .main-content {\n  width: 100%;\n  display: flex;\n}\n\napp-documentation .main-content .main-list {\n  width: 15%;\n  border-right: 1px solid #ccc;\n  padding: 20px 40px 20px 40px;\n  overflow: auto;\n}\n\napp-documentation .main-content .main-list .list-head {\n  margin-bottom: 5px;\n}\n\napp-documentation .main-content .main-list > li {\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\napp-documentation .main-content .main-list ol .active {\n  color: #17b6ed;\n}\n\napp-documentation .main-content .main-list ol li {\n  padding-left: 20px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 400;\n}\n\napp-documentation .main-content .main-list ol li a {\n  color: #000;\n  display: block;\n  padding: 5px;\n}\n\napp-documentation .main-content .main-list ol li a:hover {\n  background: #f5f5f5;\n}\n\napp-documentation .main-content .main-list ol li:hover {\n  text-decoration: underline;\n}\n\napp-documentation .main-content .documentation-section {\n  width: 85%;\n  padding-left: 20px;\n  overflow: auto;\n  padding: 20px 40px 20px 40px;\n}\n\napp-documentation main {\n  height: 100%;\n  display: flex;\n  flex: 1;\n  user-select: none;\n  position: relative;\n  border-bottom: 1px solid #ccc;\n}\n\napp-documentation .code-block {\n  display: block;\n  margin: 10px 0 10px;\n  font-size: 14px;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: rgba(247, 247, 247, 0.85);\n  border: 1px solid #f3eeee;\n  border-radius: 4px;\n}\n\napp-documentation .code-block .code-header {\n  background: #ccc;\n  padding: 10px;\n}\n\napp-documentation .code-block .attr {\n  color: #17b6ed;\n}\n\napp-documentation .code-block .text {\n  font-weight: bold;\n}\n\napp-documentation .folder-structure {\n  padding: 20px;\n  width: 50%;\n}\n\napp-documentation .folder-structure .children {\n  position: relative;\n  overflow: hidden;\n  padding-left: 24px;\n}\n\napp-documentation .folder-structure .children:first-child {\n  padding: 0;\n}\n\napp-documentation .folder-structure--item {\n  padding: 5px 0px;\n  position: relative;\n}\n\napp-documentation .folder-structure--item .folder-structure--item {\n  padding-left: 30px;\n}\n\napp-documentation .folder-structure--item .folder-structure--item:before {\n  content: \"\";\n  left: 10px;\n  bottom: 15px;\n  width: 16px;\n  height: 9999px;\n  position: absolute;\n  border-width: 0 0 1px 1px;\n  border-style: solid;\n  border-color: #ccc;\n  border-radius: 0 0 0 3px;\n}\n\napp-documentation .comment {\n  display: inline-block;\n  color: #aaa;\n}\n\napp-documentation pre {\n  padding: 10px;\n}\n\napp-documentation .kwd {\n  color: #17b6ed;\n}\n\napp-documentation .str {\n  color: #d4ce10;\n}\n\napp-documentation .typ {\n  color: red;\n}\n\napp-documentation .met {\n  color: #00d400;\n}\n\napp-documentation .white {\n  color: #fff;\n}\n\napp-documentation .title {\n  font-family: 'Roboto', sans-serif;\n  margin-right: 20px;\n}\n\napp-documentation .section-title {\n  font-size: 16px;\n  margin-top: 20px;\n  border-bottom: 1px solid #ccc;\n  padding: 6px;\n}\n\napp-documentation .in-development {\n  color: red;\n}\n\napp-documentation .text {\n  width: 500px;\n  font-weight: 300;\n  margin: 10px 0;\n}\n\napp-documentation .block {\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\napp-documentation .label {\n  padding: 3px 5px;\n  display: inline-block;\n  color: #17b6ed;\n  font-weight: bold;\n  font-size: 16px;\n  border-radius: 3px;\n  border: 1px solid;\n}\n\nchild-route-switcher {\n  display: block;\n  width: 60%;\n}\n\napp-documentation-directives .clicked {\n  color: green;\n}\n\napp-documentation-directives .unclicked {\n  color: red;\n}\n\napp-documentation-architecture {\n  width: 100%;\n}\n\napp-documentation-forms .ac-error[type] {\n  border: 1px solid rgba(255, 0, 0, 0.47);\n}\n\napp-documentation-forms .input {\n  margin: 10px 0px;\n}\n\napp-documentation-forms .input input {\n  border: 1px solid #ccc;\n  padding: 4px;\n}\n\napp-documentation-forms button {\n  cursor: pointer;\n  padding: 4px;\n  border: none;\n  background: #17b6ed;\n  color: #fff;\n  border-radius: 4px;\n}\n\napp-plugins,\napp-controls {\n  width: 100%;\n}\n\napp-plugins .main-content,\napp-controls .main-content {\n  width: 100%;\n  display: flex;\n}\n\napp-plugins .main-content .main-list,\napp-controls .main-content .main-list {\n  width: 15%;\n  border-right: 1px solid #ccc;\n  padding: 20px 40px 20px 40px;\n  overflow: auto;\n}\n\napp-plugins .main-content .main-list .list-head,\napp-controls .main-content .main-list .list-head {\n  margin-bottom: 5px;\n}\n\napp-plugins .main-content .plugins-section,\napp-controls .main-content .plugins-section {\n  width: 85%;\n  padding-left: 20px;\n  overflow: auto;\n  padding: 20px 40px 20px 40px;\n}\n\napp-plugins main,\napp-controls main {\n  height: 100%;\n  display: flex;\n  flex: 1;\n  user-select: none;\n  position: relative;\n  border-bottom: 1px solid #ccc;\n}\n\napp-container {\n  width: 100%;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-bottom: 20px;\n}\n\nh1 {\n  font-size: 26px;\n}\n\nh2 {\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\np {\n  font-size: 14px;\n  margin-bottom: 15px;\n  line-height: 2;\n}\n\na {\n  color: #17b6ed;\n  cursor: pointer;\n}\n\nimg {\n  width: 100%;\n}\n\nb {\n  font-weight: 700;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.relative {\n  position: relative;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.attached-file {\n  display: flex;\n  height: 40px;\n  align-items: center;\n  margin: 5px 0px;\n  justify-content: space-between;\n}\n\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\n.dropdown-container {\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.dropdown {\n  position: absolute;\n  background: #fff;\n  border: 1px solid #ccc;\n  /* bottom: 0; */\n  top: 100%;\n  z-index: 1000;\n  width: 200px;\n  right: 0;\n  opacity: 0;\n  margin-top: 35px;\n  visibility: hidden;\n  transition-property: all;\n  transition-duration: 0.3s;\n  transition-timing-function: ease;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.dropdown ul li.active {\n  background: #f1f1f1;\n}\n\n.dropdown ul li a {\n  font-size: 12px;\n  padding: 10px;\n  display: block;\n}\n\n.dropdown ul li:hover {\n  background: #f1f1f1;\n}\n\n.dropdown.open {\n  opacity: 1;\n  visibility: visible;\n  margin-top: 0;\n}\n\napp-status-dropdown .dropdown-value {\n  cursor: pointer;\n  padding: 4px;\n  color: #fff;\n  border-radius: 4px;\n  background: #17b6ed;\n}\n\napp-status-dropdown .dropdown-value.done {\n  background: #5db95d;\n}\n\napp-status-dropdown .dropdown-value.in_progress {\n  background: #17b6ed;\n}\n\napp-status-dropdown .dropdown-value.feedback {\n  background: #c3c3c3;\n}\n\napp-color-dropdown .dropdown {\n  left: 0;\n  max-height: 200px;\n  padding: 5px;\n  overflow: auto;\n}\n\napp-color-dropdown .dropdown-item {\n  margin: 5px;\n  cursor: pointer;\n  border-radius: 100%;\n  transition: 0.2s all;\n}\n\napp-color-dropdown .dropdown-item.active {\n  transform: scale(1.2);\n}\n\napp-color-dropdown .dropdown-item:hover {\n  transform: scale(1.2);\n}\n\napp-color-dropdown .dropdown-item-color {\n  border-radius: 100%;\n  width: 30px;\n  height: 30px;\n}\n\napp-color-dropdown .dropdown ul {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n}\n\napp-color-dropdown .dropdown-value {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n}\n\napp-assignee-dropdown .profile-menu {\n  align-items: center;\n  display: flex;\n}\n\napp-assignee-dropdown .avatar {\n  width: 30px;\n  display: flex;\n  margin-right: 10px;\n  background-size: cover !important;\n  background-position: center;\n  height: 30px;\n  border-radius: 100%;\n}\n\napp-common-dropdown {\n  display: inline-block;\n}\n\napp-common-dropdown .dropdown-value {\n  cursor: pointer;\n  padding: 4px;\n  color: #fff;\n  border-radius: 4px;\n  background: #cccccc;\n}\n\n.content--end {\n  justify-content: flex-end;\n}\n\n.content--space-between {\n  justify-content: space-between;\n}\n\n.content--center {\n  align-items: center;\n}\n\n.flex {\n  display: flex;\n}\n\n.input-file {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n.app-container {\n  width: 1024px;\n  margin: 0 auto;\n}\n\n.app-btn {\n  border: none;\n  background: none;\n  padding: 10px 30px;\n  cursor: pointer;\n  color: white;\n  position: relative;\n  background-color: #17b6ed;\n  border-radius: 2px;\n}\n\n.app-btn.small {\n  width: 150px;\n}\n\n.app-btn input[type='file'] {\n  opacity: 0;\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.app-btn:hover {\n  background-color: #46c5f1;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-bottom: 20px;\n}\n\nh1 {\n  font-size: 26px;\n}\n\nh2 {\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\np {\n  font-size: 14px;\n  margin-bottom: 15px;\n  line-height: 2;\n}\n\na {\n  color: #17b6ed;\n  cursor: pointer;\n}\n\nimg {\n  width: 100%;\n}\n\nb {\n  font-weight: 700;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.relative {\n  position: relative;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.attached-file {\n  display: flex;\n  height: 40px;\n  align-items: center;\n  margin: 5px 0px;\n  justify-content: space-between;\n}\n\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\n.app-form__row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.app-form__row.col-2 .app-form__label {\n  width: 48%;\n}\n\n.app-form__label {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n}\n\n.app-form__label__text {\n  margin-bottom: 5px;\n  color: #aaa;\n  font-weight: normal;\n}\n\n.app-form__subtitle {\n  position: absolute;\n  bottom: 11px;\n  left: 11px;\n}\n\n.app-form__subtitle + .app-form__label__input {\n  padding-left: 21px;\n}\n\n.app-form__label__input {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n}\n\n.app-form__label__textarea {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n  resize: vertical;\n  max-height: 300px;\n}\n\n.app-form + .app-form {\n  margin-top: 30px;\n}\n\ninput.error {\n  border: 1px solid rgba(255, 0, 0, 0.47);\n}\n\n.modal-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n}\n\n.modal-container .modal {\n  position: fixed;\n  width: 40%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: #fff;\n  margin: auto;\n  height: 80%;\n  box-shadow: 0px 0px 20px -2px #000;\n  padding: 30px;\n  min-width: 800px;\n  border-radius: 3px;\n  overflow: auto;\n}\n\n.modal-container .modal-bottom {\n  float: right;\n}\n\n.modal-container .modal-bottom .app-btn {\n  margin-left: 10px;\n}\n\n.modal-container .modal.crop {\n  user-select: none;\n  /*.tag_frame_inner{*/\n  /*width: 550px;*/\n  /*}*/\n}\n\n.modal-container .modal.crop .tag_faded {\n  background: #000;\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n  cursor: crosshair;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 1030;\n  position: absolute;\n}\n\n.modal-container .modal.crop .tag_frame {\n  position: absolute;\n  cursor: move;\n  z-index: 1040;\n  left: 0;\n  top: 0;\n  width: 200px;\n  height: 200px;\n  display: block;\n  overflow: hidden;\n  text-align: left;\n  direction: ltr;\n}\n\n.modal-container .modal.crop .tag_frame_resizer {\n  position: absolute;\n  background-color: #f2f2f2;\n  width: 10px;\n  height: 10px;\n  z-index: 9999;\n  opacity: 0.3;\n  transition-property: opacity;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n\n.modal-container .modal.crop .tag_frame_resizer:hover {\n  opacity: 0.9;\n}\n\n.modal-container .modal.crop .j-modal__content {\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\n.modal-container .modal.crop .j-modal__preview {\n  margin: auto;\n  display: block;\n  border-radius: 100%;\n  width: 25%;\n}\n\n.modal-container .modal.crop .j-modal__crop_container {\n  position: relative;\n  margin: 0px auto;\n  font-size: 0px;\n}\n\n/* j-calendar\r\n------------------------------------------------------------------- */\n\n.j-calendar {\n  display: inline-flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background: #fff;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n  left: 0;\n  top: 100%;\n  position: absolute;\n  z-index: 1;\n  font-weight: normal;\n}\n\n.j-calendar__wrap {\n  display: flex;\n}\n\n.j-calendar__item + .j-calendar__item .j-calendar__content {\n  border-left: 1px solid #d9d9d9;\n}\n\n.j-calendar__item + .j-calendar__item .j-calendar__header {\n  border-left: 1px solid #d9d9d9;\n}\n\n.j-calendar__header {\n  width: 285px;\n  height: 50px;\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  font-size: 15px;\n  color: #fff;\n  background: #17b6ed;\n}\n\n.j-calendar__header__center,\n.j-calendar__header__left,\n.j-calendar__header__right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.j-calendar__header__left,\n.j-calendar__header__right {\n  width: 50px;\n  cursor: pointer;\n}\n\n.j-calendar__header__left:hover,\n.j-calendar__header__right:hover {\n  background: #11a2d5;\n}\n\n.j-calendar__header__empty {\n  width: 50px;\n}\n\n.j-calendar__content {\n  width: 285px;\n  padding: 10px;\n}\n\n.j-calendar__days {\n  display: flex;\n}\n\n.j-calendar__days__item {\n  width: 14.285%;\n  font-size: 13px;\n  cursor: default;\n  text-align: center;\n}\n\n.j-calendar__days__item--output {\n  color: #17b6ed;\n}\n\n.j-calendar__date {\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 5px;\n}\n\n.j-calendar__date__item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  width: 14.285%;\n  font-size: 13px;\n  position: relative;\n}\n\n.j-calendar__date__item.empty {\n  opacity: 0;\n  cursor: default !important;\n}\n\n.j-calendar__date__item:before {\n  content: '';\n  width: 26px;\n  height: 26px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  position: absolute;\n  border-radius: 100%;\n}\n\n.j-calendar__date__item--active {\n  color: #fff;\n  cursor: pointer;\n}\n\n.j-calendar__date__item--active:before {\n  background: #17b6ed;\n}\n\n.j-calendar__date__item--circle {\n  cursor: pointer;\n}\n\n.j-calendar__date__item--circle:before {\n  border: 1px solid #17b6ed;\n}\n\n.j-calendar__date__item--inactive {\n  cursor: default !important;\n  color: #b7b7b7;\n}\n\n.j-calendar__date__item--empty {\n  cursor: default;\n}\n\n.j-calendar__date__item:not(.j-calendar__date__item--empty):not(.j-calendar__date__item--active):not(.j-calendar__date__item--circle):hover {\n  color: #17b6ed;\n  cursor: pointer;\n}\n\n.j-calendar__date__item:not(.j-calendar__date__item--empty):not(.j-calendar__date__item--active):not(.j-calendar__date__item--circle):hover:before {\n  background: #ebecee;\n}\n\n.j-calendar__date__item span {\n  position: relative;\n}\n\n.j-calendar__bottom {\n  margin: 15px 0;\n  text-align: center;\n}\n\n/*!\r\n * animate.css -http://daneden.me/animate\r\n * Version - 3.5.2\r\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\r\n *\r\n * Copyright (c) 2017 Daniel Eden\r\n */\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  animation-duration: 2s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  animation-duration: .75s;\n}\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%, 43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n}\n\n.bounce {\n  animation-name: bounce;\n  transform-origin: center bottom;\n}\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  animation-name: pulse;\n}\n\n@keyframes rubberBand {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  animation-name: rubberBand;\n}\n\n@keyframes shake {\n  from, to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  animation-name: shake;\n}\n\n@keyframes headShake {\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  animation-timing-function: ease-in-out;\n  animation-name: headShake;\n}\n\n@keyframes swing {\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  transform-origin: top center;\n  animation-name: swing;\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes wobble {\n  from {\n    transform: none;\n  }\n\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.wobble {\n  animation-name: wobble;\n}\n\n@keyframes jello {\n  from, 11.1%, to {\n    transform: none;\n  }\n\n  22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    transform: skewX(0.39063deg) skewY(0.39063deg);\n  }\n\n  88.8% {\n    transform: skewX(-0.19531deg) skewY(-0.19531deg);\n  }\n}\n\n.jello {\n  animation-name: jello;\n  transform-origin: center;\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  animation-name: bounceIn;\n}\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInDown {\n  animation-name: bounceInDown;\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  animation-name: bounceInLeft;\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  animation-name: bounceInRight;\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  animation-name: bounceInUp;\n}\n\n@keyframes bounceOut {\n  20% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\n\n.bounceOut {\n  animation-name: bounceOut;\n}\n\n@keyframes bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  animation-name: bounceOutDown;\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  animation-name: bounceOutLeft;\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  animation-name: bounceOutRight;\n}\n\n@keyframes bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  animation-name: bounceOutUp;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  animation-name: fadeInDown;\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInDownBig {\n  animation-name: fadeInDownBig;\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig {\n  animation-name: fadeInLeftBig;\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInRightBig {\n  animation-name: fadeInRightBig;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInUpBig {\n  animation-name: fadeInUpBig;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  animation-name: fadeOutDown;\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  animation-name: fadeOutDownBig;\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  animation-name: fadeOutLeft;\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  animation-name: fadeOutLeftBig;\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  animation-name: fadeOutRight;\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  animation-name: fadeOutRightBig;\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  animation-name: fadeOutUp;\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  animation-name: fadeOutUpBig;\n}\n\n@keyframes flip {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  animation-name: flip;\n}\n\n@keyframes flipInX {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipInX;\n}\n\n@keyframes flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipInY;\n}\n\n@keyframes flipOutX {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@keyframes flipOutY {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipOutY;\n}\n\n@keyframes lightSpeedIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  animation-name: lightSpeedIn;\n  animation-timing-function: ease-out;\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  animation-name: lightSpeedOut;\n  animation-timing-function: ease-in;\n}\n\n@keyframes rotateIn {\n  from {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: center;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  animation-name: rotateIn;\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  animation-name: rotateInDownLeft;\n}\n\n@keyframes rotateInDownRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  animation-name: rotateInDownRight;\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  animation-name: rotateInUpLeft;\n}\n\n@keyframes rotateInUpRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  animation-name: rotateInUpRight;\n}\n\n@keyframes rotateOut {\n  from {\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  animation-name: rotateOut;\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  animation-name: rotateOutDownLeft;\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  animation-name: rotateOutDownRight;\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  animation-name: rotateOutUpLeft;\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  animation-name: rotateOutUpRight;\n}\n\n@keyframes hinge {\n  0% {\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  animation-name: hinge;\n}\n\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.rollIn {\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  animation-name: rollOut;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  animation-name: zoomIn;\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInDown {\n  animation-name: zoomInDown;\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInLeft {\n  animation-name: zoomInLeft;\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInRight {\n  animation-name: zoomInRight;\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInUp {\n  animation-name: zoomInUp;\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  animation-name: zoomOut;\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomOutDown {\n  animation-name: zoomOutDown;\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  animation-name: zoomOutLeft;\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  animation-name: zoomOutRight;\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomOutUp {\n  animation-name: zoomOutUp;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  animation-name: slideInDown;\n}\n\n@keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  animation-name: slideInLeft;\n}\n\n@keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  animation-name: slideInRight;\n}\n\n@keyframes slideInUp {\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  animation-name: slideInUp;\n}\n\n@keyframes slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  animation-name: slideOutDown;\n}\n\n@keyframes slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  animation-name: slideOutLeft;\n}\n\n@keyframes slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  animation-name: slideOutRight;\n}\n\n@keyframes slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  animation-name: slideOutUp;\n}", ""]);

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
	exports.Store = exports.Http = exports.Controls = exports.Plugins = exports.Utils = exports.GlobalEvents = exports.TemplateEngine = exports.RouteSwitcher = exports.Router = exports.Component = exports.Register = exports.Decorators = exports.ObservableCollection = exports.ObservableModel = undefined;

	var _observable = __webpack_require__(7);

	var _decorators = __webpack_require__(8);

	var Decorators = _interopRequireWildcard(_decorators);

	var _register = __webpack_require__(37);

	var _component = __webpack_require__(34);

	var _routerSwitcher = __webpack_require__(38);

	var _routerCore = __webpack_require__(39);

	var _routerCore2 = _interopRequireDefault(_routerCore);

	var _templateEngine = __webpack_require__(40);

	var _globalEvents = __webpack_require__(41);

	var _globalEvents2 = _interopRequireDefault(_globalEvents);

	var _utils = __webpack_require__(42);

	var _plugins = __webpack_require__(43);

	var Plugins = _interopRequireWildcard(_plugins);

	var _controls = __webpack_require__(45);

	var Controls = _interopRequireWildcard(_controls);

	var _http = __webpack_require__(49);

	var _store = __webpack_require__(50);

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

	var _decorators = __webpack_require__(8);

	var _deepmerge = __webpack_require__(36);

	var _deepmerge2 = _interopRequireDefault(_deepmerge);

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

	        // set(data, value) {
	        //     if (typeof data == 'object') {
	        //         if (data.length || data.length === 0) {
	        //             this._data = data;
	        //         } else {
	        //             // for (let key in data) {
	        //             //     this._data[key] = data[key];
	        //             // }
	        //             this._data = deepmerge(this._data, data);
	        //             this.defineProperties(data);
	        //         }
	        //     } else {
	        //         this.defineProperty(data, value);
	        //         this._data[data] = value;
	        //     }

	        //     this._callAll();
	        // }

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
	        key: 'set',
	        value: function set(data, value) {
	            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object') {
	                var dontMerge = function dontMerge(destination, source) {
	                    return source;
	                };
	                this._data = (0, _deepmerge2.default)(this._data, data, { arrayMerge: dontMerge });
	                this.defineProperties(data);
	            } else {
	                this.defineProperty(data, value);
	                this._data[data] = value;
	            }

	            this._callAll();
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
	        value: function set(data, value) {
	            this._data = data;
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

	var _directive = __webpack_require__(35);

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
	exports.default = ComponentDecorator;

	var _core = __webpack_require__(6);

	var _directives = __webpack_require__(12);

	var _events = __webpack_require__(13);

	var _Directives = __webpack_require__(14);

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
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var DIRECTIVES_NAMES = exports.DIRECTIVES_NAMES = ['ac-for', 'ac-style', 'ac-value', 'ac-input', 'ac-model', 'ac-if', 'ac-class', 'ac-link', 'ac-attr', 'ac-on', 'ac-pattern', 'ac-outside', 'ac-ref', 'ac-form-validation'];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENTS_NAMES = exports.EVENTS_NAMES = ['click', 'keyup', 'change', 'mouseover', 'mouseout', 'mousedown', 'mouseup', 'scroll', 'mousewheel', 'submit', 'focus', 'blur', 'dragstart'];

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

	var _formValidation2 = __webpack_require__(32);

	var _customDirective2 = __webpack_require__(33);

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
	    _hostStyles: _host._hostStyles,
	    _formValidation: _formValidation2._formValidation,
	    _customDirective: _customDirective2._customDirective
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
	                formatterData = formatterData[1].trim();
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
	                // comment: Utils.insertAfter(document.createComment(directive + ': ' + attr), elem),
	                items: [],
	                parent: _elem.parentNode,
	                cached: _elem
	            };

	            // only for certain directives
	            if (directive === 'ac-for' || directive === 'ac-if') {
	                _obj.comment = _core.Utils.insertAfter(document.createComment(directive + ': ' + _attr), _elem);
	            }
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._events = _events;
	exports.removeEventListeners = removeEventListeners;
	exports.createEventObject = createEventObject;

	var _private = __webpack_require__(23);

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

	var _private = __webpack_require__(23);

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
	exports._formValidation = _formValidation;

	var _core = __webpack_require__(6);

	function _formValidation(array, data) {
	    array.forEach(function (item) {
	        var attr = item.attr;
	        item.elem.addEventListener('change', function (e) {
	            var target = e.target;
	            target.checkValidity() ? target.classList.remove('ac-error') : target.classList.add('ac-error');
	        }, false);
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

	    _component.Component.DIRECTIVES.forEach(function (directive) {
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
	            Component.DIRECTIVES.forEach(function (Directive) {
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
	            _Directives.Directives._formValidation.call(this, _private.PRIVATES.DIRECTIVES['ac-form-validation'].get(this));

	            //TODO rewrite
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
	        key: 'setComponentVariable',
	        value: function setComponentVariable(string, value) {
	            var params = string.split('.');
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
	            var _this4 = this;

	            for (var array in _private.PRIVATES.DIRECTIVES) {
	                _private.PRIVATES.DIRECTIVES[array].set(this, []);
	            }

	            _private.PRIVATES.EVENTS.set(this, []);
	            _private.PRIVATES.SUBSCRIPTIONS.set(this, []);
	            _private.PRIVATES.GLOBAL_EVENTS.set(this, null);
	            _private.PRIVATES.HOST.EVENTS.set(this, options.hostEvents);
	            _private.PRIVATES.HOST.CLASS.set(this, options.hostClasses);
	            _private.PRIVATES.HOST.STYLE.set(this, options.hostStyles);

	            Component.DIRECTIVES.forEach(function (directive) {
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
	exports.default = DirectiveDecorator;
	function DirectiveDecorator(decoratorParams) {
	    return function decorator(Class) {
	        Class.params = decoratorParams;
	        return Class;
	    };
	}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';

	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
	    return Array.isArray(val) ? [] : {}
	}

	function cloneIfNecessary(value, optionsArgument) {
	    var clone = optionsArgument && optionsArgument.clone === true;
	    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
	}

	function defaultArrayMerge(target, source, optionsArgument) {
	    var destination = target.slice();
	    source.forEach(function(e, i) {
	        if (typeof destination[i] === 'undefined') {
	            destination[i] = cloneIfNecessary(e, optionsArgument);
	        } else if (isMergeableObject(e)) {
	            destination[i] = deepmerge(target[i], e, optionsArgument);
	        } else if (target.indexOf(e) === -1) {
	            destination.push(cloneIfNecessary(e, optionsArgument));
	        }
	    });
	    return destination
	}

	function mergeObject(target, source, optionsArgument) {
	    var destination = {};
	    if (isMergeableObject(target)) {
	        Object.keys(target).forEach(function(key) {
	            destination[key] = cloneIfNecessary(target[key], optionsArgument);
	        });
	    }
	    Object.keys(source).forEach(function(key) {
	        if (!isMergeableObject(source[key]) || !target[key]) {
	            destination[key] = cloneIfNecessary(source[key], optionsArgument);
	        } else {
	            destination[key] = deepmerge(target[key], source[key], optionsArgument);
	        }
	    });
	    return destination
	}

	function deepmerge(target, source, optionsArgument) {
	    var sourceIsArray = Array.isArray(source);
	    var targetIsArray = Array.isArray(target);
	    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	    if (!sourceAndTargetTypesMatch) {
	        return cloneIfNecessary(source, optionsArgument)
	    } else if (sourceIsArray) {
	        var arrayMerge = options.arrayMerge || defaultArrayMerge;
	        return arrayMerge(target, source, optionsArgument)
	    } else {
	        return mergeObject(target, source, optionsArgument)
	    }
	}

	deepmerge.all = function deepmergeAll(array, optionsArgument) {
	    if (!Array.isArray(array) || array.length < 2) {
	        throw new Error('first argument should be an array with at least two elements')
	    }

	    // we are sure there are at least 2 values, so it is safe to have no initial value
	    return array.reduce(function(prev, next) {
	        return deepmerge(prev, next, optionsArgument)
	    })
	};

	var deepmerge_1 = deepmerge;

	module.exports = deepmerge_1;


/***/ }),
/* 37 */
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

	    _component.Component.COMPONENTS = options.components;
	    _core.RouteSwitcher.ROUTES = options.routes;
	    _component.Component.DIRECTIVES = []; // for custom directives

	    if (options.directives) {
	        if (options.directives instanceof Array) {
	            _component.Component.DIRECTIVES = options.directives;
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RouteSwitcher = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _routerCore = __webpack_require__(39);

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
	                        _this.destroyChildren(_this.root);
	                        _this.renderComponent(_this.root, route, params);
	                        _this.prevPage = route.path;
	                    }

	                    var router = _this.root.querySelectorAll('child-route-switcher')[0];

	                    if (router) {
	                        _this.destroyChildren(router);
	                        var current = _this.routes.filter(function (item) {
	                            return item.path === route.path;
	                        })[0];
	                        var path = _routerCore2.default.getCurrentFullPath()[1];
	                        var child = _this.getChild(current, path);

	                        if (_this.prevChild !== path || !_this.prevChild) {
	                            _this.renderComponent(router, child, params);
	                            _this.prevChild = path;
	                        }
	                    }
	                });
	            });
	            _routerCore2.default.update();
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
	        key: 'renderComponent',
	        value: function renderComponent(root, route, params) {
	            if (route) {
	                var newCompObject = _core.Component.COMPONENTS.filter(function (r) {
	                    return r.selector === route.component;
	                })[0];
	                if (newCompObject) {
	                    var newComp = document.createElement(route.component);
	                    this.checkAccess(root, newComp, route);
	                    new newCompObject.c(newComp, { routeParams: params });
	                } else {
	                    this.appendEmpty(root);
	                }
	            } else {
	                this.appendEmpty(root);
	            }
	        }
	    }, {
	        key: 'checkAccess',
	        value: function checkAccess(root, newComp, route) {
	            if (route.protector) {
	                var protector = new route.protector();
	                if (protector.check()) {
	                    root.appendChild(newComp);
	                } else {
	                    this.noAccess(root);
	                }
	            } else {
	                root.appendChild(newComp);
	            }
	        }
	    }, {
	        key: 'destroyChildren',
	        value: function destroyChildren(root) {
	            _core.Component.COMPONENTS.forEach(function (r) {
	                var a = root.querySelectorAll(r.selector);
	                a.forEach(function (r) {
	                    r.COMPONENT.destroy();
	                });
	            });
	            root.innerHTML = null;
	        }
	    }, {
	        key: 'appendEmpty',
	        value: function appendEmpty(root) {
	            var newComp = document.createElement('div');
	            newComp.innerHTML = 'Please specify a component for this route <b style="color: red">' + _routerCore2.default.getCurrentFullPath().join('/') + '</b>!';
	            root.appendChild(newComp);
	        }
	    }, {
	        key: 'noAccess',
	        value: function noAccess(root) {
	            var newComp = document.createElement('div');
	            newComp.innerHTML = 'You have no access to this page';
	            newComp.className = 'no-access';
	            root.appendChild(newComp);
	        }
	    }]);

	    return RouteSwitcher;
	}();

/***/ }),
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
	        return str.replace(/ +/g, "");
	    }
	};

	exports.Utils = Utils;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Sortable = undefined;

	var _sortable = __webpack_require__(44);

	var _sortable2 = _interopRequireDefault(_sortable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Sortable = _sortable2.default;

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DropdownComponent = exports.DatepickerComponent = undefined;

	var _datepicker = __webpack_require__(46);

	var _dropdown = __webpack_require__(47);

	exports.DatepickerComponent = _datepicker.DatepickerComponent;
	exports.DropdownComponent = _dropdown.DropdownComponent;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DatepickerComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _dropdown = __webpack_require__(47);

	var _datepicker = __webpack_require__(48);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import Style from './modal.component.scss';


	var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	// const daysOfWeekShort = ['Mo', 'Tu', 'Wen', 'Th', 'Fr', 'Sat', 'Sun'];
	// const monthDefaultType = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var minutes = 'm';
	var hours = 'h';

	var DatepickerComponent = exports.DatepickerComponent = function (_DropdownComponent) {
	    _inherits(DatepickerComponent, _DropdownComponent);

	    function DatepickerComponent(params) {
	        _classCallCheck(this, DatepickerComponent);

	        return _possibleConstructorReturn(this, (DatepickerComponent.__proto__ || Object.getPrototypeOf(DatepickerComponent)).call(this, params, {
	            template: _datepicker2.default
	        }));
	    }

	    _createClass(DatepickerComponent, [{
	        key: 'INPUT',
	        value: function INPUT(params) {
	            if (params.date) {
	                this.props.set({
	                    model: new Date(params.date),
	                    formattedDate: _core.Utils.getDateByFormat(params.date, 'yyyy-mm-dd')
	                });
	                this.currentDate = new Date(params.date); // init view
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
	            this.currentDate = new Date();
	            this.props.set({ 'daysOfWeekShort': _core.Utils.daysOfWeekShort, formattedDate: _core.Utils.getDateByFormat(this.currentDate, 'yyyy-mm-dd') });
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
	            var a = _core.Utils.monthNames[this.currentDate.getMonth()];
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

	            monthStart = _core.Utils.addDays(monthStart, -emptyDays); // set start position

	            for (var i = 1; i < monthLength + 1 + emptyDays; i++) {
	                var _date = _core.Utils.addDays(monthStart, i - 1);
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

	                if (minDate && day.date.setHours(0, 0, 0, 0) <= minDate.setHours(0, 0, 0, 0)) {
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
	}(_dropdown.DropdownComponent);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DropdownComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _component = __webpack_require__(34);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DropdownComponent = exports.DropdownComponent = function (_Component) {
	    _inherits(DropdownComponent, _Component);

	    function DropdownComponent(params, options) {
	        _classCallCheck(this, DropdownComponent);

	        return _possibleConstructorReturn(this, (DropdownComponent.__proto__ || Object.getPrototypeOf(DropdownComponent)).call(this, params, options));
	    }

	    _createClass(DropdownComponent, [{
	        key: 'openMenu',
	        value: function openMenu(e) {
	            if (this.getRoot().getAttribute('readonly') === null) {
	                this.props.set('_show', !this.props.get('_show'));
	            }
	        }
	    }, {
	        key: 'outside',
	        value: function outside() {
	            this.close();
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            if (this.props.get('_show')) {
	                this.props.set('_show', false);
	            }
	        }
	    }]);

	    return DropdownComponent;
	}(_component.Component);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<div ac-outside=\"outside\" class=\"relative\">\r\n\t<div  style=\"width: 100%\">\r\n\t\t<input type=\"text\" @click=\"openMenu\" class=\"app-form__label__input full-width\" placeholder=\"\"  readonly required ac-value=\"props.formattedDate\">\r\n\t\t<!-- <img class=\"datepicker-icon\" src=\"../../assets/img/hanging-calendar.svg\" alt=\"\"> -->\r\n\t</div>\r\n\r\n\t<div class=\"j-calendar\" ac-if=\"props._show\" >\r\n\t    <div class=\"j-calendar__wrap\">\r\n\t        <div class=\"j-calendar__item\">\r\n\t            <div class=\"j-calendar__header\">\r\n\t                <div class=\"j-calendar__header__left\" @click=\"prev\">\r\n\t                    <span>prev</span>\r\n\t                </div>\r\n\t                <div class=\"j-calendar__header__center\">\r\n\t\t                <span ac-value=\"props.currentMonth\"></span>\r\n\t\t                <span style=\"margin-left: 7px;\" ac-value=\"props.currentYear\"></span>\r\n\t                </div>\r\n\t                <div class=\"j-calendar__header__right\" @click=\"next\">\r\n\t                    <span>Next</span>\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"j-calendar__content\">\r\n\t                <div class=\"j-calendar__days\">\r\n\t                    <div class=\"j-calendar__days__item\" ac-for=\"props.daysOfWeekShort\">\r\n\t\t\t\t\t\t\t<span ac-value=\"index\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t                </div>\r\n\t                <div class=\"j-calendar__date\">\r\n\t                    <div class=\"j-calendar__date__item\" \r\n\t                    ac-class=\"j-calendar__date__item--circle:today, j-calendar__date__item--active:selected, j-calendar__date__item--inactive: inactive\"\r\n\t                    ac-for=\"props.countOfDays\"\r\n\t                    @click=\"select(this)\">\r\n\t\t\t\t\t\t\t<span ac-value=\"index\"></span>\r\n\t                    </div>\r\n\t                </div>\r\n\t            </div>\r\n\t        </div>\r\n\t    </div>\r\n\t</div>\r\n</div>\r\n";

/***/ }),
/* 49 */
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
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HomeComponent = undefined;

	var _core = __webpack_require__(6);

	var _homeComponent = __webpack_require__(52);

	var _homeComponent2 = _interopRequireDefault(_homeComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomeComponent = exports.HomeComponent = function (_Component) {
	    _inherits(HomeComponent, _Component);

	    function HomeComponent(params) {
	        _classCallCheck(this, HomeComponent);

	        return _possibleConstructorReturn(this, (HomeComponent.__proto__ || Object.getPrototypeOf(HomeComponent)).call(this, params, {
	            selector: 'app-home',
	            template: _homeComponent2.default
	            // shadow: true
	        }));
	    }

	    return HomeComponent;
	}(_core.Component);

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<div class=\"app-container\">\r\n  <h1>ACE JS</h1>\r\n  <p><b>AceJs</b> - is a front-end framework based on web components technology.</p>\r\n  <button type=\"\" ac-link=\"documentation\" class=\"app-btn\">GET STARTED</button>\r\n</div>\r\n";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RootComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _rootComponent = __webpack_require__(54);

	var _rootComponent2 = _interopRequireDefault(_rootComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RootComponent = exports.RootComponent = function (_Component) {
	    _inherits(RootComponent, _Component);

	    function RootComponent(params) {
	        _classCallCheck(this, RootComponent);

	        return _possibleConstructorReturn(this, (RootComponent.__proto__ || Object.getPrototypeOf(RootComponent)).call(this, params, {
	            template: _rootComponent2.default
	        }));
	    }

	    _createClass(RootComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            // Http.getCatalog('/catalog');
	        }
	    }]);

	    return RootComponent;
	}(_core.Component);

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<app-header></app-header>\r\n<route-switcher></route-switcher>\r\n<app-footer></app-footer>\r\n<!-- <app-notifications></app-notifications>\r\n<app-confirm-modal></app-confirm-modal> -->";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _decorators = __webpack_require__(8);

	var _headerComponent = __webpack_require__(56);

	var _headerComponent2 = _interopRequireDefault(_headerComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ProjectsStore from 'stores/projects.store';
	// import UserStore from 'stores/user.store';
	// @ComponentDecorator({
	//     template: Tpl
	// })
	var HeaderComponent = exports.HeaderComponent = function (_Component) {
	    _inherits(HeaderComponent, _Component);

	    function HeaderComponent(root) {
	        _classCallCheck(this, HeaderComponent);

	        return _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).call(this, root, {
	            template: _headerComponent2.default
	        }));
	    }

	    _createClass(HeaderComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            this;
	        }
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return HeaderComponent;
	}(_core.Component);

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<header>\r\n    <div class=\"logo\">\r\n        <a class=\"gantt--main-menu-item\" ac-link=\"/\">\r\n            ACE JS\r\n        </a>\r\n    </div>\r\n    <ul class=\"gantt--main-menu\">\r\n        <li><a class=\"gantt--main-menu-item\" ac-link=\"documentation\">Documentation</a></li>\r\n        <li><a class=\"gantt--main-menu-item\" ac-link=\"controls\">Controls</a></li>\r\n        <li><a class=\"gantt--main-menu-item\" ac-link=\"plugins\">Plugins</a></li>\r\n        <!-- <li><a class=\"gantt--main-menu-item\" ac-link=\"todo\">TODO MVVM</a></li> -->\r\n    </ul>\r\n</header>";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PluginsComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _pluginsComponent = __webpack_require__(58);

	var _pluginsComponent2 = _interopRequireDefault(_pluginsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PluginsComponent = exports.PluginsComponent = function (_Component) {
	    _inherits(PluginsComponent, _Component);

	    function PluginsComponent(options) {
	        _classCallCheck(this, PluginsComponent);

	        return _possibleConstructorReturn(this, (PluginsComponent.__proto__ || Object.getPrototypeOf(PluginsComponent)).call(this, options, {
	            template: _pluginsComponent2.default
	        }));
	    }

	    _createClass(PluginsComponent, [{
	        key: 'onInit',
	        value: function onInit() {

	            this.props.set({ plugins: [{
	                    name: 'Sortable',
	                    route: 'plugins/sortable'
	                }] });

	            _core.Plugins.Sortable.init({
	                el: this.$refs.test
	            });
	        }
	    }]);

	    return PluginsComponent;
	}(_core.Component);

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<main>\r\n\r\n    <div class=\"main-content justify-space-between\">\r\n\r\n        <ul class=\"main-list\">\r\n            <li ac-for=\"props.plugins\">\r\n                <a class=\"list-head\" ac-value=\"name\" ac-link=\"{{this.route}}\" ></a>\r\n            </li>\r\n        </ul>\r\n\r\n        <div class=\"plugins-section\">\r\n            <!-- <child-route-switcher></child-route-switcher> -->\r\n        \r\n        \t<h3>Sortable</h3>\r\n        \t<div ac-ref=\"test\">\r\n        \t    <div draggable=\"true\" style=\"border: 1px solid #ccc; padding: 5px;display: block; width: 200px\">First Item</div>\r\n        \t    <div draggable=\"true\" style=\"border: 1px solid #ccc; padding: 5px;display: block; width: 200px\">Second Item</div>\r\n        \t    <div draggable=\"true\" style=\"border: 1px solid #ccc; padding: 5px;display: block; width: 200px\">Third Item</div>\r\n        \t</div>\r\n    \r\n        </div>\r\n    </div>\r\n</main>\r\n\r\n\r\n\r\n";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ControlsComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _controlsComponent = __webpack_require__(60);

	var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ControlsComponent = exports.ControlsComponent = function (_Component) {
	    _inherits(ControlsComponent, _Component);

	    function ControlsComponent(options) {
	        _classCallCheck(this, ControlsComponent);

	        return _possibleConstructorReturn(this, (ControlsComponent.__proto__ || Object.getPrototypeOf(ControlsComponent)).call(this, options, {
	            template: _controlsComponent2.default
	        }));
	    }

	    _createClass(ControlsComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            this.props.set({ controls: [{
	                    name: 'Datepicker',
	                    route: 'controls/datepicker'
	                }],

	                date: new Date()
	            });
	        }
	    }]);

	    return ControlsComponent;
	}(_core.Component);

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<main>\r\n\r\n    <div class=\"main-content justify-space-between\">\r\n\r\n        <ul class=\"main-list\">\r\n            <li ac-for=\"props.controls\">\r\n                <a class=\"list-head\" ac-value=\"name\" ac-link=\"{{this.route}}\" ></a>\r\n            </li>\r\n        </ul>\r\n\r\n        <div class=\"plugins-section\">\r\n            <!-- <child-route-switcher></child-route-switcher> -->\r\n        \r\n        \t<h3>Datepicker</h3>\r\n            <div style=\"width: 200px\">\r\n                <app-datepicker ac-model=\"props.date\" ac-input=\"date: props.date\"></app-datepicker>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>\r\n\r\n\r\n\r\n";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NotFoundComponent = undefined;

	var _core = __webpack_require__(6);

	var _notFoundComponent = __webpack_require__(62);

	var _notFoundComponent2 = _interopRequireDefault(_notFoundComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NotFoundComponent = exports.NotFoundComponent = function (_Component) {
	    _inherits(NotFoundComponent, _Component);

	    function NotFoundComponent(options) {
	        _classCallCheck(this, NotFoundComponent);

	        return _possibleConstructorReturn(this, (NotFoundComponent.__proto__ || Object.getPrototypeOf(NotFoundComponent)).call(this, options, {
	            template: _notFoundComponent2.default
	            // shadow: true
	        }));
	    }

	    return NotFoundComponent;
	}(_core.Component);

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<!-- <app-header></app-header> -->\r\n<h1 style=\"text-align: center\">Page not found</h1>";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _documentation = __webpack_require__(64);

	var _docQuickStart = __webpack_require__(66);

	var _docArchitecture = __webpack_require__(68);

	var _docComponent = __webpack_require__(71);

	var _docLifecycle = __webpack_require__(73);

	var _docUtils = __webpack_require__(75);

	var _directives = __webpack_require__(77);

	var _customDirectives = __webpack_require__(79);

	var _docInterpolation = __webpack_require__(81);

	var _docConditional = __webpack_require__(83);

	var _docForms = __webpack_require__(85);

	var _docModules = __webpack_require__(87);

	var _docSmartObject = __webpack_require__(89);

	var _docHowTo = __webpack_require__(91);

	var _docRouterConfig = __webpack_require__(93);

	var _docHttpModule = __webpack_require__(95);

	var _docHttpMethods = __webpack_require__(97);

	var _exampleChild = __webpack_require__(99);

	exports.default = [{ c: _documentation.DocumentationComponent, selector: 'app-documentation' }, { c: _docQuickStart.DocQuickStartComponent, selector: 'app-documentation-quick-start' }, { c: _docArchitecture.DocArchitectureComponent, selector: 'app-documentation-architecture' }, { c: _docHowTo.DocHowToComponent, selector: 'app-documentation-how-to-install' }, { c: _docComponent.DocComponentComponent, selector: 'app-documentation-component' }, { c: _docLifecycle.DocLifecycleComponent, selector: 'app-documentation-lifecycle' }, { c: _docUtils.DocUtilsComponent, selector: 'app-documentation-utils' }, { c: _directives.DocDirectivesComponent, selector: 'app-documentation-directives' }, { c: _customDirectives.DocCustomDirectivesComponent, selector: 'app-documentation-custom-directives' }, { c: _docInterpolation.DocInterpolationComponent, selector: 'app-documentation-interpolation' }, { c: _docConditional.DocConditionalComponent, selector: 'app-documentation-conditional' }, { c: _docForms.DocFormsComponent, selector: 'app-documentation-forms' }, { c: _docModules.DocModulesComponent, selector: 'app-documentation-modules' }, { c: _docSmartObject.DocSmartObjectComponent, selector: 'app-documentation-smart-object' }, { c: _docRouterConfig.DocRouterConfigComponent, selector: 'app-documentation-router-config' }, { c: _docHttpModule.HttpModuleComponent, selector: 'app-documentation-http-module' }, { c: _docHttpMethods.HttpMethodsComponent, selector: 'app-documentation-http-methods' }, { c: _exampleChild.ExampleChildComponent, selector: 'app-example-child' }];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocumentationComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _documentationComponent = __webpack_require__(65);

	var _documentationComponent2 = _interopRequireDefault(_documentationComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ProjectsStore from 'store/projects.store';
	var DocumentationComponent = exports.DocumentationComponent = function (_Component) {
	    _inherits(DocumentationComponent, _Component);

	    function DocumentationComponent(params) {
	        _classCallCheck(this, DocumentationComponent);

	        return _possibleConstructorReturn(this, (DocumentationComponent.__proto__ || Object.getPrototypeOf(DocumentationComponent)).call(this, params, {
	            template: _documentationComponent2.default
	        }));
	    }

	    _createClass(DocumentationComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            this.getElement('pre').forEach(function (item) {});

	            this.props.set({
	                version: ("0.3.4"),
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
	                        name: 'Stores',
	                        route: 'documentation/store'
	                    }, {
	                        name: 'Observable',
	                        route: 'documentation/smart-object'
	                    }]
	                }, {
	                    name: 'Routing',
	                    items: [{
	                        name: 'Introduction',
	                        route: 'documentation/routing-intro'
	                    }, {
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
	}(_core.Component);

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<main>\r\n\r\n    <div class=\"main-content justify-space-between\">\r\n\r\n        <ul class=\"main-list\">\r\n            <li style=\"font-size: 14px;padding: 5px; font-weight: 300;\">\r\n                v<small ac-value=\"props.version\"></small>\r\n            </li>\r\n            <li ac-for=\"props.categories\">\r\n                <div class=\"list-head\" ac-value=\"name\"></div>\r\n                <ol class=\"list\">\r\n                    <li ac-for=\"items\">\r\n                        <a ac-value=\"name\" ac-link=\"{{this.route}}\" ac-link-exact=\"true\"></a>\r\n                    </li>\r\n                </ol>\r\n            </li>\r\n        </ul>\r\n\r\n        <div class=\"documentation-section\">\r\n            <child-route-switcher></child-route-switcher>\r\n        </div>\r\n    </div>\r\n</main>";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocQuickStartComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docQuickStartComponent = __webpack_require__(67);

	var _docQuickStartComponent2 = _interopRequireDefault(_docQuickStartComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ProjectsStore from 'store/projects.store';
	var DocQuickStartComponent = exports.DocQuickStartComponent = function (_Component) {
	    _inherits(DocQuickStartComponent, _Component);

	    function DocQuickStartComponent(params) {
	        _classCallCheck(this, DocQuickStartComponent);

	        return _possibleConstructorReturn(this, (DocQuickStartComponent.__proto__ || Object.getPrototypeOf(DocQuickStartComponent)).call(this, params, {
	            template: _docQuickStartComponent2.default
	        }));
	    }

	    _createClass(DocQuickStartComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocQuickStartComponent;
	}(_core.Component);

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Tutorial</h3>\r\n<span class=\"text\">This tutorial will help you to create your first app based on our framework</span>";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocArchitectureComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docArchitectureComponent = __webpack_require__(69);

	var _docArchitectureComponent2 = _interopRequireDefault(_docArchitectureComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ProjectsStore from 'store/projects.store';
	var DocArchitectureComponent = exports.DocArchitectureComponent = function (_Component) {
	    _inherits(DocArchitectureComponent, _Component);

	    function DocArchitectureComponent(params) {
	        _classCallCheck(this, DocArchitectureComponent);

	        return _possibleConstructorReturn(this, (DocArchitectureComponent.__proto__ || Object.getPrototypeOf(DocArchitectureComponent)).call(this, params, {
	            template: _docArchitectureComponent2.default
	        }));
	    }

	    _createClass(DocArchitectureComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocArchitectureComponent;
	}(_core.Component);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = "<h3>Architecture</h3>\r\n<b>Please follow this file structure:</b>\r\n<br>\r\n<div class=\"code-block folder-structure\">\r\n    <div class=\"folder-structure--item\">\r\n        AceJs project\r\n        <div class=\"children\">\r\n            <div class=\"folder-structure--item\">\r\n                dev\r\n            </div>\r\n            <div class=\"children\">\r\n                <div class=\"folder-structure--item\">components</div>\r\n                <div class=\"children\">\r\n                \t<div class=\"folder-structure--item\">component-one</div>\r\n                \t<div class=\"children\">\r\n                \t\t<div class=\"folder-structure--item\">component-one.component.js</div>\r\n                \t\t<div class=\"folder-structure--item\">component-one.component.html</div>\r\n                \t</div>\r\n                \t<div class=\"folder-structure--item\">component-two</div>\r\n                \t<div class=\"folder-structure--item\">component ...</div>\r\n                </div>\r\n                <div class=\"folder-structure--item\">stores</div>\r\n                <div class=\"folder-structure--item\">protectors</div>\r\n                <div class=\"folder-structure--item\">styles</div>\r\n                <div class=\"folder-structure--item\">app.js</div>\r\n                <div class=\"folder-structure--item\">assets\r\n                </div>\r\n                <div class=\"children\">\r\n                    <div class=\"folder-structure--item\">img</div>\r\n                    <div class=\"folder-structure--item\">fonts</div>\r\n                </div>\r\n                <div class=\"folder-structure--item\">routes.js</div>\r\n            </div>\r\n            <div class=\"folder-structure--item\">index.html</div>\r\n            <div class=\"folder-structure--item\">node_modules</div>\r\n            <div class=\"folder-structure--item\">package.json</div>\r\n            <div class=\"folder-structure--item\">webpack.config.js</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<b>You can see basic principles of AceJs on following picture: </b>\r\n<img src=\"" + __webpack_require__(70) + "\">\r\n\r\n\r\n<br><br>\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">app.js</div>\r\n    <pre>\r\n        import Styles from './styles/main.scss';\r\n        import { Register } from '../core';\r\n        import { RootComponent } from './components/root/root.component';\r\n        import { HomeComponent } from './components/home/home.component';\r\n        import { HeaderComponent } from './components/header/header.component';\r\n\r\n        import Docs from './components/documentation';\r\n\r\n        import { Routes } from './router.js';\r\n        <b>Register</b>({\r\n            <b>root</b>: {\r\n                c: RootComponent, selector: 'app-root'\r\n            },\r\n            <b>components</b>: [\r\n                { c: HomeComponent, selector: 'app-home' },\r\n                { c: HeaderComponent, selector: 'app-header' }\r\n            ],\r\n            <b>modules</b>: [\r\n                Docs\r\n            ],\r\n            <b>serverUrl</b>: \"\",\r\n            <b>routes</b>: Routes,\r\n            <b>styles</b>: Styles\r\n        });\r\n    </pre>\r\n</div>";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__.p + "src/example/img/ace-brand.svg";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocComponentComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docComponentComponent = __webpack_require__(72);

	var _docComponentComponent2 = _interopRequireDefault(_docComponentComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ProjectsStore from 'store/projects.store';
	var DocComponentComponent = exports.DocComponentComponent = function (_Component) {
	    _inherits(DocComponentComponent, _Component);

	    function DocComponentComponent(params) {
	        _classCallCheck(this, DocComponentComponent);

	        return _possibleConstructorReturn(this, (DocComponentComponent.__proto__ || Object.getPrototypeOf(DocComponentComponent)).call(this, params, {
	            template: _docComponentComponent2.default
	        }));
	    }

	    _createClass(DocComponentComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocComponentComponent;
	}(_core.Component);

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Example component</h3>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.js</div>\r\n    <pre>\r\n    import { <b>Component</b> } from 'ace-js';\r\n    import <b>Tpl</b> from './example.component.html';\r\n    export class <b>ExampleComponent</b> extends Component {\r\n        constructor(params) {\r\n            super(params, {\r\n                <b>template</b>: Tpl,\r\n                <b>props</b>: {\r\n                    title: 'Some title'        \r\n                }\r\n                \r\n                <b>hostEvents</b>: {\r\n                    click: 'rootClick'\r\n                },\r\n                <b>hostClasses</b>: {\r\n                    selected: 'props.selected',\r\n                    hidden: '!props.visible'\r\n                },\r\n                <b>hostStyles</b>: {\r\n                    width: {value: 'props.width', suffix: 'px'}\r\n                }\r\n            });\r\n        }\r\n\r\n        onInit() {\r\n        \r\n        }\r\n    }\r\n</pre>\r\n</div>\r\n\r\n<div class=\"text\">or with decorator</div>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.js</div>\r\n    <pre>\r\n        import { <b>Component, Decorators</b> } from '../../../../core';\r\n\r\n        import <b>Tpl</b> from './doc-interpolation.component.html';\r\n\r\n\r\n        <b>@Decorators.ComponentDecorator</b>({\r\n            <b>template</b>: Tpl,\r\n            <b>props</b>: {\r\n                isVisible: true,\r\n                title: 'test'\r\n            }\r\n        })\r\n        export class <b>ExampleComponent</b> {\r\n            onInit() {\r\n            \r\n            }\r\n        }\r\n</pre>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">template</b>\r\n    <span class=\"text\">Specifies <b>Tpl</b> template for current component </span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">props</b>\r\n    <span class=\"text\">Initial properties of component</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">hostEvents</b>\r\n    <span class=\"text\">Add <b>event listeners</b> to root element of component</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">hostClasses</b>\r\n    <span class=\"text\">Bind <b>classList</b> of root element with props. <br>\r\n        <b>selected</b> - key, as class name\r\n        <br>\r\n        <b>'props.selected'</b> - value, as propery to bind\r\n    </span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">hostStyles</b>\r\n    <span class=\"text\">Bind styles of root element with props. <br>\r\n        <b>width</b> - key, as css property <br>\r\n        <b>value</b>:string - property to bind <br>\r\n        <b>suffix</b>:string - for example 'px'\r\n    </span>\r\n</div>";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocLifecycleComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docLifecycleComponent = __webpack_require__(74);

	var _docLifecycleComponent2 = _interopRequireDefault(_docLifecycleComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ProjectsStore from 'store/projects.store';
	var DocLifecycleComponent = exports.DocLifecycleComponent = function (_Component) {
	    _inherits(DocLifecycleComponent, _Component);

	    function DocLifecycleComponent(params) {
	        _classCallCheck(this, DocLifecycleComponent);

	        return _possibleConstructorReturn(this, (DocLifecycleComponent.__proto__ || Object.getPrototypeOf(DocLifecycleComponent)).call(this, params, {
	            template: _docLifecycleComponent2.default
	        }));
	    }

	    _createClass(DocLifecycleComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocLifecycleComponent;
	}(_core.Component);

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<div class=\"block\">\r\n    <b class=\"title\">onAttach()</b>\r\n    <span class=\"text\">Fires when component is attached to DOM</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">onInit()</b>\r\n    <span class=\"text\">Fires when component is initialized</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">onDestroy()</b>\r\n    <span class=\"text\">Fires when component is destroyed</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">onUpdate()</b>\r\n    <span class=\"text\">Fires when props of component is updated</span>\r\n</div>\r\n\r\n<div class=\"section-title\">Lifecycle diagram</div>";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocUtilsComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docUtilsComponent = __webpack_require__(76);

	var _docUtilsComponent2 = _interopRequireDefault(_docUtilsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ProjectsStore from 'store/projects.store';
	var DocUtilsComponent = exports.DocUtilsComponent = function (_Component) {
	    _inherits(DocUtilsComponent, _Component);

	    function DocUtilsComponent(params) {
	        _classCallCheck(this, DocUtilsComponent);

	        return _possibleConstructorReturn(this, (DocUtilsComponent.__proto__ || Object.getPrototypeOf(DocUtilsComponent)).call(this, params, {
	            template: _docUtilsComponent2.default
	        }));
	    }

	    _createClass(DocUtilsComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocUtilsComponent;
	}(_core.Component);

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Utils</h3>\r\n<div class=\"block\">\r\n    <b class=\"title\">randomInteger(min max)</b> <span class=\"text\">get random number between min and max values</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">addDays(date, count)</b> <span class=\"text\">add <b>count</b> days to current <b>date</b></span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">getDateByFormat(date, format)</b>\r\n    <div class=\"text\">convert <b>date</b> with specified <b>format</b>\r\n        <br>\r\n        <b class=\"title\">Available formats: </b>\r\n        <div>\r\n            <b>yyyy-mm-dd</b><br>\r\n            <b>yyyymmdd</b><br>\r\n            <b>yyyy/mm/dd</b><br>\r\n            <b>yyyy-mm-dd hh:mm</b><br>\r\n            <b>hh:mm</b><br>\r\n            <b>dd.mm.yyyy</b>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">getDaysBetweenDates(dt1, dt2)</b> <span class=\"text\">get days count between two dates</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">closest(array, num)</b> <span class=\"text\">get closest value <b>num</b> from <b>array</b></span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">insertAfter(elem, refElem)</b> <span class=\"text\">Insert <b>elem</b> after specified <b>refElem</b></span>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">isCustomElement(element)</b> <span class=\"text\">Check if specified <b>element</b> is custom element</span>\r\n</div>\r\n\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">sorting(array, params, reverse)</b> <span\r\n        class=\"text\">Sort specified <b>array</b> with <b>params(type: string, id: string)</b>\r\n    <div><b>type</b> - type of sotring, <b>id</b> - prop for sorting</div>\r\n    <div><b>reverse</b> - opposite sorting</div></span>\r\n</div>\r\n\r\n\r\n\r\n\r\n";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocDirectivesComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _directivesComponent = __webpack_require__(78);

	var _directivesComponent2 = _interopRequireDefault(_directivesComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DocDirectivesComponent = exports.DocDirectivesComponent = function (_Component) {
	    _inherits(DocDirectivesComponent, _Component);

	    function DocDirectivesComponent(params) {
	        _classCallCheck(this, DocDirectivesComponent);

	        return _possibleConstructorReturn(this, (DocDirectivesComponent.__proto__ || Object.getPrototypeOf(DocDirectivesComponent)).call(this, params, {
	            template: _directivesComponent2.default
	        }));
	    }

	    _createClass(DocDirectivesComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            this.props.set({
	                value: 'value',
	                model: 'Something',
	                className: 'unclicked',
	                showClass: true,
	                isVisible: false,
	                width: '50px',
	                height: '100px',
	                items: [{ name: 1 }, { name: 2 }, { name: 3 }],
	                image: 'https://www.w3schools.com/css/img_fjords.jpg'
	            });
	        }
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
	        key: 'showElement',
	        value: function showElement() {
	            this.props.set('isVisible', true);
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
	}(_core.Component);

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Directives</h3>\r\n<div class=\"text\">Directives - special attributes with <b>ac-</b> prefix</div>\r\n<div class=\"text\">All properties of component are stored in special field called <b>props</b></div>\r\n\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-value=\"props.value\"</b>\r\n    <div class=\"text\">\r\n        Bind props <b>props.value</b> with certain element\r\n        <br>\r\n        <input type=\"text\" ac-value=\"props.value\">\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-model=\"props.model\"</b> \r\n    <div class=\"text\">\r\n        <b>Two way data binding</b> between <b>props.model</b> and html element\r\n        <br>\r\n        <div>\r\n            <input type=\"text\" ac-model=\"props.model\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-input=\"inputData: props.selectedValue\"</b>\r\n    <div class=\"text\">Allow send <b>props.selectedValue</b> from parent component to child component <b>inputData</b>.</div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-ref=\"element\"</b>\r\n    <div class=\"text\">Add <b>element</b> to ui list. ui - is a list of reference elements</div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">\r\n    ac-class=\"className: showClass\"\r\n    <br>\r\n    ac-class=\"@props.class\"\r\n    </b>\r\n    <div class=\"text\">Get 2 params: name of class, boolean(adds class if true). You can use\r\n        <b>comma(,)</b> symbol to specify several conditions. Also @ is available, so you can bind props to className\r\n        <br><br>\r\n        <button @click=\"changeClass\">Change class</button>\r\n        <b><span ac-class=\"@props.className\">Example</span></b>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-style=\"height: props.height\"</b>\r\n    <div class=\"text\">\r\n            Binds props to css rules. Gets 2 params: <b>height</b> - css rule and <b>value</b> - value from props.\r\n            <br><br>\r\n            <button @click=\"changeSize\">Change size</button>\r\n            <br><br>\r\n            <div style=\"border: 1px solid red\" ac-style=\"height: props.height, width: props.width\"></div>\r\n     </div>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-if=\"props.isVisible\"</b>\r\n    <div class=\"text\">Serve to hide or show element; Gets 1 params: <b>value</b>\r\n    <br><br>\r\n    <button @click=\"showElement\">Show</button>\r\n    <span ac-if=\"props.isVisible\">Element is shown now</span>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-for=\"props.items\"</b>\r\n    <div class=\"text\">Repeater. Creates instance for every element in collection <b>props.items</b>\r\n    <br><br>\r\n    <ul>\r\n        <li ac-for=\"props.items\" ac-value=\"name\"></li>\r\n    </ul>\r\n \r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-attr=\"src: props.image\"</b>\r\n    <div class=\"text\">Binds attr <b>src</b> with url from <b>props.image</b>\r\n    <br>\r\n    <img ac-attr=\"src: props.image\" style=\"width: 200px\">\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-link=\"documentation\"</b>\r\n    <div class=\"text\">Serves for navigation inside application. In this case link leads to documentation page</div>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-on=\"change: onChange\"</b>\r\n    <div class=\"text\">\r\n    Add event listener to the root element of component, that listen to child events\r\n    <br><br>\r\n    <app-example-child ac-on=\"onChange: onChange\"></app-example-child>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-pattern=\"[0-9]\"</b>\r\n    <div class=\"text\">\r\n    Add <b>error class</b> to the element if value is invalid(doesn't match the pattern)\r\n    <form ac-submit=\"submit\">\r\n        <input required type=\"text\" ac-pattern=\"[0-9]: Invalid\">\r\n        <button>Submit</button>\r\n    </form>\r\n    \r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">ac-outside=\"outsideClick\"</b>\r\n    <div class=\"text\">Trigger method <b>outsideClick</b> if user clicked beyond the element where ac-outside is specified</div>\r\n</div>";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocCustomDirectivesComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _customDirectivesComponent = __webpack_require__(80);

	var _customDirectivesComponent2 = _interopRequireDefault(_customDirectivesComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DocCustomDirectivesComponent = exports.DocCustomDirectivesComponent = function (_Component) {
	    _inherits(DocCustomDirectivesComponent, _Component);

	    function DocCustomDirectivesComponent(params) {
	        _classCallCheck(this, DocCustomDirectivesComponent);

	        return _possibleConstructorReturn(this, (DocCustomDirectivesComponent.__proto__ || Object.getPrototypeOf(DocCustomDirectivesComponent)).call(this, params, {
	            template: _customDirectivesComponent2.default,
	            props: {
	                test: 'test',
	                show: true
	            }
	        }));
	    }

	    _createClass(DocCustomDirectivesComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }]);

	    return DocCustomDirectivesComponent;
	}(_core.Component);

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Custom directives</h3>\r\n\r\n\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.directive.js</div>\r\n    <pre>\r\n\timport {Decorators} from 'core';\r\n\r\n\t@Decorators.DirectiveDecorator({\r\n\t    selector: 'upperCase'\r\n\t})\r\n\texport default class UpperCaseDirectove {\r\n\t    constructor(elem) {\r\n\t        this.elem = elem;\r\n\t    }\r\n\r\n\t    onUpdate() {\r\n\t        this.toUpperCase();\r\n\t    }\r\n\r\n\t    toUpperCase() {\r\n\t        this.elem.innerHTML = this.elem.innerHTML.toUpperCase();\r\n\t    }\r\n\t}\r\n</pre>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">onUpdate</b>\r\n    <div class=\"text\"><div>Triggeres when component is updated</div></div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.html</div>\r\n\t<pre><span><</span>span upperCase><span class=\"text\">test</span><span><</span>/span></pre>\r\n</div>\r\n\r\n<div class=\"text\">will be replaced with</div>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.html</div>\r\n\t<pre><span><</span>span upperCase><span class=\"text\">TEST</span><span><</span>/span></pre>\r\n</div>\r\n\r\n";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocInterpolationComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docInterpolationComponent = __webpack_require__(82);

	var _docInterpolationComponent2 = _interopRequireDefault(_docInterpolationComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocInterpolationComponent = exports.DocInterpolationComponent = (_dec = _core.Decorators.ComponentDecorator({
	    template: _docInterpolationComponent2.default,
	    props: {
	        isVisible: true,
	        title: 'test'
	    }
	}), _dec(_class = function () {
	    function DocInterpolationComponent(root, params) {
	        _classCallCheck(this, DocInterpolationComponent);
	    }

	    _createClass(DocInterpolationComponent, [{
	        key: 'onInit',
	        value: function onInit() {
	            // setInterval(()=>{
	            //     this.props.set('title', new Date());
	            // }, 1000);
	        }
	    }]);

	    return DocInterpolationComponent;
	}()) || _class);

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3 class=\"in-development\">In development!</h3>\r\n<h3>Interpolation</h3>\r\n\r\n<div class=\"section-title\">Text interpolation</div>\r\n\r\n<div class=\"text\"><b>Interpolation</b> - is one of the ways how to bind data with tempalte</div>\r\n<div class=\"text\">We use <b>'Mustache'</b> syntax, which means value from double curly braces will be replaced with the value from props.title</div>\r\n\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.js</div>\r\n    <pre>\r\n    import { <b>Component</b> } from 'ace-js';\r\n    import <b>Tpl</b> from './example.component.html';\r\n    export class <b>ExampleComponent</b> extends Component {\r\n        constructor(params) {\r\n            super(params, {\r\n                <b>template</b>: Tpl,\r\n                <b>props</b>: {\r\n                    title: 'Some title'        \r\n                }\r\n            });\r\n        }\r\n\r\n    }\r\n</pre>\r\n</div>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.html</div>\r\n\t<pre><span><</span>span><span class=\"text\">{{title}}</span><span><</span>/span></pre>\r\n</div>\r\n\r\n<div class=\"text\">will be replaced with props.title value</div>\r\n<div class=\"code-block\">\r\n\t<pre><span><</span>span><span class=\"text\">Some title</span><span><</span>/span></pre>\r\n</div>\r\n\r\n\r\n<div class=\"section-title\">Javascript expressions</div>\r\n<div class=\"code-block\">\r\n\t<pre><span><</span>span><span class=\"text\">{{isReady ? 'OK' : 'FAIL'}}</span><span><</span>/span></pre>\r\n</div>\r\n<div class=\"text\">This expression will be calculated as ussual js expression</div>\r\n\r\n<br>\r\n<div class=\"text\">The alturnative way is using of <b class=\"label\">ac-value</b></div>";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocConditionalComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docConditionalComponent = __webpack_require__(84);

	var _docConditionalComponent2 = _interopRequireDefault(_docConditionalComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DocConditionalComponent = exports.DocConditionalComponent = function (_Component) {
	    _inherits(DocConditionalComponent, _Component);

	    function DocConditionalComponent(params) {
	        _classCallCheck(this, DocConditionalComponent);

	        return _possibleConstructorReturn(this, (DocConditionalComponent.__proto__ || Object.getPrototypeOf(DocConditionalComponent)).call(this, params, {
	            template: _docConditionalComponent2.default,
	            props: {
	                isVisible: true
	            }
	        }));
	    }

	    _createClass(DocConditionalComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }]);

	    return DocConditionalComponent;
	}(_core.Component);

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Conditional rendering</h3>\r\n<div class=\"section-title\">ac-if</div>\r\n\r\n<div class=\"code-block\">\r\n\t<pre><span><</span>span <b>ac-if</b>=\"<span class=\"attr\">props.isVisible</span>\"><span class=\"text\">Something</span><span><</span>/span></pre>\r\n</div>\r\n\r\n<div class=\"text\">In this case <b>ac-if</b> directive checks <b>isVisible</b> property and if it is true element will be added to the page, otherwise will be removed</div>";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocFormsComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(6);

	var _docFormsComponent = __webpack_require__(86);

	var _docFormsComponent2 = _interopRequireDefault(_docFormsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DocFormsComponent = exports.DocFormsComponent = (_dec = _core.Decorators.ComponentDecorator({
	    template: _docFormsComponent2.default,
	    props: {
	        checkbox: {},
	        form: {}
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
	    }]);

	    return DocFormsComponent;
	}()) || _class);

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Forms</h3>\r\n\r\n<div class=\"title\">[type=\"text\"]</div>\r\n<div class=\"input\">\r\n\t<div ac-value=\"props.input\"></div>\r\n\t<input type=\"text\" ac-model=\"props.input\">\r\n</div>\r\n\r\n<div class=\"title\">[type=\"email\"]</div>\r\n<div class=\"input\">\r\n\t<div ac-value=\"props.email\"></div>\r\n\t<input type=\"email\" ac-model=\"props.email\">\r\n</div>\r\n\r\n<div class=\"title\">[type=\"password\"]</div>\r\n<div class=\"input\">\r\n\t<div ac-value=\"props.password\"></div>\r\n\t<input type=\"password\" ac-model=\"props.password\">\r\n</div>\r\n\r\n<div class=\"title\">[type=\"radio\"]</div>\r\n<div class=\"input\">\r\n\t<div ac-value=\"props.radio\"></div>\r\n\t<input type=\"radio\" ac-model=\"props.radio\" value=\"1\" name=\"radio\">\r\n\t<input type=\"radio\" ac-model=\"props.radio\" value=\"2\" name=\"radio\">\r\n</div>\r\n\r\n<div class=\"title\">[type=\"checkbox\"]</div>\r\n<div class=\"input\">\r\n\t<div ac-value=\"props.checkbox.check1\"></div>\r\n\t<div ac-value=\"props.checkbox.check2\"></div>\r\n\t<input type=\"checkbox\" ac-model=\"props.checkbox.check1\" value=\"1\">\r\n\t<input type=\"checkbox\" ac-model=\"props.checkbox.check2\" value=\"2\">\r\n</div>\r\n\r\n<div class=\"section-title\">Form validation</div>\r\n\r\n<form ac-submit=\"submit\" ac-form-validation> \r\n\t<div class=\"input\"> \r\n\t  Result: <span ac-value=\"props.form : json\"></span>\r\n\t</div>\r\n\t<div class=\"input\">\r\n\t\t<input type=\"text\" placeholder=\"name\" ac-model=\"props.form.name\" required ac-pattern=\"[0-9]\" ac-pattern-title=\"0-9\">\r\n\t</div>\r\n\t<div class=\"input\">\r\n\t\t<input type=\"email\" placeholder=\"email\"  ac-model=\"props.form.email\" required>\r\n\t</div>\r\n\t<div class=\"input\">\r\n\t\t<input type=\"checkbox\" ac-model=\"props.form.checkbox\" required>\r\n\t</div>\r\n\t\r\n\t<button>Submit</button>\r\n</form>";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocModulesComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docModulesComponent = __webpack_require__(88);

	var _docModulesComponent2 = _interopRequireDefault(_docModulesComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ProjectsStore from 'store/projects.store';
	var DocModulesComponent = exports.DocModulesComponent = function (_Component) {
	    _inherits(DocModulesComponent, _Component);

	    function DocModulesComponent(params) {
	        _classCallCheck(this, DocModulesComponent);

	        return _possibleConstructorReturn(this, (DocModulesComponent.__proto__ || Object.getPrototypeOf(DocModulesComponent)).call(this, params, {
	            template: _docModulesComponent2.default
	        }));
	    }

	    _createClass(DocModulesComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocModulesComponent;
	}(_core.Component);

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Modules</h3>\r\n<span class=\"text\">To simplify <b>app.js</b> you can split your code into modules</span>\r\n<br>\r\n<span class=\"text\">Call your module as <b>index.js</b> for easier using, so then just import <b>components/documentation</b> where index.js file is.</span>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">index.js</div>\r\n    <pre>\r\n        import {DocumentationComponent} from './documentation.component';\r\n        import {DocQuickStartComponent} from './quick-start/doc-quick-start.component';\r\n\r\n        export default [\r\n            {c: DocumentationComponent, selector: 'app-documentation'},\r\n            {c: DocQuickStartComponent, selector: 'app-documentation-quick-start'}\r\n            ...\r\n        ]\r\n</pre>\r\n</div>\r\n\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">app.js</div>\r\n    <pre>\r\n        import Docs from './components/documentation';\r\n        Register({\r\n            ...\r\n            modules: [\r\n                Docs\r\n                ...\r\n            ]\r\n            ...\r\n        });\r\n</pre>\r\n</div>\r\n";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocSmartObjectComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docSmartObjectComponent = __webpack_require__(90);

	var _docSmartObjectComponent2 = _interopRequireDefault(_docSmartObjectComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ProjectsStore from 'store/projects.store';
	var DocSmartObjectComponent = exports.DocSmartObjectComponent = function (_Component) {
	    _inherits(DocSmartObjectComponent, _Component);

	    function DocSmartObjectComponent(params) {
	        _classCallCheck(this, DocSmartObjectComponent);

	        return _possibleConstructorReturn(this, (DocSmartObjectComponent.__proto__ || Object.getPrototypeOf(DocSmartObjectComponent)).call(this, params, {
	            template: _docSmartObjectComponent2.default
	        }));
	    }

	    _createClass(DocSmartObjectComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocSmartObjectComponent;
	}(_core.Component);

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Observables</h3>\r\n\r\n<div class=\"section-title\">Observable model</div>\r\n\r\n<div class=\"text\"><b>ObservableModel</b> - is a observable object with it's own methods.\r\n    <br>Every component has\r\n    <b>props</b> property which is ObservableModel.\r\n</div>\r\n<div class=\"text\">At first you should create ObservableModel with <b>new</b> operator, also you can use initial params</div>\r\n\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">user.store.js</div>\r\n    <pre>\r\n        import { ObservableModel } from 'framework/model'\r\n\r\n        class UserStore extends Store {\r\n            constructor() {\r\n                super();\r\n                this.user = new ObservableModel();\r\n            }\r\n        }\r\n</pre>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">sub(()=> {})</b>\r\n    <span class=\"text\">Creates a subscriber that watch any changes of ObservableModel</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">set('name', 'New value')</b>\r\n    <span class=\"text\">Set new value</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">get('name')</b>\r\n    <span class=\"text\">Get value from by <b>name</b> prop</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">save(params)</b>\r\n    <span class=\"text\">Is used for updating of object bu id</span>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"section-title\">Observable collection</div>";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocHowToComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docHowToComponent = __webpack_require__(92);

	var _docHowToComponent2 = _interopRequireDefault(_docHowToComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ProjectsStore from 'store/projects.store';
	var DocHowToComponent = exports.DocHowToComponent = function (_Component) {
	    _inherits(DocHowToComponent, _Component);

	    function DocHowToComponent(params) {
	        _classCallCheck(this, DocHowToComponent);

	        return _possibleConstructorReturn(this, (DocHowToComponent.__proto__ || Object.getPrototypeOf(DocHowToComponent)).call(this, params, {
	            template: _docHowToComponent2.default
	        }));
	    }

	    _createClass(DocHowToComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocHowToComponent;
	}(_core.Component);

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>How to install</h3>\r\n<div class=\"text\">To add AceJs framework to your node_modules</div>\r\n<div class=\"code-block\">\r\n    <pre>\r\n    <b>npm i ace-js</b>\r\n</pre>\r\n</div>\r\n<div class=\"text\">Now you can develop your application with AceJs</div>\r\n<div class=\"code-block\">\r\n    <pre>\r\n\tlet <b>AceJs</b> = require('ace-js');\r\n\tor\r\n\timport {...} from 'ace-js';\r\n</pre>\r\n</div>\r\n<!--     <b>npm i</b> - install all node modules\r\n    <b>npm run dev</b> - starts the dev server\r\n    <b>npm run prod</b> - creates production index.js bundle -->";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DocRouterConfigComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docRouterConfigComponent = __webpack_require__(94);

	var _docRouterConfigComponent2 = _interopRequireDefault(_docRouterConfigComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DocRouterConfigComponent = exports.DocRouterConfigComponent = function (_Component) {
	    _inherits(DocRouterConfigComponent, _Component);

	    function DocRouterConfigComponent(params) {
	        _classCallCheck(this, DocRouterConfigComponent);

	        return _possibleConstructorReturn(this, (DocRouterConfigComponent.__proto__ || Object.getPrototypeOf(DocRouterConfigComponent)).call(this, params, {
	            template: _docRouterConfigComponent2.default
	        }));
	    }

	    _createClass(DocRouterConfigComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return DocRouterConfigComponent;
	}(_core.Component);

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Router config</h3>\r\n<div class=\"text\">To run router you should create <b>_router.js</b> config file, where describes rules for navigation\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">path</b>\r\n    <span class=\"text\">current route compares with path, and if they match then component is rendered</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">component</b>\r\n    <span class=\"text\">defines what router should to show</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">children</b>\r\n    <span class=\"text\">specifies all the child routes activated under the current route</span>\r\n</div>\r\n\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">{path: <b>'/'</b>, component: 'app-home'}</b>\r\n    <span class=\"text\">leeds to <b>root</b> page</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">{path: <b>'example/:id'</b>, component: 'app-example-page'}</b>\r\n    <span class=\"text\">leeds to example page with <b>':id'</b> param</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\"> {\r\n        path: <b>'parent'</b>,\r\n        component: 'app-parent-component'}  </b>\r\n    <span class=\"text\">leeds to page <b>parent</b> with children</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">\r\n        {path: <b>''</b>, component: 'app-child-root}\r\n    </b>\r\n    <span class=\"text\">root child route</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">\r\n        {path: <b>'child-component'</b>, component: 'app-child-one'}\r\n    </b>\r\n    <span class=\"text\">shows <b>child-component</b> component inside parent component</span>\r\n</div>\r\n\r\n<div class=\"block\">\r\n    <b class=\"title\">\r\n        {path: '404', component: <b>'app-not-found'</b>}\r\n    </b>\r\n    <span class=\"text\">leeds to <b>'not found page'</b></span>\r\n</div>\r\n\r\n<br>\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">_router.js</div>\r\n    <pre>\r\n\r\n    export let Routes = [\r\n    {path: <b>'/'</b>, component: 'app-home'},\r\n    {path: <b>'example/:id'</b>, component: 'app-example-page'},\r\n    {\r\n            path: <b>'parent'</b>,\r\n            component: 'app-parent-component',\r\n            children: [\r\n                {path: <b>'/'</b>, component: 'app-child-root},\r\n                {path: <b>'child-component'</b>, component: 'app-child-one'}\r\n            ]\r\n        },\r\n        {path: '404', component: <b>'app-not-found'</b>}\r\n    ];\r\n</pre>\r\n</div>\r\n";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HttpModuleComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docHttpModuleComponent = __webpack_require__(96);

	var _docHttpModuleComponent2 = _interopRequireDefault(_docHttpModuleComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HttpModuleComponent = exports.HttpModuleComponent = function (_Component) {
	    _inherits(HttpModuleComponent, _Component);

	    function HttpModuleComponent(params) {
	        _classCallCheck(this, HttpModuleComponent);

	        return _possibleConstructorReturn(this, (HttpModuleComponent.__proto__ || Object.getPrototypeOf(HttpModuleComponent)).call(this, params, {
	            template: _docHttpModuleComponent2.default
	        }));
	    }

	    _createClass(HttpModuleComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return HttpModuleComponent;
	}(_core.Component);

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Http module</h3>\r\n\r\n<div class=\"text\"><b>Http module</b> is part <b>core</b> module.</div>\r\n<div class=\"text\">To use this module you should <b>import {Http} from 'ace-js'</b></div>";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HttpMethodsComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	var _docHttpMethodsComponent = __webpack_require__(98);

	var _docHttpMethodsComponent2 = _interopRequireDefault(_docHttpMethodsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HttpMethodsComponent = exports.HttpMethodsComponent = function (_Component) {
	    _inherits(HttpMethodsComponent, _Component);

	    function HttpMethodsComponent(params) {
	        _classCallCheck(this, HttpMethodsComponent);

	        return _possibleConstructorReturn(this, (HttpMethodsComponent.__proto__ || Object.getPrototypeOf(HttpMethodsComponent)).call(this, params, {
	            template: _docHttpMethodsComponent2.default
	        }));
	    }

	    _createClass(HttpMethodsComponent, [{
	        key: 'onInit',
	        value: function onInit() {}
	    }, {
	        key: 'getWeater',
	        value: function getWeater() {
	            var _this2 = this;

	            _core.Http.makeRequest({ method: 'get', url: 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=31ff47785771280c27a522d0cc5c9cba&units=metric' }).then(function (res) {
	                _this2.props.set('weather', res);
	            });
	        }
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {}
	    }]);

	    return HttpMethodsComponent;
	}(_core.Component);

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = "<h3>Http methods</h3>\r\n<div>Add <b>import {Http} from 'ace-js'</b> to your component, then</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">GET</b>\r\n    <div class=\"text\">\r\n        <div>Http.get(url).then(response=>{ })</div>\r\n        <br>\r\n        Example: \r\n        <button @click=\"getWeater\">Get weater info</button>\r\n        <div ac-if=\"props.weather\"> \r\n            City: <b ac-value=\"props.weather.name\"></b>\r\n            <br>\r\n            Temp: <b ac-value=\"props.weather.main.temp\"></b> C\r\n            <br>\r\n            Wind: <b ac-value=\"props.weather.wind.speed\"></b> m/s\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">POST</b>\r\n    <div class=\"text\"><div>Http.post(url, params).then(response=>{ })</div></div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">PUT</b>\r\n    <div class=\"text\"> <div>Http.put(url, params).then(response=>{ })</div></div>\r\n</div>\r\n<div class=\"block\">\r\n    <b class=\"title\">DELETE</b>\r\n    <div class=\"text\"> <div>Http.delete(url).then(response=>{ })</div></div>\r\n</div>\r\n\r\n<div class=\"section-title\">Interceptors</div>\r\n<div class=\"text\">In your code you can use interceptors to add your own logic</div>\r\n<div class=\"code-block\">\r\n    <div class=\"code-header\">example.component.js</div>\r\n    <pre>\r\n        import { Component, Http } from 'ace-js';\r\n        import Tpl from './root.component.html';\r\n        import NotificaitonsStore from 'stores/notifications.store';\r\n        import UserStore from 'stores/user.store'\r\n        export class ExampleComponent extends Component {\r\n            constructor(params) {\r\n                super(params, {\r\n                    template: Tpl\r\n                });\r\n            }\r\n\r\n            onInit() {\r\n                Http.getCatalog('/catalog');\r\n                Http.onProgress(event => {\r\n                    console.log(event.loaded + ' / ' + event.total);\r\n                });\r\n                Http.onError(err => {\r\n                    switch (err.status) {\r\n                      case 401:\r\n                        UserStore.logout('auth');\r\n                        break;\r\n                      case 406:\r\n                        NotificaitonsStore.show({ type: 'error', text: err.response.message });\r\n                        UserStore.logout('auth');\r\n                        break;\r\n                      case 422:\r\n                        break;\r\n                      case 404:\r\n                        break;\r\n                      case 403:\r\n\r\n                        break;\r\n                      case 500:\r\n                      case 502:\r\n                        break;\r\n                      default:\r\n\r\n                        break;\r\n                    }\r\n                });\r\n            }\r\n        }\r\n    </pre>\r\n</div>";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ExampleChildComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ExampleChildComponent = exports.ExampleChildComponent = function (_Component) {
	    _inherits(ExampleChildComponent, _Component);

	    function ExampleChildComponent(params) {
	        _classCallCheck(this, ExampleChildComponent);

	        return _possibleConstructorReturn(this, (ExampleChildComponent.__proto__ || Object.getPrototypeOf(ExampleChildComponent)).call(this, params, {
	            template: 'Child component <button @click="trigger">Emit \'change\' event </button>'
	        }));
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
	}(_core.Component);

/***/ }),
/* 100 */
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
/* 101 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Routes = exports.Routes = [{ path: '/', component: 'app-home' }, { path: 'controls', component: 'app-controls' }, { path: 'plugins', component: 'app-plugins' }, {
	    path: 'documentation',
	    component: 'app-documentation',
	    children: [{ path: '/', component: 'app-documentation-quick-start' }, { path: 'how-to-install', component: 'app-documentation-how-to-install' }, { path: 'architecture', component: 'app-documentation-architecture' }, { path: 'component', component: 'app-documentation-component' }, { path: 'lifecycle', component: 'app-documentation-lifecycle' }, { path: 'utils', component: 'app-documentation-utils' }, { path: 'interpolation', component: 'app-documentation-interpolation' }, { path: 'directives', component: 'app-documentation-directives' }, { path: 'custom-directives', component: 'app-documentation-custom-directives' }, { path: 'conditional-rendering', component: 'app-documentation-conditional' }, { path: 'forms', component: 'app-documentation-forms' }, { path: 'modules', component: 'app-documentation-modules' }, { path: 'smart-object', component: 'app-documentation-smart-object' }, { path: 'router-config', component: 'app-documentation-router-config' }, { path: 'http-module', component: 'app-documentation-http-module' }, { path: 'http-methods', component: 'app-documentation-http-methods' }]
	}, { path: '404', component: 'app-not-found' // wrong route
	}];

/***/ })
/******/ ])
});
;