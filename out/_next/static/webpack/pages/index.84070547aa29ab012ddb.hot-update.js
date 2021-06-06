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
            className: (_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().eventListCardNameWrapper),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_eventList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().eventListCardNameText),
              children: member.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
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
                  lineNumber: 26,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudExpc3QvRXZlbnRMaXN0LnRzeCJdLCJuYW1lcyI6WyJFdmVudExpc3QiLCJldmVudERhdGEiLCJzdHlsZXMiLCJtYXAiLCJtZW1iZXIiLCJpbmRleCIsImltZyIsIm5hbWUiLCJldmVudExpc3RJbWFnZSIsImxpc3QiLCJldmVudE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxTQUE0QixHQUFHLFNBQS9CQSxTQUErQixPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDdEQsc0JBQ0U7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBRUMsa0ZBQWY7QUFBQSxnQkFDR0QsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsNEJBQ2I7QUFBZ0IsbUJBQVMsRUFBRUgsbUZBQTNCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFQSx3RkFBaEI7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUVBLHFGQUFoQjtBQUFBLHFDQUNFO0FBQ0UsbUJBQUcsMkJBQW9CRSxNQUFNLENBQUNFLEdBQTNCLENBREw7QUFFRSxtQkFBRyxZQUFLRixNQUFNLENBQUNHLElBQVosQ0FGTDtBQUdFLHlCQUFTLEVBQUVMLDhFQUFxQk07QUFIbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFTRTtBQUFHLHVCQUFTLEVBQUVOLHFGQUFkO0FBQUEsd0JBQTZDRSxNQUFNLENBQUNHO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBWUU7QUFBSyxxQkFBUyxFQUFFTCxxRkFBaEI7QUFBQSxtQ0FDRTtBQUFJLHVCQUFTLEVBQUVBLDhFQUFmO0FBQUEsd0JBQ0dFLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZTixHQUFaLENBQWdCLFVBQUNPLFNBQUQsRUFBWUwsS0FBWjtBQUFBLG9DQUNmO0FBQUksMkJBQVMsRUFBRUgsK0VBQWY7QUFBQSw0QkFBd0NRO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRGU7QUFBQSxlQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGO0FBQUEsV0FBU0wsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTRCRCxDQTdCRDs7S0FBTUwsUztBQStCTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NDA3MDU0N2FhMjlhYjAxMmRkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZXZlbnRMaXN0VHlwZSBmcm9tIFwiLi9ldmVudExpc3RUeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZXZlbnRMaXN0Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEV2ZW50TGlzdDogRkM8ZXZlbnRMaXN0VHlwZT4gPSAoeyBldmVudERhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRMaXN0Q2FyZEdyb3VwfT5cbiAgICAgICAge2V2ZW50RGF0YS5tYXAoKG1lbWJlciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRMaXN0Q2FyZE1lbWJlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50TGlzdENhcmROYW1lV3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRMaXN0SW1hZ2VXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2Avb3ZlcmtpbGwvaWNvbi8ke21lbWJlci5pbWd9YH1cbiAgICAgICAgICAgICAgICAgIGFsdD17YCR7bWVtYmVyLm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50TGlzdEltYWdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50TGlzdENhcmROYW1lVGV4dH0+e21lbWJlci5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudExpc3RHcm91cFdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRMaXN0R3JvdXB9PlxuICAgICAgICAgICAgICAgIHttZW1iZXIubGlzdC5tYXAoKGV2ZW50TmFtZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5ldmVudExpc3RNZW1iZXJ9PntldmVudE5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=