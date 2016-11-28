require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _path = __webpack_require__(6);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _express = __webpack_require__(5);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _ect = __webpack_require__(4);
	
	var _ect2 = _interopRequireDefault(_ect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PROD = true;
	
	
	__webpack_require__(3);
	var universalHotReload = __webpack_require__(7).default;
	
	universalHotReload(__webpack_require__(2)(_path2.default.resolve(__dirname, '..', '..', 'webpack.config.server.dev.js')), __webpack_require__(2)(_path2.default.resolve(__dirname, '..', '..', 'webpack.config.client.dev.js')));
	
	var app = (0, _express2.default)();
	
	// Config the View
	
	var view_path = _path2.default.resolve(__dirname, 'views');
	var ectRenderer = (0, _ect2.default)({ watch: true, root: view_path, ext: '.ect' });
	app.set('view engine', 'ect');
	app.engine('ect', ectRenderer.render);
	app.set('views', view_path);
	
	// Set assets folder
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '..', 'assets')))
	
	// Routs
	.get('/', function (req, res) {
	    res.render('pages/index', { title: 'Start!' });
	}).get('/about', function (req, res) {
	    res.render('pages/about', { title: 'About!' });
	});
	
	var server = app.listen(3000, function () {
	    console.log('App listening on port 3000!');
	});
	
	// export http.server object so universal-hot-reload can access it
	module.exports = server;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./index": 1,
		"./index.js": 1
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("ect");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("universal-hot-reload");

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map