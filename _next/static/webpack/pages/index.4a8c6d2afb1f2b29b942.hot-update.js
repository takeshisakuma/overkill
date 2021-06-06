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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      ieMust = _useState2[0],
      setIeMust = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (true) {
      var userAgent = window.navigator.userAgent;

      if (userAgent.indexOf("Trident") != -1 || userAgent.indexOf("MSIE") != -1) {
        if (ieMust === false) {
          setIe(true);
        }
      }
    }
  });

  var offIe = function offIe(e) {
    e.preventDefault();
    setIeMust(true);
    setIe(false);
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
            lineNumber: 40,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sectionTextWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sectionText_SectionText__WEBPACK_IMPORTED_MODULE_3__.default, {
            paragraphText: ["罪深いIEユーザーのあなたに与えられた選択肢は3つです。"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ieOptionGroupWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ieOptionGroup),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ieOptionMember),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ieOptionAnchor),
                href: "https://www.google.com/?hl=ja",
                children: "Google\u691C\u7D22\u3078"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ieOptionAnchor),
                href: "https://www.microsoft.com/ja-jp/edge",
                children: "Microsoft Edge\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: (_ieChecker_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ieOptionAnchor),
                href: "/",
                onClick: offIe,
                children: "\u3053\u306E\u307E\u307E\u5D29\u308C\u305F\u30DA\u30FC\u30B8\u3092\u898B\u308B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, _this) : ""
  }, void 0, false);
};

_s(IeChecker, "oY8A6FGG0p7NCdT1xNm2Sb+prf8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pZUNoZWNrZXIvSWVDaGVja2VyLnRzeCJdLCJuYW1lcyI6WyJJZUNoZWNrZXIiLCJ1c2VTdGF0ZSIsImllIiwic2V0SWUiLCJpZU11c3QiLCJzZXRJZU11c3QiLCJ1c2VFZmZlY3QiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJpbmRleE9mIiwib2ZmSWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBNEIsR0FBRyxTQUEvQkEsU0FBK0IsR0FBTTtBQUFBOztBQUFBLGtCQUNyQkMsK0NBQVEsQ0FBVSxLQUFWLENBRGE7QUFBQSxNQUNsQ0MsRUFEa0M7QUFBQSxNQUM5QkMsS0FEOEI7O0FBQUEsbUJBRWJGLCtDQUFRLENBQVUsS0FBVixDQUZLO0FBQUEsTUFFbENHLE1BRmtDO0FBQUEsTUFFMUJDLFNBRjBCOztBQUl6Q0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsY0FBcUI7QUFDbkIsVUFBSUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJGLFNBQWpDOztBQUVBLFVBQ0VBLFNBQVMsQ0FBQ0csT0FBVixDQUFrQixTQUFsQixLQUFnQyxDQUFDLENBQWpDLElBQ0FILFNBQVMsQ0FBQ0csT0FBVixDQUFrQixNQUFsQixLQUE2QixDQUFDLENBRmhDLEVBR0U7QUFDQSxZQUFJTixNQUFNLEtBQUssS0FBZixFQUFzQjtBQUNwQkQsZUFBSyxDQUFDLElBQUQsQ0FBTDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBYlEsQ0FBVDs7QUFlQSxNQUFNUSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFELEVBQTJDO0FBQ3ZEQSxLQUFDLENBQUNDLGNBQUY7QUFDQVIsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBRixTQUFLLENBQUMsS0FBRCxDQUFMO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFBLGNBQ0dELEVBQUUsZ0JBQ0Q7QUFBSyxlQUFTLEVBQUVZLHlFQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEsd0VBQWhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSxxRkFBaEI7QUFBQSxpQ0FDRSw4REFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRTtBQUFLLG1CQUFTLEVBQUVBLGtGQUFoQjtBQUFBLGlDQUNFLDhEQUFDLHdFQUFEO0FBQ0UseUJBQWEsRUFBRSxDQUNiLDhCQURhO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBY0U7QUFBSyxtQkFBUyxFQUFFQSxvRkFBaEI7QUFBQSxpQ0FDRTtBQUFJLHFCQUFTLEVBQUVBLDZFQUFmO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFFQSw4RUFBZjtBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBRUEsOEVBRGI7QUFFRSxvQkFBSSxFQUFDLCtCQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVNFO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFFQSw4RUFEYjtBQUVFLG9CQUFJLEVBQUMsc0NBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGLGVBaUJFO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFFQSw4RUFBZDtBQUFxQyxvQkFBSSxFQUFDLEdBQTFDO0FBQThDLHVCQUFPLEVBQUVILEtBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREMsR0E0Q0Q7QUE3Q0osbUJBREY7QUFrREQsQ0EzRUQ7O0dBQU1YLFM7O0tBQUFBLFM7QUE2RU4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGE4YzZkMmFmYjFmMmIyOWI5NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGllQ2hlY2tlclR5cGUgZnJvbSBcIi4vaWVDaGVja2VyVHlwZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2llQ2hlY2tlci5tb2R1bGUuc2Nzc1wiO1xuXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbkhlYWRpbmcvU2VjdGlvbkhlYWRpbmdcIjtcbmltcG9ydCBTZWN0aW9uVGV4dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uVGV4dC9TZWN0aW9uVGV4dFwiO1xuXG5jb25zdCBJZUNoZWNrZXI6IEZDPGllQ2hlY2tlclR5cGU+ID0gKCkgPT4ge1xuICBjb25zdCBbaWUsIHNldEllXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2llTXVzdCwgc2V0SWVNdXN0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIGxldCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICAgICAgaWYgKFxuICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZihcIlRyaWRlbnRcIikgIT0gLTEgfHxcbiAgICAgICAgdXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpICE9IC0xXG4gICAgICApIHtcbiAgICAgICAgaWYgKGllTXVzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBzZXRJZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgb2ZmSWUgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJZU11c3QodHJ1ZSk7XG4gICAgc2V0SWUoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pZU92ZXJsYXl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWVXaW5kb3d9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1dyYXBwZXJ9PlxuICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRpbmc+XG4gICAgICAgICAgICAgICAg44GT44Gu44Oa44O844K444GvSW50ZXJuZXQgRXhwbG9yZXLjga/pnZ7lr77lv5zjgafjgZnjgIJcbiAgICAgICAgICAgICAgPC9TZWN0aW9uSGVhZGluZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uVGV4dFdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8U2VjdGlvblRleHRcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhUZXh0PXtbXG4gICAgICAgICAgICAgICAgICBcIue9qua3seOBhElF44Om44O844K244O844Gu44GC44Gq44Gf44Gr5LiO44GI44KJ44KM44Gf6YG45oqe6IKi44GvM+OBpOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pZU9wdGlvbkdyb3VwV3JhcHBlcn0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5pZU9wdGlvbkdyb3VwfT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuaWVPcHRpb25NZW1iZXJ9PlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWVPcHRpb25BbmNob3J9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tLz9obD1qYVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEdvb2dsZeaknOe0ouOBuFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWVPcHRpb25BbmNob3J9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5taWNyb3NvZnQuY29tL2phLWpwL2VkZ2VcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBNaWNyb3NvZnQgRWRnZeOCkuODgOOCpuODs+ODreODvOODieOBmeOCi1xuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaWVPcHRpb25BbmNob3J9IGhyZWY9XCIvXCIgb25DbGljaz17b2ZmSWV9PlxuICAgICAgICAgICAgICAgICAgICDjgZPjga7jgb7jgb7ltKnjgozjgZ/jg5rjg7zjgrjjgpLopovjgotcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgXCJcIlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEllQ2hlY2tlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=