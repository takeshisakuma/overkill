self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./animation/browserAnimation.ts":
/*!***************************************!*\
  !*** ./animation/browserAnimation.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var setAnimation = function setAnimation() {
  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(".eventAnimation", {
    opacity: 0,
    x: 0,
    y: -20,
    scale: 1
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".eventAnimation",
      start: "top 90%",
      markers: false
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setAnimation);

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


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_seo_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo/Seo */ "./components/seo/Seo.tsx");
/* harmony import */ var _section_headerSection_HeaderSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section/headerSection/HeaderSection */ "./section/headerSection/HeaderSection.tsx");
/* harmony import */ var _section_visualSection_VisualSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../section/visualSection/VisualSection */ "./section/visualSection/VisualSection.tsx");
/* harmony import */ var _section_aboutSection_AboutSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../section/aboutSection/AboutSection */ "./section/aboutSection/AboutSection.tsx");
/* harmony import */ var _section_unsupportSection_UnsupportSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../section/unsupportSection/UnsupportSection */ "./section/unsupportSection/UnsupportSection.tsx");
/* harmony import */ var _section_countdownSection_CountdownSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../section/countdownSection/CountdownSection */ "./section/countdownSection/CountdownSection.tsx");
/* harmony import */ var _section_pastSection_PastSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../section/pastSection/PastSection */ "./section/pastSection/PastSection.tsx");
/* harmony import */ var _section_browserSection_BrowserSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../section/browserSection/BrowserSection */ "./section/browserSection/BrowserSection.tsx");
/* harmony import */ var _section_providerSection_ProviderSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../section/providerSection/ProviderSection */ "./section/providerSection/ProviderSection.tsx");
/* harmony import */ var _section_footerSection_FooterSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../section/footerSection/FooterSection */ "./section/footerSection/FooterSection.tsx");
/* harmony import */ var _components_ieChecker_IeChecker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ieChecker/IeChecker */ "./components/ieChecker/IeChecker.tsx");
/* harmony import */ var _components_loadingChecker_LoadingChecker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/loadingChecker/LoadingChecker */ "./components/loadingChecker/LoadingChecker.tsx");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _animation_fadeUpAnimation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../animation/fadeUpAnimation */ "./animation/fadeUpAnimation.ts");
/* harmony import */ var _animation_slideInAnimation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../animation/slideInAnimation */ "./animation/slideInAnimation.ts");
/* harmony import */ var _animation_serviceIconAnimation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../animation/serviceIconAnimation */ "./animation/serviceIconAnimation.ts");
/* harmony import */ var _animation_countdownTimerAnimation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../animation/countdownTimerAnimation */ "./animation/countdownTimerAnimation.ts");
/* harmony import */ var _animation_eventAnimation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../animation/eventAnimation */ "./animation/eventAnimation.ts");
/* harmony import */ var _animation_browserAnimation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../animation/browserAnimation */ "./animation/browserAnimation.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();













 //アニメーション










