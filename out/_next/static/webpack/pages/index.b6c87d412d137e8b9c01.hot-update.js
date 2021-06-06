self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/countdownTimer/CountdownTimer.tsx":
/*!******************************************************!*\
  !*** ./components/countdownTimer/CountdownTimer.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countdownTimer.module.scss */ "./components/countdownTimer/countdownTimer.module.scss");
/* harmony import */ var _countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\components\\countdownTimer\\CountdownTimer.tsx",
    _this = undefined;




var CountdownHeading = function CountdownHeading(_ref) {
  var children = _ref.children;
  var HeaderText = children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().countdownHeading),
      children: HeaderText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = CountdownHeading;
/* harmony default export */ __webpack_exports__["default"] = (CountdownHeading);

var _c;

$RefreshReg$(_c, "CountdownHeading");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./section/countdownSection/CountdownSection.tsx":
/*!*******************************************************!*\
  !*** ./section/countdownSection/CountdownSection.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countdownSection.module.scss */ "./section/countdownSection/countdownSection.module.scss");
/* harmony import */ var _countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_countdownHeading_CountdownHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/countdownHeading/CountdownHeading */ "./components/countdownHeading/CountdownHeading.tsx");
/* harmony import */ var _components_countdownTimer_CountdownTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/countdownTimer/CountdownTimer */ "./components/countdownTimer/CountdownTimer.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\section\\countdownSection\\CountdownSection.tsx",
    _this = undefined;






