module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/applyDecoratedDescriptor");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/initializerDefineProperty");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_internal_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);

var config = new _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_internal_Config__WEBPACK_IMPORTED_MODULE_0__[/* _Config */ "a"]();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AUTHENTICATION */
/* unused harmony export AUTHORIZE */
/* unused harmony export SIGNOUT */
/* unused harmony export SIGNIN */
/* unused harmony export OTP_CREATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OTP_LENGTH; });
/* unused harmony export OTP_RETRY_SECONDS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OTP_EXPIRATION_SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOKEN_CLAIM_KEYS; });
var AUTHENTICATION = 'authentication';
var AUTHORIZE = 'authorize';
var SIGNOUT = 'signOut';
var SIGNIN = 'signIn';
var OTP_CREATE = 'otpCreate';
var OTP_LENGTH = 4;
var OTP_RETRY_SECONDS = 30;
var OTP_EXPIRATION_SECONDS = 60 * 5;
var TOKEN_CLAIM_KEYS = ['email', 'phoneNumber'];

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HttpError = /*#__PURE__*/function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(HttpError, _Error);

  var _super = _createSuper(HttpError);

  function HttpError(status, data) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HttpError);

    _this = _super.call(this);
    _this.status = void 0;
    _this.data = void 0;
    _this.status = status || 500;
    _this.data = data;
    return _this;
  }

  return HttpError;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAlreadyExistsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserNotFoundError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_HttpClient_HttpClient_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_frontend_src_locale_utils_tLazy_tLazy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var UserAlreadyExistsError = /*#__PURE__*/function (_HttpError) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(UserAlreadyExistsError, _HttpError);

  var _super = _createSuper(UserAlreadyExistsError);

  function UserAlreadyExistsError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserAlreadyExistsError);

    return _super.call(this, 400, Object(_Users_ygmin_Projects_mono_v2_app_packages_lib_frontend_src_locale_utils_tLazy_tLazy__WEBPACK_IMPORTED_MODULE_5__[/* tLazy */ "a"])('authentication:messages.userAlreadyExists'));
  }

  return UserAlreadyExistsError;
}(_Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_HttpClient_HttpClient_error__WEBPACK_IMPORTED_MODULE_4__[/* HttpError */ "a"]);
var UserNotFoundError = /*#__PURE__*/function (_HttpError2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(UserNotFoundError, _HttpError2);

  var _super2 = _createSuper(UserNotFoundError);

  function UserNotFoundError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserNotFoundError);

    return _super2.call(this, 400, Object(_Users_ygmin_Projects_mono_v2_app_packages_lib_frontend_src_locale_utils_tLazy_tLazy__WEBPACK_IMPORTED_MODULE_5__[/* tLazy */ "a"])('authentication:messages.userNotFound'));
  }

  return UserNotFoundError;
}(_Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_HttpClient_HttpClient_error__WEBPACK_IMPORTED_MODULE_4__[/* HttpError */ "a"]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tLazy; });
var tLazy = function tLazy(key, params) {
  return key;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/initializerWarningHelper");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UnknownError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuplicateError; });
/* unused harmony export FormError */
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnknownError = /*#__PURE__*/function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(UnknownError, _Error);

  var _super = _createSuper(UnknownError);

  function UnknownError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UnknownError);

    return _super.apply(this, arguments);
  }

  return UnknownError;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));
var DuplicateError = /*#__PURE__*/function (_Error2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(DuplicateError, _Error2);

  var _super2 = _createSuper(DuplicateError);

  function DuplicateError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DuplicateError);

    return _super2.apply(this, arguments);
  }

  return DuplicateError;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));
var FormError = /*#__PURE__*/function (_Error3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(FormError, _Error3);

  var _super3 = _createSuper(FormError);

  function FormError(data, message) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FormError);

    _this = _super3.call(this, message);
    _this.data = void 0;
    _this.data = data;
    return _this;
  }

  return FormError;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export USER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_PRIMARY_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_SUMMARY_KEYS; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


