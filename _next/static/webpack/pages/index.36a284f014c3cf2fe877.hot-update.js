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
      setNow = _useState[1]; //月は0からなので1小さく指定


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

    var lessTime = lessDay % (1000 * 60 * 60); //分

    var minute = lessTime / (1000 * 60); //分未満

    var lessMinute = lessTime % (1000 * 60); //秒

    var second = lessMinute / 1000; //切り捨て

    var truncatedDay = Math.floor(day);
    var truncatedTime = Math.floor(time);
    var truncatedMinute = Math.floor(minute);
    var truncatedSecond = Math.floor(second);
    setNow(truncatedDay);
  };

  setInterval(getCount, 1000);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: [jk, "d"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CountdownTimer, "Tkmkfzia2XhNHlugoBFdLc6vV7Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJ1c2VTdGF0ZSIsIm5vdyIsInNldE5vdyIsImVuZERhdGUiLCJEYXRlIiwiZW5kVGltZSIsImdldFRpbWUiLCJqayIsImdldENvdW50Iiwibm93RGF0ZSIsIm5vd1RpbWUiLCJkaWZmIiwiZGF5IiwibGVzc0RheSIsInRpbWUiLCJsZXNzVGltZSIsIm1pbnV0ZSIsImxlc3NNaW51dGUiLCJzZWNvbmQiLCJ0cnVuY2F0ZWREYXkiLCJNYXRoIiwiZmxvb3IiLCJ0cnVuY2F0ZWRUaW1lIiwidHJ1bmNhdGVkTWludXRlIiwidHJ1bmNhdGVkU2Vjb25kIiwic2V0SW50ZXJ2YWwiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxjQUFzQyxHQUFHLFNBQXpDQSxjQUF5QyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsa0JBQy9CQywrQ0FBUSxFQUR1QjtBQUFBLE1BQzlDQyxHQUQ4QztBQUFBLE1BQ3pDQyxNQUR5QyxpQkFHckQ7OztBQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsQ0FBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixFQUFoQjtBQUVBLE1BQUlDLEVBQUo7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNQyxPQUFPLEdBQUcsSUFBSUwsSUFBSixFQUFoQjtBQUNBLFFBQU1NLE9BQU8sR0FBR0QsT0FBTyxDQUFDSCxPQUFSLEVBQWhCO0FBRUEsUUFBSUssSUFBSjs7QUFDQSxRQUFJTixPQUFPLElBQUlLLE9BQWYsRUFBd0I7QUFDdEJDLFVBQUksR0FBR04sT0FBTyxHQUFHSyxPQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMQyxVQUFJLEdBQUcsQ0FBUDtBQUNELEtBVG9CLENBV3JCOzs7QUFDQSxRQUFNQyxHQUFHLEdBQUdELElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQWhCLENBWnFCLENBY3JCOztBQUNBLFFBQU1FLE9BQU8sR0FBR0YsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBcEIsQ0FmcUIsQ0FpQnJCOztBQUNBLFFBQU1HLElBQUksR0FBR0QsT0FBTyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQXBCLENBbEJxQixDQW9CckI7O0FBQ0EsUUFBTUUsUUFBUSxHQUFHRixPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBeEIsQ0FyQnFCLENBdUJyQjs7QUFDQSxRQUFNRyxNQUFNLEdBQUdELFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBdkIsQ0F4QnFCLENBMEJyQjs7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBM0IsQ0EzQnFCLENBNkJyQjs7QUFDQSxRQUFNRyxNQUFNLEdBQUdELFVBQVUsR0FBRyxJQUE1QixDQTlCcUIsQ0FnQ3JCOztBQUNBLFFBQU1FLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQVgsQ0FBckI7QUFDQSxRQUFNVSxhQUFhLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxJQUFYLENBQXRCO0FBQ0EsUUFBTVMsZUFBZSxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsTUFBWCxDQUF4QjtBQUNBLFFBQU1RLGVBQWUsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQVgsQ0FBeEI7QUFDQWhCLFVBQU0sQ0FBQ2lCLFlBQUQsQ0FBTjtBQUNELEdBdENEOztBQXdDQU0sYUFBVyxDQUFDakIsUUFBRCxFQUFXLElBQVgsQ0FBWDtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVrQix3RUFBZDtBQUFBLGlCQUNHbkIsRUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWlCRCxDQW5FRDs7R0FBTVIsYzs7S0FBQUEsYztBQXFFTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNmEyODRmMDE0YzNjZjJmZTg3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyVHlwZSBmcm9tIFwiLi9jb3VudGRvd25UaW1lclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogRkM8Y291bnRkb3duVGltZXJUeXBlPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIC8v5pyI44GvMOOBi+OCieOBquOBruOBpzHlsI/jgZXjgY/mjIflrppcbiAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKDIwMjIsIDUsIDE1KTtcbiAgY29uc3QgZW5kVGltZSA9IGVuZERhdGUuZ2V0VGltZSgpO1xuXG4gIGxldCBqaztcblxuICBjb25zdCBnZXRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBub3dUaW1lID0gbm93RGF0ZS5nZXRUaW1lKCk7XG5cbiAgICBsZXQgZGlmZjtcbiAgICBpZiAoZW5kVGltZSA+PSBub3dUaW1lKSB7XG4gICAgICBkaWZmID0gZW5kVGltZSAtIG5vd1RpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpZmYgPSAwO1xuICAgIH1cblxuICAgIC8v5pelXG4gICAgY29uc3QgZGF5ID0gZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAgIC8v5pel5pyq5rqAXG4gICAgY29uc3QgbGVzc0RheSA9IGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgICAvL+aZglxuICAgIGNvbnN0IHRpbWUgPSBsZXNzRGF5IC8gKDEwMDAgKiA2MCAqIDYwKTtcblxuICAgIC8v5pmC5pyq5rqAXG4gICAgY29uc3QgbGVzc1RpbWUgPSBsZXNzRGF5ICUgKDEwMDAgKiA2MCAqIDYwKTtcblxuICAgIC8v5YiGXG4gICAgY29uc3QgbWludXRlID0gbGVzc1RpbWUgLyAoMTAwMCAqIDYwKTtcblxuICAgIC8v5YiG5pyq5rqAXG4gICAgY29uc3QgbGVzc01pbnV0ZSA9IGxlc3NUaW1lICUgKDEwMDAgKiA2MCk7XG5cbiAgICAvL+enklxuICAgIGNvbnN0IHNlY29uZCA9IGxlc3NNaW51dGUgLyAxMDAwO1xuXG4gICAgLy/liIfjgormjajjgaZcbiAgICBjb25zdCB0cnVuY2F0ZWREYXkgPSBNYXRoLmZsb29yKGRheSk7XG4gICAgY29uc3QgdHJ1bmNhdGVkVGltZSA9IE1hdGguZmxvb3IodGltZSk7XG4gICAgY29uc3QgdHJ1bmNhdGVkTWludXRlID0gTWF0aC5mbG9vcihtaW51dGUpO1xuICAgIGNvbnN0IHRydW5jYXRlZFNlY29uZCA9IE1hdGguZmxvb3Ioc2Vjb25kKTtcbiAgICBzZXROb3codHJ1bmNhdGVkRGF5KTtcbiAgfTtcblxuICBzZXRJbnRlcnZhbChnZXRDb3VudCwgMTAwMCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+XG4gICAgICAgIHtqa31kXG4gICAgICAgIHsvKlxuICAgICAgICA8c3Bhbj57dHJ1bmNhdGVkRGF5fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5pelPC9zcGFuPlxuICAgICAgICA8c3Bhbj57dHJ1bmNhdGVkVGltZX08L3NwYW4+XG4gICAgICAgIDxzcGFuPuaZgumWkzwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3RydW5jYXRlZE1pbnV0ZX08L3NwYW4+XG4gICAgICAgIDxzcGFuPuWIhjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3RydW5jYXRlZFNlY29uZH08L3NwYW4+XG4gICAgICAgIDxzcGFuPuenkjwvc3Bhbj5cbiAgICAgICAgKi99XG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=