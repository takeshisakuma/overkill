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
  var nowTime = nowDate.getTime(); //var endDate = new Date(2022, 6, 15);

  var endDate = new Date(2021, 6, 7);
  var endTime = endDate.getTime();
  var diff;

  if (endTime > nowTime) {
    diff = endTime - nowTime;
  } else {
    diff = 0;
  } //日(差/1000ミリ秒*60秒*60分*24)


  var day = diff / (1000 * 60 * 60 * 24);
  var afterDay = diff % (1000 * 60 * 60 * 24);
  var time = afterDay / (1000 * 60 * 60);
  var afterTime = afterDay % (1000 * 60 * 60);
  var minute = afterTime / (1000 * 60);
  var afterMinute = afterTime % (1000 * 60);
  var second = afterMinute / 1000;
  var runcatedDay = Math.floor(day);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: nowTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: endTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: diff
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: day
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: time
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: afterTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: minute
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: second
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: "999\u65E523\u6642\u959359\u520659\u79D2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJub3dEYXRlIiwiRGF0ZSIsIm5vd1RpbWUiLCJnZXRUaW1lIiwiZW5kRGF0ZSIsImVuZFRpbWUiLCJkaWZmIiwiZGF5IiwiYWZ0ZXJEYXkiLCJ0aW1lIiwiYWZ0ZXJUaW1lIiwibWludXRlIiwiYWZ0ZXJNaW51dGUiLCJzZWNvbmQiLCJydW5jYXRlZERheSIsIk1hdGgiLCJmbG9vciIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7O0FBRUEsSUFBTUEsY0FBc0MsR0FBRyxTQUF6Q0EsY0FBeUMsT0FBUTtBQUFBOztBQUNyRCxNQUFJQyxPQUFPLEdBQUcsSUFBSUMsSUFBSixFQUFkO0FBQ0EsTUFBSUMsT0FBTyxHQUFHRixPQUFPLENBQUNHLE9BQVIsRUFBZCxDQUZxRCxDQUlyRDs7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBSUgsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBQWQ7QUFDQSxNQUFJSSxPQUFPLEdBQUdELE9BQU8sQ0FBQ0QsT0FBUixFQUFkO0FBRUEsTUFBSUcsSUFBSjs7QUFDQSxNQUFJRCxPQUFPLEdBQUdILE9BQWQsRUFBdUI7QUFDckJJLFFBQUksR0FBR0QsT0FBTyxHQUFHSCxPQUFqQjtBQUNELEdBRkQsTUFFTztBQUNMSSxRQUFJLEdBQUcsQ0FBUDtBQUNELEdBYm9ELENBZXJEOzs7QUFDQSxNQUFJQyxHQUFHLEdBQUdELElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQWQ7QUFDQSxNQUFJRSxRQUFRLEdBQUdGLElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQW5CO0FBRUEsTUFBSUcsSUFBSSxHQUFHRCxRQUFRLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBbkI7QUFDQSxNQUFJRSxTQUFTLEdBQUdGLFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUF4QjtBQUVBLE1BQUlHLE1BQU0sR0FBR0QsU0FBUyxJQUFJLE9BQU8sRUFBWCxDQUF0QjtBQUNBLE1BQUlFLFdBQVcsR0FBR0YsU0FBUyxJQUFJLE9BQU8sRUFBWCxDQUEzQjtBQUVBLE1BQUlHLE1BQU0sR0FBR0QsV0FBVyxHQUFHLElBQTNCO0FBRUEsTUFBSUUsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsR0FBWCxDQUFsQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUVVLHdFQUFkO0FBQUEsZ0JBQTJCZjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFHLGVBQVMsRUFBRWUsd0VBQWQ7QUFBQSxnQkFBMkJaO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUcsZUFBUyxFQUFFWSx3RUFBZDtBQUFBLGdCQUEyQlg7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBRyxlQUFTLEVBQUVXLHdFQUFkO0FBQUEsZ0JBQTJCVjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRTtBQUFHLGVBQVMsRUFBRVUsd0VBQWQ7QUFBQSxnQkFBMkJSO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FO0FBQUcsZUFBUyxFQUFFUSx3RUFBZDtBQUFBLGdCQUEyQlA7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0U7QUFBRyxlQUFTLEVBQUVPLHdFQUFkO0FBQUEsZ0JBQTJCTjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFRRTtBQUFHLGVBQVMsRUFBRU0sd0VBQWQ7QUFBQSxnQkFBMkJKO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQVNFO0FBQUcsZUFBUyxFQUFFSSx3RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUEsa0JBREY7QUFhRCxDQTFDRDs7S0FBTWxCLGM7QUE0Q04sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDMyOTM4YTgxNzAzZDhhZmFhNGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyVHlwZSBmcm9tIFwiLi9jb3VudGRvd25UaW1lclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogRkM8Y291bnRkb3duVGltZXJUeXBlPiA9ICh7fSkgPT4ge1xuICB2YXIgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHZhciBub3dUaW1lID0gbm93RGF0ZS5nZXRUaW1lKCk7XG5cbiAgLy92YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKDIwMjIsIDYsIDE1KTtcbiAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZSgyMDIxLCA2LCA3KTtcbiAgdmFyIGVuZFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKTtcblxuICB2YXIgZGlmZjtcbiAgaWYgKGVuZFRpbWUgPiBub3dUaW1lKSB7XG4gICAgZGlmZiA9IGVuZFRpbWUgLSBub3dUaW1lO1xuICB9IGVsc2Uge1xuICAgIGRpZmYgPSAwO1xuICB9XG5cbiAgLy/ml6Uo5beuLzEwMDDjg5/jg6rnp5IqNjDnp5IqNjDliIYqMjQpXG4gIHZhciBkYXkgPSBkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuICB2YXIgYWZ0ZXJEYXkgPSBkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gIHZhciB0aW1lID0gYWZ0ZXJEYXkgLyAoMTAwMCAqIDYwICogNjApO1xuICB2YXIgYWZ0ZXJUaW1lID0gYWZ0ZXJEYXkgJSAoMTAwMCAqIDYwICogNjApO1xuXG4gIHZhciBtaW51dGUgPSBhZnRlclRpbWUgLyAoMTAwMCAqIDYwKTtcbiAgdmFyIGFmdGVyTWludXRlID0gYWZ0ZXJUaW1lICUgKDEwMDAgKiA2MCk7XG5cbiAgdmFyIHNlY29uZCA9IGFmdGVyTWludXRlIC8gMTAwMDtcblxuICB2YXIgcnVuY2F0ZWREYXkgPSBNYXRoLmZsb29yKGRheSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT57bm93VGltZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PntlbmRUaW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+e2RpZmZ9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT57ZGF5fTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+e3RpbWV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT57YWZ0ZXJUaW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+e21pbnV0ZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PntzZWNvbmR9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT45OTnml6UyM+aZgumWkzU55YiGNTnnp5I8L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=