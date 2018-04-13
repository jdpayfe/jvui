(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("jvui", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["jvui"] = factory(require("vue"));
	else
		root["jvui"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_44__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(17);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(39);
var toPrimitive = __webpack_require__(19);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(42);
var defined = __webpack_require__(21);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export get */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isServer; });
/* unused harmony export camelize */
/* unused harmony export isAndroid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);



var isServer = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$isServer;

function isDef(value) {
    return value !== undefined && value !== null;
}

function isObj(x) {
    var type = typeof x === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(x);
    return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
    var keys = path.split('.');
    var result = object;

    keys.forEach(function (key) {
        result = isDef(result[key]) ? result[key] : '';
    });

    return result;
}

var camelizeRE = /-(\w)/g;
function camelize(str) {
    return str.replace(camelizeRE, function (_, c) {
        return c.toUpperCase();
    });
}

function isAndroid() {
    /* istanbul ignore next */
    return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(1);
var ctx = __webpack_require__(82);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(17);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(92)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(49)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
var global = __webpack_require__(3);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(13);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(28);
var wksExt = __webpack_require__(31);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(65);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b4d44250_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(126);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b4d44250_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_popup__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tab__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swipe_swipe__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swipe_swipe_item__ = __webpack_require__(60);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-area',

    components: {
        JvPopup: __WEBPACK_IMPORTED_MODULE_0__popup_popup__["a" /* default */],
        JvTabs: __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* default */],
        JvTab: __WEBPACK_IMPORTED_MODULE_2__tabs_tab__["a" /* default */],
        JvSwipe: __WEBPACK_IMPORTED_MODULE_3__swipe_swipe__["a" /* default */],
        JvSwipeItem: __WEBPACK_IMPORTED_MODULE_4__swipe_swipe_item__["a" /* default */]
    },
    props: {
        areaList: {
            type: Array,
            require: true
        },
        showCloseBtn: {
            type: Boolean,
            default: true
        }, // 是否显示关闭按钮
        showConfirmBtn: {
            type: Boolean,
            default: true // 是否显示确认按钮
        } },

    data: function data() {
        return {
            activeSwipeIndex: 0,
            activeTabIndex: 0,
            tabs: ['请选择'],
            selectedArea: []
        };
    },

    computed: {
        count: function count() {
            return this.areaList.length;
        }
    },

    methods: {
        getTabIndex: function getTabIndex(index, title) {
            this.activeSwipeIndex = index;
        },
        getSwipeIndex: function getSwipeIndex(index) {
            this.activeTabIndex = index;
        },
        getSelectInfo: function getSelectInfo(val, key, index, areaIndex) {
            this.selectedArea[areaIndex] = {
                name: val,
                id: key
            };
            if (this.selectedArea.length < this.count) {
                if (areaIndex < this.count - 1) {
                    this.tabs.splice(-1, 0, this.selectedArea[areaIndex].name);
                    this.activeSwipeIndex = areaIndex + 1;
                    this.activeTabIndex = areaIndex + 1;
                } else if (areaIndex === this.count - 1) {
                    this.tabs.splice(-1, 1, this.selectedArea[areaIndex].name);
                }
            } else {
                this.tabs.splice(areaIndex, 1, this.selectedArea[areaIndex].name);
                if (areaIndex < this.count - 1) {
                    this.activeSwipeIndex = areaIndex + 1;
                    this.activeTabIndex = areaIndex + 1;
                }
            }
        }
    }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_vue__ = __webpack_require__(36);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ff4edae2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popup_vue__ = __webpack_require__(111);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ff4edae2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_popup__ = __webpack_require__(78);
//
//
//
//
//
//
//
//



/* props in mixin
 * v-model 当前组件是否显示
 * lock-scroll 是否锁定背景滚动
 * overlay-class 自定义蒙层 class
 * overlay-style 自定义蒙层样式
 * get-container 指定弹出层挂载的 HTML 节点
 *
 * event
 * click-overlay 点击蒙层时触发
 * */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-popup',

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_popup__["a" /* default */]],

    props: {
        transition: String, // transition 名称 ,默认 popup-slide
        overlay: { // 是否显示背景蒙层
            type: Boolean,
            default: true
        },
        closeOnClickOverlay: { // 点击蒙层是否关闭 Popup
            type: Boolean,
            default: true
        },
        position: { // Popup 位置
            type: String,
            default: ''
        }
    },
    data: function data() {
        var transition = this.transition || (this.position === '' ? 'jv-fade' : 'popup-slide-' + this.position);
        return {
            currentValue: false,
            currentTransition: transition
        };
    }
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(38);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(40)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(85)(false);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(21);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'modal',

    props: {
        visible: Boolean,
        zIndex: Number,
        className: String,
        customStyle: Object
    },

    computed: {
        style: function style() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
                zIndex: this.zIndex
            }, this.customStyle);
        }
    }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    id: 1,
    zIndex: 2000,
    stack: [],

    plusKey: function plusKey(key) {
        return this[key]++;
    },


    get top() {
        return this.stack[this.stack.length - 1];
    }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(12);


/* harmony default export */ __webpack_exports__["a"] = ({
    debounce: function debounce(func, wait, immediate) {
        var timeout = void 0,
            args = void 0,
            context = void 0,
            timestamp = void 0,
            result = void 0;
        return function () {
            context = this;
            args = arguments;
            timestamp = new Date();
            var later = function later() {
                var last = new Date() - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    result = func.apply(context, args);
                }
            };
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            return result;
        };
    },


    /* 找到最近的触发滚动事件的元素
     * @param {Element} element
     * @param {Element} rootElement
     * @return {Element | window}
     */
    getScrollEventTarget: function getScrollEventTarget(element) {
        var rootParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

        var currentNode = element;
        // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
        while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1 && currentNode !== rootParent) {
            var overflowY = this.getComputedStyle(currentNode).overflowY;
            if (overflowY === 'scroll' || overflowY === 'auto') {
                return currentNode;
            }
            currentNode = currentNode.parentNode;
        }
        return rootParent;
    },


    // 判断元素是否被加入到页面节点内
    isAttached: function isAttached(element) {
        var currentNode = element.parentNode;
        while (currentNode) {
            if (currentNode.tagName === 'HTML') {
                return true;
            }
            if (currentNode.nodeType === 11) {
                return false;
            }
            currentNode = currentNode.parentNode;
        }
        return false;
    },


    // 获取滚动高度
    getScrollTop: function getScrollTop(element) {
        return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
    },


    // 设置滚动高度
    setScrollTop: function setScrollTop(element, value) {
        'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
    },


    // 获取元素距离顶部高度
    getElementTop: function getElementTop(element) {
        return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
    },
    getVisibleHeight: function getVisibleHeight(element) {
        return element === window ? element.innerHeight : element.getBoundingClientRect().height;
    },


    getComputedStyle: !__WEBPACK_IMPORTED_MODULE_0__index__["c" /* isServer */] && document.defaultView.getComputedStyle.bind(document.defaultView)
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(90);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(100);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(28);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(50);
var hide = __webpack_require__(7);
var has = __webpack_require__(6);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(93);
var setToStringTag = __webpack_require__(29);
var getPrototypeOf = __webpack_require__(96);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(94);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(40)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(95).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(41);
var hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export supportsPassive */
/* harmony export (immutable) */ __webpack_exports__["b"] = on;
/* harmony export (immutable) */ __webpack_exports__["a"] = off;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(12);


var supportsPassive = false;
if (!__WEBPACK_IMPORTED_MODULE_0____["c" /* isServer */]) {
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
            get: function get() {
                /* istanbul ignore next */
                supportsPassive = true;
            }
        });
        window.addEventListener('test-passive', null, opts);
    } catch (e) {}
}

function on(target, event, handler) {
    var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    !__WEBPACK_IMPORTED_MODULE_0____["c" /* isServer */] && target.addEventListener(event, handler, supportsPassive ? { capture: false, passive: passive } : false);
}

