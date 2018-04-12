(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("jvui", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["jvui"] = factory(require("vue"));
	else
		root["jvui"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_42__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
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

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(13);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(36);
var toPrimitive = __webpack_require__(18);
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
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(19);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(22)('wks');
var uid = __webpack_require__(15);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export get */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isServer; });
/* unused harmony export camelize */
/* unused harmony export isAndroid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(42);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(38);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(8);
var ctx = __webpack_require__(77);
var hide = __webpack_require__(3);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
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
/* 19 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(15);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(2);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(8);
var LIBRARY = __webpack_require__(25);
var wksExt = __webpack_require__(28);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(63);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b4d44250_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(123);
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_popup__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tab__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swipe_swipe__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swipe_swipe_item__ = __webpack_require__(58);
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_vue__ = __webpack_require__(33);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ff4edae2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popup_vue__ = __webpack_require__(108);
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_popup__ = __webpack_require__(73);
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(35);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(37)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(2);
var toIObject = __webpack_require__(6);
var arrayIndexOf = __webpack_require__(80)(false);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(40);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(19);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(34);
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
/* 44 */
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);


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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(85);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(97);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(48);
var hide = __webpack_require__(3);
var has = __webpack_require__(2);
var Iterators = __webpack_require__(26);
var $iterCreate = __webpack_require__(89);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(92);
var ITERATOR = __webpack_require__(7)('iterator');
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(90);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(37)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(91).appendChild(iframe);
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(38);
var hiddenKeys = __webpack_require__(23).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export supportsPassive */
/* harmony export (immutable) */ __webpack_exports__["b"] = on;
/* harmony export (immutable) */ __webpack_exports__["a"] = off;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(11);


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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e718781e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__ = __webpack_require__(112);
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_raf__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_event__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_node__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_scroll__ = __webpack_require__(45);
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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue__ = __webpack_require__(55);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_99c6fe42_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tab_vue__ = __webpack_require__(114);
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_find_parent__ = __webpack_require__(113);
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swipe_vue__ = __webpack_require__(57);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_300c9e93_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swipe_vue__ = __webpack_require__(115);
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
/* 57 */
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swipe_item_vue__ = __webpack_require__(59);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cd66ada_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swipe_item_vue__ = __webpack_require__(116);
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_icon__ = __webpack_require__(30);
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
            rightBgUrl: __webpack_require__(124)
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
/* 64 */
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
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_icon__ = __webpack_require__(30);
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
            leftBgUrl: __webpack_require__(129),
            rightBgUrl: __webpack_require__(130)
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
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picker_column__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_deep_clone__ = __webpack_require__(136);
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
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_column_vue__ = __webpack_require__(68);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61955844_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_column_vue__ = __webpack_require__(135);
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
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(11);

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
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_common_rem_rem_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_common_rem_rem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_common_rem_rem_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_index_scss__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_area__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__badge_badge__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_button__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cell_cell__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cell_cell_group__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icon_icon__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__picker_picker__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__picker_picker_column__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__popup_popup__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swipe_swipe__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__swipe_swipe_item__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tabs_tab__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tabs_tabs__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVArea", function() { return __WEBPACK_IMPORTED_MODULE_2__area_area__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVBadge", function() { return __WEBPACK_IMPORTED_MODULE_3__badge_badge__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVButton", function() { return __WEBPACK_IMPORTED_MODULE_4__button_button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVCell", function() { return __WEBPACK_IMPORTED_MODULE_5__cell_cell__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVCellGroup", function() { return __WEBPACK_IMPORTED_MODULE_6__cell_cell_group__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVIcon", function() { return __WEBPACK_IMPORTED_MODULE_7__icon_icon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVNavBar", function() { return __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVPicker", function() { return __WEBPACK_IMPORTED_MODULE_9__picker_picker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVPickerColumn", function() { return __WEBPACK_IMPORTED_MODULE_10__picker_picker_column__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVPopup", function() { return __WEBPACK_IMPORTED_MODULE_11__popup_popup__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVSwipe", function() { return __WEBPACK_IMPORTED_MODULE_12__swipe_swipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVSwipeItem", function() { return __WEBPACK_IMPORTED_MODULE_13__swipe_swipe_item__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVTab", function() { return __WEBPACK_IMPORTED_MODULE_14__tabs_tab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JVTabs", function() { return __WEBPACK_IMPORTED_MODULE_15__tabs_tabs__["a"]; });


// vue















var components = [__WEBPACK_IMPORTED_MODULE_2__area_area__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__badge_badge__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__button_button__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__cell_cell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__cell_cell_group__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__icon_icon__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__picker_picker__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__picker_picker_column__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__popup_popup__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__swipe_swipe__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__swipe_swipe_item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_14__tabs_tab__["a" /* default */], __WEBPACK_IMPORTED_MODULE_15__tabs_tabs__["a" /* default */]];

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
/* 70 */
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
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_area_vue__ = __webpack_require__(31);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8172065e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_area_vue__ = __webpack_require__(117);
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
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manager__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_scroll__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_event__ = __webpack_require__(51);





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
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__context__ = __webpack_require__(44);






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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
module.exports = __webpack_require__(8).Object.assign;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(17);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(79) });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(78);
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
/* 78 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(14);
var gOPS = __webpack_require__(24);
var pIE = __webpack_require__(16);
var toObject = __webpack_require__(41);
var IObject = __webpack_require__(39);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)(function () {
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6);
var toLength = __webpack_require__(81);
var toAbsoluteIndex = __webpack_require__(82);
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(20);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba48e9b2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__ = __webpack_require__(84);
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
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"jv-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"jv-modal",class:_vm.className,style:(_vm.style),on:{"touchmove":function($event){$event.preventDefault();$event.stopPropagation();},"click":function($event){_vm.$emit('click', $event)}}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(93);
module.exports = __webpack_require__(28).f('iterator');


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(88)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(47)(String, 'String', function (iterated) {
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var defined = __webpack_require__(19);
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(49);
var descriptor = __webpack_require__(13);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(14);

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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(2);
var toObject = __webpack_require__(41);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(26);
var TO_STRING_TAG = __webpack_require__(7)('toStringTag');

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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(95);
var step = __webpack_require__(96);
var Iterators = __webpack_require__(26);
var toIObject = __webpack_require__(6);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(47)(Array, 'Array', function (iterated, kind) {
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
/* 95 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
__webpack_require__(105);
__webpack_require__(106);
__webpack_require__(107);
module.exports = __webpack_require__(8).Symbol;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(48);
var META = __webpack_require__(100).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(22);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(15);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(28);
var wksDefine = __webpack_require__(29);
var enumKeys = __webpack_require__(101);
var isArray = __webpack_require__(102);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(18);
var createDesc = __webpack_require__(13);
var _create = __webpack_require__(49);
var gOPNExt = __webpack_require__(103);
var $GOPD = __webpack_require__(104);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(14);
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
  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(16).f = $propertyIsEnumerable;
  __webpack_require__(24).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(25)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(3)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(15)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(2);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(14);
var gOPS = __webpack_require__(24);
var pIE = __webpack_require__(16);
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(40);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(6);
var gOPN = __webpack_require__(50).f;
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(16);
var createDesc = __webpack_require__(13);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(18);
var has = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(36);
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
/* 105 */
/***/ (function(module, exports) {



/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('asyncIterator');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('observable');


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.currentTransition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],staticClass:"jv-popup",class:( _obj = {}, _obj[("jv-popup--" + _vm.position)] = _vm.position, _obj )},[_vm._t("default")],2)])
var _obj;}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["a"] = raf;
/* unused harmony export cancel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(110)))

/***/ }),
/* 110 */
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
/* 111 */
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
/* 112 */
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
/* 113 */
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
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-tab__pane",class:{'jv-tab__pane--select': _vm.index === _vm.parent.curActive }},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-swipe"},[(_vm.count > 1)?_c('div',{staticClass:"jv-swipe__track",style:(_vm.trackStyle),on:{"touchstart":_vm.onTouchStart,"touchmove":_vm.onTouchMove,"touchend":_vm.onTouchEnd,"touchcancel":_vm.onTouchEnd,"transitionend":function($event){_vm.$emit('change', _vm.activeIndicator)}}},[_vm._t("default")],2):_c('div',{staticClass:"jv-swipe__track"},[_vm._t("default")],2),_vm._v(" "),(_vm.showIndicators && _vm.count > 1)?_c('div',{staticClass:"jv-swipe__indicators"},_vm._l((_vm.count),function(index){return _c('i',{key:index,class:{ 'jv-swipe__indicator--active': index - 1 === _vm.activeIndicator }})})):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-swipe-item",style:(_vm.style)},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-area"},[_c('header',{staticClass:"jv-area__title"},[_vm._v("请选择地址")]),_vm._v(" "),_vm._t("close",[(_vm.showCloseBtn)?_c('span',{staticClass:"jv-area__cancel"}):_vm._e()]),_vm._v(" "),_vm._t("confirm",[(_vm.showConfirmBtn)?_c('span',{staticClass:"jv-area__confirm"},[_vm._v("确认")]):_vm._e()]),_vm._v(" "),_c('jv-tabs',{attrs:{"active":_vm.activeTabIndex,"swipeable":""},on:{"click":_vm.getTabIndex}},_vm._l((_vm.tabs),function(tabTitle,index){return _c('jv-tab',{key:index,attrs:{"title":tabTitle}})})),_vm._v(" "),_c('jv-swipe',{attrs:{"showIndicators":false,"initialSwipe":_vm.activeSwipeIndex,"loop":false},on:{"change":_vm.getSwipeIndex}},_vm._l((_vm.areaList),function(itemObj,areaIndex){return _c('jv-swipe-item',{key:areaIndex},[_c('ul',_vm._l((itemObj),function(val,key,index){return _c('li',{key:index,staticClass:"jv-area__item",on:{"click":function($event){_vm.getSelectInfo(val, key, index, areaIndex)}}},[_vm._v(_vm._s(val)+"\n                ")])}))])}))],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_badge_vue__ = __webpack_require__(60);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79f36c16_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_badge_vue__ = __webpack_require__(119);
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
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.num && _vm.num > 0)?_c('div',{staticClass:"jv-badge",style:(_vm.styleObj)},[_vm._v(_vm._s(_vm.resultNum))]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(61);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5eb1877c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(121);
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
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"jv-button",class:{'jv-button--block': _vm.block},attrs:{"disabled":_vm.disabled},on:{"click":_vm.onClick}},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cell_vue__ = __webpack_require__(62);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1153bcd4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cell_vue__ = __webpack_require__(125);
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
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"jv-icon",style:(_vm.styleObj)},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL5JREFUSA21lT0OhCAQhcetuAAtF+D+R+GnpuUA0LnOmpCYuDIP8BXGwvk+XwGz7UfoxXxQdoyRaq3isQ1p4L2nUsoPbq0lpVRXBDXQWjegc07UBBYYYyAJJGAyt0AksACVDAkQybBAKpkSSCTTgp4EOmgMe0rOmVJK7RM+jEsaNOLNyzLB3d/zVbJE8A/OhaYFT/BpQQ8+JZDAhwVS+JAAgcMCFD4k4CGOdGUS72QkIYT92MvikaV30dnt+vwCcJPjgwPimYEAAAAASUVORK5CYII="

