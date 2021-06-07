self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/loadingChecker/LoadingChecker.tsx":
/*!******************************************************!*\
  !*** ./components/loadingChecker/LoadingChecker.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadingChecker_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadingChecker.module.scss */ "./components/loadingChecker/loadingChecker.module.scss");
/* harmony import */ var _loadingChecker_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadingChecker_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\components\\loadingChecker\\LoadingChecker.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var LoadingChecker = function LoadingChecker() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      loading = _useState[0],
      setLoading = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (true) {
      setTimeout(function () {
        endLoading();
      }, 20000);
    }
  });

  var endLoading = function endLoading() {
    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_loadingChecker_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loadingOverlay),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_loadingChecker_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loadingSpinnerWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/overkill/spinner/spinner.svg",
          className: (_loadingChecker_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loadingSpinner)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this) : ""
  }, void 0, false);
};

_s(LoadingChecker, "J7PPXooW06IQ11rfabbvgk72KFw=");

_c = LoadingChecker;
/* harmony default export */ __webpack_exports__["default"] = (LoadingChecker);

var _c;

$RefreshReg$(_c, "LoadingChecker");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2FkaW5nQ2hlY2tlci9Mb2FkaW5nQ2hlY2tlci50c3giXSwibmFtZXMiOlsiTG9hZGluZ0NoZWNrZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImVuZExvYWRpbmciLCJzdHlsZXMiLCJsb2FkaW5nU3Bpbm5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxjQUFzQyxHQUFHLFNBQXpDQSxjQUF5QyxHQUFNO0FBQUE7O0FBQUEsa0JBQ3JCQywrQ0FBUSxDQUFVLElBQVYsQ0FEYTtBQUFBLE1BQzVDQyxPQUQ0QztBQUFBLE1BQ25DQyxVQURtQzs7QUFHbkRDLGtEQUFTLENBQUMsWUFBTTtBQUNkLGNBQXFCO0FBQ25CQyxnQkFBVSxDQUFDLFlBQU07QUFDZkMsa0JBQVU7QUFDWCxPQUZTLEVBRVAsS0FGTyxDQUFWO0FBR0Q7QUFDRixHQU5RLENBQVQ7O0FBUUEsTUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkgsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSxjQUNHRCxPQUFPLGdCQUNOO0FBQUssZUFBUyxFQUFFSyxtRkFBaEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVBLDBGQUFoQjtBQUFBLCtCQUNFO0FBQ0UsYUFBRyxFQUFDLCtCQUROO0FBRUUsbUJBQVMsRUFBRUEsbUZBQXFCQztBQUZsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETSxHQVVOO0FBWEosbUJBREY7QUFnQkQsQ0EvQkQ7O0dBQU1SLGM7O0tBQUFBLGM7QUFpQ04sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGJmMGY3M2U0YTE3NGM5YzlkYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGxvYWRpbmdDaGVja2VyVHlwZSBmcm9tIFwiLi9sb2FkaW5nQ2hlY2tlclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sb2FkaW5nQ2hlY2tlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBMb2FkaW5nQ2hlY2tlcjogRkM8bG9hZGluZ0NoZWNrZXJUeXBlPiA9ICgpID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZW5kTG9hZGluZygpO1xuICAgICAgfSwgMjAwMDApO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZW5kTG9hZGluZyA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nT3ZlcmxheX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nU3Bpbm5lcldyYXBwZXJ9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvb3ZlcmtpbGwvc3Bpbm5lci9zcGlubmVyLnN2Z1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdTcGlubmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ0NoZWNrZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9