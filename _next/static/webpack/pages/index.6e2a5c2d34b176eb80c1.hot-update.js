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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJ1c2VTdGF0ZSIsImRheXNMZWZ0Iiwic2V0RGF5c0xlZnQiLCJIb3Vyc0xlZnQiLCJzZXRIb3Vyc0xlZnQiLCJtaW51dGVzTGVmdCIsInNldE1pbnV0ZXNMZWZ0Iiwic2Vjb25kc0xlZnQiLCJzZXRTZWNvbmRzTGVmdCIsImVuZERhdGUiLCJEYXRlIiwiZW5kVGltZSIsImdldFRpbWUiLCJqayIsImdldENvdW50Iiwibm93RGF0ZSIsIm5vd1RpbWUiLCJkaWZmIiwiZGF5IiwibGVzc0RheSIsInRpbWUiLCJsZXNzSG91ciIsIm1pbnV0ZSIsImxlc3NNaW51dGUiLCJzZWNvbmQiLCJ0cnVuY2F0ZWREYXkiLCJNYXRoIiwiZmxvb3IiLCJ0cnVuY2F0ZWRIb3VyIiwidHJ1bmNhdGVkTWludXRlIiwidHJ1bmNhdGVkU2Vjb25kIiwic2V0SW50ZXJ2YWwiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxjQUFzQyxHQUFHLFNBQXpDQSxjQUF5QyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3JCQywrQ0FBUSxFQURhO0FBQUEsTUFDOUNDLFFBRDhDO0FBQUEsTUFDcENDLFdBRG9DOztBQUFBLG1CQUVuQkYsK0NBQVEsRUFGVztBQUFBLE1BRTlDRyxTQUY4QztBQUFBLE1BRW5DQyxZQUZtQzs7QUFBQSxtQkFHZkosK0NBQVEsRUFITztBQUFBLE1BRzlDSyxXQUg4QztBQUFBLE1BR2pDQyxjQUhpQzs7QUFBQSxtQkFJZk4sK0NBQVEsRUFKTztBQUFBLE1BSTlDTyxXQUo4QztBQUFBLE1BSWpDQyxjQUppQyxrQkFNckQ7OztBQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsQ0FBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixFQUFoQjtBQUVBLE1BQUlDLEVBQUo7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNQyxPQUFPLEdBQUcsSUFBSUwsSUFBSixFQUFoQjtBQUNBLFFBQU1NLE9BQU8sR0FBR0QsT0FBTyxDQUFDSCxPQUFSLEVBQWhCO0FBRUEsUUFBSUssSUFBSjs7QUFDQSxRQUFJTixPQUFPLElBQUlLLE9BQWYsRUFBd0I7QUFDdEJDLFVBQUksR0FBR04sT0FBTyxHQUFHSyxPQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMQyxVQUFJLEdBQUcsQ0FBUDtBQUNELEtBVG9CLENBV3JCOzs7QUFDQSxRQUFNQyxHQUFHLEdBQUdELElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQWhCLENBWnFCLENBY3JCOztBQUNBLFFBQU1FLE9BQU8sR0FBR0YsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBcEIsQ0FmcUIsQ0FpQnJCOztBQUNBLFFBQU1HLElBQUksR0FBR0QsT0FBTyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQXBCLENBbEJxQixDQW9CckI7O0FBQ0EsUUFBTUUsUUFBUSxHQUFHRixPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBeEIsQ0FyQnFCLENBdUJyQjs7QUFDQSxRQUFNRyxNQUFNLEdBQUdELFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBdkIsQ0F4QnFCLENBMEJyQjs7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBM0IsQ0EzQnFCLENBNkJyQjs7QUFDQSxRQUFNRyxNQUFNLEdBQUdELFVBQVUsR0FBRyxJQUE1QixDQTlCcUIsQ0FnQ3JCOztBQUNBLFFBQU1FLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQVgsQ0FBckI7QUFDQSxRQUFNVSxhQUFhLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxJQUFYLENBQXRCO0FBQ0EsUUFBTVMsZUFBZSxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBWCxDQUF4QjtBQUNBLFFBQU1RLGVBQWUsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQVgsQ0FBeEI7QUFDQXRCLGVBQVcsQ0FBQ3VCLFlBQUQsQ0FBWDtBQUNBckIsZ0JBQVksQ0FBQ3dCLGFBQUQsQ0FBWjtBQUVBdEIsa0JBQWMsQ0FBQ3VCLGVBQUQsQ0FBZDtBQUNBckIsa0JBQWMsQ0FBQ3NCLGVBQUQsQ0FBZDtBQUNELEdBMUNEOztBQTRDQUMsYUFBVyxDQUFDakIsUUFBRCxFQUFXLElBQVgsQ0FBWDtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVrQix3RUFBZDtBQUFBLDhCQUNFO0FBQUEsd0JBQVEvQixRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFO0FBQUEsa0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU9FO0FBQUEsa0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQVNFO0FBQUEsa0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWdCRCxDQXpFRDs7R0FBTVIsYzs7S0FBQUEsYztBQTJFTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZTJhNWMyZDM0YjE3NmViODBjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyVHlwZSBmcm9tIFwiLi9jb3VudGRvd25UaW1lclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogRkM8Y291bnRkb3duVGltZXJUeXBlPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbZGF5c0xlZnQsIHNldERheXNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcbiAgY29uc3QgW0hvdXJzTGVmdCwgc2V0SG91cnNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcbiAgY29uc3QgW21pbnV0ZXNMZWZ0LCBzZXRNaW51dGVzTGVmdF0gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG4gIGNvbnN0IFtzZWNvbmRzTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIC8v5pyI44GvMOOBi+OCieOBquOBruOBpzHlsI/jgZXjgY/mjIflrppcbiAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKDIwMjIsIDUsIDE1KTtcbiAgY29uc3QgZW5kVGltZSA9IGVuZERhdGUuZ2V0VGltZSgpO1xuXG4gIGxldCBqaztcblxuICBjb25zdCBnZXRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBub3dUaW1lID0gbm93RGF0ZS5nZXRUaW1lKCk7XG5cbiAgICBsZXQgZGlmZjtcbiAgICBpZiAoZW5kVGltZSA+PSBub3dUaW1lKSB7XG4gICAgICBkaWZmID0gZW5kVGltZSAtIG5vd1RpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpZmYgPSAwO1xuICAgIH1cblxuICAgIC8v5pelXG4gICAgY29uc3QgZGF5ID0gZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAgIC8v5pel5pyq5rqAXG4gICAgY29uc3QgbGVzc0RheSA9IGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgICAvL+aZglxuICAgIGNvbnN0IHRpbWUgPSBsZXNzRGF5IC8gKDEwMDAgKiA2MCAqIDYwKTtcblxuICAgIC8v5pmC5pyq5rqAXG4gICAgY29uc3QgbGVzc0hvdXIgPSBsZXNzRGF5ICUgKDEwMDAgKiA2MCAqIDYwKTtcblxuICAgIC8v5YiGXG4gICAgY29uc3QgbWludXRlID0gbGVzc0hvdXIgLyAoMTAwMCAqIDYwKTtcblxuICAgIC8v5YiG5pyq5rqAXG4gICAgY29uc3QgbGVzc01pbnV0ZSA9IGxlc3NIb3VyICUgKDEwMDAgKiA2MCk7XG5cbiAgICAvL+enklxuICAgIGNvbnN0IHNlY29uZCA9IGxlc3NNaW51dGUgLyAxMDAwO1xuXG4gICAgLy/liIfjgormjajjgaZcbiAgICBjb25zdCB0cnVuY2F0ZWREYXkgPSBNYXRoLmZsb29yKGRheSk7XG4gICAgY29uc3QgdHJ1bmNhdGVkSG91ciA9IE1hdGguZmxvb3IodGltZSk7XG4gICAgY29uc3QgdHJ1bmNhdGVkTWludXRlID0gTWF0aC5mbG9vcihtaW51dGUpO1xuICAgIGNvbnN0IHRydW5jYXRlZFNlY29uZCA9IE1hdGguZmxvb3Ioc2Vjb25kKTtcbiAgICBzZXREYXlzTGVmdCh0cnVuY2F0ZWREYXkpO1xuICAgIHNldEhvdXJzTGVmdCh0cnVuY2F0ZWRIb3VyKTtcblxuICAgIHNldE1pbnV0ZXNMZWZ0KHRydW5jYXRlZE1pbnV0ZSk7XG4gICAgc2V0U2Vjb25kc0xlZnQodHJ1bmNhdGVkU2Vjb25kKTtcbiAgfTtcblxuICBzZXRJbnRlcnZhbChnZXRDb3VudCwgMTAwMCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+XG4gICAgICAgIDxzcGFuPiB7ZGF5c0xlZnR9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7ml6U8L3NwYW4+XG5cbiAgICAgICAgPHNwYW4+e0hvdXJzTGVmdH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuaZgumWkzwvc3Bhbj5cblxuICAgICAgICA8c3Bhbj57bWludXRlc0xlZnR9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7liIY8L3NwYW4+XG4gICAgICAgIDxzcGFuPntzZWNvbmRzTGVmdH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuenkjwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==