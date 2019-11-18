/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0px;\\n  font-family: \\\"Courier New\\\", Courier, monospace; }\\n  body main {\\n    display: flex;\\n    flex-wrap: wrap; }\\n    body main #input-wrapper {\\n      position: relative; }\\n      body main #input-wrapper input {\\n        flex-grow: 1;\\n        padding: 20px 30px;\\n        margin: 10px;\\n        font-family: \\\"Courier New\\\", Courier, monospace;\\n        font-size: 24px;\\n        border: none;\\n        background-color: gray;\\n        color: white;\\n        border-radius: 4px; }\\n        body main #input-wrapper input::placeholder {\\n          color: #a8a8a8; }\\n      body main #input-wrapper #toggle {\\n        display: flex;\\n        position: absolute;\\n        right: 10px;\\n        top: 10px;\\n        font-size: 24px;\\n        margin: 15px 10px; }\\n        body main #input-wrapper #toggle span {\\n          padding: 5px 10px;\\n          width: 50%;\\n          border-radius: 10px; }\\n        body main #input-wrapper #toggle .is-selected {\\n          background-color: blueviolet;\\n          color: white; }\\n    body main .title {\\n      font-size: 30px;\\n      text-align: center; }\\n    body main .note {\\n      text-align: center; }\\n    body main #content {\\n      flex-grow: 1;\\n      height: 100vh;\\n      background-color: #360069; }\\n      body main #content #weather {\\n        text-align: center;\\n        padding: 40px;\\n        color: white; }\\n        body main #content #weather .title {\\n          color: white;\\n          font-size: 30px;\\n          margin: 20px;\\n          text-align: center;\\n          font-weight: bold; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/empty.js":
/*!*********************************!*\
  !*** ./src/components/empty.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderEmpty = () => { document.getElementById('weather').innerHTML = ''; };\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderEmpty);\n\n//# sourceURL=webpack:///./src/components/empty.js?");

/***/ }),

/***/ "./src/components/loading.js":
/*!***********************************!*\
  !*** ./src/components/loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst weatherElement = document.getElementById('weather');\r\n\r\nconst renderLoading = () => {\r\n  weatherElement.innerHTML = '<div class=\"loading\">loading...</div>';\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderLoading);\n\n//# sourceURL=webpack:///./src/components/loading.js?");

/***/ }),

/***/ "./src/components/notfound.js":
/*!************************************!*\
  !*** ./src/components/notfound.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst weatherElement = document.getElementById('weather');\r\n\r\nconst renderNotFound = (inputValue, { cod, message }) => {\r\n  weatherElement.innerHTML = `\r\n    <h1>${cod} - ${message}</h1>\r\n    <p class=\"not-found\">there is no city called ${inputValue}</p>\r\n  `;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderNotFound);\n\n//# sourceURL=webpack:///./src/components/notfound.js?");

/***/ }),

/***/ "./src/components/toggle.js":
/*!**********************************!*\
  !*** ./src/components/toggle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable func-names */\r\nconst fElement = document.getElementById('F');\r\nconst cElement = document.getElementById('C');\r\nconst reset = (currentUnit) => {\r\n  if (currentUnit === 'C') {\r\n    fElement.className = '';\r\n  } else {\r\n    cElement.className = '';\r\n  }\r\n};\r\nconst toggleWeatherUnit = function (currentUnit) {\r\n  reset(currentUnit);\r\n  document.getElementById(currentUnit).className = 'is-selected';\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggleWeatherUnit);\n\n//# sourceURL=webpack:///./src/components/toggle.js?");

/***/ }),