var Main = function Main() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (true) {
      gsap__WEBPACK_IMPORTED_MODULE_20__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_21__.ScrollTrigger);
      (0,_animation_fadeUpAnimation__WEBPACK_IMPORTED_MODULE_14__.default)();
      (0,_animation_slideInAnimation__WEBPACK_IMPORTED_MODULE_15__.default)();
      (0,_animation_serviceIconAnimation__WEBPACK_IMPORTED_MODULE_16__.default)();
      (0,_animation_countdownTimerAnimation__WEBPACK_IMPORTED_MODULE_17__.default)();
      (0,_animation_eventAnimation__WEBPACK_IMPORTED_MODULE_18__.default)();
      (0,_animation_browserAnimation__WEBPACK_IMPORTED_MODULE_19__.default)();
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loadingChecker_LoadingChecker__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ieChecker_IeChecker__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo_Seo__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageTitle: "20220615",
      pageDescription: "Internet Explorer まだ使っている人はいませんか？",
      imgUrl: "https://takeshisakuma.github.io/overkill/ogp/ogp.webp",
      faviconUrl: "https://takeshisakuma.github.io/overkill/favicon/favicon.svg",
      pageImgWidth: 1280,
      pageImgHeight: 960,
      pageUrl: "https://takeshisakuma.github.io/overkill/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_headerSection_HeaderSection__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: "20220615"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_visualSection_VisualSection__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: "Internet Explorer".concat("\n", "\u307E\u3060\u4F7F\u3063\u3066\u3044\u308B\u4EBA\u306F\u3044\u307E\u305B\u3093\u304B\uFF1F")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_aboutSection_AboutSection__WEBPACK_IMPORTED_MODULE_5__.default, {
      headingText: "Internet Explorer\u3068\u306F",
      paragraphText: ["Microsoft\u793E\u304C\u958B\u767A\u3057\u3066\u3044\u305FWeb\u30D6\u30E9\u30A6\u30B6\u3067\u3001\u6700\u76DB\u671F\u306B\u306FWeb\u30D6\u30E9\u30A6\u30B6\u306E\u30B7\u30A7\u30A295%\u4EE5\u4E0A\u3092\u5360\u3081\u3066\u3044\u307E\u3057\u305F\u304C\u3001Windows 10\u304B\u3089\u6A19\u6E96\u30D6\u30E9\u30A6\u30B6\u306FMicrosoft Edge\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002".concat("\n", "\u958B\u767A\u306F\u7D42\u4E86\u3057\u3066\u304A\u308A\u3001\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u306E\u30EA\u30B9\u30AF\u3084\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u554F\u984C\u304C\u3042\u308B\u305F\u3081\u3001\u73FE\u5728\u306F\u4E92\u63DB\u6027\u7DAD\u6301\u306E\u305F\u3081\u3060\u3051\u306B\u3001Windows 10\u306B\u642D\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002")],
      listNormal: ["Internet Explorer 10以前のバージョンはすでにサポートが終了しています。", "Internet Explorer 11は、2022年6月15日(日本時間では16日)にサポートの終了が予告されています。"],
      listCaution: ["Windows 10 LTSCやWindows Server上の Internet Explorer 11 デスクトップ アプリケーションは除く"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_unsupportSection_UnsupportSection__WEBPACK_IMPORTED_MODULE_6__.default, {
      headingText: "すでに、多くの企業や団体がInternet Explorerのサポートを打ち切っています。",
      listCaution: ["WordPressは、7月リリース予定のVer.5.8以降非対応を告知", "Microsoft 365は、2021年8月17日(日本時間では18日)でサポート終了を告知"],
      service: [{
        name: "Angular",
        img: "dev/angular.svg"
      }, {
        name: "artStation",
        img: "service/artstation.svg"
      }, {
        name: "Backlog",
        img: "service/backlog.svg"
      }, {
        name: "bandcamp",
        img: "service/bandcamp.svg"
      }, {
        name: "BASE",
        img: "service/base.svg"
      }, {
        name: "Beatport",
        img: "service/beatport.svg"
      }, {
        name: "Bootstrap",
        img: "dev/bootstrap.svg"
      }, {
        name: "CrowdWorks",
        img: "service/crowdworks.svg"
      }, {
        name: "DeviantArt",
        img: "service/deviantart.svg"
      }, {
        name: "dribbble",
        img: "service/dribbble.svg"
      }, {
        name: "Facebook",
        img: "service/facebook.svg"
      }, {
        name: "Feedly",
        img: "service/feedly.svg"
      }, {
        name: "flickr",
        img: "service/flickr.svg"
      }, {
        name: "GitHub",
        img: "service/github.svg"
      }, {
        name: "Google Analytics",
        img: "service/googleanalytics.svg"
      }, {
        name: "Google Earth",
        img: "service/googleearth.svg"
      }, {
        name: "Google Photos",
        img: "service/googlephotos.svg"
      }, {
        name: "Instagram",
        img: "service/instagram.svg"
      }, {
        name: "note",
        img: "service/note.svg"
      }, {
        name: "Notion",
        img: "service/notion.svg"
      }, {
        name: "Microsoft 365",
        img: "service/microsoft365.svg"
      }, {
        name: "OKWAVE",
        img: "service/okwave.svg"
      }, {
        name: "Pinterest",
        img: "service/pinterest.svg"
      }, {
        name: "Pocket",
        img: "service/pocket.svg"
      }, {
        name: "Skeb",
        img: "service/skeb.svg"
      }, {
        name: "Sketchfab",
        img: "service/sketchfab.svg"
      }, {
        name: "STORES",
        img: "service/stores.svg"
      }, {
        name: "STUDIO",
        img: "service/studio.svg"
      }, {
        name: "Trello",
        img: "service/trello.svg"
      }, {
        name: "Twitch",
        img: "service/twitch.svg"
      }, {
        name: "Twitter",
        img: "service/twitter.svg"
      }, {
        name: "Udemy",
        img: "service/udemy.svg"
      }, {
        name: "YouTube",
        img: "service/youtube.svg"
      }, {
        name: "YouTube Music",
        img: "service/youtubemusic.svg"
      }, {
        name: "Vue.js",
        img: "dev/vuejs.svg"
      }, {
        name: "WordPress",
        img: "dev/wordpress.svg"
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_countdownSection_CountdownSection__WEBPACK_IMPORTED_MODULE_7__.default, {
      countdownTimerAnimation: "countdownTimerAnimation",
      headingText: "Internet Explorer 11\u30B5\u30DD\u30FC\u30C8\u7D42\u4E86\u307E\u3067\u3001\u3042\u3068"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_pastSection_PastSection__WEBPACK_IMPORTED_MODULE_8__.default, {
      headingText: "Internet Explorer 11\u304C\u516C\u958B\u3055\u308C\u305F2013\u5E74\u306F\u3053\u3093\u306A\u5E74\u3067\u3057\u305F",
      paragraphText: ["\u5909\u5316\u306E\u65E9\u3044Web\u306E\u4E16\u754C\u3067\u306F\u7D0410\u5E74\u306F\u9014\u65B9\u3082\u306A\u304F\u9577\u3044\u6642\u9593\u3067\u3059\u3002\u3042\u306A\u305F\u306F10\u5E74\u524D\u306E\u30C7\u30B8\u30BF\u30EB\u88FD\u54C1\u3092\u4F7F\u3044\u305F\u3044\u3067\u3059\u304B\uFF1F\u3061\u306A\u307F\u306B\u3001iPhone\u306F5s(iOS7)\u304C\u767A\u58F2\u306B\u306A\u3063\u305F\u5E74\u3067\u3059\u3002", "\u305D\u308C\u3067\u306F\u30012013\u5E74\u306E\u51FA\u6765\u4E8B\u3092\u632F\u308A\u8FD4\u3063\u3066\u307F\u307E\u3057\u3087\u3046\u3002\n        "],
      eventData: [{
        name: "新語・流行語大賞",
        img: "icon_design_trend.svg",
        list: ["今でしょ!（林修）", "お・も・て・な・し（滝川クリステル）", "じぇじぇじぇ（あまちゃん）", "倍返し（半沢直樹）"]
      }, {
        name: "出来事",
        img: "icon_design_event.svg",
        list: ["NHK大河ドラマ『八重の桜』", "NTTドコモがiPhoneの提供開始", "バラク・オバマ大統領が続投でアメリカ大統領に就任", "ベネディクト16世の辞任"]
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_browserSection_BrowserSection__WEBPACK_IMPORTED_MODULE_9__.default, {
      headingText: "Internet Explorer\u304B\u3089\u4E57\u308A\u63DB\u3048\u308B\u306A\u3089",
      browserData: [{
        name: "Microsoft Edge",
        text: "Internet Explorerが必要なWebサイトに対応する「IE モード」を内蔵したWebブラウザ",
        url: "https://www.microsoft.com/ja-jp/edge",
        img: "edge"
      }, {
        name: "Google Chrome",
        text: "Googleのサービスとの連携に優れた、シェア一位のWebブラウザ",
        url: "https://www.google.com/intl/ja_jp/chrome/",
        img: "chrome"
      }, {
        name: "Mozilla Firefox",
        text: "プライバシー、セキュリティに優れたオープンソースのWebブラウザ",
        url: "https://www.mozilla.org/ja/firefox/new/",
        img: "firefox"
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_providerSection_ProviderSection__WEBPACK_IMPORTED_MODULE_10__.default, {
      headingText: "Webサービス提供者様に向けて",
      paragraphText: ["Internet Explorer\u4EE5\u5916\u306E\u30E2\u30C0\u30F3\u306A\u4E3B\u8981Web\u30D6\u30E9\u30A6\u30B6\u30FC\u306B\u306F\u30012013\u5E74\u4EE5\u964D\u3082\u65B0\u3057\u3044\u6A5F\u80FD\u304C\u6570\u591A\u304F\u8FFD\u52A0\u3055\u308C\u7D9A\u3051\u3066\u3044\u307E\u3059\u3002".concat("\n", "\u305D\u306E\u305F\u3081\u3001\u3042\u306A\u305F\u306E\u30B5\u30FC\u30D3\u30B9\u3067\u300CWeb\u3067\u6700\u65B0\u306E\u6A5F\u80FD\u3092\u63D0\u4F9B\u3057\u305F\u3044\u300D\u3068\u8003\u3048\u308B\u306A\u3089\u3001IE11\u306E\u5BFE\u5FDC\u306F\u8AE6\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), "\u696D\u52D9\u7528Web\u30B7\u30B9\u30C6\u30E0\u306E\u6539\u4FEE\u306F\u30B3\u30B9\u30C8\u304C\u304B\u304B\u308B\u305F\u3081\u3001\u73FE\u72B6\u7DAD\u6301\u3067Internet Explorer\u3067\u53E4\u3044Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u3044\u7D9A\u3051\u3066\u3044\u308B\u30B1\u30FC\u30B9\u304C\u3042\u308A\u307E\u3059\u3002".concat("\n", "\u3057\u304B\u3057\u3001\u6700\u65B0\u306EWeb\u30D6\u30E9\u30A6\u30B6\u30FC\u306B\u79FB\u884C\u3059\u308B\u307B\u3046\u304C\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u7684\u306B\u3082\u5B89\u5168\u3067\u3001\u9577\u671F\u7684\u306B\u898B\u3066\u3088\u308A\u826F\u3044\u9078\u629E\u3067\u3059\u3002"), "Internet Explorer\u4EE5\u5916\u306E\u30D6\u30E9\u30A6\u30B6\u3078\u306E\u5BFE\u5FDC\u306B\u306F\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002".concat("\n", "2022\u5E746\u670815\u65E5(\u65E5\u672C\u6642\u9593\u3067\u306F16\u65E5)\u4EE5\u964D\u306FIE\u306E\u8D77\u52D5\u3092\u3059\u308B\u3068Microsoft Edge\u306B\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002", "\n", "\u30B5\u30DD\u30FC\u30C8\u304C\u5207\u308C\u3066\u304B\u3089\u81EA\u793E\u30B5\u30A4\u30C8\u3092IE\u4EE5\u5916\u306B\u5BFE\u5FDC\u3055\u305B\u308B\u306E\u3067\u306F\u9593\u306B\u5408\u3044\u307E\u305B\u3093\u3002")]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_footerSection_FooterSection__WEBPACK_IMPORTED_MODULE_11__.default, {
      children: "Credit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Main, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYW5pbWF0aW9uL2Jyb3dzZXJBbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzZXRBbmltYXRpb24iLCJnc2FwIiwib3BhY2l0eSIsIngiLCJ5Iiwic2NhbGUiLCJkdXJhdGlvbiIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJtYXJrZXJzIiwiTWFpbiIsInVzZUVmZmVjdCIsIlNjcm9sbFRyaWdnZXIiLCJmYWRlVXBBbmltYXRpb24iLCJzbGlkZUluQW5pbWF0aW9uIiwic2VydmljZUljb25BbmltYXRpb24iLCJjb3VudGRvd25UaW1lckFuaW1hdGlvbiIsImV2ZW50QW5pbWF0aW9uIiwiYnJvd3NlckFuaW1hdGlvbiIsIm5hbWUiLCJpbWciLCJsaXN0IiwidGV4dCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkMsK0NBQUEsQ0FDRSxpQkFERixFQUdFO0FBQ0VDLFdBQU8sRUFBRSxDQURYO0FBRUVDLEtBQUMsRUFBRSxDQUZMO0FBR0VDLEtBQUMsRUFBRSxDQUFDLEVBSE47QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FIRixFQVNFO0FBQ0VILFdBQU8sRUFBRSxDQURYO0FBRUVDLEtBQUMsRUFBRSxDQUZMO0FBR0VDLEtBQUMsRUFBRSxDQUhMO0FBSUVDLFNBQUssRUFBRSxDQUpUO0FBS0VDLFlBQVEsRUFBRSxHQUxaO0FBT0VDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLGlCQURJO0FBRWJDLFdBQUssRUFBRSxTQUZNO0FBR2JDLGFBQU8sRUFBRTtBQUhJO0FBUGpCLEdBVEY7QUF1QkQsQ0F4QkQ7O0FBMkJBLCtEQUFlVixZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QyxXQUFHLEVBQUUsc0NBSFA7QUFJRUgsV0FBRyxFQUFFO0FBSlAsT0FEVyxFQU9YO0FBQ0VELFlBQUksRUFBRSxlQURSO0FBRUVHLFlBQUksRUFBRSxtQ0FGUjtBQUdFQyxXQUFHLEVBQUUsMkNBSFA7QUFJRUgsV0FBRyxFQUFFO0FBSlAsT0FQVyxFQWFYO0FBQ0VELFlBQUksRUFBRSxpQkFEUjtBQUVFRyxZQUFJLEVBQUUsa0NBRlI7QUFHRUMsV0FBRyxFQUFFLHlDQUhQO0FBSUVILFdBQUcsRUFBRTtBQUpQLE9BYlc7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkhGLGVBMElFLDhEQUFDLDhFQUFEO0FBQ0UsaUJBQVcsRUFBRSxpQkFEZjtBQUVFLG1CQUFhLEVBQUUseVJBQ3VELElBRHZELCtwQkFFbUUsSUFGbkUseWNBRzZCLElBSDdCLHFRQUdxRyxJQUhyRztBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUlGLGVBa0pFLDhEQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEpGO0FBQUEsa0JBREY7QUFzSkQsQ0FwS0Q7O0dBQU1WLEk7O0tBQUFBLEk7QUFxS04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQ1MGRlZTNiNjEyZDJmZjU2OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5cbmNvbnN0IHNldEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgZ3NhcC5mcm9tVG8oXG4gICAgXCIuZXZlbnRBbmltYXRpb25cIixcblxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB4OiAwLFxuICAgICAgeTogLTIwLFxuICAgICAgc2NhbGU6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgZHVyYXRpb246IDAuNixcblxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5ldmVudEFuaW1hdGlvblwiLFxuICAgICAgICBzdGFydDogXCJ0b3AgOTAlXCIsXG4gICAgICAgIG1hcmtlcnM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHNldEFuaW1hdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZW8vU2VvXCI7XG5cbmltcG9ydCBIZWFkZXJTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uL2hlYWRlclNlY3Rpb24vSGVhZGVyU2VjdGlvblwiO1xuaW1wb3J0IFZpc3VhbFNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb24vdmlzdWFsU2VjdGlvbi9WaXN1YWxTZWN0aW9uXCI7XG5pbXBvcnQgQWJvdXRTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uL2Fib3V0U2VjdGlvbi9BYm91dFNlY3Rpb25cIjtcbmltcG9ydCBVbnN1cHBvcnRTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uL3Vuc3VwcG9ydFNlY3Rpb24vVW5zdXBwb3J0U2VjdGlvblwiO1xuaW1wb3J0IENvdW50ZG93blNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb24vY291bnRkb3duU2VjdGlvbi9Db3VudGRvd25TZWN0aW9uXCI7XG5pbXBvcnQgUGFzdFNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb24vcGFzdFNlY3Rpb24vUGFzdFNlY3Rpb25cIjtcbmltcG9ydCBCcm93c2VyU2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbi9icm93c2VyU2VjdGlvbi9Ccm93c2VyU2VjdGlvblwiO1xuaW1wb3J0IFByb3ZpZGVyU2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbi9wcm92aWRlclNlY3Rpb24vUHJvdmlkZXJTZWN0aW9uXCI7XG5pbXBvcnQgRm9vdGVyU2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbi9mb290ZXJTZWN0aW9uL0Zvb3RlclNlY3Rpb25cIjtcblxuaW1wb3J0IEllQ2hlY2tlciBmcm9tIFwiLi4vY29tcG9uZW50cy9pZUNoZWNrZXIvSWVDaGVja2VyXCI7XG5pbXBvcnQgTG9hZGluZ0NoZWNrZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGluZ0NoZWNrZXIvTG9hZGluZ0NoZWNrZXJcIjtcblxuLy/jgqLjg4vjg6Hjg7zjgrfjg6fjg7NcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IGZhZGVVcEFuaW1hdGlvbiBmcm9tIFwiLi4vYW5pbWF0aW9uL2ZhZGVVcEFuaW1hdGlvblwiO1xuaW1wb3J0IHNsaWRlSW5BbmltYXRpb24gZnJvbSBcIi4uL2FuaW1hdGlvbi9zbGlkZUluQW5pbWF0aW9uXCI7XG5cbmltcG9ydCBzZXJ2aWNlSWNvbkFuaW1hdGlvbiBmcm9tIFwiLi4vYW5pbWF0aW9uL3NlcnZpY2VJY29uQW5pbWF0aW9uXCI7XG5cbmltcG9ydCBjb3VudGRvd25UaW1lckFuaW1hdGlvbiBmcm9tIFwiLi4vYW5pbWF0aW9uL2NvdW50ZG93blRpbWVyQW5pbWF0aW9uXCI7XG5pbXBvcnQgZXZlbnRBbmltYXRpb24gZnJvbSBcIi4uL2FuaW1hdGlvbi9ldmVudEFuaW1hdGlvblwiO1xuaW1wb3J0IGJyb3dzZXJBbmltYXRpb24gZnJvbSBcIi4uL2FuaW1hdGlvbi9icm93c2VyQW5pbWF0aW9uXCI7XG5jb25zdCBNYWluID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG4gICAgICBmYWRlVXBBbmltYXRpb24oKTtcbiAgICAgIHNsaWRlSW5BbmltYXRpb24oKTtcblxuICAgICAgc2VydmljZUljb25BbmltYXRpb24oKTtcbiAgICAgIGNvdW50ZG93blRpbWVyQW5pbWF0aW9uKCk7XG4gICAgICBldmVudEFuaW1hdGlvbigpO1xuICAgICAgYnJvd3NlckFuaW1hdGlvbigpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMb2FkaW5nQ2hlY2tlciAvPlxuICAgICAgPEllQ2hlY2tlciAvPlxuICAgICAgPFNlb1xuICAgICAgICBwYWdlVGl0bGU9e1wiMjAyMjA2MTVcIn1cbiAgICAgICAgcGFnZURlc2NyaXB0aW9uPXtcIkludGVybmV0IEV4cGxvcmVyIOOBvuOBoOS9v+OBo+OBpuOBhOOCi+S6uuOBr+OBhOOBvuOBm+OCk+OBi++8n1wifVxuICAgICAgICBpbWdVcmw9e1wiaHR0cHM6Ly90YWtlc2hpc2FrdW1hLmdpdGh1Yi5pby9vdmVya2lsbC9vZ3Avb2dwLndlYnBcIn1cbiAgICAgICAgZmF2aWNvblVybD17XG4gICAgICAgICAgXCJodHRwczovL3Rha2VzaGlzYWt1bWEuZ2l0aHViLmlvL292ZXJraWxsL2Zhdmljb24vZmF2aWNvbi5zdmdcIlxuICAgICAgICB9XG4gICAgICAgIHBhZ2VJbWdXaWR0aD17MTI4MH1cbiAgICAgICAgcGFnZUltZ0hlaWdodD17OTYwfVxuICAgICAgICBwYWdlVXJsPXtcImh0dHBzOi8vdGFrZXNoaXNha3VtYS5naXRodWIuaW8vb3ZlcmtpbGwvXCJ9XG4gICAgICAvPlxuICAgICAgPEhlYWRlclNlY3Rpb24+MjAyMjA2MTU8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8VmlzdWFsU2VjdGlvbj5cbiAgICAgICAge2BJbnRlcm5ldCBFeHBsb3JlciR7XCJcXG5cIn3jgb7jgaDkvb/jgaPjgabjgYTjgovkurrjga/jgYTjgb7jgZvjgpPjgYvvvJ9gfVxuICAgICAgPC9WaXN1YWxTZWN0aW9uPlxuXG4gICAgICA8QWJvdXRTZWN0aW9uXG4gICAgICAgIGhlYWRpbmdUZXh0PVwiSW50ZXJuZXQgRXhwbG9yZXLjgajjga9cIlxuICAgICAgICBwYXJhZ3JhcGhUZXh0PXtbXG4gICAgICAgICAgYE1pY3Jvc29mdOekvuOBjOmWi+eZuuOBl+OBpuOBhOOBn1dlYuODluODqeOCpuOCtuOBp+OAgeacgOebm+acn+OBq+OBr1dlYuODluODqeOCpuOCtuOBruOCt+OCp+OCojk1JeS7peS4iuOCkuWNoOOCgeOBpuOBhOOBvuOBl+OBn+OBjOOAgVdpbmRvd3MgMTDjgYvjgonmqJnmupbjg5bjg6njgqbjgrbjga9NaWNyb3NvZnQgRWRnZeOBq+e9ruOBjeaPm+OBiOOCieOCjOOBpuOBhOOBvuOBmeOAgiR7XCJcXG5cIn3plovnmbrjga/ntYLkuobjgZfjgabjgYrjgorjgIHjgrvjgq3jg6Xjg6rjg4bjgqPkuIrjga7jg6rjgrnjgq/jgoTjgIHjg5Hjg5Xjgqnjg7zjg57jg7Pjgrnjga7llY/poYzjgYzjgYLjgovjgZ/jgoHjgIHnj77lnKjjga/kupLmj5vmgKfntq3mjIHjga7jgZ/jgoHjgaDjgZHjgavjgIFXaW5kb3dzIDEw44Gr5pCt6LyJ44GV44KM44Gm44GE44G+44GZ44CCYCxcbiAgICAgICAgXX1cbiAgICAgICAgbGlzdE5vcm1hbD17W1xuICAgICAgICAgIFwiSW50ZXJuZXQgRXhwbG9yZXIgMTDku6XliY3jga7jg5Djg7zjgrjjg6fjg7Pjga/jgZnjgafjgavjgrXjg53jg7zjg4jjgYzntYLkuobjgZfjgabjgYTjgb7jgZnjgIJcIixcbiAgICAgICAgICBcIkludGVybmV0IEV4cGxvcmVyIDEx44Gv44CBMjAyMuW5tDbmnIgxNeaXpSjml6XmnKzmmYLplpPjgafjga8xNuaXpSnjgavjgrXjg53jg7zjg4jjga7ntYLkuobjgYzkuojlkYrjgZXjgozjgabjgYTjgb7jgZnjgIJcIixcbiAgICAgICAgXX1cbiAgICAgICAgbGlzdENhdXRpb249e1tcbiAgICAgICAgICBcIldpbmRvd3MgMTAgTFRTQ+OChFdpbmRvd3MgU2VydmVy5LiK44GuIEludGVybmV0IEV4cGxvcmVyIDExIOODh+OCueOCr+ODiOODg+ODlyDjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7Pjga/pmaTjgY9cIixcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8VW5zdXBwb3J0U2VjdGlvblxuICAgICAgICBoZWFkaW5nVGV4dD17XG4gICAgICAgICAgXCLjgZnjgafjgavjgIHlpJrjgY/jga7kvIHmpa3jgoTlm6PkvZPjgYxJbnRlcm5ldCBFeHBsb3JlcuOBruOCteODneODvOODiOOCkuaJk+OBoeWIh+OBo+OBpuOBhOOBvuOBmeOAglwiXG4gICAgICAgIH1cbiAgICAgICAgbGlzdENhdXRpb249e1tcbiAgICAgICAgICBcIldvcmRQcmVzc+OBr+OAgTfmnIjjg6rjg6rjg7zjgrnkuojlrprjga5WZXIuNS445Lul6ZmN6Z2e5a++5b+c44KS5ZGK55+lXCIsXG4gICAgICAgICAgXCJNaWNyb3NvZnQgMzY144Gv44CBMjAyMeW5tDjmnIgxN+aXpSjml6XmnKzmmYLplpPjgafjga8xOOaXpSnjgafjgrXjg53jg7zjg4jntYLkuobjgpLlkYrnn6VcIixcbiAgICAgICAgXX1cbiAgICAgICAgc2VydmljZT17W1xuICAgICAgICAgIHsgbmFtZTogXCJBbmd1bGFyXCIsIGltZzogXCJkZXYvYW5ndWxhci5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJhcnRTdGF0aW9uXCIsIGltZzogXCJzZXJ2aWNlL2FydHN0YXRpb24uc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiQmFja2xvZ1wiLCBpbWc6IFwic2VydmljZS9iYWNrbG9nLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImJhbmRjYW1wXCIsIGltZzogXCJzZXJ2aWNlL2JhbmRjYW1wLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkJBU0VcIiwgaW1nOiBcInNlcnZpY2UvYmFzZS5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJCZWF0cG9ydFwiLCBpbWc6IFwic2VydmljZS9iZWF0cG9ydC5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJCb290c3RyYXBcIiwgaW1nOiBcImRldi9ib290c3RyYXAuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiQ3Jvd2RXb3Jrc1wiLCBpbWc6IFwic2VydmljZS9jcm93ZHdvcmtzLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkRldmlhbnRBcnRcIiwgaW1nOiBcInNlcnZpY2UvZGV2aWFudGFydC5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJkcmliYmJsZVwiLCBpbWc6IFwic2VydmljZS9kcmliYmJsZS5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJGYWNlYm9va1wiLCBpbWc6IFwic2VydmljZS9mYWNlYm9vay5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJGZWVkbHlcIiwgaW1nOiBcInNlcnZpY2UvZmVlZGx5LnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImZsaWNrclwiLCBpbWc6IFwic2VydmljZS9mbGlja3Iuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiR2l0SHViXCIsIGltZzogXCJzZXJ2aWNlL2dpdGh1Yi5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJHb29nbGUgQW5hbHl0aWNzXCIsIGltZzogXCJzZXJ2aWNlL2dvb2dsZWFuYWx5dGljcy5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJHb29nbGUgRWFydGhcIiwgaW1nOiBcInNlcnZpY2UvZ29vZ2xlZWFydGguc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiR29vZ2xlIFBob3Rvc1wiLCBpbWc6IFwic2VydmljZS9nb29nbGVwaG90b3Muc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiSW5zdGFncmFtXCIsIGltZzogXCJzZXJ2aWNlL2luc3RhZ3JhbS5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJub3RlXCIsIGltZzogXCJzZXJ2aWNlL25vdGUuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiTm90aW9uXCIsIGltZzogXCJzZXJ2aWNlL25vdGlvbi5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJNaWNyb3NvZnQgMzY1XCIsIGltZzogXCJzZXJ2aWNlL21pY3Jvc29mdDM2NS5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJPS1dBVkVcIiwgaW1nOiBcInNlcnZpY2Uvb2t3YXZlLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlBpbnRlcmVzdFwiLCBpbWc6IFwic2VydmljZS9waW50ZXJlc3Quc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiUG9ja2V0XCIsIGltZzogXCJzZXJ2aWNlL3BvY2tldC5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJTa2ViXCIsIGltZzogXCJzZXJ2aWNlL3NrZWIuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiU2tldGNoZmFiXCIsIGltZzogXCJzZXJ2aWNlL3NrZXRjaGZhYi5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJTVE9SRVNcIiwgaW1nOiBcInNlcnZpY2Uvc3RvcmVzLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlNUVURJT1wiLCBpbWc6IFwic2VydmljZS9zdHVkaW8uc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiVHJlbGxvXCIsIGltZzogXCJzZXJ2aWNlL3RyZWxsby5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJUd2l0Y2hcIiwgaW1nOiBcInNlcnZpY2UvdHdpdGNoLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlR3aXR0ZXJcIiwgaW1nOiBcInNlcnZpY2UvdHdpdHRlci5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJVZGVteVwiLCBpbWc6IFwic2VydmljZS91ZGVteS5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJZb3VUdWJlXCIsIGltZzogXCJzZXJ2aWNlL3lvdXR1YmUuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiWW91VHViZSBNdXNpY1wiLCBpbWc6IFwic2VydmljZS95b3V0dWJlbXVzaWMuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiVnVlLmpzXCIsIGltZzogXCJkZXYvdnVlanMuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiV29yZFByZXNzXCIsIGltZzogXCJkZXYvd29yZHByZXNzLnN2Z1wiIH0sXG4gICAgICAgIF19XG4gICAgICAvPlxuXG4gICAgICA8Q291bnRkb3duU2VjdGlvblxuICAgICAgICBjb3VudGRvd25UaW1lckFuaW1hdGlvbj17XCJjb3VudGRvd25UaW1lckFuaW1hdGlvblwifVxuICAgICAgICBoZWFkaW5nVGV4dD1cIkludGVybmV0IEV4cGxvcmVyIDEx44K144Od44O844OI57WC5LqG44G+44Gn44CB44GC44GoXCJcbiAgICAgIC8+XG5cbiAgICAgIDxQYXN0U2VjdGlvblxuICAgICAgICBoZWFkaW5nVGV4dD1cIkludGVybmV0IEV4cGxvcmVyIDEx44GM5YWs6ZaL44GV44KM44GfMjAxM+W5tOOBr+OBk+OCk+OBquW5tOOBp+OBl+OBn1wiXG4gICAgICAgIHBhcmFncmFwaFRleHQ9e1tcbiAgICAgICAgICBg5aSJ5YyW44Gu5pep44GEV2Vi44Gu5LiW55WM44Gn44Gv57SEMTDlubTjga/pgJTmlrnjgoLjgarjgY/plbfjgYTmmYLplpPjgafjgZnjgILjgYLjgarjgZ/jga8xMOW5tOWJjeOBruODh+OCuOOCv+ODq+ijveWTgeOCkuS9v+OBhOOBn+OBhOOBp+OBmeOBi++8n+OBoeOBquOBv+OBq+OAgWlQaG9uZeOBrzVzKGlPUzcp44GM55m65aOy44Gr44Gq44Gj44Gf5bm044Gn44GZ44CCYCxcbiAgICAgICAgICBg44Gd44KM44Gn44Gv44CBMjAxM+W5tOOBruWHuuadpeS6i+OCkuaMr+OCiui/lOOBo+OBpuOBv+OBvuOBl+OCh+OBhuOAglxuICAgICAgICBgLFxuICAgICAgICBdfVxuICAgICAgICBldmVudERhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIuaWsOiqnuODu+a1geihjOiqnuWkp+iznlwiLFxuICAgICAgICAgICAgaW1nOiBcImljb25fZGVzaWduX3RyZW5kLnN2Z1wiLFxuICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICBcIuS7iuOBp+OBl+OChyHvvIjmnpfkv67vvIlcIixcbiAgICAgICAgICAgICAgXCLjgYrjg7vjgoLjg7vjgabjg7vjgarjg7vjgZfvvIjmu53lt53jgq/jg6rjgrnjg4bjg6vvvIlcIixcbiAgICAgICAgICAgICAgXCLjgZjjgYfjgZjjgYfjgZjjgYfvvIjjgYLjgb7jgaHjgoPjgpPvvIlcIixcbiAgICAgICAgICAgICAgXCLlgI3ov5TjgZfvvIjljYrmsqLnm7TmqLnvvIlcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIuWHuuadpeS6i1wiLFxuICAgICAgICAgICAgaW1nOiBcImljb25fZGVzaWduX2V2ZW50LnN2Z1wiLFxuICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICBcIk5IS+Wkp+ays+ODieODqeODnuOAjuWFq+mHjeOBruahnOOAj1wiLFxuICAgICAgICAgICAgICBcIk5UVOODieOCs+ODouOBjGlQaG9uZeOBruaPkOS+m+mWi+Wni1wiLFxuICAgICAgICAgICAgICBcIuODkOODqeOCr+ODu+OCquODkOODnuWkp+e1semgmOOBjOe2muaKleOBp+OCouODoeODquOCq+Wkp+e1semgmOOBq+WwseS7u1wiLFxuICAgICAgICAgICAgICBcIuODmeODjeODh+OCo+OCr+ODiDE25LiW44Gu6L6e5Lu7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICA+PC9QYXN0U2VjdGlvbj5cbiAgICAgIDxCcm93c2VyU2VjdGlvblxuICAgICAgICBoZWFkaW5nVGV4dD1cIkludGVybmV0IEV4cGxvcmVy44GL44KJ5LmX44KK5o+b44GI44KL44Gq44KJXCJcbiAgICAgICAgYnJvd3NlckRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk1pY3Jvc29mdCBFZGdlXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIkludGVybmV0IEV4cGxvcmVy44GM5b+F6KaB44GqV2Vi44K144Kk44OI44Gr5a++5b+c44GZ44KL44CMSUUg44Oi44O844OJ44CN44KS5YaF6JS144GX44GfV2Vi44OW44Op44Km44K2XCIsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbS9qYS1qcC9lZGdlXCIsXG4gICAgICAgICAgICBpbWc6IFwiZWRnZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJHb29nbGUgQ2hyb21lXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIkdvb2dsZeOBruOCteODvOODk+OCueOBqOOBrumAo+aQuuOBq+WEquOCjOOBn+OAgeOCt+OCp+OCouS4gOS9jeOBrldlYuODluODqeOCpuOCtlwiLFxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW50bC9qYV9qcC9jaHJvbWUvXCIsXG4gICAgICAgICAgICBpbWc6IFwiY2hyb21lXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk1vemlsbGEgRmlyZWZveFwiLFxuICAgICAgICAgICAgdGV4dDogXCLjg5fjg6njgqTjg5Djgrfjg7zjgIHjgrvjgq3jg6Xjg6rjg4bjgqPjgavlhKrjgozjgZ/jgqrjg7zjg5fjg7Pjgr3jg7zjgrnjga5XZWLjg5bjg6njgqbjgrZcIixcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5tb3ppbGxhLm9yZy9qYS9maXJlZm94L25ldy9cIixcbiAgICAgICAgICAgIGltZzogXCJmaXJlZm94XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8UHJvdmlkZXJTZWN0aW9uXG4gICAgICAgIGhlYWRpbmdUZXh0PXtcIldlYuOCteODvOODk+OCueaPkOS+m+iAheanmOOBq+WQkeOBkeOBplwifVxuICAgICAgICBwYXJhZ3JhcGhUZXh0PXtbXG4gICAgICAgICAgYEludGVybmV0IEV4cGxvcmVy5Lul5aSW44Gu44Oi44OA44Oz44Gq5Li76KaBV2Vi44OW44Op44Km44K244O844Gr44Gv44CBMjAxM+W5tOS7pemZjeOCguaWsOOBl+OBhOapn+iDveOBjOaVsOWkmuOBj+i/veWKoOOBleOCjOe2muOBkeOBpuOBhOOBvuOBmeOAgiR7XCJcXG5cIn3jgZ3jga7jgZ/jgoHjgIHjgYLjgarjgZ/jga7jgrXjg7zjg5PjgrnjgafjgIxXZWLjgafmnIDmlrDjga7mqZ/og73jgpLmj5DkvpvjgZfjgZ/jgYTjgI3jgajogIPjgYjjgovjgarjgonjgIFJRTEx44Gu5a++5b+c44Gv6Kum44KB44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCYCxcbiAgICAgICAgICBg5qWt5YuZ55SoV2Vi44K344K544OG44Og44Gu5pS55L+u44Gv44Kz44K544OI44GM44GL44GL44KL44Gf44KB44CB54++54q257at5oyB44GnSW50ZXJuZXQgRXhwbG9yZXLjgaflj6TjgYRXZWLjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7PjgpLkvb/jgYTntprjgZHjgabjgYTjgovjgrHjg7zjgrnjgYzjgYLjgorjgb7jgZnjgIIke1wiXFxuXCJ944GX44GL44GX44CB5pyA5paw44GuV2Vi44OW44Op44Km44K244O844Gr56e76KGM44GZ44KL44G744GG44GM44K744Kt44Ol44Oq44OG44Kj55qE44Gr44KC5a6J5YWo44Gn44CB6ZW35pyf55qE44Gr6KaL44Gm44KI44KK6Imv44GE6YG45oqe44Gn44GZ44CCYCxcbiAgICAgICAgICBgSW50ZXJuZXQgRXhwbG9yZXLku6XlpJbjga7jg5bjg6njgqbjgrbjgbjjga7lr77lv5zjgavjga/mmYLplpPjgYzjgYvjgYvjgorjgb7jgZnjgIIke1wiXFxuXCJ9MjAyMuW5tDbmnIgxNeaXpSjml6XmnKzmmYLplpPjgafjga8xNuaXpSnku6XpmY3jga9JReOBrui1t+WLleOCkuOBmeOCi+OBqE1pY3Jvc29mdCBFZGdl44Gr44Oq44OA44Kk44Os44Kv44OI44GV44KM44KL44KI44GG44Gr44Gq44KK44G+44GZ44CCJHtcIlxcblwifeOCteODneODvOODiOOBjOWIh+OCjOOBpuOBi+OCieiHquekvuOCteOCpOODiOOCkklF5Lul5aSW44Gr5a++5b+c44GV44Gb44KL44Gu44Gn44Gv6ZaT44Gr5ZCI44GE44G+44Gb44KT44CCYCxcbiAgICAgICAgXX1cbiAgICAgID48L1Byb3ZpZGVyU2VjdGlvbj5cbiAgICAgIDxGb290ZXJTZWN0aW9uPkNyZWRpdDwvRm9vdGVyU2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==