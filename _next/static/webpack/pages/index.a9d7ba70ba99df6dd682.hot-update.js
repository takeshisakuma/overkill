self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/serviceList/ServiceList.tsx":
/*!************************************************!*\
  !*** ./components/serviceList/ServiceList.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _serviceList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceList.module.scss */ "./components/serviceList/serviceList.module.scss");
/* harmony import */ var _serviceList_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_serviceList_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\components\\serviceList\\ServiceList.tsx",
    _this = undefined;




var ServiceList = function ServiceList(_ref) {
  var service = _ref.service;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: (_serviceList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().supportGroup),
      children: service.map(function (member, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: [(_serviceList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().supportMember), "serviceIconAnimation"].join(" "),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_serviceList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().supportImageWrapper),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/overkill/".concat(member.img),
              alt: member.name,
              className: (_serviceList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().supportImage)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_serviceList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().supportNameWrapper),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_serviceList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().supportName),
              children: member.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = ServiceList;
/* harmony default export */ __webpack_exports__["default"] = (ServiceList);

var _c;

$RefreshReg$(_c, "ServiceList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZXJ2aWNlTGlzdC9TZXJ2aWNlTGlzdC50c3giXSwibmFtZXMiOlsiU2VydmljZUxpc3QiLCJzZXJ2aWNlIiwic3R5bGVzIiwibWFwIiwibWVtYmVyIiwiaW5kZXgiLCJqb2luIiwiaW1nIiwibmFtZSIsInN1cHBvcnRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOztBQUVBLElBQU1BLFdBQWdDLEdBQUcsU0FBbkNBLFdBQW1DLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3hELHNCQUNFO0FBQUEsMkJBQ0U7QUFBSSxlQUFTLEVBQUVDLDhFQUFmO0FBQUEsZ0JBQ0dELE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLDRCQUNYO0FBRUUsbUJBQVMsRUFBRSxDQUFDSCwrRUFBRCxFQUF1QixzQkFBdkIsRUFBK0NJLElBQS9DLENBQW9ELEdBQXBELENBRmI7QUFBQSxrQ0FJRTtBQUFLLHFCQUFTLEVBQUVKLHFGQUFoQjtBQUFBLG1DQUNFO0FBQ0UsaUJBQUcsc0JBQWVFLE1BQU0sQ0FBQ0csR0FBdEIsQ0FETDtBQUVFLGlCQUFHLEVBQUVILE1BQU0sQ0FBQ0ksSUFGZDtBQUdFLHVCQUFTLEVBQUVOLDhFQUFtQk87QUFIaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFXRTtBQUFLLHFCQUFTLEVBQUVQLG9GQUFoQjtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBRUEsNkVBQWQ7QUFBQSx3QkFBbUNFLE1BQU0sQ0FBQ0k7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQSxXQUNPSCxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBdUJELENBeEJEOztLQUFNTCxXO0FBMEJOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE5ZDdiYTcwYmE5OWRmNmRkNjgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzZXJ2aWNlTGlzdFR5cGUgZnJvbSBcIi4vc2VydmljZUxpc3RUeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2VydmljZUxpc3QubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgU2VydmljZUxpc3Q6IEZDPHNlcnZpY2VMaXN0VHlwZT4gPSAoeyBzZXJ2aWNlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnN1cHBvcnRHcm91cH0+XG4gICAgICAgIHtzZXJ2aWNlLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17W3N0eWxlcy5zdXBwb3J0TWVtYmVyLCBcInNlcnZpY2VJY29uQW5pbWF0aW9uXCJdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VwcG9ydEltYWdlV3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2Avb3ZlcmtpbGwvJHttZW1iZXIuaW1nfWB9XG4gICAgICAgICAgICAgICAgYWx0PXttZW1iZXIubmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdXBwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VwcG9ydE5hbWVXcmFwcGVyfT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3VwcG9ydE5hbWV9PnttZW1iZXIubmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=