function off(target, event, handler) {
    !__WEBPACK_IMPORTED_MODULE_0____["c" /* isServer */] && target.removeEventListener(event, handler);
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__ = __webpack_require__(55);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e718781e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__ = __webpack_require__(115);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e718781e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_raf__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_event__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_node__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_scroll__ = __webpack_require__(47);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-tabs',

    components: {
        JvNode: __WEBPACK_IMPORTED_MODULE_2__utils_node__["a" /* default */]
    },

    props: {
        sticky: Boolean, // 是否使用粘性定位布局,当Tab 滚动到顶部时会自动吸顶
        active: { // 默认激活的tab
            type: [Number, String],
            default: 0
        },
        type: { // tab样式类型， 可选card
            type: String,
            default: 'line'
        },
        duration: { // 切换 tab 的动画时间
            type: Number,
            default: 0.1
        },
        swipeThreshold: { // 滚动阀值，设置 Tab 超过多少个可滚动
            type: Number,
            default: 4
        },
        swipeable: Boolean // 是否可以滑动内容切换
    },

    data: function data() {
        return {
            tabs: [],
            position: 'content-top',
            curActive: 0,
            navBarStyle: {}
        };
    },


    computed: {
        // whether the nav is scrollable
        scrollable: function scrollable() {
            return this.tabs.length > this.swipeThreshold;
        }
    },

    watch: {
        active: function active(val) {
            this.correctActive(val);
        },
        tabs: function tabs(_tabs) {
            this.correctActive(this.curActive || this.active);
            this.setNavBar();
        },
        curActive: function curActive() {
            this.scrollIntoView();
            this.setNavBar();

            // scroll to correct position
            if (this.position === 'page-top' || this.position === 'content-bottom') {
                __WEBPACK_IMPORTED_MODULE_3__utils_scroll__["a" /* default */].setScrollTop(this.scrollEl, __WEBPACK_IMPORTED_MODULE_3__utils_scroll__["a" /* default */].getElementTop(this.$el));
            }
        },
        sticky: function sticky(isSticky) {
            this.scrollHandler(isSticky);
        }
    },

    mounted: function mounted() {
        var _this = this;

        this.correctActive(this.active);
        this.setNavBar();

        this.$nextTick(function () {
            if (_this.sticky) {
                _this.scrollHandler(true);
            }
            if (_this.swipeable) {
                _this.swipeableHandler(true);
            }
            _this.scrollIntoView();
        });
    },
    beforeDestroy: function beforeDestroy() {
        /* istanbul ignore next */
        if (this.sticky) {
            this.scrollHandler(false);
        }
        /* istanbul ignore next */
        if (this.swipeable) {
            this.swipeableHandler(false);
        }
    },


    methods: {
        // whether to bind sticky listener
        scrollHandler: function scrollHandler(init) {
            this.scrollEl = this.scrollEl || __WEBPACK_IMPORTED_MODULE_3__utils_scroll__["a" /* default */].getScrollEventTarget(this.$el);
            (init ? __WEBPACK_IMPORTED_MODULE_1__utils_event__["b" /* on */] : __WEBPACK_IMPORTED_MODULE_1__utils_event__["a" /* off */])(this.scrollEl, 'scroll', this.onScroll, true);
            if (init) {
                this.onScroll();
            }
        },


        // whether to bind content swipe listener
        swipeableHandler: function swipeableHandler(init) {
            var swipeableEl = this.$refs.content;

            (init ? __WEBPACK_IMPORTED_MODULE_1__utils_event__["b" /* on */] : __WEBPACK_IMPORTED_MODULE_1__utils_event__["a" /* off */])(swipeableEl, 'touchstart', this.onTouchStart, false);
            (init ? __WEBPACK_IMPORTED_MODULE_1__utils_event__["b" /* on */] : __WEBPACK_IMPORTED_MODULE_1__utils_event__["a" /* off */])(swipeableEl, 'touchmove', this.onTouchMove, false);
            (init ? __WEBPACK_IMPORTED_MODULE_1__utils_event__["b" /* on */] : __WEBPACK_IMPORTED_MODULE_1__utils_event__["a" /* off */])(swipeableEl, 'touchend', this.onTouchEnd, false);
            (init ? __WEBPACK_IMPORTED_MODULE_1__utils_event__["b" /* on */] : __WEBPACK_IMPORTED_MODULE_1__utils_event__["a" /* off */])(swipeableEl, 'touchcancel', this.onTouchEnd, false);
        },


        // record swipe touch start position
        onTouchStart: function onTouchStart(event) {
            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;
        },


        // watch swipe touch move
        onTouchMove: function onTouchMove(event) {
            this.deltaX = event.touches[0].clientX - this.startX;
            this.direction = this.getDirection(event.touches[0]);
        },


        // watch swipe touch end
        onTouchEnd: function onTouchEnd() {
            var direction = this.direction,
                deltaX = this.deltaX,
                curActive = this.curActive;

            var minSwipeDistance = 50;

            /* istanbul ignore else */
            if (direction === 'horizontal' && Math.abs(deltaX) >= minSwipeDistance) {
                /* istanbul ignore else */
                if (deltaX > 0 && curActive !== 0) {
                    this.curActive = curActive - 1;
                } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
                    this.curActive = curActive + 1;
                }
            }
        },


        // get swipe direction
        getDirection: function getDirection(touch) {
            var distanceX = Math.abs(touch.clientX - this.startX);
            var distanceY = Math.abs(touch.clientY - this.startY);
            return distanceX > distanceY ? 'horizontal' : distanceX < distanceY ? 'vertical' : '';
        },


        // adjust tab position
        onScroll: function onScroll() {
            var scrollTop = __WEBPACK_IMPORTED_MODULE_3__utils_scroll__["a" /* default */].getScrollTop(this.scrollEl);
            var elTopToPageTop = __WEBPACK_IMPORTED_MODULE_3__utils_scroll__["a" /* default */].getElementTop(this.$el);
            var elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;
            if (scrollTop > elBottomToPageTop) {
                this.position = 'content-bottom';
            } else if (scrollTop > elTopToPageTop) {
                this.position = 'page-top';
            } else {
                this.position = 'content-top';
            }
        },


        // update nav bar style
        setNavBar: function setNavBar() {
            var _this2 = this;

            this.$nextTick(function () {
                if (!_this2.$refs.tabs) {
                    return;
                }

                var tab = _this2.$refs.tabs[_this2.curActive];
                _this2.navBarStyle = {
                    width: (tab.offsetWidth || 0) + 'px',
                    transform: 'translate(' + (tab.offsetLeft || 0) + 'px, 0)',
                    transitionDuration: _this2.duration + 's'
                };
            });
        },


        // correct the value of active
        correctActive: function correctActive(active) {
            active = +active;
            var exist = this.tabs.some(function (tab) {
                return tab.index === active;
            });
            var defaultActive = (this.tabs[0] || {}).index || 0;
            this.curActive = exist ? active : defaultActive;
        },


        // emit event when clicked
        onClick: function onClick(index) {
            var _tabs$index = this.tabs[index],
                title = _tabs$index.title,
                disabled = _tabs$index.disabled;

            if (disabled) {
                this.$emit('disabled', index, title);
            } else {
                this.$emit('click', index, title);
                this.curActive = index;
            }
        },


        // scroll active tab into view
        scrollIntoView: function scrollIntoView() {
            if (!this.scrollable || !this.$refs.tabs) {
                return;
            }

            var tab = this.$refs.tabs[this.curActive];
            var nav = this.$refs.nav;
            var scrollLeft = nav.scrollLeft,
                navWidth = nav.offsetWidth;
            var offsetLeft = tab.offsetLeft,
                tabWidth = tab.offsetWidth;


            this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2);
        },


        // animate the scrollLeft of nav
        scrollTo: function scrollTo(el, from, to) {
            var count = 0;
            var frames = Math.round(this.duration * 1000 / 16);
            var animate = function animate() {
                el.scrollLeft += (to - from) / frames;
                /* istanbul ignore next */
                if (++count < frames) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__utils_raf__["a" /* raf */])(animate);
                }
            };
            animate();
        }
    }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue__ = __webpack_require__(57);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_99c6fe42_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tab_vue__ = __webpack_require__(117);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_99c6fe42_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tab_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_find_parent__ = __webpack_require__(116);
//
//
//
//
//
//



