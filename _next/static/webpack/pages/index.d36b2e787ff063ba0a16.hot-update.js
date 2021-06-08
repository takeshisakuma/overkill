self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./animation/serviceIconAnimation.ts":
/*!*******************************************!*\
  !*** ./animation/serviceIconAnimation.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var setAnimation = function setAnimation() {
  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(".serviceIconAnimation", {
    opacity: 0,
    x: 200,
    y: 0,
    scale: 1
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".serviceIconAnimation",
      start: "top 50%",
      //end: "bottom 100%",
      onEnter: function onEnter() {
        console.log("scroll In");
      },
      //スクロールイン時
      onEnterBack: function onEnterBack() {
        console.log("scroll Back");
      },
      //スクロールバック時
      markers: true // マーカー表示

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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _animation_fadeUpAnimation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../animation/fadeUpAnimation */ "./animation/fadeUpAnimation.ts");
/* harmony import */ var _animation_slideInAnimation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../animation/slideInAnimation */ "./animation/slideInAnimation.ts");
/* harmony import */ var _animation_countdownTimerAnimation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../animation/countdownTimerAnimation */ "./animation/countdownTimerAnimation.ts");
/* harmony import */ var _animation_serviceIconAnimation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../animation/serviceIconAnimation */ "./animation/serviceIconAnimation.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\facto\\Desktop\\overkill\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();













 //アニメーション








