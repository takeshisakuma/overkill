self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/eventList/EventList.tsx":
/*!********************************************!*\
  !*** ./components/eventList/EventList.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventList.module.scss */ "./components/eventList/eventList.module.scss");
/* harmony import */ var _eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\components\\eventList\\EventList.tsx",
    _this = undefined;




var EventList = function EventList(_ref) {
  var eventData = _ref.eventData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: (_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().eventListCardGroup),
      children: eventData.map(function (member, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().eventListCardMember),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().eventListCardName),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().eventListImageWrapper),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/overkill/icon/".concat(member.img),
                alt: "".concat(member.name),
                className: (_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().eventListImage)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: member.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().eventListGroupWrapper),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: (_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().eventListGroup),
              children: member.list.map(function (eventName, index) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: (_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().eventListMember),
                  children: eventName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 19
                }, _this);
              })
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

_c = EventList;
/* harmony default export */ __webpack_exports__["default"] = (EventList);

var _c;

$RefreshReg$(_c, "EventList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudExpc3QvRXZlbnRMaXN0LnRzeCJdLCJuYW1lcyI6WyJFdmVudExpc3QiLCJldmVudERhdGEiLCJzdHlsZXMiLCJtYXAiLCJtZW1iZXIiLCJpbmRleCIsImltZyIsIm5hbWUiLCJldmVudExpc3RJbWFnZSIsImxpc3QiLCJldmVudE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxTQUE0QixHQUFHLFNBQS9CQSxTQUErQixPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDdEQsc0JBQ0U7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBRUMsa0ZBQWY7QUFBQSxnQkFDR0QsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsNEJBQ2I7QUFBZ0IsbUJBQVMsRUFBRUgsbUZBQTNCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFQSxpRkFBaEI7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUVBLHFGQUFoQjtBQUFBLHFDQUNFO0FBQ0UsbUJBQUcsMkJBQW9CRSxNQUFNLENBQUNFLEdBQTNCLENBREw7QUFFRSxtQkFBRyxZQUFLRixNQUFNLENBQUNHLElBQVosQ0FGTDtBQUdFLHlCQUFTLEVBQUVMLDhFQUFxQk07QUFIbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBVUU7QUFBQSxzQkFBSUosTUFBTSxDQUFDRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFXRTtBQUFLLHFCQUFTLEVBQUVMLHFGQUFoQjtBQUFBLG1DQUNFO0FBQUksdUJBQVMsRUFBRUEsOEVBQWY7QUFBQSx3QkFDR0UsTUFBTSxDQUFDSyxJQUFQLENBQVlOLEdBQVosQ0FBZ0IsVUFBQ08sU0FBRCxFQUFZTCxLQUFaO0FBQUEsb0NBQ2Y7QUFBSSwyQkFBUyxFQUFFSCwrRUFBZjtBQUFBLDRCQUF3Q1E7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEZTtBQUFBLGVBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQSxXQUFTTCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBMkJELENBNUJEOztLQUFNTCxTO0FBOEJOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2OWZjMTMyNWFlZDlkZGUyNjUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBldmVudExpc3RUeXBlIGZyb20gXCIuL2V2ZW50TGlzdFR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ldmVudExpc3QubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgRXZlbnRMaXN0OiBGQzxldmVudExpc3RUeXBlPiA9ICh7IGV2ZW50RGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5ldmVudExpc3RDYXJkR3JvdXB9PlxuICAgICAgICB7ZXZlbnREYXRhLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5ldmVudExpc3RDYXJkTWVtYmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRMaXN0Q2FyZE5hbWV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50TGlzdEltYWdlV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtgL292ZXJraWxsL2ljb24vJHttZW1iZXIuaW1nfWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2Ake21lbWJlci5uYW1lfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ldmVudExpc3RJbWFnZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+e21lbWJlci5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRMaXN0R3JvdXBXcmFwcGVyfT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50TGlzdEdyb3VwfT5cbiAgICAgICAgICAgICAgICB7bWVtYmVyLmxpc3QubWFwKChldmVudE5hbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRMaXN0TWVtYmVyfT57ZXZlbnROYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9