self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./animation/eventAnimation.ts":
/*!*************************************!*\
  !*** ./animation/eventAnimation.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var setAnimation = function setAnimation() {
  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(".eventAnimation", {
    opacity: 0,
    x: 0,
    y: 0,
    scale: 0
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".eventAnimation",
      start: "top 90%",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYW5pbWF0aW9uL2V2ZW50QW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbInNldEFuaW1hdGlvbiIsImdzYXAiLCJvcGFjaXR5IiwieCIsInkiLCJzY2FsZSIsImR1cmF0aW9uIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsIm1hcmtlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLCtDQUFBLENBQ0UsaUJBREYsRUFHRTtBQUNFQyxXQUFPLEVBQUUsQ0FEWDtBQUVFQyxLQUFDLEVBQUUsQ0FGTDtBQUdFQyxLQUFDLEVBQUUsQ0FITDtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQUhGLEVBU0U7QUFDRUgsV0FBTyxFQUFFLENBRFg7QUFFRUMsS0FBQyxFQUFFLENBRkw7QUFHRUMsS0FBQyxFQUFFLENBSEw7QUFJRUMsU0FBSyxFQUFFLENBSlQ7QUFLRUMsWUFBUSxFQUFFLENBTFo7QUFPRUMsaUJBQWEsRUFBRTtBQUNiQyxhQUFPLEVBQUUsaUJBREk7QUFFYkMsV0FBSyxFQUFFLFNBRk07QUFHYkMsYUFBTyxFQUFFO0FBSEk7QUFQakIsR0FURjtBQXVCRCxDQXhCRDs7QUEyQkEsK0RBQWVWLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzE4ZWI0NDVhY2Q1NmMzNjA4ZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5cbmNvbnN0IHNldEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgZ3NhcC5mcm9tVG8oXG4gICAgXCIuZXZlbnRBbmltYXRpb25cIixcblxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHNjYWxlOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICBzY2FsZTogMSxcbiAgICAgIGR1cmF0aW9uOiAxLFxuXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLmV2ZW50QW5pbWF0aW9uXCIsXG4gICAgICAgIHN0YXJ0OiBcInRvcCA5MCVcIixcbiAgICAgICAgbWFya2VyczogZmFsc2UsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgc2V0QW5pbWF0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==