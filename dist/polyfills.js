/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"app","2":"vendor"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(373);
	__webpack_require__(374);
	__webpack_require__(375);


/***/ },

/***/ 310:
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * core-js 2.4.1
	 * https://github.com/zloirock/core-js
	 * License: http://rock.mit-license.org
	 * © 2016 Denis Pushkarev
	 */
	!function(__e, __g, undefined){
	'use strict';
	/******/ (function(modules) { // webpackBootstrap
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
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(1);
		__webpack_require__(50);
		__webpack_require__(51);
		__webpack_require__(52);
		__webpack_require__(54);
		__webpack_require__(55);
		__webpack_require__(58);
		__webpack_require__(59);
		__webpack_require__(60);
		__webpack_require__(61);
		__webpack_require__(62);
		__webpack_require__(63);
		__webpack_require__(64);
		__webpack_require__(65);
		__webpack_require__(66);
		__webpack_require__(68);
		__webpack_require__(70);
		__webpack_require__(72);
		__webpack_require__(74);
		__webpack_require__(77);
		__webpack_require__(78);
		__webpack_require__(79);
		__webpack_require__(83);
		__webpack_require__(86);
		__webpack_require__(87);
		__webpack_require__(88);
		__webpack_require__(89);
		__webpack_require__(91);
		__webpack_require__(92);
		__webpack_require__(93);
		__webpack_require__(94);
		__webpack_require__(95);
		__webpack_require__(97);
		__webpack_require__(99);
		__webpack_require__(100);
		__webpack_require__(101);
		__webpack_require__(103);
		__webpack_require__(104);
		__webpack_require__(105);
		__webpack_require__(107);
		__webpack_require__(108);
		__webpack_require__(109);
		__webpack_require__(111);
		__webpack_require__(112);
		__webpack_require__(113);
		__webpack_require__(114);
		__webpack_require__(115);
		__webpack_require__(116);
		__webpack_require__(117);
		__webpack_require__(118);
		__webpack_require__(119);
		__webpack_require__(120);
		__webpack_require__(121);
		__webpack_require__(122);
		__webpack_require__(123);
		__webpack_require__(124);
		__webpack_require__(126);
		__webpack_require__(130);
		__webpack_require__(131);
		__webpack_require__(132);
		__webpack_require__(133);
		__webpack_require__(137);
		__webpack_require__(139);
		__webpack_require__(140);
		__webpack_require__(141);
		__webpack_require__(142);
		__webpack_require__(143);
		__webpack_require__(144);
		__webpack_require__(145);
		__webpack_require__(146);
		__webpack_require__(147);
		__webpack_require__(148);
		__webpack_require__(149);
		__webpack_require__(150);
		__webpack_require__(151);
		__webpack_require__(152);
		__webpack_require__(158);
		__webpack_require__(159);
		__webpack_require__(161);
		__webpack_require__(162);
		__webpack_require__(163);
		__webpack_require__(167);
		__webpack_require__(168);
		__webpack_require__(169);
		__webpack_require__(170);
		__webpack_require__(171);
		__webpack_require__(173);
		__webpack_require__(174);
		__webpack_require__(175);
		__webpack_require__(176);
		__webpack_require__(179);
		__webpack_require__(181);
		__webpack_require__(182);
		__webpack_require__(183);
		__webpack_require__(185);
		__webpack_require__(187);
		__webpack_require__(189);
		__webpack_require__(190);
		__webpack_require__(191);
		__webpack_require__(193);
		__webpack_require__(194);
		__webpack_require__(195);
		__webpack_require__(196);
		__webpack_require__(203);
		__webpack_require__(206);
		__webpack_require__(207);
		__webpack_require__(209);
		__webpack_require__(210);
		__webpack_require__(211);
		__webpack_require__(212);
		__webpack_require__(213);
		__webpack_require__(214);
		__webpack_require__(215);
		__webpack_require__(216);
		__webpack_require__(217);
		__webpack_require__(218);
		__webpack_require__(219);
		__webpack_require__(220);
		__webpack_require__(222);
		__webpack_require__(223);
		__webpack_require__(224);
		__webpack_require__(225);
		__webpack_require__(226);
		__webpack_require__(227);
		__webpack_require__(228);
		__webpack_require__(229);
		__webpack_require__(231);
		__webpack_require__(234);
		__webpack_require__(235);
		__webpack_require__(237);
		__webpack_require__(238);
		__webpack_require__(239);
		__webpack_require__(240);
		__webpack_require__(241);
		__webpack_require__(242);
		__webpack_require__(243);
		__webpack_require__(244);
		__webpack_require__(245);
		__webpack_require__(246);
		__webpack_require__(247);
		__webpack_require__(249);
		__webpack_require__(250);
		__webpack_require__(251);
		__webpack_require__(252);
		__webpack_require__(253);
		__webpack_require__(254);
		__webpack_require__(255);
		__webpack_require__(256);
		__webpack_require__(258);
		__webpack_require__(259);
		__webpack_require__(261);
		__webpack_require__(262);
		__webpack_require__(263);
		__webpack_require__(264);
		__webpack_require__(267);
		__webpack_require__(268);
		__webpack_require__(269);
		__webpack_require__(270);
		__webpack_require__(271);
		__webpack_require__(272);
		__webpack_require__(273);
		__webpack_require__(274);
		__webpack_require__(276);
		__webpack_require__(277);
		__webpack_require__(278);
		__webpack_require__(279);
		__webpack_require__(280);
		__webpack_require__(281);
		__webpack_require__(282);
		__webpack_require__(283);
		__webpack_require__(284);
		__webpack_require__(285);
		__webpack_require__(286);
		__webpack_require__(287);
		module.exports = __webpack_require__(288);
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// ECMAScript 6 symbols shim
		var global         = __webpack_require__(2)
		  , has            = __webpack_require__(3)
		  , DESCRIPTORS    = __webpack_require__(4)
		  , $export        = __webpack_require__(6)
		  , redefine       = __webpack_require__(16)
		  , META           = __webpack_require__(20).KEY
		  , $fails         = __webpack_require__(5)
		  , shared         = __webpack_require__(21)
		  , setToStringTag = __webpack_require__(22)
		  , uid            = __webpack_require__(17)
		  , wks            = __webpack_require__(23)
		  , wksExt         = __webpack_require__(24)
		  , wksDefine      = __webpack_require__(25)
		  , keyOf          = __webpack_require__(27)
		  , enumKeys       = __webpack_require__(40)
		  , isArray        = __webpack_require__(43)
		  , anObject       = __webpack_require__(10)
		  , toIObject      = __webpack_require__(30)
		  , toPrimitive    = __webpack_require__(14)
		  , createDesc     = __webpack_require__(15)
		  , _create        = __webpack_require__(44)
		  , gOPNExt        = __webpack_require__(47)
		  , $GOPD          = __webpack_require__(49)
		  , $DP            = __webpack_require__(9)
		  , $keys          = __webpack_require__(28)
		  , gOPD           = $GOPD.f
		  , dP             = $DP.f
		  , gOPN           = gOPNExt.f
		  , $Symbol        = global.Symbol
		  , $JSON          = global.JSON
		  , _stringify     = $JSON && $JSON.stringify
		  , PROTOTYPE      = 'prototype'
		  , HIDDEN         = wks('_hidden')
		  , TO_PRIMITIVE   = wks('toPrimitive')
		  , isEnum         = {}.propertyIsEnumerable
		  , SymbolRegistry = shared('symbol-registry')
		  , AllSymbols     = shared('symbols')
		  , OPSymbols      = shared('op-symbols')
		  , ObjectProto    = Object[PROTOTYPE]
		  , USE_NATIVE     = typeof $Symbol == 'function'
		  , QObject        = global.QObject;
		// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
		var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
		// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
		var setSymbolDesc = DESCRIPTORS && $fails(function(){
		  return _create(dP({}, 'a', {
		    get: function(){ return dP(this, 'a', {value: 7}).a; }
		  })).a != 7;
		}) ? function(it, key, D){
		  var protoDesc = gOPD(ObjectProto, key);
		  if(protoDesc)delete ObjectProto[key];
		  dP(it, key, D);
		  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
		} : dP;
	
		var wrap = function(tag){
		  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
		  sym._k = tag;
		  return sym;
		};
	
		var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
		  return typeof it == 'symbol';
		} : function(it){
		  return it instanceof $Symbol;
		};
	
		var $defineProperty = function defineProperty(it, key, D){
		  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
		  anObject(it);
		  key = toPrimitive(key, true);
		  anObject(D);
		  if(has(AllSymbols, key)){
		    if(!D.enumerable){
		      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
		      it[HIDDEN][key] = true;
		    } else {
		      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
		      D = _create(D, {enumerable: createDesc(0, false)});
		    } return setSymbolDesc(it, key, D);
		  } return dP(it, key, D);
		};
		var $defineProperties = function defineProperties(it, P){
		  anObject(it);
		  var keys = enumKeys(P = toIObject(P))
		    , i    = 0
		    , l = keys.length
		    , key;
		  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
		  return it;
		};
		var $create = function create(it, P){
		  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		var $propertyIsEnumerable = function propertyIsEnumerable(key){
		  var E = isEnum.call(this, key = toPrimitive(key, true));
		  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
		  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
		};
		var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
		  it  = toIObject(it);
		  key = toPrimitive(key, true);
		  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
		  var D = gOPD(it, key);
		  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
		  return D;
		};
		var $getOwnPropertyNames = function getOwnPropertyNames(it){
		  var names  = gOPN(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i){
		    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
		  } return result;
		};
		var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
		  var IS_OP  = it === ObjectProto
		    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i){
		    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
		  } return result;
		};
	
		// 19.4.1.1 Symbol([description])
		if(!USE_NATIVE){
		  $Symbol = function Symbol(){
		    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
		    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
		    var $set = function(value){
		      if(this === ObjectProto)$set.call(OPSymbols, value);
		      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
		      setSymbolDesc(this, tag, createDesc(1, value));
		    };
		    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
		    return wrap(tag);
		  };
		  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
		    return this._k;
		  });
	
		  $GOPD.f = $getOwnPropertyDescriptor;
		  $DP.f   = $defineProperty;
		  __webpack_require__(48).f = gOPNExt.f = $getOwnPropertyNames;
		  __webpack_require__(42).f  = $propertyIsEnumerable;
		  __webpack_require__(41).f = $getOwnPropertySymbols;
	
		  if(DESCRIPTORS && !__webpack_require__(26)){
		    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
		  }
	
		  wksExt.f = function(name){
		    return wrap(wks(name));
		  }
		}
	
		$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
		for(var symbols = (
		  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
		  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
		).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
		for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
		$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
		  // 19.4.2.1 Symbol.for(key)
		  'for': function(key){
		    return has(SymbolRegistry, key += '')
		      ? SymbolRegistry[key]
		      : SymbolRegistry[key] = $Symbol(key);
		  },
		  // 19.4.2.5 Symbol.keyFor(sym)
		  keyFor: function keyFor(key){
		    if(isSymbol(key))return keyOf(SymbolRegistry, key);
		    throw TypeError(key + ' is not a symbol!');
		  },
		  useSetter: function(){ setter = true; },
		  useSimple: function(){ setter = false; }
		});
	
		$export($export.S + $export.F * !USE_NATIVE, 'Object', {
		  // 19.1.2.2 Object.create(O [, Properties])
		  create: $create,
		  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
		  defineProperty: $defineProperty,
		  // 19.1.2.3 Object.defineProperties(O, Properties)
		  defineProperties: $defineProperties,
		  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
		  // 19.1.2.7 Object.getOwnPropertyNames(O)
		  getOwnPropertyNames: $getOwnPropertyNames,
		  // 19.1.2.8 Object.getOwnPropertySymbols(O)
		  getOwnPropertySymbols: $getOwnPropertySymbols
		});
	
		// 24.3.2 JSON.stringify(value [, replacer [, space]])
		$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
		  var S = $Symbol();
		  // MS Edge converts symbol values to JSON as {}
		  // WebKit converts symbol values to JSON as null
		  // V8 throws on boxed symbols
		  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
		})), 'JSON', {
		  stringify: function stringify(it){
		    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
		    var args = [it]
		      , i    = 1
		      , replacer, $replacer;
		    while(arguments.length > i)args.push(arguments[i++]);
		    replacer = args[1];
		    if(typeof replacer == 'function')$replacer = replacer;
		    if($replacer || !isArray(replacer))replacer = function(key, value){
		      if($replacer)value = $replacer.call(this, key, value);
		      if(!isSymbol(value))return value;
		    };
		    args[1] = replacer;
		    return _stringify.apply($JSON, args);
		  }
		});
	
		// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
		$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setToStringTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setToStringTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setToStringTag(global.JSON, 'JSON', true);
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(5)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global    = __webpack_require__(2)
		  , core      = __webpack_require__(7)
		  , hide      = __webpack_require__(8)
		  , redefine  = __webpack_require__(16)
		  , ctx       = __webpack_require__(18)
		  , PROTOTYPE = 'prototype';
	
		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
		    , key, own, out, exp;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    // export native or passed
		    out = (own ? target : source)[key];
		    // bind timers to global for call from export context
		    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // extend global
		    if(target)redefine(target, key, out, type & $export.U);
		    // export
		    if(exports[key] != out)hide(exports, key, exp);
		    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
		  }
		};
		global.core = core;
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library` 
		module.exports = $export;
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		var dP         = __webpack_require__(9)
		  , createDesc = __webpack_require__(15);
		module.exports = __webpack_require__(4) ? function(object, key, value){
		  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		var anObject       = __webpack_require__(10)
		  , IE8_DOM_DEFINE = __webpack_require__(12)
		  , toPrimitive    = __webpack_require__(14)
		  , dP             = Object.defineProperty;
	
		exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if(IE8_DOM_DEFINE)try {
		    return dP(O, P, Attributes);
		  } catch(e){ /* empty */ }
		  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
		  if('value' in Attributes)O[P] = Attributes.value;
		  return O;
		};
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(11);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = !__webpack_require__(4) && !__webpack_require__(5)(function(){
		  return Object.defineProperty(__webpack_require__(13)('div'), 'a', {get: function(){ return 7; }}).a != 7;
		});
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(11)
		  , document = __webpack_require__(2).document
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__(11);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S){
		  if(!isObject(it))return it;
		  var fn, val;
		  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  throw TypeError("Can't convert object to primitive value");
		};
	
	/***/ },
	/* 15 */
	/***/ function(module, exports) {
	
		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global    = __webpack_require__(2)
		  , hide      = __webpack_require__(8)
		  , has       = __webpack_require__(3)
		  , SRC       = __webpack_require__(17)('src')
		  , TO_STRING = 'toString'
		  , $toString = Function[TO_STRING]
		  , TPL       = ('' + $toString).split(TO_STRING);
	
		__webpack_require__(7).inspectSource = function(it){
		  return $toString.call(it);
		};
	
		(module.exports = function(O, key, val, safe){
		  var isFunction = typeof val == 'function';
		  if(isFunction)has(val, 'name') || hide(val, 'name', key);
		  if(O[key] === val)return;
		  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
		  if(O === global){
		    O[key] = val;
		  } else {
		    if(!safe){
		      delete O[key];
		      hide(O, key, val);
		    } else {
		      if(O[key])O[key] = val;
		      else hide(O, key, val);
		    }
		  }
		// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
		})(Function.prototype, TO_STRING, function toString(){
		  return typeof this == 'function' && this[SRC] || $toString.call(this);
		});
	
	/***/ },
	/* 17 */
	/***/ function(module, exports) {
	
		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		// optional / simple context binding
		var aFunction = __webpack_require__(19);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};
	
	/***/ },
	/* 19 */
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		var META     = __webpack_require__(17)('meta')
		  , isObject = __webpack_require__(11)
		  , has      = __webpack_require__(3)
		  , setDesc  = __webpack_require__(9).f
		  , id       = 0;
		var isExtensible = Object.isExtensible || function(){
		  return true;
		};
		var FREEZE = !__webpack_require__(5)(function(){
		  return isExtensible(Object.preventExtensions({}));
		});
		var setMeta = function(it){
		  setDesc(it, META, {value: {
		    i: 'O' + ++id, // object ID
		    w: {}          // weak collections IDs
		  }});
		};
		var fastKey = function(it, create){
		  // return primitive with prefix
		  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
		  if(!has(it, META)){
		    // can't set metadata to uncaught frozen object
		    if(!isExtensible(it))return 'F';
		    // not necessary to add metadata
		    if(!create)return 'E';
		    // add missing metadata
		    setMeta(it);
		  // return object ID
		  } return it[META].i;
		};
		var getWeak = function(it, create){
		  if(!has(it, META)){
		    // can't set metadata to uncaught frozen object
		    if(!isExtensible(it))return true;
		    // not necessary to add metadata
		    if(!create)return false;
		    // add missing metadata
		    setMeta(it);
		  // return hash weak collections IDs
		  } return it[META].w;
		};
		// add metadata on freeze-family methods calling
		var onFreeze = function(it){
		  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
		  return it;
		};
		var meta = module.exports = {
		  KEY:      META,
		  NEED:     false,
		  fastKey:  fastKey,
		  getWeak:  getWeak,
		  onFreeze: onFreeze
		};
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global = __webpack_require__(2)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		var def = __webpack_require__(9).f
		  , has = __webpack_require__(3)
		  , TAG = __webpack_require__(23)('toStringTag');
	
		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		var store      = __webpack_require__(21)('wks')
		  , uid        = __webpack_require__(17)
		  , Symbol     = __webpack_require__(2).Symbol
		  , USE_SYMBOL = typeof Symbol == 'function';
	
		var $exports = module.exports = function(name){
		  return store[name] || (store[name] =
		    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
		};
	
		$exports.store = store;
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports.f = __webpack_require__(23);
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global         = __webpack_require__(2)
		  , core           = __webpack_require__(7)
		  , LIBRARY        = __webpack_require__(26)
		  , wksExt         = __webpack_require__(24)
		  , defineProperty = __webpack_require__(9).f;
		module.exports = function(name){
		  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
		  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
		};
	
	/***/ },
	/* 26 */
	/***/ function(module, exports) {
	
		module.exports = false;
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getKeys   = __webpack_require__(28)
		  , toIObject = __webpack_require__(30);
		module.exports = function(object, el){
		  var O      = toIObject(object)
		    , keys   = getKeys(O)
		    , length = keys.length
		    , index  = 0
		    , key;
		  while(length > index)if(O[key = keys[index++]] === el)return key;
		};
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		var $keys       = __webpack_require__(29)
		  , enumBugKeys = __webpack_require__(39);
	
		module.exports = Object.keys || function keys(O){
		  return $keys(O, enumBugKeys);
		};
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
	
		var has          = __webpack_require__(3)
		  , toIObject    = __webpack_require__(30)
		  , arrayIndexOf = __webpack_require__(34)(false)
		  , IE_PROTO     = __webpack_require__(38)('IE_PROTO');
	
		module.exports = function(object, names){
		  var O      = toIObject(object)
		    , i      = 0
		    , result = []
		    , key;
		  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
		  // Don't enum bug & hidden keys
		  while(names.length > i)if(has(O, key = names[i++])){
		    ~arrayIndexOf(result, key) || result.push(key);
		  }
		  return result;
		};
	
	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
	
		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(31)
		  , defined = __webpack_require__(33);
		module.exports = function(it){
		  return IObject(defined(it));
		};
	
	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
	
		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(32);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};
	
	/***/ },
	/* 32 */
	/***/ function(module, exports) {
	
		var toString = {}.toString;
	
		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};
	
	/***/ },
	/* 33 */
	/***/ function(module, exports) {
	
		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};
	
	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
	
		// false -> Array#indexOf
		// true  -> Array#includes
		var toIObject = __webpack_require__(30)
		  , toLength  = __webpack_require__(35)
		  , toIndex   = __webpack_require__(37);
		module.exports = function(IS_INCLUDES){
		  return function($this, el, fromIndex){
		    var O      = toIObject($this)
		      , length = toLength(O.length)
		      , index  = toIndex(fromIndex, length)
		      , value;
		    // Array#includes uses SameValueZero equality algorithm
		    if(IS_INCLUDES && el != el)while(length > index){
		      value = O[index++];
		      if(value != value)return true;
		    // Array#toIndex ignores holes, Array#includes - not
		    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
		      if(O[index] === el)return IS_INCLUDES || index || 0;
		    } return !IS_INCLUDES && -1;
		  };
		};
	
	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.15 ToLength
		var toInteger = __webpack_require__(36)
		  , min       = Math.min;
		module.exports = function(it){
		  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};
	
	/***/ },
	/* 36 */
	/***/ function(module, exports) {
	
		// 7.1.4 ToInteger
		var ceil  = Math.ceil
		  , floor = Math.floor;
		module.exports = function(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		var toInteger = __webpack_require__(36)
		  , max       = Math.max
		  , min       = Math.min;
		module.exports = function(index, length){
		  index = toInteger(index);
		  return index < 0 ? max(index + length, 0) : min(index, length);
		};
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
		var shared = __webpack_require__(21)('keys')
		  , uid    = __webpack_require__(17);
		module.exports = function(key){
		  return shared[key] || (shared[key] = uid(key));
		};
	
	/***/ },
	/* 39 */
	/***/ function(module, exports) {
	
		// IE 8- don't enum bug keys
		module.exports = (
		  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
		).split(',');
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
		// all enumerable object keys, includes symbols
		var getKeys = __webpack_require__(28)
		  , gOPS    = __webpack_require__(41)
		  , pIE     = __webpack_require__(42);
		module.exports = function(it){
		  var result     = getKeys(it)
		    , getSymbols = gOPS.f;
		  if(getSymbols){
		    var symbols = getSymbols(it)
		      , isEnum  = pIE.f
		      , i       = 0
		      , key;
		    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
		  } return result;
		};
	
	/***/ },
	/* 41 */
	/***/ function(module, exports) {
	
		exports.f = Object.getOwnPropertySymbols;
	
	/***/ },
	/* 42 */
	/***/ function(module, exports) {
	
		exports.f = {}.propertyIsEnumerable;
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.2.2 IsArray(argument)
		var cof = __webpack_require__(32);
		module.exports = Array.isArray || function isArray(arg){
		  return cof(arg) == 'Array';
		};
	
	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		var anObject    = __webpack_require__(10)
		  , dPs         = __webpack_require__(45)
		  , enumBugKeys = __webpack_require__(39)
		  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
		  , Empty       = function(){ /* empty */ }
		  , PROTOTYPE   = 'prototype';
	
		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var createDict = function(){
		  // Thrash, waste and sodomy: IE GC bug
		  var iframe = __webpack_require__(13)('iframe')
		    , i      = enumBugKeys.length
		    , lt     = '<'
		    , gt     = '>'
		    , iframeDocument;
		  iframe.style.display = 'none';
		  __webpack_require__(46).appendChild(iframe);
		  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
		  // createDict = iframe.contentWindow.Object;
		  // html.removeChild(iframe);
		  iframeDocument = iframe.contentWindow.document;
		  iframeDocument.open();
		  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
		  iframeDocument.close();
		  createDict = iframeDocument.F;
		  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
		  return createDict();
		};
	
		module.exports = Object.create || function create(O, Properties){
		  var result;
		  if(O !== null){
		    Empty[PROTOTYPE] = anObject(O);
		    result = new Empty;
		    Empty[PROTOTYPE] = null;
		    // add "__proto__" for Object.getPrototypeOf polyfill
		    result[IE_PROTO] = O;
		  } else result = createDict();
		  return Properties === undefined ? result : dPs(result, Properties);
		};
	
	
	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {
	
		var dP       = __webpack_require__(9)
		  , anObject = __webpack_require__(10)
		  , getKeys  = __webpack_require__(28);
	
		module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties){
		  anObject(O);
		  var keys   = getKeys(Properties)
		    , length = keys.length
		    , i = 0
		    , P;
		  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
		  return O;
		};
	
	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(2).document && document.documentElement;
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
		var toIObject = __webpack_require__(30)
		  , gOPN      = __webpack_require__(48).f
		  , toString  = {}.toString;
	
		var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
		  ? Object.getOwnPropertyNames(window) : [];
	
		var getWindowNames = function(it){
		  try {
		    return gOPN(it);
		  } catch(e){
		    return windowNames.slice();
		  }
		};
	
		module.exports.f = function getOwnPropertyNames(it){
		  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
		};
	
	
	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
		var $keys      = __webpack_require__(29)
		  , hiddenKeys = __webpack_require__(39).concat('length', 'prototype');
	
		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
		  return $keys(O, hiddenKeys);
		};
	
	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {
	
		var pIE            = __webpack_require__(42)
		  , createDesc     = __webpack_require__(15)
		  , toIObject      = __webpack_require__(30)
		  , toPrimitive    = __webpack_require__(14)
		  , has            = __webpack_require__(3)
		  , IE8_DOM_DEFINE = __webpack_require__(12)
		  , gOPD           = Object.getOwnPropertyDescriptor;
	
		exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P){
		  O = toIObject(O);
		  P = toPrimitive(P, true);
		  if(IE8_DOM_DEFINE)try {
		    return gOPD(O, P);
		  } catch(e){ /* empty */ }
		  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
		};
	
	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(6);
		// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
		$export($export.S + $export.F * !__webpack_require__(4), 'Object', {defineProperty: __webpack_require__(9).f});
	
	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(6);
		// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
		$export($export.S + $export.F * !__webpack_require__(4), 'Object', {defineProperties: __webpack_require__(45)});
	
	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		var toIObject                 = __webpack_require__(30)
		  , $getOwnPropertyDescriptor = __webpack_require__(49).f;
	
		__webpack_require__(53)('getOwnPropertyDescriptor', function(){
		  return function getOwnPropertyDescriptor(it, key){
		    return $getOwnPropertyDescriptor(toIObject(it), key);
		  };
		});
	
	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {
	
		// most Object methods by ES6 should accept primitives
		var $export = __webpack_require__(6)
		  , core    = __webpack_require__(7)
		  , fails   = __webpack_require__(5);
		module.exports = function(KEY, exec){
		  var fn  = (core.Object || {})[KEY] || Object[KEY]
		    , exp = {};
		  exp[KEY] = exec(fn);
		  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
		};
	
	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(6)
		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		$export($export.S, 'Object', {create: __webpack_require__(44)});
	
	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.9 Object.getPrototypeOf(O)
		var toObject        = __webpack_require__(56)
		  , $getPrototypeOf = __webpack_require__(57);
	
		__webpack_require__(53)('getPrototypeOf', function(){
		  return function getPrototypeOf(it){
		    return $getPrototypeOf(toObject(it));
		  };
		});
	
	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.13 ToObject(argument)
		var defined = __webpack_require__(33);
		module.exports = function(it){
		  return Object(defined(it));
		};
	
	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		var has         = __webpack_require__(3)
		  , toObject    = __webpack_require__(56)
		  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
		  , ObjectProto = Object.prototype;
	
		module.exports = Object.getPrototypeOf || function(O){
		  O = toObject(O);
		  if(has(O, IE_PROTO))return O[IE_PROTO];
		  if(typeof O.constructor == 'function' && O instanceof O.constructor){
		    return O.constructor.prototype;
		  } return O instanceof Object ? ObjectProto : null;
		};
	
	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.14 Object.keys(O)
		var toObject = __webpack_require__(56)
		  , $keys    = __webpack_require__(28);
	
		__webpack_require__(53)('keys', function(){
		  return function keys(it){
		    return $keys(toObject(it));
		  };
		});
	
	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.7 Object.getOwnPropertyNames(O)
		__webpack_require__(53)('getOwnPropertyNames', function(){
		  return __webpack_require__(47).f;
		});
	
	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.5 Object.freeze(O)
		var isObject = __webpack_require__(11)
		  , meta     = __webpack_require__(20).onFreeze;
	
		__webpack_require__(53)('freeze', function($freeze){
		  return function freeze(it){
		    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
		  };
		});
	
	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.17 Object.seal(O)
		var isObject = __webpack_require__(11)
		  , meta     = __webpack_require__(20).onFreeze;
	
		__webpack_require__(53)('seal', function($seal){
		  return function seal(it){
		    return $seal && isObject(it) ? $seal(meta(it)) : it;
		  };
		});
	
	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.15 Object.preventExtensions(O)
		var isObject = __webpack_require__(11)
		  , meta     = __webpack_require__(20).onFreeze;
	
		__webpack_require__(53)('preventExtensions', function($preventExtensions){
		  return function preventExtensions(it){
		    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
		  };
		});
	
	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.12 Object.isFrozen(O)
		var isObject = __webpack_require__(11);
	
		__webpack_require__(53)('isFrozen', function($isFrozen){
		  return function isFrozen(it){
		    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
		  };
		});
	
	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.13 Object.isSealed(O)
		var isObject = __webpack_require__(11);
	
		__webpack_require__(53)('isSealed', function($isSealed){
		  return function isSealed(it){
		    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
		  };
		});
	
	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.11 Object.isExtensible(O)
		var isObject = __webpack_require__(11);
	
		__webpack_require__(53)('isExtensible', function($isExtensible){
		  return function isExtensible(it){
		    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
		  };
		});
	
	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.3.1 Object.assign(target, source)
		var $export = __webpack_require__(6);
	
		$export($export.S + $export.F, 'Object', {assign: __webpack_require__(67)});
	
	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// 19.1.2.1 Object.assign(target, source, ...)
		var getKeys  = __webpack_require__(28)
		  , gOPS     = __webpack_require__(41)
		  , pIE      = __webpack_require__(42)
		  , toObject = __webpack_require__(56)
		  , IObject  = __webpack_require__(31)
		  , $assign  = Object.assign;
	
		// should work with symbols and should have deterministic property order (V8 bug)
		module.exports = !$assign || __webpack_require__(5)(function(){
		  var A = {}
		    , B = {}
		    , S = Symbol()
		    , K = 'abcdefghijklmnopqrst';
		  A[S] = 7;
		  K.split('').forEach(function(k){ B[k] = k; });
		  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
		}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
		  var T     = toObject(target)
		    , aLen  = arguments.length
		    , index = 1
		    , getSymbols = gOPS.f
		    , isEnum     = pIE.f;
		  while(aLen > index){
		    var S      = IObject(arguments[index++])
		      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
		      , length = keys.length
		      , j      = 0
		      , key;
		    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
		  } return T;
		} : $assign;
	
	/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.3.10 Object.is(value1, value2)
		var $export = __webpack_require__(6);
		$export($export.S, 'Object', {is: __webpack_require__(69)});
	
	/***/ },
	/* 69 */
	/***/ function(module, exports) {
	
		// 7.2.9 SameValue(x, y)
		module.exports = Object.is || function is(x, y){
		  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
		};
	
	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.3.19 Object.setPrototypeOf(O, proto)
		var $export = __webpack_require__(6);
		$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(71).set});
	
	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Works with __proto__ only. Old v8 can't work with null proto objects.
		/* eslint-disable no-proto */
		var isObject = __webpack_require__(11)
		  , anObject = __webpack_require__(10);
		var check = function(O, proto){
		  anObject(O);
		  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
		};
		module.exports = {
		  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
		    function(test, buggy, set){
		      try {
		        set = __webpack_require__(18)(Function.call, __webpack_require__(49).f(Object.prototype, '__proto__').set, 2);
		        set(test, []);
		        buggy = !(test instanceof Array);
		      } catch(e){ buggy = true; }
		      return function setPrototypeOf(O, proto){
		        check(O, proto);
		        if(buggy)O.__proto__ = proto;
		        else set(O, proto);
		        return O;
		      };
		    }({}, false) : undefined),
		  check: check
		};
	
	/***/ },
	/* 72 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// 19.1.3.6 Object.prototype.toString()
		var classof = __webpack_require__(73)
		  , test    = {};
		test[__webpack_require__(23)('toStringTag')] = 'z';
		if(test + '' != '[object z]'){
		  __webpack_require__(16)(Object.prototype, 'toString', function toString(){
		    return '[object ' + classof(this) + ']';
		  }, true);
		}
	
	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {
	
		// getting tag from 19.1.3.6 Object.prototype.toString()
		var cof = __webpack_require__(32)
		  , TAG = __webpack_require__(23)('toStringTag')
		  // ES3 wrong here
		  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
		// fallback for IE11 Script Access Denied error
		var tryGet = function(it, key){
		  try {
		    return it[key];
		  } catch(e){ /* empty */ }
		};
	
		module.exports = function(it){
		  var O, T, B;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		    // @@toStringTag case
		    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
		    // builtinTag case
		    : ARG ? cof(O)
		    // ES3 arguments fallback
		    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
		};
	
	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
		var $export = __webpack_require__(6);
	
		$export($export.P, 'Function', {bind: __webpack_require__(75)});
	
	/***/ },
	/* 75 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var aFunction  = __webpack_require__(19)
		  , isObject   = __webpack_require__(11)
		  , invoke     = __webpack_require__(76)
		  , arraySlice = [].slice
		  , factories  = {};
	
		var construct = function(F, len, args){
		  if(!(len in factories)){
		    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
		    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
		  } return factories[len](F, args);
		};
	
		module.exports = Function.bind || function bind(that /*, args... */){
		  var fn       = aFunction(this)
		    , partArgs = arraySlice.call(arguments, 1);
		  var bound = function(/* args... */){
		    var args = partArgs.concat(arraySlice.call(arguments));
		    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
		  };
		  if(isObject(fn.prototype))bound.prototype = fn.prototype;
		  return bound;
		};
	
	/***/ },
	/* 76 */
	/***/ function(module, exports) {
	
		// fast apply, http://jsperf.lnkit.com/fast-apply/5
		module.exports = function(fn, args, that){
		  var un = that === undefined;
		  switch(args.length){
		    case 0: return un ? fn()
		                      : fn.call(that);
		    case 1: return un ? fn(args[0])
		                      : fn.call(that, args[0]);
		    case 2: return un ? fn(args[0], args[1])
		                      : fn.call(that, args[0], args[1]);
		    case 3: return un ? fn(args[0], args[1], args[2])
		                      : fn.call(that, args[0], args[1], args[2]);
		    case 4: return un ? fn(args[0], args[1], args[2], args[3])
		                      : fn.call(that, args[0], args[1], args[2], args[3]);
		  } return              fn.apply(that, args);
		};
	
	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {
	
		var dP         = __webpack_require__(9).f
		  , createDesc = __webpack_require__(15)
		  , has        = __webpack_require__(3)
		  , FProto     = Function.prototype
		  , nameRE     = /^\s*function ([^ (]*)/
		  , NAME       = 'name';
	
		var isExtensible = Object.isExtensible || function(){
		  return true;
		};
	
		// 19.2.4.2 name
		NAME in FProto || __webpack_require__(4) && dP(FProto, NAME, {
		  configurable: true,
		  get: function(){
		    try {
		      var that = this
		        , name = ('' + that).match(nameRE)[1];
		      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
		      return name;
		    } catch(e){
		      return '';
		    }
		  }
		});
	
	/***/ },
	/* 78 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var isObject       = __webpack_require__(11)
		  , getPrototypeOf = __webpack_require__(57)
		  , HAS_INSTANCE   = __webpack_require__(23)('hasInstance')
		  , FunctionProto  = Function.prototype;
		// 19.2.3.6 Function.prototype[@@hasInstance](V)
		if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(9).f(FunctionProto, HAS_INSTANCE, {value: function(O){
		  if(typeof this != 'function' || !isObject(O))return false;
		  if(!isObject(this.prototype))return O instanceof this;
		  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
		  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
		  return false;
		}});
	
	/***/ },
	/* 79 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var global            = __webpack_require__(2)
		  , has               = __webpack_require__(3)
		  , cof               = __webpack_require__(32)
		  , inheritIfRequired = __webpack_require__(80)
		  , toPrimitive       = __webpack_require__(14)
		  , fails             = __webpack_require__(5)
		  , gOPN              = __webpack_require__(48).f
		  , gOPD              = __webpack_require__(49).f
		  , dP                = __webpack_require__(9).f
		  , $trim             = __webpack_require__(81).trim
		  , NUMBER            = 'Number'
		  , $Number           = global[NUMBER]
		  , Base              = $Number
		  , proto             = $Number.prototype
		  // Opera ~12 has broken Object#toString
		  , BROKEN_COF        = cof(__webpack_require__(44)(proto)) == NUMBER
		  , TRIM              = 'trim' in String.prototype;
	
		// 7.1.3 ToNumber(argument)
		var toNumber = function(argument){
		  var it = toPrimitive(argument, false);
		  if(typeof it == 'string' && it.length > 2){
		    it = TRIM ? it.trim() : $trim(it, 3);
		    var first = it.charCodeAt(0)
		      , third, radix, maxCode;
		    if(first === 43 || first === 45){
		      third = it.charCodeAt(2);
		      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
		    } else if(first === 48){
		      switch(it.charCodeAt(1)){
		        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
		        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
		        default : return +it;
		      }
		      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
		        code = digits.charCodeAt(i);
		        // parseInt parses a string to a first unavailable symbol
		        // but ToNumber should return NaN if a string contains unavailable symbols
		        if(code < 48 || code > maxCode)return NaN;
		      } return parseInt(digits, radix);
		    }
		  } return +it;
		};
	
		if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
		  $Number = function Number(value){
		    var it = arguments.length < 1 ? 0 : value
		      , that = this;
		    return that instanceof $Number
		      // check on 1..constructor(foo) case
		      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
		        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
		  };
		  for(var keys = __webpack_require__(4) ? gOPN(Base) : (
		    // ES3:
		    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
		    // ES6 (in case, if modules with ES6 Number statics required before):
		    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
		    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
		  ).split(','), j = 0, key; keys.length > j; j++){
		    if(has(Base, key = keys[j]) && !has($Number, key)){
		      dP($Number, key, gOPD(Base, key));
		    }
		  }
		  $Number.prototype = proto;
		  proto.constructor = $Number;
		  __webpack_require__(16)(global, NUMBER, $Number);
		}
	
	/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject       = __webpack_require__(11)
		  , setPrototypeOf = __webpack_require__(71).set;
		module.exports = function(that, target, C){
		  var P, S = target.constructor;
		  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
		    setPrototypeOf(that, P);
		  } return that;
		};
	
	/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(6)
		  , defined = __webpack_require__(33)
		  , fails   = __webpack_require__(5)
		  , spaces  = __webpack_require__(82)
		  , space   = '[' + spaces + ']'
		  , non     = '\u200b\u0085'
		  , ltrim   = RegExp('^' + space + space + '*')
		  , rtrim   = RegExp(space + space + '*$');
	
		var exporter = function(KEY, exec, ALIAS){
		  var exp   = {};
		  var FORCE = fails(function(){
		    return !!spaces[KEY]() || non[KEY]() != non;
		  });
		  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
		  if(ALIAS)exp[ALIAS] = fn;
		  $export($export.P + $export.F * FORCE, 'String', exp);
		};
	
		// 1 -> String#trimLeft
		// 2 -> String#trimRight
		// 3 -> String#trim
		var trim = exporter.trim = function(string, TYPE){
		  string = String(defined(string));
		  if(TYPE & 1)string = string.replace(ltrim, '');
		  if(TYPE & 2)string = string.replace(rtrim, '');
		  return string;
		};
	
		module.exports = exporter;
	
	/***/ },
	/* 82 */
	/***/ function(module, exports) {
	
		module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
		  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
	
	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export      = __webpack_require__(6)
		  , toInteger    = __webpack_require__(36)
		  , aNumberValue = __webpack_require__(84)
		  , repeat       = __webpack_require__(85)
		  , $toFixed     = 1..toFixed
		  , floor        = Math.floor
		  , data         = [0, 0, 0, 0, 0, 0]
		  , ERROR        = 'Number.toFixed: incorrect invocation!'
		  , ZERO         = '0';
	
		var multiply = function(n, c){
		  var i  = -1
		    , c2 = c;
		  while(++i < 6){
		    c2 += n * data[i];
		    data[i] = c2 % 1e7;
		    c2 = floor(c2 / 1e7);
		  }
		};
		var divide = function(n){
		  var i = 6
		    , c = 0;
		  while(--i >= 0){
		    c += data[i];
		    data[i] = floor(c / n);
		    c = (c % n) * 1e7;
		  }
		};
		var numToString = function(){
		  var i = 6
		    , s = '';
		  while(--i >= 0){
		    if(s !== '' || i === 0 || data[i] !== 0){
		      var t = String(data[i]);
		      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
		    }
		  } return s;
		};
		var pow = function(x, n, acc){
		  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
		};
		var log = function(x){
		  var n  = 0
		    , x2 = x;
		  while(x2 >= 4096){
		    n += 12;
		    x2 /= 4096;
		  }
		  while(x2 >= 2){
		    n  += 1;
		    x2 /= 2;
		  } return n;
		};
	
		$export($export.P + $export.F * (!!$toFixed && (
		  0.00008.toFixed(3) !== '0.000' ||
		  0.9.toFixed(0) !== '1' ||
		  1.255.toFixed(2) !== '1.25' ||
		  1000000000000000128..toFixed(0) !== '1000000000000000128'
		) || !__webpack_require__(5)(function(){
		  // V8 ~ Android 4.3-
		  $toFixed.call({});
		})), 'Number', {
		  toFixed: function toFixed(fractionDigits){
		    var x = aNumberValue(this, ERROR)
		      , f = toInteger(fractionDigits)
		      , s = ''
		      , m = ZERO
		      , e, z, j, k;
		    if(f < 0 || f > 20)throw RangeError(ERROR);
		    if(x != x)return 'NaN';
		    if(x <= -1e21 || x >= 1e21)return String(x);
		    if(x < 0){
		      s = '-';
		      x = -x;
		    }
		    if(x > 1e-21){
		      e = log(x * pow(2, 69, 1)) - 69;
		      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
		      z *= 0x10000000000000;
		      e = 52 - e;
		      if(e > 0){
		        multiply(0, z);
		        j = f;
		        while(j >= 7){
		          multiply(1e7, 0);
		          j -= 7;
		        }
		        multiply(pow(10, j, 1), 0);
		        j = e - 1;
		        while(j >= 23){
		          divide(1 << 23);
		          j -= 23;
		        }
		        divide(1 << j);
		        multiply(1, 1);
		        divide(2);
		        m = numToString();
		      } else {
		        multiply(0, z);
		        multiply(1 << -e, 0);
		        m = numToString() + repeat.call(ZERO, f);
		      }
		    }
		    if(f > 0){
		      k = m.length;
		      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
		    } else {
		      m = s + m;
		    } return m;
		  }
		});
	
	/***/ },
	/* 84 */
	/***/ function(module, exports, __webpack_require__) {
	
		var cof = __webpack_require__(32);
		module.exports = function(it, msg){
		  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
		  return +it;
		};
	
	/***/ },
	/* 85 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var toInteger = __webpack_require__(36)
		  , defined   = __webpack_require__(33);
	
		module.exports = function repeat(count){
		  var str = String(defined(this))
		    , res = ''
		    , n   = toInteger(count);
		  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
		  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
		  return res;
		};
	
	/***/ },
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export      = __webpack_require__(6)
		  , $fails       = __webpack_require__(5)
		  , aNumberValue = __webpack_require__(84)
		  , $toPrecision = 1..toPrecision;
	
		$export($export.P + $export.F * ($fails(function(){
		  // IE7-
		  return $toPrecision.call(1, undefined) !== '1';
		}) || !$fails(function(){
		  // V8 ~ Android 4.3-
		  $toPrecision.call({});
		})), 'Number', {
		  toPrecision: function toPrecision(precision){
		    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
		    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
		  }
		});
	
	/***/ },
	/* 87 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.1.2.1 Number.EPSILON
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});
	
	/***/ },
	/* 88 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.1.2.2 Number.isFinite(number)
		var $export   = __webpack_require__(6)
		  , _isFinite = __webpack_require__(2).isFinite;
	
		$export($export.S, 'Number', {
		  isFinite: function isFinite(it){
		    return typeof it == 'number' && _isFinite(it);
		  }
		});
	
	/***/ },
	/* 89 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.1.2.3 Number.isInteger(number)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Number', {isInteger: __webpack_require__(90)});
	
	/***/ },
	/* 90 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.1.2.3 Number.isInteger(number)
		var isObject = __webpack_require__(11)
		  , floor    = Math.floor;
		module.exports = function isInteger(it){
		  return !isObject(it) && isFinite(it) && floor(it) === it;
		};
	
	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.1.2.4 Number.isNaN(number)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Number', {
		  isNaN: function isNaN(number){
		    return number != number;
		  }
		});
	
	/***/ },
	/* 92 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.1.2.5 Number.isSafeInteger(number)
		var $export   = __webpack_require__(6)
		  , isInteger = __webpack_require__(90)
		  , abs       = Math.abs;
	
		$export($export.S, 'Number', {
		  isSafeInteger: function isSafeInteger(number){
		    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
		  }
		});
	
	/***/ },
	/* 93 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.1.2.6 Number.MAX_SAFE_INTEGER
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});
	
	/***/ },
	/* 94 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.1.2.10 Number.MIN_SAFE_INTEGER
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});
	
	/***/ },
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export     = __webpack_require__(6)
		  , $parseFloat = __webpack_require__(96);
		// 20.1.2.12 Number.parseFloat(string)
		$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});
	
	/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $parseFloat = __webpack_require__(2).parseFloat
		  , $trim       = __webpack_require__(81).trim;
	
		module.exports = 1 / $parseFloat(__webpack_require__(82) + '-0') !== -Infinity ? function parseFloat(str){
		  var string = $trim(String(str), 3)
		    , result = $parseFloat(string);
		  return result === 0 && string.charAt(0) == '-' ? -0 : result;
		} : $parseFloat;
	
	/***/ },
	/* 97 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export   = __webpack_require__(6)
		  , $parseInt = __webpack_require__(98);
		// 20.1.2.13 Number.parseInt(string, radix)
		$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});
	
	/***/ },
	/* 98 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $parseInt = __webpack_require__(2).parseInt
		  , $trim     = __webpack_require__(81).trim
		  , ws        = __webpack_require__(82)
		  , hex       = /^[\-+]?0[xX]/;
	
		module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
		  var string = $trim(String(str), 3);
		  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
		} : $parseInt;
	
	/***/ },
	/* 99 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export   = __webpack_require__(6)
		  , $parseInt = __webpack_require__(98);
		// 18.2.5 parseInt(string, radix)
		$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});
	
	/***/ },
	/* 100 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export     = __webpack_require__(6)
		  , $parseFloat = __webpack_require__(96);
		// 18.2.4 parseFloat(string)
		$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});
	
	/***/ },
	/* 101 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.3 Math.acosh(x)
		var $export = __webpack_require__(6)
		  , log1p   = __webpack_require__(102)
		  , sqrt    = Math.sqrt
		  , $acosh  = Math.acosh;
	
		$export($export.S + $export.F * !($acosh
		  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
		  && Math.floor($acosh(Number.MAX_VALUE)) == 710
		  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
		  && $acosh(Infinity) == Infinity
		), 'Math', {
		  acosh: function acosh(x){
		    return (x = +x) < 1 ? NaN : x > 94906265.62425156
		      ? Math.log(x) + Math.LN2
		      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
		  }
		});
	
	/***/ },
	/* 102 */
	/***/ function(module, exports) {
	
		// 20.2.2.20 Math.log1p(x)
		module.exports = Math.log1p || function log1p(x){
		  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
		};
	
	/***/ },
	/* 103 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.5 Math.asinh(x)
		var $export = __webpack_require__(6)
		  , $asinh  = Math.asinh;
	
		function asinh(x){
		  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
		}
	
		// Tor Browser bug: Math.asinh(0) -> -0 
		$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});
	
	/***/ },
	/* 104 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.7 Math.atanh(x)
		var $export = __webpack_require__(6)
		  , $atanh  = Math.atanh;
	
		// Tor Browser bug: Math.atanh(-0) -> 0 
		$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
		  atanh: function atanh(x){
		    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
		  }
		});
	
	/***/ },
	/* 105 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.9 Math.cbrt(x)
		var $export = __webpack_require__(6)
		  , sign    = __webpack_require__(106);
	
		$export($export.S, 'Math', {
		  cbrt: function cbrt(x){
		    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
		  }
		});
	
	/***/ },
	/* 106 */
	/***/ function(module, exports) {
	
		// 20.2.2.28 Math.sign(x)
		module.exports = Math.sign || function sign(x){
		  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
		};
	
	/***/ },
	/* 107 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.11 Math.clz32(x)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Math', {
		  clz32: function clz32(x){
		    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
		  }
		});
	
	/***/ },
	/* 108 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.12 Math.cosh(x)
		var $export = __webpack_require__(6)
		  , exp     = Math.exp;
	
		$export($export.S, 'Math', {
		  cosh: function cosh(x){
		    return (exp(x = +x) + exp(-x)) / 2;
		  }
		});
	
	/***/ },
	/* 109 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.14 Math.expm1(x)
		var $export = __webpack_require__(6)
		  , $expm1  = __webpack_require__(110);
	
		$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});
	
	/***/ },
	/* 110 */
	/***/ function(module, exports) {
	
		// 20.2.2.14 Math.expm1(x)
		var $expm1 = Math.expm1;
		module.exports = (!$expm1
		  // Old FF bug
		  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
		  // Tor Browser bug
		  || $expm1(-2e-17) != -2e-17
		) ? function expm1(x){
		  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
		} : $expm1;
	
	/***/ },
	/* 111 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.16 Math.fround(x)
		var $export   = __webpack_require__(6)
		  , sign      = __webpack_require__(106)
		  , pow       = Math.pow
		  , EPSILON   = pow(2, -52)
		  , EPSILON32 = pow(2, -23)
		  , MAX32     = pow(2, 127) * (2 - EPSILON32)
		  , MIN32     = pow(2, -126);
	
		var roundTiesToEven = function(n){
		  return n + 1 / EPSILON - 1 / EPSILON;
		};
	
	
		$export($export.S, 'Math', {
		  fround: function fround(x){
		    var $abs  = Math.abs(x)
		      , $sign = sign(x)
		      , a, result;
		    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
		    a = (1 + EPSILON32 / EPSILON) * $abs;
		    result = a - (a - $abs);
		    if(result > MAX32 || result != result)return $sign * Infinity;
		    return $sign * result;
		  }
		});
	
	/***/ },
	/* 112 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
		var $export = __webpack_require__(6)
		  , abs     = Math.abs;
	
		$export($export.S, 'Math', {
		  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
		    var sum  = 0
		      , i    = 0
		      , aLen = arguments.length
		      , larg = 0
		      , arg, div;
		    while(i < aLen){
		      arg = abs(arguments[i++]);
		      if(larg < arg){
		        div  = larg / arg;
		        sum  = sum * div * div + 1;
		        larg = arg;
		      } else if(arg > 0){
		        div  = arg / larg;
		        sum += div * div;
		      } else sum += arg;
		    }
		    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
		  }
		});
	
	/***/ },
	/* 113 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.18 Math.imul(x, y)
		var $export = __webpack_require__(6)
		  , $imul   = Math.imul;
	
		// some WebKit versions fails with big numbers, some has wrong arity
		$export($export.S + $export.F * __webpack_require__(5)(function(){
		  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
		}), 'Math', {
		  imul: function imul(x, y){
		    var UINT16 = 0xffff
		      , xn = +x
		      , yn = +y
		      , xl = UINT16 & xn
		      , yl = UINT16 & yn;
		    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
		  }
		});
	
	/***/ },
	/* 114 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.21 Math.log10(x)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Math', {
		  log10: function log10(x){
		    return Math.log(x) / Math.LN10;
		  }
		});
	
	/***/ },
	/* 115 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.20 Math.log1p(x)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Math', {log1p: __webpack_require__(102)});
	
	/***/ },
	/* 116 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.22 Math.log2(x)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Math', {
		  log2: function log2(x){
		    return Math.log(x) / Math.LN2;
		  }
		});
	
	/***/ },
	/* 117 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.28 Math.sign(x)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Math', {sign: __webpack_require__(106)});
	
	/***/ },
	/* 118 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.30 Math.sinh(x)
		var $export = __webpack_require__(6)
		  , expm1   = __webpack_require__(110)
		  , exp     = Math.exp;
	
		// V8 near Chromium 38 has a problem with very small numbers
		$export($export.S + $export.F * __webpack_require__(5)(function(){
		  return !Math.sinh(-2e-17) != -2e-17;
		}), 'Math', {
		  sinh: function sinh(x){
		    return Math.abs(x = +x) < 1
		      ? (expm1(x) - expm1(-x)) / 2
		      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
		  }
		});
	
	/***/ },
	/* 119 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.33 Math.tanh(x)
		var $export = __webpack_require__(6)
		  , expm1   = __webpack_require__(110)
		  , exp     = Math.exp;
	
		$export($export.S, 'Math', {
		  tanh: function tanh(x){
		    var a = expm1(x = +x)
		      , b = expm1(-x);
		    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
		  }
		});
	
	/***/ },
	/* 120 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.2.2.34 Math.trunc(x)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Math', {
		  trunc: function trunc(it){
		    return (it > 0 ? Math.floor : Math.ceil)(it);
		  }
		});
	
	/***/ },
	/* 121 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export        = __webpack_require__(6)
		  , toIndex        = __webpack_require__(37)
		  , fromCharCode   = String.fromCharCode
		  , $fromCodePoint = String.fromCodePoint;
	
		// length should be 1, old FF problem
		$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
		  // 21.1.2.2 String.fromCodePoint(...codePoints)
		  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
		    var res  = []
		      , aLen = arguments.length
		      , i    = 0
		      , code;
		    while(aLen > i){
		      code = +arguments[i++];
		      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
		      res.push(code < 0x10000
		        ? fromCharCode(code)
		        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
		      );
		    } return res.join('');
		  }
		});
	
	/***/ },
	/* 122 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export   = __webpack_require__(6)
		  , toIObject = __webpack_require__(30)
		  , toLength  = __webpack_require__(35);
	
		$export($export.S, 'String', {
		  // 21.1.2.4 String.raw(callSite, ...substitutions)
		  raw: function raw(callSite){
		    var tpl  = toIObject(callSite.raw)
		      , len  = toLength(tpl.length)
		      , aLen = arguments.length
		      , res  = []
		      , i    = 0;
		    while(len > i){
		      res.push(String(tpl[i++]));
		      if(i < aLen)res.push(String(arguments[i]));
		    } return res.join('');
		  }
		});
	
	/***/ },
	/* 123 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// 21.1.3.25 String.prototype.trim()
		__webpack_require__(81)('trim', function($trim){
		  return function trim(){
		    return $trim(this, 3);
		  };
		});
	
	/***/ },
	/* 124 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export = __webpack_require__(6)
		  , $at     = __webpack_require__(125)(false);
		$export($export.P, 'String', {
		  // 21.1.3.3 String.prototype.codePointAt(pos)
		  codePointAt: function codePointAt(pos){
		    return $at(this, pos);
		  }
		});
	
	/***/ },
	/* 125 */
	/***/ function(module, exports, __webpack_require__) {
	
		var toInteger = __webpack_require__(36)
		  , defined   = __webpack_require__(33);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING){
		  return function(that, pos){
		    var s = String(defined(that))
		      , i = toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? TO_STRING ? s.charAt(i) : a
		      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};
	
	/***/ },
	/* 126 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
		'use strict';
		var $export   = __webpack_require__(6)
		  , toLength  = __webpack_require__(35)
		  , context   = __webpack_require__(127)
		  , ENDS_WITH = 'endsWith'
		  , $endsWith = ''[ENDS_WITH];
	
		$export($export.P + $export.F * __webpack_require__(129)(ENDS_WITH), 'String', {
		  endsWith: function endsWith(searchString /*, endPosition = @length */){
		    var that = context(this, searchString, ENDS_WITH)
		      , endPosition = arguments.length > 1 ? arguments[1] : undefined
		      , len    = toLength(that.length)
		      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
		      , search = String(searchString);
		    return $endsWith
		      ? $endsWith.call(that, search, end)
		      : that.slice(end - search.length, end) === search;
		  }
		});
	
	/***/ },
	/* 127 */
	/***/ function(module, exports, __webpack_require__) {
	
		// helper for String#{startsWith, endsWith, includes}
		var isRegExp = __webpack_require__(128)
		  , defined  = __webpack_require__(33);
	
		module.exports = function(that, searchString, NAME){
		  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
		  return String(defined(that));
		};
	
	/***/ },
	/* 128 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.2.8 IsRegExp(argument)
		var isObject = __webpack_require__(11)
		  , cof      = __webpack_require__(32)
		  , MATCH    = __webpack_require__(23)('match');
		module.exports = function(it){
		  var isRegExp;
		  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
		};
	
	/***/ },
	/* 129 */
	/***/ function(module, exports, __webpack_require__) {
	
		var MATCH = __webpack_require__(23)('match');
		module.exports = function(KEY){
		  var re = /./;
		  try {
		    '/./'[KEY](re);
		  } catch(e){
		    try {
		      re[MATCH] = false;
		      return !'/./'[KEY](re);
		    } catch(f){ /* empty */ }
		  } return true;
		};
	
	/***/ },
	/* 130 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 21.1.3.7 String.prototype.includes(searchString, position = 0)
		'use strict';
		var $export  = __webpack_require__(6)
		  , context  = __webpack_require__(127)
		  , INCLUDES = 'includes';
	
		$export($export.P + $export.F * __webpack_require__(129)(INCLUDES), 'String', {
		  includes: function includes(searchString /*, position = 0 */){
		    return !!~context(this, searchString, INCLUDES)
		      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
		  }
		});
	
	/***/ },
	/* 131 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(6);
	
		$export($export.P, 'String', {
		  // 21.1.3.13 String.prototype.repeat(count)
		  repeat: __webpack_require__(85)
		});
	
	/***/ },
	/* 132 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
		'use strict';
		var $export     = __webpack_require__(6)
		  , toLength    = __webpack_require__(35)
		  , context     = __webpack_require__(127)
		  , STARTS_WITH = 'startsWith'
		  , $startsWith = ''[STARTS_WITH];
	
		$export($export.P + $export.F * __webpack_require__(129)(STARTS_WITH), 'String', {
		  startsWith: function startsWith(searchString /*, position = 0 */){
		    var that   = context(this, searchString, STARTS_WITH)
		      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
		      , search = String(searchString);
		    return $startsWith
		      ? $startsWith.call(that, search, index)
		      : that.slice(index, index + search.length) === search;
		  }
		});
	
	/***/ },
	/* 133 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $at  = __webpack_require__(125)(true);
	
		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(134)(String, 'String', function(iterated){
		  this._t = String(iterated); // target
		  this._i = 0;                // next index
		// 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , index = this._i
		    , point;
		  if(index >= O.length)return {value: undefined, done: true};
		  point = $at(O, index);
		  this._i += point.length;
		  return {value: point, done: false};
		});
	
	/***/ },
	/* 134 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var LIBRARY        = __webpack_require__(26)
		  , $export        = __webpack_require__(6)
		  , redefine       = __webpack_require__(16)
		  , hide           = __webpack_require__(8)
		  , has            = __webpack_require__(3)
		  , Iterators      = __webpack_require__(135)
		  , $iterCreate    = __webpack_require__(136)
		  , setToStringTag = __webpack_require__(22)
		  , getPrototypeOf = __webpack_require__(57)
		  , ITERATOR       = __webpack_require__(23)('iterator')
		  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
		  , FF_ITERATOR    = '@@iterator'
		  , KEYS           = 'keys'
		  , VALUES         = 'values';
	
		var returnThis = function(){ return this; };
	
		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function(kind){
		    if(!BUGGY && kind in proto)return proto[kind];
		    switch(kind){
		      case KEYS: return function keys(){ return new Constructor(this, kind); };
		      case VALUES: return function values(){ return new Constructor(this, kind); };
		    } return function entries(){ return new Constructor(this, kind); };
		  };
		  var TAG        = NAME + ' Iterator'
		    , DEF_VALUES = DEFAULT == VALUES
		    , VALUES_BUG = false
		    , proto      = Base.prototype
		    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
		    , $default   = $native || getMethod(DEFAULT)
		    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
		    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
		    , methods, key, IteratorPrototype;
		  // Fix native
		  if($anyNative){
		    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
		    if(IteratorPrototype !== Object.prototype){
		      // Set @@toStringTag to native iterators
		      setToStringTag(IteratorPrototype, TAG, true);
		      // fix for some old engines
		      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
		    }
		  }
		  // fix Array#{values, @@iterator}.name in V8 / FF
		  if(DEF_VALUES && $native && $native.name !== VALUES){
		    VALUES_BUG = true;
		    $default = function values(){ return $native.call(this); };
		  }
		  // Define iterator
		  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG]  = returnThis;
		  if(DEFAULT){
		    methods = {
		      values:  DEF_VALUES ? $default : getMethod(VALUES),
		      keys:    IS_SET     ? $default : getMethod(KEYS),
		      entries: $entries
		    };
		    if(FORCED)for(key in methods){
		      if(!(key in proto))redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};
	
	/***/ },
	/* 135 */
	/***/ function(module, exports) {
	
		module.exports = {};
	
	/***/ },
	/* 136 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var create         = __webpack_require__(44)
		  , descriptor     = __webpack_require__(15)
		  , setToStringTag = __webpack_require__(22)
		  , IteratorPrototype = {};
	
		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(8)(IteratorPrototype, __webpack_require__(23)('iterator'), function(){ return this; });
	
		module.exports = function(Constructor, NAME, next){
		  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
		  setToStringTag(Constructor, NAME + ' Iterator');
		};
	
	/***/ },
	/* 137 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.2 String.prototype.anchor(name)
		__webpack_require__(138)('anchor', function(createHTML){
		  return function anchor(name){
		    return createHTML(this, 'a', 'name', name);
		  }
		});
	
	/***/ },
	/* 138 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(6)
		  , fails   = __webpack_require__(5)
		  , defined = __webpack_require__(33)
		  , quot    = /"/g;
		// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
		var createHTML = function(string, tag, attribute, value) {
		  var S  = String(defined(string))
		    , p1 = '<' + tag;
		  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
		  return p1 + '>' + S + '</' + tag + '>';
		};
		module.exports = function(NAME, exec){
		  var O = {};
		  O[NAME] = exec(createHTML);
		  $export($export.P + $export.F * fails(function(){
		    var test = ''[NAME]('"');
		    return test !== test.toLowerCase() || test.split('"').length > 3;
		  }), 'String', O);
		};
	
	/***/ },
	/* 139 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.3 String.prototype.big()
		__webpack_require__(138)('big', function(createHTML){
		  return function big(){
		    return createHTML(this, 'big', '', '');
		  }
		});
	
	/***/ },
	/* 140 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.4 String.prototype.blink()
		__webpack_require__(138)('blink', function(createHTML){
		  return function blink(){
		    return createHTML(this, 'blink', '', '');
		  }
		});
	
	/***/ },
	/* 141 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.5 String.prototype.bold()
		__webpack_require__(138)('bold', function(createHTML){
		  return function bold(){
		    return createHTML(this, 'b', '', '');
		  }
		});
	
	/***/ },
	/* 142 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.6 String.prototype.fixed()
		__webpack_require__(138)('fixed', function(createHTML){
		  return function fixed(){
		    return createHTML(this, 'tt', '', '');
		  }
		});
	
	/***/ },
	/* 143 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.7 String.prototype.fontcolor(color)
		__webpack_require__(138)('fontcolor', function(createHTML){
		  return function fontcolor(color){
		    return createHTML(this, 'font', 'color', color);
		  }
		});
	
	/***/ },
	/* 144 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.8 String.prototype.fontsize(size)
		__webpack_require__(138)('fontsize', function(createHTML){
		  return function fontsize(size){
		    return createHTML(this, 'font', 'size', size);
		  }
		});
	
	/***/ },
	/* 145 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.9 String.prototype.italics()
		__webpack_require__(138)('italics', function(createHTML){
		  return function italics(){
		    return createHTML(this, 'i', '', '');
		  }
		});
	
	/***/ },
	/* 146 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.10 String.prototype.link(url)
		__webpack_require__(138)('link', function(createHTML){
		  return function link(url){
		    return createHTML(this, 'a', 'href', url);
		  }
		});
	
	/***/ },
	/* 147 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.11 String.prototype.small()
		__webpack_require__(138)('small', function(createHTML){
		  return function small(){
		    return createHTML(this, 'small', '', '');
		  }
		});
	
	/***/ },
	/* 148 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.12 String.prototype.strike()
		__webpack_require__(138)('strike', function(createHTML){
		  return function strike(){
		    return createHTML(this, 'strike', '', '');
		  }
		});
	
	/***/ },
	/* 149 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.13 String.prototype.sub()
		__webpack_require__(138)('sub', function(createHTML){
		  return function sub(){
		    return createHTML(this, 'sub', '', '');
		  }
		});
	
	/***/ },
	/* 150 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// B.2.3.14 String.prototype.sup()
		__webpack_require__(138)('sup', function(createHTML){
		  return function sup(){
		    return createHTML(this, 'sup', '', '');
		  }
		});
	
	/***/ },
	/* 151 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Array', {isArray: __webpack_require__(43)});
	
	/***/ },
	/* 152 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var ctx            = __webpack_require__(18)
		  , $export        = __webpack_require__(6)
		  , toObject       = __webpack_require__(56)
		  , call           = __webpack_require__(153)
		  , isArrayIter    = __webpack_require__(154)
		  , toLength       = __webpack_require__(35)
		  , createProperty = __webpack_require__(155)
		  , getIterFn      = __webpack_require__(156);
	
		$export($export.S + $export.F * !__webpack_require__(157)(function(iter){ Array.from(iter); }), 'Array', {
		  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
		  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
		    var O       = toObject(arrayLike)
		      , C       = typeof this == 'function' ? this : Array
		      , aLen    = arguments.length
		      , mapfn   = aLen > 1 ? arguments[1] : undefined
		      , mapping = mapfn !== undefined
		      , index   = 0
		      , iterFn  = getIterFn(O)
		      , length, result, step, iterator;
		    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
		    // if object isn't iterable or it's array with default iterator - use simple case
		    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
		      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
		        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
		      }
		    } else {
		      length = toLength(O.length);
		      for(result = new C(length); length > index; index++){
		        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
		      }
		    }
		    result.length = index;
		    return result;
		  }
		});
	
	
	/***/ },
	/* 153 */
	/***/ function(module, exports, __webpack_require__) {
	
		// call something on iterator step with safe closing on error
		var anObject = __webpack_require__(10);
		module.exports = function(iterator, fn, value, entries){
		  try {
		    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
		  // 7.4.6 IteratorClose(iterator, completion)
		  } catch(e){
		    var ret = iterator['return'];
		    if(ret !== undefined)anObject(ret.call(iterator));
		    throw e;
		  }
		};
	
	/***/ },
	/* 154 */
	/***/ function(module, exports, __webpack_require__) {
	
		// check on default Array iterator
		var Iterators  = __webpack_require__(135)
		  , ITERATOR   = __webpack_require__(23)('iterator')
		  , ArrayProto = Array.prototype;
	
		module.exports = function(it){
		  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
		};
	
	/***/ },
	/* 155 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $defineProperty = __webpack_require__(9)
		  , createDesc      = __webpack_require__(15);
	
		module.exports = function(object, index, value){
		  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
		  else object[index] = value;
		};
	
	/***/ },
	/* 156 */
	/***/ function(module, exports, __webpack_require__) {
	
		var classof   = __webpack_require__(73)
		  , ITERATOR  = __webpack_require__(23)('iterator')
		  , Iterators = __webpack_require__(135);
		module.exports = __webpack_require__(7).getIteratorMethod = function(it){
		  if(it != undefined)return it[ITERATOR]
		    || it['@@iterator']
		    || Iterators[classof(it)];
		};
	
	/***/ },
	/* 157 */
	/***/ function(module, exports, __webpack_require__) {
	
		var ITERATOR     = __webpack_require__(23)('iterator')
		  , SAFE_CLOSING = false;
	
		try {
		  var riter = [7][ITERATOR]();
		  riter['return'] = function(){ SAFE_CLOSING = true; };
		  Array.from(riter, function(){ throw 2; });
		} catch(e){ /* empty */ }
	
		module.exports = function(exec, skipClosing){
		  if(!skipClosing && !SAFE_CLOSING)return false;
		  var safe = false;
		  try {
		    var arr  = [7]
		      , iter = arr[ITERATOR]();
		    iter.next = function(){ return {done: safe = true}; };
		    arr[ITERATOR] = function(){ return iter; };
		    exec(arr);
		  } catch(e){ /* empty */ }
		  return safe;
		};
	
	/***/ },
	/* 158 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export        = __webpack_require__(6)
		  , createProperty = __webpack_require__(155);
	
		// WebKit Array.of isn't generic
		$export($export.S + $export.F * __webpack_require__(5)(function(){
		  function F(){}
		  return !(Array.of.call(F) instanceof F);
		}), 'Array', {
		  // 22.1.2.3 Array.of( ...items)
		  of: function of(/* ...args */){
		    var index  = 0
		      , aLen   = arguments.length
		      , result = new (typeof this == 'function' ? this : Array)(aLen);
		    while(aLen > index)createProperty(result, index, arguments[index++]);
		    result.length = aLen;
		    return result;
		  }
		});
	
	/***/ },
	/* 159 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// 22.1.3.13 Array.prototype.join(separator)
		var $export   = __webpack_require__(6)
		  , toIObject = __webpack_require__(30)
		  , arrayJoin = [].join;
	
		// fallback for not array-like strings
		$export($export.P + $export.F * (__webpack_require__(31) != Object || !__webpack_require__(160)(arrayJoin)), 'Array', {
		  join: function join(separator){
		    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
		  }
		});
	
	/***/ },
	/* 160 */
	/***/ function(module, exports, __webpack_require__) {
	
		var fails = __webpack_require__(5);
	
		module.exports = function(method, arg){
		  return !!method && fails(function(){
		    arg ? method.call(null, function(){}, 1) : method.call(null);
		  });
		};
	
	/***/ },
	/* 161 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export    = __webpack_require__(6)
		  , html       = __webpack_require__(46)
		  , cof        = __webpack_require__(32)
		  , toIndex    = __webpack_require__(37)
		  , toLength   = __webpack_require__(35)
		  , arraySlice = [].slice;
	
		// fallback for not array-like ES3 strings and DOM objects
		$export($export.P + $export.F * __webpack_require__(5)(function(){
		  if(html)arraySlice.call(html);
		}), 'Array', {
		  slice: function slice(begin, end){
		    var len   = toLength(this.length)
		      , klass = cof(this);
		    end = end === undefined ? len : end;
		    if(klass == 'Array')return arraySlice.call(this, begin, end);
		    var start  = toIndex(begin, len)
		      , upTo   = toIndex(end, len)
		      , size   = toLength(upTo - start)
		      , cloned = Array(size)
		      , i      = 0;
		    for(; i < size; i++)cloned[i] = klass == 'String'
		      ? this.charAt(start + i)
		      : this[start + i];
		    return cloned;
		  }
		});
	
	/***/ },
	/* 162 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export   = __webpack_require__(6)
		  , aFunction = __webpack_require__(19)
		  , toObject  = __webpack_require__(56)
		  , fails     = __webpack_require__(5)
		  , $sort     = [].sort
		  , test      = [1, 2, 3];
	
		$export($export.P + $export.F * (fails(function(){
		  // IE8-
		  test.sort(undefined);
		}) || !fails(function(){
		  // V8 bug
		  test.sort(null);
		  // Old WebKit
		}) || !__webpack_require__(160)($sort)), 'Array', {
		  // 22.1.3.25 Array.prototype.sort(comparefn)
		  sort: function sort(comparefn){
		    return comparefn === undefined
		      ? $sort.call(toObject(this))
		      : $sort.call(toObject(this), aFunction(comparefn));
		  }
		});
	
	/***/ },
	/* 163 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export  = __webpack_require__(6)
		  , $forEach = __webpack_require__(164)(0)
		  , STRICT   = __webpack_require__(160)([].forEach, true);
	
		$export($export.P + $export.F * !STRICT, 'Array', {
		  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
		  forEach: function forEach(callbackfn /* , thisArg */){
		    return $forEach(this, callbackfn, arguments[1]);
		  }
		});
	
	/***/ },
	/* 164 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 0 -> Array#forEach
		// 1 -> Array#map
		// 2 -> Array#filter
		// 3 -> Array#some
		// 4 -> Array#every
		// 5 -> Array#find
		// 6 -> Array#findIndex
		var ctx      = __webpack_require__(18)
		  , IObject  = __webpack_require__(31)
		  , toObject = __webpack_require__(56)
		  , toLength = __webpack_require__(35)
		  , asc      = __webpack_require__(165);
		module.exports = function(TYPE, $create){
		  var IS_MAP        = TYPE == 1
		    , IS_FILTER     = TYPE == 2
		    , IS_SOME       = TYPE == 3
		    , IS_EVERY      = TYPE == 4
		    , IS_FIND_INDEX = TYPE == 6
		    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
		    , create        = $create || asc;
		  return function($this, callbackfn, that){
		    var O      = toObject($this)
		      , self   = IObject(O)
		      , f      = ctx(callbackfn, that, 3)
		      , length = toLength(self.length)
		      , index  = 0
		      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
		      , val, res;
		    for(;length > index; index++)if(NO_HOLES || index in self){
		      val = self[index];
		      res = f(val, index, O);
		      if(TYPE){
		        if(IS_MAP)result[index] = res;            // map
		        else if(res)switch(TYPE){
		          case 3: return true;                    // some
		          case 5: return val;                     // find
		          case 6: return index;                   // findIndex
		          case 2: result.push(val);               // filter
		        } else if(IS_EVERY)return false;          // every
		      }
		    }
		    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
		  };
		};
	
	/***/ },
	/* 165 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
		var speciesConstructor = __webpack_require__(166);
	
		module.exports = function(original, length){
		  return new (speciesConstructor(original))(length);
		};
	
	/***/ },
	/* 166 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(11)
		  , isArray  = __webpack_require__(43)
		  , SPECIES  = __webpack_require__(23)('species');
	
		module.exports = function(original){
		  var C;
		  if(isArray(original)){
		    C = original.constructor;
		    // cross-realm fallback
		    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
		    if(isObject(C)){
		      C = C[SPECIES];
		      if(C === null)C = undefined;
		    }
		  } return C === undefined ? Array : C;
		};
	
	/***/ },
	/* 167 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export = __webpack_require__(6)
		  , $map    = __webpack_require__(164)(1);
	
		$export($export.P + $export.F * !__webpack_require__(160)([].map, true), 'Array', {
		  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
		  map: function map(callbackfn /* , thisArg */){
		    return $map(this, callbackfn, arguments[1]);
		  }
		});
	
	/***/ },
	/* 168 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export = __webpack_require__(6)
		  , $filter = __webpack_require__(164)(2);
	
		$export($export.P + $export.F * !__webpack_require__(160)([].filter, true), 'Array', {
		  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
		  filter: function filter(callbackfn /* , thisArg */){
		    return $filter(this, callbackfn, arguments[1]);
		  }
		});
	
	/***/ },
	/* 169 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export = __webpack_require__(6)
		  , $some   = __webpack_require__(164)(3);
	
		$export($export.P + $export.F * !__webpack_require__(160)([].some, true), 'Array', {
		  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
		  some: function some(callbackfn /* , thisArg */){
		    return $some(this, callbackfn, arguments[1]);
		  }
		});
	
	/***/ },
	/* 170 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export = __webpack_require__(6)
		  , $every  = __webpack_require__(164)(4);
	
		$export($export.P + $export.F * !__webpack_require__(160)([].every, true), 'Array', {
		  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
		  every: function every(callbackfn /* , thisArg */){
		    return $every(this, callbackfn, arguments[1]);
		  }
		});
	
	/***/ },
	/* 171 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export = __webpack_require__(6)
		  , $reduce = __webpack_require__(172);
	
		$export($export.P + $export.F * !__webpack_require__(160)([].reduce, true), 'Array', {
		  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
		  reduce: function reduce(callbackfn /* , initialValue */){
		    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
		  }
		});
	
	/***/ },
	/* 172 */
	/***/ function(module, exports, __webpack_require__) {
	
		var aFunction = __webpack_require__(19)
		  , toObject  = __webpack_require__(56)
		  , IObject   = __webpack_require__(31)
		  , toLength  = __webpack_require__(35);
	
		module.exports = function(that, callbackfn, aLen, memo, isRight){
		  aFunction(callbackfn);
		  var O      = toObject(that)
		    , self   = IObject(O)
		    , length = toLength(O.length)
		    , index  = isRight ? length - 1 : 0
		    , i      = isRight ? -1 : 1;
		  if(aLen < 2)for(;;){
		    if(index in self){
		      memo = self[index];
		      index += i;
		      break;
		    }
		    index += i;
		    if(isRight ? index < 0 : length <= index){
		      throw TypeError('Reduce of empty array with no initial value');
		    }
		  }
		  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
		    memo = callbackfn(memo, self[index], index, O);
		  }
		  return memo;
		};
	
	/***/ },
	/* 173 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export = __webpack_require__(6)
		  , $reduce = __webpack_require__(172);
	
		$export($export.P + $export.F * !__webpack_require__(160)([].reduceRight, true), 'Array', {
		  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
		  reduceRight: function reduceRight(callbackfn /* , initialValue */){
		    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
		  }
		});
	
	/***/ },
	/* 174 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export       = __webpack_require__(6)
		  , $indexOf      = __webpack_require__(34)(false)
		  , $native       = [].indexOf
		  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
		$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(160)($native)), 'Array', {
		  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
		  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
		    return NEGATIVE_ZERO
		      // convert -0 to +0
		      ? $native.apply(this, arguments) || 0
		      : $indexOf(this, searchElement, arguments[1]);
		  }
		});
	
	/***/ },
	/* 175 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export       = __webpack_require__(6)
		  , toIObject     = __webpack_require__(30)
		  , toInteger     = __webpack_require__(36)
		  , toLength      = __webpack_require__(35)
		  , $native       = [].lastIndexOf
		  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
		$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(160)($native)), 'Array', {
		  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
		  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
		    // convert -0 to +0
		    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
		    var O      = toIObject(this)
		      , length = toLength(O.length)
		      , index  = length - 1;
		    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
		    if(index < 0)index = length + index;
		    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
		    return -1;
		  }
		});
	
	/***/ },
	/* 176 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
		var $export = __webpack_require__(6);
	
		$export($export.P, 'Array', {copyWithin: __webpack_require__(177)});
	
		__webpack_require__(178)('copyWithin');
	
	/***/ },
	/* 177 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
		'use strict';
		var toObject = __webpack_require__(56)
		  , toIndex  = __webpack_require__(37)
		  , toLength = __webpack_require__(35);
	
		module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
		  var O     = toObject(this)
		    , len   = toLength(O.length)
		    , to    = toIndex(target, len)
		    , from  = toIndex(start, len)
		    , end   = arguments.length > 2 ? arguments[2] : undefined
		    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
		    , inc   = 1;
		  if(from < to && to < from + count){
		    inc  = -1;
		    from += count - 1;
		    to   += count - 1;
		  }
		  while(count-- > 0){
		    if(from in O)O[to] = O[from];
		    else delete O[to];
		    to   += inc;
		    from += inc;
		  } return O;
		};
	
	/***/ },
	/* 178 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 22.1.3.31 Array.prototype[@@unscopables]
		var UNSCOPABLES = __webpack_require__(23)('unscopables')
		  , ArrayProto  = Array.prototype;
		if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
		module.exports = function(key){
		  ArrayProto[UNSCOPABLES][key] = true;
		};
	
	/***/ },
	/* 179 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
		var $export = __webpack_require__(6);
	
		$export($export.P, 'Array', {fill: __webpack_require__(180)});
	
		__webpack_require__(178)('fill');
	
	/***/ },
	/* 180 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
		'use strict';
		var toObject = __webpack_require__(56)
		  , toIndex  = __webpack_require__(37)
		  , toLength = __webpack_require__(35);
		module.exports = function fill(value /*, start = 0, end = @length */){
		  var O      = toObject(this)
		    , length = toLength(O.length)
		    , aLen   = arguments.length
		    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
		    , end    = aLen > 2 ? arguments[2] : undefined
		    , endPos = end === undefined ? length : toIndex(end, length);
		  while(endPos > index)O[index++] = value;
		  return O;
		};
	
	/***/ },
	/* 181 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
		var $export = __webpack_require__(6)
		  , $find   = __webpack_require__(164)(5)
		  , KEY     = 'find'
		  , forced  = true;
		// Shouldn't skip holes
		if(KEY in [])Array(1)[KEY](function(){ forced = false; });
		$export($export.P + $export.F * forced, 'Array', {
		  find: function find(callbackfn/*, that = undefined */){
		    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
		  }
		});
		__webpack_require__(178)(KEY);
	
	/***/ },
	/* 182 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
		var $export = __webpack_require__(6)
		  , $find   = __webpack_require__(164)(6)
		  , KEY     = 'findIndex'
		  , forced  = true;
		// Shouldn't skip holes
		if(KEY in [])Array(1)[KEY](function(){ forced = false; });
		$export($export.P + $export.F * forced, 'Array', {
		  findIndex: function findIndex(callbackfn/*, that = undefined */){
		    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
		  }
		});
		__webpack_require__(178)(KEY);
	
	/***/ },
	/* 183 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var addToUnscopables = __webpack_require__(178)
		  , step             = __webpack_require__(184)
		  , Iterators        = __webpack_require__(135)
		  , toIObject        = __webpack_require__(30);
	
		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__(134)(Array, 'Array', function(iterated, kind){
		  this._t = toIObject(iterated); // target
		  this._i = 0;                   // next index
		  this._k = kind;                // kind
		// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , kind  = this._k
		    , index = this._i++;
		  if(!O || index >= O.length){
		    this._t = undefined;
		    return step(1);
		  }
		  if(kind == 'keys'  )return step(0, index);
		  if(kind == 'values')return step(0, O[index]);
		  return step(0, [index, O[index]]);
		}, 'values');
	
		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;
	
		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');
	
	/***/ },
	/* 184 */
	/***/ function(module, exports) {
	
		module.exports = function(done, value){
		  return {value: value, done: !!done};
		};
	
	/***/ },
	/* 185 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(186)('Array');
	
	/***/ },
	/* 186 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var global      = __webpack_require__(2)
		  , dP          = __webpack_require__(9)
		  , DESCRIPTORS = __webpack_require__(4)
		  , SPECIES     = __webpack_require__(23)('species');
	
		module.exports = function(KEY){
		  var C = global[KEY];
		  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
		    configurable: true,
		    get: function(){ return this; }
		  });
		};
	
	/***/ },
	/* 187 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global            = __webpack_require__(2)
		  , inheritIfRequired = __webpack_require__(80)
		  , dP                = __webpack_require__(9).f
		  , gOPN              = __webpack_require__(48).f
		  , isRegExp          = __webpack_require__(128)
		  , $flags            = __webpack_require__(188)
		  , $RegExp           = global.RegExp
		  , Base              = $RegExp
		  , proto             = $RegExp.prototype
		  , re1               = /a/g
		  , re2               = /a/g
		  // "new" creates a new object, old webkit buggy here
		  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
		if(__webpack_require__(4) && (!CORRECT_NEW || __webpack_require__(5)(function(){
		  re2[__webpack_require__(23)('match')] = false;
		  // RegExp constructor can alter flags and IsRegExp works correct with @@match
		  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
		}))){
		  $RegExp = function RegExp(p, f){
		    var tiRE = this instanceof $RegExp
		      , piRE = isRegExp(p)
		      , fiU  = f === undefined;
		    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
		      : inheritIfRequired(CORRECT_NEW
		        ? new Base(piRE && !fiU ? p.source : p, f)
		        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
		      , tiRE ? this : proto, $RegExp);
		  };
		  var proxy = function(key){
		    key in $RegExp || dP($RegExp, key, {
		      configurable: true,
		      get: function(){ return Base[key]; },
		      set: function(it){ Base[key] = it; }
		    });
		  };
		  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
		  proto.constructor = $RegExp;
		  $RegExp.prototype = proto;
		  __webpack_require__(16)(global, 'RegExp', $RegExp);
		}
	
		__webpack_require__(186)('RegExp');
	
	/***/ },
	/* 188 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// 21.2.5.3 get RegExp.prototype.flags
		var anObject = __webpack_require__(10);
		module.exports = function(){
		  var that   = anObject(this)
		    , result = '';
		  if(that.global)     result += 'g';
		  if(that.ignoreCase) result += 'i';
		  if(that.multiline)  result += 'm';
		  if(that.unicode)    result += 'u';
		  if(that.sticky)     result += 'y';
		  return result;
		};
	
	/***/ },
	/* 189 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		__webpack_require__(190);
		var anObject    = __webpack_require__(10)
		  , $flags      = __webpack_require__(188)
		  , DESCRIPTORS = __webpack_require__(4)
		  , TO_STRING   = 'toString'
		  , $toString   = /./[TO_STRING];
	
		var define = function(fn){
		  __webpack_require__(16)(RegExp.prototype, TO_STRING, fn, true);
		};
	
		// 21.2.5.14 RegExp.prototype.toString()
		if(__webpack_require__(5)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
		  define(function toString(){
		    var R = anObject(this);
		    return '/'.concat(R.source, '/',
		      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
		  });
		// FF44- RegExp#toString has a wrong name
		} else if($toString.name != TO_STRING){
		  define(function toString(){
		    return $toString.call(this);
		  });
		}
	
	/***/ },
	/* 190 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 21.2.5.3 get RegExp.prototype.flags()
		if(__webpack_require__(4) && /./g.flags != 'g')__webpack_require__(9).f(RegExp.prototype, 'flags', {
		  configurable: true,
		  get: __webpack_require__(188)
		});
	
	/***/ },
	/* 191 */
	/***/ function(module, exports, __webpack_require__) {
	
		// @@match logic
		__webpack_require__(192)('match', 1, function(defined, MATCH, $match){
		  // 21.1.3.11 String.prototype.match(regexp)
		  return [function match(regexp){
		    'use strict';
		    var O  = defined(this)
		      , fn = regexp == undefined ? undefined : regexp[MATCH];
		    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
		  }, $match];
		});
	
	/***/ },
	/* 192 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var hide     = __webpack_require__(8)
		  , redefine = __webpack_require__(16)
		  , fails    = __webpack_require__(5)
		  , defined  = __webpack_require__(33)
		  , wks      = __webpack_require__(23);
	
		module.exports = function(KEY, length, exec){
		  var SYMBOL   = wks(KEY)
		    , fns      = exec(defined, SYMBOL, ''[KEY])
		    , strfn    = fns[0]
		    , rxfn     = fns[1];
		  if(fails(function(){
		    var O = {};
		    O[SYMBOL] = function(){ return 7; };
		    return ''[KEY](O) != 7;
		  })){
		    redefine(String.prototype, KEY, strfn);
		    hide(RegExp.prototype, SYMBOL, length == 2
		      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
		      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
		      ? function(string, arg){ return rxfn.call(string, this, arg); }
		      // 21.2.5.6 RegExp.prototype[@@match](string)
		      // 21.2.5.9 RegExp.prototype[@@search](string)
		      : function(string){ return rxfn.call(string, this); }
		    );
		  }
		};
	
	/***/ },
	/* 193 */
	/***/ function(module, exports, __webpack_require__) {
	
		// @@replace logic
		__webpack_require__(192)('replace', 2, function(defined, REPLACE, $replace){
		  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
		  return [function replace(searchValue, replaceValue){
		    'use strict';
		    var O  = defined(this)
		      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
		    return fn !== undefined
		      ? fn.call(searchValue, O, replaceValue)
		      : $replace.call(String(O), searchValue, replaceValue);
		  }, $replace];
		});
	
	/***/ },
	/* 194 */
	/***/ function(module, exports, __webpack_require__) {
	
		// @@search logic
		__webpack_require__(192)('search', 1, function(defined, SEARCH, $search){
		  // 21.1.3.15 String.prototype.search(regexp)
		  return [function search(regexp){
		    'use strict';
		    var O  = defined(this)
		      , fn = regexp == undefined ? undefined : regexp[SEARCH];
		    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
		  }, $search];
		});
	
	/***/ },
	/* 195 */
	/***/ function(module, exports, __webpack_require__) {
	
		// @@split logic
		__webpack_require__(192)('split', 2, function(defined, SPLIT, $split){
		  'use strict';
		  var isRegExp   = __webpack_require__(128)
		    , _split     = $split
		    , $push      = [].push
		    , $SPLIT     = 'split'
		    , LENGTH     = 'length'
		    , LAST_INDEX = 'lastIndex';
		  if(
		    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
		    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
		    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
		    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
		    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
		    ''[$SPLIT](/.?/)[LENGTH]
		  ){
		    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
		    // based on es5-shim implementation, need to rework it
		    $split = function(separator, limit){
		      var string = String(this);
		      if(separator === undefined && limit === 0)return [];
		      // If `separator` is not a regex, use native split
		      if(!isRegExp(separator))return _split.call(string, separator, limit);
		      var output = [];
		      var flags = (separator.ignoreCase ? 'i' : '') +
		                  (separator.multiline ? 'm' : '') +
		                  (separator.unicode ? 'u' : '') +
		                  (separator.sticky ? 'y' : '');
		      var lastLastIndex = 0;
		      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
		      // Make `global` and avoid `lastIndex` issues by working with a copy
		      var separatorCopy = new RegExp(separator.source, flags + 'g');
		      var separator2, match, lastIndex, lastLength, i;
		      // Doesn't need flags gy, but they don't hurt
		      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
		      while(match = separatorCopy.exec(string)){
		        // `separatorCopy.lastIndex` is not reliable cross-browser
		        lastIndex = match.index + match[0][LENGTH];
		        if(lastIndex > lastLastIndex){
		          output.push(string.slice(lastLastIndex, match.index));
		          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
		          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
		            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
		          });
		          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
		          lastLength = match[0][LENGTH];
		          lastLastIndex = lastIndex;
		          if(output[LENGTH] >= splitLimit)break;
		        }
		        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
		      }
		      if(lastLastIndex === string[LENGTH]){
		        if(lastLength || !separatorCopy.test(''))output.push('');
		      } else output.push(string.slice(lastLastIndex));
		      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
		    };
		  // Chakra, V8
		  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
		    $split = function(separator, limit){
		      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
		    };
		  }
		  // 21.1.3.17 String.prototype.split(separator, limit)
		  return [function split(separator, limit){
		    var O  = defined(this)
		      , fn = separator == undefined ? undefined : separator[SPLIT];
		    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
		  }, $split];
		});
	
	/***/ },
	/* 196 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var LIBRARY            = __webpack_require__(26)
		  , global             = __webpack_require__(2)
		  , ctx                = __webpack_require__(18)
		  , classof            = __webpack_require__(73)
		  , $export            = __webpack_require__(6)
		  , isObject           = __webpack_require__(11)
		  , aFunction          = __webpack_require__(19)
		  , anInstance         = __webpack_require__(197)
		  , forOf              = __webpack_require__(198)
		  , speciesConstructor = __webpack_require__(199)
		  , task               = __webpack_require__(200).set
		  , microtask          = __webpack_require__(201)()
		  , PROMISE            = 'Promise'
		  , TypeError          = global.TypeError
		  , process            = global.process
		  , $Promise           = global[PROMISE]
		  , process            = global.process
		  , isNode             = classof(process) == 'process'
		  , empty              = function(){ /* empty */ }
		  , Internal, GenericPromiseCapability, Wrapper;
	
		var USE_NATIVE = !!function(){
		  try {
		    // correct subclassing with @@species support
		    var promise     = $Promise.resolve(1)
		      , FakePromise = (promise.constructor = {})[__webpack_require__(23)('species')] = function(exec){ exec(empty, empty); };
		    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
		    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
		  } catch(e){ /* empty */ }
		}();
	
		// helpers
		var sameConstructor = function(a, b){
		  // with library wrapper special case
		  return a === b || a === $Promise && b === Wrapper;
		};
		var isThenable = function(it){
		  var then;
		  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
		};
		var newPromiseCapability = function(C){
		  return sameConstructor($Promise, C)
		    ? new PromiseCapability(C)
		    : new GenericPromiseCapability(C);
		};
		var PromiseCapability = GenericPromiseCapability = function(C){
		  var resolve, reject;
		  this.promise = new C(function($$resolve, $$reject){
		    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
		    resolve = $$resolve;
		    reject  = $$reject;
		  });
		  this.resolve = aFunction(resolve);
		  this.reject  = aFunction(reject);
		};
		var perform = function(exec){
		  try {
		    exec();
		  } catch(e){
		    return {error: e};
		  }
		};
		var notify = function(promise, isReject){
		  if(promise._n)return;
		  promise._n = true;
		  var chain = promise._c;
		  microtask(function(){
		    var value = promise._v
		      , ok    = promise._s == 1
		      , i     = 0;
		    var run = function(reaction){
		      var handler = ok ? reaction.ok : reaction.fail
		        , resolve = reaction.resolve
		        , reject  = reaction.reject
		        , domain  = reaction.domain
		        , result, then;
		      try {
		        if(handler){
		          if(!ok){
		            if(promise._h == 2)onHandleUnhandled(promise);
		            promise._h = 1;
		          }
		          if(handler === true)result = value;
		          else {
		            if(domain)domain.enter();
		            result = handler(value);
		            if(domain)domain.exit();
		          }
		          if(result === reaction.promise){
		            reject(TypeError('Promise-chain cycle'));
		          } else if(then = isThenable(result)){
		            then.call(result, resolve, reject);
		          } else resolve(result);
		        } else reject(value);
		      } catch(e){
		        reject(e);
		      }
		    };
		    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
		    promise._c = [];
		    promise._n = false;
		    if(isReject && !promise._h)onUnhandled(promise);
		  });
		};
		var onUnhandled = function(promise){
		  task.call(global, function(){
		    var value = promise._v
		      , abrupt, handler, console;
		    if(isUnhandled(promise)){
		      abrupt = perform(function(){
		        if(isNode){
		          process.emit('unhandledRejection', value, promise);
		        } else if(handler = global.onunhandledrejection){
		          handler({promise: promise, reason: value});
		        } else if((console = global.console) && console.error){
		          console.error('Unhandled promise rejection', value);
		        }
		      });
		      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
		      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
		    } promise._a = undefined;
		    if(abrupt)throw abrupt.error;
		  });
		};
		var isUnhandled = function(promise){
		  if(promise._h == 1)return false;
		  var chain = promise._a || promise._c
		    , i     = 0
		    , reaction;
		  while(chain.length > i){
		    reaction = chain[i++];
		    if(reaction.fail || !isUnhandled(reaction.promise))return false;
		  } return true;
		};
		var onHandleUnhandled = function(promise){
		  task.call(global, function(){
		    var handler;
		    if(isNode){
		      process.emit('rejectionHandled', promise);
		    } else if(handler = global.onrejectionhandled){
		      handler({promise: promise, reason: promise._v});
		    }
		  });
		};
		var $reject = function(value){
		  var promise = this;
		  if(promise._d)return;
		  promise._d = true;
		  promise = promise._w || promise; // unwrap
		  promise._v = value;
		  promise._s = 2;
		  if(!promise._a)promise._a = promise._c.slice();
		  notify(promise, true);
		};
		var $resolve = function(value){
		  var promise = this
		    , then;
		  if(promise._d)return;
		  promise._d = true;
		  promise = promise._w || promise; // unwrap
		  try {
		    if(promise === value)throw TypeError("Promise can't be resolved itself");
		    if(then = isThenable(value)){
		      microtask(function(){
		        var wrapper = {_w: promise, _d: false}; // wrap
		        try {
		          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
		        } catch(e){
		          $reject.call(wrapper, e);
		        }
		      });
		    } else {
		      promise._v = value;
		      promise._s = 1;
		      notify(promise, false);
		    }
		  } catch(e){
		    $reject.call({_w: promise, _d: false}, e); // wrap
		  }
		};
	
		// constructor polyfill
		if(!USE_NATIVE){
		  // 25.4.3.1 Promise(executor)
		  $Promise = function Promise(executor){
		    anInstance(this, $Promise, PROMISE, '_h');
		    aFunction(executor);
		    Internal.call(this);
		    try {
		      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
		    } catch(err){
		      $reject.call(this, err);
		    }
		  };
		  Internal = function Promise(executor){
		    this._c = [];             // <- awaiting reactions
		    this._a = undefined;      // <- checked in isUnhandled reactions
		    this._s = 0;              // <- state
		    this._d = false;          // <- done
		    this._v = undefined;      // <- value
		    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
		    this._n = false;          // <- notify
		  };
		  Internal.prototype = __webpack_require__(202)($Promise.prototype, {
		    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
		    then: function then(onFulfilled, onRejected){
		      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
		      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
		      reaction.fail   = typeof onRejected == 'function' && onRejected;
		      reaction.domain = isNode ? process.domain : undefined;
		      this._c.push(reaction);
		      if(this._a)this._a.push(reaction);
		      if(this._s)notify(this, false);
		      return reaction.promise;
		    },
		    // 25.4.5.1 Promise.prototype.catch(onRejected)
		    'catch': function(onRejected){
		      return this.then(undefined, onRejected);
		    }
		  });
		  PromiseCapability = function(){
		    var promise  = new Internal;
		    this.promise = promise;
		    this.resolve = ctx($resolve, promise, 1);
		    this.reject  = ctx($reject, promise, 1);
		  };
		}
	
		$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
		__webpack_require__(22)($Promise, PROMISE);
		__webpack_require__(186)(PROMISE);
		Wrapper = __webpack_require__(7)[PROMISE];
	
		// statics
		$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
		  // 25.4.4.5 Promise.reject(r)
		  reject: function reject(r){
		    var capability = newPromiseCapability(this)
		      , $$reject   = capability.reject;
		    $$reject(r);
		    return capability.promise;
		  }
		});
		$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
		  // 25.4.4.6 Promise.resolve(x)
		  resolve: function resolve(x){
		    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
		    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
		    var capability = newPromiseCapability(this)
		      , $$resolve  = capability.resolve;
		    $$resolve(x);
		    return capability.promise;
		  }
		});
		$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(157)(function(iter){
		  $Promise.all(iter)['catch'](empty);
		})), PROMISE, {
		  // 25.4.4.1 Promise.all(iterable)
		  all: function all(iterable){
		    var C          = this
		      , capability = newPromiseCapability(C)
		      , resolve    = capability.resolve
		      , reject     = capability.reject;
		    var abrupt = perform(function(){
		      var values    = []
		        , index     = 0
		        , remaining = 1;
		      forOf(iterable, false, function(promise){
		        var $index        = index++
		          , alreadyCalled = false;
		        values.push(undefined);
		        remaining++;
		        C.resolve(promise).then(function(value){
		          if(alreadyCalled)return;
		          alreadyCalled  = true;
		          values[$index] = value;
		          --remaining || resolve(values);
		        }, reject);
		      });
		      --remaining || resolve(values);
		    });
		    if(abrupt)reject(abrupt.error);
		    return capability.promise;
		  },
		  // 25.4.4.4 Promise.race(iterable)
		  race: function race(iterable){
		    var C          = this
		      , capability = newPromiseCapability(C)
		      , reject     = capability.reject;
		    var abrupt = perform(function(){
		      forOf(iterable, false, function(promise){
		        C.resolve(promise).then(capability.resolve, reject);
		      });
		    });
		    if(abrupt)reject(abrupt.error);
		    return capability.promise;
		  }
		});
	
	/***/ },
	/* 197 */
	/***/ function(module, exports) {
	
		module.exports = function(it, Constructor, name, forbiddenField){
		  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
		    throw TypeError(name + ': incorrect invocation!');
		  } return it;
		};
	
	/***/ },
	/* 198 */
	/***/ function(module, exports, __webpack_require__) {
	
		var ctx         = __webpack_require__(18)
		  , call        = __webpack_require__(153)
		  , isArrayIter = __webpack_require__(154)
		  , anObject    = __webpack_require__(10)
		  , toLength    = __webpack_require__(35)
		  , getIterFn   = __webpack_require__(156)
		  , BREAK       = {}
		  , RETURN      = {};
		var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
		  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
		    , f      = ctx(fn, that, entries ? 2 : 1)
		    , index  = 0
		    , length, step, iterator, result;
		  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
		  // fast case for arrays with default iterator
		  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
		    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
		    if(result === BREAK || result === RETURN)return result;
		  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
		    result = call(iterator, f, step.value, entries);
		    if(result === BREAK || result === RETURN)return result;
		  }
		};
		exports.BREAK  = BREAK;
		exports.RETURN = RETURN;
	
	/***/ },
	/* 199 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.3.20 SpeciesConstructor(O, defaultConstructor)
		var anObject  = __webpack_require__(10)
		  , aFunction = __webpack_require__(19)
		  , SPECIES   = __webpack_require__(23)('species');
		module.exports = function(O, D){
		  var C = anObject(O).constructor, S;
		  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
		};
	
	/***/ },
	/* 200 */
	/***/ function(module, exports, __webpack_require__) {
	
		var ctx                = __webpack_require__(18)
		  , invoke             = __webpack_require__(76)
		  , html               = __webpack_require__(46)
		  , cel                = __webpack_require__(13)
		  , global             = __webpack_require__(2)
		  , process            = global.process
		  , setTask            = global.setImmediate
		  , clearTask          = global.clearImmediate
		  , MessageChannel     = global.MessageChannel
		  , counter            = 0
		  , queue              = {}
		  , ONREADYSTATECHANGE = 'onreadystatechange'
		  , defer, channel, port;
		var run = function(){
		  var id = +this;
		  if(queue.hasOwnProperty(id)){
		    var fn = queue[id];
		    delete queue[id];
		    fn();
		  }
		};
		var listener = function(event){
		  run.call(event.data);
		};
		// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
		if(!setTask || !clearTask){
		  setTask = function setImmediate(fn){
		    var args = [], i = 1;
		    while(arguments.length > i)args.push(arguments[i++]);
		    queue[++counter] = function(){
		      invoke(typeof fn == 'function' ? fn : Function(fn), args);
		    };
		    defer(counter);
		    return counter;
		  };
		  clearTask = function clearImmediate(id){
		    delete queue[id];
		  };
		  // Node.js 0.8-
		  if(__webpack_require__(32)(process) == 'process'){
		    defer = function(id){
		      process.nextTick(ctx(run, id, 1));
		    };
		  // Browsers with MessageChannel, includes WebWorkers
		  } else if(MessageChannel){
		    channel = new MessageChannel;
		    port    = channel.port2;
		    channel.port1.onmessage = listener;
		    defer = ctx(port.postMessage, port, 1);
		  // Browsers with postMessage, skip WebWorkers
		  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
		  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
		    defer = function(id){
		      global.postMessage(id + '', '*');
		    };
		    global.addEventListener('message', listener, false);
		  // IE8-
		  } else if(ONREADYSTATECHANGE in cel('script')){
		    defer = function(id){
		      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
		        html.removeChild(this);
		        run.call(id);
		      };
		    };
		  // Rest old browsers
		  } else {
		    defer = function(id){
		      setTimeout(ctx(run, id, 1), 0);
		    };
		  }
		}
		module.exports = {
		  set:   setTask,
		  clear: clearTask
		};
	
	/***/ },
	/* 201 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global    = __webpack_require__(2)
		  , macrotask = __webpack_require__(200).set
		  , Observer  = global.MutationObserver || global.WebKitMutationObserver
		  , process   = global.process
		  , Promise   = global.Promise
		  , isNode    = __webpack_require__(32)(process) == 'process';
	
		module.exports = function(){
		  var head, last, notify;
	
		  var flush = function(){
		    var parent, fn;
		    if(isNode && (parent = process.domain))parent.exit();
		    while(head){
		      fn   = head.fn;
		      head = head.next;
		      try {
		        fn();
		      } catch(e){
		        if(head)notify();
		        else last = undefined;
		        throw e;
		      }
		    } last = undefined;
		    if(parent)parent.enter();
		  };
	
		  // Node.js
		  if(isNode){
		    notify = function(){
		      process.nextTick(flush);
		    };
		  // browsers with MutationObserver
		  } else if(Observer){
		    var toggle = true
		      , node   = document.createTextNode('');
		    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
		    notify = function(){
		      node.data = toggle = !toggle;
		    };
		  // environments with maybe non-completely correct, but existent Promise
		  } else if(Promise && Promise.resolve){
		    var promise = Promise.resolve();
		    notify = function(){
		      promise.then(flush);
		    };
		  // for other environments - macrotask based on:
		  // - setImmediate
		  // - MessageChannel
		  // - window.postMessag
		  // - onreadystatechange
		  // - setTimeout
		  } else {
		    notify = function(){
		      // strange IE + webpack dev server bug - use .call(global)
		      macrotask.call(global, flush);
		    };
		  }
	
		  return function(fn){
		    var task = {fn: fn, next: undefined};
		    if(last)last.next = task;
		    if(!head){
		      head = task;
		      notify();
		    } last = task;
		  };
		};
	
	/***/ },
	/* 202 */
	/***/ function(module, exports, __webpack_require__) {
	
		var redefine = __webpack_require__(16);
		module.exports = function(target, src, safe){
		  for(var key in src)redefine(target, key, src[key], safe);
		  return target;
		};
	
	/***/ },
	/* 203 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var strong = __webpack_require__(204);
	
		// 23.1 Map Objects
		module.exports = __webpack_require__(205)('Map', function(get){
		  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
		}, {
		  // 23.1.3.6 Map.prototype.get(key)
		  get: function get(key){
		    var entry = strong.getEntry(this, key);
		    return entry && entry.v;
		  },
		  // 23.1.3.9 Map.prototype.set(key, value)
		  set: function set(key, value){
		    return strong.def(this, key === 0 ? 0 : key, value);
		  }
		}, strong, true);
	
	/***/ },
	/* 204 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var dP          = __webpack_require__(9).f
		  , create      = __webpack_require__(44)
		  , redefineAll = __webpack_require__(202)
		  , ctx         = __webpack_require__(18)
		  , anInstance  = __webpack_require__(197)
		  , defined     = __webpack_require__(33)
		  , forOf       = __webpack_require__(198)
		  , $iterDefine = __webpack_require__(134)
		  , step        = __webpack_require__(184)
		  , setSpecies  = __webpack_require__(186)
		  , DESCRIPTORS = __webpack_require__(4)
		  , fastKey     = __webpack_require__(20).fastKey
		  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
		var getEntry = function(that, key){
		  // fast case
		  var index = fastKey(key), entry;
		  if(index !== 'F')return that._i[index];
		  // frozen object case
		  for(entry = that._f; entry; entry = entry.n){
		    if(entry.k == key)return entry;
		  }
		};
	
		module.exports = {
		  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
		    var C = wrapper(function(that, iterable){
		      anInstance(that, C, NAME, '_i');
		      that._i = create(null); // index
		      that._f = undefined;    // first entry
		      that._l = undefined;    // last entry
		      that[SIZE] = 0;         // size
		      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
		    });
		    redefineAll(C.prototype, {
		      // 23.1.3.1 Map.prototype.clear()
		      // 23.2.3.2 Set.prototype.clear()
		      clear: function clear(){
		        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
		          entry.r = true;
		          if(entry.p)entry.p = entry.p.n = undefined;
		          delete data[entry.i];
		        }
		        that._f = that._l = undefined;
		        that[SIZE] = 0;
		      },
		      // 23.1.3.3 Map.prototype.delete(key)
		      // 23.2.3.4 Set.prototype.delete(value)
		      'delete': function(key){
		        var that  = this
		          , entry = getEntry(that, key);
		        if(entry){
		          var next = entry.n
		            , prev = entry.p;
		          delete that._i[entry.i];
		          entry.r = true;
		          if(prev)prev.n = next;
		          if(next)next.p = prev;
		          if(that._f == entry)that._f = next;
		          if(that._l == entry)that._l = prev;
		          that[SIZE]--;
		        } return !!entry;
		      },
		      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
		      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
		      forEach: function forEach(callbackfn /*, that = undefined */){
		        anInstance(this, C, 'forEach');
		        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
		          , entry;
		        while(entry = entry ? entry.n : this._f){
		          f(entry.v, entry.k, this);
		          // revert to the last existing entry
		          while(entry && entry.r)entry = entry.p;
		        }
		      },
		      // 23.1.3.7 Map.prototype.has(key)
		      // 23.2.3.7 Set.prototype.has(value)
		      has: function has(key){
		        return !!getEntry(this, key);
		      }
		    });
		    if(DESCRIPTORS)dP(C.prototype, 'size', {
		      get: function(){
		        return defined(this[SIZE]);
		      }
		    });
		    return C;
		  },
		  def: function(that, key, value){
		    var entry = getEntry(that, key)
		      , prev, index;
		    // change existing entry
		    if(entry){
		      entry.v = value;
		    // create new entry
		    } else {
		      that._l = entry = {
		        i: index = fastKey(key, true), // <- index
		        k: key,                        // <- key
		        v: value,                      // <- value
		        p: prev = that._l,             // <- previous entry
		        n: undefined,                  // <- next entry
		        r: false                       // <- removed
		      };
		      if(!that._f)that._f = entry;
		      if(prev)prev.n = entry;
		      that[SIZE]++;
		      // add to index
		      if(index !== 'F')that._i[index] = entry;
		    } return that;
		  },
		  getEntry: getEntry,
		  setStrong: function(C, NAME, IS_MAP){
		    // add .keys, .values, .entries, [@@iterator]
		    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
		    $iterDefine(C, NAME, function(iterated, kind){
		      this._t = iterated;  // target
		      this._k = kind;      // kind
		      this._l = undefined; // previous
		    }, function(){
		      var that  = this
		        , kind  = that._k
		        , entry = that._l;
		      // revert to the last existing entry
		      while(entry && entry.r)entry = entry.p;
		      // get next entry
		      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
		        // or finish the iteration
		        that._t = undefined;
		        return step(1);
		      }
		      // return step by kind
		      if(kind == 'keys'  )return step(0, entry.k);
		      if(kind == 'values')return step(0, entry.v);
		      return step(0, [entry.k, entry.v]);
		    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
		    // add [@@species], 23.1.2.2, 23.2.2.2
		    setSpecies(NAME);
		  }
		};
	
	/***/ },
	/* 205 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var global            = __webpack_require__(2)
		  , $export           = __webpack_require__(6)
		  , redefine          = __webpack_require__(16)
		  , redefineAll       = __webpack_require__(202)
		  , meta              = __webpack_require__(20)
		  , forOf             = __webpack_require__(198)
		  , anInstance        = __webpack_require__(197)
		  , isObject          = __webpack_require__(11)
		  , fails             = __webpack_require__(5)
		  , $iterDetect       = __webpack_require__(157)
		  , setToStringTag    = __webpack_require__(22)
		  , inheritIfRequired = __webpack_require__(80);
	
		module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
		  var Base  = global[NAME]
		    , C     = Base
		    , ADDER = IS_MAP ? 'set' : 'add'
		    , proto = C && C.prototype
		    , O     = {};
		  var fixMethod = function(KEY){
		    var fn = proto[KEY];
		    redefine(proto, KEY,
		      KEY == 'delete' ? function(a){
		        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
		      } : KEY == 'has' ? function has(a){
		        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
		      } : KEY == 'get' ? function get(a){
		        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
		      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
		        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
		    );
		  };
		  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
		    new C().entries().next();
		  }))){
		    // create collection constructor
		    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
		    redefineAll(C.prototype, methods);
		    meta.NEED = true;
		  } else {
		    var instance             = new C
		      // early implementations not supports chaining
		      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
		      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
		      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
		      // most early implementations doesn't supports iterables, most modern - not close it correctly
		      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
		      // for early implementations -0 and +0 not the same
		      , BUGGY_ZERO = !IS_WEAK && fails(function(){
		        // V8 ~ Chromium 42- fails only with 5+ elements
		        var $instance = new C()
		          , index     = 5;
		        while(index--)$instance[ADDER](index, index);
		        return !$instance.has(-0);
		      });
		    if(!ACCEPT_ITERABLES){ 
		      C = wrapper(function(target, iterable){
		        anInstance(target, C, NAME);
		        var that = inheritIfRequired(new Base, target, C);
		        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
		        return that;
		      });
		      C.prototype = proto;
		      proto.constructor = C;
		    }
		    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
		      fixMethod('delete');
		      fixMethod('has');
		      IS_MAP && fixMethod('get');
		    }
		    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
		    // weak collections should not contains .clear method
		    if(IS_WEAK && proto.clear)delete proto.clear;
		  }
	
		  setToStringTag(C, NAME);
	
		  O[NAME] = C;
		  $export($export.G + $export.W + $export.F * (C != Base), O);
	
		  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
		  return C;
		};
	
	/***/ },
	/* 206 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var strong = __webpack_require__(204);
	
		// 23.2 Set Objects
		module.exports = __webpack_require__(205)('Set', function(get){
		  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
		}, {
		  // 23.2.3.1 Set.prototype.add(value)
		  add: function add(value){
		    return strong.def(this, value = value === 0 ? 0 : value, value);
		  }
		}, strong);
	
	/***/ },
	/* 207 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var each         = __webpack_require__(164)(0)
		  , redefine     = __webpack_require__(16)
		  , meta         = __webpack_require__(20)
		  , assign       = __webpack_require__(67)
		  , weak         = __webpack_require__(208)
		  , isObject     = __webpack_require__(11)
		  , getWeak      = meta.getWeak
		  , isExtensible = Object.isExtensible
		  , uncaughtFrozenStore = weak.ufstore
		  , tmp          = {}
		  , InternalMap;
	
		var wrapper = function(get){
		  return function WeakMap(){
		    return get(this, arguments.length > 0 ? arguments[0] : undefined);
		  };
		};
	
		var methods = {
		  // 23.3.3.3 WeakMap.prototype.get(key)
		  get: function get(key){
		    if(isObject(key)){
		      var data = getWeak(key);
		      if(data === true)return uncaughtFrozenStore(this).get(key);
		      return data ? data[this._i] : undefined;
		    }
		  },
		  // 23.3.3.5 WeakMap.prototype.set(key, value)
		  set: function set(key, value){
		    return weak.def(this, key, value);
		  }
		};
	
		// 23.3 WeakMap Objects
		var $WeakMap = module.exports = __webpack_require__(205)('WeakMap', wrapper, methods, weak, true, true);
	
		// IE11 WeakMap frozen keys fix
		if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
		  InternalMap = weak.getConstructor(wrapper);
		  assign(InternalMap.prototype, methods);
		  meta.NEED = true;
		  each(['delete', 'has', 'get', 'set'], function(key){
		    var proto  = $WeakMap.prototype
		      , method = proto[key];
		    redefine(proto, key, function(a, b){
		      // store frozen objects on internal weakmap shim
		      if(isObject(a) && !isExtensible(a)){
		        if(!this._f)this._f = new InternalMap;
		        var result = this._f[key](a, b);
		        return key == 'set' ? this : result;
		      // store all the rest on native weakmap
		      } return method.call(this, a, b);
		    });
		  });
		}
	
	/***/ },
	/* 208 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var redefineAll       = __webpack_require__(202)
		  , getWeak           = __webpack_require__(20).getWeak
		  , anObject          = __webpack_require__(10)
		  , isObject          = __webpack_require__(11)
		  , anInstance        = __webpack_require__(197)
		  , forOf             = __webpack_require__(198)
		  , createArrayMethod = __webpack_require__(164)
		  , $has              = __webpack_require__(3)
		  , arrayFind         = createArrayMethod(5)
		  , arrayFindIndex    = createArrayMethod(6)
		  , id                = 0;
	
		// fallback for uncaught frozen keys
		var uncaughtFrozenStore = function(that){
		  return that._l || (that._l = new UncaughtFrozenStore);
		};
		var UncaughtFrozenStore = function(){
		  this.a = [];
		};
		var findUncaughtFrozen = function(store, key){
		  return arrayFind(store.a, function(it){
		    return it[0] === key;
		  });
		};
		UncaughtFrozenStore.prototype = {
		  get: function(key){
		    var entry = findUncaughtFrozen(this, key);
		    if(entry)return entry[1];
		  },
		  has: function(key){
		    return !!findUncaughtFrozen(this, key);
		  },
		  set: function(key, value){
		    var entry = findUncaughtFrozen(this, key);
		    if(entry)entry[1] = value;
		    else this.a.push([key, value]);
		  },
		  'delete': function(key){
		    var index = arrayFindIndex(this.a, function(it){
		      return it[0] === key;
		    });
		    if(~index)this.a.splice(index, 1);
		    return !!~index;
		  }
		};
	
		module.exports = {
		  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
		    var C = wrapper(function(that, iterable){
		      anInstance(that, C, NAME, '_i');
		      that._i = id++;      // collection id
		      that._l = undefined; // leak store for uncaught frozen objects
		      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
		    });
		    redefineAll(C.prototype, {
		      // 23.3.3.2 WeakMap.prototype.delete(key)
		      // 23.4.3.3 WeakSet.prototype.delete(value)
		      'delete': function(key){
		        if(!isObject(key))return false;
		        var data = getWeak(key);
		        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
		        return data && $has(data, this._i) && delete data[this._i];
		      },
		      // 23.3.3.4 WeakMap.prototype.has(key)
		      // 23.4.3.4 WeakSet.prototype.has(value)
		      has: function has(key){
		        if(!isObject(key))return false;
		        var data = getWeak(key);
		        if(data === true)return uncaughtFrozenStore(this).has(key);
		        return data && $has(data, this._i);
		      }
		    });
		    return C;
		  },
		  def: function(that, key, value){
		    var data = getWeak(anObject(key), true);
		    if(data === true)uncaughtFrozenStore(that).set(key, value);
		    else data[that._i] = value;
		    return that;
		  },
		  ufstore: uncaughtFrozenStore
		};
	
	/***/ },
	/* 209 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var weak = __webpack_require__(208);
	
		// 23.4 WeakSet Objects
		__webpack_require__(205)('WeakSet', function(get){
		  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
		}, {
		  // 23.4.3.1 WeakSet.prototype.add(value)
		  add: function add(value){
		    return weak.def(this, value, true);
		  }
		}, weak, false, true);
	
	/***/ },
	/* 210 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
		var $export   = __webpack_require__(6)
		  , aFunction = __webpack_require__(19)
		  , anObject  = __webpack_require__(10)
		  , rApply    = (__webpack_require__(2).Reflect || {}).apply
		  , fApply    = Function.apply;
		// MS Edge argumentsList argument is optional
		$export($export.S + $export.F * !__webpack_require__(5)(function(){
		  rApply(function(){});
		}), 'Reflect', {
		  apply: function apply(target, thisArgument, argumentsList){
		    var T = aFunction(target)
		      , L = anObject(argumentsList);
		    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
		  }
		});
	
	/***/ },
	/* 211 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
		var $export    = __webpack_require__(6)
		  , create     = __webpack_require__(44)
		  , aFunction  = __webpack_require__(19)
		  , anObject   = __webpack_require__(10)
		  , isObject   = __webpack_require__(11)
		  , fails      = __webpack_require__(5)
		  , bind       = __webpack_require__(75)
		  , rConstruct = (__webpack_require__(2).Reflect || {}).construct;
	
		// MS Edge supports only 2 arguments and argumentsList argument is optional
		// FF Nightly sets third argument as `new.target`, but does not create `this` from it
		var NEW_TARGET_BUG = fails(function(){
		  function F(){}
		  return !(rConstruct(function(){}, [], F) instanceof F);
		});
		var ARGS_BUG = !fails(function(){
		  rConstruct(function(){});
		});
	
		$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
		  construct: function construct(Target, args /*, newTarget*/){
		    aFunction(Target);
		    anObject(args);
		    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
		    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
		    if(Target == newTarget){
		      // w/o altered newTarget, optimization for 0-4 arguments
		      switch(args.length){
		        case 0: return new Target;
		        case 1: return new Target(args[0]);
		        case 2: return new Target(args[0], args[1]);
		        case 3: return new Target(args[0], args[1], args[2]);
		        case 4: return new Target(args[0], args[1], args[2], args[3]);
		      }
		      // w/o altered newTarget, lot of arguments case
		      var $args = [null];
		      $args.push.apply($args, args);
		      return new (bind.apply(Target, $args));
		    }
		    // with altered newTarget, not support built-in constructors
		    var proto    = newTarget.prototype
		      , instance = create(isObject(proto) ? proto : Object.prototype)
		      , result   = Function.apply.call(Target, instance, args);
		    return isObject(result) ? result : instance;
		  }
		});
	
	/***/ },
	/* 212 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
		var dP          = __webpack_require__(9)
		  , $export     = __webpack_require__(6)
		  , anObject    = __webpack_require__(10)
		  , toPrimitive = __webpack_require__(14);
	
		// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
		$export($export.S + $export.F * __webpack_require__(5)(function(){
		  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
		}), 'Reflect', {
		  defineProperty: function defineProperty(target, propertyKey, attributes){
		    anObject(target);
		    propertyKey = toPrimitive(propertyKey, true);
		    anObject(attributes);
		    try {
		      dP.f(target, propertyKey, attributes);
		      return true;
		    } catch(e){
		      return false;
		    }
		  }
		});
	
	/***/ },
	/* 213 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.4 Reflect.deleteProperty(target, propertyKey)
		var $export  = __webpack_require__(6)
		  , gOPD     = __webpack_require__(49).f
		  , anObject = __webpack_require__(10);
	
		$export($export.S, 'Reflect', {
		  deleteProperty: function deleteProperty(target, propertyKey){
		    var desc = gOPD(anObject(target), propertyKey);
		    return desc && !desc.configurable ? false : delete target[propertyKey];
		  }
		});
	
	/***/ },
	/* 214 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// 26.1.5 Reflect.enumerate(target)
		var $export  = __webpack_require__(6)
		  , anObject = __webpack_require__(10);
		var Enumerate = function(iterated){
		  this._t = anObject(iterated); // target
		  this._i = 0;                  // next index
		  var keys = this._k = []       // keys
		    , key;
		  for(key in iterated)keys.push(key);
		};
		__webpack_require__(136)(Enumerate, 'Object', function(){
		  var that = this
		    , keys = that._k
		    , key;
		  do {
		    if(that._i >= keys.length)return {value: undefined, done: true};
		  } while(!((key = keys[that._i++]) in that._t));
		  return {value: key, done: false};
		});
	
		$export($export.S, 'Reflect', {
		  enumerate: function enumerate(target){
		    return new Enumerate(target);
		  }
		});
	
	/***/ },
	/* 215 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.6 Reflect.get(target, propertyKey [, receiver])
		var gOPD           = __webpack_require__(49)
		  , getPrototypeOf = __webpack_require__(57)
		  , has            = __webpack_require__(3)
		  , $export        = __webpack_require__(6)
		  , isObject       = __webpack_require__(11)
		  , anObject       = __webpack_require__(10);
	
		function get(target, propertyKey/*, receiver*/){
		  var receiver = arguments.length < 3 ? target : arguments[2]
		    , desc, proto;
		  if(anObject(target) === receiver)return target[propertyKey];
		  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
		    ? desc.value
		    : desc.get !== undefined
		      ? desc.get.call(receiver)
		      : undefined;
		  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
		}
	
		$export($export.S, 'Reflect', {get: get});
	
	/***/ },
	/* 216 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
		var gOPD     = __webpack_require__(49)
		  , $export  = __webpack_require__(6)
		  , anObject = __webpack_require__(10);
	
		$export($export.S, 'Reflect', {
		  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
		    return gOPD.f(anObject(target), propertyKey);
		  }
		});
	
	/***/ },
	/* 217 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.8 Reflect.getPrototypeOf(target)
		var $export  = __webpack_require__(6)
		  , getProto = __webpack_require__(57)
		  , anObject = __webpack_require__(10);
	
		$export($export.S, 'Reflect', {
		  getPrototypeOf: function getPrototypeOf(target){
		    return getProto(anObject(target));
		  }
		});
	
	/***/ },
	/* 218 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.9 Reflect.has(target, propertyKey)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Reflect', {
		  has: function has(target, propertyKey){
		    return propertyKey in target;
		  }
		});
	
	/***/ },
	/* 219 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.10 Reflect.isExtensible(target)
		var $export       = __webpack_require__(6)
		  , anObject      = __webpack_require__(10)
		  , $isExtensible = Object.isExtensible;
	
		$export($export.S, 'Reflect', {
		  isExtensible: function isExtensible(target){
		    anObject(target);
		    return $isExtensible ? $isExtensible(target) : true;
		  }
		});
	
	/***/ },
	/* 220 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.11 Reflect.ownKeys(target)
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Reflect', {ownKeys: __webpack_require__(221)});
	
	/***/ },
	/* 221 */
	/***/ function(module, exports, __webpack_require__) {
	
		// all object keys, includes non-enumerable and symbols
		var gOPN     = __webpack_require__(48)
		  , gOPS     = __webpack_require__(41)
		  , anObject = __webpack_require__(10)
		  , Reflect  = __webpack_require__(2).Reflect;
		module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
		  var keys       = gOPN.f(anObject(it))
		    , getSymbols = gOPS.f;
		  return getSymbols ? keys.concat(getSymbols(it)) : keys;
		};
	
	/***/ },
	/* 222 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.12 Reflect.preventExtensions(target)
		var $export            = __webpack_require__(6)
		  , anObject           = __webpack_require__(10)
		  , $preventExtensions = Object.preventExtensions;
	
		$export($export.S, 'Reflect', {
		  preventExtensions: function preventExtensions(target){
		    anObject(target);
		    try {
		      if($preventExtensions)$preventExtensions(target);
		      return true;
		    } catch(e){
		      return false;
		    }
		  }
		});
	
	/***/ },
	/* 223 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
		var dP             = __webpack_require__(9)
		  , gOPD           = __webpack_require__(49)
		  , getPrototypeOf = __webpack_require__(57)
		  , has            = __webpack_require__(3)
		  , $export        = __webpack_require__(6)
		  , createDesc     = __webpack_require__(15)
		  , anObject       = __webpack_require__(10)
		  , isObject       = __webpack_require__(11);
	
		function set(target, propertyKey, V/*, receiver*/){
		  var receiver = arguments.length < 4 ? target : arguments[3]
		    , ownDesc  = gOPD.f(anObject(target), propertyKey)
		    , existingDescriptor, proto;
		  if(!ownDesc){
		    if(isObject(proto = getPrototypeOf(target))){
		      return set(proto, propertyKey, V, receiver);
		    }
		    ownDesc = createDesc(0);
		  }
		  if(has(ownDesc, 'value')){
		    if(ownDesc.writable === false || !isObject(receiver))return false;
		    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
		    existingDescriptor.value = V;
		    dP.f(receiver, propertyKey, existingDescriptor);
		    return true;
		  }
		  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
		}
	
		$export($export.S, 'Reflect', {set: set});
	
	/***/ },
	/* 224 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 26.1.14 Reflect.setPrototypeOf(target, proto)
		var $export  = __webpack_require__(6)
		  , setProto = __webpack_require__(71);
	
		if(setProto)$export($export.S, 'Reflect', {
		  setPrototypeOf: function setPrototypeOf(target, proto){
		    setProto.check(target, proto);
		    try {
		      setProto.set(target, proto);
		      return true;
		    } catch(e){
		      return false;
		    }
		  }
		});
	
	/***/ },
	/* 225 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.3.3.1 / 15.9.4.4 Date.now()
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});
	
	/***/ },
	/* 226 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export     = __webpack_require__(6)
		  , toObject    = __webpack_require__(56)
		  , toPrimitive = __webpack_require__(14);
	
		$export($export.P + $export.F * __webpack_require__(5)(function(){
		  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
		}), 'Date', {
		  toJSON: function toJSON(key){
		    var O  = toObject(this)
		      , pv = toPrimitive(O);
		    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
		  }
		});
	
	/***/ },
	/* 227 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
		var $export = __webpack_require__(6)
		  , fails   = __webpack_require__(5)
		  , getTime = Date.prototype.getTime;
	
		var lz = function(num){
		  return num > 9 ? num : '0' + num;
		};
	
		// PhantomJS / old WebKit has a broken implementations
		$export($export.P + $export.F * (fails(function(){
		  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
		}) || !fails(function(){
		  new Date(NaN).toISOString();
		})), 'Date', {
		  toISOString: function toISOString(){
		    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
		    var d = this
		      , y = d.getUTCFullYear()
		      , m = d.getUTCMilliseconds()
		      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
		    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
		      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
		      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
		      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
		  }
		});
	
	/***/ },
	/* 228 */
	/***/ function(module, exports, __webpack_require__) {
	
		var DateProto    = Date.prototype
		  , INVALID_DATE = 'Invalid Date'
		  , TO_STRING    = 'toString'
		  , $toString    = DateProto[TO_STRING]
		  , getTime      = DateProto.getTime;
		if(new Date(NaN) + '' != INVALID_DATE){
		  __webpack_require__(16)(DateProto, TO_STRING, function toString(){
		    var value = getTime.call(this);
		    return value === value ? $toString.call(this) : INVALID_DATE;
		  });
		}
	
	/***/ },
	/* 229 */
	/***/ function(module, exports, __webpack_require__) {
	
		var TO_PRIMITIVE = __webpack_require__(23)('toPrimitive')
		  , proto        = Date.prototype;
	
		if(!(TO_PRIMITIVE in proto))__webpack_require__(8)(proto, TO_PRIMITIVE, __webpack_require__(230));
	
	/***/ },
	/* 230 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var anObject    = __webpack_require__(10)
		  , toPrimitive = __webpack_require__(14)
		  , NUMBER      = 'number';
	
		module.exports = function(hint){
		  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
		  return toPrimitive(anObject(this), hint != NUMBER);
		};
	
	/***/ },
	/* 231 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export      = __webpack_require__(6)
		  , $typed       = __webpack_require__(232)
		  , buffer       = __webpack_require__(233)
		  , anObject     = __webpack_require__(10)
		  , toIndex      = __webpack_require__(37)
		  , toLength     = __webpack_require__(35)
		  , isObject     = __webpack_require__(11)
		  , ArrayBuffer  = __webpack_require__(2).ArrayBuffer
		  , speciesConstructor = __webpack_require__(199)
		  , $ArrayBuffer = buffer.ArrayBuffer
		  , $DataView    = buffer.DataView
		  , $isView      = $typed.ABV && ArrayBuffer.isView
		  , $slice       = $ArrayBuffer.prototype.slice
		  , VIEW         = $typed.VIEW
		  , ARRAY_BUFFER = 'ArrayBuffer';
	
		$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
		$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
		  // 24.1.3.1 ArrayBuffer.isView(arg)
		  isView: function isView(it){
		    return $isView && $isView(it) || isObject(it) && VIEW in it;
		  }
		});
	
		$export($export.P + $export.U + $export.F * __webpack_require__(5)(function(){
		  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
		}), ARRAY_BUFFER, {
		  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
		  slice: function slice(start, end){
		    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
		    var len    = anObject(this).byteLength
		      , first  = toIndex(start, len)
		      , final  = toIndex(end === undefined ? len : end, len)
		      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
		      , viewS  = new $DataView(this)
		      , viewT  = new $DataView(result)
		      , index  = 0;
		    while(first < final){
		      viewT.setUint8(index++, viewS.getUint8(first++));
		    } return result;
		  }
		});
	
		__webpack_require__(186)(ARRAY_BUFFER);
	
	/***/ },
	/* 232 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global = __webpack_require__(2)
		  , hide   = __webpack_require__(8)
		  , uid    = __webpack_require__(17)
		  , TYPED  = uid('typed_array')
		  , VIEW   = uid('view')
		  , ABV    = !!(global.ArrayBuffer && global.DataView)
		  , CONSTR = ABV
		  , i = 0, l = 9, Typed;
	
		var TypedArrayConstructors = (
		  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
		).split(',');
	
		while(i < l){
		  if(Typed = global[TypedArrayConstructors[i++]]){
		    hide(Typed.prototype, TYPED, true);
		    hide(Typed.prototype, VIEW, true);
		  } else CONSTR = false;
		}
	
		module.exports = {
		  ABV:    ABV,
		  CONSTR: CONSTR,
		  TYPED:  TYPED,
		  VIEW:   VIEW
		};
	
	/***/ },
	/* 233 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var global         = __webpack_require__(2)
		  , DESCRIPTORS    = __webpack_require__(4)
		  , LIBRARY        = __webpack_require__(26)
		  , $typed         = __webpack_require__(232)
		  , hide           = __webpack_require__(8)
		  , redefineAll    = __webpack_require__(202)
		  , fails          = __webpack_require__(5)
		  , anInstance     = __webpack_require__(197)
		  , toInteger      = __webpack_require__(36)
		  , toLength       = __webpack_require__(35)
		  , gOPN           = __webpack_require__(48).f
		  , dP             = __webpack_require__(9).f
		  , arrayFill      = __webpack_require__(180)
		  , setToStringTag = __webpack_require__(22)
		  , ARRAY_BUFFER   = 'ArrayBuffer'
		  , DATA_VIEW      = 'DataView'
		  , PROTOTYPE      = 'prototype'
		  , WRONG_LENGTH   = 'Wrong length!'
		  , WRONG_INDEX    = 'Wrong index!'
		  , $ArrayBuffer   = global[ARRAY_BUFFER]
		  , $DataView      = global[DATA_VIEW]
		  , Math           = global.Math
		  , RangeError     = global.RangeError
		  , Infinity       = global.Infinity
		  , BaseBuffer     = $ArrayBuffer
		  , abs            = Math.abs
		  , pow            = Math.pow
		  , floor          = Math.floor
		  , log            = Math.log
		  , LN2            = Math.LN2
		  , BUFFER         = 'buffer'
		  , BYTE_LENGTH    = 'byteLength'
		  , BYTE_OFFSET    = 'byteOffset'
		  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
		  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
		  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
		// IEEE754 conversions based on https://github.com/feross/ieee754
		var packIEEE754 = function(value, mLen, nBytes){
		  var buffer = Array(nBytes)
		    , eLen   = nBytes * 8 - mLen - 1
		    , eMax   = (1 << eLen) - 1
		    , eBias  = eMax >> 1
		    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
		    , i      = 0
		    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
		    , e, m, c;
		  value = abs(value)
		  if(value != value || value === Infinity){
		    m = value != value ? 1 : 0;
		    e = eMax;
		  } else {
		    e = floor(log(value) / LN2);
		    if(value * (c = pow(2, -e)) < 1){
		      e--;
		      c *= 2;
		    }
		    if(e + eBias >= 1){
		      value += rt / c;
		    } else {
		      value += rt * pow(2, 1 - eBias);
		    }
		    if(value * c >= 2){
		      e++;
		      c /= 2;
		    }
		    if(e + eBias >= eMax){
		      m = 0;
		      e = eMax;
		    } else if(e + eBias >= 1){
		      m = (value * c - 1) * pow(2, mLen);
		      e = e + eBias;
		    } else {
		      m = value * pow(2, eBias - 1) * pow(2, mLen);
		      e = 0;
		    }
		  }
		  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
		  e = e << mLen | m;
		  eLen += mLen;
		  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
		  buffer[--i] |= s * 128;
		  return buffer;
		};
		var unpackIEEE754 = function(buffer, mLen, nBytes){
		  var eLen  = nBytes * 8 - mLen - 1
		    , eMax  = (1 << eLen) - 1
		    , eBias = eMax >> 1
		    , nBits = eLen - 7
		    , i     = nBytes - 1
		    , s     = buffer[i--]
		    , e     = s & 127
		    , m;
		  s >>= 7;
		  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
		  m = e & (1 << -nBits) - 1;
		  e >>= -nBits;
		  nBits += mLen;
		  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
		  if(e === 0){
		    e = 1 - eBias;
		  } else if(e === eMax){
		    return m ? NaN : s ? -Infinity : Infinity;
		  } else {
		    m = m + pow(2, mLen);
		    e = e - eBias;
		  } return (s ? -1 : 1) * m * pow(2, e - mLen);
		};
	
		var unpackI32 = function(bytes){
		  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
		};
		var packI8 = function(it){
		  return [it & 0xff];
		};
		var packI16 = function(it){
		  return [it & 0xff, it >> 8 & 0xff];
		};
		var packI32 = function(it){
		  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
		};
		var packF64 = function(it){
		  return packIEEE754(it, 52, 8);
		};
		var packF32 = function(it){
		  return packIEEE754(it, 23, 4);
		};
	
		var addGetter = function(C, key, internal){
		  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
		};
	
		var get = function(view, bytes, index, isLittleEndian){
		  var numIndex = +index
		    , intIndex = toInteger(numIndex);
		  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
		  var store = view[$BUFFER]._b
		    , start = intIndex + view[$OFFSET]
		    , pack  = store.slice(start, start + bytes);
		  return isLittleEndian ? pack : pack.reverse();
		};
		var set = function(view, bytes, index, conversion, value, isLittleEndian){
		  var numIndex = +index
		    , intIndex = toInteger(numIndex);
		  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
		  var store = view[$BUFFER]._b
		    , start = intIndex + view[$OFFSET]
		    , pack  = conversion(+value);
		  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
		};
	
		var validateArrayBufferArguments = function(that, length){
		  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
		  var numberLength = +length
		    , byteLength   = toLength(numberLength);
		  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
		  return byteLength;
		};
	
		if(!$typed.ABV){
		  $ArrayBuffer = function ArrayBuffer(length){
		    var byteLength = validateArrayBufferArguments(this, length);
		    this._b       = arrayFill.call(Array(byteLength), 0);
		    this[$LENGTH] = byteLength;
		  };
	
		  $DataView = function DataView(buffer, byteOffset, byteLength){
		    anInstance(this, $DataView, DATA_VIEW);
		    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
		    var bufferLength = buffer[$LENGTH]
		      , offset       = toInteger(byteOffset);
		    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
		    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
		    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
		    this[$BUFFER] = buffer;
		    this[$OFFSET] = offset;
		    this[$LENGTH] = byteLength;
		  };
	
		  if(DESCRIPTORS){
		    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
		    addGetter($DataView, BUFFER, '_b');
		    addGetter($DataView, BYTE_LENGTH, '_l');
		    addGetter($DataView, BYTE_OFFSET, '_o');
		  }
	
		  redefineAll($DataView[PROTOTYPE], {
		    getInt8: function getInt8(byteOffset){
		      return get(this, 1, byteOffset)[0] << 24 >> 24;
		    },
		    getUint8: function getUint8(byteOffset){
		      return get(this, 1, byteOffset)[0];
		    },
		    getInt16: function getInt16(byteOffset /*, littleEndian */){
		      var bytes = get(this, 2, byteOffset, arguments[1]);
		      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
		    },
		    getUint16: function getUint16(byteOffset /*, littleEndian */){
		      var bytes = get(this, 2, byteOffset, arguments[1]);
		      return bytes[1] << 8 | bytes[0];
		    },
		    getInt32: function getInt32(byteOffset /*, littleEndian */){
		      return unpackI32(get(this, 4, byteOffset, arguments[1]));
		    },
		    getUint32: function getUint32(byteOffset /*, littleEndian */){
		      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
		    },
		    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
		      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
		    },
		    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
		      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
		    },
		    setInt8: function setInt8(byteOffset, value){
		      set(this, 1, byteOffset, packI8, value);
		    },
		    setUint8: function setUint8(byteOffset, value){
		      set(this, 1, byteOffset, packI8, value);
		    },
		    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
		      set(this, 2, byteOffset, packI16, value, arguments[2]);
		    },
		    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
		      set(this, 2, byteOffset, packI16, value, arguments[2]);
		    },
		    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
		      set(this, 4, byteOffset, packI32, value, arguments[2]);
		    },
		    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
		      set(this, 4, byteOffset, packI32, value, arguments[2]);
		    },
		    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
		      set(this, 4, byteOffset, packF32, value, arguments[2]);
		    },
		    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
		      set(this, 8, byteOffset, packF64, value, arguments[2]);
		    }
		  });
		} else {
		  if(!fails(function(){
		    new $ArrayBuffer;     // eslint-disable-line no-new
		  }) || !fails(function(){
		    new $ArrayBuffer(.5); // eslint-disable-line no-new
		  })){
		    $ArrayBuffer = function ArrayBuffer(length){
		      return new BaseBuffer(validateArrayBufferArguments(this, length));
		    };
		    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
		    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
		      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
		    };
		    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
		  }
		  // iOS Safari 7.x bug
		  var view = new $DataView(new $ArrayBuffer(2))
		    , $setInt8 = $DataView[PROTOTYPE].setInt8;
		  view.setInt8(0, 2147483648);
		  view.setInt8(1, 2147483649);
		  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
		    setInt8: function setInt8(byteOffset, value){
		      $setInt8.call(this, byteOffset, value << 24 >> 24);
		    },
		    setUint8: function setUint8(byteOffset, value){
		      $setInt8.call(this, byteOffset, value << 24 >> 24);
		    }
		  }, true);
		}
		setToStringTag($ArrayBuffer, ARRAY_BUFFER);
		setToStringTag($DataView, DATA_VIEW);
		hide($DataView[PROTOTYPE], $typed.VIEW, true);
		exports[ARRAY_BUFFER] = $ArrayBuffer;
		exports[DATA_VIEW] = $DataView;
	
	/***/ },
	/* 234 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(6);
		$export($export.G + $export.W + $export.F * !__webpack_require__(232).ABV, {
		  DataView: __webpack_require__(233).DataView
		});
	
	/***/ },
	/* 235 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(236)('Int8', 1, function(init){
		  return function Int8Array(data, byteOffset, length){
		    return init(this, data, byteOffset, length);
		  };
		});
	
	/***/ },
	/* 236 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		if(__webpack_require__(4)){
		  var LIBRARY             = __webpack_require__(26)
		    , global              = __webpack_require__(2)
		    , fails               = __webpack_require__(5)
		    , $export             = __webpack_require__(6)
		    , $typed              = __webpack_require__(232)
		    , $buffer             = __webpack_require__(233)
		    , ctx                 = __webpack_require__(18)
		    , anInstance          = __webpack_require__(197)
		    , propertyDesc        = __webpack_require__(15)
		    , hide                = __webpack_require__(8)
		    , redefineAll         = __webpack_require__(202)
		    , toInteger           = __webpack_require__(36)
		    , toLength            = __webpack_require__(35)
		    , toIndex             = __webpack_require__(37)
		    , toPrimitive         = __webpack_require__(14)
		    , has                 = __webpack_require__(3)
		    , same                = __webpack_require__(69)
		    , classof             = __webpack_require__(73)
		    , isObject            = __webpack_require__(11)
		    , toObject            = __webpack_require__(56)
		    , isArrayIter         = __webpack_require__(154)
		    , create              = __webpack_require__(44)
		    , getPrototypeOf      = __webpack_require__(57)
		    , gOPN                = __webpack_require__(48).f
		    , getIterFn           = __webpack_require__(156)
		    , uid                 = __webpack_require__(17)
		    , wks                 = __webpack_require__(23)
		    , createArrayMethod   = __webpack_require__(164)
		    , createArrayIncludes = __webpack_require__(34)
		    , speciesConstructor  = __webpack_require__(199)
		    , ArrayIterators      = __webpack_require__(183)
		    , Iterators           = __webpack_require__(135)
		    , $iterDetect         = __webpack_require__(157)
		    , setSpecies          = __webpack_require__(186)
		    , arrayFill           = __webpack_require__(180)
		    , arrayCopyWithin     = __webpack_require__(177)
		    , $DP                 = __webpack_require__(9)
		    , $GOPD               = __webpack_require__(49)
		    , dP                  = $DP.f
		    , gOPD                = $GOPD.f
		    , RangeError          = global.RangeError
		    , TypeError           = global.TypeError
		    , Uint8Array          = global.Uint8Array
		    , ARRAY_BUFFER        = 'ArrayBuffer'
		    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
		    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
		    , PROTOTYPE           = 'prototype'
		    , ArrayProto          = Array[PROTOTYPE]
		    , $ArrayBuffer        = $buffer.ArrayBuffer
		    , $DataView           = $buffer.DataView
		    , arrayForEach        = createArrayMethod(0)
		    , arrayFilter         = createArrayMethod(2)
		    , arraySome           = createArrayMethod(3)
		    , arrayEvery          = createArrayMethod(4)
		    , arrayFind           = createArrayMethod(5)
		    , arrayFindIndex      = createArrayMethod(6)
		    , arrayIncludes       = createArrayIncludes(true)
		    , arrayIndexOf        = createArrayIncludes(false)
		    , arrayValues         = ArrayIterators.values
		    , arrayKeys           = ArrayIterators.keys
		    , arrayEntries        = ArrayIterators.entries
		    , arrayLastIndexOf    = ArrayProto.lastIndexOf
		    , arrayReduce         = ArrayProto.reduce
		    , arrayReduceRight    = ArrayProto.reduceRight
		    , arrayJoin           = ArrayProto.join
		    , arraySort           = ArrayProto.sort
		    , arraySlice          = ArrayProto.slice
		    , arrayToString       = ArrayProto.toString
		    , arrayToLocaleString = ArrayProto.toLocaleString
		    , ITERATOR            = wks('iterator')
		    , TAG                 = wks('toStringTag')
		    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
		    , DEF_CONSTRUCTOR     = uid('def_constructor')
		    , ALL_CONSTRUCTORS    = $typed.CONSTR
		    , TYPED_ARRAY         = $typed.TYPED
		    , VIEW                = $typed.VIEW
		    , WRONG_LENGTH        = 'Wrong length!';
	
		  var $map = createArrayMethod(1, function(O, length){
		    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
		  });
	
		  var LITTLE_ENDIAN = fails(function(){
		    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
		  });
	
		  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
		    new Uint8Array(1).set({});
		  });
	
		  var strictToLength = function(it, SAME){
		    if(it === undefined)throw TypeError(WRONG_LENGTH);
		    var number = +it
		      , length = toLength(it);
		    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
		    return length;
		  };
	
		  var toOffset = function(it, BYTES){
		    var offset = toInteger(it);
		    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
		    return offset;
		  };
	
		  var validate = function(it){
		    if(isObject(it) && TYPED_ARRAY in it)return it;
		    throw TypeError(it + ' is not a typed array!');
		  };
	
		  var allocate = function(C, length){
		    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
		      throw TypeError('It is not a typed array constructor!');
		    } return new C(length);
		  };
	
		  var speciesFromList = function(O, list){
		    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
		  };
	
		  var fromList = function(C, list){
		    var index  = 0
		      , length = list.length
		      , result = allocate(C, length);
		    while(length > index)result[index] = list[index++];
		    return result;
		  };
	
		  var addGetter = function(it, key, internal){
		    dP(it, key, {get: function(){ return this._d[internal]; }});
		  };
	
		  var $from = function from(source /*, mapfn, thisArg */){
		    var O       = toObject(source)
		      , aLen    = arguments.length
		      , mapfn   = aLen > 1 ? arguments[1] : undefined
		      , mapping = mapfn !== undefined
		      , iterFn  = getIterFn(O)
		      , i, length, values, result, step, iterator;
		    if(iterFn != undefined && !isArrayIter(iterFn)){
		      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
		        values.push(step.value);
		      } O = values;
		    }
		    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
		    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
		      result[i] = mapping ? mapfn(O[i], i) : O[i];
		    }
		    return result;
		  };
	
		  var $of = function of(/*...items*/){
		    var index  = 0
		      , length = arguments.length
		      , result = allocate(this, length);
		    while(length > index)result[index] = arguments[index++];
		    return result;
		  };
	
		  // iOS Safari 6.x fails here
		  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
		  var $toLocaleString = function toLocaleString(){
		    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
		  };
	
		  var proto = {
		    copyWithin: function copyWithin(target, start /*, end */){
		      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
		    },
		    every: function every(callbackfn /*, thisArg */){
		      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
		    },
		    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
		      return arrayFill.apply(validate(this), arguments);
		    },
		    filter: function filter(callbackfn /*, thisArg */){
		      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
		        arguments.length > 1 ? arguments[1] : undefined));
		    },
		    find: function find(predicate /*, thisArg */){
		      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
		    },
		    findIndex: function findIndex(predicate /*, thisArg */){
		      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
		    },
		    forEach: function forEach(callbackfn /*, thisArg */){
		      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
		    },
		    indexOf: function indexOf(searchElement /*, fromIndex */){
		      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
		    },
		    includes: function includes(searchElement /*, fromIndex */){
		      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
		    },
		    join: function join(separator){ // eslint-disable-line no-unused-vars
		      return arrayJoin.apply(validate(this), arguments);
		    },
		    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
		      return arrayLastIndexOf.apply(validate(this), arguments);
		    },
		    map: function map(mapfn /*, thisArg */){
		      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
		    },
		    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
		      return arrayReduce.apply(validate(this), arguments);
		    },
		    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
		      return arrayReduceRight.apply(validate(this), arguments);
		    },
		    reverse: function reverse(){
		      var that   = this
		        , length = validate(that).length
		        , middle = Math.floor(length / 2)
		        , index  = 0
		        , value;
		      while(index < middle){
		        value         = that[index];
		        that[index++] = that[--length];
		        that[length]  = value;
		      } return that;
		    },
		    some: function some(callbackfn /*, thisArg */){
		      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
		    },
		    sort: function sort(comparefn){
		      return arraySort.call(validate(this), comparefn);
		    },
		    subarray: function subarray(begin, end){
		      var O      = validate(this)
		        , length = O.length
		        , $begin = toIndex(begin, length);
		      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
		        O.buffer,
		        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
		        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
		      );
		    }
		  };
	
		  var $slice = function slice(start, end){
		    return speciesFromList(this, arraySlice.call(validate(this), start, end));
		  };
	
		  var $set = function set(arrayLike /*, offset */){
		    validate(this);
		    var offset = toOffset(arguments[1], 1)
		      , length = this.length
		      , src    = toObject(arrayLike)
		      , len    = toLength(src.length)
		      , index  = 0;
		    if(len + offset > length)throw RangeError(WRONG_LENGTH);
		    while(index < len)this[offset + index] = src[index++];
		  };
	
		  var $iterators = {
		    entries: function entries(){
		      return arrayEntries.call(validate(this));
		    },
		    keys: function keys(){
		      return arrayKeys.call(validate(this));
		    },
		    values: function values(){
		      return arrayValues.call(validate(this));
		    }
		  };
	
		  var isTAIndex = function(target, key){
		    return isObject(target)
		      && target[TYPED_ARRAY]
		      && typeof key != 'symbol'
		      && key in target
		      && String(+key) == String(key);
		  };
		  var $getDesc = function getOwnPropertyDescriptor(target, key){
		    return isTAIndex(target, key = toPrimitive(key, true))
		      ? propertyDesc(2, target[key])
		      : gOPD(target, key);
		  };
		  var $setDesc = function defineProperty(target, key, desc){
		    if(isTAIndex(target, key = toPrimitive(key, true))
		      && isObject(desc)
		      && has(desc, 'value')
		      && !has(desc, 'get')
		      && !has(desc, 'set')
		      // TODO: add validation descriptor w/o calling accessors
		      && !desc.configurable
		      && (!has(desc, 'writable') || desc.writable)
		      && (!has(desc, 'enumerable') || desc.enumerable)
		    ){
		      target[key] = desc.value;
		      return target;
		    } else return dP(target, key, desc);
		  };
	
		  if(!ALL_CONSTRUCTORS){
		    $GOPD.f = $getDesc;
		    $DP.f   = $setDesc;
		  }
	
		  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
		    getOwnPropertyDescriptor: $getDesc,
		    defineProperty:           $setDesc
		  });
	
		  if(fails(function(){ arrayToString.call({}); })){
		    arrayToString = arrayToLocaleString = function toString(){
		      return arrayJoin.call(this);
		    }
		  }
	
		  var $TypedArrayPrototype$ = redefineAll({}, proto);
		  redefineAll($TypedArrayPrototype$, $iterators);
		  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
		  redefineAll($TypedArrayPrototype$, {
		    slice:          $slice,
		    set:            $set,
		    constructor:    function(){ /* noop */ },
		    toString:       arrayToString,
		    toLocaleString: $toLocaleString
		  });
		  addGetter($TypedArrayPrototype$, 'buffer', 'b');
		  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
		  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
		  addGetter($TypedArrayPrototype$, 'length', 'e');
		  dP($TypedArrayPrototype$, TAG, {
		    get: function(){ return this[TYPED_ARRAY]; }
		  });
	
		  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
		    CLAMPED = !!CLAMPED;
		    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
		      , ISNT_UINT8 = NAME != 'Uint8Array'
		      , GETTER     = 'get' + KEY
		      , SETTER     = 'set' + KEY
		      , TypedArray = global[NAME]
		      , Base       = TypedArray || {}
		      , TAC        = TypedArray && getPrototypeOf(TypedArray)
		      , FORCED     = !TypedArray || !$typed.ABV
		      , O          = {}
		      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
		    var getter = function(that, index){
		      var data = that._d;
		      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
		    };
		    var setter = function(that, index, value){
		      var data = that._d;
		      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
		      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
		    };
		    var addElement = function(that, index){
		      dP(that, index, {
		        get: function(){
		          return getter(this, index);
		        },
		        set: function(value){
		          return setter(this, index, value);
		        },
		        enumerable: true
		      });
		    };
		    if(FORCED){
		      TypedArray = wrapper(function(that, data, $offset, $length){
		        anInstance(that, TypedArray, NAME, '_d');
		        var index  = 0
		          , offset = 0
		          , buffer, byteLength, length, klass;
		        if(!isObject(data)){
		          length     = strictToLength(data, true)
		          byteLength = length * BYTES;
		          buffer     = new $ArrayBuffer(byteLength);
		        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
		          buffer = data;
		          offset = toOffset($offset, BYTES);
		          var $len = data.byteLength;
		          if($length === undefined){
		            if($len % BYTES)throw RangeError(WRONG_LENGTH);
		            byteLength = $len - offset;
		            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
		          } else {
		            byteLength = toLength($length) * BYTES;
		            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
		          }
		          length = byteLength / BYTES;
		        } else if(TYPED_ARRAY in data){
		          return fromList(TypedArray, data);
		        } else {
		          return $from.call(TypedArray, data);
		        }
		        hide(that, '_d', {
		          b: buffer,
		          o: offset,
		          l: byteLength,
		          e: length,
		          v: new $DataView(buffer)
		        });
		        while(index < length)addElement(that, index++);
		      });
		      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
		      hide(TypedArrayPrototype, 'constructor', TypedArray);
		    } else if(!$iterDetect(function(iter){
		      // V8 works with iterators, but fails in many other cases
		      // https://code.google.com/p/v8/issues/detail?id=4552
		      new TypedArray(null); // eslint-disable-line no-new
		      new TypedArray(iter); // eslint-disable-line no-new
		    }, true)){
		      TypedArray = wrapper(function(that, data, $offset, $length){
		        anInstance(that, TypedArray, NAME);
		        var klass;
		        // `ws` module bug, temporarily remove validation length for Uint8Array
		        // https://github.com/websockets/ws/pull/645
		        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
		        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
		          return $length !== undefined
		            ? new Base(data, toOffset($offset, BYTES), $length)
		            : $offset !== undefined
		              ? new Base(data, toOffset($offset, BYTES))
		              : new Base(data);
		        }
		        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
		        return $from.call(TypedArray, data);
		      });
		      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
		        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
		      });
		      TypedArray[PROTOTYPE] = TypedArrayPrototype;
		      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
		    }
		    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
		      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
		      , $iterator         = $iterators.values;
		    hide(TypedArray, TYPED_CONSTRUCTOR, true);
		    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
		    hide(TypedArrayPrototype, VIEW, true);
		    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
		    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
		      dP(TypedArrayPrototype, TAG, {
		        get: function(){ return NAME; }
		      });
		    }
	
		    O[NAME] = TypedArray;
	
		    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
		    $export($export.S, NAME, {
		      BYTES_PER_ELEMENT: BYTES,
		      from: $from,
		      of: $of
		    });
	
		    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
		    $export($export.P, NAME, proto);
	
		    setSpecies(NAME);
	
		    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
		    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
		    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
		    $export($export.P + $export.F * fails(function(){
		      new TypedArray(1).slice();
		    }), NAME, {slice: $slice});
	
		    $export($export.P + $export.F * (fails(function(){
		      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
		    }) || !fails(function(){
		      TypedArrayPrototype.toLocaleString.call([1, 2]);
		    })), NAME, {toLocaleString: $toLocaleString});
	
		    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
		    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
		  };
		} else module.exports = function(){ /* empty */ };
	
	/***/ },
	/* 237 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(236)('Uint8', 1, function(init){
		  return function Uint8Array(data, byteOffset, length){
		    return init(this, data, byteOffset, length);
		  };
		});
	
	/***/ },
	/* 238 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(236)('Uint8', 1, function(init){
		  return function Uint8ClampedArray(data, byteOffset, length){
		    return init(this, data, byteOffset, length);
		  };
		}, true);
	
	/***/ },
	/* 239 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(236)('Int16', 2, function(init){
		  return function Int16Array(data, byteOffset, length){
		    return init(this, data, byteOffset, length);
		  };
		});
	
	/***/ },
	/* 240 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(236)('Uint16', 2, function(init){
		  return function Uint16Array(data, byteOffset, length){
		    return init(this, data, byteOffset, length);
		  };
		});
	
	/***/ },
	/* 241 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(236)('Int32', 4, function(init){
		  return function Int32Array(data, byteOffset, length){
		    return init(this, data, byteOffset, length);
		  };
		});
	
	/***/ },
	/* 242 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(236)('Uint32', 4, function(init){
		  return function Uint32Array(data, byteOffset, length){
		    return init(this, data, byteOffset, length);
		  };
		});
	
	/***/ },
	/* 243 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(236)('Float32', 4, function(init){
		  return function Float32Array(data, byteOffset, length){
		    return init(this, data, byteOffset, length);
		  };
		});
	
	/***/ },
	/* 244 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(236)('Float64', 8, function(init){
		  return function Float64Array(data, byteOffset, length){
		    return init(this, data, byteOffset, length);
		  };
		});
	
	/***/ },
	/* 245 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// https://github.com/tc39/Array.prototype.includes
		var $export   = __webpack_require__(6)
		  , $includes = __webpack_require__(34)(true);
	
		$export($export.P, 'Array', {
		  includes: function includes(el /*, fromIndex = 0 */){
		    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
		  }
		});
	
		__webpack_require__(178)('includes');
	
	/***/ },
	/* 246 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// https://github.com/mathiasbynens/String.prototype.at
		var $export = __webpack_require__(6)
		  , $at     = __webpack_require__(125)(true);
	
		$export($export.P, 'String', {
		  at: function at(pos){
		    return $at(this, pos);
		  }
		});
	
	/***/ },
	/* 247 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// https://github.com/tc39/proposal-string-pad-start-end
		var $export = __webpack_require__(6)
		  , $pad    = __webpack_require__(248);
	
		$export($export.P, 'String', {
		  padStart: function padStart(maxLength /*, fillString = ' ' */){
		    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
		  }
		});
	
	/***/ },
	/* 248 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/tc39/proposal-string-pad-start-end
		var toLength = __webpack_require__(35)
		  , repeat   = __webpack_require__(85)
		  , defined  = __webpack_require__(33);
	
		module.exports = function(that, maxLength, fillString, left){
		  var S            = String(defined(that))
		    , stringLength = S.length
		    , fillStr      = fillString === undefined ? ' ' : String(fillString)
		    , intMaxLength = toLength(maxLength);
		  if(intMaxLength <= stringLength || fillStr == '')return S;
		  var fillLen = intMaxLength - stringLength
		    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
		  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
		  return left ? stringFiller + S : S + stringFiller;
		};
	
	
	/***/ },
	/* 249 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// https://github.com/tc39/proposal-string-pad-start-end
		var $export = __webpack_require__(6)
		  , $pad    = __webpack_require__(248);
	
		$export($export.P, 'String', {
		  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
		    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
		  }
		});
	
	/***/ },
	/* 250 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
		__webpack_require__(81)('trimLeft', function($trim){
		  return function trimLeft(){
		    return $trim(this, 1);
		  };
		}, 'trimStart');
	
	/***/ },
	/* 251 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
		__webpack_require__(81)('trimRight', function($trim){
		  return function trimRight(){
		    return $trim(this, 2);
		  };
		}, 'trimEnd');
	
	/***/ },
	/* 252 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// https://tc39.github.io/String.prototype.matchAll/
		var $export     = __webpack_require__(6)
		  , defined     = __webpack_require__(33)
		  , toLength    = __webpack_require__(35)
		  , isRegExp    = __webpack_require__(128)
		  , getFlags    = __webpack_require__(188)
		  , RegExpProto = RegExp.prototype;
	
		var $RegExpStringIterator = function(regexp, string){
		  this._r = regexp;
		  this._s = string;
		};
	
		__webpack_require__(136)($RegExpStringIterator, 'RegExp String', function next(){
		  var match = this._r.exec(this._s);
		  return {value: match, done: match === null};
		});
	
		$export($export.P, 'String', {
		  matchAll: function matchAll(regexp){
		    defined(this);
		    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
		    var S     = String(this)
		      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
		      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
		    rx.lastIndex = toLength(regexp.lastIndex);
		    return new $RegExpStringIterator(rx, S);
		  }
		});
	
	/***/ },
	/* 253 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(25)('asyncIterator');
	
	/***/ },
	/* 254 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(25)('observable');
	
	/***/ },
	/* 255 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/tc39/proposal-object-getownpropertydescriptors
		var $export        = __webpack_require__(6)
		  , ownKeys        = __webpack_require__(221)
		  , toIObject      = __webpack_require__(30)
		  , gOPD           = __webpack_require__(49)
		  , createProperty = __webpack_require__(155);
	
		$export($export.S, 'Object', {
		  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
		    var O       = toIObject(object)
		      , getDesc = gOPD.f
		      , keys    = ownKeys(O)
		      , result  = {}
		      , i       = 0
		      , key;
		    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
		    return result;
		  }
		});
	
	/***/ },
	/* 256 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/tc39/proposal-object-values-entries
		var $export = __webpack_require__(6)
		  , $values = __webpack_require__(257)(false);
	
		$export($export.S, 'Object', {
		  values: function values(it){
		    return $values(it);
		  }
		});
	
	/***/ },
	/* 257 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getKeys   = __webpack_require__(28)
		  , toIObject = __webpack_require__(30)
		  , isEnum    = __webpack_require__(42).f;
		module.exports = function(isEntries){
		  return function(it){
		    var O      = toIObject(it)
		      , keys   = getKeys(O)
		      , length = keys.length
		      , i      = 0
		      , result = []
		      , key;
		    while(length > i)if(isEnum.call(O, key = keys[i++])){
		      result.push(isEntries ? [key, O[key]] : O[key]);
		    } return result;
		  };
		};
	
	/***/ },
	/* 258 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/tc39/proposal-object-values-entries
		var $export  = __webpack_require__(6)
		  , $entries = __webpack_require__(257)(true);
	
		$export($export.S, 'Object', {
		  entries: function entries(it){
		    return $entries(it);
		  }
		});
	
	/***/ },
	/* 259 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export         = __webpack_require__(6)
		  , toObject        = __webpack_require__(56)
		  , aFunction       = __webpack_require__(19)
		  , $defineProperty = __webpack_require__(9);
	
		// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
		__webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
		  __defineGetter__: function __defineGetter__(P, getter){
		    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
		  }
		});
	
	/***/ },
	/* 260 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Forced replacement prototype accessors methods
		module.exports = __webpack_require__(26)|| !__webpack_require__(5)(function(){
		  var K = Math.random();
		  // In FF throws only define methods
		  __defineSetter__.call(null, K, function(){ /* empty */});
		  delete __webpack_require__(2)[K];
		});
	
	/***/ },
	/* 261 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export         = __webpack_require__(6)
		  , toObject        = __webpack_require__(56)
		  , aFunction       = __webpack_require__(19)
		  , $defineProperty = __webpack_require__(9);
	
		// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
		__webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
		  __defineSetter__: function __defineSetter__(P, setter){
		    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
		  }
		});
	
	/***/ },
	/* 262 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export                  = __webpack_require__(6)
		  , toObject                 = __webpack_require__(56)
		  , toPrimitive              = __webpack_require__(14)
		  , getPrototypeOf           = __webpack_require__(57)
		  , getOwnPropertyDescriptor = __webpack_require__(49).f;
	
		// B.2.2.4 Object.prototype.__lookupGetter__(P)
		__webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
		  __lookupGetter__: function __lookupGetter__(P){
		    var O = toObject(this)
		      , K = toPrimitive(P, true)
		      , D;
		    do {
		      if(D = getOwnPropertyDescriptor(O, K))return D.get;
		    } while(O = getPrototypeOf(O));
		  }
		});
	
	/***/ },
	/* 263 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $export                  = __webpack_require__(6)
		  , toObject                 = __webpack_require__(56)
		  , toPrimitive              = __webpack_require__(14)
		  , getPrototypeOf           = __webpack_require__(57)
		  , getOwnPropertyDescriptor = __webpack_require__(49).f;
	
		// B.2.2.5 Object.prototype.__lookupSetter__(P)
		__webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
		  __lookupSetter__: function __lookupSetter__(P){
		    var O = toObject(this)
		      , K = toPrimitive(P, true)
		      , D;
		    do {
		      if(D = getOwnPropertyDescriptor(O, K))return D.set;
		    } while(O = getPrototypeOf(O));
		  }
		});
	
	/***/ },
	/* 264 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/DavidBruant/Map-Set.prototype.toJSON
		var $export  = __webpack_require__(6);
	
		$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(265)('Map')});
	
	/***/ },
	/* 265 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/DavidBruant/Map-Set.prototype.toJSON
		var classof = __webpack_require__(73)
		  , from    = __webpack_require__(266);
		module.exports = function(NAME){
		  return function toJSON(){
		    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
		    return from(this);
		  };
		};
	
	/***/ },
	/* 266 */
	/***/ function(module, exports, __webpack_require__) {
	
		var forOf = __webpack_require__(198);
	
		module.exports = function(iter, ITERATOR){
		  var result = [];
		  forOf(iter, false, result.push, result, ITERATOR);
		  return result;
		};
	
	
	/***/ },
	/* 267 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/DavidBruant/Map-Set.prototype.toJSON
		var $export  = __webpack_require__(6);
	
		$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(265)('Set')});
	
	/***/ },
	/* 268 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/ljharb/proposal-global
		var $export = __webpack_require__(6);
	
		$export($export.S, 'System', {global: __webpack_require__(2)});
	
	/***/ },
	/* 269 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/ljharb/proposal-is-error
		var $export = __webpack_require__(6)
		  , cof     = __webpack_require__(32);
	
		$export($export.S, 'Error', {
		  isError: function isError(it){
		    return cof(it) === 'Error';
		  }
		});
	
	/***/ },
	/* 270 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Math', {
		  iaddh: function iaddh(x0, x1, y0, y1){
		    var $x0 = x0 >>> 0
		      , $x1 = x1 >>> 0
		      , $y0 = y0 >>> 0;
		    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
		  }
		});
	
	/***/ },
	/* 271 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Math', {
		  isubh: function isubh(x0, x1, y0, y1){
		    var $x0 = x0 >>> 0
		      , $x1 = x1 >>> 0
		      , $y0 = y0 >>> 0;
		    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
		  }
		});
	
	/***/ },
	/* 272 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Math', {
		  imulh: function imulh(u, v){
		    var UINT16 = 0xffff
		      , $u = +u
		      , $v = +v
		      , u0 = $u & UINT16
		      , v0 = $v & UINT16
		      , u1 = $u >> 16
		      , v1 = $v >> 16
		      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
		    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
		  }
		});
	
	/***/ },
	/* 273 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
		var $export = __webpack_require__(6);
	
		$export($export.S, 'Math', {
		  umulh: function umulh(u, v){
		    var UINT16 = 0xffff
		      , $u = +u
		      , $v = +v
		      , u0 = $u & UINT16
		      , v0 = $v & UINT16
		      , u1 = $u >>> 16
		      , v1 = $v >>> 16
		      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
		    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
		  }
		});
	
	/***/ },
	/* 274 */
	/***/ function(module, exports, __webpack_require__) {
	
		var metadata                  = __webpack_require__(275)
		  , anObject                  = __webpack_require__(10)
		  , toMetaKey                 = metadata.key
		  , ordinaryDefineOwnMetadata = metadata.set;
	
		metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
		  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
		}});
	
	/***/ },
	/* 275 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Map     = __webpack_require__(203)
		  , $export = __webpack_require__(6)
		  , shared  = __webpack_require__(21)('metadata')
		  , store   = shared.store || (shared.store = new (__webpack_require__(207)));
	
		var getOrCreateMetadataMap = function(target, targetKey, create){
		  var targetMetadata = store.get(target);
		  if(!targetMetadata){
		    if(!create)return undefined;
		    store.set(target, targetMetadata = new Map);
		  }
		  var keyMetadata = targetMetadata.get(targetKey);
		  if(!keyMetadata){
		    if(!create)return undefined;
		    targetMetadata.set(targetKey, keyMetadata = new Map);
		  } return keyMetadata;
		};
		var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
		  var metadataMap = getOrCreateMetadataMap(O, P, false);
		  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
		};
		var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
		  var metadataMap = getOrCreateMetadataMap(O, P, false);
		  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
		};
		var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
		  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
		};
		var ordinaryOwnMetadataKeys = function(target, targetKey){
		  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
		    , keys        = [];
		  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
		  return keys;
		};
		var toMetaKey = function(it){
		  return it === undefined || typeof it == 'symbol' ? it : String(it);
		};
		var exp = function(O){
		  $export($export.S, 'Reflect', O);
		};
	
		module.exports = {
		  store: store,
		  map: getOrCreateMetadataMap,
		  has: ordinaryHasOwnMetadata,
		  get: ordinaryGetOwnMetadata,
		  set: ordinaryDefineOwnMetadata,
		  keys: ordinaryOwnMetadataKeys,
		  key: toMetaKey,
		  exp: exp
		};
	
	/***/ },
	/* 276 */
	/***/ function(module, exports, __webpack_require__) {
	
		var metadata               = __webpack_require__(275)
		  , anObject               = __webpack_require__(10)
		  , toMetaKey              = metadata.key
		  , getOrCreateMetadataMap = metadata.map
		  , store                  = metadata.store;
	
		metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
		  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
		    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
		  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
		  if(metadataMap.size)return true;
		  var targetMetadata = store.get(target);
		  targetMetadata['delete'](targetKey);
		  return !!targetMetadata.size || store['delete'](target);
		}});
	
	/***/ },
	/* 277 */
	/***/ function(module, exports, __webpack_require__) {
	
		var metadata               = __webpack_require__(275)
		  , anObject               = __webpack_require__(10)
		  , getPrototypeOf         = __webpack_require__(57)
		  , ordinaryHasOwnMetadata = metadata.has
		  , ordinaryGetOwnMetadata = metadata.get
		  , toMetaKey              = metadata.key;
	
		var ordinaryGetMetadata = function(MetadataKey, O, P){
		  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
		  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
		  var parent = getPrototypeOf(O);
		  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
		};
	
		metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
		  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
		}});
	
	/***/ },
	/* 278 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Set                     = __webpack_require__(206)
		  , from                    = __webpack_require__(266)
		  , metadata                = __webpack_require__(275)
		  , anObject                = __webpack_require__(10)
		  , getPrototypeOf          = __webpack_require__(57)
		  , ordinaryOwnMetadataKeys = metadata.keys
		  , toMetaKey               = metadata.key;
	
		var ordinaryMetadataKeys = function(O, P){
		  var oKeys  = ordinaryOwnMetadataKeys(O, P)
		    , parent = getPrototypeOf(O);
		  if(parent === null)return oKeys;
		  var pKeys  = ordinaryMetadataKeys(parent, P);
		  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
		};
	
		metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
		  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
		}});
	
	/***/ },
	/* 279 */
	/***/ function(module, exports, __webpack_require__) {
	
		var metadata               = __webpack_require__(275)
		  , anObject               = __webpack_require__(10)
		  , ordinaryGetOwnMetadata = metadata.get
		  , toMetaKey              = metadata.key;
	
		metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
		  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
		    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
		}});
	
	/***/ },
	/* 280 */
	/***/ function(module, exports, __webpack_require__) {
	
		var metadata                = __webpack_require__(275)
		  , anObject                = __webpack_require__(10)
		  , ordinaryOwnMetadataKeys = metadata.keys
		  , toMetaKey               = metadata.key;
	
		metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
		  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
		}});
	
	/***/ },
	/* 281 */
	/***/ function(module, exports, __webpack_require__) {
	
		var metadata               = __webpack_require__(275)
		  , anObject               = __webpack_require__(10)
		  , getPrototypeOf         = __webpack_require__(57)
		  , ordinaryHasOwnMetadata = metadata.has
		  , toMetaKey              = metadata.key;
	
		var ordinaryHasMetadata = function(MetadataKey, O, P){
		  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
		  if(hasOwn)return true;
		  var parent = getPrototypeOf(O);
		  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
		};
	
		metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
		  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
		}});
	
	/***/ },
	/* 282 */
	/***/ function(module, exports, __webpack_require__) {
	
		var metadata               = __webpack_require__(275)
		  , anObject               = __webpack_require__(10)
		  , ordinaryHasOwnMetadata = metadata.has
		  , toMetaKey              = metadata.key;
	
		metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
		  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
		    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
		}});
	
	/***/ },
	/* 283 */
	/***/ function(module, exports, __webpack_require__) {
	
		var metadata                  = __webpack_require__(275)
		  , anObject                  = __webpack_require__(10)
		  , aFunction                 = __webpack_require__(19)
		  , toMetaKey                 = metadata.key
		  , ordinaryDefineOwnMetadata = metadata.set;
	
		metadata.exp({metadata: function metadata(metadataKey, metadataValue){
		  return function decorator(target, targetKey){
		    ordinaryDefineOwnMetadata(
		      metadataKey, metadataValue,
		      (targetKey !== undefined ? anObject : aFunction)(target),
		      toMetaKey(targetKey)
		    );
		  };
		}});
	
	/***/ },
	/* 284 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
		var $export   = __webpack_require__(6)
		  , microtask = __webpack_require__(201)()
		  , process   = __webpack_require__(2).process
		  , isNode    = __webpack_require__(32)(process) == 'process';
	
		$export($export.G, {
		  asap: function asap(fn){
		    var domain = isNode && process.domain;
		    microtask(domain ? domain.bind(fn) : fn);
		  }
		});
	
	/***/ },
	/* 285 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// https://github.com/zenparsing/es-observable
		var $export     = __webpack_require__(6)
		  , global      = __webpack_require__(2)
		  , core        = __webpack_require__(7)
		  , microtask   = __webpack_require__(201)()
		  , OBSERVABLE  = __webpack_require__(23)('observable')
		  , aFunction   = __webpack_require__(19)
		  , anObject    = __webpack_require__(10)
		  , anInstance  = __webpack_require__(197)
		  , redefineAll = __webpack_require__(202)
		  , hide        = __webpack_require__(8)
		  , forOf       = __webpack_require__(198)
		  , RETURN      = forOf.RETURN;
	
		var getMethod = function(fn){
		  return fn == null ? undefined : aFunction(fn);
		};
	
		var cleanupSubscription = function(subscription){
		  var cleanup = subscription._c;
		  if(cleanup){
		    subscription._c = undefined;
		    cleanup();
		  }
		};
	
		var subscriptionClosed = function(subscription){
		  return subscription._o === undefined;
		};
	
		var closeSubscription = function(subscription){
		  if(!subscriptionClosed(subscription)){
		    subscription._o = undefined;
		    cleanupSubscription(subscription);
		  }
		};
	
		var Subscription = function(observer, subscriber){
		  anObject(observer);
		  this._c = undefined;
		  this._o = observer;
		  observer = new SubscriptionObserver(this);
		  try {
		    var cleanup      = subscriber(observer)
		      , subscription = cleanup;
		    if(cleanup != null){
		      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
		      else aFunction(cleanup);
		      this._c = cleanup;
		    }
		  } catch(e){
		    observer.error(e);
		    return;
		  } if(subscriptionClosed(this))cleanupSubscription(this);
		};
	
		Subscription.prototype = redefineAll({}, {
		  unsubscribe: function unsubscribe(){ closeSubscription(this); }
		});
	
		var SubscriptionObserver = function(subscription){
		  this._s = subscription;
		};
	
		SubscriptionObserver.prototype = redefineAll({}, {
		  next: function next(value){
		    var subscription = this._s;
		    if(!subscriptionClosed(subscription)){
		      var observer = subscription._o;
		      try {
		        var m = getMethod(observer.next);
		        if(m)return m.call(observer, value);
		      } catch(e){
		        try {
		          closeSubscription(subscription);
		        } finally {
		          throw e;
		        }
		      }
		    }
		  },
		  error: function error(value){
		    var subscription = this._s;
		    if(subscriptionClosed(subscription))throw value;
		    var observer = subscription._o;
		    subscription._o = undefined;
		    try {
		      var m = getMethod(observer.error);
		      if(!m)throw value;
		      value = m.call(observer, value);
		    } catch(e){
		      try {
		        cleanupSubscription(subscription);
		      } finally {
		        throw e;
		      }
		    } cleanupSubscription(subscription);
		    return value;
		  },
		  complete: function complete(value){
		    var subscription = this._s;
		    if(!subscriptionClosed(subscription)){
		      var observer = subscription._o;
		      subscription._o = undefined;
		      try {
		        var m = getMethod(observer.complete);
		        value = m ? m.call(observer, value) : undefined;
		      } catch(e){
		        try {
		          cleanupSubscription(subscription);
		        } finally {
		          throw e;
		        }
		      } cleanupSubscription(subscription);
		      return value;
		    }
		  }
		});
	
		var $Observable = function Observable(subscriber){
		  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
		};
	
		redefineAll($Observable.prototype, {
		  subscribe: function subscribe(observer){
		    return new Subscription(observer, this._f);
		  },
		  forEach: function forEach(fn){
		    var that = this;
		    return new (core.Promise || global.Promise)(function(resolve, reject){
		      aFunction(fn);
		      var subscription = that.subscribe({
		        next : function(value){
		          try {
		            return fn(value);
		          } catch(e){
		            reject(e);
		            subscription.unsubscribe();
		          }
		        },
		        error: reject,
		        complete: resolve
		      });
		    });
		  }
		});
	
		redefineAll($Observable, {
		  from: function from(x){
		    var C = typeof this === 'function' ? this : $Observable;
		    var method = getMethod(anObject(x)[OBSERVABLE]);
		    if(method){
		      var observable = anObject(method.call(x));
		      return observable.constructor === C ? observable : new C(function(observer){
		        return observable.subscribe(observer);
		      });
		    }
		    return new C(function(observer){
		      var done = false;
		      microtask(function(){
		        if(!done){
		          try {
		            if(forOf(x, false, function(it){
		              observer.next(it);
		              if(done)return RETURN;
		            }) === RETURN)return;
		          } catch(e){
		            if(done)throw e;
		            observer.error(e);
		            return;
		          } observer.complete();
		        }
		      });
		      return function(){ done = true; };
		    });
		  },
		  of: function of(){
		    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
		    return new (typeof this === 'function' ? this : $Observable)(function(observer){
		      var done = false;
		      microtask(function(){
		        if(!done){
		          for(var i = 0; i < items.length; ++i){
		            observer.next(items[i]);
		            if(done)return;
		          } observer.complete();
		        }
		      });
		      return function(){ done = true; };
		    });
		  }
		});
	
		hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
		$export($export.G, {Observable: $Observable});
	
		__webpack_require__(186)('Observable');
	
	/***/ },
	/* 286 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(6)
		  , $task   = __webpack_require__(200);
		$export($export.G + $export.B, {
		  setImmediate:   $task.set,
		  clearImmediate: $task.clear
		});
	
	/***/ },
	/* 287 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $iterators    = __webpack_require__(183)
		  , redefine      = __webpack_require__(16)
		  , global        = __webpack_require__(2)
		  , hide          = __webpack_require__(8)
		  , Iterators     = __webpack_require__(135)
		  , wks           = __webpack_require__(23)
		  , ITERATOR      = wks('iterator')
		  , TO_STRING_TAG = wks('toStringTag')
		  , ArrayValues   = Iterators.Array;
	
		for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
		  var NAME       = collections[i]
		    , Collection = global[NAME]
		    , proto      = Collection && Collection.prototype
		    , key;
		  if(proto){
		    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
		    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
		    Iterators[NAME] = ArrayValues;
		    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
		  }
		}
	
	/***/ },
	/* 288 */
	/***/ function(module, exports, __webpack_require__) {
	
		// ie9- setTimeout & setInterval additional parameters fix
		var global     = __webpack_require__(2)
		  , $export    = __webpack_require__(6)
		  , invoke     = __webpack_require__(76)
		  , partial    = __webpack_require__(289)
		  , navigator  = global.navigator
		  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
		var wrap = function(set){
		  return MSIE ? function(fn, time /*, ...args */){
		    return set(invoke(
		      partial,
		      [].slice.call(arguments, 2),
		      typeof fn == 'function' ? fn : Function(fn)
		    ), time);
		  } : set;
		};
		$export($export.G + $export.B + $export.F * MSIE, {
		  setTimeout:  wrap(global.setTimeout),
		  setInterval: wrap(global.setInterval)
		});
	
	/***/ },
	/* 289 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var path      = __webpack_require__(290)
		  , invoke    = __webpack_require__(76)
		  , aFunction = __webpack_require__(19);
		module.exports = function(/* ...pargs */){
		  var fn     = aFunction(this)
		    , length = arguments.length
		    , pargs  = Array(length)
		    , i      = 0
		    , _      = path._
		    , holder = false;
		  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
		  return function(/* ...args */){
		    var that = this
		      , aLen = arguments.length
		      , j = 0, k = 0, args;
		    if(!holder && !aLen)return invoke(fn, pargs, that);
		    args = pargs.slice();
		    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
		    while(aLen > k)args.push(arguments[k++]);
		    return invoke(fn, args, that);
		  };
		};
	
	/***/ },
	/* 290 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(2);
	
	/***/ }
	/******/ ]);
	// CommonJS export
	if(typeof module != 'undefined' && module.exports)module.exports = __e;
	// RequireJS export
	else if(true)!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return __e}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	// Export to global object
	else __g.core = __e;
	}(1, 1);

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	* @license
	* Copyright Google Inc. All Rights Reserved.
	*
	* Use of this source code is governed by an MIT-style license that can be
	* found in the LICENSE file at https://angular.io/license
	*/
	(function (global, factory) {
	     true ? factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (factory());
	}(this, (function () { 'use strict';
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	
	
	var Zone$1 = (function (global) {
	    if (global.Zone) {
	        throw new Error('Zone already loaded.');
	    }
	    var Zone = (function () {
	        function Zone(parent, zoneSpec) {
	            this._properties = null;
	            this._parent = parent;
	            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
	            this._properties = zoneSpec && zoneSpec.properties || {};
	            this._zoneDelegate =
	                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
	        }
	        Zone.assertZonePatched = function () {
	            if (global.Promise !== ZoneAwarePromise) {
	                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
	                    'has been overwritten.\n' +
	                    'Most likely cause is that a Promise polyfill has been loaded ' +
	                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
	                    'If you must load one, do so before loading zone.js.)');
	            }
	        };
	        Object.defineProperty(Zone, "current", {
	            get: function () {
	                return _currentZone;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone, "currentTask", {
	            get: function () {
	                return _currentTask;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone.prototype, "parent", {
	            get: function () {
	                return this._parent;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone.prototype, "name", {
	            get: function () {
	                return this._name;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Zone.prototype.get = function (key) {
	            var zone = this.getZoneWith(key);
	            if (zone)
	                return zone._properties[key];
	        };
	        Zone.prototype.getZoneWith = function (key) {
	            var current = this;
	            while (current) {
	                if (current._properties.hasOwnProperty(key)) {
	                    return current;
	                }
	                current = current._parent;
	            }
	            return null;
	        };
	        Zone.prototype.fork = function (zoneSpec) {
	            if (!zoneSpec)
	                throw new Error('ZoneSpec required!');
	            return this._zoneDelegate.fork(this, zoneSpec);
	        };
	        Zone.prototype.wrap = function (callback, source) {
	            if (typeof callback !== 'function') {
	                throw new Error('Expecting function got: ' + callback);
	            }
	            var _callback = this._zoneDelegate.intercept(this, callback, source);
	            var zone = this;
	            return function () {
	                return zone.runGuarded(_callback, this, arguments, source);
	            };
	        };
	        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                try {
	                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
	            task.runCount++;
	            if (task.zone != this)
	                throw new Error('A task can only be run in the zone which created it! (Creation: ' + task.zone.name +
	                    '; Execution: ' + this.name + ')');
	            var previousTask = _currentTask;
	            _currentTask = task;
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                if (task.type == 'macroTask' && task.data && !task.data.isPeriodic) {
	                    task.cancelFn = null;
	                }
	                try {
	                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	                _currentTask = previousTask;
	            }
	        };
	        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('microTask', this, source, callback, data, customSchedule, null));
	        };
	        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('macroTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('eventTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.cancelTask = function (task) {
	            var value = this._zoneDelegate.cancelTask(this, task);
	            task.runCount = -1;
	            task.cancelFn = null;
	            return value;
	        };
	        Zone.__symbol__ = __symbol__;
	        return Zone;
	    }());
	    
	    var ZoneDelegate = (function () {
	        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
	            this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 };
	            this.zone = zone;
	            this._parentDelegate = parentDelegate;
	            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
	            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
	            this._interceptZS =
	                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
	            this._interceptDlgt =
	                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
	            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
	            this._invokeDlgt =
	                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
	            this._handleErrorZS =
	                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
	            this._handleErrorDlgt =
	                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
	            this._scheduleTaskZS =
	                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
	            this._scheduleTaskDlgt =
	                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
	            this._invokeTaskZS =
	                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
	            this._invokeTaskDlgt =
	                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
	            this._cancelTaskZS =
	                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
	            this._cancelTaskDlgt =
	                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
	            this._hasTaskZS = zoneSpec && (zoneSpec.onHasTask ? zoneSpec : parentDelegate._hasTaskZS);
	            this._hasTaskDlgt =
	                zoneSpec && (zoneSpec.onHasTask ? parentDelegate : parentDelegate._hasTaskDlgt);
	        }
	        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
	            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
	                new Zone(targetZone, zoneSpec);
	        };
	        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
	            return this._interceptZS ?
	                this._interceptZS.onIntercept(this._interceptDlgt, this.zone, targetZone, callback, source) :
	                callback;
	        };
	        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
	            return this._invokeZS ?
	                this._invokeZS.onInvoke(this._invokeDlgt, this.zone, targetZone, callback, applyThis, applyArgs, source) :
	                callback.apply(applyThis, applyArgs);
	        };
	        ZoneDelegate.prototype.handleError = function (targetZone, error) {
	            return this._handleErrorZS ?
	                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this.zone, targetZone, error) :
	                true;
	        };
	        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
	            try {
	                if (this._scheduleTaskZS) {
	                    return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this.zone, targetZone, task);
	                }
	                else if (task.scheduleFn) {
	                    task.scheduleFn(task);
	                }
	                else if (task.type == 'microTask') {
	                    scheduleMicroTask(task);
	                }
	                else {
	                    throw new Error('Task is missing scheduleFn.');
	                }
	                return task;
	            }
	            finally {
	                if (targetZone == this.zone) {
	                    this._updateTaskCount(task.type, 1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
	            try {
	                return this._invokeTaskZS ?
	                    this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this.zone, targetZone, task, applyThis, applyArgs) :
	                    task.callback.apply(applyThis, applyArgs);
	            }
	            finally {
	                if (targetZone == this.zone && (task.type != 'eventTask') &&
	                    !(task.data && task.data.isPeriodic)) {
	                    this._updateTaskCount(task.type, -1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
	            var value;
	            if (this._cancelTaskZS) {
	                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this.zone, targetZone, task);
	            }
	            else if (!task.cancelFn) {
	                throw new Error('Task does not support cancellation, or is already canceled.');
	            }
	            else {
	                value = task.cancelFn(task);
	            }
	            if (targetZone == this.zone) {
	                // this should not be in the finally block, because exceptions assume not canceled.
	                this._updateTaskCount(task.type, -1);
	            }
	            return value;
	        };
	        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
	            return this._hasTaskZS &&
	                this._hasTaskZS.onHasTask(this._hasTaskDlgt, this.zone, targetZone, isEmpty);
	        };
	        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
	            var counts = this._taskCounts;
	            var prev = counts[type];
	            var next = counts[type] = prev + count;
	            if (next < 0) {
	                throw new Error('More tasks executed then were scheduled.');
	            }
	            if (prev == 0 || next == 0) {
	                var isEmpty = {
	                    microTask: counts.microTask > 0,
	                    macroTask: counts.macroTask > 0,
	                    eventTask: counts.eventTask > 0,
	                    change: type
	                };
	                try {
	                    this.hasTask(this.zone, isEmpty);
	                }
	                finally {
	                    if (this._parentDelegate) {
	                        this._parentDelegate._updateTaskCount(type, count);
	                    }
	                }
	            }
	        };
	        return ZoneDelegate;
	    }());
	    var ZoneTask = (function () {
	        function ZoneTask(type, zone, source, callback, options, scheduleFn, cancelFn) {
	            this.runCount = 0;
	            this.type = type;
	            this.zone = zone;
	            this.source = source;
	            this.data = options;
	            this.scheduleFn = scheduleFn;
	            this.cancelFn = cancelFn;
	            this.callback = callback;
	            var self = this;
	            this.invoke = function () {
	                _numberOfNestedTaskFrames++;
	                try {
	                    return zone.runTask(self, this, arguments);
	                }
	                finally {
	                    if (_numberOfNestedTaskFrames == 1) {
	                        drainMicroTaskQueue();
	                    }
	                    _numberOfNestedTaskFrames--;
	                }
	            };
	        }
	        ZoneTask.prototype.toString = function () {
	            if (this.data && typeof this.data.handleId !== 'undefined') {
	                return this.data.handleId;
	            }
	            else {
	                return Object.prototype.toString.call(this);
	            }
	        };
	        return ZoneTask;
	    }());
	    function __symbol__(name) {
	        return '__zone_symbol__' + name;
	    }
	    
	    var symbolSetTimeout = __symbol__('setTimeout');
	    var symbolPromise = __symbol__('Promise');
	    var symbolThen = __symbol__('then');
	    var _currentZone = new Zone(null, null);
	    var _currentTask = null;
	    var _microTaskQueue = [];
	    var _isDrainingMicrotaskQueue = false;
	    var _uncaughtPromiseErrors = [];
	    var _numberOfNestedTaskFrames = 0;
	    function scheduleQueueDrain() {
	        // if we are not running in any task, and there has not been anything scheduled
	        // we must bootstrap the initial task creation by manually scheduling the drain
	        if (_numberOfNestedTaskFrames == 0 && _microTaskQueue.length == 0) {
	            // We are not running in Task, so we need to kickstart the microtask queue.
	            if (global[symbolPromise]) {
	                global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
	            }
	            else {
	                global[symbolSetTimeout](drainMicroTaskQueue, 0);
	            }
	        }
	    }
	    function scheduleMicroTask(task) {
	        scheduleQueueDrain();
	        _microTaskQueue.push(task);
	    }
	    function consoleError(e) {
	        var rejection = e && e.rejection;
	        if (rejection) {
	            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
	        }
	        console.error(e);
	    }
	    function drainMicroTaskQueue() {
	        if (!_isDrainingMicrotaskQueue) {
	            _isDrainingMicrotaskQueue = true;
	            while (_microTaskQueue.length) {
	                var queue = _microTaskQueue;
	                _microTaskQueue = [];
	                for (var i = 0; i < queue.length; i++) {
	                    var task = queue[i];
	                    try {
	                        task.zone.runTask(task, null, null);
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                }
	            }
	            while (_uncaughtPromiseErrors.length) {
	                var _loop_1 = function() {
	                    var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
	                    try {
	                        uncaughtPromiseError.zone.runGuarded(function () {
	                            throw uncaughtPromiseError;
	                        });
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                };
	                while (_uncaughtPromiseErrors.length) {
	                    _loop_1();
	                }
	            }
	            _isDrainingMicrotaskQueue = false;
	        }
	    }
	    function isThenable(value) {
	        return value && value.then;
	    }
	    function forwardResolution(value) {
	        return value;
	    }
	    function forwardRejection(rejection) {
	        return ZoneAwarePromise.reject(rejection);
	    }
	    var symbolState = __symbol__('state');
	    var symbolValue = __symbol__('value');
	    var source = 'Promise.then';
	    var UNRESOLVED = null;
	    var RESOLVED = true;
	    var REJECTED = false;
	    var REJECTED_NO_CATCH = 0;
	    function makeResolver(promise, state) {
	        return function (v) {
	            resolvePromise(promise, state, v);
	            // Do not return value or you will break the Promise spec.
	        };
	    }
	    function resolvePromise(promise, state, value) {
	        if (promise[symbolState] === UNRESOLVED) {
	            if (value instanceof ZoneAwarePromise && value[symbolState] !== UNRESOLVED) {
	                clearRejectedNoCatch(value);
	                resolvePromise(promise, value[symbolState], value[symbolValue]);
	            }
	            else if (isThenable(value)) {
	                value.then(makeResolver(promise, state), makeResolver(promise, false));
	            }
	            else {
	                promise[symbolState] = state;
	                var queue = promise[symbolValue];
	                promise[symbolValue] = value;
	                for (var i = 0; i < queue.length;) {
	                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
	                }
	                if (queue.length == 0 && state == REJECTED) {
	                    promise[symbolState] = REJECTED_NO_CATCH;
	                    try {
	                        throw new Error('Uncaught (in promise): ' + value +
	                            (value && value.stack ? '\n' + value.stack : ''));
	                    }
	                    catch (e) {
	                        var error_1 = e;
	                        error_1.rejection = value;
	                        error_1.promise = promise;
	                        error_1.zone = Zone.current;
	                        error_1.task = Zone.currentTask;
	                        _uncaughtPromiseErrors.push(error_1);
	                        scheduleQueueDrain();
	                    }
	                }
	            }
	        }
	        // Resolving an already resolved promise is a noop.
	        return promise;
	    }
	    function clearRejectedNoCatch(promise) {
	        if (promise[symbolState] === REJECTED_NO_CATCH) {
	            promise[symbolState] = REJECTED;
	            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
	                if (promise === _uncaughtPromiseErrors[i].promise) {
	                    _uncaughtPromiseErrors.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    }
	    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
	        clearRejectedNoCatch(promise);
	        var delegate = promise[symbolState] ? onFulfilled || forwardResolution : onRejected || forwardRejection;
	        zone.scheduleMicroTask(source, function () {
	            try {
	                resolvePromise(chainPromise, true, zone.run(delegate, null, [promise[symbolValue]]));
	            }
	            catch (error) {
	                resolvePromise(chainPromise, false, error);
	            }
	        });
	    }
	    var ZoneAwarePromise = (function () {
	        function ZoneAwarePromise(executor) {
	            var promise = this;
	            if (!(promise instanceof ZoneAwarePromise)) {
	                throw new Error('Must be an instanceof Promise.');
	            }
	            promise[symbolState] = UNRESOLVED;
	            promise[symbolValue] = []; // queue;
	            try {
	                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
	            }
	            catch (e) {
	                resolvePromise(promise, false, e);
	            }
	        }
	        ZoneAwarePromise.resolve = function (value) {
	            return resolvePromise(new this(null), RESOLVED, value);
	        };
	        ZoneAwarePromise.reject = function (error) {
	            return resolvePromise(new this(null), REJECTED, error);
	        };
	        ZoneAwarePromise.race = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) {
	                _a = [res, rej], resolve = _a[0], reject = _a[1];
	                var _a;
	            });
	            function onResolve(value) {
	                promise && (promise = null || resolve(value));
	            }
	            function onReject(error) {
	                promise && (promise = null || reject(error));
	            }
	            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
	                var value = values_1[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then(onResolve, onReject);
	            }
	            return promise;
	        };
	        ZoneAwarePromise.all = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) {
	                resolve = res;
	                reject = rej;
	            });
	            var count = 0;
	            var resolvedValues = [];
	            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
	                var value = values_2[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then((function (index) { return function (value) {
	                    resolvedValues[index] = value;
	                    count--;
	                    if (!count) {
	                        resolve(resolvedValues);
	                    }
	                }; })(count), reject);
	                count++;
	            }
	            if (!count)
	                resolve(resolvedValues);
	            return promise;
	        };
	        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
	            var chainPromise = new this.constructor(null);
	            var zone = Zone.current;
	            if (this[symbolState] == UNRESOLVED) {
	                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
	            }
	            else {
	                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
	            }
	            return chainPromise;
	        };
	        ZoneAwarePromise.prototype.catch = function (onRejected) {
	            return this.then(null, onRejected);
	        };
	        return ZoneAwarePromise;
	    }());
	    // Protect against aggressive optimizers dropping seemingly unused properties.
	    // E.g. Closure Compiler in advanced mode.
	    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
	    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
	    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
	    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
	    var NativePromise = global[__symbol__('Promise')] = global.Promise;
	    global.Promise = ZoneAwarePromise;
	    function patchThen(NativePromise) {
	        var NativePromiseProtototype = NativePromise.prototype;
	        var NativePromiseThen = NativePromiseProtototype[__symbol__('then')] =
	            NativePromiseProtototype.then;
	        NativePromiseProtototype.then = function (onResolve, onReject) {
	            var nativePromise = this;
	            return new ZoneAwarePromise(function (resolve, reject) {
	                NativePromiseThen.call(nativePromise, resolve, reject);
	            })
	                .then(onResolve, onReject);
	        };
	    }
	    if (NativePromise) {
	        patchThen(NativePromise);
	        if (typeof global['fetch'] !== 'undefined') {
	            var fetchPromise = void 0;
	            try {
	                // In MS Edge this throws
	                fetchPromise = global['fetch']();
	            }
	            catch (e) {
	                // In Chrome this throws instead.
	                fetchPromise = global['fetch']('about:blank');
	            }
	            // ignore output to prevent error;
	            fetchPromise.then(function () { return null; }, function () { return null; });
	            if (fetchPromise.constructor != NativePromise &&
	                fetchPromise.constructor != ZoneAwarePromise) {
	                patchThen(fetchPromise.constructor);
	            }
	        }
	    }
	    // This is not part of public API, but it is usefull for tests, so we expose it.
	    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
	    return global.Zone = Zone;
	})(typeof window === 'object' && window || typeof self === 'object' && self || global);
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var zoneSymbol = Zone['__symbol__'];
	var _global$1 = typeof window === 'object' && window || typeof self === 'object' && self || global;
	function bindArguments(args, source) {
	    for (var i = args.length - 1; i >= 0; i--) {
	        if (typeof args[i] === 'function') {
	            args[i] = Zone.current.wrap(args[i], source + '_' + i);
	        }
	    }
	    return args;
	}
	
	function patchPrototype(prototype, fnNames) {
	    var source = prototype.constructor['name'];
	    var _loop_1 = function(i) {
	        var name_1 = fnNames[i];
	        var delegate = prototype[name_1];
	        if (delegate) {
	            prototype[name_1] = (function (delegate) {
	                return function () {
	                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
	                };
	            })(delegate);
	        }
	    };
	    for (var i = 0; i < fnNames.length; i++) {
	        _loop_1(i);
	    }
	}
	
	var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
	var isNode = (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]');
	var isBrowser = !isNode && !isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
	function patchProperty(obj, prop) {
	    var desc = Object.getOwnPropertyDescriptor(obj, prop) || { enumerable: true, configurable: true };
	    // A property descriptor cannot have getter/setter and be writable
	    // deleting the writable and value properties avoids this error:
	    //
	    // TypeError: property descriptors must not specify a value or be writable when a
	    // getter or setter has been specified
	    delete desc.writable;
	    delete desc.value;
	    // substr(2) cuz 'onclick' -> 'click', etc
	    var eventName = prop.substr(2);
	    var _prop = '_' + prop;
	    desc.set = function (fn) {
	        if (this[_prop]) {
	            this.removeEventListener(eventName, this[_prop]);
	        }
	        if (typeof fn === 'function') {
	            var wrapFn = function (event) {
	                var result;
	                result = fn.apply(this, arguments);
	                if (result != undefined && !result)
	                    event.preventDefault();
	            };
	            this[_prop] = wrapFn;
	            this.addEventListener(eventName, wrapFn, false);
	        }
	        else {
	            this[_prop] = null;
	        }
	    };
	    // The getter would return undefined for unassigned properties but the default value of an
	    // unassigned property is null
	    desc.get = function () {
	        return this[_prop] || null;
	    };
	    Object.defineProperty(obj, prop, desc);
	}
	
	function patchOnProperties(obj, properties) {
	    var onProperties = [];
	    for (var prop in obj) {
	        if (prop.substr(0, 2) == 'on') {
	            onProperties.push(prop);
	        }
	    }
	    for (var j = 0; j < onProperties.length; j++) {
	        patchProperty(obj, onProperties[j]);
	    }
	    if (properties) {
	        for (var i = 0; i < properties.length; i++) {
	            patchProperty(obj, 'on' + properties[i]);
	        }
	    }
	}
	
	var EVENT_TASKS = zoneSymbol('eventTasks');
	// For EventTarget
	var ADD_EVENT_LISTENER = 'addEventListener';
	var REMOVE_EVENT_LISTENER = 'removeEventListener';
	function findExistingRegisteredTask(target, handler, name, capture, remove) {
	    var eventTasks = target[EVENT_TASKS];
	    if (eventTasks) {
	        for (var i = 0; i < eventTasks.length; i++) {
	            var eventTask = eventTasks[i];
	            var data = eventTask.data;
	            if (data.handler === handler && data.useCapturing === capture && data.eventName === name) {
	                if (remove) {
	                    eventTasks.splice(i, 1);
	                }
	                return eventTask;
	            }
	        }
	    }
	    return null;
	}
	function attachRegisteredEvent(target, eventTask) {
	    var eventTasks = target[EVENT_TASKS];
	    if (!eventTasks) {
	        eventTasks = target[EVENT_TASKS] = [];
	    }
	    eventTasks.push(eventTask);
	}
	function makeZoneAwareAddListener(addFnName, removeFnName, useCapturingParam, allowDuplicates) {
	    if (useCapturingParam === void 0) { useCapturingParam = true; }
	    if (allowDuplicates === void 0) { allowDuplicates = false; }
	    var addFnSymbol = zoneSymbol(addFnName);
	    var removeFnSymbol = zoneSymbol(removeFnName);
	    var defaultUseCapturing = useCapturingParam ? false : undefined;
	    function scheduleEventListener(eventTask) {
	        var meta = eventTask.data;
	        attachRegisteredEvent(meta.target, eventTask);
	        return meta.target[addFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
	    }
	    function cancelEventListener(eventTask) {
	        var meta = eventTask.data;
	        findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.useCapturing, true);
	        meta.target[removeFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
	    }
	    return function zoneAwareAddListener(self, args) {
	        var eventName = args[0];
	        var handler = args[1];
	        var useCapturing = args[2] || defaultUseCapturing;
	        // - Inside a Web Worker, `this` is undefined, the context is `global`
	        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	        // see https://github.com/angular/zone.js/issues/190
	        var target = self || _global$1;
	        var delegate = null;
	        if (typeof handler == 'function') {
	            delegate = handler;
	        }
	        else if (handler && handler.handleEvent) {
	            delegate = function (event) { return handler.handleEvent(event); };
	        }
	        var validZoneHandler = false;
	        try {
	            // In cross site contexts (such as WebDriver frameworks like Selenium),
	            // accessing the handler object here will cause an exception to be thrown which
	            // will fail tests prematurely.
	            validZoneHandler = handler && handler.toString() === '[object FunctionWrapper]';
	        }
	        catch (e) {
	            // Returning nothing here is fine, because objects in a cross-site context are unusable
	            return;
	        }
	        // Ignore special listeners of IE11 & Edge dev tools, see
	        // https://github.com/angular/zone.js/issues/150
	        if (!delegate || validZoneHandler) {
	            return target[addFnSymbol](eventName, handler, useCapturing);
	        }
	        if (!allowDuplicates) {
	            var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, false);
	            if (eventTask) {
	                // we already registered, so this will have noop.
	                return target[addFnSymbol](eventName, eventTask.invoke, useCapturing);
	            }
	        }
	        var zone = Zone.current;
	        var source = target.constructor['name'] + '.' + addFnName + ':' + eventName;
	        var data = {
	            target: target,
	            eventName: eventName,
	            name: eventName,
	            useCapturing: useCapturing,
	            handler: handler
	        };
	        zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
	    };
	}
	function makeZoneAwareRemoveListener(fnName, useCapturingParam) {
	    if (useCapturingParam === void 0) { useCapturingParam = true; }
	    var symbol = zoneSymbol(fnName);
	    var defaultUseCapturing = useCapturingParam ? false : undefined;
	    return function zoneAwareRemoveListener(self, args) {
	        var eventName = args[0];
	        var handler = args[1];
	        var useCapturing = args[2] || defaultUseCapturing;
	        // - Inside a Web Worker, `this` is undefined, the context is `global`
	        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	        // see https://github.com/angular/zone.js/issues/190
	        var target = self || _global$1;
	        var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, true);
	        if (eventTask) {
	            eventTask.zone.cancelTask(eventTask);
	        }
	        else {
	            target[symbol](eventName, handler, useCapturing);
	        }
	    };
	}
	
	var zoneAwareAddEventListener = makeZoneAwareAddListener(ADD_EVENT_LISTENER, REMOVE_EVENT_LISTENER);
	var zoneAwareRemoveEventListener = makeZoneAwareRemoveListener(REMOVE_EVENT_LISTENER);
	function patchEventTargetMethods(obj) {
	    if (obj && obj.addEventListener) {
	        patchMethod(obj, ADD_EVENT_LISTENER, function () { return zoneAwareAddEventListener; });
	        patchMethod(obj, REMOVE_EVENT_LISTENER, function () { return zoneAwareRemoveEventListener; });
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	var originalInstanceKey = zoneSymbol('originalInstance');
	// wrap some native API on `window`
	function patchClass(className) {
	    var OriginalClass = _global$1[className];
	    if (!OriginalClass)
	        return;
	    _global$1[className] = function () {
	        var a = bindArguments(arguments, className);
	        switch (a.length) {
	            case 0:
	                this[originalInstanceKey] = new OriginalClass();
	                break;
	            case 1:
	                this[originalInstanceKey] = new OriginalClass(a[0]);
	                break;
	            case 2:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
	                break;
	            case 3:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
	                break;
	            case 4:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
	                break;
	            default:
	                throw new Error('Arg list too long.');
	        }
	    };
	    var instance = new OriginalClass(function () { });
	    var prop;
	    for (prop in instance) {
	        // https://bugs.webkit.org/show_bug.cgi?id=44721
	        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
	            continue;
	        (function (prop) {
	            if (typeof instance[prop] === 'function') {
	                _global$1[className].prototype[prop] = function () {
	                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	                };
	            }
	            else {
	                Object.defineProperty(_global$1[className].prototype, prop, {
	                    set: function (fn) {
	                        if (typeof fn === 'function') {
	                            this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
	                        }
	                        else {
	                            this[originalInstanceKey][prop] = fn;
	                        }
	                    },
	                    get: function () {
	                        return this[originalInstanceKey][prop];
	                    }
	                });
	            }
	        }(prop));
	    }
	    for (prop in OriginalClass) {
	        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
	            _global$1[className][prop] = OriginalClass[prop];
	        }
	    }
	}
	
	function createNamedFn(name, delegate) {
	    try {
	        return (Function('f', "return function " + name + "(){return f(this, arguments)}"))(delegate);
	    }
	    catch (e) {
	        // if we fail, we must be CSP, just return delegate.
	        return function () {
	            return delegate(this, arguments);
	        };
	    }
	}
	function patchMethod(target, name, patchFn) {
	    var proto = target;
	    while (proto && Object.getOwnPropertyNames(proto).indexOf(name) === -1) {
	        proto = Object.getPrototypeOf(proto);
	    }
	    if (!proto && target[name]) {
	        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
	        proto = target;
	    }
	    var delegateName = zoneSymbol(name);
	    var delegate;
	    if (proto && !(delegate = proto[delegateName])) {
	        delegate = proto[delegateName] = proto[name];
	        proto[name] = createNamedFn(name, patchFn(delegate, delegateName, name));
	    }
	    return delegate;
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function patchTimer(window, setName, cancelName, nameSuffix) {
	    var setNative = null;
	    var clearNative = null;
	    setName += nameSuffix;
	    cancelName += nameSuffix;
	    var tasksByHandleId = {};
	    function scheduleTask(task) {
	        var data = task.data;
	        data.args[0] = function () {
	            task.invoke.apply(this, arguments);
	            delete tasksByHandleId[data.handleId];
	        };
	        data.handleId = setNative.apply(window, data.args);
	        tasksByHandleId[data.handleId] = task;
	        return task;
	    }
	    function clearTask(task) {
	        delete tasksByHandleId[task.data.handleId];
	        return clearNative(task.data.handleId);
	    }
	    setNative =
	        patchMethod(window, setName, function (delegate) { return function (self, args) {
	            if (typeof args[0] === 'function') {
	                var zone = Zone.current;
	                var options = {
	                    handleId: null,
	                    isPeriodic: nameSuffix === 'Interval',
	                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
	                    args: args
	                };
	                var task = zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
	                if (!task) {
	                    return task;
	                }
	                // Node.js must additionally support the ref and unref functions.
	                var handle = task.data.handleId;
	                if (handle.ref && handle.unref) {
	                    task.ref = handle.ref.bind(handle);
	                    task.unref = handle.unref.bind(handle);
	                }
	                return task;
	            }
	            else {
	                // cause an error by calling it directly.
	                return delegate.apply(window, args);
	            }
	        }; });
	    clearNative =
	        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
	            var task = typeof args[0] === 'number' ? tasksByHandleId[args[0]] : args[0];
	            if (task && typeof task.type === 'string') {
	                if (task.cancelFn && task.data.isPeriodic || task.runCount === 0) {
	                    // Do not cancel already canceled functions
	                    task.zone.cancelTask(task);
	                }
	            }
	            else {
	                // cause an error by calling it directly.
	                delegate.apply(window, args);
	            }
	        }; });
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/*
	 * This is necessary for Chrome and Chrome mobile, to enable
	 * things like redefining `createdCallback` on an element.
	 */
	var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
	var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
	    Object.getOwnPropertyDescriptor;
	var _create = Object.create;
	var unconfigurablesKey = zoneSymbol('unconfigurables');
	function propertyPatch() {
	    Object.defineProperty = function (obj, prop, desc) {
	        if (isUnconfigurable(obj, prop)) {
	            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
	        }
	        var originalConfigurableFlag = desc.configurable;
	        if (prop !== 'prototype') {
	            desc = rewriteDescriptor(obj, prop, desc);
	        }
	        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	    };
	    Object.defineProperties = function (obj, props) {
	        Object.keys(props).forEach(function (prop) {
	            Object.defineProperty(obj, prop, props[prop]);
	        });
	        return obj;
	    };
	    Object.create = function (obj, proto) {
	        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
	            Object.keys(proto).forEach(function (prop) {
	                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
	            });
	        }
	        return _create(obj, proto);
	    };
	    Object.getOwnPropertyDescriptor = function (obj, prop) {
	        var desc = _getOwnPropertyDescriptor(obj, prop);
	        if (isUnconfigurable(obj, prop)) {
	            desc.configurable = false;
	        }
	        return desc;
	    };
	}
	
	function _redefineProperty(obj, prop, desc) {
	    var originalConfigurableFlag = desc.configurable;
	    desc = rewriteDescriptor(obj, prop, desc);
	    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	}
	
	function isUnconfigurable(obj, prop) {
	    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
	}
	function rewriteDescriptor(obj, prop, desc) {
	    desc.configurable = true;
	    if (!desc.configurable) {
	        if (!obj[unconfigurablesKey]) {
	            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
	        }
	        obj[unconfigurablesKey][prop] = true;
	    }
	    return desc;
	}
	function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
	    try {
	        return _defineProperty(obj, prop, desc);
	    }
	    catch (e) {
	        if (desc.configurable) {
	            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
	            // retry with the original flag value
	            if (typeof originalConfigurableFlag == 'undefined') {
	                delete desc.configurable;
	            }
	            else {
	                desc.configurable = originalConfigurableFlag;
	            }
	            try {
	                return _defineProperty(obj, prop, desc);
	            }
	            catch (e) {
	                var descJson = null;
	                try {
	                    descJson = JSON.stringify(desc);
	                }
	                catch (e) {
	                    descJson = descJson.toString();
	                }
	                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + e);
	            }
	        }
	        else {
	            throw e;
	        }
	    }
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
	var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex'
	    .split(',');
	var EVENT_TARGET = 'EventTarget';
	function eventTargetPatch(_global) {
	    var apis = [];
	    var isWtf = _global['wtf'];
	    if (isWtf) {
	        // Workaround for: https://github.com/google/tracing-framework/issues/555
	        apis = WTF_ISSUE_555.split(',').map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
	    }
	    else if (_global[EVENT_TARGET]) {
	        apis.push(EVENT_TARGET);
	    }
	    else {
	        // Note: EventTarget is not available in all browsers,
	        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
	        apis = NO_EVENT_TARGET;
	    }
	    for (var i = 0; i < apis.length; i++) {
	        var type = _global[apis[i]];
	        patchEventTargetMethods(type && type.prototype);
	    }
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	// we have to patch the instance since the proto is non-configurable
	function apply(_global) {
	    var WS = _global.WebSocket;
	    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
	    // On older Chrome, no need since EventTarget was already patched
	    if (!_global.EventTarget) {
	        patchEventTargetMethods(WS.prototype);
	    }
	    _global.WebSocket = function (a, b) {
	        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
	        var proxySocket;
	        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
	        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
	        if (onmessageDesc && onmessageDesc.configurable === false) {
	            proxySocket = Object.create(socket);
	            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
	                proxySocket[propName] = function () {
	                    return socket[propName].apply(socket, arguments);
	                };
	            });
	        }
	        else {
	            // we can patch the real socket
	            proxySocket = socket;
	        }
	        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
	        return proxySocket;
	    };
	    for (var prop in WS) {
	        _global.WebSocket[prop] = WS[prop];
	    }
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'
	    .split(' ');
	function propertyDescriptorPatch(_global) {
	    if (isNode) {
	        return;
	    }
	    var supportsWebSocket = typeof WebSocket !== 'undefined';
	    if (canPatchViaPropertyDescriptor()) {
	        // for browsers that we can patch the descriptor:  Chrome & Firefox
	        if (isBrowser) {
	            patchOnProperties(HTMLElement.prototype, eventNames);
	        }
	        patchOnProperties(XMLHttpRequest.prototype, null);
	        if (typeof IDBIndex !== 'undefined') {
	            patchOnProperties(IDBIndex.prototype, null);
	            patchOnProperties(IDBRequest.prototype, null);
	            patchOnProperties(IDBOpenDBRequest.prototype, null);
	            patchOnProperties(IDBDatabase.prototype, null);
	            patchOnProperties(IDBTransaction.prototype, null);
	            patchOnProperties(IDBCursor.prototype, null);
	        }
	        if (supportsWebSocket) {
	            patchOnProperties(WebSocket.prototype, null);
	        }
	    }
	    else {
	        // Safari, Android browsers (Jelly Bean)
	        patchViaCapturingAllTheEvents();
	        patchClass('XMLHttpRequest');
	        if (supportsWebSocket) {
	            apply(_global);
	        }
	    }
	}
	function canPatchViaPropertyDescriptor() {
	    if (isBrowser && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
	        typeof Element !== 'undefined') {
	        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
	        // IDL interface attributes are not configurable
	        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
	        if (desc && !desc.configurable)
	            return false;
	    }
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
	        get: function () {
	            return true;
	        }
	    });
	    var req = new XMLHttpRequest();
	    var result = !!req.onreadystatechange;
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
	    return result;
	}
	
	var unboundKey = zoneSymbol('unbound');
	// Whenever any eventListener fires, we check the eventListener target and all parents
	// for `onwhatever` properties and replace them with zone-bound functions
	// - Chrome (for now)
	function patchViaCapturingAllTheEvents() {
	    var _loop_1 = function(i) {
	        var property = eventNames[i];
	        var onproperty = 'on' + property;
	        self.addEventListener(property, function (event) {
	            var elt = event.target, bound, source;
	            if (elt) {
	                source = elt.constructor['name'] + '.' + onproperty;
	            }
	            else {
	                source = 'unknown.' + onproperty;
	            }
	            while (elt) {
	                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
	                    bound = Zone.current.wrap(elt[onproperty], source);
	                    bound[unboundKey] = elt[onproperty];
	                    elt[onproperty] = bound;
	                }
	                elt = elt.parentElement;
	            }
	        }, true);
	    };
	    for (var i = 0; i < eventNames.length; i++) {
	        _loop_1(i);
	    }
	    
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function registerElementPatch(_global) {
	    if (!isBrowser || !('registerElement' in _global.document)) {
	        return;
	    }
	    var _registerElement = document.registerElement;
	    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
	    document.registerElement = function (name, opts) {
	        if (opts && opts.prototype) {
	            callbacks.forEach(function (callback) {
	                var source = 'Document.registerElement::' + callback;
	                if (opts.prototype.hasOwnProperty(callback)) {
	                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
	                    if (descriptor && descriptor.value) {
	                        descriptor.value = Zone.current.wrap(descriptor.value, source);
	                        _redefineProperty(opts.prototype, callback, descriptor);
	                    }
	                    else {
	                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                    }
	                }
	                else if (opts.prototype[callback]) {
	                    opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                }
	            });
	        }
	        return _registerElement.apply(document, [name, opts]);
	    };
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var set = 'set';
	var clear = 'clear';
	var blockingMethods = ['alert', 'prompt', 'confirm'];
	var _global = typeof window === 'object' && window || typeof self === 'object' && self || global;
	patchTimer(_global, set, clear, 'Timeout');
	patchTimer(_global, set, clear, 'Interval');
	patchTimer(_global, set, clear, 'Immediate');
	patchTimer(_global, 'request', 'cancel', 'AnimationFrame');
	patchTimer(_global, 'mozRequest', 'mozCancel', 'AnimationFrame');
	patchTimer(_global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
	for (var i = 0; i < blockingMethods.length; i++) {
	    var name = blockingMethods[i];
	    patchMethod(_global, name, function (delegate, symbol, name) {
	        return function (s, args) {
	            return Zone.current.run(delegate, _global, args, name);
	        };
	    });
	}
	eventTargetPatch(_global);
	propertyDescriptorPatch(_global);
	patchClass('MutationObserver');
	patchClass('WebKitMutationObserver');
	patchClass('FileReader');
	propertyPatch();
	registerElementPatch(_global);
	// Treat XMLHTTPRequest as a macrotask.
	patchXHR(_global);
	var XHR_TASK = zoneSymbol('xhrTask');
	var XHR_SYNC = zoneSymbol('xhrSync');
	function patchXHR(window) {
	    function findPendingTask(target) {
	        var pendingTask = target[XHR_TASK];
	        return pendingTask;
	    }
	    function scheduleTask(task) {
	        var data = task.data;
	        data.target.addEventListener('readystatechange', function () {
	            if (data.target.readyState === data.target.DONE) {
	                if (!data.aborted) {
	                    task.invoke();
	                }
	            }
	        });
	        var storedTask = data.target[XHR_TASK];
	        if (!storedTask) {
	            data.target[XHR_TASK] = task;
	        }
	        sendNative.apply(data.target, data.args);
	        return task;
	    }
	    function placeholderCallback() { }
	    function clearTask(task) {
	        var data = task.data;
	        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
	        // to prevent it from firing. So instead, we store info for the event listener.
	        data.aborted = true;
	        return abortNative.apply(data.target, data.args);
	    }
	    var openNative = patchMethod(window.XMLHttpRequest.prototype, 'open', function () { return function (self, args) {
	        self[XHR_SYNC] = args[2] == false;
	        return openNative.apply(self, args);
	    }; });
	    var sendNative = patchMethod(window.XMLHttpRequest.prototype, 'send', function () { return function (self, args) {
	        var zone = Zone.current;
	        if (self[XHR_SYNC]) {
	            // if the XHR is sync there is no task to schedule, just execute the code.
	            return sendNative.apply(self, args);
	        }
	        else {
	            var options = { target: self, isPeriodic: false, delay: null, args: args, aborted: false };
	            return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
	        }
	    }; });
	    var abortNative = patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) { return function (self, args) {
	        var task = findPendingTask(self);
	        if (task && typeof task.type == 'string') {
	            // If the XHR has already completed, do nothing.
	            if (task.cancelFn == null) {
	                return;
	            }
	            task.zone.cancelTask(task);
	        }
	        // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no task
	        // to cancel. Do nothing.
	    }; });
	}
	/// GEO_LOCATION
	if (_global['navigator'] && _global['navigator'].geolocation) {
	    patchPrototype(_global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
	}
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(310)))

/***/ },

/***/ 375:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	var Reflect;
	(function (Reflect) {
	    "use strict";
	    var hasOwn = Object.prototype.hasOwnProperty;
	    // feature test for Object.create support
	    var supportsCreate = typeof Object.create === "function";
	    // feature test for __proto__ support
	    var supportsProto = (function () {
	        var sentinel = {};
	        function __() { }
	        __.prototype = sentinel;
	        var instance = new __();
	        return instance.__proto__ === sentinel;
	    })();
	    // create an object in dictionary mode (a.k.a. "slow" mode in v8)
	    var createDictionary = supportsCreate ? function () { return MakeDictionary(Object.create(null)); } :
	        supportsProto ? function () { return MakeDictionary({ __proto__: null }); } :
	            function () { return MakeDictionary({}); };
	    var HashMap;
	    (function (HashMap) {
	        var downLevel = !supportsCreate && !supportsProto;
	        HashMap.has = downLevel
	            ? function (map, key) { return hasOwn.call(map, key); }
	            : function (map, key) { return key in map; };
	        HashMap.get = downLevel
	            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
	            : function (map, key) { return map[key]; };
	    })(HashMap || (HashMap = {}));
	    // Load global or shim versions of Map, Set, and WeakMap
	    var functionPrototype = Object.getPrototypeOf(Function);
	    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
	    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
	    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	    // [[Metadata]] internal slot
	    var Metadata = new _WeakMap();
	    /**
	      * Applies a set of decorators to a property of a target object.
	      * @param decorators An array of decorators.
	      * @param target The target object.
	      * @param targetKey (Optional) The property key to decorate.
	      * @param targetDescriptor (Optional) The property descriptor for the target key
	      * @remarks Decorators are applied in reverse order.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Example = Reflect.decorate(decoratorsArray, Example);
	      *
	      *     // property (on constructor)
	      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Object.defineProperty(Example, "staticMethod",
	      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
	      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
	      *
	      *     // method (on prototype)
	      *     Object.defineProperty(Example.prototype, "method",
	      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
	      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
	      *
	      */
	    function decorate(decorators, target, targetKey, targetDescriptor) {
	        if (!IsUndefined(targetDescriptor)) {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsObject(target))
	                throw new TypeError();
	            if (IsUndefined(targetKey))
	                throw new TypeError();
	            if (!IsObject(targetDescriptor))
	                throw new TypeError();
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
	        }
	        else if (!IsUndefined(targetKey)) {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsObject(target))
	                throw new TypeError();
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
	        }
	        else {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsConstructor(target))
	                throw new TypeError();
	            return DecorateConstructor(decorators, target);
	        }
	    }
	    Reflect.decorate = decorate;
	    /**
	      * A default metadata decorator factory that can be used on a class, class member, or parameter.
	      * @param metadataKey The key for the metadata entry.
	      * @param metadataValue The value for the metadata entry.
	      * @returns A decorator function.
	      * @remarks
	      * If `metadataKey` is already defined for the target and target key, the
	      * metadataValue for that key will be overwritten.
	      * @example
	      *
	      *     // constructor
	      *     @Reflect.metadata(key, value)
	      *     class Example {
	      *     }
	      *
	      *     // property (on constructor, TypeScript only)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         static staticProperty;
	      *     }
	      *
	      *     // property (on prototype, TypeScript only)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         property;
	      *     }
	      *
	      *     // method (on constructor)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         static staticMethod() { }
	      *     }
	      *
	      *     // method (on prototype)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         method() { }
	      *     }
	      *
	      */
	    function metadata(metadataKey, metadataValue) {
	        function decorator(target, targetKey) {
	            if (!IsUndefined(targetKey)) {
	                if (!IsObject(target))
	                    throw new TypeError();
	                targetKey = ToPropertyKey(targetKey);
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	            }
	            else {
	                if (!IsConstructor(target))
	                    throw new TypeError();
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
	            }
	        }
	        return decorator;
	    }
	    Reflect.metadata = metadata;
	    /**
	      * Define a unique metadata entry on the target.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param metadataValue A value that contains attached metadata.
	      * @param target The target object on which to define metadata.
	      * @param targetKey (Optional) The property key for the target.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Reflect.defineMetadata("custom:annotation", options, Example);
	      *
	      *     // property (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
	      *
	      *     // decorator factory as metadata-producing annotation.
	      *     function MyAnnotation(options): Decorator {
	      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	      *     }
	      *
	      */
	    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	    }
	    Reflect.defineMetadata = defineMetadata;
	    /**
	      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function hasMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryHasMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasMetadata = hasMetadata;
	    /**
	      * Gets a value indicating whether the target object has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function hasOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasOwnMetadata = hasOwnMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function getMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryGetMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getMetadata = getMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function getOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getOwnMetadata = getOwnMetadata;
	    /**
	      * Gets the metadata keys defined on the target object or its prototype chain.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadataKeys(Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
	      *
	      */
	    function getMetadataKeys(target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryMetadataKeys(target, targetKey);
	    }
	    Reflect.getMetadataKeys = getMetadataKeys;
	    /**
	      * Gets the unique metadata keys defined on the target object.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadataKeys(Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
	      *
	      */
	    function getOwnMetadataKeys(target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryOwnMetadataKeys(target, targetKey);
	    }
	    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
	    /**
	      * Deletes the metadata entry from the target object with the provided key.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.deleteMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function deleteMetadata(metadataKey, target, targetKey) {
	        // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#deletemetadata-metadatakey-p-
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        if (IsUndefined(metadataMap))
	            return false;
	        if (!metadataMap.delete(metadataKey))
	            return false;
	        if (metadataMap.size > 0)
	            return true;
	        var targetMetadata = Metadata.get(target);
	        targetMetadata.delete(targetKey);
	        if (targetMetadata.size > 0)
	            return true;
	        Metadata.delete(target);
	        return true;
	    }
	    Reflect.deleteMetadata = deleteMetadata;
	    function DecorateConstructor(decorators, target) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target);
	            if (!IsUndefined(decorated)) {
	                if (!IsConstructor(decorated))
	                    throw new TypeError();
	                target = decorated;
	            }
	        }
	        return target;
	    }
	    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target, propertyKey, descriptor);
	            if (!IsUndefined(decorated)) {
	                if (!IsObject(decorated))
	                    throw new TypeError();
	                descriptor = decorated;
	            }
	        }
	        return descriptor;
	    }
	    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            decorator(target, propertyKey);
	        }
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#getorcreatemetadatamap--o-p-create-
	    function GetOrCreateMetadataMap(target, targetKey, create) {
	        var targetMetadata = Metadata.get(target);
	        if (!targetMetadata) {
	            if (!create)
	                return undefined;
	            targetMetadata = new _Map();
	            Metadata.set(target, targetMetadata);
	        }
	        var keyMetadata = targetMetadata.get(targetKey);
	        if (!keyMetadata) {
	            if (!create)
	                return undefined;
	            keyMetadata = new _Map();
	            targetMetadata.set(targetKey, keyMetadata);
	        }
	        return keyMetadata;
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	    function OrdinaryHasMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn)
	            return true;
	        var parent = GetPrototypeOf(O);
	        return parent !== null ? OrdinaryHasMetadata(MetadataKey, parent, P) : false;
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        return metadataMap !== undefined && Boolean(metadataMap.has(MetadataKey));
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	    function OrdinaryGetMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn)
	            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	        var parent = GetPrototypeOf(O);
	        return parent !== null ? OrdinaryGetMetadata(MetadataKey, parent, P) : undefined;
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
	        metadataMap.set(MetadataKey, MetadataValue);
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarymetadatakeys--o-p-
	    function OrdinaryMetadataKeys(O, P) {
	        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	        var parent = GetPrototypeOf(O);
	        if (parent === null)
	            return ownKeys;
	        var parentKeys = OrdinaryMetadataKeys(parent, P);
	        if (parentKeys.length <= 0)
	            return ownKeys;
	        if (ownKeys.length <= 0)
	            return parentKeys;
	        var keys = new _Set();
	        for (var _i = 0; _i < ownKeys.length; _i++) {
	            var key = ownKeys[_i];
	            keys.add(key);
	        }
	        for (var _a = 0; _a < parentKeys.length; _a++) {
	            var key = parentKeys[_a];
	            keys.add(key);
	        }
	        return getKeys(keys);
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryownmetadatakeys--o-p-
	    function OrdinaryOwnMetadataKeys(target, targetKey) {
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        var keys = [];
	        if (metadataMap)
	            forEach(metadataMap, function (_, key) { return keys.push(key); });
	        return keys;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
	    function IsUndefined(x) {
	        return x === undefined;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	    function IsArray(x) {
	        return Array.isArray ? Array.isArray(x) : x instanceof Array || Object.prototype.toString.call(x) === "[object Array]";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
	    function IsObject(x) {
	        return typeof x === "object" ? x !== null : typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	    function IsConstructor(x) {
	        return typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
	    function IsSymbol(x) {
	        return typeof x === "symbol";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	    function ToPropertyKey(value) {
	        return IsSymbol(value) ? value : String(value);
	    }
	    function GetPrototypeOf(O) {
	        var proto = Object.getPrototypeOf(O);
	        if (typeof O !== "function" || O === functionPrototype)
	            return proto;
	        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
	        // Try to determine the superclass Exampleonstructor. Compatible implementations
	        // must either set __proto__ on a subclass Exampleonstructor to the superclass Exampleonstructor,
	        // or ensure each class has a valid `constructor` property on its prototype that
	        // points back to the constructor.
	        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	        // This is the case when in ES6 or when using __proto__ in a compatible browser.
	        if (proto !== functionPrototype)
	            return proto;
	        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	        var prototype = O.prototype;
	        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
	        if (prototypeProto == null || prototypeProto === Object.prototype)
	            return proto;
	        // If the constructor was not a function, then we cannot determine the heritage.
	        var constructor = prototypeProto.constructor;
	        if (typeof constructor !== "function")
	            return proto;
	        // If we have some kind of self-reference, then we cannot determine the heritage.
	        if (constructor === O)
	            return proto;
	        // we have a pretty good guess at the heritage.
	        return constructor;
	    }
	    function IteratorStep(iterator) {
	        var result = iterator.next();
	        return result.done ? undefined : result;
	    }
	    function IteratorClose(iterator) {
	        var f = iterator["return"];
	        if (f)
	            f.call(iterator);
	    }
	    function forEach(source, callback, thisArg) {
	        var entries = source.entries;
	        if (typeof entries === "function") {
	            var iterator = entries.call(source);
	            var result;
	            try {
	                while (result = IteratorStep(iterator)) {
	                    var _a = result.value, key = _a[0], value = _a[1];
	                    callback.call(thisArg, value, key, source);
	                }
	            }
	            finally {
	                if (result)
	                    IteratorClose(iterator);
	            }
	        }
	        else {
	            var forEach_1 = source.forEach;
	            if (typeof forEach_1 === "function") {
	                forEach_1.call(source, callback, thisArg);
	            }
	        }
	    }
	    function getKeys(source) {
	        var keys = [];
	        forEach(source, function (_, key) { keys.push(key); });
	        return keys;
	    }
	    // naive MapIterator shim
	    function CreateMapIterator(keys, values, kind) {
	        var index = 0;
	        return {
	            next: function () {
	                if ((keys || values) && index < (keys || values).length) {
	                    var current = index++;
	                    switch (kind) {
	                        case "key": return { value: keys[current], done: false };
	                        case "value": return { value: values[current], done: false };
	                        case "key+value": return { value: [keys[current], values[current]], done: false };
	                    }
	                }
	                keys = undefined;
	                values = undefined;
	                return { value: undefined, done: true };
	            },
	            "throw": function (error) {
	                if (keys || values) {
	                    keys = undefined;
	                    values = undefined;
	                }
	                throw error;
	            },
	            "return": function (value) {
	                if (keys || values) {
	                    keys = undefined;
	                    values = undefined;
	                }
	                return { value: value, done: true };
	            }
	        };
	    }
	    // naive Map shim
	    function CreateMapPolyfill() {
	        var cacheSentinel = {};
	        return (function () {
	            function Map() {
	                this._keys = [];
	                this._values = [];
	                this._cacheKey = cacheSentinel;
	                this._cacheIndex = -2;
	            }
	            Object.defineProperty(Map.prototype, "size", {
	                get: function () { return this._keys.length; },
	                enumerable: true,
	                configurable: true
	            });
	            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
	            Map.prototype.get = function (key) {
	                var index = this._find(key, /*insert*/ false);
	                return index >= 0 ? this._values[index] : undefined;
	            };
	            Map.prototype.set = function (key, value) {
	                var index = this._find(key, /*insert*/ true);
	                this._values[index] = value;
	                return this;
	            };
	            Map.prototype.delete = function (key) {
	                var index = this._find(key, /*insert*/ false);
	                if (index >= 0) {
	                    var size = this._keys.length;
	                    for (var i = index + 1; i < size; i++) {
	                        this._keys[i - 1] = this._keys[i];
	                        this._values[i - 1] = this._values[i];
	                    }
	                    this._keys.length--;
	                    this._values.length--;
	                    this._cacheKey = cacheSentinel;
	                    this._cacheIndex = -2;
	                    return true;
	                }
	                return false;
	            };
	            Map.prototype.clear = function () {
	                this._keys.length = 0;
	                this._values.length = 0;
	                this._cacheKey = cacheSentinel;
	                this._cacheIndex = -2;
	            };
	            Map.prototype.keys = function () { return CreateMapIterator(this._keys, /*values*/ undefined, "key"); };
	            Map.prototype.values = function () { return CreateMapIterator(/*keys*/ undefined, this._values, "value"); };
	            Map.prototype.entries = function () { return CreateMapIterator(this._keys, this._values, "key+value"); };
	            Map.prototype._find = function (key, insert) {
	                if (this._cacheKey === key)
	                    return this._cacheIndex;
	                var index = this._keys.indexOf(key);
	                if (index < 0 && insert) {
	                    index = this._keys.length;
	                    this._keys.push(key);
	                    this._values.push(undefined);
	                }
	                return this._cacheKey = key, this._cacheIndex = index;
	            };
	            return Map;
	        })();
	    }
	    // naive Set shim
	    function CreateSetPolyfill() {
	        return (function () {
	            function Set() {
	                this._map = new _Map();
	            }
	            Object.defineProperty(Set.prototype, "size", {
	                get: function () { return this._map.size; },
	                enumerable: true,
	                configurable: true
	            });
	            Set.prototype.has = function (value) { return this._map.has(value); };
	            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
	            Set.prototype.delete = function (value) { return this._map.delete(value); };
	            Set.prototype.clear = function () { this._map.clear(); };
	            Set.prototype.keys = function () { return this._map.keys(); };
	            Set.prototype.values = function () { return this._map.values(); };
	            Set.prototype.entries = function () { return this._map.entries(); };
	            return Set;
	        })();
	    }
	    // naive WeakMap shim
	    function CreateWeakMapPolyfill() {
	        var UUID_SIZE = 16;
	        var keys = createDictionary();
	        var rootKey = CreateUniqueKey();
	        return (function () {
	            function WeakMap() {
	                this._key = CreateUniqueKey();
	            }
	            WeakMap.prototype.has = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? HashMap.has(table, this._key) : false;
	            };
	            WeakMap.prototype.get = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? HashMap.get(table, this._key) : undefined;
	            };
	            WeakMap.prototype.set = function (target, value) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
	                table[this._key] = value;
	                return this;
	            };
	            WeakMap.prototype.delete = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? delete table[this._key] : false;
	            };
	            WeakMap.prototype.clear = function () {
	                // NOTE: not a real clear, just makes the previous data unreachable
	                this._key = CreateUniqueKey();
	            };
	            return WeakMap;
	        })();
	        function FillRandomBytes(buffer, size) {
	            for (var i = 0; i < size; ++i)
	                buffer[i] = Math.random() * 0xff | 0;
	            return buffer;
	        }
	        function GenRandomBytes(size) {
	            if (typeof Uint8Array === "function") {
	                if (typeof crypto !== "undefined")
	                    return crypto.getRandomValues(new Uint8Array(size));
	                if (typeof msCrypto !== "undefined")
	                    return msCrypto.getRandomValues(new Uint8Array(size));
	                return FillRandomBytes(new Uint8Array(size), size);
	            }
	            return FillRandomBytes(new Array(size), size);
	        }
	        function CreateUUID() {
	            var data = GenRandomBytes(UUID_SIZE);
	            // mark as random - RFC 4122 § 4.4
	            data[6] = data[6] & 0x4f | 0x40;
	            data[8] = data[8] & 0xbf | 0x80;
	            var result = "";
	            for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                var byte = data[offset];
	                if (offset === 4 || offset === 6 || offset === 8)
	                    result += "-";
	                if (byte < 16)
	                    result += "0";
	                result += byte.toString(16).toLowerCase();
	            }
	            return result;
	        }
	        function CreateUniqueKey() {
	            var key;
	            do
	                key = "@@WeakMap@@" + CreateUUID();
	            while (HashMap.has(keys, key));
	            keys[key] = true;
	            return key;
	        }
	        function GetOrCreateWeakMapTable(target, create) {
	            if (!hasOwn.call(target, rootKey)) {
	                if (!create)
	                    return undefined;
	                Object.defineProperty(target, rootKey, { value: createDictionary() });
	            }
	            return target[rootKey];
	        }
	    }
	    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
	    function MakeDictionary(obj) {
	        obj.__DICTIONARY_MODE__ = 1;
	        delete obj.____DICTIONARY_MODE__;
	        return obj;
	    }
	    // patch global Reflect
	    (function (__global) {
	        if (typeof __global.Reflect !== "undefined") {
	            if (__global.Reflect !== Reflect) {
	                for (var p in Reflect) {
	                    if (hasOwn.call(Reflect, p)) {
	                        __global.Reflect[p] = Reflect[p];
	                    }
	                }
	            }
	        }
	        else {
	            __global.Reflect = Reflect;
	        }
	    })(typeof window !== "undefined" ? window :
	        typeof WorkerGlobalScope !== "undefined" ? self :
	            typeof global !== "undefined" ? global :
	                Function("return this;")());
	})(Reflect || (Reflect = {}));
	//# sourceMappingURL=Reflect.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjBkMmE0NTJlYzRkNzhiZDhhYWIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BvbHlmaWxscy50cyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvY2xpZW50L3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi96b25lLmpzL2Rpc3Qvem9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0VBQWdFLHVCQUF1QjtBQUN2RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDNUZBLHFCQUFPLEdBQXFCLENBQUM7QUFDN0IscUJBQU8sR0FBbUIsQ0FBQztBQUMzQixxQkFBTyxHQUFrQixDQUFDOzs7Ozs7OztBQ0YxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7OztBQ25MdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBLGdCQUFlOztBQUVmLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7OztBQUdBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7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K0JBQStCOztBQUU1RCxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRixRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRixRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxHQUFFOztBQUVGLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRixRQUFP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QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtFQUE4RSwwQkFBMEI7O0FBRXhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLDZGQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxHQUFFOztBQUVGOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FB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RixRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRixRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRixRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELGtDQUFrQyxFQUFFO0FBQzlGLDhEQUE2RCxxQ0FBcUMsRUFBRTtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrREFBOEQsMEJBQTBCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVUsRUFBRTtBQUNaO0FBQ0EsOERBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVLEVBQUU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRCwwQkFBMEIsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHlCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsdUJBQXVCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0w7QUFDQTtBQUNBLHVDQUFzQztBQUN0QyxFQUFDLDBCQUEwQjtBQUMzQixvQyIsImZpbGUiOiJwb2x5ZmlsbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgY2FsbGJhY2tzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSlcbiBcdFx0XHRcdGNhbGxiYWNrcy5wdXNoLmFwcGx5KGNhbGxiYWNrcywgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzKTtcbiBcdFx0d2hpbGUoY2FsbGJhY2tzLmxlbmd0aClcbiBcdFx0XHRjYWxsYmFja3Muc2hpZnQoKS5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRpZihtb3JlTW9kdWxlc1swXSkge1xuIFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbMF0gPSAwO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHQvLyBBcnJheSBtZWFucyBcImxvYWRpbmdcIiwgYXJyYXkgY29udGFpbnMgY2FsbGJhY2tzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOjBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gYW4gYXJyYXkgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXS5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW2NhbGxiYWNrXTtcbiBcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiBcdFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArICh7XCIwXCI6XCJhcHBcIixcIjJcIjpcInZlbmRvclwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MGQyYTQ1MmVjNGQ3OGJkOGFhYiIsImltcG9ydCAnY29yZS1qcy9jbGllbnQvc2hpbSc7XHJcbmltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUnO1xyXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi90c2xpbnQtbG9hZGVyIS4vYXBwL3BvbHlmaWxscy50cyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBjb3JlLWpzIDIuNC4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qc1xuICogTGljZW5zZTogaHR0cDovL3JvY2subWl0LWxpY2Vuc2Uub3JnXG4gKiDCqSAyMDE2IERlbmlzIFB1c2hrYXJldlxuICovXG4hZnVuY3Rpb24oX19lLCBfX2csIHVuZGVmaW5lZCl7XG4ndXNlIHN0cmljdCc7XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNTEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNTUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDU4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNjApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDYxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNjMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDY0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2NSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNjYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDY4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg3MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNzIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDc0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg3Nyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNzgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDc5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg4Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oODYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDg3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg4OCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oODkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDkxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg5Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oOTMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDk0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg5NSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oOTcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDk5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMDApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEwMSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTAzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMDQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEwNSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTA3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMDgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEwOSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTExKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMTIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExMyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTE0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMTUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExNik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTE3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMTgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExOSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTIwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMjEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEyMik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTIzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMjQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEyNik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTMwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzMik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTMzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNDEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNDQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0NSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQ2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNDcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0OCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQ5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNTApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE1MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTUyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNTgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE1OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTYxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNjIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE2Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTY3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNjgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE2OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTcwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTc0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3Nik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTc5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTgzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4Nyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTg5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTkzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5NSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTk2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMDMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIwNik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjA3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMDkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxMCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjExKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMTIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxMyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjE0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMTUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxNik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjE3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMTgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxOSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjIwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMjIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIyMyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjI0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMjUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIyNik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjI3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMjgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIyOSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjMxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzOSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNDEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNDQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0NSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQ2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNDcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjUwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNTEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjUzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNTQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1NSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjU2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNTgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjYxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNjIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI2Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjY0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNjcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI2OCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjY5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNzApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjcyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNzMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjc2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNzcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3OCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjc5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyODApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI4MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjgyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyODMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI4NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjg1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyODYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI4Nyk7XG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyODgpO1xuXG5cbi8qKiovIH0sXG4vKiAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cblx0dmFyIGdsb2JhbCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgaGFzICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCBERVNDUklQVE9SUyAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNClcblx0ICAsICRleHBvcnQgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgcmVkZWZpbmUgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KVxuXHQgICwgTUVUQSAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKS5LRVlcblx0ICAsICRmYWlscyAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgc2hhcmVkICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKVxuXHQgICwgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKVxuXHQgICwgdWlkICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KVxuXHQgICwgd2tzICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKVxuXHQgICwgd2tzRXh0ICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KVxuXHQgICwgd2tzRGVmaW5lICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KVxuXHQgICwga2V5T2YgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3KVxuXHQgICwgZW51bUtleXMgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQwKVxuXHQgICwgaXNBcnJheSAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKVxuXHQgICwgYW5PYmplY3QgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgdG9JT2JqZWN0ICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgdG9QcmltaXRpdmUgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KVxuXHQgICwgY3JlYXRlRGVzYyAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KVxuXHQgICwgX2NyZWF0ZSAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KVxuXHQgICwgZ09QTkV4dCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KVxuXHQgICwgJEdPUEQgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KVxuXHQgICwgJERQICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpXG5cdCAgLCAka2V5cyAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpXG5cdCAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcblx0ICAsIGRQICAgICAgICAgICAgID0gJERQLmZcblx0ICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG5cdCAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcblx0ICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cblx0ICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG5cdCAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG5cdCAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG5cdCAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuXHQgICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuXHQgICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG5cdCAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG5cdCAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG5cdCAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG5cdCAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcblx0ICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG5cdC8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xuXHR2YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuXHQvLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcblx0dmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG5cdCAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cblx0ICB9KSkuYSAhPSA3O1xuXHR9KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuXHQgIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuXHQgIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcblx0ICBkUChpdCwga2V5LCBEKTtcblx0ICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG5cdH0gOiBkUDtcblxuXHR2YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG5cdCAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcblx0ICBzeW0uX2sgPSB0YWc7XG5cdCAgcmV0dXJuIHN5bTtcblx0fTtcblxuXHR2YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG5cdH0gOiBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcblx0fTtcblxuXHR2YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG5cdCAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG5cdCAgYW5PYmplY3QoaXQpO1xuXHQgIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG5cdCAgYW5PYmplY3QoRCk7XG5cdCAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuXHQgICAgaWYoIUQuZW51bWVyYWJsZSl7XG5cdCAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuXHQgICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcblx0ICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG5cdCAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuXHQgIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xuXHR9O1xuXHR2YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcblx0ICBhbk9iamVjdChpdCk7XG5cdCAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuXHQgICAgLCBpICAgID0gMFxuXHQgICAgLCBsID0ga2V5cy5sZW5ndGhcblx0ICAgICwga2V5O1xuXHQgIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblx0dmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuXHQgIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcblx0fTtcblx0dmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG5cdCAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcblx0ICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG5cdCAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xuXHR9O1xuXHR2YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcblx0ICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuXHQgIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG5cdCAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcblx0ICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG5cdCAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG5cdCAgcmV0dXJuIEQ7XG5cdH07XG5cdHZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuXHQgIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG5cdCAgICAsIHJlc3VsdCA9IFtdXG5cdCAgICAsIGkgICAgICA9IDBcblx0ICAgICwga2V5O1xuXHQgIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuXHQgICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG5cdCAgfSByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHR2YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG5cdCAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuXHQgICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcblx0ICAgICwgcmVzdWx0ID0gW11cblx0ICAgICwgaSAgICAgID0gMFxuXHQgICAgLCBrZXk7XG5cdCAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG5cdCAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcblx0ICB9IHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5cdGlmKCFVU0VfTkFUSVZFKXtcblx0ICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG5cdCAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcblx0ICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuXHQgICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG5cdCAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcblx0ICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuXHQgICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuXHQgICAgfTtcblx0ICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuXHQgICAgcmV0dXJuIHdyYXAodGFnKTtcblx0ICB9O1xuXHQgIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcblx0ICAgIHJldHVybiB0aGlzLl9rO1xuXHQgIH0pO1xuXG5cdCAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cdCAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcblx0ICBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG5cdCAgX193ZWJwYWNrX3JlcXVpcmVfXyg0MikuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG5cdCAgX193ZWJwYWNrX3JlcXVpcmVfXyg0MSkuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblx0ICBpZihERVNDUklQVE9SUyAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXygyNikpe1xuXHQgICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcblx0ICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG5cdCAgfVxuXHR9XG5cblx0JGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5cdGZvcih2YXIgc3ltYm9scyA9IChcblx0ICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuXHQgICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcblx0KS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cblx0Zm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG5cdCAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG5cdCAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG5cdCAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG5cdCAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuXHQgICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG5cdCAgfSxcblx0ICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcblx0ICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuXHQgICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG5cdCAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG5cdCAgfSxcblx0ICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG5cdCAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxuXHR9KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuXHQgIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcblx0ICBjcmVhdGU6ICRjcmVhdGUsXG5cdCAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG5cdCAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcblx0ICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuXHQgIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuXHQgIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcblx0ICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG5cdCAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcblx0ICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcblx0ICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG5cdCAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG5cdH0pO1xuXG5cdC8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuXHQkSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcblx0ICB2YXIgUyA9ICRTeW1ib2woKTtcblx0ICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuXHQgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuXHQgIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG5cdCAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcblx0fSkpLCAnSlNPTicsIHtcblx0ICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG5cdCAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcblx0ICAgIHZhciBhcmdzID0gW2l0XVxuXHQgICAgICAsIGkgICAgPSAxXG5cdCAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcblx0ICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG5cdCAgICByZXBsYWNlciA9IGFyZ3NbMV07XG5cdCAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcblx0ICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcblx0ICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG5cdCAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuXHQgICAgfTtcblx0ICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcblx0ICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcblx0ICB9XG5cdH0pO1xuXG5cdC8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcblx0JFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgX193ZWJwYWNrX3JlcXVpcmVfXyg4KSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuXHQvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5cdHNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcblx0Ly8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuXHRzZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuXHQvLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuXHRzZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuLyoqKi8gfSxcbi8qIDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5cdHZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuXHQgID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0aWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuXHQgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxuXHRtb2R1bGUuZXhwb3J0cyA9ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gISFleGVjKCk7XG5cdCAgfSBjYXRjaChlKXtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0fTtcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnbG9iYWwgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBjb3JlICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpXG5cdCAgLCBoaWRlICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpXG5cdCAgLCByZWRlZmluZSAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KVxuXHQgICwgY3R4ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOClcblx0ICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG5cdHZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcblx0ICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuXHQgICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG5cdCAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcblx0ICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuXHQgICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG5cdCAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuXHQgICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuXHQgICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuXHQgICAgLCBrZXksIG93biwgb3V0LCBleHA7XG5cdCAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG5cdCAgZm9yKGtleSBpbiBzb3VyY2Upe1xuXHQgICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG5cdCAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuXHQgICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcblx0ICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG5cdCAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuXHQgICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG5cdCAgICAvLyBleHRlbmQgZ2xvYmFsXG5cdCAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG5cdCAgICAvLyBleHBvcnRcblx0ICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG5cdCAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuXHQgIH1cblx0fTtcblx0Z2xvYmFsLmNvcmUgPSBjb3JlO1xuXHQvLyB0eXBlIGJpdG1hcFxuXHQkZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuXHQkZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuXHQkZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuXHQkZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG5cdCRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuXHQkZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcblx0JGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG5cdCRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcblx0bW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG4vKioqLyB9LFxuLyogNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0dmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcblx0aWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbi8qKiovIH0sXG4vKiA4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZFAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSlcblx0ICAsIGNyZWF0ZURlc2MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcblx0ICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuXHR9IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcblx0ICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuXHQgIHJldHVybiBvYmplY3Q7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYW5PYmplY3QgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgSUU4X0RPTV9ERUZJTkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKVxuXHQgICwgdG9QcmltaXRpdmUgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KVxuXHQgICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cblx0ZXhwb3J0cy5mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuXHQgIGFuT2JqZWN0KE8pO1xuXHQgIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcblx0ICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcblx0ICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuXHQgICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuXHQgIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblx0ICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcblx0ICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG5cdCAgcmV0dXJuIE87XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gIV9fd2VicGFja19yZXF1aXJlX18oNCkgJiYgIV9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fd2VicGFja19yZXF1aXJlX18oMTMpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5kb2N1bWVudFxuXHQgIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuXHQgICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHQvLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuXHQvLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcblx0ICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcblx0ICB2YXIgZm4sIHZhbDtcblx0ICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG5cdCAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuXHQgIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG5cdCAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG5cdCAgcmV0dXJuIHtcblx0ICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcblx0ICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcblx0ICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcblx0ICAgIHZhbHVlICAgICAgIDogdmFsdWVcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnbG9iYWwgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBoaWRlICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpXG5cdCAgLCBoYXMgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCBTUkMgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KSgnc3JjJylcblx0ICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcblx0ICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cblx0ICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDcpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcblx0fTtcblxuXHQobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG5cdCAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG5cdCAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG5cdCAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuXHQgIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG5cdCAgaWYoTyA9PT0gZ2xvYmFsKXtcblx0ICAgIE9ba2V5XSA9IHZhbDtcblx0ICB9IGVsc2Uge1xuXHQgICAgaWYoIXNhZmUpe1xuXHQgICAgICBkZWxldGUgT1trZXldO1xuXHQgICAgICBoaWRlKE8sIGtleSwgdmFsKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG5cdCAgICAgIGVsc2UgaGlkZShPLCBrZXksIHZhbCk7XG5cdCAgICB9XG5cdCAgfVxuXHQvLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcblx0fSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG5cdCAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgaWQgPSAwXG5cdCAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcblx0ICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xuXHR2YXIgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG5cdCAgYUZ1bmN0aW9uKGZuKTtcblx0ICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuXHQgIHN3aXRjaChsZW5ndGgpe1xuXHQgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuXHQgICAgfTtcblx0ICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcblx0ICAgIH07XG5cdCAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG5cdCAgICB9O1xuXHQgIH1cblx0ICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG5cdCAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBNRVRBICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpKCdtZXRhJylcblx0ICAsIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGhhcyAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgc2V0RGVzYyAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmZcblx0ICAsIGlkICAgICAgID0gMDtcblx0dmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gdHJ1ZTtcblx0fTtcblx0dmFyIEZSRUVaRSA9ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcblx0fSk7XG5cdHZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuXHQgIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuXHQgICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG5cdCAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuXHQgIH19KTtcblx0fTtcblx0dmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcblx0ICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG5cdCAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuXHQgIGlmKCFoYXMoaXQsIE1FVEEpKXtcblx0ICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG5cdCAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuXHQgICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcblx0ICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcblx0ICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG5cdCAgICBzZXRNZXRhKGl0KTtcblx0ICAvLyByZXR1cm4gb2JqZWN0IElEXG5cdCAgfSByZXR1cm4gaXRbTUVUQV0uaTtcblx0fTtcblx0dmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcblx0ICBpZighaGFzKGl0LCBNRVRBKSl7XG5cdCAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuXHQgICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG5cdCAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuXHQgICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG5cdCAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuXHQgICAgc2V0TWV0YShpdCk7XG5cdCAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcblx0ICB9IHJldHVybiBpdFtNRVRBXS53O1xuXHR9O1xuXHQvLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcblx0dmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuXHQgIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cdHZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgS0VZOiAgICAgIE1FVEEsXG5cdCAgTkVFRDogICAgIGZhbHNlLFxuXHQgIGZhc3RLZXk6ICBmYXN0S2V5LFxuXHQgIGdldFdlYWs6ICBnZXRXZWFrLFxuXHQgIG9uRnJlZXplOiBvbkZyZWV6ZVxuXHR9O1xuXG4vKioqLyB9LFxuLyogMjEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuXHQgICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG5cdCAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGRlZiA9IF9fd2VicGFja19yZXF1aXJlX18oOSkuZlxuXHQgICwgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgVEFHID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ3RvU3RyaW5nVGFnJyk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcblx0ICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIHN0b3JlICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKSgnd2tzJylcblx0ICAsIHVpZCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KVxuXHQgICwgU3ltYm9sICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMikuU3ltYm9sXG5cdCAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG5cdHZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG5cdCAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG5cdCAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xuXHR9O1xuXG5cdCRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cbi8qKiovIH0sXG4vKiAyNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0ZXhwb3J0cy5mID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XG5cbi8qKiovIH0sXG4vKiAyNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdsb2JhbCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgY29yZSAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpXG5cdCAgLCBMSUJSQVJZICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpXG5cdCAgLCB3a3NFeHQgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpXG5cdCAgLCBkZWZpbmVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oOSkuZjtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcblx0ICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuXHQgIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cbi8qKiovIH0sXG4vKiAyNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdldEtleXMgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpXG5cdCAgLCB0b0lPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcblx0ICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcblx0ICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuXHQgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuXHQgICAgLCBpbmRleCAgPSAwXG5cdCAgICAsIGtleTtcblx0ICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxuXHR2YXIgJGtleXMgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KVxuXHQgICwgZW51bUJ1Z0tleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG5cdCAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDI5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgaGFzICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgdG9JT2JqZWN0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIGFycmF5SW5kZXhPZiA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpKGZhbHNlKVxuXHQgICwgSUVfUFJPVE8gICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOCkoJ0lFX1BST1RPJyk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcblx0ICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcblx0ICAgICwgaSAgICAgID0gMFxuXHQgICAgLCByZXN1bHQgPSBbXVxuXHQgICAgLCBrZXk7XG5cdCAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuXHQgIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcblx0ICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG5cdCAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuXHQgIH1cblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMzAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xuXHR2YXIgSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpXG5cdCAgLCBkZWZpbmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDMxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xuXHR2YXIgY29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cdG1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMzIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAzMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAzNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuXHQvLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xuXHR2YXIgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIHRvTGVuZ3RoICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCB0b0luZGV4ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcblx0ICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG5cdCAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG5cdCAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcblx0ICAgICAgLCB2YWx1ZTtcblx0ICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cblx0ICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcblx0ICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuXHQgICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcblx0ICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3Rcblx0ICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuXHQgICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG5cdCAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDM1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyA3LjEuMTUgVG9MZW5ndGhcblx0dmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpXG5cdCAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblx0fTtcblxuLyoqKi8gfSxcbi8qIDM2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyA3LjEuNCBUb0ludGVnZXJcblx0dmFyIGNlaWwgID0gTWF0aC5jZWlsXG5cdCAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMzcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KVxuXHQgICwgbWF4ICAgICAgID0gTWF0aC5tYXhcblx0ICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuXHQgIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcblx0ICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDM4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgc2hhcmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSkoJ2tleXMnKVxuXHQgICwgdWlkICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcblx0ICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMzkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcblx0bW9kdWxlLmV4cG9ydHMgPSAoXG5cdCAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcblx0KS5zcGxpdCgnLCcpO1xuXG4vKioqLyB9LFxuLyogNDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG5cdHZhciBnZXRLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOClcblx0ICAsIGdPUFMgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKVxuXHQgICwgcElFICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG5cdCAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG5cdCAgaWYoZ2V0U3ltYm9scyl7XG5cdCAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG5cdCAgICAgICwgaXNFbnVtICA9IHBJRS5mXG5cdCAgICAgICwgaSAgICAgICA9IDBcblx0ICAgICAgLCBrZXk7XG5cdCAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcblx0ICB9IHJldHVybiByZXN1bHQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA0MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0ZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqKi8gfSxcbi8qIDQyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqKi8gfSxcbi8qIDQzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxuXHR2YXIgY29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cdG1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG5cdCAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA0NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG5cdHZhciBhbk9iamVjdCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBkUHMgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDUpXG5cdCAgLCBlbnVtQnVnS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMzkpXG5cdCAgLCBJRV9QUk9UTyAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpKCdJRV9QUk9UTycpXG5cdCAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cblx0ICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cblx0Ly8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxuXHR2YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG5cdCAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcblx0ICB2YXIgaWZyYW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMykoJ2lmcmFtZScpXG5cdCAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuXHQgICAgLCBsdCAgICAgPSAnPCdcblx0ICAgICwgZ3QgICAgID0gJz4nXG5cdCAgICAsIGlmcmFtZURvY3VtZW50O1xuXHQgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHQgIF9fd2VicGFja19yZXF1aXJlX18oNDYpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cdCAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuXHQgIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG5cdCAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuXHQgIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdCAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuXHQgIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcblx0ICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuXHQgIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuXHQgIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcblx0ICByZXR1cm4gY3JlYXRlRGljdCgpO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG5cdCAgdmFyIHJlc3VsdDtcblx0ICBpZihPICE9PSBudWxsKXtcblx0ICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcblx0ICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcblx0ICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuXHQgICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuXHQgICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG5cdCAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcblx0ICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG5cdH07XG5cblxuLyoqKi8gfSxcbi8qIDQ1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZFAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpXG5cdCAgLCBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBnZXRLZXlzICA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcblx0ICBhbk9iamVjdChPKTtcblx0ICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuXHQgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuXHQgICAgLCBpID0gMFxuXHQgICAgLCBQO1xuXHQgIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcblx0ICByZXR1cm4gTztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDQ2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMikuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4vKioqLyB9LFxuLyogNDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcblx0dmFyIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCBnT1BOICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KS5mXG5cdCAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxuXHR2YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuXHQgID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG5cdHZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuIGdPUE4oaXQpO1xuXHQgIH0gY2F0Y2goZSl7XG5cdCAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcblx0ICB9XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuXHQgIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG5cdH07XG5cblxuLyoqKi8gfSxcbi8qIDQ4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG5cdHZhciAka2V5cyAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSlcblx0ICAsIGhpZGRlbktleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuXHRleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuXHQgIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDQ5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgcElFICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKVxuXHQgICwgY3JlYXRlRGVzYyAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KVxuXHQgICwgdG9JT2JqZWN0ICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgdG9QcmltaXRpdmUgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KVxuXHQgICwgaGFzICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCBJRThfRE9NX0RFRklORSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpXG5cdCAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cblx0ZXhwb3J0cy5mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG5cdCAgTyA9IHRvSU9iamVjdChPKTtcblx0ICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG5cdCAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcblx0ICAgIHJldHVybiBnT1BEKE8sIFApO1xuXHQgIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblx0ICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0Ly8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXyg0KSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mfSk7XG5cbi8qKiovIH0sXG4vKiA1MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHQvLyAxOS4xLjIuMyAvIDE1LjIuMy43IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oNCksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydGllczogX193ZWJwYWNrX3JlcXVpcmVfXyg0NSl9KTtcblxuLyoqKi8gfSxcbi8qIDUyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG5cdHZhciB0b0lPYmplY3QgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KS5mO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNTMpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG5cdCAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGNvcmUgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpXG5cdCAgLCBmYWlscyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuXHQgIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cblx0ICAgICwgZXhwID0ge307XG5cdCAgZXhwW0tFWV0gPSBleGVjKGZuKTtcblx0ICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA1NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdC8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IF9fd2VicGFja19yZXF1aXJlX18oNDQpfSk7XG5cbi8qKiovIH0sXG4vKiA1NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG5cdHZhciB0b09iamVjdCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgJGdldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nyk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuXHQgICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcblx0dmFyIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA1NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcblx0dmFyIGhhcyAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgdG9PYmplY3QgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgSUVfUFJPVE8gICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KSgnSUVfUFJPVE8nKVxuXHQgICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuXHQgIE8gPSB0b09iamVjdChPKTtcblx0ICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcblx0ICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcblx0ICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblx0ICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxuXHR2YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgJGtleXMgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKSgna2V5cycsIGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuXHQgICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA1OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MykoJ2dldE93blByb3BlcnR5TmFtZXMnLCBmdW5jdGlvbigpe1xuXHQgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KS5mO1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDYwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBtZXRhICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjApLm9uRnJlZXplO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNTMpKCdmcmVlemUnLCBmdW5jdGlvbigkZnJlZXplKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KXtcblx0ICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUobWV0YShpdCkpIDogaXQ7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA2MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBtZXRhICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjApLm9uRnJlZXplO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNTMpKCdzZWFsJywgZnVuY3Rpb24oJHNlYWwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KXtcblx0ICAgIHJldHVybiAkc2VhbCAmJiBpc09iamVjdChpdCkgPyAkc2VhbChtZXRhKGl0KSkgOiBpdDtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDYyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMTUgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKE8pXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBtZXRhICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjApLm9uRnJlZXplO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNTMpKCdwcmV2ZW50RXh0ZW5zaW9ucycsIGZ1bmN0aW9uKCRwcmV2ZW50RXh0ZW5zaW9ucyl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KXtcblx0ICAgIHJldHVybiAkcHJldmVudEV4dGVuc2lvbnMgJiYgaXNPYmplY3QoaXQpID8gJHByZXZlbnRFeHRlbnNpb25zKG1ldGEoaXQpKSA6IGl0O1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNjMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4xMiBPYmplY3QuaXNGcm96ZW4oTylcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MykoJ2lzRnJvemVuJywgZnVuY3Rpb24oJGlzRnJvemVuKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gaXNGcm96ZW4oaXQpe1xuXHQgICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc0Zyb3plbiA/ICRpc0Zyb3plbihpdCkgOiBmYWxzZSA6IHRydWU7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA2NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjEzIE9iamVjdC5pc1NlYWxlZChPKVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKSgnaXNTZWFsZWQnLCBmdW5jdGlvbigkaXNTZWFsZWQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBpc1NlYWxlZChpdCl7XG5cdCAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzU2VhbGVkID8gJGlzU2VhbGVkKGl0KSA6IGZhbHNlIDogdHJ1ZTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDY1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMTEgT2JqZWN0LmlzRXh0ZW5zaWJsZShPKVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKSgnaXNFeHRlbnNpYmxlJywgZnVuY3Rpb24oJGlzRXh0ZW5zaWJsZSl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCl7XG5cdCAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUoaXQpIDogdHJ1ZSA6IGZhbHNlO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNjYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IF9fd2VicGFja19yZXF1aXJlX18oNjcpfSk7XG5cbi8qKiovIH0sXG4vKiA2NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG5cdHZhciBnZXRLZXlzICA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpXG5cdCAgLCBnT1BTICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpXG5cdCAgLCBwSUUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpXG5cdCAgLCB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCBJT2JqZWN0ICA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpXG5cdCAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cblx0Ly8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5cdG1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHZhciBBID0ge31cblx0ICAgICwgQiA9IHt9XG5cdCAgICAsIFMgPSBTeW1ib2woKVxuXHQgICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0Jztcblx0ICBBW1NdID0gNztcblx0ICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG5cdCAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG5cdH0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHQgIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcblx0ICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAsIGluZGV4ID0gMVxuXHQgICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG5cdCAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcblx0ICB3aGlsZShhTGVuID4gaW5kZXgpe1xuXHQgICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuXHQgICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcblx0ICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuXHQgICAgICAsIGogICAgICA9IDBcblx0ICAgICAgLCBrZXk7XG5cdCAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuXHQgIH0gcmV0dXJuIFQ7XG5cdH0gOiAkYXNzaWduO1xuXG4vKioqLyB9LFxuLyogNjggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMy4xMCBPYmplY3QuaXModmFsdWUxLCB2YWx1ZTIpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0JGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7aXM6IF9fd2VicGFja19yZXF1aXJlX18oNjkpfSk7XG5cbi8qKiovIH0sXG4vKiA2OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gNy4yLjkgU2FtZVZhbHVlKHgsIHkpXG5cdG1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpe1xuXHQgIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNzAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0JGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IF9fd2VicGFja19yZXF1aXJlX18oNzEpLnNldH0pO1xuXG4vKioqLyB9LFxuLyogNzEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0dmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuXHQgIGFuT2JqZWN0KE8pO1xuXHQgIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdCAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICBzZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KShGdW5jdGlvbi5jYWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuXHQgICAgICAgIHNldCh0ZXN0LCBbXSk7XG5cdCAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG5cdCAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuXHQgICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuXHQgICAgICAgIGNoZWNrKE8sIHByb3RvKTtcblx0ICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuXHQgICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcblx0ICAgICAgICByZXR1cm4gTztcblx0ICAgICAgfTtcblx0ICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG5cdCAgY2hlY2s6IGNoZWNrXG5cdH07XG5cbi8qKiovIH0sXG4vKiA3MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcblx0dmFyIGNsYXNzb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDczKVxuXHQgICwgdGVzdCAgICA9IHt9O1xuXHR0ZXN0W19fd2VicGFja19yZXF1aXJlX18oMjMpKCd0b1N0cmluZ1RhZycpXSA9ICd6Jztcblx0aWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG5cdCAgX193ZWJwYWNrX3JlcXVpcmVfXygxNikoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcblx0ICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcblx0ICB9LCB0cnVlKTtcblx0fVxuXG4vKioqLyB9LFxuLyogNzMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG5cdHZhciBjb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKVxuXHQgICwgVEFHID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ3RvU3RyaW5nVGFnJylcblx0ICAvLyBFUzMgd3JvbmcgaGVyZVxuXHQgICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cblx0Ly8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3Jcblx0dmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gaXRba2V5XTtcblx0ICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgdmFyIE8sIFQsIEI7XG5cdCAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG5cdCAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2Vcblx0ICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcblx0ICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuXHQgICAgOiBBUkcgPyBjb2YoTylcblx0ICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcblx0ICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNzQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjIuMy4yIC8gMTUuMy40LjUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQodGhpc0FyZywgYXJncy4uLilcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QLCAnRnVuY3Rpb24nLCB7YmluZDogX193ZWJwYWNrX3JlcXVpcmVfXyg3NSl9KTtcblxuLyoqKi8gfSxcbi8qIDc1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBhRnVuY3Rpb24gID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsIGlzT2JqZWN0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgaW52b2tlICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNzYpXG5cdCAgLCBhcnJheVNsaWNlID0gW10uc2xpY2Vcblx0ICAsIGZhY3RvcmllcyAgPSB7fTtcblxuXHR2YXIgY29uc3RydWN0ID0gZnVuY3Rpb24oRiwgbGVuLCBhcmdzKXtcblx0ICBpZighKGxlbiBpbiBmYWN0b3JpZXMpKXtcblx0ICAgIGZvcih2YXIgbiA9IFtdLCBpID0gMDsgaSA8IGxlbjsgaSsrKW5baV0gPSAnYVsnICsgaSArICddJztcblx0ICAgIGZhY3Rvcmllc1tsZW5dID0gRnVuY3Rpb24oJ0YsYScsICdyZXR1cm4gbmV3IEYoJyArIG4uam9pbignLCcpICsgJyknKTtcblx0ICB9IHJldHVybiBmYWN0b3JpZXNbbGVuXShGLCBhcmdzKTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qLCBhcmdzLi4uICovKXtcblx0ICB2YXIgZm4gICAgICAgPSBhRnVuY3Rpb24odGhpcylcblx0ICAgICwgcGFydEFyZ3MgPSBhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0ICB2YXIgYm91bmQgPSBmdW5jdGlvbigvKiBhcmdzLi4uICovKXtcblx0ICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMpKTtcblx0ICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmQgPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGludm9rZShmbiwgYXJncywgdGhhdCk7XG5cdCAgfTtcblx0ICBpZihpc09iamVjdChmbi5wcm90b3R5cGUpKWJvdW5kLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcblx0ICByZXR1cm4gYm91bmQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA3NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuXHQgIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcblx0ICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuXHQgICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG5cdCAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG5cdCAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG5cdCAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG5cdCAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG5cdCAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG5cdCAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG5cdCAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG5cdCAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG5cdCAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG5cdCAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNzcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBkUCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mXG5cdCAgLCBjcmVhdGVEZXNjID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSlcblx0ICAsIGhhcyAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCBGUHJvdG8gICAgID0gRnVuY3Rpb24ucHJvdG90eXBlXG5cdCAgLCBuYW1lUkUgICAgID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvXG5cdCAgLCBOQU1FICAgICAgID0gJ25hbWUnO1xuXG5cdHZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIHRydWU7XG5cdH07XG5cblx0Ly8gMTkuMi40LjIgbmFtZVxuXHROQU1FIGluIEZQcm90byB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpICYmIGRQKEZQcm90bywgTkFNRSwge1xuXHQgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uKCl7XG5cdCAgICB0cnkge1xuXHQgICAgICB2YXIgdGhhdCA9IHRoaXNcblx0ICAgICAgICAsIG5hbWUgPSAoJycgKyB0aGF0KS5tYXRjaChuYW1lUkUpWzFdO1xuXHQgICAgICBoYXModGhhdCwgTkFNRSkgfHwgIWlzRXh0ZW5zaWJsZSh0aGF0KSB8fCBkUCh0aGF0LCBOQU1FLCBjcmVhdGVEZXNjKDUsIG5hbWUpKTtcblx0ICAgICAgcmV0dXJuIG5hbWU7XG5cdCAgICB9IGNhdGNoKGUpe1xuXHQgICAgICByZXR1cm4gJyc7XG5cdCAgICB9XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDc4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBpc09iamVjdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBnZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgLCBIQVNfSU5TVEFOQ0UgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdoYXNJbnN0YW5jZScpXG5cdCAgLCBGdW5jdGlvblByb3RvICA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblx0Ly8gMTkuMi4zLjYgRnVuY3Rpb24ucHJvdG90eXBlW0BAaGFzSW5zdGFuY2VdKFYpXG5cdGlmKCEoSEFTX0lOU1RBTkNFIGluIEZ1bmN0aW9uUHJvdG8pKV9fd2VicGFja19yZXF1aXJlX18oOSkuZihGdW5jdGlvblByb3RvLCBIQVNfSU5TVEFOQ0UsIHt2YWx1ZTogZnVuY3Rpb24oTyl7XG5cdCAgaWYodHlwZW9mIHRoaXMgIT0gJ2Z1bmN0aW9uJyB8fCAhaXNPYmplY3QoTykpcmV0dXJuIGZhbHNlO1xuXHQgIGlmKCFpc09iamVjdCh0aGlzLnByb3RvdHlwZSkpcmV0dXJuIE8gaW5zdGFuY2VvZiB0aGlzO1xuXHQgIC8vIGZvciBlbnZpcm9ubWVudCB3L28gbmF0aXZlIGBAQGhhc0luc3RhbmNlYCBsb2dpYyBlbm91Z2ggYGluc3RhbmNlb2ZgLCBidXQgYWRkIHRoaXM6XG5cdCAgd2hpbGUoTyA9IGdldFByb3RvdHlwZU9mKE8pKWlmKHRoaXMucHJvdG90eXBlID09PSBPKXJldHVybiB0cnVlO1xuXHQgIHJldHVybiBmYWxzZTtcblx0fX0pO1xuXG4vKioqLyB9LFxuLyogNzkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGdsb2JhbCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgaGFzICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCBjb2YgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpXG5cdCAgLCBpbmhlcml0SWZSZXF1aXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oODApXG5cdCAgLCB0b1ByaW1pdGl2ZSAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpXG5cdCAgLCBmYWlscyAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsIGdPUE4gICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OCkuZlxuXHQgICwgZ09QRCAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KS5mXG5cdCAgLCBkUCAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSkuZlxuXHQgICwgJHRyaW0gICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgxKS50cmltXG5cdCAgLCBOVU1CRVIgICAgICAgICAgICA9ICdOdW1iZXInXG5cdCAgLCAkTnVtYmVyICAgICAgICAgICA9IGdsb2JhbFtOVU1CRVJdXG5cdCAgLCBCYXNlICAgICAgICAgICAgICA9ICROdW1iZXJcblx0ICAsIHByb3RvICAgICAgICAgICAgID0gJE51bWJlci5wcm90b3R5cGVcblx0ICAvLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcblx0ICAsIEJST0tFTl9DT0YgICAgICAgID0gY29mKF9fd2VicGFja19yZXF1aXJlX18oNDQpKHByb3RvKSkgPT0gTlVNQkVSXG5cdCAgLCBUUklNICAgICAgICAgICAgICA9ICd0cmltJyBpbiBTdHJpbmcucHJvdG90eXBlO1xuXG5cdC8vIDcuMS4zIFRvTnVtYmVyKGFyZ3VtZW50KVxuXHR2YXIgdG9OdW1iZXIgPSBmdW5jdGlvbihhcmd1bWVudCl7XG5cdCAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcblx0ICBpZih0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMil7XG5cdCAgICBpdCA9IFRSSU0gPyBpdC50cmltKCkgOiAkdHJpbShpdCwgMyk7XG5cdCAgICB2YXIgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApXG5cdCAgICAgICwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlO1xuXHQgICAgaWYoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSl7XG5cdCAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcblx0ICAgICAgaWYodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuXHQgICAgfSBlbHNlIGlmKGZpcnN0ID09PSA0OCl7XG5cdCAgICAgIHN3aXRjaChpdC5jaGFyQ29kZUF0KDEpKXtcblx0ICAgICAgICBjYXNlIDY2IDogY2FzZSA5OCAgOiByYWRpeCA9IDI7IG1heENvZGUgPSA0OTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wYlswMV0rJC9pXG5cdCAgICAgICAgY2FzZSA3OSA6IGNhc2UgMTExIDogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcblx0ICAgICAgICBkZWZhdWx0IDogcmV0dXJuICtpdDtcblx0ICAgICAgfVxuXHQgICAgICBmb3IodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspe1xuXHQgICAgICAgIGNvZGUgPSBkaWdpdHMuY2hhckNvZGVBdChpKTtcblx0ICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcblx0ICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuXHQgICAgICAgIGlmKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSlyZXR1cm4gTmFOO1xuXHQgICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcblx0ICAgIH1cblx0ICB9IHJldHVybiAraXQ7XG5cdH07XG5cblx0aWYoISROdW1iZXIoJyAwbzEnKSB8fCAhJE51bWJlcignMGIxJykgfHwgJE51bWJlcignKzB4MScpKXtcblx0ICAkTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKXtcblx0ICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlXG5cdCAgICAgICwgdGhhdCA9IHRoaXM7XG5cdCAgICByZXR1cm4gdGhhdCBpbnN0YW5jZW9mICROdW1iZXJcblx0ICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG5cdCAgICAgICYmIChCUk9LRU5fQ09GID8gZmFpbHMoZnVuY3Rpb24oKXsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG5cdCAgICAgICAgPyBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSh0b051bWJlcihpdCkpLCB0aGF0LCAkTnVtYmVyKSA6IHRvTnVtYmVyKGl0KTtcblx0ICB9O1xuXHQgIGZvcih2YXIga2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCkgPyBnT1BOKEJhc2UpIDogKFxuXHQgICAgLy8gRVMzOlxuXHQgICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuXHQgICAgLy8gRVM2IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVM2IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG5cdCAgICAnRVBTSUxPTixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixNQVhfU0FGRV9JTlRFR0VSLCcgK1xuXHQgICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG5cdCAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKyl7XG5cdCAgICBpZihoYXMoQmFzZSwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcygkTnVtYmVyLCBrZXkpKXtcblx0ICAgICAgZFAoJE51bWJlciwga2V5LCBnT1BEKEJhc2UsIGtleSkpO1xuXHQgICAgfVxuXHQgIH1cblx0ICAkTnVtYmVyLnByb3RvdHlwZSA9IHByb3RvO1xuXHQgIHByb3RvLmNvbnN0cnVjdG9yID0gJE51bWJlcjtcblx0ICBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KShnbG9iYWwsIE5VTUJFUiwgJE51bWJlcik7XG5cdH1cblxuLyoqKi8gfSxcbi8qIDgwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgaXNPYmplY3QgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgc2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcxKS5zZXQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgdGFyZ2V0LCBDKXtcblx0ICB2YXIgUCwgUyA9IHRhcmdldC5jb25zdHJ1Y3Rvcjtcblx0ICBpZihTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKXtcblx0ICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuXHQgIH0gcmV0dXJuIHRoYXQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA4MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBkZWZpbmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMylcblx0ICAsIGZhaWxzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCBzcGFjZXMgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4Milcblx0ICAsIHNwYWNlICAgPSAnWycgKyBzcGFjZXMgKyAnXSdcblx0ICAsIG5vbiAgICAgPSAnXFx1MjAwYlxcdTAwODUnXG5cdCAgLCBsdHJpbSAgID0gUmVnRXhwKCdeJyArIHNwYWNlICsgc3BhY2UgKyAnKicpXG5cdCAgLCBydHJpbSAgID0gUmVnRXhwKHNwYWNlICsgc3BhY2UgKyAnKiQnKTtcblxuXHR2YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbihLRVksIGV4ZWMsIEFMSUFTKXtcblx0ICB2YXIgZXhwICAgPSB7fTtcblx0ICB2YXIgRk9SQ0UgPSBmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgcmV0dXJuICEhc3BhY2VzW0tFWV0oKSB8fCBub25bS0VZXSgpICE9IG5vbjtcblx0ICB9KTtcblx0ICB2YXIgZm4gPSBleHBbS0VZXSA9IEZPUkNFID8gZXhlYyh0cmltKSA6IHNwYWNlc1tLRVldO1xuXHQgIGlmKEFMSUFTKWV4cFtBTElBU10gPSBmbjtcblx0ICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFLCAnU3RyaW5nJywgZXhwKTtcblx0fTtcblxuXHQvLyAxIC0+IFN0cmluZyN0cmltTGVmdFxuXHQvLyAyIC0+IFN0cmluZyN0cmltUmlnaHRcblx0Ly8gMyAtPiBTdHJpbmcjdHJpbVxuXHR2YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbihzdHJpbmcsIFRZUEUpe1xuXHQgIHN0cmluZyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuXHQgIGlmKFRZUEUgJiAxKXN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG5cdCAgaWYoVFlQRSAmIDIpc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcblx0ICByZXR1cm4gc3RyaW5nO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG5cbi8qKiovIH0sXG4vKiA4MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICtcblx0ICAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG5cbi8qKiovIH0sXG4vKiA4MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9JbnRlZ2VyICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNilcblx0ICAsIGFOdW1iZXJWYWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oODQpXG5cdCAgLCByZXBlYXQgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDg1KVxuXHQgICwgJHRvRml4ZWQgICAgID0gMS4udG9GaXhlZFxuXHQgICwgZmxvb3IgICAgICAgID0gTWF0aC5mbG9vclxuXHQgICwgZGF0YSAgICAgICAgID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cdCAgLCBFUlJPUiAgICAgICAgPSAnTnVtYmVyLnRvRml4ZWQ6IGluY29ycmVjdCBpbnZvY2F0aW9uISdcblx0ICAsIFpFUk8gICAgICAgICA9ICcwJztcblxuXHR2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbihuLCBjKXtcblx0ICB2YXIgaSAgPSAtMVxuXHQgICAgLCBjMiA9IGM7XG5cdCAgd2hpbGUoKytpIDwgNil7XG5cdCAgICBjMiArPSBuICogZGF0YVtpXTtcblx0ICAgIGRhdGFbaV0gPSBjMiAlIDFlNztcblx0ICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuXHQgIH1cblx0fTtcblx0dmFyIGRpdmlkZSA9IGZ1bmN0aW9uKG4pe1xuXHQgIHZhciBpID0gNlxuXHQgICAgLCBjID0gMDtcblx0ICB3aGlsZSgtLWkgPj0gMCl7XG5cdCAgICBjICs9IGRhdGFbaV07XG5cdCAgICBkYXRhW2ldID0gZmxvb3IoYyAvIG4pO1xuXHQgICAgYyA9IChjICUgbikgKiAxZTc7XG5cdCAgfVxuXHR9O1xuXHR2YXIgbnVtVG9TdHJpbmcgPSBmdW5jdGlvbigpe1xuXHQgIHZhciBpID0gNlxuXHQgICAgLCBzID0gJyc7XG5cdCAgd2hpbGUoLS1pID49IDApe1xuXHQgICAgaWYocyAhPT0gJycgfHwgaSA9PT0gMCB8fCBkYXRhW2ldICE9PSAwKXtcblx0ICAgICAgdmFyIHQgPSBTdHJpbmcoZGF0YVtpXSk7XG5cdCAgICAgIHMgPSBzID09PSAnJyA/IHQgOiBzICsgcmVwZWF0LmNhbGwoWkVSTywgNyAtIHQubGVuZ3RoKSArIHQ7XG5cdCAgICB9XG5cdCAgfSByZXR1cm4gcztcblx0fTtcblx0dmFyIHBvdyA9IGZ1bmN0aW9uKHgsIG4sIGFjYyl7XG5cdCAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xuXHR9O1xuXHR2YXIgbG9nID0gZnVuY3Rpb24oeCl7XG5cdCAgdmFyIG4gID0gMFxuXHQgICAgLCB4MiA9IHg7XG5cdCAgd2hpbGUoeDIgPj0gNDA5Nil7XG5cdCAgICBuICs9IDEyO1xuXHQgICAgeDIgLz0gNDA5Njtcblx0ICB9XG5cdCAgd2hpbGUoeDIgPj0gMil7XG5cdCAgICBuICArPSAxO1xuXHQgICAgeDIgLz0gMjtcblx0ICB9IHJldHVybiBuO1xuXHR9O1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKCEhJHRvRml4ZWQgJiYgKFxuXHQgIDAuMDAwMDgudG9GaXhlZCgzKSAhPT0gJzAuMDAwJyB8fFxuXHQgIDAuOS50b0ZpeGVkKDApICE9PSAnMScgfHxcblx0ICAxLjI1NS50b0ZpeGVkKDIpICE9PSAnMS4yNScgfHxcblx0ICAxMDAwMDAwMDAwMDAwMDAwMTI4Li50b0ZpeGVkKDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCdcblx0KSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG5cdCAgJHRvRml4ZWQuY2FsbCh7fSk7XG5cdH0pKSwgJ051bWJlcicsIHtcblx0ICB0b0ZpeGVkOiBmdW5jdGlvbiB0b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKXtcblx0ICAgIHZhciB4ID0gYU51bWJlclZhbHVlKHRoaXMsIEVSUk9SKVxuXHQgICAgICAsIGYgPSB0b0ludGVnZXIoZnJhY3Rpb25EaWdpdHMpXG5cdCAgICAgICwgcyA9ICcnXG5cdCAgICAgICwgbSA9IFpFUk9cblx0ICAgICAgLCBlLCB6LCBqLCBrO1xuXHQgICAgaWYoZiA8IDAgfHwgZiA+IDIwKXRocm93IFJhbmdlRXJyb3IoRVJST1IpO1xuXHQgICAgaWYoeCAhPSB4KXJldHVybiAnTmFOJztcblx0ICAgIGlmKHggPD0gLTFlMjEgfHwgeCA+PSAxZTIxKXJldHVybiBTdHJpbmcoeCk7XG5cdCAgICBpZih4IDwgMCl7XG5cdCAgICAgIHMgPSAnLSc7XG5cdCAgICAgIHggPSAteDtcblx0ICAgIH1cblx0ICAgIGlmKHggPiAxZS0yMSl7XG5cdCAgICAgIGUgPSBsb2coeCAqIHBvdygyLCA2OSwgMSkpIC0gNjk7XG5cdCAgICAgIHogPSBlIDwgMCA/IHggKiBwb3coMiwgLWUsIDEpIDogeCAvIHBvdygyLCBlLCAxKTtcblx0ICAgICAgeiAqPSAweDEwMDAwMDAwMDAwMDAwO1xuXHQgICAgICBlID0gNTIgLSBlO1xuXHQgICAgICBpZihlID4gMCl7XG5cdCAgICAgICAgbXVsdGlwbHkoMCwgeik7XG5cdCAgICAgICAgaiA9IGY7XG5cdCAgICAgICAgd2hpbGUoaiA+PSA3KXtcblx0ICAgICAgICAgIG11bHRpcGx5KDFlNywgMCk7XG5cdCAgICAgICAgICBqIC09IDc7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIG11bHRpcGx5KHBvdygxMCwgaiwgMSksIDApO1xuXHQgICAgICAgIGogPSBlIC0gMTtcblx0ICAgICAgICB3aGlsZShqID49IDIzKXtcblx0ICAgICAgICAgIGRpdmlkZSgxIDw8IDIzKTtcblx0ICAgICAgICAgIGogLT0gMjM7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGRpdmlkZSgxIDw8IGopO1xuXHQgICAgICAgIG11bHRpcGx5KDEsIDEpO1xuXHQgICAgICAgIGRpdmlkZSgyKTtcblx0ICAgICAgICBtID0gbnVtVG9TdHJpbmcoKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBtdWx0aXBseSgwLCB6KTtcblx0ICAgICAgICBtdWx0aXBseSgxIDw8IC1lLCAwKTtcblx0ICAgICAgICBtID0gbnVtVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKFpFUk8sIGYpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBpZihmID4gMCl7XG5cdCAgICAgIGsgPSBtLmxlbmd0aDtcblx0ICAgICAgbSA9IHMgKyAoayA8PSBmID8gJzAuJyArIHJlcGVhdC5jYWxsKFpFUk8sIGYgLSBrKSArIG0gOiBtLnNsaWNlKDAsIGsgLSBmKSArICcuJyArIG0uc2xpY2UoayAtIGYpKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIG0gPSBzICsgbTtcblx0ICAgIH0gcmV0dXJuIG07XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDg0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgY29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIG1zZyl7XG5cdCAgaWYodHlwZW9mIGl0ICE9ICdudW1iZXInICYmIGNvZihpdCkgIT0gJ051bWJlcicpdGhyb3cgVHlwZUVycm9yKG1zZyk7XG5cdCAgcmV0dXJuICtpdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDg1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KVxuXHQgICwgZGVmaW5lZCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpe1xuXHQgIHZhciBzdHIgPSBTdHJpbmcoZGVmaW5lZCh0aGlzKSlcblx0ICAgICwgcmVzID0gJydcblx0ICAgICwgbiAgID0gdG9JbnRlZ2VyKGNvdW50KTtcblx0ICBpZihuIDwgMCB8fCBuID09IEluZmluaXR5KXRocm93IFJhbmdlRXJyb3IoXCJDb3VudCBjYW4ndCBiZSBuZWdhdGl2ZVwiKTtcblx0ICBmb3IoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSlpZihuICYgMSlyZXMgKz0gc3RyO1xuXHQgIHJldHVybiByZXM7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA4NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGZhaWxzICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgYU51bWJlclZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NClcblx0ICAsICR0b1ByZWNpc2lvbiA9IDEuLnRvUHJlY2lzaW9uO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKCRmYWlscyhmdW5jdGlvbigpe1xuXHQgIC8vIElFNy1cblx0ICByZXR1cm4gJHRvUHJlY2lzaW9uLmNhbGwoMSwgdW5kZWZpbmVkKSAhPT0gJzEnO1xuXHR9KSB8fCAhJGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgLy8gVjggfiBBbmRyb2lkIDQuMy1cblx0ICAkdG9QcmVjaXNpb24uY2FsbCh7fSk7XG5cdH0pKSwgJ051bWJlcicsIHtcblx0ICB0b1ByZWNpc2lvbjogZnVuY3Rpb24gdG9QcmVjaXNpb24ocHJlY2lzaW9uKXtcblx0ICAgIHZhciB0aGF0ID0gYU51bWJlclZhbHVlKHRoaXMsICdOdW1iZXIjdG9QcmVjaXNpb246IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuXHQgICAgcmV0dXJuIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gJHRvUHJlY2lzaW9uLmNhbGwodGhhdCkgOiAkdG9QcmVjaXNpb24uY2FsbCh0aGF0LCBwcmVjaXNpb24pOyBcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogODcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjEuMi4xIE51bWJlci5FUFNJTE9OXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtFUFNJTE9OOiBNYXRoLnBvdygyLCAtNTIpfSk7XG5cbi8qKiovIH0sXG4vKiA4OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMS4yLjIgTnVtYmVyLmlzRmluaXRlKG51bWJlcilcblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIF9pc0Zpbml0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMikuaXNGaW5pdGU7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG5cdCAgaXNGaW5pdGU6IGZ1bmN0aW9uIGlzRmluaXRlKGl0KXtcblx0ICAgIHJldHVybiB0eXBlb2YgaXQgPT0gJ251bWJlcicgJiYgX2lzRmluaXRlKGl0KTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogODkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7aXNJbnRlZ2VyOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDkwKX0pO1xuXG4vKioqLyB9LFxuLyogOTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgZmxvb3IgICAgPSBNYXRoLmZsb29yO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzSW50ZWdlcihpdCl7XG5cdCAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA5MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuXHQgIGlzTmFOOiBmdW5jdGlvbiBpc05hTihudW1iZXIpe1xuXHQgICAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDkyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4xLjIuNSBOdW1iZXIuaXNTYWZlSW50ZWdlcihudW1iZXIpXG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBpc0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkwKVxuXHQgICwgYWJzICAgICAgID0gTWF0aC5hYnM7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG5cdCAgaXNTYWZlSW50ZWdlcjogZnVuY3Rpb24gaXNTYWZlSW50ZWdlcihudW1iZXIpe1xuXHQgICAgcmV0dXJuIGlzSW50ZWdlcihudW1iZXIpICYmIGFicyhudW1iZXIpIDw9IDB4MWZmZmZmZmZmZmZmZmY7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDkzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4xLjIuNiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7TUFYX1NBRkVfSU5URUdFUjogMHgxZmZmZmZmZmZmZmZmZn0pO1xuXG4vKioqLyB9LFxuLyogOTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjEuMi4xMCBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUlxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7TUlOX1NBRkVfSU5URUdFUjogLTB4MWZmZmZmZmZmZmZmZmZ9KTtcblxuLyoqKi8gfSxcbi8qIDk1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkcGFyc2VGbG9hdCA9IF9fd2VicGFja19yZXF1aXJlX18oOTYpO1xuXHQvLyAyMC4xLjIuMTIgTnVtYmVyLnBhcnNlRmxvYXQoc3RyaW5nKVxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksICdOdW1iZXInLCB7cGFyc2VGbG9hdDogJHBhcnNlRmxvYXR9KTtcblxuLyoqKi8gfSxcbi8qIDk2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJHBhcnNlRmxvYXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLnBhcnNlRmxvYXRcblx0ICAsICR0cmltICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4MSkudHJpbTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IDEgLyAkcGFyc2VGbG9hdChfX3dlYnBhY2tfcmVxdWlyZV9fKDgyKSArICctMCcpICE9PSAtSW5maW5pdHkgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cil7XG5cdCAgdmFyIHN0cmluZyA9ICR0cmltKFN0cmluZyhzdHIpLCAzKVxuXHQgICAgLCByZXN1bHQgPSAkcGFyc2VGbG9hdChzdHJpbmcpO1xuXHQgIHJldHVybiByZXN1bHQgPT09IDAgJiYgc3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcblx0fSA6ICRwYXJzZUZsb2F0O1xuXG4vKioqLyB9LFxuLyogOTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkcGFyc2VJbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDk4KTtcblx0Ly8gMjAuMS4yLjEzIE51bWJlci5wYXJzZUludChzdHJpbmcsIHJhZGl4KVxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VJbnQgIT0gJHBhcnNlSW50KSwgJ051bWJlcicsIHtwYXJzZUludDogJHBhcnNlSW50fSk7XG5cbi8qKiovIH0sXG4vKiA5OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRwYXJzZUludCA9IF9fd2VicGFja19yZXF1aXJlX18oMikucGFyc2VJbnRcblx0ICAsICR0cmltICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oODEpLnRyaW1cblx0ICAsIHdzICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oODIpXG5cdCAgLCBoZXggICAgICAgPSAvXltcXC0rXT8wW3hYXS87XG5cblx0bW9kdWxlLmV4cG9ydHMgPSAkcGFyc2VJbnQod3MgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod3MgKyAnMHgxNicpICE9PSAyMiA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0ciwgcmFkaXgpe1xuXHQgIHZhciBzdHJpbmcgPSAkdHJpbShTdHJpbmcoc3RyKSwgMyk7XG5cdCAgcmV0dXJuICRwYXJzZUludChzdHJpbmcsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KHN0cmluZykgPyAxNiA6IDEwKSk7XG5cdH0gOiAkcGFyc2VJbnQ7XG5cbi8qKiovIH0sXG4vKiA5OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRwYXJzZUludCA9IF9fd2VicGFja19yZXF1aXJlX18oOTgpO1xuXHQvLyAxOC4yLjUgcGFyc2VJbnQoc3RyaW5nLCByYWRpeClcblx0JGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkYgKiAocGFyc2VJbnQgIT0gJHBhcnNlSW50KSwge3BhcnNlSW50OiAkcGFyc2VJbnR9KTtcblxuLyoqKi8gfSxcbi8qIDEwMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHBhcnNlRmxvYXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDk2KTtcblx0Ly8gMTguMi40IHBhcnNlRmxvYXQoc3RyaW5nKVxuXHQkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuRiAqIChwYXJzZUZsb2F0ICE9ICRwYXJzZUZsb2F0KSwge3BhcnNlRmxvYXQ6ICRwYXJzZUZsb2F0fSk7XG5cbi8qKiovIH0sXG4vKiAxMDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4zIE1hdGguYWNvc2goeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBsb2cxcCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMDIpXG5cdCAgLCBzcXJ0ICAgID0gTWF0aC5zcXJ0XG5cdCAgLCAkYWNvc2ggID0gTWF0aC5hY29zaDtcblxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGFjb3NoXG5cdCAgLy8gVjggYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzUwOVxuXHQgICYmIE1hdGguZmxvb3IoJGFjb3NoKE51bWJlci5NQVhfVkFMVUUpKSA9PSA3MTBcblx0ICAvLyBUb3IgQnJvd3NlciBidWc6IE1hdGguYWNvc2goSW5maW5pdHkpIC0+IE5hTiBcblx0ICAmJiAkYWNvc2goSW5maW5pdHkpID09IEluZmluaXR5XG5cdCksICdNYXRoJywge1xuXHQgIGFjb3NoOiBmdW5jdGlvbiBhY29zaCh4KXtcblx0ICAgIHJldHVybiAoeCA9ICt4KSA8IDEgPyBOYU4gOiB4ID4gOTQ5MDYyNjUuNjI0MjUxNTZcblx0ICAgICAgPyBNYXRoLmxvZyh4KSArIE1hdGguTE4yXG5cdCAgICAgIDogbG9nMXAoeCAtIDEgKyBzcXJ0KHggLSAxKSAqIHNxcnQoeCArIDEpKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxuXHRtb2R1bGUuZXhwb3J0cyA9IE1hdGgubG9nMXAgfHwgZnVuY3Rpb24gbG9nMXAoeCl7XG5cdCAgcmV0dXJuICh4ID0gK3gpID4gLTFlLTggJiYgeCA8IDFlLTggPyB4IC0geCAqIHggLyAyIDogTWF0aC5sb2coMSArIHgpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTAzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuNSBNYXRoLmFzaW5oKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGFzaW5oICA9IE1hdGguYXNpbmg7XG5cblx0ZnVuY3Rpb24gYXNpbmgoeCl7XG5cdCAgcmV0dXJuICFpc0Zpbml0ZSh4ID0gK3gpIHx8IHggPT0gMCA/IHggOiB4IDwgMCA/IC1hc2luaCgteCkgOiBNYXRoLmxvZyh4ICsgTWF0aC5zcXJ0KHggKiB4ICsgMSkpO1xuXHR9XG5cblx0Ly8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmFzaW5oKDApIC0+IC0wIFxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGFzaW5oICYmIDEgLyAkYXNpbmgoMCkgPiAwKSwgJ01hdGgnLCB7YXNpbmg6IGFzaW5ofSk7XG5cbi8qKiovIH0sXG4vKiAxMDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi43IE1hdGguYXRhbmgoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkYXRhbmggID0gTWF0aC5hdGFuaDtcblxuXHQvLyBUb3IgQnJvd3NlciBidWc6IE1hdGguYXRhbmgoLTApIC0+IDAgXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYXRhbmggJiYgMSAvICRhdGFuaCgtMCkgPCAwKSwgJ01hdGgnLCB7XG5cdCAgYXRhbmg6IGZ1bmN0aW9uIGF0YW5oKHgpe1xuXHQgICAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogTWF0aC5sb2coKDEgKyB4KSAvICgxIC0geCkpIC8gMjtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuOSBNYXRoLmNicnQoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBzaWduICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICBjYnJ0OiBmdW5jdGlvbiBjYnJ0KHgpe1xuXHQgICAgcmV0dXJuIHNpZ24oeCA9ICt4KSAqIE1hdGgucG93KE1hdGguYWJzKHgpLCAxIC8gMyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEwNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxuXHRtb2R1bGUuZXhwb3J0cyA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbiBzaWduKHgpe1xuXHQgIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEwNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjExIE1hdGguY2x6MzIoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICBjbHozMjogZnVuY3Rpb24gY2x6MzIoeCl7XG5cdCAgICByZXR1cm4gKHggPj4+PSAwKSA/IDMxIC0gTWF0aC5mbG9vcihNYXRoLmxvZyh4ICsgMC41KSAqIE1hdGguTE9HMkUpIDogMzI7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEwOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgY29zaDogZnVuY3Rpb24gY29zaCh4KXtcblx0ICAgIHJldHVybiAoZXhwKHggPSAreCkgKyBleHAoLXgpKSAvIDI7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEwOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkZXhwbTEgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMTApO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCRleHBtMSAhPSBNYXRoLmV4cG0xKSwgJ01hdGgnLCB7ZXhwbTE6ICRleHBtMX0pO1xuXG4vKioqLyB9LFxuLyogMTEwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxuXHR2YXIgJGV4cG0xID0gTWF0aC5leHBtMTtcblx0bW9kdWxlLmV4cG9ydHMgPSAoISRleHBtMVxuXHQgIC8vIE9sZCBGRiBidWdcblx0ICB8fCAkZXhwbTEoMTApID4gMjIwMjUuNDY1Nzk0ODA2NzE5IHx8ICRleHBtMSgxMCkgPCAyMjAyNS40NjU3OTQ4MDY3MTY1MTY4XG5cdCAgLy8gVG9yIEJyb3dzZXIgYnVnXG5cdCAgfHwgJGV4cG0xKC0yZS0xNykgIT0gLTJlLTE3XG5cdCkgPyBmdW5jdGlvbiBleHBtMSh4KXtcblx0ICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiB4ID4gLTFlLTYgJiYgeCA8IDFlLTYgPyB4ICsgeCAqIHggLyAyIDogTWF0aC5leHAoeCkgLSAxO1xuXHR9IDogJGV4cG0xO1xuXG4vKioqLyB9LFxuLyogMTExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMTYgTWF0aC5mcm91bmQoeClcblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHNpZ24gICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTA2KVxuXHQgICwgcG93ICAgICAgID0gTWF0aC5wb3dcblx0ICAsIEVQU0lMT04gICA9IHBvdygyLCAtNTIpXG5cdCAgLCBFUFNJTE9OMzIgPSBwb3coMiwgLTIzKVxuXHQgICwgTUFYMzIgICAgID0gcG93KDIsIDEyNykgKiAoMiAtIEVQU0lMT04zMilcblx0ICAsIE1JTjMyICAgICA9IHBvdygyLCAtMTI2KTtcblxuXHR2YXIgcm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24obil7XG5cdCAgcmV0dXJuIG4gKyAxIC8gRVBTSUxPTiAtIDEgLyBFUFNJTE9OO1xuXHR9O1xuXG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIGZyb3VuZDogZnVuY3Rpb24gZnJvdW5kKHgpe1xuXHQgICAgdmFyICRhYnMgID0gTWF0aC5hYnMoeClcblx0ICAgICAgLCAkc2lnbiA9IHNpZ24oeClcblx0ICAgICAgLCBhLCByZXN1bHQ7XG5cdCAgICBpZigkYWJzIDwgTUlOMzIpcmV0dXJuICRzaWduICogcm91bmRUaWVzVG9FdmVuKCRhYnMgLyBNSU4zMiAvIEVQU0lMT04zMikgKiBNSU4zMiAqIEVQU0lMT04zMjtcblx0ICAgIGEgPSAoMSArIEVQU0lMT04zMiAvIEVQU0lMT04pICogJGFicztcblx0ICAgIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xuXHQgICAgaWYocmVzdWx0ID4gTUFYMzIgfHwgcmVzdWx0ICE9IHJlc3VsdClyZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcblx0ICAgIHJldHVybiAkc2lnbiAqIHJlc3VsdDtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTEyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMTcgTWF0aC5oeXBvdChbdmFsdWUxWywgdmFsdWUyWywg4oCmIF1dXSlcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBhYnMgICAgID0gTWF0aC5hYnM7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIGh5cG90OiBmdW5jdGlvbiBoeXBvdCh2YWx1ZTEsIHZhbHVlMil7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0ICAgIHZhciBzdW0gID0gMFxuXHQgICAgICAsIGkgICAgPSAwXG5cdCAgICAgICwgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICAgLCBsYXJnID0gMFxuXHQgICAgICAsIGFyZywgZGl2O1xuXHQgICAgd2hpbGUoaSA8IGFMZW4pe1xuXHQgICAgICBhcmcgPSBhYnMoYXJndW1lbnRzW2krK10pO1xuXHQgICAgICBpZihsYXJnIDwgYXJnKXtcblx0ICAgICAgICBkaXYgID0gbGFyZyAvIGFyZztcblx0ICAgICAgICBzdW0gID0gc3VtICogZGl2ICogZGl2ICsgMTtcblx0ICAgICAgICBsYXJnID0gYXJnO1xuXHQgICAgICB9IGVsc2UgaWYoYXJnID4gMCl7XG5cdCAgICAgICAgZGl2ICA9IGFyZyAvIGxhcmc7XG5cdCAgICAgICAgc3VtICs9IGRpdiAqIGRpdjtcblx0ICAgICAgfSBlbHNlIHN1bSArPSBhcmc7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gbGFyZyA9PT0gSW5maW5pdHkgPyBJbmZpbml0eSA6IGxhcmcgKiBNYXRoLnNxcnQoc3VtKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTEzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMTggTWF0aC5pbXVsKHgsIHkpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGltdWwgICA9IE1hdGguaW11bDtcblxuXHQvLyBzb21lIFdlYktpdCB2ZXJzaW9ucyBmYWlscyB3aXRoIGJpZyBudW1iZXJzLCBzb21lIGhhcyB3cm9uZyBhcml0eVxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIF9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gJGltdWwoMHhmZmZmZmZmZiwgNSkgIT0gLTUgfHwgJGltdWwubGVuZ3RoICE9IDI7XG5cdH0pLCAnTWF0aCcsIHtcblx0ICBpbXVsOiBmdW5jdGlvbiBpbXVsKHgsIHkpe1xuXHQgICAgdmFyIFVJTlQxNiA9IDB4ZmZmZlxuXHQgICAgICAsIHhuID0gK3hcblx0ICAgICAgLCB5biA9ICt5XG5cdCAgICAgICwgeGwgPSBVSU5UMTYgJiB4blxuXHQgICAgICAsIHlsID0gVUlOVDE2ICYgeW47XG5cdCAgICByZXR1cm4gMCB8IHhsICogeWwgKyAoKFVJTlQxNiAmIHhuID4+PiAxNikgKiB5bCArIHhsICogKFVJTlQxNiAmIHluID4+PiAxNikgPDwgMTYgPj4+IDApO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4yMSBNYXRoLmxvZzEwKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgbG9nMTA6IGZ1bmN0aW9uIGxvZzEwKHgpe1xuXHQgICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7bG9nMXA6IF9fd2VicGFja19yZXF1aXJlX18oMTAyKX0pO1xuXG4vKioqLyB9LFxuLyogMTE2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgbG9nMjogZnVuY3Rpb24gbG9nMih4KXtcblx0ICAgIHJldHVybiBNYXRoLmxvZyh4KSAvIE1hdGguTE4yO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtzaWduOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwNil9KTtcblxuLyoqKi8gfSxcbi8qIDExOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjMwIE1hdGguc2luaCh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGV4cG0xICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExMClcblx0ICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuXHQvLyBWOCBuZWFyIENocm9taXVtIDM4IGhhcyBhIHByb2JsZW0gd2l0aCB2ZXJ5IHNtYWxsIG51bWJlcnNcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuICFNYXRoLnNpbmgoLTJlLTE3KSAhPSAtMmUtMTc7XG5cdH0pLCAnTWF0aCcsIHtcblx0ICBzaW5oOiBmdW5jdGlvbiBzaW5oKHgpe1xuXHQgICAgcmV0dXJuIE1hdGguYWJzKHggPSAreCkgPCAxXG5cdCAgICAgID8gKGV4cG0xKHgpIC0gZXhwbTEoLXgpKSAvIDJcblx0ICAgICAgOiAoZXhwKHggLSAxKSAtIGV4cCgteCAtIDEpKSAqIChNYXRoLkUgLyAyKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTE5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMzMgTWF0aC50YW5oKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgZXhwbTEgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEwKVxuXHQgICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICB0YW5oOiBmdW5jdGlvbiB0YW5oKHgpe1xuXHQgICAgdmFyIGEgPSBleHBtMSh4ID0gK3gpXG5cdCAgICAgICwgYiA9IGV4cG0xKC14KTtcblx0ICAgIHJldHVybiBhID09IEluZmluaXR5ID8gMSA6IGIgPT0gSW5maW5pdHkgPyAtMSA6IChhIC0gYikgLyAoZXhwKHgpICsgZXhwKC14KSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEyMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjM0IE1hdGgudHJ1bmMoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICB0cnVuYzogZnVuY3Rpb24gdHJ1bmMoaXQpe1xuXHQgICAgcmV0dXJuIChpdCA+IDAgPyBNYXRoLmZsb29yIDogTWF0aC5jZWlsKShpdCk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEyMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9JbmRleCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KVxuXHQgICwgZnJvbUNoYXJDb2RlICAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG5cdCAgLCAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG5cdC8vIGxlbmd0aCBzaG91bGQgYmUgMSwgb2xkIEZGIHByb2JsZW1cblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoISEkZnJvbUNvZGVQb2ludCAmJiAkZnJvbUNvZGVQb2ludC5sZW5ndGggIT0gMSksICdTdHJpbmcnLCB7XG5cdCAgLy8gMjEuMS4yLjIgU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cylcblx0ICBmcm9tQ29kZVBvaW50OiBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KHgpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdCAgICB2YXIgcmVzICA9IFtdXG5cdCAgICAgICwgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICAgLCBpICAgID0gMFxuXHQgICAgICAsIGNvZGU7XG5cdCAgICB3aGlsZShhTGVuID4gaSl7XG5cdCAgICAgIGNvZGUgPSArYXJndW1lbnRzW2krK107XG5cdCAgICAgIGlmKHRvSW5kZXgoY29kZSwgMHgxMGZmZmYpICE9PSBjb2RlKXRocm93IFJhbmdlRXJyb3IoY29kZSArICcgaXMgbm90IGEgdmFsaWQgY29kZSBwb2ludCcpO1xuXHQgICAgICByZXMucHVzaChjb2RlIDwgMHgxMDAwMFxuXHQgICAgICAgID8gZnJvbUNoYXJDb2RlKGNvZGUpXG5cdCAgICAgICAgOiBmcm9tQ2hhckNvZGUoKChjb2RlIC09IDB4MTAwMDApID4+IDEwKSArIDB4ZDgwMCwgY29kZSAlIDB4NDAwICsgMHhkYzAwKVxuXHQgICAgICApO1xuXHQgICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMjIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b0lPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgdG9MZW5ndGggID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdTdHJpbmcnLCB7XG5cdCAgLy8gMjEuMS4yLjQgU3RyaW5nLnJhdyhjYWxsU2l0ZSwgLi4uc3Vic3RpdHV0aW9ucylcblx0ICByYXc6IGZ1bmN0aW9uIHJhdyhjYWxsU2l0ZSl7XG5cdCAgICB2YXIgdHBsICA9IHRvSU9iamVjdChjYWxsU2l0ZS5yYXcpXG5cdCAgICAgICwgbGVuICA9IHRvTGVuZ3RoKHRwbC5sZW5ndGgpXG5cdCAgICAgICwgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICAgLCByZXMgID0gW11cblx0ICAgICAgLCBpICAgID0gMDtcblx0ICAgIHdoaWxlKGxlbiA+IGkpe1xuXHQgICAgICByZXMucHVzaChTdHJpbmcodHBsW2krK10pKTtcblx0ICAgICAgaWYoaSA8IGFMZW4pcmVzLnB1c2goU3RyaW5nKGFyZ3VtZW50c1tpXSkpO1xuXHQgICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMjMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gMjEuMS4zLjI1IFN0cmluZy5wcm90b3R5cGUudHJpbSgpXG5cdF9fd2VicGFja19yZXF1aXJlX18oODEpKCd0cmltJywgZnVuY3Rpb24oJHRyaW0pe1xuXHQgIHJldHVybiBmdW5jdGlvbiB0cmltKCl7XG5cdCAgICByZXR1cm4gJHRyaW0odGhpcywgMyk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMjQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkYXQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjUpKGZhbHNlKTtcblx0JGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG5cdCAgLy8gMjEuMS4zLjMgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdChwb3MpXG5cdCAgY29kZVBvaW50QXQ6IGZ1bmN0aW9uIGNvZGVQb2ludEF0KHBvcyl7XG5cdCAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEyNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpXG5cdCAgLCBkZWZpbmVkICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblx0Ly8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG5cdC8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG5cdCAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuXHQgICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuXHQgICAgICAsIGwgPSBzLmxlbmd0aFxuXHQgICAgICAsIGEsIGI7XG5cdCAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuXHQgICAgYSA9IHMuY2hhckNvZGVBdChpKTtcblx0ICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG5cdCAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG5cdCAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMjYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIxLjEuMy42IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgoc2VhcmNoU3RyaW5nIFssIGVuZFBvc2l0aW9uXSlcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9MZW5ndGggID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIGNvbnRleHQgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTI3KVxuXHQgICwgRU5EU19XSVRIID0gJ2VuZHNXaXRoJ1xuXHQgICwgJGVuZHNXaXRoID0gJydbRU5EU19XSVRIXTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9fd2VicGFja19yZXF1aXJlX18oMTI5KShFTkRTX1dJVEgpLCAnU3RyaW5nJywge1xuXHQgIGVuZHNXaXRoOiBmdW5jdGlvbiBlbmRzV2l0aChzZWFyY2hTdHJpbmcgLyosIGVuZFBvc2l0aW9uID0gQGxlbmd0aCAqLyl7XG5cdCAgICB2YXIgdGhhdCA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBFTkRTX1dJVEgpXG5cdCAgICAgICwgZW5kUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuXHQgICAgICAsIGxlbiAgICA9IHRvTGVuZ3RoKHRoYXQubGVuZ3RoKVxuXHQgICAgICAsIGVuZCAgICA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBNYXRoLm1pbih0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbilcblx0ICAgICAgLCBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcblx0ICAgIHJldHVybiAkZW5kc1dpdGhcblx0ICAgICAgPyAkZW5kc1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGVuZClcblx0ICAgICAgOiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTI3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBoZWxwZXIgZm9yIFN0cmluZyN7c3RhcnRzV2l0aCwgZW5kc1dpdGgsIGluY2x1ZGVzfVxuXHR2YXIgaXNSZWdFeHAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyOClcblx0ICAsIGRlZmluZWQgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBzZWFyY2hTdHJpbmcsIE5BTUUpe1xuXHQgIGlmKGlzUmVnRXhwKHNlYXJjaFN0cmluZykpdGhyb3cgVHlwZUVycm9yKCdTdHJpbmcjJyArIE5BTUUgKyBcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7XG5cdCAgcmV0dXJuIFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEyOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBjb2YgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpXG5cdCAgLCBNQVRDSCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdtYXRjaCcpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICB2YXIgaXNSZWdFeHA7XG5cdCAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTI5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgTUFUQ0ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnbWF0Y2gnKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuXHQgIHZhciByZSA9IC8uLztcblx0ICB0cnkge1xuXHQgICAgJy8uLydbS0VZXShyZSk7XG5cdCAgfSBjYXRjaChlKXtcblx0ICAgIHRyeSB7XG5cdCAgICAgIHJlW01BVENIXSA9IGZhbHNlO1xuXHQgICAgICByZXR1cm4gIScvLi8nW0tFWV0ocmUpO1xuXHQgICAgfSBjYXRjaChmKXsgLyogZW1wdHkgKi8gfVxuXHQgIH0gcmV0dXJuIHRydWU7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMzAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgY29udGV4dCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyNylcblx0ICAsIElOQ0xVREVTID0gJ2luY2x1ZGVzJztcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9fd2VicGFja19yZXF1aXJlX18oMTI5KShJTkNMVURFUyksICdTdHJpbmcnLCB7XG5cdCAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcblx0ICAgIHJldHVybiAhIX5jb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgSU5DTFVERVMpXG5cdCAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMzEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcblx0ICAvLyAyMS4xLjMuMTMgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQoY291bnQpXG5cdCAgcmVwZWF0OiBfX3dlYnBhY2tfcmVxdWlyZV9fKDg1KVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEzMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjEuMS4zLjE4IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgWywgcG9zaXRpb24gXSlcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b0xlbmd0aCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCBjb250ZXh0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTI3KVxuXHQgICwgU1RBUlRTX1dJVEggPSAnc3RhcnRzV2l0aCdcblx0ICAsICRzdGFydHNXaXRoID0gJydbU1RBUlRTX1dJVEhdO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXygxMjkpKFNUQVJUU19XSVRIKSwgJ1N0cmluZycsIHtcblx0ICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcblx0ICAgIHZhciB0aGF0ICAgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgU1RBUlRTX1dJVEgpXG5cdCAgICAgICwgaW5kZXggID0gdG9MZW5ndGgoTWF0aC5taW4oYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRoYXQubGVuZ3RoKSlcblx0ICAgICAgLCBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcblx0ICAgIHJldHVybiAkc3RhcnRzV2l0aFxuXHQgICAgICA/ICRzdGFydHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBpbmRleClcblx0ICAgICAgOiB0aGF0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEzMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGF0ICA9IF9fd2VicGFja19yZXF1aXJlX18oMTI1KSh0cnVlKTtcblxuXHQvLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM0KShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG5cdCAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuXHQgIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG5cdC8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcblx0fSwgZnVuY3Rpb24oKXtcblx0ICB2YXIgTyAgICAgPSB0aGlzLl90XG5cdCAgICAsIGluZGV4ID0gdGhpcy5faVxuXHQgICAgLCBwb2ludDtcblx0ICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuXHQgIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcblx0ICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcblx0ICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEzNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgTElCUkFSWSAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KVxuXHQgICwgJGV4cG9ydCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCByZWRlZmluZSAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpXG5cdCAgLCBoaWRlICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOClcblx0ICAsIGhhcyAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgSXRlcmF0b3JzICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNSlcblx0ICAsICRpdGVyQ3JlYXRlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzYpXG5cdCAgLCBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpXG5cdCAgLCBnZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgLCBJVEVSQVRPUiAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdpdGVyYXRvcicpXG5cdCAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG5cdCAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuXHQgICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcblx0ICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cblx0dmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG5cdCAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXHQgIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcblx0ICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcblx0ICAgIHN3aXRjaChraW5kKXtcblx0ICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuXHQgICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuXHQgICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuXHQgIH07XG5cdCAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcblx0ICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG5cdCAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuXHQgICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcblx0ICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuXHQgICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcblx0ICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcblx0ICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcblx0ICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcblx0ICAvLyBGaXggbmF0aXZlXG5cdCAgaWYoJGFueU5hdGl2ZSl7XG5cdCAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuXHQgICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuXHQgICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG5cdCAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuXHQgICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcblx0ICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuXHQgIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG5cdCAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcblx0ICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG5cdCAgfVxuXHQgIC8vIERlZmluZSBpdGVyYXRvclxuXHQgIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcblx0ICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG5cdCAgfVxuXHQgIC8vIFBsdWcgZm9yIGxpYnJhcnlcblx0ICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcblx0ICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuXHQgIGlmKERFRkFVTFQpe1xuXHQgICAgbWV0aG9kcyA9IHtcblx0ICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG5cdCAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcblx0ICAgICAgZW50cmllczogJGVudHJpZXNcblx0ICAgIH07XG5cdCAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcblx0ICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG5cdCAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuXHQgIH1cblx0ICByZXR1cm4gbWV0aG9kcztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEzNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLyoqKi8gfSxcbi8qIDEzNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgY3JlYXRlICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KVxuXHQgICwgZGVzY3JpcHRvciAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KVxuXHQgICwgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKVxuXHQgICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuXHQvLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDgpKEl0ZXJhdG9yUHJvdG90eXBlLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuXHQgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcblx0ICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEzNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy4yIFN0cmluZy5wcm90b3R5cGUuYW5jaG9yKG5hbWUpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnYW5jaG9yJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGFuY2hvcihuYW1lKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ25hbWUnLCBuYW1lKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTM4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGZhaWxzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCBkZWZpbmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMylcblx0ICAsIHF1b3QgICAgPSAvXCIvZztcblx0Ly8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG5cdHZhciBjcmVhdGVIVE1MID0gZnVuY3Rpb24oc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0ICB2YXIgUyAgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKVxuXHQgICAgLCBwMSA9ICc8JyArIHRhZztcblx0ICBpZihhdHRyaWJ1dGUgIT09ICcnKXAxICs9ICcgJyArIGF0dHJpYnV0ZSArICc9XCInICsgU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG5cdCAgcmV0dXJuIHAxICsgJz4nICsgUyArICc8LycgKyB0YWcgKyAnPic7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgZXhlYyl7XG5cdCAgdmFyIE8gPSB7fTtcblx0ICBPW05BTUVdID0gZXhlYyhjcmVhdGVIVE1MKTtcblx0ICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICB2YXIgdGVzdCA9ICcnW05BTUVdKCdcIicpO1xuXHQgICAgcmV0dXJuIHRlc3QgIT09IHRlc3QudG9Mb3dlckNhc2UoKSB8fCB0ZXN0LnNwbGl0KCdcIicpLmxlbmd0aCA+IDM7XG5cdCAgfSksICdTdHJpbmcnLCBPKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEzOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy4zIFN0cmluZy5wcm90b3R5cGUuYmlnKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdiaWcnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gYmlnKCl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYmlnJywgJycsICcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTQwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjQgU3RyaW5nLnByb3RvdHlwZS5ibGluaygpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnYmxpbmsnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gYmxpbmsoKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdibGluaycsICcnLCAnJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE0MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy41IFN0cmluZy5wcm90b3R5cGUuYm9sZCgpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnYm9sZCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBib2xkKCl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYicsICcnLCAnJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE0MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy42IFN0cmluZy5wcm90b3R5cGUuZml4ZWQoKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ2ZpeGVkJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGZpeGVkKCl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAndHQnLCAnJywgJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuNyBTdHJpbmcucHJvdG90eXBlLmZvbnRjb2xvcihjb2xvcilcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdmb250Y29sb3InLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gZm9udGNvbG9yKGNvbG9yKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdmb250JywgJ2NvbG9yJywgY29sb3IpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuOCBTdHJpbmcucHJvdG90eXBlLmZvbnRzaXplKHNpemUpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnZm9udHNpemUnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gZm9udHNpemUoc2l6ZSl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdzaXplJywgc2l6ZSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE0NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy45IFN0cmluZy5wcm90b3R5cGUuaXRhbGljcygpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnaXRhbGljcycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBpdGFsaWNzKCl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnaScsICcnLCAnJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE0NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy4xMCBTdHJpbmcucHJvdG90eXBlLmxpbmsodXJsKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ2xpbmsnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gbGluayh1cmwpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnaHJlZicsIHVybCk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE0NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy4xMSBTdHJpbmcucHJvdG90eXBlLnNtYWxsKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdzbWFsbCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBzbWFsbCgpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3NtYWxsJywgJycsICcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTQ4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjEyIFN0cmluZy5wcm90b3R5cGUuc3RyaWtlKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdzdHJpa2UnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gc3RyaWtlKCl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3RyaWtlJywgJycsICcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTQ5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjEzIFN0cmluZy5wcm90b3R5cGUuc3ViKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdzdWInLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gc3ViKCl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3ViJywgJycsICcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTUwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjE0IFN0cmluZy5wcm90b3R5cGUuc3VwKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdzdXAnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gc3VwKCl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3VwJywgJycsICcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTUxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMi4xLjIuMiAvIDE1LjQuMy4yIEFycmF5LmlzQXJyYXkoYXJnKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHtpc0FycmF5OiBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKX0pO1xuXG4vKioqLyB9LFxuLyogMTUyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBjdHggICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpXG5cdCAgLCAkZXhwb3J0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvT2JqZWN0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIGNhbGwgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTMpXG5cdCAgLCBpc0FycmF5SXRlciAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTU0KVxuXHQgICwgdG9MZW5ndGggICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgY3JlYXRlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1NSlcblx0ICAsIGdldEl0ZXJGbiAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oMTU3KShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG5cdCAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG5cdCAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcblx0ICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuXHQgICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG5cdCAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcblx0ICAgICAgLCBpbmRleCAgID0gMFxuXHQgICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcblx0ICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG5cdCAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG5cdCAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2Vcblx0ICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcblx0ICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuXHQgICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuXHQgICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuXHQgICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHQgIH1cblx0fSk7XG5cblxuLyoqKi8gfSxcbi8qIDE1MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxuXHR2YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcblx0ICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuXHQgIH0gY2F0Y2goZSl7XG5cdCAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuXHQgICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcblx0ICAgIHRocm93IGU7XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9LFxuLyogMTU0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5cdHZhciBJdGVyYXRvcnMgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzUpXG5cdCAgLCBJVEVSQVRPUiAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ2l0ZXJhdG9yJylcblx0ICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE1NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGRlZmluZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KVxuXHQgICwgY3JlYXRlRGVzYyAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG5cdCAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcblx0ICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE1NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGNsYXNzb2YgICA9IF9fd2VicGFja19yZXF1aXJlX18oNzMpXG5cdCAgLCBJVEVSQVRPUiAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnaXRlcmF0b3InKVxuXHQgICwgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzUpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG5cdCAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cblx0ICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cblx0ICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBJVEVSQVRPUiAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnaXRlcmF0b3InKVxuXHQgICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cblx0dHJ5IHtcblx0ICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG5cdCAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcblx0ICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcblx0fSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuXHQgIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcblx0ICB2YXIgc2FmZSA9IGZhbHNlO1xuXHQgIHRyeSB7XG5cdCAgICB2YXIgYXJyICA9IFs3XVxuXHQgICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG5cdCAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcblx0ICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcblx0ICAgIGV4ZWMoYXJyKTtcblx0ICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cdCAgcmV0dXJuIHNhZmU7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgY3JlYXRlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1NSk7XG5cblx0Ly8gV2ViS2l0IEFycmF5Lm9mIGlzbid0IGdlbmVyaWNcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgZnVuY3Rpb24gRigpe31cblx0ICByZXR1cm4gIShBcnJheS5vZi5jYWxsKEYpIGluc3RhbmNlb2YgRik7XG5cdH0pLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxuXHQgIG9mOiBmdW5jdGlvbiBvZigvKiAuLi5hcmdzICovKXtcblx0ICAgIHZhciBpbmRleCAgPSAwXG5cdCAgICAgICwgYUxlbiAgID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgICAsIHJlc3VsdCA9IG5ldyAodHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSkoYUxlbik7XG5cdCAgICB3aGlsZShhTGVuID4gaW5kZXgpY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgYXJndW1lbnRzW2luZGV4KytdKTtcblx0ICAgIHJlc3VsdC5sZW5ndGggPSBhTGVuO1xuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTU5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUuam9pbihzZXBhcmF0b3IpXG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b0lPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgYXJyYXlKb2luID0gW10uam9pbjtcblxuXHQvLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2Ugc3RyaW5nc1xuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKSAhPSBPYmplY3QgfHwgIV9fd2VicGFja19yZXF1aXJlX18oMTYwKShhcnJheUpvaW4pKSwgJ0FycmF5Jywge1xuXHQgIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKXtcblx0ICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0b0lPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTYwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWV0aG9kLCBhcmcpe1xuXHQgIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgYXJnID8gbWV0aG9kLmNhbGwobnVsbCwgZnVuY3Rpb24oKXt9LCAxKSA6IG1ldGhvZC5jYWxsKG51bGwpO1xuXHQgIH0pO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTYxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgaHRtbCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDYpXG5cdCAgLCBjb2YgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMilcblx0ICAsIHRvSW5kZXggICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KVxuXHQgICwgdG9MZW5ndGggICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCBhcnJheVNsaWNlID0gW10uc2xpY2U7XG5cblx0Ly8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICBpZihodG1sKWFycmF5U2xpY2UuY2FsbChodG1sKTtcblx0fSksICdBcnJheScsIHtcblx0ICBzbGljZTogZnVuY3Rpb24gc2xpY2UoYmVnaW4sIGVuZCl7XG5cdCAgICB2YXIgbGVuICAgPSB0b0xlbmd0aCh0aGlzLmxlbmd0aClcblx0ICAgICAgLCBrbGFzcyA9IGNvZih0aGlzKTtcblx0ICAgIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kO1xuXHQgICAgaWYoa2xhc3MgPT0gJ0FycmF5JylyZXR1cm4gYXJyYXlTbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuXHQgICAgdmFyIHN0YXJ0ICA9IHRvSW5kZXgoYmVnaW4sIGxlbilcblx0ICAgICAgLCB1cFRvICAgPSB0b0luZGV4KGVuZCwgbGVuKVxuXHQgICAgICAsIHNpemUgICA9IHRvTGVuZ3RoKHVwVG8gLSBzdGFydClcblx0ICAgICAgLCBjbG9uZWQgPSBBcnJheShzaXplKVxuXHQgICAgICAsIGkgICAgICA9IDA7XG5cdCAgICBmb3IoOyBpIDwgc2l6ZTsgaSsrKWNsb25lZFtpXSA9IGtsYXNzID09ICdTdHJpbmcnXG5cdCAgICAgID8gdGhpcy5jaGFyQXQoc3RhcnQgKyBpKVxuXHQgICAgICA6IHRoaXNbc3RhcnQgKyBpXTtcblx0ICAgIHJldHVybiBjbG9uZWQ7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE2MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsIHRvT2JqZWN0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCBmYWlscyAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCAkc29ydCAgICAgPSBbXS5zb3J0XG5cdCAgLCB0ZXN0ICAgICAgPSBbMSwgMiwgM107XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAvLyBJRTgtXG5cdCAgdGVzdC5zb3J0KHVuZGVmaW5lZCk7XG5cdH0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuXHQgIC8vIFY4IGJ1Z1xuXHQgIHRlc3Quc29ydChudWxsKTtcblx0ICAvLyBPbGQgV2ViS2l0XG5cdH0pIHx8ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoJHNvcnQpKSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMy4yNSBBcnJheS5wcm90b3R5cGUuc29ydChjb21wYXJlZm4pXG5cdCAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pe1xuXHQgICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG5cdCAgICAgID8gJHNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSlcblx0ICAgICAgOiAkc29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE2MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkZm9yRWFjaCA9IF9fd2VicGFja19yZXF1aXJlX18oMTY0KSgwKVxuXHQgICwgU1RSSUNUICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoW10uZm9yRWFjaCwgdHJ1ZSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhU1RSSUNULCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4zLjEwIC8gMTUuNC40LjE4IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG5cdCAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG5cdCAgICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTY0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAwIC0+IEFycmF5I2ZvckVhY2hcblx0Ly8gMSAtPiBBcnJheSNtYXBcblx0Ly8gMiAtPiBBcnJheSNmaWx0ZXJcblx0Ly8gMyAtPiBBcnJheSNzb21lXG5cdC8vIDQgLT4gQXJyYXkjZXZlcnlcblx0Ly8gNSAtPiBBcnJheSNmaW5kXG5cdC8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG5cdHZhciBjdHggICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpXG5cdCAgLCBJT2JqZWN0ICA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpXG5cdCAgLCB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCB0b0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCBhc2MgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTY1KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcblx0ICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuXHQgICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG5cdCAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcblx0ICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuXHQgICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG5cdCAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuXHQgICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcblx0ICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcblx0ICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG5cdCAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG5cdCAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG5cdCAgICAgICwgaW5kZXggID0gMFxuXHQgICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcblx0ICAgICAgLCB2YWwsIHJlcztcblx0ICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG5cdCAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuXHQgICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuXHQgICAgICBpZihUWVBFKXtcblx0ICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcblx0ICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG5cdCAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuXHQgICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcblx0ICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcblx0ICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcblx0ICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNjUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcblx0dmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTY2KTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBsZW5ndGgpe1xuXHQgIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNjYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBpc0FycmF5ICA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpXG5cdCAgLCBTUEVDSUVTICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdzcGVjaWVzJyk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG5cdCAgdmFyIEM7XG5cdCAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuXHQgICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuXHQgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcblx0ICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuXHQgICAgaWYoaXNPYmplY3QoQykpe1xuXHQgICAgICBDID0gQ1tTUEVDSUVTXTtcblx0ICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuXHQgICAgfVxuXHQgIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE2NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRtYXAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NCkoMSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKFtdLm1hcCwgdHJ1ZSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjMuMTUgLyAxNS40LjQuMTkgQXJyYXkucHJvdG90eXBlLm1hcChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuXHQgIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcblx0ICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE2OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRmaWx0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NCkoMik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKFtdLmZpbHRlciwgdHJ1ZSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjMuNyAvIDE1LjQuNC4yMCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG5cdCAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuXHQgICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTY5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHNvbWUgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTY0KSgzKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoW10uc29tZSwgdHJ1ZSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjMuMjMgLyAxNS40LjQuMTcgQXJyYXkucHJvdG90eXBlLnNvbWUoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcblx0ICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcblx0ICAgIHJldHVybiAkc29tZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNzAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkZXZlcnkgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjQpKDQpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oMTYwKShbXS5ldmVyeSwgdHJ1ZSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjMuNSAvIDE1LjQuNC4xNiBBcnJheS5wcm90b3R5cGUuZXZlcnkoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcblx0ICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuXHQgICAgcmV0dXJuICRldmVyeSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNzEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkcmVkdWNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNzIpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oMTYwKShbXS5yZWR1Y2UsIHRydWUpLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4zLjE4IC8gMTUuNC40LjIxIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuXHQgIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pe1xuXHQgICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzWzFdLCBmYWxzZSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE3MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCB0b09iamVjdCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgSU9iamVjdCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSlcblx0ICAsIHRvTGVuZ3RoICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgY2FsbGJhY2tmbiwgYUxlbiwgbWVtbywgaXNSaWdodCl7XG5cdCAgYUZ1bmN0aW9uKGNhbGxiYWNrZm4pO1xuXHQgIHZhciBPICAgICAgPSB0b09iamVjdCh0aGF0KVxuXHQgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG5cdCAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuXHQgICAgLCBpbmRleCAgPSBpc1JpZ2h0ID8gbGVuZ3RoIC0gMSA6IDBcblx0ICAgICwgaSAgICAgID0gaXNSaWdodCA/IC0xIDogMTtcblx0ICBpZihhTGVuIDwgMilmb3IoOzspe1xuXHQgICAgaWYoaW5kZXggaW4gc2VsZil7XG5cdCAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcblx0ICAgICAgaW5kZXggKz0gaTtcblx0ICAgICAgYnJlYWs7XG5cdCAgICB9XG5cdCAgICBpbmRleCArPSBpO1xuXHQgICAgaWYoaXNSaWdodCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCl7XG5cdCAgICAgIHRocm93IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuXHQgICAgfVxuXHQgIH1cblx0ICBmb3IoO2lzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpaWYoaW5kZXggaW4gc2VsZil7XG5cdCAgICBtZW1vID0gY2FsbGJhY2tmbihtZW1vLCBzZWxmW2luZGV4XSwgaW5kZXgsIE8pO1xuXHQgIH1cblx0ICByZXR1cm4gbWVtbztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE3MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRyZWR1Y2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3Mik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKFtdLnJlZHVjZVJpZ2h0LCB0cnVlKSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMy4xOSAvIDE1LjQuNC4yMiBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHQoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuXHQgIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKXtcblx0ICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50c1sxXSwgdHJ1ZSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE3NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRpbmRleE9mICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KShmYWxzZSlcblx0ICAsICRuYXRpdmUgICAgICAgPSBbXS5pbmRleE9mXG5cdCAgLCBORUdBVElWRV9aRVJPID0gISEkbmF0aXZlICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKE5FR0FUSVZFX1pFUk8gfHwgIV9fd2VicGFja19yZXF1aXJlX18oMTYwKSgkbmF0aXZlKSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjMuMTEgLyAxNS40LjQuMTQgQXJyYXkucHJvdG90eXBlLmluZGV4T2Yoc2VhcmNoRWxlbWVudCBbLCBmcm9tSW5kZXhdKVxuXHQgIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XG5cdCAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuXHQgICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG5cdCAgICAgID8gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcblx0ICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHNbMV0pO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNzUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b0lPYmplY3QgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIHRvSW50ZWdlciAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KVxuXHQgICwgdG9MZW5ndGggICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCAkbmF0aXZlICAgICAgID0gW10ubGFzdEluZGV4T2Zcblx0ICAsIE5FR0FUSVZFX1pFUk8gPSAhISRuYXRpdmUgJiYgMSAvIFsxXS5sYXN0SW5kZXhPZigxLCAtMCkgPCAwO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKE5FR0FUSVZFX1pFUk8gfHwgIV9fd2VicGFja19yZXF1aXJlX18oMTYwKSgkbmF0aXZlKSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjMuMTQgLyAxNS40LjQuMTUgQXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcblx0ICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ID0gQFsqLTFdICovKXtcblx0ICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcblx0ICAgIGlmKE5FR0FUSVZFX1pFUk8pcmV0dXJuICRuYXRpdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwO1xuXHQgICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCh0aGlzKVxuXHQgICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuXHQgICAgICAsIGluZGV4ICA9IGxlbmd0aCAtIDE7XG5cdCAgICBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlpbmRleCA9IE1hdGgubWluKGluZGV4LCB0b0ludGVnZXIoYXJndW1lbnRzWzFdKSk7XG5cdCAgICBpZihpbmRleCA8IDApaW5kZXggPSBsZW5ndGggKyBpbmRleDtcblx0ICAgIGZvcig7aW5kZXggPj0gMDsgaW5kZXgtLSlpZihpbmRleCBpbiBPKWlmKE9baW5kZXhdID09PSBzZWFyY2hFbGVtZW50KXJldHVybiBpbmRleCB8fCAwO1xuXHQgICAgcmV0dXJuIC0xO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNzYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtjb3B5V2l0aGluOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3Nyl9KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3OCkoJ2NvcHlXaXRoaW4nKTtcblxuLyoqKi8gfSxcbi8qIDE3NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIHRvSW5kZXggID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNylcblx0ICAsIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBbXS5jb3B5V2l0aGluIHx8IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0Lyo9IDAqLywgc3RhcnQvKj0gMCwgZW5kID0gQGxlbmd0aCovKXtcblx0ICB2YXIgTyAgICAgPSB0b09iamVjdCh0aGlzKVxuXHQgICAgLCBsZW4gICA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuXHQgICAgLCB0byAgICA9IHRvSW5kZXgodGFyZ2V0LCBsZW4pXG5cdCAgICAsIGZyb20gID0gdG9JbmRleChzdGFydCwgbGVuKVxuXHQgICAgLCBlbmQgICA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkXG5cdCAgICAsIGNvdW50ID0gTWF0aC5taW4oKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogdG9JbmRleChlbmQsIGxlbikpIC0gZnJvbSwgbGVuIC0gdG8pXG5cdCAgICAsIGluYyAgID0gMTtcblx0ICBpZihmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpe1xuXHQgICAgaW5jICA9IC0xO1xuXHQgICAgZnJvbSArPSBjb3VudCAtIDE7XG5cdCAgICB0byAgICs9IGNvdW50IC0gMTtcblx0ICB9XG5cdCAgd2hpbGUoY291bnQtLSA+IDApe1xuXHQgICAgaWYoZnJvbSBpbiBPKU9bdG9dID0gT1tmcm9tXTtcblx0ICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xuXHQgICAgdG8gICArPSBpbmM7XG5cdCAgICBmcm9tICs9IGluYztcblx0ICB9IHJldHVybiBPO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTc4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5cdHZhciBVTlNDT1BBQkxFUyA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCd1bnNjb3BhYmxlcycpXG5cdCAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcblx0aWYoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKV9fd2VicGFja19yZXF1aXJlX18oOCkoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuXHQgIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTc5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7ZmlsbDogX193ZWJwYWNrX3JlcXVpcmVfXygxODApfSk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzgpKCdmaWxsJyk7XG5cbi8qKiovIH0sXG4vKiAxODAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxuXHQndXNlIHN0cmljdCc7XG5cdHZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCB0b0luZGV4ICA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpXG5cdCAgLCB0b0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyosIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLyl7XG5cdCAgdmFyIE8gICAgICA9IHRvT2JqZWN0KHRoaXMpXG5cdCAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuXHQgICAgLCBhTGVuICAgPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAsIGluZGV4ICA9IHRvSW5kZXgoYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGxlbmd0aClcblx0ICAgICwgZW5kICAgID0gYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWRcblx0ICAgICwgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKTtcblx0ICB3aGlsZShlbmRQb3MgPiBpbmRleClPW2luZGV4KytdID0gdmFsdWU7XG5cdCAgcmV0dXJuIE87XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxODEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRmaW5kICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NCkoNSlcblx0ICAsIEtFWSAgICAgPSAnZmluZCdcblx0ICAsIGZvcmNlZCAgPSB0cnVlO1xuXHQvLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuXHRpZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG5cdCAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuXHQgICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICB9XG5cdH0pO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3OCkoS0VZKTtcblxuLyoqKi8gfSxcbi8qIDE4MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkZmluZCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjQpKDYpXG5cdCAgLCBLRVkgICAgID0gJ2ZpbmRJbmRleCdcblx0ICAsIGZvcmNlZCAgPSB0cnVlO1xuXHQvLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuXHRpZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG5cdCAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcblx0ICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgfVxuXHR9KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzgpKEtFWSk7XG5cbi8qKiovIH0sXG4vKiAxODMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGFkZFRvVW5zY29wYWJsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3OClcblx0ICAsIHN0ZXAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4NClcblx0ICAsIEl0ZXJhdG9ycyAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNSlcblx0ICAsIHRvSU9iamVjdCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKTtcblxuXHQvLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG5cdC8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG5cdC8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcblx0Ly8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzQpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG5cdCAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuXHQgIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG5cdCAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcblx0Ly8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG5cdH0sIGZ1bmN0aW9uKCl7XG5cdCAgdmFyIE8gICAgID0gdGhpcy5fdFxuXHQgICAgLCBraW5kICA9IHRoaXMuX2tcblx0ICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG5cdCAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuXHQgICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcblx0ICAgIHJldHVybiBzdGVwKDEpO1xuXHQgIH1cblx0ICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcblx0ICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcblx0ICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG5cdH0sICd2YWx1ZXMnKTtcblxuXHQvLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5cdEl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cblx0YWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuXHRhZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcblx0YWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG4vKioqLyB9LFxuLyogMTg0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcblx0ICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE4NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODYpKCdBcnJheScpO1xuXG4vKioqLyB9LFxuLyogMTg2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBnbG9iYWwgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGRQICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KVxuXHQgICwgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpXG5cdCAgLCBTUEVDSUVTICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdzcGVjaWVzJyk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuXHQgIHZhciBDID0gZ2xvYmFsW0tFWV07XG5cdCAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcblx0ICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cblx0ICB9KTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE4NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdsb2JhbCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgaW5oZXJpdElmUmVxdWlyZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgwKVxuXHQgICwgZFAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmZcblx0ICAsIGdPUE4gICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OCkuZlxuXHQgICwgaXNSZWdFeHAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyOClcblx0ICAsICRmbGFncyAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODgpXG5cdCAgLCAkUmVnRXhwICAgICAgICAgICA9IGdsb2JhbC5SZWdFeHBcblx0ICAsIEJhc2UgICAgICAgICAgICAgID0gJFJlZ0V4cFxuXHQgICwgcHJvdG8gICAgICAgICAgICAgPSAkUmVnRXhwLnByb3RvdHlwZVxuXHQgICwgcmUxICAgICAgICAgICAgICAgPSAvYS9nXG5cdCAgLCByZTIgICAgICAgICAgICAgICA9IC9hL2dcblx0ICAvLyBcIm5ld1wiIGNyZWF0ZXMgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z2d5IGhlcmVcblx0ICAsIENPUlJFQ1RfTkVXICAgICAgID0gbmV3ICRSZWdFeHAocmUxKSAhPT0gcmUxO1xuXG5cdGlmKF9fd2VicGFja19yZXF1aXJlX18oNCkgJiYgKCFDT1JSRUNUX05FVyB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgcmUyW19fd2VicGFja19yZXF1aXJlX18oMjMpKCdtYXRjaCcpXSA9IGZhbHNlO1xuXHQgIC8vIFJlZ0V4cCBjb25zdHJ1Y3RvciBjYW4gYWx0ZXIgZmxhZ3MgYW5kIElzUmVnRXhwIHdvcmtzIGNvcnJlY3Qgd2l0aCBAQG1hdGNoXG5cdCAgcmV0dXJuICRSZWdFeHAocmUxKSAhPSByZTEgfHwgJFJlZ0V4cChyZTIpID09IHJlMiB8fCAkUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG5cdH0pKSl7XG5cdCAgJFJlZ0V4cCA9IGZ1bmN0aW9uIFJlZ0V4cChwLCBmKXtcblx0ICAgIHZhciB0aVJFID0gdGhpcyBpbnN0YW5jZW9mICRSZWdFeHBcblx0ICAgICAgLCBwaVJFID0gaXNSZWdFeHAocClcblx0ICAgICAgLCBmaVUgID0gZiA9PT0gdW5kZWZpbmVkO1xuXHQgICAgcmV0dXJuICF0aVJFICYmIHBpUkUgJiYgcC5jb25zdHJ1Y3RvciA9PT0gJFJlZ0V4cCAmJiBmaVUgPyBwXG5cdCAgICAgIDogaW5oZXJpdElmUmVxdWlyZWQoQ09SUkVDVF9ORVdcblx0ICAgICAgICA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZilcblx0ICAgICAgICA6IEJhc2UoKHBpUkUgPSBwIGluc3RhbmNlb2YgJFJlZ0V4cCkgPyBwLnNvdXJjZSA6IHAsIHBpUkUgJiYgZmlVID8gJGZsYWdzLmNhbGwocCkgOiBmKVxuXHQgICAgICAsIHRpUkUgPyB0aGlzIDogcHJvdG8sICRSZWdFeHApO1xuXHQgIH07XG5cdCAgdmFyIHByb3h5ID0gZnVuY3Rpb24oa2V5KXtcblx0ICAgIGtleSBpbiAkUmVnRXhwIHx8IGRQKCRSZWdFeHAsIGtleSwge1xuXHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIEJhc2Vba2V5XTsgfSxcblx0ICAgICAgc2V0OiBmdW5jdGlvbihpdCl7IEJhc2Vba2V5XSA9IGl0OyB9XG5cdCAgICB9KTtcblx0ICB9O1xuXHQgIGZvcih2YXIga2V5cyA9IGdPUE4oQmFzZSksIGkgPSAwOyBrZXlzLmxlbmd0aCA+IGk7IClwcm94eShrZXlzW2krK10pO1xuXHQgIHByb3RvLmNvbnN0cnVjdG9yID0gJFJlZ0V4cDtcblx0ICAkUmVnRXhwLnByb3RvdHlwZSA9IHByb3RvO1xuXHQgIF9fd2VicGFja19yZXF1aXJlX18oMTYpKGdsb2JhbCwgJ1JlZ0V4cCcsICRSZWdFeHApO1xuXHR9XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODYpKCdSZWdFeHAnKTtcblxuLyoqKi8gfSxcbi8qIDE4OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xuXHR2YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuXHQgIHZhciB0aGF0ICAgPSBhbk9iamVjdCh0aGlzKVxuXHQgICAgLCByZXN1bHQgPSAnJztcblx0ICBpZih0aGF0Lmdsb2JhbCkgICAgIHJlc3VsdCArPSAnZyc7XG5cdCAgaWYodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuXHQgIGlmKHRoYXQubXVsdGlsaW5lKSAgcmVzdWx0ICs9ICdtJztcblx0ICBpZih0aGF0LnVuaWNvZGUpICAgIHJlc3VsdCArPSAndSc7XG5cdCAgaWYodGhhdC5zdGlja3kpICAgICByZXN1bHQgKz0gJ3knO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxODkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTApO1xuXHR2YXIgYW5PYmplY3QgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgJGZsYWdzICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4OClcblx0ICAsIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KVxuXHQgICwgVE9fU1RSSU5HICAgPSAndG9TdHJpbmcnXG5cdCAgLCAkdG9TdHJpbmcgICA9IC8uL1tUT19TVFJJTkddO1xuXG5cdHZhciBkZWZpbmUgPSBmdW5jdGlvbihmbil7XG5cdCAgX193ZWJwYWNrX3JlcXVpcmVfXygxNikoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG5cdH07XG5cblx0Ly8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuXHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7c291cmNlOiAnYScsIGZsYWdzOiAnYid9KSAhPSAnL2EvYic7IH0pKXtcblx0ICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKXtcblx0ICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG5cdCAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuXHQgICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIURFU0NSSVBUT1JTICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgPyAkZmxhZ3MuY2FsbChSKSA6IHVuZGVmaW5lZCk7XG5cdCAgfSk7XG5cdC8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG5cdH0gZWxzZSBpZigkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpe1xuXHQgIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpe1xuXHQgICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuXHQgIH0pO1xuXHR9XG5cbi8qKiovIH0sXG4vKiAxOTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcblx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSAmJiAvLi9nLmZsYWdzICE9ICdnJylfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuXHQgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IF9fd2VicGFja19yZXF1aXJlX18oMTg4KVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE5MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gQEBtYXRjaCBsb2dpY1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5MikoJ21hdGNoJywgMSwgZnVuY3Rpb24oZGVmaW5lZCwgTUFUQ0gsICRtYXRjaCl7XG5cdCAgLy8gMjEuMS4zLjExIFN0cmluZy5wcm90b3R5cGUubWF0Y2gocmVnZXhwKVxuXHQgIHJldHVybiBbZnVuY3Rpb24gbWF0Y2gocmVnZXhwKXtcblx0ICAgICd1c2Ugc3RyaWN0Jztcblx0ICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcblx0ICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuXHQgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG5cdCAgfSwgJG1hdGNoXTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxOTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGhpZGUgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KVxuXHQgICwgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KVxuXHQgICwgZmFpbHMgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCBkZWZpbmVkICA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpXG5cdCAgLCB3a3MgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBsZW5ndGgsIGV4ZWMpe1xuXHQgIHZhciBTWU1CT0wgICA9IHdrcyhLRVkpXG5cdCAgICAsIGZucyAgICAgID0gZXhlYyhkZWZpbmVkLCBTWU1CT0wsICcnW0tFWV0pXG5cdCAgICAsIHN0cmZuICAgID0gZm5zWzBdXG5cdCAgICAsIHJ4Zm4gICAgID0gZm5zWzFdO1xuXHQgIGlmKGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICB2YXIgTyA9IHt9O1xuXHQgICAgT1tTWU1CT0xdID0gZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH07XG5cdCAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuXHQgIH0pKXtcblx0ICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuXHQgICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG5cdCAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcblx0ICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcblx0ICAgICAgPyBmdW5jdGlvbihzdHJpbmcsIGFyZyl7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG5cdCAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuXHQgICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG5cdCAgICAgIDogZnVuY3Rpb24oc3RyaW5nKXsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG5cdCAgICApO1xuXHQgIH1cblx0fTtcblxuLyoqKi8gfSxcbi8qIDE5MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gQEByZXBsYWNlIGxvZ2ljXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTkyKSgncmVwbGFjZScsIDIsIGZ1bmN0aW9uKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlKXtcblx0ICAvLyAyMS4xLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpXG5cdCAgcmV0dXJuIFtmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpe1xuXHQgICAgJ3VzZSBzdHJpY3QnO1xuXHQgICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuXHQgICAgICAsIGZuID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG5cdCAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuXHQgICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcblx0ICAgICAgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG5cdCAgfSwgJHJlcGxhY2VdO1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE5NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gQEBzZWFyY2ggbG9naWNcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTIpKCdzZWFyY2gnLCAxLCBmdW5jdGlvbihkZWZpbmVkLCBTRUFSQ0gsICRzZWFyY2gpe1xuXHQgIC8vIDIxLjEuMy4xNSBTdHJpbmcucHJvdG90eXBlLnNlYXJjaChyZWdleHApXG5cdCAgcmV0dXJuIFtmdW5jdGlvbiBzZWFyY2gocmVnZXhwKXtcblx0ICAgICd1c2Ugc3RyaWN0Jztcblx0ICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcblx0ICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcblx0ICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcblx0ICB9LCAkc2VhcmNoXTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxOTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIEBAc3BsaXQgbG9naWNcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTIpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uKGRlZmluZWQsIFNQTElULCAkc3BsaXQpe1xuXHQgICd1c2Ugc3RyaWN0Jztcblx0ICB2YXIgaXNSZWdFeHAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTI4KVxuXHQgICAgLCBfc3BsaXQgICAgID0gJHNwbGl0XG5cdCAgICAsICRwdXNoICAgICAgPSBbXS5wdXNoXG5cdCAgICAsICRTUExJVCAgICAgPSAnc3BsaXQnXG5cdCAgICAsIExFTkdUSCAgICAgPSAnbGVuZ3RoJ1xuXHQgICAgLCBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cdCAgaWYoXG5cdCAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuXHQgICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG5cdCAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcblx0ICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuXHQgICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuXHQgICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG5cdCAgKXtcblx0ICAgIHZhciBOUENHID0gLygpPz8vLmV4ZWMoJycpWzFdID09PSB1bmRlZmluZWQ7IC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcblx0ICAgICRzcGxpdCA9IGZ1bmN0aW9uKHNlcGFyYXRvciwgbGltaXQpe1xuXHQgICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuXHQgICAgICBpZihzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMClyZXR1cm4gW107XG5cdCAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG5cdCAgICAgIGlmKCFpc1JlZ0V4cChzZXBhcmF0b3IpKXJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuXHQgICAgICB2YXIgb3V0cHV0ID0gW107XG5cdCAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG5cdCAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcblx0ICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcblx0ICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG5cdCAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcblx0ICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gNDI5NDk2NzI5NSA6IGxpbWl0ID4+PiAwO1xuXHQgICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuXHQgICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuXHQgICAgICB2YXIgc2VwYXJhdG9yMiwgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aCwgaTtcblx0ICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG5cdCAgICAgIGlmKCFOUENHKXNlcGFyYXRvcjIgPSBuZXcgUmVnRXhwKCdeJyArIHNlcGFyYXRvckNvcHkuc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG5cdCAgICAgIHdoaWxlKG1hdGNoID0gc2VwYXJhdG9yQ29weS5leGVjKHN0cmluZykpe1xuXHQgICAgICAgIC8vIGBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcblx0ICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdW0xFTkdUSF07XG5cdCAgICAgICAgaWYobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCl7XG5cdCAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcblx0ICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvciBOUENHXG5cdCAgICAgICAgICBpZighTlBDRyAmJiBtYXRjaFtMRU5HVEhdID4gMSltYXRjaFswXS5yZXBsYWNlKHNlcGFyYXRvcjIsIGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IGFyZ3VtZW50c1tMRU5HVEhdIC0gMjsgaSsrKWlmKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKW1hdGNoW2ldID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgfSk7XG5cdCAgICAgICAgICBpZihtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuXHQgICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG5cdCAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHQgICAgICAgICAgaWYob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdClicmVhaztcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG5cdCAgICAgIH1cblx0ICAgICAgaWYobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pe1xuXHQgICAgICAgIGlmKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpb3V0cHV0LnB1c2goJycpO1xuXHQgICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcblx0ICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcblx0ICAgIH07XG5cdCAgLy8gQ2hha3JhLCBWOFxuXHQgIH0gZWxzZSBpZignMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pe1xuXHQgICAgJHNwbGl0ID0gZnVuY3Rpb24oc2VwYXJhdG9yLCBsaW1pdCl7XG5cdCAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogX3NwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG5cdCAgICB9O1xuXHQgIH1cblx0ICAvLyAyMS4xLjMuMTcgU3RyaW5nLnByb3RvdHlwZS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KVxuXHQgIHJldHVybiBbZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCl7XG5cdCAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG5cdCAgICAgICwgZm4gPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcblx0ICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KSA6ICRzcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG5cdCAgfSwgJHNwbGl0XTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxOTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIExJQlJBUlkgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpXG5cdCAgLCBnbG9iYWwgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBjdHggICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KVxuXHQgICwgY2xhc3NvZiAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3Mylcblx0ICAsICRleHBvcnQgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGlzT2JqZWN0ICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBhRnVuY3Rpb24gICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgYW5JbnN0YW5jZSAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTcpXG5cdCAgLCBmb3JPZiAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5OClcblx0ICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTk5KVxuXHQgICwgdGFzayAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDApLnNldFxuXHQgICwgbWljcm90YXNrICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDEpKClcblx0ICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuXHQgICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuXHQgICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3Ncblx0ICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuXHQgICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3Ncblx0ICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG5cdCAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG5cdCAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG5cdHZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuXHQgIHRyeSB7XG5cdCAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcblx0ICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcblx0ICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW19fd2VicGFja19yZXF1aXJlX18oMjMpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcblx0ICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3Rcblx0ICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuXHQgIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblx0fSgpO1xuXG5cdC8vIGhlbHBlcnNcblx0dmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuXHQgIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuXHQgIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG5cdH07XG5cdHZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuXHQgIHZhciB0aGVuO1xuXHQgIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcblx0fTtcblx0dmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG5cdCAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcblx0ICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG5cdCAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG5cdH07XG5cdHZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuXHQgIHZhciByZXNvbHZlLCByZWplY3Q7XG5cdCAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG5cdCAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuXHQgICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcblx0ICAgIHJlamVjdCAgPSAkJHJlamVjdDtcblx0ICB9KTtcblx0ICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG5cdCAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG5cdH07XG5cdHZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG5cdCAgdHJ5IHtcblx0ICAgIGV4ZWMoKTtcblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgcmV0dXJuIHtlcnJvcjogZX07XG5cdCAgfVxuXHR9O1xuXHR2YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuXHQgIGlmKHByb21pc2UuX24pcmV0dXJuO1xuXHQgIHByb21pc2UuX24gPSB0cnVlO1xuXHQgIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG5cdCAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG5cdCAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG5cdCAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcblx0ICAgICAgLCBpICAgICA9IDA7XG5cdCAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuXHQgICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG5cdCAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuXHQgICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuXHQgICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuXHQgICAgICAgICwgcmVzdWx0LCB0aGVuO1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGlmKGhhbmRsZXIpe1xuXHQgICAgICAgICAgaWYoIW9rKXtcblx0ICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuXHQgICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG5cdCAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuXHQgICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcblx0ICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuXHQgICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuXHQgICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuXHQgICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuXHQgICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcblx0ICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcblx0ICAgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICByZWplY3QoZSk7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cdCAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcblx0ICAgIHByb21pc2UuX2MgPSBbXTtcblx0ICAgIHByb21pc2UuX24gPSBmYWxzZTtcblx0ICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuXHQgIH0pO1xuXHR9O1xuXHR2YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcblx0ICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuXHQgICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuXHQgICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcblx0ICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcblx0ICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuXHQgICAgICAgIGlmKGlzTm9kZSl7XG5cdCAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcblx0ICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG5cdCAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG5cdCAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuXHQgICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG5cdCAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcblx0ICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcblx0ICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG5cdCAgfSk7XG5cdH07XG5cdHZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuXHQgIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG5cdCAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG5cdCAgICAsIGkgICAgID0gMFxuXHQgICAgLCByZWFjdGlvbjtcblx0ICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcblx0ICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcblx0ICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcblx0ICB9IHJldHVybiB0cnVlO1xuXHR9O1xuXHR2YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcblx0ICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuXHQgICAgdmFyIGhhbmRsZXI7XG5cdCAgICBpZihpc05vZGUpe1xuXHQgICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcblx0ICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG5cdCAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXHR2YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcblx0ICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cdCAgaWYocHJvbWlzZS5fZClyZXR1cm47XG5cdCAgcHJvbWlzZS5fZCA9IHRydWU7XG5cdCAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG5cdCAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuXHQgIHByb21pc2UuX3MgPSAyO1xuXHQgIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG5cdCAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xuXHR9O1xuXHR2YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG5cdCAgdmFyIHByb21pc2UgPSB0aGlzXG5cdCAgICAsIHRoZW47XG5cdCAgaWYocHJvbWlzZS5fZClyZXR1cm47XG5cdCAgcHJvbWlzZS5fZCA9IHRydWU7XG5cdCAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG5cdCAgdHJ5IHtcblx0ICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuXHQgICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcblx0ICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuXHQgICAgICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcblx0ICAgICAgcHJvbWlzZS5fcyA9IDE7XG5cdCAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG5cdCAgICB9XG5cdCAgfSBjYXRjaChlKXtcblx0ICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG5cdCAgfVxuXHR9O1xuXG5cdC8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5cdGlmKCFVU0VfTkFUSVZFKXtcblx0ICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuXHQgICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG5cdCAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcblx0ICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG5cdCAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuXHQgICAgdHJ5IHtcblx0ICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcblx0ICAgIH0gY2F0Y2goZXJyKXtcblx0ICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG5cdCAgICB9XG5cdCAgfTtcblx0ICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuXHQgICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcblx0ICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcblx0ICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcblx0ICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuXHQgICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuXHQgICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuXHQgICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcblx0ICB9O1xuXHQgIEludGVybmFsLnByb3RvdHlwZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjAyKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcblx0ICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG5cdCAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcblx0ICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG5cdCAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuXHQgICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG5cdCAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuXHQgICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuXHQgICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG5cdCAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcblx0ICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG5cdCAgICB9LFxuXHQgICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcblx0ICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuXHQgICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdCAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuXHQgICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuXHQgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcblx0ICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG5cdCAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG5cdCAgfTtcblx0fVxuXG5cdCRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTg2KShQUk9NSVNFKTtcblx0V3JhcHBlciA9IF9fd2VicGFja19yZXF1aXJlX18oNylbUFJPTUlTRV07XG5cblx0Ly8gc3RhdGljc1xuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG5cdCAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3Qocilcblx0ICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcblx0ICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcblx0ICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG5cdCAgICAkJHJlamVjdChyKTtcblx0ICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG5cdCAgfVxuXHR9KTtcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcblx0ICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcblx0ICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuXHQgICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuXHQgICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcblx0ICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcblx0ICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuXHQgICAgJCRyZXNvbHZlKHgpO1xuXHQgICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcblx0ICB9XG5cdH0pO1xuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1NykoZnVuY3Rpb24oaXRlcil7XG5cdCAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcblx0fSkpLCBQUk9NSVNFLCB7XG5cdCAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG5cdCAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuXHQgICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG5cdCAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG5cdCAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuXHQgICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcblx0ICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG5cdCAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuXHQgICAgICAgICwgaW5kZXggICAgID0gMFxuXHQgICAgICAgICwgcmVtYWluaW5nID0gMTtcblx0ICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcblx0ICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4Kytcblx0ICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuXHQgICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG5cdCAgICAgICAgcmVtYWluaW5nKys7XG5cdCAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuXHQgICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG5cdCAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG5cdCAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuXHQgICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuXHQgICAgICAgIH0sIHJlamVjdCk7XG5cdCAgICAgIH0pO1xuXHQgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG5cdCAgICB9KTtcblx0ICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcblx0ICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG5cdCAgfSxcblx0ICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG5cdCAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG5cdCAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcblx0ICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcblx0ICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG5cdCAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuXHQgICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuXHQgICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcblx0ICAgICAgfSk7XG5cdCAgICB9KTtcblx0ICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcblx0ICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE5NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcblx0ICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG5cdCAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuXHQgIH0gcmV0dXJuIGl0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTk4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgY3R4ICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KVxuXHQgICwgY2FsbCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Mylcblx0ICAsIGlzQXJyYXlJdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTQpXG5cdCAgLCBhbk9iamVjdCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCB0b0xlbmd0aCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCBnZXRJdGVyRm4gICA9IF9fd2VicGFja19yZXF1aXJlX18oMTU2KVxuXHQgICwgQlJFQUsgICAgICAgPSB7fVxuXHQgICwgUkVUVVJOICAgICAgPSB7fTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuXHQgIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcblx0ICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG5cdCAgICAsIGluZGV4ICA9IDBcblx0ICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuXHQgIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcblx0ICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3Jcblx0ICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG5cdCAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG5cdCAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG5cdCAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuXHQgICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG5cdCAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG5cdCAgfVxuXHR9O1xuXHRleHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuXHRleHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuLyoqKi8gfSxcbi8qIDE5OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG5cdHZhciBhbk9iamVjdCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsIFNQRUNJRVMgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdzcGVjaWVzJyk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG5cdCAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcblx0ICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBjdHggICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KVxuXHQgICwgaW52b2tlICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3Nilcblx0ICAsIGh0bWwgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDYpXG5cdCAgLCBjZWwgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKVxuXHQgICwgZ2xvYmFsICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3Ncblx0ICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcblx0ICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuXHQgICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG5cdCAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG5cdCAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuXHQgICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcblx0ICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0ICB2YXIgaWQgPSArdGhpcztcblx0ICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuXHQgICAgdmFyIGZuID0gcXVldWVbaWRdO1xuXHQgICAgZGVsZXRlIHF1ZXVlW2lkXTtcblx0ICAgIGZuKCk7XG5cdCAgfVxuXHR9O1xuXHR2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG5cdCAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG5cdH07XG5cdC8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcblx0aWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG5cdCAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG5cdCAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcblx0ICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG5cdCAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcblx0ICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuXHQgICAgfTtcblx0ICAgIGRlZmVyKGNvdW50ZXIpO1xuXHQgICAgcmV0dXJuIGNvdW50ZXI7XG5cdCAgfTtcblx0ICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG5cdCAgICBkZWxldGUgcXVldWVbaWRdO1xuXHQgIH07XG5cdCAgLy8gTm9kZS5qcyAwLjgtXG5cdCAgaWYoX193ZWJwYWNrX3JlcXVpcmVfXygzMikocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcblx0ICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuXHQgICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG5cdCAgICB9O1xuXHQgIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcblx0ICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuXHQgICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcblx0ICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuXHQgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcblx0ICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuXHQgIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuXHQgIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG5cdCAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG5cdCAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcblx0ICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG5cdCAgICB9O1xuXHQgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuXHQgIC8vIElFOC1cblx0ICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuXHQgICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG5cdCAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcblx0ICAgICAgICBydW4uY2FsbChpZCk7XG5cdCAgICAgIH07XG5cdCAgICB9O1xuXHQgIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG5cdCAgfSBlbHNlIHtcblx0ICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuXHQgICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG5cdCAgICB9O1xuXHQgIH1cblx0fVxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBzZXQ6ICAgc2V0VGFzayxcblx0ICBjbGVhcjogY2xlYXJUYXNrXG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnbG9iYWwgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBtYWNyb3Rhc2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMCkuc2V0XG5cdCAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuXHQgICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3Ncblx0ICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG5cdCAgLCBpc05vZGUgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuXHQgIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cblx0ICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuXHQgICAgdmFyIHBhcmVudCwgZm47XG5cdCAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuXHQgICAgd2hpbGUoaGVhZCl7XG5cdCAgICAgIGZuICAgPSBoZWFkLmZuO1xuXHQgICAgICBoZWFkID0gaGVhZC5uZXh0O1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGZuKCk7XG5cdCAgICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcblx0ICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgdGhyb3cgZTtcblx0ICAgICAgfVxuXHQgICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuXHQgICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuXHQgIH07XG5cblx0ICAvLyBOb2RlLmpzXG5cdCAgaWYoaXNOb2RlKXtcblx0ICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG5cdCAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuXHQgICAgfTtcblx0ICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcblx0ICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuXHQgICAgdmFyIHRvZ2dsZSA9IHRydWVcblx0ICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cdCAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblx0ICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG5cdCAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG5cdCAgICB9O1xuXHQgIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG5cdCAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcblx0ICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdCAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuXHQgICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuXHQgICAgfTtcblx0ICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuXHQgIC8vIC0gc2V0SW1tZWRpYXRlXG5cdCAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuXHQgIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcblx0ICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuXHQgIC8vIC0gc2V0VGltZW91dFxuXHQgIH0gZWxzZSB7XG5cdCAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuXHQgICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG5cdCAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuXHQgICAgfTtcblx0ICB9XG5cblx0ICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuXHQgICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuXHQgICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuXHQgICAgaWYoIWhlYWQpe1xuXHQgICAgICBoZWFkID0gdGFzaztcblx0ICAgICAgbm90aWZ5KCk7XG5cdCAgICB9IGxhc3QgPSB0YXNrO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcblx0ICBmb3IodmFyIGtleSBpbiBzcmMpcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcblx0ICByZXR1cm4gdGFyZ2V0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjAzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBzdHJvbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwNCk7XG5cblx0Ly8gMjMuMSBNYXAgT2JqZWN0c1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjA1KSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xuXHR9LCB7XG5cdCAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG5cdCAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcblx0ICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuXHQgIH0sXG5cdCAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcblx0ICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcblx0ICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcblx0ICB9XG5cdH0sIHN0cm9uZywgdHJ1ZSk7XG5cbi8qKiovIH0sXG4vKiAyMDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGRQICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mXG5cdCAgLCBjcmVhdGUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpXG5cdCAgLCByZWRlZmluZUFsbCA9IF9fd2VicGFja19yZXF1aXJlX18oMjAyKVxuXHQgICwgY3R4ICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KVxuXHQgICwgYW5JbnN0YW5jZSAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5Nylcblx0ICAsIGRlZmluZWQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMylcblx0ICAsIGZvck9mICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTgpXG5cdCAgLCAkaXRlckRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTM0KVxuXHQgICwgc3RlcCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4NClcblx0ICAsIHNldFNwZWNpZXMgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODYpXG5cdCAgLCBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oNClcblx0ICAsIGZhc3RLZXkgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCkuZmFzdEtleVxuXHQgICwgU0laRSAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cblx0dmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcblx0ICAvLyBmYXN0IGNhc2Vcblx0ICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuXHQgIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuXHQgIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuXHQgIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuXHQgICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuXHQgIH1cblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG5cdCAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuXHQgICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuXHQgICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuXHQgICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuXHQgICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG5cdCAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcblx0ICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcblx0ICAgIH0pO1xuXHQgICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcblx0ICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG5cdCAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuXHQgICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKXtcblx0ICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcblx0ICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuXHQgICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIHRoYXRbU0laRV0gPSAwO1xuXHQgICAgICB9LFxuXHQgICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG5cdCAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuXHQgICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcblx0ICAgICAgICB2YXIgdGhhdCAgPSB0aGlzXG5cdCAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcblx0ICAgICAgICBpZihlbnRyeSl7XG5cdCAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cblx0ICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcblx0ICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuXHQgICAgICAgICAgZW50cnkuciA9IHRydWU7XG5cdCAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG5cdCAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG5cdCAgICAgICAgICBpZih0aGF0Ll9mID09IGVudHJ5KXRoYXQuX2YgPSBuZXh0O1xuXHQgICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcblx0ICAgICAgICAgIHRoYXRbU0laRV0tLTtcblx0ICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuXHQgICAgICB9LFxuXHQgICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcblx0ICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG5cdCAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG5cdCAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuXHQgICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuXHQgICAgICAgICAgLCBlbnRyeTtcblx0ICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuXHQgICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcblx0ICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuXHQgICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LFxuXHQgICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG5cdCAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuXHQgICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuXHQgICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuXHQgICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIEM7XG5cdCAgfSxcblx0ICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuXHQgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuXHQgICAgICAsIHByZXYsIGluZGV4O1xuXHQgICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG5cdCAgICBpZihlbnRyeSl7XG5cdCAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcblx0ICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcblx0ICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcblx0ICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG5cdCAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG5cdCAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG5cdCAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcblx0ICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuXHQgICAgICB9O1xuXHQgICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG5cdCAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG5cdCAgICAgIHRoYXRbU0laRV0rKztcblx0ICAgICAgLy8gYWRkIHRvIGluZGV4XG5cdCAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcblx0ICAgIH0gcmV0dXJuIHRoYXQ7XG5cdCAgfSxcblx0ICBnZXRFbnRyeTogZ2V0RW50cnksXG5cdCAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuXHQgICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG5cdCAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG5cdCAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG5cdCAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuXHQgICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG5cdCAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG5cdCAgICB9LCBmdW5jdGlvbigpe1xuXHQgICAgICB2YXIgdGhhdCAgPSB0aGlzXG5cdCAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcblx0ICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcblx0ICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG5cdCAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuXHQgICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuXHQgICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcblx0ICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuXHQgICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuXHQgICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuXHQgICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuXHQgICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuXHQgICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuXHQgICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcblx0ICAgIHNldFNwZWNpZXMoTkFNRSk7XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9LFxuLyogMjA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBnbG9iYWwgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsICRleHBvcnQgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgcmVkZWZpbmUgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KVxuXHQgICwgcmVkZWZpbmVBbGwgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMilcblx0ICAsIG1ldGEgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMClcblx0ICAsIGZvck9mICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTgpXG5cdCAgLCBhbkluc3RhbmNlICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk3KVxuXHQgICwgaXNPYmplY3QgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgZmFpbHMgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCAkaXRlckRldGVjdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTU3KVxuXHQgICwgc2V0VG9TdHJpbmdUYWcgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKVxuXHQgICwgaW5oZXJpdElmUmVxdWlyZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgwKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcblx0ICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cblx0ICAgICwgQyAgICAgPSBCYXNlXG5cdCAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuXHQgICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcblx0ICAgICwgTyAgICAgPSB7fTtcblx0ICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24oS0VZKXtcblx0ICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG5cdCAgICByZWRlZmluZShwcm90bywgS0VZLFxuXHQgICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbihhKXtcblx0ICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcblx0ICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKXtcblx0ICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcblx0ICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKXtcblx0ICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG5cdCAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSl7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cblx0ICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKXsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuXHQgICAgKTtcblx0ICB9O1xuXHQgIGlmKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG5cdCAgfSkpKXtcblx0ICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG5cdCAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuXHQgICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuXHQgICAgbWV0YS5ORUVEID0gdHJ1ZTtcblx0ICB9IGVsc2Uge1xuXHQgICAgdmFyIGluc3RhbmNlICAgICAgICAgICAgID0gbmV3IENcblx0ICAgICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuXHQgICAgICAsIEhBU05UX0NIQUlOSU5HICAgICAgID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZVxuXHQgICAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2Vcblx0ICAgICAgLCBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uKCl7IGluc3RhbmNlLmhhcygxKTsgfSlcblx0ICAgICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuXHQgICAgICAsIEFDQ0VQVF9JVEVSQUJMRVMgICAgID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24oaXRlcil7IG5ldyBDKGl0ZXIpOyB9KSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXHQgICAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcblx0ICAgICAgLCBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcblx0ICAgICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKVxuXHQgICAgICAgICAgLCBpbmRleCAgICAgPSA1O1xuXHQgICAgICAgIHdoaWxlKGluZGV4LS0pJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuXHQgICAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG5cdCAgICAgIH0pO1xuXHQgICAgaWYoIUFDQ0VQVF9JVEVSQUJMRVMpeyBcblx0ICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG5cdCAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuXHQgICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UsIHRhcmdldCwgQyk7XG5cdCAgICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcblx0ICAgICAgICByZXR1cm4gdGhhdDtcblx0ICAgICAgfSk7XG5cdCAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG5cdCAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcblx0ICAgIH1cblx0ICAgIGlmKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pe1xuXHQgICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuXHQgICAgICBmaXhNZXRob2QoJ2hhcycpO1xuXHQgICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcblx0ICAgIH1cblx0ICAgIGlmKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpZml4TWV0aG9kKEFEREVSKTtcblx0ICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG5cdCAgICBpZihJU19XRUFLICYmIHByb3RvLmNsZWFyKWRlbGV0ZSBwcm90by5jbGVhcjtcblx0ICB9XG5cblx0ICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuXHQgIE9bTkFNRV0gPSBDO1xuXHQgICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG5cdCAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG5cdCAgcmV0dXJuIEM7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHN0cm9uZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjA0KTtcblxuXHQvLyAyMy4yIFNldCBPYmplY3RzXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDUpKCdTZXQnLCBmdW5jdGlvbihnZXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG5cdH0sIHtcblx0ICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcblx0ICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG5cdCAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG5cdCAgfVxuXHR9LCBzdHJvbmcpO1xuXG4vKioqLyB9LFxuLyogMjA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBlYWNoICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NCkoMClcblx0ICAsIHJlZGVmaW5lICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpXG5cdCAgLCBtZXRhICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKVxuXHQgICwgYXNzaWduICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2Nylcblx0ICAsIHdlYWsgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjA4KVxuXHQgICwgaXNPYmplY3QgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGdldFdlYWsgICAgICA9IG1ldGEuZ2V0V2Vha1xuXHQgICwgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZVxuXHQgICwgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IHdlYWsudWZzdG9yZVxuXHQgICwgdG1wICAgICAgICAgID0ge31cblx0ICAsIEludGVybmFsTWFwO1xuXG5cdHZhciB3cmFwcGVyID0gZnVuY3Rpb24oZ2V0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gV2Vha01hcCgpe1xuXHQgICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG5cdCAgfTtcblx0fTtcblxuXHR2YXIgbWV0aG9kcyA9IHtcblx0ICAvLyAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG5cdCAgICBpZihpc09iamVjdChrZXkpKXtcblx0ICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG5cdCAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcykuZ2V0KGtleSk7XG5cdCAgICAgIHJldHVybiBkYXRhID8gZGF0YVt0aGlzLl9pXSA6IHVuZGVmaW5lZDtcblx0ICAgIH1cblx0ICB9LFxuXHQgIC8vIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuXHQgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuXHQgICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIGtleSwgdmFsdWUpO1xuXHQgIH1cblx0fTtcblxuXHQvLyAyMy4zIFdlYWtNYXAgT2JqZWN0c1xuXHR2YXIgJFdlYWtNYXAgPSBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjA1KSgnV2Vha01hcCcsIHdyYXBwZXIsIG1ldGhvZHMsIHdlYWssIHRydWUsIHRydWUpO1xuXG5cdC8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcblx0aWYobmV3ICRXZWFrTWFwKCkuc2V0KChPYmplY3QuZnJlZXplIHx8IE9iamVjdCkodG1wKSwgNykuZ2V0KHRtcCkgIT0gNyl7XG5cdCAgSW50ZXJuYWxNYXAgPSB3ZWFrLmdldENvbnN0cnVjdG9yKHdyYXBwZXIpO1xuXHQgIGFzc2lnbihJbnRlcm5hbE1hcC5wcm90b3R5cGUsIG1ldGhvZHMpO1xuXHQgIG1ldGEuTkVFRCA9IHRydWU7XG5cdCAgZWFjaChbJ2RlbGV0ZScsICdoYXMnLCAnZ2V0JywgJ3NldCddLCBmdW5jdGlvbihrZXkpe1xuXHQgICAgdmFyIHByb3RvICA9ICRXZWFrTWFwLnByb3RvdHlwZVxuXHQgICAgICAsIG1ldGhvZCA9IHByb3RvW2tleV07XG5cdCAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbihhLCBiKXtcblx0ICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gaW50ZXJuYWwgd2Vha21hcCBzaGltXG5cdCAgICAgIGlmKGlzT2JqZWN0KGEpICYmICFpc0V4dGVuc2libGUoYSkpe1xuXHQgICAgICAgIGlmKCF0aGlzLl9mKXRoaXMuX2YgPSBuZXcgSW50ZXJuYWxNYXA7XG5cdCAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2Zba2V5XShhLCBiKTtcblx0ICAgICAgICByZXR1cm4ga2V5ID09ICdzZXQnID8gdGhpcyA6IHJlc3VsdDtcblx0ICAgICAgLy8gc3RvcmUgYWxsIHRoZSByZXN0IG9uIG5hdGl2ZSB3ZWFrbWFwXG5cdCAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuXHQgICAgfSk7XG5cdCAgfSk7XG5cdH1cblxuLyoqKi8gfSxcbi8qIDIwOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgcmVkZWZpbmVBbGwgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMilcblx0ICAsIGdldFdlYWsgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCkuZ2V0V2Vha1xuXHQgICwgYW5PYmplY3QgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgaXNPYmplY3QgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgYW5JbnN0YW5jZSAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5Nylcblx0ICAsIGZvck9mICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTgpXG5cdCAgLCBjcmVhdGVBcnJheU1ldGhvZCA9IF9fd2VicGFja19yZXF1aXJlX18oMTY0KVxuXHQgICwgJGhhcyAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCBhcnJheUZpbmQgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG5cdCAgLCBhcnJheUZpbmRJbmRleCAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpXG5cdCAgLCBpZCAgICAgICAgICAgICAgICA9IDA7XG5cblx0Ly8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG5cdHZhciB1bmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24odGhhdCl7XG5cdCAgcmV0dXJuIHRoYXQuX2wgfHwgKHRoYXQuX2wgPSBuZXcgVW5jYXVnaHRGcm96ZW5TdG9yZSk7XG5cdH07XG5cdHZhciBVbmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24oKXtcblx0ICB0aGlzLmEgPSBbXTtcblx0fTtcblx0dmFyIGZpbmRVbmNhdWdodEZyb3plbiA9IGZ1bmN0aW9uKHN0b3JlLCBrZXkpe1xuXHQgIHJldHVybiBhcnJheUZpbmQoc3RvcmUuYSwgZnVuY3Rpb24oaXQpe1xuXHQgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG5cdCAgfSk7XG5cdH07XG5cdFVuY2F1Z2h0RnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuXHQgIGdldDogZnVuY3Rpb24oa2V5KXtcblx0ICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuXHQgICAgaWYoZW50cnkpcmV0dXJuIGVudHJ5WzFdO1xuXHQgIH0sXG5cdCAgaGFzOiBmdW5jdGlvbihrZXkpe1xuXHQgICAgcmV0dXJuICEhZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG5cdCAgfSxcblx0ICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuXHQgICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG5cdCAgICBpZihlbnRyeSllbnRyeVsxXSA9IHZhbHVlO1xuXHQgICAgZWxzZSB0aGlzLmEucHVzaChba2V5LCB2YWx1ZV0pO1xuXHQgIH0sXG5cdCAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG5cdCAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uKGl0KXtcblx0ICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG5cdCAgICB9KTtcblx0ICAgIGlmKH5pbmRleCl0aGlzLmEuc3BsaWNlKGluZGV4LCAxKTtcblx0ICAgIHJldHVybiAhIX5pbmRleDtcblx0ICB9XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuXHQgICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcblx0ICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcblx0ICAgICAgdGhhdC5faSA9IGlkKys7ICAgICAgLy8gY29sbGVjdGlvbiBpZFxuXHQgICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAvLyBsZWFrIHN0b3JlIGZvciB1bmNhdWdodCBmcm96ZW4gb2JqZWN0c1xuXHQgICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuXHQgICAgfSk7XG5cdCAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuXHQgICAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuXHQgICAgICAvLyAyMy40LjMuMyBXZWFrU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG5cdCAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuXHQgICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcblx0ICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcblx0ICAgICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpWydkZWxldGUnXShrZXkpO1xuXHQgICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSkgJiYgZGVsZXRlIGRhdGFbdGhpcy5faV07XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIDIzLjMuMy40IFdlYWtNYXAucHJvdG90eXBlLmhhcyhrZXkpXG5cdCAgICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcblx0ICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcblx0ICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG5cdCAgICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKS5oYXMoa2V5KTtcblx0ICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBDO1xuXHQgIH0sXG5cdCAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcblx0ICAgIHZhciBkYXRhID0gZ2V0V2Vhayhhbk9iamVjdChrZXkpLCB0cnVlKTtcblx0ICAgIGlmKGRhdGEgPT09IHRydWUpdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG5cdCAgICBlbHNlIGRhdGFbdGhhdC5faV0gPSB2YWx1ZTtcblx0ICAgIHJldHVybiB0aGF0O1xuXHQgIH0sXG5cdCAgdWZzdG9yZTogdW5jYXVnaHRGcm96ZW5TdG9yZVxuXHR9O1xuXG4vKioqLyB9LFxuLyogMjA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciB3ZWFrID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDgpO1xuXG5cdC8vIDIzLjQgV2Vha1NldCBPYmplY3RzXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjA1KSgnV2Vha1NldCcsIGZ1bmN0aW9uKGdldCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG5cdH0sIHtcblx0ICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG5cdCAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuXHQgICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIHZhbHVlLCB0cnVlKTtcblx0ICB9XG5cdH0sIHdlYWssIGZhbHNlLCB0cnVlKTtcblxuLyoqKi8gfSxcbi8qIDIxMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS4xIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpXG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgYW5PYmplY3QgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIHJBcHBseSAgICA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLlJlZmxlY3QgfHwge30pLmFwcGx5XG5cdCAgLCBmQXBwbHkgICAgPSBGdW5jdGlvbi5hcHBseTtcblx0Ly8gTVMgRWRnZSBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICByQXBwbHkoZnVuY3Rpb24oKXt9KTtcblx0fSksICdSZWZsZWN0Jywge1xuXHQgIGFwcGx5OiBmdW5jdGlvbiBhcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCl7XG5cdCAgICB2YXIgVCA9IGFGdW5jdGlvbih0YXJnZXQpXG5cdCAgICAgICwgTCA9IGFuT2JqZWN0KGFyZ3VtZW50c0xpc3QpO1xuXHQgICAgcmV0dXJuIHJBcHBseSA/IHJBcHBseShULCB0aGlzQXJndW1lbnQsIEwpIDogZkFwcGx5LmNhbGwoVCwgdGhpc0FyZ3VtZW50LCBMKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXG5cdHZhciAkZXhwb3J0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgY3JlYXRlICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpXG5cdCAgLCBhRnVuY3Rpb24gID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsIGFuT2JqZWN0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgaXNPYmplY3QgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBmYWlscyAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgYmluZCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNzUpXG5cdCAgLCByQ29uc3RydWN0ID0gKF9fd2VicGFja19yZXF1aXJlX18oMikuUmVmbGVjdCB8fCB7fSkuY29uc3RydWN0O1xuXG5cdC8vIE1TIEVkZ2Ugc3VwcG9ydHMgb25seSAyIGFyZ3VtZW50cyBhbmQgYXJndW1lbnRzTGlzdCBhcmd1bWVudCBpcyBvcHRpb25hbFxuXHQvLyBGRiBOaWdodGx5IHNldHMgdGhpcmQgYXJndW1lbnQgYXMgYG5ldy50YXJnZXRgLCBidXQgZG9lcyBub3QgY3JlYXRlIGB0aGlzYCBmcm9tIGl0XG5cdHZhciBORVdfVEFSR0VUX0JVRyA9IGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgZnVuY3Rpb24gRigpe31cblx0ICByZXR1cm4gIShyQ29uc3RydWN0KGZ1bmN0aW9uKCl7fSwgW10sIEYpIGluc3RhbmNlb2YgRik7XG5cdH0pO1xuXHR2YXIgQVJHU19CVUcgPSAhZmFpbHMoZnVuY3Rpb24oKXtcblx0ICByQ29uc3RydWN0KGZ1bmN0aW9uKCl7fSk7XG5cdH0pO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKE5FV19UQVJHRVRfQlVHIHx8IEFSR1NfQlVHKSwgJ1JlZmxlY3QnLCB7XG5cdCAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzIC8qLCBuZXdUYXJnZXQqLyl7XG5cdCAgICBhRnVuY3Rpb24oVGFyZ2V0KTtcblx0ICAgIGFuT2JqZWN0KGFyZ3MpO1xuXHQgICAgdmFyIG5ld1RhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gVGFyZ2V0IDogYUZ1bmN0aW9uKGFyZ3VtZW50c1syXSk7XG5cdCAgICBpZihBUkdTX0JVRyAmJiAhTkVXX1RBUkdFVF9CVUcpcmV0dXJuIHJDb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpO1xuXHQgICAgaWYoVGFyZ2V0ID09IG5ld1RhcmdldCl7XG5cdCAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgb3B0aW1pemF0aW9uIGZvciAwLTQgYXJndW1lbnRzXG5cdCAgICAgIHN3aXRjaChhcmdzLmxlbmd0aCl7XG5cdCAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IFRhcmdldDtcblx0ICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0pO1xuXHQgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG5cdCAgICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcblx0ICAgICAgICBjYXNlIDQ6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgbG90IG9mIGFyZ3VtZW50cyBjYXNlXG5cdCAgICAgIHZhciAkYXJncyA9IFtudWxsXTtcblx0ICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG5cdCAgICAgIHJldHVybiBuZXcgKGJpbmQuYXBwbHkoVGFyZ2V0LCAkYXJncykpO1xuXHQgICAgfVxuXHQgICAgLy8gd2l0aCBhbHRlcmVkIG5ld1RhcmdldCwgbm90IHN1cHBvcnQgYnVpbHQtaW4gY29uc3RydWN0b3JzXG5cdCAgICB2YXIgcHJvdG8gICAgPSBuZXdUYXJnZXQucHJvdG90eXBlXG5cdCAgICAgICwgaW5zdGFuY2UgPSBjcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3QucHJvdG90eXBlKVxuXHQgICAgICAsIHJlc3VsdCAgID0gRnVuY3Rpb24uYXBwbHkuY2FsbChUYXJnZXQsIGluc3RhbmNlLCBhcmdzKTtcblx0ICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIxMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS4zIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcylcblx0dmFyIGRQICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KVxuXHQgICwgJGV4cG9ydCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBhbk9iamVjdCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCB0b1ByaW1pdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXG5cdC8vIE1TIEVkZ2UgaGFzIGJyb2tlbiBSZWZsZWN0LmRlZmluZVByb3BlcnR5IC0gdGhyb3dpbmcgaW5zdGVhZCBvZiByZXR1cm5pbmcgZmFsc2Vcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShkUC5mKHt9LCAxLCB7dmFsdWU6IDF9KSwgMSwge3ZhbHVlOiAyfSk7XG5cdH0pLCAnUmVmbGVjdCcsIHtcblx0ICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyl7XG5cdCAgICBhbk9iamVjdCh0YXJnZXQpO1xuXHQgICAgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShwcm9wZXJ0eUtleSwgdHJ1ZSk7XG5cdCAgICBhbk9iamVjdChhdHRyaWJ1dGVzKTtcblx0ICAgIHRyeSB7XG5cdCAgICAgIGRQLmYodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfSBjYXRjaChlKXtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuNCBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpXG5cdHZhciAkZXhwb3J0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGdPUEQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSkuZlxuXHQgICwgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG5cdCAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpe1xuXHQgICAgdmFyIGRlc2MgPSBnT1BEKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcblx0ICAgIHJldHVybiBkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSA/IGZhbHNlIDogZGVsZXRlIHRhcmdldFtwcm9wZXJ0eUtleV07XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIxNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyAyNi4xLjUgUmVmbGVjdC5lbnVtZXJhdGUodGFyZ2V0KVxuXHR2YXIgJGV4cG9ydCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHR2YXIgRW51bWVyYXRlID0gZnVuY3Rpb24oaXRlcmF0ZWQpe1xuXHQgIHRoaXMuX3QgPSBhbk9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuXHQgIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcblx0ICB2YXIga2V5cyA9IHRoaXMuX2sgPSBbXSAgICAgICAvLyBrZXlzXG5cdCAgICAsIGtleTtcblx0ICBmb3Ioa2V5IGluIGl0ZXJhdGVkKWtleXMucHVzaChrZXkpO1xuXHR9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNikoRW51bWVyYXRlLCAnT2JqZWN0JywgZnVuY3Rpb24oKXtcblx0ICB2YXIgdGhhdCA9IHRoaXNcblx0ICAgICwga2V5cyA9IHRoYXQuX2tcblx0ICAgICwga2V5O1xuXHQgIGRvIHtcblx0ICAgIGlmKHRoYXQuX2kgPj0ga2V5cy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcblx0ICB9IHdoaWxlKCEoKGtleSA9IGtleXNbdGhhdC5faSsrXSkgaW4gdGhhdC5fdCkpO1xuXHQgIHJldHVybiB7dmFsdWU6IGtleSwgZG9uZTogZmFsc2V9O1xuXHR9KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG5cdCAgZW51bWVyYXRlOiBmdW5jdGlvbiBlbnVtZXJhdGUodGFyZ2V0KXtcblx0ICAgIHJldHVybiBuZXcgRW51bWVyYXRlKHRhcmdldCk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIxNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS42IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgWywgcmVjZWl2ZXJdKVxuXHR2YXIgZ09QRCAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KVxuXHQgICwgZ2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICwgaGFzICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCAkZXhwb3J0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGlzT2JqZWN0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGFuT2JqZWN0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cblx0ZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkvKiwgcmVjZWl2ZXIqLyl7XG5cdCAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl1cblx0ICAgICwgZGVzYywgcHJvdG87XG5cdCAgaWYoYW5PYmplY3QodGFyZ2V0KSA9PT0gcmVjZWl2ZXIpcmV0dXJuIHRhcmdldFtwcm9wZXJ0eUtleV07XG5cdCAgaWYoZGVzYyA9IGdPUEQuZih0YXJnZXQsIHByb3BlcnR5S2V5KSlyZXR1cm4gaGFzKGRlc2MsICd2YWx1ZScpXG5cdCAgICA/IGRlc2MudmFsdWVcblx0ICAgIDogZGVzYy5nZXQgIT09IHVuZGVmaW5lZFxuXHQgICAgICA/IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpXG5cdCAgICAgIDogdW5kZWZpbmVkO1xuXHQgIGlmKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpcmV0dXJuIGdldChwcm90bywgcHJvcGVydHlLZXksIHJlY2VpdmVyKTtcblx0fVxuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtnZXQ6IGdldH0pO1xuXG4vKioqLyB9LFxuLyogMjE2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjcgUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSlcblx0dmFyIGdPUEQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSlcblx0ICAsICRleHBvcnQgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG5cdCAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG5cdCAgICByZXR1cm4gZ09QRC5mKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjE3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjggUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpXG5cdHZhciAkZXhwb3J0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGdldFByb3RvID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAsIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuXHQgIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0YXJnZXQpe1xuXHQgICAgcmV0dXJuIGdldFByb3RvKGFuT2JqZWN0KHRhcmdldCkpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuOSBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuXHQgIGhhczogZnVuY3Rpb24gaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpe1xuXHQgICAgcmV0dXJuIHByb3BlcnR5S2V5IGluIHRhcmdldDtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjE5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjEwIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcblx0dmFyICRleHBvcnQgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBhbk9iamVjdCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsICRpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcblx0ICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZSh0YXJnZXQpe1xuXHQgICAgYW5PYmplY3QodGFyZ2V0KTtcblx0ICAgIHJldHVybiAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZSh0YXJnZXQpIDogdHJ1ZTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjIwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjExIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7b3duS2V5czogX193ZWJwYWNrX3JlcXVpcmVfXygyMjEpfSk7XG5cbi8qKiovIH0sXG4vKiAyMjEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcblx0dmFyIGdPUE4gICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OClcblx0ICAsIGdPUFMgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MSlcblx0ICAsIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIFJlZmxlY3QgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5SZWZsZWN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpe1xuXHQgIHZhciBrZXlzICAgICAgID0gZ09QTi5mKGFuT2JqZWN0KGl0KSlcblx0ICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcblx0ICByZXR1cm4gZ2V0U3ltYm9scyA/IGtleXMuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGtleXM7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMjIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuMTIgUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXG5cdHZhciAkZXhwb3J0ICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgJHByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcblx0ICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KXtcblx0ICAgIGFuT2JqZWN0KHRhcmdldCk7XG5cdCAgICB0cnkge1xuXHQgICAgICBpZigkcHJldmVudEV4dGVuc2lvbnMpJHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCk7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfSBjYXRjaChlKXtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMjMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXG5cdHZhciBkUCAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSlcblx0ICAsIGdPUEQgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSlcblx0ICAsIGdldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAsIGhhcyAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgJGV4cG9ydCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBjcmVhdGVEZXNjICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpXG5cdCAgLCBhbk9iamVjdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBpc09iamVjdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5cdGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWLyosIHJlY2VpdmVyKi8pe1xuXHQgIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdGFyZ2V0IDogYXJndW1lbnRzWzNdXG5cdCAgICAsIG93bkRlc2MgID0gZ09QRC5mKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KVxuXHQgICAgLCBleGlzdGluZ0Rlc2NyaXB0b3IsIHByb3RvO1xuXHQgIGlmKCFvd25EZXNjKXtcblx0ICAgIGlmKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpe1xuXHQgICAgICByZXR1cm4gc2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xuXHQgICAgfVxuXHQgICAgb3duRGVzYyA9IGNyZWF0ZURlc2MoMCk7XG5cdCAgfVxuXHQgIGlmKGhhcyhvd25EZXNjLCAndmFsdWUnKSl7XG5cdCAgICBpZihvd25EZXNjLndyaXRhYmxlID09PSBmYWxzZSB8fCAhaXNPYmplY3QocmVjZWl2ZXIpKXJldHVybiBmYWxzZTtcblx0ICAgIGV4aXN0aW5nRGVzY3JpcHRvciA9IGdPUEQuZihyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8IGNyZWF0ZURlc2MoMCk7XG5cdCAgICBleGlzdGluZ0Rlc2NyaXB0b3IudmFsdWUgPSBWO1xuXHQgICAgZFAuZihyZWNlaXZlciwgcHJvcGVydHlLZXksIGV4aXN0aW5nRGVzY3JpcHRvcik7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdCAgcmV0dXJuIG93bkRlc2Muc2V0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IChvd25EZXNjLnNldC5jYWxsKHJlY2VpdmVyLCBWKSwgdHJ1ZSk7XG5cdH1cblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7c2V0OiBzZXR9KTtcblxuLyoqKi8gfSxcbi8qIDIyNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS4xNCBSZWZsZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pXG5cdHZhciAkZXhwb3J0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHNldFByb3RvID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3MSk7XG5cblx0aWYoc2V0UHJvdG8pJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuXHQgIHNldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKXtcblx0ICAgIHNldFByb3RvLmNoZWNrKHRhcmdldCwgcHJvdG8pO1xuXHQgICAgdHJ5IHtcblx0ICAgICAgc2V0UHJvdG8uc2V0KHRhcmdldCwgcHJvdG8pO1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjI1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4zLjMuMSAvIDE1LjkuNC40IERhdGUubm93KClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnRGF0ZScsIHtub3c6IGZ1bmN0aW9uKCl7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfX0pO1xuXG4vKioqLyB9LFxuLyogMjI2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvT2JqZWN0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIHRvUHJpbWl0aXZlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIG5ldyBEYXRlKE5hTikudG9KU09OKCkgIT09IG51bGwgfHwgRGF0ZS5wcm90b3R5cGUudG9KU09OLmNhbGwoe3RvSVNPU3RyaW5nOiBmdW5jdGlvbigpeyByZXR1cm4gMTsgfX0pICE9PSAxO1xuXHR9KSwgJ0RhdGUnLCB7XG5cdCAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oa2V5KXtcblx0ICAgIHZhciBPICA9IHRvT2JqZWN0KHRoaXMpXG5cdCAgICAgICwgcHYgPSB0b1ByaW1pdGl2ZShPKTtcblx0ICAgIHJldHVybiB0eXBlb2YgcHYgPT0gJ251bWJlcicgJiYgIWlzRmluaXRlKHB2KSA/IG51bGwgOiBPLnRvSVNPU3RyaW5nKCk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIyNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyAyMC4zLjQuMzYgLyAxNS45LjUuNDMgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGZhaWxzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCBnZXRUaW1lID0gRGF0ZS5wcm90b3R5cGUuZ2V0VGltZTtcblxuXHR2YXIgbHogPSBmdW5jdGlvbihudW0pe1xuXHQgIHJldHVybiBudW0gPiA5ID8gbnVtIDogJzAnICsgbnVtO1xuXHR9O1xuXG5cdC8vIFBoYW50b21KUyAvIG9sZCBXZWJLaXQgaGFzIGEgYnJva2VuIGltcGxlbWVudGF0aW9uc1xuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuXHQgIHJldHVybiBuZXcgRGF0ZSgtNWUxMyAtIDEpLnRvSVNPU3RyaW5nKCkgIT0gJzAzODUtMDctMjVUMDc6MDY6MzkuOTk5Wic7XG5cdH0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuXHQgIG5ldyBEYXRlKE5hTikudG9JU09TdHJpbmcoKTtcblx0fSkpLCAnRGF0ZScsIHtcblx0ICB0b0lTT1N0cmluZzogZnVuY3Rpb24gdG9JU09TdHJpbmcoKXtcblx0ICAgIGlmKCFpc0Zpbml0ZShnZXRUaW1lLmNhbGwodGhpcykpKXRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuXHQgICAgdmFyIGQgPSB0aGlzXG5cdCAgICAgICwgeSA9IGQuZ2V0VVRDRnVsbFllYXIoKVxuXHQgICAgICAsIG0gPSBkLmdldFVUQ01pbGxpc2Vjb25kcygpXG5cdCAgICAgICwgcyA9IHkgPCAwID8gJy0nIDogeSA+IDk5OTkgPyAnKycgOiAnJztcblx0ICAgIHJldHVybiBzICsgKCcwMDAwMCcgKyBNYXRoLmFicyh5KSkuc2xpY2UocyA/IC02IDogLTQpICtcblx0ICAgICAgJy0nICsgbHooZC5nZXRVVENNb250aCgpICsgMSkgKyAnLScgKyBseihkLmdldFVUQ0RhdGUoKSkgK1xuXHQgICAgICAnVCcgKyBseihkLmdldFVUQ0hvdXJzKCkpICsgJzonICsgbHooZC5nZXRVVENNaW51dGVzKCkpICtcblx0ICAgICAgJzonICsgbHooZC5nZXRVVENTZWNvbmRzKCkpICsgJy4nICsgKG0gPiA5OSA/IG0gOiAnMCcgKyBseihtKSkgKyAnWic7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIyOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIERhdGVQcm90byAgICA9IERhdGUucHJvdG90eXBlXG5cdCAgLCBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJ1xuXHQgICwgVE9fU1RSSU5HICAgID0gJ3RvU3RyaW5nJ1xuXHQgICwgJHRvU3RyaW5nICAgID0gRGF0ZVByb3RvW1RPX1NUUklOR11cblx0ICAsIGdldFRpbWUgICAgICA9IERhdGVQcm90by5nZXRUaW1lO1xuXHRpZihuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKXtcblx0ICBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KShEYXRlUHJvdG8sIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcblx0ICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcblx0ICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyAkdG9TdHJpbmcuY2FsbCh0aGlzKSA6IElOVkFMSURfREFURTtcblx0ICB9KTtcblx0fVxuXG4vKioqLyB9LFxuLyogMjI5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgVE9fUFJJTUlUSVZFID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ3RvUHJpbWl0aXZlJylcblx0ICAsIHByb3RvICAgICAgICA9IERhdGUucHJvdG90eXBlO1xuXG5cdGlmKCEoVE9fUFJJTUlUSVZFIGluIHByb3RvKSlfX3dlYnBhY2tfcmVxdWlyZV9fKDgpKHByb3RvLCBUT19QUklNSVRJVkUsIF9fd2VicGFja19yZXF1aXJlX18oMjMwKSk7XG5cbi8qKiovIH0sXG4vKiAyMzAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGFuT2JqZWN0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIHRvUHJpbWl0aXZlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNClcblx0ICAsIE5VTUJFUiAgICAgID0gJ251bWJlcic7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihoaW50KXtcblx0ICBpZihoaW50ICE9PSAnc3RyaW5nJyAmJiBoaW50ICE9PSBOVU1CRVIgJiYgaGludCAhPT0gJ2RlZmF1bHQnKXRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0IGhpbnQnKTtcblx0ICByZXR1cm4gdG9QcmltaXRpdmUoYW5PYmplY3QodGhpcyksIGhpbnQgIT0gTlVNQkVSKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIzMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHR5cGVkICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMzIpXG5cdCAgLCBidWZmZXIgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzMylcblx0ICAsIGFuT2JqZWN0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCB0b0luZGV4ICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KVxuXHQgICwgdG9MZW5ndGggICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIGlzT2JqZWN0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBBcnJheUJ1ZmZlciAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLkFycmF5QnVmZmVyXG5cdCAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5OSlcblx0ICAsICRBcnJheUJ1ZmZlciA9IGJ1ZmZlci5BcnJheUJ1ZmZlclxuXHQgICwgJERhdGFWaWV3ICAgID0gYnVmZmVyLkRhdGFWaWV3XG5cdCAgLCAkaXNWaWV3ICAgICAgPSAkdHlwZWQuQUJWICYmIEFycmF5QnVmZmVyLmlzVmlld1xuXHQgICwgJHNsaWNlICAgICAgID0gJEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZVxuXHQgICwgVklFVyAgICAgICAgID0gJHR5cGVkLlZJRVdcblx0ICAsIEFSUkFZX0JVRkZFUiA9ICdBcnJheUJ1ZmZlcic7XG5cblx0JGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQXJyYXlCdWZmZXIgIT09ICRBcnJheUJ1ZmZlciksIHtBcnJheUJ1ZmZlcjogJEFycmF5QnVmZmVyfSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhJHR5cGVkLkNPTlNUUiwgQVJSQVlfQlVGRkVSLCB7XG5cdCAgLy8gMjQuMS4zLjEgQXJyYXlCdWZmZXIuaXNWaWV3KGFyZylcblx0ICBpc1ZpZXc6IGZ1bmN0aW9uIGlzVmlldyhpdCl7XG5cdCAgICByZXR1cm4gJGlzVmlldyAmJiAkaXNWaWV3KGl0KSB8fCBpc09iamVjdChpdCkgJiYgVklFVyBpbiBpdDtcblx0ICB9XG5cdH0pO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5VICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHJldHVybiAhbmV3ICRBcnJheUJ1ZmZlcigyKS5zbGljZSgxLCB1bmRlZmluZWQpLmJ5dGVMZW5ndGg7XG5cdH0pLCBBUlJBWV9CVUZGRVIsIHtcblx0ICAvLyAyNC4xLjQuMyBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2Uoc3RhcnQsIGVuZClcblx0ICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCl7XG5cdCAgICBpZigkc2xpY2UgIT09IHVuZGVmaW5lZCAmJiBlbmQgPT09IHVuZGVmaW5lZClyZXR1cm4gJHNsaWNlLmNhbGwoYW5PYmplY3QodGhpcyksIHN0YXJ0KTsgLy8gRkYgZml4XG5cdCAgICB2YXIgbGVuICAgID0gYW5PYmplY3QodGhpcykuYnl0ZUxlbmd0aFxuXHQgICAgICAsIGZpcnN0ICA9IHRvSW5kZXgoc3RhcnQsIGxlbilcblx0ICAgICAgLCBmaW5hbCAgPSB0b0luZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kLCBsZW4pXG5cdCAgICAgICwgcmVzdWx0ID0gbmV3IChzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJEFycmF5QnVmZmVyKSkodG9MZW5ndGgoZmluYWwgLSBmaXJzdCkpXG5cdCAgICAgICwgdmlld1MgID0gbmV3ICREYXRhVmlldyh0aGlzKVxuXHQgICAgICAsIHZpZXdUICA9IG5ldyAkRGF0YVZpZXcocmVzdWx0KVxuXHQgICAgICAsIGluZGV4ICA9IDA7XG5cdCAgICB3aGlsZShmaXJzdCA8IGZpbmFsKXtcblx0ICAgICAgdmlld1Quc2V0VWludDgoaW5kZXgrKywgdmlld1MuZ2V0VWludDgoZmlyc3QrKykpO1xuXHQgICAgfSByZXR1cm4gcmVzdWx0O1xuXHQgIH1cblx0fSk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODYpKEFSUkFZX0JVRkZFUik7XG5cbi8qKiovIH0sXG4vKiAyMzIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBoaWRlICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpXG5cdCAgLCB1aWQgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KVxuXHQgICwgVFlQRUQgID0gdWlkKCd0eXBlZF9hcnJheScpXG5cdCAgLCBWSUVXICAgPSB1aWQoJ3ZpZXcnKVxuXHQgICwgQUJWICAgID0gISEoZ2xvYmFsLkFycmF5QnVmZmVyICYmIGdsb2JhbC5EYXRhVmlldylcblx0ICAsIENPTlNUUiA9IEFCVlxuXHQgICwgaSA9IDAsIGwgPSA5LCBUeXBlZDtcblxuXHR2YXIgVHlwZWRBcnJheUNvbnN0cnVjdG9ycyA9IChcblx0ICAnSW50OEFycmF5LFVpbnQ4QXJyYXksVWludDhDbGFtcGVkQXJyYXksSW50MTZBcnJheSxVaW50MTZBcnJheSxJbnQzMkFycmF5LFVpbnQzMkFycmF5LEZsb2F0MzJBcnJheSxGbG9hdDY0QXJyYXknXG5cdCkuc3BsaXQoJywnKTtcblxuXHR3aGlsZShpIDwgbCl7XG5cdCAgaWYoVHlwZWQgPSBnbG9iYWxbVHlwZWRBcnJheUNvbnN0cnVjdG9yc1tpKytdXSl7XG5cdCAgICBoaWRlKFR5cGVkLnByb3RvdHlwZSwgVFlQRUQsIHRydWUpO1xuXHQgICAgaGlkZShUeXBlZC5wcm90b3R5cGUsIFZJRVcsIHRydWUpO1xuXHQgIH0gZWxzZSBDT05TVFIgPSBmYWxzZTtcblx0fVxuXG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIEFCVjogICAgQUJWLFxuXHQgIENPTlNUUjogQ09OU1RSLFxuXHQgIFRZUEVEOiAgVFlQRUQsXG5cdCAgVklFVzogICBWSUVXXG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMzMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGdsb2JhbCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgREVTQ1JJUFRPUlMgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpXG5cdCAgLCBMSUJSQVJZICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpXG5cdCAgLCAkdHlwZWQgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMyKVxuXHQgICwgaGlkZSAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpXG5cdCAgLCByZWRlZmluZUFsbCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjAyKVxuXHQgICwgZmFpbHMgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCBhbkluc3RhbmNlICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk3KVxuXHQgICwgdG9JbnRlZ2VyICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KVxuXHQgICwgdG9MZW5ndGggICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgZ09QTiAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KS5mXG5cdCAgLCBkUCAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSkuZlxuXHQgICwgYXJyYXlGaWxsICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4MClcblx0ICAsIHNldFRvU3RyaW5nVGFnID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMilcblx0ICAsIEFSUkFZX0JVRkZFUiAgID0gJ0FycmF5QnVmZmVyJ1xuXHQgICwgREFUQV9WSUVXICAgICAgPSAnRGF0YVZpZXcnXG5cdCAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG5cdCAgLCBXUk9OR19MRU5HVEggICA9ICdXcm9uZyBsZW5ndGghJ1xuXHQgICwgV1JPTkdfSU5ERVggICAgPSAnV3JvbmcgaW5kZXghJ1xuXHQgICwgJEFycmF5QnVmZmVyICAgPSBnbG9iYWxbQVJSQVlfQlVGRkVSXVxuXHQgICwgJERhdGFWaWV3ICAgICAgPSBnbG9iYWxbREFUQV9WSUVXXVxuXHQgICwgTWF0aCAgICAgICAgICAgPSBnbG9iYWwuTWF0aFxuXHQgICwgUmFuZ2VFcnJvciAgICAgPSBnbG9iYWwuUmFuZ2VFcnJvclxuXHQgICwgSW5maW5pdHkgICAgICAgPSBnbG9iYWwuSW5maW5pdHlcblx0ICAsIEJhc2VCdWZmZXIgICAgID0gJEFycmF5QnVmZmVyXG5cdCAgLCBhYnMgICAgICAgICAgICA9IE1hdGguYWJzXG5cdCAgLCBwb3cgICAgICAgICAgICA9IE1hdGgucG93XG5cdCAgLCBmbG9vciAgICAgICAgICA9IE1hdGguZmxvb3Jcblx0ICAsIGxvZyAgICAgICAgICAgID0gTWF0aC5sb2dcblx0ICAsIExOMiAgICAgICAgICAgID0gTWF0aC5MTjJcblx0ICAsIEJVRkZFUiAgICAgICAgID0gJ2J1ZmZlcidcblx0ICAsIEJZVEVfTEVOR1RIICAgID0gJ2J5dGVMZW5ndGgnXG5cdCAgLCBCWVRFX09GRlNFVCAgICA9ICdieXRlT2Zmc2V0J1xuXHQgICwgJEJVRkZFUiAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfYicgOiBCVUZGRVJcblx0ICAsICRMRU5HVEggICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX2wnIDogQllURV9MRU5HVEhcblx0ICAsICRPRkZTRVQgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX28nIDogQllURV9PRkZTRVQ7XG5cblx0Ly8gSUVFRTc1NCBjb252ZXJzaW9ucyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2llZWU3NTRcblx0dmFyIHBhY2tJRUVFNzU0ID0gZnVuY3Rpb24odmFsdWUsIG1MZW4sIG5CeXRlcyl7XG5cdCAgdmFyIGJ1ZmZlciA9IEFycmF5KG5CeXRlcylcblx0ICAgICwgZUxlbiAgID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG5cdCAgICAsIGVNYXggICA9ICgxIDw8IGVMZW4pIC0gMVxuXHQgICAgLCBlQmlhcyAgPSBlTWF4ID4+IDFcblx0ICAgICwgcnQgICAgID0gbUxlbiA9PT0gMjMgPyBwb3coMiwgLTI0KSAtIHBvdygyLCAtNzcpIDogMFxuXHQgICAgLCBpICAgICAgPSAwXG5cdCAgICAsIHMgICAgICA9IHZhbHVlIDwgMCB8fCB2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwID8gMSA6IDBcblx0ICAgICwgZSwgbSwgYztcblx0ICB2YWx1ZSA9IGFicyh2YWx1ZSlcblx0ICBpZih2YWx1ZSAhPSB2YWx1ZSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpe1xuXHQgICAgbSA9IHZhbHVlICE9IHZhbHVlID8gMSA6IDA7XG5cdCAgICBlID0gZU1heDtcblx0ICB9IGVsc2Uge1xuXHQgICAgZSA9IGZsb29yKGxvZyh2YWx1ZSkgLyBMTjIpO1xuXHQgICAgaWYodmFsdWUgKiAoYyA9IHBvdygyLCAtZSkpIDwgMSl7XG5cdCAgICAgIGUtLTtcblx0ICAgICAgYyAqPSAyO1xuXHQgICAgfVxuXHQgICAgaWYoZSArIGVCaWFzID49IDEpe1xuXHQgICAgICB2YWx1ZSArPSBydCAvIGM7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YWx1ZSArPSBydCAqIHBvdygyLCAxIC0gZUJpYXMpO1xuXHQgICAgfVxuXHQgICAgaWYodmFsdWUgKiBjID49IDIpe1xuXHQgICAgICBlKys7XG5cdCAgICAgIGMgLz0gMjtcblx0ICAgIH1cblx0ICAgIGlmKGUgKyBlQmlhcyA+PSBlTWF4KXtcblx0ICAgICAgbSA9IDA7XG5cdCAgICAgIGUgPSBlTWF4O1xuXHQgICAgfSBlbHNlIGlmKGUgKyBlQmlhcyA+PSAxKXtcblx0ICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIHBvdygyLCBtTGVuKTtcblx0ICAgICAgZSA9IGUgKyBlQmlhcztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIG0gPSB2YWx1ZSAqIHBvdygyLCBlQmlhcyAtIDEpICogcG93KDIsIG1MZW4pO1xuXHQgICAgICBlID0gMDtcblx0ICAgIH1cblx0ICB9XG5cdCAgZm9yKDsgbUxlbiA+PSA4OyBidWZmZXJbaSsrXSA9IG0gJiAyNTUsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXHQgIGUgPSBlIDw8IG1MZW4gfCBtO1xuXHQgIGVMZW4gKz0gbUxlbjtcblx0ICBmb3IoOyBlTGVuID4gMDsgYnVmZmVyW2krK10gPSBlICYgMjU1LCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblx0ICBidWZmZXJbLS1pXSB8PSBzICogMTI4O1xuXHQgIHJldHVybiBidWZmZXI7XG5cdH07XG5cdHZhciB1bnBhY2tJRUVFNzU0ID0gZnVuY3Rpb24oYnVmZmVyLCBtTGVuLCBuQnl0ZXMpe1xuXHQgIHZhciBlTGVuICA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuXHQgICAgLCBlTWF4ICA9ICgxIDw8IGVMZW4pIC0gMVxuXHQgICAgLCBlQmlhcyA9IGVNYXggPj4gMVxuXHQgICAgLCBuQml0cyA9IGVMZW4gLSA3XG5cdCAgICAsIGkgICAgID0gbkJ5dGVzIC0gMVxuXHQgICAgLCBzICAgICA9IGJ1ZmZlcltpLS1dXG5cdCAgICAsIGUgICAgID0gcyAmIDEyN1xuXHQgICAgLCBtO1xuXHQgIHMgPj49IDc7XG5cdCAgZm9yKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltpXSwgaS0tLCBuQml0cyAtPSA4KTtcblx0ICBtID0gZSAmICgxIDw8IC1uQml0cykgLSAxO1xuXHQgIGUgPj49IC1uQml0cztcblx0ICBuQml0cyArPSBtTGVuO1xuXHQgIGZvcig7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbaV0sIGktLSwgbkJpdHMgLT0gOCk7XG5cdCAgaWYoZSA9PT0gMCl7XG5cdCAgICBlID0gMSAtIGVCaWFzO1xuXHQgIH0gZWxzZSBpZihlID09PSBlTWF4KXtcblx0ICAgIHJldHVybiBtID8gTmFOIDogcyA/IC1JbmZpbml0eSA6IEluZmluaXR5O1xuXHQgIH0gZWxzZSB7XG5cdCAgICBtID0gbSArIHBvdygyLCBtTGVuKTtcblx0ICAgIGUgPSBlIC0gZUJpYXM7XG5cdCAgfSByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIHBvdygyLCBlIC0gbUxlbik7XG5cdH07XG5cblx0dmFyIHVucGFja0kzMiA9IGZ1bmN0aW9uKGJ5dGVzKXtcblx0ICByZXR1cm4gYnl0ZXNbM10gPDwgMjQgfCBieXRlc1syXSA8PCAxNiB8IGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXTtcblx0fTtcblx0dmFyIHBhY2tJOCA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gW2l0ICYgMHhmZl07XG5cdH07XG5cdHZhciBwYWNrSTE2ID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZl07XG5cdH07XG5cdHZhciBwYWNrSTMyID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZiwgaXQgPj4gMTYgJiAweGZmLCBpdCA+PiAyNCAmIDB4ZmZdO1xuXHR9O1xuXHR2YXIgcGFja0Y2NCA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gcGFja0lFRUU3NTQoaXQsIDUyLCA4KTtcblx0fTtcblx0dmFyIHBhY2tGMzIgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCAyMywgNCk7XG5cdH07XG5cblx0dmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uKEMsIGtleSwgaW50ZXJuYWwpe1xuXHQgIGRQKENbUFJPVE9UWVBFXSwga2V5LCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpc1tpbnRlcm5hbF07IH19KTtcblx0fTtcblxuXHR2YXIgZ2V0ID0gZnVuY3Rpb24odmlldywgYnl0ZXMsIGluZGV4LCBpc0xpdHRsZUVuZGlhbil7XG5cdCAgdmFyIG51bUluZGV4ID0gK2luZGV4XG5cdCAgICAsIGludEluZGV4ID0gdG9JbnRlZ2VyKG51bUluZGV4KTtcblx0ICBpZihudW1JbmRleCAhPSBpbnRJbmRleCB8fCBpbnRJbmRleCA8IDAgfHwgaW50SW5kZXggKyBieXRlcyA+IHZpZXdbJExFTkdUSF0pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG5cdCAgdmFyIHN0b3JlID0gdmlld1skQlVGRkVSXS5fYlxuXHQgICAgLCBzdGFydCA9IGludEluZGV4ICsgdmlld1skT0ZGU0VUXVxuXHQgICAgLCBwYWNrICA9IHN0b3JlLnNsaWNlKHN0YXJ0LCBzdGFydCArIGJ5dGVzKTtcblx0ICByZXR1cm4gaXNMaXR0bGVFbmRpYW4gPyBwYWNrIDogcGFjay5yZXZlcnNlKCk7XG5cdH07XG5cdHZhciBzZXQgPSBmdW5jdGlvbih2aWV3LCBieXRlcywgaW5kZXgsIGNvbnZlcnNpb24sIHZhbHVlLCBpc0xpdHRsZUVuZGlhbil7XG5cdCAgdmFyIG51bUluZGV4ID0gK2luZGV4XG5cdCAgICAsIGludEluZGV4ID0gdG9JbnRlZ2VyKG51bUluZGV4KTtcblx0ICBpZihudW1JbmRleCAhPSBpbnRJbmRleCB8fCBpbnRJbmRleCA8IDAgfHwgaW50SW5kZXggKyBieXRlcyA+IHZpZXdbJExFTkdUSF0pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG5cdCAgdmFyIHN0b3JlID0gdmlld1skQlVGRkVSXS5fYlxuXHQgICAgLCBzdGFydCA9IGludEluZGV4ICsgdmlld1skT0ZGU0VUXVxuXHQgICAgLCBwYWNrICA9IGNvbnZlcnNpb24oK3ZhbHVlKTtcblx0ICBmb3IodmFyIGkgPSAwOyBpIDwgYnl0ZXM7IGkrKylzdG9yZVtzdGFydCArIGldID0gcGFja1tpc0xpdHRsZUVuZGlhbiA/IGkgOiBieXRlcyAtIGkgLSAxXTtcblx0fTtcblxuXHR2YXIgdmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyA9IGZ1bmN0aW9uKHRoYXQsIGxlbmd0aCl7XG5cdCAgYW5JbnN0YW5jZSh0aGF0LCAkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG5cdCAgdmFyIG51bWJlckxlbmd0aCA9ICtsZW5ndGhcblx0ICAgICwgYnl0ZUxlbmd0aCAgID0gdG9MZW5ndGgobnVtYmVyTGVuZ3RoKTtcblx0ICBpZihudW1iZXJMZW5ndGggIT0gYnl0ZUxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG5cdCAgcmV0dXJuIGJ5dGVMZW5ndGg7XG5cdH07XG5cblx0aWYoISR0eXBlZC5BQlYpe1xuXHQgICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCl7XG5cdCAgICB2YXIgYnl0ZUxlbmd0aCA9IHZhbGlkYXRlQXJyYXlCdWZmZXJBcmd1bWVudHModGhpcywgbGVuZ3RoKTtcblx0ICAgIHRoaXMuX2IgICAgICAgPSBhcnJheUZpbGwuY2FsbChBcnJheShieXRlTGVuZ3RoKSwgMCk7XG5cdCAgICB0aGlzWyRMRU5HVEhdID0gYnl0ZUxlbmd0aDtcblx0ICB9O1xuXG5cdCAgJERhdGFWaWV3ID0gZnVuY3Rpb24gRGF0YVZpZXcoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKXtcblx0ICAgIGFuSW5zdGFuY2UodGhpcywgJERhdGFWaWV3LCBEQVRBX1ZJRVcpO1xuXHQgICAgYW5JbnN0YW5jZShidWZmZXIsICRBcnJheUJ1ZmZlciwgREFUQV9WSUVXKTtcblx0ICAgIHZhciBidWZmZXJMZW5ndGggPSBidWZmZXJbJExFTkdUSF1cblx0ICAgICAgLCBvZmZzZXQgICAgICAgPSB0b0ludGVnZXIoYnl0ZU9mZnNldCk7XG5cdCAgICBpZihvZmZzZXQgPCAwIHx8IG9mZnNldCA+IGJ1ZmZlckxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQhJyk7XG5cdCAgICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gYnVmZmVyTGVuZ3RoIC0gb2Zmc2V0IDogdG9MZW5ndGgoYnl0ZUxlbmd0aCk7XG5cdCAgICBpZihvZmZzZXQgKyBieXRlTGVuZ3RoID4gYnVmZmVyTGVuZ3RoKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcblx0ICAgIHRoaXNbJEJVRkZFUl0gPSBidWZmZXI7XG5cdCAgICB0aGlzWyRPRkZTRVRdID0gb2Zmc2V0O1xuXHQgICAgdGhpc1skTEVOR1RIXSA9IGJ5dGVMZW5ndGg7XG5cdCAgfTtcblxuXHQgIGlmKERFU0NSSVBUT1JTKXtcblx0ICAgIGFkZEdldHRlcigkQXJyYXlCdWZmZXIsIEJZVEVfTEVOR1RILCAnX2wnKTtcblx0ICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJVRkZFUiwgJ19iJyk7XG5cdCAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCWVRFX0xFTkdUSCwgJ19sJyk7XG5cdCAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCWVRFX09GRlNFVCwgJ19vJyk7XG5cdCAgfVxuXG5cdCAgcmVkZWZpbmVBbGwoJERhdGFWaWV3W1BST1RPVFlQRV0sIHtcblx0ICAgIGdldEludDg6IGZ1bmN0aW9uIGdldEludDgoYnl0ZU9mZnNldCl7XG5cdCAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF0gPDwgMjQgPj4gMjQ7XG5cdCAgICB9LFxuXHQgICAgZ2V0VWludDg6IGZ1bmN0aW9uIGdldFVpbnQ4KGJ5dGVPZmZzZXQpe1xuXHQgICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdO1xuXHQgICAgfSxcblx0ICAgIGdldEludDE2OiBmdW5jdGlvbiBnZXRJbnQxNihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKTtcblx0ICAgICAgcmV0dXJuIChieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF0pIDw8IDE2ID4+IDE2O1xuXHQgICAgfSxcblx0ICAgIGdldFVpbnQxNjogZnVuY3Rpb24gZ2V0VWludDE2KGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pO1xuXHQgICAgICByZXR1cm4gYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdO1xuXHQgICAgfSxcblx0ICAgIGdldEludDMyOiBmdW5jdGlvbiBnZXRJbnQzMihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICByZXR1cm4gdW5wYWNrSTMyKGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pKTtcblx0ICAgIH0sXG5cdCAgICBnZXRVaW50MzI6IGZ1bmN0aW9uIGdldFVpbnQzMihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICByZXR1cm4gdW5wYWNrSTMyKGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pKSA+Pj4gMDtcblx0ICAgIH0sXG5cdCAgICBnZXRGbG9hdDMyOiBmdW5jdGlvbiBnZXRGbG9hdDMyKGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCAyMywgNCk7XG5cdCAgICB9LFxuXHQgICAgZ2V0RmxvYXQ2NDogZnVuY3Rpb24gZ2V0RmxvYXQ2NChieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICByZXR1cm4gdW5wYWNrSUVFRTc1NChnZXQodGhpcywgOCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSwgNTIsIDgpO1xuXHQgICAgfSxcblx0ICAgIHNldEludDg6IGZ1bmN0aW9uIHNldEludDgoYnl0ZU9mZnNldCwgdmFsdWUpe1xuXHQgICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0k4LCB2YWx1ZSk7XG5cdCAgICB9LFxuXHQgICAgc2V0VWludDg6IGZ1bmN0aW9uIHNldFVpbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcblx0ICAgICAgc2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQsIHBhY2tJOCwgdmFsdWUpO1xuXHQgICAgfSxcblx0ICAgIHNldEludDE2OiBmdW5jdGlvbiBzZXRJbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJMTYsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuXHQgICAgfSxcblx0ICAgIHNldFVpbnQxNjogZnVuY3Rpb24gc2V0VWludDE2KGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICBzZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgcGFja0kxNiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG5cdCAgICB9LFxuXHQgICAgc2V0SW50MzI6IGZ1bmN0aW9uIHNldEludDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0kzMiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG5cdCAgICB9LFxuXHQgICAgc2V0VWludDMyOiBmdW5jdGlvbiBzZXRVaW50MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrSTMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcblx0ICAgIH0sXG5cdCAgICBzZXRGbG9hdDMyOiBmdW5jdGlvbiBzZXRGbG9hdDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0YzMiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG5cdCAgICB9LFxuXHQgICAgc2V0RmxvYXQ2NDogZnVuY3Rpb24gc2V0RmxvYXQ2NChieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgc2V0KHRoaXMsIDgsIGJ5dGVPZmZzZXQsIHBhY2tGNjQsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9IGVsc2Uge1xuXHQgIGlmKCFmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgbmV3ICRBcnJheUJ1ZmZlcjsgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cdCAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICBuZXcgJEFycmF5QnVmZmVyKC41KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblx0ICB9KSl7XG5cdCAgICAkQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiBBcnJheUJ1ZmZlcihsZW5ndGgpe1xuXHQgICAgICByZXR1cm4gbmV3IEJhc2VCdWZmZXIodmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyh0aGlzLCBsZW5ndGgpKTtcblx0ICAgIH07XG5cdCAgICB2YXIgQXJyYXlCdWZmZXJQcm90byA9ICRBcnJheUJ1ZmZlcltQUk9UT1RZUEVdID0gQmFzZUJ1ZmZlcltQUk9UT1RZUEVdO1xuXHQgICAgZm9yKHZhciBrZXlzID0gZ09QTihCYXNlQnVmZmVyKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyApe1xuXHQgICAgICBpZighKChrZXkgPSBrZXlzW2orK10pIGluICRBcnJheUJ1ZmZlcikpaGlkZSgkQXJyYXlCdWZmZXIsIGtleSwgQmFzZUJ1ZmZlcltrZXldKTtcblx0ICAgIH07XG5cdCAgICBpZighTElCUkFSWSlBcnJheUJ1ZmZlclByb3RvLmNvbnN0cnVjdG9yID0gJEFycmF5QnVmZmVyO1xuXHQgIH1cblx0ICAvLyBpT1MgU2FmYXJpIDcueCBidWdcblx0ICB2YXIgdmlldyA9IG5ldyAkRGF0YVZpZXcobmV3ICRBcnJheUJ1ZmZlcigyKSlcblx0ICAgICwgJHNldEludDggPSAkRGF0YVZpZXdbUFJPVE9UWVBFXS5zZXRJbnQ4O1xuXHQgIHZpZXcuc2V0SW50OCgwLCAyMTQ3NDgzNjQ4KTtcblx0ICB2aWV3LnNldEludDgoMSwgMjE0NzQ4MzY0OSk7XG5cdCAgaWYodmlldy5nZXRJbnQ4KDApIHx8ICF2aWV3LmdldEludDgoMSkpcmVkZWZpbmVBbGwoJERhdGFWaWV3W1BST1RPVFlQRV0sIHtcblx0ICAgIHNldEludDg6IGZ1bmN0aW9uIHNldEludDgoYnl0ZU9mZnNldCwgdmFsdWUpe1xuXHQgICAgICAkc2V0SW50OC5jYWxsKHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcblx0ICAgIH0sXG5cdCAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpe1xuXHQgICAgICAkc2V0SW50OC5jYWxsKHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcblx0ICAgIH1cblx0ICB9LCB0cnVlKTtcblx0fVxuXHRzZXRUb1N0cmluZ1RhZygkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG5cdHNldFRvU3RyaW5nVGFnKCREYXRhVmlldywgREFUQV9WSUVXKTtcblx0aGlkZSgkRGF0YVZpZXdbUFJPVE9UWVBFXSwgJHR5cGVkLlZJRVcsIHRydWUpO1xuXHRleHBvcnRzW0FSUkFZX0JVRkZFUl0gPSAkQXJyYXlCdWZmZXI7XG5cdGV4cG9ydHNbREFUQV9WSUVXXSA9ICREYXRhVmlldztcblxuLyoqKi8gfSxcbi8qIDIzNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHQkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDIzMikuQUJWLCB7XG5cdCAgRGF0YVZpZXc6IF9fd2VicGFja19yZXF1aXJlX18oMjMzKS5EYXRhVmlld1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIzNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzYpKCdJbnQ4JywgMSwgZnVuY3Rpb24oaW5pdCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIEludDhBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuXHQgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIzNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKXtcblx0ICB2YXIgTElCUkFSWSAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpXG5cdCAgICAsIGdsb2JhbCAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgICAsIGZhaWxzICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgICAsICRleHBvcnQgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgICAsICR0eXBlZCAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzMilcblx0ICAgICwgJGJ1ZmZlciAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMzKVxuXHQgICAgLCBjdHggICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOClcblx0ICAgICwgYW5JbnN0YW5jZSAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk3KVxuXHQgICAgLCBwcm9wZXJ0eURlc2MgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSlcblx0ICAgICwgaGlkZSAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOClcblx0ICAgICwgcmVkZWZpbmVBbGwgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjAyKVxuXHQgICAgLCB0b0ludGVnZXIgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNilcblx0ICAgICwgdG9MZW5ndGggICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgICAsIHRvSW5kZXggICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KVxuXHQgICAgLCB0b1ByaW1pdGl2ZSAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNClcblx0ICAgICwgaGFzICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAgICwgc2FtZSAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNjkpXG5cdCAgICAsIGNsYXNzb2YgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDczKVxuXHQgICAgLCBpc09iamVjdCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAgICwgdG9PYmplY3QgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgICAsIGlzQXJyYXlJdGVyICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1NClcblx0ICAgICwgY3JlYXRlICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpXG5cdCAgICAsIGdldFByb3RvdHlwZU9mICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICAgLCBnT1BOICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OCkuZlxuXHQgICAgLCBnZXRJdGVyRm4gICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTYpXG5cdCAgICAsIHVpZCAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KVxuXHQgICAgLCB3a3MgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMylcblx0ICAgICwgY3JlYXRlQXJyYXlNZXRob2QgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTY0KVxuXHQgICAgLCBjcmVhdGVBcnJheUluY2x1ZGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNClcblx0ICAgICwgc3BlY2llc0NvbnN0cnVjdG9yICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk5KVxuXHQgICAgLCBBcnJheUl0ZXJhdG9ycyAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODMpXG5cdCAgICAsIEl0ZXJhdG9ycyAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNSlcblx0ICAgICwgJGl0ZXJEZXRlY3QgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTU3KVxuXHQgICAgLCBzZXRTcGVjaWVzICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODYpXG5cdCAgICAsIGFycmF5RmlsbCAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4MClcblx0ICAgICwgYXJyYXlDb3B5V2l0aGluICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTc3KVxuXHQgICAgLCAkRFAgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KVxuXHQgICAgLCAkR09QRCAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSlcblx0ICAgICwgZFAgICAgICAgICAgICAgICAgICA9ICREUC5mXG5cdCAgICAsIGdPUEQgICAgICAgICAgICAgICAgPSAkR09QRC5mXG5cdCAgICAsIFJhbmdlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuUmFuZ2VFcnJvclxuXHQgICAgLCBUeXBlRXJyb3IgICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuXHQgICAgLCBVaW50OEFycmF5ICAgICAgICAgID0gZ2xvYmFsLlVpbnQ4QXJyYXlcblx0ICAgICwgQVJSQVlfQlVGRkVSICAgICAgICA9ICdBcnJheUJ1ZmZlcidcblx0ICAgICwgU0hBUkVEX0JVRkZFUiAgICAgICA9ICdTaGFyZWQnICsgQVJSQVlfQlVGRkVSXG5cdCAgICAsIEJZVEVTX1BFUl9FTEVNRU5UICAgPSAnQllURVNfUEVSX0VMRU1FTlQnXG5cdCAgICAsIFBST1RPVFlQRSAgICAgICAgICAgPSAncHJvdG90eXBlJ1xuXHQgICAgLCBBcnJheVByb3RvICAgICAgICAgID0gQXJyYXlbUFJPVE9UWVBFXVxuXHQgICAgLCAkQXJyYXlCdWZmZXIgICAgICAgID0gJGJ1ZmZlci5BcnJheUJ1ZmZlclxuXHQgICAgLCAkRGF0YVZpZXcgICAgICAgICAgID0gJGJ1ZmZlci5EYXRhVmlld1xuXHQgICAgLCBhcnJheUZvckVhY2ggICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoMClcblx0ICAgICwgYXJyYXlGaWx0ZXIgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDIpXG5cdCAgICAsIGFycmF5U29tZSAgICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCgzKVxuXHQgICAgLCBhcnJheUV2ZXJ5ICAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNClcblx0ICAgICwgYXJyYXlGaW5kICAgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG5cdCAgICAsIGFycmF5RmluZEluZGV4ICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg2KVxuXHQgICAgLCBhcnJheUluY2x1ZGVzICAgICAgID0gY3JlYXRlQXJyYXlJbmNsdWRlcyh0cnVlKVxuXHQgICAgLCBhcnJheUluZGV4T2YgICAgICAgID0gY3JlYXRlQXJyYXlJbmNsdWRlcyhmYWxzZSlcblx0ICAgICwgYXJyYXlWYWx1ZXMgICAgICAgICA9IEFycmF5SXRlcmF0b3JzLnZhbHVlc1xuXHQgICAgLCBhcnJheUtleXMgICAgICAgICAgID0gQXJyYXlJdGVyYXRvcnMua2V5c1xuXHQgICAgLCBhcnJheUVudHJpZXMgICAgICAgID0gQXJyYXlJdGVyYXRvcnMuZW50cmllc1xuXHQgICAgLCBhcnJheUxhc3RJbmRleE9mICAgID0gQXJyYXlQcm90by5sYXN0SW5kZXhPZlxuXHQgICAgLCBhcnJheVJlZHVjZSAgICAgICAgID0gQXJyYXlQcm90by5yZWR1Y2Vcblx0ICAgICwgYXJyYXlSZWR1Y2VSaWdodCAgICA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHRcblx0ICAgICwgYXJyYXlKb2luICAgICAgICAgICA9IEFycmF5UHJvdG8uam9pblxuXHQgICAgLCBhcnJheVNvcnQgICAgICAgICAgID0gQXJyYXlQcm90by5zb3J0XG5cdCAgICAsIGFycmF5U2xpY2UgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlXG5cdCAgICAsIGFycmF5VG9TdHJpbmcgICAgICAgPSBBcnJheVByb3RvLnRvU3RyaW5nXG5cdCAgICAsIGFycmF5VG9Mb2NhbGVTdHJpbmcgPSBBcnJheVByb3RvLnRvTG9jYWxlU3RyaW5nXG5cdCAgICAsIElURVJBVE9SICAgICAgICAgICAgPSB3a3MoJ2l0ZXJhdG9yJylcblx0ICAgICwgVEFHICAgICAgICAgICAgICAgICA9IHdrcygndG9TdHJpbmdUYWcnKVxuXHQgICAgLCBUWVBFRF9DT05TVFJVQ1RPUiAgID0gdWlkKCd0eXBlZF9jb25zdHJ1Y3RvcicpXG5cdCAgICAsIERFRl9DT05TVFJVQ1RPUiAgICAgPSB1aWQoJ2RlZl9jb25zdHJ1Y3RvcicpXG5cdCAgICAsIEFMTF9DT05TVFJVQ1RPUlMgICAgPSAkdHlwZWQuQ09OU1RSXG5cdCAgICAsIFRZUEVEX0FSUkFZICAgICAgICAgPSAkdHlwZWQuVFlQRURcblx0ICAgICwgVklFVyAgICAgICAgICAgICAgICA9ICR0eXBlZC5WSUVXXG5cdCAgICAsIFdST05HX0xFTkdUSCAgICAgICAgPSAnV3JvbmcgbGVuZ3RoISc7XG5cblx0ICB2YXIgJG1hcCA9IGNyZWF0ZUFycmF5TWV0aG9kKDEsIGZ1bmN0aW9uKE8sIGxlbmd0aCl7XG5cdCAgICByZXR1cm4gYWxsb2NhdGUoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSksIGxlbmd0aCk7XG5cdCAgfSk7XG5cblx0ICB2YXIgTElUVExFX0VORElBTiA9IGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobmV3IFVpbnQxNkFycmF5KFsxXSkuYnVmZmVyKVswXSA9PT0gMTtcblx0ICB9KTtcblxuXHQgIHZhciBGT1JDRURfU0VUID0gISFVaW50OEFycmF5ICYmICEhVWludDhBcnJheVtQUk9UT1RZUEVdLnNldCAmJiBmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgbmV3IFVpbnQ4QXJyYXkoMSkuc2V0KHt9KTtcblx0ICB9KTtcblxuXHQgIHZhciBzdHJpY3RUb0xlbmd0aCA9IGZ1bmN0aW9uKGl0LCBTQU1FKXtcblx0ICAgIGlmKGl0ID09PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFdST05HX0xFTkdUSCk7XG5cdCAgICB2YXIgbnVtYmVyID0gK2l0XG5cdCAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoaXQpO1xuXHQgICAgaWYoU0FNRSAmJiAhc2FtZShudW1iZXIsIGxlbmd0aCkpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuXHQgICAgcmV0dXJuIGxlbmd0aDtcblx0ICB9O1xuXG5cdCAgdmFyIHRvT2Zmc2V0ID0gZnVuY3Rpb24oaXQsIEJZVEVTKXtcblx0ICAgIHZhciBvZmZzZXQgPSB0b0ludGVnZXIoaXQpO1xuXHQgICAgaWYob2Zmc2V0IDwgMCB8fCBvZmZzZXQgJSBCWVRFUyl0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQhJyk7XG5cdCAgICByZXR1cm4gb2Zmc2V0O1xuXHQgIH07XG5cblx0ICB2YXIgdmFsaWRhdGUgPSBmdW5jdGlvbihpdCl7XG5cdCAgICBpZihpc09iamVjdChpdCkgJiYgVFlQRURfQVJSQVkgaW4gaXQpcmV0dXJuIGl0O1xuXHQgICAgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSB0eXBlZCBhcnJheSEnKTtcblx0ICB9O1xuXG5cdCAgdmFyIGFsbG9jYXRlID0gZnVuY3Rpb24oQywgbGVuZ3RoKXtcblx0ICAgIGlmKCEoaXNPYmplY3QoQykgJiYgVFlQRURfQ09OU1RSVUNUT1IgaW4gQykpe1xuXHQgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0l0IGlzIG5vdCBhIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9yIScpO1xuXHQgICAgfSByZXR1cm4gbmV3IEMobGVuZ3RoKTtcblx0ICB9O1xuXG5cdCAgdmFyIHNwZWNpZXNGcm9tTGlzdCA9IGZ1bmN0aW9uKE8sIGxpc3Qpe1xuXHQgICAgcmV0dXJuIGZyb21MaXN0KHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pLCBsaXN0KTtcblx0ICB9O1xuXG5cdCAgdmFyIGZyb21MaXN0ID0gZnVuY3Rpb24oQywgbGlzdCl7XG5cdCAgICB2YXIgaW5kZXggID0gMFxuXHQgICAgICAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoXG5cdCAgICAgICwgcmVzdWx0ID0gYWxsb2NhdGUoQywgbGVuZ3RoKTtcblx0ICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBsaXN0W2luZGV4KytdO1xuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9O1xuXG5cdCAgdmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uKGl0LCBrZXksIGludGVybmFsKXtcblx0ICAgIGRQKGl0LCBrZXksIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLl9kW2ludGVybmFsXTsgfX0pO1xuXHQgIH07XG5cblx0ICB2YXIgJGZyb20gPSBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiwgbWFwZm4sIHRoaXNBcmcgKi8pe1xuXHQgICAgdmFyIE8gICAgICAgPSB0b09iamVjdChzb3VyY2UpXG5cdCAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcblx0ICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuXHQgICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcblx0ICAgICAgLCBpLCBsZW5ndGgsIHZhbHVlcywgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcblx0ICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIWlzQXJyYXlJdGVyKGl0ZXJGbikpe1xuXHQgICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgdmFsdWVzID0gW10sIGkgPSAwOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGkrKyl7XG5cdCAgICAgICAgdmFsdWVzLnB1c2goc3RlcC52YWx1ZSk7XG5cdCAgICAgIH0gTyA9IHZhbHVlcztcblx0ICAgIH1cblx0ICAgIGlmKG1hcHBpbmcgJiYgYUxlbiA+IDIpbWFwZm4gPSBjdHgobWFwZm4sIGFyZ3VtZW50c1syXSwgMik7XG5cdCAgICBmb3IoaSA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSwgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTsgbGVuZ3RoID4gaTsgaSsrKXtcblx0ICAgICAgcmVzdWx0W2ldID0gbWFwcGluZyA/IG1hcGZuKE9baV0sIGkpIDogT1tpXTtcblx0ICAgIH1cblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfTtcblxuXHQgIHZhciAkb2YgPSBmdW5jdGlvbiBvZigvKi4uLml0ZW1zKi8pe1xuXHQgICAgdmFyIGluZGV4ICA9IDBcblx0ICAgICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAgICwgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTtcblx0ICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXgrK107XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHQgIH07XG5cblx0ICAvLyBpT1MgU2FmYXJpIDYueCBmYWlscyBoZXJlXG5cdCAgdmFyIFRPX0xPQ0FMRV9CVUcgPSAhIVVpbnQ4QXJyYXkgJiYgZmFpbHMoZnVuY3Rpb24oKXsgYXJyYXlUb0xvY2FsZVN0cmluZy5jYWxsKG5ldyBVaW50OEFycmF5KDEpKTsgfSk7XG5cblx0ICB2YXIgJHRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmcoKXtcblx0ICAgIHJldHVybiBhcnJheVRvTG9jYWxlU3RyaW5nLmFwcGx5KFRPX0xPQ0FMRV9CVUcgPyBhcnJheVNsaWNlLmNhbGwodmFsaWRhdGUodGhpcykpIDogdmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG5cdCAgfTtcblxuXHQgIHZhciBwcm90byA9IHtcblx0ICAgIGNvcHlXaXRoaW46IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCAvKiwgZW5kICovKXtcblx0ICAgICAgcmV0dXJuIGFycmF5Q29weVdpdGhpbi5jYWxsKHZhbGlkYXRlKHRoaXMpLCB0YXJnZXQsIHN0YXJ0LCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB9LFxuXHQgICAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuXHQgICAgICByZXR1cm4gYXJyYXlFdmVyeSh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgfSxcblx0ICAgIGZpbGw6IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyosIHN0YXJ0LCBlbmQgKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdCAgICAgIHJldHVybiBhcnJheUZpbGwuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG5cdCAgICB9LFxuXHQgICAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG5cdCAgICAgIHJldHVybiBzcGVjaWVzRnJvbUxpc3QodGhpcywgYXJyYXlGaWx0ZXIodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sXG5cdCAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpKTtcblx0ICAgIH0sXG5cdCAgICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSAvKiwgdGhpc0FyZyAqLyl7XG5cdCAgICAgIHJldHVybiBhcnJheUZpbmQodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgfSxcblx0ICAgIGZpbmRJbmRleDogZnVuY3Rpb24gZmluZEluZGV4KHByZWRpY2F0ZSAvKiwgdGhpc0FyZyAqLyl7XG5cdCAgICAgIHJldHVybiBhcnJheUZpbmRJbmRleCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB9LFxuXHQgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGlzQXJnICovKXtcblx0ICAgICAgYXJyYXlGb3JFYWNoKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB9LFxuXHQgICAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8pe1xuXHQgICAgICByZXR1cm4gYXJyYXlJbmRleE9mKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB9LFxuXHQgICAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyl7XG5cdCAgICAgIHJldHVybiBhcnJheUluY2x1ZGVzKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB9LFxuXHQgICAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdCAgICAgIHJldHVybiBhcnJheUpvaW4uYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG5cdCAgICB9LFxuXHQgICAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uIGxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0ICAgICAgcmV0dXJuIGFycmF5TGFzdEluZGV4T2YuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG5cdCAgICB9LFxuXHQgICAgbWFwOiBmdW5jdGlvbiBtYXAobWFwZm4gLyosIHRoaXNBcmcgKi8pe1xuXHQgICAgICByZXR1cm4gJG1hcCh2YWxpZGF0ZSh0aGlzKSwgbWFwZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIH0sXG5cdCAgICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qLCBpbml0aWFsVmFsdWUgKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdCAgICAgIHJldHVybiBhcnJheVJlZHVjZS5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcblx0ICAgIH0sXG5cdCAgICByZWR1Y2VSaWdodDogZnVuY3Rpb24gcmVkdWNlUmlnaHQoY2FsbGJhY2tmbiAvKiwgaW5pdGlhbFZhbHVlICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHQgICAgICByZXR1cm4gYXJyYXlSZWR1Y2VSaWdodC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcblx0ICAgIH0sXG5cdCAgICByZXZlcnNlOiBmdW5jdGlvbiByZXZlcnNlKCl7XG5cdCAgICAgIHZhciB0aGF0ICAgPSB0aGlzXG5cdCAgICAgICAgLCBsZW5ndGggPSB2YWxpZGF0ZSh0aGF0KS5sZW5ndGhcblx0ICAgICAgICAsIG1pZGRsZSA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMilcblx0ICAgICAgICAsIGluZGV4ICA9IDBcblx0ICAgICAgICAsIHZhbHVlO1xuXHQgICAgICB3aGlsZShpbmRleCA8IG1pZGRsZSl7XG5cdCAgICAgICAgdmFsdWUgICAgICAgICA9IHRoYXRbaW5kZXhdO1xuXHQgICAgICAgIHRoYXRbaW5kZXgrK10gPSB0aGF0Wy0tbGVuZ3RoXTtcblx0ICAgICAgICB0aGF0W2xlbmd0aF0gID0gdmFsdWU7XG5cdCAgICAgIH0gcmV0dXJuIHRoYXQ7XG5cdCAgICB9LFxuXHQgICAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qLCB0aGlzQXJnICovKXtcblx0ICAgICAgcmV0dXJuIGFycmF5U29tZSh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgfSxcblx0ICAgIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKXtcblx0ICAgICAgcmV0dXJuIGFycmF5U29ydC5jYWxsKHZhbGlkYXRlKHRoaXMpLCBjb21wYXJlZm4pO1xuXHQgICAgfSxcblx0ICAgIHN1YmFycmF5OiBmdW5jdGlvbiBzdWJhcnJheShiZWdpbiwgZW5kKXtcblx0ICAgICAgdmFyIE8gICAgICA9IHZhbGlkYXRlKHRoaXMpXG5cdCAgICAgICAgLCBsZW5ndGggPSBPLmxlbmd0aFxuXHQgICAgICAgICwgJGJlZ2luID0gdG9JbmRleChiZWdpbiwgbGVuZ3RoKTtcblx0ICAgICAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSkpKFxuXHQgICAgICAgIE8uYnVmZmVyLFxuXHQgICAgICAgIE8uYnl0ZU9mZnNldCArICRiZWdpbiAqIE8uQllURVNfUEVSX0VMRU1FTlQsXG5cdCAgICAgICAgdG9MZW5ndGgoKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCkpIC0gJGJlZ2luKVxuXHQgICAgICApO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICB2YXIgJHNsaWNlID0gZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCl7XG5cdCAgICByZXR1cm4gc3BlY2llc0Zyb21MaXN0KHRoaXMsIGFycmF5U2xpY2UuY2FsbCh2YWxpZGF0ZSh0aGlzKSwgc3RhcnQsIGVuZCkpO1xuXHQgIH07XG5cblx0ICB2YXIgJHNldCA9IGZ1bmN0aW9uIHNldChhcnJheUxpa2UgLyosIG9mZnNldCAqLyl7XG5cdCAgICB2YWxpZGF0ZSh0aGlzKTtcblx0ICAgIHZhciBvZmZzZXQgPSB0b09mZnNldChhcmd1bWVudHNbMV0sIDEpXG5cdCAgICAgICwgbGVuZ3RoID0gdGhpcy5sZW5ndGhcblx0ICAgICAgLCBzcmMgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG5cdCAgICAgICwgbGVuICAgID0gdG9MZW5ndGgoc3JjLmxlbmd0aClcblx0ICAgICAgLCBpbmRleCAgPSAwO1xuXHQgICAgaWYobGVuICsgb2Zmc2V0ID4gbGVuZ3RoKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcblx0ICAgIHdoaWxlKGluZGV4IDwgbGVuKXRoaXNbb2Zmc2V0ICsgaW5kZXhdID0gc3JjW2luZGV4KytdO1xuXHQgIH07XG5cblx0ICB2YXIgJGl0ZXJhdG9ycyA9IHtcblx0ICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoKXtcblx0ICAgICAgcmV0dXJuIGFycmF5RW50cmllcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcblx0ICAgIH0sXG5cdCAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCl7XG5cdCAgICAgIHJldHVybiBhcnJheUtleXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG5cdCAgICB9LFxuXHQgICAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoKXtcblx0ICAgICAgcmV0dXJuIGFycmF5VmFsdWVzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICB2YXIgaXNUQUluZGV4ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpe1xuXHQgICAgcmV0dXJuIGlzT2JqZWN0KHRhcmdldClcblx0ICAgICAgJiYgdGFyZ2V0W1RZUEVEX0FSUkFZXVxuXHQgICAgICAmJiB0eXBlb2Yga2V5ICE9ICdzeW1ib2wnXG5cdCAgICAgICYmIGtleSBpbiB0YXJnZXRcblx0ICAgICAgJiYgU3RyaW5nKCtrZXkpID09IFN0cmluZyhrZXkpO1xuXHQgIH07XG5cdCAgdmFyICRnZXREZXNjID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KXtcblx0ICAgIHJldHVybiBpc1RBSW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuXHQgICAgICA/IHByb3BlcnR5RGVzYygyLCB0YXJnZXRba2V5XSlcblx0ICAgICAgOiBnT1BEKHRhcmdldCwga2V5KTtcblx0ICB9O1xuXHQgIHZhciAkc2V0RGVzYyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjKXtcblx0ICAgIGlmKGlzVEFJbmRleCh0YXJnZXQsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpXG5cdCAgICAgICYmIGlzT2JqZWN0KGRlc2MpXG5cdCAgICAgICYmIGhhcyhkZXNjLCAndmFsdWUnKVxuXHQgICAgICAmJiAhaGFzKGRlc2MsICdnZXQnKVxuXHQgICAgICAmJiAhaGFzKGRlc2MsICdzZXQnKVxuXHQgICAgICAvLyBUT0RPOiBhZGQgdmFsaWRhdGlvbiBkZXNjcmlwdG9yIHcvbyBjYWxsaW5nIGFjY2Vzc29yc1xuXHQgICAgICAmJiAhZGVzYy5jb25maWd1cmFibGVcblx0ICAgICAgJiYgKCFoYXMoZGVzYywgJ3dyaXRhYmxlJykgfHwgZGVzYy53cml0YWJsZSlcblx0ICAgICAgJiYgKCFoYXMoZGVzYywgJ2VudW1lcmFibGUnKSB8fCBkZXNjLmVudW1lcmFibGUpXG5cdCAgICApe1xuXHQgICAgICB0YXJnZXRba2V5XSA9IGRlc2MudmFsdWU7XG5cdCAgICAgIHJldHVybiB0YXJnZXQ7XG5cdCAgICB9IGVsc2UgcmV0dXJuIGRQKHRhcmdldCwga2V5LCBkZXNjKTtcblx0ICB9O1xuXG5cdCAgaWYoIUFMTF9DT05TVFJVQ1RPUlMpe1xuXHQgICAgJEdPUEQuZiA9ICRnZXREZXNjO1xuXHQgICAgJERQLmYgICA9ICRzZXREZXNjO1xuXHQgIH1cblxuXHQgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIUFMTF9DT05TVFJVQ1RPUlMsICdPYmplY3QnLCB7XG5cdCAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXREZXNjLFxuXHQgICAgZGVmaW5lUHJvcGVydHk6ICAgICAgICAgICAkc2V0RGVzY1xuXHQgIH0pO1xuXG5cdCAgaWYoZmFpbHMoZnVuY3Rpb24oKXsgYXJyYXlUb1N0cmluZy5jYWxsKHt9KTsgfSkpe1xuXHQgICAgYXJyYXlUb1N0cmluZyA9IGFycmF5VG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpe1xuXHQgICAgICByZXR1cm4gYXJyYXlKb2luLmNhbGwodGhpcyk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgdmFyICRUeXBlZEFycmF5UHJvdG90eXBlJCA9IHJlZGVmaW5lQWxsKHt9LCBwcm90byk7XG5cdCAgcmVkZWZpbmVBbGwoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAkaXRlcmF0b3JzKTtcblx0ICBoaWRlKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgSVRFUkFUT1IsICRpdGVyYXRvcnMudmFsdWVzKTtcblx0ICByZWRlZmluZUFsbCgkVHlwZWRBcnJheVByb3RvdHlwZSQsIHtcblx0ICAgIHNsaWNlOiAgICAgICAgICAkc2xpY2UsXG5cdCAgICBzZXQ6ICAgICAgICAgICAgJHNldCxcblx0ICAgIGNvbnN0cnVjdG9yOiAgICBmdW5jdGlvbigpeyAvKiBub29wICovIH0sXG5cdCAgICB0b1N0cmluZzogICAgICAgYXJyYXlUb1N0cmluZyxcblx0ICAgIHRvTG9jYWxlU3RyaW5nOiAkdG9Mb2NhbGVTdHJpbmdcblx0ICB9KTtcblx0ICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnVmZmVyJywgJ2InKTtcblx0ICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnl0ZU9mZnNldCcsICdvJyk7XG5cdCAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J5dGVMZW5ndGgnLCAnbCcpO1xuXHQgIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdsZW5ndGgnLCAnZScpO1xuXHQgIGRQKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgVEFHLCB7XG5cdCAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzW1RZUEVEX0FSUkFZXTsgfVxuXHQgIH0pO1xuXG5cdCAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIEJZVEVTLCB3cmFwcGVyLCBDTEFNUEVEKXtcblx0ICAgIENMQU1QRUQgPSAhIUNMQU1QRUQ7XG5cdCAgICB2YXIgTkFNRSAgICAgICA9IEtFWSArIChDTEFNUEVEID8gJ0NsYW1wZWQnIDogJycpICsgJ0FycmF5J1xuXHQgICAgICAsIElTTlRfVUlOVDggPSBOQU1FICE9ICdVaW50OEFycmF5J1xuXHQgICAgICAsIEdFVFRFUiAgICAgPSAnZ2V0JyArIEtFWVxuXHQgICAgICAsIFNFVFRFUiAgICAgPSAnc2V0JyArIEtFWVxuXHQgICAgICAsIFR5cGVkQXJyYXkgPSBnbG9iYWxbTkFNRV1cblx0ICAgICAgLCBCYXNlICAgICAgID0gVHlwZWRBcnJheSB8fCB7fVxuXHQgICAgICAsIFRBQyAgICAgICAgPSBUeXBlZEFycmF5ICYmIGdldFByb3RvdHlwZU9mKFR5cGVkQXJyYXkpXG5cdCAgICAgICwgRk9SQ0VEICAgICA9ICFUeXBlZEFycmF5IHx8ICEkdHlwZWQuQUJWXG5cdCAgICAgICwgTyAgICAgICAgICA9IHt9XG5cdCAgICAgICwgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXkgJiYgVHlwZWRBcnJheVtQUk9UT1RZUEVdO1xuXHQgICAgdmFyIGdldHRlciA9IGZ1bmN0aW9uKHRoYXQsIGluZGV4KXtcblx0ICAgICAgdmFyIGRhdGEgPSB0aGF0Ll9kO1xuXHQgICAgICByZXR1cm4gZGF0YS52W0dFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEubywgTElUVExFX0VORElBTik7XG5cdCAgICB9O1xuXHQgICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uKHRoYXQsIGluZGV4LCB2YWx1ZSl7XG5cdCAgICAgIHZhciBkYXRhID0gdGhhdC5fZDtcblx0ICAgICAgaWYoQ0xBTVBFRCl2YWx1ZSA9ICh2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpKSA8IDAgPyAwIDogdmFsdWUgPiAweGZmID8gMHhmZiA6IHZhbHVlICYgMHhmZjtcblx0ICAgICAgZGF0YS52W1NFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEubywgdmFsdWUsIExJVFRMRV9FTkRJQU4pO1xuXHQgICAgfTtcblx0ICAgIHZhciBhZGRFbGVtZW50ID0gZnVuY3Rpb24odGhhdCwgaW5kZXgpe1xuXHQgICAgICBkUCh0aGF0LCBpbmRleCwge1xuXHQgICAgICAgIGdldDogZnVuY3Rpb24oKXtcblx0ICAgICAgICAgIHJldHVybiBnZXR0ZXIodGhpcywgaW5kZXgpO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XG5cdCAgICAgICAgICByZXR1cm4gc2V0dGVyKHRoaXMsIGluZGV4LCB2YWx1ZSk7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG5cdCAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIGlmKEZPUkNFRCl7XG5cdCAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpe1xuXHQgICAgICAgIGFuSW5zdGFuY2UodGhhdCwgVHlwZWRBcnJheSwgTkFNRSwgJ19kJyk7XG5cdCAgICAgICAgdmFyIGluZGV4ICA9IDBcblx0ICAgICAgICAgICwgb2Zmc2V0ID0gMFxuXHQgICAgICAgICAgLCBidWZmZXIsIGJ5dGVMZW5ndGgsIGxlbmd0aCwga2xhc3M7XG5cdCAgICAgICAgaWYoIWlzT2JqZWN0KGRhdGEpKXtcblx0ICAgICAgICAgIGxlbmd0aCAgICAgPSBzdHJpY3RUb0xlbmd0aChkYXRhLCB0cnVlKVxuXHQgICAgICAgICAgYnl0ZUxlbmd0aCA9IGxlbmd0aCAqIEJZVEVTO1xuXHQgICAgICAgICAgYnVmZmVyICAgICA9IG5ldyAkQXJyYXlCdWZmZXIoYnl0ZUxlbmd0aCk7XG5cdCAgICAgICAgfSBlbHNlIGlmKGRhdGEgaW5zdGFuY2VvZiAkQXJyYXlCdWZmZXIgfHwgKGtsYXNzID0gY2xhc3NvZihkYXRhKSkgPT0gQVJSQVlfQlVGRkVSIHx8IGtsYXNzID09IFNIQVJFRF9CVUZGRVIpe1xuXHQgICAgICAgICAgYnVmZmVyID0gZGF0YTtcblx0ICAgICAgICAgIG9mZnNldCA9IHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKTtcblx0ICAgICAgICAgIHZhciAkbGVuID0gZGF0YS5ieXRlTGVuZ3RoO1xuXHQgICAgICAgICAgaWYoJGxlbmd0aCA9PT0gdW5kZWZpbmVkKXtcblx0ICAgICAgICAgICAgaWYoJGxlbiAlIEJZVEVTKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcblx0ICAgICAgICAgICAgYnl0ZUxlbmd0aCA9ICRsZW4gLSBvZmZzZXQ7XG5cdCAgICAgICAgICAgIGlmKGJ5dGVMZW5ndGggPCAwKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGJ5dGVMZW5ndGggPSB0b0xlbmd0aCgkbGVuZ3RoKSAqIEJZVEVTO1xuXHQgICAgICAgICAgICBpZihieXRlTGVuZ3RoICsgb2Zmc2V0ID4gJGxlbil0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICBsZW5ndGggPSBieXRlTGVuZ3RoIC8gQllURVM7XG5cdCAgICAgICAgfSBlbHNlIGlmKFRZUEVEX0FSUkFZIGluIGRhdGEpe1xuXHQgICAgICAgICAgcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXksIGRhdGEpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXR1cm4gJGZyb20uY2FsbChUeXBlZEFycmF5LCBkYXRhKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaGlkZSh0aGF0LCAnX2QnLCB7XG5cdCAgICAgICAgICBiOiBidWZmZXIsXG5cdCAgICAgICAgICBvOiBvZmZzZXQsXG5cdCAgICAgICAgICBsOiBieXRlTGVuZ3RoLFxuXHQgICAgICAgICAgZTogbGVuZ3RoLFxuXHQgICAgICAgICAgdjogbmV3ICREYXRhVmlldyhidWZmZXIpXG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgd2hpbGUoaW5kZXggPCBsZW5ndGgpYWRkRWxlbWVudCh0aGF0LCBpbmRleCsrKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5W1BST1RPVFlQRV0gPSBjcmVhdGUoJFR5cGVkQXJyYXlQcm90b3R5cGUkKTtcblx0ICAgICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBUeXBlZEFycmF5KTtcblx0ICAgIH0gZWxzZSBpZighJGl0ZXJEZXRlY3QoZnVuY3Rpb24oaXRlcil7XG5cdCAgICAgIC8vIFY4IHdvcmtzIHdpdGggaXRlcmF0b3JzLCBidXQgZmFpbHMgaW4gbWFueSBvdGhlciBjYXNlc1xuXHQgICAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDU1MlxuXHQgICAgICBuZXcgVHlwZWRBcnJheShudWxsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblx0ICAgICAgbmV3IFR5cGVkQXJyYXkoaXRlcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cdCAgICB9LCB0cnVlKSl7XG5cdCAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpe1xuXHQgICAgICAgIGFuSW5zdGFuY2UodGhhdCwgVHlwZWRBcnJheSwgTkFNRSk7XG5cdCAgICAgICAgdmFyIGtsYXNzO1xuXHQgICAgICAgIC8vIGB3c2AgbW9kdWxlIGJ1ZywgdGVtcG9yYXJpbHkgcmVtb3ZlIHZhbGlkYXRpb24gbGVuZ3RoIGZvciBVaW50OEFycmF5XG5cdCAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvcHVsbC82NDVcblx0ICAgICAgICBpZighaXNPYmplY3QoZGF0YSkpcmV0dXJuIG5ldyBCYXNlKHN0cmljdFRvTGVuZ3RoKGRhdGEsIElTTlRfVUlOVDgpKTtcblx0ICAgICAgICBpZihkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoZGF0YSkpID09IEFSUkFZX0JVRkZFUiB8fCBrbGFzcyA9PSBTSEFSRURfQlVGRkVSKXtcblx0ICAgICAgICAgIHJldHVybiAkbGVuZ3RoICE9PSB1bmRlZmluZWRcblx0ICAgICAgICAgICAgPyBuZXcgQmFzZShkYXRhLCB0b09mZnNldCgkb2Zmc2V0LCBCWVRFUyksICRsZW5ndGgpXG5cdCAgICAgICAgICAgIDogJG9mZnNldCAhPT0gdW5kZWZpbmVkXG5cdCAgICAgICAgICAgICAgPyBuZXcgQmFzZShkYXRhLCB0b09mZnNldCgkb2Zmc2V0LCBCWVRFUykpXG5cdCAgICAgICAgICAgICAgOiBuZXcgQmFzZShkYXRhKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYoVFlQRURfQVJSQVkgaW4gZGF0YSlyZXR1cm4gZnJvbUxpc3QoVHlwZWRBcnJheSwgZGF0YSk7XG5cdCAgICAgICAgcmV0dXJuICRmcm9tLmNhbGwoVHlwZWRBcnJheSwgZGF0YSk7XG5cdCAgICAgIH0pO1xuXHQgICAgICBhcnJheUZvckVhY2goVEFDICE9PSBGdW5jdGlvbi5wcm90b3R5cGUgPyBnT1BOKEJhc2UpLmNvbmNhdChnT1BOKFRBQykpIDogZ09QTihCYXNlKSwgZnVuY3Rpb24oa2V5KXtcblx0ICAgICAgICBpZighKGtleSBpbiBUeXBlZEFycmF5KSloaWRlKFR5cGVkQXJyYXksIGtleSwgQmFzZVtrZXldKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIFR5cGVkQXJyYXlbUFJPVE9UWVBFXSA9IFR5cGVkQXJyYXlQcm90b3R5cGU7XG5cdCAgICAgIGlmKCFMSUJSQVJZKVR5cGVkQXJyYXlQcm90b3R5cGUuY29uc3RydWN0b3IgPSBUeXBlZEFycmF5O1xuXHQgICAgfVxuXHQgICAgdmFyICRuYXRpdmVJdGVyYXRvciAgID0gVHlwZWRBcnJheVByb3RvdHlwZVtJVEVSQVRPUl1cblx0ICAgICAgLCBDT1JSRUNUX0lURVJfTkFNRSA9ICEhJG5hdGl2ZUl0ZXJhdG9yICYmICgkbmF0aXZlSXRlcmF0b3IubmFtZSA9PSAndmFsdWVzJyB8fCAkbmF0aXZlSXRlcmF0b3IubmFtZSA9PSB1bmRlZmluZWQpXG5cdCAgICAgICwgJGl0ZXJhdG9yICAgICAgICAgPSAkaXRlcmF0b3JzLnZhbHVlcztcblx0ICAgIGhpZGUoVHlwZWRBcnJheSwgVFlQRURfQ09OU1RSVUNUT1IsIHRydWUpO1xuXHQgICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBUWVBFRF9BUlJBWSwgTkFNRSk7XG5cdCAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFZJRVcsIHRydWUpO1xuXHQgICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBERUZfQ09OU1RSVUNUT1IsIFR5cGVkQXJyYXkpO1xuXG5cdCAgICBpZihDTEFNUEVEID8gbmV3IFR5cGVkQXJyYXkoMSlbVEFHXSAhPSBOQU1FIDogIShUQUcgaW4gVHlwZWRBcnJheVByb3RvdHlwZSkpe1xuXHQgICAgICBkUChUeXBlZEFycmF5UHJvdG90eXBlLCBUQUcsIHtcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBOQU1FOyB9XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICBPW05BTUVdID0gVHlwZWRBcnJheTtcblxuXHQgICAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoVHlwZWRBcnJheSAhPSBCYXNlKSwgTyk7XG5cblx0ICAgICRleHBvcnQoJGV4cG9ydC5TLCBOQU1FLCB7XG5cdCAgICAgIEJZVEVTX1BFUl9FTEVNRU5UOiBCWVRFUyxcblx0ICAgICAgZnJvbTogJGZyb20sXG5cdCAgICAgIG9mOiAkb2Zcblx0ICAgIH0pO1xuXG5cdCAgICBpZighKEJZVEVTX1BFUl9FTEVNRU5UIGluIFR5cGVkQXJyYXlQcm90b3R5cGUpKWhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgQllURVNfUEVSX0VMRU1FTlQsIEJZVEVTKTtcblxuXHQgICAgJGV4cG9ydCgkZXhwb3J0LlAsIE5BTUUsIHByb3RvKTtcblxuXHQgICAgc2V0U3BlY2llcyhOQU1FKTtcblxuXHQgICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRURfU0VULCBOQU1FLCB7c2V0OiAkc2V0fSk7XG5cblx0ICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIUNPUlJFQ1RfSVRFUl9OQU1FLCBOQU1FLCAkaXRlcmF0b3JzKTtcblxuXHQgICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoVHlwZWRBcnJheVByb3RvdHlwZS50b1N0cmluZyAhPSBhcnJheVRvU3RyaW5nKSwgTkFNRSwge3RvU3RyaW5nOiBhcnJheVRvU3RyaW5nfSk7XG5cblx0ICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgICAgbmV3IFR5cGVkQXJyYXkoMSkuc2xpY2UoKTtcblx0ICAgIH0pLCBOQU1FLCB7c2xpY2U6ICRzbGljZX0pO1xuXG5cdCAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgICByZXR1cm4gWzEsIDJdLnRvTG9jYWxlU3RyaW5nKCkgIT0gbmV3IFR5cGVkQXJyYXkoWzEsIDJdKS50b0xvY2FsZVN0cmluZygpXG5cdCAgICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgICAgVHlwZWRBcnJheVByb3RvdHlwZS50b0xvY2FsZVN0cmluZy5jYWxsKFsxLCAyXSk7XG5cdCAgICB9KSksIE5BTUUsIHt0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nfSk7XG5cblx0ICAgIEl0ZXJhdG9yc1tOQU1FXSA9IENPUlJFQ1RfSVRFUl9OQU1FID8gJG5hdGl2ZUl0ZXJhdG9yIDogJGl0ZXJhdG9yO1xuXHQgICAgaWYoIUxJQlJBUlkgJiYgIUNPUlJFQ1RfSVRFUl9OQU1FKWhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgSVRFUkFUT1IsICRpdGVyYXRvcik7XG5cdCAgfTtcblx0fSBlbHNlIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuLyoqKi8gfSxcbi8qIDIzNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzYpKCdVaW50OCcsIDEsIGZ1bmN0aW9uKGluaXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBVaW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG5cdCAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjM4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNikoJ1VpbnQ4JywgMSwgZnVuY3Rpb24oaW5pdCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQ4Q2xhbXBlZEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG5cdCAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuXHQgIH07XG5cdH0sIHRydWUpO1xuXG4vKioqLyB9LFxuLyogMjM5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNikoJ0ludDE2JywgMiwgZnVuY3Rpb24oaW5pdCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIEludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcblx0ICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM2KSgnVWludDE2JywgMiwgZnVuY3Rpb24oaW5pdCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQxNkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG5cdCAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjQxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNikoJ0ludDMyJywgNCwgZnVuY3Rpb24oaW5pdCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIEludDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcblx0ICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM2KSgnVWludDMyJywgNCwgZnVuY3Rpb24oaW5pdCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG5cdCAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjQzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNikoJ0Zsb2F0MzInLCA0LCBmdW5jdGlvbihpbml0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gRmxvYXQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG5cdCAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjQ0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNikoJ0Zsb2F0NjQnLCA4LCBmdW5jdGlvbihpbml0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gRmxvYXQ2NEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG5cdCAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjQ1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGluY2x1ZGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCkodHJ1ZSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcblx0ICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyosIGZyb21JbmRleCA9IDAgKi8pe1xuXHQgICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgIH1cblx0fSk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzgpKCdpbmNsdWRlcycpO1xuXG4vKioqLyB9LFxuLyogMjQ2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkYXQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjUpKHRydWUpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuXHQgIGF0OiBmdW5jdGlvbiBhdChwb3Mpe1xuXHQgICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkcGFkICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNDgpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuXHQgIHBhZFN0YXJ0OiBmdW5jdGlvbiBwYWRTdGFydChtYXhMZW5ndGggLyosIGZpbGxTdHJpbmcgPSAnICcgKi8pe1xuXHQgICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI0OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcblx0dmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIHJlcGVhdCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NSlcblx0ICAsIGRlZmluZWQgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBtYXhMZW5ndGgsIGZpbGxTdHJpbmcsIGxlZnQpe1xuXHQgIHZhciBTICAgICAgICAgICAgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcblx0ICAgICwgc3RyaW5nTGVuZ3RoID0gUy5sZW5ndGhcblx0ICAgICwgZmlsbFN0ciAgICAgID0gZmlsbFN0cmluZyA9PT0gdW5kZWZpbmVkID8gJyAnIDogU3RyaW5nKGZpbGxTdHJpbmcpXG5cdCAgICAsIGludE1heExlbmd0aCA9IHRvTGVuZ3RoKG1heExlbmd0aCk7XG5cdCAgaWYoaW50TWF4TGVuZ3RoIDw9IHN0cmluZ0xlbmd0aCB8fCBmaWxsU3RyID09ICcnKXJldHVybiBTO1xuXHQgIHZhciBmaWxsTGVuID0gaW50TWF4TGVuZ3RoIC0gc3RyaW5nTGVuZ3RoXG5cdCAgICAsIHN0cmluZ0ZpbGxlciA9IHJlcGVhdC5jYWxsKGZpbGxTdHIsIE1hdGguY2VpbChmaWxsTGVuIC8gZmlsbFN0ci5sZW5ndGgpKTtcblx0ICBpZihzdHJpbmdGaWxsZXIubGVuZ3RoID4gZmlsbExlbilzdHJpbmdGaWxsZXIgPSBzdHJpbmdGaWxsZXIuc2xpY2UoMCwgZmlsbExlbik7XG5cdCAgcmV0dXJuIGxlZnQgPyBzdHJpbmdGaWxsZXIgKyBTIDogUyArIHN0cmluZ0ZpbGxlcjtcblx0fTtcblxuXG4vKioqLyB9LFxuLyogMjQ5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHBhZCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjQ4KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcblx0ICBwYWRFbmQ6IGZ1bmN0aW9uIHBhZEVuZChtYXhMZW5ndGggLyosIGZpbGxTdHJpbmcgPSAnICcgKi8pe1xuXHQgICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgZmFsc2UpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtc3RyaW5nLWxlZnQtcmlnaHQtdHJpbVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDgxKSgndHJpbUxlZnQnLCBmdW5jdGlvbigkdHJpbSl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1MZWZ0KCl7XG5cdCAgICByZXR1cm4gJHRyaW0odGhpcywgMSk7XG5cdCAgfTtcblx0fSwgJ3RyaW1TdGFydCcpO1xuXG4vKioqLyB9LFxuLyogMjUxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg4MSkoJ3RyaW1SaWdodCcsIGZ1bmN0aW9uKCR0cmltKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gdHJpbVJpZ2h0KCl7XG5cdCAgICByZXR1cm4gJHRyaW0odGhpcywgMik7XG5cdCAgfTtcblx0fSwgJ3RyaW1FbmQnKTtcblxuLyoqKi8gfSxcbi8qIDI1MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL1N0cmluZy5wcm90b3R5cGUubWF0Y2hBbGwvXG5cdHZhciAkZXhwb3J0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGRlZmluZWQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMylcblx0ICAsIHRvTGVuZ3RoICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIGlzUmVnRXhwICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjgpXG5cdCAgLCBnZXRGbGFncyAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTg4KVxuXHQgICwgUmVnRXhwUHJvdG8gPSBSZWdFeHAucHJvdG90eXBlO1xuXG5cdHZhciAkUmVnRXhwU3RyaW5nSXRlcmF0b3IgPSBmdW5jdGlvbihyZWdleHAsIHN0cmluZyl7XG5cdCAgdGhpcy5fciA9IHJlZ2V4cDtcblx0ICB0aGlzLl9zID0gc3RyaW5nO1xuXHR9O1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM2KSgkUmVnRXhwU3RyaW5nSXRlcmF0b3IsICdSZWdFeHAgU3RyaW5nJywgZnVuY3Rpb24gbmV4dCgpe1xuXHQgIHZhciBtYXRjaCA9IHRoaXMuX3IuZXhlYyh0aGlzLl9zKTtcblx0ICByZXR1cm4ge3ZhbHVlOiBtYXRjaCwgZG9uZTogbWF0Y2ggPT09IG51bGx9O1xuXHR9KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcblx0ICBtYXRjaEFsbDogZnVuY3Rpb24gbWF0Y2hBbGwocmVnZXhwKXtcblx0ICAgIGRlZmluZWQodGhpcyk7XG5cdCAgICBpZighaXNSZWdFeHAocmVnZXhwKSl0aHJvdyBUeXBlRXJyb3IocmVnZXhwICsgJyBpcyBub3QgYSByZWdleHAhJyk7XG5cdCAgICB2YXIgUyAgICAgPSBTdHJpbmcodGhpcylcblx0ICAgICAgLCBmbGFncyA9ICdmbGFncycgaW4gUmVnRXhwUHJvdG8gPyBTdHJpbmcocmVnZXhwLmZsYWdzKSA6IGdldEZsYWdzLmNhbGwocmVnZXhwKVxuXHQgICAgICAsIHJ4ICAgID0gbmV3IFJlZ0V4cChyZWdleHAuc291cmNlLCB+ZmxhZ3MuaW5kZXhPZignZycpID8gZmxhZ3MgOiAnZycgKyBmbGFncyk7XG5cdCAgICByeC5sYXN0SW5kZXggPSB0b0xlbmd0aChyZWdleHAubGFzdEluZGV4KTtcblx0ICAgIHJldHVybiBuZXcgJFJlZ0V4cFN0cmluZ0l0ZXJhdG9yKHJ4LCBTKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjUzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KSgnYXN5bmNJdGVyYXRvcicpO1xuXG4vKioqLyB9LFxuLyogMjU0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KSgnb2JzZXJ2YWJsZScpO1xuXG4vKioqLyB9LFxuLyogMjU1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xuXHR2YXIgJGV4cG9ydCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBvd25LZXlzICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjIxKVxuXHQgICwgdG9JT2JqZWN0ICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgZ09QRCAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KVxuXHQgICwgY3JlYXRlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1NSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG5cdCAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3Qpe1xuXHQgICAgdmFyIE8gICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuXHQgICAgICAsIGdldERlc2MgPSBnT1BELmZcblx0ICAgICAgLCBrZXlzICAgID0gb3duS2V5cyhPKVxuXHQgICAgICAsIHJlc3VsdCAgPSB7fVxuXHQgICAgICAsIGkgICAgICAgPSAwXG5cdCAgICAgICwga2V5O1xuXHQgICAgd2hpbGUoa2V5cy5sZW5ndGggPiBpKWNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5ID0ga2V5c1tpKytdLCBnZXREZXNjKE8sIGtleSkpO1xuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjU2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkdmFsdWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNTcpKGZhbHNlKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcblx0ICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCl7XG5cdCAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI1NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdldEtleXMgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpXG5cdCAgLCB0b0lPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgaXNFbnVtICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MikuZjtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc0VudHJpZXMpe1xuXHQgIHJldHVybiBmdW5jdGlvbihpdCl7XG5cdCAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KGl0KVxuXHQgICAgICAsIGtleXMgICA9IGdldEtleXMoTylcblx0ICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuXHQgICAgICAsIGkgICAgICA9IDBcblx0ICAgICAgLCByZXN1bHQgPSBbXVxuXHQgICAgICAsIGtleTtcblx0ICAgIHdoaWxlKGxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSl7XG5cdCAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuXHQgICAgfSByZXR1cm4gcmVzdWx0O1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyNTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xuXHR2YXIgJGV4cG9ydCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkZW50cmllcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjU3KSh0cnVlKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcblx0ICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KXtcblx0ICAgIHJldHVybiAkZW50cmllcyhpdCk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI1OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9PYmplY3QgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIGFGdW5jdGlvbiAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCAkZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXG5cdC8vIEIuMi4yLjIgT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcilcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0KSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIF9fd2VicGFja19yZXF1aXJlX18oMjYwKSwgJ09iamVjdCcsIHtcblx0ICBfX2RlZmluZUdldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcil7XG5cdCAgICAkZGVmaW5lUHJvcGVydHkuZih0b09iamVjdCh0aGlzKSwgUCwge2dldDogYUZ1bmN0aW9uKGdldHRlciksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNjAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIEZvcmNlZCByZXBsYWNlbWVudCBwcm90b3R5cGUgYWNjZXNzb3JzIG1ldGhvZHNcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KXx8ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgdmFyIEsgPSBNYXRoLnJhbmRvbSgpO1xuXHQgIC8vIEluIEZGIHRocm93cyBvbmx5IGRlZmluZSBtZXRob2RzXG5cdCAgX19kZWZpbmVTZXR0ZXJfXy5jYWxsKG51bGwsIEssIGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovfSk7XG5cdCAgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18oMilbS107XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjYxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b09iamVjdCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgYUZ1bmN0aW9uICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsICRkZWZpbmVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cblx0Ly8gQi4yLjIuMyBPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQpICYmICRleHBvcnQoJGV4cG9ydC5QICsgX193ZWJwYWNrX3JlcXVpcmVfXygyNjApLCAnT2JqZWN0Jywge1xuXHQgIF9fZGVmaW5lU2V0dGVyX186IGZ1bmN0aW9uIF9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKXtcblx0ICAgICRkZWZpbmVQcm9wZXJ0eS5mKHRvT2JqZWN0KHRoaXMpLCBQLCB7c2V0OiBhRnVuY3Rpb24oc2V0dGVyKSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI2MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9PYmplY3QgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIHRvUHJpbWl0aXZlICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpXG5cdCAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSkuZjtcblxuXHQvLyBCLjIuMi40IE9iamVjdC5wcm90b3R5cGUuX19sb29rdXBHZXR0ZXJfXyhQKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQpICYmICRleHBvcnQoJGV4cG9ydC5QICsgX193ZWJwYWNrX3JlcXVpcmVfXygyNjApLCAnT2JqZWN0Jywge1xuXHQgIF9fbG9va3VwR2V0dGVyX186IGZ1bmN0aW9uIF9fbG9va3VwR2V0dGVyX18oUCl7XG5cdCAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpXG5cdCAgICAgICwgSyA9IHRvUHJpbWl0aXZlKFAsIHRydWUpXG5cdCAgICAgICwgRDtcblx0ICAgIGRvIHtcblx0ICAgICAgaWYoRCA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBLKSlyZXR1cm4gRC5nZXQ7XG5cdCAgICB9IHdoaWxlKE8gPSBnZXRQcm90b3R5cGVPZihPKSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI2MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9PYmplY3QgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIHRvUHJpbWl0aXZlICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpXG5cdCAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSkuZjtcblxuXHQvLyBCLjIuMi41IE9iamVjdC5wcm90b3R5cGUuX19sb29rdXBTZXR0ZXJfXyhQKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQpICYmICRleHBvcnQoJGV4cG9ydC5QICsgX193ZWJwYWNrX3JlcXVpcmVfXygyNjApLCAnT2JqZWN0Jywge1xuXHQgIF9fbG9va3VwU2V0dGVyX186IGZ1bmN0aW9uIF9fbG9va3VwU2V0dGVyX18oUCl7XG5cdCAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpXG5cdCAgICAgICwgSyA9IHRvUHJpbWl0aXZlKFAsIHRydWUpXG5cdCAgICAgICwgRDtcblx0ICAgIGRvIHtcblx0ICAgICAgaWYoRCA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBLKSlyZXR1cm4gRC5zZXQ7XG5cdCAgICB9IHdoaWxlKE8gPSBnZXRQcm90b3R5cGVPZihPKSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI2NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxuXHR2YXIgJGV4cG9ydCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogX193ZWJwYWNrX3JlcXVpcmVfXygyNjUpKCdNYXAnKX0pO1xuXG4vKioqLyB9LFxuLyogMjY1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG5cdHZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3Mylcblx0ICAsIGZyb20gICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2Nik7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuXHQgICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG5cdCAgICByZXR1cm4gZnJvbSh0aGlzKTtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjY2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZm9yT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5OCk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG5cdCAgdmFyIHJlc3VsdCA9IFtdO1xuXHQgIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXG4vKioqLyB9LFxuLyogMjY3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG5cdHZhciAkZXhwb3J0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdTZXQnLCB7dG9KU09OOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2NSkoJ1NldCcpfSk7XG5cbi8qKiovIH0sXG4vKiAyNjggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvcHJvcG9zYWwtZ2xvYmFsXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1N5c3RlbScsIHtnbG9iYWw6IF9fd2VicGFja19yZXF1aXJlX18oMil9KTtcblxuLyoqKi8gfSxcbi8qIDI2OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9wcm9wb3NhbC1pcy1lcnJvclxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGNvZiAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ0Vycm9yJywge1xuXHQgIGlzRXJyb3I6IGZ1bmN0aW9uIGlzRXJyb3IoaXQpe1xuXHQgICAgcmV0dXJuIGNvZihpdCkgPT09ICdFcnJvcic7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI3MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICBpYWRkaDogZnVuY3Rpb24gaWFkZGgoeDAsIHgxLCB5MCwgeTEpe1xuXHQgICAgdmFyICR4MCA9IHgwID4+PiAwXG5cdCAgICAgICwgJHgxID0geDEgPj4+IDBcblx0ICAgICAgLCAkeTAgPSB5MCA+Pj4gMDtcblx0ICAgIHJldHVybiAkeDEgKyAoeTEgPj4+IDApICsgKCgkeDAgJiAkeTAgfCAoJHgwIHwgJHkwKSAmIH4oJHgwICsgJHkwID4+PiAwKSkgPj4+IDMxKSB8IDA7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI3MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICBpc3ViaDogZnVuY3Rpb24gaXN1YmgoeDAsIHgxLCB5MCwgeTEpe1xuXHQgICAgdmFyICR4MCA9IHgwID4+PiAwXG5cdCAgICAgICwgJHgxID0geDEgPj4+IDBcblx0ICAgICAgLCAkeTAgPSB5MCA+Pj4gMDtcblx0ICAgIHJldHVybiAkeDEgLSAoeTEgPj4+IDApIC0gKCh+JHgwICYgJHkwIHwgfigkeDAgXiAkeTApICYgJHgwIC0gJHkwID4+PiAwKSA+Pj4gMzEpIHwgMDtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjcyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIGltdWxoOiBmdW5jdGlvbiBpbXVsaCh1LCB2KXtcblx0ICAgIHZhciBVSU5UMTYgPSAweGZmZmZcblx0ICAgICAgLCAkdSA9ICt1XG5cdCAgICAgICwgJHYgPSArdlxuXHQgICAgICAsIHUwID0gJHUgJiBVSU5UMTZcblx0ICAgICAgLCB2MCA9ICR2ICYgVUlOVDE2XG5cdCAgICAgICwgdTEgPSAkdSA+PiAxNlxuXHQgICAgICAsIHYxID0gJHYgPj4gMTZcblx0ICAgICAgLCB0ICA9ICh1MSAqIHYwID4+PiAwKSArICh1MCAqIHYwID4+PiAxNik7XG5cdCAgICByZXR1cm4gdTEgKiB2MSArICh0ID4+IDE2KSArICgodTAgKiB2MSA+Pj4gMCkgKyAodCAmIFVJTlQxNikgPj4gMTYpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNzMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgdW11bGg6IGZ1bmN0aW9uIHVtdWxoKHUsIHYpe1xuXHQgICAgdmFyIFVJTlQxNiA9IDB4ZmZmZlxuXHQgICAgICAsICR1ID0gK3Vcblx0ICAgICAgLCAkdiA9ICt2XG5cdCAgICAgICwgdTAgPSAkdSAmIFVJTlQxNlxuXHQgICAgICAsIHYwID0gJHYgJiBVSU5UMTZcblx0ICAgICAgLCB1MSA9ICR1ID4+PiAxNlxuXHQgICAgICAsIHYxID0gJHYgPj4+IDE2XG5cdCAgICAgICwgdCAgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuXHQgICAgcmV0dXJuIHUxICogdjEgKyAodCA+Pj4gMTYpICsgKCh1MCAqIHYxID4+PiAwKSArICh0ICYgVUlOVDE2KSA+Pj4gMTYpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNzQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBtZXRhZGF0YSAgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzUpXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXlcblx0ICAsIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5zZXQ7XG5cblx0bWV0YWRhdGEuZXhwKHtkZWZpbmVNZXRhZGF0YTogZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KXtcblx0ICBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCBhbk9iamVjdCh0YXJnZXQpLCB0b01ldGFLZXkodGFyZ2V0S2V5KSk7XG5cdH19KTtcblxuLyoqKi8gfSxcbi8qIDI3NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIE1hcCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMylcblx0ICAsICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBzaGFyZWQgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSkoJ21ldGFkYXRhJylcblx0ICAsIHN0b3JlICAgPSBzaGFyZWQuc3RvcmUgfHwgKHNoYXJlZC5zdG9yZSA9IG5ldyAoX193ZWJwYWNrX3JlcXVpcmVfXygyMDcpKSk7XG5cblx0dmFyIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAgPSBmdW5jdGlvbih0YXJnZXQsIHRhcmdldEtleSwgY3JlYXRlKXtcblx0ICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcblx0ICBpZighdGFyZ2V0TWV0YWRhdGEpe1xuXHQgICAgaWYoIWNyZWF0ZSlyZXR1cm4gdW5kZWZpbmVkO1xuXHQgICAgc3RvcmUuc2V0KHRhcmdldCwgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgTWFwKTtcblx0ICB9XG5cdCAgdmFyIGtleU1ldGFkYXRhID0gdGFyZ2V0TWV0YWRhdGEuZ2V0KHRhcmdldEtleSk7XG5cdCAgaWYoIWtleU1ldGFkYXRhKXtcblx0ICAgIGlmKCFjcmVhdGUpcmV0dXJuIHVuZGVmaW5lZDtcblx0ICAgIHRhcmdldE1ldGFkYXRhLnNldCh0YXJnZXRLZXksIGtleU1ldGFkYXRhID0gbmV3IE1hcCk7XG5cdCAgfSByZXR1cm4ga2V5TWV0YWRhdGE7XG5cdH07XG5cdHZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuXHQgIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgZmFsc2UpO1xuXHQgIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBtZXRhZGF0YU1hcC5oYXMoTWV0YWRhdGFLZXkpO1xuXHR9O1xuXHR2YXIgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcblx0ICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIGZhbHNlKTtcblx0ICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IG1ldGFkYXRhTWFwLmdldChNZXRhZGF0YUtleSk7XG5cdH07XG5cdHZhciBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApe1xuXHQgIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgdHJ1ZSkuc2V0KE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlKTtcblx0fTtcblx0dmFyIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gZnVuY3Rpb24odGFyZ2V0LCB0YXJnZXRLZXkpe1xuXHQgIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCB0YXJnZXRLZXksIGZhbHNlKVxuXHQgICAgLCBrZXlzICAgICAgICA9IFtdO1xuXHQgIGlmKG1ldGFkYXRhTWFwKW1ldGFkYXRhTWFwLmZvckVhY2goZnVuY3Rpb24oXywga2V5KXsga2V5cy5wdXNoKGtleSk7IH0pO1xuXHQgIHJldHVybiBrZXlzO1xuXHR9O1xuXHR2YXIgdG9NZXRhS2V5ID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogU3RyaW5nKGl0KTtcblx0fTtcblx0dmFyIGV4cCA9IGZ1bmN0aW9uKE8pe1xuXHQgICRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIE8pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIHN0b3JlOiBzdG9yZSxcblx0ICBtYXA6IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAsXG5cdCAgaGFzOiBvcmRpbmFyeUhhc093bk1ldGFkYXRhLFxuXHQgIGdldDogb3JkaW5hcnlHZXRPd25NZXRhZGF0YSxcblx0ICBzZXQ6IG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEsXG5cdCAga2V5czogb3JkaW5hcnlPd25NZXRhZGF0YUtleXMsXG5cdCAga2V5OiB0b01ldGFLZXksXG5cdCAgZXhwOiBleHBcblx0fTtcblxuLyoqKi8gfSxcbi8qIDI3NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3NSlcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleVxuXHQgICwgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCA9IG1ldGFkYXRhLm1hcFxuXHQgICwgc3RvcmUgICAgICAgICAgICAgICAgICA9IG1ldGFkYXRhLnN0b3JlO1xuXG5cdG1ldGFkYXRhLmV4cCh7ZGVsZXRlTWV0YWRhdGE6IGZ1bmN0aW9uIGRlbGV0ZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG5cdCAgdmFyIHRhcmdldEtleSAgID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKVxuXHQgICAgLCBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5LCBmYWxzZSk7XG5cdCAgaWYobWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCB8fCAhbWV0YWRhdGFNYXBbJ2RlbGV0ZSddKG1ldGFkYXRhS2V5KSlyZXR1cm4gZmFsc2U7XG5cdCAgaWYobWV0YWRhdGFNYXAuc2l6ZSlyZXR1cm4gdHJ1ZTtcblx0ICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcblx0ICB0YXJnZXRNZXRhZGF0YVsnZGVsZXRlJ10odGFyZ2V0S2V5KTtcblx0ICByZXR1cm4gISF0YXJnZXRNZXRhZGF0YS5zaXplIHx8IHN0b3JlWydkZWxldGUnXSh0YXJnZXQpO1xuXHR9fSk7XG5cbi8qKiovIH0sXG4vKiAyNzcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzUpXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICwgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhc1xuXHQgICwgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmdldFxuXHQgICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxuXHR2YXIgb3JkaW5hcnlHZXRNZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcblx0ICB2YXIgaGFzT3duID0gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG5cdCAgaWYoaGFzT3duKXJldHVybiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcblx0ICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG5cdCAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IG9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0bWV0YWRhdGEuZXhwKHtnZXRNZXRhZGF0YTogZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcblx0ICByZXR1cm4gb3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG5cdH19KTtcblxuLyoqKi8gfSxcbi8qIDI3OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIFNldCAgICAgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDYpXG5cdCAgLCBmcm9tICAgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjY2KVxuXHQgICwgbWV0YWRhdGEgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3NSlcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAsIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gbWV0YWRhdGEua2V5c1xuXHQgICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cblx0dmFyIG9yZGluYXJ5TWV0YWRhdGFLZXlzID0gZnVuY3Rpb24oTywgUCl7XG5cdCAgdmFyIG9LZXlzICA9IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApXG5cdCAgICAsIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuXHQgIGlmKHBhcmVudCA9PT0gbnVsbClyZXR1cm4gb0tleXM7XG5cdCAgdmFyIHBLZXlzICA9IG9yZGluYXJ5TWV0YWRhdGFLZXlzKHBhcmVudCwgUCk7XG5cdCAgcmV0dXJuIHBLZXlzLmxlbmd0aCA/IG9LZXlzLmxlbmd0aCA/IGZyb20obmV3IFNldChvS2V5cy5jb25jYXQocEtleXMpKSkgOiBwS2V5cyA6IG9LZXlzO1xuXHR9O1xuXG5cdG1ldGFkYXRhLmV4cCh7Z2V0TWV0YWRhdGFLZXlzOiBmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuXHQgIHJldHVybiBvcmRpbmFyeU1ldGFkYXRhS2V5cyhhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMV0pKTtcblx0fX0pO1xuXG4vKioqLyB9LFxuLyogMjc5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjc1KVxuXHQgICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gbWV0YWRhdGEuZ2V0XG5cdCAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5cdG1ldGFkYXRhLmV4cCh7Z2V0T3duTWV0YWRhdGE6IGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG5cdCAgcmV0dXJuIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldClcblx0ICAgICwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG5cdH19KTtcblxuLyoqKi8gfSxcbi8qIDI4MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzUpXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IG1ldGFkYXRhLmtleXNcblx0ICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5cdG1ldGFkYXRhLmV4cCh7Z2V0T3duTWV0YWRhdGFLZXlzOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuXHQgIHJldHVybiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMV0pKTtcblx0fX0pO1xuXG4vKioqLyB9LFxuLyogMjgxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjc1KVxuXHQgICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAsIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXNcblx0ICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cblx0dmFyIG9yZGluYXJ5SGFzTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG5cdCAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuXHQgIGlmKGhhc093bilyZXR1cm4gdHJ1ZTtcblx0ICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG5cdCAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IG9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiBmYWxzZTtcblx0fTtcblxuXHRtZXRhZGF0YS5leHAoe2hhc01ldGFkYXRhOiBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuXHQgIHJldHVybiBvcmRpbmFyeUhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcblx0fX0pO1xuXG4vKioqLyB9LFxuLyogMjgyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjc1KVxuXHQgICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzXG5cdCAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5cdG1ldGFkYXRhLmV4cCh7aGFzT3duTWV0YWRhdGE6IGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG5cdCAgcmV0dXJuIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldClcblx0ICAgICwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG5cdH19KTtcblxuLyoqKi8gfSxcbi8qIDI4MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3NSlcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgYUZ1bmN0aW9uICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5XG5cdCAgLCBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gbWV0YWRhdGEuc2V0O1xuXG5cdG1ldGFkYXRhLmV4cCh7bWV0YWRhdGE6IGZ1bmN0aW9uIG1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgdGFyZ2V0S2V5KXtcblx0ICAgIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoXG5cdCAgICAgIG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLFxuXHQgICAgICAodGFyZ2V0S2V5ICE9PSB1bmRlZmluZWQgPyBhbk9iamVjdCA6IGFGdW5jdGlvbikodGFyZ2V0KSxcblx0ICAgICAgdG9NZXRhS2V5KHRhcmdldEtleSlcblx0ICAgICk7XG5cdCAgfTtcblx0fX0pO1xuXG4vKioqLyB9LFxuLyogMjg0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcndhbGRyb24vdGMzOS1ub3Rlcy9ibG9iL21hc3Rlci9lczYvMjAxNC0wOS9zZXB0LTI1Lm1kIzUxMC1nbG9iYWxhc2FwLWZvci1lbnF1ZXVpbmctYS1taWNyb3Rhc2tcblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIG1pY3JvdGFzayA9IF9fd2VicGFja19yZXF1aXJlX18oMjAxKSgpXG5cdCAgLCBwcm9jZXNzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLnByb2Nlc3Ncblx0ICAsIGlzTm9kZSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxuXHQkZXhwb3J0KCRleHBvcnQuRywge1xuXHQgIGFzYXA6IGZ1bmN0aW9uIGFzYXAoZm4pe1xuXHQgICAgdmFyIGRvbWFpbiA9IGlzTm9kZSAmJiBwcm9jZXNzLmRvbWFpbjtcblx0ICAgIG1pY3JvdGFzayhkb21haW4gPyBkb21haW4uYmluZChmbikgOiBmbik7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI4NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG5cdHZhciAkZXhwb3J0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGdsb2JhbCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgY29yZSAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpXG5cdCAgLCBtaWNyb3Rhc2sgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjAxKSgpXG5cdCAgLCBPQlNFUlZBQkxFICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdvYnNlcnZhYmxlJylcblx0ICAsIGFGdW5jdGlvbiAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsIGFuT2JqZWN0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGFuSW5zdGFuY2UgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTcpXG5cdCAgLCByZWRlZmluZUFsbCA9IF9fd2VicGFja19yZXF1aXJlX18oMjAyKVxuXHQgICwgaGlkZSAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpXG5cdCAgLCBmb3JPZiAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk4KVxuXHQgICwgUkVUVVJOICAgICAgPSBmb3JPZi5SRVRVUk47XG5cblx0dmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGZuKXtcblx0ICByZXR1cm4gZm4gPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGFGdW5jdGlvbihmbik7XG5cdH07XG5cblx0dmFyIGNsZWFudXBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuXHQgIHZhciBjbGVhbnVwID0gc3Vic2NyaXB0aW9uLl9jO1xuXHQgIGlmKGNsZWFudXApe1xuXHQgICAgc3Vic2NyaXB0aW9uLl9jID0gdW5kZWZpbmVkO1xuXHQgICAgY2xlYW51cCgpO1xuXHQgIH1cblx0fTtcblxuXHR2YXIgc3Vic2NyaXB0aW9uQ2xvc2VkID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcblx0ICByZXR1cm4gc3Vic2NyaXB0aW9uLl9vID09PSB1bmRlZmluZWQ7XG5cdH07XG5cblx0dmFyIGNsb3NlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcblx0ICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuXHQgICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuXHQgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuXHQgIH1cblx0fTtcblxuXHR2YXIgU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24ob2JzZXJ2ZXIsIHN1YnNjcmliZXIpe1xuXHQgIGFuT2JqZWN0KG9ic2VydmVyKTtcblx0ICB0aGlzLl9jID0gdW5kZWZpbmVkO1xuXHQgIHRoaXMuX28gPSBvYnNlcnZlcjtcblx0ICBvYnNlcnZlciA9IG5ldyBTdWJzY3JpcHRpb25PYnNlcnZlcih0aGlzKTtcblx0ICB0cnkge1xuXHQgICAgdmFyIGNsZWFudXAgICAgICA9IHN1YnNjcmliZXIob2JzZXJ2ZXIpXG5cdCAgICAgICwgc3Vic2NyaXB0aW9uID0gY2xlYW51cDtcblx0ICAgIGlmKGNsZWFudXAgIT0gbnVsbCl7XG5cdCAgICAgIGlmKHR5cGVvZiBjbGVhbnVwLnVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKWNsZWFudXAgPSBmdW5jdGlvbigpeyBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTsgfTtcblx0ICAgICAgZWxzZSBhRnVuY3Rpb24oY2xlYW51cCk7XG5cdCAgICAgIHRoaXMuX2MgPSBjbGVhbnVwO1xuXHQgICAgfVxuXHQgIH0gY2F0Y2goZSl7XG5cdCAgICBvYnNlcnZlci5lcnJvcihlKTtcblx0ICAgIHJldHVybjtcblx0ICB9IGlmKHN1YnNjcmlwdGlvbkNsb3NlZCh0aGlzKSljbGVhbnVwU3Vic2NyaXB0aW9uKHRoaXMpO1xuXHR9O1xuXG5cdFN1YnNjcmlwdGlvbi5wcm90b3R5cGUgPSByZWRlZmluZUFsbCh7fSwge1xuXHQgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpeyBjbG9zZVN1YnNjcmlwdGlvbih0aGlzKTsgfVxuXHR9KTtcblxuXHR2YXIgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIgPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuXHQgIHRoaXMuX3MgPSBzdWJzY3JpcHRpb247XG5cdH07XG5cblx0U3Vic2NyaXB0aW9uT2JzZXJ2ZXIucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoe30sIHtcblx0ICBuZXh0OiBmdW5jdGlvbiBuZXh0KHZhbHVlKXtcblx0ICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuXHQgICAgaWYoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXtcblx0ICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLm5leHQpO1xuXHQgICAgICAgIGlmKG0pcmV0dXJuIG0uY2FsbChvYnNlcnZlciwgdmFsdWUpO1xuXHQgICAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICBjbG9zZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuXHQgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICB0aHJvdyBlO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKHZhbHVlKXtcblx0ICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuXHQgICAgaWYoc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpdGhyb3cgdmFsdWU7XG5cdCAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb24uX287XG5cdCAgICBzdWJzY3JpcHRpb24uX28gPSB1bmRlZmluZWQ7XG5cdCAgICB0cnkge1xuXHQgICAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlci5lcnJvcik7XG5cdCAgICAgIGlmKCFtKXRocm93IHZhbHVlO1xuXHQgICAgICB2YWx1ZSA9IG0uY2FsbChvYnNlcnZlciwgdmFsdWUpO1xuXHQgICAgfSBjYXRjaChlKXtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG5cdCAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgdGhyb3cgZTtcblx0ICAgICAgfVxuXHQgICAgfSBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG5cdCAgICByZXR1cm4gdmFsdWU7XG5cdCAgfSxcblx0ICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUodmFsdWUpe1xuXHQgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG5cdCAgICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuXHQgICAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb24uX287XG5cdCAgICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlci5jb21wbGV0ZSk7XG5cdCAgICAgICAgdmFsdWUgPSBtID8gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSkgOiB1bmRlZmluZWQ7XG5cdCAgICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcblx0ICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgdGhyb3cgZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuXHQgICAgICByZXR1cm4gdmFsdWU7XG5cdCAgICB9XG5cdCAgfVxuXHR9KTtcblxuXHR2YXIgJE9ic2VydmFibGUgPSBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZXIpe1xuXHQgIGFuSW5zdGFuY2UodGhpcywgJE9ic2VydmFibGUsICdPYnNlcnZhYmxlJywgJ19mJykuX2YgPSBhRnVuY3Rpb24oc3Vic2NyaWJlcik7XG5cdH07XG5cblx0cmVkZWZpbmVBbGwoJE9ic2VydmFibGUucHJvdG90eXBlLCB7XG5cdCAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpe1xuXHQgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24ob2JzZXJ2ZXIsIHRoaXMuX2YpO1xuXHQgIH0sXG5cdCAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChmbil7XG5cdCAgICB2YXIgdGhhdCA9IHRoaXM7XG5cdCAgICByZXR1cm4gbmV3IChjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG5cdCAgICAgIGFGdW5jdGlvbihmbik7XG5cdCAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGF0LnN1YnNjcmliZSh7XG5cdCAgICAgICAgbmV4dCA6IGZ1bmN0aW9uKHZhbHVlKXtcblx0ICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmbih2YWx1ZSk7XG5cdCAgICAgICAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgICAgICByZWplY3QoZSk7XG5cdCAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgZXJyb3I6IHJlamVjdCxcblx0ICAgICAgICBjb21wbGV0ZTogcmVzb2x2ZVxuXHQgICAgICB9KTtcblx0ICAgIH0pO1xuXHQgIH1cblx0fSk7XG5cblx0cmVkZWZpbmVBbGwoJE9ic2VydmFibGUsIHtcblx0ICBmcm9tOiBmdW5jdGlvbiBmcm9tKHgpe1xuXHQgICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiAkT2JzZXJ2YWJsZTtcblx0ICAgIHZhciBtZXRob2QgPSBnZXRNZXRob2QoYW5PYmplY3QoeClbT0JTRVJWQUJMRV0pO1xuXHQgICAgaWYobWV0aG9kKXtcblx0ICAgICAgdmFyIG9ic2VydmFibGUgPSBhbk9iamVjdChtZXRob2QuY2FsbCh4KSk7XG5cdCAgICAgIHJldHVybiBvYnNlcnZhYmxlLmNvbnN0cnVjdG9yID09PSBDID8gb2JzZXJ2YWJsZSA6IG5ldyBDKGZ1bmN0aW9uKG9ic2VydmVyKXtcblx0ICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbihvYnNlcnZlcil7XG5cdCAgICAgIHZhciBkb25lID0gZmFsc2U7XG5cdCAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuXHQgICAgICAgIGlmKCFkb25lKXtcblx0ICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIGlmKGZvck9mKHgsIGZhbHNlLCBmdW5jdGlvbihpdCl7XG5cdCAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChpdCk7XG5cdCAgICAgICAgICAgICAgaWYoZG9uZSlyZXR1cm4gUkVUVVJOO1xuXHQgICAgICAgICAgICB9KSA9PT0gUkVUVVJOKXJldHVybjtcblx0ICAgICAgICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgICAgIGlmKGRvbmUpdGhyb3cgZTtcblx0ICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICAgIH0gb2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgZG9uZSA9IHRydWU7IH07XG5cdCAgICB9KTtcblx0ICB9LFxuXHQgIG9mOiBmdW5jdGlvbiBvZigpe1xuXHQgICAgZm9yKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGgsIGl0ZW1zID0gQXJyYXkobCk7IGkgPCBsOylpdGVtc1tpXSA9IGFyZ3VtZW50c1tpKytdO1xuXHQgICAgcmV0dXJuIG5ldyAodHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicgPyB0aGlzIDogJE9ic2VydmFibGUpKGZ1bmN0aW9uKG9ic2VydmVyKXtcblx0ICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcblx0ICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgaWYoIWRvbmUpe1xuXHQgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKXtcblx0ICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChpdGVtc1tpXSk7XG5cdCAgICAgICAgICAgIGlmKGRvbmUpcmV0dXJuO1xuXHQgICAgICAgICAgfSBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiBmdW5jdGlvbigpeyBkb25lID0gdHJ1ZTsgfTtcblx0ICAgIH0pO1xuXHQgIH1cblx0fSk7XG5cblx0aGlkZSgkT2JzZXJ2YWJsZS5wcm90b3R5cGUsIE9CU0VSVkFCTEUsIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuRywge09ic2VydmFibGU6ICRPYnNlcnZhYmxlfSk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODYpKCdPYnNlcnZhYmxlJyk7XG5cbi8qKiovIH0sXG4vKiAyODYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHRhc2sgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjAwKTtcblx0JGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIsIHtcblx0ICBzZXRJbW1lZGlhdGU6ICAgJHRhc2suc2V0LFxuXHQgIGNsZWFySW1tZWRpYXRlOiAkdGFzay5jbGVhclxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI4NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRpdGVyYXRvcnMgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4Mylcblx0ICAsIHJlZGVmaW5lICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KVxuXHQgICwgZ2xvYmFsICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGhpZGUgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpXG5cdCAgLCBJdGVyYXRvcnMgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzUpXG5cdCAgLCB3a3MgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMylcblx0ICAsIElURVJBVE9SICAgICAgPSB3a3MoJ2l0ZXJhdG9yJylcblx0ICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcblx0ICAsIEFycmF5VmFsdWVzICAgPSBJdGVyYXRvcnMuQXJyYXk7XG5cblx0Zm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG5cdCAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuXHQgICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG5cdCAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlXG5cdCAgICAsIGtleTtcblx0ICBpZihwcm90byl7XG5cdCAgICBpZighcHJvdG9bSVRFUkFUT1JdKWhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG5cdCAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG5cdCAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcblx0ICAgIGZvcihrZXkgaW4gJGl0ZXJhdG9ycylpZighcHJvdG9ba2V5XSlyZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuXHQgIH1cblx0fVxuXG4vKioqLyB9LFxuLyogMjg4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG5cdHZhciBnbG9iYWwgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgJGV4cG9ydCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGludm9rZSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc2KVxuXHQgICwgcGFydGlhbCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjg5KVxuXHQgICwgbmF2aWdhdG9yICA9IGdsb2JhbC5uYXZpZ2F0b3Jcblx0ICAsIE1TSUUgICAgICAgPSAhIW5hdmlnYXRvciAmJiAvTVNJRSAuXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cdHZhciB3cmFwID0gZnVuY3Rpb24oc2V0KXtcblx0ICByZXR1cm4gTVNJRSA/IGZ1bmN0aW9uKGZuLCB0aW1lIC8qLCAuLi5hcmdzICovKXtcblx0ICAgIHJldHVybiBzZXQoaW52b2tlKFxuXHQgICAgICBwYXJ0aWFsLFxuXHQgICAgICBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMiksXG5cdCAgICAgIHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbilcblx0ICAgICksIHRpbWUpO1xuXHQgIH0gOiBzZXQ7XG5cdH07XG5cdCRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CICsgJGV4cG9ydC5GICogTVNJRSwge1xuXHQgIHNldFRpbWVvdXQ6ICB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcblx0ICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjg5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBwYXRoICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5MClcblx0ICAsIGludm9rZSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNzYpXG5cdCAgLCBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigvKiAuLi5wYXJncyAqLyl7XG5cdCAgdmFyIGZuICAgICA9IGFGdW5jdGlvbih0aGlzKVxuXHQgICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAsIHBhcmdzICA9IEFycmF5KGxlbmd0aClcblx0ICAgICwgaSAgICAgID0gMFxuXHQgICAgLCBfICAgICAgPSBwYXRoLl9cblx0ICAgICwgaG9sZGVyID0gZmFsc2U7XG5cdCAgd2hpbGUobGVuZ3RoID4gaSlpZigocGFyZ3NbaV0gPSBhcmd1bWVudHNbaSsrXSkgPT09IF8paG9sZGVyID0gdHJ1ZTtcblx0ICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG5cdCAgICB2YXIgdGhhdCA9IHRoaXNcblx0ICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgICAsIGogPSAwLCBrID0gMCwgYXJncztcblx0ICAgIGlmKCFob2xkZXIgJiYgIWFMZW4pcmV0dXJuIGludm9rZShmbiwgcGFyZ3MsIHRoYXQpO1xuXHQgICAgYXJncyA9IHBhcmdzLnNsaWNlKCk7XG5cdCAgICBpZihob2xkZXIpZm9yKDtsZW5ndGggPiBqOyBqKyspaWYoYXJnc1tqXSA9PT0gXylhcmdzW2pdID0gYXJndW1lbnRzW2srK107XG5cdCAgICB3aGlsZShhTGVuID4gaylhcmdzLnB1c2goYXJndW1lbnRzW2srK10pO1xuXHQgICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDI5MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG4vKioqLyB9XG4vKioqKioqLyBdKTtcbi8vIENvbW1vbkpTIGV4cG9ydFxuaWYodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyltb2R1bGUuZXhwb3J0cyA9IF9fZTtcbi8vIFJlcXVpcmVKUyBleHBvcnRcbmVsc2UgaWYodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIF9fZX0pO1xuLy8gRXhwb3J0IHRvIGdsb2JhbCBvYmplY3RcbmVsc2UgX19nLmNvcmUgPSBfX2U7XG59KDEsIDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2NsaWVudC9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4qIEBsaWNlbnNlXG4qIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbnZhciBab25lJDEgPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIGlmIChnbG9iYWwuWm9uZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgYWxyZWFkeSBsb2FkZWQuJyk7XG4gICAgfVxuICAgIHZhciBab25lID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gWm9uZShwYXJlbnQsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSB6b25lU3BlYyA/IHpvbmVTcGVjLm5hbWUgfHwgJ3VubmFtZWQnIDogJzxyb290Pic7XG4gICAgICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzID0gem9uZVNwZWMgJiYgem9uZVNwZWMucHJvcGVydGllcyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZSA9XG4gICAgICAgICAgICAgICAgbmV3IFpvbmVEZWxlZ2F0ZSh0aGlzLCB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50Ll96b25lRGVsZWdhdGUsIHpvbmVTcGVjKTtcbiAgICAgICAgfVxuICAgICAgICBab25lLmFzc2VydFpvbmVQYXRjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGdsb2JhbC5Qcm9taXNlICE9PSBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lLmpzIGhhcyBkZXRlY3RlZCB0aGF0IFpvbmVBd2FyZVByb21pc2UgYCh3aW5kb3d8Z2xvYmFsKS5Qcm9taXNlYCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2hhcyBiZWVuIG92ZXJ3cml0dGVuLlxcbicgK1xuICAgICAgICAgICAgICAgICAgICAnTW9zdCBsaWtlbHkgY2F1c2UgaXMgdGhhdCBhIFByb21pc2UgcG9seWZpbGwgaGFzIGJlZW4gbG9hZGVkICcgK1xuICAgICAgICAgICAgICAgICAgICAnYWZ0ZXIgWm9uZS5qcyAoUG9seWZpbGxpbmcgUHJvbWlzZSBhcGkgaXMgbm90IG5lY2Vzc2FyeSB3aGVuIHpvbmUuanMgaXMgbG9hZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ0lmIHlvdSBtdXN0IGxvYWQgb25lLCBkbyBzbyBiZWZvcmUgbG9hZGluZyB6b25lLmpzLiknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwiY3VycmVudFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRab25lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZSwgXCJjdXJyZW50VGFza1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRUYXNrO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZS5wcm90b3R5cGUsIFwicGFyZW50XCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBab25lLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgem9uZSA9IHRoaXMuZ2V0Wm9uZVdpdGgoa2V5KTtcbiAgICAgICAgICAgIGlmICh6b25lKVxuICAgICAgICAgICAgICAgIHJldHVybiB6b25lLl9wcm9wZXJ0aWVzW2tleV07XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLmdldFpvbmVXaXRoID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzO1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5fcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLmZvcmsgPSBmdW5jdGlvbiAoem9uZVNwZWMpIHtcbiAgICAgICAgICAgIGlmICghem9uZVNwZWMpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lU3BlYyByZXF1aXJlZCEnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuZm9yayh0aGlzLCB6b25lU3BlYyk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0aW5nIGZ1bmN0aW9uIGdvdDogJyArIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfY2FsbGJhY2sgPSB0aGlzLl96b25lRGVsZWdhdGUuaW50ZXJjZXB0KHRoaXMsIGNhbGxiYWNrLCBzb3VyY2UpO1xuICAgICAgICAgICAgdmFyIHpvbmUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gem9uZS5ydW5HdWFyZGVkKF9jYWxsYmFjaywgdGhpcywgYXJndW1lbnRzLCBzb3VyY2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoYXBwbHlUaGlzID09PSB2b2lkIDApIHsgYXBwbHlUaGlzID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKGFwcGx5QXJncyA9PT0gdm9pZCAwKSB7IGFwcGx5QXJncyA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IHZvaWQgMCkgeyBzb3VyY2UgPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgb2xkWm9uZSA9IF9jdXJyZW50Wm9uZTtcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IHRoaXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IG9sZFpvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnJ1bkd1YXJkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChhcHBseVRoaXMgPT09IHZvaWQgMCkgeyBhcHBseVRoaXMgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXBwbHlBcmdzID09PSB2b2lkIDApIHsgYXBwbHlBcmdzID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gdm9pZCAwKSB7IHNvdXJjZSA9IG51bGw7IH1cbiAgICAgICAgICAgIHZhciBvbGRab25lID0gX2N1cnJlbnRab25lO1xuICAgICAgICAgICAgX2N1cnJlbnRab25lID0gdGhpcztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2UodGhpcywgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lID0gb2xkWm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUucnVuVGFzayA9IGZ1bmN0aW9uICh0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgICAgICAgdGFzay5ydW5Db3VudCsrO1xuICAgICAgICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIHJ1biBpbiB0aGUgem9uZSB3aGljaCBjcmVhdGVkIGl0ISAoQ3JlYXRpb246ICcgKyB0YXNrLnpvbmUubmFtZSArXG4gICAgICAgICAgICAgICAgICAgICc7IEV4ZWN1dGlvbjogJyArIHRoaXMubmFtZSArICcpJyk7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNUYXNrID0gX2N1cnJlbnRUYXNrO1xuICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gdGFzaztcbiAgICAgICAgICAgIHZhciBvbGRab25lID0gX2N1cnJlbnRab25lO1xuICAgICAgICAgICAgX2N1cnJlbnRab25lID0gdGhpcztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sudHlwZSA9PSAnbWFjcm9UYXNrJyAmJiB0YXNrLmRhdGEgJiYgIXRhc2suZGF0YS5pc1BlcmlvZGljKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2FuY2VsRm4gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZVRhc2sodGhpcywgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lID0gb2xkWm9uZTtcbiAgICAgICAgICAgICAgICBfY3VycmVudFRhc2sgPSBwcmV2aW91c1Rhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlTWljcm9UYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCBuZXcgWm9uZVRhc2soJ21pY3JvVGFzaycsIHRoaXMsIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBudWxsKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlTWFjcm9UYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRoaXMsIG5ldyBab25lVGFzaygnbWFjcm9UYXNrJywgdGhpcywgc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkpO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZUV2ZW50VGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCBuZXcgWm9uZVRhc2soJ2V2ZW50VGFzaycsIHRoaXMsIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuY2FuY2VsVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl96b25lRGVsZWdhdGUuY2FuY2VsVGFzayh0aGlzLCB0YXNrKTtcbiAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAtMTtcbiAgICAgICAgICAgIHRhc2suY2FuY2VsRm4gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBab25lLl9fc3ltYm9sX18gPSBfX3N5bWJvbF9fO1xuICAgICAgICByZXR1cm4gWm9uZTtcbiAgICB9KCkpO1xuICAgIFxuICAgIHZhciBab25lRGVsZWdhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBab25lRGVsZWdhdGUoem9uZSwgcGFyZW50RGVsZWdhdGUsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrQ291bnRzID0geyBtaWNyb1Rhc2s6IDAsIG1hY3JvVGFzazogMCwgZXZlbnRUYXNrOiAwIH07XG4gICAgICAgICAgICB0aGlzLnpvbmUgPSB6b25lO1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50RGVsZWdhdGUgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtaUyA9IHpvbmVTcGVjICYmICh6b25lU3BlYyAmJiB6b25lU3BlYy5vbkZvcmsgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9mb3JrWlMpO1xuICAgICAgICAgICAgdGhpcy5fZm9ya0RsZ3QgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25Gb3JrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya0RsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0WlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludGVyY2VwdFpTKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdERsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludGVyY2VwdERsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VaUyk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yWlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JaUyk7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvckRsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza1pTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2taUyk7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2tEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2taUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2taUyk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2tEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2taUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2taUyk7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2tEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUyA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhc1Rhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9oYXNUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhc1Rhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9oYXNUYXNrRGxndCk7XG4gICAgICAgIH1cbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ya1pTID8gdGhpcy5fZm9ya1pTLm9uRm9yayh0aGlzLl9mb3JrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB6b25lU3BlYykgOlxuICAgICAgICAgICAgICAgIG5ldyBab25lKHRhcmdldFpvbmUsIHpvbmVTcGVjKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyY2VwdFpTID9cbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHRaUy5vbkludGVyY2VwdCh0aGlzLl9pbnRlcmNlcHREbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBzb3VyY2UpIDpcbiAgICAgICAgICAgICAgICBjYWxsYmFjaztcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZva2VaUyA/XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlWlMub25JbnZva2UodGhpcy5faW52b2tlRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkgOlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yWlMgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yWlMub25IYW5kbGVFcnJvcih0aGlzLl9oYW5kbGVFcnJvckRsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpIDpcbiAgICAgICAgICAgICAgICB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLnNjaGVkdWxlVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB0YXNrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY2hlZHVsZVRhc2taUykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGVUYXNrWlMub25TY2hlZHVsZVRhc2sodGhpcy5fc2NoZWR1bGVUYXNrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFzay5zY2hlZHVsZUZuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suc2NoZWR1bGVGbih0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFzay50eXBlID09ICdtaWNyb1Rhc2snKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXNrIGlzIG1pc3Npbmcgc2NoZWR1bGVGbi4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Wm9uZSA9PSB0aGlzLnpvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHRhc2sudHlwZSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmludm9rZVRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVRhc2taUyA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2taUy5vbkludm9rZVRhc2sodGhpcy5faW52b2tlVGFza0RsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Wm9uZSA9PSB0aGlzLnpvbmUgJiYgKHRhc2sudHlwZSAhPSAnZXZlbnRUYXNrJykgJiZcbiAgICAgICAgICAgICAgICAgICAgISh0YXNrLmRhdGEgJiYgdGFzay5kYXRhLmlzUGVyaW9kaWMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLnR5cGUsIC0xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuY2FuY2VsVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB0YXNrKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FuY2VsVGFza1pTKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9jYW5jZWxUYXNrWlMub25DYW5jZWxUYXNrKHRoaXMuX2NhbmNlbFRhc2tEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXRhc2suY2FuY2VsRm4pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rhc2sgZG9lcyBub3Qgc3VwcG9ydCBjYW5jZWxsYXRpb24sIG9yIGlzIGFscmVhZHkgY2FuY2VsZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRhc2suY2FuY2VsRm4odGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFyZ2V0Wm9uZSA9PSB0aGlzLnpvbmUpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHNob3VsZCBub3QgYmUgaW4gdGhlIGZpbmFsbHkgYmxvY2ssIGJlY2F1c2UgZXhjZXB0aW9ucyBhc3N1bWUgbm90IGNhbmNlbGVkLlxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLnR5cGUsIC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5oYXNUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGlzRW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNUYXNrWlMgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMub25IYXNUYXNrKHRoaXMuX2hhc1Rhc2tEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIGlzRW1wdHkpO1xuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLl91cGRhdGVUYXNrQ291bnQgPSBmdW5jdGlvbiAodHlwZSwgY291bnQpIHtcbiAgICAgICAgICAgIHZhciBjb3VudHMgPSB0aGlzLl90YXNrQ291bnRzO1xuICAgICAgICAgICAgdmFyIHByZXYgPSBjb3VudHNbdHlwZV07XG4gICAgICAgICAgICB2YXIgbmV4dCA9IGNvdW50c1t0eXBlXSA9IHByZXYgKyBjb3VudDtcbiAgICAgICAgICAgIGlmIChuZXh0IDwgMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9yZSB0YXNrcyBleGVjdXRlZCB0aGVuIHdlcmUgc2NoZWR1bGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXYgPT0gMCB8fCBuZXh0ID09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNFbXB0eSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWljcm9UYXNrOiBjb3VudHMubWljcm9UYXNrID4gMCxcbiAgICAgICAgICAgICAgICAgICAgbWFjcm9UYXNrOiBjb3VudHMubWFjcm9UYXNrID4gMCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXNrOiBjb3VudHMuZXZlbnRUYXNrID4gMCxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiB0eXBlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1Rhc2sodGhpcy56b25lLCBpc0VtcHR5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnREZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50RGVsZWdhdGUuX3VwZGF0ZVRhc2tDb3VudCh0eXBlLCBjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBab25lRGVsZWdhdGU7XG4gICAgfSgpKTtcbiAgICB2YXIgWm9uZVRhc2sgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBab25lVGFzayh0eXBlLCB6b25lLCBzb3VyY2UsIGNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZUZuLCBjYW5jZWxGbikge1xuICAgICAgICAgICAgdGhpcy5ydW5Db3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgdGhpcy56b25lID0gem9uZTtcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVGbiA9IHNjaGVkdWxlRm47XG4gICAgICAgICAgICB0aGlzLmNhbmNlbEZuID0gY2FuY2VsRm47XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzKys7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuVGFzayhzZWxmLCB0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFpvbmVUYXNrLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdHlwZW9mIHRoaXMuZGF0YS5oYW5kbGVJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhbmRsZUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFpvbmVUYXNrO1xuICAgIH0oKSk7XG4gICAgZnVuY3Rpb24gX19zeW1ib2xfXyhuYW1lKSB7XG4gICAgICAgIHJldHVybiAnX196b25lX3N5bWJvbF9fJyArIG5hbWU7XG4gICAgfVxuICAgIFxuICAgIHZhciBzeW1ib2xTZXRUaW1lb3V0ID0gX19zeW1ib2xfXygnc2V0VGltZW91dCcpO1xuICAgIHZhciBzeW1ib2xQcm9taXNlID0gX19zeW1ib2xfXygnUHJvbWlzZScpO1xuICAgIHZhciBzeW1ib2xUaGVuID0gX19zeW1ib2xfXygndGhlbicpO1xuICAgIHZhciBfY3VycmVudFpvbmUgPSBuZXcgWm9uZShudWxsLCBudWxsKTtcbiAgICB2YXIgX2N1cnJlbnRUYXNrID0gbnVsbDtcbiAgICB2YXIgX21pY3JvVGFza1F1ZXVlID0gW107XG4gICAgdmFyIF9pc0RyYWluaW5nTWljcm90YXNrUXVldWUgPSBmYWxzZTtcbiAgICB2YXIgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycyA9IFtdO1xuICAgIHZhciBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID0gMDtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZVF1ZXVlRHJhaW4oKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBub3QgcnVubmluZyBpbiBhbnkgdGFzaywgYW5kIHRoZXJlIGhhcyBub3QgYmVlbiBhbnl0aGluZyBzY2hlZHVsZWRcbiAgICAgICAgLy8gd2UgbXVzdCBib290c3RyYXAgdGhlIGluaXRpYWwgdGFzayBjcmVhdGlvbiBieSBtYW51YWxseSBzY2hlZHVsaW5nIHRoZSBkcmFpblxuICAgICAgICBpZiAoX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9PSAwICYmIF9taWNyb1Rhc2tRdWV1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgLy8gV2UgYXJlIG5vdCBydW5uaW5nIGluIFRhc2ssIHNvIHdlIG5lZWQgdG8ga2lja3N0YXJ0IHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gICAgICAgICAgICBpZiAoZ2xvYmFsW3N5bWJvbFByb21pc2VdKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsW3N5bWJvbFByb21pc2VdLnJlc29sdmUoMClbc3ltYm9sVGhlbl0oZHJhaW5NaWNyb1Rhc2tRdWV1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxbc3ltYm9sU2V0VGltZW91dF0oZHJhaW5NaWNyb1Rhc2tRdWV1ZSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVNaWNyb1Rhc2sodGFzaykge1xuICAgICAgICBzY2hlZHVsZVF1ZXVlRHJhaW4oKTtcbiAgICAgICAgX21pY3JvVGFza1F1ZXVlLnB1c2godGFzayk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbnNvbGVFcnJvcihlKSB7XG4gICAgICAgIHZhciByZWplY3Rpb24gPSBlICYmIGUucmVqZWN0aW9uO1xuICAgICAgICBpZiAocmVqZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgUHJvbWlzZSByZWplY3Rpb246JywgcmVqZWN0aW9uIGluc3RhbmNlb2YgRXJyb3IgPyByZWplY3Rpb24ubWVzc2FnZSA6IHJlamVjdGlvbiwgJzsgWm9uZTonLCBlLnpvbmUubmFtZSwgJzsgVGFzazonLCBlLnRhc2sgJiYgZS50YXNrLnNvdXJjZSwgJzsgVmFsdWU6JywgcmVqZWN0aW9uLCByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5zdGFjayA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpIHtcbiAgICAgICAgaWYgKCFfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlKSB7XG4gICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgICAgIHdoaWxlIChfbWljcm9UYXNrUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gX21pY3JvVGFza1F1ZXVlO1xuICAgICAgICAgICAgICAgIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBxdWV1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5ydW5UYXNrKHRhc2ssIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdW5jYXVnaHRQcm9taXNlRXJyb3IgPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci56b25lLnJ1bkd1YXJkZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHVuY2F1Z2h0UHJvbWlzZUVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd2hpbGUgKF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIF9sb29wXzEoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNUaGVuYWJsZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9yd2FyZFJlc29sdXRpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3J3YXJkUmVqZWN0aW9uKHJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICB9XG4gICAgdmFyIHN5bWJvbFN0YXRlID0gX19zeW1ib2xfXygnc3RhdGUnKTtcbiAgICB2YXIgc3ltYm9sVmFsdWUgPSBfX3N5bWJvbF9fKCd2YWx1ZScpO1xuICAgIHZhciBzb3VyY2UgPSAnUHJvbWlzZS50aGVuJztcbiAgICB2YXIgVU5SRVNPTFZFRCA9IG51bGw7XG4gICAgdmFyIFJFU09MVkVEID0gdHJ1ZTtcbiAgICB2YXIgUkVKRUNURUQgPSBmYWxzZTtcbiAgICB2YXIgUkVKRUNURURfTk9fQ0FUQ0ggPSAwO1xuICAgIGZ1bmN0aW9uIG1ha2VSZXNvbHZlcihwcm9taXNlLCBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2KTtcbiAgICAgICAgICAgIC8vIERvIG5vdCByZXR1cm4gdmFsdWUgb3IgeW91IHdpbGwgYnJlYWsgdGhlIFByb21pc2Ugc3BlYy5cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgc3RhdGUsIHZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSAmJiB2YWx1ZVtzeW1ib2xTdGF0ZV0gIT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgdmFsdWVbc3ltYm9sU3RhdGVdLCB2YWx1ZVtzeW1ib2xWYWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKG1ha2VSZXNvbHZlcihwcm9taXNlLCBzdGF0ZSksIG1ha2VSZXNvbHZlcihwcm9taXNlLCBmYWxzZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgcXVldWUgPSBwcm9taXNlW3N5bWJvbFZhbHVlXTtcbiAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOykge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdChwcm9taXNlLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PSAwICYmIHN0YXRlID09IFJFSkVDVEVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gUkVKRUNURURfTk9fQ0FUQ0g7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2F1Z2h0IChpbiBwcm9taXNlKTogJyArIHZhbHVlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUgJiYgdmFsdWUuc3RhY2sgPyAnXFxuJyArIHZhbHVlLnN0YWNrIDogJycpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yXzEgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMS5yZWplY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xLnpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xLnRhc2sgPSBab25lLmN1cnJlbnRUYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5wdXNoKGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVRdWV1ZURyYWluKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzb2x2aW5nIGFuIGFscmVhZHkgcmVzb2x2ZWQgcHJvbWlzZSBpcyBhIG5vb3AuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKSB7XG4gICAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gUkVKRUNURURfTk9fQ0FUQ0gpIHtcbiAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gUkVKRUNURUQ7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSA9PT0gX3VuY2F1Z2h0UHJvbWlzZUVycm9yc1tpXS5wcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIF91bmNhdWdodFByb21pc2VFcnJvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKTtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPyBvbkZ1bGZpbGxlZCB8fCBmb3J3YXJkUmVzb2x1dGlvbiA6IG9uUmVqZWN0ZWQgfHwgZm9yd2FyZFJlamVjdGlvbjtcbiAgICAgICAgem9uZS5zY2hlZHVsZU1pY3JvVGFzayhzb3VyY2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCB0cnVlLCB6b25lLnJ1bihkZWxlZ2F0ZSwgbnVsbCwgW3Byb21pc2Vbc3ltYm9sVmFsdWVdXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIFpvbmVBd2FyZVByb21pc2UgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBab25lQXdhcmVQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgYW4gaW5zdGFuY2VvZiBQcm9taXNlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBVTlJFU09MVkVEO1xuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSBbXTsgLy8gcXVldWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dG9yICYmIGV4ZWN1dG9yKG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRVNPTFZFRCksIG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRUpFQ1RFRCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2UobmV3IHRoaXMobnVsbCksIFJFU09MVkVELCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2UobmV3IHRoaXMobnVsbCksIFJFSkVDVEVELCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UucmFjZSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICAgICAgdmFyIHJlamVjdDtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgICAgICAgICAgX2EgPSBbcmVzLCByZWpdLCByZXNvbHZlID0gX2FbMF0sIHJlamVjdCA9IF9hWzFdO1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZnVuY3Rpb24gb25SZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSAmJiAocHJvbWlzZSA9IG51bGwgfHwgcmVzb2x2ZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gb25SZWplY3QoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlICYmIChwcm9taXNlID0gbnVsbCB8fCByZWplY3QoZXJyb3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzEgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzXzFbX2ldO1xuICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UuYWxsID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgICAgICB2YXIgcmVqZWN0O1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhmdW5jdGlvbiAocmVzLCByZWopIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciByZXNvbHZlZFZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWx1ZXNfMiA9IHZhbHVlczsgX2kgPCB2YWx1ZXNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNfMltfaV07XG4gICAgICAgICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4oKGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07IH0pKGNvdW50KSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjb3VudClcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgICAgICB2YXIgY2hhaW5Qcm9taXNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IobnVsbCk7XG4gICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tzeW1ib2xWYWx1ZV0ucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7XG4gICAgfSgpKTtcbiAgICAvLyBQcm90ZWN0IGFnYWluc3QgYWdncmVzc2l2ZSBvcHRpbWl6ZXJzIGRyb3BwaW5nIHNlZW1pbmdseSB1bnVzZWQgcHJvcGVydGllcy5cbiAgICAvLyBFLmcuIENsb3N1cmUgQ29tcGlsZXIgaW4gYWR2YW5jZWQgbW9kZS5cbiAgICBab25lQXdhcmVQcm9taXNlWydyZXNvbHZlJ10gPSBab25lQXdhcmVQcm9taXNlLnJlc29sdmU7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmVqZWN0J10gPSBab25lQXdhcmVQcm9taXNlLnJlamVjdDtcbiAgICBab25lQXdhcmVQcm9taXNlWydyYWNlJ10gPSBab25lQXdhcmVQcm9taXNlLnJhY2U7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsnYWxsJ10gPSBab25lQXdhcmVQcm9taXNlLmFsbDtcbiAgICB2YXIgTmF0aXZlUHJvbWlzZSA9IGdsb2JhbFtfX3N5bWJvbF9fKCdQcm9taXNlJyldID0gZ2xvYmFsLlByb21pc2U7XG4gICAgZ2xvYmFsLlByb21pc2UgPSBab25lQXdhcmVQcm9taXNlO1xuICAgIGZ1bmN0aW9uIHBhdGNoVGhlbihOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgIHZhciBOYXRpdmVQcm9taXNlUHJvdG90b3R5cGUgPSBOYXRpdmVQcm9taXNlLnByb3RvdHlwZTtcbiAgICAgICAgdmFyIE5hdGl2ZVByb21pc2VUaGVuID0gTmF0aXZlUHJvbWlzZVByb3RvdG90eXBlW19fc3ltYm9sX18oJ3RoZW4nKV0gPVxuICAgICAgICAgICAgTmF0aXZlUHJvbWlzZVByb3RvdG90eXBlLnRoZW47XG4gICAgICAgIE5hdGl2ZVByb21pc2VQcm90b3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uUmVzb2x2ZSwgb25SZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBuYXRpdmVQcm9taXNlID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBuZXcgWm9uZUF3YXJlUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgTmF0aXZlUHJvbWlzZVRoZW4uY2FsbChuYXRpdmVQcm9taXNlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKE5hdGl2ZVByb21pc2UpIHtcbiAgICAgICAgcGF0Y2hUaGVuKE5hdGl2ZVByb21pc2UpO1xuICAgICAgICBpZiAodHlwZW9mIGdsb2JhbFsnZmV0Y2gnXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBmZXRjaFByb21pc2UgPSB2b2lkIDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIEluIE1TIEVkZ2UgdGhpcyB0aHJvd3NcbiAgICAgICAgICAgICAgICBmZXRjaFByb21pc2UgPSBnbG9iYWxbJ2ZldGNoJ10oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gQ2hyb21lIHRoaXMgdGhyb3dzIGluc3RlYWQuXG4gICAgICAgICAgICAgICAgZmV0Y2hQcm9taXNlID0gZ2xvYmFsWydmZXRjaCddKCdhYm91dDpibGFuaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWdub3JlIG91dHB1dCB0byBwcmV2ZW50IGVycm9yO1xuICAgICAgICAgICAgZmV0Y2hQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSk7XG4gICAgICAgICAgICBpZiAoZmV0Y2hQcm9taXNlLmNvbnN0cnVjdG9yICE9IE5hdGl2ZVByb21pc2UgJiZcbiAgICAgICAgICAgICAgICBmZXRjaFByb21pc2UuY29uc3RydWN0b3IgIT0gWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHBhdGNoVGhlbihmZXRjaFByb21pc2UuY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRoaXMgaXMgbm90IHBhcnQgb2YgcHVibGljIEFQSSwgYnV0IGl0IGlzIHVzZWZ1bGwgZm9yIHRlc3RzLCBzbyB3ZSBleHBvc2UgaXQuXG4gICAgUHJvbWlzZVtab25lLl9fc3ltYm9sX18oJ3VuY2F1Z2h0UHJvbWlzZUVycm9ycycpXSA9IF91bmNhdWdodFByb21pc2VFcnJvcnM7XG4gICAgcmV0dXJuIGdsb2JhbC5ab25lID0gWm9uZTtcbn0pKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyB8fCB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZiB8fCBnbG9iYWwpO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgem9uZVN5bWJvbCA9IFpvbmVbJ19fc3ltYm9sX18nXTtcbnZhciBfZ2xvYmFsJDEgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgfHwgdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYgfHwgZ2xvYmFsO1xuZnVuY3Rpb24gYmluZEFyZ3VtZW50cyhhcmdzLCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyZ3NbaV0gPSBab25lLmN1cnJlbnQud3JhcChhcmdzW2ldLCBzb3VyY2UgKyAnXycgKyBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJncztcbn1cblxuZnVuY3Rpb24gcGF0Y2hQcm90b3R5cGUocHJvdG90eXBlLCBmbk5hbWVzKSB7XG4gICAgdmFyIHNvdXJjZSA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvclsnbmFtZSddO1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24oaSkge1xuICAgICAgICB2YXIgbmFtZV8xID0gZm5OYW1lc1tpXTtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gcHJvdG90eXBlW25hbWVfMV07XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgcHJvdG90eXBlW25hbWVfMV0gPSAoZnVuY3Rpb24gKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHRoaXMsIGJpbmRBcmd1bWVudHMoYXJndW1lbnRzLCBzb3VyY2UgKyAnLicgKyBuYW1lXzEpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkoZGVsZWdhdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZuTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX2xvb3BfMShpKTtcbiAgICB9XG59XG5cbnZhciBpc1dlYldvcmtlciA9ICh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSk7XG52YXIgaXNOb2RlID0gKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpO1xudmFyIGlzQnJvd3NlciA9ICFpc05vZGUgJiYgIWlzV2ViV29ya2VyICYmICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG5mdW5jdGlvbiBwYXRjaFByb3BlcnR5KG9iaiwgcHJvcCkge1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApIHx8IHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH07XG4gICAgLy8gQSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGNhbm5vdCBoYXZlIGdldHRlci9zZXR0ZXIgYW5kIGJlIHdyaXRhYmxlXG4gICAgLy8gZGVsZXRpbmcgdGhlIHdyaXRhYmxlIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIGF2b2lkcyB0aGlzIGVycm9yOlxuICAgIC8vXG4gICAgLy8gVHlwZUVycm9yOiBwcm9wZXJ0eSBkZXNjcmlwdG9ycyBtdXN0IG5vdCBzcGVjaWZ5IGEgdmFsdWUgb3IgYmUgd3JpdGFibGUgd2hlbiBhXG4gICAgLy8gZ2V0dGVyIG9yIHNldHRlciBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICBkZWxldGUgZGVzYy53cml0YWJsZTtcbiAgICBkZWxldGUgZGVzYy52YWx1ZTtcbiAgICAvLyBzdWJzdHIoMikgY3V6ICdvbmNsaWNrJyAtPiAnY2xpY2snLCBldGNcbiAgICB2YXIgZXZlbnROYW1lID0gcHJvcC5zdWJzdHIoMik7XG4gICAgdmFyIF9wcm9wID0gJ18nICsgcHJvcDtcbiAgICBkZXNjLnNldCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBpZiAodGhpc1tfcHJvcF0pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXNbX3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgd3JhcEZuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gdW5kZWZpbmVkICYmICFyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpc1tfcHJvcF0gPSB3cmFwRm47XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwRm4sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbX3Byb3BdID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gVGhlIGdldHRlciB3b3VsZCByZXR1cm4gdW5kZWZpbmVkIGZvciB1bmFzc2lnbmVkIHByb3BlcnRpZXMgYnV0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGFuXG4gICAgLy8gdW5hc3NpZ25lZCBwcm9wZXJ0eSBpcyBudWxsXG4gICAgZGVzYy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW19wcm9wXSB8fCBudWxsO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG59XG5cbmZ1bmN0aW9uIHBhdGNoT25Qcm9wZXJ0aWVzKG9iaiwgcHJvcGVydGllcykge1xuICAgIHZhciBvblByb3BlcnRpZXMgPSBbXTtcbiAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICBpZiAocHJvcC5zdWJzdHIoMCwgMikgPT0gJ29uJykge1xuICAgICAgICAgICAgb25Qcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBvblByb3BlcnRpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosIG9uUHJvcGVydGllc1tqXSk7XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosICdvbicgKyBwcm9wZXJ0aWVzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIEVWRU5UX1RBU0tTID0gem9uZVN5bWJvbCgnZXZlbnRUYXNrcycpO1xuLy8gRm9yIEV2ZW50VGFyZ2V0XG52YXIgQUREX0VWRU5UX0xJU1RFTkVSID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xudmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUiA9ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbmZ1bmN0aW9uIGZpbmRFeGlzdGluZ1JlZ2lzdGVyZWRUYXNrKHRhcmdldCwgaGFuZGxlciwgbmFtZSwgY2FwdHVyZSwgcmVtb3ZlKSB7XG4gICAgdmFyIGV2ZW50VGFza3MgPSB0YXJnZXRbRVZFTlRfVEFTS1NdO1xuICAgIGlmIChldmVudFRhc2tzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50VGFzayA9IGV2ZW50VGFza3NbaV07XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGV2ZW50VGFzay5kYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlciA9PT0gaGFuZGxlciAmJiBkYXRhLnVzZUNhcHR1cmluZyA9PT0gY2FwdHVyZSAmJiBkYXRhLmV2ZW50TmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBhdHRhY2hSZWdpc3RlcmVkRXZlbnQodGFyZ2V0LCBldmVudFRhc2spIHtcbiAgICB2YXIgZXZlbnRUYXNrcyA9IHRhcmdldFtFVkVOVF9UQVNLU107XG4gICAgaWYgKCFldmVudFRhc2tzKSB7XG4gICAgICAgIGV2ZW50VGFza3MgPSB0YXJnZXRbRVZFTlRfVEFTS1NdID0gW107XG4gICAgfVxuICAgIGV2ZW50VGFza3MucHVzaChldmVudFRhc2spO1xufVxuZnVuY3Rpb24gbWFrZVpvbmVBd2FyZUFkZExpc3RlbmVyKGFkZEZuTmFtZSwgcmVtb3ZlRm5OYW1lLCB1c2VDYXB0dXJpbmdQYXJhbSwgYWxsb3dEdXBsaWNhdGVzKSB7XG4gICAgaWYgKHVzZUNhcHR1cmluZ1BhcmFtID09PSB2b2lkIDApIHsgdXNlQ2FwdHVyaW5nUGFyYW0gPSB0cnVlOyB9XG4gICAgaWYgKGFsbG93RHVwbGljYXRlcyA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlcyA9IGZhbHNlOyB9XG4gICAgdmFyIGFkZEZuU3ltYm9sID0gem9uZVN5bWJvbChhZGRGbk5hbWUpO1xuICAgIHZhciByZW1vdmVGblN5bWJvbCA9IHpvbmVTeW1ib2wocmVtb3ZlRm5OYW1lKTtcbiAgICB2YXIgZGVmYXVsdFVzZUNhcHR1cmluZyA9IHVzZUNhcHR1cmluZ1BhcmFtID8gZmFsc2UgOiB1bmRlZmluZWQ7XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVFdmVudExpc3RlbmVyKGV2ZW50VGFzaykge1xuICAgICAgICB2YXIgbWV0YSA9IGV2ZW50VGFzay5kYXRhO1xuICAgICAgICBhdHRhY2hSZWdpc3RlcmVkRXZlbnQobWV0YS50YXJnZXQsIGV2ZW50VGFzayk7XG4gICAgICAgIHJldHVybiBtZXRhLnRhcmdldFthZGRGblN5bWJvbF0obWV0YS5ldmVudE5hbWUsIGV2ZW50VGFzay5pbnZva2UsIG1ldGEudXNlQ2FwdHVyaW5nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2FuY2VsRXZlbnRMaXN0ZW5lcihldmVudFRhc2spIHtcbiAgICAgICAgdmFyIG1ldGEgPSBldmVudFRhc2suZGF0YTtcbiAgICAgICAgZmluZEV4aXN0aW5nUmVnaXN0ZXJlZFRhc2sobWV0YS50YXJnZXQsIGV2ZW50VGFzay5pbnZva2UsIG1ldGEuZXZlbnROYW1lLCBtZXRhLnVzZUNhcHR1cmluZywgdHJ1ZSk7XG4gICAgICAgIG1ldGEudGFyZ2V0W3JlbW92ZUZuU3ltYm9sXShtZXRhLmV2ZW50TmFtZSwgZXZlbnRUYXNrLmludm9rZSwgbWV0YS51c2VDYXB0dXJpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gem9uZUF3YXJlQWRkTGlzdGVuZXIoc2VsZiwgYXJncykge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgdXNlQ2FwdHVyaW5nID0gYXJnc1syXSB8fCBkZWZhdWx0VXNlQ2FwdHVyaW5nO1xuICAgICAgICAvLyAtIEluc2lkZSBhIFdlYiBXb3JrZXIsIGB0aGlzYCBpcyB1bmRlZmluZWQsIHRoZSBjb250ZXh0IGlzIGBnbG9iYWxgXG4gICAgICAgIC8vIC0gV2hlbiBgYWRkRXZlbnRMaXN0ZW5lcmAgaXMgY2FsbGVkIG9uIHRoZSBnbG9iYWwgY29udGV4dCBpbiBzdHJpY3QgbW9kZSwgYHRoaXNgIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgICAgIHZhciB0YXJnZXQgPSBzZWxmIHx8IF9nbG9iYWwkMTtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlID0gaGFuZGxlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoYW5kbGVyICYmIGhhbmRsZXIuaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBoYW5kbGVyLmhhbmRsZUV2ZW50KGV2ZW50KTsgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsaWRab25lSGFuZGxlciA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gSW4gY3Jvc3Mgc2l0ZSBjb250ZXh0cyAoc3VjaCBhcyBXZWJEcml2ZXIgZnJhbWV3b3JrcyBsaWtlIFNlbGVuaXVtKSxcbiAgICAgICAgICAgIC8vIGFjY2Vzc2luZyB0aGUgaGFuZGxlciBvYmplY3QgaGVyZSB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbiB0byBiZSB0aHJvd24gd2hpY2hcbiAgICAgICAgICAgIC8vIHdpbGwgZmFpbCB0ZXN0cyBwcmVtYXR1cmVseS5cbiAgICAgICAgICAgIHZhbGlkWm9uZUhhbmRsZXIgPSBoYW5kbGVyICYmIGhhbmRsZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25XcmFwcGVyXSc7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFJldHVybmluZyBub3RoaW5nIGhlcmUgaXMgZmluZSwgYmVjYXVzZSBvYmplY3RzIGluIGEgY3Jvc3Mtc2l0ZSBjb250ZXh0IGFyZSB1bnVzYWJsZVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElnbm9yZSBzcGVjaWFsIGxpc3RlbmVycyBvZiBJRTExICYgRWRnZSBkZXYgdG9vbHMsIHNlZVxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xNTBcbiAgICAgICAgaWYgKCFkZWxlZ2F0ZSB8fCB2YWxpZFpvbmVIYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2FkZEZuU3ltYm9sXShldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbGxvd0R1cGxpY2F0ZXMpIHtcbiAgICAgICAgICAgIHZhciBldmVudFRhc2sgPSBmaW5kRXhpc3RpbmdSZWdpc3RlcmVkVGFzayh0YXJnZXQsIGhhbmRsZXIsIGV2ZW50TmFtZSwgdXNlQ2FwdHVyaW5nLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXZlbnRUYXNrKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgYWxyZWFkeSByZWdpc3RlcmVkLCBzbyB0aGlzIHdpbGwgaGF2ZSBub29wLlxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbYWRkRm5TeW1ib2xdKGV2ZW50TmFtZSwgZXZlbnRUYXNrLmludm9rZSwgdXNlQ2FwdHVyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRhcmdldC5jb25zdHJ1Y3RvclsnbmFtZSddICsgJy4nICsgYWRkRm5OYW1lICsgJzonICsgZXZlbnROYW1lO1xuICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgZXZlbnROYW1lOiBldmVudE5hbWUsXG4gICAgICAgICAgICBuYW1lOiBldmVudE5hbWUsXG4gICAgICAgICAgICB1c2VDYXB0dXJpbmc6IHVzZUNhcHR1cmluZyxcbiAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICAgICAgfTtcbiAgICAgICAgem9uZS5zY2hlZHVsZUV2ZW50VGFzayhzb3VyY2UsIGRlbGVnYXRlLCBkYXRhLCBzY2hlZHVsZUV2ZW50TGlzdGVuZXIsIGNhbmNlbEV2ZW50TGlzdGVuZXIpO1xuICAgIH07XG59XG5mdW5jdGlvbiBtYWtlWm9uZUF3YXJlUmVtb3ZlTGlzdGVuZXIoZm5OYW1lLCB1c2VDYXB0dXJpbmdQYXJhbSkge1xuICAgIGlmICh1c2VDYXB0dXJpbmdQYXJhbSA9PT0gdm9pZCAwKSB7IHVzZUNhcHR1cmluZ1BhcmFtID0gdHJ1ZTsgfVxuICAgIHZhciBzeW1ib2wgPSB6b25lU3ltYm9sKGZuTmFtZSk7XG4gICAgdmFyIGRlZmF1bHRVc2VDYXB0dXJpbmcgPSB1c2VDYXB0dXJpbmdQYXJhbSA/IGZhbHNlIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBmdW5jdGlvbiB6b25lQXdhcmVSZW1vdmVMaXN0ZW5lcihzZWxmLCBhcmdzKSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgaGFuZGxlciA9IGFyZ3NbMV07XG4gICAgICAgIHZhciB1c2VDYXB0dXJpbmcgPSBhcmdzWzJdIHx8IGRlZmF1bHRVc2VDYXB0dXJpbmc7XG4gICAgICAgIC8vIC0gSW5zaWRlIGEgV2ViIFdvcmtlciwgYHRoaXNgIGlzIHVuZGVmaW5lZCwgdGhlIGNvbnRleHQgaXMgYGdsb2JhbGBcbiAgICAgICAgLy8gLSBXaGVuIGBhZGRFdmVudExpc3RlbmVyYCBpcyBjYWxsZWQgb24gdGhlIGdsb2JhbCBjb250ZXh0IGluIHN0cmljdCBtb2RlLCBgdGhpc2AgaXMgdW5kZWZpbmVkXG4gICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xOTBcbiAgICAgICAgdmFyIHRhcmdldCA9IHNlbGYgfHwgX2dsb2JhbCQxO1xuICAgICAgICB2YXIgZXZlbnRUYXNrID0gZmluZEV4aXN0aW5nUmVnaXN0ZXJlZFRhc2sodGFyZ2V0LCBoYW5kbGVyLCBldmVudE5hbWUsIHVzZUNhcHR1cmluZywgdHJ1ZSk7XG4gICAgICAgIGlmIChldmVudFRhc2spIHtcbiAgICAgICAgICAgIGV2ZW50VGFzay56b25lLmNhbmNlbFRhc2soZXZlbnRUYXNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtzeW1ib2xdKGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbnZhciB6b25lQXdhcmVBZGRFdmVudExpc3RlbmVyID0gbWFrZVpvbmVBd2FyZUFkZExpc3RlbmVyKEFERF9FVkVOVF9MSVNURU5FUiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSKTtcbnZhciB6b25lQXdhcmVSZW1vdmVFdmVudExpc3RlbmVyID0gbWFrZVpvbmVBd2FyZVJlbW92ZUxpc3RlbmVyKFJFTU9WRV9FVkVOVF9MSVNURU5FUik7XG5mdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhvYmopIHtcbiAgICBpZiAob2JqICYmIG9iai5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHBhdGNoTWV0aG9kKG9iaiwgQUREX0VWRU5UX0xJU1RFTkVSLCBmdW5jdGlvbiAoKSB7IHJldHVybiB6b25lQXdhcmVBZGRFdmVudExpc3RlbmVyOyB9KTtcbiAgICAgICAgcGF0Y2hNZXRob2Qob2JqLCBSRU1PVkVfRVZFTlRfTElTVEVORVIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHpvbmVBd2FyZVJlbW92ZUV2ZW50TGlzdGVuZXI7IH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG52YXIgb3JpZ2luYWxJbnN0YW5jZUtleSA9IHpvbmVTeW1ib2woJ29yaWdpbmFsSW5zdGFuY2UnKTtcbi8vIHdyYXAgc29tZSBuYXRpdmUgQVBJIG9uIGB3aW5kb3dgXG5mdW5jdGlvbiBwYXRjaENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBPcmlnaW5hbENsYXNzID0gX2dsb2JhbCQxW2NsYXNzTmFtZV07XG4gICAgaWYgKCFPcmlnaW5hbENsYXNzKVxuICAgICAgICByZXR1cm47XG4gICAgX2dsb2JhbCQxW2NsYXNzTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhID0gYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIGNsYXNzTmFtZSk7XG4gICAgICAgIHN3aXRjaCAoYS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSwgYVszXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXJnIGxpc3QgdG9vIGxvbmcuJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBPcmlnaW5hbENsYXNzKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgdmFyIHByb3A7XG4gICAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00NDcyMVxuICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnWE1MSHR0cFJlcXVlc3QnICYmIHByb3AgPT09ICdyZXNwb25zZUJsb2InKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIF9nbG9iYWwkMVtjbGFzc05hbWVdLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0uYXBwbHkodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9nbG9iYWwkMVtjbGFzc05hbWVdLnByb3RvdHlwZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSBab25lLmN1cnJlbnQud3JhcChmbiwgY2xhc3NOYW1lICsgJy4nICsgcHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfShwcm9wKSk7XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiBPcmlnaW5hbENsYXNzKSB7XG4gICAgICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJyAmJiBPcmlnaW5hbENsYXNzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICBfZ2xvYmFsJDFbY2xhc3NOYW1lXVtwcm9wXSA9IE9yaWdpbmFsQ2xhc3NbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hbWVkRm4obmFtZSwgZGVsZWdhdGUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKEZ1bmN0aW9uKCdmJywgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBuYW1lICsgXCIoKXtyZXR1cm4gZih0aGlzLCBhcmd1bWVudHMpfVwiKSkoZGVsZWdhdGUpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZiB3ZSBmYWlsLCB3ZSBtdXN0IGJlIENTUCwganVzdCByZXR1cm4gZGVsZWdhdGUuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaE1ldGhvZCh0YXJnZXQsIG5hbWUsIHBhdGNoRm4pIHtcbiAgICB2YXIgcHJvdG8gPSB0YXJnZXQ7XG4gICAgd2hpbGUgKHByb3RvICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvKS5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgfVxuICAgIGlmICghcHJvdG8gJiYgdGFyZ2V0W25hbWVdKSB7XG4gICAgICAgIC8vIHNvbWVob3cgd2UgZGlkIG5vdCBmaW5kIGl0LCBidXQgd2UgY2FuIHNlZSBpdC4gVGhpcyBoYXBwZW5zIG9uIElFIGZvciBXaW5kb3cgcHJvcGVydGllcy5cbiAgICAgICAgcHJvdG8gPSB0YXJnZXQ7XG4gICAgfVxuICAgIHZhciBkZWxlZ2F0ZU5hbWUgPSB6b25lU3ltYm9sKG5hbWUpO1xuICAgIHZhciBkZWxlZ2F0ZTtcbiAgICBpZiAocHJvdG8gJiYgIShkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0pKSB7XG4gICAgICAgIGRlbGVnYXRlID0gcHJvdG9bZGVsZWdhdGVOYW1lXSA9IHByb3RvW25hbWVdO1xuICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZU5hbWVkRm4obmFtZSwgcGF0Y2hGbihkZWxlZ2F0ZSwgZGVsZWdhdGVOYW1lLCBuYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiBkZWxlZ2F0ZTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuZnVuY3Rpb24gcGF0Y2hUaW1lcih3aW5kb3csIHNldE5hbWUsIGNhbmNlbE5hbWUsIG5hbWVTdWZmaXgpIHtcbiAgICB2YXIgc2V0TmF0aXZlID0gbnVsbDtcbiAgICB2YXIgY2xlYXJOYXRpdmUgPSBudWxsO1xuICAgIHNldE5hbWUgKz0gbmFtZVN1ZmZpeDtcbiAgICBjYW5jZWxOYW1lICs9IG5hbWVTdWZmaXg7XG4gICAgdmFyIHRhc2tzQnlIYW5kbGVJZCA9IHt9O1xuICAgIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICBkYXRhLmFyZ3NbMF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0YXNrLmludm9rZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVJZFtkYXRhLmhhbmRsZUlkXTtcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YS5oYW5kbGVJZCA9IHNldE5hdGl2ZS5hcHBseSh3aW5kb3csIGRhdGEuYXJncyk7XG4gICAgICAgIHRhc2tzQnlIYW5kbGVJZFtkYXRhLmhhbmRsZUlkXSA9IHRhc2s7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhclRhc2sodGFzaykge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW3Rhc2suZGF0YS5oYW5kbGVJZF07XG4gICAgICAgIHJldHVybiBjbGVhck5hdGl2ZSh0YXNrLmRhdGEuaGFuZGxlSWQpO1xuICAgIH1cbiAgICBzZXROYXRpdmUgPVxuICAgICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIHNldE5hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVJZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaXNQZXJpb2RpYzogbmFtZVN1ZmZpeCA9PT0gJ0ludGVydmFsJyxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IChuYW1lU3VmZml4ID09PSAnVGltZW91dCcgfHwgbmFtZVN1ZmZpeCA9PT0gJ0ludGVydmFsJykgPyBhcmdzWzFdIHx8IDAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHpvbmUuc2NoZWR1bGVNYWNyb1Rhc2soc2V0TmFtZSwgYXJnc1swXSwgb3B0aW9ucywgc2NoZWR1bGVUYXNrLCBjbGVhclRhc2spO1xuICAgICAgICAgICAgICAgIGlmICghdGFzaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm9kZS5qcyBtdXN0IGFkZGl0aW9uYWxseSBzdXBwb3J0IHRoZSByZWYgYW5kIHVucmVmIGZ1bmN0aW9ucy5cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlID0gdGFzay5kYXRhLmhhbmRsZUlkO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUucmVmICYmIGhhbmRsZS51bnJlZikge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnJlZiA9IGhhbmRsZS5yZWYuYmluZChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnVucmVmID0gaGFuZGxlLnVucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9OyB9KTtcbiAgICBjbGVhck5hdGl2ZSA9XG4gICAgICAgIHBhdGNoTWV0aG9kKHdpbmRvdywgY2FuY2VsTmFtZSwgZnVuY3Rpb24gKGRlbGVnYXRlKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0eXBlb2YgYXJnc1swXSA9PT0gJ251bWJlcicgPyB0YXNrc0J5SGFuZGxlSWRbYXJnc1swXV0gOiBhcmdzWzBdO1xuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jYW5jZWxGbiAmJiB0YXNrLmRhdGEuaXNQZXJpb2RpYyB8fCB0YXNrLnJ1bkNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBjYW5jZWwgYWxyZWFkeSBjYW5jZWxlZCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZS5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9OyB9KTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLypcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBDaHJvbWUgYW5kIENocm9tZSBtb2JpbGUsIHRvIGVuYWJsZVxuICogdGhpbmdzIGxpa2UgcmVkZWZpbmluZyBgY3JlYXRlZENhbGxiYWNrYCBvbiBhbiBlbGVtZW50LlxuICovXG52YXIgX2RlZmluZVByb3BlcnR5ID0gT2JqZWN0W3pvbmVTeW1ib2woJ2RlZmluZVByb3BlcnR5JyldID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3Rbem9uZVN5bWJvbCgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJyldID1cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIHVuY29uZmlndXJhYmxlc0tleSA9IHpvbmVTeW1ib2woJ3VuY29uZmlndXJhYmxlcycpO1xuZnVuY3Rpb24gcHJvcGVydHlQYXRjaCgpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCBkZXNjKSB7XG4gICAgICAgIGlmIChpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBhc3NpZ24gdG8gcmVhZCBvbmx5IHByb3BlcnR5IFxcJycgKyBwcm9wICsgJ1xcJyBvZiAnICsgb2JqKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnID0gZGVzYy5jb25maWd1cmFibGU7XG4gICAgICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJykge1xuICAgICAgICAgICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90cnlEZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MsIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIHByb3BzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBwcm9wc1twcm9wXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgT2JqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChvYmosIHByb3RvKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG8gPT09ICdvYmplY3QnICYmICFPYmplY3QuaXNGcm96ZW4ocHJvdG8pKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm90bykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgIHByb3RvW3Byb3BdID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBwcm90b1twcm9wXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2NyZWF0ZShvYmosIHByb3RvKTtcbiAgICB9O1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAob2JqLCBwcm9wKSB7XG4gICAgICAgIHZhciBkZXNjID0gX2dldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuICAgICAgICBpZiAoaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIF9yZWRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYykge1xuICAgIHZhciBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICBkZXNjID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKTtcbiAgICByZXR1cm4gX3RyeURlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYywgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnKTtcbn1cblxuZnVuY3Rpb24gaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApIHtcbiAgICByZXR1cm4gb2JqICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdO1xufVxuZnVuY3Rpb24gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKSB7XG4gICAgZGVzYy5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmICghZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgaWYgKCFvYmpbdW5jb25maWd1cmFibGVzS2V5XSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KG9iaiwgdW5jb25maWd1cmFibGVzS2V5LCB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZToge30gfSk7XG4gICAgICAgIH1cbiAgICAgICAgb2JqW3VuY29uZmlndXJhYmxlc0tleV1bcHJvcF0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZGVzYztcbn1cbmZ1bmN0aW9uIF90cnlEZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MsIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAvLyBJbiBjYXNlIG9mIGVycm9ycywgd2hlbiB0aGUgY29uZmlndXJhYmxlIGZsYWcgd2FzIGxpa2VseSBzZXQgYnkgcmV3cml0ZURlc2NyaXB0b3IoKSwgbGV0J3NcbiAgICAgICAgICAgIC8vIHJldHJ5IHdpdGggdGhlIG9yaWdpbmFsIGZsYWcgdmFsdWVcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxDb25maWd1cmFibGVGbGFnID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGRlc2MuY29uZmlndXJhYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NKc29uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjSnNvbiA9IEpTT04uc3RyaW5naWZ5KGRlc2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjSnNvbiA9IGRlc2NKc29uLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXR0ZW1wdGluZyB0byBjb25maWd1cmUgJ1wiICsgcHJvcCArIFwiJyB3aXRoIGRlc2NyaXB0b3IgJ1wiICsgZGVzY0pzb24gKyBcIicgb24gb2JqZWN0ICdcIiArIG9iaiArIFwiJyBhbmQgZ290IGVycm9yLCBnaXZpbmcgdXA6IFwiICsgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgV1RGX0lTU1VFXzU1NSA9ICdBbmNob3IsQXJlYSxBdWRpbyxCUixCYXNlLEJhc2VGb250LEJvZHksQnV0dG9uLENhbnZhcyxDb250ZW50LERMaXN0LERpcmVjdG9yeSxEaXYsRW1iZWQsRmllbGRTZXQsRm9udCxGb3JtLEZyYW1lLEZyYW1lU2V0LEhSLEhlYWQsSGVhZGluZyxIdG1sLElGcmFtZSxJbWFnZSxJbnB1dCxLZXlnZW4sTEksTGFiZWwsTGVnZW5kLExpbmssTWFwLE1hcnF1ZWUsTWVkaWEsTWVudSxNZXRhLE1ldGVyLE1vZCxPTGlzdCxPYmplY3QsT3B0R3JvdXAsT3B0aW9uLE91dHB1dCxQYXJhZ3JhcGgsUHJlLFByb2dyZXNzLFF1b3RlLFNjcmlwdCxTZWxlY3QsU291cmNlLFNwYW4sU3R5bGUsVGFibGVDYXB0aW9uLFRhYmxlQ2VsbCxUYWJsZUNvbCxUYWJsZSxUYWJsZVJvdyxUYWJsZVNlY3Rpb24sVGV4dEFyZWEsVGl0bGUsVHJhY2ssVUxpc3QsVW5rbm93bixWaWRlbyc7XG52YXIgTk9fRVZFTlRfVEFSR0VUID0gJ0FwcGxpY2F0aW9uQ2FjaGUsRXZlbnRTb3VyY2UsRmlsZVJlYWRlcixJbnB1dE1ldGhvZENvbnRleHQsTWVkaWFDb250cm9sbGVyLE1lc3NhZ2VQb3J0LE5vZGUsUGVyZm9ybWFuY2UsU1ZHRWxlbWVudEluc3RhbmNlLFNoYXJlZFdvcmtlcixUZXh0VHJhY2ssVGV4dFRyYWNrQ3VlLFRleHRUcmFja0xpc3QsV2ViS2l0TmFtZWRGbG93LFdpbmRvdyxXb3JrZXIsV29ya2VyR2xvYmFsU2NvcGUsWE1MSHR0cFJlcXVlc3QsWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCxYTUxIdHRwUmVxdWVzdFVwbG9hZCxJREJSZXF1ZXN0LElEQk9wZW5EQlJlcXVlc3QsSURCRGF0YWJhc2UsSURCVHJhbnNhY3Rpb24sSURCQ3Vyc29yLERCSW5kZXgnXG4gICAgLnNwbGl0KCcsJyk7XG52YXIgRVZFTlRfVEFSR0VUID0gJ0V2ZW50VGFyZ2V0JztcbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0UGF0Y2goX2dsb2JhbCkge1xuICAgIHZhciBhcGlzID0gW107XG4gICAgdmFyIGlzV3RmID0gX2dsb2JhbFsnd3RmJ107XG4gICAgaWYgKGlzV3RmKSB7XG4gICAgICAgIC8vIFdvcmthcm91bmQgZm9yOiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL3RyYWNpbmctZnJhbWV3b3JrL2lzc3Vlcy81NTVcbiAgICAgICAgYXBpcyA9IFdURl9JU1NVRV81NTUuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuICdIVE1MJyArIHYgKyAnRWxlbWVudCc7IH0pLmNvbmNhdChOT19FVkVOVF9UQVJHRVQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChfZ2xvYmFsW0VWRU5UX1RBUkdFVF0pIHtcbiAgICAgICAgYXBpcy5wdXNoKEVWRU5UX1RBUkdFVCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBOb3RlOiBFdmVudFRhcmdldCBpcyBub3QgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyxcbiAgICAgICAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlLCB3ZSBpbnN0ZWFkIHBhdGNoIHRoZSBBUElzIGluIHRoZSBJREwgdGhhdCBpbmhlcml0IGZyb20gRXZlbnRUYXJnZXRcbiAgICAgICAgYXBpcyA9IE5PX0VWRU5UX1RBUkdFVDtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0eXBlID0gX2dsb2JhbFthcGlzW2ldXTtcbiAgICAgICAgcGF0Y2hFdmVudFRhcmdldE1ldGhvZHModHlwZSAmJiB0eXBlLnByb3RvdHlwZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vLyB3ZSBoYXZlIHRvIHBhdGNoIHRoZSBpbnN0YW5jZSBzaW5jZSB0aGUgcHJvdG8gaXMgbm9uLWNvbmZpZ3VyYWJsZVxuZnVuY3Rpb24gYXBwbHkoX2dsb2JhbCkge1xuICAgIHZhciBXUyA9IF9nbG9iYWwuV2ViU29ja2V0O1xuICAgIC8vIE9uIFNhZmFyaSB3aW5kb3cuRXZlbnRUYXJnZXQgZG9lc24ndCBleGlzdCBzbyBuZWVkIHRvIHBhdGNoIFdTIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyXG4gICAgLy8gT24gb2xkZXIgQ2hyb21lLCBubyBuZWVkIHNpbmNlIEV2ZW50VGFyZ2V0IHdhcyBhbHJlYWR5IHBhdGNoZWRcbiAgICBpZiAoIV9nbG9iYWwuRXZlbnRUYXJnZXQpIHtcbiAgICAgICAgcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMoV1MucHJvdG90eXBlKTtcbiAgICB9XG4gICAgX2dsb2JhbC5XZWJTb2NrZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgc29ja2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBuZXcgV1MoYSwgYikgOiBuZXcgV1MoYSk7XG4gICAgICAgIHZhciBwcm94eVNvY2tldDtcbiAgICAgICAgLy8gU2FmYXJpIDcuMCBoYXMgbm9uLWNvbmZpZ3VyYWJsZSBvd24gJ29ubWVzc2FnZScgYW5kIGZyaWVuZHMgcHJvcGVydGllcyBvbiB0aGUgc29ja2V0IGluc3RhbmNlXG4gICAgICAgIHZhciBvbm1lc3NhZ2VEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb2NrZXQsICdvbm1lc3NhZ2UnKTtcbiAgICAgICAgaWYgKG9ubWVzc2FnZURlc2MgJiYgb25tZXNzYWdlRGVzYy5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm94eVNvY2tldCA9IE9iamVjdC5jcmVhdGUoc29ja2V0KTtcbiAgICAgICAgICAgIFsnYWRkRXZlbnRMaXN0ZW5lcicsICdyZW1vdmVFdmVudExpc3RlbmVyJywgJ3NlbmQnLCAnY2xvc2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wTmFtZSkge1xuICAgICAgICAgICAgICAgIHByb3h5U29ja2V0W3Byb3BOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvY2tldFtwcm9wTmFtZV0uYXBwbHkoc29ja2V0LCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHdlIGNhbiBwYXRjaCB0aGUgcmVhbCBzb2NrZXRcbiAgICAgICAgICAgIHByb3h5U29ja2V0ID0gc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKHByb3h5U29ja2V0LCBbJ2Nsb3NlJywgJ2Vycm9yJywgJ21lc3NhZ2UnLCAnb3BlbiddKTtcbiAgICAgICAgcmV0dXJuIHByb3h5U29ja2V0O1xuICAgIH07XG4gICAgZm9yICh2YXIgcHJvcCBpbiBXUykge1xuICAgICAgICBfZ2xvYmFsLldlYlNvY2tldFtwcm9wXSA9IFdTW3Byb3BdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIGV2ZW50TmFtZXMgPSAnY29weSBjdXQgcGFzdGUgYWJvcnQgYmx1ciBmb2N1cyBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIGNoYW5nZSBjbGljayBjb250ZXh0bWVudSBkYmxjbGljayBkcmFnIGRyYWdlbmQgZHJhZ2VudGVyIGRyYWdsZWF2ZSBkcmFnb3ZlciBkcmFnc3RhcnQgZHJvcCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuZGVkIGlucHV0IGludmFsaWQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBsb2FkIGxvYWRlZGRhdGEgbG9hZGVkbWV0YWRhdGEgbG9hZHN0YXJ0IG1lc3NhZ2UgbW91c2Vkb3duIG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAgcGF1c2UgcGxheSBwbGF5aW5nIHByb2dyZXNzIHJhdGVjaGFuZ2UgcmVzZXQgc2Nyb2xsIHNlZWtlZCBzZWVraW5nIHNlbGVjdCBzaG93IHN0YWxsZWQgc3VibWl0IHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZyBtb3pmdWxsc2NyZWVuY2hhbmdlIG1vemZ1bGxzY3JlZW5lcnJvciBtb3pwb2ludGVybG9ja2NoYW5nZSBtb3pwb2ludGVybG9ja2Vycm9yIGVycm9yIHdlYmdsY29udGV4dHJlc3RvcmVkIHdlYmdsY29udGV4dGxvc3Qgd2ViZ2xjb250ZXh0Y3JlYXRpb25lcnJvcidcbiAgICAuc3BsaXQoJyAnKTtcbmZ1bmN0aW9uIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoKF9nbG9iYWwpIHtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHN1cHBvcnRzV2ViU29ja2V0ID0gdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgaWYgKGNhblBhdGNoVmlhUHJvcGVydHlEZXNjcmlwdG9yKCkpIHtcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgd2UgY2FuIHBhdGNoIHRoZSBkZXNjcmlwdG9yOiAgQ2hyb21lICYgRmlyZWZveFxuICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhIVE1MRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TmFtZXMpO1xuICAgICAgICB9XG4gICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSwgbnVsbCk7XG4gICAgICAgIGlmICh0eXBlb2YgSURCSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhJREJJbmRleC5wcm90b3R5cGUsIG51bGwpO1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSURCUmVxdWVzdC5wcm90b3R5cGUsIG51bGwpO1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSURCT3BlbkRCUmVxdWVzdC5wcm90b3R5cGUsIG51bGwpO1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSURCRGF0YWJhc2UucHJvdG90eXBlLCBudWxsKTtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKElEQlRyYW5zYWN0aW9uLnByb3RvdHlwZSwgbnVsbCk7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhJREJDdXJzb3IucHJvdG90eXBlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKFdlYlNvY2tldC5wcm90b3R5cGUsIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBTYWZhcmksIEFuZHJvaWQgYnJvd3NlcnMgKEplbGx5IEJlYW4pXG4gICAgICAgIHBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzKCk7XG4gICAgICAgIHBhdGNoQ2xhc3MoJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgIGlmIChzdXBwb3J0c1dlYlNvY2tldCkge1xuICAgICAgICAgICAgYXBwbHkoX2dsb2JhbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcigpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmICFPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKSAmJlxuICAgICAgICB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gV2ViS2l0IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzQzNjRcbiAgICAgICAgLy8gSURMIGludGVyZmFjZSBhdHRyaWJ1dGVzIGFyZSBub3QgY29uZmlndXJhYmxlXG4gICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKTtcbiAgICAgICAgaWYgKGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLCAnb25yZWFkeXN0YXRlY2hhbmdlJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciByZXN1bHQgPSAhIXJlcS5vbnJlYWR5c3RhdGVjaGFuZ2U7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSwgJ29ucmVhZHlzdGF0ZWNoYW5nZScsIHt9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgdW5ib3VuZEtleSA9IHpvbmVTeW1ib2woJ3VuYm91bmQnKTtcbi8vIFdoZW5ldmVyIGFueSBldmVudExpc3RlbmVyIGZpcmVzLCB3ZSBjaGVjayB0aGUgZXZlbnRMaXN0ZW5lciB0YXJnZXQgYW5kIGFsbCBwYXJlbnRzXG4vLyBmb3IgYG9ud2hhdGV2ZXJgIHByb3BlcnRpZXMgYW5kIHJlcGxhY2UgdGhlbSB3aXRoIHpvbmUtYm91bmQgZnVuY3Rpb25zXG4vLyAtIENocm9tZSAoZm9yIG5vdylcbmZ1bmN0aW9uIHBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzKCkge1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24oaSkge1xuICAgICAgICB2YXIgcHJvcGVydHkgPSBldmVudE5hbWVzW2ldO1xuICAgICAgICB2YXIgb25wcm9wZXJ0eSA9ICdvbicgKyBwcm9wZXJ0eTtcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKHByb3BlcnR5LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBlbHQgPSBldmVudC50YXJnZXQsIGJvdW5kLCBzb3VyY2U7XG4gICAgICAgICAgICBpZiAoZWx0KSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gZWx0LmNvbnN0cnVjdG9yWyduYW1lJ10gKyAnLicgKyBvbnByb3BlcnR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gJ3Vua25vd24uJyArIG9ucHJvcGVydHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoZWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsdFtvbnByb3BlcnR5XSAmJiAhZWx0W29ucHJvcGVydHldW3VuYm91bmRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvdW5kID0gWm9uZS5jdXJyZW50LndyYXAoZWx0W29ucHJvcGVydHldLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICBib3VuZFt1bmJvdW5kS2V5XSA9IGVsdFtvbnByb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgZWx0W29ucHJvcGVydHldID0gYm91bmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsdCA9IGVsdC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcbiAgICB9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfbG9vcF8xKGkpO1xuICAgIH1cbiAgICBcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJFbGVtZW50UGF0Y2goX2dsb2JhbCkge1xuICAgIGlmICghaXNCcm93c2VyIHx8ICEoJ3JlZ2lzdGVyRWxlbWVudCcgaW4gX2dsb2JhbC5kb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgX3JlZ2lzdGVyRWxlbWVudCA9IGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudDtcbiAgICB2YXIgY2FsbGJhY2tzID0gWydjcmVhdGVkQ2FsbGJhY2snLCAnYXR0YWNoZWRDYWxsYmFjaycsICdkZXRhY2hlZENhbGxiYWNrJywgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayddO1xuICAgIGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCA9IGZ1bmN0aW9uIChuYW1lLCBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gJ0RvY3VtZW50LnJlZ2lzdGVyRWxlbWVudDo6JyArIGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9wdHMucHJvdG90eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBab25lLmN1cnJlbnQud3JhcChkZXNjcmlwdG9yLnZhbHVlLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3JlZGVmaW5lUHJvcGVydHkob3B0cy5wcm90b3R5cGUsIGNhbGxiYWNrLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSA9IFpvbmUuY3VycmVudC53cmFwKG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRzLnByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdID0gWm9uZS5jdXJyZW50LndyYXAob3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVnaXN0ZXJFbGVtZW50LmFwcGx5KGRvY3VtZW50LCBbbmFtZSwgb3B0c10pO1xuICAgIH07XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBzZXQgPSAnc2V0JztcbnZhciBjbGVhciA9ICdjbGVhcic7XG52YXIgYmxvY2tpbmdNZXRob2RzID0gWydhbGVydCcsICdwcm9tcHQnLCAnY29uZmlybSddO1xudmFyIF9nbG9iYWwgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgfHwgdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYgfHwgZ2xvYmFsO1xucGF0Y2hUaW1lcihfZ2xvYmFsLCBzZXQsIGNsZWFyLCAnVGltZW91dCcpO1xucGF0Y2hUaW1lcihfZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW50ZXJ2YWwnKTtcbnBhdGNoVGltZXIoX2dsb2JhbCwgc2V0LCBjbGVhciwgJ0ltbWVkaWF0ZScpO1xucGF0Y2hUaW1lcihfZ2xvYmFsLCAncmVxdWVzdCcsICdjYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbnBhdGNoVGltZXIoX2dsb2JhbCwgJ21velJlcXVlc3QnLCAnbW96Q2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG5wYXRjaFRpbWVyKF9nbG9iYWwsICd3ZWJraXRSZXF1ZXN0JywgJ3dlYmtpdENhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja2luZ01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmFtZSA9IGJsb2NraW5nTWV0aG9kc1tpXTtcbiAgICBwYXRjaE1ldGhvZChfZ2xvYmFsLCBuYW1lLCBmdW5jdGlvbiAoZGVsZWdhdGUsIHN5bWJvbCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHMsIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBab25lLmN1cnJlbnQucnVuKGRlbGVnYXRlLCBfZ2xvYmFsLCBhcmdzLCBuYW1lKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmV2ZW50VGFyZ2V0UGF0Y2goX2dsb2JhbCk7XG5wcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChfZ2xvYmFsKTtcbnBhdGNoQ2xhc3MoJ011dGF0aW9uT2JzZXJ2ZXInKTtcbnBhdGNoQ2xhc3MoJ1dlYktpdE11dGF0aW9uT2JzZXJ2ZXInKTtcbnBhdGNoQ2xhc3MoJ0ZpbGVSZWFkZXInKTtcbnByb3BlcnR5UGF0Y2goKTtcbnJlZ2lzdGVyRWxlbWVudFBhdGNoKF9nbG9iYWwpO1xuLy8gVHJlYXQgWE1MSFRUUFJlcXVlc3QgYXMgYSBtYWNyb3Rhc2suXG5wYXRjaFhIUihfZ2xvYmFsKTtcbnZhciBYSFJfVEFTSyA9IHpvbmVTeW1ib2woJ3hoclRhc2snKTtcbnZhciBYSFJfU1lOQyA9IHpvbmVTeW1ib2woJ3hoclN5bmMnKTtcbmZ1bmN0aW9uIHBhdGNoWEhSKHdpbmRvdykge1xuICAgIGZ1bmN0aW9uIGZpbmRQZW5kaW5nVGFzayh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHBlbmRpbmdUYXNrID0gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgcmV0dXJuIHBlbmRpbmdUYXNrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgICAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgZGF0YS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnRhcmdldC5yZWFkeVN0YXRlID09PSBkYXRhLnRhcmdldC5ET05FKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc3RvcmVkVGFzayA9IGRhdGEudGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgaWYgKCFzdG9yZWRUYXNrKSB7XG4gICAgICAgICAgICBkYXRhLnRhcmdldFtYSFJfVEFTS10gPSB0YXNrO1xuICAgICAgICB9XG4gICAgICAgIHNlbmROYXRpdmUuYXBwbHkoZGF0YS50YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZWhvbGRlckNhbGxiYWNrKCkgeyB9XG4gICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgIC8vIE5vdGUgLSBpZGVhbGx5LCB3ZSB3b3VsZCBjYWxsIGRhdGEudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIgaGVyZSwgYnV0IGl0J3MgdG9vIGxhdGVcbiAgICAgICAgLy8gdG8gcHJldmVudCBpdCBmcm9tIGZpcmluZy4gU28gaW5zdGVhZCwgd2Ugc3RvcmUgaW5mbyBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICBkYXRhLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYWJvcnROYXRpdmUuYXBwbHkoZGF0YS50YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgfVxuICAgIHZhciBvcGVuTmF0aXZlID0gcGF0Y2hNZXRob2Qod2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSwgJ29wZW4nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICBzZWxmW1hIUl9TWU5DXSA9IGFyZ3NbMl0gPT0gZmFsc2U7XG4gICAgICAgIHJldHVybiBvcGVuTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07IH0pO1xuICAgIHZhciBzZW5kTmF0aXZlID0gcGF0Y2hNZXRob2Qod2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSwgJ3NlbmQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgaWYgKHNlbGZbWEhSX1NZTkNdKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgWEhSIGlzIHN5bmMgdGhlcmUgaXMgbm8gdGFzayB0byBzY2hlZHVsZSwganVzdCBleGVjdXRlIHRoZSBjb2RlLlxuICAgICAgICAgICAgcmV0dXJuIHNlbmROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHsgdGFyZ2V0OiBzZWxmLCBpc1BlcmlvZGljOiBmYWxzZSwgZGVsYXk6IG51bGwsIGFyZ3M6IGFyZ3MsIGFib3J0ZWQ6IGZhbHNlIH07XG4gICAgICAgICAgICByZXR1cm4gem9uZS5zY2hlZHVsZU1hY3JvVGFzaygnWE1MSHR0cFJlcXVlc3Quc2VuZCcsIHBsYWNlaG9sZGVyQ2FsbGJhY2ssIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgfVxuICAgIH07IH0pO1xuICAgIHZhciBhYm9ydE5hdGl2ZSA9IHBhdGNoTWV0aG9kKHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdhYm9ydCcsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHRhc2sgPSBmaW5kUGVuZGluZ1Rhc2soc2VsZik7XG4gICAgICAgIGlmICh0YXNrICYmIHR5cGVvZiB0YXNrLnR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgY29tcGxldGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgaWYgKHRhc2suY2FuY2VsRm4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIHRyeWluZyB0byBhYm9ydCBhbiBYSFIgd2hpY2ggaGFzIG5vdCB5ZXQgYmVlbiBzZW50LCBzbyB0aGVyZSBpcyBubyB0YXNrXG4gICAgICAgIC8vIHRvIGNhbmNlbC4gRG8gbm90aGluZy5cbiAgICB9OyB9KTtcbn1cbi8vLyBHRU9fTE9DQVRJT05cbmlmIChfZ2xvYmFsWyduYXZpZ2F0b3InXSAmJiBfZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbikge1xuICAgIHBhdGNoUHJvdG90eXBlKF9nbG9iYWxbJ25hdmlnYXRvciddLmdlb2xvY2F0aW9uLCBbJ2dldEN1cnJlbnRQb3NpdGlvbicsICd3YXRjaFBvc2l0aW9uJ10pO1xufVxuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3pvbmUuanMvZGlzdC96b25lLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoQykgTWljcm9zb2Z0LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxudmFyIFJlZmxlY3Q7XHJcbihmdW5jdGlvbiAoUmVmbGVjdCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuICAgIC8vIGZlYXR1cmUgdGVzdCBmb3IgT2JqZWN0LmNyZWF0ZSBzdXBwb3J0XHJcbiAgICB2YXIgc3VwcG9ydHNDcmVhdGUgPSB0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgLy8gZmVhdHVyZSB0ZXN0IGZvciBfX3Byb3RvX18gc3VwcG9ydFxyXG4gICAgdmFyIHN1cHBvcnRzUHJvdG8gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZW50aW5lbCA9IHt9O1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB9XHJcbiAgICAgICAgX18ucHJvdG90eXBlID0gc2VudGluZWw7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IF9fKCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLl9fcHJvdG9fXyA9PT0gc2VudGluZWw7XHJcbiAgICB9KSgpO1xyXG4gICAgLy8gY3JlYXRlIGFuIG9iamVjdCBpbiBkaWN0aW9uYXJ5IG1vZGUgKGEuay5hLiBcInNsb3dcIiBtb2RlIGluIHY4KVxyXG4gICAgdmFyIGNyZWF0ZURpY3Rpb25hcnkgPSBzdXBwb3J0c0NyZWF0ZSA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KE9iamVjdC5jcmVhdGUobnVsbCkpOyB9IDpcclxuICAgICAgICBzdXBwb3J0c1Byb3RvID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoeyBfX3Byb3RvX186IG51bGwgfSk7IH0gOlxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeSh7fSk7IH07XHJcbiAgICB2YXIgSGFzaE1hcDtcclxuICAgIChmdW5jdGlvbiAoSGFzaE1hcCkge1xyXG4gICAgICAgIHZhciBkb3duTGV2ZWwgPSAhc3VwcG9ydHNDcmVhdGUgJiYgIXN1cHBvcnRzUHJvdG87XHJcbiAgICAgICAgSGFzaE1hcC5oYXMgPSBkb3duTGV2ZWxcclxuICAgICAgICAgICAgPyBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGhhc093bi5jYWxsKG1hcCwga2V5KTsgfVxyXG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4ga2V5IGluIG1hcDsgfTtcclxuICAgICAgICBIYXNoTWFwLmdldCA9IGRvd25MZXZlbFxyXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4gaGFzT3duLmNhbGwobWFwLCBrZXkpID8gbWFwW2tleV0gOiB1bmRlZmluZWQ7IH1cclxuICAgICAgICAgICAgOiBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIG1hcFtrZXldOyB9O1xyXG4gICAgfSkoSGFzaE1hcCB8fCAoSGFzaE1hcCA9IHt9KSk7XHJcbiAgICAvLyBMb2FkIGdsb2JhbCBvciBzaGltIHZlcnNpb25zIG9mIE1hcCwgU2V0LCBhbmQgV2Vha01hcFxyXG4gICAgdmFyIGZ1bmN0aW9uUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKEZ1bmN0aW9uKTtcclxuICAgIHZhciBfTWFwID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gTWFwIDogQ3JlYXRlTWFwUG9seWZpbGwoKTtcclxuICAgIHZhciBfU2V0ID0gdHlwZW9mIFNldCA9PT0gXCJmdW5jdGlvblwiID8gU2V0IDogQ3JlYXRlU2V0UG9seWZpbGwoKTtcclxuICAgIHZhciBfV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSBcImZ1bmN0aW9uXCIgPyBXZWFrTWFwIDogQ3JlYXRlV2Vha01hcFBvbHlmaWxsKCk7XHJcbiAgICAvLyBbW01ldGFkYXRhXV0gaW50ZXJuYWwgc2xvdFxyXG4gICAgdmFyIE1ldGFkYXRhID0gbmV3IF9XZWFrTWFwKCk7XHJcbiAgICAvKipcclxuICAgICAgKiBBcHBsaWVzIGEgc2V0IG9mIGRlY29yYXRvcnMgdG8gYSBwcm9wZXJ0eSBvZiBhIHRhcmdldCBvYmplY3QuXHJcbiAgICAgICogQHBhcmFtIGRlY29yYXRvcnMgQW4gYXJyYXkgb2YgZGVjb3JhdG9ycy5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IHRvIGRlY29yYXRlLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXREZXNjcmlwdG9yIChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgZm9yIHRoZSB0YXJnZXQga2V5XHJcbiAgICAgICogQHJlbWFya3MgRGVjb3JhdG9ycyBhcmUgYXBwbGllZCBpbiByZXZlcnNlIG9yZGVyLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgRXhhbXBsZSA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcclxuICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiLFxyXG4gICAgICAqICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIikpKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiLFxyXG4gICAgICAqICAgICAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiLFxyXG4gICAgICAqICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpKSk7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwgdGFyZ2V0S2V5LCB0YXJnZXREZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXREZXNjcmlwdG9yKSkge1xyXG4gICAgICAgICAgICBpZiAoIUlzQXJyYXkoZGVjb3JhdG9ycykpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0RGVzY3JpcHRvcikpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIERlY29yYXRlUHJvcGVydHlXaXRoRGVzY3JpcHRvcihkZWNvcmF0b3JzLCB0YXJnZXQsIHRhcmdldEtleSwgdGFyZ2V0RGVzY3JpcHRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKSB7XHJcbiAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZVByb3BlcnR5V2l0aG91dERlc2NyaXB0b3IoZGVjb3JhdG9ycywgdGFyZ2V0LCB0YXJnZXRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFJc0FycmF5KGRlY29yYXRvcnMpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IodGFyZ2V0KSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIERlY29yYXRlQ29uc3RydWN0b3IoZGVjb3JhdG9ycywgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmRlY29yYXRlID0gZGVjb3JhdGU7XHJcbiAgICAvKipcclxuICAgICAgKiBBIGRlZmF1bHQgbWV0YWRhdGEgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBjYW4gYmUgdXNlZCBvbiBhIGNsYXNzLCBjbGFzcyBtZW1iZXIsIG9yIHBhcmFtZXRlci5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgVGhlIGtleSBmb3IgdGhlIG1ldGFkYXRhIGVudHJ5LlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIG1ldGFkYXRhIGVudHJ5LlxyXG4gICAgICAqIEByZXR1cm5zIEEgZGVjb3JhdG9yIGZ1bmN0aW9uLlxyXG4gICAgICAqIEByZW1hcmtzXHJcbiAgICAgICogSWYgYG1ldGFkYXRhS2V5YCBpcyBhbHJlYWR5IGRlZmluZWQgZm9yIHRoZSB0YXJnZXQgYW5kIHRhcmdldCBrZXksIHRoZVxyXG4gICAgICAqIG1ldGFkYXRhVmFsdWUgZm9yIHRoYXQga2V5IHdpbGwgYmUgb3ZlcndyaXR0ZW4uXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvciwgVHlwZVNjcmlwdCBvbmx5KVxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlLCBUeXBlU2NyaXB0IG9ubHkpXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcclxuICAgICAgKiAgICAgICAgIHByb3BlcnR5O1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZCgpIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcclxuICAgICAgKiAgICAgICAgIG1ldGhvZCgpIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICAgICAgICAgIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghSXNDb25zdHJ1Y3Rvcih0YXJnZXQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgLyp0YXJnZXRLZXkqLyB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0Lm1ldGFkYXRhID0gbWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBEZWZpbmUgYSB1bmlxdWUgbWV0YWRhdGEgZW50cnkgb24gdGhlIHRhcmdldC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhVmFsdWUgQSB2YWx1ZSB0aGF0IGNvbnRhaW5zIGF0dGFjaGVkIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdG8gZGVmaW5lIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBkZWNvcmF0b3IgZmFjdG9yeSBhcyBtZXRhZGF0YS1wcm9kdWNpbmcgYW5ub3RhdGlvbi5cclxuICAgICAgKiAgICAgZnVuY3Rpb24gTXlBbm5vdGF0aW9uKG9wdGlvbnMpOiBEZWNvcmF0b3Ige1xyXG4gICAgICAqICAgICAgICAgcmV0dXJuICh0YXJnZXQsIGtleT8pID0+IFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCB0YXJnZXQsIGtleSk7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKVxyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEgPSBkZWZpbmVNZXRhZGF0YTtcclxuICAgIC8qKlxyXG4gICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbiBoYXMgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEga2V5IHdhcyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW47IG90aGVyd2lzZSwgYGZhbHNlYC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSlcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeUhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0Lmhhc01ldGFkYXRhID0gaGFzTWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldEtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBrZXkgd2FzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Q7IG90aGVyd2lzZSwgYGZhbHNlYC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSlcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0Lmhhc093bk1ldGFkYXRhID0gaGFzT3duTWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIFRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIG1ldGFkYXRhIGtleSBpZiBmb3VuZDsgb3RoZXJ3aXNlLCBgdW5kZWZpbmVkYC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSlcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeUdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmdldE1ldGFkYXRhID0gZ2V0TWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5nZXRPd25NZXRhZGF0YSA9IGdldE93bk1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1bmlxdWUgbWV0YWRhdGEga2V5cy5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlNZXRhZGF0YUtleXModGFyZ2V0LCB0YXJnZXRLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMgPSBnZXRNZXRhZGF0YUtleXM7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSB1bmlxdWUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldEtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIG1ldGFkYXRhIGtleXMuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKVxyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzID0gZ2V0T3duTWV0YWRhdGFLZXlzO1xyXG4gICAgLyoqXHJcbiAgICAgICogRGVsZXRlcyB0aGUgbWV0YWRhdGEgZW50cnkgZnJvbSB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIHRoZSBwcm92aWRlZCBrZXkuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldEtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBlbnRyeSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQ7IG90aGVyd2lzZSwgZmFsc2UuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vUmVmbGVjdERlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlYy9tZXRhZGF0YS5tZCNkZWxldGVtZXRhZGF0YS1tZXRhZGF0YWtleS1wLVxyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSlcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCB0YXJnZXRLZXksIC8qY3JlYXRlKi8gZmFsc2UpO1xyXG4gICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIW1ldGFkYXRhTWFwLmRlbGV0ZShtZXRhZGF0YUtleSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobWV0YWRhdGFNYXAuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IE1ldGFkYXRhLmdldCh0YXJnZXQpO1xyXG4gICAgICAgIHRhcmdldE1ldGFkYXRhLmRlbGV0ZSh0YXJnZXRLZXkpO1xyXG4gICAgICAgIGlmICh0YXJnZXRNZXRhZGF0YS5zaXplID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgTWV0YWRhdGEuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhID0gZGVsZXRlTWV0YWRhdGE7XHJcbiAgICBmdW5jdGlvbiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xyXG4gICAgICAgICAgICB2YXIgZGVjb3JhdGVkID0gZGVjb3JhdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQoZGVjb3JhdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKGRlY29yYXRlZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZGVjb3JhdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBEZWNvcmF0ZVByb3BlcnR5V2l0aERlc2NyaXB0b3IoZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xyXG4gICAgICAgICAgICB2YXIgZGVjb3JhdGVkID0gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpO1xyXG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKGRlY29yYXRlZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QoZGVjb3JhdGVkKSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0gZGVjb3JhdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gRGVjb3JhdGVQcm9wZXJ0eVdpdGhvdXREZXNjcmlwdG9yKGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXTtcclxuICAgICAgICAgICAgZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9SZWZsZWN0RGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjL21ldGFkYXRhLm1kI2dldG9yY3JlYXRlbWV0YWRhdGFtYXAtLW8tcC1jcmVhdGUtXHJcbiAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgdGFyZ2V0S2V5LCBjcmVhdGUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQodGFyZ2V0KTtcclxuICAgICAgICBpZiAoIXRhcmdldE1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICghY3JlYXRlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgX01hcCgpO1xyXG4gICAgICAgICAgICBNZXRhZGF0YS5zZXQodGFyZ2V0LCB0YXJnZXRNZXRhZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBrZXlNZXRhZGF0YSA9IHRhcmdldE1ldGFkYXRhLmdldCh0YXJnZXRLZXkpO1xyXG4gICAgICAgIGlmICgha2V5TWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCFjcmVhdGUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBrZXlNZXRhZGF0YSA9IG5ldyBfTWFwKCk7XHJcbiAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhLnNldCh0YXJnZXRLZXksIGtleU1ldGFkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleU1ldGFkYXRhO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL1JlZmxlY3REZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWMvbWV0YWRhdGEubWQjb3JkaW5hcnloYXNtZXRhZGF0YS0tbWV0YWRhdGFrZXktby1wLVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xyXG4gICAgICAgIHZhciBoYXNPd24gPSBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcclxuICAgICAgICBpZiAoaGFzT3duKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gR2V0UHJvdG90eXBlT2YoTyk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9SZWZsZWN0RGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjL21ldGFkYXRhLm1kI29yZGluYXJ5aGFzb3dubWV0YWRhdGEtLW1ldGFkYXRha2V5LW8tcC1cclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcclxuICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qY3JlYXRlKi8gZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBtZXRhZGF0YU1hcCAhPT0gdW5kZWZpbmVkICYmIEJvb2xlYW4obWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KSk7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vUmVmbGVjdERlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlYy9tZXRhZGF0YS5tZCNvcmRpbmFyeWdldG1ldGFkYXRhLS1tZXRhZGF0YWtleS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIGhhc093biA9IE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xyXG4gICAgICAgIGlmIChoYXNPd24pXHJcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gR2V0UHJvdG90eXBlT2YoTyk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vUmVmbGVjdERlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlYy9tZXRhZGF0YS5tZCNvcmRpbmFyeWdldG93bm1ldGFkYXRhLS1tZXRhZGF0YWtleS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKmNyZWF0ZSovIGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IG1ldGFkYXRhTWFwLmdldChNZXRhZGF0YUtleSk7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vUmVmbGVjdERlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlYy9tZXRhZGF0YS5tZCNvcmRpbmFyeWRlZmluZW93bm1ldGFkYXRhLS1tZXRhZGF0YWtleS1tZXRhZGF0YXZhbHVlLW8tcC1cclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApIHtcclxuICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qY3JlYXRlKi8gdHJ1ZSk7XHJcbiAgICAgICAgbWV0YWRhdGFNYXAuc2V0KE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlKTtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9SZWZsZWN0RGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjL21ldGFkYXRhLm1kI29yZGluYXJ5bWV0YWRhdGFrZXlzLS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeU1ldGFkYXRhS2V5cyhPLCBQKSB7XHJcbiAgICAgICAgdmFyIG93bktleXMgPSBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gR2V0UHJvdG90eXBlT2YoTyk7XHJcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG93bktleXM7XHJcbiAgICAgICAgdmFyIHBhcmVudEtleXMgPSBPcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xyXG4gICAgICAgIGlmIChwYXJlbnRLZXlzLmxlbmd0aCA8PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gb3duS2V5cztcclxuICAgICAgICBpZiAob3duS2V5cy5sZW5ndGggPD0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEtleXM7XHJcbiAgICAgICAgdmFyIGtleXMgPSBuZXcgX1NldCgpO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBvd25LZXlzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gb3duS2V5c1tfaV07XHJcbiAgICAgICAgICAgIGtleXMuYWRkKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIF9hID0gMDsgX2EgPCBwYXJlbnRLZXlzLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gcGFyZW50S2V5c1tfYV07XHJcbiAgICAgICAgICAgIGtleXMuYWRkKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnZXRLZXlzKGtleXMpO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL1JlZmxlY3REZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWMvbWV0YWRhdGEubWQjb3JkaW5hcnlvd25tZXRhZGF0YWtleXMtLW8tcC1cclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHRhcmdldEtleSwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcclxuICAgICAgICBpZiAobWV0YWRhdGFNYXApXHJcbiAgICAgICAgICAgIGZvckVhY2gobWV0YWRhdGFNYXAsIGZ1bmN0aW9uIChfLCBrZXkpIHsgcmV0dXJuIGtleXMucHVzaChrZXkpOyB9KTtcclxuICAgICAgICByZXR1cm4ga2V5cztcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLXVuZGVmaW5lZC10eXBlXHJcbiAgICBmdW5jdGlvbiBJc1VuZGVmaW5lZCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2FycmF5XHJcbiAgICBmdW5jdGlvbiBJc0FycmF5KHgpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSA/IEFycmF5LmlzQXJyYXkoeCkgOiB4IGluc3RhbmNlb2YgQXJyYXkgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgQXJyYXldXCI7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LXR5cGVcclxuICAgIGZ1bmN0aW9uIElzT2JqZWN0KHgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgPyB4ICE9PSBudWxsIDogdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NvbnN0cnVjdG9yXHJcbiAgICBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKHgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLXN5bWJvbC10eXBlXHJcbiAgICBmdW5jdGlvbiBJc1N5bWJvbCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJvcGVydHlrZXlcclxuICAgIGZ1bmN0aW9uIFRvUHJvcGVydHlLZXkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gSXNTeW1ib2wodmFsdWUpID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gR2V0UHJvdG90eXBlT2YoTykge1xyXG4gICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKTtcclxuICAgICAgICBpZiAodHlwZW9mIE8gIT09IFwiZnVuY3Rpb25cIiB8fCBPID09PSBmdW5jdGlvblByb3RvdHlwZSlcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xyXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgZG9lc24ndCBzZXQgX19wcm90b19fIGluIEVTNSwgYXMgaXQncyBub24tc3RhbmRhcmQuXHJcbiAgICAgICAgLy8gVHJ5IHRvIGRldGVybWluZSB0aGUgc3VwZXJjbGFzcyBFeGFtcGxlb25zdHJ1Y3Rvci4gQ29tcGF0aWJsZSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAgICAvLyBtdXN0IGVpdGhlciBzZXQgX19wcm90b19fIG9uIGEgc3ViY2xhc3MgRXhhbXBsZW9uc3RydWN0b3IgdG8gdGhlIHN1cGVyY2xhc3MgRXhhbXBsZW9uc3RydWN0b3IsXHJcbiAgICAgICAgLy8gb3IgZW5zdXJlIGVhY2ggY2xhc3MgaGFzIGEgdmFsaWQgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSBvbiBpdHMgcHJvdG90eXBlIHRoYXRcclxuICAgICAgICAvLyBwb2ludHMgYmFjayB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgRnVuY3Rpb24uW1tQcm90b3R5cGVdXSwgdGhlbiB0aGlzIGlzIGRlZmluYXRlbHkgaW5oZXJpdGVkLlxyXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGNhc2Ugd2hlbiBpbiBFUzYgb3Igd2hlbiB1c2luZyBfX3Byb3RvX18gaW4gYSBjb21wYXRpYmxlIGJyb3dzZXIuXHJcbiAgICAgICAgaWYgKHByb3RvICE9PSBmdW5jdGlvblByb3RvdHlwZSlcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xyXG4gICAgICAgIC8vIElmIHRoZSBzdXBlciBwcm90b3R5cGUgaXMgT2JqZWN0LnByb3RvdHlwZSwgbnVsbCwgb3IgdW5kZWZpbmVkLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxyXG4gICAgICAgIHZhciBwcm90b3R5cGUgPSBPLnByb3RvdHlwZTtcclxuICAgICAgICB2YXIgcHJvdG90eXBlUHJvdG8gPSBwcm90b3R5cGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XHJcbiAgICAgICAgaWYgKHByb3RvdHlwZVByb3RvID09IG51bGwgfHwgcHJvdG90eXBlUHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUpXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICAvLyBJZiB0aGUgY29uc3RydWN0b3Igd2FzIG5vdCBhIGZ1bmN0aW9uLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxyXG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHByb3RvdHlwZVByb3RvLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29uc3RydWN0b3IgIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xyXG4gICAgICAgIC8vIElmIHdlIGhhdmUgc29tZSBraW5kIG9mIHNlbGYtcmVmZXJlbmNlLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PT0gTylcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xyXG4gICAgICAgIC8vIHdlIGhhdmUgYSBwcmV0dHkgZ29vZCBndWVzcyBhdCB0aGUgaGVyaXRhZ2UuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyB1bmRlZmluZWQgOiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgdmFyIGYgPSBpdGVyYXRvcltcInJldHVyblwiXTtcclxuICAgICAgICBpZiAoZilcclxuICAgICAgICAgICAgZi5jYWxsKGl0ZXJhdG9yKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvckVhY2goc291cmNlLCBjYWxsYmFjaywgdGhpc0FyZykge1xyXG4gICAgICAgIHZhciBlbnRyaWVzID0gc291cmNlLmVudHJpZXM7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyaWVzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gZW50cmllcy5jYWxsKHNvdXJjZSk7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVzdWx0ID0gSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwga2V5LCBzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICAgICAgICAgICAgICBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGZvckVhY2hfMSA9IHNvdXJjZS5mb3JFYWNoO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZvckVhY2hfMSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoXzEuY2FsbChzb3VyY2UsIGNhbGxiYWNrLCB0aGlzQXJnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEtleXMoc291cmNlKSB7XHJcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcclxuICAgICAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKF8sIGtleSkgeyBrZXlzLnB1c2goa2V5KTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcbiAgICAvLyBuYWl2ZSBNYXBJdGVyYXRvciBzaGltXHJcbiAgICBmdW5jdGlvbiBDcmVhdGVNYXBJdGVyYXRvcihrZXlzLCB2YWx1ZXMsIGtpbmQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoa2V5cyB8fCB2YWx1ZXMpICYmIGluZGV4IDwgKGtleXMgfHwgdmFsdWVzKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJrZXlcIjogcmV0dXJuIHsgdmFsdWU6IGtleXNbY3VycmVudF0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWx1ZVwiOiByZXR1cm4geyB2YWx1ZTogdmFsdWVzW2N1cnJlbnRdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5K3ZhbHVlXCI6IHJldHVybiB7IHZhbHVlOiBba2V5c1tjdXJyZW50XSwgdmFsdWVzW2N1cnJlbnRdXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXlzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInRocm93XCI6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleXMgfHwgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5cyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJyZXR1cm5cIjogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5cyB8fCB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIG5haXZlIE1hcCBzaGltXHJcbiAgICBmdW5jdGlvbiBDcmVhdGVNYXBQb2x5ZmlsbCgpIHtcclxuICAgICAgICB2YXIgY2FjaGVTZW50aW5lbCA9IHt9O1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBNYXAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSAtMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFwLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGg7IH0sXHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKSA+PSAwOyB9O1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA+PSAwID8gdGhpcy5fdmFsdWVzW2luZGV4XSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5fa2V5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4ICsgMTsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzW2kgLSAxXSA9IHRoaXMuX2tleXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1tpIC0gMV0gPSB0aGlzLl92YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMubGVuZ3RoLS07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSAtMjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gQ3JlYXRlTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgLyp2YWx1ZXMqLyB1bmRlZmluZWQsIFwia2V5XCIpOyB9O1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENyZWF0ZU1hcEl0ZXJhdG9yKC8qa2V5cyovIHVuZGVmaW5lZCwgdGhpcy5fdmFsdWVzLCBcInZhbHVlXCIpOyB9O1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBDcmVhdGVNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIFwia2V5K3ZhbHVlXCIpOyB9O1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLl9maW5kID0gZnVuY3Rpb24gKGtleSwgaW5zZXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVLZXkgPT09IGtleSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVJbmRleDtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2tleXMuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgMCAmJiBpbnNlcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuX2tleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVLZXkgPSBrZXksIHRoaXMuX2NhY2hlSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgICAgICB9KSgpO1xyXG4gICAgfVxyXG4gICAgLy8gbmFpdmUgU2V0IHNoaW1cclxuICAgIGZ1bmN0aW9uIENyZWF0ZVNldFBvbHlmaWxsKCkge1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBTZXQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXAgPSBuZXcgX01hcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXQucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAuc2l6ZTsgfSxcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuaGFzKHZhbHVlKTsgfTtcclxuICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5zZXQodmFsdWUsIHZhbHVlKSwgdGhpczsgfTtcclxuICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5kZWxldGUodmFsdWUpOyB9O1xyXG4gICAgICAgICAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9tYXAuY2xlYXIoKTsgfTtcclxuICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLmtleXMoKTsgfTtcclxuICAgICAgICAgICAgU2V0LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAudmFsdWVzKCk7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5lbnRyaWVzKCk7IH07XHJcbiAgICAgICAgICAgIHJldHVybiBTZXQ7XHJcbiAgICAgICAgfSkoKTtcclxuICAgIH1cclxuICAgIC8vIG5haXZlIFdlYWtNYXAgc2hpbVxyXG4gICAgZnVuY3Rpb24gQ3JlYXRlV2Vha01hcFBvbHlmaWxsKCkge1xyXG4gICAgICAgIHZhciBVVUlEX1NJWkUgPSAxNjtcclxuICAgICAgICB2YXIga2V5cyA9IGNyZWF0ZURpY3Rpb25hcnkoKTtcclxuICAgICAgICB2YXIgcm9vdEtleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBXZWFrTWFwKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gSGFzaE1hcC5oYXModGFibGUsIHRoaXMuX2tleSkgOiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gSGFzaE1hcC5nZXQodGFibGUsIHRoaXMuX2tleSkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0YWJsZVt0aGlzLl9rZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gZGVsZXRlIHRhYmxlW3RoaXMuX2tleV0gOiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOT1RFOiBub3QgYSByZWFsIGNsZWFyLCBqdXN0IG1ha2VzIHRoZSBwcmV2aW91cyBkYXRhIHVucmVhY2hhYmxlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIFdlYWtNYXA7XHJcbiAgICAgICAgfSkoKTtcclxuICAgICAgICBmdW5jdGlvbiBGaWxsUmFuZG9tQnl0ZXMoYnVmZmVyLCBzaXplKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKVxyXG4gICAgICAgICAgICAgICAgYnVmZmVyW2ldID0gTWF0aC5yYW5kb20oKSAqIDB4ZmYgfCAwO1xyXG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBHZW5SYW5kb21CeXRlcyhzaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgVWludDhBcnJheSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNyeXB0byAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1zQ3J5cHRvICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZpbGxSYW5kb21CeXRlcyhuZXcgVWludDhBcnJheShzaXplKSwgc2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEZpbGxSYW5kb21CeXRlcyhuZXcgQXJyYXkoc2l6ZSksIHNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVVVUlEKCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEdlblJhbmRvbUJ5dGVzKFVVSURfU0laRSk7XHJcbiAgICAgICAgICAgIC8vIG1hcmsgYXMgcmFuZG9tIC0gUkZDIDQxMjIgwqcgNC40XHJcbiAgICAgICAgICAgIGRhdGFbNl0gPSBkYXRhWzZdICYgMHg0ZiB8IDB4NDA7XHJcbiAgICAgICAgICAgIGRhdGFbOF0gPSBkYXRhWzhdICYgMHhiZiB8IDB4ODA7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBVVUlEX1NJWkU7ICsrb2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnl0ZSA9IGRhdGFbb2Zmc2V0XTtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IDQgfHwgb2Zmc2V0ID09PSA2IHx8IG9mZnNldCA9PT0gOClcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCItXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnl0ZSA8IDE2KVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBieXRlLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIENyZWF0ZVVuaXF1ZUtleSgpIHtcclxuICAgICAgICAgICAgdmFyIGtleTtcclxuICAgICAgICAgICAgZG9cclxuICAgICAgICAgICAgICAgIGtleSA9IFwiQEBXZWFrTWFwQEBcIiArIENyZWF0ZVVVSUQoKTtcclxuICAgICAgICAgICAgd2hpbGUgKEhhc2hNYXAuaGFzKGtleXMsIGtleSkpO1xyXG4gICAgICAgICAgICBrZXlzW2tleV0gPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIGNyZWF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWhhc093bi5jYWxsKHRhcmdldCwgcm9vdEtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3JlYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCByb290S2V5LCB7IHZhbHVlOiBjcmVhdGVEaWN0aW9uYXJ5KCkgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtyb290S2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1c2VzIGEgaGV1cmlzdGljIHVzZWQgYnkgdjggYW5kIGNoYWtyYSB0byBmb3JjZSBhbiBvYmplY3QgaW50byBkaWN0aW9uYXJ5IG1vZGUuXHJcbiAgICBmdW5jdGlvbiBNYWtlRGljdGlvbmFyeShvYmopIHtcclxuICAgICAgICBvYmouX19ESUNUSU9OQVJZX01PREVfXyA9IDE7XHJcbiAgICAgICAgZGVsZXRlIG9iai5fX19fRElDVElPTkFSWV9NT0RFX187XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIC8vIHBhdGNoIGdsb2JhbCBSZWZsZWN0XHJcbiAgICAoZnVuY3Rpb24gKF9fZ2xvYmFsKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfX2dsb2JhbC5SZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChfX2dsb2JhbC5SZWZsZWN0ICE9PSBSZWZsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIFJlZmxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoUmVmbGVjdCwgcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19nbG9iYWwuUmVmbGVjdFtwXSA9IFJlZmxlY3RbcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfX2dsb2JhbC5SZWZsZWN0ID0gUmVmbGVjdDtcclxuICAgICAgICB9XHJcbiAgICB9KSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDpcclxuICAgICAgICB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDpcclxuICAgICAgICAgICAgdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6XHJcbiAgICAgICAgICAgICAgICBGdW5jdGlvbihcInJldHVybiB0aGlzO1wiKSgpKTtcclxufSkoUmVmbGVjdCB8fCAoUmVmbGVjdCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlZmxlY3QuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=