var CountdownSection = function CountdownSection(_ref) {
  var headingText = _ref.headingText;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countdownContainer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countdownContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sectionHeadingWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_countdownHeading_CountdownHeading__WEBPACK_IMPORTED_MODULE_2__.default, {
            children: headingText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_countdownTimer_CountdownTimer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = CountdownSection;
/* harmony default export */ __webpack_exports__["default"] = (CountdownSection);

var _c;

$RefreshReg$(_c, "CountdownSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/countdownTimer/countdownTimer.module.scss":
/*!**************************************************************!*\
  !*** ./components/countdownTimer/countdownTimer.module.scss ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./countdownTimer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownTimer/countdownTimer.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./countdownTimer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownTimer/countdownTimer.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./countdownTimer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownTimer/countdownTimer.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownTimer/countdownTimer.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownTimer/countdownTimer.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* 幅 */\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n.countdownTimer_countdownHeading__2CWmQ {\n  color: #fff;\n  font-family: \"Noto Serif JP\", serif;\n}\n@media screen and (max-width: 639px) {\n  .countdownTimer_countdownHeading__2CWmQ {\n    font-size: 20px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 1399px) {\n  .countdownTimer_countdownHeading__2CWmQ {\n    font-size: 26px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 1.625rem;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .countdownTimer_countdownHeading__2CWmQ {\n    font-size: 36px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 2.25rem;\n  }\n}", "",{"version":3,"sources":["webpack://countdownTimer.module.scss","webpack://../../styles/device.scss","webpack://../../styles/fonts.scss","webpack://../../styles/colors.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB,MAAA;ACQA;;CAAA;AFJA;EACE,WGJiB;EHKjB,mCAAA;AAEF;AAAE;EAJF;IEDE,eAAA;IAAuB,kBAAA;IACvB,kCAAA;IACA,kBAAA;EFUA;AACF;AALE;EAPF;IEDE,eAAA;IAAuB,kBAAA;IACvB,kCAAA;IACA,mBAAA;EFkBA;AACF;AAVE;EAVF;IEDE,eAAA;IAAuB,kBAAA;IACvB,kCAAA;IACA,kBAAA;EF0BA;AACF","sourcesContent":["@charset \"UTF-8\";\n/* 幅 */\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n.countdownHeading {\n  color: #fff;\n  font-family: \"Noto Serif JP\", serif;\n}\n@media screen and (max-width: 639px) {\n  .countdownHeading {\n    font-size: 20px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 1399px) {\n  .countdownHeading {\n    font-size: 26px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 1.625rem;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .countdownHeading {\n    font-size: 36px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 2.25rem;\n  }\n}","/* 幅 */\n$pcMin: 1400px;\n$tabMax: 1399px;\n$tabMin: 640px;\n$spMax: 639px;\n","@use 'sass:math';\n\n@mixin rem($size) {\n  font-size: $size + px; /*IE9以下で反映されるよう記述*/\n  /* font-size: ($size / 16) + rem;*/\n  font-size: math.div($size, 16) + rem;\n}\n\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n","$textColor--black: #333;\n$textColor--white: #fff;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"countdownHeading": "countdownTimer_countdownHeading__2CWmQ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb24vY291bnRkb3duU2VjdGlvbi9Db3VudGRvd25TZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzcz9kOTY3Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvdW50ZG93blRpbWVyL2NvdW50ZG93blRpbWVyLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbIkNvdW50ZG93bkhlYWRpbmciLCJjaGlsZHJlbiIsIkhlYWRlclRleHQiLCJzdHlsZXMiLCJDb3VudGRvd25TZWN0aW9uIiwiaGVhZGluZ1RleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxnQkFBMEMsR0FBRyxTQUE3Q0EsZ0JBQTZDLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ25FLE1BQU1DLFVBQVUsR0FBR0QsUUFBbkI7QUFFQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUksZUFBUyxFQUFFRSxxRkFBZjtBQUFBLGdCQUF5Q0Q7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FSRDs7S0FBTUYsZ0I7QUFVTiwrREFBZUEsZ0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBRUE7QUFFQTtBQUNBOztBQUVBLElBQU1JLGdCQUEwQyxHQUFHLFNBQTdDQSxnQkFBNkMsT0FBcUI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ3RFLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVGLHlGQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEsdUZBQWhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSw0RkFBaEI7QUFBQSxpQ0FDRSw4REFBQyxrRkFBRDtBQUFBLHNCQUFtQkU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSw4REFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVlELENBYkQ7O0tBQU1ELGdCO0FBZU4sK0RBQWVBLGdCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLFVBQVUsbUJBQU8sQ0FBQyx1TkFBMkc7QUFDN0gsMEJBQTBCLG1CQUFPLENBQUMsbzFCQUFtYTs7QUFFcmM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkMsa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLG8xQkFBbWE7QUFDemE7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxvMUJBQW1hOztBQUU3Yjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7OztBQzNEQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsNkRBQTZELCtGQUErRixnQkFBZ0IsMENBQTBDLEdBQUcsd0NBQXdDLDZDQUE2QyxzQkFBc0IsZ0VBQWdFLDJCQUEyQixLQUFLLEdBQUcsZ0VBQWdFLDZDQUE2QyxzQkFBc0IsZ0VBQWdFLDRCQUE0QixLQUFLLEdBQUcseUNBQXlDLDZDQUE2QyxzQkFBc0IsZ0VBQWdFLDJCQUEyQixLQUFLLEdBQUcsT0FBTyxnTkFBZ04sV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFlBQVksS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLFlBQVksV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sNENBQTRDLHlFQUF5RSxnQkFBZ0IsMENBQTBDLEdBQUcsd0NBQXdDLHVCQUF1QixzQkFBc0IsZ0VBQWdFLDJCQUEyQixLQUFLLEdBQUcsZ0VBQWdFLHVCQUF1QixzQkFBc0IsZ0VBQWdFLDRCQUE0QixLQUFLLEdBQUcseUNBQXlDLHVCQUF1QixzQkFBc0IsZ0VBQWdFLDJCQUEyQixLQUFLLEdBQUcsMkJBQTJCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHNCQUFzQix1QkFBdUIsMEJBQTBCLHlEQUF5RCwyQ0FBMkMsR0FBRywwRUFBMEUsMEJBQTBCLHFCQUFxQjtBQUNwNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNmM4N2Q0MTJkMTM3ZThiOWMwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRkb3duSGVhZGluZ1R5cGUgZnJvbSBcIi4vY291bnRkb3duVGltZXJUeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY291bnRkb3duVGltZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQ291bnRkb3duSGVhZGluZzogRkM8Y291bnRkb3duSGVhZGluZ1R5cGU+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBIZWFkZXJUZXh0ID0gY2hpbGRyZW47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkhlYWRpbmd9PntIZWFkZXJUZXh0fTwvaDM+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25IZWFkaW5nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRkb3duU2VjdGlvblR5cGUgZnJvbSBcIi4vY291bnRkb3duU2VjdGlvblR5cGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY291bnRkb3duU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xuXG5pbXBvcnQgQ291bnRkb3duSGVhZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb3VudGRvd25IZWFkaW5nL0NvdW50ZG93bkhlYWRpbmdcIjtcbmltcG9ydCBDb3VudGRvd25UaW1lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lclwiO1xuXG5jb25zdCBDb3VudGRvd25TZWN0aW9uOiBGQzxjb3VudGRvd25TZWN0aW9uVHlwZT4gPSAoeyBoZWFkaW5nVGV4dCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250ZW50fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nV3JhcHBlcn0+XG4gICAgICAgICAgICA8Q291bnRkb3duSGVhZGluZz57aGVhZGluZ1RleHR9PC9Db3VudGRvd25IZWFkaW5nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDb3VudGRvd25UaW1lciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duU2VjdGlvbjtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL2NvdW50ZG93blRpbWVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vY291bnRkb3duVGltZXIubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vY291bnRkb3duVGltZXIubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiDluYUgKi9cXG4vKiDkvb/nlKjkvovvvJoxMDBweOOCknJlbeOBp1xcbiBAaW5jbHVkZSByZW0oMTAwKVxcbiovXFxuLmNvdW50ZG93blRpbWVyX2NvdW50ZG93bkhlYWRpbmdfXzJDV21RIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNlcmlmIEpQXFxcIiwgc2VyaWY7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XFxuICAuY291bnRkb3duVGltZXJfY291bnRkb3duSGVhZGluZ19fMkNXbVEge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIC8qSUU55Lul5LiL44Gn5Y+N5pig44GV44KM44KL44KI44GG6KiY6L+wKi9cXG4gICAgLyogZm9udC1zaXplOiAoJHNpemUgLyAxNikgKyByZW07Ki9cXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge1xcbiAgLmNvdW50ZG93blRpbWVyX2NvdW50ZG93bkhlYWRpbmdfXzJDV21RIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICAvKklFOeS7peS4i+OBp+WPjeaYoOOBleOCjOOCi+OCiOOBhuiomOi/sCovXFxuICAgIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICAgIGZvbnQtc2l6ZTogMS42MjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLmNvdW50ZG93blRpbWVyX2NvdW50ZG93bkhlYWRpbmdfXzJDV21RIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICAvKklFOeS7peS4i+OBp+WPjeaYoOOBleOCjOOCi+OCiOOBhuiomOi/sCovXFxuICAgIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvdW50ZG93blRpbWVyLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL2RldmljZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCLE1BQUE7QUNRQTs7Q0FBQTtBRkpBO0VBQ0UsV0dKaUI7RUhLakIsbUNBQUE7QUFFRjtBQUFFO0VBSkY7SUVERSxlQUFBO0lBQXVCLGtCQUFBO0lBQ3ZCLGtDQUFBO0lBQ0Esa0JBQUE7RUZVQTtBQUNGO0FBTEU7RUFQRjtJRURFLGVBQUE7SUFBdUIsa0JBQUE7SUFDdkIsa0NBQUE7SUFDQSxtQkFBQTtFRmtCQTtBQUNGO0FBVkU7RUFWRjtJRURFLGVBQUE7SUFBdUIsa0JBQUE7SUFDdkIsa0NBQUE7SUFDQSxrQkFBQTtFRjBCQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyog5bmFICovXFxuLyog5L2/55So5L6L77yaMTAwcHjjgpJyZW3jgadcXG4gQGluY2x1ZGUgcmVtKDEwMClcXG4qL1xcbi5jb3VudGRvd25IZWFkaW5nIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNlcmlmIEpQXFxcIiwgc2VyaWY7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XFxuICAuY291bnRkb3duSGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgLypJRTnku6XkuIvjgaflj43mmKDjgZXjgozjgovjgojjgYboqJjov7AqL1xcbiAgICAvKiBmb250LXNpemU6ICgkc2l6ZSAvIDE2KSArIHJlbTsqL1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7XFxuICAuY291bnRkb3duSGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgLypJRTnku6XkuIvjgaflj43mmKDjgZXjgozjgovjgojjgYboqJjov7AqL1xcbiAgICAvKiBmb250LXNpemU6ICgkc2l6ZSAvIDE2KSArIHJlbTsqL1xcbiAgICBmb250LXNpemU6IDEuNjI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5jb3VudGRvd25IZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICAvKklFOeS7peS4i+OBp+WPjeaYoOOBleOCjOOCi+OCiOOBhuiomOi/sCovXFxuICAgIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIH1cXG59XCIsXCIvKiDluYUgKi9cXG4kcGNNaW46IDE0MDBweDtcXG4kdGFiTWF4OiAxMzk5cHg7XFxuJHRhYk1pbjogNjQwcHg7XFxuJHNwTWF4OiA2MzlweDtcXG5cIixcIkB1c2UgJ3Nhc3M6bWF0aCc7XFxuXFxuQG1peGluIHJlbSgkc2l6ZSkge1xcbiAgZm9udC1zaXplOiAkc2l6ZSArIHB4OyAvKklFOeS7peS4i+OBp+WPjeaYoOOBleOCjOOCi+OCiOOBhuiomOi/sCovXFxuICAvKiBmb250LXNpemU6ICgkc2l6ZSAvIDE2KSArIHJlbTsqL1xcbiAgZm9udC1zaXplOiBtYXRoLmRpdigkc2l6ZSwgMTYpICsgcmVtO1xcbn1cXG5cXG4vKiDkvb/nlKjkvovvvJoxMDBweOOCknJlbeOBp1xcbiBAaW5jbHVkZSByZW0oMTAwKVxcbiovXFxuXCIsXCIkdGV4dENvbG9yLS1ibGFjazogIzMzMztcXG4kdGV4dENvbG9yLS13aGl0ZTogI2ZmZjtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb3VudGRvd25IZWFkaW5nXCI6IFwiY291bnRkb3duVGltZXJfY291bnRkb3duSGVhZGluZ19fMkNXbVFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9