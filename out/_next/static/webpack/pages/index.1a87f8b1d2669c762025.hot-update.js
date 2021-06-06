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
  var nowTime = nowDate.getTime(); //月は0からなので1小さく指定

  var endDate = new Date(2022, 5, 15);
  var endTime = endDate.getTime();
  var diff;

  if (endTime >= nowTime) {
    diff = endTime - nowTime;
  } else {
    diff = 0;
  } //日


  var day = diff / (1000 * 60 * 60 * 24); //日未満

  var lessDay = diff % (1000 * 60 * 60 * 24); //時

  var time = lessDay / (1000 * 60 * 60); //時未満

  var lessTime = lessDay % (1000 * 60 * 60); //分

  var minute = lessTime / (1000 * 60); //分未満

  var lessMinute = lessTime % (1000 * 60); //秒

  var second = lessMinute / 1000; //切り捨て

  var runcatedDay = Math.floor(day);
  var runcatedTime = Math.floor(time);
  var runcatedMinute = Math.floor(minute);
  var runcatedSecond = Math.floor(second);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: runcatedDay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u65E5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), runcatedTime, "\u6642\u9593", runcatedMinute, "\u5206", runcatedSecond, "\u79D2"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJub3dEYXRlIiwiRGF0ZSIsIm5vd1RpbWUiLCJnZXRUaW1lIiwiZW5kRGF0ZSIsImVuZFRpbWUiLCJkaWZmIiwiZGF5IiwibGVzc0RheSIsInRpbWUiLCJsZXNzVGltZSIsIm1pbnV0ZSIsImxlc3NNaW51dGUiLCJzZWNvbmQiLCJydW5jYXRlZERheSIsIk1hdGgiLCJmbG9vciIsInJ1bmNhdGVkVGltZSIsInJ1bmNhdGVkTWludXRlIiwicnVuY2F0ZWRTZWNvbmQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLElBQU1BLGNBQXNDLEdBQUcsU0FBekNBLGNBQXlDLE9BQVE7QUFBQTs7QUFDckQsTUFBTUMsT0FBTyxHQUFHLElBQUlDLElBQUosRUFBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixFQUFoQixDQUZxRCxDQUlyRDs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUgsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBQWhCO0FBQ0EsTUFBTUksT0FBTyxHQUFHRCxPQUFPLENBQUNELE9BQVIsRUFBaEI7QUFFQSxNQUFJRyxJQUFKOztBQUNBLE1BQUlELE9BQU8sSUFBSUgsT0FBZixFQUF3QjtBQUN0QkksUUFBSSxHQUFHRCxPQUFPLEdBQUdILE9BQWpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xJLFFBQUksR0FBRyxDQUFQO0FBQ0QsR0Fib0QsQ0FlckQ7OztBQUNBLE1BQU1DLEdBQUcsR0FBR0QsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBaEIsQ0FoQnFELENBa0JyRDs7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQXBCLENBbkJxRCxDQXFCckQ7O0FBQ0EsTUFBTUcsSUFBSSxHQUFHRCxPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBcEIsQ0F0QnFELENBd0JyRDs7QUFDQSxNQUFNRSxRQUFRLEdBQUdGLE9BQU8sSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUF4QixDQXpCcUQsQ0EyQnJEOztBQUNBLE1BQU1HLE1BQU0sR0FBR0QsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUF2QixDQTVCcUQsQ0E4QnJEOztBQUNBLE1BQU1FLFVBQVUsR0FBR0YsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUEzQixDQS9CcUQsQ0FpQ3JEOztBQUNBLE1BQU1HLE1BQU0sR0FBR0QsVUFBVSxHQUFHLElBQTVCLENBbENxRCxDQW9DckQ7O0FBQ0EsTUFBTUUsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsR0FBWCxDQUFwQjtBQUNBLE1BQU1VLFlBQVksR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdQLElBQVgsQ0FBckI7QUFDQSxNQUFNUyxjQUFjLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxNQUFYLENBQXZCO0FBQ0EsTUFBTVEsY0FBYyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsTUFBWCxDQUF2QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVPLHdFQUFkO0FBQUEsOEJBQ0U7QUFBQSxrQkFBT047QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0dHLFlBSEgsa0JBR21CQyxjQUhuQixZQUdvQ0MsY0FIcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFTRCxDQW5ERDs7S0FBTXBCLGM7QUFxRE4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWE4N2Y4YjFkMjY2OWM3NjIwMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGRvd25UaW1lclR5cGUgZnJvbSBcIi4vY291bnRkb3duVGltZXJUeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY291bnRkb3duVGltZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQ291bnRkb3duVGltZXI6IEZDPGNvdW50ZG93blRpbWVyVHlwZT4gPSAoe30pID0+IHtcbiAgY29uc3Qgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IG5vd1RpbWUgPSBub3dEYXRlLmdldFRpbWUoKTtcblxuICAvL+aciOOBrzDjgYvjgonjgarjga7jgacx5bCP44GV44GP5oyH5a6aXG4gIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgyMDIyLCA1LCAxNSk7XG4gIGNvbnN0IGVuZFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKTtcblxuICBsZXQgZGlmZjtcbiAgaWYgKGVuZFRpbWUgPj0gbm93VGltZSkge1xuICAgIGRpZmYgPSBlbmRUaW1lIC0gbm93VGltZTtcbiAgfSBlbHNlIHtcbiAgICBkaWZmID0gMDtcbiAgfVxuXG4gIC8v5pelXG4gIGNvbnN0IGRheSA9IGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgLy/ml6XmnKrmuoBcbiAgY29uc3QgbGVzc0RheSA9IGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgLy/mmYJcbiAgY29uc3QgdGltZSA9IGxlc3NEYXkgLyAoMTAwMCAqIDYwICogNjApO1xuXG4gIC8v5pmC5pyq5rqAXG4gIGNvbnN0IGxlc3NUaW1lID0gbGVzc0RheSAlICgxMDAwICogNjAgKiA2MCk7XG5cbiAgLy/liIZcbiAgY29uc3QgbWludXRlID0gbGVzc1RpbWUgLyAoMTAwMCAqIDYwKTtcblxuICAvL+WIhuacqua6gFxuICBjb25zdCBsZXNzTWludXRlID0gbGVzc1RpbWUgJSAoMTAwMCAqIDYwKTtcblxuICAvL+enklxuICBjb25zdCBzZWNvbmQgPSBsZXNzTWludXRlIC8gMTAwMDtcblxuICAvL+WIh+OCiuaNqOOBplxuICBjb25zdCBydW5jYXRlZERheSA9IE1hdGguZmxvb3IoZGF5KTtcbiAgY29uc3QgcnVuY2F0ZWRUaW1lID0gTWF0aC5mbG9vcih0aW1lKTtcbiAgY29uc3QgcnVuY2F0ZWRNaW51dGUgPSBNYXRoLmZsb29yKG1pbnV0ZSk7XG4gIGNvbnN0IHJ1bmNhdGVkU2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+XG4gICAgICAgIDxzcGFuPntydW5jYXRlZERheX08L3NwYW4+XG4gICAgICAgIDxzcGFuPuaXpTwvc3Bhbj5cbiAgICAgICAge3J1bmNhdGVkVGltZX3mmYLplpN7cnVuY2F0ZWRNaW51dGV95YiGe3J1bmNhdGVkU2Vjb25kfeenklxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duVGltZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9