var USER = 'user';
var USER_PRIMARY_KEYS = ['email', 'phoneNumber'];
var USER_SUMMARY_KEYS = ['_id'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_constants__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN_CLAIM_KEYS */ "c"]));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_user_handlers_userCreate_userCreate_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_user_handlers_userCreate_userCreate_handler__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_user_handlers_userGet_userGet_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_user_handlers_userGet_userGet_handler__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authorizeHandler */
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


// TODO: handle error
var authorizeHandler = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
    var data, sessionAdmin;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, sessionAdmin = _ref.sessionAdmin;
            return _context.abrupt("return", sessionAdmin.verifyToken(data.token));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function authorizeHandler(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return otpCreateHandler; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_utils_Crypto_Crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_mail_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);





var otpCreateHandler = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
    var data, otpCollection, mailer, dataFinal, otp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, otpCollection = _ref.otpCollection, mailer = _ref.mailer;
            _context.next = 3;
            return _before(data);

          case 3:
            dataFinal = _context.sent;
            _context.next = 6;
            return otpCollection["delete"]({
              username: dataFinal.username
            });

          case 6:
            _context.next = 8;
            return otpCollection.save(dataFinal);

          case 8:
            otp = _context.sent;
            _context.next = 11;
            return Object(_Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_mail_handlers__WEBPACK_IMPORTED_MODULE_4__[/* mailSendHandler */ "a"])({
              mailer: mailer,
              mail: {
                from: 'ygminceo@gmail.com',
                to: ['yoongeemin@gmail.com'],
                template: 'otp',
                params: {
                  otp: otp.otp
                }
              }
            });

          case 11:
            return _context.abrupt("return", otp);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function otpCreateHandler(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _before = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = data.username;
            _context2.next = 3;
            return _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_utils_Crypto_Crypto__WEBPACK_IMPORTED_MODULE_3__[/* Crypto */ "a"].randomInt(_Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_constants__WEBPACK_IMPORTED_MODULE_2__[/* OTP_LENGTH */ "b"]);

          case 3:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", {
              username: _context2.t0,
              otp: _context2.t1
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function _before(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mailSendHandler; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var mailSendHandler = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
    var mail, mailer;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mail = _ref.mail, mailer = _ref.mailer;
            return _context.abrupt("return", mailer.send(mail));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function mailSendHandler(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export signInHandler */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_HttpClient_HttpClient_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_user_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_user_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_handlers_otpVerify_otpVerify_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_user_handlers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var signInHandler = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref) {
    var data, userCollection, otpCollection, sessionAdmin, dataFinal, user, token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, userCollection = _ref.userCollection, otpCollection = _ref.otpCollection, sessionAdmin = _ref.sessionAdmin;
            _context.next = 3;
            return _before(data, otpCollection);

          case 3:
            dataFinal = _context.sent;
            _context.prev = 4;
            _context.next = 7;
            return Object(_Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_user_handlers__WEBPACK_IMPORTED_MODULE_9__[/* userGetHandler */ "b"])({
              data: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["pick"])(dataFinal, _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_user_constants__WEBPACK_IMPORTED_MODULE_6__[/* USER_PRIMARY_KEYS */ "a"]),
              userCollection: userCollection
            });

          case 7:
            user = _context.sent;
            _context.next = 17;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);

            if (!(_context.t0 instanceof _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_user_errors__WEBPACK_IMPORTED_MODULE_7__[/* UserNotFoundError */ "b"])) {
              _context.next = 16;
              break;
            }

            _context.next = 15;
            return Object(_Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_user_handlers__WEBPACK_IMPORTED_MODULE_9__[/* userCreateHandler */ "a"])({
              data: dataFinal,
              userCollection: userCollection
            });

          case 15:
            user = _context.sent;

          case 16:
            throw new _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_HttpClient_HttpClient_error__WEBPACK_IMPORTED_MODULE_5__[/* HttpError */ "a"](_context.t0);

          case 17:
            _context.next = 19;
            return sessionAdmin.createToken(user._id, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["pick"])(user, _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_constants__WEBPACK_IMPORTED_MODULE_4__[/* TOKEN_CLAIM_KEYS */ "c"]));

          case 19:
            token = _context.sent;
            return _context.abrupt("return", {
              token: token,
              user: _objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["pick"])(user, _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_user_constants__WEBPACK_IMPORTED_MODULE_6__[/* USER_SUMMARY_KEYS */ "b"])), {}, {
                // TODO: do we need this for non-mongo?
                _id: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["toString"])(user._id)
              })
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 10]]);
  }));

  return function signInHandler(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _before = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(data, otpCollection) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_handlers_otpVerify_otpVerify_handler__WEBPACK_IMPORTED_MODULE_8__[/* otpVerifyHandler */ "a"])({
              data: {
                username: data.email,
                otp: data.otp
              },
              otpCollection: otpCollection
            });

          case 2:
            Object(lodash__WEBPACK_IMPORTED_MODULE_3__["unset"])(data, 'otp');
            return _context2.abrupt("return", data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function _before(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userCreateHandler; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_user_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);




var userCreateHandler = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
    var data, userCollection;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, userCollection = _ref.userCollection;
            _context.prev = 1;
            _context.next = 4;
            return userCollection.save(data);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);

            if (!(_context.t0 instanceof _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_errors__WEBPACK_IMPORTED_MODULE_2__[/* DuplicateError */ "a"])) {
              _context.next = 11;
              break;
            }

            throw new _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_user_errors__WEBPACK_IMPORTED_MODULE_3__[/* UserAlreadyExistsError */ "a"]();

          case 11:
            throw Error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function userCreateHandler(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userGetHandler; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_user_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);



