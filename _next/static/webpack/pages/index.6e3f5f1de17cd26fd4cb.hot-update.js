self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/countdownHeading/CountdownHeading.tsx":
/*!**********************************************************!*\
  !*** ./components/countdownHeading/CountdownHeading.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _countdownHeading_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countdownHeading.module.scss */ "./components/countdownHeading/countdownHeading.module.scss");
/* harmony import */ var _countdownHeading_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_countdownHeading_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\components\\countdownHeading\\CountdownHeading.tsx",
    _this = undefined;




var CountdownHeading = function CountdownHeading(_ref) {
  var children = _ref.children;
  var HeaderText = children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: (_countdownHeading_module_scss__WEBPACK_IMPORTED_MODULE_2___default().countDownHeading),
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
/* harmony import */ var _countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countdownSection.module.scss */ "./section/countdownSection/countdownSection.module.scss");
/* harmony import */ var _countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_countdownHeading_CountdownHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/countdownHeading/CountdownHeading */ "./components/countdownHeading/CountdownHeading.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\section\\countdownSection\\CountdownSection.tsx",
    _this = undefined;





var CountdownSection = function CountdownSection(_ref) {
  var headingText = _ref.headingText;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().countdownContainer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().countdownContent),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sectionHeadingWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_countdownHeading_CountdownHeading__WEBPACK_IMPORTED_MODULE_2__.default, {
            children: headingText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
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

/***/ "./components/countdownHeading/countdownHeading.module.scss":
/*!******************************************************************!*\
  !*** ./components/countdownHeading/countdownHeading.module.scss ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./countdownHeading.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownHeading/countdownHeading.module.scss");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./countdownHeading.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownHeading/countdownHeading.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./countdownHeading.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownHeading/countdownHeading.module.scss");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownHeading/countdownHeading.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownHeading/countdownHeading.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* 幅 */\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n.countdownHeading_countdownHeading__33Pan {\n  color: #fff;\n  font-family: \"Noto Serif JP\", serif;\n}\n@media screen and (max-width: 639px) {\n  .countdownHeading_countdownHeading__33Pan {\n    font-size: 20px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 1399px) {\n  .countdownHeading_countdownHeading__33Pan {\n    font-size: 26px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 1.625rem;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .countdownHeading_countdownHeading__33Pan {\n    font-size: 36px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 2.25rem;\n  }\n}", "",{"version":3,"sources":["webpack://countdownHeading.module.scss","webpack://../../styles/device.scss","webpack://../../styles/fonts.scss","webpack://../../styles/colors.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB,MAAA;ACQA;;CAAA;AFJA;EACE,WGJiB;EHKjB,mCAAA;AAEF;AAAE;EAJF;IEDE,eAAA;IAAuB,kBAAA;IACvB,kCAAA;IACA,kBAAA;EFUA;AACF;AALE;EAPF;IEDE,eAAA;IAAuB,kBAAA;IACvB,kCAAA;IACA,mBAAA;EFkBA;AACF;AAVE;EAVF;IEDE,eAAA;IAAuB,kBAAA;IACvB,kCAAA;IACA,kBAAA;EF0BA;AACF","sourcesContent":["@charset \"UTF-8\";\n/* 幅 */\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n.countdownHeading {\n  color: #fff;\n  font-family: \"Noto Serif JP\", serif;\n}\n@media screen and (max-width: 639px) {\n  .countdownHeading {\n    font-size: 20px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 1399px) {\n  .countdownHeading {\n    font-size: 26px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 1.625rem;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .countdownHeading {\n    font-size: 36px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 2.25rem;\n  }\n}","/* 幅 */\n$pcMin: 1400px;\n$tabMax: 1399px;\n$tabMin: 640px;\n$spMax: 639px;\n","@use 'sass:math';\n\n@mixin rem($size) {\n  font-size: $size + px; /*IE9以下で反映されるよう記述*/\n  /* font-size: ($size / 16) + rem;*/\n  font-size: math.div($size, 16) + rem;\n}\n\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n","$textColor--black: #333;\n$textColor--white: #fff;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"countdownHeading": "countdownHeading_countdownHeading__33Pan"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25IZWFkaW5nL0NvdW50ZG93bkhlYWRpbmcudHN4Iiwid2VicGFjazovL19OX0UvLi9zZWN0aW9uL2NvdW50ZG93blNlY3Rpb24vQ291bnRkb3duU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY291bnRkb3duSGVhZGluZy9jb3VudGRvd25IZWFkaW5nLm1vZHVsZS5zY3NzP2JlYTgiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY291bnRkb3duSGVhZGluZy9jb3VudGRvd25IZWFkaW5nLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbIkNvdW50ZG93bkhlYWRpbmciLCJjaGlsZHJlbiIsIkhlYWRlclRleHQiLCJzdHlsZXMiLCJDb3VudGRvd25TZWN0aW9uIiwiaGVhZGluZ1RleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxnQkFBMEMsR0FBRyxTQUE3Q0EsZ0JBQTZDLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ25FLE1BQU1DLFVBQVUsR0FBR0QsUUFBbkI7QUFFQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUksZUFBUyxFQUFFRSx1RkFBZjtBQUFBLGdCQUF5Q0Q7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FSRDs7S0FBTUYsZ0I7QUFVTiwrREFBZUEsZ0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUVBOztBQUVBLElBQU1JLGdCQUEwQyxHQUFHLFNBQTdDQSxnQkFBNkMsT0FBcUI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ3RFLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVGLHlGQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEsdUZBQWhCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFQSw0RkFBaEI7QUFBQSxpQ0FDRSw4REFBQyxrRkFBRDtBQUFBLHNCQUFtQkU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBV0QsQ0FaRDs7S0FBTUQsZ0I7QUFjTiwrREFBZUEsZ0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsVUFBVSxtQkFBTyxDQUFDLHVOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQywwMUJBQXFhOztBQUV2Yzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZCx5QkFBeUIsVUFBVTtBQUNuQyxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sMDFCQUFxYTtBQUMzYTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDAxQkFBcWE7O0FBRS9iOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7O0FDM0RBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw2REFBNkQsaUdBQWlHLGdCQUFnQiwwQ0FBMEMsR0FBRyx3Q0FBd0MsK0NBQStDLHNCQUFzQixnRUFBZ0UsMkJBQTJCLEtBQUssR0FBRyxnRUFBZ0UsK0NBQStDLHNCQUFzQixnRUFBZ0UsNEJBQTRCLEtBQUssR0FBRyx5Q0FBeUMsK0NBQStDLHNCQUFzQixnRUFBZ0UsMkJBQTJCLEtBQUssR0FBRyxPQUFPLGtOQUFrTixXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsWUFBWSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSw0Q0FBNEMseUVBQXlFLGdCQUFnQiwwQ0FBMEMsR0FBRyx3Q0FBd0MsdUJBQXVCLHNCQUFzQixnRUFBZ0UsMkJBQTJCLEtBQUssR0FBRyxnRUFBZ0UsdUJBQXVCLHNCQUFzQixnRUFBZ0UsNEJBQTRCLEtBQUssR0FBRyx5Q0FBeUMsdUJBQXVCLHNCQUFzQixnRUFBZ0UsMkJBQTJCLEtBQUssR0FBRywyQkFBMkIsa0JBQWtCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHVCQUF1QiwwQkFBMEIseURBQXlELDJDQUEyQyxHQUFHLDBFQUEwRSwwQkFBMEIscUJBQXFCO0FBQzk1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZlM2Y1ZjFkZTE3Y2QyNmZkNGNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGRvd25IZWFkaW5nVHlwZSBmcm9tIFwiLi9jb3VudGRvd25IZWFkaW5nVHlwZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvdW50ZG93bkhlYWRpbmcubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQ291bnRkb3duSGVhZGluZzogRkM8Y291bnRkb3duSGVhZGluZ1R5cGU+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBIZWFkZXJUZXh0ID0gY2hpbGRyZW47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50RG93bkhlYWRpbmd9PntIZWFkZXJUZXh0fTwvaDM+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25IZWFkaW5nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRkb3duU2VjdGlvblR5cGUgZnJvbSBcIi4vY291bnRkb3duU2VjdGlvblR5cGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY291bnRkb3duU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xuXG5pbXBvcnQgQ291bnRkb3duSGVhZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb3VudGRvd25IZWFkaW5nL0NvdW50ZG93bkhlYWRpbmdcIjtcblxuY29uc3QgQ291bnRkb3duU2VjdGlvbjogRkM8Y291bnRkb3duU2VjdGlvblR5cGU+ID0gKHsgaGVhZGluZ1RleHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ29udGVudH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1dyYXBwZXJ9PlxuICAgICAgICAgICAgPENvdW50ZG93bkhlYWRpbmc+e2hlYWRpbmdUZXh0fTwvQ291bnRkb3duSGVhZGluZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blNlY3Rpb247XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9jb3VudGRvd25IZWFkaW5nLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vY291bnRkb3duSGVhZGluZy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9jb3VudGRvd25IZWFkaW5nLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyog5bmFICovXFxuLyog5L2/55So5L6L77yaMTAwcHjjgpJyZW3jgadcXG4gQGluY2x1ZGUgcmVtKDEwMClcXG4qL1xcbi5jb3VudGRvd25IZWFkaW5nX2NvdW50ZG93bkhlYWRpbmdfXzMzUGFuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNlcmlmIEpQXFxcIiwgc2VyaWY7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XFxuICAuY291bnRkb3duSGVhZGluZ19jb3VudGRvd25IZWFkaW5nX18zM1BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgLypJRTnku6XkuIvjgaflj43mmKDjgZXjgozjgovjgojjgYboqJjov7AqL1xcbiAgICAvKiBmb250LXNpemU6ICgkc2l6ZSAvIDE2KSArIHJlbTsqL1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7XFxuICAuY291bnRkb3duSGVhZGluZ19jb3VudGRvd25IZWFkaW5nX18zM1BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgLypJRTnku6XkuIvjgaflj43mmKDjgZXjgozjgovjgojjgYboqJjov7AqL1xcbiAgICAvKiBmb250LXNpemU6ICgkc2l6ZSAvIDE2KSArIHJlbTsqL1xcbiAgICBmb250LXNpemU6IDEuNjI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5jb3VudGRvd25IZWFkaW5nX2NvdW50ZG93bkhlYWRpbmdfXzMzUGFuIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICAvKklFOeS7peS4i+OBp+WPjeaYoOOBleOCjOOCi+OCiOOBhuiomOi/sCovXFxuICAgIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvdW50ZG93bkhlYWRpbmcubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvZGV2aWNlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEIsTUFBQTtBQ1FBOztDQUFBO0FGSkE7RUFDRSxXR0ppQjtFSEtqQixtQ0FBQTtBQUVGO0FBQUU7RUFKRjtJRURFLGVBQUE7SUFBdUIsa0JBQUE7SUFDdkIsa0NBQUE7SUFDQSxrQkFBQTtFRlVBO0FBQ0Y7QUFMRTtFQVBGO0lFREUsZUFBQTtJQUF1QixrQkFBQTtJQUN2QixrQ0FBQTtJQUNBLG1CQUFBO0VGa0JBO0FBQ0Y7QUFWRTtFQVZGO0lFREUsZUFBQTtJQUF1QixrQkFBQTtJQUN2QixrQ0FBQTtJQUNBLGtCQUFBO0VGMEJBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiDluYUgKi9cXG4vKiDkvb/nlKjkvovvvJoxMDBweOOCknJlbeOBp1xcbiBAaW5jbHVkZSByZW0oMTAwKVxcbiovXFxuLmNvdW50ZG93bkhlYWRpbmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2VyaWYgSlBcXFwiLCBzZXJpZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcXG4gIC5jb3VudGRvd25IZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAvKklFOeS7peS4i+OBp+WPjeaYoOOBleOCjOOCi+OCiOOBhuiomOi/sCovXFxuICAgIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHtcXG4gIC5jb3VudGRvd25IZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICAvKklFOeS7peS4i+OBp+WPjeaYoOOBleOCjOOCi+OCiOOBhuiomOi/sCovXFxuICAgIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICAgIGZvbnQtc2l6ZTogMS42MjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLmNvdW50ZG93bkhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIC8qSUU55Lul5LiL44Gn5Y+N5pig44GV44KM44KL44KI44GG6KiY6L+wKi9cXG4gICAgLyogZm9udC1zaXplOiAoJHNpemUgLyAxNikgKyByZW07Ki9cXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgfVxcbn1cIixcIi8qIOW5hSAqL1xcbiRwY01pbjogMTQwMHB4O1xcbiR0YWJNYXg6IDEzOTlweDtcXG4kdGFiTWluOiA2NDBweDtcXG4kc3BNYXg6IDYzOXB4O1xcblwiLFwiQHVzZSAnc2FzczptYXRoJztcXG5cXG5AbWl4aW4gcmVtKCRzaXplKSB7XFxuICBmb250LXNpemU6ICRzaXplICsgcHg7IC8qSUU55Lul5LiL44Gn5Y+N5pig44GV44KM44KL44KI44GG6KiY6L+wKi9cXG4gIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICBmb250LXNpemU6IG1hdGguZGl2KCRzaXplLCAxNikgKyByZW07XFxufVxcblxcbi8qIOS9v+eUqOS+i++8mjEwMHB444KScmVt44GnXFxuIEBpbmNsdWRlIHJlbSgxMDApXFxuKi9cXG5cIixcIiR0ZXh0Q29sb3ItLWJsYWNrOiAjMzMzO1xcbiR0ZXh0Q29sb3ItLXdoaXRlOiAjZmZmO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvdW50ZG93bkhlYWRpbmdcIjogXCJjb3VudGRvd25IZWFkaW5nX2NvdW50ZG93bkhlYWRpbmdfXzMzUGFuXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==