/***/ }),
/* 125 */
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
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cell_group_vue__ = __webpack_require__(64);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_782430f4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cell_group_vue__ = __webpack_require__(127);
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
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-cell-group",class:{ 'jv-hairline--top-bottom': _vm.border }},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_bar_vue__ = __webpack_require__(65);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79c0dd22_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nav_bar_vue__ = __webpack_require__(131);
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
/* 129 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA1JJREFUWAnNmF1Ik1EYx90WU3BGFFr76KLog4iodE5lFUMoAhdqoRR41Y10FX2B0EVeRF/gVd1EEXUVJBqZzFSSVRdrOiMohJLQi6Z0ZyG12Nz6PeIrq7l0ez/wwMM57/uec57f+3+e8+6cFRSssmLRgqeqqmqj3W7vdblc76PR6Dc1c5rVDJaxXq/XMTc39yqVSvmob6mdb42aCSorKzfHYrEh5tiGvcWa1cwnY/NWyOPxbEkmk6+ZQ2DeFBUVHRkdHf0uk6oppnwGkzPbCc8QYXIxXhQ6BszPfOb6d0zOClVXV+9KJBKSMwLTX1JSUqcVjMDlBFRRUbEnHo8HGWc3mUzPy8rK6oPBYEwm0qqsOGRut3s/TgdRZgMwXdSnUCauFYgyz4oUAsYDgOSMwDy22Wwn9YARqGWBgPHSbxBbhz3y+/0thClBW5fy35AB40OVXjwXY/cikUgrCqV0IVmYNKtCwBymTwArBuKOETDCtKRCrKY6nnVhhVgH+XKR2pCSoRAwDXjuxgpR5pqRMPLGfwHx29QMRCf3rWaz+QphuiydjCyLIQOmhQR+iMmWpA1lbhoJovia3w+RwKcBecBNCwqdA6ZD6WB0rYSsHMfzbYA2GQ2R7m9eoampqYDT6VzLgxqUOiBt7g2kdzSqrShUQAJfIJGvimOgzhPG29SLOWYUUIZDln0bzq8LAOG7OzIycoZa169z+ssuKqTcJKFv0D6LIVCqldV3v729PaOf0l/reslTx/T0dNjhcERx5sfKx8fHt7KZ7xkbG9NdqSWB5K2Besex5gvNepTaNzMzs4PybHJyMinP9SpZgcQhK+0DK+4jQI1c7mW3uJvz11NgdYNaNjdI6m6SuhGLAXaCurOpqcmql0IZqyybI449tZw0engu25FAaWnp8b6+vt/Z+ud7f8VA4oBvk+weAyglH9EBq9XaEAqFfskzrUpOQOIUpdwcEPuBWs+lpmcymX/ZHJJO6WV4eDgCjI+wyZ8KtdgLn89nS++jpp2zQoozwrcTsJdcO4ELWSyWo+Fw+IfyPN86Z4UUR/z2fQLiIDATgNWQ8IMoJScTVSVvIPFK+CaAOgTUZ6A8s7OzT1TRMFgVkDgnTF8XoILsFi6pBVp14/8Ag7Q63Rrs4X0AAAAASUVORK5CYII="

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAIBJREFUWAnt0OsJwCAMRlHTOTqGS3SRDOUiXcIxuoeNUCE/ikXog8IVxEcMfpwQGAgggAACCCCAAAIInAhIu4sxLrZPx1lzzmurXa1P9E7u01RKmeu0uxbQlbvb23t9sO7Pbxd9MBWRrU4LoYNBvuodjMlzBBBAAAEEEEAAgd8L7Dw9LQgLFVhfAAAAAElFTkSuQmCC"

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-nav-bar jv-hairline--top-bottom",class:{ 'jv-nav-bar--fixed': _vm.fixed },style:(_vm.style)},[_c('div',{staticClass:"jv-nav-bar__left",on:{"click":function($event){_vm.$emit('click-left')}}},[_vm._t("left",[(_vm.leftArrow)?_c('jv-icon',{attrs:{"bgUrl":_vm.leftBgUrl,"width":0.2,"height":0.2}}):_vm._e(),_vm._v(" "),(_vm.leftText)?_c('span',{staticClass:"jv-nav-bar__text",domProps:{"textContent":_vm._s(_vm.leftText)}}):_vm._e()])],2),_vm._v(" "),_c('div',{staticClass:"jv-nav-bar__title"},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),_vm._v(" "),_c('div',{staticClass:"jv-nav-bar__right",on:{"click":function($event){_vm.$emit('click-right')}}},[_vm._t("right",[(_vm.rightIcon)?_c('jv-icon',{attrs:{"bgUrl":_vm.rightBgUrl,"width":0.2,"height":0.2}}):_vm._e(),_vm._v(" "),(_vm.rightText)?_c('span',{staticClass:"jv-nav-bar__text",domProps:{"textContent":_vm._s(_vm.rightText)}}):_vm._e()])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__ = __webpack_require__(66);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a871bf54_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__ = __webpack_require__(138);
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(8);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 135 */
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
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deepClone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deep_assign__ = __webpack_require__(137);



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
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assign;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(11);


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
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jv-picker"},[(_vm.showToolbar)?_c('div',{staticClass:"jv-picker__toolbar "},[_vm._t("default",[_c('div',{staticClass:"jv-picker__cancel",on:{"click":function($event){_vm.emit('cancel')}}},[_vm._v(_vm._s(_vm.cancelButtonText || _vm.cancel))]),_vm._v(" "),(_vm.title)?_c('div',{staticClass:"jv-picker__title jv-ellipsis",domProps:{"textContent":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"jv-picker__confirm",on:{"click":function($event){_vm.emit('confirm')}}},[_vm._v(_vm._s(_vm.confirmButtonText || _vm.confirm))])])],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"jv-picker__toolbar--hairline jv-hairline--top-bottom"}),_vm._v(" "),_c('div',{staticClass:"jv-picker__columns",style:(_vm.columnsStyle),on:{"touchmove":function($event){$event.preventDefault();}}},[_vm._l((_vm.currentColumns),function(item,index){return _c('picker-column',{key:index,attrs:{"value-key":_vm.valueKey,"options":item.values,"class-name":item.className,"default-index":item.defaultIndex,"item-height":_vm.itemHeightPX,"visible-item-count":_vm.visibleItemCount},on:{"change":function($event){_vm.onChange(index)}}})}),_vm._v(" "),_c('div',{staticClass:"jv-picker__frame jv-hairline--top-bottom",style:(_vm.frameStyle)}),_vm._v(" "),(_vm.mask)?_vm._t("mask",[_c('div',{staticClass:"jv-picker__mask--top",style:(_vm.maskStyle)}),_vm._v(" "),_c('div',{staticClass:"jv-picker__mask--bottom",style:(_vm.maskStyle)})]):_vm._e()],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});