self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ieChecker/ieChecker.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ieChecker/ieChecker.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* 幅 */\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n.ieChecker_ieOverlay__19Nol {\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.9);\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n}\n.ieChecker_ieOverlay__19Nol .ieChecker_ieWindow__2vIq8 {\n  background-color: white;\n  padding: 0 40px 40px;\n}\n.ieChecker_ieOverlay__19Nol .ieChecker_ieWindow__2vIq8 .ieChecker_sectionHeadingWrapper__3wZhS {\n  margin-top: 40px;\n}\n.ieChecker_ieOverlay__19Nol .ieChecker_ieWindow__2vIq8 .ieChecker_sectionTextWrapper__1st_U {\n  margin-top: 20px;\n}\n.ieChecker_ieOverlay__19Nol .ieChecker_ieWindow__2vIq8 .ieChecker_ieOptionGroupWrapper__2pPOH {\n  margin-top: 10px;\n}\n.ieChecker_ieOverlay__19Nol .ieChecker_ieWindow__2vIq8 .ieChecker_ieOptionGroupWrapper__2pPOH .ieChecker_ieOptionGroup__1NBav .ieChecker_ieOptionMember__2r6fz + .ieChecker_ieOptionMember__2r6fz {\n  margin-top: 10px;\n}\n.ieChecker_ieOverlay__19Nol .ieChecker_ieWindow__2vIq8 .ieChecker_ieOptionGroupWrapper__2pPOH .ieChecker_ieOptionGroup__1NBav .ieChecker_ieOptionMember__2r6fz .ieChecker_ieOptionAnchor__2DC0_ {\n  color: #333;\n  font-family: \"Noto Sans JP\", sans-serif;\n}", "",{"version":3,"sources":["webpack://ieChecker.module.scss","webpack://../../styles/device.scss","webpack://../../styles/fonts.scss","webpack://../../styles/colors.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB,MAAA;ACQA;;CAAA;AFJA;EACE,mBAAA;EACA,oCAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EAEA,eAAA;EACA,WAAA;EACA,WAAA;AACF;AACE;EACE,uBAAA;EACA,oBAAA;AACJ;AAAI;EACE,gBAAA;AAEN;AAAI;EACE,gBAAA;AAEN;AACI;EACE,gBAAA;AACN;AAEU;EACE,gBAAA;AAAZ;AAEU;EACE,WGjCO;EHkCP,uCAAA;AAAZ","sourcesContent":["@charset \"UTF-8\";\n/* 幅 */\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n.ieOverlay {\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.9);\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n}\n.ieOverlay .ieWindow {\n  background-color: white;\n  padding: 0 40px 40px;\n}\n.ieOverlay .ieWindow .sectionHeadingWrapper {\n  margin-top: 40px;\n}\n.ieOverlay .ieWindow .sectionTextWrapper {\n  margin-top: 20px;\n}\n.ieOverlay .ieWindow .ieOptionGroupWrapper {\n  margin-top: 10px;\n}\n.ieOverlay .ieWindow .ieOptionGroupWrapper .ieOptionGroup .ieOptionMember + .ieOptionMember {\n  margin-top: 10px;\n}\n.ieOverlay .ieWindow .ieOptionGroupWrapper .ieOptionGroup .ieOptionMember .ieOptionAnchor {\n  color: #333;\n  font-family: \"Noto Sans JP\", sans-serif;\n}","/* 幅 */\n$pcMin: 1400px;\n$tabMax: 1399px;\n$tabMin: 640px;\n$spMax: 639px;\n","@use 'sass:math';\n\n@mixin rem($size) {\n  font-size: $size + px; /*IE9以下で反映されるよう記述*/\n  /* font-size: ($size / 16) + rem;*/\n  font-size: math.div($size, 16) + rem;\n}\n\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n","$textColor--black: #333;\n$textColor--white: #fff;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ieOverlay": "ieChecker_ieOverlay__19Nol",
	"ieWindow": "ieChecker_ieWindow__2vIq8",
	"sectionHeadingWrapper": "ieChecker_sectionHeadingWrapper__3wZhS",
	"sectionTextWrapper": "ieChecker_sectionTextWrapper__1st_U",
	"ieOptionGroupWrapper": "ieChecker_ieOptionGroupWrapper__2pPOH",
	"ieOptionGroup": "ieChecker_ieOptionGroup__1NBav",
	"ieOptionMember": "ieChecker_ieOptionMember__2r6fz",
	"ieOptionAnchor": "ieChecker_ieOptionAnchor__2DC0_"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pZUNoZWNrZXIvaWVDaGVja2VyLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDZEQUE2RCxtRkFBbUYsd0JBQXdCLHlDQUF5QyxrQkFBa0IsaUJBQWlCLDRCQUE0QixvQkFBb0IsZ0JBQWdCLGdCQUFnQixHQUFHLDBEQUEwRCw0QkFBNEIseUJBQXlCLEdBQUcsa0dBQWtHLHFCQUFxQixHQUFHLCtGQUErRixxQkFBcUIsR0FBRyxpR0FBaUcscUJBQXFCLEdBQUcscU1BQXFNLHFCQUFxQixHQUFHLG1NQUFtTSxnQkFBZ0IsOENBQThDLEdBQUcsT0FBTywyTUFBMk0sV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLDRDQUE0QyxrRUFBa0Usd0JBQXdCLHlDQUF5QyxrQkFBa0IsaUJBQWlCLDRCQUE0QixvQkFBb0IsZ0JBQWdCLGdCQUFnQixHQUFHLHdCQUF3Qiw0QkFBNEIseUJBQXlCLEdBQUcsK0NBQStDLHFCQUFxQixHQUFHLDRDQUE0QyxxQkFBcUIsR0FBRyw4Q0FBOEMscUJBQXFCLEdBQUcsK0ZBQStGLHFCQUFxQixHQUFHLDZGQUE2RixnQkFBZ0IsOENBQThDLEdBQUcsMkJBQTJCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHNCQUFzQix1QkFBdUIsMEJBQTBCLHlEQUF5RCwyQ0FBMkMsR0FBRywwRUFBMEUsMEJBQTBCLHFCQUFxQjtBQUN6NkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwMDQ2ZjE5YTc1YjJiNGRhNWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIOW5hSAqL1xcbi8qIOS9v+eUqOS+i++8mjEwMHB444KScmVt44GnXFxuIEBpbmNsdWRlIHJlbSgxMDApXFxuKi9cXG4uaWVDaGVja2VyX2llT3ZlcmxheV9fMTlOb2wge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5pZUNoZWNrZXJfaWVPdmVybGF5X18xOU5vbCAuaWVDaGVja2VyX2llV2luZG93X18ydklxOCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgNDBweCA0MHB4O1xcbn1cXG4uaWVDaGVja2VyX2llT3ZlcmxheV9fMTlOb2wgLmllQ2hlY2tlcl9pZVdpbmRvd19fMnZJcTggLmllQ2hlY2tlcl9zZWN0aW9uSGVhZGluZ1dyYXBwZXJfXzN3WmhTIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5pZUNoZWNrZXJfaWVPdmVybGF5X18xOU5vbCAuaWVDaGVja2VyX2llV2luZG93X18ydklxOCAuaWVDaGVja2VyX3NlY3Rpb25UZXh0V3JhcHBlcl9fMXN0X1Uge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmllQ2hlY2tlcl9pZU92ZXJsYXlfXzE5Tm9sIC5pZUNoZWNrZXJfaWVXaW5kb3dfXzJ2SXE4IC5pZUNoZWNrZXJfaWVPcHRpb25Hcm91cFdyYXBwZXJfXzJwUE9IIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5pZUNoZWNrZXJfaWVPdmVybGF5X18xOU5vbCAuaWVDaGVja2VyX2llV2luZG93X18ydklxOCAuaWVDaGVja2VyX2llT3B0aW9uR3JvdXBXcmFwcGVyX18ycFBPSCAuaWVDaGVja2VyX2llT3B0aW9uR3JvdXBfXzFOQmF2IC5pZUNoZWNrZXJfaWVPcHRpb25NZW1iZXJfXzJyNmZ6ICsgLmllQ2hlY2tlcl9pZU9wdGlvbk1lbWJlcl9fMnI2Znoge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmllQ2hlY2tlcl9pZU92ZXJsYXlfXzE5Tm9sIC5pZUNoZWNrZXJfaWVXaW5kb3dfXzJ2SXE4IC5pZUNoZWNrZXJfaWVPcHRpb25Hcm91cFdyYXBwZXJfXzJwUE9IIC5pZUNoZWNrZXJfaWVPcHRpb25Hcm91cF9fMU5CYXYgLmllQ2hlY2tlcl9pZU9wdGlvbk1lbWJlcl9fMnI2ZnogLmllQ2hlY2tlcl9pZU9wdGlvbkFuY2hvcl9fMkRDMF8ge1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2FucyBKUFxcXCIsIHNhbnMtc2VyaWY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9pZUNoZWNrZXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvZGV2aWNlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEIsTUFBQTtBQ1FBOztDQUFBO0FGSkE7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUNFLGdCQUFBO0FBRU47QUFBSTtFQUNFLGdCQUFBO0FBRU47QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFFVTtFQUNFLGdCQUFBO0FBQVo7QUFFVTtFQUNFLFdHakNPO0VIa0NQLHVDQUFBO0FBQVpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiDluYUgKi9cXG4vKiDkvb/nlKjkvovvvJoxMDBweOOCknJlbeOBp1xcbiBAaW5jbHVkZSByZW0oMTAwKVxcbiovXFxuLmllT3ZlcmxheSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLmllT3ZlcmxheSAuaWVXaW5kb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDQwcHggNDBweDtcXG59XFxuLmllT3ZlcmxheSAuaWVXaW5kb3cgLnNlY3Rpb25IZWFkaW5nV3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4uaWVPdmVybGF5IC5pZVdpbmRvdyAuc2VjdGlvblRleHRXcmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5pZU92ZXJsYXkgLmllV2luZG93IC5pZU9wdGlvbkdyb3VwV3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uaWVPdmVybGF5IC5pZVdpbmRvdyAuaWVPcHRpb25Hcm91cFdyYXBwZXIgLmllT3B0aW9uR3JvdXAgLmllT3B0aW9uTWVtYmVyICsgLmllT3B0aW9uTWVtYmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5pZU92ZXJsYXkgLmllV2luZG93IC5pZU9wdGlvbkdyb3VwV3JhcHBlciAuaWVPcHRpb25Hcm91cCAuaWVPcHRpb25NZW1iZXIgLmllT3B0aW9uQW5jaG9yIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnMgSlBcXFwiLCBzYW5zLXNlcmlmO1xcbn1cIixcIi8qIOW5hSAqL1xcbiRwY01pbjogMTQwMHB4O1xcbiR0YWJNYXg6IDEzOTlweDtcXG4kdGFiTWluOiA2NDBweDtcXG4kc3BNYXg6IDYzOXB4O1xcblwiLFwiQHVzZSAnc2FzczptYXRoJztcXG5cXG5AbWl4aW4gcmVtKCRzaXplKSB7XFxuICBmb250LXNpemU6ICRzaXplICsgcHg7IC8qSUU55Lul5LiL44Gn5Y+N5pig44GV44KM44KL44KI44GG6KiY6L+wKi9cXG4gIC8qIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtOyovXFxuICBmb250LXNpemU6IG1hdGguZGl2KCRzaXplLCAxNikgKyByZW07XFxufVxcblxcbi8qIOS9v+eUqOS+i++8mjEwMHB444KScmVt44GnXFxuIEBpbmNsdWRlIHJlbSgxMDApXFxuKi9cXG5cIixcIiR0ZXh0Q29sb3ItLWJsYWNrOiAjMzMzO1xcbiR0ZXh0Q29sb3ItLXdoaXRlOiAjZmZmO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImllT3ZlcmxheVwiOiBcImllQ2hlY2tlcl9pZU92ZXJsYXlfXzE5Tm9sXCIsXG5cdFwiaWVXaW5kb3dcIjogXCJpZUNoZWNrZXJfaWVXaW5kb3dfXzJ2SXE4XCIsXG5cdFwic2VjdGlvbkhlYWRpbmdXcmFwcGVyXCI6IFwiaWVDaGVja2VyX3NlY3Rpb25IZWFkaW5nV3JhcHBlcl9fM3daaFNcIixcblx0XCJzZWN0aW9uVGV4dFdyYXBwZXJcIjogXCJpZUNoZWNrZXJfc2VjdGlvblRleHRXcmFwcGVyX18xc3RfVVwiLFxuXHRcImllT3B0aW9uR3JvdXBXcmFwcGVyXCI6IFwiaWVDaGVja2VyX2llT3B0aW9uR3JvdXBXcmFwcGVyX18ycFBPSFwiLFxuXHRcImllT3B0aW9uR3JvdXBcIjogXCJpZUNoZWNrZXJfaWVPcHRpb25Hcm91cF9fMU5CYXZcIixcblx0XCJpZU9wdGlvbk1lbWJlclwiOiBcImllQ2hlY2tlcl9pZU9wdGlvbk1lbWJlcl9fMnI2ZnpcIixcblx0XCJpZU9wdGlvbkFuY2hvclwiOiBcImllQ2hlY2tlcl9pZU9wdGlvbkFuY2hvcl9fMkRDMF9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9