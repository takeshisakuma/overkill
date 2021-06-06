self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/countdownTimer/CountdownTimer.tsx":
/*!******************************************************!*\
  !*** ./components/countdownTimer/CountdownTimer.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_facto_Desktop_overkill_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countdownTimer.module.scss */ "./components/countdownTimer/countdownTimer.module.scss");
/* harmony import */ var _countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\components\\countdownTimer\\CountdownTimer.tsx",
    _this = undefined;




var CountdownTimer = function CountdownTimer(_ref) {
  (0,C_Users_facto_Desktop_overkill_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  //月は0からなので1小さく指定
  var endDate = new Date(2022, 5, 15);
  var endTime = endDate.getTime();
  var jk;

  var getCount = function getCount() {
    var nowDate = new Date();
    var nowTime = nowDate.getTime();
    var diff;

    if (endTime >= nowTime) {
      diff = endTime - nowTime;
    } else {
      diff = 0;
    } //日


    var day = diff / (1000 * 60 * 60 * 24); //日未満

    var lessDay = diff % (1000 * 60 * 60 * 24); //時

    var time = lessDay / (1000 * 60 * 60); //時未満

    var lessTime = lessDay % (1000 * 60 * 60); //分

    var minute = lessTime / (1000 * 60); //分未満

    var lessMinute = lessTime % (1000 * 60); //秒

    var second = lessMinute / 1000; //切り捨て

    var truncatedDay = Math.floor(day);
    var truncatedTime = Math.floor(time);
    var truncatedMinute = Math.floor(minute);
    var truncatedSecond = Math.floor(second);
    jk = truncatedDay;
  };

  setInterval(getCount, 1000);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = CountdownTimer;
/* harmony default export */ __webpack_exports__["default"] = (CountdownTimer);

var _c;

$RefreshReg$(_c, "CountdownTimer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJlbmREYXRlIiwiRGF0ZSIsImVuZFRpbWUiLCJnZXRUaW1lIiwiamsiLCJnZXRDb3VudCIsIm5vd0RhdGUiLCJub3dUaW1lIiwiZGlmZiIsImRheSIsImxlc3NEYXkiLCJ0aW1lIiwibGVzc1RpbWUiLCJtaW51dGUiLCJsZXNzTWludXRlIiwic2Vjb25kIiwidHJ1bmNhdGVkRGF5IiwiTWF0aCIsImZsb29yIiwidHJ1bmNhdGVkVGltZSIsInRydW5jYXRlZE1pbnV0ZSIsInRydW5jYXRlZFNlY29uZCIsInNldEludGVydmFsIiwic3R5bGVzIiwiYWFhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxjQUFzQyxHQUFHLFNBQXpDQSxjQUF5QyxPQUFRO0FBQUE7O0FBQ3JEO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLElBQUlDLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixDQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxPQUFSLEVBQWhCO0FBRUEsTUFBSUMsRUFBSjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFFBQU1DLE9BQU8sR0FBRyxJQUFJTCxJQUFKLEVBQWhCO0FBQ0EsUUFBTU0sT0FBTyxHQUFHRCxPQUFPLENBQUNILE9BQVIsRUFBaEI7QUFFQSxRQUFJSyxJQUFKOztBQUNBLFFBQUlOLE9BQU8sSUFBSUssT0FBZixFQUF3QjtBQUN0QkMsVUFBSSxHQUFHTixPQUFPLEdBQUdLLE9BQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xDLFVBQUksR0FBRyxDQUFQO0FBQ0QsS0FUb0IsQ0FXckI7OztBQUNBLFFBQU1DLEdBQUcsR0FBR0QsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBaEIsQ0FacUIsQ0FjckI7O0FBQ0EsUUFBTUUsT0FBTyxHQUFHRixJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFwQixDQWZxQixDQWlCckI7O0FBQ0EsUUFBTUcsSUFBSSxHQUFHRCxPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBcEIsQ0FsQnFCLENBb0JyQjs7QUFDQSxRQUFNRSxRQUFRLEdBQUdGLE9BQU8sSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUF4QixDQXJCcUIsQ0F1QnJCOztBQUNBLFFBQU1HLE1BQU0sR0FBR0QsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUF2QixDQXhCcUIsQ0EwQnJCOztBQUNBLFFBQU1FLFVBQVUsR0FBR0YsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUEzQixDQTNCcUIsQ0E2QnJCOztBQUNBLFFBQU1HLE1BQU0sR0FBR0QsVUFBVSxHQUFHLElBQTVCLENBOUJxQixDQWdDckI7O0FBQ0EsUUFBTUUsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsR0FBWCxDQUFyQjtBQUNBLFFBQU1VLGFBQWEsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdQLElBQVgsQ0FBdEI7QUFDQSxRQUFNUyxlQUFlLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxNQUFYLENBQXhCO0FBQ0EsUUFBTVEsZUFBZSxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsTUFBWCxDQUF4QjtBQUNBWCxNQUFFLEdBQUdZLFlBQUw7QUFDRCxHQXRDRDs7QUF3Q0FNLGFBQVcsQ0FBQ2pCLFFBQUQsRUFBVyxJQUFYLENBQVg7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFFa0Isd0VBQVVDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWdCRCxDQWhFRDs7S0FBTXpCLGM7QUFrRU4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGMyMDdmZjQwNzdmZmFhMWE0MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGRvd25UaW1lclR5cGUgZnJvbSBcIi4vY291bnRkb3duVGltZXJUeXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY291bnRkb3duVGltZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQ291bnRkb3duVGltZXI6IEZDPGNvdW50ZG93blRpbWVyVHlwZT4gPSAoe30pID0+IHtcbiAgLy/mnIjjga8w44GL44KJ44Gq44Gu44GnMeWwj+OBleOBj+aMh+WumlxuICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoMjAyMiwgNSwgMTUpO1xuICBjb25zdCBlbmRUaW1lID0gZW5kRGF0ZS5nZXRUaW1lKCk7XG5cbiAgbGV0IGprO1xuXG4gIGNvbnN0IGdldENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG5vd1RpbWUgPSBub3dEYXRlLmdldFRpbWUoKTtcblxuICAgIGxldCBkaWZmO1xuICAgIGlmIChlbmRUaW1lID49IG5vd1RpbWUpIHtcbiAgICAgIGRpZmYgPSBlbmRUaW1lIC0gbm93VGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlmZiA9IDA7XG4gICAgfVxuXG4gICAgLy/ml6VcbiAgICBjb25zdCBkYXkgPSBkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gICAgLy/ml6XmnKrmuoBcbiAgICBjb25zdCBsZXNzRGF5ID0gZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAgIC8v5pmCXG4gICAgY29uc3QgdGltZSA9IGxlc3NEYXkgLyAoMTAwMCAqIDYwICogNjApO1xuXG4gICAgLy/mmYLmnKrmuoBcbiAgICBjb25zdCBsZXNzVGltZSA9IGxlc3NEYXkgJSAoMTAwMCAqIDYwICogNjApO1xuXG4gICAgLy/liIZcbiAgICBjb25zdCBtaW51dGUgPSBsZXNzVGltZSAvICgxMDAwICogNjApO1xuXG4gICAgLy/liIbmnKrmuoBcbiAgICBjb25zdCBsZXNzTWludXRlID0gbGVzc1RpbWUgJSAoMTAwMCAqIDYwKTtcblxuICAgIC8v56eSXG4gICAgY29uc3Qgc2Vjb25kID0gbGVzc01pbnV0ZSAvIDEwMDA7XG5cbiAgICAvL+WIh+OCiuaNqOOBplxuICAgIGNvbnN0IHRydW5jYXRlZERheSA9IE1hdGguZmxvb3IoZGF5KTtcbiAgICBjb25zdCB0cnVuY2F0ZWRUaW1lID0gTWF0aC5mbG9vcih0aW1lKTtcbiAgICBjb25zdCB0cnVuY2F0ZWRNaW51dGUgPSBNYXRoLmZsb29yKG1pbnV0ZSk7XG4gICAgY29uc3QgdHJ1bmNhdGVkU2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQpO1xuICAgIGprID0gdHJ1bmNhdGVkRGF5O1xuICB9O1xuXG4gIHNldEludGVydmFsKGdldENvdW50LCAxMDAwKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT5cbiAgICAgICAgey8qXG4gICAgICAgIDxzcGFuPnt0cnVuY2F0ZWREYXl9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7ml6U8L3NwYW4+XG4gICAgICAgIDxzcGFuPnt0cnVuY2F0ZWRUaW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5pmC6ZaTPC9zcGFuPlxuICAgICAgICA8c3Bhbj57dHJ1bmNhdGVkTWludXRlfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5YiGPC9zcGFuPlxuICAgICAgICA8c3Bhbj57dHJ1bmNhdGVkU2Vjb25kfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+56eSPC9zcGFuPlxuICAgICAgICAqL31cbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==