self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./section/countdownSection/CountdownSection.tsx":
/*!*******************************************************!*\
  !*** ./section/countdownSection/CountdownSection.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countdownSection.module.scss */ "./section/countdownSection/countdownSection.module.scss");
/* harmony import */ var _countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_countdownHeading_CountdownHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/countdownHeading/CountdownHeading */ "./components/countdownHeading/CountdownHeading.tsx");
/* harmony import */ var _components_countdownTimer_CountdownTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/countdownTimer/CountdownTimer */ "./components/countdownTimer/CountdownTimer.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\section\\countdownSection\\CountdownSection.tsx",
    _this = undefined;






var CountdownSection = function CountdownSection(_ref) {
  var countdownTimerAnimation = _ref.countdownTimerAnimation,
      headingText = _ref.headingText;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countdownContainer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countdownContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sectionHeadingWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_countdownHeading_CountdownHeading__WEBPACK_IMPORTED_MODULE_2__.default, {
            children: headingText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_countdownSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countdownTimerWrapper),
          countdownTimerAnimation: countdownTimerAnimation,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_countdownTimer_CountdownTimer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = CountdownSection;
/* harmony default export */ __webpack_exports__["default"] = (CountdownSection);

var _c;

$RefreshReg$(_c, "CountdownSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbi9jb3VudGRvd25TZWN0aW9uL0NvdW50ZG93blNlY3Rpb24udHN4Il0sIm5hbWVzIjpbIkNvdW50ZG93blNlY3Rpb24iLCJjb3VudGRvd25UaW1lckFuaW1hdGlvbiIsImhlYWRpbmdUZXh0Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQTBDLEdBQUcsU0FBN0NBLGdCQUE2QyxPQUc3QztBQUFBLE1BRkpDLHVCQUVJLFFBRkpBLHVCQUVJO0FBQUEsTUFESkMsV0FDSSxRQURKQSxXQUNJO0FBQ0osc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUMseUZBQWhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFQSx1RkFBaEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVBLDRGQUFoQjtBQUFBLGlDQUNFLDhEQUFDLGtGQUFEO0FBQUEsc0JBQW1CRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQ0UsbUJBQVMsRUFBRUMsNEZBRGI7QUFFRSxpQ0FBdUIsRUFBRUYsdUJBRjNCO0FBQUEsaUNBSUUsOERBQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBaUJELENBckJEOztLQUFNRCxnQjtBQXVCTiwrREFBZUEsZ0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmQxZGY3NjY1ZGU3YWNiZmZmZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blNlY3Rpb25UeXBlIGZyb20gXCIuL2NvdW50ZG93blNlY3Rpb25UeXBlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvdW50ZG93blNlY3Rpb24ubW9kdWxlLnNjc3NcIjtcblxuaW1wb3J0IENvdW50ZG93bkhlYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY291bnRkb3duSGVhZGluZy9Db3VudGRvd25IZWFkaW5nXCI7XG5pbXBvcnQgQ291bnRkb3duVGltZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY291bnRkb3duVGltZXIvQ291bnRkb3duVGltZXJcIjtcblxuY29uc3QgQ291bnRkb3duU2VjdGlvbjogRkM8Y291bnRkb3duU2VjdGlvblR5cGU+ID0gKHtcbiAgY291bnRkb3duVGltZXJBbmltYXRpb24sXG4gIGhlYWRpbmdUZXh0LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ29udGVudH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1dyYXBwZXJ9PlxuICAgICAgICAgICAgPENvdW50ZG93bkhlYWRpbmc+e2hlYWRpbmdUZXh0fTwvQ291bnRkb3duSGVhZGluZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25UaW1lcldyYXBwZXJ9XG4gICAgICAgICAgICBjb3VudGRvd25UaW1lckFuaW1hdGlvbj17Y291bnRkb3duVGltZXJBbmltYXRpb259XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENvdW50ZG93blRpbWVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25TZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==