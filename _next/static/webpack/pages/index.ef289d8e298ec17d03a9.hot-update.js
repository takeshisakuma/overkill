self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./animation/browserAnimation.ts":
/*!***************************************!*\
  !*** ./animation/browserAnimation.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var setAnimation = function setAnimation() {
  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(".browserAnimation", {
    opacity: 0,
    x: -20,
    y: 0,
    scale: 1,
    rotate: -10
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    duration: 0.6,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".browserAnimation",
      start: "top 50%",
      markers: false
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setAnimation);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYW5pbWF0aW9uL2Jyb3dzZXJBbmltYXRpb24udHMiXSwibmFtZXMiOlsic2V0QW5pbWF0aW9uIiwiZ3NhcCIsIm9wYWNpdHkiLCJ4IiwieSIsInNjYWxlIiwicm90YXRlIiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsIm1hcmtlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLCtDQUFBLENBQ0UsbUJBREYsRUFHRTtBQUNFQyxXQUFPLEVBQUUsQ0FEWDtBQUVFQyxLQUFDLEVBQUUsQ0FBQyxFQUZOO0FBR0VDLEtBQUMsRUFBRSxDQUhMO0FBSUVDLFNBQUssRUFBRSxDQUpUO0FBS0VDLFVBQU0sRUFBRSxDQUFDO0FBTFgsR0FIRixFQVVFO0FBQ0VKLFdBQU8sRUFBRSxDQURYO0FBRUVDLEtBQUMsRUFBRSxDQUZMO0FBR0VDLEtBQUMsRUFBRSxDQUhMO0FBSUVDLFNBQUssRUFBRSxDQUpUO0FBS0VDLFVBQU0sRUFBRSxDQUxWO0FBTUVDLFlBQVEsRUFBRSxHQU5aO0FBT0VDLFdBQU8sRUFBRSxHQVBYO0FBU0VDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLG1CQURJO0FBRWJDLFdBQUssRUFBRSxTQUZNO0FBR2JDLGFBQU8sRUFBRTtBQUhJO0FBVGpCLEdBVkY7QUEwQkQsQ0EzQkQ7O0FBOEJBLCtEQUFlWixZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmMjg5ZDhlMjk4ZWMxN2QwM2E5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcblxuXG5jb25zdCBzZXRBbmltYXRpb24gPSAoKSA9PiB7XG4gIGdzYXAuZnJvbVRvKFxuICAgIFwiLmJyb3dzZXJBbmltYXRpb25cIixcblxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB4OiAtMjAsXG4gICAgICB5OiAwLFxuICAgICAgc2NhbGU6IDEsXG4gICAgICByb3RhdGU6IC0xMFxuICAgIH0sXG4gICAge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgc2NhbGU6IDEsXG4gICAgICByb3RhdGU6IDAsXG4gICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgc3RhZ2dlcjogMC4yLFxuXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLmJyb3dzZXJBbmltYXRpb25cIixcbiAgICAgICAgc3RhcnQ6IFwidG9wIDUwJVwiLFxuICAgICAgICBtYXJrZXJzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfVxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBzZXRBbmltYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9