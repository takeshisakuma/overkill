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

  //月は0からなので1小さく指定
  var endDate = new Date(2022, 5, 15);
  var endTime = endDate.getTime();

  var getCount = function getCount() {
    var nowDate = new Date();
    var nowTime = nowDate.getTime();
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
  };

  setTimeout(getCount, 1000);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: runcatedDay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u65E5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: runcatedTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u6642\u9593"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: runcatedMinute
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u5206"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: runcatedSecond
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u79D2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJlbmREYXRlIiwiRGF0ZSIsImVuZFRpbWUiLCJnZXRUaW1lIiwiZ2V0Q291bnQiLCJub3dEYXRlIiwibm93VGltZSIsImRpZmYiLCJkYXkiLCJsZXNzRGF5IiwidGltZSIsImxlc3NUaW1lIiwibWludXRlIiwibGVzc01pbnV0ZSIsInNlY29uZCIsInJ1bmNhdGVkRGF5IiwiTWF0aCIsImZsb29yIiwicnVuY2F0ZWRUaW1lIiwicnVuY2F0ZWRNaW51dGUiLCJydW5jYXRlZFNlY29uZCIsInNldFRpbWVvdXQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLElBQU1BLGNBQXNDLEdBQUcsU0FBekNBLGNBQXlDLE9BQVE7QUFBQTs7QUFDckQ7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixPQUFPLENBQUNHLE9BQVIsRUFBaEI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNQyxPQUFPLEdBQUcsSUFBSUosSUFBSixFQUFoQjtBQUNBLFFBQU1LLE9BQU8sR0FBR0QsT0FBTyxDQUFDRixPQUFSLEVBQWhCO0FBRUEsUUFBSUksSUFBSjs7QUFDQSxRQUFJTCxPQUFPLElBQUlJLE9BQWYsRUFBd0I7QUFDdEJDLFVBQUksR0FBR0wsT0FBTyxHQUFHSSxPQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMQyxVQUFJLEdBQUcsQ0FBUDtBQUNELEtBVG9CLENBV3JCOzs7QUFDQSxRQUFNQyxHQUFHLEdBQUdELElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQWhCLENBWnFCLENBY3JCOztBQUNBLFFBQU1FLE9BQU8sR0FBR0YsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBcEIsQ0FmcUIsQ0FpQnJCOztBQUNBLFFBQU1HLElBQUksR0FBR0QsT0FBTyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQXBCLENBbEJxQixDQW9CckI7O0FBQ0EsUUFBTUUsUUFBUSxHQUFHRixPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBeEIsQ0FyQnFCLENBdUJyQjs7QUFDQSxRQUFNRyxNQUFNLEdBQUdELFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBdkIsQ0F4QnFCLENBMEJyQjs7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBM0IsQ0EzQnFCLENBNkJyQjs7QUFDQSxRQUFNRyxNQUFNLEdBQUdELFVBQVUsR0FBRyxJQUE1QixDQTlCcUIsQ0FnQ3JCOztBQUNBLFFBQU1FLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQVgsQ0FBcEI7QUFDQSxRQUFNVSxZQUFZLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxJQUFYLENBQXJCO0FBQ0EsUUFBTVMsY0FBYyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBWCxDQUF2QjtBQUNBLFFBQU1RLGNBQWMsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQVgsQ0FBdkI7QUFDRCxHQXJDRDs7QUF1Q0FPLFlBQVUsQ0FBQ2pCLFFBQUQsRUFBVyxJQUFYLENBQVY7QUFFQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFFa0Isd0VBQWQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFPUDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFBLGtCQUFPRztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUFBLGtCQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFPRTtBQUFBLGtCQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFjRCxDQTVERDs7S0FBTXJCLGM7QUE4RE4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjIyODhiMDU2NDAyY2NkOWUyZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGRvd25UaW1lclR5cGUgZnJvbSBcIi4vY291bnRkb3duVGltZXJUeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY291bnRkb3duVGltZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQ291bnRkb3duVGltZXI6IEZDPGNvdW50ZG93blRpbWVyVHlwZT4gPSAoe30pID0+IHtcbiAgLy/mnIjjga8w44GL44KJ44Gq44Gu44GnMeWwj+OBleOBj+aMh+WumlxuICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoMjAyMiwgNSwgMTUpO1xuICBjb25zdCBlbmRUaW1lID0gZW5kRGF0ZS5nZXRUaW1lKCk7XG5cbiAgY29uc3QgZ2V0Q291bnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgbm93VGltZSA9IG5vd0RhdGUuZ2V0VGltZSgpO1xuXG4gICAgbGV0IGRpZmY7XG4gICAgaWYgKGVuZFRpbWUgPj0gbm93VGltZSkge1xuICAgICAgZGlmZiA9IGVuZFRpbWUgLSBub3dUaW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaWZmID0gMDtcbiAgICB9XG5cbiAgICAvL+aXpVxuICAgIGNvbnN0IGRheSA9IGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgICAvL+aXpeacqua6gFxuICAgIGNvbnN0IGxlc3NEYXkgPSBkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gICAgLy/mmYJcbiAgICBjb25zdCB0aW1lID0gbGVzc0RheSAvICgxMDAwICogNjAgKiA2MCk7XG5cbiAgICAvL+aZguacqua6gFxuICAgIGNvbnN0IGxlc3NUaW1lID0gbGVzc0RheSAlICgxMDAwICogNjAgKiA2MCk7XG5cbiAgICAvL+WIhlxuICAgIGNvbnN0IG1pbnV0ZSA9IGxlc3NUaW1lIC8gKDEwMDAgKiA2MCk7XG5cbiAgICAvL+WIhuacqua6gFxuICAgIGNvbnN0IGxlc3NNaW51dGUgPSBsZXNzVGltZSAlICgxMDAwICogNjApO1xuXG4gICAgLy/np5JcbiAgICBjb25zdCBzZWNvbmQgPSBsZXNzTWludXRlIC8gMTAwMDtcblxuICAgIC8v5YiH44KK5o2o44GmXG4gICAgY29uc3QgcnVuY2F0ZWREYXkgPSBNYXRoLmZsb29yKGRheSk7XG4gICAgY29uc3QgcnVuY2F0ZWRUaW1lID0gTWF0aC5mbG9vcih0aW1lKTtcbiAgICBjb25zdCBydW5jYXRlZE1pbnV0ZSA9IE1hdGguZmxvb3IobWludXRlKTtcbiAgICBjb25zdCBydW5jYXRlZFNlY29uZCA9IE1hdGguZmxvb3Ioc2Vjb25kKTtcbiAgfTtcblxuICBzZXRUaW1lb3V0KGdldENvdW50LCAxMDAwKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PlxuICAgICAgICA8c3Bhbj57cnVuY2F0ZWREYXl9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7ml6U8L3NwYW4+XG4gICAgICAgIDxzcGFuPntydW5jYXRlZFRpbWV9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7mmYLplpM8L3NwYW4+XG4gICAgICAgIDxzcGFuPntydW5jYXRlZE1pbnV0ZX08L3NwYW4+XG4gICAgICAgIDxzcGFuPuWIhjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3J1bmNhdGVkU2Vjb25kfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+56eSPC9zcGFuPlxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duVGltZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9