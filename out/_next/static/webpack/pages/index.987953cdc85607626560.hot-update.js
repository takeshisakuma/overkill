self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./section/AboutSection.tsx":
/*!**********************************!*\
  !*** ./section/AboutSection.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutSection.module.scss */ "./section/aboutSection.module.scss");
/* harmony import */ var _aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aboutSection_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\section\\AboutSection.tsx",
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: list[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: list[1]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: list[2]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), list.map(function (member, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: member
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: caution
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbi9BYm91dFNlY3Rpb24udHN4Il0sIm5hbWVzIjpbIkFib3V0U2VjdGlvbiIsImhlYWRpbmdUZXh0IiwibWFpblRleHQiLCJsaXN0VGV4dCIsImNhdXRpb25UZXh0IiwiaGVhZGluZyIsIm1lc3NhZ2UiLCJsaXN0IiwiY2F1dGlvbiIsInN0eWxlcyIsIm1hcCIsIm1lbWJlciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsWUFBa0MsR0FBRyxTQUFyQ0EsWUFBcUMsT0FLckM7QUFBQSxNQUpKQyxXQUlJLFFBSkpBLFdBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxXQUNJLFFBREpBLFdBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUdKLFdBQWhCO0FBQ0EsTUFBTUssT0FBTyxHQUFHSixRQUFoQjtBQUNBLE1BQU1LLElBQUksR0FBR0osUUFBYjtBQUNBLE1BQU1LLE9BQU8sR0FBR0osV0FBaEI7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFSyxpRkFBaEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVBLCtFQUFoQjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtKO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsb0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0MsSUFBSSxDQUFDLENBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBS0EsSUFBSSxDQUFDLENBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSxzQkFBS0EsSUFBSSxDQUFDLENBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBS0dBLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLGdDQUNSO0FBQUEsd0JBQWlCRDtBQUFqQixlQUFTQyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFE7QUFBQSxXQUFULENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBWUU7QUFBQSxvQkFBSUo7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW9CRCxDQTlCRDs7S0FBTVIsWTtBQWdDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ODc5NTNjZGM4NTYwNzYyNjU2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYWJvdXRTZWN0aW9uVHlwZSBmcm9tIFwiLi9hYm91dFNlY3Rpb25UeXBlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Fib3V0U2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBBYm91dFNlY3Rpb246IEZDPGFib3V0U2VjdGlvblR5cGU+ID0gKHtcbiAgaGVhZGluZ1RleHQsXG4gIG1haW5UZXh0LFxuICBsaXN0VGV4dCxcbiAgY2F1dGlvblRleHQsXG59KSA9PiB7XG4gIGNvbnN0IGhlYWRpbmcgPSBoZWFkaW5nVGV4dDtcbiAgY29uc3QgbWVzc2FnZSA9IG1haW5UZXh0O1xuICBjb25zdCBsaXN0ID0gbGlzdFRleHQ7XG4gIGNvbnN0IGNhdXRpb24gPSBjYXV0aW9uVGV4dDtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dENvbnRlaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRDb250ZW50fT5cbiAgICAgICAgICA8aDM+e2hlYWRpbmd9PC9oMz5cbiAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPntsaXN0WzBdfTwvbGk+XG4gICAgICAgICAgICA8bGk+e2xpc3RbMV19PC9saT5cbiAgICAgICAgICAgIDxsaT57bGlzdFsyXX08L2xpPlxuXG4gICAgICAgICAgICB7bGlzdC5tYXAoKG1lbWJlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PnttZW1iZXJ9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHA+e2NhdXRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==