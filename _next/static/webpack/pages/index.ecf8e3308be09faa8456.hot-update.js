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
    var truncatedSecond = Math.floor(second); //stateの値を更新

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJ1c2VTdGF0ZSIsImRheXNMZWZ0Iiwic2V0RGF5c0xlZnQiLCJIb3Vyc0xlZnQiLCJzZXRIb3Vyc0xlZnQiLCJtaW51dGVzTGVmdCIsInNldE1pbnV0ZXNMZWZ0Iiwic2Vjb25kc0xlZnQiLCJzZXRTZWNvbmRzTGVmdCIsImVuZERhdGUiLCJEYXRlIiwiZW5kVGltZSIsImdldFRpbWUiLCJnZXRDb3VudCIsIm5vd0RhdGUiLCJub3dUaW1lIiwiZGlmZiIsImRheSIsImxlc3NEYXkiLCJ0aW1lIiwibGVzc0hvdXIiLCJtaW51dGUiLCJsZXNzTWludXRlIiwic2Vjb25kIiwidHJ1bmNhdGVkRGF5IiwiTWF0aCIsImZsb29yIiwidHJ1bmNhdGVkSG91ciIsInRydW5jYXRlZE1pbnV0ZSIsInRydW5jYXRlZFNlY29uZCIsInNldEludGVydmFsIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7O0FBRUEsSUFBTUEsY0FBc0MsR0FBRyxTQUF6Q0EsY0FBeUMsT0FBUTtBQUFBOztBQUFBOztBQUFBLGtCQUNyQkMsK0NBQVEsRUFEYTtBQUFBLE1BQzlDQyxRQUQ4QztBQUFBLE1BQ3BDQyxXQURvQzs7QUFBQSxtQkFFbkJGLCtDQUFRLEVBRlc7QUFBQSxNQUU5Q0csU0FGOEM7QUFBQSxNQUVuQ0MsWUFGbUM7O0FBQUEsbUJBR2ZKLCtDQUFRLEVBSE87QUFBQSxNQUc5Q0ssV0FIOEM7QUFBQSxNQUdqQ0MsY0FIaUM7O0FBQUEsbUJBSWZOLCtDQUFRLEVBSk87QUFBQSxNQUk5Q08sV0FKOEM7QUFBQSxNQUlqQ0MsY0FKaUMsa0JBTXJEOzs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixPQUFPLENBQUNHLE9BQVIsRUFBaEI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNQyxPQUFPLEdBQUcsSUFBSUosSUFBSixFQUFoQjtBQUNBLFFBQU1LLE9BQU8sR0FBR0QsT0FBTyxDQUFDRixPQUFSLEVBQWhCO0FBRUEsUUFBSUksSUFBSjs7QUFDQSxRQUFJTCxPQUFPLElBQUlJLE9BQWYsRUFBd0I7QUFDdEJDLFVBQUksR0FBR0wsT0FBTyxHQUFHSSxPQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMQyxVQUFJLEdBQUcsQ0FBUDtBQUNELEtBVG9CLENBV3JCOzs7QUFDQSxRQUFNQyxHQUFHLEdBQUdELElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQWhCLENBWnFCLENBY3JCOztBQUNBLFFBQU1FLE9BQU8sR0FBR0YsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBcEIsQ0FmcUIsQ0FpQnJCOztBQUNBLFFBQU1HLElBQUksR0FBR0QsT0FBTyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQXBCLENBbEJxQixDQW9CckI7O0FBQ0EsUUFBTUUsUUFBUSxHQUFHRixPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBeEIsQ0FyQnFCLENBdUJyQjs7QUFDQSxRQUFNRyxNQUFNLEdBQUdELFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBdkIsQ0F4QnFCLENBMEJyQjs7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBM0IsQ0EzQnFCLENBNkJyQjs7QUFDQSxRQUFNRyxNQUFNLEdBQUdELFVBQVUsR0FBRyxJQUE1QixDQTlCcUIsQ0FnQ3JCOztBQUNBLFFBQU1FLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQVgsQ0FBckI7QUFDQSxRQUFNVSxhQUFhLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxJQUFYLENBQXRCO0FBQ0EsUUFBTVMsZUFBZSxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBWCxDQUF4QjtBQUNBLFFBQU1RLGVBQWUsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQVgsQ0FBeEIsQ0FwQ3FCLENBc0NyQjs7QUFDQXJCLGVBQVcsQ0FBQ3NCLFlBQUQsQ0FBWDtBQUNBcEIsZ0JBQVksQ0FBQ3VCLGFBQUQsQ0FBWjtBQUNBckIsa0JBQWMsQ0FBQ3NCLGVBQUQsQ0FBZDtBQUNBcEIsa0JBQWMsQ0FBQ3FCLGVBQUQsQ0FBZDtBQUNELEdBM0NEOztBQTZDQUMsYUFBVyxDQUFDakIsUUFBRCxFQUFXLElBQVgsQ0FBWDtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVrQix3RUFBZDtBQUFBLDhCQUNFO0FBQUEsd0JBQVE5QixRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFO0FBQUEsa0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU9FO0FBQUEsa0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQVNFO0FBQUEsa0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWdCRCxDQXhFRDs7R0FBTVIsYzs7S0FBQUEsYztBQTBFTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lY2Y4ZTMzMDhiZTA5ZmFhODQ1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyVHlwZSBmcm9tIFwiLi9jb3VudGRvd25UaW1lclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogRkM8Y291bnRkb3duVGltZXJUeXBlPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbZGF5c0xlZnQsIHNldERheXNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcbiAgY29uc3QgW0hvdXJzTGVmdCwgc2V0SG91cnNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcbiAgY29uc3QgW21pbnV0ZXNMZWZ0LCBzZXRNaW51dGVzTGVmdF0gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG4gIGNvbnN0IFtzZWNvbmRzTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIC8v5pyI44GvMOOBi+OCieOBquOBruOBpzHlsI/jgZXjgY/mjIflrppcbiAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKDIwMjIsIDUsIDE1KTtcbiAgY29uc3QgZW5kVGltZSA9IGVuZERhdGUuZ2V0VGltZSgpO1xuXG4gIGNvbnN0IGdldENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG5vd1RpbWUgPSBub3dEYXRlLmdldFRpbWUoKTtcblxuICAgIGxldCBkaWZmO1xuICAgIGlmIChlbmRUaW1lID49IG5vd1RpbWUpIHtcbiAgICAgIGRpZmYgPSBlbmRUaW1lIC0gbm93VGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlmZiA9IDA7XG4gICAgfVxuXG4gICAgLy/ml6VcbiAgICBjb25zdCBkYXkgPSBkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gICAgLy/ml6XmnKrmuoBcbiAgICBjb25zdCBsZXNzRGF5ID0gZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAgIC8v5pmCXG4gICAgY29uc3QgdGltZSA9IGxlc3NEYXkgLyAoMTAwMCAqIDYwICogNjApO1xuXG4gICAgLy/mmYLmnKrmuoBcbiAgICBjb25zdCBsZXNzSG91ciA9IGxlc3NEYXkgJSAoMTAwMCAqIDYwICogNjApO1xuXG4gICAgLy/liIZcbiAgICBjb25zdCBtaW51dGUgPSBsZXNzSG91ciAvICgxMDAwICogNjApO1xuXG4gICAgLy/liIbmnKrmuoBcbiAgICBjb25zdCBsZXNzTWludXRlID0gbGVzc0hvdXIgJSAoMTAwMCAqIDYwKTtcblxuICAgIC8v56eSXG4gICAgY29uc3Qgc2Vjb25kID0gbGVzc01pbnV0ZSAvIDEwMDA7XG5cbiAgICAvL+WIh+OCiuaNqOOBplxuICAgIGNvbnN0IHRydW5jYXRlZERheSA9IE1hdGguZmxvb3IoZGF5KTtcbiAgICBjb25zdCB0cnVuY2F0ZWRIb3VyID0gTWF0aC5mbG9vcih0aW1lKTtcbiAgICBjb25zdCB0cnVuY2F0ZWRNaW51dGUgPSBNYXRoLmZsb29yKG1pbnV0ZSk7XG4gICAgY29uc3QgdHJ1bmNhdGVkU2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQpO1xuXG4gICAgLy9zdGF0ZeOBruWApOOCkuabtOaWsFxuICAgIHNldERheXNMZWZ0KHRydW5jYXRlZERheSk7XG4gICAgc2V0SG91cnNMZWZ0KHRydW5jYXRlZEhvdXIpO1xuICAgIHNldE1pbnV0ZXNMZWZ0KHRydW5jYXRlZE1pbnV0ZSk7XG4gICAgc2V0U2Vjb25kc0xlZnQodHJ1bmNhdGVkU2Vjb25kKTtcbiAgfTtcblxuICBzZXRJbnRlcnZhbChnZXRDb3VudCwgMTAwMCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+XG4gICAgICAgIDxzcGFuPiB7ZGF5c0xlZnR9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7ml6U8L3NwYW4+XG5cbiAgICAgICAgPHNwYW4+e0hvdXJzTGVmdH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuaZgumWkzwvc3Bhbj5cblxuICAgICAgICA8c3Bhbj57bWludXRlc0xlZnR9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7liIY8L3NwYW4+XG4gICAgICAgIDxzcGFuPntzZWNvbmRzTGVmdH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuenkjwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==