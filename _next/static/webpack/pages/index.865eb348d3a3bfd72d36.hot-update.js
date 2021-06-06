self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ieChecker/IeChecker.tsx":
/*!********************************************!*\
  !*** ./components/ieChecker/IeChecker.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ieChecker.module.scss */ "./components/ieChecker/ieChecker.module.scss");
/* harmony import */ var _ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_sectionHeading_SectionHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sectionHeading/SectionHeading */ "./components/sectionHeading/SectionHeading.tsx");
/* harmony import */ var _components_sectionText_SectionText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sectionText/SectionText */ "./components/sectionText/SectionText.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\components\\ieChecker\\IeChecker.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var IeChecker = function IeChecker() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      ie = _useState[0],
      setIe = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (true) {
      var userAgent = window.navigator.userAgent;

      if (userAgent.indexOf("Trident") != -1 || userAgent.indexOf("MSIE") != -1) {
        console.log("Microsoft Internet Explorer");
        setIe(true);
      }
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ie ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ieOverlay),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ieWindow),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sectionHeading_SectionHeading__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: "\u3053\u306E\u30DA\u30FC\u30B8\u306FIE\u306F\u975E\u5BFE\u5FDC\u3067\u3059\u3002"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sectionText_SectionText__WEBPACK_IMPORTED_MODULE_3__.default, {
          paragraphText: ["崩れたページをあえて見たい"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this) : ""
  }, void 0, false);
};

_s(IeChecker, "K8JtBfOegTwp6s+6EcmHs3Ou+4c=");

_c = IeChecker;
/* harmony default export */ __webpack_exports__["default"] = (IeChecker);

var _c;

$RefreshReg$(_c, "IeChecker");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pZUNoZWNrZXIvSWVDaGVja2VyLnRzeCJdLCJuYW1lcyI6WyJJZUNoZWNrZXIiLCJ1c2VTdGF0ZSIsImllIiwic2V0SWUiLCJ1c2VFZmZlY3QiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxTQUE0QixHQUFHLFNBQS9CQSxTQUErQixHQUFNO0FBQUE7O0FBQUEsa0JBQ3JCQywrQ0FBUSxDQUFVLEtBQVYsQ0FEYTtBQUFBLE1BQ2xDQyxFQURrQztBQUFBLE1BQzlCQyxLQUQ4Qjs7QUFHekNDLGtEQUFTLENBQUMsWUFBTTtBQUNkLGNBQXFCO0FBQ25CLFVBQUlDLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCRixTQUFqQzs7QUFFQSxVQUNFQSxTQUFTLENBQUNHLE9BQVYsQ0FBa0IsU0FBbEIsS0FBZ0MsQ0FBQyxDQUFqQyxJQUNBSCxTQUFTLENBQUNHLE9BQVYsQ0FBa0IsTUFBbEIsS0FBNkIsQ0FBQyxDQUZoQyxFQUdFO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0FQLGFBQUssQ0FBQyxJQUFELENBQUw7QUFDRDtBQUNGO0FBQ0YsR0FaUSxDQUFUO0FBY0Esc0JBQ0U7QUFBQSxjQUNHRCxFQUFFLGdCQUNEO0FBQUssZUFBUyxFQUFFUyx5RUFBaEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVBLHdFQUFoQjtBQUFBLGdDQUNFLDhEQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsd0VBQUQ7QUFBYSx1QkFBYSxFQUFFLENBQUMsZUFBRDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQyxHQVFEO0FBVEosbUJBREY7QUFjRCxDQS9CRDs7R0FBTVgsUzs7S0FBQUEsUztBQWlDTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NjVlYjM0OGQzYTNiZmQ3MmQzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaWVDaGVja2VyVHlwZSBmcm9tIFwiLi9pZUNoZWNrZXJUeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaWVDaGVja2VyLm1vZHVsZS5zY3NzXCI7XG5cbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uSGVhZGluZy9TZWN0aW9uSGVhZGluZ1wiO1xuaW1wb3J0IFNlY3Rpb25UZXh0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb25UZXh0L1NlY3Rpb25UZXh0XCI7XG5cbmNvbnN0IEllQ2hlY2tlcjogRkM8aWVDaGVja2VyVHlwZT4gPSAoKSA9PiB7XG4gIGNvbnN0IFtpZSwgc2V0SWVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgbGV0IHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgICBpZiAoXG4gICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKFwiVHJpZGVudFwiKSAhPSAtMSB8fFxuICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgIT0gLTFcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiKTtcbiAgICAgICAgc2V0SWUodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aWUgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWVPdmVybGF5fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmllV2luZG93fT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGluZz7jgZPjga7jg5rjg7zjgrjjga9JReOBr+mdnuWvvuW/nOOBp+OBmeOAgjwvU2VjdGlvbkhlYWRpbmc+XG4gICAgICAgICAgICA8U2VjdGlvblRleHQgcGFyYWdyYXBoVGV4dD17W1wi5bSp44KM44Gf44Oa44O844K444KS44GC44GI44Gm6KaL44Gf44GEXCJdfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIFwiXCJcbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZUNoZWNrZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9