/* slot
 * title 自定义标签
 * */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-tab',

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_find_parent__["a" /* default */]],

    props: {
        title: String, //   标题
        disabled: Boolean //    是否禁用标签
    },
    computed: {
        index: function index() {
            return this.parent.tabs.indexOf(this);
        }
    },
    created: function created() {
        this.findParent('jv-tabs');
        this.parent.tabs.push(this);
    },
    destroyed: function destroyed() {
        this.parent.tabs.splice(this.index, 1);
    }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swipe_vue__ = __webpack_require__(59);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_300c9e93_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swipe_vue__ = __webpack_require__(118);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swipe_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_300c9e93_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swipe_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-swipe',

    props: {
        autoplay: Number, // 自动轮播间隔，单位为 ms
        loop: {
            type: Boolean, // 是否开启循环播放
            default: true
        },
        initialSwipe: { // 初始位置，从 0 开始算
            type: Number,
            default: 0
        },
        showIndicators: { // 是否显示指示器
            type: Boolean,
            default: true
        },
        duration: { // 动画时长，单位为 ms
            type: Number,
            default: 500
        }
    },

    data: function data() {
        return {
            width: 0,
            offset: 0,
            startX: 0,
            startY: 0,
            active: 0,
            deltaX: 0,
            swipes: [],
            direction: '',
            currentDuration: 0
        };
    },
    created: function created() {
        this.active = this.initialSwipe;
    },
    mounted: function mounted() {
        this.initialize();
    },
    destroyed: function destroyed() {
        clearTimeout(this.timer);
    },


    watch: {
        swipes: function swipes() {
            this.initialize();
        },
        initialSwipe: function initialSwipe(val, oldVal) {
            clearTimeout(this.timer);
            this.width = this.$el.getBoundingClientRect().width;
            this.active = this.initialSwipe;
            this.currentDuration = this.duration;

            this.offset = this.count > 1 ? -this.width * (this.active + 1) : 0;
            this.swipes.forEach(function (swipe) {
                swipe.offset = 0;
            });
            this.autoPlay();
        },
        autoplay: function autoplay(_autoplay) {
            if (!_autoplay) {
                clearTimeout(this.timer);
            }
        }
    },

    computed: {
        count: function count() {
            return this.swipes.length;
        },
        trackStyle: function trackStyle() {
            return {
                paddingLeft: this.width + 'px',
                width: (this.count + 2) * this.width + 'px',
                transitionDuration: this.currentDuration + 'ms',
                transform: 'translate(' + this.offset + 'px, 0)'
            };
        },
        activeIndicator: function activeIndicator() {
            return (this.active + this.count) % this.count;
        }
    },

    methods: {
        initialize: function initialize() {
            // reset offset when children changes
            clearTimeout(this.timer);
            this.width = this.$el.getBoundingClientRect().width;
            this.active = this.initialSwipe;
            this.currentDuration = 0;
            this.offset = this.count > 1 ? -this.width * (this.active + 1) : 0;
            this.swipes.forEach(function (swipe) {
                swipe.offset = 0;
            });
            this.autoPlay();
        },
        onTouchStart: function onTouchStart(event) {
            clearTimeout(this.timer);

            this.deltaX = 0;
            this.direction = '';
            this.currentDuration = 0;
            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;

            if (this.active <= -1) {
                this.move(this.count);
            }
            if (this.active >= this.count) {
                this.move(-this.count);
            }
        },
        onTouchMove: function onTouchMove(event) {
            this.direction = this.direction || this.getDirection(event.touches[0]);

            if (this.direction === 'horizontal') {
                event.preventDefault();
                this.deltaX = event.touches[0].clientX - this.startX;
                this.move(0, this.range(this.deltaX, [-this.width, this.width]));
            }
        },
        onTouchEnd: function onTouchEnd() {
            if (this.deltaX) {
                this.move(Math.abs(this.deltaX) > 50 ? this.deltaX > 0 ? -1 : 1 : 0);
                this.currentDuration = this.duration;
            }
            this.autoPlay();
        },
        move: function move() {
            var move = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var active = this.active,
                count = this.count,
                swipes = this.swipes,
                deltaX = this.deltaX,
                width = this.width;


            if (!this.loop && (active === 0 && (offset > 0 || move < 0) || active === count - 1 && (offset < 0 || move > 0))) {
                return;
            }

            if (move) {
                if (active === -1) {
                    swipes[count - 1].offset = 0;
                }
                swipes[0].offset = active === count - 1 && move > 0 ? count * width : 0;

                this.active += move;
            } else {
                if (active === 0) {
                    swipes[count - 1].offset = deltaX > 0 ? -count * width : 0;
                } else if (active === count - 1) {
                    swipes[0].offset = deltaX < 0 ? count * width : 0;
                }
            }
            this.offset = offset - (this.active + 1) * this.width;
        },
        autoPlay: function autoPlay() {
            var _this = this;

            var autoplay = this.autoplay;

            if (autoplay && this.count > 1) {
                clearTimeout(this.timer);
                this.timer = setTimeout(function () {
                    _this.currentDuration = 0;

                    if (_this.active >= _this.count) {
                        _this.move(-_this.count);
                    }

                    setTimeout(function () {
                        _this.currentDuration = _this.duration;
                        _this.move(1);
                        _this.autoPlay();
                    }, 30);
                }, autoplay);
            }
        },
        getDirection: function getDirection(touch) {
            var offsetX = Math.abs(touch.clientX - this.startX);
            var offsetY = Math.abs(touch.clientY - this.startY);
            return offsetX > offsetY ? 'horizontal' : offsetX < offsetY ? 'vertical' : '';
        },
        range: function range(num, arr) {
            return Math.min(Math.max(num, arr[0]), arr[1]);
        }
    }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swipe_item_vue__ = __webpack_require__(61);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cd66ada_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swipe_item_vue__ = __webpack_require__(119);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swipe_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cd66ada_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swipe_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-swipe-item',

    data: function data() {
        return {
            offset: 0
        };
    },


    computed: {
        style: function style() {
            return {
                width: this.$parent.width + 'px',
                transform: 'translate(' + this.offset + 'px, 0)'
            };
        }
    },

    beforeCreate: function beforeCreate() {
        this.$parent.swipes.push(this);
    },
    destroyed: function destroyed() {
        this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
    }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-badge',

    props: {
        maxNum: Number, // 显示到的最大数
        num: Number, // 实际数
        radius: { // 圆角 0.2rem 50%
            type: String,
            default: '0'
        },
        borderColor: String // 边框颜色，不需要则不传
    },
    computed: {
        resultNum: function resultNum() {
            if (this.maxNum) {
                return this.num > this.maxNum ? this.maxNum + '+' : this.num;
            } else {
                return this.num;
            }
        },
        styleObj: function styleObj() {
            var style = {
                borderRadius: this.radius
            };

            if (this.borderColor) {
                style.border = '1px solid ' + this.borderColor;
            }

            return style;
        }
    }
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-button',

    props: {
        text: String, // button 文本
        block: { // button是否为块级元素
            type: Boolean,
            default: false
        },
        //  loading: Boolean,
        disabled: { // 是否禁用
            type: Boolean,
            default: false
        },
        tag: { // 按钮标签
            type: String,
            default: 'button'
        }
    },
    computed: {},
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event);
        }
    }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_icon__ = __webpack_require__(33);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* slot
 * icon 自定义icon
 * title 自定义title
 * right-icon 自定义右侧按钮，默认是arrow
 * */

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-cell',
    components: {
        JvIcon: __WEBPACK_IMPORTED_MODULE_0__icon_icon__["a" /* default */]
    },
    data: function data() {
        return {
            rightBgUrl: __webpack_require__(127)
        };
    },

    props: {
        icon: String, // 左侧图标
        title: String, // 左侧标题
        label: String, // 标题下方的描述信息
        isLink: Boolean, // 是否展示右侧箭头并开启点击反馈
        clickable: Boolean, // 是否开启点击反馈
        value: [String, Number], // 右侧内容
        border: { // 是否显示内边框
            type: Boolean,
            default: true
        },
        valInColumn: { // 传入value为slot时，排成行 还是 列， 默认行
            type: Boolean,
            default: false
        }
    },

    methods: {
        onClick: function onClick() {
            // 点击 cell 时触发
            this.$emit('click');
        }
    }
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-icon',

    props: {
        bgUrl: { // 背景图片src
            type: String,
            require: true
        },
        width: { // 宽
            type: Number,
            require: true
        },
        height: { // 高
            type: Number,
            require: true
        },
        bgWidth: Number, // 背景图宽
        bgHeight: Number // 背景图高
        // info: String
    },
    computed: {
        styleObj: function styleObj() {
            return {
                width: this.width + 'rem',
                height: this.height + 'rem',
                background: 'url(' + this.bgUrl + ') no-repeat center',
                backgroundSize: this.bg_width + 'rem ' + this.bg_height + 'rem'
            };
        },
        bg_width: function bg_width() {
            return this.bgWidth ? this.bgWidth : this.width;
        },
        bg_height: function bg_height() {
            return this.bgHeight ? this.bgHeight : this.height;
        }
    }
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-cell-group',

    props: {
        border: {
            type: Boolean,
            default: true
        }
    }
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_icon__ = __webpack_require__(33);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-nav-bar',

    components: {
        JvIcon: __WEBPACK_IMPORTED_MODULE_0__icon_icon__["a" /* default */]
    },
    props: {
        title: String,
        leftText: String,
        rightText: String,
        leftArrow: Boolean,
        rightIcon: Boolean,
        fixed: Boolean,
        zIndex: {
            type: Number,
            default: 1
        }
    },
    data: function data() {
        return {
            leftBgUrl: __webpack_require__(132),
            rightBgUrl: __webpack_require__(133)
        };
    },

    computed: {
        style: function style() {
            return {
                zIndex: this.zIndex
            };
        }
    }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picker_picker__ = __webpack_require__(70);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var currentYear = new Date().getFullYear();