var Main = function Main() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (true) {
      gsap__WEBPACK_IMPORTED_MODULE_18__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_19__.ScrollTrigger);
      (0,_animation_fadeUpAnimation__WEBPACK_IMPORTED_MODULE_14__.default)();
      (0,_animation_slideInAnimation__WEBPACK_IMPORTED_MODULE_15__.default)();
      (0,_animation_countdownTimerAnimation__WEBPACK_IMPORTED_MODULE_16__.default)();
      (0,_animation_serviceIconAnimation__WEBPACK_IMPORTED_MODULE_17__.default)();
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loadingChecker_LoadingChecker__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ieChecker_IeChecker__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_headerSection_HeaderSection__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: "20220615"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_visualSection_VisualSection__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: "Internet Explorer".concat("\n", "\u307E\u3060\u4F7F\u3063\u3066\u3044\u308B\u4EBA\u306F\u3044\u307E\u305B\u3093\u304B\uFF1F")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_aboutSection_AboutSection__WEBPACK_IMPORTED_MODULE_5__.default, {
      headingText: "Internet Explorer\u3068\u306F",
      paragraphText: ["Microsoft\u793E\u304C\u958B\u767A\u3057\u3066\u3044\u305FWeb\u30D6\u30E9\u30A6\u30B6\u3067\u3001\u6700\u76DB\u671F\u306B\u306FWeb\u30D6\u30E9\u30A6\u30B6\u306E\u30B7\u30A7\u30A295%\u4EE5\u4E0A\u3092\u5360\u3081\u3066\u3044\u307E\u3057\u305F\u304C\u3001Windows 10\u304B\u3089\u6A19\u6E96\u30D6\u30E9\u30A6\u30B6\u306FMicrosoft Edge\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002".concat("\n", "\u958B\u767A\u306F\u7D42\u4E86\u3057\u3066\u304A\u308A\u3001\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u306E\u30EA\u30B9\u30AF\u3084\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u554F\u984C\u304C\u3042\u308B\u305F\u3081\u3001\u73FE\u5728\u306F\u4E92\u63DB\u6027\u7DAD\u6301\u306E\u305F\u3081\u3060\u3051\u306B\u3001Windows 10\u306B\u642D\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002")],
      listNormal: ["Internet Explorer 10以前のバージョンはすでにサポートが終了しています。", "Internet Explorer 11は、2022年6月15日(日本時間では16日)にサポートの終了が予告されています。"],
      listCaution: ["Windows 10 LTSCやWindows Server上の Internet Explorer 11 デスクトップ アプリケーションは除く"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_countdownSection_CountdownSection__WEBPACK_IMPORTED_MODULE_7__.default, {
      countdownTimerAnimation: "countdownTimerAnimation",
      headingText: "Internet Explorer 11\u30B5\u30DD\u30FC\u30C8\u7D42\u4E86\u307E\u3067\u3001\u3042\u3068"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 123,
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
      lineNumber: 153,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_providerSection_ProviderSection__WEBPACK_IMPORTED_MODULE_10__.default, {
      headingText: "Webサービス提供者様に向けて",
      paragraphText: ["Internet Explorer\u4EE5\u5916\u306E\u30E2\u30C0\u30F3\u306A\u4E3B\u8981Web\u30D6\u30E9\u30A6\u30B6\u30FC\u306B\u306F\u30012013\u5E74\u4EE5\u964D\u3082\u65B0\u3057\u3044\u6A5F\u80FD\u304C\u6570\u591A\u304F\u8FFD\u52A0\u3055\u308C\u7D9A\u3051\u3066\u3044\u307E\u3059\u3002".concat("\n", "\u305D\u306E\u305F\u3081\u3001\u3042\u306A\u305F\u306E\u30B5\u30FC\u30D3\u30B9\u3067\u300CWeb\u3067\u6700\u65B0\u306E\u6A5F\u80FD\u3092\u63D0\u4F9B\u3057\u305F\u3044\u300D\u3068\u8003\u3048\u308B\u306A\u3089\u3001IE11\u306E\u5BFE\u5FDC\u306F\u8AE6\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), "\u696D\u52D9\u7528Web\u30B7\u30B9\u30C6\u30E0\u306E\u6539\u4FEE\u306F\u30B3\u30B9\u30C8\u304C\u304B\u304B\u308B\u305F\u3081\u3001\u73FE\u72B6\u7DAD\u6301\u3067Internet Explorer\u3067\u53E4\u3044Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u3044\u7D9A\u3051\u3066\u3044\u308B\u30B1\u30FC\u30B9\u304C\u3042\u308A\u307E\u3059\u3002".concat("\n", "\u3057\u304B\u3057\u3001\u6700\u65B0\u306EWeb\u30D6\u30E9\u30A6\u30B6\u30FC\u306B\u79FB\u884C\u3059\u308B\u307B\u3046\u304C\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u7684\u306B\u3082\u5B89\u5168\u3067\u3001\u9577\u671F\u7684\u306B\u898B\u3066\u3088\u308A\u826F\u3044\u9078\u629E\u3067\u3059\u3002"), "Internet Explorer\u4EE5\u5916\u306E\u30D6\u30E9\u30A6\u30B6\u3078\u306E\u5BFE\u5FDC\u306B\u306F\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002".concat("\n", "2022\u5E746\u670815\u65E5(\u65E5\u672C\u6642\u9593\u3067\u306F16\u65E5)\u4EE5\u964D\u306FIE\u306E\u8D77\u52D5\u3092\u3059\u308B\u3068Microsoft Edge\u306B\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002", "\n", "\u30B5\u30DD\u30FC\u30C8\u304C\u5207\u308C\u3066\u304B\u3089\u81EA\u793E\u30B5\u30A4\u30C8\u3092IE\u4EE5\u5916\u306B\u5BFE\u5FDC\u3055\u305B\u308B\u306E\u3067\u306F\u9593\u306B\u5408\u3044\u307E\u305B\u3093\u3002")]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_footerSection_FooterSection__WEBPACK_IMPORTED_MODULE_11__.default, {
      children: "Credit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYW5pbWF0aW9uL3NlcnZpY2VJY29uQW5pbWF0aW9uLnRzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsic2V0QW5pbWF0aW9uIiwiZ3NhcCIsIm9wYWNpdHkiLCJ4IiwieSIsInNjYWxlIiwiZHVyYXRpb24iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0Iiwib25FbnRlciIsImNvbnNvbGUiLCJsb2ciLCJvbkVudGVyQmFjayIsIm1hcmtlcnMiLCJNYWluIiwidXNlRWZmZWN0IiwiU2Nyb2xsVHJpZ2dlciIsImZhZGVVcEFuaW1hdGlvbiIsInNsaWRlSW5BbmltYXRpb24iLCJjb3VudGRvd25UaW1lckFuaW1hdGlvbiIsInNlcnZpY2VJY29uQW5pbWF0aW9uIiwibmFtZSIsImltZyIsImxpc3QiLCJ0ZXh0IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCQywrQ0FBQSxDQUNFLHVCQURGLEVBR0U7QUFDRUMsV0FBTyxFQUFFLENBRFg7QUFFRUMsS0FBQyxFQUFFLEdBRkw7QUFHRUMsS0FBQyxFQUFFLENBSEw7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FIRixFQVNFO0FBQ0VILFdBQU8sRUFBRSxDQURYO0FBRUVDLEtBQUMsRUFBRSxDQUZMO0FBR0VDLEtBQUMsRUFBRSxDQUhMO0FBSUVDLFNBQUssRUFBRSxDQUpUO0FBS0VDLFlBQVEsRUFBRSxDQUxaO0FBT0VDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLHVCQURJO0FBRWJDLFdBQUssRUFBRSxTQUZNO0FBR2I7QUFDQUMsYUFBTyxFQUFFLG1CQUFNO0FBQ2JDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxPQU5ZO0FBTVY7QUFDSEMsaUJBQVcsRUFBRSx1QkFBTTtBQUNqQkYsZUFBTyxDQUFDQyxHQUFSLENBQVks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QTtBQUFBLGFBckZGLGVBbUhFLDhEQUFDLDJFQUFEO0FBQ0UsaUJBQVcsRUFBQyx5RUFEZDtBQUVFLGlCQUFXLEVBQUUsQ0FDWDtBQUNFRixZQUFJLEVBQUUsZ0JBRFI7QUFFRUcsWUFBSSxFQUFFLHNEQUZSO0FBR0VDLFdBQUcsRUFBRSxzQ0FIUDtBQUlFSCxXQUFHLEVBQUU7QUFKUCxPQURXLEVBT1g7QUFDRUQsWUFBSSxFQUFFLGVBRFI7QUFFRUcsWUFBSSxFQUFFLG1DQUZSO0FBR0VDLFdBQUcsRUFBRSwyQ0FIUDtBQUlFSCxXQUFHLEVBQUU7QUFKUCxPQVBXLEVBYVg7QUFDRUQsWUFBSSxFQUFFLGlCQURSO0FBRUVHLFlBQUksRUFBRSxrQ0FGUjtBQUdFQyxXQUFHLEVBQUUseUNBSFA7QUFJRUgsV0FBRyxFQUFFO0FBSlAsT0FiVztBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuSEYsZUEwSUUsOERBQUMsOEVBQUQ7QUFDRSxpQkFBVyxFQUFFLGlCQURmO0FBRUUsbUJBQWEsRUFBRSx5UkFDdUQsSUFEdkQsK3BCQUVtRSxJQUZuRSx5Y0FHNkIsSUFIN0IscVFBR3FHLElBSHJHO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExSUYsZUFrSkUsOERBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsSkY7QUFBQSxrQkFERjtBQXNKRCxDQWpLRDs7R0FBTVIsSTs7S0FBQUEsSTtBQWtLTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMzZiMmU3ODdmZjA2M2JhMGExNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5cblxuY29uc3Qgc2V0QW5pbWF0aW9uID0gKCkgPT4ge1xuICBnc2FwLmZyb21UbyhcbiAgICBcIi5zZXJ2aWNlSWNvbkFuaW1hdGlvblwiLFxuXG4gICAge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHg6IDIwMCxcbiAgICAgIHk6IDAsXG4gICAgICBzY2FsZTogMVxuICAgIH0sXG4gICAge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgc2NhbGU6IDEsXG4gICAgICBkdXJhdGlvbjogMSxcblxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5zZXJ2aWNlSWNvbkFuaW1hdGlvblwiLFxuICAgICAgICBzdGFydDogXCJ0b3AgNTAlXCIsXG4gICAgICAgIC8vZW5kOiBcImJvdHRvbSAxMDAlXCIsXG4gICAgICAgIG9uRW50ZXI6ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNjcm9sbCBJblwiKTtcbiAgICAgICAgfSwgLy/jgrnjgq/jg63jg7zjg6vjgqTjg7PmmYJcbiAgICAgICAgb25FbnRlckJhY2s6ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNjcm9sbCBCYWNrXCIpO1xuICAgICAgICB9LCAvL+OCueOCr+ODreODvOODq+ODkOODg+OCr+aZglxuICAgICAgICBtYXJrZXJzOiB0cnVlLCAvLyDjg57jg7zjgqvjg7zooajnpLpcbiAgICAgIH0sXG4gICAgfVxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBzZXRBbmltYXRpb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VvL1Nlb1wiO1xuXG5pbXBvcnQgSGVhZGVyU2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbi9oZWFkZXJTZWN0aW9uL0hlYWRlclNlY3Rpb25cIjtcbmltcG9ydCBWaXN1YWxTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uL3Zpc3VhbFNlY3Rpb24vVmlzdWFsU2VjdGlvblwiO1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbi9hYm91dFNlY3Rpb24vQWJvdXRTZWN0aW9uXCI7XG5pbXBvcnQgVW5zdXBwb3J0U2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbi91bnN1cHBvcnRTZWN0aW9uL1Vuc3VwcG9ydFNlY3Rpb25cIjtcbmltcG9ydCBDb3VudGRvd25TZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uL2NvdW50ZG93blNlY3Rpb24vQ291bnRkb3duU2VjdGlvblwiO1xuaW1wb3J0IFBhc3RTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uL3Bhc3RTZWN0aW9uL1Bhc3RTZWN0aW9uXCI7XG5pbXBvcnQgQnJvd3NlclNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb24vYnJvd3NlclNlY3Rpb24vQnJvd3NlclNlY3Rpb25cIjtcbmltcG9ydCBQcm92aWRlclNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb24vcHJvdmlkZXJTZWN0aW9uL1Byb3ZpZGVyU2VjdGlvblwiO1xuaW1wb3J0IEZvb3RlclNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb24vZm9vdGVyU2VjdGlvbi9Gb290ZXJTZWN0aW9uXCI7XG5cbmltcG9ydCBJZUNoZWNrZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaWVDaGVja2VyL0llQ2hlY2tlclwiO1xuaW1wb3J0IExvYWRpbmdDaGVja2VyIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRpbmdDaGVja2VyL0xvYWRpbmdDaGVja2VyXCI7XG5cbi8v44Ki44OL44Oh44O844K344On44OzXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBmYWRlVXBBbmltYXRpb24gZnJvbSBcIi4uL2FuaW1hdGlvbi9mYWRlVXBBbmltYXRpb25cIjtcbmltcG9ydCBzbGlkZUluQW5pbWF0aW9uIGZyb20gXCIuLi9hbmltYXRpb24vc2xpZGVJbkFuaW1hdGlvblwiO1xuaW1wb3J0IGNvdW50ZG93blRpbWVyQW5pbWF0aW9uIGZyb20gXCIuLi9hbmltYXRpb24vY291bnRkb3duVGltZXJBbmltYXRpb25cIjtcbmltcG9ydCBzZXJ2aWNlSWNvbkFuaW1hdGlvbiBmcm9tIFwiLi4vYW5pbWF0aW9uL3NlcnZpY2VJY29uQW5pbWF0aW9uXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbiAgICAgIGZhZGVVcEFuaW1hdGlvbigpO1xuICAgICAgc2xpZGVJbkFuaW1hdGlvbigpO1xuICAgICAgY291bnRkb3duVGltZXJBbmltYXRpb24oKTtcbiAgICAgIHNlcnZpY2VJY29uQW5pbWF0aW9uKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExvYWRpbmdDaGVja2VyIC8+XG4gICAgICA8SWVDaGVja2VyIC8+XG4gICAgICA8U2VvXG4gICAgICAgIHBhZ2VUaXRsZT17XCIyMDIyMDYxNVwifVxuICAgICAgICBwYWdlRGVzY3JpcHRpb249e1wiSW50ZXJuZXQgRXhwbG9yZXIg44G+44Gg5L2/44Gj44Gm44GE44KL5Lq644Gv44GE44G+44Gb44KT44GL77yfXCJ9XG4gICAgICAgIGltZ1VybD17XCJodHRwczovL3Rha2VzaGlzYWt1bWEuZ2l0aHViLmlvL292ZXJraWxsL29ncC9vZ3Aud2VicFwifVxuICAgICAgICBmYXZpY29uVXJsPXtcbiAgICAgICAgICBcImh0dHBzOi8vdGFrZXNoaXNha3VtYS5naXRodWIuaW8vb3ZlcmtpbGwvZmF2aWNvbi9mYXZpY29uLnN2Z1wiXG4gICAgICAgIH1cbiAgICAgICAgcGFnZUltZ1dpZHRoPXsxMjgwfVxuICAgICAgICBwYWdlSW1nSGVpZ2h0PXs5NjB9XG4gICAgICAgIHBhZ2VVcmw9e1wiaHR0cHM6Ly90YWtlc2hpc2FrdW1hLmdpdGh1Yi5pby9vdmVya2lsbC9cIn1cbiAgICAgIC8+XG4gICAgICA8SGVhZGVyU2VjdGlvbj4yMDIyMDYxNTwvSGVhZGVyU2VjdGlvbj5cbiAgICAgIDxWaXN1YWxTZWN0aW9uPlxuICAgICAgICB7YEludGVybmV0IEV4cGxvcmVyJHtcIlxcblwifeOBvuOBoOS9v+OBo+OBpuOBhOOCi+S6uuOBr+OBhOOBvuOBm+OCk+OBi++8n2B9XG4gICAgICA8L1Zpc3VhbFNlY3Rpb24+XG5cbiAgICAgIDxBYm91dFNlY3Rpb25cbiAgICAgICAgaGVhZGluZ1RleHQ9XCJJbnRlcm5ldCBFeHBsb3JlcuOBqOOBr1wiXG4gICAgICAgIHBhcmFncmFwaFRleHQ9e1tcbiAgICAgICAgICBgTWljcm9zb2Z056S+44GM6ZaL55m644GX44Gm44GE44GfV2Vi44OW44Op44Km44K244Gn44CB5pyA55ub5pyf44Gr44GvV2Vi44OW44Op44Km44K244Gu44K344Kn44KiOTUl5Lul5LiK44KS5Y2g44KB44Gm44GE44G+44GX44Gf44GM44CBV2luZG93cyAxMOOBi+OCieaomea6luODluODqeOCpuOCtuOBr01pY3Jvc29mdCBFZGdl44Gr572u44GN5o+b44GI44KJ44KM44Gm44GE44G+44GZ44CCJHtcIlxcblwifemWi+eZuuOBr+e1guS6huOBl+OBpuOBiuOCiuOAgeOCu+OCreODpeODquODhuOCo+S4iuOBruODquOCueOCr+OChOOAgeODkeODleOCqeODvOODnuODs+OCueOBruWVj+mhjOOBjOOBguOCi+OBn+OCgeOAgeePvuWcqOOBr+S6kuaPm+aAp+e2reaMgeOBruOBn+OCgeOBoOOBkeOBq+OAgVdpbmRvd3MgMTDjgavmkK3ovInjgZXjgozjgabjgYTjgb7jgZnjgIJgLFxuICAgICAgICBdfVxuICAgICAgICBsaXN0Tm9ybWFsPXtbXG4gICAgICAgICAgXCJJbnRlcm5ldCBFeHBsb3JlciAxMOS7peWJjeOBruODkOODvOOCuOODp+ODs+OBr+OBmeOBp+OBq+OCteODneODvOODiOOBjOe1guS6huOBl+OBpuOBhOOBvuOBmeOAglwiLFxuICAgICAgICAgIFwiSW50ZXJuZXQgRXhwbG9yZXIgMTHjga/jgIEyMDIy5bm0NuaciDE15pelKOaXpeacrOaZgumWk+OBp+OBrzE25pelKeOBq+OCteODneODvOODiOOBrue1guS6huOBjOS6iOWRiuOBleOCjOOBpuOBhOOBvuOBmeOAglwiLFxuICAgICAgICBdfVxuICAgICAgICBsaXN0Q2F1dGlvbj17W1xuICAgICAgICAgIFwiV2luZG93cyAxMCBMVFND44KEV2luZG93cyBTZXJ2ZXLkuIrjga4gSW50ZXJuZXQgRXhwbG9yZXIgMTEg44OH44K544Kv44OI44OD44OXIOOCouODl+ODquOCseODvOOCt+ODp+ODs+OBr+mZpOOBj1wiLFxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICAgIDxVbnN1cHBvcnRTZWN0aW9uXG4gICAgICAgIGhlYWRpbmdUZXh0PXtcbiAgICAgICAgICBcIuOBmeOBp+OBq+OAgeWkmuOBj+OBruS8gealreOChOWbo+S9k+OBjEludGVybmV0IEV4cGxvcmVy44Gu44K144Od44O844OI44KS5omT44Gh5YiH44Gj44Gm44GE44G+44GZ44CCXCJcbiAgICAgICAgfVxuICAgICAgICBsaXN0Q2F1dGlvbj17W1xuICAgICAgICAgIFwiV29yZFByZXNz44Gv44CBN+aciOODquODquODvOOCueS6iOWumuOBrlZlci41Ljjku6XpmY3pnZ7lr77lv5zjgpLlkYrnn6VcIixcbiAgICAgICAgICBcIk1pY3Jvc29mdCAzNjXjga/jgIEyMDIx5bm0OOaciDE35pelKOaXpeacrOaZgumWk+OBp+OBrzE45pelKeOBp+OCteODneODvOODiOe1guS6huOCkuWRiuefpVwiLFxuICAgICAgICBdfVxuICAgICAgICBzZXJ2aWNlPXtbXG4gICAgICAgICAgeyBuYW1lOiBcIkFuZ3VsYXJcIiwgaW1nOiBcImRldi9hbmd1bGFyLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImFydFN0YXRpb25cIiwgaW1nOiBcInNlcnZpY2UvYXJ0c3RhdGlvbi5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJCYWNrbG9nXCIsIGltZzogXCJzZXJ2aWNlL2JhY2tsb2cuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiYmFuZGNhbXBcIiwgaW1nOiBcInNlcnZpY2UvYmFuZGNhbXAuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiQkFTRVwiLCBpbWc6IFwic2VydmljZS9iYXNlLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkJlYXRwb3J0XCIsIGltZzogXCJzZXJ2aWNlL2JlYXRwb3J0LnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkJvb3RzdHJhcFwiLCBpbWc6IFwiZGV2L2Jvb3RzdHJhcC5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJDcm93ZFdvcmtzXCIsIGltZzogXCJzZXJ2aWNlL2Nyb3dkd29ya3Muc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiRGV2aWFudEFydFwiLCBpbWc6IFwic2VydmljZS9kZXZpYW50YXJ0LnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImRyaWJiYmxlXCIsIGltZzogXCJzZXJ2aWNlL2RyaWJiYmxlLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkZhY2Vib29rXCIsIGltZzogXCJzZXJ2aWNlL2ZhY2Vib29rLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkZlZWRseVwiLCBpbWc6IFwic2VydmljZS9mZWVkbHkuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiZmxpY2tyXCIsIGltZzogXCJzZXJ2aWNlL2ZsaWNrci5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJHaXRIdWJcIiwgaW1nOiBcInNlcnZpY2UvZ2l0aHViLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkdvb2dsZSBBbmFseXRpY3NcIiwgaW1nOiBcInNlcnZpY2UvZ29vZ2xlYW5hbHl0aWNzLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkdvb2dsZSBFYXJ0aFwiLCBpbWc6IFwic2VydmljZS9nb29nbGVlYXJ0aC5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJHb29nbGUgUGhvdG9zXCIsIGltZzogXCJzZXJ2aWNlL2dvb2dsZXBob3Rvcy5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJJbnN0YWdyYW1cIiwgaW1nOiBcInNlcnZpY2UvaW5zdGFncmFtLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIm5vdGVcIiwgaW1nOiBcInNlcnZpY2Uvbm90ZS5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJOb3Rpb25cIiwgaW1nOiBcInNlcnZpY2Uvbm90aW9uLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIk1pY3Jvc29mdCAzNjVcIiwgaW1nOiBcInNlcnZpY2UvbWljcm9zb2Z0MzY1LnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIk9LV0FWRVwiLCBpbWc6IFwic2VydmljZS9va3dhdmUuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiUGludGVyZXN0XCIsIGltZzogXCJzZXJ2aWNlL3BpbnRlcmVzdC5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJQb2NrZXRcIiwgaW1nOiBcInNlcnZpY2UvcG9ja2V0LnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlNrZWJcIiwgaW1nOiBcInNlcnZpY2Uvc2tlYi5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJTa2V0Y2hmYWJcIiwgaW1nOiBcInNlcnZpY2Uvc2tldGNoZmFiLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlNUT1JFU1wiLCBpbWc6IFwic2VydmljZS9zdG9yZXMuc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiU1RVRElPXCIsIGltZzogXCJzZXJ2aWNlL3N0dWRpby5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJUcmVsbG9cIiwgaW1nOiBcInNlcnZpY2UvdHJlbGxvLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlR3aXRjaFwiLCBpbWc6IFwic2VydmljZS90d2l0Y2guc3ZnXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiVHdpdHRlclwiLCBpbWc6IFwic2VydmljZS90d2l0dGVyLnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlVkZW15XCIsIGltZzogXCJzZXJ2aWNlL3VkZW15LnN2Z1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIllvdVR1YmVcIiwgaW1nOiBcInNlcnZpY2UveW91dHViZS5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJZb3VUdWJlIE11c2ljXCIsIGltZzogXCJzZXJ2aWNlL3lvdXR1YmVtdXNpYy5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJWdWUuanNcIiwgaW1nOiBcImRldi92dWVqcy5zdmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJXb3JkUHJlc3NcIiwgaW1nOiBcImRldi93b3JkcHJlc3Muc3ZnXCIgfSxcbiAgICAgICAgXX1cbiAgICAgIC8+XG5cbiAgICAgIDxDb3VudGRvd25TZWN0aW9uXG4gICAgICAgIGNvdW50ZG93blRpbWVyQW5pbWF0aW9uPXtcImNvdW50ZG93blRpbWVyQW5pbWF0aW9uXCJ9XG4gICAgICAgIGhlYWRpbmdUZXh0PVwiSW50ZXJuZXQgRXhwbG9yZXIgMTHjgrXjg53jg7zjg4jntYLkuobjgb7jgafjgIHjgYLjgahcIlxuICAgICAgLz5cblxuICAgICAgPFBhc3RTZWN0aW9uXG4gICAgICAgIGhlYWRpbmdUZXh0PVwiSW50ZXJuZXQgRXhwbG9yZXIgMTHjgYzlhazplovjgZXjgozjgZ8yMDEz5bm044Gv44GT44KT44Gq5bm044Gn44GX44GfXCJcbiAgICAgICAgcGFyYWdyYXBoVGV4dD17W1xuICAgICAgICAgIGDlpInljJbjga7ml6njgYRXZWLjga7kuJbnlYzjgafjga/ntIQxMOW5tOOBr+mAlOaWueOCguOBquOBj+mVt+OBhOaZgumWk+OBp+OBmeOAguOBguOBquOBn+OBrzEw5bm05YmN44Gu44OH44K444K/44Or6KO95ZOB44KS5L2/44GE44Gf44GE44Gn44GZ44GL77yf44Gh44Gq44G/44Gr44CBaVBob25l44GvNXMoaU9TNynjgYznmbrlo7LjgavjgarjgaPjgZ/lubTjgafjgZnjgIJgLFxuICAgICAgICAgIGDjgZ3jgozjgafjga/jgIEyMDEz5bm044Gu5Ye65p2l5LqL44KS5oyv44KK6L+U44Gj44Gm44G/44G+44GX44KH44GG44CCXG4gICAgICAgIGAsXG4gICAgICAgIF19XG4gICAgICAgIGV2ZW50RGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwi5paw6Kqe44O75rWB6KGM6Kqe5aSn6LOeXCIsXG4gICAgICAgICAgICBpbWc6IFwiaWNvbl9kZXNpZ25fdHJlbmQuc3ZnXCIsXG4gICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgIFwi5LuK44Gn44GX44KHIe+8iOael+S/ru+8iVwiLFxuICAgICAgICAgICAgICBcIuOBiuODu+OCguODu+OBpuODu+OBquODu+OBl++8iOa7neW3neOCr+ODquOCueODhuODq++8iVwiLFxuICAgICAgICAgICAgICBcIuOBmOOBh+OBmOOBh+OBmOOBh++8iOOBguOBvuOBoeOCg+OCk++8iVwiLFxuICAgICAgICAgICAgICBcIuWAjei/lOOBl++8iOWNiuayouebtOaoue+8iVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwi5Ye65p2l5LqLXCIsXG4gICAgICAgICAgICBpbWc6IFwiaWNvbl9kZXNpZ25fZXZlbnQuc3ZnXCIsXG4gICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgIFwiTkhL5aSn5rKz44OJ44Op44Oe44CO5YWr6YeN44Gu5qGc44CPXCIsXG4gICAgICAgICAgICAgIFwiTlRU44OJ44Kz44Oi44GMaVBob25l44Gu5o+Q5L6b6ZaL5aeLXCIsXG4gICAgICAgICAgICAgIFwi44OQ44Op44Kv44O744Kq44OQ44Oe5aSn57Wx6aCY44GM57aa5oqV44Gn44Ki44Oh44Oq44Kr5aSn57Wx6aCY44Gr5bCx5Lu7XCIsXG4gICAgICAgICAgICAgIFwi44OZ44ON44OH44Kj44Kv44OIMTbkuJbjga7ovp7ku7tcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgID48L1Bhc3RTZWN0aW9uPlxuICAgICAgPEJyb3dzZXJTZWN0aW9uXG4gICAgICAgIGhlYWRpbmdUZXh0PVwiSW50ZXJuZXQgRXhwbG9yZXLjgYvjgonkuZfjgormj5vjgYjjgovjgarjgolcIlxuICAgICAgICBicm93c2VyRGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTWljcm9zb2Z0IEVkZ2VcIixcbiAgICAgICAgICAgIHRleHQ6IFwiSW50ZXJuZXQgRXhwbG9yZXLjgYzlv4XopoHjgapXZWLjgrXjgqTjg4jjgavlr77lv5zjgZnjgovjgIxJRSDjg6Ljg7zjg4njgI3jgpLlhoXolLXjgZfjgZ9XZWLjg5bjg6njgqbjgrZcIixcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5taWNyb3NvZnQuY29tL2phLWpwL2VkZ2VcIixcbiAgICAgICAgICAgIGltZzogXCJlZGdlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkdvb2dsZSBDaHJvbWVcIixcbiAgICAgICAgICAgIHRleHQ6IFwiR29vZ2xl44Gu44K144O844OT44K544Go44Gu6YCj5pC644Gr5YSq44KM44Gf44CB44K344Kn44Ki5LiA5L2N44GuV2Vi44OW44Op44Km44K2XCIsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbnRsL2phX2pwL2Nocm9tZS9cIixcbiAgICAgICAgICAgIGltZzogXCJjaHJvbWVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTW96aWxsYSBGaXJlZm94XCIsXG4gICAgICAgICAgICB0ZXh0OiBcIuODl+ODqeOCpOODkOOCt+ODvOOAgeOCu+OCreODpeODquODhuOCo+OBq+WEquOCjOOBn+OCquODvOODl+ODs+OCveODvOOCueOBrldlYuODluODqeOCpuOCtlwiLFxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lm1vemlsbGEub3JnL2phL2ZpcmVmb3gvbmV3L1wiLFxuICAgICAgICAgICAgaW1nOiBcImZpcmVmb3hcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICAgIDxQcm92aWRlclNlY3Rpb25cbiAgICAgICAgaGVhZGluZ1RleHQ9e1wiV2Vi44K144O844OT44K55o+Q5L6b6ICF5qeY44Gr5ZCR44GR44GmXCJ9XG4gICAgICAgIHBhcmFncmFwaFRleHQ9e1tcbiAgICAgICAgICBgSW50ZXJuZXQgRXhwbG9yZXLku6XlpJbjga7jg6Ljg4Djg7PjgarkuLvopoFXZWLjg5bjg6njgqbjgrbjg7zjgavjga/jgIEyMDEz5bm05Lul6ZmN44KC5paw44GX44GE5qmf6IO944GM5pWw5aSa44GP6L+95Yqg44GV44KM57aa44GR44Gm44GE44G+44GZ44CCJHtcIlxcblwifeOBneOBruOBn+OCgeOAgeOBguOBquOBn+OBruOCteODvOODk+OCueOBp+OAjFdlYuOBp+acgOaWsOOBruapn+iDveOCkuaPkOS+m+OBl+OBn+OBhOOAjeOBqOiAg+OBiOOCi+OBquOCieOAgUlFMTHjga7lr77lv5zjga/oq6bjgoHjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJgLFxuICAgICAgICAgIGDmpa3li5nnlKhXZWLjgrfjgrnjg4bjg6Djga7mlLnkv67jga/jgrPjgrnjg4jjgYzjgYvjgYvjgovjgZ/jgoHjgIHnj77nirbntq3mjIHjgadJbnRlcm5ldCBFeHBsb3JlcuOBp+WPpOOBhFdlYuOCouODl+ODquOCseODvOOCt+ODp+ODs+OCkuS9v+OBhOe2muOBkeOBpuOBhOOCi+OCseODvOOCueOBjOOBguOCiuOBvuOBmeOAgiR7XCJcXG5cIn3jgZfjgYvjgZfjgIHmnIDmlrDjga5XZWLjg5bjg6njgqbjgrbjg7zjgavnp7vooYzjgZnjgovjgbvjgYbjgYzjgrvjgq3jg6Xjg6rjg4bjgqPnmoTjgavjgoLlronlhajjgafjgIHplbfmnJ/nmoTjgavopovjgabjgojjgoroia/jgYTpgbjmip7jgafjgZnjgIJgLFxuICAgICAgICAgIGBJbnRlcm5ldCBFeHBsb3JlcuS7peWkluOBruODluODqeOCpuOCtuOBuOOBruWvvuW/nOOBq+OBr+aZgumWk+OBjOOBi+OBi+OCiuOBvuOBmeOAgiR7XCJcXG5cIn0yMDIy5bm0NuaciDE15pelKOaXpeacrOaZgumWk+OBp+OBrzE25pelKeS7pemZjeOBr0lF44Gu6LW35YuV44KS44GZ44KL44GoTWljcm9zb2Z0IEVkZ2Xjgavjg6rjg4DjgqTjg6zjgq/jg4jjgZXjgozjgovjgojjgYbjgavjgarjgorjgb7jgZnjgIIke1wiXFxuXCJ944K144Od44O844OI44GM5YiH44KM44Gm44GL44KJ6Ieq56S+44K144Kk44OI44KSSUXku6XlpJbjgavlr77lv5zjgZXjgZvjgovjga7jgafjga/plpPjgavlkIjjgYTjgb7jgZvjgpPjgIJgLFxuICAgICAgICBdfVxuICAgICAgPjwvUHJvdmlkZXJTZWN0aW9uPlxuICAgICAgPEZvb3RlclNlY3Rpb24+Q3JlZGl0PC9Gb290ZXJTZWN0aW9uPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwic291cmNlUm9vdCI6IiJ9