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
      now = _useState[0],
      setNow = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      daysLeft = _useState2[0],
      setDaysLeft = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      HoursLeft = _useState3[0],
      setHoursLeft = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      minutesLeft = _useState4[0],
      setMinutesLeft = _useState4[1]; //月は0からなので1小さく指定


  var endDate = new Date(2022, 5, 15);
  var endTime = endDate.getTime();
  var jk;

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
    var truncatedSecond = Math.floor(second);
    setDaysLeft(truncatedDay);
    setHoursLeft(truncatedHour);
    setMinutesLeft(truncatedMinute);
    setSecondsLeft(truncatedMinute);
  };

  setInterval(getCount, 1000);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [" ", daysLeft]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u65E5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: HoursLeft
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u6642\u9593"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: minutesLeft
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u5206"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: truncatedSecond
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u79D2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CountdownTimer, "3E1vkI4DhHZHA6RU8lJzMbJSM70=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJ1c2VTdGF0ZSIsIm5vdyIsInNldE5vdyIsImRheXNMZWZ0Iiwic2V0RGF5c0xlZnQiLCJIb3Vyc0xlZnQiLCJzZXRIb3Vyc0xlZnQiLCJtaW51dGVzTGVmdCIsInNldE1pbnV0ZXNMZWZ0IiwiZW5kRGF0ZSIsIkRhdGUiLCJlbmRUaW1lIiwiZ2V0VGltZSIsImprIiwiZ2V0Q291bnQiLCJub3dEYXRlIiwibm93VGltZSIsImRpZmYiLCJkYXkiLCJsZXNzRGF5IiwidGltZSIsImxlc3NIb3VyIiwibWludXRlIiwibGVzc01pbnV0ZSIsInNlY29uZCIsInRydW5jYXRlZERheSIsIk1hdGgiLCJmbG9vciIsInRydW5jYXRlZEhvdXIiLCJ0cnVuY2F0ZWRNaW51dGUiLCJ0cnVuY2F0ZWRTZWNvbmQiLCJzZXRTZWNvbmRzTGVmdCIsInNldEludGVydmFsIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7O0FBRUEsSUFBTUEsY0FBc0MsR0FBRyxTQUF6Q0EsY0FBeUMsT0FBUTtBQUFBOztBQUFBOztBQUFBLGtCQUMvQkMsK0NBQVEsRUFEdUI7QUFBQSxNQUM5Q0MsR0FEOEM7QUFBQSxNQUN6Q0MsTUFEeUM7O0FBQUEsbUJBRXJCRiwrQ0FBUSxFQUZhO0FBQUEsTUFFOUNHLFFBRjhDO0FBQUEsTUFFcENDLFdBRm9DOztBQUFBLG1CQUduQkosK0NBQVEsRUFIVztBQUFBLE1BRzlDSyxTQUg4QztBQUFBLE1BR25DQyxZQUhtQzs7QUFBQSxtQkFJZk4sK0NBQVEsRUFKTztBQUFBLE1BSTlDTyxXQUo4QztBQUFBLE1BSWpDQyxjQUppQyxrQkFNckQ7OztBQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsQ0FBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixFQUFoQjtBQUVBLE1BQUlDLEVBQUo7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNQyxPQUFPLEdBQUcsSUFBSUwsSUFBSixFQUFoQjtBQUNBLFFBQU1NLE9BQU8sR0FBR0QsT0FBTyxDQUFDSCxPQUFSLEVBQWhCO0FBRUEsUUFBSUssSUFBSjs7QUFDQSxRQUFJTixPQUFPLElBQUlLLE9BQWYsRUFBd0I7QUFDdEJDLFVBQUksR0FBR04sT0FBTyxHQUFHSyxPQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMQyxVQUFJLEdBQUcsQ0FBUDtBQUNELEtBVG9CLENBV3JCOzs7QUFDQSxRQUFNQyxHQUFHLEdBQUdELElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQWhCLENBWnFCLENBY3JCOztBQUNBLFFBQU1FLE9BQU8sR0FBR0YsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBcEIsQ0FmcUIsQ0FpQnJCOztBQUNBLFFBQU1HLElBQUksR0FBR0QsT0FBTyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQXBCLENBbEJxQixDQW9CckI7O0FBQ0EsUUFBTUUsUUFBUSxHQUFHRixPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBeEIsQ0FyQnFCLENBdUJyQjs7QUFDQSxRQUFNRyxNQUFNLEdBQUdELFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBdkIsQ0F4QnFCLENBMEJyQjs7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBM0IsQ0EzQnFCLENBNkJyQjs7QUFDQSxRQUFNRyxNQUFNLEdBQUdELFVBQVUsR0FBRyxJQUE1QixDQTlCcUIsQ0FnQ3JCOztBQUNBLFFBQU1FLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQVgsQ0FBckI7QUFDQSxRQUFNVSxhQUFhLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxJQUFYLENBQXRCO0FBQ0EsUUFBTVMsZUFBZSxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBWCxDQUF4QjtBQUNBLFFBQU1RLGVBQWUsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQVgsQ0FBeEI7QUFDQXBCLGVBQVcsQ0FBQ3FCLFlBQUQsQ0FBWDtBQUNBbkIsZ0JBQVksQ0FBQ3NCLGFBQUQsQ0FBWjtBQUVBcEIsa0JBQWMsQ0FBQ3FCLGVBQUQsQ0FBZDtBQUNBRSxrQkFBYyxDQUFDRixlQUFELENBQWQ7QUFDRCxHQTFDRDs7QUE0Q0FHLGFBQVcsQ0FBQ2xCLFFBQUQsRUFBVyxJQUFYLENBQVg7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFFbUIsd0VBQWQ7QUFBQSw4QkFDRTtBQUFBLHdCQUFROUIsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFJRTtBQUFBLGtCQUFPRTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFPRTtBQUFBLGtCQUFPRTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFTRTtBQUFBLGtCQUFPdUI7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBZ0JELENBekVEOztHQUFNL0IsYzs7S0FBQUEsYztBQTJFTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZjk0NWJkZmI5MzYxNzFlZDc3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyVHlwZSBmcm9tIFwiLi9jb3VudGRvd25UaW1lclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogRkM8Y291bnRkb3duVGltZXJUeXBlPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuICBjb25zdCBbZGF5c0xlZnQsIHNldERheXNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcbiAgY29uc3QgW0hvdXJzTGVmdCwgc2V0SG91cnNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcbiAgY29uc3QgW21pbnV0ZXNMZWZ0LCBzZXRNaW51dGVzTGVmdF0gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG5cbiAgLy/mnIjjga8w44GL44KJ44Gq44Gu44GnMeWwj+OBleOBj+aMh+WumlxuICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoMjAyMiwgNSwgMTUpO1xuICBjb25zdCBlbmRUaW1lID0gZW5kRGF0ZS5nZXRUaW1lKCk7XG5cbiAgbGV0IGprO1xuXG4gIGNvbnN0IGdldENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG5vd1RpbWUgPSBub3dEYXRlLmdldFRpbWUoKTtcblxuICAgIGxldCBkaWZmO1xuICAgIGlmIChlbmRUaW1lID49IG5vd1RpbWUpIHtcbiAgICAgIGRpZmYgPSBlbmRUaW1lIC0gbm93VGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlmZiA9IDA7XG4gICAgfVxuXG4gICAgLy/ml6VcbiAgICBjb25zdCBkYXkgPSBkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gICAgLy/ml6XmnKrmuoBcbiAgICBjb25zdCBsZXNzRGF5ID0gZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAgIC8v5pmCXG4gICAgY29uc3QgdGltZSA9IGxlc3NEYXkgLyAoMTAwMCAqIDYwICogNjApO1xuXG4gICAgLy/mmYLmnKrmuoBcbiAgICBjb25zdCBsZXNzSG91ciA9IGxlc3NEYXkgJSAoMTAwMCAqIDYwICogNjApO1xuXG4gICAgLy/liIZcbiAgICBjb25zdCBtaW51dGUgPSBsZXNzSG91ciAvICgxMDAwICogNjApO1xuXG4gICAgLy/liIbmnKrmuoBcbiAgICBjb25zdCBsZXNzTWludXRlID0gbGVzc0hvdXIgJSAoMTAwMCAqIDYwKTtcblxuICAgIC8v56eSXG4gICAgY29uc3Qgc2Vjb25kID0gbGVzc01pbnV0ZSAvIDEwMDA7XG5cbiAgICAvL+WIh+OCiuaNqOOBplxuICAgIGNvbnN0IHRydW5jYXRlZERheSA9IE1hdGguZmxvb3IoZGF5KTtcbiAgICBjb25zdCB0cnVuY2F0ZWRIb3VyID0gTWF0aC5mbG9vcih0aW1lKTtcbiAgICBjb25zdCB0cnVuY2F0ZWRNaW51dGUgPSBNYXRoLmZsb29yKG1pbnV0ZSk7XG4gICAgY29uc3QgdHJ1bmNhdGVkU2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQpO1xuICAgIHNldERheXNMZWZ0KHRydW5jYXRlZERheSk7XG4gICAgc2V0SG91cnNMZWZ0KHRydW5jYXRlZEhvdXIpO1xuXG4gICAgc2V0TWludXRlc0xlZnQodHJ1bmNhdGVkTWludXRlKTtcbiAgICBzZXRTZWNvbmRzTGVmdCh0cnVuY2F0ZWRNaW51dGUpO1xuICB9O1xuXG4gIHNldEludGVydmFsKGdldENvdW50LCAxMDAwKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT5cbiAgICAgICAgPHNwYW4+IHtkYXlzTGVmdH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuaXpTwvc3Bhbj5cblxuICAgICAgICA8c3Bhbj57SG91cnNMZWZ0fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5pmC6ZaTPC9zcGFuPlxuXG4gICAgICAgIDxzcGFuPnttaW51dGVzTGVmdH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuWIhjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3RydW5jYXRlZFNlY29uZH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuenkjwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==