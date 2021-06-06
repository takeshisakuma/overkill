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
        children: secondsLeft
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJ1c2VTdGF0ZSIsIm5vdyIsInNldE5vdyIsImRheXNMZWZ0Iiwic2V0RGF5c0xlZnQiLCJIb3Vyc0xlZnQiLCJzZXRIb3Vyc0xlZnQiLCJtaW51dGVzTGVmdCIsInNldE1pbnV0ZXNMZWZ0IiwiZW5kRGF0ZSIsIkRhdGUiLCJlbmRUaW1lIiwiZ2V0VGltZSIsImprIiwiZ2V0Q291bnQiLCJub3dEYXRlIiwibm93VGltZSIsImRpZmYiLCJkYXkiLCJsZXNzRGF5IiwidGltZSIsImxlc3NIb3VyIiwibWludXRlIiwibGVzc01pbnV0ZSIsInNlY29uZCIsInRydW5jYXRlZERheSIsIk1hdGgiLCJmbG9vciIsInRydW5jYXRlZEhvdXIiLCJ0cnVuY2F0ZWRNaW51dGUiLCJ0cnVuY2F0ZWRTZWNvbmQiLCJzZXRTZWNvbmRzTGVmdCIsInNldEludGVydmFsIiwic3R5bGVzIiwic2Vjb25kc0xlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxjQUFzQyxHQUFHLFNBQXpDQSxjQUF5QyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsa0JBQy9CQywrQ0FBUSxFQUR1QjtBQUFBLE1BQzlDQyxHQUQ4QztBQUFBLE1BQ3pDQyxNQUR5Qzs7QUFBQSxtQkFFckJGLCtDQUFRLEVBRmE7QUFBQSxNQUU5Q0csUUFGOEM7QUFBQSxNQUVwQ0MsV0FGb0M7O0FBQUEsbUJBR25CSiwrQ0FBUSxFQUhXO0FBQUEsTUFHOUNLLFNBSDhDO0FBQUEsTUFHbkNDLFlBSG1DOztBQUFBLG1CQUlmTiwrQ0FBUSxFQUpPO0FBQUEsTUFJOUNPLFdBSjhDO0FBQUEsTUFJakNDLGNBSmlDLGtCQU1yRDs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLElBQUlDLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixDQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxPQUFSLEVBQWhCO0FBRUEsTUFBSUMsRUFBSjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFFBQU1DLE9BQU8sR0FBRyxJQUFJTCxJQUFKLEVBQWhCO0FBQ0EsUUFBTU0sT0FBTyxHQUFHRCxPQUFPLENBQUNILE9BQVIsRUFBaEI7QUFFQSxRQUFJSyxJQUFKOztBQUNBLFFBQUlOLE9BQU8sSUFBSUssT0FBZixFQUF3QjtBQUN0QkMsVUFBSSxHQUFHTixPQUFPLEdBQUdLLE9BQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xDLFVBQUksR0FBRyxDQUFQO0FBQ0QsS0FUb0IsQ0FXckI7OztBQUNBLFFBQU1DLEdBQUcsR0FBR0QsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBaEIsQ0FacUIsQ0FjckI7O0FBQ0EsUUFBTUUsT0FBTyxHQUFHRixJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFwQixDQWZxQixDQWlCckI7O0FBQ0EsUUFBTUcsSUFBSSxHQUFHRCxPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBcEIsQ0FsQnFCLENBb0JyQjs7QUFDQSxRQUFNRSxRQUFRLEdBQUdGLE9BQU8sSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUF4QixDQXJCcUIsQ0F1QnJCOztBQUNBLFFBQU1HLE1BQU0sR0FBR0QsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUF2QixDQXhCcUIsQ0EwQnJCOztBQUNBLFFBQU1FLFVBQVUsR0FBR0YsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUEzQixDQTNCcUIsQ0E2QnJCOztBQUNBLFFBQU1HLE1BQU0sR0FBR0QsVUFBVSxHQUFHLElBQTVCLENBOUJxQixDQWdDckI7O0FBQ0EsUUFBTUUsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsR0FBWCxDQUFyQjtBQUNBLFFBQU1VLGFBQWEsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdQLElBQVgsQ0FBdEI7QUFDQSxRQUFNUyxlQUFlLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxNQUFYLENBQXhCO0FBQ0EsUUFBTVEsZUFBZSxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsTUFBWCxDQUF4QjtBQUNBcEIsZUFBVyxDQUFDcUIsWUFBRCxDQUFYO0FBQ0FuQixnQkFBWSxDQUFDc0IsYUFBRCxDQUFaO0FBRUFwQixrQkFBYyxDQUFDcUIsZUFBRCxDQUFkO0FBQ0FFLGtCQUFjLENBQUNGLGVBQUQsQ0FBZDtBQUNELEdBMUNEOztBQTRDQUcsYUFBVyxDQUFDbEIsUUFBRCxFQUFXLElBQVgsQ0FBWDtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVtQix3RUFBZDtBQUFBLDhCQUNFO0FBQUEsd0JBQVE5QixRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFO0FBQUEsa0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU9FO0FBQUEsa0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQVNFO0FBQUEsa0JBQU8yQjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFnQkQsQ0F6RUQ7O0dBQU1uQyxjOztLQUFBQSxjO0FBMkVOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4MmIzMTViNTZiMDBmZTgxYjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRkb3duVGltZXJUeXBlIGZyb20gXCIuL2NvdW50ZG93blRpbWVyVHlwZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvdW50ZG93blRpbWVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IENvdW50ZG93blRpbWVyOiBGQzxjb3VudGRvd25UaW1lclR5cGU+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtub3csIHNldE5vd10gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG4gIGNvbnN0IFtkYXlzTGVmdCwgc2V0RGF5c0xlZnRdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuICBjb25zdCBbSG91cnNMZWZ0LCBzZXRIb3Vyc0xlZnRdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuICBjb25zdCBbbWludXRlc0xlZnQsIHNldE1pbnV0ZXNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcblxuICAvL+aciOOBrzDjgYvjgonjgarjga7jgacx5bCP44GV44GP5oyH5a6aXG4gIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgyMDIyLCA1LCAxNSk7XG4gIGNvbnN0IGVuZFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKTtcblxuICBsZXQgams7XG5cbiAgY29uc3QgZ2V0Q291bnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgbm93VGltZSA9IG5vd0RhdGUuZ2V0VGltZSgpO1xuXG4gICAgbGV0IGRpZmY7XG4gICAgaWYgKGVuZFRpbWUgPj0gbm93VGltZSkge1xuICAgICAgZGlmZiA9IGVuZFRpbWUgLSBub3dUaW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaWZmID0gMDtcbiAgICB9XG5cbiAgICAvL+aXpVxuICAgIGNvbnN0IGRheSA9IGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgICAvL+aXpeacqua6gFxuICAgIGNvbnN0IGxlc3NEYXkgPSBkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gICAgLy/mmYJcbiAgICBjb25zdCB0aW1lID0gbGVzc0RheSAvICgxMDAwICogNjAgKiA2MCk7XG5cbiAgICAvL+aZguacqua6gFxuICAgIGNvbnN0IGxlc3NIb3VyID0gbGVzc0RheSAlICgxMDAwICogNjAgKiA2MCk7XG5cbiAgICAvL+WIhlxuICAgIGNvbnN0IG1pbnV0ZSA9IGxlc3NIb3VyIC8gKDEwMDAgKiA2MCk7XG5cbiAgICAvL+WIhuacqua6gFxuICAgIGNvbnN0IGxlc3NNaW51dGUgPSBsZXNzSG91ciAlICgxMDAwICogNjApO1xuXG4gICAgLy/np5JcbiAgICBjb25zdCBzZWNvbmQgPSBsZXNzTWludXRlIC8gMTAwMDtcblxuICAgIC8v5YiH44KK5o2o44GmXG4gICAgY29uc3QgdHJ1bmNhdGVkRGF5ID0gTWF0aC5mbG9vcihkYXkpO1xuICAgIGNvbnN0IHRydW5jYXRlZEhvdXIgPSBNYXRoLmZsb29yKHRpbWUpO1xuICAgIGNvbnN0IHRydW5jYXRlZE1pbnV0ZSA9IE1hdGguZmxvb3IobWludXRlKTtcbiAgICBjb25zdCB0cnVuY2F0ZWRTZWNvbmQgPSBNYXRoLmZsb29yKHNlY29uZCk7XG4gICAgc2V0RGF5c0xlZnQodHJ1bmNhdGVkRGF5KTtcbiAgICBzZXRIb3Vyc0xlZnQodHJ1bmNhdGVkSG91cik7XG5cbiAgICBzZXRNaW51dGVzTGVmdCh0cnVuY2F0ZWRNaW51dGUpO1xuICAgIHNldFNlY29uZHNMZWZ0KHRydW5jYXRlZE1pbnV0ZSk7XG4gIH07XG5cbiAgc2V0SW50ZXJ2YWwoZ2V0Q291bnQsIDEwMDApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PlxuICAgICAgICA8c3Bhbj4ge2RheXNMZWZ0fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5pelPC9zcGFuPlxuXG4gICAgICAgIDxzcGFuPntIb3Vyc0xlZnR9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7mmYLplpM8L3NwYW4+XG5cbiAgICAgICAgPHNwYW4+e21pbnV0ZXNMZWZ0fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5YiGPC9zcGFuPlxuICAgICAgICA8c3Bhbj57c2Vjb25kc0xlZnR9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7np5I8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=