var userGetHandler = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
    var data, userCollection, user;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, userCollection = _ref.userCollection;
            _context.next = 3;
            return userCollection.get(data);

          case 3:
            user = _context.sent;

            if (!(user === undefined)) {
              _context.next = 6;
              break;
            }

            throw new _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_user_errors__WEBPACK_IMPORTED_MODULE_2__[/* UserNotFoundError */ "b"]();

          case 6:
            return _context.abrupt("return", user);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function userGetHandler(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_handlers_authorize_authorize_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_handlers_otpCreate_otpCreate_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_handlers_otpCreate_otpCreate_handler__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_handlers_signIn_signIn_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Crypto; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);





var Crypto = /*#__PURE__*/function () {
  function Crypto() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Crypto);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Crypto, null, [{
    key: "randomInt",
    value: function () {
      var _randomInt2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(n) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Object(crypto__WEBPACK_IMPORTED_MODULE_4__["randomInt"])(Math.pow(10, n - 1), Math.pow(10, n) - 1).toString());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function randomInt(_x) {
        return _randomInt2.apply(this, arguments);
      }

      return randomInt;
    }()
  }]);

  return Crypto;
}();

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_mail_handlers_mailSend_mailSend_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_mail_handlers_mailSend_mailSend_handler__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return otpVerifyHandler; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);



