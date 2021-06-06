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

  var nowDate = new Date();
  var nowTime = nowDate.getTime(); //月は0からなので1小さく指定

  var endDate = new Date(202, 5, 15);
  var endTime = endDate.getTime();
  var diff;

  if (endTime > nowTime) {
    diff = endTime - nowTime;
  } else {
    diff = 0;
  } //日(差/1000ミリ秒*60秒*60分*24)


  var day = diff / (1000 * 60 * 60 * 24);
  var lessDay = diff % (1000 * 60 * 60 * 24); //時

  var time = lessDay / (1000 * 60 * 60);
  var lessTime = lessDay % (1000 * 60 * 60); //分

  var minute = lessTime / (1000 * 60); //分未満

  var lessMinute = lessTime % (1000 * 60);
  var second = lessMinute / 1000; //切り捨て

  var runcatedDay = Math.floor(day);
  var runcatedTime = Math.floor(time);
  var runcatedMinute = Math.floor(minute);
  var runcatedSecond = Math.floor(second);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: [runcatedDay, "\u65E5", runcatedTime, "\u6642\u9593", runcatedMinute, "\u5206", runcatedSecond, "\u79D2"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJub3dEYXRlIiwiRGF0ZSIsIm5vd1RpbWUiLCJnZXRUaW1lIiwiZW5kRGF0ZSIsImVuZFRpbWUiLCJkaWZmIiwiZGF5IiwibGVzc0RheSIsInRpbWUiLCJsZXNzVGltZSIsIm1pbnV0ZSIsImxlc3NNaW51dGUiLCJzZWNvbmQiLCJydW5jYXRlZERheSIsIk1hdGgiLCJmbG9vciIsInJ1bmNhdGVkVGltZSIsInJ1bmNhdGVkTWludXRlIiwicnVuY2F0ZWRTZWNvbmQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLElBQU1BLGNBQXNDLEdBQUcsU0FBekNBLGNBQXlDLE9BQVE7QUFBQTs7QUFDckQsTUFBTUMsT0FBTyxHQUFHLElBQUlDLElBQUosRUFBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixFQUFoQixDQUZxRCxDQUlyRDs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUgsSUFBSixDQUFTLEdBQVQsRUFBYyxDQUFkLEVBQWlCLEVBQWpCLENBQWhCO0FBQ0EsTUFBTUksT0FBTyxHQUFHRCxPQUFPLENBQUNELE9BQVIsRUFBaEI7QUFFQSxNQUFJRyxJQUFKOztBQUNBLE1BQUlELE9BQU8sR0FBR0gsT0FBZCxFQUF1QjtBQUNyQkksUUFBSSxHQUFHRCxPQUFPLEdBQUdILE9BQWpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xJLFFBQUksR0FBRyxDQUFQO0FBQ0QsR0Fib0QsQ0FlckQ7OztBQUNBLE1BQUlDLEdBQUcsR0FBR0QsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBZDtBQUNBLE1BQUlFLE9BQU8sR0FBR0YsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBbEIsQ0FqQnFELENBbUJyRDs7QUFDQSxNQUFJRyxJQUFJLEdBQUdELE9BQU8sSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFsQjtBQUNBLE1BQUlFLFFBQVEsR0FBR0YsT0FBTyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQXRCLENBckJxRCxDQXVCckQ7O0FBQ0EsTUFBSUcsTUFBTSxHQUFHRCxRQUFRLElBQUksT0FBTyxFQUFYLENBQXJCLENBeEJxRCxDQTBCckQ7O0FBQ0EsTUFBSUUsVUFBVSxHQUFHRixRQUFRLElBQUksT0FBTyxFQUFYLENBQXpCO0FBRUEsTUFBSUcsTUFBTSxHQUFHRCxVQUFVLEdBQUcsSUFBMUIsQ0E3QnFELENBK0JyRDs7QUFDQSxNQUFJRSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxHQUFYLENBQWxCO0FBQ0EsTUFBSVUsWUFBWSxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBV1AsSUFBWCxDQUFuQjtBQUNBLE1BQUlTLGNBQWMsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdMLE1BQVgsQ0FBckI7QUFDQSxNQUFJUSxjQUFjLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxNQUFYLENBQXJCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRU8sd0VBQWQ7QUFBQSxpQkFDR04sV0FESCxZQUNpQkcsWUFEakIsa0JBQ2lDQyxjQURqQyxZQUNrREMsY0FEbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFPRCxDQTVDRDs7S0FBTXBCLGM7QUE4Q04sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2Y1YThlNDdkOGRhYTY1NjQ4OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyVHlwZSBmcm9tIFwiLi9jb3VudGRvd25UaW1lclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogRkM8Y291bnRkb3duVGltZXJUeXBlPiA9ICh7fSkgPT4ge1xuICBjb25zdCBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgbm93VGltZSA9IG5vd0RhdGUuZ2V0VGltZSgpO1xuXG4gIC8v5pyI44GvMOOBi+OCieOBquOBruOBpzHlsI/jgZXjgY/mjIflrppcbiAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKDIwMiwgNSwgMTUpO1xuICBjb25zdCBlbmRUaW1lID0gZW5kRGF0ZS5nZXRUaW1lKCk7XG5cbiAgbGV0IGRpZmY7XG4gIGlmIChlbmRUaW1lID4gbm93VGltZSkge1xuICAgIGRpZmYgPSBlbmRUaW1lIC0gbm93VGltZTtcbiAgfSBlbHNlIHtcbiAgICBkaWZmID0gMDtcbiAgfVxuXG4gIC8v5pelKOW3ri8xMDAw44Of44Oq56eSKjYw56eSKjYw5YiGKjI0KVxuICB2YXIgZGF5ID0gZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KTtcbiAgdmFyIGxlc3NEYXkgPSBkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gIC8v5pmCXG4gIHZhciB0aW1lID0gbGVzc0RheSAvICgxMDAwICogNjAgKiA2MCk7XG4gIHZhciBsZXNzVGltZSA9IGxlc3NEYXkgJSAoMTAwMCAqIDYwICogNjApO1xuXG4gIC8v5YiGXG4gIHZhciBtaW51dGUgPSBsZXNzVGltZSAvICgxMDAwICogNjApO1xuXG4gIC8v5YiG5pyq5rqAXG4gIHZhciBsZXNzTWludXRlID0gbGVzc1RpbWUgJSAoMTAwMCAqIDYwKTtcblxuICB2YXIgc2Vjb25kID0gbGVzc01pbnV0ZSAvIDEwMDA7XG5cbiAgLy/liIfjgormjajjgaZcbiAgdmFyIHJ1bmNhdGVkRGF5ID0gTWF0aC5mbG9vcihkYXkpO1xuICB2YXIgcnVuY2F0ZWRUaW1lID0gTWF0aC5mbG9vcih0aW1lKTtcbiAgdmFyIHJ1bmNhdGVkTWludXRlID0gTWF0aC5mbG9vcihtaW51dGUpO1xuICB2YXIgcnVuY2F0ZWRTZWNvbmQgPSBNYXRoLmZsb29yKHNlY29uZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT5cbiAgICAgICAge3J1bmNhdGVkRGF5feaXpXtydW5jYXRlZFRpbWV95pmC6ZaTe3J1bmNhdGVkTWludXRlfeWIhntydW5jYXRlZFNlY29uZH3np5JcbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==