self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./section/providerSection/ProviderSection.tsx":
/*!*****************************************************!*\
  !*** ./section/providerSection/ProviderSection.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providerSection_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providerSection.module.scss */ "./section/providerSection/providerSection.module.scss");
/* harmony import */ var _providerSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_providerSection_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_sectionHeading_SectionHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sectionHeading/SectionHeading */ "./components/sectionHeading/SectionHeading.tsx");
/* harmony import */ var _components_sectionText_SectionText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sectionText/SectionText */ "./components/sectionText/SectionText.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\section\\providerSection\\ProviderSection.tsx",
    _this = undefined;






var ProviderSection = function ProviderSection(_ref) {
  var headingText = _ref.headingText,
      paragraphText = _ref.paragraphText;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_providerSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().providerConteiner),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_providerSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().providerContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_providerSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sectionHeadingWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sectionHeading_SectionHeading__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          className: (_providerSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sectionTextWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sectionText_SectionText__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: paragraphText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
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

_c = ProviderSection;
/* harmony default export */ __webpack_exports__["default"] = (ProviderSection);

var _c;

$RefreshReg$(_c, "ProviderSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbi9wcm92aWRlclNlY3Rpb24vUHJvdmlkZXJTZWN0aW9uLnRzeCJdLCJuYW1lcyI6WyJQcm92aWRlclNlY3Rpb24iLCJoZWFkaW5nVGV4dCIsInBhcmFncmFwaFRleHQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxlQUF3QyxHQUFHLFNBQTNDQSxlQUEyQyxPQUczQztBQUFBLE1BRkpDLFdBRUksUUFGSkEsV0FFSTtBQUFBLE1BREpDLGFBQ0ksUUFESkEsYUFDSTtBQUNKLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVDLHVGQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEscUZBQWhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSwyRkFBaEI7QUFBQSxpQ0FDRSw4REFBQyw4RUFBRDtBQUFBLHNCQUFpQkY7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUVFLHdGQUFoQjtBQUFBLGlDQUNFLDhEQUFDLHdFQUFEO0FBQUEsc0JBQWNEO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBY0QsQ0FsQkQ7O0tBQU1GLGU7QUFvQk4sK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2FjYzNlOGI2YzNlYWZmN2Y3MTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3ZpZGVyU2VjdGlvblR5cGUgZnJvbSBcIi4vcHJvdmlkZXJTZWN0aW9uVHlwZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm92aWRlclNlY3Rpb24ubW9kdWxlLnNjc3NcIjtcblxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb25IZWFkaW5nL1NlY3Rpb25IZWFkaW5nXCI7XG5pbXBvcnQgU2VjdGlvblRleHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvblRleHQvU2VjdGlvblRleHRcIjtcblxuY29uc3QgUHJvdmlkZXJTZWN0aW9uOiBGQzxwcm92aWRlclNlY3Rpb25UeXBlPiA9ICh7XG4gIGhlYWRpbmdUZXh0LFxuICBwYXJhZ3JhcGhUZXh0LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb3ZpZGVyQ29udGVpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm92aWRlckNvbnRlbnR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdXcmFwcGVyfT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGluZz57aGVhZGluZ1RleHR9PC9TZWN0aW9uSGVhZGluZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25UZXh0V3JhcHBlcn0+XG4gICAgICAgICAgICA8U2VjdGlvblRleHQ+e3BhcmFncmFwaFRleHR9PC9TZWN0aW9uVGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyU2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=