var otpVerifyHandler = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
    var data, otpCollection, otp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, otpCollection = _ref.otpCollection;
            _context.next = 3;
            return otpCollection.get({
              username: data.username
            });

          case 3:
            otp = _context.sent;

            if (!(!otp || otp.otp !== data.otp)) {
              _context.next = 6;
              break;
            }

            throw new _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_errors__WEBPACK_IMPORTED_MODULE_2__[/* InvalidOtpError */ "a"]();

          case 6:
            _context.next = 8;
            return otpCollection["delete"]({
              username: data.username
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function otpVerifyHandler(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UnauthorizedError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidOtpError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_HttpClient_HttpClient_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_frontend_src_locale_utils_tLazy_tLazy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var UnauthorizedError = /*#__PURE__*/function (_HttpError) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(UnauthorizedError, _HttpError);

  var _super = _createSuper(UnauthorizedError);

  function UnauthorizedError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UnauthorizedError);

    return _super.call(this, 401);
  }

  return UnauthorizedError;
}(_Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_HttpClient_HttpClient_error__WEBPACK_IMPORTED_MODULE_4__[/* HttpError */ "a"]);
var InvalidOtpError = /*#__PURE__*/function (_HttpError2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(InvalidOtpError, _HttpError2);

  var _super2 = _createSuper(InvalidOtpError);

  function InvalidOtpError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InvalidOtpError);

    return _super2.call(this, 401, Object(_Users_ygmin_Projects_mono_v2_app_packages_lib_frontend_src_locale_utils_tLazy_tLazy__WEBPACK_IMPORTED_MODULE_5__[/* tLazy */ "a"])('authentication:messages.invalidOtp'));
  }

  return InvalidOtpError;
}(_Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_HttpClient_HttpClient_error__WEBPACK_IMPORTED_MODULE_4__[/* HttpError */ "a"]);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_core_utils_Database_internal_Database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var Database = /*#__PURE__*/function (_Database2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Database, _Database2);

  var _super = _createSuper(Database);

  function Database() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Database);

    return _super.apply(this, arguments);
  }

  return Database;
}(_Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_core_utils_Database_internal_Database__WEBPACK_IMPORTED_MODULE_4__[/* _Database */ "a"]);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Database; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_databases_otp_entity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_billing_database_bank_entity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_landing_databases_subscription_entity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_user_databases_user_entity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45);












var CONNECTION_NAME = 'default';
var SERVER_DATABASE_TYPE = _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config__WEBPACK_IMPORTED_MODULE_7__[/* config */ "a"].get('SERVER_DATABASE_TYPE');
var SERVER_DATABASE_URL = _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config__WEBPACK_IMPORTED_MODULE_7__[/* config */ "a"].get('SERVER_DATABASE_URL');
var SERVER_DATABASE_USERNAME = _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config__WEBPACK_IMPORTED_MODULE_7__[/* config */ "a"].get('SERVER_DATABASE_USERNAME');
var SERVER_DATABASE_PASSWORD = _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config__WEBPACK_IMPORTED_MODULE_7__[/* config */ "a"].get('SERVER_DATABASE_PASSWORD');
var SERVER_DATABASE_NAME = _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config__WEBPACK_IMPORTED_MODULE_7__[/* config */ "a"].get('SERVER_DATABASE_NAME');
var _Database = /*#__PURE__*/function () {
  function _Database() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, _Database);

    this._connectionManager = void 0;
    this._connectionManager = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["getConnectionManager"])();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(_Database, [{
    key: "_getConnection",
    value: function () {
      var _getConnection2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var connection;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this._connectionManager.has(CONNECTION_NAME)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 3;
                return this._connectionManager.get(CONNECTION_NAME);

              case 3:
                connection = _context.sent;

                if (connection.isConnected) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return connection.connect();

              case 7:
                return _context.abrupt("return", _context.sent);

              case 8:
                return _context.abrupt("return", connection);

              case 9:
                _context.next = 11;
                return Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["createConnection"])({
                  type: SERVER_DATABASE_TYPE,
                  url: SERVER_DATABASE_URL,
                  username: SERVER_DATABASE_USERNAME,
                  password: SERVER_DATABASE_PASSWORD,
                  database: SERVER_DATABASE_NAME,
                  synchronize: false,
                  logging: false,
                  entities: [_Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_user_databases_user_entity__WEBPACK_IMPORTED_MODULE_11__[/* User */ "a"], _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_billing_database_bank_entity__WEBPACK_IMPORTED_MODULE_9__[/* Bank */ "a"], _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_databases_otp_entity__WEBPACK_IMPORTED_MODULE_8__[/* Otp */ "a"], _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_landing_databases_subscription_entity__WEBPACK_IMPORTED_MODULE_10__[/* Subscription */ "a"]]
                });

              case 11:
                return _context.abrupt("return", _context.sent);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _getConnection() {
        return _getConnection2.apply(this, arguments);
      }

      return _getConnection;
    }()
  }, {
    key: "getCollection",
    value: function getCollection(name) {
      Promise;
      var self = this;

      var Collection = function Collection() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Collection);

        this.get = /*#__PURE__*/function () {
          var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(data, select) {
            var connection, repository, _id, result;

            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return self._getConnection();

                  case 2:
                    connection = _context2.sent;
                    repository = connection.getRepository(name);
                    _id = data._id;

                    if (_id) {
                      data._id = new mongodb__WEBPACK_IMPORTED_MODULE_4__["ObjectId"](_id);
                    }

                    _context2.next = 8;
                    return repository.findOne(data, {
                      select: select
                    });

                  case 8:
                    result = _context2.sent;
                    return _context2.abrupt("return", result);

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        this.save = /*#__PURE__*/function () {
          var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(data) {
            var connection, repository, id, save, result;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return self._getConnection();

                  case 2:
                    connection = _context3.sent;
                    repository = connection.getRepository(name);
                    id = data._id;
                    save = id ? repository.update(id, data) : repository.save(repository.create(data));
                    _context3.next = 8;
                    return save["catch"](function (e) {
                      switch (e.code) {
                        case 11000:
                          throw new _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_errors__WEBPACK_IMPORTED_MODULE_6__[/* DuplicateError */ "a"]();

                        default:
                          throw Error(e);
                      }
                    });

                  case 8:
                    result = _context3.sent;
                    return _context3.abrupt("return", result);

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }();

        this["delete"] = /*#__PURE__*/function () {
          var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(data) {
            var connection, repository;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return self._getConnection();

                  case 2:
                    connection = _context4.sent;
                    repository = connection.getRepository(name);
                    _context4.next = 6;
                    return repository["delete"](data);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x4) {
            return _ref3.apply(this, arguments);
          };
        }();
      };

      return new Collection();
    }
  }]);

  return _Database;
}();

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Config; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);