var isValidDate = function isValidDate(date) {
    return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
};

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-datetime-picker',

    components: {
        JvPicker: __WEBPACK_IMPORTED_MODULE_2__picker_picker__["a" /* default */]
    },

    props: {
        value: {},
        title: String, // 顶部栏标题
        itemHeight: Number, // 选项高度
        visibleItemCount: Number, // 可见的选项个数
        confirmButtonText: String, // 确认按钮文字
        cancelButtonText: String, // 取消按钮文字
        type: { // 组件类型 date time year-month
            type: String,
            default: 'datetime'
        },
        showToolbar: {
            type: Boolean,
            default: true
        },
        format: {
            type: String,
            default: 'YYYY.MM.DD HH时 mm分'
        },
        minDate: { // 可选的最小日期
            type: Date,
            default: function _default() {
                return new Date(currentYear - 10, 0, 1);
            },
            validator: isValidDate
        },
        maxDate: { // 可选的最大日期
            type: Date,
            default: function _default() {
                return new Date(currentYear + 10, 11, 31);
            },
            validator: isValidDate
        },
        minHour: { // 可选的最小小时，针对 time 类型
            type: Number,
            default: 0
        },
        maxHour: { // 可选的最大小时，针对 time 类型
            type: Number,
            default: 23
        }
    },

    data: function data() {
        return {
            innerValue: this.correctValue(this.value)
        };
    },


    watch: {
        value: function value(val) {
            val = this.correctValue(val);
            var isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();
            if (!isEqual) this.innerValue = val;
        },
        innerValue: function innerValue(val) {
            this.updateColumnValue(val);
            this.$emit('input', val);
        }
    },

    computed: {
        ranges: function ranges() {
            if (this.type === 'time') {
                return [[this.minHour, this.maxHour], [0, 59]];
            }

            var _getBoundary = this.getBoundary('max', this.innerValue),
                maxYear = _getBoundary.maxYear,
                maxDate = _getBoundary.maxDate,
                maxMonth = _getBoundary.maxMonth,
                maxHour = _getBoundary.maxHour,
                maxMinute = _getBoundary.maxMinute;

            var _getBoundary2 = this.getBoundary('min', this.innerValue),
                minYear = _getBoundary2.minYear,
                minDate = _getBoundary2.minDate,
                minMonth = _getBoundary2.minMonth,
                minHour = _getBoundary2.minHour,
                minMinute = _getBoundary2.minMinute;

            var result = [[minYear, maxYear], [minMonth, maxMonth], [minDate, maxDate], [minHour, maxHour], [minMinute, maxMinute]];

            if (this.type === 'date') result.splice(3, 2);
            if (this.type === 'year-month') result.splice(2, 3);
            return result;
        },
        columns: function columns() {
            var _this = this;

            var results = this.ranges.map(function (range) {
                var values = _this.times(range[1] - range[0] + 1, function (index) {
                    var value = range[0] + index;
                    return value < 10 ? '0' + value : '' + value;
                });

                return {
                    values: values
                };
            });
            return results;
        }
    },

    methods: {
        correctValue: function correctValue(value) {
            // validate value
            var isDateType = this.type !== 'time';
            if (isDateType && !isValidDate(value)) {
                value = this.minDate;
            } else if (!value) {
                var _minHour = this.minHour;

                value = (_minHour > 10 ? _minHour : '0' + _minHour) + ':00';
            }

            // time type
            if (!isDateType) {
                var _value$split = value.split(':'),
                    _value$split2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_value$split, 2),
                    hour = _value$split2[0],
                    minute = _value$split2[1];

                var correctedHour = Math.max(hour, this.minHour);
                correctedHour = Math.min(correctedHour, this.maxHour);

                return correctedHour + ':' + minute;
            }

            // date type

            var _getBoundary3 = this.getBoundary('max', value),
                maxYear = _getBoundary3.maxYear,
                maxDate = _getBoundary3.maxDate,
                maxMonth = _getBoundary3.maxMonth,
                maxHour = _getBoundary3.maxHour,
                maxMinute = _getBoundary3.maxMinute;

            var _getBoundary4 = this.getBoundary('min', value),
                minYear = _getBoundary4.minYear,
                minDate = _getBoundary4.minDate,
                minMonth = _getBoundary4.minMonth,
                minHour = _getBoundary4.minHour,
                minMinute = _getBoundary4.minMinute;

            var minDay = new Date(minYear, minMonth - 1, minDate, minHour, minMinute);
            var maxDay = new Date(maxYear, maxMonth - 1, maxDate, maxHour, maxMinute);
            value = Math.max(value, minDay);
            value = Math.min(value, maxDay);

            return new Date(value);
        },
        times: function times(n, iteratee) {
            var index = -1;
            var result = Array(n);

            while (++index < n) {
                result[index] = iteratee(index);
            }
            return result;
        },
        getBoundary: function getBoundary(type, value) {
            var _ref;

            var boundary = this[type + 'Date'];
            var year = boundary.getFullYear();
            var month = 1;
            var date = 1;
            var hour = 0;
            var minute = 0;

            if (type === 'max') {
                month = 12;
                date = this.getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
                hour = 23;
                minute = 59;
            }

            if (value.getFullYear() === year) {
                month = boundary.getMonth() + 1;
                if (value.getMonth() + 1 === month) {
                    date = boundary.getDate();
                    if (value.getDate() === date) {
                        hour = boundary.getHours();
                        if (value.getHours() === hour) {
                            minute = boundary.getMinutes();
                        }
                    }
                }
            }

            return _ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, type + 'Year', year), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, type + 'Month', month), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, type + 'Date', date), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, type + 'Hour', hour), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, type + 'Minute', minute), _ref;
        },
        getTrueValue: function getTrueValue(formattedValue) {
            if (!formattedValue) return;
            while (isNaN(parseInt(formattedValue, 10))) {
                formattedValue = formattedValue.slice(1);
            }
            return parseInt(formattedValue, 10);
        },
        getMonthEndDay: function getMonthEndDay(year, month) {
            if (this.isShortMonth(month)) {
                return 30;
            } else if (month === 2) {
                return this.isLeapYear(year) ? 29 : 28;
            } else {
                return 31;
            }
        },
        isLeapYear: function isLeapYear(year) {
            return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
        },
        isShortMonth: function isShortMonth(month) {
            return [4, 6, 9, 11].indexOf(month) > -1;
        },
        onConfirm: function onConfirm() {
            this.$emit('confirm', this.innerValue);
        },
        onChange: function onChange(picker) {
            var values = picker.getValues();
            var value = void 0;

            if (this.type === 'time') {
                value = values.join(':');
            } else {
                var year = this.getTrueValue(values[0]);
                var month = this.getTrueValue(values[1]);
                var maxDate = this.getMonthEndDay(year, month);
                var date = this.getTrueValue(values[2]);
                if (this.type === 'year-month') {
                    date = 1;
                }
                date = date > maxDate ? maxDate : date;
                var hour = 0;
                var minute = 0;
                if (this.type === 'datetime') {
                    hour = this.getTrueValue(values[3]);
                    minute = this.getTrueValue(values[4]);
                }
                value = new Date(year, month - 1, date, hour, minute);
            }
            value = this.correctValue(value);
            this.innerValue = value;
            this.$emit('change', picker);
        },
        updateColumnValue: function updateColumnValue(value) {
            var _this2 = this;

            var values = [];
            if (this.type === 'time') {
                var currentValue = value.split(':');
                values = [currentValue[0], currentValue[1]];
            } else {
                values = ['' + value.getFullYear(), ('0' + (value.getMonth() + 1)).slice(-2), ('0' + value.getDate()).slice(-2)];
                if (this.type === 'datetime') {
                    values.push(('0' + value.getHours()).slice(-2), ('0' + value.getMinutes()).slice(-2));
                }
                if (this.type === 'year-month') {
                    values = values.slice(0, 2);
                }
            }

            this.$nextTick(function () {
                _this2.setColumnByValues(values);
            });
        },
        setColumnByValues: function setColumnByValues(values) {
            if (!this.$refs.picker) {
                return;
            }
            this.$refs.picker.setValues(values);
        }
    },

    mounted: function mounted() {
        this.updateColumnValue(this.innerValue);
    }
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__ = __webpack_require__(71);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a871bf54_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__ = __webpack_require__(153);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a871bf54_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picker_column__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_deep_clone__ = __webpack_require__(151);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-picker',

    components: {
        PickerColumn: __WEBPACK_IMPORTED_MODULE_0__picker_column__["a" /* default */]
    },

    props: {
        title: String, // 顶部栏标题
        loading: Boolean, // 是否显示加载状态
        showToolbar: Boolean, // 是否显示顶部栏
        confirmButtonText: String, // 确认按钮文字
        cancelButtonText: String, // 取消按钮文字
        visibleItemCount: { // 可见的选项个数
            type: Number,
            default: 5
        },
        valueKey: { // 选项对象中，文字对应的 key
            type: String,
            default: 'text'
        },
        itemHeight: { // 选项高度  带单位rem
            type: String,
            default: '.44rem'
        },
        columns: { // 对象数组，配置每一列显示的数据
            type: Array,
            default: function _default() {
                return [];
            }
        },
        mask: { // 是否显示加载状态
            type: Boolean,
            default: false
        }

    },

    data: function data() {
        return {
            children: [],
            currentColumns: [],
            cancel: '取消',
            confirm: '确定'
        };
    },
    created: function created() {
        this.initColumns();
    },


    watch: {
        columns: function columns() {
            this.initColumns();
        }
    },

    computed: {
        itemHeightPX: function itemHeightPX() {
            return this.itemHeight.substring(0, this.itemHeight.length - 3) * 100;
        },
        frameStyle: function frameStyle() {
            return {
                height: this.itemHeightPX + 'px'
            };
        },
        maskStyle: function maskStyle() {
            return {
                height: this.itemHeightPX * (this.visibleItemCount - 1) / 2 + 'px'
            };
        },
        columnsStyle: function columnsStyle() {
            return {
                height: this.itemHeightPX * this.visibleItemCount + 'px'
            };
        }
    },

    methods: {
        initColumns: function initColumns() {
            var columns = this.columns.map(__WEBPACK_IMPORTED_MODULE_1__utils_deep_clone__["a" /* default */]);
            this.isSimpleColumn = columns.length && !columns[0].values;
            this.currentColumns = this.isSimpleColumn ? [{ values: columns }] : columns;
        },
        emit: function emit(event) {
            if (this.isSimpleColumn) {
                this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
            } else {
                this.$emit(event, this.getValues(), this.getIndexes());
            }
        },
        onChange: function onChange(columnIndex) {
            if (this.isSimpleColumn) {
                this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
            } else {
                this.$emit('change', this, this.getValues(), columnIndex);
            }
        },


        // get column instance by index
        getColumn: function getColumn(index) {
            return this.children[index];
        },


        // get column value by index
        getColumnValue: function getColumnValue(index) {
            return (this.getColumn(index) || {}).currentValue;
        },


        // set column value by index
        setColumnValue: function setColumnValue(index, value) {
            var column = this.getColumn(index);
            column && column.setValue(value);
        },


        // get column option index by column index
        getColumnIndex: function getColumnIndex(columnIndex) {
            return (this.getColumn(columnIndex) || {}).currentIndex;
        },


        // set column option index by column index
        setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
            var column = this.getColumn(columnIndex);
            column && column.setIndex(optionIndex);
        },


        // get options of column by index
        getColumnValues: function getColumnValues(index) {
            return (this.currentColumns[index] || {}).values;
        },


        // set options of column by index
        setColumnValues: function setColumnValues(index, options) {
            var column = this.currentColumns[index];
            if (column) {
                column.values = options;
            }
        },


        // get values of all columns
        getValues: function getValues() {
            return this.children.map(function (child) {
                return child.currentValue;
            });
        },


        // set values of all columns
        setValues: function setValues(values) {
            var _this = this;

            values.forEach(function (value, index) {
                _this.setColumnValue(index, value);
            });
        },


        // get indexes of all columns
        getIndexes: function getIndexes() {
            return this.children.map(function (child) {
                return child.currentIndex;
            });
        },


        // set indexes of all columns
        setIndexes: function setIndexes(indexes) {
            var _this2 = this;

            indexes.forEach(function (optionIndex, columnIndex) {
                _this2.setColumnIndex(columnIndex, optionIndex);
            });
        }
    }
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_column_vue__ = __webpack_require__(73);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61955844_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_column_vue__ = __webpack_require__(150);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_column_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61955844_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_column_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(12);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var DEFAULT_DURATION = 200;
var range = function range(num, arr) {
    return Math.min(Math.max(num, arr[0]), arr[1]);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-picker-column',

    props: {
        valueKey: String,
        className: String,
        itemHeight: Number,
        visibleItemCount: Number,
        options: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        defaultIndex: {
            type: Number,
            default: 0
        }
    },

    data: function data() {
        return {
            startY: 0,
            offset: 0,
            duration: 0,
            startOffset: 0,
            currentIndex: this.defaultIndex
        };
    },
    created: function created() {
        this.$parent && this.$parent.children.push(this);
    },
    mounted: function mounted() {
        this.setIndex(this.currentIndex);
    },
    destroyed: function destroyed() {
        this.$parent && this.$parent.children.splice(this.$parent.children.indexOf(this), 1);
    },


    watch: {
        defaultIndex: function defaultIndex() {
            this.setIndex(this.defaultIndex);
        },
        options: function options(next, prev) {
            if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(next) !== __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(prev)) {
                this.setIndex(0);
            }
        }
    },

    computed: {
        count: function count() {
            return this.options.length;
        },
        baseOffset: function baseOffset() {
            return this.itemHeight * (this.visibleItemCount - 1) / 2;
        },
        columnStyle: function columnStyle() {
            return {
                height: this.itemHeight * this.visibleItemCount + 'px'
            };
        },
        wrapperStyle: function wrapperStyle() {
            return {
                transition: this.duration + 'ms',
                transform: 'translate3d(0, ' + (this.offset + this.baseOffset) + 'px, 0)',
                lineHeight: this.itemHeight + 'px'
            };
        },
        currentValue: function currentValue() {
            return this.options[this.currentIndex];
        }
    },

    methods: {
        onTouchStart: function onTouchStart(event) {
            this.startY = event.touches[0].clientY;
            this.startOffset = this.offset;
            this.duration = 0;
        },
        onTouchMove: function onTouchMove(event) {
            var deltaY = event.touches[0].clientY - this.startY;
            this.offset = range(this.startOffset + deltaY, [-(this.count * this.itemHeight), this.itemHeight]);
        },
        onTouchEnd: function onTouchEnd() {
            if (this.offset !== this.startOffset) {
                this.duration = DEFAULT_DURATION;
                var index = range(Math.round(-this.offset / this.itemHeight), [0, this.count - 1]);
                this.setIndex(index, true);
            }
        },
        adjustIndex: function adjustIndex(index) {
            index = range(index, [0, this.count]);
            for (var i = index; i < this.count; i++) {
                if (!this.isDisabled(this.options[i])) return i;
            }
            for (var _i = index - 1; _i >= 0; _i--) {
                if (!this.isDisabled(this.options[_i])) return _i;
            }
        },
        isDisabled: function isDisabled(option) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isObj */])(option) && option.disabled;
        },
        getOptionText: function getOptionText(option) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isObj */])(option) && this.valueKey in option ? option[this.valueKey] : option;
        },
        setIndex: function setIndex(index, userAction) {
            index = this.adjustIndex(index);
            this.offset = -index * this.itemHeight;

            if (index !== this.currentIndex) {
                this.currentIndex = index;
                userAction && this.$emit('change', index);
            }
        },
        setValue: function setValue(value) {
            var options = this.options;

            for (var i = 0; i < options.length; i++) {
                if (this.getOptionText(options[i]) === value) {
                    this.setIndex(i);
                    return;
                }
            }
        }
    }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_common_rem_rem_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_common_rem_rem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_common_rem_rem_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_index_scss__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_area__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__badge_badge__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_button__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cell_cell__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cell_cell_group__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icon_icon__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__datetime_picker_datetime_picker__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__picker_picker__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__picker_picker_column__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__popup_popup__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__swipe_swipe__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__swipe_swipe_item__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tabs_tab__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lazyload_lazyload_js__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVArea", function() { return __WEBPACK_IMPORTED_MODULE_2__area_area__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVBadge", function() { return __WEBPACK_IMPORTED_MODULE_3__badge_badge__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVButton", function() { return __WEBPACK_IMPORTED_MODULE_4__button_button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVCell", function() { return __WEBPACK_IMPORTED_MODULE_5__cell_cell__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVCellGroup", function() { return __WEBPACK_IMPORTED_MODULE_6__cell_cell_group__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVIcon", function() { return __WEBPACK_IMPORTED_MODULE_7__icon_icon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVNavBar", function() { return __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVDatetimePicker", function() { return __WEBPACK_IMPORTED_MODULE_9__datetime_picker_datetime_picker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVPicker", function() { return __WEBPACK_IMPORTED_MODULE_10__picker_picker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVPickerColumn", function() { return __WEBPACK_IMPORTED_MODULE_11__picker_picker_column__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVPopup", function() { return __WEBPACK_IMPORTED_MODULE_12__popup_popup__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVSwipe", function() { return __WEBPACK_IMPORTED_MODULE_13__swipe_swipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVSwipeItem", function() { return __WEBPACK_IMPORTED_MODULE_14__swipe_swipe_item__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVTab", function() { return __WEBPACK_IMPORTED_MODULE_15__tabs_tab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVTabs", function() { return __WEBPACK_IMPORTED_MODULE_16__tabs_tabs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVLazyload", function() { return __WEBPACK_IMPORTED_MODULE_17__lazyload_lazyload_js__["a"]; });


// vue
















// 指令


var components = [__WEBPACK_IMPORTED_MODULE_2__area_area__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__badge_badge__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__button_button__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__cell_cell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__cell_cell_group__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__icon_icon__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__datetime_picker_datetime_picker__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__picker_picker__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__picker_picker_column__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__popup_popup__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__swipe_swipe__["a" /* default */], __WEBPACK_IMPORTED_MODULE_14__swipe_swipe_item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_15__tabs_tab__["a" /* default */], __WEBPACK_IMPORTED_MODULE_16__tabs_tabs__["a" /* default */]];

var install = function install(Vue) {
    components.forEach(function (Component) {
        Vue.component(Component.name, Component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}



/* harmony default export */ __webpack_exports__["default"] = ({
    install: install
});

/***/ }),
/* 75 */
/***/ (function(module, exports) {

(function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function recalc() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    var devicePixelRatio = window.devicePixelRatio;
    docEl.setAttribute('data-dpr', devicePixelRatio);
})(document, window);

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_area_vue__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8172065e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_area_vue__ = __webpack_require__(120);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_area_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8172065e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_area_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manager__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_scroll__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_event__ = __webpack_require__(53);





/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        // whether to show popup
        value: Boolean,
        // whether to show overlay
        overlay: Boolean,
        // overlay custom style
        overlayStyle: Object,
        // overlay custom class name
        overlayClass: String,
        // whether to close popup when click overlay
        closeOnClickOverlay: Boolean,
        // z-index
        zIndex: [String, Number],
        // return the mount node for popup
        getContainer: Function,
        // prevent body scroll
        lockScroll: {
            type: Boolean,
            default: true
        }
    },

    watch: {
        value: function value(val) {
            this[val ? 'open' : 'close']();
        },
        getContainer: function getContainer() {
            this.move();
        },
        overlay: function overlay() {
            this.renderOverlay();
        }
    },

    created: function created() {
        this._popupId = 'popup-' + __WEBPACK_IMPORTED_MODULE_1__context__["a" /* default */].plusKey('id');
        this.pos = {
            x: 0,
            y: 0
        };
    },
    mounted: function mounted() {
        if (this.getContainer) {
            this.move();
        }
        if (this.value) {
            this.open();
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.close();
    },


    methods: {
        open: function open() {
            /* istanbul ignore next */
            if (this.$isServer) {
                return;
            }

            // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`
            if (this.zIndex !== undefined) {
                __WEBPACK_IMPORTED_MODULE_1__context__["a" /* default */].zIndex = this.zIndex;
            }

            if (this.lockScroll) {
                document.body.classList.add('jv-overflow-hidden');
                Object(__WEBPACK_IMPORTED_MODULE_3__utils_event__["b" /* on */])(document, 'touchstart', this.onTouchStart);
                Object(__WEBPACK_IMPORTED_MODULE_3__utils_event__["b" /* on */])(document, 'touchmove', this.onTouchMove);
            }

            this.renderOverlay();
            this.$emit('input', true);
        },
        close: function close() {
            if (this.lockScroll) {
                document.body.classList.remove('jv-overflow-hidden');
                Object(__WEBPACK_IMPORTED_MODULE_3__utils_event__["a" /* off */])(document, 'touchstart', this.onTouchStart);
                Object(__WEBPACK_IMPORTED_MODULE_3__utils_event__["a" /* off */])(document, 'touchmove', this.onTouchMove);
            }

            __WEBPACK_IMPORTED_MODULE_0__manager__["a" /* default */].close(this._popupId);
            this.$emit('input', false);
        },
        move: function move() {
            if (this.getContainer) {
                this.getContainer().appendChild(this.$el);
            } else if (this.$parent) {
                this.$parent.$el.appendChild(this.$el);
            }
        },
        onTouchStart: function onTouchStart(e) {
            this.pos = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        },
        onTouchMove: function onTouchMove(e) {
            var pos = this.pos;

            var dx = e.touches[0].clientX - pos.x;
            var dy = e.touches[0].clientY - pos.y;
            var direction = dy > 0 ? '10' : '01';
            var el = __WEBPACK_IMPORTED_MODULE_2__utils_scroll__["a" /* default */].getScrollEventTarget(e.target, this.$el);
            var scrollHeight = el.scrollHeight,
                offsetHeight = el.offsetHeight,
                scrollTop = el.scrollTop;

            var isVertical = Math.abs(dx) < Math.abs(dy);

            var status = '11';

            /* istanbul ignore next */
            if (scrollTop === 0) {
                status = offsetHeight >= scrollHeight ? '00' : '01';
            } else if (scrollTop + offsetHeight >= scrollHeight) {
                status = '10';
            }

            /* istanbul ignore next */
            if (status !== '11' && isVertical && !(parseInt(status, 2) & parseInt(direction, 2))) {
                e.preventDefault();
                e.stopPropagation();
            }
        },
        renderOverlay: function renderOverlay() {
            if (this.overlay) {
                __WEBPACK_IMPORTED_MODULE_0__manager__["a" /* default */].open(this, {
                    zIndex: __WEBPACK_IMPORTED_MODULE_1__context__["a" /* default */].plusKey('zIndex'),
                    className: this.overlayClass,
                    customStyle: this.overlayStyle
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_0__manager__["a" /* default */].close(this._popupId);
            }
            this.$el.style.zIndex = __WEBPACK_IMPORTED_MODULE_1__context__["a" /* default */].plusKey('zIndex');
        }
    }
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__context__ = __webpack_require__(46);






var defaultConfig = {
    className: '',
    customStyle: {}
};

/* harmony default export */ __webpack_exports__["a"] = ({
    open: function open(vm, config) {
        var exist = __WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].stack.some(function (item) {
            return item.vm._popupId === vm._popupId;
        });

        /* istanbul ignore next */
        if (!exist) {
            var el = vm.$el;
            var targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
            __WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].stack.push({ vm: vm, config: config, targetNode: targetNode });
            this.update();
        };
    },
    close: function close(id) {
        var stack = __WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].stack;


        if (stack.length) {
            if (__WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].top.vm._popupId === id) {
                stack.pop();
                this.update();
            } else {
                __WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].stack = stack.filter(function (item) {
                    return item.vm._popupId !== id;
                });
            }
        }
    },
    update: function update() {
        var modal = __WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].modal;


        if (!modal) {
            modal = new (__WEBPACK_IMPORTED_MODULE_2_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_3__Modal__["a" /* default */]))({
                el: document.createElement('div')
            });
            modal.$on('click', this.onClick);

            __WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].modal = modal;
        }

        if (modal.$el.parentNode) {
            modal.visible = false;
        }

        if (__WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].top) {
            var _context$top = __WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].top,
                targetNode = _context$top.targetNode,
                config = _context$top.config;


            targetNode.appendChild(modal.$el);
            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(modal, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, defaultConfig, config, {
                visible: true
            }));
        }
    },


    // close popup when click modal && closeOnClickOverlay is true
    onClick: function onClick() {
        if (__WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].top) {
            var vm = __WEBPACK_IMPORTED_MODULE_4__context__["a" /* default */].top.vm;

            vm.$emit('click-overlay');
            vm.closeOnClickOverlay && vm.close();
        }
    }
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(84) });


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(83);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(26);
var pIE = __webpack_require__(18);
var toObject = __webpack_require__(43);
var IObject = __webpack_require__(42);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(86);
var toAbsoluteIndex = __webpack_require__(87);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__ = __webpack_require__(45);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba48e9b2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__ = __webpack_require__(89);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba48e9b2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"jv-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"jv-modal",class:_vm.className,style:(_vm.style),on:{"touchmove":function($event){$event.preventDefault();$event.stopPropagation();},"click":function($event){_vm.$emit('click', $event)}}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(30);
module.exports = __webpack_require__(31).f('iterator');


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(21);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(51);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(29);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(16);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(43);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(98);
var step = __webpack_require__(99);
var Iterators = __webpack_require__(13);
var toIObject = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(49)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
__webpack_require__(108);
__webpack_require__(109);
__webpack_require__(110);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(50);
var META = __webpack_require__(103).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(24);
var setToStringTag = __webpack_require__(29);
var uid = __webpack_require__(17);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(31);
var wksDefine = __webpack_require__(32);
var enumKeys = __webpack_require__(104);
var isArray = __webpack_require__(105);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(10);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(19);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(51);
var gOPNExt = __webpack_require__(106);
var $GOPD = __webpack_require__(107);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(16);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(18).f = $propertyIsEnumerable;
  __webpack_require__(26).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(28)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
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
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(17)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(6);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(11)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(26);
var pIE = __webpack_require__(18);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8);
var gOPN = __webpack_require__(52).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(18);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(19);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(39);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {



/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32)('asyncIterator');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32)('observable');


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.currentTransition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],staticClass:"jv-popup",class:( _obj = {}, _obj[("jv-popup--" + _vm.position)] = _vm.position, _obj )},[_vm._t("default")],2)])
var _obj;}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["a"] = raf;
/* unused harmony export cancel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(12);
/**
 * requestAnimationFrame polyfill
 */


