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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: runcatedTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u6642\u9593"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: runcatedMinute
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u5206"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: runcatedSecond
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u79D2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJlbmREYXRlIiwiRGF0ZSIsImVuZFRpbWUiLCJnZXRUaW1lIiwibm93RGF0ZSIsIm5vd1RpbWUiLCJkaWZmIiwiZGF5IiwibGVzc0RheSIsInRpbWUiLCJsZXNzVGltZSIsIm1pbnV0ZSIsImxlc3NNaW51dGUiLCJzZWNvbmQiLCJydW5jYXRlZERheSIsIk1hdGgiLCJmbG9vciIsInJ1bmNhdGVkVGltZSIsInJ1bmNhdGVkTWludXRlIiwicnVuY2F0ZWRTZWNvbmQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLElBQU1BLGNBQXNDLEdBQUcsU0FBekNBLGNBQXlDLE9BQVE7QUFBQTs7QUFDckQ7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixPQUFPLENBQUNHLE9BQVIsRUFBaEI7QUFFQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUgsSUFBSixFQUFoQjtBQUNBLE1BQU1JLE9BQU8sR0FBR0QsT0FBTyxDQUFDRCxPQUFSLEVBQWhCO0FBRUEsTUFBSUcsSUFBSjs7QUFDQSxNQUFJSixPQUFPLElBQUlHLE9BQWYsRUFBd0I7QUFDdEJDLFFBQUksR0FBR0osT0FBTyxHQUFHRyxPQUFqQjtBQUNELEdBRkQsTUFFTztBQUNMQyxRQUFJLEdBQUcsQ0FBUDtBQUNELEdBYm9ELENBZXJEOzs7QUFDQSxNQUFNQyxHQUFHLEdBQUdELElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQWhCLENBaEJxRCxDQWtCckQ7O0FBQ0EsTUFBTUUsT0FBTyxHQUFHRixJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFwQixDQW5CcUQsQ0FxQnJEOztBQUNBLE1BQU1HLElBQUksR0FBR0QsT0FBTyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQXBCLENBdEJxRCxDQXdCckQ7O0FBQ0EsTUFBTUUsUUFBUSxHQUFHRixPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBeEIsQ0F6QnFELENBMkJyRDs7QUFDQSxNQUFNRyxNQUFNLEdBQUdELFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBdkIsQ0E1QnFELENBOEJyRDs7QUFDQSxNQUFNRSxVQUFVLEdBQUdGLFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBM0IsQ0EvQnFELENBaUNyRDs7QUFDQSxNQUFNRyxNQUFNLEdBQUdELFVBQVUsR0FBRyxJQUE1QixDQWxDcUQsQ0FvQ3JEOztBQUNBLE1BQU1FLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQVgsQ0FBcEI7QUFDQSxNQUFNVSxZQUFZLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxJQUFYLENBQXJCO0FBQ0EsTUFBTVMsY0FBYyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBWCxDQUF2QjtBQUNBLE1BQU1RLGNBQWMsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQVgsQ0FBdkI7QUFFQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFFTyx3RUFBZDtBQUFBLDhCQUNFO0FBQUEsa0JBQU9OO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUEsa0JBQU9HO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFO0FBQUEsa0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FO0FBQUEsa0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWNELENBeEREOztLQUFNcEIsYztBQTBETiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMDJhMjczNTVhMTVkYjA4N2JiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyVHlwZSBmcm9tIFwiLi9jb3VudGRvd25UaW1lclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogRkM8Y291bnRkb3duVGltZXJUeXBlPiA9ICh7fSkgPT4ge1xuICAvL+aciOOBrzDjgYvjgonjgarjga7jgacx5bCP44GV44GP5oyH5a6aXG4gIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgyMDIyLCA1LCAxNSk7XG4gIGNvbnN0IGVuZFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKTtcblxuICBjb25zdCBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgbm93VGltZSA9IG5vd0RhdGUuZ2V0VGltZSgpO1xuXG4gIGxldCBkaWZmO1xuICBpZiAoZW5kVGltZSA+PSBub3dUaW1lKSB7XG4gICAgZGlmZiA9IGVuZFRpbWUgLSBub3dUaW1lO1xuICB9IGVsc2Uge1xuICAgIGRpZmYgPSAwO1xuICB9XG5cbiAgLy/ml6VcbiAgY29uc3QgZGF5ID0gZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAvL+aXpeacqua6gFxuICBjb25zdCBsZXNzRGF5ID0gZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAvL+aZglxuICBjb25zdCB0aW1lID0gbGVzc0RheSAvICgxMDAwICogNjAgKiA2MCk7XG5cbiAgLy/mmYLmnKrmuoBcbiAgY29uc3QgbGVzc1RpbWUgPSBsZXNzRGF5ICUgKDEwMDAgKiA2MCAqIDYwKTtcblxuICAvL+WIhlxuICBjb25zdCBtaW51dGUgPSBsZXNzVGltZSAvICgxMDAwICogNjApO1xuXG4gIC8v5YiG5pyq5rqAXG4gIGNvbnN0IGxlc3NNaW51dGUgPSBsZXNzVGltZSAlICgxMDAwICogNjApO1xuXG4gIC8v56eSXG4gIGNvbnN0IHNlY29uZCA9IGxlc3NNaW51dGUgLyAxMDAwO1xuXG4gIC8v5YiH44KK5o2o44GmXG4gIGNvbnN0IHJ1bmNhdGVkRGF5ID0gTWF0aC5mbG9vcihkYXkpO1xuICBjb25zdCBydW5jYXRlZFRpbWUgPSBNYXRoLmZsb29yKHRpbWUpO1xuICBjb25zdCBydW5jYXRlZE1pbnV0ZSA9IE1hdGguZmxvb3IobWludXRlKTtcbiAgY29uc3QgcnVuY2F0ZWRTZWNvbmQgPSBNYXRoLmZsb29yKHNlY29uZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT5cbiAgICAgICAgPHNwYW4+e3J1bmNhdGVkRGF5fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5pelPC9zcGFuPlxuICAgICAgICA8c3Bhbj57cnVuY2F0ZWRUaW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5pmC6ZaTPC9zcGFuPlxuICAgICAgICA8c3Bhbj57cnVuY2F0ZWRNaW51dGV9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7liIY8L3NwYW4+XG4gICAgICAgIDxzcGFuPntydW5jYXRlZFNlY29uZH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuenkjwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==