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
              children: member[index]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbi9BYm91dFNlY3Rpb24udHN4Il0sIm5hbWVzIjpbIkFib3V0U2VjdGlvbiIsImhlYWRpbmdUZXh0IiwibWFpblRleHQiLCJsaXN0VGV4dCIsImNhdXRpb25UZXh0IiwiaGVhZGluZyIsIm1lc3NhZ2UiLCJsaXN0IiwiY2F1dGlvbiIsInN0eWxlcyIsIm1hcCIsIm1lbWJlciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsWUFBa0MsR0FBRyxTQUFyQ0EsWUFBcUMsT0FLckM7QUFBQSxNQUpKQyxXQUlJLFFBSkpBLFdBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxXQUNJLFFBREpBLFdBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUdKLFdBQWhCO0FBQ0EsTUFBTUssT0FBTyxHQUFHSixRQUFoQjtBQUNBLE1BQU1LLElBQUksR0FBR0osUUFBYjtBQUNBLE1BQU1LLE9BQU8sR0FBR0osV0FBaEI7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFSyxpRkFBaEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVBLCtFQUFoQjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtKO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsb0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0MsSUFBSSxDQUFDLENBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBS0EsSUFBSSxDQUFDLENBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSxzQkFBS0EsSUFBSSxDQUFDLENBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBS0dBLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLGdDQUNSO0FBQUEsd0JBQWlCRCxNQUFNLENBQUNDLEtBQUQ7QUFBdkIsZUFBU0EsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURRO0FBQUEsV0FBVCxDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQVlFO0FBQUEsb0JBQUlKO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFvQkQsQ0E5QkQ7O0tBQU1SLFk7QUFnQ04sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTljNDU5OTRjNTk3MDM1ZGQ3YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFib3V0U2VjdGlvblR5cGUgZnJvbSBcIi4vYWJvdXRTZWN0aW9uVHlwZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hYm91dFNlY3Rpb24ubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQWJvdXRTZWN0aW9uOiBGQzxhYm91dFNlY3Rpb25UeXBlPiA9ICh7XG4gIGhlYWRpbmdUZXh0LFxuICBtYWluVGV4dCxcbiAgbGlzdFRleHQsXG4gIGNhdXRpb25UZXh0LFxufSkgPT4ge1xuICBjb25zdCBoZWFkaW5nID0gaGVhZGluZ1RleHQ7XG4gIGNvbnN0IG1lc3NhZ2UgPSBtYWluVGV4dDtcbiAgY29uc3QgbGlzdCA9IGxpc3RUZXh0O1xuICBjb25zdCBjYXV0aW9uID0gY2F1dGlvblRleHQ7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRDb250ZWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0Q29udGVudH0+XG4gICAgICAgICAgPGgzPntoZWFkaW5nfTwvaDM+XG4gICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT57bGlzdFswXX08L2xpPlxuICAgICAgICAgICAgPGxpPntsaXN0WzFdfTwvbGk+XG4gICAgICAgICAgICA8bGk+e2xpc3RbMl19PC9saT5cblxuICAgICAgICAgICAge2xpc3QubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57bWVtYmVyW2luZGV4XX08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8cD57Y2F1dGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFNlY3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9