var prev = Date.now();

/* istanbul ignore next */
function fallback(fn) {
    var curr = Date.now();
    var ms = Math.max(0, 16 - (curr - prev));
    var id = setTimeout(fn, ms);
    prev = curr + ms;
    return id;
}

/* istanbul ignore next */
var root = __WEBPACK_IMPORTED_MODULE_0__index__["c" /* isServer */] ? global : window;

/* istanbul ignore next */
var iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;

/* istanbul ignore next */
var iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;

function raf(fn) {
    return iRaf.call(root, fn);
}

function cancel(id) {
    iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(113)))

/***/ }),
/* 113 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * VNode helper
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'jv-node',
    functional: true,
    props: {
        node: Array
    },
    render: function render(h, ctx) {
        return ctx.props.node;
    }
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-tabs",class:("jv-tabs--" + _vm.type)},[_c('div',{ref:"wrap",staticClass:"jv-tabs__wrap",class:[("jv-tabs__wrap--" + _vm.position), {
            'jv-tabs--scrollable': _vm.scrollable,
            'jv-hairline--top-bottom': _vm.type === 'line'
          }]},[_c('div',{ref:"nav",staticClass:"jv-tabs__nav",class:("jv-tabs__nav--" + _vm.type)},[(_vm.type === 'line')?_c('div',{staticClass:"jv-tabs__nav-bar",style:(_vm.navBarStyle)}):_vm._e(),_vm._v(" "),_vm._l((_vm.tabs),function(tab,index){return _c('div',{key:index,ref:"tabs",refInFor:true,staticClass:"jv-tab",class:{
                    'jv-tab--active': index === _vm.curActive,
                    'jv-tab--disabled': tab.disabled
                  },on:{"click":function($event){_vm.onClick(index)}}},[(tab.$slots.title)?_c('jv-node',{attrs:{"node":tab.$slots.title}}):_c('span',{staticClass:"jv-ellipsis"},[_vm._v(_vm._s(tab.title))])],1)})],2)]),_vm._v(" "),_c('div',{ref:"content",staticClass:"jv-tabs__content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * find parent component by name
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            parent: null
        };
    },

    methods: {
        findParent: function findParent(name) {
            var parent = this.$parent;
            while (parent) {
                if (parent.$options.name === name) {
                    this.parent = parent;
                    break;
                }
                parent = parent.$parent;
            }
        }
    }
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-tab__pane",class:{'jv-tab__pane--select': _vm.index === _vm.parent.curActive }},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-swipe"},[(_vm.count > 1)?_c('div',{staticClass:"jv-swipe__track",style:(_vm.trackStyle),on:{"touchstart":_vm.onTouchStart,"touchmove":_vm.onTouchMove,"touchend":_vm.onTouchEnd,"touchcancel":_vm.onTouchEnd,"transitionend":function($event){_vm.$emit('change', _vm.activeIndicator)}}},[_vm._t("default")],2):_c('div',{staticClass:"jv-swipe__track"},[_vm._t("default")],2),_vm._v(" "),(_vm.showIndicators && _vm.count > 1)?_c('div',{staticClass:"jv-swipe__indicators"},_vm._l((_vm.count),function(index){return _c('i',{key:index,class:{ 'jv-swipe__indicator--active': index - 1 === _vm.activeIndicator }})})):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-swipe-item",style:(_vm.style)},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-area"},[_c('header',{staticClass:"jv-area__title"},[_vm._v("请选择地址")]),_vm._v(" "),_vm._t("close",[(_vm.showCloseBtn)?_c('span',{staticClass:"jv-area__cancel"}):_vm._e()]),_vm._v(" "),_vm._t("confirm",[(_vm.showConfirmBtn)?_c('span',{staticClass:"jv-area__confirm"},[_vm._v("确认")]):_vm._e()]),_vm._v(" "),_c('jv-tabs',{attrs:{"active":_vm.activeTabIndex,"swipeable":""},on:{"click":_vm.getTabIndex}},_vm._l((_vm.tabs),function(tabTitle,index){return _c('jv-tab',{key:index,attrs:{"title":tabTitle}})})),_vm._v(" "),_c('jv-swipe',{attrs:{"showIndicators":false,"initialSwipe":_vm.activeSwipeIndex,"loop":false},on:{"change":_vm.getSwipeIndex}},_vm._l((_vm.areaList),function(itemObj,areaIndex){return _c('jv-swipe-item',{key:areaIndex},[_c('ul',_vm._l((itemObj),function(val,key,index){return _c('li',{key:index,staticClass:"jv-area__item",on:{"click":function($event){_vm.getSelectInfo(val, key, index, areaIndex)}}},[_vm._v(_vm._s(val)+"\n                ")])}))])}))],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_badge_vue__ = __webpack_require__(62);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79f36c16_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_badge_vue__ = __webpack_require__(122);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_badge_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79f36c16_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_badge_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.num && _vm.num > 0)?_c('div',{staticClass:"jv-badge",style:(_vm.styleObj)},[_vm._v(_vm._s(_vm.resultNum))]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(63);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5eb1877c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(124);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5eb1877c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"jv-button",class:{'jv-button--block': _vm.block},attrs:{"disabled":_vm.disabled},on:{"click":_vm.onClick}},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cell_vue__ = __webpack_require__(64);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1153bcd4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cell_vue__ = __webpack_require__(128);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cell_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1153bcd4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cell_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"jv-icon",style:(_vm.styleObj)},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL5JREFUSA21lT0OhCAQhcetuAAtF+D+R+GnpuUA0LnOmpCYuDIP8BXGwvk+XwGz7UfoxXxQdoyRaq3isQ1p4L2nUsoPbq0lpVRXBDXQWjegc07UBBYYYyAJJGAyt0AksACVDAkQybBAKpkSSCTTgp4EOmgMe0rOmVJK7RM+jEsaNOLNyzLB3d/zVbJE8A/OhaYFT/BpQQ8+JZDAhwVS+JAAgcMCFD4k4CGOdGUS72QkIYT92MvikaV30dnt+vwCcJPjgwPimYEAAAAASUVORK5CYII="

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-cell",class:{
          'jv-hairline': _vm.border,
          'jv-cell--clickable': _vm.isLink || _vm.clickable
        },on:{"click":_vm.onClick}},[(_vm.title || _vm.icon || _vm.$slots.title || _vm.$slots.icon)?_c('div',{staticClass:"jv-cell__title"},[_vm._t("icon",[(_vm.icon)?_c('jv-icon',{attrs:{"bgUrl":_vm.icon,"width":0.15,"height":0.2}}):_vm._e()]),_vm._v(" "),_vm._t("title",[_c('span',{staticClass:"jv-cell__text",domProps:{"textContent":_vm._s(_vm.title)}}),_vm._v(" "),(_vm.label)?_c('span',{staticClass:"jv-cell__label",domProps:{"textContent":_vm._s(_vm.label)}}):_vm._e()])],2):_vm._e(),_vm._v(" "),(_vm.value || _vm.$slots.default)?_c('div',{staticClass:"jv-cell__value",class:{
            'jv-cell__value--link': _vm.isLink,
            'jv-cell__value--alone': !_vm.$slots.title && !_vm.title && !_vm.label,
            'jv-cell__value--in-col': _vm.valInColumn
          }},[_vm._t("default",[_c('span',{domProps:{"textContent":_vm._s(_vm.value)}})])],2):_vm._e(),_vm._v(" "),_vm._t("right-icon",[(_vm.isLink)?_c('jv-icon',{staticClass:"jv-cell__right-icon",attrs:{"bgUrl":_vm.rightBgUrl,"width":0.15,"height":0.2}}):_vm._e()]),_vm._v(" "),_vm._t("extra")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cell_group_vue__ = __webpack_require__(66);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_782430f4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cell_group_vue__ = __webpack_require__(130);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cell_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_782430f4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cell_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-cell-group",class:{ 'jv-hairline--top-bottom': _vm.border }},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_bar_vue__ = __webpack_require__(67);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79c0dd22_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nav_bar_vue__ = __webpack_require__(134);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_bar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79c0dd22_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nav_bar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA1JJREFUWAnNmF1Ik1EYx90WU3BGFFr76KLog4iodE5lFUMoAhdqoRR41Y10FX2B0EVeRF/gVd1EEXUVJBqZzFSSVRdrOiMohJLQi6Z0ZyG12Nz6PeIrq7l0ez/wwMM57/uec57f+3+e8+6cFRSssmLRgqeqqmqj3W7vdblc76PR6Dc1c5rVDJaxXq/XMTc39yqVSvmob6mdb42aCSorKzfHYrEh5tiGvcWa1cwnY/NWyOPxbEkmk6+ZQ2DeFBUVHRkdHf0uk6oppnwGkzPbCc8QYXIxXhQ6BszPfOb6d0zOClVXV+9KJBKSMwLTX1JSUqcVjMDlBFRRUbEnHo8HGWc3mUzPy8rK6oPBYEwm0qqsOGRut3s/TgdRZgMwXdSnUCauFYgyz4oUAsYDgOSMwDy22Wwn9YARqGWBgPHSbxBbhz3y+/0thClBW5fy35AB40OVXjwXY/cikUgrCqV0IVmYNKtCwBymTwArBuKOETDCtKRCrKY6nnVhhVgH+XKR2pCSoRAwDXjuxgpR5pqRMPLGfwHx29QMRCf3rWaz+QphuiydjCyLIQOmhQR+iMmWpA1lbhoJovia3w+RwKcBecBNCwqdA6ZD6WB0rYSsHMfzbYA2GQ2R7m9eoampqYDT6VzLgxqUOiBt7g2kdzSqrShUQAJfIJGvimOgzhPG29SLOWYUUIZDln0bzq8LAOG7OzIycoZa169z+ssuKqTcJKFv0D6LIVCqldV3v729PaOf0l/reslTx/T0dNjhcERx5sfKx8fHt7KZ7xkbG9NdqSWB5K2Besex5gvNepTaNzMzs4PybHJyMinP9SpZgcQhK+0DK+4jQI1c7mW3uJvz11NgdYNaNjdI6m6SuhGLAXaCurOpqcmql0IZqyybI449tZw0engu25FAaWnp8b6+vt/Z+ud7f8VA4oBvk+weAyglH9EBq9XaEAqFfskzrUpOQOIUpdwcEPuBWs+lpmcymX/ZHJJO6WV4eDgCjI+wyZ8KtdgLn89nS++jpp2zQoozwrcTsJdcO4ELWSyWo+Fw+IfyPN86Z4UUR/z2fQLiIDATgNWQ8IMoJScTVSVvIPFK+CaAOgTUZ6A8s7OzT1TRMFgVkDgnTF8XoILsFi6pBVp14/8Ag7Q63Rrs4X0AAAAASUVORK5CYII="

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAIBJREFUWAnt0OsJwCAMRlHTOTqGS3SRDOUiXcIxuoeNUCE/ikXog8IVxEcMfpwQGAgggAACCCCAAAIInAhIu4sxLrZPx1lzzmurXa1P9E7u01RKmeu0uxbQlbvb23t9sO7Pbxd9MBWRrU4LoYNBvuodjMlzBBBAAAEEEEAAgd8L7Dw9LQgLFVhfAAAAAElFTkSuQmCC"

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-nav-bar jv-hairline--top-bottom",class:{ 'jv-nav-bar--fixed': _vm.fixed },style:(_vm.style)},[_c('div',{staticClass:"jv-nav-bar__left",on:{"click":function($event){_vm.$emit('click-left')}}},[_vm._t("left",[(_vm.leftArrow)?_c('jv-icon',{attrs:{"bgUrl":_vm.leftBgUrl,"width":0.2,"height":0.2}}):_vm._e(),_vm._v(" "),(_vm.leftText)?_c('span',{staticClass:"jv-nav-bar__text",domProps:{"textContent":_vm._s(_vm.leftText)}}):_vm._e()])],2),_vm._v(" "),_c('div',{staticClass:"jv-nav-bar__title"},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),_vm._v(" "),_c('div',{staticClass:"jv-nav-bar__right",on:{"click":function($event){_vm.$emit('click-right')}}},[_vm._t("right",[(_vm.rightIcon)?_c('jv-icon',{attrs:{"bgUrl":_vm.rightBgUrl,"width":0.2,"height":0.2}}):_vm._e(),_vm._v(" "),(_vm.rightText)?_c('span',{staticClass:"jv-nav-bar__text",domProps:{"textContent":_vm._s(_vm.rightText)}}):_vm._e()])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_datetime_picker_vue__ = __webpack_require__(68);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10650a20_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_datetime_picker_vue__ = __webpack_require__(154);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_datetime_picker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10650a20_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_datetime_picker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(137);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(141);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(144);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(27);
module.exports = __webpack_require__(143);


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(69);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(1).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(27);
module.exports = __webpack_require__(146);


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var get = __webpack_require__(147);
module.exports = __webpack_require__(1).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(69);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-picker-column",class:_vm.className,style:(_vm.columnStyle),on:{"touchstart":_vm.onTouchStart,"touchmove":function($event){$event.preventDefault();return _vm.onTouchMove($event)},"touchend":_vm.onTouchEnd,"touchcancel":_vm.onTouchEnd}},[_c('ul',{style:(_vm.wrapperStyle)},_vm._l((_vm.options),function(option,index){return _c('li',{key:index,staticClass:"jv-ellipsis",class:{
                  'jv-picker-column--disabled': _vm.isDisabled(option),
                  'jv-picker-column--selected': index === _vm.currentIndex
                },domProps:{"textContent":_vm._s(_vm.getOptionText(option))},on:{"click":function($event){_vm.setIndex(index, true)}}})}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deepClone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deep_assign__ = __webpack_require__(152);



function deepClone(obj) {
    if (Array.isArray(obj)) {
        return obj.map(function (item) {
            return deepClone(item);
        });
    } else if ((typeof obj === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(obj)) === 'object') {
        return Object(__WEBPACK_IMPORTED_MODULE_1__deep_assign__["a" /* default */])({}, obj);
    }
    return obj;
}

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assign;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(12);


