self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/visual/visual.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/visual/visual.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../public/img/factory-4757647_1920.jpg */ "./public/img/factory-4757647_1920.jpg");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n/* 幅 */\n@media screen and (min-width: 1400 px) {\n  .visual_visualWrapper__1r9IW {\n    background-color: black;\n  }\n  .visual_visualWrapper__1r9IW .visual_visualContainer__3oqsT {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position-y: -370px;\n    background-size: cover;\n    height: 567px;\n    position: relative;\n    width: 100%;\n  }\n  .visual_visualWrapper__1r9IW .visual_visualContainer__3oqsT::before {\n    background-color: rgba(0, 0, 0, 0.5);\n    content: \"\";\n    display: block;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n  .visual_visualWrapper__1r9IW .visual_visualContainer__3oqsT .visual_visualContent__t_exz {\n    margin: 0 auto;\n    overflow: hidden;\n    position: relative;\n    width: 1400px;\n  }\n  .visual_visualWrapper__1r9IW .visual_visualContainer__3oqsT .visual_visualContent__t_exz .visual_visualText__19gsa {\n    color: #fff;\n    display: table;\n    font-family: \"Noto Serif JP\", serif;\n    font-size: 80px;\n    /*IE9以下で反映されるよう記述*/\n    font-size: 5rem;\n    margin: 40px auto 0;\n    white-space: pre-wrap;\n  }\n}", "",{"version":3,"sources":["webpack://visual.module.scss","webpack://../../styles/fonts.scss","webpack://../../styles/device.scss","webpack://../../styles/colors.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACKhB;;CAAA;ACLA,MAAA;AFIA;EACE;IACE,uBAAA;EAEF;EADE;IACE,yDAAA;IACA,6BAAA;IACA,sBAAA;IACA,aAAA;IACA,kBAAA;IACA,WAAA;EAGJ;EADI;IACE,oCAAA;IACA,WAAA;IACA,cAAA;IACA,YAAA;IACA,OAAA;IACA,kBAAA;IACA,MAAA;IACA,WAAA;EAGN;EAAI;IACE,cAAA;IACA,gBAAA;IACA,kBAAA;IACA,aAAA;EAEN;EAAM;IACE,WGhCS;IHiCT,cAAA;IACA,mCAAA;IClCR,eAAA;IAAuB,kBAAA;IACvB,eAAA;IDmCQ,mBAAA;IAEA,qBAAA;EAGR;AACF","sourcesContent":["@charset \"UTF-8\";\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n/* 幅 */\n@media screen and (min-width: 1400 px) {\n  .visualWrapper {\n    background-color: black;\n  }\n  .visualWrapper .visualContainer {\n    background-image: url(../../public/img/factory-4757647_1920.jpg);\n    background-position-y: -370px;\n    background-size: cover;\n    height: 567px;\n    position: relative;\n    width: 100%;\n  }\n  .visualWrapper .visualContainer::before {\n    background-color: rgba(0, 0, 0, 0.5);\n    content: \"\";\n    display: block;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n  .visualWrapper .visualContainer .visualContent {\n    margin: 0 auto;\n    overflow: hidden;\n    position: relative;\n    width: 1400px;\n  }\n  .visualWrapper .visualContainer .visualContent .visualText {\n    color: #fff;\n    display: table;\n    font-family: \"Noto Serif JP\", serif;\n    font-size: 80px;\n    /*IE9以下で反映されるよう記述*/\n    font-size: 5rem;\n    margin: 40px auto 0;\n    white-space: pre-wrap;\n  }\n}","@mixin rem($size) {\n  font-size: $size + px; /*IE9以下で反映されるよう記述*/\n  font-size: ($size / 16) + rem;\n}\n\n/* 使用例：100pxをremで\n @include rem(100)\n*/\n","/* 幅 */\n$pcMin: 1400;\n$tabMax: $pcMin -1;\n$tabMin: 640;\n$spMax: $tabMin -1;\n","$textColor--black: #333;\n$textColor--white: #fff;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"visualWrapper": "visual_visualWrapper__1r9IW",
	"visualContainer": "visual_visualContainer__3oqsT",
	"visualContent": "visual_visualContent__t_exz",
	"visualText": "visual_visualText__19gsa"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aXN1YWwvdmlzdWFsLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkcsc0NBQXNDLG1CQUFPLENBQUMsMEhBQTREO0FBQzFHLG9DQUFvQyxtQkFBTyxDQUFDLHdGQUEyQztBQUN2RjtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsOEZBQThGLGtDQUFrQyw4QkFBOEIsS0FBSyxpRUFBaUUsd0VBQXdFLG9DQUFvQyw2QkFBNkIsb0JBQW9CLHlCQUF5QixrQkFBa0IsS0FBSyx5RUFBeUUsMkNBQTJDLG9CQUFvQixxQkFBcUIsbUJBQW1CLGNBQWMseUJBQXlCLGFBQWEsa0JBQWtCLEtBQUssOEZBQThGLHFCQUFxQix1QkFBdUIseUJBQXlCLG9CQUFvQixLQUFLLHdIQUF3SCxrQkFBa0IscUJBQXFCLDRDQUE0QyxzQkFBc0IsK0NBQStDLDBCQUEwQiw0QkFBNEIsS0FBSyxHQUFHLE9BQU8sd01BQXdNLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyw0Q0FBNEMsOEZBQThGLG9CQUFvQiw4QkFBOEIsS0FBSyxxQ0FBcUMsdUVBQXVFLG9DQUFvQyw2QkFBNkIsb0JBQW9CLHlCQUF5QixrQkFBa0IsS0FBSyw2Q0FBNkMsMkNBQTJDLG9CQUFvQixxQkFBcUIsbUJBQW1CLGNBQWMseUJBQXlCLGFBQWEsa0JBQWtCLEtBQUssb0RBQW9ELHFCQUFxQix1QkFBdUIseUJBQXlCLG9CQUFvQixLQUFLLGdFQUFnRSxrQkFBa0IscUJBQXFCLDRDQUE0QyxzQkFBc0IsK0NBQStDLDBCQUEwQiw0QkFBNEIsS0FBSyxHQUFHLHNCQUFzQiwwQkFBMEIsc0RBQXNELEdBQUcsd0VBQXdFLHFCQUFxQixlQUFlLHFCQUFxQiw2QkFBNkIsMEJBQTBCLHFCQUFxQjtBQUMvcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MDcyOTViZjIyZDAzNGM3NmI2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9wdWJsaWMvaW1nL2ZhY3RvcnktNDc1NzY0N18xOTIwLmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIOS9v+eUqOS+i++8mjEwMHB444KScmVt44GnXFxuIEBpbmNsdWRlIHJlbSgxMDApXFxuKi9cXG4vKiDluYUgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwIHB4KSB7XFxuICAudmlzdWFsX3Zpc3VhbFdyYXBwZXJfXzFyOUlXIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB9XFxuICAudmlzdWFsX3Zpc3VhbFdyYXBwZXJfXzFyOUlXIC52aXN1YWxfdmlzdWFsQ29udGFpbmVyX18zb3FzVCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTM3MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDU2N3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLnZpc3VhbF92aXN1YWxXcmFwcGVyX18xcjlJVyAudmlzdWFsX3Zpc3VhbENvbnRhaW5lcl9fM29xc1Q6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC52aXN1YWxfdmlzdWFsV3JhcHBlcl9fMXI5SVcgLnZpc3VhbF92aXN1YWxDb250YWluZXJfXzNvcXNUIC52aXN1YWxfdmlzdWFsQ29udGVudF9fdF9leHoge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTQwMHB4O1xcbiAgfVxcbiAgLnZpc3VhbF92aXN1YWxXcmFwcGVyX18xcjlJVyAudmlzdWFsX3Zpc3VhbENvbnRhaW5lcl9fM29xc1QgLnZpc3VhbF92aXN1YWxDb250ZW50X190X2V4eiAudmlzdWFsX3Zpc3VhbFRleHRfXzE5Z3NhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBmb250LWZhbWlseTogXFxcIk5vdG8gU2VyaWYgSlBcXFwiLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICAvKklFOeS7peS4i+OBp+WPjeaYoOOBleOCjOOCi+OCiOOBhuiomOi/sCovXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vdmlzdWFsLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvZGV2aWNlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDS2hCOztDQUFBO0FDTEEsTUFBQTtBRklBO0VBQ0U7SUFDRSx1QkFBQTtFQUVGO0VBREU7SUFDRSx5REFBQTtJQUNBLDZCQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBR0o7RUFESTtJQUNFLG9DQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsT0FBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7RUFHTjtFQUFJO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VBRU47RUFBTTtJQUNFLFdHaENTO0lIaUNULGNBQUE7SUFDQSxtQ0FBQTtJQ2xDUixlQUFBO0lBQXVCLGtCQUFBO0lBQ3ZCLGVBQUE7SURtQ1EsbUJBQUE7SUFFQSxxQkFBQTtFQUdSO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiDkvb/nlKjkvovvvJoxMDBweOOCknJlbeOBp1xcbiBAaW5jbHVkZSByZW0oMTAwKVxcbiovXFxuLyog5bmFICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMCBweCkge1xcbiAgLnZpc3VhbFdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIH1cXG4gIC52aXN1YWxXcmFwcGVyIC52aXN1YWxDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vcHVibGljL2ltZy9mYWN0b3J5LTQ3NTc2NDdfMTkyMC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0zNzBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiA1NjdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC52aXN1YWxXcmFwcGVyIC52aXN1YWxDb250YWluZXI6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC52aXN1YWxXcmFwcGVyIC52aXN1YWxDb250YWluZXIgLnZpc3VhbENvbnRlbnQge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTQwMHB4O1xcbiAgfVxcbiAgLnZpc3VhbFdyYXBwZXIgLnZpc3VhbENvbnRhaW5lciAudmlzdWFsQ29udGVudCAudmlzdWFsVGV4dCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNlcmlmIEpQXFxcIiwgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgLypJRTnku6XkuIvjgaflj43mmKDjgZXjgozjgovjgojjgYboqJjov7AqL1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIG1hcmdpbjogNDBweCBhdXRvIDA7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIH1cXG59XCIsXCJAbWl4aW4gcmVtKCRzaXplKSB7XFxuICBmb250LXNpemU6ICRzaXplICsgcHg7IC8qSUU55Lul5LiL44Gn5Y+N5pig44GV44KM44KL44KI44GG6KiY6L+wKi9cXG4gIGZvbnQtc2l6ZTogKCRzaXplIC8gMTYpICsgcmVtO1xcbn1cXG5cXG4vKiDkvb/nlKjkvovvvJoxMDBweOOCknJlbeOBp1xcbiBAaW5jbHVkZSByZW0oMTAwKVxcbiovXFxuXCIsXCIvKiDluYUgKi9cXG4kcGNNaW46IDE0MDA7XFxuJHRhYk1heDogJHBjTWluIC0xO1xcbiR0YWJNaW46IDY0MDtcXG4kc3BNYXg6ICR0YWJNaW4gLTE7XFxuXCIsXCIkdGV4dENvbG9yLS1ibGFjazogIzMzMztcXG4kdGV4dENvbG9yLS13aGl0ZTogI2ZmZjtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ2aXN1YWxXcmFwcGVyXCI6IFwidmlzdWFsX3Zpc3VhbFdyYXBwZXJfXzFyOUlXXCIsXG5cdFwidmlzdWFsQ29udGFpbmVyXCI6IFwidmlzdWFsX3Zpc3VhbENvbnRhaW5lcl9fM29xc1RcIixcblx0XCJ2aXN1YWxDb250ZW50XCI6IFwidmlzdWFsX3Zpc3VhbENvbnRlbnRfX3RfZXh6XCIsXG5cdFwidmlzdWFsVGV4dFwiOiBcInZpc3VhbF92aXN1YWxUZXh0X18xOWdzYVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=