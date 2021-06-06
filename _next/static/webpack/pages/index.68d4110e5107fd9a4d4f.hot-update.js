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
  var nowTime = nowDate.getTime(); //var endDate = new Date(2022, 6, 15);

  var endDate = new Date(2020, 6, 6);
  var endTime = endDate.getTime();
  var diff;

  if (endTime > nowTime) {
    diff = endTime - nowTime;
  } else {
    diff = 0;
  } //日(差/1000ミリ秒*60秒*60分*24)


  var day = diff / (1000 * 60 * 60 * 24);
  var afterDay = diff % (1000 * 60 * 60 * 24);
  var time = afterDay / (1000 * 60 * 60);
  var afterTime = afterDay % (1000 * 60 * 60);
  var minute = afterTime / (1000 * 60);
  var afterMinute = afterTime % (1000 * 60);
  var second = afterMinute / 1000;
  var runcatedDay = Math.floor(day);
  var runcatedTime = Math.floor(time);
  var runcatedMinute = Math.floor(minute);
  var runcatedSecond = Math.floor(second);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u73FE\u5728\uFF1A", nowTime]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u7D42\u4E86\uFF1A", endTime]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u5DEE\uFF1A", diff]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u65E5\uFF1A", day]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u6642\u9593\uFF1A", time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u5DEE\uFF1A", afterTime]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u5206\uFF1A", minute]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u5DEE\uFF1A", afterMinute]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u79D2", second]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: [runcatedDay, "\u65E5", runcatedTime, "\u6642\u9593", runcatedMinute, "\u5206", runcatedSecond, "\u79D2"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJub3dEYXRlIiwiRGF0ZSIsIm5vd1RpbWUiLCJnZXRUaW1lIiwiZW5kRGF0ZSIsImVuZFRpbWUiLCJkaWZmIiwiZGF5IiwiYWZ0ZXJEYXkiLCJ0aW1lIiwiYWZ0ZXJUaW1lIiwibWludXRlIiwiYWZ0ZXJNaW51dGUiLCJzZWNvbmQiLCJydW5jYXRlZERheSIsIk1hdGgiLCJmbG9vciIsInJ1bmNhdGVkVGltZSIsInJ1bmNhdGVkTWludXRlIiwicnVuY2F0ZWRTZWNvbmQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLElBQU1BLGNBQXNDLEdBQUcsU0FBekNBLGNBQXlDLE9BQVE7QUFBQTs7QUFDckQsTUFBSUMsT0FBTyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQUlDLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxPQUFSLEVBQWQsQ0FGcUQsQ0FJckQ7O0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQUlILElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFkO0FBQ0EsTUFBSUksT0FBTyxHQUFHRCxPQUFPLENBQUNELE9BQVIsRUFBZDtBQUVBLE1BQUlHLElBQUo7O0FBQ0EsTUFBSUQsT0FBTyxHQUFHSCxPQUFkLEVBQXVCO0FBQ3JCSSxRQUFJLEdBQUdELE9BQU8sR0FBR0gsT0FBakI7QUFDRCxHQUZELE1BRU87QUFDTEksUUFBSSxHQUFHLENBQVA7QUFDRCxHQWJvRCxDQWVyRDs7O0FBQ0EsTUFBSUMsR0FBRyxHQUFHRCxJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFkO0FBQ0EsTUFBSUUsUUFBUSxHQUFHRixJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFuQjtBQUVBLE1BQUlHLElBQUksR0FBR0QsUUFBUSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQW5CO0FBQ0EsTUFBSUUsU0FBUyxHQUFHRixRQUFRLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBeEI7QUFFQSxNQUFJRyxNQUFNLEdBQUdELFNBQVMsSUFBSSxPQUFPLEVBQVgsQ0FBdEI7QUFDQSxNQUFJRSxXQUFXLEdBQUdGLFNBQVMsSUFBSSxPQUFPLEVBQVgsQ0FBM0I7QUFFQSxNQUFJRyxNQUFNLEdBQUdELFdBQVcsR0FBRyxJQUEzQjtBQUVBLE1BQUlFLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQVgsQ0FBbEI7QUFDQSxNQUFJVSxZQUFZLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxJQUFYLENBQW5CO0FBQ0EsTUFBSVMsY0FBYyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBWCxDQUFyQjtBQUNBLE1BQUlRLGNBQWMsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQVgsQ0FBckI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUcsZUFBUyxFQUFFTyx3RUFBZDtBQUFBLHVDQUE4QmxCLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBRyxlQUFTLEVBQUVrQix3RUFBZDtBQUFBLHVDQUE4QmYsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFHLGVBQVMsRUFBRWUsd0VBQWQ7QUFBQSxpQ0FBNkJkLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBRyxlQUFTLEVBQUVjLHdFQUFkO0FBQUEsaUNBQTZCYixHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFO0FBQUcsZUFBUyxFQUFFYSx3RUFBZDtBQUFBLHVDQUE4QlgsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRTtBQUFHLGVBQVMsRUFBRVcsd0VBQWQ7QUFBQSxpQ0FBNkJWLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0U7QUFBRyxlQUFTLEVBQUVVLHdFQUFkO0FBQUEsaUNBQTZCVCxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVFFO0FBQUcsZUFBUyxFQUFFUyx3RUFBZDtBQUFBLGlDQUE2QlIsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFTRTtBQUFHLGVBQVMsRUFBRVEsd0VBQWQ7QUFBQSwyQkFBNEJQLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBVUU7QUFBRyxlQUFTLEVBQUVPLHdFQUFkO0FBQUEsaUJBQ0dOLFdBREgsWUFDaUJHLFlBRGpCLGtCQUNpQ0MsY0FEakMsWUFDa0RDLGNBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUEsa0JBREY7QUFnQkQsQ0FoREQ7O0tBQU1wQixjO0FBa0ROLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY4ZDQxMTBlNTEwN2ZkOWE0ZDRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGRvd25UaW1lclR5cGUgZnJvbSBcIi4vY291bnRkb3duVGltZXJUeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY291bnRkb3duVGltZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQ291bnRkb3duVGltZXI6IEZDPGNvdW50ZG93blRpbWVyVHlwZT4gPSAoe30pID0+IHtcbiAgdmFyIG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xuICB2YXIgbm93VGltZSA9IG5vd0RhdGUuZ2V0VGltZSgpO1xuXG4gIC8vdmFyIGVuZERhdGUgPSBuZXcgRGF0ZSgyMDIyLCA2LCAxNSk7XG4gIHZhciBlbmREYXRlID0gbmV3IERhdGUoMjAyMCwgNiwgNik7XG4gIHZhciBlbmRUaW1lID0gZW5kRGF0ZS5nZXRUaW1lKCk7XG5cbiAgdmFyIGRpZmY7XG4gIGlmIChlbmRUaW1lID4gbm93VGltZSkge1xuICAgIGRpZmYgPSBlbmRUaW1lIC0gbm93VGltZTtcbiAgfSBlbHNlIHtcbiAgICBkaWZmID0gMDtcbiAgfVxuXG4gIC8v5pelKOW3ri8xMDAw44Of44Oq56eSKjYw56eSKjYw5YiGKjI0KVxuICB2YXIgZGF5ID0gZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KTtcbiAgdmFyIGFmdGVyRGF5ID0gZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICB2YXIgdGltZSA9IGFmdGVyRGF5IC8gKDEwMDAgKiA2MCAqIDYwKTtcbiAgdmFyIGFmdGVyVGltZSA9IGFmdGVyRGF5ICUgKDEwMDAgKiA2MCAqIDYwKTtcblxuICB2YXIgbWludXRlID0gYWZ0ZXJUaW1lIC8gKDEwMDAgKiA2MCk7XG4gIHZhciBhZnRlck1pbnV0ZSA9IGFmdGVyVGltZSAlICgxMDAwICogNjApO1xuXG4gIHZhciBzZWNvbmQgPSBhZnRlck1pbnV0ZSAvIDEwMDA7XG5cbiAgdmFyIHJ1bmNhdGVkRGF5ID0gTWF0aC5mbG9vcihkYXkpO1xuICB2YXIgcnVuY2F0ZWRUaW1lID0gTWF0aC5mbG9vcih0aW1lKTtcbiAgdmFyIHJ1bmNhdGVkTWludXRlID0gTWF0aC5mbG9vcihtaW51dGUpO1xuICB2YXIgcnVuY2F0ZWRTZWNvbmQgPSBNYXRoLmZsb29yKHNlY29uZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT7nj77lnKjvvJp7bm93VGltZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9Pue1guS6hu+8mntlbmRUaW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+5beu77yae2RpZmZ9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT7ml6XvvJp7ZGF5fTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+5pmC6ZaT77yae3RpbWV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT7lt67vvJp7YWZ0ZXJUaW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+5YiG77yae21pbnV0ZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PuW3ru+8mnthZnRlck1pbnV0ZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PuenkntzZWNvbmR9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT5cbiAgICAgICAge3J1bmNhdGVkRGF5feaXpXtydW5jYXRlZFRpbWV95pmC6ZaTe3J1bmNhdGVkTWludXRlfeWIhntydW5jYXRlZFNlY29uZH3np5JcbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==