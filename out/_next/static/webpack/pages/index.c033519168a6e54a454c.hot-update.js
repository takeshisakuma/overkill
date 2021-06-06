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
/* harmony import */ var C_Users_facto_Desktop_overkill_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countdownTimer.module.scss */ "./components/countdownTimer/countdownTimer.module.scss");
/* harmony import */ var _countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\components\\countdownTimer\\CountdownTimer.tsx",
    _this = undefined;




var CountdownTimer = function CountdownTimer(_ref) {
  (0,C_Users_facto_Desktop_overkill_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var nowDate = new Date();
  var nowTime = nowDate.getTime();
  var endDate = new Date(2022, 6, 15);
  var endTime = endDate.getTime();
  var diff;

  if (endTime > nowTime) {
    diff = endTime - nowTime;
  } else {
    diff = 0;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: nowTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: endTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: diff
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: "999\u65E523\u6642\u959359\u520659\u79D2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = CountdownTimer;
/* harmony default export */ __webpack_exports__["default"] = (CountdownTimer);

var _c;

$RefreshReg$(_c, "CountdownTimer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJub3dEYXRlIiwiRGF0ZSIsIm5vd1RpbWUiLCJnZXRUaW1lIiwiZW5kRGF0ZSIsImVuZFRpbWUiLCJkaWZmIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxjQUFzQyxHQUFHLFNBQXpDQSxjQUF5QyxPQUFRO0FBQUE7O0FBQ3JELE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQSxNQUFJQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixFQUFkO0FBRUEsTUFBSUMsT0FBTyxHQUFHLElBQUlILElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixDQUFkO0FBQ0EsTUFBSUksT0FBTyxHQUFHRCxPQUFPLENBQUNELE9BQVIsRUFBZDtBQUVBLE1BQUlHLElBQUo7O0FBQ0EsTUFBSUQsT0FBTyxHQUFHSCxPQUFkLEVBQXVCO0FBQ3JCSSxRQUFJLEdBQUdELE9BQU8sR0FBR0gsT0FBakI7QUFDRCxHQUZELE1BRU87QUFDTEksUUFBSSxHQUFHLENBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUcsZUFBUyxFQUFFQyx3RUFBZDtBQUFBLGdCQUEyQkw7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBRyxlQUFTLEVBQUVLLHdFQUFkO0FBQUEsZ0JBQTJCRjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFHLGVBQVMsRUFBRUUsd0VBQWQ7QUFBQSxnQkFBMkJEO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUcsZUFBUyxFQUFFQyx3RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFRRCxDQXRCRDs7S0FBTVIsYztBQXdCTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMDMzNTE5MTY4YTZlNTRhNDU0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRkb3duVGltZXJUeXBlIGZyb20gXCIuL2NvdW50ZG93blRpbWVyVHlwZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvdW50ZG93blRpbWVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IENvdW50ZG93blRpbWVyOiBGQzxjb3VudGRvd25UaW1lclR5cGU+ID0gKHt9KSA9PiB7XG4gIHZhciBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgdmFyIG5vd1RpbWUgPSBub3dEYXRlLmdldFRpbWUoKTtcblxuICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKDIwMjIsIDYsIDE1KTtcbiAgdmFyIGVuZFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKTtcblxuICB2YXIgZGlmZjtcbiAgaWYgKGVuZFRpbWUgPiBub3dUaW1lKSB7XG4gICAgZGlmZiA9IGVuZFRpbWUgLSBub3dUaW1lO1xuICB9IGVsc2Uge1xuICAgIGRpZmYgPSAwO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT57bm93VGltZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PntlbmRUaW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+e2RpZmZ9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT45OTnml6UyM+aZgumWkzU55YiGNTnnp5I8L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=