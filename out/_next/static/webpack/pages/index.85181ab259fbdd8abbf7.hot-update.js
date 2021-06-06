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
      end = _useState2[0],
      setEnd = _useState2[1];

  var getNow = function getNow() {
    var nowDate = new Date();
    var nowTime = nowDate.getTime();
    setNow("fe");
    console.log("gyl");
  };

  getNow();
  var nowDate = new Date();
  var nowTime = nowDate.getTime(); //月は0からなので1小さく指定

  var endDate = new Date(2022, 5, 15);
  var endTime = endDate.getTime();
  var diff;

  if (endTime > nowTime) {
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

  var runcatedDay = Math.floor(day);
  var runcatedTime = Math.floor(time);
  var runcatedMinute = Math.floor(minute);
  var runcatedSecond = Math.floor(second);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_countdownTimer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aaa),
      children: [now, runcatedDay, "\u65E5", runcatedTime, "\u6642\u9593", runcatedMinute, "\u5206", runcatedSecond, "\u79D2"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CountdownTimer, "ZxX7HVPyiRU1gnW80X9oHorCeE4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9Db3VudGRvd25UaW1lci50c3giXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJ1c2VTdGF0ZSIsIm5vdyIsInNldE5vdyIsImVuZCIsInNldEVuZCIsImdldE5vdyIsIm5vd0RhdGUiLCJEYXRlIiwibm93VGltZSIsImdldFRpbWUiLCJjb25zb2xlIiwibG9nIiwiZW5kRGF0ZSIsImVuZFRpbWUiLCJkaWZmIiwiZGF5IiwibGVzc0RheSIsInRpbWUiLCJsZXNzVGltZSIsIm1pbnV0ZSIsImxlc3NNaW51dGUiLCJzZWNvbmQiLCJydW5jYXRlZERheSIsIk1hdGgiLCJmbG9vciIsInJ1bmNhdGVkVGltZSIsInJ1bmNhdGVkTWludXRlIiwicnVuY2F0ZWRTZWNvbmQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxjQUFzQyxHQUFHLFNBQXpDQSxjQUF5QyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsa0JBQy9CQywrQ0FBUSxFQUR1QjtBQUFBLE1BQzlDQyxHQUQ4QztBQUFBLE1BQ3pDQyxNQUR5Qzs7QUFBQSxtQkFFL0JGLCtDQUFRLEVBRnVCO0FBQUEsTUFFOUNHLEdBRjhDO0FBQUEsTUFFekNDLE1BRnlDOztBQUdyRCxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQU1DLE9BQU8sR0FBRyxJQUFJQyxJQUFKLEVBQWhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHRixPQUFPLENBQUNHLE9BQVIsRUFBaEI7QUFDQVAsVUFBTSxDQUFDLElBQUQsQ0FBTjtBQUNBUSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0QsR0FMRDs7QUFNQU4sUUFBTTtBQUVOLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxJQUFKLEVBQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixPQUFPLENBQUNHLE9BQVIsRUFBaEIsQ0FacUQsQ0FjckQ7O0FBQ0EsTUFBTUcsT0FBTyxHQUFHLElBQUlMLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixDQUFoQjtBQUNBLE1BQU1NLE9BQU8sR0FBR0QsT0FBTyxDQUFDSCxPQUFSLEVBQWhCO0FBRUEsTUFBSUssSUFBSjs7QUFDQSxNQUFJRCxPQUFPLEdBQUdMLE9BQWQsRUFBdUI7QUFDckJNLFFBQUksR0FBR0QsT0FBTyxHQUFHTCxPQUFqQjtBQUNELEdBRkQsTUFFTztBQUNMTSxRQUFJLEdBQUcsQ0FBUDtBQUNELEdBdkJvRCxDQXlCckQ7OztBQUNBLE1BQUlDLEdBQUcsR0FBR0QsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBZCxDQTFCcUQsQ0E0QnJEOztBQUNBLE1BQUlFLE9BQU8sR0FBR0YsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBbEIsQ0E3QnFELENBK0JyRDs7QUFDQSxNQUFJRyxJQUFJLEdBQUdELE9BQU8sSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFsQixDQWhDcUQsQ0FrQ3JEOztBQUNBLE1BQUlFLFFBQVEsR0FBR0YsT0FBTyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQXRCLENBbkNxRCxDQXFDckQ7O0FBQ0EsTUFBSUcsTUFBTSxHQUFHRCxRQUFRLElBQUksT0FBTyxFQUFYLENBQXJCLENBdENxRCxDQXdDckQ7O0FBQ0EsTUFBSUUsVUFBVSxHQUFHRixRQUFRLElBQUksT0FBTyxFQUFYLENBQXpCLENBekNxRCxDQTJDckQ7O0FBQ0EsTUFBSUcsTUFBTSxHQUFHRCxVQUFVLEdBQUcsSUFBMUIsQ0E1Q3FELENBOENyRDs7QUFDQSxNQUFJRSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxHQUFYLENBQWxCO0FBQ0EsTUFBSVUsWUFBWSxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBV1AsSUFBWCxDQUFuQjtBQUNBLE1BQUlTLGNBQWMsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdMLE1BQVgsQ0FBckI7QUFDQSxNQUFJUSxjQUFjLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxNQUFYLENBQXJCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRU8sd0VBQWQ7QUFBQSxpQkFDRzNCLEdBREgsRUFFR3FCLFdBRkgsWUFFaUJHLFlBRmpCLGtCQUVpQ0MsY0FGakMsWUFFa0RDLGNBRmxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBUUQsQ0E1REQ7O0dBQU01QixjOztLQUFBQSxjO0FBOEROLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg1MTgxYWIyNTlmYmRkOGFiYmY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRkb3duVGltZXJUeXBlIGZyb20gXCIuL2NvdW50ZG93blRpbWVyVHlwZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvdW50ZG93blRpbWVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IENvdW50ZG93blRpbWVyOiBGQzxjb3VudGRvd25UaW1lclR5cGU+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtub3csIHNldE5vd10gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG4gIGNvbnN0IFtlbmQsIHNldEVuZF0gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG4gIGNvbnN0IGdldE5vdyA9ICgpID0+IHtcbiAgICBjb25zdCBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBub3dUaW1lID0gbm93RGF0ZS5nZXRUaW1lKCk7XG4gICAgc2V0Tm93KFwiZmVcIik7XG4gICAgY29uc29sZS5sb2coXCJneWxcIik7XG4gIH07XG4gIGdldE5vdygpO1xuXG4gIGNvbnN0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBub3dUaW1lID0gbm93RGF0ZS5nZXRUaW1lKCk7XG5cbiAgLy/mnIjjga8w44GL44KJ44Gq44Gu44GnMeWwj+OBleOBj+aMh+WumlxuICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoMjAyMiwgNSwgMTUpO1xuICBjb25zdCBlbmRUaW1lID0gZW5kRGF0ZS5nZXRUaW1lKCk7XG5cbiAgbGV0IGRpZmY7XG4gIGlmIChlbmRUaW1lID4gbm93VGltZSkge1xuICAgIGRpZmYgPSBlbmRUaW1lIC0gbm93VGltZTtcbiAgfSBlbHNlIHtcbiAgICBkaWZmID0gMDtcbiAgfVxuXG4gIC8v5pelXG4gIHZhciBkYXkgPSBkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gIC8v5pel5pyq5rqAXG4gIHZhciBsZXNzRGF5ID0gZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAvL+aZglxuICB2YXIgdGltZSA9IGxlc3NEYXkgLyAoMTAwMCAqIDYwICogNjApO1xuXG4gIC8v5pmC5pyq5rqAXG4gIHZhciBsZXNzVGltZSA9IGxlc3NEYXkgJSAoMTAwMCAqIDYwICogNjApO1xuXG4gIC8v5YiGXG4gIHZhciBtaW51dGUgPSBsZXNzVGltZSAvICgxMDAwICogNjApO1xuXG4gIC8v5YiG5pyq5rqAXG4gIHZhciBsZXNzTWludXRlID0gbGVzc1RpbWUgJSAoMTAwMCAqIDYwKTtcblxuICAvL+enklxuICB2YXIgc2Vjb25kID0gbGVzc01pbnV0ZSAvIDEwMDA7XG5cbiAgLy/liIfjgormjajjgaZcbiAgdmFyIHJ1bmNhdGVkRGF5ID0gTWF0aC5mbG9vcihkYXkpO1xuICB2YXIgcnVuY2F0ZWRUaW1lID0gTWF0aC5mbG9vcih0aW1lKTtcbiAgdmFyIHJ1bmNhdGVkTWludXRlID0gTWF0aC5mbG9vcihtaW51dGUpO1xuICB2YXIgcnVuY2F0ZWRTZWNvbmQgPSBNYXRoLmZsb29yKHNlY29uZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWFhfT5cbiAgICAgICAge25vd31cbiAgICAgICAge3J1bmNhdGVkRGF5feaXpXtydW5jYXRlZFRpbWV95pmC6ZaTe3J1bmNhdGVkTWludXRlfeWIhntydW5jYXRlZFNlY29uZH3np5JcbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==