var hasOwnProperty = Object.prototype.hasOwnProperty;


function assignKey(to, from, key) {
    var val = from[key];

    if (!Object(__WEBPACK_IMPORTED_MODULE_0____["a" /* isDef */])(val) || hasOwnProperty.call(to, key) && !Object(__WEBPACK_IMPORTED_MODULE_0____["a" /* isDef */])(to[key])) {
        return;
    }

    if (!hasOwnProperty.call(to, key) || !Object(__WEBPACK_IMPORTED_MODULE_0____["b" /* isObj */])(val)) {
        to[key] = val;
    } else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}

function assign(to, from) {
    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            assignKey(to, from, key);
        }
    }
    return to;
}

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-picker"},[(_vm.showToolbar)?_c('div',{staticClass:"jv-picker__toolbar "},[_vm._t("default",[_c('div',{staticClass:"jv-picker__cancel",on:{"click":function($event){_vm.emit('cancel')}}},[_vm._v(_vm._s(_vm.cancelButtonText || _vm.cancel))]),_vm._v(" "),(_vm.title)?_c('div',{staticClass:"jv-picker__title jv-ellipsis",domProps:{"textContent":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"jv-picker__confirm",on:{"click":function($event){_vm.emit('confirm')}}},[_vm._v(_vm._s(_vm.confirmButtonText || _vm.confirm))])])],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"jv-picker__toolbar--hairline jv-hairline--top-bottom"}),_vm._v(" "),_c('div',{staticClass:"jv-picker__columns",style:(_vm.columnsStyle),on:{"touchmove":function($event){$event.preventDefault();}}},[_vm._l((_vm.currentColumns),function(item,index){return _c('picker-column',{key:index,attrs:{"value-key":_vm.valueKey,"options":item.values,"class-name":item.className,"default-index":item.defaultIndex,"item-height":_vm.itemHeightPX,"visible-item-count":_vm.visibleItemCount},on:{"change":function($event){_vm.onChange(index)}}})}),_vm._v(" "),_c('div',{staticClass:"jv-picker__frame jv-hairline--top-bottom",style:(_vm.frameStyle)}),_vm._v(" "),(_vm.mask)?_vm._t("mask",[_c('div',{staticClass:"jv-picker__mask--top",style:(_vm.maskStyle)}),_vm._v(" "),_c('div',{staticClass:"jv-picker__mask--bottom",style:(_vm.maskStyle)})]):_vm._e()],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('jv-picker',{ref:"picker",attrs:{"title":_vm.title,"columns":_vm.columns,"item-height":_vm.itemHeight,"show-toolbar":_vm.showToolbar,"visibie-item-height":_vm.visibleItemCount,"confirm-button-text":_vm.confirmButtonText,"cancel-button-text":_vm.cancelButtonText},on:{"change":_vm.onChange,"confirm":_vm.onConfirm,"cancel":function($event){_vm.$emit('cancel')}}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_lazyload__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_lazyload__);
/**
 * Created by yangjiali on 2018/4/12.
 */


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue_lazyload___default.a);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.2
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VueLazyload=t()}(this,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];g(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){m(e,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===L(e[o])&&"function"===L(a)&&(e[o]=a),e[o]=t(e[o]||{},a)):e[o]=a}return e}function r(e){return"object"===L(e)||"function"===L(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function a(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function s(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])}),r.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var l="",d=void 0,c=r.length,h=0;h<c;h++)if(d=r[h],d[0]>=o){l=d[1];break}return l}}function u(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function l(){if(!k)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function d(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function c(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function h(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function f(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},m=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,L=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=w.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},_=t,k="undefined"!=typeof window,E=k&&"IntersectionObserver"in window,A={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(k)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k?window.devicePixelRatio||e:e},T=function(){if(k){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),O={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},I=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},x=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},S=function(e){return x(e,"overflow")+x(e,"overflow-y")+x(e,"overflow-x")},$=function(e){if(k){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window}},H={},Q=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;h(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;I({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||H[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),I({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),H[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),C="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],W={rootMargin:"0px",threshold:0},D=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),y=e.adapter,g=e.observer,m=e.observerOptions;b(this,t),this.version="1.2.2",this.mode=A.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||C,loading:s||C,attempt:u||3,scale:f||z(f),ListenEvents:v||R,hasbind:!1,supportWebp:l(),filter:p||{},adapter:y||{},observer:!!g,observerOptions:m||W},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?A.observer:A.event)}return y(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),k&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(a(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;e.nextTick(function(){u=s(t,i.options.scale)||u,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=r.context.$refs[o],a=a?a.$el||a:document.getElementById(o)),a||(a=$(t));var c=new Q({bindType:n.arg,$parent:a,el:t,loading:l,error:d,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(c),k&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(t,this.options.scale)||o;var d=u(this.ListenerQueue,function(e){return e.el===t});d&&d.update({src:o,loading:a,error:l}),this._observer&&this._observer.observe(t),this.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;E||e!==A.observer||(e=A.event),this.mode=e,e===A.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===A.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return O[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){if(!n)return void(e.Event.listeners[t]=[]);o(e.Event.listeners[t],n)},this.$emit=function(t,n,r){e.Event.listeners[t].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=!1;this.ListenerQueue.forEach(function(n,r){n.state.loaded||(t=n.checkInView())&&n.load(function(){!n.error&&n.loaded&&e.ListenerQueue.splice(r,1)})})}},{key:"_initIntersectionObserver",value:function(){var e=this;E&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]="url("+o+")":r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new j(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return c(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},B=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),k&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(e,[{key:"bind",value:function(e,t,n){var r=new N({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&(r.clear(),o(this._queue,r))}}]),e}(),M={selector:"img"},N=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=_({},M,r.value),this.getImgs().forEach(function(e){t.lazy.add(e,_({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=D(e),r=new n(t),i=new V({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",B(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){_(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});


/***/ })
/******/ ]);
});