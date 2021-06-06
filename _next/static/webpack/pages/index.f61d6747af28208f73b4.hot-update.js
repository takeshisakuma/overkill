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

  var offIe = function offIe(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ie ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ieOverlay),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ieWindow),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sectionHeadingWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sectionHeading_SectionHeading__WEBPACK_IMPORTED_MODULE_2__.default, {
            children: "\u3053\u306E\u30DA\u30FC\u30B8\u306FInternet Explorer\u306F\u975E\u5BFE\u5FDC\u3067\u3059\u3002"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sectionTextWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sectionText_SectionText__WEBPACK_IMPORTED_MODULE_3__.default, {
            paragraphText: ["あなたに与えられた選択肢は3つです。"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.google.com/?hl=ja",
              children: "Google\u691C\u7D22\u3078"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "",
              children: "Microsoft Edge\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "/",
              onClick: offIe,
              children: "\u3053\u306E\u307E\u307E\u5D29\u308C\u305F\u30DA\u30FC\u30B8\u3092\u898B\u308B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pZUNoZWNrZXIvSWVDaGVja2VyLnRzeCJdLCJuYW1lcyI6WyJJZUNoZWNrZXIiLCJ1c2VTdGF0ZSIsImllIiwic2V0SWUiLCJ1c2VFZmZlY3QiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsIm9mZkllIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFNBQTRCLEdBQUcsU0FBL0JBLFNBQStCLEdBQU07QUFBQTs7QUFBQSxrQkFDckJDLCtDQUFRLENBQVUsS0FBVixDQURhO0FBQUEsTUFDbENDLEVBRGtDO0FBQUEsTUFDOUJDLEtBRDhCOztBQUd6Q0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsY0FBcUI7QUFDbkIsVUFBSUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJGLFNBQWpDOztBQUVBLFVBQ0VBLFNBQVMsQ0FBQ0csT0FBVixDQUFrQixTQUFsQixLQUFnQyxDQUFDLENBQWpDLElBQ0FILFNBQVMsQ0FBQ0csT0FBVixDQUFrQixNQUFsQixLQUE2QixDQUFDLENBRmhDLEVBR0U7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQVAsYUFBSyxDQUFDLElBQUQsQ0FBTDtBQUNEO0FBQ0Y7QUFDRixHQVpRLENBQVQ7O0FBY0EsTUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ25CQSxLQUFDLENBQUNDLGNBQUY7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsY0FDR1gsRUFBRSxnQkFDRDtBQUFLLGVBQVMsRUFBRVkseUVBQWhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFQSx3RUFBaEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVBLHFGQUFoQjtBQUFBLGlDQUNFLDhEQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUssbUJBQVMsRUFBRUEsa0ZBQWhCO0FBQUEsaUNBQ0UsOERBQUMsd0VBQUQ7QUFDRSx5QkFBYSxFQUFFLENBQUMsb0JBQUQ7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFZRTtBQUFBLGtDQUNFO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFDLCtCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBT0U7QUFBQSxtQ0FDRTtBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFZLHFCQUFPLEVBQUVILEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURDLEdBOEJEO0FBL0JKLG1CQURGO0FBb0NELENBekREOztHQUFNWCxTOztLQUFBQSxTO0FBMkROLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY2MWQ2NzQ3YWYyODIwOGY3M2I0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpZUNoZWNrZXJUeXBlIGZyb20gXCIuL2llQ2hlY2tlclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pZUNoZWNrZXIubW9kdWxlLnNjc3NcIjtcblxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb25IZWFkaW5nL1NlY3Rpb25IZWFkaW5nXCI7XG5pbXBvcnQgU2VjdGlvblRleHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvblRleHQvU2VjdGlvblRleHRcIjtcblxuY29uc3QgSWVDaGVja2VyOiBGQzxpZUNoZWNrZXJUeXBlPiA9ICgpID0+IHtcbiAgY29uc3QgW2llLCBzZXRJZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBsZXQgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdXNlckFnZW50LmluZGV4T2YoXCJUcmlkZW50XCIpICE9IC0xIHx8XG4gICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSAhPSAtMVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCIpO1xuICAgICAgICBzZXRJZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG9mZkllID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2llID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmllT3ZlcmxheX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pZVdpbmRvd30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nV3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxTZWN0aW9uSGVhZGluZz5cbiAgICAgICAgICAgICAgICDjgZPjga7jg5rjg7zjgrjjga9JbnRlcm5ldCBFeHBsb3JlcuOBr+mdnuWvvuW/nOOBp+OBmeOAglxuICAgICAgICAgICAgICA8L1NlY3Rpb25IZWFkaW5nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25UZXh0V3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxTZWN0aW9uVGV4dFxuICAgICAgICAgICAgICAgIHBhcmFncmFwaFRleHQ9e1tcIuOBguOBquOBn+OBq+S4juOBiOOCieOCjOOBn+mBuOaKnuiCouOBrzPjgaTjgafjgZnjgIJcIl19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vP2hsPWphXCI+R29vZ2xl5qSc57Si44G4PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPk1pY3Jvc29mdCBFZGdl44KS44OA44Km44Oz44Ot44O844OJ44GZ44KLPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBvbkNsaWNrPXtvZmZJZX0+XG4gICAgICAgICAgICAgICAgICDjgZPjga7jgb7jgb7ltKnjgozjgZ/jg5rjg7zjgrjjgpLopovjgotcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIFwiXCJcbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZUNoZWNrZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9