var _Config = /*#__PURE__*/function () {
  function _Config() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _Config);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_Config, [{
    key: "get",
    value: function get(key, defaultValue) {
      var value = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(process.env, key, defaultValue);

      if (value === undefined) {
        throw new _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config_error__WEBPACK_IMPORTED_MODULE_3__[/* KeyNotFoundError */ "a"](key);
      }

      return value === '' || isNaN(value) ? value : Object(lodash__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value);
    }
  }]);

  return _Config;
}();

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyNotFoundError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var KeyNotFoundError = /*#__PURE__*/function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(KeyNotFoundError, _Error);

  var _super = _createSuper(KeyNotFoundError);

  function KeyNotFoundError(key) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, KeyNotFoundError);

    return _super.call(this, "Key not found: ".concat(key));
  }

  return KeyNotFoundError;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Otp; });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);






var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;



var Otp = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["ObjectIdColumn"])(), _dec3 = Reflect.metadata("design:type", String), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["PrimaryColumn"])(), _dec5 = Reflect.metadata("design:type", String), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["Column"])(), _dec7 = Reflect.metadata("design:type", String), _dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["Column"])(), _dec9 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["Index"])({
  expireAfterSeconds: _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_constants__WEBPACK_IMPORTED_MODULE_6__[/* OTP_EXPIRATION_SECONDS */ "a"]
}), _dec10 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec11 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["BeforeInsert"])(), _dec12 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["BeforeUpdate"])(), _dec13 = Reflect.metadata("design:type", Function), _dec14 = Reflect.metadata("design:paramtypes", []), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Otp() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Otp);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_id", _descriptor, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "username", _descriptor2, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "otp", _descriptor3, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "createdAt", _descriptor4, this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Otp, [{
    key: "beforeInsertActions",
    value: function beforeInsertActions() {
      this.createdAt = new Date();
    }
  }]);

  return Otp;
}(), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class2.prototype, "_id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class2.prototype, "username", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class2.prototype, "otp", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class2.prototype, "createdAt", [_dec8, _dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class2.prototype, "beforeInsertActions", [_dec11, _dec12, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "beforeInsertActions"), _class2.prototype)), _class2)) || _class);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bank; });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);





