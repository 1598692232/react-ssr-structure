webpackHotUpdate(5,{

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_index__ = __webpack_require__("./services/index.js");
var _jsxFileName = "/Users/bll/Documents/www/react-ssr-structure/pages/index.js";







__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeStart = function (url) {
  console.log('App is changing to: ', url);
};

var Index = function Index(props) {
  var toAbout = function toAbout() {
    __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push({
      pathname: '/about',
      query: {
        name: 'Zeit'
      }
    });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Batman TV Shows"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.shows.map(function (_ref) {
    var show = _ref.show;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: show.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      as: "/p/".concat(show.id),
      href: "/post?id=".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, show.name)));
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    onClick: function onClick() {
      return toAbout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "toAbout"));
};

Index.getInitialProps = __WEBPACK_IMPORTED_MODULE_5__services_index__["a" /* default */];
/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.10cfa64a4bb7a4fd1a6a.hot-update.js.map