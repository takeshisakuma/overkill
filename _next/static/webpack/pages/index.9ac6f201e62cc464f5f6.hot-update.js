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

  var endDate = new Date(2021, 5, 7);
  var endTime = endDate.getTime();
  var diff;

  if (endTime > nowTime) {
    diff = endTime - nowTime;
  } else {
    diff = 0;
  }

  1591369200; //日(差/1000ミリ秒*60秒*60分*24)

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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u73FE\u5728\uFF1A", nowTime]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u7D42\u4E86\uFF1A", endTime]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u5DEE\uFF1A", diff]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u65E5\uFF1A", day]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u6642\u9593\uFF1A", time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u5DEE\uFF1A", lessTime]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u5206\uFF1A", minute]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u5DEE\uFF1A", lessMinute]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: ["\u79D2", second]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: [runcatedDay, "\u65E5", runcatedTime, "\u6642\u9593", runcatedMinute, "\u5206", runcatedSecond, "\u79D2"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJub3dEYXRlIiwiRGF0ZSIsIm5vd1RpbWUiLCJnZXRUaW1lIiwiZW5kRGF0ZSIsImVuZFRpbWUiLCJkaWZmIiwiZGF5IiwibGVzc0RheSIsInRpbWUiLCJsZXNzVGltZSIsIm1pbnV0ZSIsImxlc3NNaW51dGUiLCJzZWNvbmQiLCJydW5jYXRlZERheSIsIk1hdGgiLCJmbG9vciIsInJ1bmNhdGVkVGltZSIsInJ1bmNhdGVkTWludXRlIiwicnVuY2F0ZWRTZWNvbmQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLElBQU1BLGNBQXNDLEdBQUcsU0FBekNBLGNBQXlDLE9BQVE7QUFBQTs7QUFDckQsTUFBSUMsT0FBTyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQUlDLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxPQUFSLEVBQWQsQ0FGcUQsQ0FJckQ7O0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQUlILElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFkO0FBQ0EsTUFBSUksT0FBTyxHQUFHRCxPQUFPLENBQUNELE9BQVIsRUFBZDtBQUVBLE1BQUlHLElBQUo7O0FBQ0EsTUFBSUQsT0FBTyxHQUFHSCxPQUFkLEVBQXVCO0FBQ3JCSSxRQUFJLEdBQUdELE9BQU8sR0FBR0gsT0FBakI7QUFDRCxHQUZELE1BRU87QUFDTEksUUFBSSxHQUFHLENBQVA7QUFDRDs7QUFDRCxhQWRxRCxDQWVyRDs7QUFDQSxNQUFJQyxHQUFHLEdBQUdELElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQWQ7QUFDQSxNQUFJRSxPQUFPLEdBQUdGLElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQWxCLENBakJxRCxDQW1CckQ7O0FBQ0EsTUFBSUcsSUFBSSxHQUFHRCxPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBbEI7QUFDQSxNQUFJRSxRQUFRLEdBQUdGLE9BQU8sSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUF0QixDQXJCcUQsQ0F1QnJEOztBQUNBLE1BQUlHLE1BQU0sR0FBR0QsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUFyQixDQXhCcUQsQ0EwQnJEOztBQUNBLE1BQUlFLFVBQVUsR0FBR0YsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUF6QjtBQUVBLE1BQUlHLE1BQU0sR0FBR0QsVUFBVSxHQUFHLElBQTFCLENBN0JxRCxDQStCckQ7O0FBQ0EsTUFBSUUsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsR0FBWCxDQUFsQjtBQUNBLE1BQUlVLFlBQVksR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdQLElBQVgsQ0FBbkI7QUFDQSxNQUFJUyxjQUFjLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxNQUFYLENBQXJCO0FBQ0EsTUFBSVEsY0FBYyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsTUFBWCxDQUFyQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUVPLHdFQUFkO0FBQUEsdUNBQThCbEIsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFHLGVBQVMsRUFBRWtCLHdFQUFkO0FBQUEsdUNBQThCZixPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUcsZUFBUyxFQUFFZSx3RUFBZDtBQUFBLGlDQUE2QmQsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRTtBQUFHLGVBQVMsRUFBRWMsd0VBQWQ7QUFBQSxpQ0FBNkJiLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0U7QUFBRyxlQUFTLEVBQUVhLHdFQUFkO0FBQUEsdUNBQThCWCxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FO0FBQUcsZUFBUyxFQUFFVyx3RUFBZDtBQUFBLGlDQUE2QlYsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRTtBQUFHLGVBQVMsRUFBRVUsd0VBQWQ7QUFBQSxpQ0FBNkJULE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUU7QUFBRyxlQUFTLEVBQUVTLHdFQUFkO0FBQUEsaUNBQTZCUixVQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQVNFO0FBQUcsZUFBUyxFQUFFUSx3RUFBZDtBQUFBLDJCQUE0QlAsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFVRTtBQUFHLGVBQVMsRUFBRU8sd0VBQWQ7QUFBQSxpQkFDR04sV0FESCxZQUNpQkcsWUFEakIsa0JBQ2lDQyxjQURqQyxZQUNrREMsY0FEbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQSxrQkFERjtBQWdCRCxDQXJERDs7S0FBTXBCLGM7QUF1RE4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWFjNmYyMDFlNjJjYzQ2NGY1ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyVHlwZSBmcm9tIFwiLi9jb3VudGRvd25UaW1lclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogRkM8Y291bnRkb3duVGltZXJUeXBlPiA9ICh7fSkgPT4ge1xuICB2YXIgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHZhciBub3dUaW1lID0gbm93RGF0ZS5nZXRUaW1lKCk7XG5cbiAgLy/mnIjjga8w44GL44KJ44Gq44Gu44GnMeWwj+OBleOBj+aMh+WumlxuICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKDIwMjEsIDUsIDcpO1xuICB2YXIgZW5kVGltZSA9IGVuZERhdGUuZ2V0VGltZSgpO1xuXG4gIHZhciBkaWZmO1xuICBpZiAoZW5kVGltZSA+IG5vd1RpbWUpIHtcbiAgICBkaWZmID0gZW5kVGltZSAtIG5vd1RpbWU7XG4gIH0gZWxzZSB7XG4gICAgZGlmZiA9IDA7XG4gIH1cbiAgMTU5MTM2OTIwMDtcbiAgLy/ml6Uo5beuLzEwMDDjg5/jg6rnp5IqNjDnp5IqNjDliIYqMjQpXG4gIHZhciBkYXkgPSBkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuICB2YXIgbGVzc0RheSA9IGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgLy/mmYJcbiAgdmFyIHRpbWUgPSBsZXNzRGF5IC8gKDEwMDAgKiA2MCAqIDYwKTtcbiAgdmFyIGxlc3NUaW1lID0gbGVzc0RheSAlICgxMDAwICogNjAgKiA2MCk7XG5cbiAgLy/liIZcbiAgdmFyIG1pbnV0ZSA9IGxlc3NUaW1lIC8gKDEwMDAgKiA2MCk7XG5cbiAgLy/liIbmnKrmuoBcbiAgdmFyIGxlc3NNaW51dGUgPSBsZXNzVGltZSAlICgxMDAwICogNjApO1xuXG4gIHZhciBzZWNvbmQgPSBsZXNzTWludXRlIC8gMTAwMDtcblxuICAvL+WIh+OCiuaNqOOBplxuICB2YXIgcnVuY2F0ZWREYXkgPSBNYXRoLmZsb29yKGRheSk7XG4gIHZhciBydW5jYXRlZFRpbWUgPSBNYXRoLmZsb29yKHRpbWUpO1xuICB2YXIgcnVuY2F0ZWRNaW51dGUgPSBNYXRoLmZsb29yKG1pbnV0ZSk7XG4gIHZhciBydW5jYXRlZFNlY29uZCA9IE1hdGguZmxvb3Ioc2Vjb25kKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PuePvuWcqO+8mntub3dUaW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+57WC5LqG77yae2VuZFRpbWV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT7lt67vvJp7ZGlmZn08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PuaXpe+8mntkYXl9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT7mmYLplpPvvJp7dGltZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PuW3ru+8mntsZXNzVGltZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PuWIhu+8mnttaW51dGV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT7lt67vvJp7bGVzc01pbnV0ZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PuenkntzZWNvbmR9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT5cbiAgICAgICAge3J1bmNhdGVkRGF5feaXpXtydW5jYXRlZFRpbWV95pmC6ZaTe3J1bmNhdGVkTWludXRlfeWIhntydW5jYXRlZFNlY29uZH3np5JcbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==