self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/loadingChecker/loadingChecker.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/loadingChecker/loadingChecker.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* 幅 */\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n.loadingChecker_loadingOverlay__20Ob2 {\n  align-items: center;\n  background-color: black;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 20;\n}\n.loadingChecker_loadingOverlay__20Ob2 .loadingChecker_loadingSpinner__1qOEp {\n  -webkit-animation: loadingChecker_spin__7ExPy 1s linear infinite;\n          animation: loadingChecker_spin__7ExPy 1s linear infinite;\n}\n\n@-webkit-keyframes loadingChecker_spin__7ExPy {\n  0% {\n    transform: rotate(0) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(1.4);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n\n@keyframes loadingChecker_spin__7ExPy {\n  0% {\n    transform: rotate(0) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(1.4);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n@media screen and (max-width: 639px) {\n  .loadingChecker_loadingOverlay__20Ob2 .loadingChecker_loadingSpinner__1qOEp {\n    height: 40px;\n    width: 40px;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 1399px) {\n  .loadingChecker_loadingOverlay__20Ob2 .loadingChecker_loadingSpinner__1qOEp {\n    height: 80px;\n    width: 80px;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .loadingChecker_loadingOverlay__20Ob2 .loadingChecker_loadingSpinner__1qOEp {\n    height: 100px;\n    width: 100px;\n  }\n}", "",{"version":3,"sources":["webpack://loadingChecker.module.scss","webpack://../../styles/device.scss","webpack://../../styles/fonts.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB,MAAA;ACQA;;CAAA;AFJA;EACE,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,MAAA;EACA,WAAA;EACA,WAAA;AAEF;AAAE;EACE,gEAAA;UAAA,wDAAA;AAEJ;;AAEA;EACE;IACE,6BAAA;EACF;EACA;IACE,oCAAA;EACF;EACA;IACE,kCAAA;EACF;AACF;;AAVA;EACE;IACE,6BAAA;EACF;EACA;IACE,oCAAA;EACF;EACA;IACE,kCAAA;EACF;AACF;AAEA;EAEI;IACE,YAAA;IACA,WAAA;EADJ;AACF;AAIA;EAEI;IACE,YAAA;IACA,WAAA;EAHJ;AACF;AAMA;EAEI;IACE,aAAA;IACA,YAAA;EALJ;AACF","sourcesContent":["@charset \"UTF-8\";\n/* 幅 */\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n.loadingOverlay {\n  align-items: center;\n  background-color: black;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 20;\n}\n.loadingOverlay .loadingSpinner {\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(1.4);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n@media screen and (max-width: 639px) {\n  .loadingOverlay .loadingSpinner {\n    height: 40px;\n    width: 40px;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 1399px) {\n  .loadingOverlay .loadingSpinner {\n    height: 80px;\n    width: 80px;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .loadingOverlay .loadingSpinner {\n    height: 100px;\n    width: 100px;\n  }\n}","/* 幅 */\n$pcMin: 1400px;\n$tabMax: 1399px;\n$tabMin: 640px;\n$spMax: 639px;\n","@use 'sass:math';\n\n@mixin rem($size) {\n  font-size: $size + px; /*IE9以下で反映されるよう記述*/\n  /* font-size: ($size / 16) + rem;*/\n  font-size: math.div($size, 16) + rem;\n}\n\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loadingOverlay": "loadingChecker_loadingOverlay__20Ob2",
	"loadingSpinner": "loadingChecker_loadingSpinner__1qOEp",
	"spin": "loadingChecker_spin__7ExPy"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2FkaW5nQ2hlY2tlci9sb2FkaW5nQ2hlY2tlci5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw2REFBNkQsNkZBQTZGLHdCQUF3Qiw0QkFBNEIsa0JBQWtCLGlCQUFpQiw0QkFBNEIsb0JBQW9CLFdBQVcsZ0JBQWdCLGdCQUFnQixHQUFHLCtFQUErRSxxRUFBcUUscUVBQXFFLEdBQUcsbURBQW1ELFFBQVEsb0NBQW9DLEtBQUssU0FBUywyQ0FBMkMsS0FBSyxVQUFVLHlDQUF5QyxLQUFLLEdBQUcsMkNBQTJDLFFBQVEsb0NBQW9DLEtBQUssU0FBUywyQ0FBMkMsS0FBSyxVQUFVLHlDQUF5QyxLQUFLLEdBQUcsd0NBQXdDLGlGQUFpRixtQkFBbUIsa0JBQWtCLEtBQUssR0FBRyxnRUFBZ0UsaUZBQWlGLG1CQUFtQixrQkFBa0IsS0FBSyxHQUFHLHlDQUF5QyxpRkFBaUYsb0JBQW9CLG1CQUFtQixLQUFLLEdBQUcsT0FBTywyS0FBMkssV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssNENBQTRDLHVFQUF1RSx3QkFBd0IsNEJBQTRCLGtCQUFrQixpQkFBaUIsNEJBQTRCLG9CQUFvQixXQUFXLGdCQUFnQixnQkFBZ0IsR0FBRyxtQ0FBbUMsdUNBQXVDLEdBQUcscUJBQXFCLFFBQVEsb0NBQW9DLEtBQUssU0FBUywyQ0FBMkMsS0FBSyxVQUFVLHlDQUF5QyxLQUFLLEdBQUcsd0NBQXdDLHFDQUFxQyxtQkFBbUIsa0JBQWtCLEtBQUssR0FBRyxnRUFBZ0UscUNBQXFDLG1CQUFtQixrQkFBa0IsS0FBSyxHQUFHLHlDQUF5QyxxQ0FBcUMsb0JBQW9CLG1CQUFtQixLQUFLLEdBQUcsMkJBQTJCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHNCQUFzQix1QkFBdUIsMEJBQTBCLHlEQUF5RCwyQ0FBMkMsR0FBRyxrRUFBa0U7QUFDNXlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg1YTc4NWQ0OGZiZjhhZDEyODVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIOW5hSAqL1xcbi8qIOS9v+eUqOS+i++8mjEwMHB444KScmVt44GnXFxuIEBpbmNsdWRlIHJlbSgxMDApXFxuKi9cXG4ubG9hZGluZ0NoZWNrZXJfbG9hZGluZ092ZXJsYXlfXzIwT2IyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjA7XFxufVxcbi5sb2FkaW5nQ2hlY2tlcl9sb2FkaW5nT3ZlcmxheV9fMjBPYjIgLmxvYWRpbmdDaGVja2VyX2xvYWRpbmdTcGlubmVyX18xcU9FcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZ0NoZWNrZXJfc3Bpbl9fN0V4UHkgMXMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmdDaGVja2VyX3NwaW5fXzdFeFB5IDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmdDaGVja2VyX3NwaW5fXzdFeFB5IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCkgc2NhbGUoMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlKDEuNCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nQ2hlY2tlcl9zcGluX183RXhQeSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApIHNjYWxlKDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgxLjQpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMSk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XFxuICAubG9hZGluZ0NoZWNrZXJfbG9hZGluZ092ZXJsYXlfXzIwT2IyIC5sb2FkaW5nQ2hlY2tlcl9sb2FkaW5nU3Bpbm5lcl9fMXFPRXAge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge1xcbiAgLmxvYWRpbmdDaGVja2VyX2xvYWRpbmdPdmVybGF5X18yME9iMiAubG9hZGluZ0NoZWNrZXJfbG9hZGluZ1NwaW5uZXJfXzFxT0VwIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAubG9hZGluZ0NoZWNrZXJfbG9hZGluZ092ZXJsYXlfXzIwT2IyIC5sb2FkaW5nQ2hlY2tlcl9sb2FkaW5nU3Bpbm5lcl9fMXFPRXAge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9sb2FkaW5nQ2hlY2tlci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9kZXZpY2Uuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9mb250cy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQixNQUFBO0FDUUE7O0NBQUE7QUZKQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSxnRUFBQTtVQUFBLHdEQUFBO0FBRUo7O0FBRUE7RUFDRTtJQUNFLDZCQUFBO0VBQ0Y7RUFDQTtJQUNFLG9DQUFBO0VBQ0Y7RUFDQTtJQUNFLGtDQUFBO0VBQ0Y7QUFDRjs7QUFWQTtFQUNFO0lBQ0UsNkJBQUE7RUFDRjtFQUNBO0lBQ0Usb0NBQUE7RUFDRjtFQUNBO0lBQ0Usa0NBQUE7RUFDRjtBQUNGO0FBRUE7RUFFSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBREo7QUFDRjtBQUlBO0VBRUk7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQUhKO0FBQ0Y7QUFNQTtFQUVJO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RUFMSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyog5bmFICovXFxuLyog5L2/55So5L6L77yaMTAwcHjjgpJyZW3jgadcXG4gQGluY2x1ZGUgcmVtKDEwMClcXG4qL1xcbi5sb2FkaW5nT3ZlcmxheSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG4ubG9hZGluZ092ZXJsYXkgLmxvYWRpbmdTcGlubmVyIHtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApIHNjYWxlKDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgxLjQpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMSk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XFxuICAubG9hZGluZ092ZXJsYXkgLmxvYWRpbmdTcGlubmVyIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHtcXG4gIC5sb2FkaW5nT3ZlcmxheSAubG9hZGluZ1NwaW5uZXIge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5sb2FkaW5nT3ZlcmxheSAubG9hZGluZ1NwaW5uZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICB9XFxufVwiLFwiLyog5bmFICovXFxuJHBjTWluOiAxNDAwcHg7XFxuJHRhYk1heDogMTM5OXB4O1xcbiR0YWJNaW46IDY0MHB4O1xcbiRzcE1heDogNjM5cHg7XFxuXCIsXCJAdXNlICdzYXNzOm1hdGgnO1xcblxcbkBtaXhpbiByZW0oJHNpemUpIHtcXG4gIGZvbnQtc2l6ZTogJHNpemUgKyBweDsgLypJRTnku6XkuIvjgaflj43mmKDjgZXjgozjgovjgojjgYboqJjov7AqL1xcbiAgLyogZm9udC1zaXplOiAoJHNpemUgLyAxNikgKyByZW07Ki9cXG4gIGZvbnQtc2l6ZTogbWF0aC5kaXYoJHNpemUsIDE2KSArIHJlbTtcXG59XFxuXFxuLyog5L2/55So5L6L77yaMTAwcHjjgpJyZW3jgadcXG4gQGluY2x1ZGUgcmVtKDEwMClcXG4qL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxvYWRpbmdPdmVybGF5XCI6IFwibG9hZGluZ0NoZWNrZXJfbG9hZGluZ092ZXJsYXlfXzIwT2IyXCIsXG5cdFwibG9hZGluZ1NwaW5uZXJcIjogXCJsb2FkaW5nQ2hlY2tlcl9sb2FkaW5nU3Bpbm5lcl9fMXFPRXBcIixcblx0XCJzcGluXCI6IFwibG9hZGluZ0NoZWNrZXJfc3Bpbl9fN0V4UHlcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9