var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;


var Bank = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["PrimaryColumn"])(), _dec3 = Reflect.metadata("design:type", String), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])(), _dec5 = Reflect.metadata("design:type", String), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])(), _dec7 = Reflect.metadata("design:type", String), _dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])(), _dec9 = Reflect.metadata("design:type", String), _dec10 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])(), _dec11 = Reflect.metadata("design:type", String), _dec12 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])(), _dec13 = Reflect.metadata("design:type", String), _dec(_class = (_class2 = function Bank() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Bank);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "id", _descriptor, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", _descriptor2, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "institution_id", _descriptor3, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "institution_name", _descriptor4, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "stripe_bank_access_token", _descriptor5, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "plaid_bank_access_token", _descriptor6, this);
}, (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "name", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "institution_id", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "institution_name", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "stripe_bank_access_token", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "plaid_bank_access_token", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);





var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;


var Subscription = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["ObjectIdColumn"])(), _dec3 = Reflect.metadata("design:type", String), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])(), _dec5 = Reflect.metadata("design:type", String), _dec(_class = (_class2 = function Subscription() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Subscription);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_id", _descriptor, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "email", _descriptor2, this);
}, (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "_id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "email", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);





var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;


var User = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["ObjectIdColumn"])(), _dec3 = Reflect.metadata("design:type", String), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({
  unique: true
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])(), _dec7 = Reflect.metadata("design:type", String), _dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])(), _dec9 = Reflect.metadata("design:type", Array), _dec10 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])(), _dec11 = Reflect.metadata("design:type", Array), _dec12 = Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])(), _dec13 = Reflect.metadata("design:type", Object), _dec(_class = (_class2 = function User() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, User);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_id", _descriptor, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "email", _descriptor2, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "phoneNumber", _descriptor3, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "banks", _descriptor4, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "cards", _descriptor5, this);

  _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "linkedAccounts", _descriptor6, this);
}, (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "_id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "email", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "phoneNumber", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "banks", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "cards", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "linkedAccounts", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mailer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_mail_utils_Mailer_internal_Mailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var Mailer = /*#__PURE__*/function (_Mailer2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Mailer, _Mailer2);

  var _super = _createSuper(Mailer);

  function Mailer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mailer);

    return _super.apply(this, arguments);
  }

  return Mailer;
}(_Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_mail_utils_Mailer_internal_Mailer__WEBPACK_IMPORTED_MODULE_4__[/* _Mailer */ "a"]);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Mailer; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var email_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var email_templates__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(email_templates__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_8__);








 // TODO: this is AWS only