/***/ "./src/components/weather.js":
/*!***********************************!*\
  !*** ./src/components/weather.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst weatherElement = document.getElementById('weather');\r\n// (0°C × 9/5) + 32 = 32°F\r\nconst getWeatherByUnit = (weather, unit) => {\r\n  if (unit === 'C') {\r\n    return weather;\r\n  }\r\n  return ((weather * (9 / 5)) + 32).toFixed(2);\r\n};\r\nconst renderWeather = ({\r\n  weather, wind, main, name, country,\r\n}, unit) => {\r\n  weatherElement.innerHTML = `\r\n    <h1 class=\"title\">Current Weather</h1>\r\n    <header>\r\n      <h1>${name}, ${country} ${getWeatherByUnit(Number(main.temp), unit)}<sup>o</sup><small>${unit}</small>  ${weather[0].main}</h1>\r\n      <img src=\"http://openweathermap.org/img/wn/${weather && weather[0].icon}@2x.png\" alt=\"${weather[0].main}\">\r\n    </header>\r\n    <h2> wind speed: ${wind.speed}<small>m/s</small> | direction: ${wind.deg}<sup>o</sup></h2>\r\n    <h3>Cloudiness ${weather[0].description} </h3>\r\n    <p>pressure ${main.pressure} hpa | Humidity ${main.humidity} %</p>  \r\n  `;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderWeather);\n\n//# sourceURL=webpack:///./src/components/weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/weather */ \"./src/service/weather.js\");\n/* harmony import */ var _components_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/weather */ \"./src/components/weather.js\");\n/* harmony import */ var _components_notfound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notfound */ \"./src/components/notfound.js\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loading */ \"./src/components/loading.js\");\n/* harmony import */ var _shared_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/debounce */ \"./src/shared/debounce.js\");\n/* harmony import */ var _components_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/empty */ \"./src/components/empty.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toggle */ \"./src/components/toggle.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst cityInputField = document.getElementById('city-input');\r\nconst toggleElement = document.getElementById('toggle');\r\nlet currentData;\r\nlet currentUnit = 'C';\r\nObject(_components_toggle__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(currentUnit);\r\ncityInputField.addEventListener('keyup', Object(_shared_debounce__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(({ target }) => {\r\n  if (target.value.replace(/\\s/g, '').length) {\r\n    Object(_components_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    Object(_service_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target.value).then((data) => {\r\n      if (data.error.cod === 200) {\r\n        currentData = data;\r\n        Object(_components_weather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, currentUnit);\r\n      } else {\r\n        currentData = undefined;\r\n        Object(_components_notfound__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target.value, data.error);\r\n      }\r\n    });\r\n  } else {\r\n    currentData = undefined;\r\n    Object(_components_empty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n  }\r\n}, 300));\r\n\r\ntoggleElement.addEventListener('click', ({ target }) => {\r\n  currentUnit = target.id;\r\n  Object(_components_toggle__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(currentUnit);\r\n  if (currentData) {\r\n    Object(_components_weather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(currentData, currentUnit);\r\n  }\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ "./src/service/weather.js":
/*!********************************!*\
  !*** ./src/service/weather.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fetchWeather = async (city) => {\r\n  const {\r\n    weather, wind, main, name, cod, message, sys,\r\n  } = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0afb0e9dce5d994d7f33ebdcc4202375`)\r\n    .then((res) => res.json()\r\n      .then((data) => data)\r\n      .catch((error) => error))\r\n    .catch((error) => error);\r\n  return {\r\n    weather, wind, main, name, error: { cod, message }, country: sys && sys.country,\r\n  };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchWeather);\n\n//# sourceURL=webpack:///./src/service/weather.js?");

/***/ }),

/***/ "./src/shared/debounce.js":
/*!********************************!*\
  !*** ./src/shared/debounce.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst debounce = (func, delay) => {\r\n  let inDebounce;\r\n  // eslint-disable-next-line func-names\r\n  return function () {\r\n    const context = this;\r\n    // eslint-disable-next-line prefer-rest-params\r\n    const args = arguments;\r\n    clearTimeout(inDebounce);\r\n    inDebounce = setTimeout(() => func.apply(context, args), delay);\r\n  };\r\n};\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (debounce);\n\n//# sourceURL=webpack:///./src/shared/debounce.js?");

/***/ })

/******/ });