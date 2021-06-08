self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/browserList/BrowserList.tsx":
/*!************************************************!*\
  !*** ./components/browserList/BrowserList.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _browserList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browserList.module.scss */ "./components/browserList/browserList.module.scss");
/* harmony import */ var _browserList_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_browserList_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\components\\browserList\\BrowserList.tsx",
    _this = undefined;




var BrowserList = function BrowserList(_ref) {
  var browserData = _ref.browserData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: (_browserList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().browserListCardGroup),
      children: browserData.map(function (member, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: [(_browserList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().browserListCardMember), "browserAnimation"].join(" "),
          style: {
            backgroundImage: "url(/overkill/browser/".concat(member.img, ".svg)")
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_browserList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().browserListNameWrapper),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_browserList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().browserListName),
              children: member.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_browserList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().browserListTextWrapper),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_browserList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().browserListText),
              children: member.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_browserList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().browserListButtonWrapper),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_browserList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().browserListButton),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: member.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: (_browserList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().browserListAnchor),
                children: "download"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
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

_c = BrowserList;
/* harmony default export */ __webpack_exports__["default"] = (BrowserList);

var _c;

$RefreshReg$(_c, "BrowserList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9icm93c2VyTGlzdC9Ccm93c2VyTGlzdC50c3giXSwibmFtZXMiOlsiQnJvd3Nlckxpc3QiLCJicm93c2VyRGF0YSIsInN0eWxlcyIsIm1hcCIsIm1lbWJlciIsImluZGV4Iiwiam9pbiIsImJhY2tncm91bmRJbWFnZSIsImltZyIsIm5hbWUiLCJ0ZXh0IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7O0FBRUEsSUFBTUEsV0FBZ0MsR0FBRyxTQUFuQ0EsV0FBbUMsT0FBcUI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQzVELHNCQUNFO0FBQUEsMkJBQ0U7QUFBSSxlQUFTLEVBQUVDLHNGQUFmO0FBQUEsZ0JBQ0dELFdBQVcsQ0FBQ0UsR0FBWixDQUFnQixVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSw0QkFDZjtBQUVFLG1CQUFTLEVBQUUsQ0FBQ0gsdUZBQUQsRUFBK0Isa0JBQS9CLEVBQW1ESSxJQUFuRCxDQUNULEdBRFMsQ0FGYjtBQUtFLGVBQUssRUFBRTtBQUNMQywyQkFBZSxrQ0FBMkJILE1BQU0sQ0FBQ0ksR0FBbEM7QUFEVixXQUxUO0FBQUEsa0NBU0U7QUFBSyxxQkFBUyxFQUFFTix3RkFBaEI7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUVBLGlGQUFkO0FBQUEsd0JBQXVDRSxNQUFNLENBQUNLO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBWUU7QUFBSyxxQkFBUyxFQUFFUCx3RkFBaEI7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUVBLGlGQUFkO0FBQUEsd0JBQXVDRSxNQUFNLENBQUNNO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGLGVBZ0JFO0FBQUsscUJBQVMsRUFBRVIsMEZBQWhCO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFFQSxtRkFBZDtBQUFBLHFDQUNFO0FBQ0Usb0JBQUksRUFBRUUsTUFBTSxDQUFDTyxHQURmO0FBRUUsc0JBQU0sRUFBQyxRQUZUO0FBR0UsbUJBQUcsRUFBQyxxQkFITjtBQUlFLHlCQUFTLEVBQUVULG1GQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJGO0FBQUEsV0FDT0csS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFxQ0QsQ0F0Q0Q7O0tBQU1MLFc7QUF3Q04sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjIyOGIyMTI0YjU1Y2FmODk0MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGJyb3dzZXJMaXN0VHlwZSBmcm9tIFwiLi9icm93c2VyTGlzdFR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9icm93c2VyTGlzdC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBCcm93c2VyTGlzdDogRkM8YnJvd3Nlckxpc3RUeXBlPiA9ICh7IGJyb3dzZXJEYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmJyb3dzZXJMaXN0Q2FyZEdyb3VwfT5cbiAgICAgICAge2Jyb3dzZXJEYXRhLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17W3N0eWxlcy5icm93c2VyTGlzdENhcmRNZW1iZXIsIFwiYnJvd3NlckFuaW1hdGlvblwiXS5qb2luKFxuICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvb3ZlcmtpbGwvYnJvd3Nlci8ke21lbWJlci5pbWd9LnN2ZylgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyb3dzZXJMaXN0TmFtZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5icm93c2VyTGlzdE5hbWV9PnttZW1iZXIubmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnJvd3Nlckxpc3RUZXh0V3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJyb3dzZXJMaXN0VGV4dH0+e21lbWJlci50ZXh0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyb3dzZXJMaXN0QnV0dG9uV3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJyb3dzZXJMaXN0QnV0dG9ufT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17bWVtYmVyLnVybH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJyb3dzZXJMaXN0QW5jaG9yfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGRvd25sb2FkXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=