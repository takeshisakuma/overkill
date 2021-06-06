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
    _this = undefined,
    _s = $RefreshSig$();




var CountdownTimer = function CountdownTimer(_ref) {
  _s();

  (0,C_Users_facto_Desktop_overkill_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      now = _useState[0],
      setNow = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      daysLeft = _useState2[0],
      setDaysLeft = _useState2[1]; //月は0からなので1小さく指定


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
    setDaysLeft(truncatedDay);
  };

  setInterval(getCount, 1000);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: daysLeft
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CountdownTimer, "s0CgujnhtbCoRa4JN2kjvM6A6LM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJ1c2VTdGF0ZSIsIm5vdyIsInNldE5vdyIsImRheXNMZWZ0Iiwic2V0RGF5c0xlZnQiLCJlbmREYXRlIiwiRGF0ZSIsImVuZFRpbWUiLCJnZXRUaW1lIiwiamsiLCJnZXRDb3VudCIsIm5vd0RhdGUiLCJub3dUaW1lIiwiZGlmZiIsImRheSIsImxlc3NEYXkiLCJ0aW1lIiwibGVzc1RpbWUiLCJtaW51dGUiLCJsZXNzTWludXRlIiwic2Vjb25kIiwidHJ1bmNhdGVkRGF5IiwiTWF0aCIsImZsb29yIiwidHJ1bmNhdGVkVGltZSIsInRydW5jYXRlZE1pbnV0ZSIsInRydW5jYXRlZFNlY29uZCIsInNldEludGVydmFsIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7O0FBRUEsSUFBTUEsY0FBc0MsR0FBRyxTQUF6Q0EsY0FBeUMsT0FBUTtBQUFBOztBQUFBOztBQUFBLGtCQUMvQkMsK0NBQVEsRUFEdUI7QUFBQSxNQUM5Q0MsR0FEOEM7QUFBQSxNQUN6Q0MsTUFEeUM7O0FBQUEsbUJBRXJCRiwrQ0FBUSxFQUZhO0FBQUEsTUFFOUNHLFFBRjhDO0FBQUEsTUFFcENDLFdBRm9DLGtCQUlyRDs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLElBQUlDLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixDQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxPQUFSLEVBQWhCO0FBRUEsTUFBSUMsRUFBSjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFFBQU1DLE9BQU8sR0FBRyxJQUFJTCxJQUFKLEVBQWhCO0FBQ0EsUUFBTU0sT0FBTyxHQUFHRCxPQUFPLENBQUNILE9BQVIsRUFBaEI7QUFFQSxRQUFJSyxJQUFKOztBQUNBLFFBQUlOLE9BQU8sSUFBSUssT0FBZixFQUF3QjtBQUN0QkMsVUFBSSxHQUFHTixPQUFPLEdBQUdLLE9BQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xDLFVBQUksR0FBRyxDQUFQO0FBQ0QsS0FUb0IsQ0FXckI7OztBQUNBLFFBQU1DLEdBQUcsR0FBR0QsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBaEIsQ0FacUIsQ0FjckI7O0FBQ0EsUUFBTUUsT0FBTyxHQUFHRixJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFwQixDQWZxQixDQWlCckI7O0FBQ0EsUUFBTUcsSUFBSSxHQUFHRCxPQUFPLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBcEIsQ0FsQnFCLENBb0JyQjs7QUFDQSxRQUFNRSxRQUFRLEdBQUdGLE9BQU8sSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUF4QixDQXJCcUIsQ0F1QnJCOztBQUNBLFFBQU1HLE1BQU0sR0FBR0QsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUF2QixDQXhCcUIsQ0EwQnJCOztBQUNBLFFBQU1FLFVBQVUsR0FBR0YsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUEzQixDQTNCcUIsQ0E2QnJCOztBQUNBLFFBQU1HLE1BQU0sR0FBR0QsVUFBVSxHQUFHLElBQTVCLENBOUJxQixDQWdDckI7O0FBQ0EsUUFBTUUsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsR0FBWCxDQUFyQjtBQUNBLFFBQU1VLGFBQWEsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdQLElBQVgsQ0FBdEI7QUFDQSxRQUFNUyxlQUFlLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxNQUFYLENBQXhCO0FBQ0EsUUFBTVEsZUFBZSxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsTUFBWCxDQUF4QjtBQUNBaEIsZUFBVyxDQUFDaUIsWUFBRCxDQUFYO0FBQ0QsR0F0Q0Q7O0FBd0NBTSxhQUFXLENBQUNqQixRQUFELEVBQVcsSUFBWCxDQUFYO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRWtCLHdFQUFkO0FBQUEsZ0JBQ0d6QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWlCRCxDQXBFRDs7R0FBTUosYzs7S0FBQUEsYztBQXNFTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MzJhNmQ0NGQzYWExMDJhYmRlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyVHlwZSBmcm9tIFwiLi9jb3VudGRvd25UaW1lclR5cGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogRkM8Y291bnRkb3duVGltZXJUeXBlPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuICBjb25zdCBbZGF5c0xlZnQsIHNldERheXNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcblxuICAvL+aciOOBrzDjgYvjgonjgarjga7jgacx5bCP44GV44GP5oyH5a6aXG4gIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgyMDIyLCA1LCAxNSk7XG4gIGNvbnN0IGVuZFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKTtcblxuICBsZXQgams7XG5cbiAgY29uc3QgZ2V0Q291bnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgbm93VGltZSA9IG5vd0RhdGUuZ2V0VGltZSgpO1xuXG4gICAgbGV0IGRpZmY7XG4gICAgaWYgKGVuZFRpbWUgPj0gbm93VGltZSkge1xuICAgICAgZGlmZiA9IGVuZFRpbWUgLSBub3dUaW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaWZmID0gMDtcbiAgICB9XG5cbiAgICAvL+aXpVxuICAgIGNvbnN0IGRheSA9IGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgICAvL+aXpeacqua6gFxuICAgIGNvbnN0IGxlc3NEYXkgPSBkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gICAgLy/mmYJcbiAgICBjb25zdCB0aW1lID0gbGVzc0RheSAvICgxMDAwICogNjAgKiA2MCk7XG5cbiAgICAvL+aZguacqua6gFxuICAgIGNvbnN0IGxlc3NUaW1lID0gbGVzc0RheSAlICgxMDAwICogNjAgKiA2MCk7XG5cbiAgICAvL+WIhlxuICAgIGNvbnN0IG1pbnV0ZSA9IGxlc3NUaW1lIC8gKDEwMDAgKiA2MCk7XG5cbiAgICAvL+WIhuacqua6gFxuICAgIGNvbnN0IGxlc3NNaW51dGUgPSBsZXNzVGltZSAlICgxMDAwICogNjApO1xuXG4gICAgLy/np5JcbiAgICBjb25zdCBzZWNvbmQgPSBsZXNzTWludXRlIC8gMTAwMDtcblxuICAgIC8v5YiH44KK5o2o44GmXG4gICAgY29uc3QgdHJ1bmNhdGVkRGF5ID0gTWF0aC5mbG9vcihkYXkpO1xuICAgIGNvbnN0IHRydW5jYXRlZFRpbWUgPSBNYXRoLmZsb29yKHRpbWUpO1xuICAgIGNvbnN0IHRydW5jYXRlZE1pbnV0ZSA9IE1hdGguZmxvb3IobWludXRlKTtcbiAgICBjb25zdCB0cnVuY2F0ZWRTZWNvbmQgPSBNYXRoLmZsb29yKHNlY29uZCk7XG4gICAgc2V0RGF5c0xlZnQodHJ1bmNhdGVkRGF5KTtcbiAgfTtcblxuICBzZXRJbnRlcnZhbChnZXRDb3VudCwgMTAwMCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFhYX0+XG4gICAgICAgIHtkYXlzTGVmdH1cbiAgICAgICAgey8qXG4gICAgICAgIDxzcGFuPnt0cnVuY2F0ZWREYXl9PC9zcGFuPlxuICAgICAgICA8c3Bhbj7ml6U8L3NwYW4+XG4gICAgICAgIDxzcGFuPnt0cnVuY2F0ZWRUaW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5pmC6ZaTPC9zcGFuPlxuICAgICAgICA8c3Bhbj57dHJ1bmNhdGVkTWludXRlfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+5YiGPC9zcGFuPlxuICAgICAgICA8c3Bhbj57dHJ1bmNhdGVkU2Vjb25kfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+56eSPC9zcGFuPlxuICAgICAgICAqL31cbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==