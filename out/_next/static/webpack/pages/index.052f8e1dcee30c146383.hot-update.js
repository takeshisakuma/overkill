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
      end = _useState2[0],
      setEnd = _useState2[1];

  var getNow = function getNow() {
    var nowDate = new Date();
    var nowTime = nowDate.getTime();
    setNow(nowTime);
  };

  var nowDate = new Date();
  var nowTime = nowDate.getTime(); //月は0からなので1小さく指定

  var endDate = new Date(2022, 5, 15);
  var endTime = endDate.getTime();
  var diff;

  if (endTime > nowTime) {
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
      children: [now, runcatedDay, "\u65E5", runcatedTime, "\u6642\u9593", runcatedMinute, "\u5206", runcatedSecond, "\u79D2"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CountdownTimer, "ZxX7HVPyiRU1gnW80X9oHorCeE4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJ1c2VTdGF0ZSIsIm5vdyIsInNldE5vdyIsImVuZCIsInNldEVuZCIsImdldE5vdyIsIm5vd0RhdGUiLCJEYXRlIiwibm93VGltZSIsImdldFRpbWUiLCJlbmREYXRlIiwiZW5kVGltZSIsImRpZmYiLCJkYXkiLCJsZXNzRGF5IiwidGltZSIsImxlc3NUaW1lIiwibWludXRlIiwibGVzc01pbnV0ZSIsInNlY29uZCIsInJ1bmNhdGVkRGF5IiwiTWF0aCIsImZsb29yIiwicnVuY2F0ZWRUaW1lIiwicnVuY2F0ZWRNaW51dGUiLCJydW5jYXRlZFNlY29uZCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLElBQU1BLGNBQXNDLEdBQUcsU0FBekNBLGNBQXlDLE9BQVE7QUFBQTs7QUFBQTs7QUFBQSxrQkFDL0JDLCtDQUFRLEVBRHVCO0FBQUEsTUFDOUNDLEdBRDhDO0FBQUEsTUFDekNDLE1BRHlDOztBQUFBLG1CQUUvQkYsK0NBQVEsRUFGdUI7QUFBQSxNQUU5Q0csR0FGOEM7QUFBQSxNQUV6Q0MsTUFGeUM7O0FBR3JELE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsUUFBTUMsT0FBTyxHQUFHLElBQUlDLElBQUosRUFBaEI7QUFDQSxRQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixFQUFoQjtBQUNBUCxVQUFNLENBQUNNLE9BQUQsQ0FBTjtBQUNELEdBSkQ7O0FBTUEsTUFBTUYsT0FBTyxHQUFHLElBQUlDLElBQUosRUFBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixFQUFoQixDQVZxRCxDQVlyRDs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUgsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBQWhCO0FBQ0EsTUFBTUksT0FBTyxHQUFHRCxPQUFPLENBQUNELE9BQVIsRUFBaEI7QUFFQSxNQUFJRyxJQUFKOztBQUNBLE1BQUlELE9BQU8sR0FBR0gsT0FBZCxFQUF1QjtBQUNyQkksUUFBSSxHQUFHRCxPQUFPLEdBQUdILE9BQWpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xJLFFBQUksR0FBRyxDQUFQO0FBQ0QsR0FyQm9ELENBdUJyRDs7O0FBQ0EsTUFBSUMsR0FBRyxHQUFHRCxJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFkLENBeEJxRCxDQTBCckQ7O0FBQ0EsTUFBSUUsT0FBTyxHQUFHRixJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFsQixDQTNCcUQsQ0E2QnJEOztBQUNBLE1BQUlHLElBQUksR0FBR0QsT0FBTyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQWxCLENBOUJxRCxDQWdDckQ7O0FBQ0EsTUFBSUUsUUFBUSxHQUFHRixPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBdEIsQ0FqQ3FELENBbUNyRDs7QUFDQSxNQUFJRyxNQUFNLEdBQUdELFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBckIsQ0FwQ3FELENBc0NyRDs7QUFDQSxNQUFJRSxVQUFVLEdBQUdGLFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBekIsQ0F2Q3FELENBeUNyRDs7QUFDQSxNQUFJRyxNQUFNLEdBQUdELFVBQVUsR0FBRyxJQUExQixDQTFDcUQsQ0E0Q3JEOztBQUNBLE1BQUlFLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQVgsQ0FBbEI7QUFDQSxNQUFJVSxZQUFZLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxJQUFYLENBQW5CO0FBQ0EsTUFBSVMsY0FBYyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBWCxDQUFyQjtBQUNBLE1BQUlRLGNBQWMsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQVgsQ0FBckI7QUFFQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFFTyx3RUFBZDtBQUFBLGlCQUNHekIsR0FESCxFQUVHbUIsV0FGSCxZQUVpQkcsWUFGakIsa0JBRWlDQyxjQUZqQyxZQUVrREMsY0FGbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFRRCxDQTFERDs7R0FBTTFCLGM7O0tBQUFBLGM7QUE0RE4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDUyZjhlMWRjZWUzMGMxNDYzODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGRvd25UaW1lclR5cGUgZnJvbSBcIi4vY291bnRkb3duVGltZXJUeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY291bnRkb3duVGltZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQ291bnRkb3duVGltZXI6IEZDPGNvdW50ZG93blRpbWVyVHlwZT4gPSAoe30pID0+IHtcbiAgY29uc3QgW25vdywgc2V0Tm93XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtlbmQsIHNldEVuZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBnZXROb3cgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgbm93VGltZSA9IG5vd0RhdGUuZ2V0VGltZSgpO1xuICAgIHNldE5vdyhub3dUaW1lKTtcbiAgfTtcblxuICBjb25zdCBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgbm93VGltZSA9IG5vd0RhdGUuZ2V0VGltZSgpO1xuXG4gIC8v5pyI44GvMOOBi+OCieOBquOBruOBpzHlsI/jgZXjgY/mjIflrppcbiAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKDIwMjIsIDUsIDE1KTtcbiAgY29uc3QgZW5kVGltZSA9IGVuZERhdGUuZ2V0VGltZSgpO1xuXG4gIGxldCBkaWZmO1xuICBpZiAoZW5kVGltZSA+IG5vd1RpbWUpIHtcbiAgICBkaWZmID0gZW5kVGltZSAtIG5vd1RpbWU7XG4gIH0gZWxzZSB7XG4gICAgZGlmZiA9IDA7XG4gIH1cblxuICAvL+aXpVxuICB2YXIgZGF5ID0gZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAvL+aXpeacqua6gFxuICB2YXIgbGVzc0RheSA9IGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgLy/mmYJcbiAgdmFyIHRpbWUgPSBsZXNzRGF5IC8gKDEwMDAgKiA2MCAqIDYwKTtcblxuICAvL+aZguacqua6gFxuICB2YXIgbGVzc1RpbWUgPSBsZXNzRGF5ICUgKDEwMDAgKiA2MCAqIDYwKTtcblxuICAvL+WIhlxuICB2YXIgbWludXRlID0gbGVzc1RpbWUgLyAoMTAwMCAqIDYwKTtcblxuICAvL+WIhuacqua6gFxuICB2YXIgbGVzc01pbnV0ZSA9IGxlc3NUaW1lICUgKDEwMDAgKiA2MCk7XG5cbiAgLy/np5JcbiAgdmFyIHNlY29uZCA9IGxlc3NNaW51dGUgLyAxMDAwO1xuXG4gIC8v5YiH44KK5o2o44GmXG4gIHZhciBydW5jYXRlZERheSA9IE1hdGguZmxvb3IoZGF5KTtcbiAgdmFyIHJ1bmNhdGVkVGltZSA9IE1hdGguZmxvb3IodGltZSk7XG4gIHZhciBydW5jYXRlZE1pbnV0ZSA9IE1hdGguZmxvb3IobWludXRlKTtcbiAgdmFyIHJ1bmNhdGVkU2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+XG4gICAgICAgIHtub3d9XG4gICAgICAgIHtydW5jYXRlZERheX3ml6V7cnVuY2F0ZWRUaW1lfeaZgumWk3tydW5jYXRlZE1pbnV0ZX3liIZ7cnVuY2F0ZWRTZWNvbmR956eSXG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=