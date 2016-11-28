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

	"use strict";
	__webpack_require__(2);
	var gmap_1 = __webpack_require__(6);
	var geo_1 = __webpack_require__(8);
	var weather_1 = __webpack_require__(9);
	var map = new gmap_1.default;
	var geo = new geo_1.default();
	var weather = new weather_1.default();
	geo.getPosition(function (position) {
	    weather.init(position, 30);
	    map.init(position, { zoom: 13 });
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\nbody {\n  font-family: 'Roboto Slab', sans-serif; }\n\n.navbar {\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  -ms-border-radius: 0;\n  border-radius: 0; }\n\n#google-map {\n  width: 100%;\n  height: 500px;\n  margin: auto; }\n\n#table-cities {\n  position: relative;\n  min-height: 7em; }\n  #table-cities:after {\n    position: absolute;\n    z-index: 111;\n    display: block;\n    width: 100%;\n    content: 'Loading\\2026   Please wait.';\n    text-align: center;\n    font-size: 2em;\n    color: #000;\n    left: 0;\n    top: 1.625em; }\n  #table-cities.done {\n    min-height: 0; }\n    #table-cities.done:after {\n      display: none; }\n\n.footer {\n  padding: 2em 0;\n  margin-top: 3em;\n  color: #fff;\n  text-align: center;\n  background-color: #2a2730; }\n  .footer p {\n    margin: 0; }\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../node_modules/@types/googlemaps/index.d.ts" />
	/// <reference path="../node_modules/@types/es6-shim/index.d.ts" />
	"use strict";
	var constants = __webpack_require__(7);
	var GMap = (function () {
	    function GMap() {
	    }
	    GMap.prototype.init = function (position, options) {
	        var coords = position.coords;
	        var pos = {
	            lat: coords.latitude,
	            lng: coords.longitude
	        };
	        this.options = {
	            center: pos,
	            zoom: 12
	        };
	        options = Object.assign({}, this.options, options || {});
	        this.gMap = new google.maps.Map(constants.googleMap, options);
	        this.marker = new google.maps.Marker({
	            position: pos,
	            map: this.gMap,
	            title: 'Demo marker'
	        });
	    };
	    return GMap;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = GMap;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	exports.GEO_API_KEY = '07544e7bd3442c641181e2b651145b42';
	exports.GEO_URL = 'http://api.openweathermap.org/data/2.5/';
	exports.geoLocation = document.getElementById('geolocation');
	exports.googleMap = document.getElementById("google-map");


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	var Geo = (function () {
	    function Geo() {
	        if (!navigator.geolocation) {
	            alert('Geolocation is not supported by your browser');
	            return;
	        }
	    }
	    Geo.prototype.getPosError = function () {
	        console.error('Unable to retrieve your location');
	    };
	    Geo.prototype.getPosition = function (callback) {
	        navigator.geolocation
	            .getCurrentPosition(callback.bind(this), this.getPosError);
	    };
	    return Geo;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Geo;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var constants = __webpack_require__(7);
	var xhr_1 = __webpack_require__(10);
	var xhr = new xhr_1.default();
	var Weather = (function () {
	    function Weather() {
	    }
	    Weather.prototype.init = function (position, count) {
	        var coords = position.coords;
	        constants.geoLocation.textContent = coords.latitude + ", " + coords.longitude;
	        xhr.GET(constants.GEO_URL + "find?lat=" + coords.latitude + "&lon=" + coords.longitude + "\n            &cnt=" + count + "&appid=" + constants.GEO_API_KEY);
	    };
	    return Weather;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Weather;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var templates_1 = __webpack_require__(11);
	var XHR = (function () {
	    function XHR(type, async) {
	        if (type === void 0) { type = 'GET'; }
	        if (async === void 0) { async = true; }
	        this.type = type;
	        this.async = async;
	    }
	    XHR.prototype.GET = function (url) {
	        var XHR = new XMLHttpRequest(), template = new templates_1.default(), elError = document.querySelector('.response-error'), elTable = document.getElementById('table-cities');
	        XHR.open(this.type, url, this.async);
	        XHR.send();
	        XHR.onload = function () {
	            if (XHR.readyState !== 4 || XHR.status !== 200) {
	                elError.classList.remove('hidden');
	                elError.textContent = XHR.status + ": " + XHR.statusText;
	            }
	            else {
	                var cities = JSON.parse(XHR.responseText).list;
	                cities.forEach(function (item) {
	                    template.tableRowLayout(item);
	                });
	                template.appendToTable();
	            }
	        };
	        XHR.onloadend = function () {
	            elTable.classList.add('done');
	        };
	        XHR.onerror = function (e) {
	            console.error('Error text ', e);
	        };
	    };
	    return XHR;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = XHR;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var Templates = (function () {
	    function Templates(fragment, tableCities) {
	        if (fragment === void 0) { fragment = document.createDocumentFragment(); }
	        if (tableCities === void 0) { tableCities = document.querySelector('.cities'); }
	        this.fragment = fragment;
	        this.tableCities = tableCities;
	    }
	    Templates.prototype.tableRowLayout = function (city) {
	        var tableContent = document.getElementById('city-tmpl')['content'];
	        var cityId = tableContent.getElementById('city-id');
	        var cityName = tableContent.getElementById('city-name');
	        var cityCoordinates = tableContent.getElementById('city-coordinates');
	        var cityTemperature = tableContent.getElementById('city-temperature');
	        cityId.textContent = city.id;
	        cityName.textContent = city.name;
	        cityTemperature.textContent = (+city.main.temp - 273).toFixed(2);
	        cityCoordinates.textContent = city.coord.lat + ", " + city.coord.lon;
	        this.fragment.appendChild(document.importNode(tableContent, true));
	    };
	    Templates.prototype.appendToTable = function () {
	        this.tableCities.appendChild(this.fragment);
	    };
	    return Templates;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Templates;


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map