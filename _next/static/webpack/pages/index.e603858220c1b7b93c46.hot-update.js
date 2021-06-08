self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./animation/fadeUpAnimation.ts":
/*!**************************************!*\
  !*** ./animation/fadeUpAnimation.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var setAnimation = function setAnimation() {
  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(".fadeUpAnimation", {
    opacity: 0,
    y: 50
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".fadeUpAnimation",
      start: "top 50%",
      // end: "bottom 50%",
      onEnter: function onEnter() {
        console.log("scroll In");
      },
      //スクロールイン時
      onEnterBack: function onEnterBack() {
        console.log("scroll Back");
      },
      //スクロールバック時
      markers: false // マーカー表示

    }
  });
}; // const setAnimation = () => {
//   gsap.fromTo(
//     "#ani",
//     { opacity: 0, y: 100 },
//     {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       scrollTrigger: {
//         trigger: "#ani",
//         start: "top 80%",
//         end: "bottom 40%",
//         onEnter: () => {
//           console.log("scroll In");
//         }, //スクロールイン時
//         onEnterBack: () => {
//           console.log("scroll Back");
//         }, //スクロールバック時
//         markers: true, // マーカー表示
//       },
//     }
//   );
// };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYW5pbWF0aW9uL2ZhZGVVcEFuaW1hdGlvbi50cyJdLCJuYW1lcyI6WyJzZXRBbmltYXRpb24iLCJnc2FwIiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJvbkVudGVyIiwiY29uc29sZSIsImxvZyIsIm9uRW50ZXJCYWNrIiwibWFya2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkMsK0NBQUEsQ0FDRSxrQkFERixFQUdFO0FBQ0VDLFdBQU8sRUFBRSxDQURYO0FBRUVDLEtBQUMsRUFBRTtBQUZMLEdBSEYsRUFPRTtBQUNFRCxXQUFPLEVBQUUsQ0FEWDtBQUVFQyxLQUFDLEVBQUUsQ0FGTDtBQUdFQyxZQUFRLEVBQUUsQ0FIWjtBQUtFQyxpQkFBYSxFQUFFO0FBQ2JDLGFBQU8sRUFBRSxrQkFESTtBQUViQyxXQUFLLEVBQUUsU0FGTTtBQUdiO0FBQ0FDLGFBQU8sRUFBRSxtQkFBTTtBQUNiQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0QsT0FOWTtBQU1WO0FBQ0hDLGlCQUFXLEVBQUUsdUJBQU07QUFDakJGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDRCxPQVRZO0FBU1Y7QUFDSEUsYUFBTyxFQUFFLEtBVkksQ0FVRzs7QUFWSDtBQUxqQixHQVBGO0FBMEJELENBM0JELEMsQ0ErQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsK0RBQWVaLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTYwMzg1ODIyMGMxYjdiOTNjNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5cbmNvbnN0IHNldEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgZ3NhcC5mcm9tVG8oXG4gICAgXCIuZmFkZVVwQW5pbWF0aW9uXCIsXG5cbiAgICB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgeTogNTBcbiAgICB9LFxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB5OiAwLFxuICAgICAgZHVyYXRpb246IDEsXG5cbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIuZmFkZVVwQW5pbWF0aW9uXCIsXG4gICAgICAgIHN0YXJ0OiBcInRvcCA1MCVcIixcbiAgICAgICAgLy8gZW5kOiBcImJvdHRvbSA1MCVcIixcbiAgICAgICAgb25FbnRlcjogKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsIEluXCIpO1xuICAgICAgICB9LCAvL+OCueOCr+ODreODvOODq+OCpOODs+aZglxuICAgICAgICBvbkVudGVyQmFjazogKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsIEJhY2tcIik7XG4gICAgICAgIH0sIC8v44K544Kv44Ot44O844Or44OQ44OD44Kv5pmCXG4gICAgICAgIG1hcmtlcnM6IGZhbHNlLCAvLyDjg57jg7zjgqvjg7zooajnpLpcbiAgICAgIH0sXG4gICAgfVxuICApO1xufTtcblxuXG5cbi8vIGNvbnN0IHNldEFuaW1hdGlvbiA9ICgpID0+IHtcbi8vICAgZ3NhcC5mcm9tVG8oXG4vLyAgICAgXCIjYW5pXCIsXG5cbi8vICAgICB7IG9wYWNpdHk6IDAsIHk6IDEwMCB9LFxuLy8gICAgIHtcbi8vICAgICAgIG9wYWNpdHk6IDEsXG4vLyAgICAgICB5OiAwLFxuLy8gICAgICAgZHVyYXRpb246IDEsXG5cbi8vICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbi8vICAgICAgICAgdHJpZ2dlcjogXCIjYW5pXCIsXG4vLyAgICAgICAgIHN0YXJ0OiBcInRvcCA4MCVcIixcbi8vICAgICAgICAgZW5kOiBcImJvdHRvbSA0MCVcIixcbi8vICAgICAgICAgb25FbnRlcjogKCkgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsIEluXCIpO1xuLy8gICAgICAgICB9LCAvL+OCueOCr+ODreODvOODq+OCpOODs+aZglxuLy8gICAgICAgICBvbkVudGVyQmFjazogKCkgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsIEJhY2tcIik7XG4vLyAgICAgICAgIH0sIC8v44K544Kv44Ot44O844Or44OQ44OD44Kv5pmCXG4vLyAgICAgICAgIG1hcmtlcnM6IHRydWUsIC8vIOODnuODvOOCq+ODvOihqOekulxuLy8gICAgICAgfSxcbi8vICAgICB9XG4vLyAgICk7XG4vLyB9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHNldEFuaW1hdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=