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
    _this = undefined,
    _s = $RefreshSig$();




var CountdownTimer = function CountdownTimer(_ref) {
  _s();

  (0,C_Users_facto_Desktop_overkill_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      daysLeft = _useState[0],
      setDaysLeft = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      HoursLeft = _useState2[0],
      setHoursLeft = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      minutesLeft = _useState3[0],
      setMinutesLeft = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      secondsLeft = _useState4[0],
      setSecondsLeft = _useState4[1]; //月は0からなので1小さく指定


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

    var lessHour = lessDay % (1000 * 60 * 60); //分

    var minute = lessHour / (1000 * 60); //分未満

    var lessMinute = lessHour % (1000 * 60); //秒

    var second = lessMinute / 1000; //少数点以下の切り捨てと0パディング

    var truncatedDay = Math.floor(day).toString().padStart(3, "0");
    var truncatedHour = Math.floor(time).toString().padStart(2, "0");
    var truncatedMinute = Math.floor(minute).toString().padStart(2, "0");
    var truncatedSecond = Math.floor(second).toString().padStart(2, "0"); //stateの値を更新

    setDaysLeft(truncatedDay);
    setHoursLeft(truncatedHour);
    setMinutesLeft(truncatedMinute);
    setSecondsLeft(truncatedSecond);
  }; //1秒ごとに実行


  setInterval(getCount, 1000);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [" ", daysLeft]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u65E5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: HoursLeft
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u6642\u9593"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: minutesLeft
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u5206"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: secondsLeft
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u79D2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CountdownTimer, "A4yNwIPkxBB6WpPEFyn3q9rdICg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJ1c2VTdGF0ZSIsImRheXNMZWZ0Iiwic2V0RGF5c0xlZnQiLCJIb3Vyc0xlZnQiLCJzZXRIb3Vyc0xlZnQiLCJtaW51dGVzTGVmdCIsInNldE1pbnV0ZXNMZWZ0Iiwic2Vjb25kc0xlZnQiLCJzZXRTZWNvbmRzTGVmdCIsImVuZERhdGUiLCJEYXRlIiwiZW5kVGltZSIsImdldFRpbWUiLCJnZXRDb3VudCIsIm5vd0RhdGUiLCJub3dUaW1lIiwiZGlmZiIsImRheSIsImxlc3NEYXkiLCJ0aW1lIiwibGVzc0hvdXIiLCJtaW51dGUiLCJsZXNzTWludXRlIiwic2Vjb25kIiwidHJ1bmNhdGVkRGF5IiwiTWF0aCIsImZsb29yIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInRydW5jYXRlZEhvdXIiLCJ0cnVuY2F0ZWRNaW51dGUiLCJ0cnVuY2F0ZWRTZWNvbmQiLCJzZXRJbnRlcnZhbCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLElBQU1BLGNBQXNDLEdBQUcsU0FBekNBLGNBQXlDLE9BQVE7QUFBQTs7QUFBQTs7QUFBQSxrQkFDckJDLCtDQUFRLEVBRGE7QUFBQSxNQUM5Q0MsUUFEOEM7QUFBQSxNQUNwQ0MsV0FEb0M7O0FBQUEsbUJBRW5CRiwrQ0FBUSxFQUZXO0FBQUEsTUFFOUNHLFNBRjhDO0FBQUEsTUFFbkNDLFlBRm1DOztBQUFBLG1CQUdmSiwrQ0FBUSxFQUhPO0FBQUEsTUFHOUNLLFdBSDhDO0FBQUEsTUFHakNDLGNBSGlDOztBQUFBLG1CQUlmTiwrQ0FBUSxFQUpPO0FBQUEsTUFJOUNPLFdBSjhDO0FBQUEsTUFJakNDLGNBSmlDLGtCQU1yRDs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLElBQUlDLElBQUosQ0FBUyxJQUFU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O0FBQUEsZUFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFnQkQsQ0ExRUQ7O0dBQU1SLGM7O0tBQUFBLGM7QUE0RU4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDViZDI2OTQ2YzhmMTMzYmExZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGRvd25UaW1lclR5cGUgZnJvbSBcIi4vY291bnRkb3duVGltZXJUeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY291bnRkb3duVGltZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQ291bnRkb3duVGltZXI6IEZDPGNvdW50ZG93blRpbWVyVHlwZT4gPSAoe30pID0+IHtcbiAgY29uc3QgW2RheXNMZWZ0LCBzZXREYXlzTGVmdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtIb3Vyc0xlZnQsIHNldEhvdXJzTGVmdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFttaW51dGVzTGVmdCwgc2V0TWludXRlc0xlZnRdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbc2Vjb25kc0xlZnQsIHNldFNlY29uZHNMZWZ0XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcblxuICAvL+aciOOBrzDjgYvjgonjgarjga7jgacx5bCP44GV44GP5oyH5a6aXG4gIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgyMDIyLCA1LCAxNSk7XG4gIGNvbnN0IGVuZFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKTtcblxuICBjb25zdCBnZXRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBub3dUaW1lID0gbm93RGF0ZS5nZXRUaW1lKCk7XG5cbiAgICBsZXQgZGlmZjtcbiAgICBpZiAoZW5kVGltZSA+PSBub3dUaW1lKSB7XG4gICAgICBkaWZmID0gZW5kVGltZSAtIG5vd1RpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpZmYgPSAwO1xuICAgIH1cblxuICAgIC8v5pelXG4gICAgY29uc3QgZGF5ID0gZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAgIC8v5pel5pyq5rqAXG4gICAgY29uc3QgbGVzc0RheSA9IGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgICAvL+aZglxuICAgIGNvbnN0IHRpbWUgPSBsZXNzRGF5IC8gKDEwMDAgKiA2MCAqIDYwKTtcblxuICAgIC8v5pmC5pyq5rqAXG4gICAgY29uc3QgbGVzc0hvdXIgPSBsZXNzRGF5ICUgKDEwMDAgKiA2MCAqIDYwKTtcblxuICAgIC8v5YiGXG4gICAgY29uc3QgbWludXRlID0gbGVzc0hvdXIgLyAoMTAwMCAqIDYwKTtcblxuICAgIC8v5YiG5pyq5rqAXG4gICAgY29uc3QgbGVzc01pbnV0ZSA9IGxlc3NIb3VyICUgKDEwMDAgKiA2MCk7XG5cbiAgICAvL+enklxuICAgIGNvbnN0IHNlY29uZCA9IGxlc3NNaW51dGUgLyAxMDAwO1xuXG4gICAgLy/lsJHmlbDngrnku6XkuIvjga7liIfjgormjajjgabjgagw44OR44OH44Kj44Oz44KwXG4gICAgY29uc3QgdHJ1bmNhdGVkRGF5ID0gTWF0aC5mbG9vcihkYXkpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgXCIwXCIpO1xuICAgIGNvbnN0IHRydW5jYXRlZEhvdXIgPSBNYXRoLmZsb29yKHRpbWUpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGNvbnN0IHRydW5jYXRlZE1pbnV0ZSA9IE1hdGguZmxvb3IobWludXRlKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBjb25zdCB0cnVuY2F0ZWRTZWNvbmQgPSBNYXRoLmZsb29yKHNlY29uZCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cbiAgICAvL3N0YXRl44Gu5YCk44KS5pu05pawXG4gICAgc2V0RGF5c0xlZnQodHJ1bmNhdGVkRGF5KTtcbiAgICBzZXRIb3Vyc0xlZnQodHJ1bmNhdGVkSG91cik7XG4gICAgc2V0TWludXRlc0xlZnQodHJ1bmNhdGVkTWludXRlKTtcbiAgICBzZXRTZWNvbmRzTGVmdCh0cnVuY2F0ZWRTZWNvbmQpO1xuICB9O1xuXG4gIC8vMeenkuOBlOOBqOOBq+Wun+ihjFxuICBzZXRJbnRlcnZhbChnZXRDb3VudCwgMTAwMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT5cbiAgICAgICAgPHNwYW4+IHtkYXlzTGVmdH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuaXpTwvc3Bhbj5cblxuICAgICAgICA8c3Bhbj57SG91cnNMZWZ0fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5pmC6ZaTPC9zcGFuPlxuXG4gICAgICAgIDxzcGFuPnttaW51dGVzTGVmdH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuWIhjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3NlY29uZHNMZWZ0fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+56eSPC9zcGFuPlxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duVGltZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9