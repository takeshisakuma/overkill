(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),o=n(379),i=n(8206);e.exports=function(e){return r(e)||a(e)||o(e)||i()}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},7947:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(o=n(617))&&o.__esModule?o:{default:o},c=n(3367),u=n(4287),l=n(7845);function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var p=a.props[l],d=r[l]||new Set;"name"===l&&i||!d.has(p)?(d.add(p),r[l]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}function x(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}x.rewind=function(){};var g=x;t.default=g},617:function(e,t,n){"use strict";var r=n(319),a=n(4575),o=n(3913),i=(n(1506),n(2205)),s=n(8585),c=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),p=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},5500:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),a=(n(7294),n(9008)),o=function(e){var t=e.pageTitle,n=e.pageDescription,o=e.pagePath,i=e.pageImg,s=e.pageImgWidth,c=e.pageImgHeight,u=t,l=n,p=o,d=i,f=s||1280,h=c||640;return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:u}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0"}),(0,r.jsx)("meta",{name:"description",content:l}),(0,r.jsx)("meta",{property:"og:url",content:p}),(0,r.jsx)("meta",{property:"og:title",content:u}),(0,r.jsx)("meta",{property:"og:site_name",content:u}),(0,r.jsx)("meta",{property:"og:description",content:l}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:image",content:d}),(0,r.jsx)("meta",{property:"og:image:width",content:String(f)}),(0,r.jsx)("meta",{property:"og:image:height",content:String(h)}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Serif+JP:wght@400;700&family=Roboto:wght@400;700&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{rel:"canonical",href:p})]})},i=n(5656),s=n.n(i),c=function(e){var t=e.text;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:s().headerContainer,children:(0,r.jsx)("div",{className:s().headerContent,children:(0,r.jsx)("h1",{className:s().headerText,children:t})})})})},u=n(92),l=n.n(u),p=function(e){var t=e.text;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:l().visualContainer,children:(0,r.jsx)("div",{className:l().visualContent,children:(0,r.jsx)("h2",{className:l().visualText,children:t})})})})},d=n(2278),f=n.n(d),h=function(e){var t=e.headingText,n=e.mainText,a=e.listText,o=e.cautionText;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:f().aboutConteiner,children:(0,r.jsxs)("div",{className:f().aboutContent,children:[(0,r.jsx)("h3",{className:f().headerSection,children:t}),(0,r.jsx)("p",{className:f().textSection,children:n}),(0,r.jsx)("ul",{className:f().listTextGroup,children:a.map((function(e,t){return(0,r.jsx)("li",{className:f().listTextMember,children:e},t)}))}),(0,r.jsx)("p",{className:f().cautionText,children:o})]})})})},m=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{pageTitle:"20220615",pageDescription:"Internet Explorer \u307e\u3060\u4f7f\u3063\u3066\u3044\u308b\u4eba\u306f\u3044\u307e\u305b\u3093\u304b\uff1f",pageImg:"https://takeshisakuma.github.io/overkill/ogp/ogp.png",pageImgWidth:1280,pageImgHeight:960,pagePath:"https://takeshisakuma.github.io/overkill/"}),(0,r.jsx)(c,{text:"20210615"}),(0,r.jsx)(p,{text:"Internet Explorer".concat("\n","\u307e\u3060\u4f7f\u3063\u3066\u3044\u308b\u4eba\u306f\u3044\u307e\u305b\u3093\u304b\uff1f")}),(0,r.jsx)(h,{headingText:"Internet Explorer\u3068\u306f",mainText:"Microsoft\u793e\u304c\u958b\u767a\u3057\u3066\u3044\u305fWeb\u30d6\u30e9\u30a6\u30b6\u3067\u3001\u6700\u76db\u671f\u306b\u306f\u3001Web\u30d6\u30e9\u30a6\u30b6\u306e\u30b7\u30a7\u30a295%\u4ee5\u4e0a\u3092\u7de0\u3081\u3066\u3044\u307e\u3057\u305f\u304c\u3001Windows 10\u304b\u3089\u6a19\u6e96\u30d6\u30e9\u30a6\u30b6\u306fMicrosoft Edge\u306b\u7f6e\u304d\u63db\u3048\u3089\u308c\u3001Internet Explorer\u306e\u958b\u767a\u306f\u7d42\u4e86\u3057\u3066\u304a\u308a\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u30ea\u30b9\u30af\u3084\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u554f\u984c\u304c\u3042\u308b\u305f\u3081\u3001\u73fe\u5728\u306f\u4e92\u63db\u6027\u7dad\u6301\u306e\u305f\u3081\u3060\u3051\u306b\u3001Windows 10\u306b\u642d\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002",listText:["Internet Explorer 10\u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u3059\u3067\u306b\u30b5\u30dd\u30fc\u30c8\u304c\u7d42\u4e86\u3057\u3066\u3044\u307e\u3059\u3002","2021\u5e748\u670817\u65e5(\u65e5\u672c\u6642\u9593\u3067\u306f18\u65e5)\u306bMicrosoft 365 \u30a2\u30d7\u30ea\u306a\u3069\u3067Internet Explorer\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u7d42\u4e86\u304c\u4e88\u544a\u3055\u308c\u3066\u3044\u307e\u3059\u3002","2022\u5e746\u670815\u65e5(\u65e5\u672c\u6642\u9593\u3067\u306f16\u65e5)\u306bInternet Explorer 11\u306e\u30b5\u30dd\u30fc\u30c8\u306e\u7d42\u4e86\u304c\u4e88\u544a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"],cautionText:"Windows 10 LTSC\u3084Windows Server\u4e0a\u306e Internet Explorer 11 \u30c7\u30b9\u30af\u30c8\u30c3\u30d7 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u9664\u304f"})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5500)}])},5656:function(e){e.exports={headerContainer:"header_headerContainer__3uLCo",headerContent:"header_headerContent__39Ztr",headerText:"header_headerText__9AEVu"}},92:function(e){e.exports={visualContainer:"visual_visualContainer__3oqsT",visualContent:"visual_visualContent__t_exz",visualText:"visual_visualText__19gsa"}},2278:function(e){e.exports={aboutConteiner:"aboutSection_aboutConteiner__3Jqm0",aboutContent:"aboutSection_aboutContent__40WOg",headerSection:"aboutSection_headerSection__1sjpp",textSection:"aboutSection_textSection__3-SdX",listTextGroup:"aboutSection_listTextGroup__1rx3e",listTextMember:"aboutSection_listTextMember__1u1a9",cautionText:"aboutSection_cautionText__3bsxg"}},9008:function(e,t,n){e.exports=n(7947)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);