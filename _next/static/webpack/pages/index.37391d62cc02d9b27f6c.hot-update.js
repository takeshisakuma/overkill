self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./section/headerSection/HeaderSection.tsx":
/*!*************************************************!*\
  !*** ./section/headerSection/HeaderSection.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headerSection_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headerSection.module.scss */ "./section/headerSection/headerSection.module.scss");
/* harmony import */ var _headerSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_headerSection_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_headerHeading_HeaderHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/headerHeading/HeaderHeading */ "./components/headerHeading/HeaderHeading.tsx");
/* harmony import */ var _components_share_Share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/share/Share */ "./components/share/Share.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\section\\headerSection\\HeaderSection.tsx",
    _this = undefined;






var HeaderSection = function HeaderSection(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_headerSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerContainer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_headerSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_headerSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerHeadingWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_headerHeading_HeaderHeading__WEBPACK_IMPORTED_MODULE_2__.default, {
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_headerSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().shareWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_share_Share__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = HeaderSection;
/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);

var _c;

$RefreshReg$(_c, "HeaderSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbi9oZWFkZXJTZWN0aW9uL0hlYWRlclNlY3Rpb24udHN4Il0sIm5hbWVzIjpbIkhlYWRlclNlY3Rpb24iLCJjaGlsZHJlbiIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQUNBOztBQUNBLElBQU1BLGFBQW9DLEdBQUcsU0FBdkNBLGFBQXVDLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzdELHNCQUNFO0FBQUEsMkJBQ0U7QUFBUSxlQUFTLEVBQUVDLG1GQUFuQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEsaUZBQWhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSx3RkFBaEI7QUFBQSxpQ0FDRSw4REFBQyw0RUFBRDtBQUFBLHNCQUFnQkQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUVDLGdGQUFoQjtBQUFBLGlDQUNFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWNELENBZkQ7O0tBQU1GLGE7QUFpQk4sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzczOTFkNjJjYzAyZDliMjdmNmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGhlYWRlclNlY3Rpb25UeXBlIGZyb20gXCIuL2hlYWRlclNlY3Rpb25UeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaGVhZGVyU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xuXG5pbXBvcnQgSGVhZGVySGVhZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXJIZWFkaW5nL0hlYWRlckhlYWRpbmdcIjtcbmltcG9ydCBTaGFyZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZS9TaGFyZVwiO1xuY29uc3QgSGVhZGVyU2VjdGlvbjogRkM8aGVhZGVyU2VjdGlvblR5cGU+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGVudH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJIZWFkaW5nV3JhcHBlcn0+XG4gICAgICAgICAgICA8SGVhZGVySGVhZGluZz57Y2hpbGRyZW59PC9IZWFkZXJIZWFkaW5nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hhcmVXcmFwcGVyfT5cbiAgICAgICAgICAgIDxTaGFyZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyU2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=