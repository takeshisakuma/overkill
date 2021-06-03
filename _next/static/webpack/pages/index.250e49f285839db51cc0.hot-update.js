self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./section/aboutSection/AboutSection.tsx":
/*!***********************************************!*\
  !*** ./section/aboutSection/AboutSection.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutSection.module.scss */ "./section/aboutSection/aboutSection.module.scss");
/* harmony import */ var _aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\section\\aboutSection\\AboutSection.tsx",
    _this = undefined;




var AboutSection = function AboutSection(_ref) {
  var headingText = _ref.headingText,
      mainText = _ref.mainText,
      listText = _ref.listText,
      cautionText = _ref.cautionText;
  var heading = headingText;
  var message = mainText;
  var list = listText;
  var caution = cautionText;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default().aboutConteiner),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default().aboutContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: (_aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerSection),
          children: heading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: (_aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default().listTextGroup),
          children: list.map(function (member, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: (_aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default().listTextMember),
              children: member
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cautionText),
          children: caution
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = AboutSection;
/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

var _c;

$RefreshReg$(_c, "AboutSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbi9hYm91dFNlY3Rpb24vQWJvdXRTZWN0aW9uLnRzeCJdLCJuYW1lcyI6WyJBYm91dFNlY3Rpb24iLCJoZWFkaW5nVGV4dCIsIm1haW5UZXh0IiwibGlzdFRleHQiLCJjYXV0aW9uVGV4dCIsImhlYWRpbmciLCJtZXNzYWdlIiwibGlzdCIsImNhdXRpb24iLCJzdHlsZXMiLCJtYXAiLCJtZW1iZXIiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLFlBQWtDLEdBQUcsU0FBckNBLFlBQXFDLE9BS3JDO0FBQUEsTUFKSkMsV0FJSSxRQUpKQSxXQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsV0FDSSxRQURKQSxXQUNJO0FBQ0osTUFBTUMsT0FBTyxHQUFHSixXQUFoQjtBQUNBLE1BQU1LLE9BQU8sR0FBR0osUUFBaEI7QUFDQSxNQUFNSyxJQUFJLEdBQUdKLFFBQWI7QUFDQSxNQUFNSyxPQUFPLEdBQUdKLFdBQWhCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUssaUZBQWhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFQSwrRUFBaEI7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUVBLGdGQUFmO0FBQUEsb0JBQXNDSjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBSSxtQkFBUyxFQUFFRyxnRkFBZjtBQUFBLG9CQUNHRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSxnQ0FDUjtBQUFnQix1QkFBUyxFQUFFSCxpRkFBM0I7QUFBQSx3QkFDR0U7QUFESCxlQUFTQyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFE7QUFBQSxXQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQVVFO0FBQUcsbUJBQVMsRUFBRUgsOEVBQWQ7QUFBQSxvQkFBbUNEO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBa0JELENBNUJEOztLQUFNUixZO0FBOEJOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI1MGU0OWYyODU4MzlkYjUxY2MwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhYm91dFNlY3Rpb25UeXBlIGZyb20gXCIuL2Fib3V0U2VjdGlvblR5cGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWJvdXRTZWN0aW9uLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEFib3V0U2VjdGlvbjogRkM8YWJvdXRTZWN0aW9uVHlwZT4gPSAoe1xuICBoZWFkaW5nVGV4dCxcbiAgbWFpblRleHQsXG4gIGxpc3RUZXh0LFxuICBjYXV0aW9uVGV4dCxcbn0pID0+IHtcbiAgY29uc3QgaGVhZGluZyA9IGhlYWRpbmdUZXh0O1xuICBjb25zdCBtZXNzYWdlID0gbWFpblRleHQ7XG4gIGNvbnN0IGxpc3QgPSBsaXN0VGV4dDtcbiAgY29uc3QgY2F1dGlvbiA9IGNhdXRpb25UZXh0O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0Q29udGVpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dENvbnRlbnR9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJTZWN0aW9ufT57aGVhZGluZ308L2gzPlxuICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdFRleHRHcm91cH0+XG4gICAgICAgICAgICB7bGlzdC5tYXAoKG1lbWJlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RUZXh0TWVtYmVyfT5cbiAgICAgICAgICAgICAgICB7bWVtYmVyfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jYXV0aW9uVGV4dH0+e2NhdXRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==