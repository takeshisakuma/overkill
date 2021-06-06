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

    var second = lessMinute / 1000; //切り捨て

    var truncatedDay = Math.floor(day);
    var truncatedHour = Math.floor(time);
    var truncatedMinute = Math.floor(minute);
    var truncatedSecond = Math.floor(second).padStart(2, "0"); //stateの値を更新

    setDaysLeft(truncatedDay);
    setHoursLeft(truncatedHour);
    setMinutesLeft(truncatedMinute);
    setSecondsLeft(truncatedSecond);
  };

  setInterval(getCount, 1000);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [" ", daysLeft]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u65E5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: HoursLeft
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u6642\u9593"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: minutesLeft
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u5206"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: secondsLeft
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u79D2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJ1c2VTdGF0ZSIsImRheXNMZWZ0Iiwic2V0RGF5c0xlZnQiLCJIb3Vyc0xlZnQiLCJzZXRIb3Vyc0xlZnQiLCJtaW51dGVzTGVmdCIsInNldE1pbnV0ZXNMZWZ0Iiwic2Vjb25kc0xlZnQiLCJzZXRTZWNvbmRzTGVmdCIsImVuZERhdGUiLCJEYXRlIiwiZW5kVGltZSIsImdldFRpbWUiLCJnZXRDb3VudCIsIm5vd0RhdGUiLCJub3dUaW1lIiwiZGlmZiIsImRheSIsImxlc3NEYXkiLCJ0aW1lIiwibGVzc0hvdXIiLCJtaW51dGUiLCJsZXNzTWludXRlIiwic2Vjb25kIiwidHJ1bmNhdGVkRGF5IiwiTWF0aCIsImZsb29yIiwidHJ1bmNhdGVkSG91ciIsInRydW5jYXRlZE1pbnV0ZSIsInRydW5jYXRlZFNlY29uZCIsInBhZFN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxjQUFzQyxHQUFHLFNBQXpDQSxjQUF5QyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3JCQywrQ0FBUSxFQURhO0FBQUEsTUFDOUNDLFFBRDhDO0FBQUEsTUFDcENDLFdBRG9DOztBQUFBLG1CQUVuQkYsK0NBQVEsRUFGVztBQUFBLE1BRTlDRyxTQUY4QztBQUFBLE1BRW5DQyxZQUZtQzs7QUFBQSxtQkFHZkosK0NBQVEsRUFITztBQUFBLE1BRzlDSyxXQUg4QztBQUFBLE1BR2pDQyxjQUhpQzs7QUFBQSxtQkFJZk4sK0NBQVEsRUFKTztBQUFBLE1BSTlDTyxXQUo4QztBQUFBLE1BSWpDQyxjQUppQyxrQkFNckQ7OztBQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYs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YTFjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyVHlwZSBmcm9tIFwiLi9jb3VudGRvd25UaW1lclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogRkM8Y291bnRkb3duVGltZXJUeXBlPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbZGF5c0xlZnQsIHNldERheXNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcbiAgY29uc3QgW0hvdXJzTGVmdCwgc2V0SG91cnNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcbiAgY29uc3QgW21pbnV0ZXNMZWZ0LCBzZXRNaW51dGVzTGVmdF0gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG4gIGNvbnN0IFtzZWNvbmRzTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIC8v5pyI44GvMOOBi+OCieOBquOBruOBpzHlsI/jgZXjgY/mjIflrppcbiAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKDIwMjIsIDUsIDE1KTtcbiAgY29uc3QgZW5kVGltZSA9IGVuZERhdGUuZ2V0VGltZSgpO1xuXG4gIGNvbnN0IGdldENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG5vd1RpbWUgPSBub3dEYXRlLmdldFRpbWUoKTtcblxuICAgIGxldCBkaWZmO1xuICAgIGlmIChlbmRUaW1lID49IG5vd1RpbWUpIHtcbiAgICAgIGRpZmYgPSBlbmRUaW1lIC0gbm93VGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlmZiA9IDA7XG4gICAgfVxuXG4gICAgLy/ml6VcbiAgICBjb25zdCBkYXkgPSBkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gICAgLy/ml6XmnKrmuoBcbiAgICBjb25zdCBsZXNzRGF5ID0gZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAgIC8v5pmCXG4gICAgY29uc3QgdGltZSA9IGxlc3NEYXkgLyAoMTAwMCAqIDYwICogNjApO1xuXG4gICAgLy/mmYLmnKrmuoBcbiAgICBjb25zdCBsZXNzSG91ciA9IGxlc3NEYXkgJSAoMTAwMCAqIDYwICogNjApO1xuXG4gICAgLy/liIZcbiAgICBjb25zdCBtaW51dGUgPSBsZXNzSG91ciAvICgxMDAwICogNjApO1xuXG4gICAgLy/liIbmnKrmuoBcbiAgICBjb25zdCBsZXNzTWludXRlID0gbGVzc0hvdXIgJSAoMTAwMCAqIDYwKTtcblxuICAgIC8v56eSXG4gICAgY29uc3Qgc2Vjb25kID0gbGVzc01pbnV0ZSAvIDEwMDA7XG5cbiAgICAvL+WIh+OCiuaNqOOBplxuICAgIGNvbnN0IHRydW5jYXRlZERheSA9IE1hdGguZmxvb3IoZGF5KTtcbiAgICBjb25zdCB0cnVuY2F0ZWRIb3VyID0gTWF0aC5mbG9vcih0aW1lKTtcbiAgICBjb25zdCB0cnVuY2F0ZWRNaW51dGUgPSBNYXRoLmZsb29yKG1pbnV0ZSk7XG4gICAgY29uc3QgdHJ1bmNhdGVkU2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblxuICAgIC8vc3RhdGXjga7lgKTjgpLmm7TmlrBcbiAgICBzZXREYXlzTGVmdCh0cnVuY2F0ZWREYXkpO1xuICAgIHNldEhvdXJzTGVmdCh0cnVuY2F0ZWRIb3VyKTtcbiAgICBzZXRNaW51dGVzTGVmdCh0cnVuY2F0ZWRNaW51dGUpO1xuICAgIHNldFNlY29uZHNMZWZ0KHRydW5jYXRlZFNlY29uZCk7XG4gIH07XG5cbiAgc2V0SW50ZXJ2YWwoZ2V0Q291bnQsIDEwMDApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PlxuICAgICAgICA8c3Bhbj4ge2RheXNMZWZ0fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5pelPC9zcGFuPlxuXG4gICAgICAgIDxzcGFuPntIb3Vyc0xlZnR9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7mmYLplpM8L3NwYW4+XG5cbiAgICAgICAgPHNwYW4+e21pbnV0ZXNMZWZ0fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5YiGPC9zcGFuPlxuICAgICAgICA8c3Bhbj57c2Vjb25kc0xlZnR9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7np5I8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=