var TEMPLATE_ROOT =  true ? _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config__WEBPACK_IMPORTED_MODULE_7__[/* config */ "a"].get('LAMBDA_TASK_ROOT', null) : undefined;
var TEMPLATE_DIR = Object(path__WEBPACK_IMPORTED_MODULE_6__["resolve"])(TEMPLATE_ROOT, 'mail/templates');
var NODE_ENV = _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_core_utils_Config_Config__WEBPACK_IMPORTED_MODULE_7__[/* config */ "a"].get('NODE_ENV', null);
var _Mailer = /*#__PURE__*/function () {
  function _Mailer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, _Mailer);

    this._transport = void 0;
    // TODO: env
    this._transport = Object(nodemailer__WEBPACK_IMPORTED_MODULE_5__["createTransport"])({
      pool: true,
      host: 'smtp.elasticemail.com',
      port: 2525,
      auth: {
        user: 'ygminceo@gmail.com',
        pass: '14854BCEBAA51B4557AF4DBFCC138242021A'
      }
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(_Mailer, [{
    key: "send",
    value: function () {
      var _send = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(_ref) {
        var from, to, template, params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                from = _ref.from, to = _ref.to, template = _ref.template, params = _ref.params;
                console.warn("***".concat(TEMPLATE_DIR, "***"));
                return _context.abrupt("return", new email_templates__WEBPACK_IMPORTED_MODULE_4___default.a({
                  preview: NODE_ENV === 'development',
                  transport: this._transport,
                  views: {
                    root: TEMPLATE_DIR
                  }
                }).send({
                  template: template,
                  message: {
                    from: from,
                    to: to
                  },
                  locals: params
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function send(_x) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }]);

  return _Mailer;
}();

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("email-templates");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handler; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var handler = function handler() {
  return function (target, key, descriptor) {
    var cb = descriptor.value;
    var main = _middy_core__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event, context) {
        var uid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                uid = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(event.requestContext.authorizer, ['jwt', 'claims', 'user_id']);
                context.callbackWaitsForEmptyEventLoop = false;
                _context.prev = 2;
                _context.t0 = JSON;
                _context.next = 6;
                return cb(event.body, uid);

              case 6:
                _context.t1 = _context.sent;
                _context.t2 = _context.t0.stringify.call(_context.t0, _context.t1);
                return _context.abrupt("return", {
                  statusCode: 200,
                  body: _context.t2
                });

              case 11:
                _context.prev = 11;
                _context.t3 = _context["catch"](2);
                console.error(_context.t3);
                return _context.abrupt("return", {
                  statusCode: _context.t3.status || 500,
                  body: _context.t3.data || _context.t3.message
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    main.use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_3___default()());
    descriptor.value = main;
    return descriptor;
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@middy/core");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@middy/http-json-body-parser");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_handlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_core_utils_Database_Database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_mail_utils_Mailer_Mailer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
/* harmony import */ var _Users_ygmin_Projects_mono_v2_app_packages_serverless_aws_src_core_decorators_handler_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50);





var _dec, _dec2, _dec3, _class;







var database = new _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_core_utils_Database_Database__WEBPACK_IMPORTED_MODULE_7__[/* Database */ "a"]();
var mailer = new _Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_mail_utils_Mailer_Mailer__WEBPACK_IMPORTED_MODULE_8__[/* Mailer */ "a"]();
var Handler = (_dec = Object(_Users_ygmin_Projects_mono_v2_app_packages_serverless_aws_src_core_decorators_handler_handler__WEBPACK_IMPORTED_MODULE_9__[/* handler */ "a"])(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_models__WEBPACK_IMPORTED_MODULE_5__["OtpCreateRequestModel"] === "undefined" ? Object : _Users_ygmin_Projects_mono_v2_app_packages_lib_common_src_authentication_models__WEBPACK_IMPORTED_MODULE_5__["OtpCreateRequestModel"]]), (_class = /*#__PURE__*/function () {
  function Handler() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Handler);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Handler, [{
    key: "main",
    value: function () {
      var _main = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(data) {
        var otpCollection;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                otpCollection = database.getCollection('Otp');
                _context.next = 3;
                return Object(_Users_ygmin_Projects_mono_v2_app_packages_lib_backend_src_authentication_handlers__WEBPACK_IMPORTED_MODULE_6__[/* otpCreateHandler */ "a"])({
                  data: data,
                  otpCollection: otpCollection,
                  mailer: mailer
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function main(_x) {
        return _main.apply(this, arguments);
      }

      return main;
    }()
  }]);

  return Handler;
}(), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "main", [_dec, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class.prototype, "main"), _class.prototype)), _class));
var main = new Handler().main;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var _require = __webpack_require__(19),
    resolve = _require.resolve;

var EXTENSIONS = ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.tsx', '.ts', '.jsx', '.js', '.json'];
module.exports = {
  ROOT_PATH: resolve(__dirname),
  EXTENSIONS: EXTENSIONS,
  NATIVE_EXTENSIONS: ['.native.tsx', '.ios.tsx', '.android.tsx', '.native.ts'].concat(EXTENSIONS)
};
/* WEBPACK VAR INJECTION */}.call(this, "../.."))

/***/ })
/******/ ]);