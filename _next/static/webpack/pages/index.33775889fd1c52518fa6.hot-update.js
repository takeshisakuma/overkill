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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: nowTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: endTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: diff
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: day
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: time
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: "999\u65E523\u6642\u959359\u520659\u79D2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJub3dEYXRlIiwiRGF0ZSIsIm5vd1RpbWUiLCJnZXRUaW1lIiwiZW5kRGF0ZSIsImVuZFRpbWUiLCJkaWZmIiwiZGF5IiwiYWZ0ZXJEYXkiLCJ0aW1lIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxjQUFzQyxHQUFHLFNBQXpDQSxjQUF5QyxPQUFRO0FBQUE7O0FBQ3JELE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQSxNQUFJQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixFQUFkLENBRnFELENBSXJEOztBQUNBLE1BQUlDLE9BQU8sR0FBRyxJQUFJSCxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBZDtBQUNBLE1BQUlJLE9BQU8sR0FBR0QsT0FBTyxDQUFDRCxPQUFSLEVBQWQ7QUFFQSxNQUFJRyxJQUFKOztBQUNBLE1BQUlELE9BQU8sR0FBR0gsT0FBZCxFQUF1QjtBQUNyQkksUUFBSSxHQUFHRCxPQUFPLEdBQUdILE9BQWpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xJLFFBQUksR0FBRyxDQUFQO0FBQ0QsR0Fib0QsQ0FlckQ7OztBQUNBLE1BQUlDLEdBQUcsR0FBR0QsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBZDtBQUNBLE1BQUlFLFFBQVEsR0FBR0YsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBbkI7QUFDQSxNQUFJRyxJQUFJLEdBQUdELFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFuQjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUVFLHdFQUFkO0FBQUEsZ0JBQTJCUjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFHLGVBQVMsRUFBRVEsd0VBQWQ7QUFBQSxnQkFBMkJMO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUcsZUFBUyxFQUFFSyx3RUFBZDtBQUFBLGdCQUEyQko7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBRyxlQUFTLEVBQUVJLHdFQUFkO0FBQUEsZ0JBQTJCSDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRTtBQUFHLGVBQVMsRUFBRUcsd0VBQWQ7QUFBQSxnQkFBMkJEO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FO0FBQUcsZUFBUyxFQUFFQyx3RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUEsa0JBREY7QUFVRCxDQTdCRDs7S0FBTVgsYztBQStCTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMzc3NTg4OWZkMWM1MjUxOGZhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRkb3duVGltZXJUeXBlIGZyb20gXCIuL2NvdW50ZG93blRpbWVyVHlwZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvdW50ZG93blRpbWVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IENvdW50ZG93blRpbWVyOiBGQzxjb3VudGRvd25UaW1lclR5cGU+ID0gKHt9KSA9PiB7XG4gIHZhciBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgdmFyIG5vd1RpbWUgPSBub3dEYXRlLmdldFRpbWUoKTtcblxuICAvL3ZhciBlbmREYXRlID0gbmV3IERhdGUoMjAyMiwgNiwgMTUpO1xuICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKDIwMjEsIDYsIDcpO1xuICB2YXIgZW5kVGltZSA9IGVuZERhdGUuZ2V0VGltZSgpO1xuXG4gIHZhciBkaWZmO1xuICBpZiAoZW5kVGltZSA+IG5vd1RpbWUpIHtcbiAgICBkaWZmID0gZW5kVGltZSAtIG5vd1RpbWU7XG4gIH0gZWxzZSB7XG4gICAgZGlmZiA9IDA7XG4gIH1cblxuICAvL+aXpSjlt64vMTAwMOODn+ODquenkio2MOenkio2MOWIhioyNClcbiAgdmFyIGRheSA9IGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG4gIHZhciBhZnRlckRheSA9IGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG4gIHZhciB0aW1lID0gYWZ0ZXJEYXkgLyAoMTAwMCAqIDYwICogNjApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9Pntub3dUaW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+e2VuZFRpbWV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT57ZGlmZn08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9PntkYXl9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT57dGltZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYWF9Pjk5OeaXpTIz5pmC6ZaTNTnliIY1OeenkjwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==