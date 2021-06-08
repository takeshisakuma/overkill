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
    x: 0,
    y: -20,
    scale: 1
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    duration: 0.6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYW5pbWF0aW9uL2Jyb3dzZXJBbmltYXRpb24udHMiXSwibmFtZXMiOlsic2V0QW5pbWF0aW9uIiwiZ3NhcCIsIm9wYWNpdHkiLCJ4IiwieSIsInNjYWxlIiwiZHVyYXRpb24iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwibWFya2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkMsK0NBQUEsQ0FDRSxtQkFERixFQUdFO0FBQ0VDLFdBQU8sRUFBRSxDQURYO0FBRUVDLEtBQUMsRUFBRSxDQUZMO0FBR0VDLEtBQUMsRUFBRSxDQUFDLEVBSE47QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FIRixFQVNFO0FBQ0VILFdBQU8sRUFBRSxDQURYO0FBRUVDLEtBQUMsRUFBRSxDQUZMO0FBR0VDLEtBQUMsRUFBRSxDQUhMO0FBSUVDLFNBQUssRUFBRSxDQUpUO0FBS0VDLFlBQVEsRUFBRSxHQUxaO0FBT0VDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLG1CQURJO0FBRWJDLFdBQUssRUFBRSxTQUZNO0FBR2JDLGFBQU8sRUFBRTtBQUhJO0FBUGpCLEdBVEY7QUF1QkQsQ0F4QkQ7O0FBMkJBLCtEQUFlVixZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE4Nzc3NmI3MDI0ZjhiNWU2ZGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcblxuXG5jb25zdCBzZXRBbmltYXRpb24gPSAoKSA9PiB7XG4gIGdzYXAuZnJvbVRvKFxuICAgIFwiLmJyb3dzZXJBbmltYXRpb25cIixcblxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB4OiAwLFxuICAgICAgeTogLTIwLFxuICAgICAgc2NhbGU6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgZHVyYXRpb246IDAuNixcblxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5icm93c2VyQW5pbWF0aW9uXCIsXG4gICAgICAgIHN0YXJ0OiBcInRvcCA1MCVcIixcbiAgICAgICAgbWFya2VyczogZmFsc2UsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgc2V0QW5pbWF0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==