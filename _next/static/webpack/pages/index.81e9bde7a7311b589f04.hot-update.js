self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownTimer/countdownTimer.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/countdownTimer/countdownTimer.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* 幅 */\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n.countdownTimer_countNumber__1RY0E {\n  color: #fff;\n  font-family: \"Roboto\", serif;\n  font-weight: bold;\n}\n\n.countdownTimer_countUnit__13v0x {\n  color: #fff;\n  font-family: \"Noto Serif JP\", serif;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 639px) {\n  .countdownTimer_countNumber__1RY0E {\n    font-size: 40px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 2.5rem;\n  }\n\n  .countdownTimer_countUnit__13v0x {\n    font-size: 20px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .countdownTimer_countNumber__1RY0E {\n    font-size: 150px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 9.375rem;\n  }\n\n  .countdownTimer_countUnit__13v0x {\n    font-size: 80px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 5rem;\n  }\n}", "",{"version":3,"sources":["webpack://countdownTimer.module.scss","webpack://../../styles/device.scss","webpack://../../styles/fonts.scss","webpack://../../styles/colors.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB,MAAA;ACQA;;CAAA;AFJA;EACE,WGJiB;EHKjB,4BAAA;EACA,iBAAA;AAEF;;AACA;EACE,WGViB;EHWjB,mCAAA;EACA,iBAAA;AAEF;;AAAA;EACE;IEbA,eAAA;IAAuB,kBAAA;IACvB,kCAAA;IACA,iBAAA;EFkBA;;EAHA;IEjBA,eAAA;IAAuB,kBAAA;IACvB,kCAAA;IACA,kBAAA;EFyBA;AACF;AAJA;EACE;IEzBA,gBAAA;IAAuB,kBAAA;IACvB,kCAAA;IACA,mBAAA;EFiCA;;EANA;IE7BA,eAAA;IAAuB,kBAAA;IACvB,kCAAA;IACA,eAAA;EFwCA;AACF","sourcesContent":["@charset \"UTF-8\";\n/* 幅 */\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n.countNumber {\n  color: #fff;\n  font-family: \"Roboto\", serif;\n  font-weight: bold;\n}\n\n.countUnit {\n  color: #fff;\n  font-family: \"Noto Serif JP\", serif;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 639px) {\n  .countNumber {\n    font-size: 40px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 2.5rem;\n  }\n\n  .countUnit {\n    font-size: 20px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .countNumber {\n    font-size: 150px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 9.375rem;\n  }\n\n  .countUnit {\n    font-size: 80px;\n    /*IE9以下で反映されるよう記述*/\n    /* font-size: ($size / 16) + rem;*/\n    font-size: 5rem;\n  }\n}","/* 幅 */\n$pcMin: 1400px;\n$tabMax: 1399px;\n$tabMin: 640px;\n$spMax: 639px;\n","@use 'sass:math';\n\n@mixin rem($size) {\n  font-size: $size + px; /*IE9以下で反映されるよう記述*/\n  /* font-size: ($size / 16) + rem;*/\n  font-size: math.div($size, 16) + rem;\n}\n\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n","$textColor--black: #333;\n$textColor--white: #fff;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"countNumber": "countdownTimer_countNumber__1RY0E",
	"countUnit": "countdownTimer_countUnit__13v0x"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd25UaW1lci9jb3VudGRvd25UaW1lci5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw2REFBNkQsMEZBQTBGLGdCQUFnQixtQ0FBbUMsc0JBQXNCLEdBQUcsc0NBQXNDLGdCQUFnQiwwQ0FBMEMsc0JBQXNCLEdBQUcsMENBQTBDLHdDQUF3QyxzQkFBc0IsZ0VBQWdFLDBCQUEwQixLQUFLLHdDQUF3QyxzQkFBc0IsZ0VBQWdFLDJCQUEyQixLQUFLLEdBQUcseUNBQXlDLHdDQUF3Qyx1QkFBdUIsZ0VBQWdFLDRCQUE0QixLQUFLLHdDQUF3QyxzQkFBc0IsZ0VBQWdFLHdCQUF3QixLQUFLLEdBQUcsT0FBTyxnTkFBZ04sV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFlBQVksV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksWUFBWSxZQUFZLFdBQVcsT0FBTyxLQUFLLFdBQVcsWUFBWSxZQUFZLFVBQVUsTUFBTSw0Q0FBNEMsb0VBQW9FLGdCQUFnQixtQ0FBbUMsc0JBQXNCLEdBQUcsZ0JBQWdCLGdCQUFnQiwwQ0FBMEMsc0JBQXNCLEdBQUcsMENBQTBDLGtCQUFrQixzQkFBc0IsZ0VBQWdFLDBCQUEwQixLQUFLLGtCQUFrQixzQkFBc0IsZ0VBQWdFLDJCQUEyQixLQUFLLEdBQUcseUNBQXlDLGtCQUFrQix1QkFBdUIsZ0VBQWdFLDRCQUE0QixLQUFLLGtCQUFrQixzQkFBc0IsZ0VBQWdFLHdCQUF3QixLQUFLLEdBQUcsMkJBQTJCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHNCQUFzQix1QkFBdUIsMEJBQTBCLHlEQUF5RCwyQ0FBMkMsR0FBRywwRUFBMEUsMEJBQTBCLHFCQUFxQjtBQUNqM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgxZTliZGU3YTczMTFiNTg5ZjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIOW5hSAqL1xcbi8qIOS9v+eUqOS+i++8mjEwMHB444KScmVt44GnXFxuIEBpbmNsdWRlIHJlbSgxMDApXFxuKi9cXG4uY291bnRkb3duVGltZXJfY291bnROdW1iZXJfXzFSWTBFIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY291bnRkb3duVGltZXJfY291bnRVbml0X18xM3YweCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTZXJpZiBKUFxcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XFxuICAuY291bnRkb3duVGltZXJfY291bnROdW1iZXJfXzFSWTBFIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAvKklFOeS7peS4i+OBp+WPjeaYoOOBleOCjOOCi+OCiOOBhuiomOi/sCovXFxuICAgIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcblxcbiAgLmNvdW50ZG93blRpbWVyX2NvdW50VW5pdF9fMTN2MHgge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIC8qSUU55Lul5LiL44Gn5Y+N5pig44GV44KM44KL44KI44GG6KiY6L+wKi9cXG4gICAgLyogZm9udC1zaXplOiAoJHNpemUgLyAxNikgKyByZW07Ki9cXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5jb3VudGRvd25UaW1lcl9jb3VudE51bWJlcl9fMVJZMEUge1xcbiAgICBmb250LXNpemU6IDE1MHB4O1xcbiAgICAvKklFOeS7peS4i+OBp+WPjeaYoOOBleOCjOOCi+OCiOOBhuiomOi/sCovXFxuICAgIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICAgIGZvbnQtc2l6ZTogOS4zNzVyZW07XFxuICB9XFxuXFxuICAuY291bnRkb3duVGltZXJfY291bnRVbml0X18xM3YweCB7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgLypJRTnku6XkuIvjgaflj43mmKDjgZXjgozjgovjgojjgYboqJjov7AqL1xcbiAgICAvKiBmb250LXNpemU6ICgkc2l6ZSAvIDE2KSArIHJlbTsqL1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb3VudGRvd25UaW1lci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9kZXZpY2Uuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQixNQUFBO0FDUUE7O0NBQUE7QUZKQTtFQUNFLFdHSmlCO0VIS2pCLDRCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdHVmlCO0VIV2pCLG1DQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFO0lFYkEsZUFBQTtJQUF1QixrQkFBQTtJQUN2QixrQ0FBQTtJQUNBLGlCQUFBO0VGa0JBOztFQUhBO0lFakJBLGVBQUE7SUFBdUIsa0JBQUE7SUFDdkIsa0NBQUE7SUFDQSxrQkFBQTtFRnlCQTtBQUNGO0FBSkE7RUFDRTtJRXpCQSxnQkFBQTtJQUF1QixrQkFBQTtJQUN2QixrQ0FBQTtJQUNBLG1CQUFBO0VGaUNBOztFQU5BO0lFN0JBLGVBQUE7SUFBdUIsa0JBQUE7SUFDdkIsa0NBQUE7SUFDQSxlQUFBO0VGd0NBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiDluYUgKi9cXG4vKiDkvb/nlKjkvovvvJoxMDBweOOCknJlbeOBp1xcbiBAaW5jbHVkZSByZW0oMTAwKVxcbiovXFxuLmNvdW50TnVtYmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY291bnRVbml0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNlcmlmIEpQXFxcIiwgc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcXG4gIC5jb3VudE51bWJlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgLypJRTnku6XkuIvjgaflj43mmKDjgZXjgozjgovjgojjgYboqJjov7AqL1xcbiAgICAvKiBmb250LXNpemU6ICgkc2l6ZSAvIDE2KSArIHJlbTsqL1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5jb3VudFVuaXQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIC8qSUU55Lul5LiL44Gn5Y+N5pig44GV44KM44KL44KI44GG6KiY6L+wKi9cXG4gICAgLyogZm9udC1zaXplOiAoJHNpemUgLyAxNikgKyByZW07Ki9cXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5jb3VudE51bWJlciB7XFxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgIC8qSUU55Lul5LiL44Gn5Y+N5pig44GV44KM44KL44KI44GG6KiY6L+wKi9cXG4gICAgLyogZm9udC1zaXplOiAoJHNpemUgLyAxNikgKyByZW07Ki9cXG4gICAgZm9udC1zaXplOiA5LjM3NXJlbTtcXG4gIH1cXG5cXG4gIC5jb3VudFVuaXQge1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIC8qSUU55Lul5LiL44Gn5Y+N5pig44GV44KM44KL44KI44GG6KiY6L+wKi9cXG4gICAgLyogZm9udC1zaXplOiAoJHNpemUgLyAxNikgKyByZW07Ki9cXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgfVxcbn1cIixcIi8qIOW5hSAqL1xcbiRwY01pbjogMTQwMHB4O1xcbiR0YWJNYXg6IDEzOTlweDtcXG4kdGFiTWluOiA2NDBweDtcXG4kc3BNYXg6IDYzOXB4O1xcblwiLFwiQHVzZSAnc2FzczptYXRoJztcXG5cXG5AbWl4aW4gcmVtKCRzaXplKSB7XFxuICBmb250LXNpemU6ICRzaXplICsgcHg7IC8qSUU55Lul5LiL44Gn5Y+N5pig44GV44KM44KL44KI44GG6KiY6L+wKi9cXG4gIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICBmb250LXNpemU6IG1hdGguZGl2KCRzaXplLCAxNikgKyByZW07XFxufVxcblxcbi8qIOS9v+eUqOS+i++8mjEwMHB444KScmVt44GnXFxuIEBpbmNsdWRlIHJlbSgxMDApXFxuKi9cXG5cIixcIiR0ZXh0Q29sb3ItLWJsYWNrOiAjMzMzO1xcbiR0ZXh0Q29sb3ItLXdoaXRlOiAjZmZmO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvdW50TnVtYmVyXCI6IFwiY291bnRkb3duVGltZXJfY291bnROdW1iZXJfXzFSWTBFXCIsXG5cdFwiY291bnRVbml0XCI6IFwiY291bnRkb3duVGltZXJfY291bnRVbml0X18xM3YweFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=