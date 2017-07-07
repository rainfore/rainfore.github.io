webpackJsonp([7],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            articles: [
                __webpack_require__(168),
            ],
        };
    },
});


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(169);

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  null,
  /* template */
  __webpack_require__(170),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_c('router-link', {
    attrs: {
      "to": "/Skills/Mac/Mac%E6%9F%A5%E7%9C%8B%E7%AB%AF%E5%8F%A3%E5%8D%A0%E7%94%A8%E6%83%85%E5%86%B5/"
    }
  }, [_vm._v("Mac查看端口占用情况")])], 1), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("lsof -i tcp:9000\n")])]), _vm._v(" "), _c('p', [_vm._v("可以查看该端口被什么程序占用，并显示PID，方便kill")]), _vm._v(" "), _c('h1', [_vm._v("Mac默认壁纸路径")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("/Library/Desktop Pictures/\n")])]), _vm._v(" "), _c('p', [_vm._v("注意：是系统根目录，而不是用户目录。")]), _vm._v(" "), _c('ul', {
    staticClass: "contains-task-list"
  }, [_c('li', {
    staticClass: "task-list-item"
  }, [_c('input', {
    staticClass: "task-list-item-checkbox",
    attrs: {
      "disabled": "",
      "type": "checkbox"
    }
  }), _vm._v(" tests"), _c('sup', {
    staticClass: "footnote-ref"
  }, [_c('a', {
    attrs: {
      "href": "#fn1",
      "id": "fnref1"
    }
  }, [_vm._v("[1]")])])]), _vm._v(" "), _c('li', {
    staticClass: "task-list-item"
  }, [_c('input', {
    staticClass: "task-list-item-checkbox",
    attrs: {
      "disabled": "",
      "type": "checkbox"
    }
  }), _vm._v(" te2232")])]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  }, [_c('router-link', {
    staticClass: "u-article_read-more",
    attrs: {
      "to": "/Skills/Mac/Mac%E6%9F%A5%E7%9C%8B%E7%AB%AF%E5%8F%A3%E5%8D%A0%E7%94%A8%E6%83%85%E5%86%B5/"
    }
  }, [_vm._v("Read More →")])], 1), _c('hr', {
    staticClass: "footnotes-sep"
  }), _vm._v(" "), _c('section', {
    staticClass: "footnotes"
  }, [_c('ol', {
    staticClass: "footnotes-list"
  }, [_c('li', {
    staticClass: "footnote-item",
    attrs: {
      "id": "fn1"
    }
  }, [_c('p', [_vm._v("Foot abe "), _c('strong', [_vm._v("wegwgew")]), _vm._v(" "), _c('a', {
    staticClass: "footnote-backref",
    attrs: {
      "href": "#fnref1"
    }
  }, [_vm._v("↩︎")])])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.articles), function(article) {
    return _c(article, {
      tag: "component"
    })
  }))
},staticRenderFns: []}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(167),
  /* template */
  __webpack_require__(171),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});