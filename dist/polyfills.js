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
	__webpack_require__(381);
	__webpack_require__(382);
	__webpack_require__(383);


/***/ },

/***/ 299:
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

/***/ 381:
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

/***/ 382:
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(299)))

/***/ },

/***/ 383:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzk3OTNiZjk4ZDZlMjZlN2Y3MjgiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BvbHlmaWxscy50cyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvY2xpZW50L3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi96b25lLmpzL2Rpc3Qvem9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0VBQWdFLHVCQUF1QjtBQUN2RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7Ozs7QUNuTHRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQSxnQkFBZTs7QUFFZixRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOzs7QUFHQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxHQUFFOztBQUVGLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsR0FBRTs7QUFFRixRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUEsd0JBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QTs7QUFFQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRUFBOEUsMEJBQTBCOztBQUV4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSw2RkFBNEY7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsR0FBRTs7QUFFRjs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLE9B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QUVGLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRixRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUYsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVztBQUNYLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGLFFBQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRixRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLDBCQUEwQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEwRCxrQ0FBa0MsRUFBRTtBQUM5Riw4REFBNkQscUNBQXFDLEVBQUU7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0RBQThELDBCQUEwQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVLEVBQUU7QUFDWjtBQUNBLDhEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxFQUFFO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBc0QsMEJBQTBCLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEwRCwrQkFBK0IsRUFBRTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsNkVBQTRFO0FBQzVFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0Esb0JBQW1CLHVCQUF1QjtBQUMxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pXG4gXHRcdFx0XHRjYWxsYmFja3MucHVzaC5hcHBseShjYWxsYmFja3MsIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSk7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKGNhbGxiYWNrcy5sZW5ndGgpXG4gXHRcdFx0Y2FsbGJhY2tzLnNoaWZ0KCkuY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0aWYobW9yZU1vZHVsZXNbMF0pIHtcbiBcdFx0XHRpbnN0YWxsZWRNb2R1bGVzWzBdID0gMDtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0Ly8gQXJyYXkgbWVhbnMgXCJsb2FkaW5nXCIsIGFycmF5IGNvbnRhaW5zIGNhbGxiYWNrc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTowXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkLCBjYWxsYmFjaykge1xuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKVxuIFx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIGFuIGFycmF5IG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0ucHVzaChjYWxsYmFjayk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtjYWxsYmFja107XG4gXHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gXHRcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyAoe1wiMFwiOlwiYXBwXCIsXCIyXCI6XCJ2ZW5kb3JcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIjtcbiBcdFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzk3OTNiZjk4ZDZlMjZlN2Y3MjgiLCJcInVzZSBzdHJpY3RcIjtcclxucmVxdWlyZSgnY29yZS1qcy9jbGllbnQvc2hpbScpO1xyXG5yZXF1aXJlKCd6b25lLmpzL2Rpc3Qvem9uZScpO1xyXG5yZXF1aXJlKCdyZWZsZWN0LW1ldGFkYXRhJyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3BvbHlmaWxscy50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMjk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogY29yZS1qcyAyLjQuMVxuICogaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanNcbiAqIExpY2Vuc2U6IGh0dHA6Ly9yb2NrLm1pdC1saWNlbnNlLm9yZ1xuICogwqkgMjAxNiBEZW5pcyBQdXNoa2FyZXZcbiAqL1xuIWZ1bmN0aW9uKF9fZSwgX19nLCB1bmRlZmluZWQpe1xuJ3VzZSBzdHJpY3QnO1xuLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNTApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNTQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDU1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1OCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNTkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDYwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNjIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDYzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNjUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDY2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2OCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNzApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDcyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg3NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNzcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDc4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg3OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oODMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDg2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg4Nyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oODgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDg5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg5MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oOTIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDkzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg5NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oOTUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDk3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg5OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTAwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMDEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEwMyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTA0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMDUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEwNyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTA4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMDkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExMSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTEyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMTMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExNCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTE1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMTYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExNyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTE4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMTkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEyMCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTIxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMjIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEyMyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTI0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMjYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzMCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTMxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzMyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNDIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQ0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNDUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0Nik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQ3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNDgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTUwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNTEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTU4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNTkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTYyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNjMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE2Nyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTY4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNjkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTcxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTc1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTgxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTg1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTkwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTk0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5Nik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjAzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMDYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIwNyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjA5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMTApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxMSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjEyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMTMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxNCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjE1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMTYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxNyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjE4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMTkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIyMCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjIyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMjMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIyNCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjI1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMjYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIyNyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjI4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMjkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzMSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNDIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQ0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNDUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0Nik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQ3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNDkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjUxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNTIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjU0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNTUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1Nik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjU4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNTkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI2MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjYyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNjMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI2NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjY3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNjgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI2OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjcwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNzEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjczKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNzQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3Nik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjc3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNzgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjgwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyODEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI4Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjgzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyODQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI4NSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjg2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyODcpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjg4KTtcblxuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG5cdHZhciBnbG9iYWwgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGhhcyAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgREVTQ1JJUFRPUlMgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpXG5cdCAgLCAkZXhwb3J0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHJlZGVmaW5lICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNilcblx0ICAsIE1FVEEgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCkuS0VZXG5cdCAgLCAkZmFpbHMgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsIHNoYXJlZCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSlcblx0ICAsIHNldFRvU3RyaW5nVGFnID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMilcblx0ICAsIHVpZCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNylcblx0ICAsIHdrcyAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMylcblx0ICAsIHdrc0V4dCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNClcblx0ICAsIHdrc0RlZmluZSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSlcblx0ICAsIGtleU9mICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNylcblx0ICAsIGVudW1LZXlzICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MClcblx0ICAsIGlzQXJyYXkgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Mylcblx0ICAsIGFuT2JqZWN0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIHRvSU9iamVjdCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIHRvUHJpbWl0aXZlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNClcblx0ICAsIGNyZWF0ZURlc2MgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSlcblx0ICAsIF9jcmVhdGUgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NClcblx0ICAsIGdPUE5FeHQgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Nylcblx0ICAsICRHT1BEICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSlcblx0ICAsICREUCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KVxuXHQgICwgJGtleXMgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KVxuXHQgICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG5cdCAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG5cdCAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuXHQgICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG5cdCAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG5cdCAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuXHQgICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuXHQgICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuXHQgICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcblx0ICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcblx0ICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuXHQgICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuXHQgICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuXHQgICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuXHQgICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG5cdCAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuXHQvLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcblx0dmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cblx0Ly8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG5cdHZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuXHQgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG5cdCAgfSkpLmEgIT0gNztcblx0fSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcblx0ICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcblx0ICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG5cdCAgZFAoaXQsIGtleSwgRCk7XG5cdCAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xuXHR9IDogZFA7XG5cblx0dmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuXHQgIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG5cdCAgc3ltLl9rID0gdGFnO1xuXHQgIHJldHVybiBzeW07XG5cdH07XG5cblx0dmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xuXHR9IDogZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG5cdH07XG5cblx0dmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuXHQgIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuXHQgIGFuT2JqZWN0KGl0KTtcblx0ICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuXHQgIGFuT2JqZWN0KEQpO1xuXHQgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcblx0ICAgIGlmKCFELmVudW1lcmFibGUpe1xuXHQgICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcblx0ICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG5cdCAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuXHQgICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcblx0ICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcblx0fTtcblx0dmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG5cdCAgYW5PYmplY3QoaXQpO1xuXHQgIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcblx0ICAgICwgaSAgICA9IDBcblx0ICAgICwgbCA9IGtleXMubGVuZ3RoXG5cdCAgICAsIGtleTtcblx0ICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cdHZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcblx0ICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG5cdH07XG5cdHZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuXHQgIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG5cdCAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuXHQgIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcblx0fTtcblx0dmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG5cdCAgaXQgID0gdG9JT2JqZWN0KGl0KTtcblx0ICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuXHQgIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG5cdCAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuXHQgIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuXHQgIHJldHVybiBEO1xuXHR9O1xuXHR2YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcblx0ICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuXHQgICAgLCByZXN1bHQgPSBbXVxuXHQgICAgLCBpICAgICAgPSAwXG5cdCAgICAsIGtleTtcblx0ICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcblx0ICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuXHQgIH0gcmV0dXJuIHJlc3VsdDtcblx0fTtcblx0dmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuXHQgIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cblx0ICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG5cdCAgICAsIHJlc3VsdCA9IFtdXG5cdCAgICAsIGkgICAgICA9IDBcblx0ICAgICwga2V5O1xuXHQgIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuXHQgICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG5cdCAgfSByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuXHRpZighVVNFX05BVElWRSl7XG5cdCAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuXHQgICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG5cdCAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcblx0ICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuXHQgICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG5cdCAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcblx0ICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcblx0ICAgIH07XG5cdCAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcblx0ICAgIHJldHVybiB3cmFwKHRhZyk7XG5cdCAgfTtcblx0ICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG5cdCAgICByZXR1cm4gdGhpcy5faztcblx0ICB9KTtcblxuXHQgICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXHQgICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG5cdCAgX193ZWJwYWNrX3JlcXVpcmVfXyg0OCkuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuXHQgIF9fd2VicGFja19yZXF1aXJlX18oNDIpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHQgIF9fd2VicGFja19yZXF1aXJlX18oNDEpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cdCAgaWYoREVTQ1JJUFRPUlMgJiYgIV9fd2VicGFja19yZXF1aXJlX18oMjYpKXtcblx0ICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuXHQgIH1cblxuXHQgIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG5cdCAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuXHQgIH1cblx0fVxuXG5cdCRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuXHRmb3IodmFyIHN5bWJvbHMgPSAoXG5cdCAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcblx0ICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG5cdCkuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5cdGZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuXHQgIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuXHQgICdmb3InOiBmdW5jdGlvbihrZXkpe1xuXHQgICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuXHQgICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cblx0ICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuXHQgIH0sXG5cdCAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG5cdCAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcblx0ICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuXHQgICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuXHQgIH0sXG5cdCAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuXHQgIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cblx0fSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcblx0ICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG5cdCAgY3JlYXRlOiAkY3JlYXRlLFxuXHQgIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuXHQgIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG5cdCAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcblx0ICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcblx0ICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG5cdCAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuXHQgIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG5cdCAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG5cdCAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuXHQgIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xuXHR9KTtcblxuXHQvLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcblx0JEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgdmFyIFMgPSAkU3ltYm9sKCk7XG5cdCAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cblx0ICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcblx0ICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuXHQgIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG5cdH0pKSwgJ0pTT04nLCB7XG5cdCAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuXHQgICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG5cdCAgICB2YXIgYXJncyA9IFtpdF1cblx0ICAgICAgLCBpICAgID0gMVxuXHQgICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG5cdCAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuXHQgICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuXHQgICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG5cdCAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG5cdCAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuXHQgICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcblx0ICAgIH07XG5cdCAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG5cdCAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG5cdCAgfVxuXHR9KTtcblxuXHQvLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG5cdCRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IF9fd2VicGFja19yZXF1aXJlX18oOCkoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcblx0Ly8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuXHRzZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG5cdC8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cblx0c2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcblx0Ly8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cblx0c2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuXHR2YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcblx0ICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdGlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbi8qKiovIH0sXG4vKiAzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcblx0ICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcblx0bW9kdWxlLmV4cG9ydHMgPSAhX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuICEhZXhlYygpO1xuXHQgIH0gY2F0Y2goZSl7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdH07XG5cbi8qKiovIH0sXG4vKiA2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgY29yZSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KVxuXHQgICwgaGlkZSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KVxuXHQgICwgcmVkZWZpbmUgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNilcblx0ICAsIGN0eCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpXG5cdCAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuXHR2YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG5cdCAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcblx0ICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuXHQgICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG5cdCAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcblx0ICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuXHQgICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cblx0ICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcblx0ICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcblx0ICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuXHQgIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuXHQgIGZvcihrZXkgaW4gc291cmNlKXtcblx0ICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuXHQgICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcblx0ICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG5cdCAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuXHQgICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcblx0ICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuXHQgICAgLy8gZXh0ZW5kIGdsb2JhbFxuXHQgICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuXHQgICAgLy8gZXhwb3J0XG5cdCAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuXHQgICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcblx0ICB9XG5cdH07XG5cdGdsb2JhbC5jb3JlID0gY29yZTtcblx0Ly8gdHlwZSBiaXRtYXBcblx0JGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcblx0JGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcblx0JGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcblx0JGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuXHQkZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcblx0JGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG5cdCRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuXHQkZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5cdG1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5cdGlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGRQICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpXG5cdCAgLCBjcmVhdGVEZXNjID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG5cdCAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcblx0fSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG5cdCAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcblx0ICByZXR1cm4gb2JqZWN0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGFuT2JqZWN0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIElFOF9ET01fREVGSU5FID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMilcblx0ICAsIHRvUHJpbWl0aXZlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNClcblx0ICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5cdGV4cG9ydHMuZiA9IF9fd2VicGFja19yZXF1aXJlX18oNCkgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcblx0ICBhbk9iamVjdChPKTtcblx0ICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG5cdCAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG5cdCAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcblx0ICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcblx0ICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cdCAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG5cdCAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuXHQgIHJldHVybiBPO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDQpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMikuZG9jdW1lbnRcblx0ICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcblx0ICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0Ly8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcblx0Ly8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG5cdCAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG5cdCAgdmFyIGZuLCB2YWw7XG5cdCAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuXHQgIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcblx0ICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuXHQgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuXHQgIHJldHVybiB7XG5cdCAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG5cdCAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG5cdCAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG5cdCAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgaGlkZSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KVxuXHQgICwgaGFzICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgU1JDICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNykoJ3NyYycpXG5cdCAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG5cdCAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG5cdCAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg3KS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG5cdH07XG5cblx0KG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuXHQgIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuXHQgIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuXHQgIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcblx0ICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuXHQgIGlmKE8gPT09IGdsb2JhbCl7XG5cdCAgICBPW2tleV0gPSB2YWw7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGlmKCFzYWZlKXtcblx0ICAgICAgZGVsZXRlIE9ba2V5XTtcblx0ICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuXHQgICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuXHQgICAgfVxuXHQgIH1cblx0Ly8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG5cdH0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuXHQgIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0dmFyIGlkID0gMFxuXHQgICwgcHggPSBNYXRoLnJhbmRvbSgpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG5cdCAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcblx0dmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuXHQgIGFGdW5jdGlvbihmbik7XG5cdCAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcblx0ICBzd2l0Y2gobGVuZ3RoKXtcblx0ICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcblx0ICAgIH07XG5cdCAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuXHQgICAgfTtcblx0ICB9XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuXHQgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgTUVUQSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KSgnbWV0YScpXG5cdCAgLCBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBoYXMgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIHNldERlc2MgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mXG5cdCAgLCBpZCAgICAgICA9IDA7XG5cdHZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIHRydWU7XG5cdH07XG5cdHZhciBGUkVFWkUgPSAhX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG5cdH0pO1xuXHR2YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcblx0ICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcblx0ICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuXHQgICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcblx0ICB9fSk7XG5cdH07XG5cdHZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG5cdCAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuXHQgIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcblx0ICBpZighaGFzKGl0LCBNRVRBKSl7XG5cdCAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuXHQgICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcblx0ICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG5cdCAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG5cdCAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuXHQgICAgc2V0TWV0YShpdCk7XG5cdCAgLy8gcmV0dXJuIG9iamVjdCBJRFxuXHQgIH0gcmV0dXJuIGl0W01FVEFdLmk7XG5cdH07XG5cdHZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG5cdCAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuXHQgICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3Rcblx0ICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuXHQgICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcblx0ICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuXHQgICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcblx0ICAgIHNldE1ldGEoaXQpO1xuXHQgIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG5cdCAgfSByZXR1cm4gaXRbTUVUQV0udztcblx0fTtcblx0Ly8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG5cdHZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXHR2YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIEtFWTogICAgICBNRVRBLFxuXHQgIE5FRUQ6ICAgICBmYWxzZSxcblx0ICBmYXN0S2V5OiAgZmFzdEtleSxcblx0ICBnZXRXZWFrOiAgZ2V0V2Vhayxcblx0ICBvbkZyZWV6ZTogb25GcmVlemVcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcblx0ICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuXHQgIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBkZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmZcblx0ICAsIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIFRBRyA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCd0b1N0cmluZ1RhZycpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG5cdCAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBzdG9yZSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSkoJ3drcycpXG5cdCAgLCB1aWQgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNylcblx0ICAsIFN5bWJvbCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLlN5bWJvbFxuXHQgICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxuXHR2YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuXHQgIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuXHQgICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcblx0fTtcblxuXHQkZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG4vKioqLyB9LFxuLyogMjQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdGV4cG9ydHMuZiA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xuXG4vKioqLyB9LFxuLyogMjUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnbG9iYWwgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGNvcmUgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KVxuXHQgICwgTElCUkFSWSAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KVxuXHQgICwgd2tzRXh0ICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KVxuXHQgICwgZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmY7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG5cdCAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcblx0ICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDI2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG4vKioqLyB9LFxuLyogMjcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnZXRLZXlzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KVxuXHQgICwgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG5cdCAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG5cdCAgICAsIGtleXMgICA9IGdldEtleXMoTylcblx0ICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcblx0ICAgICwgaW5kZXggID0gMFxuXHQgICAgLCBrZXk7XG5cdCAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDI4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcblx0dmFyICRrZXlzICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSlcblx0ICAsIGVudW1CdWdLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuXHQgIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGhhcyAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIHRvSU9iamVjdCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCBhcnJheUluZGV4T2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KShmYWxzZSlcblx0ICAsIElFX1BST1RPICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpKCdJRV9QUk9UTycpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG5cdCAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG5cdCAgICAsIGkgICAgICA9IDBcblx0ICAgICwgcmVzdWx0ID0gW11cblx0ICAgICwga2V5O1xuXHQgIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcblx0ICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG5cdCAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuXHQgICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcblx0ICB9XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDMwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3Ncblx0dmFyIElPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKVxuXHQgICwgZGVmaW5lZCA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAzMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncblx0dmFyIGNvZiA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDMyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMzMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMzQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcblx0Ly8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcblx0dmFyIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCB0b0xlbmd0aCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgdG9JbmRleCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuXHQgIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG5cdCAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuXHQgICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuXHQgICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG5cdCAgICAgICwgdmFsdWU7XG5cdCAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG5cdCAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG5cdCAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcblx0ICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG5cdCAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG5cdCAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcblx0ICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuXHQgICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAzNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gNy4xLjE1IFRvTGVuZ3RoXG5cdHZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KVxuXHQgICwgbWluICAgICAgID0gTWF0aC5taW47XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cdH07XG5cbi8qKiovIH0sXG4vKiAzNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gNy4xLjQgVG9JbnRlZ2VyXG5cdHZhciBjZWlsICA9IE1hdGguY2VpbFxuXHQgICwgZmxvb3IgPSBNYXRoLmZsb29yO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDM3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNilcblx0ICAsIG1heCAgICAgICA9IE1hdGgubWF4XG5cdCAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcblx0ICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG5cdCAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAzOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIHNoYXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpKCdrZXlzJylcblx0ICAsIHVpZCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG5cdCAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDM5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5cdG1vZHVsZS5leHBvcnRzID0gKFxuXHQgICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG5cdCkuc3BsaXQoJywnKTtcblxuLyoqKi8gfSxcbi8qIDQwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xuXHR2YXIgZ2V0S2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpXG5cdCAgLCBnT1BTICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MSlcblx0ICAsIHBJRSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuXHQgICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuXHQgIGlmKGdldFN5bWJvbHMpe1xuXHQgICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuXHQgICAgICAsIGlzRW51bSAgPSBwSUUuZlxuXHQgICAgICAsIGkgICAgICAgPSAwXG5cdCAgICAgICwga2V5O1xuXHQgICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG5cdCAgfSByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdGV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKiovIH0sXG4vKiA0MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0ZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKiovIH0sXG4vKiA0MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcblx0dmFyIGNvZiA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuXHQgIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuXHR2YXIgYW5PYmplY3QgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgZFBzICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KVxuXHQgICwgZW51bUJ1Z0tleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KVxuXHQgICwgSUVfUFJPVE8gICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KSgnSUVfUFJPVE8nKVxuXHQgICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG5cdCAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG5cdC8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcblx0dmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuXHQgIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG5cdCAgdmFyIGlmcmFtZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpKCdpZnJhbWUnKVxuXHQgICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcblx0ICAgICwgbHQgICAgID0gJzwnXG5cdCAgICAsIGd0ICAgICA9ICc+J1xuXHQgICAgLCBpZnJhbWVEb2N1bWVudDtcblx0ICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXHQgIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcblx0ICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuXHQgIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcblx0ICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHQgIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcblx0ICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG5cdCAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcblx0ICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcblx0ICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG5cdCAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuXHQgIHZhciByZXN1bHQ7XG5cdCAgaWYoTyAhPT0gbnVsbCl7XG5cdCAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG5cdCAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG5cdCAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcblx0ICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcblx0ICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuXHQgIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG5cdCAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xuXHR9O1xuXG5cbi8qKiovIH0sXG4vKiA0NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGRQICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KVxuXHQgICwgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgZ2V0S2V5cyAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCkgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG5cdCAgYW5PYmplY3QoTyk7XG5cdCAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcblx0ICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcblx0ICAgICwgaSA9IDBcblx0ICAgICwgUDtcblx0ICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG5cdCAgcmV0dXJuIE87XG5cdH07XG5cbi8qKiovIH0sXG4vKiA0NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuLyoqKi8gfSxcbi8qIDQ3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG5cdHZhciB0b0lPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgZ09QTiAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OCkuZlxuXHQgICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cblx0dmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcblx0ICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxuXHR2YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiBnT1BOKGl0KTtcblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG5cdCAgfVxuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcblx0ICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xuXHR9O1xuXG5cbi8qKiovIH0sXG4vKiA0OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuXHR2YXIgJGtleXMgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpXG5cdCAgLCBoaWRkZW5LZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSkuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cblx0ZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcblx0ICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA0OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIHBJRSAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Milcblx0ICAsIGNyZWF0ZURlc2MgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSlcblx0ICAsIHRvSU9iamVjdCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIHRvUHJpbWl0aXZlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNClcblx0ICAsIGhhcyAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgSUU4X0RPTV9ERUZJTkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKVxuXHQgICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5cdGV4cG9ydHMuZiA9IF9fd2VicGFja19yZXF1aXJlX18oNCkgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuXHQgIE8gPSB0b0lPYmplY3QoTyk7XG5cdCAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuXHQgIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG5cdCAgICByZXR1cm4gZ09QRChPLCBQKTtcblx0ICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cdCAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDUwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdC8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oNCksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IF9fd2VicGFja19yZXF1aXJlX18oOSkuZn0pO1xuXG4vKioqLyB9LFxuLyogNTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0Ly8gMTkuMS4yLjMgLyAxNS4yLjMuNyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDQpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnRpZXM6IF9fd2VicGFja19yZXF1aXJlX18oNDUpfSk7XG5cbi8qKiovIH0sXG4vKiA1MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuXHR2YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSkuZjtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuXHQgICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDUzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBjb3JlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KVxuXHQgICwgZmFpbHMgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcblx0ICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG5cdCAgICAsIGV4cCA9IHt9O1xuXHQgIGV4cFtLRVldID0gZXhlYyhmbik7XG5cdCAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcblx0JGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Y3JlYXRlOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KX0pO1xuXG4vKioqLyB9LFxuLyogNTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxuXHR2YXIgdG9PYmplY3QgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsICRnZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNTMpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcblx0ICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDU2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG5cdHZhciBkZWZpbmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG5cdHZhciBoYXMgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIHRvT2JqZWN0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIElFX1BST1RPICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOCkoJ0lFX1BST1RPJylcblx0ICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcblx0ICBPID0gdG9PYmplY3QoTyk7XG5cdCAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG5cdCAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG5cdCAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cdCAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDU4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcblx0dmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsICRrZXlzICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOCk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MykoJ2tleXMnLCBmdW5jdGlvbigpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcblx0ICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG5cdF9fd2VicGFja19yZXF1aXJlX18oNTMpKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywgZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyg0NykuZjtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA2MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjUgT2JqZWN0LmZyZWV6ZShPKVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgbWV0YSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKS5vbkZyZWV6ZTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG5cdCAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKG1ldGEoaXQpKSA6IGl0O1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNjEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4xNyBPYmplY3Quc2VhbChPKVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgbWV0YSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKS5vbkZyZWV6ZTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKSgnc2VhbCcsIGZ1bmN0aW9uKCRzZWFsKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gc2VhbChpdCl7XG5cdCAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwobWV0YShpdCkpIDogaXQ7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA2MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjE1IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhPKVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgbWV0YSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKS5vbkZyZWV6ZTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKSgncHJldmVudEV4dGVuc2lvbnMnLCBmdW5jdGlvbigkcHJldmVudEV4dGVuc2lvbnMpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhpdCl7XG5cdCAgICByZXR1cm4gJHByZXZlbnRFeHRlbnNpb25zICYmIGlzT2JqZWN0KGl0KSA/ICRwcmV2ZW50RXh0ZW5zaW9ucyhtZXRhKGl0KSkgOiBpdDtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDYzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMTIgT2JqZWN0LmlzRnJvemVuKE8pXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNTMpKCdpc0Zyb3plbicsIGZ1bmN0aW9uKCRpc0Zyb3plbil7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGlzRnJvemVuKGl0KXtcblx0ICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNGcm96ZW4gPyAkaXNGcm96ZW4oaXQpIDogZmFsc2UgOiB0cnVlO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNjQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4xMyBPYmplY3QuaXNTZWFsZWQoTylcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MykoJ2lzU2VhbGVkJywgZnVuY3Rpb24oJGlzU2VhbGVkKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gaXNTZWFsZWQoaXQpe1xuXHQgICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc1NlYWxlZCA/ICRpc1NlYWxlZChpdCkgOiBmYWxzZSA6IHRydWU7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA2NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjExIE9iamVjdC5pc0V4dGVuc2libGUoTylcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MykoJ2lzRXh0ZW5zaWJsZScsIGZ1bmN0aW9uKCRpc0V4dGVuc2libGUpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpe1xuXHQgICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKGl0KSA6IHRydWUgOiBmYWxzZTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDY2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDY3KX0pO1xuXG4vKioqLyB9LFxuLyogNjcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxuXHR2YXIgZ2V0S2V5cyAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KVxuXHQgICwgZ09QUyAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKVxuXHQgICwgcElFICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKVxuXHQgICwgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgSU9iamVjdCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKVxuXHQgICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG5cdC8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxuXHRtb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IF9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICB2YXIgQSA9IHt9XG5cdCAgICAsIEIgPSB7fVxuXHQgICAgLCBTID0gU3ltYm9sKClcblx0ICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG5cdCAgQVtTXSA9IDc7XG5cdCAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuXHQgIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xuXHR9KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0ICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG5cdCAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgLCBpbmRleCA9IDFcblx0ICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuXHQgICAgLCBpc0VudW0gICAgID0gcElFLmY7XG5cdCAgd2hpbGUoYUxlbiA+IGluZGV4KXtcblx0ICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcblx0ICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG5cdCAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcblx0ICAgICAgLCBqICAgICAgPSAwXG5cdCAgICAgICwga2V5O1xuXHQgICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcblx0ICB9IHJldHVybiBUO1xuXHR9IDogJGFzc2lnbjtcblxuLyoqKi8gfSxcbi8qIDY4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjMuMTAgT2JqZWN0LmlzKHZhbHVlMSwgdmFsdWUyKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2lzOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDY5KX0pO1xuXG4vKioqLyB9LFxuLyogNjkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIDcuMi45IFNhbWVWYWx1ZSh4LCB5KVxuXHRtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KXtcblx0ICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDcwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDcxKS5zZXR9KTtcblxuLyoqKi8gfSxcbi8qIDcxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cblx0LyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdHZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcblx0ICBhbk9iamVjdChPKTtcblx0ICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHQgICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgc2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCkoRnVuY3Rpb24uY2FsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyg0OSkuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcblx0ICAgICAgICBzZXQodGVzdCwgW10pO1xuXHQgICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuXHQgICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cblx0ICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcblx0ICAgICAgICBjaGVjayhPLCBwcm90byk7XG5cdCAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcblx0ICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG5cdCAgICAgICAgcmV0dXJuIE87XG5cdCAgICAgIH07XG5cdCAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuXHQgIGNoZWNrOiBjaGVja1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNzIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG5cdHZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3Mylcblx0ICAsIHRlc3QgICAgPSB7fTtcblx0dGVzdFtfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5cdGlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuXHQgIF9fd2VicGFja19yZXF1aXJlX18oMTYpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG5cdCAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG5cdCAgfSwgdHJ1ZSk7XG5cdH1cblxuLyoqKi8gfSxcbi8qIDczICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxuXHR2YXIgY29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMilcblx0ICAsIFRBRyA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCd0b1N0cmluZ1RhZycpXG5cdCAgLy8gRVMzIHdyb25nIGhlcmVcblx0ICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5cdC8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG5cdHZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuIGl0W2tleV07XG5cdCAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHZhciBPLCBULCBCO1xuXHQgIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuXHQgICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG5cdCAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG5cdCAgICAvLyBidWlsdGluVGFnIGNhc2Vcblx0ICAgIDogQVJHID8gY29mKE8pXG5cdCAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG5cdCAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDc0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4yLjMuMiAvIDE1LjMuNC41IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKHRoaXNBcmcsIGFyZ3MuLi4pXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCwgJ0Z1bmN0aW9uJywge2JpbmQ6IF9fd2VicGFja19yZXF1aXJlX18oNzUpfSk7XG5cbi8qKiovIH0sXG4vKiA3NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgYUZ1bmN0aW9uICA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCBpc09iamVjdCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGludm9rZSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc2KVxuXHQgICwgYXJyYXlTbGljZSA9IFtdLnNsaWNlXG5cdCAgLCBmYWN0b3JpZXMgID0ge307XG5cblx0dmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uKEYsIGxlbiwgYXJncyl7XG5cdCAgaWYoIShsZW4gaW4gZmFjdG9yaWVzKSl7XG5cdCAgICBmb3IodmFyIG4gPSBbXSwgaSA9IDA7IGkgPCBsZW47IGkrKyluW2ldID0gJ2FbJyArIGkgKyAnXSc7XG5cdCAgICBmYWN0b3JpZXNbbGVuXSA9IEZ1bmN0aW9uKCdGLGEnLCAncmV0dXJuIG5ldyBGKCcgKyBuLmpvaW4oJywnKSArICcpJyk7XG5cdCAgfSByZXR1cm4gZmFjdG9yaWVzW2xlbl0oRiwgYXJncyk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiwgYXJncy4uLiAqLyl7XG5cdCAgdmFyIGZuICAgICAgID0gYUZ1bmN0aW9uKHRoaXMpXG5cdCAgICAsIHBhcnRBcmdzID0gYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cdCAgdmFyIGJvdW5kID0gZnVuY3Rpb24oLyogYXJncy4uLiAqLyl7XG5cdCAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5cdCAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuXHQgIH07XG5cdCAgaWYoaXNPYmplY3QoZm4ucHJvdG90eXBlKSlib3VuZC5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG5cdCAgcmV0dXJuIGJvdW5kO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNzYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcblx0ICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG5cdCAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcblx0ICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuXHQgICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuXHQgICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuXHQgICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuXHQgICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuXHQgICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuXHQgICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuXHQgICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuXHQgICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuXHQgICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuXHQgIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDc3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZFAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSkuZlxuXHQgICwgY3JlYXRlRGVzYyA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpXG5cdCAgLCBoYXMgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgRlByb3RvICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZVxuXHQgICwgbmFtZVJFICAgICA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopL1xuXHQgICwgTkFNRSAgICAgICA9ICduYW1lJztcblxuXHR2YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuXHQgIHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdC8vIDE5LjIuNC4yIG5hbWVcblx0TkFNRSBpbiBGUHJvdG8gfHwgX193ZWJwYWNrX3JlcXVpcmVfXyg0KSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcblx0ICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbigpe1xuXHQgICAgdHJ5IHtcblx0ICAgICAgdmFyIHRoYXQgPSB0aGlzXG5cdCAgICAgICAgLCBuYW1lID0gKCcnICsgdGhhdCkubWF0Y2gobmFtZVJFKVsxXTtcblx0ICAgICAgaGFzKHRoYXQsIE5BTUUpIHx8ICFpc0V4dGVuc2libGUodGhhdCkgfHwgZFAodGhhdCwgTkFNRSwgY3JlYXRlRGVzYyg1LCBuYW1lKSk7XG5cdCAgICAgIHJldHVybiBuYW1lO1xuXHQgICAgfSBjYXRjaChlKXtcblx0ICAgICAgcmV0dXJuICcnO1xuXHQgICAgfVxuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiA3OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgaXNPYmplY3QgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgZ2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICwgSEFTX0lOU1RBTkNFICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnaGFzSW5zdGFuY2UnKVxuXHQgICwgRnVuY3Rpb25Qcm90byAgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cdC8vIDE5LjIuMy42IEZ1bmN0aW9uLnByb3RvdHlwZVtAQGhhc0luc3RhbmNlXShWKVxuXHRpZighKEhBU19JTlNUQU5DRSBpbiBGdW5jdGlvblByb3RvKSlfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmYoRnVuY3Rpb25Qcm90bywgSEFTX0lOU1RBTkNFLCB7dmFsdWU6IGZ1bmN0aW9uKE8pe1xuXHQgIGlmKHR5cGVvZiB0aGlzICE9ICdmdW5jdGlvbicgfHwgIWlzT2JqZWN0KE8pKXJldHVybiBmYWxzZTtcblx0ICBpZighaXNPYmplY3QodGhpcy5wcm90b3R5cGUpKXJldHVybiBPIGluc3RhbmNlb2YgdGhpcztcblx0ICAvLyBmb3IgZW52aXJvbm1lbnQgdy9vIG5hdGl2ZSBgQEBoYXNJbnN0YW5jZWAgbG9naWMgZW5vdWdoIGBpbnN0YW5jZW9mYCwgYnV0IGFkZCB0aGlzOlxuXHQgIHdoaWxlKE8gPSBnZXRQcm90b3R5cGVPZihPKSlpZih0aGlzLnByb3RvdHlwZSA9PT0gTylyZXR1cm4gdHJ1ZTtcblx0ICByZXR1cm4gZmFsc2U7XG5cdH19KTtcblxuLyoqKi8gfSxcbi8qIDc5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBnbG9iYWwgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGhhcyAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgY29mICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKVxuXHQgICwgaW5oZXJpdElmUmVxdWlyZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgwKVxuXHQgICwgdG9QcmltaXRpdmUgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KVxuXHQgICwgZmFpbHMgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCBnT1BOICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDgpLmZcblx0ICAsIGdPUEQgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSkuZlxuXHQgICwgZFAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmZcblx0ICAsICR0cmltICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4MSkudHJpbVxuXHQgICwgTlVNQkVSICAgICAgICAgICAgPSAnTnVtYmVyJ1xuXHQgICwgJE51bWJlciAgICAgICAgICAgPSBnbG9iYWxbTlVNQkVSXVxuXHQgICwgQmFzZSAgICAgICAgICAgICAgPSAkTnVtYmVyXG5cdCAgLCBwcm90byAgICAgICAgICAgICA9ICROdW1iZXIucHJvdG90eXBlXG5cdCAgLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG5cdCAgLCBCUk9LRU5fQ09GICAgICAgICA9IGNvZihfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KShwcm90bykpID09IE5VTUJFUlxuXHQgICwgVFJJTSAgICAgICAgICAgICAgPSAndHJpbScgaW4gU3RyaW5nLnByb3RvdHlwZTtcblxuXHQvLyA3LjEuMyBUb051bWJlcihhcmd1bWVudClcblx0dmFyIHRvTnVtYmVyID0gZnVuY3Rpb24oYXJndW1lbnQpe1xuXHQgIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG5cdCAgaWYodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIpe1xuXHQgICAgaXQgPSBUUklNID8gaXQudHJpbSgpIDogJHRyaW0oaXQsIDMpO1xuXHQgICAgdmFyIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKVxuXHQgICAgICAsIHRoaXJkLCByYWRpeCwgbWF4Q29kZTtcblx0ICAgIGlmKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpe1xuXHQgICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG5cdCAgICAgIGlmKHRoaXJkID09PSA4OCB8fCB0aGlyZCA9PT0gMTIwKXJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcblx0ICAgIH0gZWxzZSBpZihmaXJzdCA9PT0gNDgpe1xuXHQgICAgICBzd2l0Y2goaXQuY2hhckNvZGVBdCgxKSl7XG5cdCAgICAgICAgY2FzZSA2NiA6IGNhc2UgOTggIDogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMGJbMDFdKyQvaVxuXHQgICAgICAgIGNhc2UgNzkgOiBjYXNlIDExMSA6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBvWzAtN10rJC9pXG5cdCAgICAgICAgZGVmYXVsdCA6IHJldHVybiAraXQ7XG5cdCAgICAgIH1cblx0ICAgICAgZm9yKHZhciBkaWdpdHMgPSBpdC5zbGljZSgyKSwgaSA9IDAsIGwgPSBkaWdpdHMubGVuZ3RoLCBjb2RlOyBpIDwgbDsgaSsrKXtcblx0ICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaSk7XG5cdCAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG5cdCAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcblx0ICAgICAgICBpZihjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpcmV0dXJuIE5hTjtcblx0ICAgICAgfSByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG5cdCAgICB9XG5cdCAgfSByZXR1cm4gK2l0O1xuXHR9O1xuXG5cdGlmKCEkTnVtYmVyKCcgMG8xJykgfHwgISROdW1iZXIoJzBiMScpIHx8ICROdW1iZXIoJysweDEnKSl7XG5cdCAgJE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSl7XG5cdCAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZVxuXHQgICAgICAsIHRoYXQgPSB0aGlzO1xuXHQgICAgcmV0dXJuIHRoYXQgaW5zdGFuY2VvZiAkTnVtYmVyXG5cdCAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuXHQgICAgICAmJiAoQlJPS0VOX0NPRiA/IGZhaWxzKGZ1bmN0aW9uKCl7IHByb3RvLnZhbHVlT2YuY2FsbCh0aGF0KTsgfSkgOiBjb2YodGhhdCkgIT0gTlVNQkVSKVxuXHQgICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UodG9OdW1iZXIoaXQpKSwgdGhhdCwgJE51bWJlcikgOiB0b051bWJlcihpdCk7XG5cdCAgfTtcblx0ICBmb3IodmFyIGtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpID8gZ09QTihCYXNlKSA6IChcblx0ICAgIC8vIEVTMzpcblx0ICAgICdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSwnICtcblx0ICAgIC8vIEVTNiAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTNiBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuXHQgICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcblx0ICAgICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyJ1xuXHQgICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspe1xuXHQgICAgaWYoaGFzKEJhc2UsIGtleSA9IGtleXNbal0pICYmICFoYXMoJE51bWJlciwga2V5KSl7XG5cdCAgICAgIGRQKCROdW1iZXIsIGtleSwgZ09QRChCYXNlLCBrZXkpKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgJE51bWJlci5wcm90b3R5cGUgPSBwcm90bztcblx0ICBwcm90by5jb25zdHJ1Y3RvciA9ICROdW1iZXI7XG5cdCAgX193ZWJwYWNrX3JlcXVpcmVfXygxNikoZ2xvYmFsLCBOVU1CRVIsICROdW1iZXIpO1xuXHR9XG5cbi8qKiovIH0sXG4vKiA4MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGlzT2JqZWN0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIHNldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3MSkuc2V0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIHRhcmdldCwgQyl7XG5cdCAgdmFyIFAsIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG5cdCAgaWYoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZil7XG5cdCAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcblx0ICB9IHJldHVybiB0aGF0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogODEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgZGVmaW5lZCA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpXG5cdCAgLCBmYWlscyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgc3BhY2VzICA9IF9fd2VicGFja19yZXF1aXJlX18oODIpXG5cdCAgLCBzcGFjZSAgID0gJ1snICsgc3BhY2VzICsgJ10nXG5cdCAgLCBub24gICAgID0gJ1xcdTIwMGJcXHUwMDg1J1xuXHQgICwgbHRyaW0gICA9IFJlZ0V4cCgnXicgKyBzcGFjZSArIHNwYWNlICsgJyonKVxuXHQgICwgcnRyaW0gICA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cblx0dmFyIGV4cG9ydGVyID0gZnVuY3Rpb24oS0VZLCBleGVjLCBBTElBUyl7XG5cdCAgdmFyIGV4cCAgID0ge307XG5cdCAgdmFyIEZPUkNFID0gZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG5cdCAgfSk7XG5cdCAgdmFyIGZuID0gZXhwW0tFWV0gPSBGT1JDRSA/IGV4ZWModHJpbSkgOiBzcGFjZXNbS0VZXTtcblx0ICBpZihBTElBUylleHBbQUxJQVNdID0gZm47XG5cdCAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRSwgJ1N0cmluZycsIGV4cCk7XG5cdH07XG5cblx0Ly8gMSAtPiBTdHJpbmcjdHJpbUxlZnRcblx0Ly8gMiAtPiBTdHJpbmcjdHJpbVJpZ2h0XG5cdC8vIDMgLT4gU3RyaW5nI3RyaW1cblx0dmFyIHRyaW0gPSBleHBvcnRlci50cmltID0gZnVuY3Rpb24oc3RyaW5nLCBUWVBFKXtcblx0ICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcblx0ICBpZihUWVBFICYgMSlzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuXHQgIGlmKFRZUEUgJiAyKXN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG5cdCAgcmV0dXJuIHN0cmluZztcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVyO1xuXG4vKioqLyB9LFxuLyogODIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyArXG5cdCAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuXG4vKioqLyB9LFxuLyogODMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvSW50ZWdlciAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpXG5cdCAgLCBhTnVtYmVyVmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDg0KVxuXHQgICwgcmVwZWF0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NSlcblx0ICAsICR0b0ZpeGVkICAgICA9IDEuLnRvRml4ZWRcblx0ICAsIGZsb29yICAgICAgICA9IE1hdGguZmxvb3Jcblx0ICAsIGRhdGEgICAgICAgICA9IFswLCAwLCAwLCAwLCAwLCAwXVxuXHQgICwgRVJST1IgICAgICAgID0gJ051bWJlci50b0ZpeGVkOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnXG5cdCAgLCBaRVJPICAgICAgICAgPSAnMCc7XG5cblx0dmFyIG11bHRpcGx5ID0gZnVuY3Rpb24obiwgYyl7XG5cdCAgdmFyIGkgID0gLTFcblx0ICAgICwgYzIgPSBjO1xuXHQgIHdoaWxlKCsraSA8IDYpe1xuXHQgICAgYzIgKz0gbiAqIGRhdGFbaV07XG5cdCAgICBkYXRhW2ldID0gYzIgJSAxZTc7XG5cdCAgICBjMiA9IGZsb29yKGMyIC8gMWU3KTtcblx0ICB9XG5cdH07XG5cdHZhciBkaXZpZGUgPSBmdW5jdGlvbihuKXtcblx0ICB2YXIgaSA9IDZcblx0ICAgICwgYyA9IDA7XG5cdCAgd2hpbGUoLS1pID49IDApe1xuXHQgICAgYyArPSBkYXRhW2ldO1xuXHQgICAgZGF0YVtpXSA9IGZsb29yKGMgLyBuKTtcblx0ICAgIGMgPSAoYyAlIG4pICogMWU3O1xuXHQgIH1cblx0fTtcblx0dmFyIG51bVRvU3RyaW5nID0gZnVuY3Rpb24oKXtcblx0ICB2YXIgaSA9IDZcblx0ICAgICwgcyA9ICcnO1xuXHQgIHdoaWxlKC0taSA+PSAwKXtcblx0ICAgIGlmKHMgIT09ICcnIHx8IGkgPT09IDAgfHwgZGF0YVtpXSAhPT0gMCl7XG5cdCAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaV0pO1xuXHQgICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKFpFUk8sIDcgLSB0Lmxlbmd0aCkgKyB0O1xuXHQgICAgfVxuXHQgIH0gcmV0dXJuIHM7XG5cdH07XG5cdHZhciBwb3cgPSBmdW5jdGlvbih4LCBuLCBhY2Mpe1xuXHQgIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcblx0fTtcblx0dmFyIGxvZyA9IGZ1bmN0aW9uKHgpe1xuXHQgIHZhciBuICA9IDBcblx0ICAgICwgeDIgPSB4O1xuXHQgIHdoaWxlKHgyID49IDQwOTYpe1xuXHQgICAgbiArPSAxMjtcblx0ICAgIHgyIC89IDQwOTY7XG5cdCAgfVxuXHQgIHdoaWxlKHgyID49IDIpe1xuXHQgICAgbiAgKz0gMTtcblx0ICAgIHgyIC89IDI7XG5cdCAgfSByZXR1cm4gbjtcblx0fTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICghISR0b0ZpeGVkICYmIChcblx0ICAwLjAwMDA4LnRvRml4ZWQoMykgIT09ICcwLjAwMCcgfHxcblx0ICAwLjkudG9GaXhlZCgwKSAhPT0gJzEnIHx8XG5cdCAgMS4yNTUudG9GaXhlZCgyKSAhPT0gJzEuMjUnIHx8XG5cdCAgMTAwMDAwMDAwMDAwMDAwMDEyOC4udG9GaXhlZCgwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnXG5cdCkgfHwgIV9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuXHQgICR0b0ZpeGVkLmNhbGwoe30pO1xuXHR9KSksICdOdW1iZXInLCB7XG5cdCAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cyl7XG5cdCAgICB2YXIgeCA9IGFOdW1iZXJWYWx1ZSh0aGlzLCBFUlJPUilcblx0ICAgICAgLCBmID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKVxuXHQgICAgICAsIHMgPSAnJ1xuXHQgICAgICAsIG0gPSBaRVJPXG5cdCAgICAgICwgZSwgeiwgaiwgaztcblx0ICAgIGlmKGYgPCAwIHx8IGYgPiAyMCl0aHJvdyBSYW5nZUVycm9yKEVSUk9SKTtcblx0ICAgIGlmKHggIT0geClyZXR1cm4gJ05hTic7XG5cdCAgICBpZih4IDw9IC0xZTIxIHx8IHggPj0gMWUyMSlyZXR1cm4gU3RyaW5nKHgpO1xuXHQgICAgaWYoeCA8IDApe1xuXHQgICAgICBzID0gJy0nO1xuXHQgICAgICB4ID0gLXg7XG5cdCAgICB9XG5cdCAgICBpZih4ID4gMWUtMjEpe1xuXHQgICAgICBlID0gbG9nKHggKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuXHQgICAgICB6ID0gZSA8IDAgPyB4ICogcG93KDIsIC1lLCAxKSA6IHggLyBwb3coMiwgZSwgMSk7XG5cdCAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcblx0ICAgICAgZSA9IDUyIC0gZTtcblx0ICAgICAgaWYoZSA+IDApe1xuXHQgICAgICAgIG11bHRpcGx5KDAsIHopO1xuXHQgICAgICAgIGogPSBmO1xuXHQgICAgICAgIHdoaWxlKGogPj0gNyl7XG5cdCAgICAgICAgICBtdWx0aXBseSgxZTcsIDApO1xuXHQgICAgICAgICAgaiAtPSA3O1xuXHQgICAgICAgIH1cblx0ICAgICAgICBtdWx0aXBseShwb3coMTAsIGosIDEpLCAwKTtcblx0ICAgICAgICBqID0gZSAtIDE7XG5cdCAgICAgICAgd2hpbGUoaiA+PSAyMyl7XG5cdCAgICAgICAgICBkaXZpZGUoMSA8PCAyMyk7XG5cdCAgICAgICAgICBqIC09IDIzO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBkaXZpZGUoMSA8PCBqKTtcblx0ICAgICAgICBtdWx0aXBseSgxLCAxKTtcblx0ICAgICAgICBkaXZpZGUoMik7XG5cdCAgICAgICAgbSA9IG51bVRvU3RyaW5nKCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgbXVsdGlwbHkoMCwgeik7XG5cdCAgICAgICAgbXVsdGlwbHkoMSA8PCAtZSwgMCk7XG5cdCAgICAgICAgbSA9IG51bVRvU3RyaW5nKCkgKyByZXBlYXQuY2FsbChaRVJPLCBmKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgaWYoZiA+IDApe1xuXHQgICAgICBrID0gbS5sZW5ndGg7XG5cdCAgICAgIG0gPSBzICsgKGsgPD0gZiA/ICcwLicgKyByZXBlYXQuY2FsbChaRVJPLCBmIC0gaykgKyBtIDogbS5zbGljZSgwLCBrIC0gZikgKyAnLicgKyBtLnNsaWNlKGsgLSBmKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBtID0gcyArIG07XG5cdCAgICB9IHJldHVybiBtO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiA4NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGNvZiA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBtc2cpe1xuXHQgIGlmKHR5cGVvZiBpdCAhPSAnbnVtYmVyJyAmJiBjb2YoaXQpICE9ICdOdW1iZXInKXRocm93IFR5cGVFcnJvcihtc2cpO1xuXHQgIHJldHVybiAraXQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA4NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNilcblx0ICAsIGRlZmluZWQgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KXtcblx0ICB2YXIgc3RyID0gU3RyaW5nKGRlZmluZWQodGhpcykpXG5cdCAgICAsIHJlcyA9ICcnXG5cdCAgICAsIG4gICA9IHRvSW50ZWdlcihjb3VudCk7XG5cdCAgaWYobiA8IDAgfHwgbiA9PSBJbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XG5cdCAgZm9yKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpaWYobiAmIDEpcmVzICs9IHN0cjtcblx0ICByZXR1cm4gcmVzO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogODYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRmYWlscyAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsIGFOdW1iZXJWYWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oODQpXG5cdCAgLCAkdG9QcmVjaXNpb24gPSAxLi50b1ByZWNpc2lvbjtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICgkZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAvLyBJRTctXG5cdCAgcmV0dXJuICR0b1ByZWNpc2lvbi5jYWxsKDEsIHVuZGVmaW5lZCkgIT09ICcxJztcblx0fSkgfHwgISRmYWlscyhmdW5jdGlvbigpe1xuXHQgIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG5cdCAgJHRvUHJlY2lzaW9uLmNhbGwoe30pO1xuXHR9KSksICdOdW1iZXInLCB7XG5cdCAgdG9QcmVjaXNpb246IGZ1bmN0aW9uIHRvUHJlY2lzaW9uKHByZWNpc2lvbil7XG5cdCAgICB2YXIgdGhhdCA9IGFOdW1iZXJWYWx1ZSh0aGlzLCAnTnVtYmVyI3RvUHJlY2lzaW9uOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcblx0ICAgIHJldHVybiBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/ICR0b1ByZWNpc2lvbi5jYWxsKHRoYXQpIDogJHRvUHJlY2lzaW9uLmNhbGwodGhhdCwgcHJlY2lzaW9uKTsgXG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDg3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7RVBTSUxPTjogTWF0aC5wb3coMiwgLTUyKX0pO1xuXG4vKioqLyB9LFxuLyogODggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjEuMi4yIE51bWJlci5pc0Zpbml0ZShudW1iZXIpXG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBfaXNGaW5pdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLmlzRmluaXRlO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuXHQgIGlzRmluaXRlOiBmdW5jdGlvbiBpc0Zpbml0ZShpdCl7XG5cdCAgICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIF9pc0Zpbml0ZShpdCk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDg5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge2lzSW50ZWdlcjogX193ZWJwYWNrX3JlcXVpcmVfXyg5MCl9KTtcblxuLyoqKi8gfSxcbi8qIDkwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGZsb29yICAgID0gTWF0aC5mbG9vcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0ludGVnZXIoaXQpe1xuXHQgIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogOTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcblx0ICBpc05hTjogZnVuY3Rpb24gaXNOYU4obnVtYmVyKXtcblx0ICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiA5MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMS4yLjUgTnVtYmVyLmlzU2FmZUludGVnZXIobnVtYmVyKVxuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgaXNJbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5MClcblx0ICAsIGFicyAgICAgICA9IE1hdGguYWJzO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuXHQgIGlzU2FmZUludGVnZXI6IGZ1bmN0aW9uIGlzU2FmZUludGVnZXIobnVtYmVyKXtcblx0ICAgIHJldHVybiBpc0ludGVnZXIobnVtYmVyKSAmJiBhYnMobnVtYmVyKSA8PSAweDFmZmZmZmZmZmZmZmZmO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiA5MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMS4yLjYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge01BWF9TQUZFX0lOVEVHRVI6IDB4MWZmZmZmZmZmZmZmZmZ9KTtcblxuLyoqKi8gfSxcbi8qIDk0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4xLjIuMTAgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge01JTl9TQUZFX0lOVEVHRVI6IC0weDFmZmZmZmZmZmZmZmZmfSk7XG5cbi8qKiovIH0sXG4vKiA5NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHBhcnNlRmxvYXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDk2KTtcblx0Ly8gMjAuMS4yLjEyIE51bWJlci5wYXJzZUZsb2F0KHN0cmluZylcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTnVtYmVyLnBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQpLCAnTnVtYmVyJywge3BhcnNlRmxvYXQ6ICRwYXJzZUZsb2F0fSk7XG5cbi8qKiovIH0sXG4vKiA5NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRwYXJzZUZsb2F0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5wYXJzZUZsb2F0XG5cdCAgLCAkdHJpbSAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oODEpLnRyaW07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSAxIC8gJHBhcnNlRmxvYXQoX193ZWJwYWNrX3JlcXVpcmVfXyg4MikgKyAnLTAnKSAhPT0gLUluZmluaXR5ID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHIpe1xuXHQgIHZhciBzdHJpbmcgPSAkdHJpbShTdHJpbmcoc3RyKSwgMylcblx0ICAgICwgcmVzdWx0ID0gJHBhcnNlRmxvYXQoc3RyaW5nKTtcblx0ICByZXR1cm4gcmVzdWx0ID09PSAwICYmIHN0cmluZy5jaGFyQXQoMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG5cdH0gOiAkcGFyc2VGbG9hdDtcblxuLyoqKi8gfSxcbi8qIDk3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHBhcnNlSW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5OCk7XG5cdC8vIDIwLjEuMi4xMyBOdW1iZXIucGFyc2VJbnQoc3RyaW5nLCByYWRpeClcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTnVtYmVyLnBhcnNlSW50ICE9ICRwYXJzZUludCksICdOdW1iZXInLCB7cGFyc2VJbnQ6ICRwYXJzZUludH0pO1xuXG4vKioqLyB9LFxuLyogOTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkcGFyc2VJbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLnBhcnNlSW50XG5cdCAgLCAkdHJpbSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgxKS50cmltXG5cdCAgLCB3cyAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgyKVxuXHQgICwgaGV4ICAgICAgID0gL15bXFwtK10/MFt4WF0vO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gJHBhcnNlSW50KHdzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdzICsgJzB4MTYnKSAhPT0gMjIgPyBmdW5jdGlvbiBwYXJzZUludChzdHIsIHJhZGl4KXtcblx0ICB2YXIgc3RyaW5nID0gJHRyaW0oU3RyaW5nKHN0ciksIDMpO1xuXHQgIHJldHVybiAkcGFyc2VJbnQoc3RyaW5nLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChzdHJpbmcpID8gMTYgOiAxMCkpO1xuXHR9IDogJHBhcnNlSW50O1xuXG4vKioqLyB9LFxuLyogOTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkcGFyc2VJbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDk4KTtcblx0Ly8gMTguMi41IHBhcnNlSW50KHN0cmluZywgcmFkaXgpXG5cdCRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5GICogKHBhcnNlSW50ICE9ICRwYXJzZUludCksIHtwYXJzZUludDogJHBhcnNlSW50fSk7XG5cbi8qKiovIH0sXG4vKiAxMDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRwYXJzZUZsb2F0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5Nik7XG5cdC8vIDE4LjIuNCBwYXJzZUZsb2F0KHN0cmluZylcblx0JGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkYgKiAocGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksIHtwYXJzZUZsb2F0OiAkcGFyc2VGbG9hdH0pO1xuXG4vKioqLyB9LFxuLyogMTAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMyBNYXRoLmFjb3NoKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgbG9nMXAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTAyKVxuXHQgICwgc3FydCAgICA9IE1hdGguc3FydFxuXHQgICwgJGFjb3NoICA9IE1hdGguYWNvc2g7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhY29zaFxuXHQgIC8vIFY4IGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM1MDlcblx0ICAmJiBNYXRoLmZsb29yKCRhY29zaChOdW1iZXIuTUFYX1ZBTFVFKSkgPT0gNzEwXG5cdCAgLy8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmFjb3NoKEluZmluaXR5KSAtPiBOYU4gXG5cdCAgJiYgJGFjb3NoKEluZmluaXR5KSA9PSBJbmZpbml0eVxuXHQpLCAnTWF0aCcsIHtcblx0ICBhY29zaDogZnVuY3Rpb24gYWNvc2goeCl7XG5cdCAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogeCA+IDk0OTA2MjY1LjYyNDI1MTU2XG5cdCAgICAgID8gTWF0aC5sb2coeCkgKyBNYXRoLkxOMlxuXHQgICAgICA6IGxvZzFwKHggLSAxICsgc3FydCh4IC0gMSkgKiBzcXJ0KHggKyAxKSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEwMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcblx0bW9kdWxlLmV4cG9ydHMgPSBNYXRoLmxvZzFwIHx8IGZ1bmN0aW9uIGxvZzFwKHgpe1xuXHQgIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IE1hdGgubG9nKDEgKyB4KTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEwMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjUgTWF0aC5hc2luaCh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRhc2luaCAgPSBNYXRoLmFzaW5oO1xuXG5cdGZ1bmN0aW9uIGFzaW5oKHgpe1xuXHQgIHJldHVybiAhaXNGaW5pdGUoeCA9ICt4KSB8fCB4ID09IDAgPyB4IDogeCA8IDAgPyAtYXNpbmgoLXgpIDogTWF0aC5sb2coeCArIE1hdGguc3FydCh4ICogeCArIDEpKTtcblx0fVxuXG5cdC8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hc2luaCgwKSAtPiAtMCBcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhc2luaCAmJiAxIC8gJGFzaW5oKDApID4gMCksICdNYXRoJywge2FzaW5oOiBhc2luaH0pO1xuXG4vKioqLyB9LFxuLyogMTA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuNyBNYXRoLmF0YW5oKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGF0YW5oICA9IE1hdGguYXRhbmg7XG5cblx0Ly8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmF0YW5oKC0wKSAtPiAwIFxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGF0YW5oICYmIDEgLyAkYXRhbmgoLTApIDwgMCksICdNYXRoJywge1xuXHQgIGF0YW5oOiBmdW5jdGlvbiBhdGFuaCh4KXtcblx0ICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IE1hdGgubG9nKCgxICsgeCkgLyAoMSAtIHgpKSAvIDI7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEwNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgc2lnbiAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTA2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgY2JydDogZnVuY3Rpb24gY2JydCh4KXtcblx0ICAgIHJldHVybiBzaWduKHggPSAreCkgKiBNYXRoLnBvdyhNYXRoLmFicyh4KSwgMSAvIDMpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcblx0bW9kdWxlLmV4cG9ydHMgPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24gc2lnbih4KXtcblx0ICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4xMSBNYXRoLmNsejMyKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgY2x6MzI6IGZ1bmN0aW9uIGNsejMyKHgpe1xuXHQgICAgcmV0dXJuICh4ID4+Pj0gMCkgPyAzMSAtIE1hdGguZmxvb3IoTWF0aC5sb2coeCArIDAuNSkgKiBNYXRoLkxPRzJFKSA6IDMyO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4xMiBNYXRoLmNvc2goeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIGNvc2g6IGZ1bmN0aW9uIGNvc2goeCl7XG5cdCAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGV4cG0xICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEwKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICgkZXhwbTEgIT0gTWF0aC5leHBtMSksICdNYXRoJywge2V4cG0xOiAkZXhwbTF9KTtcblxuLyoqKi8gfSxcbi8qIDExMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcblx0dmFyICRleHBtMSA9IE1hdGguZXhwbTE7XG5cdG1vZHVsZS5leHBvcnRzID0gKCEkZXhwbTFcblx0ICAvLyBPbGQgRkYgYnVnXG5cdCAgfHwgJGV4cG0xKDEwKSA+IDIyMDI1LjQ2NTc5NDgwNjcxOSB8fCAkZXhwbTEoMTApIDwgMjIwMjUuNDY1Nzk0ODA2NzE2NTE2OFxuXHQgIC8vIFRvciBCcm93c2VyIGJ1Z1xuXHQgIHx8ICRleHBtMSgtMmUtMTcpICE9IC0yZS0xN1xuXHQpID8gZnVuY3Rpb24gZXhwbTEoeCl7XG5cdCAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogeCA+IC0xZS02ICYmIHggPCAxZS02ID8geCArIHggKiB4IC8gMiA6IE1hdGguZXhwKHgpIC0gMTtcblx0fSA6ICRleHBtMTtcblxuLyoqKi8gfSxcbi8qIDExMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBzaWduICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwNilcblx0ICAsIHBvdyAgICAgICA9IE1hdGgucG93XG5cdCAgLCBFUFNJTE9OICAgPSBwb3coMiwgLTUyKVxuXHQgICwgRVBTSUxPTjMyID0gcG93KDIsIC0yMylcblx0ICAsIE1BWDMyICAgICA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpXG5cdCAgLCBNSU4zMiAgICAgPSBwb3coMiwgLTEyNik7XG5cblx0dmFyIHJvdW5kVGllc1RvRXZlbiA9IGZ1bmN0aW9uKG4pe1xuXHQgIHJldHVybiBuICsgMSAvIEVQU0lMT04gLSAxIC8gRVBTSUxPTjtcblx0fTtcblxuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICBmcm91bmQ6IGZ1bmN0aW9uIGZyb3VuZCh4KXtcblx0ICAgIHZhciAkYWJzICA9IE1hdGguYWJzKHgpXG5cdCAgICAgICwgJHNpZ24gPSBzaWduKHgpXG5cdCAgICAgICwgYSwgcmVzdWx0O1xuXHQgICAgaWYoJGFicyA8IE1JTjMyKXJldHVybiAkc2lnbiAqIHJvdW5kVGllc1RvRXZlbigkYWJzIC8gTUlOMzIgLyBFUFNJTE9OMzIpICogTUlOMzIgKiBFUFNJTE9OMzI7XG5cdCAgICBhID0gKDEgKyBFUFNJTE9OMzIgLyBFUFNJTE9OKSAqICRhYnM7XG5cdCAgICByZXN1bHQgPSBhIC0gKGEgLSAkYWJzKTtcblx0ICAgIGlmKHJlc3VsdCA+IE1BWDMyIHx8IHJlc3VsdCAhPSByZXN1bHQpcmV0dXJuICRzaWduICogSW5maW5pdHk7XG5cdCAgICByZXR1cm4gJHNpZ24gKiByZXN1bHQ7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDExMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjE3IE1hdGguaHlwb3QoW3ZhbHVlMVssIHZhbHVlMlssIOKApiBdXV0pXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgYWJzICAgICA9IE1hdGguYWJzO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICBoeXBvdDogZnVuY3Rpb24gaHlwb3QodmFsdWUxLCB2YWx1ZTIpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdCAgICB2YXIgc3VtICA9IDBcblx0ICAgICAgLCBpICAgID0gMFxuXHQgICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAgICwgbGFyZyA9IDBcblx0ICAgICAgLCBhcmcsIGRpdjtcblx0ICAgIHdoaWxlKGkgPCBhTGVuKXtcblx0ICAgICAgYXJnID0gYWJzKGFyZ3VtZW50c1tpKytdKTtcblx0ICAgICAgaWYobGFyZyA8IGFyZyl7XG5cdCAgICAgICAgZGl2ICA9IGxhcmcgLyBhcmc7XG5cdCAgICAgICAgc3VtICA9IHN1bSAqIGRpdiAqIGRpdiArIDE7XG5cdCAgICAgICAgbGFyZyA9IGFyZztcblx0ICAgICAgfSBlbHNlIGlmKGFyZyA+IDApe1xuXHQgICAgICAgIGRpdiAgPSBhcmcgLyBsYXJnO1xuXHQgICAgICAgIHN1bSArPSBkaXYgKiBkaXY7XG5cdCAgICAgIH0gZWxzZSBzdW0gKz0gYXJnO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGxhcmcgPT09IEluZmluaXR5ID8gSW5maW5pdHkgOiBsYXJnICogTWF0aC5zcXJ0KHN1bSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDExMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjE4IE1hdGguaW11bCh4LCB5KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRpbXVsICAgPSBNYXRoLmltdWw7XG5cblx0Ly8gc29tZSBXZWJLaXQgdmVyc2lvbnMgZmFpbHMgd2l0aCBiaWcgbnVtYmVycywgc29tZSBoYXMgd3JvbmcgYXJpdHlcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuICRpbXVsKDB4ZmZmZmZmZmYsIDUpICE9IC01IHx8ICRpbXVsLmxlbmd0aCAhPSAyO1xuXHR9KSwgJ01hdGgnLCB7XG5cdCAgaW11bDogZnVuY3Rpb24gaW11bCh4LCB5KXtcblx0ICAgIHZhciBVSU5UMTYgPSAweGZmZmZcblx0ICAgICAgLCB4biA9ICt4XG5cdCAgICAgICwgeW4gPSAreVxuXHQgICAgICAsIHhsID0gVUlOVDE2ICYgeG5cblx0ICAgICAgLCB5bCA9IFVJTlQxNiAmIHluO1xuXHQgICAgcmV0dXJuIDAgfCB4bCAqIHlsICsgKChVSU5UMTYgJiB4biA+Pj4gMTYpICogeWwgKyB4bCAqIChVSU5UMTYgJiB5biA+Pj4gMTYpIDw8IDE2ID4+PiAwKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTE0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMjEgTWF0aC5sb2cxMCh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIGxvZzEwOiBmdW5jdGlvbiBsb2cxMCh4KXtcblx0ICAgIHJldHVybiBNYXRoLmxvZyh4KSAvIE1hdGguTE4xMDtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTE1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge2xvZzFwOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwMil9KTtcblxuLyoqKi8gfSxcbi8qIDExNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjIyIE1hdGgubG9nMih4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIGxvZzI6IGZ1bmN0aW9uIGxvZzIoeCl7XG5cdCAgICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMjtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTE3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7c2lnbjogX193ZWJwYWNrX3JlcXVpcmVfXygxMDYpfSk7XG5cbi8qKiovIH0sXG4vKiAxMTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4zMCBNYXRoLnNpbmgoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBleHBtMSAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMTApXG5cdCAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cblx0Ly8gVjggbmVhciBDaHJvbWl1bSAzOCBoYXMgYSBwcm9ibGVtIHdpdGggdmVyeSBzbWFsbCBudW1iZXJzXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHJldHVybiAhTWF0aC5zaW5oKC0yZS0xNykgIT0gLTJlLTE3O1xuXHR9KSwgJ01hdGgnLCB7XG5cdCAgc2luaDogZnVuY3Rpb24gc2luaCh4KXtcblx0ICAgIHJldHVybiBNYXRoLmFicyh4ID0gK3gpIDwgMVxuXHQgICAgICA/IChleHBtMSh4KSAtIGV4cG0xKC14KSkgLyAyXG5cdCAgICAgIDogKGV4cCh4IC0gMSkgLSBleHAoLXggLSAxKSkgKiAoTWF0aC5FIC8gMik7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDExOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjMzIE1hdGgudGFuaCh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGV4cG0xICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExMClcblx0ICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgdGFuaDogZnVuY3Rpb24gdGFuaCh4KXtcblx0ICAgIHZhciBhID0gZXhwbTEoeCA9ICt4KVxuXHQgICAgICAsIGIgPSBleHBtMSgteCk7XG5cdCAgICByZXR1cm4gYSA9PSBJbmZpbml0eSA/IDEgOiBiID09IEluZmluaXR5ID8gLTEgOiAoYSAtIGIpIC8gKGV4cCh4KSArIGV4cCgteCkpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMjAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4zNCBNYXRoLnRydW5jKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKGl0KXtcblx0ICAgIHJldHVybiAoaXQgPiAwID8gTWF0aC5mbG9vciA6IE1hdGguY2VpbCkoaXQpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMjEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvSW5kZXggICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNylcblx0ICAsIGZyb21DaGFyQ29kZSAgID0gU3RyaW5nLmZyb21DaGFyQ29kZVxuXHQgICwgJGZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludDtcblxuXHQvLyBsZW5ndGggc2hvdWxkIGJlIDEsIG9sZCBGRiBwcm9ibGVtXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCEhJGZyb21Db2RlUG9pbnQgJiYgJGZyb21Db2RlUG9pbnQubGVuZ3RoICE9IDEpLCAnU3RyaW5nJywge1xuXHQgIC8vIDIxLjEuMi4yIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpXG5cdCAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24gZnJvbUNvZGVQb2ludCh4KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHQgICAgdmFyIHJlcyAgPSBbXVxuXHQgICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAgICwgaSAgICA9IDBcblx0ICAgICAgLCBjb2RlO1xuXHQgICAgd2hpbGUoYUxlbiA+IGkpe1xuXHQgICAgICBjb2RlID0gK2FyZ3VtZW50c1tpKytdO1xuXHQgICAgICBpZih0b0luZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSl0aHJvdyBSYW5nZUVycm9yKGNvZGUgKyAnIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnQnKTtcblx0ICAgICAgcmVzLnB1c2goY29kZSA8IDB4MTAwMDBcblx0ICAgICAgICA/IGZyb21DaGFyQ29kZShjb2RlKVxuXHQgICAgICAgIDogZnJvbUNoYXJDb2RlKCgoY29kZSAtPSAweDEwMDAwKSA+PiAxMCkgKyAweGQ4MDAsIGNvZGUgJSAweDQwMCArIDB4ZGMwMClcblx0ICAgICAgKTtcblx0ICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTIyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIHRvTGVuZ3RoICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnU3RyaW5nJywge1xuXHQgIC8vIDIxLjEuMi40IFN0cmluZy5yYXcoY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXG5cdCAgcmF3OiBmdW5jdGlvbiByYXcoY2FsbFNpdGUpe1xuXHQgICAgdmFyIHRwbCAgPSB0b0lPYmplY3QoY2FsbFNpdGUucmF3KVxuXHQgICAgICAsIGxlbiAgPSB0b0xlbmd0aCh0cGwubGVuZ3RoKVxuXHQgICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAgICwgcmVzICA9IFtdXG5cdCAgICAgICwgaSAgICA9IDA7XG5cdCAgICB3aGlsZShsZW4gPiBpKXtcblx0ICAgICAgcmVzLnB1c2goU3RyaW5nKHRwbFtpKytdKSk7XG5cdCAgICAgIGlmKGkgPCBhTGVuKXJlcy5wdXNoKFN0cmluZyhhcmd1bWVudHNbaV0pKTtcblx0ICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTIzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIDIxLjEuMy4yNSBTdHJpbmcucHJvdG90eXBlLnRyaW0oKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDgxKSgndHJpbScsIGZ1bmN0aW9uKCR0cmltKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gdHJpbSgpe1xuXHQgICAgcmV0dXJuICR0cmltKHRoaXMsIDMpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTI0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGF0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTI1KShmYWxzZSk7XG5cdCRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuXHQgIC8vIDIxLjEuMy4zIFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQocG9zKVxuXHQgIGNvZGVQb2ludEF0OiBmdW5jdGlvbiBjb2RlUG9pbnRBdChwb3Mpe1xuXHQgICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMjUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KVxuXHQgICwgZGVmaW5lZCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cdC8vIHRydWUgIC0+IFN0cmluZyNhdFxuXHQvLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuXHQgIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuXHQgICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcblx0ICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcblx0ICAgICAgLCBsID0gcy5sZW5ndGhcblx0ICAgICAgLCBhLCBiO1xuXHQgICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcblx0ICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG5cdCAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuXHQgICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuXHQgICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTI2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMS4xLjMuNiBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKHNlYXJjaFN0cmluZyBbLCBlbmRQb3NpdGlvbl0pXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvTGVuZ3RoICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCBjb250ZXh0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyNylcblx0ICAsIEVORFNfV0lUSCA9ICdlbmRzV2l0aCdcblx0ICAsICRlbmRzV2l0aCA9ICcnW0VORFNfV0lUSF07XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyOSkoRU5EU19XSVRIKSwgJ1N0cmluZycsIHtcblx0ICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi8pe1xuXHQgICAgdmFyIHRoYXQgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgRU5EU19XSVRIKVxuXHQgICAgICAsIGVuZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcblx0ICAgICAgLCBsZW4gICAgPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aClcblx0ICAgICAgLCBlbmQgICAgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogTWF0aC5taW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pXG5cdCAgICAgICwgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG5cdCAgICByZXR1cm4gJGVuZHNXaXRoXG5cdCAgICAgID8gJGVuZHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBlbmQpXG5cdCAgICAgIDogdGhhdC5zbGljZShlbmQgLSBzZWFyY2gubGVuZ3RoLCBlbmQpID09PSBzZWFyY2g7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEyNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaGVscGVyIGZvciBTdHJpbmcje3N0YXJ0c1dpdGgsIGVuZHNXaXRoLCBpbmNsdWRlc31cblx0dmFyIGlzUmVnRXhwID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjgpXG5cdCAgLCBkZWZpbmVkICA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgc2VhcmNoU3RyaW5nLCBOQU1FKXtcblx0ICBpZihpc1JlZ0V4cChzZWFyY2hTdHJpbmcpKXRocm93IFR5cGVFcnJvcignU3RyaW5nIycgKyBOQU1FICsgXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO1xuXHQgIHJldHVybiBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMjggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgY29mICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKVxuXHQgICwgTUFUQ0ggICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnbWF0Y2gnKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgdmFyIGlzUmVnRXhwO1xuXHQgIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEyOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIE1BVENIID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ21hdGNoJyk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcblx0ICB2YXIgcmUgPSAvLi87XG5cdCAgdHJ5IHtcblx0ICAgICcvLi8nW0tFWV0ocmUpO1xuXHQgIH0gY2F0Y2goZSl7XG5cdCAgICB0cnkge1xuXHQgICAgICByZVtNQVRDSF0gPSBmYWxzZTtcblx0ICAgICAgcmV0dXJuICEnLy4vJ1tLRVldKHJlKTtcblx0ICAgIH0gY2F0Y2goZil7IC8qIGVtcHR5ICovIH1cblx0ICB9IHJldHVybiB0cnVlO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTMwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGNvbnRleHQgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjcpXG5cdCAgLCBJTkNMVURFUyA9ICdpbmNsdWRlcyc7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyOSkoSU5DTFVERVMpLCAnU3RyaW5nJywge1xuXHQgIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XG5cdCAgICByZXR1cm4gISF+Y29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIElOQ0xVREVTKVxuXHQgICAgICAuaW5kZXhPZihzZWFyY2hTdHJpbmcsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTMxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG5cdCAgLy8gMjEuMS4zLjEzIFN0cmluZy5wcm90b3R5cGUucmVwZWF0KGNvdW50KVxuXHQgIHJlcGVhdDogX193ZWJwYWNrX3JlcXVpcmVfXyg4NSlcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMzIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIxLjEuMy4xOCBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIFssIHBvc2l0aW9uIF0pXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9MZW5ndGggICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgY29udGV4dCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyNylcblx0ICAsIFNUQVJUU19XSVRIID0gJ3N0YXJ0c1dpdGgnXG5cdCAgLCAkc3RhcnRzV2l0aCA9ICcnW1NUQVJUU19XSVRIXTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9fd2VicGFja19yZXF1aXJlX18oMTI5KShTVEFSVFNfV0lUSCksICdTdHJpbmcnLCB7XG5cdCAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XG5cdCAgICB2YXIgdGhhdCAgID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIFNUQVJUU19XSVRIKVxuXHQgICAgICAsIGluZGV4ICA9IHRvTGVuZ3RoKE1hdGgubWluKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0aGF0Lmxlbmd0aCkpXG5cdCAgICAgICwgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG5cdCAgICByZXR1cm4gJHN0YXJ0c1dpdGhcblx0ICAgICAgPyAkc3RhcnRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgaW5kZXgpXG5cdCAgICAgIDogdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMzMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRhdCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyNSkodHJ1ZSk7XG5cblx0Ly8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNCkoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuXHQgIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcblx0ICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuXHQvLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG5cdH0sIGZ1bmN0aW9uKCl7XG5cdCAgdmFyIE8gICAgID0gdGhpcy5fdFxuXHQgICAgLCBpbmRleCA9IHRoaXMuX2lcblx0ICAgICwgcG9pbnQ7XG5cdCAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcblx0ICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG5cdCAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG5cdCAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMzQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIExJQlJBUlkgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNilcblx0ICAsICRleHBvcnQgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgcmVkZWZpbmUgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KVxuXHQgICwgaGlkZSAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpXG5cdCAgLCBoYXMgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIEl0ZXJhdG9ycyAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzUpXG5cdCAgLCAkaXRlckNyZWF0ZSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTM2KVxuXHQgICwgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKVxuXHQgICwgZ2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICwgSVRFUkFUT1IgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnaXRlcmF0b3InKVxuXHQgICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuXHQgICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcblx0ICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG5cdCAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG5cdHZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuXHQgICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblx0ICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG5cdCAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG5cdCAgICBzd2l0Y2goa2luZCl7XG5cdCAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcblx0ICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcblx0ICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcblx0ICB9O1xuXHQgIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG5cdCAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuXHQgICAgLCBWQUxVRVNfQlVHID0gZmFsc2Vcblx0ICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG5cdCAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cblx0ICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG5cdCAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG5cdCAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG5cdCAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG5cdCAgLy8gRml4IG5hdGl2ZVxuXHQgIGlmKCRhbnlOYXRpdmUpe1xuXHQgICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcblx0ICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcblx0ICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuXHQgICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcblx0ICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG5cdCAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcblx0ICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuXHQgICAgVkFMVUVTX0JVRyA9IHRydWU7XG5cdCAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuXHQgIH1cblx0ICAvLyBEZWZpbmUgaXRlcmF0b3Jcblx0ICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG5cdCAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuXHQgIH1cblx0ICAvLyBQbHVnIGZvciBsaWJyYXJ5XG5cdCAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG5cdCAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcblx0ICBpZihERUZBVUxUKXtcblx0ICAgIG1ldGhvZHMgPSB7XG5cdCAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuXHQgICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG5cdCAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG5cdCAgICB9O1xuXHQgICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG5cdCAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuXHQgICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcblx0ICB9XG5cdCAgcmV0dXJuIG1ldGhvZHM7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMzUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8qKiovIH0sXG4vKiAxMzYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGNyZWF0ZSAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NClcblx0ICAsIGRlc2NyaXB0b3IgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSlcblx0ICAsIHNldFRvU3RyaW5nVGFnID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMilcblx0ICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cblx0Ly8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg4KShJdGVyYXRvclByb3RvdHlwZSwgX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcblx0ICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG5cdCAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMzcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuMiBTdHJpbmcucHJvdG90eXBlLmFuY2hvcihuYW1lKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ2FuY2hvcicsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBhbmNob3IobmFtZSl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICduYW1lJywgbmFtZSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEzOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBmYWlscyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgZGVmaW5lZCA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpXG5cdCAgLCBxdW90ICAgID0gL1wiL2c7XG5cdC8vIEIuMi4zLjIuMSBDcmVhdGVIVE1MKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKVxuXHR2YXIgY3JlYXRlSFRNTCA9IGZ1bmN0aW9uKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdCAgdmFyIFMgID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSlcblx0ICAgICwgcDEgPSAnPCcgKyB0YWc7XG5cdCAgaWYoYXR0cmlidXRlICE9PSAnJylwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuXHQgIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIGV4ZWMpe1xuXHQgIHZhciBPID0ge307XG5cdCAgT1tOQU1FXSA9IGV4ZWMoY3JlYXRlSFRNTCk7XG5cdCAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgdmFyIHRlc3QgPSAnJ1tOQU1FXSgnXCInKTtcblx0ICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuXHQgIH0pLCAnU3RyaW5nJywgTyk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMzkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuMyBTdHJpbmcucHJvdG90eXBlLmJpZygpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnYmlnJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGJpZygpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2JpZycsICcnLCAnJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE0MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy40IFN0cmluZy5wcm90b3R5cGUuYmxpbmsoKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ2JsaW5rJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGJsaW5rKCl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYmxpbmsnLCAnJywgJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuNSBTdHJpbmcucHJvdG90eXBlLmJvbGQoKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ2JvbGQnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gYm9sZCgpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2InLCAnJywgJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuNiBTdHJpbmcucHJvdG90eXBlLmZpeGVkKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdmaXhlZCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBmaXhlZCgpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3R0JywgJycsICcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTQzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjcgU3RyaW5nLnByb3RvdHlwZS5mb250Y29sb3IoY29sb3IpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnZm9udGNvbG9yJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGZvbnRjb2xvcihjb2xvcil7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdjb2xvcicsIGNvbG9yKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTQ0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjggU3RyaW5nLnByb3RvdHlwZS5mb250c2l6ZShzaXplKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ2ZvbnRzaXplJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGZvbnRzaXplKHNpemUpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2ZvbnQnLCAnc2l6ZScsIHNpemUpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuOSBTdHJpbmcucHJvdG90eXBlLml0YWxpY3MoKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ2l0YWxpY3MnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gaXRhbGljcygpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2knLCAnJywgJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuMTAgU3RyaW5nLnByb3RvdHlwZS5saW5rKHVybClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdsaW5rJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGxpbmsodXJsKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuMTEgU3RyaW5nLnByb3RvdHlwZS5zbWFsbCgpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnc21hbGwnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gc21hbGwoKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzbWFsbCcsICcnLCAnJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE0OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy4xMiBTdHJpbmcucHJvdG90eXBlLnN0cmlrZSgpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnc3RyaWtlJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHN0cmlrZSgpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N0cmlrZScsICcnLCAnJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE0OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy4xMyBTdHJpbmcucHJvdG90eXBlLnN1YigpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnc3ViJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHN1Yigpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N1YicsICcnLCAnJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE1MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy4xNCBTdHJpbmcucHJvdG90eXBlLnN1cCgpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnc3VwJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHN1cCgpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N1cCcsICcnLCAnJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE1MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjIuMS4yLjIgLyAxNS40LjMuMiBBcnJheS5pc0FycmF5KGFyZylcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnQXJyYXknLCB7aXNBcnJheTogX193ZWJwYWNrX3JlcXVpcmVfXyg0Myl9KTtcblxuLyoqKi8gfSxcbi8qIDE1MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgY3R4ICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KVxuXHQgICwgJGV4cG9ydCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b09iamVjdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCBjYWxsICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTUzKVxuXHQgICwgaXNBcnJheUl0ZXIgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1NClcblx0ICAsIHRvTGVuZ3RoICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIGNyZWF0ZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTUpXG5cdCAgLCBnZXRJdGVyRm4gICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTU2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE1NykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuXHQgIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuXHQgICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG5cdCAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcblx0ICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuXHQgICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG5cdCAgICAgICwgaW5kZXggICA9IDBcblx0ICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG5cdCAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuXHQgICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuXHQgICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG5cdCAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG5cdCAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcblx0ICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcblx0ICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcblx0ICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9XG5cdH0pO1xuXG5cbi8qKiovIH0sXG4vKiAxNTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcblx0dmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG5cdCAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcblx0ICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG5cdCAgICB0aHJvdyBlO1xuXHQgIH1cblx0fTtcblxuLyoqKi8gfSxcbi8qIDE1NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxuXHR2YXIgSXRlcmF0b3JzICA9IF9fd2VicGFja19yZXF1aXJlX18oMTM1KVxuXHQgICwgSVRFUkFUT1IgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdpdGVyYXRvcicpXG5cdCAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRkZWZpbmVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oOSlcblx0ICAsIGNyZWF0ZURlc2MgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuXHQgIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG5cdCAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBjbGFzc29mICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDczKVxuXHQgICwgSVRFUkFUT1IgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ2l0ZXJhdG9yJylcblx0ICAsIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTM1KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuXHQgIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG5cdCAgICB8fCBpdFsnQEBpdGVyYXRvciddXG5cdCAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTU3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgSVRFUkFUT1IgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ2l0ZXJhdG9yJylcblx0ICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG5cdHRyeSB7XG5cdCAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuXHQgIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG5cdCAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG5cdH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcblx0ICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG5cdCAgdmFyIHNhZmUgPSBmYWxzZTtcblx0ICB0cnkge1xuXHQgICAgdmFyIGFyciAgPSBbN11cblx0ICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuXHQgICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG5cdCAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG5cdCAgICBleGVjKGFycik7XG5cdCAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXHQgIHJldHVybiBzYWZlO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTU4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGNyZWF0ZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTUpO1xuXG5cdC8vIFdlYktpdCBBcnJheS5vZiBpc24ndCBnZW5lcmljXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIGZ1bmN0aW9uIEYoKXt9XG5cdCAgcmV0dXJuICEoQXJyYXkub2YuY2FsbChGKSBpbnN0YW5jZW9mIEYpO1xuXHR9KSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMi4zIEFycmF5Lm9mKCAuLi5pdGVtcylcblx0ICBvZjogZnVuY3Rpb24gb2YoLyogLi4uYXJncyAqLyl7XG5cdCAgICB2YXIgaW5kZXggID0gMFxuXHQgICAgICAsIGFMZW4gICA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICAgLCByZXN1bHQgPSBuZXcgKHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXkpKGFMZW4pO1xuXHQgICAgd2hpbGUoYUxlbiA+IGluZGV4KWNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIGFyZ3VtZW50c1tpbmRleCsrXSk7XG5cdCAgICByZXN1bHQubGVuZ3RoID0gYUxlbjtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE1OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmpvaW4oc2VwYXJhdG9yKVxuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIGFycmF5Sm9pbiA9IFtdLmpvaW47XG5cblx0Ly8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIHN0cmluZ3Ncblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoX193ZWJwYWNrX3JlcXVpcmVfXygzMSkgIT0gT2JqZWN0IHx8ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoYXJyYXlKb2luKSksICdBcnJheScsIHtcblx0ICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcil7XG5cdCAgICByZXR1cm4gYXJyYXlKb2luLmNhbGwodG9JT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE2MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1ldGhvZCwgYXJnKXtcblx0ICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgIGFyZyA/IG1ldGhvZC5jYWxsKG51bGwsIGZ1bmN0aW9uKCl7fSwgMSkgOiBtZXRob2QuY2FsbChudWxsKTtcblx0ICB9KTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE2MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGh0bWwgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KVxuXHQgICwgY29mICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpXG5cdCAgLCB0b0luZGV4ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNylcblx0ICAsIHRvTGVuZ3RoICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgYXJyYXlTbGljZSA9IFtdLnNsaWNlO1xuXG5cdC8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgaWYoaHRtbClhcnJheVNsaWNlLmNhbGwoaHRtbCk7XG5cdH0pLCAnQXJyYXknLCB7XG5cdCAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKGJlZ2luLCBlbmQpe1xuXHQgICAgdmFyIGxlbiAgID0gdG9MZW5ndGgodGhpcy5sZW5ndGgpXG5cdCAgICAgICwga2xhc3MgPSBjb2YodGhpcyk7XG5cdCAgICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZDtcblx0ICAgIGlmKGtsYXNzID09ICdBcnJheScpcmV0dXJuIGFycmF5U2xpY2UuY2FsbCh0aGlzLCBiZWdpbiwgZW5kKTtcblx0ICAgIHZhciBzdGFydCAgPSB0b0luZGV4KGJlZ2luLCBsZW4pXG5cdCAgICAgICwgdXBUbyAgID0gdG9JbmRleChlbmQsIGxlbilcblx0ICAgICAgLCBzaXplICAgPSB0b0xlbmd0aCh1cFRvIC0gc3RhcnQpXG5cdCAgICAgICwgY2xvbmVkID0gQXJyYXkoc2l6ZSlcblx0ICAgICAgLCBpICAgICAgPSAwO1xuXHQgICAgZm9yKDsgaSA8IHNpemU7IGkrKyljbG9uZWRbaV0gPSBrbGFzcyA9PSAnU3RyaW5nJ1xuXHQgICAgICA/IHRoaXMuY2hhckF0KHN0YXJ0ICsgaSlcblx0ICAgICAgOiB0aGlzW3N0YXJ0ICsgaV07XG5cdCAgICByZXR1cm4gY2xvbmVkO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNjIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCB0b09iamVjdCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgZmFpbHMgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgJHNvcnQgICAgID0gW10uc29ydFxuXHQgICwgdGVzdCAgICAgID0gWzEsIDIsIDNdO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgLy8gSUU4LVxuXHQgIHRlc3Quc29ydCh1bmRlZmluZWQpO1xuXHR9KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAvLyBWOCBidWdcblx0ICB0ZXN0LnNvcnQobnVsbCk7XG5cdCAgLy8gT2xkIFdlYktpdFxuXHR9KSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKCRzb3J0KSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjMuMjUgQXJyYXkucHJvdG90eXBlLnNvcnQoY29tcGFyZWZuKVxuXHQgIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKXtcblx0ICAgIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZFxuXHQgICAgICA/ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG5cdCAgICAgIDogJHNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSwgYUZ1bmN0aW9uKGNvbXBhcmVmbikpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNjMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGZvckVhY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NCkoMClcblx0ICAsIFNUUklDVCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKFtdLmZvckVhY2gsIHRydWUpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIVNUUklDVCwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMy4xMCAvIDE1LjQuNC4xOCBBcnJheS5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuXHQgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuXHQgICAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE2NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMCAtPiBBcnJheSNmb3JFYWNoXG5cdC8vIDEgLT4gQXJyYXkjbWFwXG5cdC8vIDIgLT4gQXJyYXkjZmlsdGVyXG5cdC8vIDMgLT4gQXJyYXkjc29tZVxuXHQvLyA0IC0+IEFycmF5I2V2ZXJ5XG5cdC8vIDUgLT4gQXJyYXkjZmluZFxuXHQvLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxuXHR2YXIgY3R4ICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KVxuXHQgICwgSU9iamVjdCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKVxuXHQgICwgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgYXNjICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG5cdCAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcblx0ICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuXHQgICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG5cdCAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcblx0ICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuXHQgICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcblx0ICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuXHQgIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG5cdCAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG5cdCAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuXHQgICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuXHQgICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuXHQgICAgICAsIGluZGV4ICA9IDBcblx0ICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG5cdCAgICAgICwgdmFsLCByZXM7XG5cdCAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuXHQgICAgICB2YWwgPSBzZWxmW2luZGV4XTtcblx0ICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcblx0ICAgICAgaWYoVFlQRSl7XG5cdCAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG5cdCAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuXHQgICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcblx0ICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG5cdCAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG5cdCAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG5cdCAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTY1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG5cdHZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2Nik7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcblx0ICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTY2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgaXNBcnJheSAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKVxuXHQgICwgU1BFQ0lFUyAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnc3BlY2llcycpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuXHQgIHZhciBDO1xuXHQgIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcblx0ICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3Rvcjtcblx0ICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG5cdCAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcblx0ICAgIGlmKGlzT2JqZWN0KEMpKXtcblx0ICAgICAgQyA9IENbU1BFQ0lFU107XG5cdCAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcblx0ICAgIH1cblx0ICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNjcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkbWFwICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjQpKDEpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oMTYwKShbXS5tYXAsIHRydWUpLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4zLjE1IC8gMTUuNC40LjE5IEFycmF5LnByb3RvdHlwZS5tYXAoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcblx0ICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG5cdCAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNjggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkZmlsdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjQpKDIpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oMTYwKShbXS5maWx0ZXIsIHRydWUpLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4zLjcgLyAxNS40LjQuMjAgQXJyYXkucHJvdG90eXBlLmZpbHRlcihjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuXHQgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcblx0ICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE2OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRzb21lICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NCkoMyk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKFtdLnNvbWUsIHRydWUpLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4zLjIzIC8gMTUuNC40LjE3IEFycmF5LnByb3RvdHlwZS5zb21lKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG5cdCAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG5cdCAgICByZXR1cm4gJHNvbWUodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTcwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGV2ZXJ5ICA9IF9fd2VicGFja19yZXF1aXJlX18oMTY0KSg0KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoW10uZXZlcnksIHRydWUpLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4zLjUgLyAxNS40LjQuMTYgQXJyYXkucHJvdG90eXBlLmV2ZXJ5KGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG5cdCAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcblx0ICAgIHJldHVybiAkZXZlcnkodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTcxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHJlZHVjZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTcyKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoW10ucmVkdWNlLCB0cnVlKSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMy4xOCAvIDE1LjQuNC4yMSBBcnJheS5wcm90b3R5cGUucmVkdWNlKGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcblx0ICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKXtcblx0ICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50c1sxXSwgZmFsc2UpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNzIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgdG9PYmplY3QgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIElPYmplY3QgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpXG5cdCAgLCB0b0xlbmd0aCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIGNhbGxiYWNrZm4sIGFMZW4sIG1lbW8sIGlzUmlnaHQpe1xuXHQgIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcblx0ICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhhdClcblx0ICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuXHQgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcblx0ICAgICwgaW5kZXggID0gaXNSaWdodCA/IGxlbmd0aCAtIDEgOiAwXG5cdCAgICAsIGkgICAgICA9IGlzUmlnaHQgPyAtMSA6IDE7XG5cdCAgaWYoYUxlbiA8IDIpZm9yKDs7KXtcblx0ICAgIGlmKGluZGV4IGluIHNlbGYpe1xuXHQgICAgICBtZW1vID0gc2VsZltpbmRleF07XG5cdCAgICAgIGluZGV4ICs9IGk7XG5cdCAgICAgIGJyZWFrO1xuXHQgICAgfVxuXHQgICAgaW5kZXggKz0gaTtcblx0ICAgIGlmKGlzUmlnaHQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpe1xuXHQgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgZm9yKDtpc1JpZ2h0ID8gaW5kZXggPj0gMCA6IGxlbmd0aCA+IGluZGV4OyBpbmRleCArPSBpKWlmKGluZGV4IGluIHNlbGYpe1xuXHQgICAgbWVtbyA9IGNhbGxiYWNrZm4obWVtbywgc2VsZltpbmRleF0sIGluZGV4LCBPKTtcblx0ICB9XG5cdCAgcmV0dXJuIG1lbW87XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNzMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkcmVkdWNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNzIpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oMTYwKShbXS5yZWR1Y2VSaWdodCwgdHJ1ZSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjMuMTkgLyAxNS40LjQuMjIgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcblx0ICByZWR1Y2VSaWdodDogZnVuY3Rpb24gcmVkdWNlUmlnaHQoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLyl7XG5cdCAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIHRydWUpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNzQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkaW5kZXhPZiAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCkoZmFsc2UpXG5cdCAgLCAkbmF0aXZlICAgICAgID0gW10uaW5kZXhPZlxuXHQgICwgTkVHQVRJVkVfWkVSTyA9ICEhJG5hdGl2ZSAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChORUdBVElWRV9aRVJPIHx8ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoJG5hdGl2ZSkpLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4zLjExIC8gMTUuNC40LjE0IEFycmF5LnByb3RvdHlwZS5pbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcblx0ICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCA9IDAgKi8pe1xuXHQgICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cblx0ICAgICAgLy8gY29udmVydCAtMCB0byArMFxuXHQgICAgICA/ICRuYXRpdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG5cdCAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzWzFdKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTc1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9JT2JqZWN0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCB0b0ludGVnZXIgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNilcblx0ICAsIHRvTGVuZ3RoICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgJG5hdGl2ZSAgICAgICA9IFtdLmxhc3RJbmRleE9mXG5cdCAgLCBORUdBVElWRV9aRVJPID0gISEkbmF0aXZlICYmIDEgLyBbMV0ubGFzdEluZGV4T2YoMSwgLTApIDwgMDtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChORUdBVElWRV9aRVJPIHx8ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoJG5hdGl2ZSkpLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4zLjE0IC8gMTUuNC40LjE1IEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG5cdCAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uIGxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCA9IEBbKi0xXSAqLyl7XG5cdCAgICAvLyBjb252ZXJ0IC0wIHRvICswXG5cdCAgICBpZihORUdBVElWRV9aRVJPKXJldHVybiAkbmF0aXZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMDtcblx0ICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QodGhpcylcblx0ICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcblx0ICAgICAgLCBpbmRleCAgPSBsZW5ndGggLSAxO1xuXHQgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpaW5kZXggPSBNYXRoLm1pbihpbmRleCwgdG9JbnRlZ2VyKGFyZ3VtZW50c1sxXSkpO1xuXHQgICAgaWYoaW5kZXggPCAwKWluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG5cdCAgICBmb3IoO2luZGV4ID49IDA7IGluZGV4LS0paWYoaW5kZXggaW4gTylpZihPW2luZGV4XSA9PT0gc2VhcmNoRWxlbWVudClyZXR1cm4gaW5kZXggfHwgMDtcblx0ICAgIHJldHVybiAtMTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTc2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7Y29weVdpdGhpbjogX193ZWJwYWNrX3JlcXVpcmVfXygxNzcpfSk7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzgpKCdjb3B5V2l0aGluJyk7XG5cbi8qKiovIH0sXG4vKiAxNzcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxuXHQndXNlIHN0cmljdCc7XG5cdHZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCB0b0luZGV4ICA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpXG5cdCAgLCB0b0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gW10uY29weVdpdGhpbiB8fCBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldC8qPSAwKi8sIHN0YXJ0Lyo9IDAsIGVuZCA9IEBsZW5ndGgqLyl7XG5cdCAgdmFyIE8gICAgID0gdG9PYmplY3QodGhpcylcblx0ICAgICwgbGVuICAgPSB0b0xlbmd0aChPLmxlbmd0aClcblx0ICAgICwgdG8gICAgPSB0b0luZGV4KHRhcmdldCwgbGVuKVxuXHQgICAgLCBmcm9tICA9IHRvSW5kZXgoc3RhcnQsIGxlbilcblx0ICAgICwgZW5kICAgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZFxuXHQgICAgLCBjb3VudCA9IE1hdGgubWluKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvSW5kZXgoZW5kLCBsZW4pKSAtIGZyb20sIGxlbiAtIHRvKVxuXHQgICAgLCBpbmMgICA9IDE7XG5cdCAgaWYoZnJvbSA8IHRvICYmIHRvIDwgZnJvbSArIGNvdW50KXtcblx0ICAgIGluYyAgPSAtMTtcblx0ICAgIGZyb20gKz0gY291bnQgLSAxO1xuXHQgICAgdG8gICArPSBjb3VudCAtIDE7XG5cdCAgfVxuXHQgIHdoaWxlKGNvdW50LS0gPiAwKXtcblx0ICAgIGlmKGZyb20gaW4gTylPW3RvXSA9IE9bZnJvbV07XG5cdCAgICBlbHNlIGRlbGV0ZSBPW3RvXTtcblx0ICAgIHRvICAgKz0gaW5jO1xuXHQgICAgZnJvbSArPSBpbmM7XG5cdCAgfSByZXR1cm4gTztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE3OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuXHR2YXIgVU5TQ09QQUJMRVMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgndW5zY29wYWJsZXMnKVxuXHQgICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5cdGlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClfX3dlYnBhY2tfcmVxdWlyZV9fKDgpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcblx0ICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE3OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge2ZpbGw6IF9fd2VicGFja19yZXF1aXJlX18oMTgwKX0pO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTc4KSgnZmlsbCcpO1xuXG4vKioqLyB9LFxuLyogMTgwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgdG9JbmRleCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KVxuXHQgICwgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xuXHQgIHZhciBPICAgICAgPSB0b09iamVjdCh0aGlzKVxuXHQgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcblx0ICAgICwgYUxlbiAgID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgLCBpbmRleCAgPSB0b0luZGV4KGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpXG5cdCAgICAsIGVuZCAgICA9IGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkXG5cdCAgICAsIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCk7XG5cdCAgd2hpbGUoZW5kUG9zID4gaW5kZXgpT1tpbmRleCsrXSA9IHZhbHVlO1xuXHQgIHJldHVybiBPO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTgxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkZmluZCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjQpKDUpXG5cdCAgLCBLRVkgICAgID0gJ2ZpbmQnXG5cdCAgLCBmb3JjZWQgID0gdHJ1ZTtcblx0Ly8gU2hvdWxkbid0IHNraXAgaG9sZXNcblx0aWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuXHQgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcblx0ICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgfVxuXHR9KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzgpKEtFWSk7XG5cbi8qKiovIH0sXG4vKiAxODIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gMjIuMS4zLjkgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGZpbmQgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTY0KSg2KVxuXHQgICwgS0VZICAgICA9ICdmaW5kSW5kZXgnXG5cdCAgLCBmb3JjZWQgID0gdHJ1ZTtcblx0Ly8gU2hvdWxkbid0IHNraXAgaG9sZXNcblx0aWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuXHQgIGZpbmRJbmRleDogZnVuY3Rpb24gZmluZEluZGV4KGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG5cdCAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgIH1cblx0fSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTc4KShLRVkpO1xuXG4vKioqLyB9LFxuLyogMTgzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBhZGRUb1Vuc2NvcGFibGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNzgpXG5cdCAgLCBzdGVwICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODQpXG5cdCAgLCBJdGVyYXRvcnMgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzUpXG5cdCAgLCB0b0lPYmplY3QgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCk7XG5cblx0Ly8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuXHQvLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuXHQvLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG5cdC8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTM0KShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuXHQgIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcblx0ICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuXHQgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG5cdC8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxuXHR9LCBmdW5jdGlvbigpe1xuXHQgIHZhciBPICAgICA9IHRoaXMuX3Rcblx0ICAgICwga2luZCAgPSB0aGlzLl9rXG5cdCAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuXHQgIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcblx0ICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG5cdCAgICByZXR1cm4gc3RlcCgxKTtcblx0ICB9XG5cdCAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG5cdCAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG5cdCAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xuXHR9LCAndmFsdWVzJyk7XG5cblx0Ly8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuXHRJdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5cdGFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcblx0YWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5cdGFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuLyoqKi8gfSxcbi8qIDE4NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG5cdCAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxODUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTg2KSgnQXJyYXknKTtcblxuLyoqKi8gfSxcbi8qIDE4NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZ2xvYmFsICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBkUCAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSlcblx0ICAsIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KVxuXHQgICwgU1BFQ0lFUyAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnc3BlY2llcycpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcblx0ICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuXHQgIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG5cdCAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG5cdCAgfSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxODcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnbG9iYWwgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGluaGVyaXRJZlJlcXVpcmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4MClcblx0ICAsIGRQICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mXG5cdCAgLCBnT1BOICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDgpLmZcblx0ICAsIGlzUmVnRXhwICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjgpXG5cdCAgLCAkZmxhZ3MgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTg4KVxuXHQgICwgJFJlZ0V4cCAgICAgICAgICAgPSBnbG9iYWwuUmVnRXhwXG5cdCAgLCBCYXNlICAgICAgICAgICAgICA9ICRSZWdFeHBcblx0ICAsIHByb3RvICAgICAgICAgICAgID0gJFJlZ0V4cC5wcm90b3R5cGVcblx0ICAsIHJlMSAgICAgICAgICAgICAgID0gL2EvZ1xuXHQgICwgcmUyICAgICAgICAgICAgICAgPSAvYS9nXG5cdCAgLy8gXCJuZXdcIiBjcmVhdGVzIGEgbmV3IG9iamVjdCwgb2xkIHdlYmtpdCBidWdneSBoZXJlXG5cdCAgLCBDT1JSRUNUX05FVyAgICAgICA9IG5ldyAkUmVnRXhwKHJlMSkgIT09IHJlMTtcblxuXHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fKDQpICYmICghQ09SUkVDVF9ORVcgfHwgX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHJlMltfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnbWF0Y2gnKV0gPSBmYWxzZTtcblx0ICAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuXHQgIHJldHVybiAkUmVnRXhwKHJlMSkgIT0gcmUxIHx8ICRSZWdFeHAocmUyKSA9PSByZTIgfHwgJFJlZ0V4cChyZTEsICdpJykgIT0gJy9hL2knO1xuXHR9KSkpe1xuXHQgICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZil7XG5cdCAgICB2YXIgdGlSRSA9IHRoaXMgaW5zdGFuY2VvZiAkUmVnRXhwXG5cdCAgICAgICwgcGlSRSA9IGlzUmVnRXhwKHApXG5cdCAgICAgICwgZmlVICA9IGYgPT09IHVuZGVmaW5lZDtcblx0ICAgIHJldHVybiAhdGlSRSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcFxuXHQgICAgICA6IGluaGVyaXRJZlJlcXVpcmVkKENPUlJFQ1RfTkVXXG5cdCAgICAgICAgPyBuZXcgQmFzZShwaVJFICYmICFmaVUgPyBwLnNvdXJjZSA6IHAsIGYpXG5cdCAgICAgICAgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZilcblx0ICAgICAgLCB0aVJFID8gdGhpcyA6IHByb3RvLCAkUmVnRXhwKTtcblx0ICB9O1xuXHQgIHZhciBwcm94eSA9IGZ1bmN0aW9uKGtleSl7XG5cdCAgICBrZXkgaW4gJFJlZ0V4cCB8fCBkUCgkUmVnRXhwLCBrZXksIHtcblx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBCYXNlW2tleV07IH0sXG5cdCAgICAgIHNldDogZnVuY3Rpb24oaXQpeyBCYXNlW2tleV0gPSBpdDsgfVxuXHQgICAgfSk7XG5cdCAgfTtcblx0ICBmb3IodmFyIGtleXMgPSBnT1BOKEJhc2UpLCBpID0gMDsga2V5cy5sZW5ndGggPiBpOyApcHJveHkoa2V5c1tpKytdKTtcblx0ICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG5cdCAgJFJlZ0V4cC5wcm90b3R5cGUgPSBwcm90bztcblx0ICBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KShnbG9iYWwsICdSZWdFeHAnLCAkUmVnRXhwKTtcblx0fVxuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTg2KSgnUmVnRXhwJyk7XG5cbi8qKiovIH0sXG4vKiAxODggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3Ncblx0dmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcblx0ICB2YXIgdGhhdCAgID0gYW5PYmplY3QodGhpcylcblx0ICAgICwgcmVzdWx0ID0gJyc7XG5cdCAgaWYodGhhdC5nbG9iYWwpICAgICByZXN1bHQgKz0gJ2cnO1xuXHQgIGlmKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcblx0ICBpZih0aGF0Lm11bHRpbGluZSkgIHJlc3VsdCArPSAnbSc7XG5cdCAgaWYodGhhdC51bmljb2RlKSAgICByZXN1bHQgKz0gJ3UnO1xuXHQgIGlmKHRoYXQuc3RpY2t5KSAgICAgcmVzdWx0ICs9ICd5Jztcblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTg5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTkwKTtcblx0dmFyIGFuT2JqZWN0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsICRmbGFncyAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODgpXG5cdCAgLCBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oNClcblx0ICAsIFRPX1NUUklORyAgID0gJ3RvU3RyaW5nJ1xuXHQgICwgJHRvU3RyaW5nICAgPSAvLi9bVE9fU1RSSU5HXTtcblxuXHR2YXIgZGVmaW5lID0gZnVuY3Rpb24oZm4pe1xuXHQgIF9fd2VicGFja19yZXF1aXJlX18oMTYpKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xuXHR9O1xuXG5cdC8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcblx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoe3NvdXJjZTogJ2EnLCBmbGFnczogJ2InfSkgIT0gJy9hL2InOyB9KSl7XG5cdCAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG5cdCAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuXHQgICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcblx0ICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuXHQgIH0pO1xuXHQvLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxuXHR9IGVsc2UgaWYoJHRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HKXtcblx0ICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKXtcblx0ICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcblx0ICB9KTtcblx0fVxuXG4vKioqLyB9LFxuLyogMTkwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5cdGlmKF9fd2VicGFja19yZXF1aXJlX18oNCkgJiYgLy4vZy5mbGFncyAhPSAnZycpX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcblx0ICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgZ2V0OiBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4OClcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxOTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIEBAbWF0Y2ggbG9naWNcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTIpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uKGRlZmluZWQsIE1BVENILCAkbWF0Y2gpe1xuXHQgIC8vIDIxLjEuMy4xMSBTdHJpbmcucHJvdG90eXBlLm1hdGNoKHJlZ2V4cClcblx0ICByZXR1cm4gW2Z1bmN0aW9uIG1hdGNoKHJlZ2V4cCl7XG5cdCAgICAndXNlIHN0cmljdCc7XG5cdCAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG5cdCAgICAgICwgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcblx0ICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuXHQgIH0sICRtYXRjaF07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTkyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBoaWRlICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOClcblx0ICAsIHJlZGVmaW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNilcblx0ICAsIGZhaWxzICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgZGVmaW5lZCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKVxuXHQgICwgd2tzICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgbGVuZ3RoLCBleGVjKXtcblx0ICB2YXIgU1lNQk9MICAgPSB3a3MoS0VZKVxuXHQgICAgLCBmbnMgICAgICA9IGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCAnJ1tLRVldKVxuXHQgICAgLCBzdHJmbiAgICA9IGZuc1swXVxuXHQgICAgLCByeGZuICAgICA9IGZuc1sxXTtcblx0ICBpZihmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgdmFyIE8gPSB7fTtcblx0ICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9O1xuXHQgICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcblx0ICB9KSl7XG5cdCAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcblx0ICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuXHQgICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG5cdCAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG5cdCAgICAgID8gZnVuY3Rpb24oc3RyaW5nLCBhcmcpeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuXHQgICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcblx0ICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuXHQgICAgICA6IGZ1bmN0aW9uKHN0cmluZyl7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuXHQgICAgKTtcblx0ICB9XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxOTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIEBAcmVwbGFjZSBsb2dpY1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5MikoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSl7XG5cdCAgLy8gMjEuMS4zLjE0IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKVxuXHQgIHJldHVybiBbZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKXtcblx0ICAgICd1c2Ugc3RyaWN0Jztcblx0ICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcblx0ICAgICAgLCBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuXHQgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcblx0ICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG5cdCAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuXHQgIH0sICRyZXBsYWNlXTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxOTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIEBAc2VhcmNoIGxvZ2ljXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTkyKSgnc2VhcmNoJywgMSwgZnVuY3Rpb24oZGVmaW5lZCwgU0VBUkNILCAkc2VhcmNoKXtcblx0ICAvLyAyMS4xLjMuMTUgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2gocmVnZXhwKVxuXHQgIHJldHVybiBbZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCl7XG5cdCAgICAndXNlIHN0cmljdCc7XG5cdCAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG5cdCAgICAgICwgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW1NFQVJDSF07XG5cdCAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKFN0cmluZyhPKSk7XG5cdCAgfSwgJHNlYXJjaF07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTk1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBAQHNwbGl0IGxvZ2ljXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTkyKSgnc3BsaXQnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBTUExJVCwgJHNwbGl0KXtcblx0ICAndXNlIHN0cmljdCc7XG5cdCAgdmFyIGlzUmVnRXhwICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyOClcblx0ICAgICwgX3NwbGl0ICAgICA9ICRzcGxpdFxuXHQgICAgLCAkcHVzaCAgICAgID0gW10ucHVzaFxuXHQgICAgLCAkU1BMSVQgICAgID0gJ3NwbGl0J1xuXHQgICAgLCBMRU5HVEggICAgID0gJ2xlbmd0aCdcblx0ICAgICwgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuXHQgIGlmKFxuXHQgICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcblx0ICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuXHQgICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG5cdCAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcblx0ICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcblx0ICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuXHQgICl7XG5cdCAgICB2YXIgTlBDRyA9IC8oKT8/Ly5leGVjKCcnKVsxXSA9PT0gdW5kZWZpbmVkOyAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuXHQgICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG5cdCAgICAkc3BsaXQgPSBmdW5jdGlvbihzZXBhcmF0b3IsIGxpbWl0KXtcblx0ICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcblx0ICAgICAgaWYoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApcmV0dXJuIFtdO1xuXHQgICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuXHQgICAgICBpZighaXNSZWdFeHAoc2VwYXJhdG9yKSlyZXR1cm4gX3NwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcblx0ICAgICAgdmFyIG91dHB1dCA9IFtdO1xuXHQgICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuXHQgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG5cdCAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG5cdCAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuXHQgICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG5cdCAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDQyOTQ5NjcyOTUgOiBsaW1pdCA+Pj4gMDtcblx0ICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcblx0ICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcblx0ICAgICAgdmFyIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGgsIGk7XG5cdCAgICAgIC8vIERvZXNuJ3QgbmVlZCBmbGFncyBneSwgYnV0IHRoZXkgZG9uJ3QgaHVydFxuXHQgICAgICBpZighTlBDRylzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cCgnXicgKyBzZXBhcmF0b3JDb3B5LnNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuXHQgICAgICB3aGlsZShtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKXtcblx0ICAgICAgICAvLyBgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG5cdCAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXVtMRU5HVEhdO1xuXHQgICAgICAgIGlmKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpe1xuXHQgICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG5cdCAgICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3IgTlBDR1xuXHQgICAgICAgICAgaWYoIU5QQ0cgJiYgbWF0Y2hbTEVOR1RIXSA+IDEpbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbigpe1xuXHQgICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCBhcmd1bWVudHNbTEVOR1RIXSAtIDI7IGkrKylpZihhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCltYXRjaFtpXSA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgaWYobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcblx0ICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuXHQgICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcblx0ICAgICAgICAgIGlmKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpYnJlYWs7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KXNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuXHQgICAgICB9XG5cdCAgICAgIGlmKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKXtcblx0ICAgICAgICBpZihsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKW91dHB1dC5wdXNoKCcnKTtcblx0ICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG5cdCAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG5cdCAgICB9O1xuXHQgIC8vIENoYWtyYSwgVjhcblx0ICB9IGVsc2UgaWYoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKXtcblx0ICAgICRzcGxpdCA9IGZ1bmN0aW9uKHNlcGFyYXRvciwgbGltaXQpe1xuXHQgICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IF9zcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuXHQgICAgfTtcblx0ICB9XG5cdCAgLy8gMjEuMS4zLjE3IFN0cmluZy5wcm90b3R5cGUuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdClcblx0ICByZXR1cm4gW2Z1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpe1xuXHQgICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuXHQgICAgICAsIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG5cdCAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdCkgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuXHQgIH0sICRzcGxpdF07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTk2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBMSUJSQVJZICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KVxuXHQgICwgZ2xvYmFsICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgY3R4ICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOClcblx0ICAsIGNsYXNzb2YgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNzMpXG5cdCAgLCAkZXhwb3J0ICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBpc09iamVjdCAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgYUZ1bmN0aW9uICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsIGFuSW5zdGFuY2UgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk3KVxuXHQgICwgZm9yT2YgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTgpXG5cdCAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5OSlcblx0ICAsIHRhc2sgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjAwKS5zZXRcblx0ICAsIG1pY3JvdGFzayAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjAxKSgpXG5cdCAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcblx0ICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3Jcblx0ICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG5cdCAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cblx0ICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG5cdCAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuXHQgICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuXHQgICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxuXHR2YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcblx0ICB0cnkge1xuXHQgICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG5cdCAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG5cdCAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG5cdCAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG5cdCAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcblx0ICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cdH0oKTtcblxuXHQvLyBoZWxwZXJzXG5cdHZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcblx0ICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2Vcblx0ICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xuXHR9O1xuXHR2YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcblx0ICB2YXIgdGhlbjtcblx0ICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG5cdH07XG5cdHZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuXHQgIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG5cdCAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuXHQgICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuXHR9O1xuXHR2YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcblx0ICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuXHQgIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuXHQgICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcblx0ICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG5cdCAgICByZWplY3QgID0gJCRyZWplY3Q7XG5cdCAgfSk7XG5cdCAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuXHQgIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xuXHR9O1xuXHR2YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuXHQgIHRyeSB7XG5cdCAgICBleGVjKCk7XG5cdCAgfSBjYXRjaChlKXtcblx0ICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuXHQgIH1cblx0fTtcblx0dmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcblx0ICBpZihwcm9taXNlLl9uKXJldHVybjtcblx0ICBwcm9taXNlLl9uID0gdHJ1ZTtcblx0ICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuXHQgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuXHQgICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuXHQgICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG5cdCAgICAgICwgaSAgICAgPSAwO1xuXHQgICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcblx0ICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuXHQgICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcblx0ICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3Rcblx0ICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cblx0ICAgICAgICAsIHJlc3VsdCwgdGhlbjtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICBpZihoYW5kbGVyKXtcblx0ICAgICAgICAgIGlmKCFvayl7XG5cdCAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcblx0ICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuXHQgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcblx0ICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG5cdCAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcblx0ICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcblx0ICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcblx0ICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0ICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG5cdCAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG5cdCAgICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgcmVqZWN0KGUpO1xuXHQgICAgICB9XG5cdCAgICB9O1xuXHQgICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG5cdCAgICBwcm9taXNlLl9jID0gW107XG5cdCAgICBwcm9taXNlLl9uID0gZmFsc2U7XG5cdCAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcblx0ICB9KTtcblx0fTtcblx0dmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG5cdCAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcblx0ICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Zcblx0ICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG5cdCAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG5cdCAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcblx0ICAgICAgICBpZihpc05vZGUpe1xuXHQgICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG5cdCAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuXHQgICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuXHQgICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcblx0ICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuXHQgICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG5cdCAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG5cdCAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuXHQgIH0pO1xuXHR9O1xuXHR2YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcblx0ICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuXHQgIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuXHQgICAgLCBpICAgICA9IDBcblx0ICAgICwgcmVhY3Rpb247XG5cdCAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG5cdCAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG5cdCAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG5cdCAgfSByZXR1cm4gdHJ1ZTtcblx0fTtcblx0dmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG5cdCAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcblx0ICAgIHZhciBoYW5kbGVyO1xuXHQgICAgaWYoaXNOb2RlKXtcblx0ICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG5cdCAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuXHQgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcblx0ICAgIH1cblx0ICB9KTtcblx0fTtcblx0dmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG5cdCAgdmFyIHByb21pc2UgPSB0aGlzO1xuXHQgIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuXHQgIHByb21pc2UuX2QgPSB0cnVlO1xuXHQgIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuXHQgIHByb21pc2UuX3YgPSB2YWx1ZTtcblx0ICBwcm9taXNlLl9zID0gMjtcblx0ICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuXHQgIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcblx0fTtcblx0dmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuXHQgIHZhciBwcm9taXNlID0gdGhpc1xuXHQgICAgLCB0aGVuO1xuXHQgIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuXHQgIHByb21pc2UuX2QgPSB0cnVlO1xuXHQgIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuXHQgIHRyeSB7XG5cdCAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcblx0ICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG5cdCAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuXHQgICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcblx0ICAgICAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG5cdCAgICAgIHByb21pc2UuX3MgPSAxO1xuXHQgICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuXHQgICAgfVxuXHQgIH0gY2F0Y2goZSl7XG5cdCAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuXHQgIH1cblx0fTtcblxuXHQvLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuXHRpZighVVNFX05BVElWRSl7XG5cdCAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcblx0ICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuXHQgICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG5cdCAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuXHQgICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcblx0ICAgIHRyeSB7XG5cdCAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG5cdCAgICB9IGNhdGNoKGVycil7XG5cdCAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuXHQgICAgfVxuXHQgIH07XG5cdCAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcblx0ICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG5cdCAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG5cdCAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG5cdCAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcblx0ICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcblx0ICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcblx0ICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG5cdCAgfTtcblx0ICBJbnRlcm5hbC5wcm90b3R5cGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMikoJFByb21pc2UucHJvdG90eXBlLCB7XG5cdCAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuXHQgICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG5cdCAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuXHQgICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcblx0ICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuXHQgICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcblx0ICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcblx0ICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuXHQgICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG5cdCAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuXHQgICAgfSxcblx0ICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG5cdCAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcblx0ICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHQgIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcblx0ICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcblx0ICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG5cdCAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuXHQgICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuXHQgIH07XG5cdH1cblxuXHQkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMikoJFByb21pc2UsIFBST01JU0UpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4NikoUFJPTUlTRSk7XG5cdFdyYXBwZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpW1BST01JU0VdO1xuXG5cdC8vIHN0YXRpY3Ncblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuXHQgIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG5cdCAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG5cdCAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG5cdCAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuXHQgICAgJCRyZWplY3Qocik7XG5cdCAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuXHQgIH1cblx0fSk7XG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG5cdCAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG5cdCAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcblx0ICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcblx0ICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG5cdCAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG5cdCAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcblx0ICAgICQkcmVzb2x2ZSh4KTtcblx0ICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG5cdCAgfVxuXHR9KTtcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgX193ZWJwYWNrX3JlcXVpcmVfXygxNTcpKGZ1bmN0aW9uKGl0ZXIpe1xuXHQgICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG5cdH0pKSwgUFJPTUlTRSwge1xuXHQgIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuXHQgIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcblx0ICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuXHQgICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuXHQgICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcblx0ICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG5cdCAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuXHQgICAgICB2YXIgdmFsdWVzICAgID0gW11cblx0ICAgICAgICAsIGluZGV4ICAgICA9IDBcblx0ICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG5cdCAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG5cdCAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG5cdCAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcblx0ICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuXHQgICAgICAgIHJlbWFpbmluZysrO1xuXHQgICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcblx0ICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuXHQgICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuXHQgICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcblx0ICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcblx0ICAgICAgICB9LCByZWplY3QpO1xuXHQgICAgICB9KTtcblx0ICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuXHQgICAgfSk7XG5cdCAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG5cdCAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuXHQgIH0sXG5cdCAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuXHQgIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuXHQgICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG5cdCAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG5cdCAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuXHQgICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcblx0ICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcblx0ICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG5cdCAgICAgIH0pO1xuXHQgICAgfSk7XG5cdCAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG5cdCAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxOTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG5cdCAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuXHQgICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcblx0ICB9IHJldHVybiBpdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE5OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGN0eCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOClcblx0ICAsIGNhbGwgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTMpXG5cdCAgLCBpc0FycmF5SXRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTU0KVxuXHQgICwgYW5PYmplY3QgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgdG9MZW5ndGggICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgZ2V0SXRlckZuICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Nilcblx0ICAsIEJSRUFLICAgICAgID0ge31cblx0ICAsIFJFVFVSTiAgICAgID0ge307XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcblx0ICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG5cdCAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuXHQgICAgLCBpbmRleCAgPSAwXG5cdCAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcblx0ICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG5cdCAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG5cdCAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuXHQgICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuXHQgICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuXHQgIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcblx0ICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuXHQgICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuXHQgIH1cblx0fTtcblx0ZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcblx0ZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cbi8qKiovIH0sXG4vKiAxOTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxuXHR2YXIgYW5PYmplY3QgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCBTUEVDSUVTICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnc3BlY2llcycpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuXHQgIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG5cdCAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgY3R4ICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOClcblx0ICAsIGludm9rZSAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNzYpXG5cdCAgLCBodG1sICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KVxuXHQgICwgY2VsICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMylcblx0ICAsIGdsb2JhbCAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG5cdCAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG5cdCAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcblx0ICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuXHQgICwgY291bnRlciAgICAgICAgICAgID0gMFxuXHQgICwgcXVldWUgICAgICAgICAgICAgID0ge31cblx0ICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG5cdCAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcblx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG5cdCAgdmFyIGlkID0gK3RoaXM7XG5cdCAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcblx0ICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcblx0ICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG5cdCAgICBmbigpO1xuXHQgIH1cblx0fTtcblx0dmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuXHQgIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xuXHR9O1xuXHQvLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5cdGlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuXHQgIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuXHQgICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG5cdCAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuXHQgICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG5cdCAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcblx0ICAgIH07XG5cdCAgICBkZWZlcihjb3VudGVyKTtcblx0ICAgIHJldHVybiBjb3VudGVyO1xuXHQgIH07XG5cdCAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuXHQgICAgZGVsZXRlIHF1ZXVlW2lkXTtcblx0ICB9O1xuXHQgIC8vIE5vZGUuanMgMC44LVxuXHQgIGlmKF9fd2VicGFja19yZXF1aXJlX18oMzIpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG5cdCAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcblx0ICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuXHQgICAgfTtcblx0ICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG5cdCAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcblx0ICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG5cdCAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0Mjtcblx0ICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG5cdCAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcblx0ICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcblx0ICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuXHQgIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuXHQgICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG5cdCAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuXHQgICAgfTtcblx0ICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcblx0ICAvLyBJRTgtXG5cdCAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcblx0ICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuXHQgICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuXHQgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG5cdCAgICAgICAgcnVuLmNhbGwoaWQpO1xuXHQgICAgICB9O1xuXHQgICAgfTtcblx0ICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuXHQgIH0gZWxzZSB7XG5cdCAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcblx0ICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuXHQgICAgfTtcblx0ICB9XG5cdH1cblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgc2V0OiAgIHNldFRhc2ssXG5cdCAgY2xlYXI6IGNsZWFyVGFza1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgbWFjcm90YXNrID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDApLnNldFxuXHQgICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcblx0ICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG5cdCAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuXHQgICwgaXNOb2RlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMikocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcblx0ICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG5cdCAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcblx0ICAgIHZhciBwYXJlbnQsIGZuO1xuXHQgICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcblx0ICAgIHdoaWxlKGhlYWQpe1xuXHQgICAgICBmbiAgID0gaGVhZC5mbjtcblx0ICAgICAgaGVhZCA9IGhlYWQubmV4dDtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICBmbigpO1xuXHQgICAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG5cdCAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIHRocm93IGU7XG5cdCAgICAgIH1cblx0ICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcblx0ICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcblx0ICB9O1xuXG5cdCAgLy8gTm9kZS5qc1xuXHQgIGlmKGlzTm9kZSl7XG5cdCAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuXHQgICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcblx0ICAgIH07XG5cdCAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG5cdCAgfSBlbHNlIGlmKE9ic2VydmVyKXtcblx0ICAgIHZhciB0b2dnbGUgPSB0cnVlXG5cdCAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHQgICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cdCAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuXHQgICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuXHQgICAgfTtcblx0ICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuXHQgIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG5cdCAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXHQgICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcblx0ICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcblx0ICAgIH07XG5cdCAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcblx0ICAvLyAtIHNldEltbWVkaWF0ZVxuXHQgIC8vIC0gTWVzc2FnZUNoYW5uZWxcblx0ICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG5cdCAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2Vcblx0ICAvLyAtIHNldFRpbWVvdXRcblx0ICB9IGVsc2Uge1xuXHQgICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcblx0ICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuXHQgICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcblx0ICAgIH07XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcblx0ICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcblx0ICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcblx0ICAgIGlmKCFoZWFkKXtcblx0ICAgICAgaGVhZCA9IHRhc2s7XG5cdCAgICAgIG5vdGlmeSgpO1xuXHQgICAgfSBsYXN0ID0gdGFzaztcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG5cdCAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG5cdCAgcmV0dXJuIHRhcmdldDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIwMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgc3Ryb25nID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDQpO1xuXG5cdC8vIDIzLjEgTWFwIE9iamVjdHNcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwNSkoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcblx0fSwge1xuXHQgIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuXHQgICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG5cdCAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcblx0ICB9LFxuXHQgIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG5cdCAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG5cdCAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG5cdCAgfVxuXHR9LCBzdHJvbmcsIHRydWUpO1xuXG4vKioqLyB9LFxuLyogMjA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBkUCAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSkuZlxuXHQgICwgY3JlYXRlICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KVxuXHQgICwgcmVkZWZpbmVBbGwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMilcblx0ICAsIGN0eCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOClcblx0ICAsIGFuSW5zdGFuY2UgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTcpXG5cdCAgLCBkZWZpbmVkICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpXG5cdCAgLCBmb3JPZiAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk4KVxuXHQgICwgJGl0ZXJEZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNClcblx0ICAsIHN0ZXAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODQpXG5cdCAgLCBzZXRTcGVjaWVzICA9IF9fd2VicGFja19yZXF1aXJlX18oMTg2KVxuXHQgICwgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpXG5cdCAgLCBmYXN0S2V5ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjApLmZhc3RLZXlcblx0ICAsIFNJWkUgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG5cdHZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG5cdCAgLy8gZmFzdCBjYXNlXG5cdCAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcblx0ICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcblx0ICAvLyBmcm96ZW4gb2JqZWN0IGNhc2Vcblx0ICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcblx0ICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcblx0ICB9XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuXHQgICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcblx0ICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcblx0ICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcblx0ICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcblx0ICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuXHQgICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG5cdCAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG5cdCAgICB9KTtcblx0ICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG5cdCAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuXHQgICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcblx0ICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG5cdCAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG5cdCAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcblx0ICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB0aGF0W1NJWkVdID0gMDtcblx0ICAgICAgfSxcblx0ICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuXHQgICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcblx0ICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG5cdCAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuXHQgICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG5cdCAgICAgICAgaWYoZW50cnkpe1xuXHQgICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG5cdCAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XG5cdCAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcblx0ICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuXHQgICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuXHQgICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuXHQgICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcblx0ICAgICAgICAgIGlmKHRoYXQuX2wgPT0gZW50cnkpdGhhdC5fbCA9IHByZXY7XG5cdCAgICAgICAgICB0aGF0W1NJWkVdLS07XG5cdCAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcblx0ICAgICAgfSxcblx0ICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG5cdCAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuXHQgICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuXHQgICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgJ2ZvckVhY2gnKTtcblx0ICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcblx0ICAgICAgICAgICwgZW50cnk7XG5cdCAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcblx0ICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG5cdCAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcblx0ICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSxcblx0ICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuXHQgICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcblx0ICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcblx0ICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICAgIGlmKERFU0NSSVBUT1JTKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcblx0ICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuXHQgICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBDO1xuXHQgIH0sXG5cdCAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcblx0ICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcblx0ICAgICAgLCBwcmV2LCBpbmRleDtcblx0ICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuXHQgICAgaWYoZW50cnkpe1xuXHQgICAgICBlbnRyeS52ID0gdmFsdWU7XG5cdCAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG5cdCAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG5cdCAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuXHQgICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuXHQgICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuXHQgICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG5cdCAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcblx0ICAgICAgfTtcblx0ICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuXHQgICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuXHQgICAgICB0aGF0W1NJWkVdKys7XG5cdCAgICAgIC8vIGFkZCB0byBpbmRleFxuXHQgICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG5cdCAgICB9IHJldHVybiB0aGF0O1xuXHQgIH0sXG5cdCAgZ2V0RW50cnk6IGdldEVudHJ5LFxuXHQgIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcblx0ICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuXHQgICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuXHQgICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuXHQgICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcblx0ICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuXHQgICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuXHQgICAgfSwgZnVuY3Rpb24oKXtcblx0ICAgICAgdmFyIHRoYXQgID0gdGhpc1xuXHQgICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG5cdCAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG5cdCAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuXHQgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcblx0ICAgICAgLy8gZ2V0IG5leHQgZW50cnlcblx0ICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG5cdCAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cblx0ICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIHJldHVybiBzdGVwKDEpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcblx0ICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcblx0ICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcblx0ICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcblx0ICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cblx0ICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG5cdCAgICBzZXRTcGVjaWVzKE5BTUUpO1xuXHQgIH1cblx0fTtcblxuLyoqKi8gfSxcbi8qIDIwNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZ2xvYmFsICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCAkZXhwb3J0ICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHJlZGVmaW5lICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNilcblx0ICAsIHJlZGVmaW5lQWxsICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDIpXG5cdCAgLCBtZXRhICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjApXG5cdCAgLCBmb3JPZiAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk4KVxuXHQgICwgYW5JbnN0YW5jZSAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5Nylcblx0ICAsIGlzT2JqZWN0ICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGZhaWxzICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgJGl0ZXJEZXRlY3QgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Nylcblx0ICAsIHNldFRvU3RyaW5nVGFnICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMilcblx0ICAsIGluaGVyaXRJZlJlcXVpcmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4MCk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG5cdCAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG5cdCAgICAsIEMgICAgID0gQmFzZVxuXHQgICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcblx0ICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG5cdCAgICAsIE8gICAgID0ge307XG5cdCAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uKEtFWSl7XG5cdCAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuXHQgICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcblx0ICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24oYSl7XG5cdCAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG5cdCAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSl7XG5cdCAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG5cdCAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSl7XG5cdCAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuXHQgICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG5cdCAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYil7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cblx0ICAgICk7XG5cdCAgfTtcblx0ICBpZih0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuXHQgIH0pKSl7XG5cdCAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuXHQgICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcblx0ICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcblx0ICAgIG1ldGEuTkVFRCA9IHRydWU7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHZhciBpbnN0YW5jZSAgICAgICAgICAgICA9IG5ldyBDXG5cdCAgICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcblx0ICAgICAgLCBIQVNOVF9DSEFJTklORyAgICAgICA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2Vcblx0ICAgICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG5cdCAgICAgICwgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbigpeyBpbnN0YW5jZS5oYXMoMSk7IH0pXG5cdCAgICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcblx0ICAgICAgLCBBQ0NFUFRfSVRFUkFCTEVTICAgICA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uKGl0ZXIpeyBuZXcgQyhpdGVyKTsgfSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblx0ICAgICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG5cdCAgICAgICwgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG5cdCAgICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBDKClcblx0ICAgICAgICAgICwgaW5kZXggICAgID0gNTtcblx0ICAgICAgICB3aGlsZShpbmRleC0tKSRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcblx0ICAgICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuXHQgICAgICB9KTtcblx0ICAgIGlmKCFBQ0NFUFRfSVRFUkFCTEVTKXsgXG5cdCAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuXHQgICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcblx0ICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlLCB0YXJnZXQsIEMpO1xuXHQgICAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG5cdCAgICAgICAgcmV0dXJuIHRoYXQ7XG5cdCAgICAgIH0pO1xuXHQgICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuXHQgICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG5cdCAgICB9XG5cdCAgICBpZihUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKXtcblx0ICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcblx0ICAgICAgZml4TWV0aG9kKCdoYXMnKTtcblx0ICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG5cdCAgICB9XG5cdCAgICBpZihCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKWZpeE1ldGhvZChBRERFUik7XG5cdCAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuXHQgICAgaWYoSVNfV0VBSyAmJiBwcm90by5jbGVhcilkZWxldGUgcHJvdG8uY2xlYXI7XG5cdCAgfVxuXG5cdCAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cblx0ICBPW05BTUVdID0gQztcblx0ICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuXHQgIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuXHQgIHJldHVybiBDO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjA2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBzdHJvbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwNCk7XG5cblx0Ly8gMjMuMiBTZXQgT2JqZWN0c1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjA1KSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xuXHR9LCB7XG5cdCAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG5cdCAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuXHQgICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuXHQgIH1cblx0fSwgc3Ryb25nKTtcblxuLyoqKi8gfSxcbi8qIDIwNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZWFjaCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjQpKDApXG5cdCAgLCByZWRlZmluZSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KVxuXHQgICwgbWV0YSAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMClcblx0ICAsIGFzc2lnbiAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNjcpXG5cdCAgLCB3ZWFrICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwOClcblx0ICAsIGlzT2JqZWN0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBnZXRXZWFrICAgICAgPSBtZXRhLmdldFdlYWtcblx0ICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGVcblx0ICAsIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSB3ZWFrLnVmc3RvcmVcblx0ICAsIHRtcCAgICAgICAgICA9IHt9XG5cdCAgLCBJbnRlcm5hbE1hcDtcblxuXHR2YXIgd3JhcHBlciA9IGZ1bmN0aW9uKGdldCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKXtcblx0ICAgIHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuXHQgIH07XG5cdH07XG5cblx0dmFyIG1ldGhvZHMgPSB7XG5cdCAgLy8gMjMuMy4zLjMgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuXHQgICAgaWYoaXNPYmplY3Qoa2V5KSl7XG5cdCAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuXHQgICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpLmdldChrZXkpO1xuXHQgICAgICByZXR1cm4gZGF0YSA/IGRhdGFbdGhpcy5faV0gOiB1bmRlZmluZWQ7XG5cdCAgICB9XG5cdCAgfSxcblx0ICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcblx0ICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcblx0ICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCBrZXksIHZhbHVlKTtcblx0ICB9XG5cdH07XG5cblx0Ly8gMjMuMyBXZWFrTWFwIE9iamVjdHNcblx0dmFyICRXZWFrTWFwID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwNSkoJ1dlYWtNYXAnLCB3cmFwcGVyLCBtZXRob2RzLCB3ZWFrLCB0cnVlLCB0cnVlKTtcblxuXHQvLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5cdGlmKG5ldyAkV2Vha01hcCgpLnNldCgoT2JqZWN0LmZyZWV6ZSB8fCBPYmplY3QpKHRtcCksIDcpLmdldCh0bXApICE9IDcpe1xuXHQgIEludGVybmFsTWFwID0gd2Vhay5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyKTtcblx0ICBhc3NpZ24oSW50ZXJuYWxNYXAucHJvdG90eXBlLCBtZXRob2RzKTtcblx0ICBtZXRhLk5FRUQgPSB0cnVlO1xuXHQgIGVhY2goWydkZWxldGUnLCAnaGFzJywgJ2dldCcsICdzZXQnXSwgZnVuY3Rpb24oa2V5KXtcblx0ICAgIHZhciBwcm90byAgPSAkV2Vha01hcC5wcm90b3R5cGVcblx0ICAgICAgLCBtZXRob2QgPSBwcm90b1trZXldO1xuXHQgICAgcmVkZWZpbmUocHJvdG8sIGtleSwgZnVuY3Rpb24oYSwgYil7XG5cdCAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGludGVybmFsIHdlYWttYXAgc2hpbVxuXHQgICAgICBpZihpc09iamVjdChhKSAmJiAhaXNFeHRlbnNpYmxlKGEpKXtcblx0ICAgICAgICBpZighdGhpcy5fZil0aGlzLl9mID0gbmV3IEludGVybmFsTWFwO1xuXHQgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9mW2tleV0oYSwgYik7XG5cdCAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG5cdCAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxuXHQgICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcblx0ICAgIH0pO1xuXHQgIH0pO1xuXHR9XG5cbi8qKiovIH0sXG4vKiAyMDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHJlZGVmaW5lQWxsICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDIpXG5cdCAgLCBnZXRXZWFrICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjApLmdldFdlYWtcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGlzT2JqZWN0ICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGFuSW5zdGFuY2UgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTcpXG5cdCAgLCBmb3JPZiAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk4KVxuXHQgICwgY3JlYXRlQXJyYXlNZXRob2QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NClcblx0ICAsICRoYXMgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgYXJyYXlGaW5kICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg1KVxuXHQgICwgYXJyYXlGaW5kSW5kZXggICAgPSBjcmVhdGVBcnJheU1ldGhvZCg2KVxuXHQgICwgaWQgICAgICAgICAgICAgICAgPSAwO1xuXG5cdC8vIGZhbGxiYWNrIGZvciB1bmNhdWdodCBmcm96ZW4ga2V5c1xuXHR2YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKHRoYXQpe1xuXHQgIHJldHVybiB0aGF0Ll9sIHx8ICh0aGF0Ll9sID0gbmV3IFVuY2F1Z2h0RnJvemVuU3RvcmUpO1xuXHR9O1xuXHR2YXIgVW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKCl7XG5cdCAgdGhpcy5hID0gW107XG5cdH07XG5cdHZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbihzdG9yZSwga2V5KXtcblx0ICByZXR1cm4gYXJyYXlGaW5kKHN0b3JlLmEsIGZ1bmN0aW9uKGl0KXtcblx0ICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuXHQgIH0pO1xuXHR9O1xuXHRVbmNhdWdodEZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcblx0ICBnZXQ6IGZ1bmN0aW9uKGtleSl7XG5cdCAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcblx0ICAgIGlmKGVudHJ5KXJldHVybiBlbnRyeVsxXTtcblx0ICB9LFxuXHQgIGhhczogZnVuY3Rpb24oa2V5KXtcblx0ICAgIHJldHVybiAhIWZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuXHQgIH0sXG5cdCAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKXtcblx0ICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuXHQgICAgaWYoZW50cnkpZW50cnlbMV0gPSB2YWx1ZTtcblx0ICAgIGVsc2UgdGhpcy5hLnB1c2goW2tleSwgdmFsdWVdKTtcblx0ICB9LFxuXHQgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuXHQgICAgdmFyIGluZGV4ID0gYXJyYXlGaW5kSW5kZXgodGhpcy5hLCBmdW5jdGlvbihpdCl7XG5cdCAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuXHQgICAgfSk7XG5cdCAgICBpZih+aW5kZXgpdGhpcy5hLnNwbGljZShpbmRleCwgMSk7XG5cdCAgICByZXR1cm4gISF+aW5kZXg7XG5cdCAgfVxuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcblx0ICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG5cdCAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG5cdCAgICAgIHRoYXQuX2kgPSBpZCsrOyAgICAgIC8vIGNvbGxlY3Rpb24gaWRcblx0ICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgLy8gbGVhayBzdG9yZSBmb3IgdW5jYXVnaHQgZnJvemVuIG9iamVjdHNcblx0ICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcblx0ICAgIH0pO1xuXHQgICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcblx0ICAgICAgLy8gMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcblx0ICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuXHQgICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcblx0ICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG5cdCAgICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKVsnZGVsZXRlJ10oa2V5KTtcblx0ICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpICYmIGRlbGV0ZSBkYXRhW3RoaXMuX2ldO1xuXHQgICAgICB9LFxuXHQgICAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuXHQgICAgICAvLyAyMy40LjMuNCBXZWFrU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG5cdCAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG5cdCAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuXHQgICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcykuaGFzKGtleSk7XG5cdCAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gQztcblx0ICB9LFxuXHQgIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG5cdCAgICB2YXIgZGF0YSA9IGdldFdlYWsoYW5PYmplY3Qoa2V5KSwgdHJ1ZSk7XG5cdCAgICBpZihkYXRhID09PSB0cnVlKXVuY2F1Z2h0RnJvemVuU3RvcmUodGhhdCkuc2V0KGtleSwgdmFsdWUpO1xuXHQgICAgZWxzZSBkYXRhW3RoYXQuX2ldID0gdmFsdWU7XG5cdCAgICByZXR1cm4gdGhhdDtcblx0ICB9LFxuXHQgIHVmc3RvcmU6IHVuY2F1Z2h0RnJvemVuU3RvcmVcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIwOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgd2VhayA9IF9fd2VicGFja19yZXF1aXJlX18oMjA4KTtcblxuXHQvLyAyMy40IFdlYWtTZXQgT2JqZWN0c1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIwNSkoJ1dlYWtTZXQnLCBmdW5jdGlvbihnZXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBXZWFrU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xuXHR9LCB7XG5cdCAgLy8gMjMuNC4zLjEgV2Vha1NldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuXHQgIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcblx0ICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCB2YWx1ZSwgdHJ1ZSk7XG5cdCAgfVxuXHR9LCB3ZWFrLCBmYWxzZSwgdHJ1ZSk7XG5cbi8qKiovIH0sXG4vKiAyMTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuMSBSZWZsZWN0LmFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KVxuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsIGFuT2JqZWN0ICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCByQXBwbHkgICAgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKS5SZWZsZWN0IHx8IHt9KS5hcHBseVxuXHQgICwgZkFwcGx5ICAgID0gRnVuY3Rpb24uYXBwbHk7XG5cdC8vIE1TIEVkZ2UgYXJndW1lbnRzTGlzdCBhcmd1bWVudCBpcyBvcHRpb25hbFxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgckFwcGx5KGZ1bmN0aW9uKCl7fSk7XG5cdH0pLCAnUmVmbGVjdCcsIHtcblx0ICBhcHBseTogZnVuY3Rpb24gYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3Qpe1xuXHQgICAgdmFyIFQgPSBhRnVuY3Rpb24odGFyZ2V0KVxuXHQgICAgICAsIEwgPSBhbk9iamVjdChhcmd1bWVudHNMaXN0KTtcblx0ICAgIHJldHVybiByQXBwbHkgPyByQXBwbHkoVCwgdGhpc0FyZ3VtZW50LCBMKSA6IGZBcHBseS5jYWxsKFQsIHRoaXNBcmd1bWVudCwgTCk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS4yIFJlZmxlY3QuY29uc3RydWN0KHRhcmdldCwgYXJndW1lbnRzTGlzdCBbLCBuZXdUYXJnZXRdKVxuXHR2YXIgJGV4cG9ydCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGNyZWF0ZSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KVxuXHQgICwgYUZ1bmN0aW9uICA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCBhbk9iamVjdCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGlzT2JqZWN0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgZmFpbHMgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsIGJpbmQgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc1KVxuXHQgICwgckNvbnN0cnVjdCA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLlJlZmxlY3QgfHwge30pLmNvbnN0cnVjdDtcblxuXHQvLyBNUyBFZGdlIHN1cHBvcnRzIG9ubHkgMiBhcmd1bWVudHMgYW5kIGFyZ3VtZW50c0xpc3QgYXJndW1lbnQgaXMgb3B0aW9uYWxcblx0Ly8gRkYgTmlnaHRseSBzZXRzIHRoaXJkIGFyZ3VtZW50IGFzIGBuZXcudGFyZ2V0YCwgYnV0IGRvZXMgbm90IGNyZWF0ZSBgdGhpc2AgZnJvbSBpdFxuXHR2YXIgTkVXX1RBUkdFVF9CVUcgPSBmYWlscyhmdW5jdGlvbigpe1xuXHQgIGZ1bmN0aW9uIEYoKXt9XG5cdCAgcmV0dXJuICEockNvbnN0cnVjdChmdW5jdGlvbigpe30sIFtdLCBGKSBpbnN0YW5jZW9mIEYpO1xuXHR9KTtcblx0dmFyIEFSR1NfQlVHID0gIWZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgckNvbnN0cnVjdChmdW5jdGlvbigpe30pO1xuXHR9KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChORVdfVEFSR0VUX0JVRyB8fCBBUkdTX0JVRyksICdSZWZsZWN0Jywge1xuXHQgIGNvbnN0cnVjdDogZnVuY3Rpb24gY29uc3RydWN0KFRhcmdldCwgYXJncyAvKiwgbmV3VGFyZ2V0Ki8pe1xuXHQgICAgYUZ1bmN0aW9uKFRhcmdldCk7XG5cdCAgICBhbk9iamVjdChhcmdzKTtcblx0ICAgIHZhciBuZXdUYXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IFRhcmdldCA6IGFGdW5jdGlvbihhcmd1bWVudHNbMl0pO1xuXHQgICAgaWYoQVJHU19CVUcgJiYgIU5FV19UQVJHRVRfQlVHKXJldHVybiByQ29uc3RydWN0KFRhcmdldCwgYXJncywgbmV3VGFyZ2V0KTtcblx0ICAgIGlmKFRhcmdldCA9PSBuZXdUYXJnZXQpe1xuXHQgICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIG9wdGltaXphdGlvbiBmb3IgMC00IGFyZ3VtZW50c1xuXHQgICAgICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuXHQgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBUYXJnZXQ7XG5cdCAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdKTtcblx0ICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0pO1xuXHQgICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG5cdCAgICAgICAgY2FzZSA0OiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuXHQgICAgICB2YXIgJGFyZ3MgPSBbbnVsbF07XG5cdCAgICAgICRhcmdzLnB1c2guYXBwbHkoJGFyZ3MsIGFyZ3MpO1xuXHQgICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKTtcblx0ICAgIH1cblx0ICAgIC8vIHdpdGggYWx0ZXJlZCBuZXdUYXJnZXQsIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGNvbnN0cnVjdG9yc1xuXHQgICAgdmFyIHByb3RvICAgID0gbmV3VGFyZ2V0LnByb3RvdHlwZVxuXHQgICAgICAsIGluc3RhbmNlID0gY3JlYXRlKGlzT2JqZWN0KHByb3RvKSA/IHByb3RvIDogT2JqZWN0LnByb3RvdHlwZSlcblx0ICAgICAgLCByZXN1bHQgICA9IEZ1bmN0aW9uLmFwcGx5LmNhbGwoVGFyZ2V0LCBpbnN0YW5jZSwgYXJncyk7XG5cdCAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuMyBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpXG5cdHZhciBkUCAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSlcblx0ICAsICRleHBvcnQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgYW5PYmplY3QgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxuXHQvLyBNUyBFZGdlIGhhcyBicm9rZW4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSAtIHRocm93aW5nIGluc3RlYWQgb2YgcmV0dXJuaW5nIGZhbHNlXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoZFAuZih7fSwgMSwge3ZhbHVlOiAxfSksIDEsIHt2YWx1ZTogMn0pO1xuXHR9KSwgJ1JlZmxlY3QnLCB7XG5cdCAgZGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpe1xuXHQgICAgYW5PYmplY3QodGFyZ2V0KTtcblx0ICAgIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUocHJvcGVydHlLZXksIHRydWUpO1xuXHQgICAgYW5PYmplY3QoYXR0cmlidXRlcyk7XG5cdCAgICB0cnkge1xuXHQgICAgICBkUC5mKHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpO1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjEzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjQgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KVxuXHR2YXIgJGV4cG9ydCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBnT1BEICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpLmZcblx0ICAsIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuXHQgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KXtcblx0ICAgIHZhciBkZXNjID0gZ09QRChhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG5cdCAgICByZXR1cm4gZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUgPyBmYWxzZSA6IGRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gMjYuMS41IFJlZmxlY3QuZW51bWVyYXRlKHRhcmdldClcblx0dmFyICRleHBvcnQgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0dmFyIEVudW1lcmF0ZSA9IGZ1bmN0aW9uKGl0ZXJhdGVkKXtcblx0ICB0aGlzLl90ID0gYW5PYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcblx0ICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG5cdCAgdmFyIGtleXMgPSB0aGlzLl9rID0gW10gICAgICAgLy8ga2V5c1xuXHQgICAgLCBrZXk7XG5cdCAgZm9yKGtleSBpbiBpdGVyYXRlZClrZXlzLnB1c2goa2V5KTtcblx0fTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzYpKEVudW1lcmF0ZSwgJ09iamVjdCcsIGZ1bmN0aW9uKCl7XG5cdCAgdmFyIHRoYXQgPSB0aGlzXG5cdCAgICAsIGtleXMgPSB0aGF0Ll9rXG5cdCAgICAsIGtleTtcblx0ICBkbyB7XG5cdCAgICBpZih0aGF0Ll9pID49IGtleXMubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG5cdCAgfSB3aGlsZSghKChrZXkgPSBrZXlzW3RoYXQuX2krK10pIGluIHRoYXQuX3QpKTtcblx0ICByZXR1cm4ge3ZhbHVlOiBrZXksIGRvbmU6IGZhbHNlfTtcblx0fSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuXHQgIGVudW1lcmF0ZTogZnVuY3Rpb24gZW51bWVyYXRlKHRhcmdldCl7XG5cdCAgICByZXR1cm4gbmV3IEVudW1lcmF0ZSh0YXJnZXQpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuNiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5S2V5IFssIHJlY2VpdmVyXSlcblx0dmFyIGdPUEQgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSlcblx0ICAsIGdldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAsIGhhcyAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICwgJGV4cG9ydCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBpc09iamVjdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBhbk9iamVjdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5cdGZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3BlcnR5S2V5LyosIHJlY2VpdmVyKi8pe1xuXHQgIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogYXJndW1lbnRzWzJdXG5cdCAgICAsIGRlc2MsIHByb3RvO1xuXHQgIGlmKGFuT2JqZWN0KHRhcmdldCkgPT09IHJlY2VpdmVyKXJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuXHQgIGlmKGRlc2MgPSBnT1BELmYodGFyZ2V0LCBwcm9wZXJ0eUtleSkpcmV0dXJuIGhhcyhkZXNjLCAndmFsdWUnKVxuXHQgICAgPyBkZXNjLnZhbHVlXG5cdCAgICA6IGRlc2MuZ2V0ICE9PSB1bmRlZmluZWRcblx0ICAgICAgPyBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKVxuXHQgICAgICA6IHVuZGVmaW5lZDtcblx0ICBpZihpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKXJldHVybiBnZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcik7XG5cdH1cblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7Z2V0OiBnZXR9KTtcblxuLyoqKi8gfSxcbi8qIDIxNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS43IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpXG5cdHZhciBnT1BEICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpXG5cdCAgLCAkZXhwb3J0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuXHQgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpe1xuXHQgICAgcmV0dXJuIGdPUEQuZihhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIxNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS44IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxuXHR2YXIgJGV4cG9ydCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBnZXRQcm90byA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgLCBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcblx0ICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KXtcblx0ICAgIHJldHVybiBnZXRQcm90byhhbk9iamVjdCh0YXJnZXQpKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjE4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjkgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wZXJ0eUtleSlcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcblx0ICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KXtcblx0ICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIxOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS4xMCBSZWZsZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpXG5cdHZhciAkZXhwb3J0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgYW5PYmplY3QgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCAkaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG5cdCAgaXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBpc0V4dGVuc2libGUodGFyZ2V0KXtcblx0ICAgIGFuT2JqZWN0KHRhcmdldCk7XG5cdCAgICByZXR1cm4gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUodGFyZ2V0KSA6IHRydWU7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIyMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS4xMSBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge293bktleXM6IF9fd2VicGFja19yZXF1aXJlX18oMjIxKX0pO1xuXG4vKioqLyB9LFxuLyogMjIxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5cdHZhciBnT1BOICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDgpXG5cdCAgLCBnT1BTICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpXG5cdCAgLCBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBSZWZsZWN0ICA9IF9fd2VicGFja19yZXF1aXJlX18oMikuUmVmbGVjdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBSZWZsZWN0ICYmIFJlZmxlY3Qub3duS2V5cyB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KXtcblx0ICB2YXIga2V5cyAgICAgICA9IGdPUE4uZihhbk9iamVjdChpdCkpXG5cdCAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG5cdCAgcmV0dXJuIGdldFN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRTeW1ib2xzKGl0KSkgOiBrZXlzO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjIyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjEyIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KVxuXHR2YXIgJGV4cG9ydCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgYW5PYmplY3QgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsICRwcmV2ZW50RXh0ZW5zaW9ucyA9IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucztcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG5cdCAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCl7XG5cdCAgICBhbk9iamVjdCh0YXJnZXQpO1xuXHQgICAgdHJ5IHtcblx0ICAgICAgaWYoJHByZXZlbnRFeHRlbnNpb25zKSRwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjIzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjEzIFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFYgWywgcmVjZWl2ZXJdKVxuXHR2YXIgZFAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpXG5cdCAgLCBnT1BEICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpXG5cdCAgLCBnZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgLCBoYXMgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsICRleHBvcnQgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgY3JlYXRlRGVzYyAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KVxuXHQgICwgYW5PYmplY3QgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgaXNPYmplY3QgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxuXHRmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgVi8qLCByZWNlaXZlciovKXtcblx0ICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgNCA/IHRhcmdldCA6IGFyZ3VtZW50c1szXVxuXHQgICAgLCBvd25EZXNjICA9IGdPUEQuZihhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSlcblx0ICAgICwgZXhpc3RpbmdEZXNjcmlwdG9yLCBwcm90bztcblx0ICBpZighb3duRGVzYyl7XG5cdCAgICBpZihpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKXtcblx0ICAgICAgcmV0dXJuIHNldChwcm90bywgcHJvcGVydHlLZXksIFYsIHJlY2VpdmVyKTtcblx0ICAgIH1cblx0ICAgIG93bkRlc2MgPSBjcmVhdGVEZXNjKDApO1xuXHQgIH1cblx0ICBpZihoYXMob3duRGVzYywgJ3ZhbHVlJykpe1xuXHQgICAgaWYob3duRGVzYy53cml0YWJsZSA9PT0gZmFsc2UgfHwgIWlzT2JqZWN0KHJlY2VpdmVyKSlyZXR1cm4gZmFsc2U7XG5cdCAgICBleGlzdGluZ0Rlc2NyaXB0b3IgPSBnT1BELmYocmVjZWl2ZXIsIHByb3BlcnR5S2V5KSB8fCBjcmVhdGVEZXNjKDApO1xuXHQgICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcblx0ICAgIGRQLmYocmVjZWl2ZXIsIHByb3BlcnR5S2V5LCBleGlzdGluZ0Rlc2NyaXB0b3IpO1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHQgIHJldHVybiBvd25EZXNjLnNldCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAob3duRGVzYy5zZXQuY2FsbChyZWNlaXZlciwgViksIHRydWUpO1xuXHR9XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge3NldDogc2V0fSk7XG5cbi8qKiovIH0sXG4vKiAyMjQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxuXHR2YXIgJGV4cG9ydCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBzZXRQcm90byA9IF9fd2VicGFja19yZXF1aXJlX18oNzEpO1xuXG5cdGlmKHNldFByb3RvKSRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcblx0ICBzZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90byl7XG5cdCAgICBzZXRQcm90by5jaGVjayh0YXJnZXQsIHByb3RvKTtcblx0ICAgIHRyeSB7XG5cdCAgICAgIHNldFByb3RvLnNldCh0YXJnZXQsIHByb3RvKTtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9IGNhdGNoKGUpe1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIyNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMy4zLjEgLyAxNS45LjQuNCBEYXRlLm5vdygpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ0RhdGUnLCB7bm93OiBmdW5jdGlvbigpeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH19KTtcblxuLyoqKi8gfSxcbi8qIDIyNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b09iamVjdCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCB0b1ByaW1pdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHJldHVybiBuZXcgRGF0ZShOYU4pLnRvSlNPTigpICE9PSBudWxsIHx8IERhdGUucHJvdG90eXBlLnRvSlNPTi5jYWxsKHt0b0lTT1N0cmluZzogZnVuY3Rpb24oKXsgcmV0dXJuIDE7IH19KSAhPT0gMTtcblx0fSksICdEYXRlJywge1xuXHQgIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKGtleSl7XG5cdCAgICB2YXIgTyAgPSB0b09iamVjdCh0aGlzKVxuXHQgICAgICAsIHB2ID0gdG9QcmltaXRpdmUoTyk7XG5cdCAgICByZXR1cm4gdHlwZW9mIHB2ID09ICdudW1iZXInICYmICFpc0Zpbml0ZShwdikgPyBudWxsIDogTy50b0lTT1N0cmluZygpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMjcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gMjAuMy40LjM2IC8gMTUuOS41LjQzIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBmYWlscyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgZ2V0VGltZSA9IERhdGUucHJvdG90eXBlLmdldFRpbWU7XG5cblx0dmFyIGx6ID0gZnVuY3Rpb24obnVtKXtcblx0ICByZXR1cm4gbnVtID4gOSA/IG51bSA6ICcwJyArIG51bTtcblx0fTtcblxuXHQvLyBQaGFudG9tSlMgLyBvbGQgV2ViS2l0IGhhcyBhIGJyb2tlbiBpbXBsZW1lbnRhdGlvbnNcblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gbmV3IERhdGUoLTVlMTMgLSAxKS50b0lTT1N0cmluZygpICE9ICcwMzg1LTA3LTI1VDA3OjA2OjM5Ljk5OVonO1xuXHR9KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcblx0ICBuZXcgRGF0ZShOYU4pLnRvSVNPU3RyaW5nKCk7XG5cdH0pKSwgJ0RhdGUnLCB7XG5cdCAgdG9JU09TdHJpbmc6IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCl7XG5cdCAgICBpZighaXNGaW5pdGUoZ2V0VGltZS5jYWxsKHRoaXMpKSl0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcblx0ICAgIHZhciBkID0gdGhpc1xuXHQgICAgICAsIHkgPSBkLmdldFVUQ0Z1bGxZZWFyKClcblx0ICAgICAgLCBtID0gZC5nZXRVVENNaWxsaXNlY29uZHMoKVxuXHQgICAgICAsIHMgPSB5IDwgMCA/ICctJyA6IHkgPiA5OTk5ID8gJysnIDogJyc7XG5cdCAgICByZXR1cm4gcyArICgnMDAwMDAnICsgTWF0aC5hYnMoeSkpLnNsaWNlKHMgPyAtNiA6IC00KSArXG5cdCAgICAgICctJyArIGx6KGQuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICsgbHooZC5nZXRVVENEYXRlKCkpICtcblx0ICAgICAgJ1QnICsgbHooZC5nZXRVVENIb3VycygpKSArICc6JyArIGx6KGQuZ2V0VVRDTWludXRlcygpKSArXG5cdCAgICAgICc6JyArIGx6KGQuZ2V0VVRDU2Vjb25kcygpKSArICcuJyArIChtID4gOTkgPyBtIDogJzAnICsgbHoobSkpICsgJ1onO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMjggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBEYXRlUHJvdG8gICAgPSBEYXRlLnByb3RvdHlwZVxuXHQgICwgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSdcblx0ICAsIFRPX1NUUklORyAgICA9ICd0b1N0cmluZydcblx0ICAsICR0b1N0cmluZyAgICA9IERhdGVQcm90b1tUT19TVFJJTkddXG5cdCAgLCBnZXRUaW1lICAgICAgPSBEYXRlUHJvdG8uZ2V0VGltZTtcblx0aWYobmV3IERhdGUoTmFOKSArICcnICE9IElOVkFMSURfREFURSl7XG5cdCAgX193ZWJwYWNrX3JlcXVpcmVfXygxNikoRGF0ZVByb3RvLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG5cdCAgICB2YXIgdmFsdWUgPSBnZXRUaW1lLmNhbGwodGhpcyk7XG5cdCAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gJHRvU3RyaW5nLmNhbGwodGhpcykgOiBJTlZBTElEX0RBVEU7XG5cdCAgfSk7XG5cdH1cblxuLyoqKi8gfSxcbi8qIDIyOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIFRPX1BSSU1JVElWRSA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCd0b1ByaW1pdGl2ZScpXG5cdCAgLCBwcm90byAgICAgICAgPSBEYXRlLnByb3RvdHlwZTtcblxuXHRpZighKFRPX1BSSU1JVElWRSBpbiBwcm90bykpX193ZWJwYWNrX3JlcXVpcmVfXyg4KShwcm90bywgVE9fUFJJTUlUSVZFLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzMCkpO1xuXG4vKioqLyB9LFxuLyogMjMwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBhbk9iamVjdCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCB0b1ByaW1pdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpXG5cdCAgLCBOVU1CRVIgICAgICA9ICdudW1iZXInO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGludCl7XG5cdCAgaWYoaGludCAhPT0gJ3N0cmluZycgJiYgaGludCAhPT0gTlVNQkVSICYmIGhpbnQgIT09ICdkZWZhdWx0Jyl0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBoaW50Jyk7XG5cdCAgcmV0dXJuIHRvUHJpbWl0aXZlKGFuT2JqZWN0KHRoaXMpLCBoaW50ICE9IE5VTUJFUik7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMzEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICR0eXBlZCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMyKVxuXHQgICwgYnVmZmVyICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMzMpXG5cdCAgLCBhbk9iamVjdCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgdG9JbmRleCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNylcblx0ICAsIHRvTGVuZ3RoICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCBpc09iamVjdCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgQXJyYXlCdWZmZXIgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5BcnJheUJ1ZmZlclxuXHQgICwgc3BlY2llc0NvbnN0cnVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTkpXG5cdCAgLCAkQXJyYXlCdWZmZXIgPSBidWZmZXIuQXJyYXlCdWZmZXJcblx0ICAsICREYXRhVmlldyAgICA9IGJ1ZmZlci5EYXRhVmlld1xuXHQgICwgJGlzVmlldyAgICAgID0gJHR5cGVkLkFCViAmJiBBcnJheUJ1ZmZlci5pc1ZpZXdcblx0ICAsICRzbGljZSAgICAgICA9ICRBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2Vcblx0ICAsIFZJRVcgICAgICAgICA9ICR0eXBlZC5WSUVXXG5cdCAgLCBBUlJBWV9CVUZGRVIgPSAnQXJyYXlCdWZmZXInO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEFycmF5QnVmZmVyICE9PSAkQXJyYXlCdWZmZXIpLCB7QXJyYXlCdWZmZXI6ICRBcnJheUJ1ZmZlcn0pO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISR0eXBlZC5DT05TVFIsIEFSUkFZX0JVRkZFUiwge1xuXHQgIC8vIDI0LjEuMy4xIEFycmF5QnVmZmVyLmlzVmlldyhhcmcpXG5cdCAgaXNWaWV3OiBmdW5jdGlvbiBpc1ZpZXcoaXQpe1xuXHQgICAgcmV0dXJuICRpc1ZpZXcgJiYgJGlzVmlldyhpdCkgfHwgaXNPYmplY3QoaXQpICYmIFZJRVcgaW4gaXQ7XG5cdCAgfVxuXHR9KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuVSArICRleHBvcnQuRiAqIF9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gIW5ldyAkQXJyYXlCdWZmZXIoMikuc2xpY2UoMSwgdW5kZWZpbmVkKS5ieXRlTGVuZ3RoO1xuXHR9KSwgQVJSQVlfQlVGRkVSLCB7XG5cdCAgLy8gMjQuMS40LjMgQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlKHN0YXJ0LCBlbmQpXG5cdCAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpe1xuXHQgICAgaWYoJHNsaWNlICE9PSB1bmRlZmluZWQgJiYgZW5kID09PSB1bmRlZmluZWQpcmV0dXJuICRzbGljZS5jYWxsKGFuT2JqZWN0KHRoaXMpLCBzdGFydCk7IC8vIEZGIGZpeFxuXHQgICAgdmFyIGxlbiAgICA9IGFuT2JqZWN0KHRoaXMpLmJ5dGVMZW5ndGhcblx0ICAgICAgLCBmaXJzdCAgPSB0b0luZGV4KHN0YXJ0LCBsZW4pXG5cdCAgICAgICwgZmluYWwgID0gdG9JbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZCwgbGVuKVxuXHQgICAgICAsIHJlc3VsdCA9IG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRBcnJheUJ1ZmZlcikpKHRvTGVuZ3RoKGZpbmFsIC0gZmlyc3QpKVxuXHQgICAgICAsIHZpZXdTICA9IG5ldyAkRGF0YVZpZXcodGhpcylcblx0ICAgICAgLCB2aWV3VCAgPSBuZXcgJERhdGFWaWV3KHJlc3VsdClcblx0ICAgICAgLCBpbmRleCAgPSAwO1xuXHQgICAgd2hpbGUoZmlyc3QgPCBmaW5hbCl7XG5cdCAgICAgIHZpZXdULnNldFVpbnQ4KGluZGV4KyssIHZpZXdTLmdldFVpbnQ4KGZpcnN0KyspKTtcblx0ICAgIH0gcmV0dXJuIHJlc3VsdDtcblx0ICB9XG5cdH0pO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTg2KShBUlJBWV9CVUZGRVIpO1xuXG4vKioqLyB9LFxuLyogMjMyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgaGlkZSAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KVxuXHQgICwgdWlkICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNylcblx0ICAsIFRZUEVEICA9IHVpZCgndHlwZWRfYXJyYXknKVxuXHQgICwgVklFVyAgID0gdWlkKCd2aWV3Jylcblx0ICAsIEFCViAgICA9ICEhKGdsb2JhbC5BcnJheUJ1ZmZlciAmJiBnbG9iYWwuRGF0YVZpZXcpXG5cdCAgLCBDT05TVFIgPSBBQlZcblx0ICAsIGkgPSAwLCBsID0gOSwgVHlwZWQ7XG5cblx0dmFyIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnMgPSAoXG5cdCAgJ0ludDhBcnJheSxVaW50OEFycmF5LFVpbnQ4Q2xhbXBlZEFycmF5LEludDE2QXJyYXksVWludDE2QXJyYXksSW50MzJBcnJheSxVaW50MzJBcnJheSxGbG9hdDMyQXJyYXksRmxvYXQ2NEFycmF5J1xuXHQpLnNwbGl0KCcsJyk7XG5cblx0d2hpbGUoaSA8IGwpe1xuXHQgIGlmKFR5cGVkID0gZ2xvYmFsW1R5cGVkQXJyYXlDb25zdHJ1Y3RvcnNbaSsrXV0pe1xuXHQgICAgaGlkZShUeXBlZC5wcm90b3R5cGUsIFRZUEVELCB0cnVlKTtcblx0ICAgIGhpZGUoVHlwZWQucHJvdG90eXBlLCBWSUVXLCB0cnVlKTtcblx0ICB9IGVsc2UgQ09OU1RSID0gZmFsc2U7XG5cdH1cblxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBBQlY6ICAgIEFCVixcblx0ICBDT05TVFI6IENPTlNUUixcblx0ICBUWVBFRDogIFRZUEVELFxuXHQgIFZJRVc6ICAgVklFV1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjMzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBnbG9iYWwgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIERFU0NSSVBUT1JTICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KVxuXHQgICwgTElCUkFSWSAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KVxuXHQgICwgJHR5cGVkICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzMilcblx0ICAsIGhpZGUgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KVxuXHQgICwgcmVkZWZpbmVBbGwgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMilcblx0ICAsIGZhaWxzICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgYW5JbnN0YW5jZSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5Nylcblx0ICAsIHRvSW50ZWdlciAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNilcblx0ICAsIHRvTGVuZ3RoICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIGdPUE4gICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OCkuZlxuXHQgICwgZFAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmZcblx0ICAsIGFycmF5RmlsbCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODApXG5cdCAgLCBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpXG5cdCAgLCBBUlJBWV9CVUZGRVIgICA9ICdBcnJheUJ1ZmZlcidcblx0ICAsIERBVEFfVklFVyAgICAgID0gJ0RhdGFWaWV3J1xuXHQgICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuXHQgICwgV1JPTkdfTEVOR1RIICAgPSAnV3JvbmcgbGVuZ3RoISdcblx0ICAsIFdST05HX0lOREVYICAgID0gJ1dyb25nIGluZGV4ISdcblx0ICAsICRBcnJheUJ1ZmZlciAgID0gZ2xvYmFsW0FSUkFZX0JVRkZFUl1cblx0ICAsICREYXRhVmlldyAgICAgID0gZ2xvYmFsW0RBVEFfVklFV11cblx0ICAsIE1hdGggICAgICAgICAgID0gZ2xvYmFsLk1hdGhcblx0ICAsIFJhbmdlRXJyb3IgICAgID0gZ2xvYmFsLlJhbmdlRXJyb3Jcblx0ICAsIEluZmluaXR5ICAgICAgID0gZ2xvYmFsLkluZmluaXR5XG5cdCAgLCBCYXNlQnVmZmVyICAgICA9ICRBcnJheUJ1ZmZlclxuXHQgICwgYWJzICAgICAgICAgICAgPSBNYXRoLmFic1xuXHQgICwgcG93ICAgICAgICAgICAgPSBNYXRoLnBvd1xuXHQgICwgZmxvb3IgICAgICAgICAgPSBNYXRoLmZsb29yXG5cdCAgLCBsb2cgICAgICAgICAgICA9IE1hdGgubG9nXG5cdCAgLCBMTjIgICAgICAgICAgICA9IE1hdGguTE4yXG5cdCAgLCBCVUZGRVIgICAgICAgICA9ICdidWZmZXInXG5cdCAgLCBCWVRFX0xFTkdUSCAgICA9ICdieXRlTGVuZ3RoJ1xuXHQgICwgQllURV9PRkZTRVQgICAgPSAnYnl0ZU9mZnNldCdcblx0ICAsICRCVUZGRVIgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX2InIDogQlVGRkVSXG5cdCAgLCAkTEVOR1RIICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19sJyA6IEJZVEVfTEVOR1RIXG5cdCAgLCAkT0ZGU0VUICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19vJyA6IEJZVEVfT0ZGU0VUO1xuXG5cdC8vIElFRUU3NTQgY29udmVyc2lvbnMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pZWVlNzU0XG5cdHZhciBwYWNrSUVFRTc1NCA9IGZ1bmN0aW9uKHZhbHVlLCBtTGVuLCBuQnl0ZXMpe1xuXHQgIHZhciBidWZmZXIgPSBBcnJheShuQnl0ZXMpXG5cdCAgICAsIGVMZW4gICA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuXHQgICAgLCBlTWF4ICAgPSAoMSA8PCBlTGVuKSAtIDFcblx0ICAgICwgZUJpYXMgID0gZU1heCA+PiAxXG5cdCAgICAsIHJ0ICAgICA9IG1MZW4gPT09IDIzID8gcG93KDIsIC0yNCkgLSBwb3coMiwgLTc3KSA6IDBcblx0ICAgICwgaSAgICAgID0gMFxuXHQgICAgLCBzICAgICAgPSB2YWx1ZSA8IDAgfHwgdmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCA/IDEgOiAwXG5cdCAgICAsIGUsIG0sIGM7XG5cdCAgdmFsdWUgPSBhYnModmFsdWUpXG5cdCAgaWYodmFsdWUgIT0gdmFsdWUgfHwgdmFsdWUgPT09IEluZmluaXR5KXtcblx0ICAgIG0gPSB2YWx1ZSAhPSB2YWx1ZSA/IDEgOiAwO1xuXHQgICAgZSA9IGVNYXg7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGUgPSBmbG9vcihsb2codmFsdWUpIC8gTE4yKTtcblx0ICAgIGlmKHZhbHVlICogKGMgPSBwb3coMiwgLWUpKSA8IDEpe1xuXHQgICAgICBlLS07XG5cdCAgICAgIGMgKj0gMjtcblx0ICAgIH1cblx0ICAgIGlmKGUgKyBlQmlhcyA+PSAxKXtcblx0ICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdmFsdWUgKz0gcnQgKiBwb3coMiwgMSAtIGVCaWFzKTtcblx0ICAgIH1cblx0ICAgIGlmKHZhbHVlICogYyA+PSAyKXtcblx0ICAgICAgZSsrO1xuXHQgICAgICBjIC89IDI7XG5cdCAgICB9XG5cdCAgICBpZihlICsgZUJpYXMgPj0gZU1heCl7XG5cdCAgICAgIG0gPSAwO1xuXHQgICAgICBlID0gZU1heDtcblx0ICAgIH0gZWxzZSBpZihlICsgZUJpYXMgPj0gMSl7XG5cdCAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBwb3coMiwgbUxlbik7XG5cdCAgICAgIGUgPSBlICsgZUJpYXM7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBtID0gdmFsdWUgKiBwb3coMiwgZUJpYXMgLSAxKSAqIHBvdygyLCBtTGVuKTtcblx0ICAgICAgZSA9IDA7XG5cdCAgICB9XG5cdCAgfVxuXHQgIGZvcig7IG1MZW4gPj0gODsgYnVmZmVyW2krK10gPSBtICYgMjU1LCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblx0ICBlID0gZSA8PCBtTGVuIHwgbTtcblx0ICBlTGVuICs9IG1MZW47XG5cdCAgZm9yKDsgZUxlbiA+IDA7IGJ1ZmZlcltpKytdID0gZSAmIDI1NSwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cdCAgYnVmZmVyWy0taV0gfD0gcyAqIDEyODtcblx0ICByZXR1cm4gYnVmZmVyO1xuXHR9O1xuXHR2YXIgdW5wYWNrSUVFRTc1NCA9IGZ1bmN0aW9uKGJ1ZmZlciwgbUxlbiwgbkJ5dGVzKXtcblx0ICB2YXIgZUxlbiAgPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcblx0ICAgICwgZU1heCAgPSAoMSA8PCBlTGVuKSAtIDFcblx0ICAgICwgZUJpYXMgPSBlTWF4ID4+IDFcblx0ICAgICwgbkJpdHMgPSBlTGVuIC0gN1xuXHQgICAgLCBpICAgICA9IG5CeXRlcyAtIDFcblx0ICAgICwgcyAgICAgPSBidWZmZXJbaS0tXVxuXHQgICAgLCBlICAgICA9IHMgJiAxMjdcblx0ICAgICwgbTtcblx0ICBzID4+PSA3O1xuXHQgIGZvcig7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbaV0sIGktLSwgbkJpdHMgLT0gOCk7XG5cdCAgbSA9IGUgJiAoMSA8PCAtbkJpdHMpIC0gMTtcblx0ICBlID4+PSAtbkJpdHM7XG5cdCAgbkJpdHMgKz0gbUxlbjtcblx0ICBmb3IoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW2ldLCBpLS0sIG5CaXRzIC09IDgpO1xuXHQgIGlmKGUgPT09IDApe1xuXHQgICAgZSA9IDEgLSBlQmlhcztcblx0ICB9IGVsc2UgaWYoZSA9PT0gZU1heCl7XG5cdCAgICByZXR1cm4gbSA/IE5hTiA6IHMgPyAtSW5maW5pdHkgOiBJbmZpbml0eTtcblx0ICB9IGVsc2Uge1xuXHQgICAgbSA9IG0gKyBwb3coMiwgbUxlbik7XG5cdCAgICBlID0gZSAtIGVCaWFzO1xuXHQgIH0gcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBwb3coMiwgZSAtIG1MZW4pO1xuXHR9O1xuXG5cdHZhciB1bnBhY2tJMzIgPSBmdW5jdGlvbihieXRlcyl7XG5cdCAgcmV0dXJuIGJ5dGVzWzNdIDw8IDI0IHwgYnl0ZXNbMl0gPDwgMTYgfCBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG5cdH07XG5cdHZhciBwYWNrSTggPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIFtpdCAmIDB4ZmZdO1xuXHR9O1xuXHR2YXIgcGFja0kxNiA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gW2l0ICYgMHhmZiwgaXQgPj4gOCAmIDB4ZmZdO1xuXHR9O1xuXHR2YXIgcGFja0kzMiA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gW2l0ICYgMHhmZiwgaXQgPj4gOCAmIDB4ZmYsIGl0ID4+IDE2ICYgMHhmZiwgaXQgPj4gMjQgJiAweGZmXTtcblx0fTtcblx0dmFyIHBhY2tGNjQgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCA1MiwgOCk7XG5cdH07XG5cdHZhciBwYWNrRjMyID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBwYWNrSUVFRTc1NChpdCwgMjMsIDQpO1xuXHR9O1xuXG5cdHZhciBhZGRHZXR0ZXIgPSBmdW5jdGlvbihDLCBrZXksIGludGVybmFsKXtcblx0ICBkUChDW1BST1RPVFlQRV0sIGtleSwge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXNbaW50ZXJuYWxdOyB9fSk7XG5cdH07XG5cblx0dmFyIGdldCA9IGZ1bmN0aW9uKHZpZXcsIGJ5dGVzLCBpbmRleCwgaXNMaXR0bGVFbmRpYW4pe1xuXHQgIHZhciBudW1JbmRleCA9ICtpbmRleFxuXHQgICAgLCBpbnRJbmRleCA9IHRvSW50ZWdlcihudW1JbmRleCk7XG5cdCAgaWYobnVtSW5kZXggIT0gaW50SW5kZXggfHwgaW50SW5kZXggPCAwIHx8IGludEluZGV4ICsgYnl0ZXMgPiB2aWV3WyRMRU5HVEhdKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfSU5ERVgpO1xuXHQgIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2Jcblx0ICAgICwgc3RhcnQgPSBpbnRJbmRleCArIHZpZXdbJE9GRlNFVF1cblx0ICAgICwgcGFjayAgPSBzdG9yZS5zbGljZShzdGFydCwgc3RhcnQgKyBieXRlcyk7XG5cdCAgcmV0dXJuIGlzTGl0dGxlRW5kaWFuID8gcGFjayA6IHBhY2sucmV2ZXJzZSgpO1xuXHR9O1xuXHR2YXIgc2V0ID0gZnVuY3Rpb24odmlldywgYnl0ZXMsIGluZGV4LCBjb252ZXJzaW9uLCB2YWx1ZSwgaXNMaXR0bGVFbmRpYW4pe1xuXHQgIHZhciBudW1JbmRleCA9ICtpbmRleFxuXHQgICAgLCBpbnRJbmRleCA9IHRvSW50ZWdlcihudW1JbmRleCk7XG5cdCAgaWYobnVtSW5kZXggIT0gaW50SW5kZXggfHwgaW50SW5kZXggPCAwIHx8IGludEluZGV4ICsgYnl0ZXMgPiB2aWV3WyRMRU5HVEhdKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfSU5ERVgpO1xuXHQgIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2Jcblx0ICAgICwgc3RhcnQgPSBpbnRJbmRleCArIHZpZXdbJE9GRlNFVF1cblx0ICAgICwgcGFjayAgPSBjb252ZXJzaW9uKCt2YWx1ZSk7XG5cdCAgZm9yKHZhciBpID0gMDsgaSA8IGJ5dGVzOyBpKyspc3RvcmVbc3RhcnQgKyBpXSA9IHBhY2tbaXNMaXR0bGVFbmRpYW4gPyBpIDogYnl0ZXMgLSBpIC0gMV07XG5cdH07XG5cblx0dmFyIHZhbGlkYXRlQXJyYXlCdWZmZXJBcmd1bWVudHMgPSBmdW5jdGlvbih0aGF0LCBsZW5ndGgpe1xuXHQgIGFuSW5zdGFuY2UodGhhdCwgJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuXHQgIHZhciBudW1iZXJMZW5ndGggPSArbGVuZ3RoXG5cdCAgICAsIGJ5dGVMZW5ndGggICA9IHRvTGVuZ3RoKG51bWJlckxlbmd0aCk7XG5cdCAgaWYobnVtYmVyTGVuZ3RoICE9IGJ5dGVMZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuXHQgIHJldHVybiBieXRlTGVuZ3RoO1xuXHR9O1xuXG5cdGlmKCEkdHlwZWQuQUJWKXtcblx0ICAkQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiBBcnJheUJ1ZmZlcihsZW5ndGgpe1xuXHQgICAgdmFyIGJ5dGVMZW5ndGggPSB2YWxpZGF0ZUFycmF5QnVmZmVyQXJndW1lbnRzKHRoaXMsIGxlbmd0aCk7XG5cdCAgICB0aGlzLl9iICAgICAgID0gYXJyYXlGaWxsLmNhbGwoQXJyYXkoYnl0ZUxlbmd0aCksIDApO1xuXHQgICAgdGhpc1skTEVOR1RIXSA9IGJ5dGVMZW5ndGg7XG5cdCAgfTtcblxuXHQgICREYXRhVmlldyA9IGZ1bmN0aW9uIERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCl7XG5cdCAgICBhbkluc3RhbmNlKHRoaXMsICREYXRhVmlldywgREFUQV9WSUVXKTtcblx0ICAgIGFuSW5zdGFuY2UoYnVmZmVyLCAkQXJyYXlCdWZmZXIsIERBVEFfVklFVyk7XG5cdCAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYnVmZmVyWyRMRU5HVEhdXG5cdCAgICAgICwgb2Zmc2V0ICAgICAgID0gdG9JbnRlZ2VyKGJ5dGVPZmZzZXQpO1xuXHQgICAgaWYob2Zmc2V0IDwgMCB8fCBvZmZzZXQgPiBidWZmZXJMZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0IScpO1xuXHQgICAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPT09IHVuZGVmaW5lZCA/IGJ1ZmZlckxlbmd0aCAtIG9mZnNldCA6IHRvTGVuZ3RoKGJ5dGVMZW5ndGgpO1xuXHQgICAgaWYob2Zmc2V0ICsgYnl0ZUxlbmd0aCA+IGJ1ZmZlckxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG5cdCAgICB0aGlzWyRCVUZGRVJdID0gYnVmZmVyO1xuXHQgICAgdGhpc1skT0ZGU0VUXSA9IG9mZnNldDtcblx0ICAgIHRoaXNbJExFTkdUSF0gPSBieXRlTGVuZ3RoO1xuXHQgIH07XG5cblx0ICBpZihERVNDUklQVE9SUyl7XG5cdCAgICBhZGRHZXR0ZXIoJEFycmF5QnVmZmVyLCBCWVRFX0xFTkdUSCwgJ19sJyk7XG5cdCAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCVUZGRVIsICdfYicpO1xuXHQgICAgYWRkR2V0dGVyKCREYXRhVmlldywgQllURV9MRU5HVEgsICdfbCcpO1xuXHQgICAgYWRkR2V0dGVyKCREYXRhVmlldywgQllURV9PRkZTRVQsICdfbycpO1xuXHQgIH1cblxuXHQgIHJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG5cdCAgICBnZXRJbnQ4OiBmdW5jdGlvbiBnZXRJbnQ4KGJ5dGVPZmZzZXQpe1xuXHQgICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdIDw8IDI0ID4+IDI0O1xuXHQgICAgfSxcblx0ICAgIGdldFVpbnQ4OiBmdW5jdGlvbiBnZXRVaW50OChieXRlT2Zmc2V0KXtcblx0ICAgICAgcmV0dXJuIGdldCh0aGlzLCAxLCBieXRlT2Zmc2V0KVswXTtcblx0ICAgIH0sXG5cdCAgICBnZXRJbnQxNjogZnVuY3Rpb24gZ2V0SW50MTYoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgdmFyIGJ5dGVzID0gZ2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSk7XG5cdCAgICAgIHJldHVybiAoYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdKSA8PCAxNiA+PiAxNjtcblx0ICAgIH0sXG5cdCAgICBnZXRVaW50MTY6IGZ1bmN0aW9uIGdldFVpbnQxNihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKTtcblx0ICAgICAgcmV0dXJuIGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXTtcblx0ICAgIH0sXG5cdCAgICBnZXRJbnQzMjogZnVuY3Rpb24gZ2V0SW50MzIoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgcmV0dXJuIHVucGFja0kzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSk7XG5cdCAgICB9LFxuXHQgICAgZ2V0VWludDMyOiBmdW5jdGlvbiBnZXRVaW50MzIoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgcmV0dXJuIHVucGFja0kzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSkgPj4+IDA7XG5cdCAgICB9LFxuXHQgICAgZ2V0RmxvYXQzMjogZnVuY3Rpb24gZ2V0RmxvYXQzMihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICByZXR1cm4gdW5wYWNrSUVFRTc1NChnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSwgMjMsIDQpO1xuXHQgICAgfSxcblx0ICAgIGdldEZsb2F0NjQ6IGZ1bmN0aW9uIGdldEZsb2F0NjQoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDgsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSksIDUyLCA4KTtcblx0ICAgIH0sXG5cdCAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcblx0ICAgICAgc2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQsIHBhY2tJOCwgdmFsdWUpO1xuXHQgICAgfSxcblx0ICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG5cdCAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcblx0ICAgIH0sXG5cdCAgICBzZXRJbnQxNjogZnVuY3Rpb24gc2V0SW50MTYoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSTE2LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcblx0ICAgIH0sXG5cdCAgICBzZXRVaW50MTY6IGZ1bmN0aW9uIHNldFVpbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJMTYsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuXHQgICAgfSxcblx0ICAgIHNldEludDMyOiBmdW5jdGlvbiBzZXRJbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuXHQgICAgfSxcblx0ICAgIHNldFVpbnQzMjogZnVuY3Rpb24gc2V0VWludDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0kzMiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG5cdCAgICB9LFxuXHQgICAgc2V0RmxvYXQzMjogZnVuY3Rpb24gc2V0RmxvYXQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tGMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuXHQgICAgfSxcblx0ICAgIHNldEZsb2F0NjQ6IGZ1bmN0aW9uIHNldEZsb2F0NjQoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHNldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBwYWNrRjY0LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcblx0ICAgIH1cblx0ICB9KTtcblx0fSBlbHNlIHtcblx0ICBpZighZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgIG5ldyAkQXJyYXlCdWZmZXI7ICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXHQgIH0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgbmV3ICRBcnJheUJ1ZmZlciguNSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cdCAgfSkpe1xuXHQgICAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKXtcblx0ICAgICAgcmV0dXJuIG5ldyBCYXNlQnVmZmVyKHZhbGlkYXRlQXJyYXlCdWZmZXJBcmd1bWVudHModGhpcywgbGVuZ3RoKSk7XG5cdCAgICB9O1xuXHQgICAgdmFyIEFycmF5QnVmZmVyUHJvdG8gPSAkQXJyYXlCdWZmZXJbUFJPVE9UWVBFXSA9IEJhc2VCdWZmZXJbUFJPVE9UWVBFXTtcblx0ICAgIGZvcih2YXIga2V5cyA9IGdPUE4oQmFzZUJ1ZmZlciksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgKXtcblx0ICAgICAgaWYoISgoa2V5ID0ga2V5c1tqKytdKSBpbiAkQXJyYXlCdWZmZXIpKWhpZGUoJEFycmF5QnVmZmVyLCBrZXksIEJhc2VCdWZmZXJba2V5XSk7XG5cdCAgICB9O1xuXHQgICAgaWYoIUxJQlJBUlkpQXJyYXlCdWZmZXJQcm90by5jb25zdHJ1Y3RvciA9ICRBcnJheUJ1ZmZlcjtcblx0ICB9XG5cdCAgLy8gaU9TIFNhZmFyaSA3LnggYnVnXG5cdCAgdmFyIHZpZXcgPSBuZXcgJERhdGFWaWV3KG5ldyAkQXJyYXlCdWZmZXIoMikpXG5cdCAgICAsICRzZXRJbnQ4ID0gJERhdGFWaWV3W1BST1RPVFlQRV0uc2V0SW50ODtcblx0ICB2aWV3LnNldEludDgoMCwgMjE0NzQ4MzY0OCk7XG5cdCAgdmlldy5zZXRJbnQ4KDEsIDIxNDc0ODM2NDkpO1xuXHQgIGlmKHZpZXcuZ2V0SW50OCgwKSB8fCAhdmlldy5nZXRJbnQ4KDEpKXJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG5cdCAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcblx0ICAgICAgJHNldEludDguY2FsbCh0aGlzLCBieXRlT2Zmc2V0LCB2YWx1ZSA8PCAyNCA+PiAyNCk7XG5cdCAgICB9LFxuXHQgICAgc2V0VWludDg6IGZ1bmN0aW9uIHNldFVpbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcblx0ICAgICAgJHNldEludDguY2FsbCh0aGlzLCBieXRlT2Zmc2V0LCB2YWx1ZSA8PCAyNCA+PiAyNCk7XG5cdCAgICB9XG5cdCAgfSwgdHJ1ZSk7XG5cdH1cblx0c2V0VG9TdHJpbmdUYWcoJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuXHRzZXRUb1N0cmluZ1RhZygkRGF0YVZpZXcsIERBVEFfVklFVyk7XG5cdGhpZGUoJERhdGFWaWV3W1BST1RPVFlQRV0sICR0eXBlZC5WSUVXLCB0cnVlKTtcblx0ZXhwb3J0c1tBUlJBWV9CVUZGRVJdID0gJEFycmF5QnVmZmVyO1xuXHRleHBvcnRzW0RBVEFfVklFV10gPSAkRGF0YVZpZXc7XG5cbi8qKiovIH0sXG4vKiAyMzQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0JGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXygyMzIpLkFCViwge1xuXHQgIERhdGFWaWV3OiBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzMykuRGF0YVZpZXdcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMzUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM2KSgnSW50OCcsIDEsIGZ1bmN0aW9uKGluaXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBJbnQ4QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcblx0ICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMzYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSl7XG5cdCAgdmFyIExJQlJBUlkgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KVxuXHQgICAgLCBnbG9iYWwgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICAgLCBmYWlscyAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICAgLCAkZXhwb3J0ICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICAgLCAkdHlwZWQgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMzIpXG5cdCAgICAsICRidWZmZXIgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzMylcblx0ICAgICwgY3R4ICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpXG5cdCAgICAsIGFuSW5zdGFuY2UgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5Nylcblx0ICAgICwgcHJvcGVydHlEZXNjICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpXG5cdCAgICAsIGhpZGUgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpXG5cdCAgICAsIHJlZGVmaW5lQWxsICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMilcblx0ICAgICwgdG9JbnRlZ2VyICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpXG5cdCAgICAsIHRvTGVuZ3RoICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICAgLCB0b0luZGV4ICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNylcblx0ICAgICwgdG9QcmltaXRpdmUgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpXG5cdCAgICAsIGhhcyAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgICAsIHNhbWUgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY5KVxuXHQgICAgLCBjbGFzc29mICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3Mylcblx0ICAgICwgaXNPYmplY3QgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgICAsIHRvT2JqZWN0ICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICAgLCBpc0FycmF5SXRlciAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTQpXG5cdCAgICAsIGNyZWF0ZSAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KVxuXHQgICAgLCBnZXRQcm90b3R5cGVPZiAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAgICwgZ09QTiAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDgpLmZcblx0ICAgICwgZ2V0SXRlckZuICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTU2KVxuXHQgICAgLCB1aWQgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNylcblx0ICAgICwgd2tzICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpXG5cdCAgICAsIGNyZWF0ZUFycmF5TWV0aG9kICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NClcblx0ICAgICwgY3JlYXRlQXJyYXlJbmNsdWRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpXG5cdCAgICAsIHNwZWNpZXNDb25zdHJ1Y3RvciAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5OSlcblx0ICAgICwgQXJyYXlJdGVyYXRvcnMgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgzKVxuXHQgICAgLCBJdGVyYXRvcnMgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzUpXG5cdCAgICAsICRpdGVyRGV0ZWN0ICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Nylcblx0ICAgICwgc2V0U3BlY2llcyAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTg2KVxuXHQgICAgLCBhcnJheUZpbGwgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODApXG5cdCAgICAsIGFycmF5Q29weVdpdGhpbiAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3Nylcblx0ICAgICwgJERQICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSlcblx0ICAgICwgJEdPUEQgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpXG5cdCAgICAsIGRQICAgICAgICAgICAgICAgICAgPSAkRFAuZlxuXHQgICAgLCBnT1BEICAgICAgICAgICAgICAgID0gJEdPUEQuZlxuXHQgICAgLCBSYW5nZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlJhbmdlRXJyb3Jcblx0ICAgICwgVHlwZUVycm9yICAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3Jcblx0ICAgICwgVWludDhBcnJheSAgICAgICAgICA9IGdsb2JhbC5VaW50OEFycmF5XG5cdCAgICAsIEFSUkFZX0JVRkZFUiAgICAgICAgPSAnQXJyYXlCdWZmZXInXG5cdCAgICAsIFNIQVJFRF9CVUZGRVIgICAgICAgPSAnU2hhcmVkJyArIEFSUkFZX0JVRkZFUlxuXHQgICAgLCBCWVRFU19QRVJfRUxFTUVOVCAgID0gJ0JZVEVTX1BFUl9FTEVNRU5UJ1xuXHQgICAgLCBQUk9UT1RZUEUgICAgICAgICAgID0gJ3Byb3RvdHlwZSdcblx0ICAgICwgQXJyYXlQcm90byAgICAgICAgICA9IEFycmF5W1BST1RPVFlQRV1cblx0ICAgICwgJEFycmF5QnVmZmVyICAgICAgICA9ICRidWZmZXIuQXJyYXlCdWZmZXJcblx0ICAgICwgJERhdGFWaWV3ICAgICAgICAgICA9ICRidWZmZXIuRGF0YVZpZXdcblx0ICAgICwgYXJyYXlGb3JFYWNoICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDApXG5cdCAgICAsIGFycmF5RmlsdGVyICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCgyKVxuXHQgICAgLCBhcnJheVNvbWUgICAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoMylcblx0ICAgICwgYXJyYXlFdmVyeSAgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDQpXG5cdCAgICAsIGFycmF5RmluZCAgICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg1KVxuXHQgICAgLCBhcnJheUZpbmRJbmRleCAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNilcblx0ICAgICwgYXJyYXlJbmNsdWRlcyAgICAgICA9IGNyZWF0ZUFycmF5SW5jbHVkZXModHJ1ZSlcblx0ICAgICwgYXJyYXlJbmRleE9mICAgICAgICA9IGNyZWF0ZUFycmF5SW5jbHVkZXMoZmFsc2UpXG5cdCAgICAsIGFycmF5VmFsdWVzICAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy52YWx1ZXNcblx0ICAgICwgYXJyYXlLZXlzICAgICAgICAgICA9IEFycmF5SXRlcmF0b3JzLmtleXNcblx0ICAgICwgYXJyYXlFbnRyaWVzICAgICAgICA9IEFycmF5SXRlcmF0b3JzLmVudHJpZXNcblx0ICAgICwgYXJyYXlMYXN0SW5kZXhPZiAgICA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2Zcblx0ICAgICwgYXJyYXlSZWR1Y2UgICAgICAgICA9IEFycmF5UHJvdG8ucmVkdWNlXG5cdCAgICAsIGFycmF5UmVkdWNlUmlnaHQgICAgPSBBcnJheVByb3RvLnJlZHVjZVJpZ2h0XG5cdCAgICAsIGFycmF5Sm9pbiAgICAgICAgICAgPSBBcnJheVByb3RvLmpvaW5cblx0ICAgICwgYXJyYXlTb3J0ICAgICAgICAgICA9IEFycmF5UHJvdG8uc29ydFxuXHQgICAgLCBhcnJheVNsaWNlICAgICAgICAgID0gQXJyYXlQcm90by5zbGljZVxuXHQgICAgLCBhcnJheVRvU3RyaW5nICAgICAgID0gQXJyYXlQcm90by50b1N0cmluZ1xuXHQgICAgLCBhcnJheVRvTG9jYWxlU3RyaW5nID0gQXJyYXlQcm90by50b0xvY2FsZVN0cmluZ1xuXHQgICAgLCBJVEVSQVRPUiAgICAgICAgICAgID0gd2tzKCdpdGVyYXRvcicpXG5cdCAgICAsIFRBRyAgICAgICAgICAgICAgICAgPSB3a3MoJ3RvU3RyaW5nVGFnJylcblx0ICAgICwgVFlQRURfQ09OU1RSVUNUT1IgICA9IHVpZCgndHlwZWRfY29uc3RydWN0b3InKVxuXHQgICAgLCBERUZfQ09OU1RSVUNUT1IgICAgID0gdWlkKCdkZWZfY29uc3RydWN0b3InKVxuXHQgICAgLCBBTExfQ09OU1RSVUNUT1JTICAgID0gJHR5cGVkLkNPTlNUUlxuXHQgICAgLCBUWVBFRF9BUlJBWSAgICAgICAgID0gJHR5cGVkLlRZUEVEXG5cdCAgICAsIFZJRVcgICAgICAgICAgICAgICAgPSAkdHlwZWQuVklFV1xuXHQgICAgLCBXUk9OR19MRU5HVEggICAgICAgID0gJ1dyb25nIGxlbmd0aCEnO1xuXG5cdCAgdmFyICRtYXAgPSBjcmVhdGVBcnJheU1ldGhvZCgxLCBmdW5jdGlvbihPLCBsZW5ndGgpe1xuXHQgICAgcmV0dXJuIGFsbG9jYXRlKHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pLCBsZW5ndGgpO1xuXHQgIH0pO1xuXG5cdCAgdmFyIExJVFRMRV9FTkRJQU4gPSBmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG5ldyBVaW50MTZBcnJheShbMV0pLmJ1ZmZlcilbMF0gPT09IDE7XG5cdCAgfSk7XG5cblx0ICB2YXIgRk9SQ0VEX1NFVCA9ICEhVWludDhBcnJheSAmJiAhIVVpbnQ4QXJyYXlbUFJPVE9UWVBFXS5zZXQgJiYgZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgIG5ldyBVaW50OEFycmF5KDEpLnNldCh7fSk7XG5cdCAgfSk7XG5cblx0ICB2YXIgc3RyaWN0VG9MZW5ndGggPSBmdW5jdGlvbihpdCwgU0FNRSl7XG5cdCAgICBpZihpdCA9PT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihXUk9OR19MRU5HVEgpO1xuXHQgICAgdmFyIG51bWJlciA9ICtpdFxuXHQgICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0KTtcblx0ICAgIGlmKFNBTUUgJiYgIXNhbWUobnVtYmVyLCBsZW5ndGgpKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcblx0ICAgIHJldHVybiBsZW5ndGg7XG5cdCAgfTtcblxuXHQgIHZhciB0b09mZnNldCA9IGZ1bmN0aW9uKGl0LCBCWVRFUyl7XG5cdCAgICB2YXIgb2Zmc2V0ID0gdG9JbnRlZ2VyKGl0KTtcblx0ICAgIGlmKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICUgQllURVMpdGhyb3cgUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0IScpO1xuXHQgICAgcmV0dXJuIG9mZnNldDtcblx0ICB9O1xuXG5cdCAgdmFyIHZhbGlkYXRlID0gZnVuY3Rpb24oaXQpe1xuXHQgICAgaWYoaXNPYmplY3QoaXQpICYmIFRZUEVEX0FSUkFZIGluIGl0KXJldHVybiBpdDtcblx0ICAgIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgdHlwZWQgYXJyYXkhJyk7XG5cdCAgfTtcblxuXHQgIHZhciBhbGxvY2F0ZSA9IGZ1bmN0aW9uKEMsIGxlbmd0aCl7XG5cdCAgICBpZighKGlzT2JqZWN0KEMpICYmIFRZUEVEX0NPTlNUUlVDVE9SIGluIEMpKXtcblx0ICAgICAgdGhyb3cgVHlwZUVycm9yKCdJdCBpcyBub3QgYSB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvciEnKTtcblx0ICAgIH0gcmV0dXJuIG5ldyBDKGxlbmd0aCk7XG5cdCAgfTtcblxuXHQgIHZhciBzcGVjaWVzRnJvbUxpc3QgPSBmdW5jdGlvbihPLCBsaXN0KXtcblx0ICAgIHJldHVybiBmcm9tTGlzdChzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSwgbGlzdCk7XG5cdCAgfTtcblxuXHQgIHZhciBmcm9tTGlzdCA9IGZ1bmN0aW9uKEMsIGxpc3Qpe1xuXHQgICAgdmFyIGluZGV4ICA9IDBcblx0ICAgICAgLCBsZW5ndGggPSBsaXN0Lmxlbmd0aFxuXHQgICAgICAsIHJlc3VsdCA9IGFsbG9jYXRlKEMsIGxlbmd0aCk7XG5cdCAgICB3aGlsZShsZW5ndGggPiBpbmRleClyZXN1bHRbaW5kZXhdID0gbGlzdFtpbmRleCsrXTtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfTtcblxuXHQgIHZhciBhZGRHZXR0ZXIgPSBmdW5jdGlvbihpdCwga2V5LCBpbnRlcm5hbCl7XG5cdCAgICBkUChpdCwga2V5LCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5fZFtpbnRlcm5hbF07IH19KTtcblx0ICB9O1xuXG5cdCAgdmFyICRmcm9tID0gZnVuY3Rpb24gZnJvbShzb3VyY2UgLyosIG1hcGZuLCB0aGlzQXJnICovKXtcblx0ICAgIHZhciBPICAgICAgID0gdG9PYmplY3Qoc291cmNlKVxuXHQgICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG5cdCAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcblx0ICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG5cdCAgICAgICwgaSwgbGVuZ3RoLCB2YWx1ZXMsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG5cdCAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICFpc0FycmF5SXRlcihpdGVyRm4pKXtcblx0ICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHZhbHVlcyA9IFtdLCBpID0gMDsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpKyspe1xuXHQgICAgICAgIHZhbHVlcy5wdXNoKHN0ZXAudmFsdWUpO1xuXHQgICAgICB9IE8gPSB2YWx1ZXM7XG5cdCAgICB9XG5cdCAgICBpZihtYXBwaW5nICYmIGFMZW4gPiAyKW1hcGZuID0gY3R4KG1hcGZuLCBhcmd1bWVudHNbMl0sIDIpO1xuXHQgICAgZm9yKGkgPSAwLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCksIHJlc3VsdCA9IGFsbG9jYXRlKHRoaXMsIGxlbmd0aCk7IGxlbmd0aCA+IGk7IGkrKyl7XG5cdCAgICAgIHJlc3VsdFtpXSA9IG1hcHBpbmcgPyBtYXBmbihPW2ldLCBpKSA6IE9baV07XG5cdCAgICB9XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHQgIH07XG5cblx0ICB2YXIgJG9mID0gZnVuY3Rpb24gb2YoLyouLi5pdGVtcyovKXtcblx0ICAgIHZhciBpbmRleCAgPSAwXG5cdCAgICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgICAsIHJlc3VsdCA9IGFsbG9jYXRlKHRoaXMsIGxlbmd0aCk7XG5cdCAgICB3aGlsZShsZW5ndGggPiBpbmRleClyZXN1bHRbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4KytdO1xuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9O1xuXG5cdCAgLy8gaU9TIFNhZmFyaSA2LnggZmFpbHMgaGVyZVxuXHQgIHZhciBUT19MT0NBTEVfQlVHID0gISFVaW50OEFycmF5ICYmIGZhaWxzKGZ1bmN0aW9uKCl7IGFycmF5VG9Mb2NhbGVTdHJpbmcuY2FsbChuZXcgVWludDhBcnJheSgxKSk7IH0pO1xuXG5cdCAgdmFyICR0b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nKCl7XG5cdCAgICByZXR1cm4gYXJyYXlUb0xvY2FsZVN0cmluZy5hcHBseShUT19MT0NBTEVfQlVHID8gYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpKSA6IHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuXHQgIH07XG5cblx0ICB2YXIgcHJvdG8gPSB7XG5cdCAgICBjb3B5V2l0aGluOiBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldCwgc3RhcnQgLyosIGVuZCAqLyl7XG5cdCAgICAgIHJldHVybiBhcnJheUNvcHlXaXRoaW4uY2FsbCh2YWxpZGF0ZSh0aGlzKSwgdGFyZ2V0LCBzdGFydCwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpO1xuXHQgICAgfSxcblx0ICAgIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qLCB0aGlzQXJnICovKXtcblx0ICAgICAgcmV0dXJuIGFycmF5RXZlcnkodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIH0sXG5cdCAgICBmaWxsOiBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qLCBzdGFydCwgZW5kICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHQgICAgICByZXR1cm4gYXJyYXlGaWxsLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuXHQgICAgfSxcblx0ICAgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuXHQgICAgICByZXR1cm4gc3BlY2llc0Zyb21MaXN0KHRoaXMsIGFycmF5RmlsdGVyKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLFxuXHQgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKSk7XG5cdCAgICB9LFxuXHQgICAgZmluZDogZnVuY3Rpb24gZmluZChwcmVkaWNhdGUgLyosIHRoaXNBcmcgKi8pe1xuXHQgICAgICByZXR1cm4gYXJyYXlGaW5kKHZhbGlkYXRlKHRoaXMpLCBwcmVkaWNhdGUsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIH0sXG5cdCAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChwcmVkaWNhdGUgLyosIHRoaXNBcmcgKi8pe1xuXHQgICAgICByZXR1cm4gYXJyYXlGaW5kSW5kZXgodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgfSxcblx0ICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG5cdCAgICAgIGFycmF5Rm9yRWFjaCh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgfSxcblx0ICAgIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXtcblx0ICAgICAgcmV0dXJuIGFycmF5SW5kZXhPZih2YWxpZGF0ZSh0aGlzKSwgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgfSxcblx0ICAgIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8pe1xuXHQgICAgICByZXR1cm4gYXJyYXlJbmNsdWRlcyh2YWxpZGF0ZSh0aGlzKSwgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgfSxcblx0ICAgIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHQgICAgICByZXR1cm4gYXJyYXlKb2luLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuXHQgICAgfSxcblx0ICAgIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdCAgICAgIHJldHVybiBhcnJheUxhc3RJbmRleE9mLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuXHQgICAgfSxcblx0ICAgIG1hcDogZnVuY3Rpb24gbWFwKG1hcGZuIC8qLCB0aGlzQXJnICovKXtcblx0ICAgICAgcmV0dXJuICRtYXAodmFsaWRhdGUodGhpcyksIG1hcGZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB9LFxuXHQgICAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiwgaW5pdGlhbFZhbHVlICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHQgICAgICByZXR1cm4gYXJyYXlSZWR1Y2UuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG5cdCAgICB9LFxuXHQgICAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyosIGluaXRpYWxWYWx1ZSAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0ICAgICAgcmV0dXJuIGFycmF5UmVkdWNlUmlnaHQuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG5cdCAgICB9LFxuXHQgICAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpe1xuXHQgICAgICB2YXIgdGhhdCAgID0gdGhpc1xuXHQgICAgICAgICwgbGVuZ3RoID0gdmFsaWRhdGUodGhhdCkubGVuZ3RoXG5cdCAgICAgICAgLCBtaWRkbGUgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpXG5cdCAgICAgICAgLCBpbmRleCAgPSAwXG5cdCAgICAgICAgLCB2YWx1ZTtcblx0ICAgICAgd2hpbGUoaW5kZXggPCBtaWRkbGUpe1xuXHQgICAgICAgIHZhbHVlICAgICAgICAgPSB0aGF0W2luZGV4XTtcblx0ICAgICAgICB0aGF0W2luZGV4KytdID0gdGhhdFstLWxlbmd0aF07XG5cdCAgICAgICAgdGhhdFtsZW5ndGhdICA9IHZhbHVlO1xuXHQgICAgICB9IHJldHVybiB0aGF0O1xuXHQgICAgfSxcblx0ICAgIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG5cdCAgICAgIHJldHVybiBhcnJheVNvbWUodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIH0sXG5cdCAgICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbil7XG5cdCAgICAgIHJldHVybiBhcnJheVNvcnQuY2FsbCh2YWxpZGF0ZSh0aGlzKSwgY29tcGFyZWZuKTtcblx0ICAgIH0sXG5cdCAgICBzdWJhcnJheTogZnVuY3Rpb24gc3ViYXJyYXkoYmVnaW4sIGVuZCl7XG5cdCAgICAgIHZhciBPICAgICAgPSB2YWxpZGF0ZSh0aGlzKVxuXHQgICAgICAgICwgbGVuZ3RoID0gTy5sZW5ndGhcblx0ICAgICAgICAsICRiZWdpbiA9IHRvSW5kZXgoYmVnaW4sIGxlbmd0aCk7XG5cdCAgICAgIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pKShcblx0ICAgICAgICBPLmJ1ZmZlcixcblx0ICAgICAgICBPLmJ5dGVPZmZzZXQgKyAkYmVnaW4gKiBPLkJZVEVTX1BFUl9FTEVNRU5ULFxuXHQgICAgICAgIHRvTGVuZ3RoKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvSW5kZXgoZW5kLCBsZW5ndGgpKSAtICRiZWdpbilcblx0ICAgICAgKTtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgdmFyICRzbGljZSA9IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpe1xuXHQgICAgcmV0dXJuIHNwZWNpZXNGcm9tTGlzdCh0aGlzLCBhcnJheVNsaWNlLmNhbGwodmFsaWRhdGUodGhpcyksIHN0YXJ0LCBlbmQpKTtcblx0ICB9O1xuXG5cdCAgdmFyICRzZXQgPSBmdW5jdGlvbiBzZXQoYXJyYXlMaWtlIC8qLCBvZmZzZXQgKi8pe1xuXHQgICAgdmFsaWRhdGUodGhpcyk7XG5cdCAgICB2YXIgb2Zmc2V0ID0gdG9PZmZzZXQoYXJndW1lbnRzWzFdLCAxKVxuXHQgICAgICAsIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG5cdCAgICAgICwgc3JjICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuXHQgICAgICAsIGxlbiAgICA9IHRvTGVuZ3RoKHNyYy5sZW5ndGgpXG5cdCAgICAgICwgaW5kZXggID0gMDtcblx0ICAgIGlmKGxlbiArIG9mZnNldCA+IGxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG5cdCAgICB3aGlsZShpbmRleCA8IGxlbil0aGlzW29mZnNldCArIGluZGV4XSA9IHNyY1tpbmRleCsrXTtcblx0ICB9O1xuXG5cdCAgdmFyICRpdGVyYXRvcnMgPSB7XG5cdCAgICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKCl7XG5cdCAgICAgIHJldHVybiBhcnJheUVudHJpZXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG5cdCAgICB9LFxuXHQgICAga2V5czogZnVuY3Rpb24ga2V5cygpe1xuXHQgICAgICByZXR1cm4gYXJyYXlLZXlzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuXHQgICAgfSxcblx0ICAgIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKCl7XG5cdCAgICAgIHJldHVybiBhcnJheVZhbHVlcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgdmFyIGlzVEFJbmRleCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KXtcblx0ICAgIHJldHVybiBpc09iamVjdCh0YXJnZXQpXG5cdCAgICAgICYmIHRhcmdldFtUWVBFRF9BUlJBWV1cblx0ICAgICAgJiYgdHlwZW9mIGtleSAhPSAnc3ltYm9sJ1xuXHQgICAgICAmJiBrZXkgaW4gdGFyZ2V0XG5cdCAgICAgICYmIFN0cmluZygra2V5KSA9PSBTdHJpbmcoa2V5KTtcblx0ICB9O1xuXHQgIHZhciAkZ2V0RGVzYyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSl7XG5cdCAgICByZXR1cm4gaXNUQUluZGV4KHRhcmdldCwga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSlcblx0ICAgICAgPyBwcm9wZXJ0eURlc2MoMiwgdGFyZ2V0W2tleV0pXG5cdCAgICAgIDogZ09QRCh0YXJnZXQsIGtleSk7XG5cdCAgfTtcblx0ICB2YXIgJHNldERlc2MgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzYyl7XG5cdCAgICBpZihpc1RBSW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuXHQgICAgICAmJiBpc09iamVjdChkZXNjKVxuXHQgICAgICAmJiBoYXMoZGVzYywgJ3ZhbHVlJylcblx0ICAgICAgJiYgIWhhcyhkZXNjLCAnZ2V0Jylcblx0ICAgICAgJiYgIWhhcyhkZXNjLCAnc2V0Jylcblx0ICAgICAgLy8gVE9ETzogYWRkIHZhbGlkYXRpb24gZGVzY3JpcHRvciB3L28gY2FsbGluZyBhY2Nlc3NvcnNcblx0ICAgICAgJiYgIWRlc2MuY29uZmlndXJhYmxlXG5cdCAgICAgICYmICghaGFzKGRlc2MsICd3cml0YWJsZScpIHx8IGRlc2Mud3JpdGFibGUpXG5cdCAgICAgICYmICghaGFzKGRlc2MsICdlbnVtZXJhYmxlJykgfHwgZGVzYy5lbnVtZXJhYmxlKVxuXHQgICAgKXtcblx0ICAgICAgdGFyZ2V0W2tleV0gPSBkZXNjLnZhbHVlO1xuXHQgICAgICByZXR1cm4gdGFyZ2V0O1xuXHQgICAgfSBlbHNlIHJldHVybiBkUCh0YXJnZXQsIGtleSwgZGVzYyk7XG5cdCAgfTtcblxuXHQgIGlmKCFBTExfQ09OU1RSVUNUT1JTKXtcblx0ICAgICRHT1BELmYgPSAkZ2V0RGVzYztcblx0ICAgICREUC5mICAgPSAkc2V0RGVzYztcblx0ICB9XG5cblx0ICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFBTExfQ09OU1RSVUNUT1JTLCAnT2JqZWN0Jywge1xuXHQgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0RGVzYyxcblx0ICAgIGRlZmluZVByb3BlcnR5OiAgICAgICAgICAgJHNldERlc2Ncblx0ICB9KTtcblxuXHQgIGlmKGZhaWxzKGZ1bmN0aW9uKCl7IGFycmF5VG9TdHJpbmcuY2FsbCh7fSk7IH0pKXtcblx0ICAgIGFycmF5VG9TdHJpbmcgPSBhcnJheVRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKXtcblx0ICAgICAgcmV0dXJuIGFycmF5Sm9pbi5jYWxsKHRoaXMpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHZhciAkVHlwZWRBcnJheVByb3RvdHlwZSQgPSByZWRlZmluZUFsbCh7fSwgcHJvdG8pO1xuXHQgIHJlZGVmaW5lQWxsKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJGl0ZXJhdG9ycyk7XG5cdCAgaGlkZSgkVHlwZWRBcnJheVByb3RvdHlwZSQsIElURVJBVE9SLCAkaXRlcmF0b3JzLnZhbHVlcyk7XG5cdCAgcmVkZWZpbmVBbGwoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCB7XG5cdCAgICBzbGljZTogICAgICAgICAgJHNsaWNlLFxuXHQgICAgc2V0OiAgICAgICAgICAgICRzZXQsXG5cdCAgICBjb25zdHJ1Y3RvcjogICAgZnVuY3Rpb24oKXsgLyogbm9vcCAqLyB9LFxuXHQgICAgdG9TdHJpbmc6ICAgICAgIGFycmF5VG9TdHJpbmcsXG5cdCAgICB0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nXG5cdCAgfSk7XG5cdCAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J1ZmZlcicsICdiJyk7XG5cdCAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J5dGVPZmZzZXQnLCAnbycpO1xuXHQgIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdieXRlTGVuZ3RoJywgJ2wnKTtcblx0ICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnbGVuZ3RoJywgJ2UnKTtcblx0ICBkUCgkVHlwZWRBcnJheVByb3RvdHlwZSQsIFRBRywge1xuXHQgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpc1tUWVBFRF9BUlJBWV07IH1cblx0ICB9KTtcblxuXHQgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBCWVRFUywgd3JhcHBlciwgQ0xBTVBFRCl7XG5cdCAgICBDTEFNUEVEID0gISFDTEFNUEVEO1xuXHQgICAgdmFyIE5BTUUgICAgICAgPSBLRVkgKyAoQ0xBTVBFRCA/ICdDbGFtcGVkJyA6ICcnKSArICdBcnJheSdcblx0ICAgICAgLCBJU05UX1VJTlQ4ID0gTkFNRSAhPSAnVWludDhBcnJheSdcblx0ICAgICAgLCBHRVRURVIgICAgID0gJ2dldCcgKyBLRVlcblx0ICAgICAgLCBTRVRURVIgICAgID0gJ3NldCcgKyBLRVlcblx0ICAgICAgLCBUeXBlZEFycmF5ID0gZ2xvYmFsW05BTUVdXG5cdCAgICAgICwgQmFzZSAgICAgICA9IFR5cGVkQXJyYXkgfHwge31cblx0ICAgICAgLCBUQUMgICAgICAgID0gVHlwZWRBcnJheSAmJiBnZXRQcm90b3R5cGVPZihUeXBlZEFycmF5KVxuXHQgICAgICAsIEZPUkNFRCAgICAgPSAhVHlwZWRBcnJheSB8fCAhJHR5cGVkLkFCVlxuXHQgICAgICAsIE8gICAgICAgICAgPSB7fVxuXHQgICAgICAsIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5ICYmIFR5cGVkQXJyYXlbUFJPVE9UWVBFXTtcblx0ICAgIHZhciBnZXR0ZXIgPSBmdW5jdGlvbih0aGF0LCBpbmRleCl7XG5cdCAgICAgIHZhciBkYXRhID0gdGhhdC5fZDtcblx0ICAgICAgcmV0dXJuIGRhdGEudltHRVRURVJdKGluZGV4ICogQllURVMgKyBkYXRhLm8sIExJVFRMRV9FTkRJQU4pO1xuXHQgICAgfTtcblx0ICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbih0aGF0LCBpbmRleCwgdmFsdWUpe1xuXHQgICAgICB2YXIgZGF0YSA9IHRoYXQuX2Q7XG5cdCAgICAgIGlmKENMQU1QRUQpdmFsdWUgPSAodmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKSkgPCAwID8gMCA6IHZhbHVlID4gMHhmZiA/IDB4ZmYgOiB2YWx1ZSAmIDB4ZmY7XG5cdCAgICAgIGRhdGEudltTRVRURVJdKGluZGV4ICogQllURVMgKyBkYXRhLm8sIHZhbHVlLCBMSVRUTEVfRU5ESUFOKTtcblx0ICAgIH07XG5cdCAgICB2YXIgYWRkRWxlbWVudCA9IGZ1bmN0aW9uKHRoYXQsIGluZGV4KXtcblx0ICAgICAgZFAodGhhdCwgaW5kZXgsIHtcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoaXMsIGluZGV4KTtcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xuXHQgICAgICAgICAgcmV0dXJuIHNldHRlcih0aGlzLCBpbmRleCwgdmFsdWUpO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuXHQgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICBpZihGT1JDRUQpe1xuXHQgICAgICBUeXBlZEFycmF5ID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKXtcblx0ICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUsICdfZCcpO1xuXHQgICAgICAgIHZhciBpbmRleCAgPSAwXG5cdCAgICAgICAgICAsIG9mZnNldCA9IDBcblx0ICAgICAgICAgICwgYnVmZmVyLCBieXRlTGVuZ3RoLCBsZW5ndGgsIGtsYXNzO1xuXHQgICAgICAgIGlmKCFpc09iamVjdChkYXRhKSl7XG5cdCAgICAgICAgICBsZW5ndGggICAgID0gc3RyaWN0VG9MZW5ndGgoZGF0YSwgdHJ1ZSlcblx0ICAgICAgICAgIGJ5dGVMZW5ndGggPSBsZW5ndGggKiBCWVRFUztcblx0ICAgICAgICAgIGJ1ZmZlciAgICAgPSBuZXcgJEFycmF5QnVmZmVyKGJ5dGVMZW5ndGgpO1xuXHQgICAgICAgIH0gZWxzZSBpZihkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoZGF0YSkpID09IEFSUkFZX0JVRkZFUiB8fCBrbGFzcyA9PSBTSEFSRURfQlVGRkVSKXtcblx0ICAgICAgICAgIGJ1ZmZlciA9IGRhdGE7XG5cdCAgICAgICAgICBvZmZzZXQgPSB0b09mZnNldCgkb2Zmc2V0LCBCWVRFUyk7XG5cdCAgICAgICAgICB2YXIgJGxlbiA9IGRhdGEuYnl0ZUxlbmd0aDtcblx0ICAgICAgICAgIGlmKCRsZW5ndGggPT09IHVuZGVmaW5lZCl7XG5cdCAgICAgICAgICAgIGlmKCRsZW4gJSBCWVRFUyl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG5cdCAgICAgICAgICAgIGJ5dGVMZW5ndGggPSAkbGVuIC0gb2Zmc2V0O1xuXHQgICAgICAgICAgICBpZihieXRlTGVuZ3RoIDwgMCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBieXRlTGVuZ3RoID0gdG9MZW5ndGgoJGxlbmd0aCkgKiBCWVRFUztcblx0ICAgICAgICAgICAgaWYoYnl0ZUxlbmd0aCArIG9mZnNldCA+ICRsZW4pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgbGVuZ3RoID0gYnl0ZUxlbmd0aCAvIEJZVEVTO1xuXHQgICAgICAgIH0gZWxzZSBpZihUWVBFRF9BUlJBWSBpbiBkYXRhKXtcblx0ICAgICAgICAgIHJldHVybiBmcm9tTGlzdChUeXBlZEFycmF5LCBkYXRhKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgcmV0dXJuICRmcm9tLmNhbGwoVHlwZWRBcnJheSwgZGF0YSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGhpZGUodGhhdCwgJ19kJywge1xuXHQgICAgICAgICAgYjogYnVmZmVyLFxuXHQgICAgICAgICAgbzogb2Zmc2V0LFxuXHQgICAgICAgICAgbDogYnl0ZUxlbmd0aCxcblx0ICAgICAgICAgIGU6IGxlbmd0aCxcblx0ICAgICAgICAgIHY6IG5ldyAkRGF0YVZpZXcoYnVmZmVyKVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHdoaWxlKGluZGV4IDwgbGVuZ3RoKWFkZEVsZW1lbnQodGhhdCwgaW5kZXgrKyk7XG5cdCAgICAgIH0pO1xuXHQgICAgICBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheVtQUk9UT1RZUEVdID0gY3JlYXRlKCRUeXBlZEFycmF5UHJvdG90eXBlJCk7XG5cdCAgICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgVHlwZWRBcnJheSk7XG5cdCAgICB9IGVsc2UgaWYoISRpdGVyRGV0ZWN0KGZ1bmN0aW9uKGl0ZXIpe1xuXHQgICAgICAvLyBWOCB3b3JrcyB3aXRoIGl0ZXJhdG9ycywgYnV0IGZhaWxzIGluIG1hbnkgb3RoZXIgY2FzZXNcblx0ICAgICAgLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQ1NTJcblx0ICAgICAgbmV3IFR5cGVkQXJyYXkobnVsbCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cdCAgICAgIG5ldyBUeXBlZEFycmF5KGl0ZXIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXHQgICAgfSwgdHJ1ZSkpe1xuXHQgICAgICBUeXBlZEFycmF5ID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKXtcblx0ICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUpO1xuXHQgICAgICAgIHZhciBrbGFzcztcblx0ICAgICAgICAvLyBgd3NgIG1vZHVsZSBidWcsIHRlbXBvcmFyaWx5IHJlbW92ZSB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgVWludDhBcnJheVxuXHQgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL3B1bGwvNjQ1XG5cdCAgICAgICAgaWYoIWlzT2JqZWN0KGRhdGEpKXJldHVybiBuZXcgQmFzZShzdHJpY3RUb0xlbmd0aChkYXRhLCBJU05UX1VJTlQ4KSk7XG5cdCAgICAgICAgaWYoZGF0YSBpbnN0YW5jZW9mICRBcnJheUJ1ZmZlciB8fCAoa2xhc3MgPSBjbGFzc29mKGRhdGEpKSA9PSBBUlJBWV9CVUZGRVIgfHwga2xhc3MgPT0gU0hBUkVEX0JVRkZFUil7XG5cdCAgICAgICAgICByZXR1cm4gJGxlbmd0aCAhPT0gdW5kZWZpbmVkXG5cdCAgICAgICAgICAgID8gbmV3IEJhc2UoZGF0YSwgdG9PZmZzZXQoJG9mZnNldCwgQllURVMpLCAkbGVuZ3RoKVxuXHQgICAgICAgICAgICA6ICRvZmZzZXQgIT09IHVuZGVmaW5lZFxuXHQgICAgICAgICAgICAgID8gbmV3IEJhc2UoZGF0YSwgdG9PZmZzZXQoJG9mZnNldCwgQllURVMpKVxuXHQgICAgICAgICAgICAgIDogbmV3IEJhc2UoZGF0YSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmKFRZUEVEX0FSUkFZIGluIGRhdGEpcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXksIGRhdGEpO1xuXHQgICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuXHQgICAgICB9KTtcblx0ICAgICAgYXJyYXlGb3JFYWNoKFRBQyAhPT0gRnVuY3Rpb24ucHJvdG90eXBlID8gZ09QTihCYXNlKS5jb25jYXQoZ09QTihUQUMpKSA6IGdPUE4oQmFzZSksIGZ1bmN0aW9uKGtleSl7XG5cdCAgICAgICAgaWYoIShrZXkgaW4gVHlwZWRBcnJheSkpaGlkZShUeXBlZEFycmF5LCBrZXksIEJhc2Vba2V5XSk7XG5cdCAgICAgIH0pO1xuXHQgICAgICBUeXBlZEFycmF5W1BST1RPVFlQRV0gPSBUeXBlZEFycmF5UHJvdG90eXBlO1xuXHQgICAgICBpZighTElCUkFSWSlUeXBlZEFycmF5UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHlwZWRBcnJheTtcblx0ICAgIH1cblx0ICAgIHZhciAkbmF0aXZlSXRlcmF0b3IgICA9IFR5cGVkQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdXG5cdCAgICAgICwgQ09SUkVDVF9JVEVSX05BTUUgPSAhISRuYXRpdmVJdGVyYXRvciAmJiAoJG5hdGl2ZUl0ZXJhdG9yLm5hbWUgPT0gJ3ZhbHVlcycgfHwgJG5hdGl2ZUl0ZXJhdG9yLm5hbWUgPT0gdW5kZWZpbmVkKVxuXHQgICAgICAsICRpdGVyYXRvciAgICAgICAgID0gJGl0ZXJhdG9ycy52YWx1ZXM7XG5cdCAgICBoaWRlKFR5cGVkQXJyYXksIFRZUEVEX0NPTlNUUlVDVE9SLCB0cnVlKTtcblx0ICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVFlQRURfQVJSQVksIE5BTUUpO1xuXHQgICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBWSUVXLCB0cnVlKTtcblx0ICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgREVGX0NPTlNUUlVDVE9SLCBUeXBlZEFycmF5KTtcblxuXHQgICAgaWYoQ0xBTVBFRCA/IG5ldyBUeXBlZEFycmF5KDEpW1RBR10gIT0gTkFNRSA6ICEoVEFHIGluIFR5cGVkQXJyYXlQcm90b3R5cGUpKXtcblx0ICAgICAgZFAoVHlwZWRBcnJheVByb3RvdHlwZSwgVEFHLCB7XG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gTkFNRTsgfVxuXHQgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgT1tOQU1FXSA9IFR5cGVkQXJyYXk7XG5cblx0ICAgICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXkgIT0gQmFzZSksIE8pO1xuXG5cdCAgICAkZXhwb3J0KCRleHBvcnQuUywgTkFNRSwge1xuXHQgICAgICBCWVRFU19QRVJfRUxFTUVOVDogQllURVMsXG5cdCAgICAgIGZyb206ICRmcm9tLFxuXHQgICAgICBvZjogJG9mXG5cdCAgICB9KTtcblxuXHQgICAgaWYoIShCWVRFU19QRVJfRUxFTUVOVCBpbiBUeXBlZEFycmF5UHJvdG90eXBlKSloaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIEJZVEVTX1BFUl9FTEVNRU5ULCBCWVRFUyk7XG5cblx0ICAgICRleHBvcnQoJGV4cG9ydC5QLCBOQU1FLCBwcm90byk7XG5cblx0ICAgIHNldFNwZWNpZXMoTkFNRSk7XG5cblx0ICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0VEX1NFVCwgTkFNRSwge3NldDogJHNldH0pO1xuXG5cdCAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFDT1JSRUNUX0lURVJfTkFNRSwgTkFNRSwgJGl0ZXJhdG9ycyk7XG5cblx0ICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXlQcm90b3R5cGUudG9TdHJpbmcgIT0gYXJyYXlUb1N0cmluZyksIE5BTUUsIHt0b1N0cmluZzogYXJyYXlUb1N0cmluZ30pO1xuXG5cdCAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICAgIG5ldyBUeXBlZEFycmF5KDEpLnNsaWNlKCk7XG5cdCAgICB9KSwgTkFNRSwge3NsaWNlOiAkc2xpY2V9KTtcblxuXHQgICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgICAgcmV0dXJuIFsxLCAyXS50b0xvY2FsZVN0cmluZygpICE9IG5ldyBUeXBlZEFycmF5KFsxLCAyXSkudG9Mb2NhbGVTdHJpbmcoKVxuXHQgICAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICAgIFR5cGVkQXJyYXlQcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcuY2FsbChbMSwgMl0pO1xuXHQgICAgfSkpLCBOQU1FLCB7dG9Mb2NhbGVTdHJpbmc6ICR0b0xvY2FsZVN0cmluZ30pO1xuXG5cdCAgICBJdGVyYXRvcnNbTkFNRV0gPSBDT1JSRUNUX0lURVJfTkFNRSA/ICRuYXRpdmVJdGVyYXRvciA6ICRpdGVyYXRvcjtcblx0ICAgIGlmKCFMSUJSQVJZICYmICFDT1JSRUNUX0lURVJfTkFNRSloaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIElURVJBVE9SLCAkaXRlcmF0b3IpO1xuXHQgIH07XG5cdH0gZWxzZSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cbi8qKiovIH0sXG4vKiAyMzcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM2KSgnVWludDgnLCAxLCBmdW5jdGlvbihpbml0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gVWludDhBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuXHQgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIzOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzYpKCdVaW50OCcsIDEsIGZ1bmN0aW9uKGluaXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBVaW50OENsYW1wZWRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuXHQgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcblx0ICB9O1xuXHR9LCB0cnVlKTtcblxuLyoqKi8gfSxcbi8qIDIzOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzYpKCdJbnQxNicsIDIsIGZ1bmN0aW9uKGluaXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBJbnQxNkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG5cdCAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjQwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNikoJ1VpbnQxNicsIDIsIGZ1bmN0aW9uKGluaXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBVaW50MTZBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuXHQgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI0MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzYpKCdJbnQzMicsIDQsIGZ1bmN0aW9uKGluaXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBJbnQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG5cdCAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjQyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNikoJ1VpbnQzMicsIDQsIGZ1bmN0aW9uKGluaXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBVaW50MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuXHQgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI0MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzYpKCdGbG9hdDMyJywgNCwgZnVuY3Rpb24oaW5pdCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIEZsb2F0MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuXHQgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI0NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzYpKCdGbG9hdDY0JywgOCwgZnVuY3Rpb24oaW5pdCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIEZsb2F0NjRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuXHQgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI0NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRpbmNsdWRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpKHRydWUpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7XG5cdCAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qLCBmcm9tSW5kZXggPSAwICovKXtcblx0ICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICB9XG5cdH0pO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTc4KSgnaW5jbHVkZXMnKTtcblxuLyoqKi8gfSxcbi8qIDI0NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGF0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTI1KSh0cnVlKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcblx0ICBhdDogZnVuY3Rpb24gYXQocG9zKXtcblx0ICAgIHJldHVybiAkYXQodGhpcywgcG9zKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjQ3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHBhZCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjQ4KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcblx0ICBwYWRTdGFydDogZnVuY3Rpb24gcGFkU3RhcnQobWF4TGVuZ3RoIC8qLCBmaWxsU3RyaW5nID0gJyAnICovKXtcblx0ICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRydWUpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG5cdHZhciB0b0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCByZXBlYXQgICA9IF9fd2VicGFja19yZXF1aXJlX18oODUpXG5cdCAgLCBkZWZpbmVkICA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgbWF4TGVuZ3RoLCBmaWxsU3RyaW5nLCBsZWZ0KXtcblx0ICB2YXIgUyAgICAgICAgICAgID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG5cdCAgICAsIHN0cmluZ0xlbmd0aCA9IFMubGVuZ3RoXG5cdCAgICAsIGZpbGxTdHIgICAgICA9IGZpbGxTdHJpbmcgPT09IHVuZGVmaW5lZCA/ICcgJyA6IFN0cmluZyhmaWxsU3RyaW5nKVxuXHQgICAgLCBpbnRNYXhMZW5ndGggPSB0b0xlbmd0aChtYXhMZW5ndGgpO1xuXHQgIGlmKGludE1heExlbmd0aCA8PSBzdHJpbmdMZW5ndGggfHwgZmlsbFN0ciA9PSAnJylyZXR1cm4gUztcblx0ICB2YXIgZmlsbExlbiA9IGludE1heExlbmd0aCAtIHN0cmluZ0xlbmd0aFxuXHQgICAgLCBzdHJpbmdGaWxsZXIgPSByZXBlYXQuY2FsbChmaWxsU3RyLCBNYXRoLmNlaWwoZmlsbExlbiAvIGZpbGxTdHIubGVuZ3RoKSk7XG5cdCAgaWYoc3RyaW5nRmlsbGVyLmxlbmd0aCA+IGZpbGxMZW4pc3RyaW5nRmlsbGVyID0gc3RyaW5nRmlsbGVyLnNsaWNlKDAsIGZpbGxMZW4pO1xuXHQgIHJldHVybiBsZWZ0ID8gc3RyaW5nRmlsbGVyICsgUyA6IFMgKyBzdHJpbmdGaWxsZXI7XG5cdH07XG5cblxuLyoqKi8gfSxcbi8qIDI0OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRwYWQgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0OCk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG5cdCAgcGFkRW5kOiBmdW5jdGlvbiBwYWRFbmQobWF4TGVuZ3RoIC8qLCBmaWxsU3RyaW5nID0gJyAnICovKXtcblx0ICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGZhbHNlKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjUwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg4MSkoJ3RyaW1MZWZ0JywgZnVuY3Rpb24oJHRyaW0pe1xuXHQgIHJldHVybiBmdW5jdGlvbiB0cmltTGVmdCgpe1xuXHQgICAgcmV0dXJuICR0cmltKHRoaXMsIDEpO1xuXHQgIH07XG5cdH0sICd0cmltU3RhcnQnKTtcblxuLyoqKi8gfSxcbi8qIDI1MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5cdF9fd2VicGFja19yZXF1aXJlX18oODEpKCd0cmltUmlnaHQnLCBmdW5jdGlvbigkdHJpbSl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1SaWdodCgpe1xuXHQgICAgcmV0dXJuICR0cmltKHRoaXMsIDIpO1xuXHQgIH07XG5cdH0sICd0cmltRW5kJyk7XG5cbi8qKiovIH0sXG4vKiAyNTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9TdHJpbmcucHJvdG90eXBlLm1hdGNoQWxsL1xuXHR2YXIgJGV4cG9ydCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBkZWZpbmVkICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpXG5cdCAgLCB0b0xlbmd0aCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCBpc1JlZ0V4cCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTI4KVxuXHQgICwgZ2V0RmxhZ3MgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4OClcblx0ICAsIFJlZ0V4cFByb3RvID0gUmVnRXhwLnByb3RvdHlwZTtcblxuXHR2YXIgJFJlZ0V4cFN0cmluZ0l0ZXJhdG9yID0gZnVuY3Rpb24ocmVnZXhwLCBzdHJpbmcpe1xuXHQgIHRoaXMuX3IgPSByZWdleHA7XG5cdCAgdGhpcy5fcyA9IHN0cmluZztcblx0fTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNikoJFJlZ0V4cFN0cmluZ0l0ZXJhdG9yLCAnUmVnRXhwIFN0cmluZycsIGZ1bmN0aW9uIG5leHQoKXtcblx0ICB2YXIgbWF0Y2ggPSB0aGlzLl9yLmV4ZWModGhpcy5fcyk7XG5cdCAgcmV0dXJuIHt2YWx1ZTogbWF0Y2gsIGRvbmU6IG1hdGNoID09PSBudWxsfTtcblx0fSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG5cdCAgbWF0Y2hBbGw6IGZ1bmN0aW9uIG1hdGNoQWxsKHJlZ2V4cCl7XG5cdCAgICBkZWZpbmVkKHRoaXMpO1xuXHQgICAgaWYoIWlzUmVnRXhwKHJlZ2V4cCkpdGhyb3cgVHlwZUVycm9yKHJlZ2V4cCArICcgaXMgbm90IGEgcmVnZXhwIScpO1xuXHQgICAgdmFyIFMgICAgID0gU3RyaW5nKHRoaXMpXG5cdCAgICAgICwgZmxhZ3MgPSAnZmxhZ3MnIGluIFJlZ0V4cFByb3RvID8gU3RyaW5nKHJlZ2V4cC5mbGFncykgOiBnZXRGbGFncy5jYWxsKHJlZ2V4cClcblx0ICAgICAgLCByeCAgICA9IG5ldyBSZWdFeHAocmVnZXhwLnNvdXJjZSwgfmZsYWdzLmluZGV4T2YoJ2cnKSA/IGZsYWdzIDogJ2cnICsgZmxhZ3MpO1xuXHQgICAgcngubGFzdEluZGV4ID0gdG9MZW5ndGgocmVnZXhwLmxhc3RJbmRleCk7XG5cdCAgICByZXR1cm4gbmV3ICRSZWdFeHBTdHJpbmdJdGVyYXRvcihyeCwgUyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI1MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNSkoJ2FzeW5jSXRlcmF0b3InKTtcblxuLyoqKi8gfSxcbi8qIDI1NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNSkoJ29ic2VydmFibGUnKTtcblxuLyoqKi8gfSxcbi8qIDI1NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcblx0dmFyICRleHBvcnQgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgb3duS2V5cyAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyMSlcblx0ICAsIHRvSU9iamVjdCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIGdPUEQgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSlcblx0ICAsIGNyZWF0ZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTUpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuXHQgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KXtcblx0ICAgIHZhciBPICAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcblx0ICAgICAgLCBnZXREZXNjID0gZ09QRC5mXG5cdCAgICAgICwga2V5cyAgICA9IG93bktleXMoTylcblx0ICAgICAgLCByZXN1bHQgID0ge31cblx0ICAgICAgLCBpICAgICAgID0gMFxuXHQgICAgICAsIGtleTtcblx0ICAgIHdoaWxlKGtleXMubGVuZ3RoID4gaSljcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGtleSA9IGtleXNbaSsrXSwgZ2V0RGVzYyhPLCBrZXkpKTtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI1NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHZhbHVlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjU3KShmYWxzZSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG5cdCAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpe1xuXHQgICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnZXRLZXlzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KVxuXHQgICwgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIGlzRW51bSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpLmY7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNFbnRyaWVzKXtcblx0ICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuXHQgICAgdmFyIE8gICAgICA9IHRvSU9iamVjdChpdClcblx0ICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG5cdCAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcblx0ICAgICAgLCBpICAgICAgPSAwXG5cdCAgICAgICwgcmVzdWx0ID0gW11cblx0ICAgICAgLCBrZXk7XG5cdCAgICB3aGlsZShsZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpe1xuXHQgICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcblx0ICAgIH0gcmV0dXJuIHJlc3VsdDtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjU4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcblx0dmFyICRleHBvcnQgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGVudHJpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1NykodHJ1ZSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG5cdCAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCl7XG5cdCAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvT2JqZWN0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCBhRnVuY3Rpb24gICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgJGRlZmluZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxuXHQvLyBCLjIuMi4yIE9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhQLCBnZXR0ZXIpXG5cdF9fd2VicGFja19yZXF1aXJlX18oNCkgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2MCksICdPYmplY3QnLCB7XG5cdCAgX19kZWZpbmVHZXR0ZXJfXzogZnVuY3Rpb24gX19kZWZpbmVHZXR0ZXJfXyhQLCBnZXR0ZXIpe1xuXHQgICAgJGRlZmluZVByb3BlcnR5LmYodG9PYmplY3QodGhpcyksIFAsIHtnZXQ6IGFGdW5jdGlvbihnZXR0ZXIpLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9KTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjYwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBGb3JjZWQgcmVwbGFjZW1lbnQgcHJvdG90eXBlIGFjY2Vzc29ycyBtZXRob2RzXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNil8fCAhX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHZhciBLID0gTWF0aC5yYW5kb20oKTtcblx0ICAvLyBJbiBGRiB0aHJvd3Mgb25seSBkZWZpbmUgbWV0aG9kc1xuXHQgIF9fZGVmaW5lU2V0dGVyX18uY2FsbChudWxsLCBLLCBmdW5jdGlvbigpeyAvKiBlbXB0eSAqL30pO1xuXHQgIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpW0tdO1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI2MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9PYmplY3QgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIGFGdW5jdGlvbiAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCAkZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXG5cdC8vIEIuMi4yLjMgT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZVNldHRlcl9fKFAsIHNldHRlcilcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0KSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIF9fd2VicGFja19yZXF1aXJlX18oMjYwKSwgJ09iamVjdCcsIHtcblx0ICBfX2RlZmluZVNldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZVNldHRlcl9fKFAsIHNldHRlcil7XG5cdCAgICAkZGVmaW5lUHJvcGVydHkuZih0b09iamVjdCh0aGlzKSwgUCwge3NldDogYUZ1bmN0aW9uKHNldHRlciksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNjIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvT2JqZWN0ICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCB0b1ByaW1pdGl2ZSAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KVxuXHQgICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAsIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpLmY7XG5cblx0Ly8gQi4yLjIuNCBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwR2V0dGVyX18oUClcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0KSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIF9fd2VicGFja19yZXF1aXJlX18oMjYwKSwgJ09iamVjdCcsIHtcblx0ICBfX2xvb2t1cEdldHRlcl9fOiBmdW5jdGlvbiBfX2xvb2t1cEdldHRlcl9fKFApe1xuXHQgICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKVxuXHQgICAgICAsIEsgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKVxuXHQgICAgICAsIEQ7XG5cdCAgICBkbyB7XG5cdCAgICAgIGlmKEQgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgSykpcmV0dXJuIEQuZ2V0O1xuXHQgICAgfSB3aGlsZShPID0gZ2V0UHJvdG90eXBlT2YoTykpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNjMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvT2JqZWN0ICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCB0b1ByaW1pdGl2ZSAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KVxuXHQgICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAsIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpLmY7XG5cblx0Ly8gQi4yLjIuNSBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwU2V0dGVyX18oUClcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0KSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIF9fd2VicGFja19yZXF1aXJlX18oMjYwKSwgJ09iamVjdCcsIHtcblx0ICBfX2xvb2t1cFNldHRlcl9fOiBmdW5jdGlvbiBfX2xvb2t1cFNldHRlcl9fKFApe1xuXHQgICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKVxuXHQgICAgICAsIEsgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKVxuXHQgICAgICAsIEQ7XG5cdCAgICBkbyB7XG5cdCAgICAgIGlmKEQgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgSykpcmV0dXJuIEQuc2V0O1xuXHQgICAgfSB3aGlsZShPID0gZ2V0UHJvdG90eXBlT2YoTykpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNjQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cblx0dmFyICRleHBvcnQgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IF9fd2VicGFja19yZXF1aXJlX18oMjY1KSgnTWFwJyl9KTtcblxuLyoqKi8gfSxcbi8qIDI2NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxuXHR2YXIgY2xhc3NvZiA9IF9fd2VicGFja19yZXF1aXJlX18oNzMpXG5cdCAgLCBmcm9tICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNjYpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuXHQgIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcblx0ICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuXHQgICAgcmV0dXJuIGZyb20odGhpcyk7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDI2NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGZvck9mID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTgpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuXHQgIHZhciByZXN1bHQgPSBbXTtcblx0ICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cblxuLyoqKi8gfSxcbi8qIDI2NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxuXHR2YXIgJGV4cG9ydCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnU2V0Jywge3RvSlNPTjogX193ZWJwYWNrX3JlcXVpcmVfXygyNjUpKCdTZXQnKX0pO1xuXG4vKioqLyB9LFxuLyogMjY4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL3Byb3Bvc2FsLWdsb2JhbFxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdTeXN0ZW0nLCB7Z2xvYmFsOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpfSk7XG5cbi8qKiovIH0sXG4vKiAyNjkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvcHJvcG9zYWwtaXMtZXJyb3Jcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBjb2YgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdFcnJvcicsIHtcblx0ICBpc0Vycm9yOiBmdW5jdGlvbiBpc0Vycm9yKGl0KXtcblx0ICAgIHJldHVybiBjb2YoaXQpID09PSAnRXJyb3InO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNzAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgaWFkZGg6IGZ1bmN0aW9uIGlhZGRoKHgwLCB4MSwgeTAsIHkxKXtcblx0ICAgIHZhciAkeDAgPSB4MCA+Pj4gMFxuXHQgICAgICAsICR4MSA9IHgxID4+PiAwXG5cdCAgICAgICwgJHkwID0geTAgPj4+IDA7XG5cdCAgICByZXR1cm4gJHgxICsgKHkxID4+PiAwKSArICgoJHgwICYgJHkwIHwgKCR4MCB8ICR5MCkgJiB+KCR4MCArICR5MCA+Pj4gMCkpID4+PiAzMSkgfCAwO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNzEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgaXN1Ymg6IGZ1bmN0aW9uIGlzdWJoKHgwLCB4MSwgeTAsIHkxKXtcblx0ICAgIHZhciAkeDAgPSB4MCA+Pj4gMFxuXHQgICAgICAsICR4MSA9IHgxID4+PiAwXG5cdCAgICAgICwgJHkwID0geTAgPj4+IDA7XG5cdCAgICByZXR1cm4gJHgxIC0gKHkxID4+PiAwKSAtICgofiR4MCAmICR5MCB8IH4oJHgwIF4gJHkwKSAmICR4MCAtICR5MCA+Pj4gMCkgPj4+IDMxKSB8IDA7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI3MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICBpbXVsaDogZnVuY3Rpb24gaW11bGgodSwgdil7XG5cdCAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG5cdCAgICAgICwgJHUgPSArdVxuXHQgICAgICAsICR2ID0gK3Zcblx0ICAgICAgLCB1MCA9ICR1ICYgVUlOVDE2XG5cdCAgICAgICwgdjAgPSAkdiAmIFVJTlQxNlxuXHQgICAgICAsIHUxID0gJHUgPj4gMTZcblx0ICAgICAgLCB2MSA9ICR2ID4+IDE2XG5cdCAgICAgICwgdCAgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuXHQgICAgcmV0dXJuIHUxICogdjEgKyAodCA+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+IDE2KTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjczICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIHVtdWxoOiBmdW5jdGlvbiB1bXVsaCh1LCB2KXtcblx0ICAgIHZhciBVSU5UMTYgPSAweGZmZmZcblx0ICAgICAgLCAkdSA9ICt1XG5cdCAgICAgICwgJHYgPSArdlxuXHQgICAgICAsIHUwID0gJHUgJiBVSU5UMTZcblx0ICAgICAgLCB2MCA9ICR2ICYgVUlOVDE2XG5cdCAgICAgICwgdTEgPSAkdSA+Pj4gMTZcblx0ICAgICAgLCB2MSA9ICR2ID4+PiAxNlxuXHQgICAgICAsIHQgID0gKHUxICogdjAgPj4+IDApICsgKHUwICogdjAgPj4+IDE2KTtcblx0ICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4+IDE2KSArICgodTAgKiB2MSA+Pj4gMCkgKyAodCAmIFVJTlQxNikgPj4+IDE2KTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjc0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjc1KVxuXHQgICwgYW5PYmplY3QgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5XG5cdCAgLCBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gbWV0YWRhdGEuc2V0O1xuXG5cdG1ldGFkYXRhLmV4cCh7ZGVmaW5lTWV0YWRhdGE6IGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSl7XG5cdCAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgYW5PYmplY3QodGFyZ2V0KSwgdG9NZXRhS2V5KHRhcmdldEtleSkpO1xuXHR9fSk7XG5cbi8qKiovIH0sXG4vKiAyNzUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBNYXAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDMpXG5cdCAgLCAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgc2hhcmVkICA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpKCdtZXRhZGF0YScpXG5cdCAgLCBzdG9yZSAgID0gc2hhcmVkLnN0b3JlIHx8IChzaGFyZWQuc3RvcmUgPSBuZXcgKF9fd2VicGFja19yZXF1aXJlX18oMjA3KSkpO1xuXG5cdHZhciBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gZnVuY3Rpb24odGFyZ2V0LCB0YXJnZXRLZXksIGNyZWF0ZSl7XG5cdCAgdmFyIHRhcmdldE1ldGFkYXRhID0gc3RvcmUuZ2V0KHRhcmdldCk7XG5cdCAgaWYoIXRhcmdldE1ldGFkYXRhKXtcblx0ICAgIGlmKCFjcmVhdGUpcmV0dXJuIHVuZGVmaW5lZDtcblx0ICAgIHN0b3JlLnNldCh0YXJnZXQsIHRhcmdldE1ldGFkYXRhID0gbmV3IE1hcCk7XG5cdCAgfVxuXHQgIHZhciBrZXlNZXRhZGF0YSA9IHRhcmdldE1ldGFkYXRhLmdldCh0YXJnZXRLZXkpO1xuXHQgIGlmKCFrZXlNZXRhZGF0YSl7XG5cdCAgICBpZighY3JlYXRlKXJldHVybiB1bmRlZmluZWQ7XG5cdCAgICB0YXJnZXRNZXRhZGF0YS5zZXQodGFyZ2V0S2V5LCBrZXlNZXRhZGF0YSA9IG5ldyBNYXApO1xuXHQgIH0gcmV0dXJuIGtleU1ldGFkYXRhO1xuXHR9O1xuXHR2YXIgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcblx0ICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIGZhbHNlKTtcblx0ICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogbWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KTtcblx0fTtcblx0dmFyIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG5cdCAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG5cdCAgcmV0dXJuIG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBtZXRhZGF0YU1hcC5nZXQoTWV0YWRhdGFLZXkpO1xuXHR9O1xuXHR2YXIgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKXtcblx0ICBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIHRydWUpLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XG5cdH07XG5cdHZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uKHRhcmdldCwgdGFyZ2V0S2V5KXtcblx0ICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgdGFyZ2V0S2V5LCBmYWxzZSlcblx0ICAgICwga2V5cyAgICAgICAgPSBbXTtcblx0ICBpZihtZXRhZGF0YU1hcCltZXRhZGF0YU1hcC5mb3JFYWNoKGZ1bmN0aW9uKF8sIGtleSl7IGtleXMucHVzaChrZXkpOyB9KTtcblx0ICByZXR1cm4ga2V5cztcblx0fTtcblx0dmFyIHRvTWV0YUtleSA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6IFN0cmluZyhpdCk7XG5cdH07XG5cdHZhciBleHAgPSBmdW5jdGlvbihPKXtcblx0ICAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCBPKTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBzdG9yZTogc3RvcmUsXG5cdCAgbWFwOiBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwLFxuXHQgIGhhczogb3JkaW5hcnlIYXNPd25NZXRhZGF0YSxcblx0ICBnZXQ6IG9yZGluYXJ5R2V0T3duTWV0YWRhdGEsXG5cdCAgc2V0OiBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhLFxuXHQgIGtleXM6IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzLFxuXHQgIGtleTogdG9NZXRhS2V5LFxuXHQgIGV4cDogZXhwXG5cdH07XG5cbi8qKiovIH0sXG4vKiAyNzYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzUpXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXlcblx0ICAsIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAgPSBtZXRhZGF0YS5tYXBcblx0ICAsIHN0b3JlICAgICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5zdG9yZTtcblxuXHRtZXRhZGF0YS5leHAoe2RlbGV0ZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuXHQgIHZhciB0YXJnZXRLZXkgICA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSlcblx0ICAgICwgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSwgZmFsc2UpO1xuXHQgIGlmKG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgfHwgIW1ldGFkYXRhTWFwWydkZWxldGUnXShtZXRhZGF0YUtleSkpcmV0dXJuIGZhbHNlO1xuXHQgIGlmKG1ldGFkYXRhTWFwLnNpemUpcmV0dXJuIHRydWU7XG5cdCAgdmFyIHRhcmdldE1ldGFkYXRhID0gc3RvcmUuZ2V0KHRhcmdldCk7XG5cdCAgdGFyZ2V0TWV0YWRhdGFbJ2RlbGV0ZSddKHRhcmdldEtleSk7XG5cdCAgcmV0dXJuICEhdGFyZ2V0TWV0YWRhdGEuc2l6ZSB8fCBzdG9yZVsnZGVsZXRlJ10odGFyZ2V0KTtcblx0fX0pO1xuXG4vKioqLyB9LFxuLyogMjc3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjc1KVxuXHQgICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAsIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXNcblx0ICAsIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBtZXRhZGF0YS5nZXRcblx0ICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cblx0dmFyIG9yZGluYXJ5R2V0TWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG5cdCAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuXHQgIGlmKGhhc093bilyZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG5cdCAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuXHQgIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogdW5kZWZpbmVkO1xuXHR9O1xuXG5cdG1ldGFkYXRhLmV4cCh7Z2V0TWV0YWRhdGE6IGZ1bmN0aW9uIGdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG5cdCAgcmV0dXJuIG9yZGluYXJ5R2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xuXHR9fSk7XG5cbi8qKiovIH0sXG4vKiAyNzggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBTZXQgICAgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjA2KVxuXHQgICwgZnJvbSAgICAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2Nilcblx0ICAsIG1ldGFkYXRhICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzUpXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgLCBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IG1ldGFkYXRhLmtleXNcblx0ICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5cdHZhciBvcmRpbmFyeU1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uKE8sIFApe1xuXHQgIHZhciBvS2V5cyAgPSBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKVxuXHQgICAgLCBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcblx0ICBpZihwYXJlbnQgPT09IG51bGwpcmV0dXJuIG9LZXlzO1xuXHQgIHZhciBwS2V5cyAgPSBvcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xuXHQgIHJldHVybiBwS2V5cy5sZW5ndGggPyBvS2V5cy5sZW5ndGggPyBmcm9tKG5ldyBTZXQob0tleXMuY29uY2F0KHBLZXlzKSkpIDogcEtleXMgOiBvS2V5cztcblx0fTtcblxuXHRtZXRhZGF0YS5leHAoe2dldE1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcblx0ICByZXR1cm4gb3JkaW5hcnlNZXRhZGF0YUtleXMoYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzFdKSk7XG5cdH19KTtcblxuLyoqKi8gfSxcbi8qIDI3OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3NSlcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmdldFxuXHQgICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxuXHRtZXRhZGF0YS5leHAoe2dldE93bk1ldGFkYXRhOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuXHQgIHJldHVybiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpXG5cdCAgICAsIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xuXHR9fSk7XG5cbi8qKiovIH0sXG4vKiAyODAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBtZXRhZGF0YSAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjc1KVxuXHQgICwgYW5PYmplY3QgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBtZXRhZGF0YS5rZXlzXG5cdCAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxuXHRtZXRhZGF0YS5leHAoe2dldE93bk1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGFLZXlzKHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcblx0ICByZXR1cm4gb3JkaW5hcnlPd25NZXRhZGF0YUtleXMoYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzFdKSk7XG5cdH19KTtcblxuLyoqKi8gfSxcbi8qIDI4MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3NSlcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgLCBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzXG5cdCAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5cdHZhciBvcmRpbmFyeUhhc01ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuXHQgIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcblx0ICBpZihoYXNPd24pcmV0dXJuIHRydWU7XG5cdCAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuXHQgIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogZmFsc2U7XG5cdH07XG5cblx0bWV0YWRhdGEuZXhwKHtoYXNNZXRhZGF0YTogZnVuY3Rpb24gaGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcblx0ICByZXR1cm4gb3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG5cdH19KTtcblxuLyoqKi8gfSxcbi8qIDI4MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3NSlcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhc1xuXHQgICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxuXHRtZXRhZGF0YS5leHAoe2hhc093bk1ldGFkYXRhOiBmdW5jdGlvbiBoYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuXHQgIHJldHVybiBvcmRpbmFyeUhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpXG5cdCAgICAsIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xuXHR9fSk7XG5cbi8qKiovIH0sXG4vKiAyODMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBtZXRhZGF0YSAgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzUpXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGFGdW5jdGlvbiAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleVxuXHQgICwgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IG1ldGFkYXRhLnNldDtcblxuXHRtZXRhZGF0YS5leHAoe21ldGFkYXRhOiBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIHRhcmdldEtleSl7XG5cdCAgICBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKFxuXHQgICAgICBtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSxcblx0ICAgICAgKHRhcmdldEtleSAhPT0gdW5kZWZpbmVkID8gYW5PYmplY3QgOiBhRnVuY3Rpb24pKHRhcmdldCksXG5cdCAgICAgIHRvTWV0YUtleSh0YXJnZXRLZXkpXG5cdCAgICApO1xuXHQgIH07XG5cdH19KTtcblxuLyoqKi8gfSxcbi8qIDI4NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3J3YWxkcm9uL3RjMzktbm90ZXMvYmxvYi9tYXN0ZXIvZXM2LzIwMTQtMDkvc2VwdC0yNS5tZCM1MTAtZ2xvYmFsYXNhcC1mb3ItZW5xdWV1aW5nLWEtbWljcm90YXNrXG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBtaWNyb3Rhc2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMSkoKVxuXHQgICwgcHJvY2VzcyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5wcm9jZXNzXG5cdCAgLCBpc05vZGUgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cblx0JGV4cG9ydCgkZXhwb3J0LkcsIHtcblx0ICBhc2FwOiBmdW5jdGlvbiBhc2FwKGZuKXtcblx0ICAgIHZhciBkb21haW4gPSBpc05vZGUgJiYgcHJvY2Vzcy5kb21haW47XG5cdCAgICBtaWNyb3Rhc2soZG9tYWluID8gZG9tYWluLmJpbmQoZm4pIDogZm4pO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyODUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxuXHR2YXIgJGV4cG9ydCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBnbG9iYWwgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGNvcmUgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KVxuXHQgICwgbWljcm90YXNrICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMSkoKVxuXHQgICwgT0JTRVJWQUJMRSAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnb2JzZXJ2YWJsZScpXG5cdCAgLCBhRnVuY3Rpb24gICA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCBhbk9iamVjdCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBhbkluc3RhbmNlICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk3KVxuXHQgICwgcmVkZWZpbmVBbGwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMilcblx0ICAsIGhpZGUgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KVxuXHQgICwgZm9yT2YgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5OClcblx0ICAsIFJFVFVSTiAgICAgID0gZm9yT2YuUkVUVVJOO1xuXG5cdHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihmbil7XG5cdCAgcmV0dXJuIGZuID09IG51bGwgPyB1bmRlZmluZWQgOiBhRnVuY3Rpb24oZm4pO1xuXHR9O1xuXG5cdHZhciBjbGVhbnVwU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcblx0ICB2YXIgY2xlYW51cCA9IHN1YnNjcmlwdGlvbi5fYztcblx0ICBpZihjbGVhbnVwKXtcblx0ICAgIHN1YnNjcmlwdGlvbi5fYyA9IHVuZGVmaW5lZDtcblx0ICAgIGNsZWFudXAoKTtcblx0ICB9XG5cdH07XG5cblx0dmFyIHN1YnNjcmlwdGlvbkNsb3NlZCA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG5cdCAgcmV0dXJuIHN1YnNjcmlwdGlvbi5fbyA9PT0gdW5kZWZpbmVkO1xuXHR9O1xuXG5cdHZhciBjbG9zZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG5cdCAgaWYoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXtcblx0ICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcblx0ICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcblx0ICB9XG5cdH07XG5cblx0dmFyIFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uKG9ic2VydmVyLCBzdWJzY3JpYmVyKXtcblx0ICBhbk9iamVjdChvYnNlcnZlcik7XG5cdCAgdGhpcy5fYyA9IHVuZGVmaW5lZDtcblx0ICB0aGlzLl9vID0gb2JzZXJ2ZXI7XG5cdCAgb2JzZXJ2ZXIgPSBuZXcgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIodGhpcyk7XG5cdCAgdHJ5IHtcblx0ICAgIHZhciBjbGVhbnVwICAgICAgPSBzdWJzY3JpYmVyKG9ic2VydmVyKVxuXHQgICAgICAsIHN1YnNjcmlwdGlvbiA9IGNsZWFudXA7XG5cdCAgICBpZihjbGVhbnVwICE9IG51bGwpe1xuXHQgICAgICBpZih0eXBlb2YgY2xlYW51cC51bnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJyljbGVhbnVwID0gZnVuY3Rpb24oKXsgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7IH07XG5cdCAgICAgIGVsc2UgYUZ1bmN0aW9uKGNsZWFudXApO1xuXHQgICAgICB0aGlzLl9jID0gY2xlYW51cDtcblx0ICAgIH1cblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG5cdCAgICByZXR1cm47XG5cdCAgfSBpZihzdWJzY3JpcHRpb25DbG9zZWQodGhpcykpY2xlYW51cFN1YnNjcmlwdGlvbih0aGlzKTtcblx0fTtcblxuXHRTdWJzY3JpcHRpb24ucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoe30sIHtcblx0ICB1bnN1YnNjcmliZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKXsgY2xvc2VTdWJzY3JpcHRpb24odGhpcyk7IH1cblx0fSk7XG5cblx0dmFyIFN1YnNjcmlwdGlvbk9ic2VydmVyID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcblx0ICB0aGlzLl9zID0gc3Vic2NyaXB0aW9uO1xuXHR9O1xuXG5cdFN1YnNjcmlwdGlvbk9ic2VydmVyLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKHt9LCB7XG5cdCAgbmV4dDogZnVuY3Rpb24gbmV4dCh2YWx1ZSl7XG5cdCAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcblx0ICAgIGlmKCFzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSl7XG5cdCAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlci5uZXh0KTtcblx0ICAgICAgICBpZihtKXJldHVybiBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKTtcblx0ICAgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgY2xvc2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcblx0ICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgdGhyb3cgZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIGVycm9yOiBmdW5jdGlvbiBlcnJvcih2YWx1ZSl7XG5cdCAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcblx0ICAgIGlmKHN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXRocm93IHZhbHVlO1xuXHQgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuXHQgICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuXHQgICAgdHJ5IHtcblx0ICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIuZXJyb3IpO1xuXHQgICAgICBpZighbSl0aHJvdyB2YWx1ZTtcblx0ICAgICAgdmFsdWUgPSBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKTtcblx0ICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuXHQgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgIHRocm93IGU7XG5cdCAgICAgIH1cblx0ICAgIH0gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuXHQgICAgcmV0dXJuIHZhbHVlO1xuXHQgIH0sXG5cdCAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKXtcblx0ICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuXHQgICAgaWYoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXtcblx0ICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuXHQgICAgICBzdWJzY3JpcHRpb24uX28gPSB1bmRlZmluZWQ7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIuY29tcGxldGUpO1xuXHQgICAgICAgIHZhbHVlID0gbSA/IG0uY2FsbChvYnNlcnZlciwgdmFsdWUpIDogdW5kZWZpbmVkO1xuXHQgICAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG5cdCAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgIHRocm93IGU7XG5cdCAgICAgICAgfVxuXHQgICAgICB9IGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcblx0ICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgfVxuXHQgIH1cblx0fSk7XG5cblx0dmFyICRPYnNlcnZhYmxlID0gZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmVyKXtcblx0ICBhbkluc3RhbmNlKHRoaXMsICRPYnNlcnZhYmxlLCAnT2JzZXJ2YWJsZScsICdfZicpLl9mID0gYUZ1bmN0aW9uKHN1YnNjcmliZXIpO1xuXHR9O1xuXG5cdHJlZGVmaW5lQWxsKCRPYnNlcnZhYmxlLnByb3RvdHlwZSwge1xuXHQgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKXtcblx0ICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKG9ic2VydmVyLCB0aGlzLl9mKTtcblx0ICB9LFxuXHQgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goZm4pe1xuXHQgICAgdmFyIHRoYXQgPSB0aGlzO1xuXHQgICAgcmV0dXJuIG5ldyAoY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuXHQgICAgICBhRnVuY3Rpb24oZm4pO1xuXHQgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhhdC5zdWJzY3JpYmUoe1xuXHQgICAgICAgIG5leHQgOiBmdW5jdGlvbih2YWx1ZSl7XG5cdCAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICByZXR1cm4gZm4odmFsdWUpO1xuXHQgICAgICAgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICAgICAgcmVqZWN0KGUpO1xuXHQgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXHQgICAgICAgIGVycm9yOiByZWplY3QsXG5cdCAgICAgICAgY29tcGxldGU6IHJlc29sdmVcblx0ICAgICAgfSk7XG5cdCAgICB9KTtcblx0ICB9XG5cdH0pO1xuXG5cdHJlZGVmaW5lQWxsKCRPYnNlcnZhYmxlLCB7XG5cdCAgZnJvbTogZnVuY3Rpb24gZnJvbSh4KXtcblx0ICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicgPyB0aGlzIDogJE9ic2VydmFibGU7XG5cdCAgICB2YXIgbWV0aG9kID0gZ2V0TWV0aG9kKGFuT2JqZWN0KHgpW09CU0VSVkFCTEVdKTtcblx0ICAgIGlmKG1ldGhvZCl7XG5cdCAgICAgIHZhciBvYnNlcnZhYmxlID0gYW5PYmplY3QobWV0aG9kLmNhbGwoeCkpO1xuXHQgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5jb25zdHJ1Y3RvciA9PT0gQyA/IG9ic2VydmFibGUgOiBuZXcgQyhmdW5jdGlvbihvYnNlcnZlcil7XG5cdCAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24ob2JzZXJ2ZXIpe1xuXHQgICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuXHQgICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcblx0ICAgICAgICBpZighZG9uZSl7XG5cdCAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICBpZihmb3JPZih4LCBmYWxzZSwgZnVuY3Rpb24oaXQpe1xuXHQgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXQpO1xuXHQgICAgICAgICAgICAgIGlmKGRvbmUpcmV0dXJuIFJFVFVSTjtcblx0ICAgICAgICAgICAgfSkgPT09IFJFVFVSTilyZXR1cm47XG5cdCAgICAgICAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgICAgICBpZihkb25lKXRocm93IGU7XG5cdCAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGUpO1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgICB9IG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IGRvbmUgPSB0cnVlOyB9O1xuXHQgICAgfSk7XG5cdCAgfSxcblx0ICBvZjogZnVuY3Rpb24gb2YoKXtcblx0ICAgIGZvcih2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IEFycmF5KGwpOyBpIDwgbDspaXRlbXNbaV0gPSBhcmd1bWVudHNbaSsrXTtcblx0ICAgIHJldHVybiBuZXcgKHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nID8gdGhpcyA6ICRPYnNlcnZhYmxlKShmdW5jdGlvbihvYnNlcnZlcil7XG5cdCAgICAgIHZhciBkb25lID0gZmFsc2U7XG5cdCAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuXHQgICAgICAgIGlmKCFkb25lKXtcblx0ICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSl7XG5cdCAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXRlbXNbaV0pO1xuXHQgICAgICAgICAgICBpZihkb25lKXJldHVybjtcblx0ICAgICAgICAgIH0gb2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgZG9uZSA9IHRydWU7IH07XG5cdCAgICB9KTtcblx0ICB9XG5cdH0pO1xuXG5cdGhpZGUoJE9ic2VydmFibGUucHJvdG90eXBlLCBPQlNFUlZBQkxFLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LkcsIHtPYnNlcnZhYmxlOiAkT2JzZXJ2YWJsZX0pO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTg2KSgnT2JzZXJ2YWJsZScpO1xuXG4vKioqLyB9LFxuLyogMjg2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICR0YXNrICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMCk7XG5cdCRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CLCB7XG5cdCAgc2V0SW1tZWRpYXRlOiAgICR0YXNrLnNldCxcblx0ICBjbGVhckltbWVkaWF0ZTogJHRhc2suY2xlYXJcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyODcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkaXRlcmF0b3JzICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODMpXG5cdCAgLCByZWRlZmluZSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNilcblx0ICAsIGdsb2JhbCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBoaWRlICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KVxuXHQgICwgSXRlcmF0b3JzICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTM1KVxuXHQgICwgd2tzICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpXG5cdCAgLCBJVEVSQVRPUiAgICAgID0gd2tzKCdpdGVyYXRvcicpXG5cdCAgLCBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpXG5cdCAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5cdGZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuXHQgIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cblx0ICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuXHQgICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZVxuXHQgICAgLCBrZXk7XG5cdCAgaWYocHJvdG8pe1xuXHQgICAgaWYoIXByb3RvW0lURVJBVE9SXSloaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuXHQgICAgaWYoIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuXHQgICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG5cdCAgICBmb3Ioa2V5IGluICRpdGVyYXRvcnMpaWYoIXByb3RvW2tleV0pcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcblx0ICB9XG5cdH1cblxuLyoqKi8gfSxcbi8qIDI4OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuXHR2YXIgZ2xvYmFsICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsICRleHBvcnQgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBpbnZva2UgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3Nilcblx0ICAsIHBhcnRpYWwgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4OSlcblx0ICAsIG5hdmlnYXRvciAgPSBnbG9iYWwubmF2aWdhdG9yXG5cdCAgLCBNU0lFICAgICAgID0gISFuYXZpZ2F0b3IgJiYgL01TSUUgLlxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xuXHR2YXIgd3JhcCA9IGZ1bmN0aW9uKHNldCl7XG5cdCAgcmV0dXJuIE1TSUUgPyBmdW5jdGlvbihmbiwgdGltZSAvKiwgLi4uYXJncyAqLyl7XG5cdCAgICByZXR1cm4gc2V0KGludm9rZShcblx0ICAgICAgcGFydGlhbCxcblx0ICAgICAgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpLFxuXHQgICAgICB0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pXG5cdCAgICApLCB0aW1lKTtcblx0ICB9IDogc2V0O1xuXHR9O1xuXHQkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuQiArICRleHBvcnQuRiAqIE1TSUUsIHtcblx0ICBzZXRUaW1lb3V0OiAgd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG5cdCAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI4OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgcGF0aCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOTApXG5cdCAgLCBpbnZva2UgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc2KVxuXHQgICwgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oLyogLi4ucGFyZ3MgKi8pe1xuXHQgIHZhciBmbiAgICAgPSBhRnVuY3Rpb24odGhpcylcblx0ICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgLCBwYXJncyAgPSBBcnJheShsZW5ndGgpXG5cdCAgICAsIGkgICAgICA9IDBcblx0ICAgICwgXyAgICAgID0gcGF0aC5fXG5cdCAgICAsIGhvbGRlciA9IGZhbHNlO1xuXHQgIHdoaWxlKGxlbmd0aCA+IGkpaWYoKHBhcmdzW2ldID0gYXJndW1lbnRzW2krK10pID09PSBfKWhvbGRlciA9IHRydWU7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuXHQgICAgdmFyIHRoYXQgPSB0aGlzXG5cdCAgICAgICwgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICAgLCBqID0gMCwgayA9IDAsIGFyZ3M7XG5cdCAgICBpZighaG9sZGVyICYmICFhTGVuKXJldHVybiBpbnZva2UoZm4sIHBhcmdzLCB0aGF0KTtcblx0ICAgIGFyZ3MgPSBwYXJncy5zbGljZSgpO1xuXHQgICAgaWYoaG9sZGVyKWZvcig7bGVuZ3RoID4gajsgaisrKWlmKGFyZ3Nbal0gPT09IF8pYXJnc1tqXSA9IGFyZ3VtZW50c1trKytdO1xuXHQgICAgd2hpbGUoYUxlbiA+IGspYXJncy5wdXNoKGFyZ3VtZW50c1trKytdKTtcblx0ICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyOTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuLyoqKi8gfVxuLyoqKioqKi8gXSk7XG4vLyBDb21tb25KUyBleHBvcnRcbmlmKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpbW9kdWxlLmV4cG9ydHMgPSBfX2U7XG4vLyBSZXF1aXJlSlMgZXhwb3J0XG5lbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKWRlZmluZShmdW5jdGlvbigpe3JldHVybiBfX2V9KTtcbi8vIEV4cG9ydCB0byBnbG9iYWwgb2JqZWN0XG5lbHNlIF9fZy5jb3JlID0gX19lO1xufSgxLCAxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9jbGllbnQvc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMzgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuKiBAbGljZW5zZVxuKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG52YXIgWm9uZSQxID0gKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICBpZiAoZ2xvYmFsLlpvbmUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGFscmVhZHkgbG9hZGVkLicpO1xuICAgIH1cbiAgICB2YXIgWm9uZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFpvbmUocGFyZW50LCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gem9uZVNwZWMgPyB6b25lU3BlYy5uYW1lIHx8ICd1bm5hbWVkJyA6ICc8cm9vdD4nO1xuICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllcyA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLnByb3BlcnRpZXMgfHwge307XG4gICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUgPVxuICAgICAgICAgICAgICAgIG5ldyBab25lRGVsZWdhdGUodGhpcywgdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC5fem9uZURlbGVnYXRlLCB6b25lU3BlYyk7XG4gICAgICAgIH1cbiAgICAgICAgWm9uZS5hc3NlcnRab25lUGF0Y2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChnbG9iYWwuUHJvbWlzZSAhPT0gWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZS5qcyBoYXMgZGV0ZWN0ZWQgdGhhdCBab25lQXdhcmVQcm9taXNlIGAod2luZG93fGdsb2JhbCkuUHJvbWlzZWAgJyArXG4gICAgICAgICAgICAgICAgICAgICdoYXMgYmVlbiBvdmVyd3JpdHRlbi5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgJ01vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgYSBQcm9taXNlIHBvbHlmaWxsIGhhcyBiZWVuIGxvYWRlZCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyIFpvbmUuanMgKFBvbHlmaWxsaW5nIFByb21pc2UgYXBpIGlzIG5vdCBuZWNlc3Nhcnkgd2hlbiB6b25lLmpzIGlzIGxvYWRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdJZiB5b3UgbXVzdCBsb2FkIG9uZSwgZG8gc28gYmVmb3JlIGxvYWRpbmcgem9uZS5qcy4pJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcImN1cnJlbnRcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jdXJyZW50Wm9uZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwiY3VycmVudFRhc2tcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jdXJyZW50VGFzaztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUucHJvdG90eXBlLCBcInBhcmVudFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZS5wcm90b3R5cGUsIFwibmFtZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIHpvbmUgPSB0aGlzLmdldFpvbmVXaXRoKGtleSk7XG4gICAgICAgICAgICBpZiAoem9uZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gem9uZS5fcHJvcGVydGllc1trZXldO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5nZXRab25lV2l0aCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcztcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuX3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gKHpvbmVTcGVjKSB7XG4gICAgICAgICAgICBpZiAoIXpvbmVTcGVjKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZVNwZWMgcmVxdWlyZWQhJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmZvcmsodGhpcywgem9uZVNwZWMpO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS53cmFwID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGluZyBmdW5jdGlvbiBnb3Q6ICcgKyBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2NhbGxiYWNrID0gdGhpcy5fem9uZURlbGVnYXRlLmludGVyY2VwdCh0aGlzLCBjYWxsYmFjaywgc291cmNlKTtcbiAgICAgICAgICAgIHZhciB6b25lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuR3VhcmRlZChfY2FsbGJhY2ssIHRoaXMsIGFyZ3VtZW50cywgc291cmNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGFwcGx5VGhpcyA9PT0gdm9pZCAwKSB7IGFwcGx5VGhpcyA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChhcHBseUFyZ3MgPT09IHZvaWQgMCkgeyBhcHBseUFyZ3MgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoc291cmNlID09PSB2b2lkIDApIHsgc291cmNlID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIG9sZFpvbmUgPSBfY3VycmVudFpvbmU7XG4gICAgICAgICAgICBfY3VycmVudFpvbmUgPSB0aGlzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZSh0aGlzLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBfY3VycmVudFpvbmUgPSBvbGRab25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5ydW5HdWFyZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoYXBwbHlUaGlzID09PSB2b2lkIDApIHsgYXBwbHlUaGlzID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKGFwcGx5QXJncyA9PT0gdm9pZCAwKSB7IGFwcGx5QXJncyA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IHZvaWQgMCkgeyBzb3VyY2UgPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgb2xkWm9uZSA9IF9jdXJyZW50Wm9uZTtcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IHRoaXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IG9sZFpvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnJ1blRhc2sgPSBmdW5jdGlvbiAodGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcbiAgICAgICAgICAgIHRhc2sucnVuQ291bnQrKztcbiAgICAgICAgICAgIGlmICh0YXNrLnpvbmUgIT0gdGhpcylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdGFzayBjYW4gb25seSBiZSBydW4gaW4gdGhlIHpvbmUgd2hpY2ggY3JlYXRlZCBpdCEgKENyZWF0aW9uOiAnICsgdGFzay56b25lLm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAnOyBFeGVjdXRpb246ICcgKyB0aGlzLm5hbWUgKyAnKScpO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVGFzayA9IF9jdXJyZW50VGFzaztcbiAgICAgICAgICAgIF9jdXJyZW50VGFzayA9IHRhc2s7XG4gICAgICAgICAgICB2YXIgb2xkWm9uZSA9IF9jdXJyZW50Wm9uZTtcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IHRoaXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnR5cGUgPT0gJ21hY3JvVGFzaycgJiYgdGFzay5kYXRhICYmICF0YXNrLmRhdGEuaXNQZXJpb2RpYykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbmNlbEZuID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrKHRoaXMsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IG9sZFpvbmU7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gcHJldmlvdXNUYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGhpcywgbmV3IFpvbmVUYXNrKCdtaWNyb1Rhc2snLCB0aGlzLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgbnVsbCkpO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZU1hY3JvVGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCBuZXcgWm9uZVRhc2soJ21hY3JvVGFzaycsIHRoaXMsIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuc2NoZWR1bGVFdmVudFRhc2sgPSBmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGhpcywgbmV3IFpvbmVUYXNrKCdldmVudFRhc2snLCB0aGlzLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fem9uZURlbGVnYXRlLmNhbmNlbFRhc2sodGhpcywgdGFzayk7XG4gICAgICAgICAgICB0YXNrLnJ1bkNvdW50ID0gLTE7XG4gICAgICAgICAgICB0YXNrLmNhbmNlbEZuID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5fX3N5bWJvbF9fID0gX19zeW1ib2xfXztcbiAgICAgICAgcmV0dXJuIFpvbmU7XG4gICAgfSgpKTtcbiAgICBcbiAgICB2YXIgWm9uZURlbGVnYXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gWm9uZURlbGVnYXRlKHpvbmUsIHBhcmVudERlbGVnYXRlLCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fdGFza0NvdW50cyA9IHsgbWljcm9UYXNrOiAwLCBtYWNyb1Rhc2s6IDAsIGV2ZW50VGFzazogMCB9O1xuICAgICAgICAgICAgdGhpcy56b25lID0gem9uZTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudERlbGVnYXRlID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICB0aGlzLl9mb3JrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMgJiYgem9uZVNwZWMub25Gb3JrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdFpTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRaUyk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHREbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHREbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVpTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlWlMpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yWlMpO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2taUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYXNUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faGFzVGFza1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYXNUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faGFzVGFza0RsZ3QpO1xuICAgICAgICB9XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuZm9yayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB6b25lU3BlYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZvcmtaUyA/IHRoaXMuX2ZvcmtaUy5vbkZvcmsodGhpcy5fZm9ya0RsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgem9uZVNwZWMpIDpcbiAgICAgICAgICAgICAgICBuZXcgWm9uZSh0YXJnZXRab25lLCB6b25lU3BlYyk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGNhbGxiYWNrLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnRlcmNlcHRaUyA/XG4gICAgICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0WlMub25JbnRlcmNlcHQodGhpcy5faW50ZXJjZXB0RGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCBjYWxsYmFjaywgc291cmNlKSA6XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlWlMgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVpTLm9uSW52b2tlKHRoaXMuX2ludm9rZURsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIDpcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvclpTID9cbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTLm9uSGFuZGxlRXJyb3IodGhpcy5faGFuZGxlRXJyb3JEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA6XG4gICAgICAgICAgICAgICAgdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5zY2hlZHVsZVRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2NoZWR1bGVUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlVGFza1pTLm9uU2NoZWR1bGVUYXNrKHRoaXMuX3NjaGVkdWxlVGFza0RsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhc2suc2NoZWR1bGVGbikge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnNjaGVkdWxlRm4odGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhc2sudHlwZSA9PSAnbWljcm9UYXNrJykge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFzayBpcyBtaXNzaW5nIHNjaGVkdWxlRm4uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFpvbmUgPT0gdGhpcy56b25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLnR5cGUsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5pbnZva2VUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZva2VUYXNrWlMgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMub25JbnZva2VUYXNrKHRoaXMuX2ludm9rZVRhc2tEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSA6XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFpvbmUgPT0gdGhpcy56b25lICYmICh0YXNrLnR5cGUgIT0gJ2V2ZW50VGFzaycpICYmXG4gICAgICAgICAgICAgICAgICAgICEodGFzay5kYXRhICYmIHRhc2suZGF0YS5pc1BlcmlvZGljKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzay50eXBlLCAtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbmNlbFRhc2taUykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fY2FuY2VsVGFza1pTLm9uQ2FuY2VsVGFzayh0aGlzLl9jYW5jZWxUYXNrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCF0YXNrLmNhbmNlbEZuKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXNrIGRvZXMgbm90IHN1cHBvcnQgY2FuY2VsbGF0aW9uLCBvciBpcyBhbHJlYWR5IGNhbmNlbGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0YXNrLmNhbmNlbEZuKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldFpvbmUgPT0gdGhpcy56b25lKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBzaG91bGQgbm90IGJlIGluIHRoZSBmaW5hbGx5IGJsb2NrLCBiZWNhdXNlIGV4Y2VwdGlvbnMgYXNzdW1lIG5vdCBjYW5jZWxlZC5cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzay50eXBlLCAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFzVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBpc0VtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzVGFza1pTICYmXG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTLm9uSGFzVGFzayh0aGlzLl9oYXNUYXNrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCBpc0VtcHR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5fdXBkYXRlVGFza0NvdW50ID0gZnVuY3Rpb24gKHR5cGUsIGNvdW50KSB7XG4gICAgICAgICAgICB2YXIgY291bnRzID0gdGhpcy5fdGFza0NvdW50cztcbiAgICAgICAgICAgIHZhciBwcmV2ID0gY291bnRzW3R5cGVdO1xuICAgICAgICAgICAgdmFyIG5leHQgPSBjb3VudHNbdHlwZV0gPSBwcmV2ICsgY291bnQ7XG4gICAgICAgICAgICBpZiAobmV4dCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vcmUgdGFza3MgZXhlY3V0ZWQgdGhlbiB3ZXJlIHNjaGVkdWxlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2ID09IDAgfHwgbmV4dCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzRW1wdHkgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1pY3JvVGFzazogY291bnRzLm1pY3JvVGFzayA+IDAsXG4gICAgICAgICAgICAgICAgICAgIG1hY3JvVGFzazogY291bnRzLm1hY3JvVGFzayA+IDAsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFzazogY291bnRzLmV2ZW50VGFzayA+IDAsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogdHlwZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNUYXNrKHRoaXMuem9uZSwgaXNFbXB0eSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50RGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudERlbGVnYXRlLl91cGRhdGVUYXNrQ291bnQodHlwZSwgY291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gWm9uZURlbGVnYXRlO1xuICAgIH0oKSk7XG4gICAgdmFyIFpvbmVUYXNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gWm9uZVRhc2sodHlwZSwgem9uZSwgc291cmNlLCBjYWxsYmFjaywgb3B0aW9ucywgc2NoZWR1bGVGbiwgY2FuY2VsRm4pIHtcbiAgICAgICAgICAgIHRoaXMucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgICAgIHRoaXMuem9uZSA9IHpvbmU7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlRm4gPSBzY2hlZHVsZUZuO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxGbiA9IGNhbmNlbEZuO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcysrO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB6b25lLnJ1blRhc2soc2VsZiwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWluTWljcm9UYXNrUXVldWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBab25lVGFzay5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHR5cGVvZiB0aGlzLmRhdGEuaGFuZGxlSWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oYW5kbGVJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBab25lVGFzaztcbiAgICB9KCkpO1xuICAgIGZ1bmN0aW9uIF9fc3ltYm9sX18obmFtZSkge1xuICAgICAgICByZXR1cm4gJ19fem9uZV9zeW1ib2xfXycgKyBuYW1lO1xuICAgIH1cbiAgICBcbiAgICB2YXIgc3ltYm9sU2V0VGltZW91dCA9IF9fc3ltYm9sX18oJ3NldFRpbWVvdXQnKTtcbiAgICB2YXIgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICB2YXIgc3ltYm9sVGhlbiA9IF9fc3ltYm9sX18oJ3RoZW4nKTtcbiAgICB2YXIgX2N1cnJlbnRab25lID0gbmV3IFpvbmUobnVsbCwgbnVsbCk7XG4gICAgdmFyIF9jdXJyZW50VGFzayA9IG51bGw7XG4gICAgdmFyIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICAgIHZhciBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG4gICAgdmFyIF91bmNhdWdodFByb21pc2VFcnJvcnMgPSBbXTtcbiAgICB2YXIgX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9IDA7XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVRdWV1ZURyYWluKCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbm90IHJ1bm5pbmcgaW4gYW55IHRhc2ssIGFuZCB0aGVyZSBoYXMgbm90IGJlZW4gYW55dGhpbmcgc2NoZWR1bGVkXG4gICAgICAgIC8vIHdlIG11c3QgYm9vdHN0cmFwIHRoZSBpbml0aWFsIHRhc2sgY3JlYXRpb24gYnkgbWFudWFsbHkgc2NoZWR1bGluZyB0aGUgZHJhaW5cbiAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT0gMCAmJiBfbWljcm9UYXNrUXVldWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZSBub3QgcnVubmluZyBpbiBUYXNrLCBzbyB3ZSBuZWVkIHRvIGtpY2tzdGFydCB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgICAgICAgaWYgKGdsb2JhbFtzeW1ib2xQcm9taXNlXSkge1xuICAgICAgICAgICAgICAgIGdsb2JhbFtzeW1ib2xQcm9taXNlXS5yZXNvbHZlKDApW3N5bWJvbFRoZW5dKGRyYWluTWljcm9UYXNrUXVldWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsW3N5bWJvbFNldFRpbWVvdXRdKGRyYWluTWljcm9UYXNrUXVldWUsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spIHtcbiAgICAgICAgc2NoZWR1bGVRdWV1ZURyYWluKCk7XG4gICAgICAgIF9taWNyb1Rhc2tRdWV1ZS5wdXNoKHRhc2spO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb25zb2xlRXJyb3IoZSkge1xuICAgICAgICB2YXIgcmVqZWN0aW9uID0gZSAmJiBlLnJlamVjdGlvbjtcbiAgICAgICAgaWYgKHJlamVjdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIFByb21pc2UgcmVqZWN0aW9uOicsIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLm1lc3NhZ2UgOiByZWplY3Rpb24sICc7IFpvbmU6JywgZS56b25lLm5hbWUsICc7IFRhc2s6JywgZS50YXNrICYmIGUudGFzay5zb3VyY2UsICc7IFZhbHVlOicsIHJlamVjdGlvbiwgcmVqZWN0aW9uIGluc3RhbmNlb2YgRXJyb3IgPyByZWplY3Rpb24uc3RhY2sgOiB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRyYWluTWljcm9UYXNrUXVldWUoKSB7XG4gICAgICAgIGlmICghX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSkge1xuICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IHRydWU7XG4gICAgICAgICAgICB3aGlsZSAoX21pY3JvVGFza1F1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IF9taWNyb1Rhc2tRdWV1ZTtcbiAgICAgICAgICAgICAgICBfbWljcm9UYXNrUXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gcXVldWVbaV07XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3Iuem9uZS5ydW5HdWFyZGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdoaWxlIChfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVGhlbmFibGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnRoZW47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcndhcmRSZXNvbHV0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9yd2FyZFJlamVjdGlvbihyZWplY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2UucmVqZWN0KHJlamVjdGlvbik7XG4gICAgfVxuICAgIHZhciBzeW1ib2xTdGF0ZSA9IF9fc3ltYm9sX18oJ3N0YXRlJyk7XG4gICAgdmFyIHN5bWJvbFZhbHVlID0gX19zeW1ib2xfXygndmFsdWUnKTtcbiAgICB2YXIgc291cmNlID0gJ1Byb21pc2UudGhlbic7XG4gICAgdmFyIFVOUkVTT0xWRUQgPSBudWxsO1xuICAgIHZhciBSRVNPTFZFRCA9IHRydWU7XG4gICAgdmFyIFJFSkVDVEVEID0gZmFsc2U7XG4gICAgdmFyIFJFSkVDVEVEX05PX0NBVENIID0gMDtcbiAgICBmdW5jdGlvbiBtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdik7XG4gICAgICAgICAgICAvLyBEbyBub3QgcmV0dXJuIHZhbHVlIG9yIHlvdSB3aWxsIGJyZWFrIHRoZSBQcm9taXNlIHNwZWMuXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2YWx1ZSkge1xuICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UgJiYgdmFsdWVbc3ltYm9sU3RhdGVdICE9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHZhbHVlW3N5bWJvbFN0YXRlXSwgdmFsdWVbc3ltYm9sVmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpLCBtYWtlUmVzb2x2ZXIocHJvbWlzZSwgZmFsc2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT0gMCAmJiBzdGF0ZSA9PSBSRUpFQ1RFRCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEX05PX0NBVENIO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCAoaW4gcHJvbWlzZSk6ICcgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlICYmIHZhbHVlLnN0YWNrID8gJ1xcbicgKyB2YWx1ZS5zdGFjayA6ICcnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvcl8xID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEucmVqZWN0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xLnByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMS56b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMS50YXNrID0gWm9uZS5jdXJyZW50VGFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIF91bmNhdWdodFByb21pc2VFcnJvcnMucHVzaChlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUXVldWVEcmFpbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc29sdmluZyBhbiBhbHJlYWR5IHJlc29sdmVkIHByb21pc2UgaXMgYSBub29wLlxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSkge1xuICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFJFSkVDVEVEX05PX0NBVENIKSB7XG4gICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UgPT09IF91bmNhdWdodFByb21pc2VFcnJvcnNbaV0ucHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSk7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IHByb21pc2Vbc3ltYm9sU3RhdGVdID8gb25GdWxmaWxsZWQgfHwgZm9yd2FyZFJlc29sdXRpb24gOiBvblJlamVjdGVkIHx8IGZvcndhcmRSZWplY3Rpb247XG4gICAgICAgIHpvbmUuc2NoZWR1bGVNaWNyb1Rhc2soc291cmNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgdHJ1ZSwgem9uZS5ydW4oZGVsZWdhdGUsIG51bGwsIFtwcm9taXNlW3N5bWJvbFZhbHVlXV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBab25lQXdhcmVQcm9taXNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gWm9uZUF3YXJlUHJvbWlzZShleGVjdXRvcikge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCEocHJvbWlzZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGJlIGFuIGluc3RhbmNlb2YgUHJvbWlzZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gVU5SRVNPTFZFRDtcbiAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gW107IC8vIHF1ZXVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBleGVjdXRvciAmJiBleGVjdXRvcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgUkVTT0xWRUQpLCBtYWtlUmVzb2x2ZXIocHJvbWlzZSwgUkVKRUNURUQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRVNPTFZFRCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRUpFQ1RFRCwgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZTtcbiAgICAgICAgICAgIHZhciByZWplY3Q7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKGZ1bmN0aW9uIChyZXMsIHJlaikge1xuICAgICAgICAgICAgICAgIF9hID0gW3JlcywgcmVqXSwgcmVzb2x2ZSA9IF9hWzBdLCByZWplY3QgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgJiYgKHByb21pc2UgPSBudWxsIHx8IHJlc29sdmUodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0KGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSAmJiAocHJvbWlzZSA9IG51bGwgfHwgcmVqZWN0KGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbHVlc18xID0gdmFsdWVzOyBfaSA8IHZhbHVlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc18xW19pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICAgICAgdmFyIHJlamVjdDtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzIgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzXzJbX2ldO1xuICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKChmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9OyB9KShjb3VudCksIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY291bnQpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAgICAgdmFyIGNoYWluUHJvbWlzZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG51bGwpO1xuICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAodGhpc1tzeW1ib2xTdGF0ZV0gPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgIHRoaXNbc3ltYm9sVmFsdWVdLnB1c2goem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdCh0aGlzLCB6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFpblByb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuICAgIH0oKSk7XG4gICAgLy8gUHJvdGVjdCBhZ2FpbnN0IGFnZ3Jlc3NpdmUgb3B0aW1pemVycyBkcm9wcGluZyBzZWVtaW5nbHkgdW51c2VkIHByb3BlcnRpZXMuXG4gICAgLy8gRS5nLiBDbG9zdXJlIENvbXBpbGVyIGluIGFkdmFuY2VkIG1vZGUuXG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmVzb2x2ZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlO1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ3JlamVjdCddID0gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3Q7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmFjZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yYWNlO1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ2FsbCddID0gWm9uZUF3YXJlUHJvbWlzZS5hbGw7XG4gICAgdmFyIE5hdGl2ZVByb21pc2UgPSBnbG9iYWxbX19zeW1ib2xfXygnUHJvbWlzZScpXSA9IGdsb2JhbC5Qcm9taXNlO1xuICAgIGdsb2JhbC5Qcm9taXNlID0gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICBmdW5jdGlvbiBwYXRjaFRoZW4oTmF0aXZlUHJvbWlzZSkge1xuICAgICAgICB2YXIgTmF0aXZlUHJvbWlzZVByb3RvdG90eXBlID0gTmF0aXZlUHJvbWlzZS5wcm90b3R5cGU7XG4gICAgICAgIHZhciBOYXRpdmVQcm9taXNlVGhlbiA9IE5hdGl2ZVByb21pc2VQcm90b3RvdHlwZVtfX3N5bWJvbF9fKCd0aGVuJyldID1cbiAgICAgICAgICAgIE5hdGl2ZVByb21pc2VQcm90b3RvdHlwZS50aGVuO1xuICAgICAgICBOYXRpdmVQcm9taXNlUHJvdG90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvblJlc29sdmUsIG9uUmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgbmF0aXZlUHJvbWlzZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFpvbmVBd2FyZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIE5hdGl2ZVByb21pc2VUaGVuLmNhbGwobmF0aXZlUHJvbWlzZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgIHBhdGNoVGhlbihOYXRpdmVQcm9taXNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWxbJ2ZldGNoJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YXIgZmV0Y2hQcm9taXNlID0gdm9pZCAwO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBJbiBNUyBFZGdlIHRoaXMgdGhyb3dzXG4gICAgICAgICAgICAgICAgZmV0Y2hQcm9taXNlID0gZ2xvYmFsWydmZXRjaCddKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIEluIENocm9tZSB0aGlzIHRocm93cyBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGZldGNoUHJvbWlzZSA9IGdsb2JhbFsnZmV0Y2gnXSgnYWJvdXQ6YmxhbmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlnbm9yZSBvdXRwdXQgdG8gcHJldmVudCBlcnJvcjtcbiAgICAgICAgICAgIGZldGNoUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0pO1xuICAgICAgICAgICAgaWYgKGZldGNoUHJvbWlzZS5jb25zdHJ1Y3RvciAhPSBOYXRpdmVQcm9taXNlICYmXG4gICAgICAgICAgICAgICAgZmV0Y2hQcm9taXNlLmNvbnN0cnVjdG9yICE9IFpvbmVBd2FyZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRoZW4oZmV0Y2hQcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGlzIGlzIG5vdCBwYXJ0IG9mIHB1YmxpYyBBUEksIGJ1dCBpdCBpcyB1c2VmdWxsIGZvciB0ZXN0cywgc28gd2UgZXhwb3NlIGl0LlxuICAgIFByb21pc2VbWm9uZS5fX3N5bWJvbF9fKCd1bmNhdWdodFByb21pc2VFcnJvcnMnKV0gPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzO1xuICAgIHJldHVybiBnbG9iYWwuWm9uZSA9IFpvbmU7XG59KSh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgfHwgdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYgfHwgZ2xvYmFsKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIHpvbmVTeW1ib2wgPSBab25lWydfX3N5bWJvbF9fJ107XG52YXIgX2dsb2JhbCQxID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbDtcbmZ1bmN0aW9uIGJpbmRBcmd1bWVudHMoYXJncywgc291cmNlKSB7XG4gICAgZm9yICh2YXIgaSA9IGFyZ3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcmdzW2ldID0gWm9uZS5jdXJyZW50LndyYXAoYXJnc1tpXSwgc291cmNlICsgJ18nICsgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG59XG5cbmZ1bmN0aW9uIHBhdGNoUHJvdG90eXBlKHByb3RvdHlwZSwgZm5OYW1lcykge1xuICAgIHZhciBzb3VyY2UgPSBwcm90b3R5cGUuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyIG5hbWVfMSA9IGZuTmFtZXNbaV07XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IHByb3RvdHlwZVtuYW1lXzFdO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIHByb3RvdHlwZVtuYW1lXzFdID0gKGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cywgc291cmNlICsgJy4nICsgbmFtZV8xKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKGRlbGVnYXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbk5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9sb29wXzEoaSk7XG4gICAgfVxufVxuXG52YXIgaXNXZWJXb3JrZXIgPSAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpO1xudmFyIGlzTm9kZSA9ICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcbnZhciBpc0Jyb3dzZXIgPSAhaXNOb2RlICYmICFpc1dlYldvcmtlciAmJiAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3dbJ0hUTUxFbGVtZW50J10pO1xuZnVuY3Rpb24gcGF0Y2hQcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKSB8fCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9O1xuICAgIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuICAgIC8vIGRlbGV0aW5nIHRoZSB3cml0YWJsZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhdm9pZHMgdGhpcyBlcnJvcjpcbiAgICAvL1xuICAgIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuICAgIC8vIGdldHRlciBvciBzZXR0ZXIgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgLy8gc3Vic3RyKDIpIGN1eiAnb25jbGljaycgLT4gJ2NsaWNrJywgZXRjXG4gICAgdmFyIGV2ZW50TmFtZSA9IHByb3Auc3Vic3RyKDIpO1xuICAgIHZhciBfcHJvcCA9ICdfJyArIHByb3A7XG4gICAgZGVzYy5zZXQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgaWYgKHRoaXNbX3Byb3BdKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzW19wcm9wXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHdyYXBGbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9IHVuZGVmaW5lZCAmJiAhcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXNbX3Byb3BdID0gd3JhcEZuO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcEZuLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzW19wcm9wXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFRoZSBnZXR0ZXIgd291bGQgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdW5hc3NpZ25lZCBwcm9wZXJ0aWVzIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhblxuICAgIC8vIHVuYXNzaWduZWQgcHJvcGVydHkgaXMgbnVsbFxuICAgIGRlc2MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tfcHJvcF0gfHwgbnVsbDtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xufVxuXG5mdW5jdGlvbiBwYXRjaE9uUHJvcGVydGllcyhvYmosIHByb3BlcnRpZXMpIHtcbiAgICB2YXIgb25Qcm9wZXJ0aWVzID0gW107XG4gICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgaWYgKHByb3Auc3Vic3RyKDAsIDIpID09ICdvbicpIHtcbiAgICAgICAgICAgIG9uUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgb25Qcm9wZXJ0aWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCBvblByb3BlcnRpZXNbal0pO1xuICAgIH1cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCAnb24nICsgcHJvcGVydGllc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBFVkVOVF9UQVNLUyA9IHpvbmVTeW1ib2woJ2V2ZW50VGFza3MnKTtcbi8vIEZvciBFdmVudFRhcmdldFxudmFyIEFERF9FVkVOVF9MSVNURU5FUiA9ICdhZGRFdmVudExpc3RlbmVyJztcbnZhciBSRU1PVkVfRVZFTlRfTElTVEVORVIgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5mdW5jdGlvbiBmaW5kRXhpc3RpbmdSZWdpc3RlcmVkVGFzayh0YXJnZXQsIGhhbmRsZXIsIG5hbWUsIGNhcHR1cmUsIHJlbW92ZSkge1xuICAgIHZhciBldmVudFRhc2tzID0gdGFyZ2V0W0VWRU5UX1RBU0tTXTtcbiAgICBpZiAoZXZlbnRUYXNrcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBldmVudFRhc2sgPSBldmVudFRhc2tzW2ldO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBldmVudFRhc2suZGF0YTtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZXIgPT09IGhhbmRsZXIgJiYgZGF0YS51c2VDYXB0dXJpbmcgPT09IGNhcHR1cmUgJiYgZGF0YS5ldmVudE5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gYXR0YWNoUmVnaXN0ZXJlZEV2ZW50KHRhcmdldCwgZXZlbnRUYXNrKSB7XG4gICAgdmFyIGV2ZW50VGFza3MgPSB0YXJnZXRbRVZFTlRfVEFTS1NdO1xuICAgIGlmICghZXZlbnRUYXNrcykge1xuICAgICAgICBldmVudFRhc2tzID0gdGFyZ2V0W0VWRU5UX1RBU0tTXSA9IFtdO1xuICAgIH1cbiAgICBldmVudFRhc2tzLnB1c2goZXZlbnRUYXNrKTtcbn1cbmZ1bmN0aW9uIG1ha2Vab25lQXdhcmVBZGRMaXN0ZW5lcihhZGRGbk5hbWUsIHJlbW92ZUZuTmFtZSwgdXNlQ2FwdHVyaW5nUGFyYW0sIGFsbG93RHVwbGljYXRlcykge1xuICAgIGlmICh1c2VDYXB0dXJpbmdQYXJhbSA9PT0gdm9pZCAwKSB7IHVzZUNhcHR1cmluZ1BhcmFtID0gdHJ1ZTsgfVxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZXMgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZXMgPSBmYWxzZTsgfVxuICAgIHZhciBhZGRGblN5bWJvbCA9IHpvbmVTeW1ib2woYWRkRm5OYW1lKTtcbiAgICB2YXIgcmVtb3ZlRm5TeW1ib2wgPSB6b25lU3ltYm9sKHJlbW92ZUZuTmFtZSk7XG4gICAgdmFyIGRlZmF1bHRVc2VDYXB0dXJpbmcgPSB1c2VDYXB0dXJpbmdQYXJhbSA/IGZhbHNlIDogdW5kZWZpbmVkO1xuICAgIGZ1bmN0aW9uIHNjaGVkdWxlRXZlbnRMaXN0ZW5lcihldmVudFRhc2spIHtcbiAgICAgICAgdmFyIG1ldGEgPSBldmVudFRhc2suZGF0YTtcbiAgICAgICAgYXR0YWNoUmVnaXN0ZXJlZEV2ZW50KG1ldGEudGFyZ2V0LCBldmVudFRhc2spO1xuICAgICAgICByZXR1cm4gbWV0YS50YXJnZXRbYWRkRm5TeW1ib2xdKG1ldGEuZXZlbnROYW1lLCBldmVudFRhc2suaW52b2tlLCBtZXRhLnVzZUNhcHR1cmluZyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbmNlbEV2ZW50TGlzdGVuZXIoZXZlbnRUYXNrKSB7XG4gICAgICAgIHZhciBtZXRhID0gZXZlbnRUYXNrLmRhdGE7XG4gICAgICAgIGZpbmRFeGlzdGluZ1JlZ2lzdGVyZWRUYXNrKG1ldGEudGFyZ2V0LCBldmVudFRhc2suaW52b2tlLCBtZXRhLmV2ZW50TmFtZSwgbWV0YS51c2VDYXB0dXJpbmcsIHRydWUpO1xuICAgICAgICBtZXRhLnRhcmdldFtyZW1vdmVGblN5bWJvbF0obWV0YS5ldmVudE5hbWUsIGV2ZW50VGFzay5pbnZva2UsIG1ldGEudXNlQ2FwdHVyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHpvbmVBd2FyZUFkZExpc3RlbmVyKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBoYW5kbGVyID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIHVzZUNhcHR1cmluZyA9IGFyZ3NbMl0gfHwgZGVmYXVsdFVzZUNhcHR1cmluZztcbiAgICAgICAgLy8gLSBJbnNpZGUgYSBXZWIgV29ya2VyLCBgdGhpc2AgaXMgdW5kZWZpbmVkLCB0aGUgY29udGV4dCBpcyBgZ2xvYmFsYFxuICAgICAgICAvLyAtIFdoZW4gYGFkZEV2ZW50TGlzdGVuZXJgIGlzIGNhbGxlZCBvbiB0aGUgZ2xvYmFsIGNvbnRleHQgaW4gc3RyaWN0IG1vZGUsIGB0aGlzYCBpcyB1bmRlZmluZWRcbiAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzE5MFxuICAgICAgICB2YXIgdGFyZ2V0ID0gc2VsZiB8fCBfZ2xvYmFsJDE7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZSA9IGhhbmRsZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGFuZGxlciAmJiBoYW5kbGVyLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZSA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gaGFuZGxlci5oYW5kbGVFdmVudChldmVudCk7IH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbGlkWm9uZUhhbmRsZXIgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEluIGNyb3NzIHNpdGUgY29udGV4dHMgKHN1Y2ggYXMgV2ViRHJpdmVyIGZyYW1ld29ya3MgbGlrZSBTZWxlbml1bSksXG4gICAgICAgICAgICAvLyBhY2Nlc3NpbmcgdGhlIGhhbmRsZXIgb2JqZWN0IGhlcmUgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24gdG8gYmUgdGhyb3duIHdoaWNoXG4gICAgICAgICAgICAvLyB3aWxsIGZhaWwgdGVzdHMgcHJlbWF0dXJlbHkuXG4gICAgICAgICAgICB2YWxpZFpvbmVIYW5kbGVyID0gaGFuZGxlciAmJiBoYW5kbGVyLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uV3JhcHBlcl0nO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5pbmcgbm90aGluZyBoZXJlIGlzIGZpbmUsIGJlY2F1c2Ugb2JqZWN0cyBpbiBhIGNyb3NzLXNpdGUgY29udGV4dCBhcmUgdW51c2FibGVcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZ25vcmUgc3BlY2lhbCBsaXN0ZW5lcnMgb2YgSUUxMSAmIEVkZ2UgZGV2IHRvb2xzLCBzZWVcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTUwXG4gICAgICAgIGlmICghZGVsZWdhdGUgfHwgdmFsaWRab25lSGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFthZGRGblN5bWJvbF0oZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsb3dEdXBsaWNhdGVzKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRUYXNrID0gZmluZEV4aXN0aW5nUmVnaXN0ZXJlZFRhc2sodGFyZ2V0LCBoYW5kbGVyLCBldmVudE5hbWUsIHVzZUNhcHR1cmluZywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGV2ZW50VGFzaykge1xuICAgICAgICAgICAgICAgIC8vIHdlIGFscmVhZHkgcmVnaXN0ZXJlZCwgc28gdGhpcyB3aWxsIGhhdmUgbm9vcC5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2FkZEZuU3ltYm9sXShldmVudE5hbWUsIGV2ZW50VGFzay5pbnZva2UsIHVzZUNhcHR1cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0YXJnZXQuY29uc3RydWN0b3JbJ25hbWUnXSArICcuJyArIGFkZEZuTmFtZSArICc6JyArIGV2ZW50TmFtZTtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxuICAgICAgICAgICAgbmFtZTogZXZlbnROYW1lLFxuICAgICAgICAgICAgdXNlQ2FwdHVyaW5nOiB1c2VDYXB0dXJpbmcsXG4gICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyXG4gICAgICAgIH07XG4gICAgICAgIHpvbmUuc2NoZWR1bGVFdmVudFRhc2soc291cmNlLCBkZWxlZ2F0ZSwgZGF0YSwgc2NoZWR1bGVFdmVudExpc3RlbmVyLCBjYW5jZWxFdmVudExpc3RlbmVyKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWFrZVpvbmVBd2FyZVJlbW92ZUxpc3RlbmVyKGZuTmFtZSwgdXNlQ2FwdHVyaW5nUGFyYW0pIHtcbiAgICBpZiAodXNlQ2FwdHVyaW5nUGFyYW0gPT09IHZvaWQgMCkgeyB1c2VDYXB0dXJpbmdQYXJhbSA9IHRydWU7IH1cbiAgICB2YXIgc3ltYm9sID0gem9uZVN5bWJvbChmbk5hbWUpO1xuICAgIHZhciBkZWZhdWx0VXNlQ2FwdHVyaW5nID0gdXNlQ2FwdHVyaW5nUGFyYW0gPyBmYWxzZSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZnVuY3Rpb24gem9uZUF3YXJlUmVtb3ZlTGlzdGVuZXIoc2VsZiwgYXJncykge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgdXNlQ2FwdHVyaW5nID0gYXJnc1syXSB8fCBkZWZhdWx0VXNlQ2FwdHVyaW5nO1xuICAgICAgICAvLyAtIEluc2lkZSBhIFdlYiBXb3JrZXIsIGB0aGlzYCBpcyB1bmRlZmluZWQsIHRoZSBjb250ZXh0IGlzIGBnbG9iYWxgXG4gICAgICAgIC8vIC0gV2hlbiBgYWRkRXZlbnRMaXN0ZW5lcmAgaXMgY2FsbGVkIG9uIHRoZSBnbG9iYWwgY29udGV4dCBpbiBzdHJpY3QgbW9kZSwgYHRoaXNgIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgICAgIHZhciB0YXJnZXQgPSBzZWxmIHx8IF9nbG9iYWwkMTtcbiAgICAgICAgdmFyIGV2ZW50VGFzayA9IGZpbmRFeGlzdGluZ1JlZ2lzdGVyZWRUYXNrKHRhcmdldCwgaGFuZGxlciwgZXZlbnROYW1lLCB1c2VDYXB0dXJpbmcsIHRydWUpO1xuICAgICAgICBpZiAoZXZlbnRUYXNrKSB7XG4gICAgICAgICAgICBldmVudFRhc2suem9uZS5jYW5jZWxUYXNrKGV2ZW50VGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbc3ltYm9sXShldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG52YXIgem9uZUF3YXJlQWRkRXZlbnRMaXN0ZW5lciA9IG1ha2Vab25lQXdhcmVBZGRMaXN0ZW5lcihBRERfRVZFTlRfTElTVEVORVIsIFJFTU9WRV9FVkVOVF9MSVNURU5FUik7XG52YXIgem9uZUF3YXJlUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IG1ha2Vab25lQXdhcmVSZW1vdmVMaXN0ZW5lcihSRU1PVkVfRVZFTlRfTElTVEVORVIpO1xuZnVuY3Rpb24gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMob2JqKSB7XG4gICAgaWYgKG9iaiAmJiBvYmouYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBwYXRjaE1ldGhvZChvYmosIEFERF9FVkVOVF9MSVNURU5FUiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gem9uZUF3YXJlQWRkRXZlbnRMaXN0ZW5lcjsgfSk7XG4gICAgICAgIHBhdGNoTWV0aG9kKG9iaiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSLCBmdW5jdGlvbiAoKSB7IHJldHVybiB6b25lQXdhcmVSZW1vdmVFdmVudExpc3RlbmVyOyB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxudmFyIG9yaWdpbmFsSW5zdGFuY2VLZXkgPSB6b25lU3ltYm9sKCdvcmlnaW5hbEluc3RhbmNlJyk7XG4vLyB3cmFwIHNvbWUgbmF0aXZlIEFQSSBvbiBgd2luZG93YFxuZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB2YXIgT3JpZ2luYWxDbGFzcyA9IF9nbG9iYWwkMVtjbGFzc05hbWVdO1xuICAgIGlmICghT3JpZ2luYWxDbGFzcylcbiAgICAgICAgcmV0dXJuO1xuICAgIF9nbG9iYWwkMVtjbGFzc05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYSA9IGJpbmRBcmd1bWVudHMoYXJndW1lbnRzLCBjbGFzc05hbWUpO1xuICAgICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZyBsaXN0IHRvbyBsb25nLicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgT3JpZ2luYWxDbGFzcyhmdW5jdGlvbiAoKSB7IH0pO1xuICAgIHZhciBwcm9wO1xuICAgIGZvciAocHJvcCBpbiBpbnN0YW5jZSkge1xuICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDQ3MjFcbiAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gJ1hNTEh0dHBSZXF1ZXN0JyAmJiBwcm9wID09PSAncmVzcG9uc2VCbG9iJylcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBfZ2xvYmFsJDFbY2xhc3NOYW1lXS5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZ2xvYmFsJDFbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gWm9uZS5jdXJyZW50LndyYXAoZm4sIGNsYXNzTmFtZSArICcuJyArIHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IGZuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0ocHJvcCkpO1xuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gT3JpZ2luYWxDbGFzcykge1xuICAgICAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScgJiYgT3JpZ2luYWxDbGFzcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgX2dsb2JhbCQxW2NsYXNzTmFtZV1bcHJvcF0gPSBPcmlnaW5hbENsYXNzW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOYW1lZEZuKG5hbWUsIGRlbGVnYXRlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIChGdW5jdGlvbignZicsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgbmFtZSArIFwiKCl7cmV0dXJuIGYodGhpcywgYXJndW1lbnRzKX1cIikpKGRlbGVnYXRlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaWYgd2UgZmFpbCwgd2UgbXVzdCBiZSBDU1AsIGp1c3QgcmV0dXJuIGRlbGVnYXRlLlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hNZXRob2QodGFyZ2V0LCBuYW1lLCBwYXRjaEZuKSB7XG4gICAgdmFyIHByb3RvID0gdGFyZ2V0O1xuICAgIHdoaWxlIChwcm90byAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bykuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgIH1cbiAgICBpZiAoIXByb3RvICYmIHRhcmdldFtuYW1lXSkge1xuICAgICAgICAvLyBzb21laG93IHdlIGRpZCBub3QgZmluZCBpdCwgYnV0IHdlIGNhbiBzZWUgaXQuIFRoaXMgaGFwcGVucyBvbiBJRSBmb3IgV2luZG93IHByb3BlcnRpZXMuXG4gICAgICAgIHByb3RvID0gdGFyZ2V0O1xuICAgIH1cbiAgICB2YXIgZGVsZWdhdGVOYW1lID0gem9uZVN5bWJvbChuYW1lKTtcbiAgICB2YXIgZGVsZWdhdGU7XG4gICAgaWYgKHByb3RvICYmICEoZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdKSkge1xuICAgICAgICBkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0gPSBwcm90b1tuYW1lXTtcbiAgICAgICAgcHJvdG9bbmFtZV0gPSBjcmVhdGVOYW1lZEZuKG5hbWUsIHBhdGNoRm4oZGVsZWdhdGUsIGRlbGVnYXRlTmFtZSwgbmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4gZGVsZWdhdGU7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmZ1bmN0aW9uIHBhdGNoVGltZXIod2luZG93LCBzZXROYW1lLCBjYW5jZWxOYW1lLCBuYW1lU3VmZml4KSB7XG4gICAgdmFyIHNldE5hdGl2ZSA9IG51bGw7XG4gICAgdmFyIGNsZWFyTmF0aXZlID0gbnVsbDtcbiAgICBzZXROYW1lICs9IG5hbWVTdWZmaXg7XG4gICAgY2FuY2VsTmFtZSArPSBuYW1lU3VmZml4O1xuICAgIHZhciB0YXNrc0J5SGFuZGxlSWQgPSB7fTtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgICAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgZGF0YS5hcmdzWzBdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlSWRbZGF0YS5oYW5kbGVJZF07XG4gICAgICAgIH07XG4gICAgICAgIGRhdGEuaGFuZGxlSWQgPSBzZXROYXRpdmUuYXBwbHkod2luZG93LCBkYXRhLmFyZ3MpO1xuICAgICAgICB0YXNrc0J5SGFuZGxlSWRbZGF0YS5oYW5kbGVJZF0gPSB0YXNrO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVJZFt0YXNrLmRhdGEuaGFuZGxlSWRdO1xuICAgICAgICByZXR1cm4gY2xlYXJOYXRpdmUodGFzay5kYXRhLmhhbmRsZUlkKTtcbiAgICB9XG4gICAgc2V0TmF0aXZlID1cbiAgICAgICAgcGF0Y2hNZXRob2Qod2luZG93LCBzZXROYW1lLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGlzUGVyaW9kaWM6IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAobmFtZVN1ZmZpeCA9PT0gJ1RpbWVvdXQnIHx8IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcpID8gYXJnc1sxXSB8fCAwIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHRhc2sgPSB6b25lLnNjaGVkdWxlTWFjcm9UYXNrKHNldE5hbWUsIGFyZ3NbMF0sIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vZGUuanMgbXVzdCBhZGRpdGlvbmFsbHkgc3VwcG9ydCB0aGUgcmVmIGFuZCB1bnJlZiBmdW5jdGlvbnMuXG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHRhc2suZGF0YS5oYW5kbGVJZDtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLnJlZiAmJiBoYW5kbGUudW5yZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5yZWYgPSBoYW5kbGUucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgdGFzay51bnJlZiA9IGhhbmRsZS51bnJlZi5iaW5kKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTsgfSk7XG4gICAgY2xlYXJOYXRpdmUgPVxuICAgICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIGNhbmNlbE5hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdHlwZW9mIGFyZ3NbMF0gPT09ICdudW1iZXInID8gdGFza3NCeUhhbmRsZUlkW2FyZ3NbMF1dIDogYXJnc1swXTtcbiAgICAgICAgICAgIGlmICh0YXNrICYmIHR5cGVvZiB0YXNrLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY2FuY2VsRm4gJiYgdGFzay5kYXRhLmlzUGVyaW9kaWMgfHwgdGFzay5ydW5Db3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgY2FuY2VsIGFscmVhZHkgY2FuY2VsZWQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgZGVsZWdhdGUuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTsgfSk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgQ2hyb21lIGFuZCBDaHJvbWUgbW9iaWxlLCB0byBlbmFibGVcbiAqIHRoaW5ncyBsaWtlIHJlZGVmaW5pbmcgYGNyZWF0ZWRDYWxsYmFja2Agb24gYW4gZWxlbWVudC5cbiAqL1xudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IE9iamVjdFt6b25lU3ltYm9sKCdkZWZpbmVQcm9wZXJ0eScpXSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0W3pvbmVTeW1ib2woJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicpXSA9XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciB1bmNvbmZpZ3VyYWJsZXNLZXkgPSB6b25lU3ltYm9sKCd1bmNvbmZpZ3VyYWJsZXMnKTtcbmZ1bmN0aW9uIHByb3BlcnR5UGF0Y2goKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgZGVzYykge1xuICAgICAgICBpZiAoaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgYXNzaWduIHRvIHJlYWQgb25seSBwcm9wZXJ0eSBcXCcnICsgcHJvcCArICdcXCcgb2YgJyArIG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyA9IGRlc2MuY29uZmlndXJhYmxlO1xuICAgICAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgICAgICAgIGRlc2MgPSByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBwcm9wcykge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgcHJvcHNbcHJvcF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIE9iamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAob2JqLCBwcm90bykge1xuICAgICAgICBpZiAodHlwZW9mIHByb3RvID09PSAnb2JqZWN0JyAmJiAhT2JqZWN0LmlzRnJvemVuKHByb3RvKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvdG8pLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICBwcm90b1twcm9wXSA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgcHJvdG9bcHJvcF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9jcmVhdGUob2JqLCBwcm90byk7XG4gICAgfTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG9iaiwgcHJvcCkge1xuICAgICAgICB2YXIgZGVzYyA9IF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICAgICAgaWYgKGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzYztcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfcmVkZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpIHtcbiAgICB2YXIgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnID0gZGVzYy5jb25maWd1cmFibGU7XG4gICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgcmV0dXJuIF90cnlEZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MsIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyk7XG59XG5cbmZ1bmN0aW9uIGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmpbdW5jb25maWd1cmFibGVzS2V5XSAmJiBvYmpbdW5jb25maWd1cmFibGVzS2V5XVtwcm9wXTtcbn1cbmZ1bmN0aW9uIHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYykge1xuICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgIGlmICghb2JqW3VuY29uZmlndXJhYmxlc0tleV0pIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eShvYmosIHVuY29uZmlndXJhYmxlc0tleSwgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9IH0pO1xuICAgICAgICB9XG4gICAgICAgIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2M7XG59XG5mdW5jdGlvbiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgICAgLy8gSW4gY2FzZSBvZiBlcnJvcnMsIHdoZW4gdGhlIGNvbmZpZ3VyYWJsZSBmbGFnIHdhcyBsaWtlbHkgc2V0IGJ5IHJld3JpdGVEZXNjcmlwdG9yKCksIGxldCdzXG4gICAgICAgICAgICAvLyByZXRyeSB3aXRoIHRoZSBvcmlnaW5hbCBmbGFnIHZhbHVlXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gb3JpZ2luYWxDb25maWd1cmFibGVGbGFnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjSnNvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY0pzb24gPSBKU09OLnN0cmluZ2lmeShkZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY0pzb24gPSBkZXNjSnNvbi50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gY29uZmlndXJlICdcIiArIHByb3AgKyBcIicgd2l0aCBkZXNjcmlwdG9yICdcIiArIGRlc2NKc29uICsgXCInIG9uIG9iamVjdCAnXCIgKyBvYmogKyBcIicgYW5kIGdvdCBlcnJvciwgZ2l2aW5nIHVwOiBcIiArIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIFdURl9JU1NVRV81NTUgPSAnQW5jaG9yLEFyZWEsQXVkaW8sQlIsQmFzZSxCYXNlRm9udCxCb2R5LEJ1dHRvbixDYW52YXMsQ29udGVudCxETGlzdCxEaXJlY3RvcnksRGl2LEVtYmVkLEZpZWxkU2V0LEZvbnQsRm9ybSxGcmFtZSxGcmFtZVNldCxIUixIZWFkLEhlYWRpbmcsSHRtbCxJRnJhbWUsSW1hZ2UsSW5wdXQsS2V5Z2VuLExJLExhYmVsLExlZ2VuZCxMaW5rLE1hcCxNYXJxdWVlLE1lZGlhLE1lbnUsTWV0YSxNZXRlcixNb2QsT0xpc3QsT2JqZWN0LE9wdEdyb3VwLE9wdGlvbixPdXRwdXQsUGFyYWdyYXBoLFByZSxQcm9ncmVzcyxRdW90ZSxTY3JpcHQsU2VsZWN0LFNvdXJjZSxTcGFuLFN0eWxlLFRhYmxlQ2FwdGlvbixUYWJsZUNlbGwsVGFibGVDb2wsVGFibGUsVGFibGVSb3csVGFibGVTZWN0aW9uLFRleHRBcmVhLFRpdGxlLFRyYWNrLFVMaXN0LFVua25vd24sVmlkZW8nO1xudmFyIE5PX0VWRU5UX1RBUkdFVCA9ICdBcHBsaWNhdGlvbkNhY2hlLEV2ZW50U291cmNlLEZpbGVSZWFkZXIsSW5wdXRNZXRob2RDb250ZXh0LE1lZGlhQ29udHJvbGxlcixNZXNzYWdlUG9ydCxOb2RlLFBlcmZvcm1hbmNlLFNWR0VsZW1lbnRJbnN0YW5jZSxTaGFyZWRXb3JrZXIsVGV4dFRyYWNrLFRleHRUcmFja0N1ZSxUZXh0VHJhY2tMaXN0LFdlYktpdE5hbWVkRmxvdyxXaW5kb3csV29ya2VyLFdvcmtlckdsb2JhbFNjb3BlLFhNTEh0dHBSZXF1ZXN0LFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQsWE1MSHR0cFJlcXVlc3RVcGxvYWQsSURCUmVxdWVzdCxJREJPcGVuREJSZXF1ZXN0LElEQkRhdGFiYXNlLElEQlRyYW5zYWN0aW9uLElEQkN1cnNvcixEQkluZGV4J1xuICAgIC5zcGxpdCgnLCcpO1xudmFyIEVWRU5UX1RBUkdFVCA9ICdFdmVudFRhcmdldCc7XG5mdW5jdGlvbiBldmVudFRhcmdldFBhdGNoKF9nbG9iYWwpIHtcbiAgICB2YXIgYXBpcyA9IFtdO1xuICAgIHZhciBpc1d0ZiA9IF9nbG9iYWxbJ3d0ZiddO1xuICAgIGlmIChpc1d0Zikge1xuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvcjogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS90cmFjaW5nLWZyYW1ld29yay9pc3N1ZXMvNTU1XG4gICAgICAgIGFwaXMgPSBXVEZfSVNTVUVfNTU1LnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiAnSFRNTCcgKyB2ICsgJ0VsZW1lbnQnOyB9KS5jb25jYXQoTk9fRVZFTlRfVEFSR0VUKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoX2dsb2JhbFtFVkVOVF9UQVJHRVRdKSB7XG4gICAgICAgIGFwaXMucHVzaChFVkVOVF9UQVJHRVQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTm90ZTogRXZlbnRUYXJnZXQgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMsXG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSwgd2UgaW5zdGVhZCBwYXRjaCB0aGUgQVBJcyBpbiB0aGUgSURMIHRoYXQgaW5oZXJpdCBmcm9tIEV2ZW50VGFyZ2V0XG4gICAgICAgIGFwaXMgPSBOT19FVkVOVF9UQVJHRVQ7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXBpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHlwZSA9IF9nbG9iYWxbYXBpc1tpXV07XG4gICAgICAgIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKHR5cGUgJiYgdHlwZS5wcm90b3R5cGUpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLy8gd2UgaGF2ZSB0byBwYXRjaCB0aGUgaW5zdGFuY2Ugc2luY2UgdGhlIHByb3RvIGlzIG5vbi1jb25maWd1cmFibGVcbmZ1bmN0aW9uIGFwcGx5KF9nbG9iYWwpIHtcbiAgICB2YXIgV1MgPSBfZ2xvYmFsLldlYlNvY2tldDtcbiAgICAvLyBPbiBTYWZhcmkgd2luZG93LkV2ZW50VGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgc28gbmVlZCB0byBwYXRjaCBXUyBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgIC8vIE9uIG9sZGVyIENocm9tZSwgbm8gbmVlZCBzaW5jZSBFdmVudFRhcmdldCB3YXMgYWxyZWFkeSBwYXRjaGVkXG4gICAgaWYgKCFfZ2xvYmFsLkV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKFdTLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIF9nbG9iYWwuV2ViU29ja2V0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHNvY2tldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gbmV3IFdTKGEsIGIpIDogbmV3IFdTKGEpO1xuICAgICAgICB2YXIgcHJveHlTb2NrZXQ7XG4gICAgICAgIC8vIFNhZmFyaSA3LjAgaGFzIG5vbi1jb25maWd1cmFibGUgb3duICdvbm1lc3NhZ2UnIGFuZCBmcmllbmRzIHByb3BlcnRpZXMgb24gdGhlIHNvY2tldCBpbnN0YW5jZVxuICAgICAgICB2YXIgb25tZXNzYWdlRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc29ja2V0LCAnb25tZXNzYWdlJyk7XG4gICAgICAgIGlmIChvbm1lc3NhZ2VEZXNjICYmIG9ubWVzc2FnZURlc2MuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBPYmplY3QuY3JlYXRlKHNvY2tldCk7XG4gICAgICAgICAgICBbJ2FkZEV2ZW50TGlzdGVuZXInLCAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsICdzZW5kJywgJ2Nsb3NlJ10uZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm94eVNvY2tldFtwcm9wTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb2NrZXRbcHJvcE5hbWVdLmFwcGx5KHNvY2tldCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZSBjYW4gcGF0Y2ggdGhlIHJlYWwgc29ja2V0XG4gICAgICAgICAgICBwcm94eVNvY2tldCA9IHNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhwcm94eVNvY2tldCwgWydjbG9zZScsICdlcnJvcicsICdtZXNzYWdlJywgJ29wZW4nXSk7XG4gICAgICAgIHJldHVybiBwcm94eVNvY2tldDtcbiAgICB9O1xuICAgIGZvciAodmFyIHByb3AgaW4gV1MpIHtcbiAgICAgICAgX2dsb2JhbC5XZWJTb2NrZXRbcHJvcF0gPSBXU1twcm9wXTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBldmVudE5hbWVzID0gJ2NvcHkgY3V0IHBhc3RlIGFib3J0IGJsdXIgZm9jdXMgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBjaGFuZ2UgY2xpY2sgY29udGV4dG1lbnUgZGJsY2xpY2sgZHJhZyBkcmFnZW5kIGRyYWdlbnRlciBkcmFnbGVhdmUgZHJhZ292ZXIgZHJhZ3N0YXJ0IGRyb3AgZHVyYXRpb25jaGFuZ2UgZW1wdGllZCBlbmRlZCBpbnB1dCBpbnZhbGlkIGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbG9hZCBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBtZXNzYWdlIG1vdXNlZG93biBtb3VzZWVudGVyIG1vdXNlbGVhdmUgbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwIHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHJlc2V0IHNjcm9sbCBzZWVrZWQgc2Vla2luZyBzZWxlY3Qgc2hvdyBzdGFsbGVkIHN1Ym1pdCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmcgbW96ZnVsbHNjcmVlbmNoYW5nZSBtb3pmdWxsc2NyZWVuZXJyb3IgbW96cG9pbnRlcmxvY2tjaGFuZ2UgbW96cG9pbnRlcmxvY2tlcnJvciBlcnJvciB3ZWJnbGNvbnRleHRyZXN0b3JlZCB3ZWJnbGNvbnRleHRsb3N0IHdlYmdsY29udGV4dGNyZWF0aW9uZXJyb3InXG4gICAgLnNwbGl0KCcgJyk7XG5mdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChfZ2xvYmFsKSB7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c1dlYlNvY2tldCA9IHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnO1xuICAgIGlmIChjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcigpKSB7XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IHdlIGNhbiBwYXRjaCB0aGUgZGVzY3JpcHRvcjogIENocm9tZSAmIEZpcmVmb3hcbiAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBldmVudE5hbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsIG51bGwpO1xuICAgICAgICBpZiAodHlwZW9mIElEQkluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSURCSW5kZXgucHJvdG90eXBlLCBudWxsKTtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKElEQlJlcXVlc3QucHJvdG90eXBlLCBudWxsKTtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKElEQk9wZW5EQlJlcXVlc3QucHJvdG90eXBlLCBudWxsKTtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKElEQkRhdGFiYXNlLnByb3RvdHlwZSwgbnVsbCk7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhJREJUcmFuc2FjdGlvbi5wcm90b3R5cGUsIG51bGwpO1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSURCQ3Vyc29yLnByb3RvdHlwZSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1cHBvcnRzV2ViU29ja2V0KSB7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhXZWJTb2NrZXQucHJvdG90eXBlLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gU2FmYXJpLCBBbmRyb2lkIGJyb3dzZXJzIChKZWxseSBCZWFuKVxuICAgICAgICBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cygpO1xuICAgICAgICBwYXRjaENsYXNzKCdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIGFwcGx5KF9nbG9iYWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IoKSB7XG4gICAgaWYgKGlzQnJvd3NlciAmJiAhT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJykgJiZcbiAgICAgICAgdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFdlYktpdCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM0MzY0XG4gICAgICAgIC8vIElETCBpbnRlcmZhY2UgYXR0cmlidXRlcyBhcmUgbm90IGNvbmZpZ3VyYWJsZVxuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJyk7XG4gICAgICAgIGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSwgJ29ucmVhZHlzdGF0ZWNoYW5nZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgcmVzdWx0ID0gISFyZXEub25yZWFkeXN0YXRlY2hhbmdlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB7fSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIHVuYm91bmRLZXkgPSB6b25lU3ltYm9sKCd1bmJvdW5kJyk7XG4vLyBXaGVuZXZlciBhbnkgZXZlbnRMaXN0ZW5lciBmaXJlcywgd2UgY2hlY2sgdGhlIGV2ZW50TGlzdGVuZXIgdGFyZ2V0IGFuZCBhbGwgcGFyZW50c1xuLy8gZm9yIGBvbndoYXRldmVyYCBwcm9wZXJ0aWVzIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB6b25lLWJvdW5kIGZ1bmN0aW9uc1xuLy8gLSBDaHJvbWUgKGZvciBub3cpXG5mdW5jdGlvbiBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cygpIHtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gZXZlbnROYW1lc1tpXTtcbiAgICAgICAgdmFyIG9ucHJvcGVydHkgPSAnb24nICsgcHJvcGVydHk7XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcihwcm9wZXJ0eSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZWx0ID0gZXZlbnQudGFyZ2V0LCBib3VuZCwgc291cmNlO1xuICAgICAgICAgICAgaWYgKGVsdCkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVsdC5jb25zdHJ1Y3RvclsnbmFtZSddICsgJy4nICsgb25wcm9wZXJ0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9ICd1bmtub3duLicgKyBvbnByb3BlcnR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGVsdCkge1xuICAgICAgICAgICAgICAgIGlmIChlbHRbb25wcm9wZXJ0eV0gJiYgIWVsdFtvbnByb3BlcnR5XVt1bmJvdW5kS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBib3VuZCA9IFpvbmUuY3VycmVudC53cmFwKGVsdFtvbnByb3BlcnR5XSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgYm91bmRbdW5ib3VuZEtleV0gPSBlbHRbb25wcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgIGVsdFtvbnByb3BlcnR5XSA9IGJvdW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHQgPSBlbHQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX2xvb3BfMShpKTtcbiAgICB9XG4gICAgXG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyRWxlbWVudFBhdGNoKF9nbG9iYWwpIHtcbiAgICBpZiAoIWlzQnJvd3NlciB8fCAhKCdyZWdpc3RlckVsZW1lbnQnIGluIF9nbG9iYWwuZG9jdW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIF9yZWdpc3RlckVsZW1lbnQgPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQ7XG4gICAgdmFyIGNhbGxiYWNrcyA9IFsnY3JlYXRlZENhbGxiYWNrJywgJ2F0dGFjaGVkQ2FsbGJhY2snLCAnZGV0YWNoZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXTtcbiAgICBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSwgb3B0cykge1xuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9ICdEb2N1bWVudC5yZWdpc3RlckVsZW1lbnQ6OicgKyBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcHRzLnByb3RvdHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gWm9uZS5jdXJyZW50LndyYXAoZGVzY3JpcHRvci52YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWRlZmluZVByb3BlcnR5KG9wdHMucHJvdG90eXBlLCBjYWxsYmFjaywgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnByb3RvdHlwZVtjYWxsYmFja10gPSBab25lLmN1cnJlbnQud3JhcChvcHRzLnByb3RvdHlwZVtjYWxsYmFja10sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSA9IFpvbmUuY3VycmVudC53cmFwKG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3JlZ2lzdGVyRWxlbWVudC5hcHBseShkb2N1bWVudCwgW25hbWUsIG9wdHNdKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgc2V0ID0gJ3NldCc7XG52YXIgY2xlYXIgPSAnY2xlYXInO1xudmFyIGJsb2NraW5nTWV0aG9kcyA9IFsnYWxlcnQnLCAncHJvbXB0JywgJ2NvbmZpcm0nXTtcbnZhciBfZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbDtcbnBhdGNoVGltZXIoX2dsb2JhbCwgc2V0LCBjbGVhciwgJ1RpbWVvdXQnKTtcbnBhdGNoVGltZXIoX2dsb2JhbCwgc2V0LCBjbGVhciwgJ0ludGVydmFsJyk7XG5wYXRjaFRpbWVyKF9nbG9iYWwsIHNldCwgY2xlYXIsICdJbW1lZGlhdGUnKTtcbnBhdGNoVGltZXIoX2dsb2JhbCwgJ3JlcXVlc3QnLCAnY2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG5wYXRjaFRpbWVyKF9nbG9iYWwsICdtb3pSZXF1ZXN0JywgJ21vekNhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xucGF0Y2hUaW1lcihfZ2xvYmFsLCAnd2Via2l0UmVxdWVzdCcsICd3ZWJraXRDYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbmZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tpbmdNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5hbWUgPSBibG9ja2luZ01ldGhvZHNbaV07XG4gICAgcGF0Y2hNZXRob2QoX2dsb2JhbCwgbmFtZSwgZnVuY3Rpb24gKGRlbGVnYXRlLCBzeW1ib2wsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gWm9uZS5jdXJyZW50LnJ1bihkZWxlZ2F0ZSwgX2dsb2JhbCwgYXJncywgbmFtZSk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5ldmVudFRhcmdldFBhdGNoKF9nbG9iYWwpO1xucHJvcGVydHlEZXNjcmlwdG9yUGF0Y2goX2dsb2JhbCk7XG5wYXRjaENsYXNzKCdNdXRhdGlvbk9ic2VydmVyJyk7XG5wYXRjaENsYXNzKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJyk7XG5wYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG5wcm9wZXJ0eVBhdGNoKCk7XG5yZWdpc3RlckVsZW1lbnRQYXRjaChfZ2xvYmFsKTtcbi8vIFRyZWF0IFhNTEhUVFBSZXF1ZXN0IGFzIGEgbWFjcm90YXNrLlxucGF0Y2hYSFIoX2dsb2JhbCk7XG52YXIgWEhSX1RBU0sgPSB6b25lU3ltYm9sKCd4aHJUYXNrJyk7XG52YXIgWEhSX1NZTkMgPSB6b25lU3ltYm9sKCd4aHJTeW5jJyk7XG5mdW5jdGlvbiBwYXRjaFhIUih3aW5kb3cpIHtcbiAgICBmdW5jdGlvbiBmaW5kUGVuZGluZ1Rhc2sodGFyZ2V0KSB7XG4gICAgICAgIHZhciBwZW5kaW5nVGFzayA9IHRhcmdldFtYSFJfVEFTS107XG4gICAgICAgIHJldHVybiBwZW5kaW5nVGFzaztcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgIGRhdGEudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS50YXJnZXQucmVhZHlTdGF0ZSA9PT0gZGF0YS50YXJnZXQuRE9ORSkge1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suaW52b2tlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHN0b3JlZFRhc2sgPSBkYXRhLnRhcmdldFtYSFJfVEFTS107XG4gICAgICAgIGlmICghc3RvcmVkVGFzaykge1xuICAgICAgICAgICAgZGF0YS50YXJnZXRbWEhSX1RBU0tdID0gdGFzaztcbiAgICAgICAgfVxuICAgICAgICBzZW5kTmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2Vob2xkZXJDYWxsYmFjaygpIHsgfVxuICAgIGZ1bmN0aW9uIGNsZWFyVGFzayh0YXNrKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAvLyBOb3RlIC0gaWRlYWxseSwgd2Ugd291bGQgY2FsbCBkYXRhLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyIGhlcmUsIGJ1dCBpdCdzIHRvbyBsYXRlXG4gICAgICAgIC8vIHRvIHByZXZlbnQgaXQgZnJvbSBmaXJpbmcuIFNvIGluc3RlYWQsIHdlIHN0b3JlIGluZm8gZm9yIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgZGF0YS5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgIH1cbiAgICB2YXIgb3Blbk5hdGl2ZSA9IHBhdGNoTWV0aG9kKHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvcGVuJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgc2VsZltYSFJfU1lOQ10gPSBhcmdzWzJdID09IGZhbHNlO1xuICAgICAgICByZXR1cm4gb3Blbk5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9OyB9KTtcbiAgICB2YXIgc2VuZE5hdGl2ZSA9IHBhdGNoTWV0aG9kKHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdzZW5kJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgIGlmIChzZWxmW1hIUl9TWU5DXSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIFhIUiBpcyBzeW5jIHRoZXJlIGlzIG5vIHRhc2sgdG8gc2NoZWR1bGUsIGp1c3QgZXhlY3V0ZSB0aGUgY29kZS5cbiAgICAgICAgICAgIHJldHVybiBzZW5kTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHRhcmdldDogc2VsZiwgaXNQZXJpb2RpYzogZmFsc2UsIGRlbGF5OiBudWxsLCBhcmdzOiBhcmdzLCBhYm9ydGVkOiBmYWxzZSB9O1xuICAgICAgICAgICAgcmV0dXJuIHpvbmUuc2NoZWR1bGVNYWNyb1Rhc2soJ1hNTEh0dHBSZXF1ZXN0LnNlbmQnLCBwbGFjZWhvbGRlckNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZVRhc2ssIGNsZWFyVGFzayk7XG4gICAgICAgIH1cbiAgICB9OyB9KTtcbiAgICB2YXIgYWJvcnROYXRpdmUgPSBwYXRjaE1ldGhvZCh3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLCAnYWJvcnQnLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgIHZhciB0YXNrID0gZmluZFBlbmRpbmdUYXNrKHNlbGYpO1xuICAgICAgICBpZiAodGFzayAmJiB0eXBlb2YgdGFzay50eXBlID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgIGlmICh0YXNrLmNhbmNlbEZuID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrLnpvbmUuY2FuY2VsVGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB0cnlpbmcgdG8gYWJvcnQgYW4gWEhSIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gc2VudCwgc28gdGhlcmUgaXMgbm8gdGFza1xuICAgICAgICAvLyB0byBjYW5jZWwuIERvIG5vdGhpbmcuXG4gICAgfTsgfSk7XG59XG4vLy8gR0VPX0xPQ0FUSU9OXG5pZiAoX2dsb2JhbFsnbmF2aWdhdG9yJ10gJiYgX2dsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24pIHtcbiAgICBwYXRjaFByb3RvdHlwZShfZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbiwgWydnZXRDdXJyZW50UG9zaXRpb24nLCAnd2F0Y2hQb3NpdGlvbiddKTtcbn1cblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi96b25lLmpzL2Rpc3Qvem9uZS5qc1xuLy8gbW9kdWxlIGlkID0gMzgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKEMpIE1pY3Jvc29mdC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbnZhciBSZWZsZWN0O1xyXG4oZnVuY3Rpb24gKFJlZmxlY3QpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcbiAgICAvLyBmZWF0dXJlIHRlc3QgZm9yIE9iamVjdC5jcmVhdGUgc3VwcG9ydFxyXG4gICAgdmFyIHN1cHBvcnRzQ3JlYXRlID0gdHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIC8vIGZlYXR1cmUgdGVzdCBmb3IgX19wcm90b19fIHN1cHBvcnRcclxuICAgIHZhciBzdXBwb3J0c1Byb3RvID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VudGluZWwgPSB7fTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgfVxyXG4gICAgICAgIF9fLnByb3RvdHlwZSA9IHNlbnRpbmVsO1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBfXygpO1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5fX3Byb3RvX18gPT09IHNlbnRpbmVsO1xyXG4gICAgfSkoKTtcclxuICAgIC8vIGNyZWF0ZSBhbiBvYmplY3QgaW4gZGljdGlvbmFyeSBtb2RlIChhLmsuYS4gXCJzbG93XCIgbW9kZSBpbiB2OClcclxuICAgIHZhciBjcmVhdGVEaWN0aW9uYXJ5ID0gc3VwcG9ydHNDcmVhdGUgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeShPYmplY3QuY3JlYXRlKG51bGwpKTsgfSA6XHJcbiAgICAgICAgc3VwcG9ydHNQcm90byA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KHsgX19wcm90b19fOiBudWxsIH0pOyB9IDpcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoe30pOyB9O1xyXG4gICAgdmFyIEhhc2hNYXA7XHJcbiAgICAoZnVuY3Rpb24gKEhhc2hNYXApIHtcclxuICAgICAgICB2YXIgZG93bkxldmVsID0gIXN1cHBvcnRzQ3JlYXRlICYmICFzdXBwb3J0c1Byb3RvO1xyXG4gICAgICAgIEhhc2hNYXAuaGFzID0gZG93bkxldmVsXHJcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBoYXNPd24uY2FsbChtYXAsIGtleSk7IH1cclxuICAgICAgICAgICAgOiBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGtleSBpbiBtYXA7IH07XHJcbiAgICAgICAgSGFzaE1hcC5nZXQgPSBkb3duTGV2ZWxcclxuICAgICAgICAgICAgPyBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGhhc093bi5jYWxsKG1hcCwga2V5KSA/IG1hcFtrZXldIDogdW5kZWZpbmVkOyB9XHJcbiAgICAgICAgICAgIDogZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBtYXBba2V5XTsgfTtcclxuICAgIH0pKEhhc2hNYXAgfHwgKEhhc2hNYXAgPSB7fSkpO1xyXG4gICAgLy8gTG9hZCBnbG9iYWwgb3Igc2hpbSB2ZXJzaW9ucyBvZiBNYXAsIFNldCwgYW5kIFdlYWtNYXBcclxuICAgIHZhciBmdW5jdGlvblByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbik7XHJcbiAgICB2YXIgX01hcCA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IE1hcCA6IENyZWF0ZU1hcFBvbHlmaWxsKCk7XHJcbiAgICB2YXIgX1NldCA9IHR5cGVvZiBTZXQgPT09IFwiZnVuY3Rpb25cIiA/IFNldCA6IENyZWF0ZVNldFBvbHlmaWxsKCk7XHJcbiAgICB2YXIgX1dlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gXCJmdW5jdGlvblwiID8gV2Vha01hcCA6IENyZWF0ZVdlYWtNYXBQb2x5ZmlsbCgpO1xyXG4gICAgLy8gW1tNZXRhZGF0YV1dIGludGVybmFsIHNsb3RcclxuICAgIHZhciBNZXRhZGF0YSA9IG5ldyBfV2Vha01hcCgpO1xyXG4gICAgLyoqXHJcbiAgICAgICogQXBwbGllcyBhIHNldCBvZiBkZWNvcmF0b3JzIHRvIGEgcHJvcGVydHkgb2YgYSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSBkZWNvcmF0b3JzIEFuIGFycmF5IG9mIGRlY29yYXRvcnMuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSB0byBkZWNvcmF0ZS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0RGVzY3JpcHRvciAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGZvciB0aGUgdGFyZ2V0IGtleVxyXG4gICAgICAqIEByZW1hcmtzIERlY29yYXRvcnMgYXJlIGFwcGxpZWQgaW4gcmV2ZXJzZSBvcmRlci5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIEV4YW1wbGUgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIsXHJcbiAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcclxuICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpKSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcclxuICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcclxuICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKSkpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBkZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIHRhcmdldEtleSwgdGFyZ2V0RGVzY3JpcHRvcikge1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0RGVzY3JpcHRvcikpIHtcclxuICAgICAgICAgICAgaWYgKCFJc0FycmF5KGRlY29yYXRvcnMpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldERlc2NyaXB0b3IpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZVByb3BlcnR5V2l0aERlc2NyaXB0b3IoZGVjb3JhdG9ycywgdGFyZ2V0LCB0YXJnZXRLZXksIHRhcmdldERlc2NyaXB0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSkge1xyXG4gICAgICAgICAgICBpZiAoIUlzQXJyYXkoZGVjb3JhdG9ycykpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVQcm9wZXJ0eVdpdGhvdXREZXNjcmlwdG9yKGRlY29yYXRvcnMsIHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKHRhcmdldCkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5kZWNvcmF0ZSA9IGRlY29yYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgICogQSBkZWZhdWx0IG1ldGFkYXRhIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgY2FuIGJlIHVzZWQgb24gYSBjbGFzcywgY2xhc3MgbWVtYmVyLCBvciBwYXJhbWV0ZXIuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IFRoZSBrZXkgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFWYWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cclxuICAgICAgKiBAcmV0dXJucyBBIGRlY29yYXRvciBmdW5jdGlvbi5cclxuICAgICAgKiBAcmVtYXJrc1xyXG4gICAgICAqIElmIGBtZXRhZGF0YUtleWAgaXMgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGUgdGFyZ2V0IGFuZCB0YXJnZXQga2V5LCB0aGVcclxuICAgICAgKiBtZXRhZGF0YVZhbHVlIGZvciB0aGF0IGtleSB3aWxsIGJlIG92ZXJ3cml0dGVuLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IsIFR5cGVTY3JpcHQgb25seSlcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSwgVHlwZVNjcmlwdCBvbmx5KVxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgICAgICBwcm9wZXJ0eTtcclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QoKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgICAgICBtZXRob2QoKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgICAgICAgICBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IodGFyZ2V0KSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIC8qdGFyZ2V0S2V5Ki8gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogRGVmaW5lIGEgdW5pcXVlIG1ldGFkYXRhIGVudHJ5IG9uIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIEEgdmFsdWUgdGhhdCBjb250YWlucyBhdHRhY2hlZCBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRvIGRlZmluZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gZGVjb3JhdG9yIGZhY3RvcnkgYXMgbWV0YWRhdGEtcHJvZHVjaW5nIGFubm90YXRpb24uXHJcbiAgICAgICogICAgIGZ1bmN0aW9uIE15QW5ub3RhdGlvbihvcHRpb25zKTogRGVjb3JhdG9yIHtcclxuICAgICAgKiAgICAgICAgIHJldHVybiAodGFyZ2V0LCBrZXk/KSA9PiBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgdGFyZ2V0LCBrZXkpO1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSlcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhID0gZGVmaW5lTWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4gaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluOyBvdGhlcndpc2UsIGBmYWxzZWAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5oYXNNZXRhZGF0YSA9IGhhc01ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IG9iamVjdCBoYXMgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEga2V5IHdhcyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0OyBvdGhlcndpc2UsIGBmYWxzZWAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBoYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5oYXNPd25NZXRhZGF0YSA9IGhhc093bk1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5nZXRNZXRhZGF0YSA9IGdldE1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3QuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldEtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKVxyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEgPSBnZXRPd25NZXRhZGF0YTtcclxuICAgIC8qKlxyXG4gICAgICAqIEdldHMgdGhlIG1ldGFkYXRhIGtleXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldEtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIG1ldGFkYXRhIGtleXMuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKVxyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5TWV0YWRhdGFLZXlzKHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzID0gZ2V0TWV0YWRhdGFLZXlzO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgdW5pcXVlIG1ldGFkYXRhIGtleXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSlcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyA9IGdldE93bk1ldGFkYXRhS2V5cztcclxuICAgIC8qKlxyXG4gICAgICAqIERlbGV0ZXMgdGhlIG1ldGFkYXRhIGVudHJ5IGZyb20gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQga2V5LlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEgZW50cnkgd2FzIGZvdW5kIGFuZCBkZWxldGVkOyBvdGhlcndpc2UsIGZhbHNlLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL1JlZmxlY3REZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWMvbWV0YWRhdGEubWQjZGVsZXRlbWV0YWRhdGEtbWV0YWRhdGFrZXktcC1cclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpXHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgdGFyZ2V0S2V5LCAvKmNyZWF0ZSovIGZhbHNlKTtcclxuICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFtZXRhZGF0YU1hcC5kZWxldGUobWV0YWRhdGFLZXkpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhTWFwLnNpemUgPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQodGFyZ2V0KTtcclxuICAgICAgICB0YXJnZXRNZXRhZGF0YS5kZWxldGUodGFyZ2V0S2V5KTtcclxuICAgICAgICBpZiAodGFyZ2V0TWV0YWRhdGEuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIE1ldGFkYXRhLmRlbGV0ZSh0YXJnZXQpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5kZWxldGVNZXRhZGF0YSA9IGRlbGV0ZU1ldGFkYXRhO1xyXG4gICAgZnVuY3Rpb24gRGVjb3JhdGVDb25zdHJ1Y3RvcihkZWNvcmF0b3JzLCB0YXJnZXQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXTtcclxuICAgICAgICAgICAgdmFyIGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKGRlY29yYXRlZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghSXNDb25zdHJ1Y3RvcihkZWNvcmF0ZWQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGRlY29yYXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gRGVjb3JhdGVQcm9wZXJ0eVdpdGhEZXNjcmlwdG9yKGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXTtcclxuICAgICAgICAgICAgdmFyIGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcclxuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChkZWNvcmF0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KGRlY29yYXRlZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGRlY29yYXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIERlY29yYXRlUHJvcGVydHlXaXRob3V0RGVzY3JpcHRvcihkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XHJcbiAgICAgICAgICAgIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vUmVmbGVjdERlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlYy9tZXRhZGF0YS5tZCNnZXRvcmNyZWF0ZW1ldGFkYXRhbWFwLS1vLXAtY3JlYXRlLVxyXG4gICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHRhcmdldEtleSwgY3JlYXRlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldE1ldGFkYXRhID0gTWV0YWRhdGEuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRNZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIWNyZWF0ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhID0gbmV3IF9NYXAoKTtcclxuICAgICAgICAgICAgTWV0YWRhdGEuc2V0KHRhcmdldCwgdGFyZ2V0TWV0YWRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIga2V5TWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YS5nZXQodGFyZ2V0S2V5KTtcclxuICAgICAgICBpZiAoIWtleU1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICghY3JlYXRlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAga2V5TWV0YWRhdGEgPSBuZXcgX01hcCgpO1xyXG4gICAgICAgICAgICB0YXJnZXRNZXRhZGF0YS5zZXQodGFyZ2V0S2V5LCBrZXlNZXRhZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXlNZXRhZGF0YTtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9SZWZsZWN0RGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjL21ldGFkYXRhLm1kI29yZGluYXJ5aGFzbWV0YWRhdGEtLW1ldGFkYXRha2V5LW8tcC1cclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcclxuICAgICAgICB2YXIgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XHJcbiAgICAgICAgaWYgKGhhc093bilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IEdldFByb3RvdHlwZU9mKE8pO1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vUmVmbGVjdERlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlYy9tZXRhZGF0YS5tZCNvcmRpbmFyeWhhc293bm1ldGFkYXRhLS1tZXRhZGF0YWtleS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKmNyZWF0ZSovIGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXAgIT09IHVuZGVmaW5lZCAmJiBCb29sZWFuKG1ldGFkYXRhTWFwLmhhcyhNZXRhZGF0YUtleSkpO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL1JlZmxlY3REZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWMvbWV0YWRhdGEubWQjb3JkaW5hcnlnZXRtZXRhZGF0YS0tbWV0YWRhdGFrZXktby1wLVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xyXG4gICAgICAgIHZhciBoYXNPd24gPSBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcclxuICAgICAgICBpZiAoaGFzT3duKVxyXG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IEdldFByb3RvdHlwZU9mKE8pO1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL1JlZmxlY3REZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWMvbWV0YWRhdGEubWQjb3JkaW5hcnlnZXRvd25tZXRhZGF0YS0tbWV0YWRhdGFrZXktby1wLVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xyXG4gICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBtZXRhZGF0YU1hcC5nZXQoTWV0YWRhdGFLZXkpO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL1JlZmxlY3REZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWMvbWV0YWRhdGEubWQjb3JkaW5hcnlkZWZpbmVvd25tZXRhZGF0YS0tbWV0YWRhdGFrZXktbWV0YWRhdGF2YWx1ZS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKmNyZWF0ZSovIHRydWUpO1xyXG4gICAgICAgIG1ldGFkYXRhTWFwLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vUmVmbGVjdERlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlYy9tZXRhZGF0YS5tZCNvcmRpbmFyeW1ldGFkYXRha2V5cy0tby1wLVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlNZXRhZGF0YUtleXMoTywgUCkge1xyXG4gICAgICAgIHZhciBvd25LZXlzID0gT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCk7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IEdldFByb3RvdHlwZU9mKE8pO1xyXG4gICAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBvd25LZXlzO1xyXG4gICAgICAgIHZhciBwYXJlbnRLZXlzID0gT3JkaW5hcnlNZXRhZGF0YUtleXMocGFyZW50LCBQKTtcclxuICAgICAgICBpZiAocGFyZW50S2V5cy5sZW5ndGggPD0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG93bktleXM7XHJcbiAgICAgICAgaWYgKG93bktleXMubGVuZ3RoIDw9IDApXHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRLZXlzO1xyXG4gICAgICAgIHZhciBrZXlzID0gbmV3IF9TZXQoKTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgb3duS2V5cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG93bktleXNbX2ldO1xyXG4gICAgICAgICAgICBrZXlzLmFkZChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBfYSA9IDA7IF9hIDwgcGFyZW50S2V5cy5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IHBhcmVudEtleXNbX2FdO1xyXG4gICAgICAgICAgICBrZXlzLmFkZChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ2V0S2V5cyhrZXlzKTtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9SZWZsZWN0RGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjL21ldGFkYXRhLm1kI29yZGluYXJ5b3dubWV0YWRhdGFrZXlzLS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCB0YXJnZXRLZXksIC8qY3JlYXRlKi8gZmFsc2UpO1xyXG4gICAgICAgIHZhciBrZXlzID0gW107XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhTWFwKVxyXG4gICAgICAgICAgICBmb3JFYWNoKG1ldGFkYXRhTWFwLCBmdW5jdGlvbiAoXywga2V5KSB7IHJldHVybiBrZXlzLnB1c2goa2V5KTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy11bmRlZmluZWQtdHlwZVxyXG4gICAgZnVuY3Rpb24gSXNVbmRlZmluZWQoeCkge1xyXG4gICAgICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxyXG4gICAgZnVuY3Rpb24gSXNBcnJheSh4KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkgPyBBcnJheS5pc0FycmF5KHgpIDogeCBpbnN0YW5jZW9mIEFycmF5IHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC10eXBlXHJcbiAgICBmdW5jdGlvbiBJc09iamVjdCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiID8geCAhPT0gbnVsbCA6IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjb25zdHJ1Y3RvclxyXG4gICAgZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcih4KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy1zeW1ib2wtdHlwZVxyXG4gICAgZnVuY3Rpb24gSXNTeW1ib2woeCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIjtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3Byb3BlcnR5a2V5XHJcbiAgICBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIElzU3ltYm9sKHZhbHVlKSA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIEdldFByb3RvdHlwZU9mKE8pIHtcclxuICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBPICE9PSBcImZ1bmN0aW9uXCIgfHwgTyA9PT0gZnVuY3Rpb25Qcm90b3R5cGUpXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICAvLyBUeXBlU2NyaXB0IGRvZXNuJ3Qgc2V0IF9fcHJvdG9fXyBpbiBFUzUsIGFzIGl0J3Mgbm9uLXN0YW5kYXJkLlxyXG4gICAgICAgIC8vIFRyeSB0byBkZXRlcm1pbmUgdGhlIHN1cGVyY2xhc3MgRXhhbXBsZW9uc3RydWN0b3IuIENvbXBhdGlibGUgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgICAgLy8gbXVzdCBlaXRoZXIgc2V0IF9fcHJvdG9fXyBvbiBhIHN1YmNsYXNzIEV4YW1wbGVvbnN0cnVjdG9yIHRvIHRoZSBzdXBlcmNsYXNzIEV4YW1wbGVvbnN0cnVjdG9yLFxyXG4gICAgICAgIC8vIG9yIGVuc3VyZSBlYWNoIGNsYXNzIGhhcyBhIHZhbGlkIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgb24gaXRzIHByb3RvdHlwZSB0aGF0XHJcbiAgICAgICAgLy8gcG9pbnRzIGJhY2sgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICAgIC8vIElmIHRoaXMgaXMgbm90IHRoZSBzYW1lIGFzIEZ1bmN0aW9uLltbUHJvdG90eXBlXV0sIHRoZW4gdGhpcyBpcyBkZWZpbmF0ZWx5IGluaGVyaXRlZC5cclxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBjYXNlIHdoZW4gaW4gRVM2IG9yIHdoZW4gdXNpbmcgX19wcm90b19fIGluIGEgY29tcGF0aWJsZSBicm93c2VyLlxyXG4gICAgICAgIGlmIChwcm90byAhPT0gZnVuY3Rpb25Qcm90b3R5cGUpXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICAvLyBJZiB0aGUgc3VwZXIgcHJvdG90eXBlIGlzIE9iamVjdC5wcm90b3R5cGUsIG51bGwsIG9yIHVuZGVmaW5lZCwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cclxuICAgICAgICB2YXIgcHJvdG90eXBlID0gTy5wcm90b3R5cGU7XHJcbiAgICAgICAgdmFyIHByb3RvdHlwZVByb3RvID0gcHJvdG90eXBlICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xyXG4gICAgICAgIGlmIChwcm90b3R5cGVQcm90byA9PSBudWxsIHx8IHByb3RvdHlwZVByb3RvID09PSBPYmplY3QucHJvdG90eXBlKVxyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG87XHJcbiAgICAgICAgLy8gSWYgdGhlIGNvbnN0cnVjdG9yIHdhcyBub3QgYSBmdW5jdGlvbiwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cclxuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBwcm90b3R5cGVQcm90by5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIHNvbWUga2luZCBvZiBzZWxmLXJlZmVyZW5jZSwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cclxuICAgICAgICBpZiAoY29uc3RydWN0b3IgPT09IE8pXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICAvLyB3ZSBoYXZlIGEgcHJldHR5IGdvb2QgZ3Vlc3MgYXQgdGhlIGhlcml0YWdlLlxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIEl0ZXJhdG9yU3RlcChpdGVyYXRvcikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gdW5kZWZpbmVkIDogcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gSXRlcmF0b3JDbG9zZShpdGVyYXRvcikge1xyXG4gICAgICAgIHZhciBmID0gaXRlcmF0b3JbXCJyZXR1cm5cIl07XHJcbiAgICAgICAgaWYgKGYpXHJcbiAgICAgICAgICAgIGYuY2FsbChpdGVyYXRvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JFYWNoKHNvdXJjZSwgY2FsbGJhY2ssIHRoaXNBcmcpIHtcclxuICAgICAgICB2YXIgZW50cmllcyA9IHNvdXJjZS5lbnRyaWVzO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZW50cmllcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGVudHJpZXMuY2FsbChzb3VyY2UpO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlc3VsdCA9IEl0ZXJhdG9yU3RlcChpdGVyYXRvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSByZXN1bHQudmFsdWUsIGtleSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIGtleSwgc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAgSXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JFYWNoXzEgPSBzb3VyY2UuZm9yRWFjaDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JFYWNoXzEgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaF8xLmNhbGwoc291cmNlLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRLZXlzKHNvdXJjZSkge1xyXG4gICAgICAgIHZhciBrZXlzID0gW107XHJcbiAgICAgICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uIChfLCBrZXkpIHsga2V5cy5wdXNoKGtleSk7IH0pO1xyXG4gICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgfVxyXG4gICAgLy8gbmFpdmUgTWFwSXRlcmF0b3Igc2hpbVxyXG4gICAgZnVuY3Rpb24gQ3JlYXRlTWFwSXRlcmF0b3Ioa2V5cywgdmFsdWVzLCBraW5kKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGtleXMgfHwgdmFsdWVzKSAmJiBpbmRleCA8IChrZXlzIHx8IHZhbHVlcykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5XCI6IHJldHVybiB7IHZhbHVlOiBrZXlzW2N1cnJlbnRdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmFsdWVcIjogcmV0dXJuIHsgdmFsdWU6IHZhbHVlc1tjdXJyZW50XSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImtleSt2YWx1ZVwiOiByZXR1cm4geyB2YWx1ZTogW2tleXNbY3VycmVudF0sIHZhbHVlc1tjdXJyZW50XV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAga2V5cyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ0aHJvd1wiOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlzIHx8IHZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicmV0dXJuXCI6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleXMgfHwgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5cyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBuYWl2ZSBNYXAgc2hpbVxyXG4gICAgZnVuY3Rpb24gQ3JlYXRlTWFwUG9seWZpbGwoKSB7XHJcbiAgICAgICAgdmFyIGNhY2hlU2VudGluZWwgPSB7fTtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gTWFwKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2tleXMubGVuZ3RoOyB9LFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSkgPj0gMDsgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPj0gMCA/IHRoaXMuX3ZhbHVlc1tpbmRleF0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuX2tleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBpbmRleCArIDE7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5c1tpIC0gMV0gPSB0aGlzLl9rZXlzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNbaSAtIDFdID0gdGhpcy5fdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENyZWF0ZU1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIC8qdmFsdWVzKi8gdW5kZWZpbmVkLCBcImtleVwiKTsgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBDcmVhdGVNYXBJdGVyYXRvcigvKmtleXMqLyB1bmRlZmluZWQsIHRoaXMuX3ZhbHVlcywgXCJ2YWx1ZVwiKTsgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gQ3JlYXRlTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBcImtleSt2YWx1ZVwiKTsgfTtcclxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5fZmluZCA9IGZ1bmN0aW9uIChrZXksIGluc2VydCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5ID09PSBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDAgJiYgaW5zZXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLl9rZXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlS2V5ID0ga2V5LCB0aGlzLl9jYWNoZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBNYXA7XHJcbiAgICAgICAgfSkoKTtcclxuICAgIH1cclxuICAgIC8vIG5haXZlIFNldCBzaGltXHJcbiAgICBmdW5jdGlvbiBDcmVhdGVTZXRQb2x5ZmlsbCgpIHtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gU2V0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwID0gbmV3IF9NYXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0LnByb3RvdHlwZSwgXCJzaXplXCIsIHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnNpemU7IH0sXHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLmhhcyh2YWx1ZSk7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuc2V0KHZhbHVlLCB2YWx1ZSksIHRoaXM7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuZGVsZXRlKHZhbHVlKTsgfTtcclxuICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fbWFwLmNsZWFyKCk7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5rZXlzKCk7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnZhbHVlcygpOyB9O1xyXG4gICAgICAgICAgICBTZXQucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAuZW50cmllcygpOyB9O1xyXG4gICAgICAgICAgICByZXR1cm4gU2V0O1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICB9XHJcbiAgICAvLyBuYWl2ZSBXZWFrTWFwIHNoaW1cclxuICAgIGZ1bmN0aW9uIENyZWF0ZVdlYWtNYXBQb2x5ZmlsbCgpIHtcclxuICAgICAgICB2YXIgVVVJRF9TSVpFID0gMTY7XHJcbiAgICAgICAgdmFyIGtleXMgPSBjcmVhdGVEaWN0aW9uYXJ5KCk7XHJcbiAgICAgICAgdmFyIHJvb3RLZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gV2Vha01hcCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuaGFzKHRhYmxlLCB0aGlzLl9rZXkpIDogZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuZ2V0KHRhYmxlLCB0aGlzLl9rZXkpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGFibGVbdGhpcy5fa2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IGRlbGV0ZSB0YWJsZVt0aGlzLl9rZXldIDogZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTk9URTogbm90IGEgcmVhbCBjbGVhciwganVzdCBtYWtlcyB0aGUgcHJldmlvdXMgZGF0YSB1bnJlYWNoYWJsZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBXZWFrTWFwO1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gRmlsbFJhbmRvbUJ5dGVzKGJ1ZmZlciwgc2l6ZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSlcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcltpXSA9IE1hdGgucmFuZG9tKCkgKiAweGZmIHwgMDtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gR2VuUmFuZG9tQnl0ZXMoc2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc0NyeXB0byAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSksIHNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IEFycmF5KHNpemUpLCBzaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlVVVJRCgpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBHZW5SYW5kb21CeXRlcyhVVUlEX1NJWkUpO1xyXG4gICAgICAgICAgICAvLyBtYXJrIGFzIHJhbmRvbSAtIFJGQyA0MTIyIMKnIDQuNFxyXG4gICAgICAgICAgICBkYXRhWzZdID0gZGF0YVs2XSAmIDB4NGYgfCAweDQwO1xyXG4gICAgICAgICAgICBkYXRhWzhdID0gZGF0YVs4XSAmIDB4YmYgfCAweDgwO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgVVVJRF9TSVpFOyArK29mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ5dGUgPSBkYXRhW29mZnNldF07XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID09PSA0IHx8IG9mZnNldCA9PT0gNiB8fCBvZmZzZXQgPT09IDgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiLVwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ5dGUgPCAxNilcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gYnl0ZS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVVbmlxdWVLZXkoKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXk7XHJcbiAgICAgICAgICAgIGRvXHJcbiAgICAgICAgICAgICAgICBrZXkgPSBcIkBAV2Vha01hcEBAXCIgKyBDcmVhdGVVVUlEKCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChIYXNoTWFwLmhhcyhrZXlzLCBrZXkpKTtcclxuICAgICAgICAgICAga2V5c1trZXldID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCBjcmVhdGUpIHtcclxuICAgICAgICAgICAgaWYgKCFoYXNPd24uY2FsbCh0YXJnZXQsIHJvb3RLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNyZWF0ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcm9vdEtleSwgeyB2YWx1ZTogY3JlYXRlRGljdGlvbmFyeSgpIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcm9vdEtleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXNlcyBhIGhldXJpc3RpYyB1c2VkIGJ5IHY4IGFuZCBjaGFrcmEgdG8gZm9yY2UgYW4gb2JqZWN0IGludG8gZGljdGlvbmFyeSBtb2RlLlxyXG4gICAgZnVuY3Rpb24gTWFrZURpY3Rpb25hcnkob2JqKSB7XHJcbiAgICAgICAgb2JqLl9fRElDVElPTkFSWV9NT0RFX18gPSAxO1xyXG4gICAgICAgIGRlbGV0ZSBvYmouX19fX0RJQ1RJT05BUllfTU9ERV9fO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICAvLyBwYXRjaCBnbG9iYWwgUmVmbGVjdFxyXG4gICAgKGZ1bmN0aW9uIChfX2dsb2JhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgX19nbG9iYWwuUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoX19nbG9iYWwuUmVmbGVjdCAhPT0gUmVmbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBSZWZsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKFJlZmxlY3QsIHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZ2xvYmFsLlJlZmxlY3RbcF0gPSBSZWZsZWN0W3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX19nbG9iYWwuUmVmbGVjdCA9IFJlZmxlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfSkodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6XHJcbiAgICAgICAgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6XHJcbiAgICAgICAgICAgIHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOlxyXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24oXCJyZXR1cm4gdGhpcztcIikoKSk7XHJcbn0pKFJlZmxlY3QgfHwgKFJlZmxlY3QgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZWZsZWN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWZsZWN0LW1ldGFkYXRhL1JlZmxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9