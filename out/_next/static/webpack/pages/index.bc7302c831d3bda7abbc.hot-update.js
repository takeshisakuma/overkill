self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_seo_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo/Seo */ "./components/seo/Seo.tsx");
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/Header */ "./components/header/Header.tsx");
/* harmony import */ var _components_visual_Visual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/visual/Visual */ "./components/visual/Visual.tsx");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\pages\\index.tsx",
    _this = undefined;







var Main = function Main() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo_Seo__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageTitle: "Internet Explorer 11",
      pageDescription: "Internet Explorer 11",
      pageImg: "https://takeshisakuma.github.io/overkill/img/ogp.png",
      pageImgWidth: 1280,
      pageImgHeight: 960,
      pagePath: "https://takeshisakuma.github.io/overkill/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {
      text: "20210615"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_visual_Visual__WEBPACK_IMPORTED_MODULE_4__.default, {
      text: "Internet Explorer".concat("\n", "\u307E\u3060\u4F7F\u3063\u3066\u3044\u308B\u4EBA\u306F\u3044\u307E\u305B\u3093\u304B\uFF1F")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().test),
      children: "next.js test14"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/overkill/test.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk1haW4iLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNCQUNYO0FBQUEsNEJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxlQUFTLEVBQUUsc0JBRGI7QUFFRSxxQkFBZSxFQUFFLHNCQUZuQjtBQUdFLGFBQU8sRUFBRSxzREFIWDtBQUlFLGtCQUFZLEVBQUUsSUFKaEI7QUFLRSxtQkFBYSxFQUFFLEdBTGpCO0FBTUUsY0FBUSxFQUFFO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBU0UsOERBQUMsOERBQUQ7QUFBUSxVQUFJLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFVRSw4REFBQyw4REFBRDtBQUFRLFVBQUksNkJBQXNCLElBQXRCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBV0U7QUFBRyxlQUFTLEVBQUVDLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUFZRTtBQUFLLFNBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBLGtCQURXO0FBQUEsQ0FBYjs7S0FBTUQsSTtBQWdCTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYzczMDJjODMxZDNiZGE3YWJiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZW8vU2VvXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBWaXN1YWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlzdWFsL1Zpc3VhbFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiAoXG4gIDw+XG4gICAgPFNlb1xuICAgICAgcGFnZVRpdGxlPXtcIkludGVybmV0IEV4cGxvcmVyIDExXCJ9XG4gICAgICBwYWdlRGVzY3JpcHRpb249e1wiSW50ZXJuZXQgRXhwbG9yZXIgMTFcIn1cbiAgICAgIHBhZ2VJbWc9e1wiaHR0cHM6Ly90YWtlc2hpc2FrdW1hLmdpdGh1Yi5pby9vdmVya2lsbC9pbWcvb2dwLnBuZ1wifVxuICAgICAgcGFnZUltZ1dpZHRoPXsxMjgwfVxuICAgICAgcGFnZUltZ0hlaWdodD17OTYwfVxuICAgICAgcGFnZVBhdGg9e1wiaHR0cHM6Ly90YWtlc2hpc2FrdW1hLmdpdGh1Yi5pby9vdmVya2lsbC9cIn1cbiAgICAvPlxuICAgIDxIZWFkZXIgdGV4dD1cIjIwMjEwNjE1XCIgLz5cbiAgICA8VmlzdWFsIHRleHQ9e2BJbnRlcm5ldCBFeHBsb3JlciR7XCJcXG5cIn3jgb7jgaDkvb/jgaPjgabjgYTjgovkurrjga/jgYTjgb7jgZvjgpPjgYvvvJ9gfSAvPlxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRlc3R9Pm5leHQuanMgdGVzdDE0PC9wPlxuICAgIDxpbWcgc3JjPVwiL292ZXJraWxsL3Rlc3QucG5nXCIgLz5cbiAgPC8+XG4pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=