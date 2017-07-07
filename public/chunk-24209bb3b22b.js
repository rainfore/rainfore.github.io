webpackJsonp([5],{

/***/ 176:
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
                __webpack_require__(177),
                __webpack_require__(180),
            ],
        };
    },
});


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(178);

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  null,
  /* template */
  __webpack_require__(179),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_c('router-link', {
    attrs: {
      "to": "/Skills/%E5%93%B2%E5%AD%A6/%E5%93%B2%E5%AD%A6%E6%A6%82%E5%BF%B5%E6%A2%B3%E7%90%86/"
    }
  }, [_vm._v("哲学概念梳理")])], 1), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "哲学的基本概念"
    }
  }, [_vm._v("哲学的基本概念 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#哲学的基本概念",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "哲学的主要特征"
    }
  }, [_vm._v("哲学的主要特征 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#哲学的主要特征",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("明确表达：用清淅、简洁、易懂的语言把你的思想表达出来。")]), _vm._v(" "), _c('li', [_vm._v("论证：利用源自其他思想、原理和观察结果的理由来支持你的说法，得出你的结论，驳斥反对意见。")]), _vm._v(" "), _c('li', [_vm._v("分析：通过区分和澄清其各种组成成分来理解某种观念。比如，“谋杀”这一观念包含三个子观念：杀害，错误与意图。")]), _vm._v(" "), _c('li', [_vm._v("综合：把各种不同的观念聚合成一种统一的看法。比如，毕达哥拉斯的“天球和谐”的观念就把数学、音乐、物理学和天文学综合了起来。")])]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  }, [_c('router-link', {
    staticClass: "u-article_read-more",
    attrs: {
      "to": "/Skills/%E5%93%B2%E5%AD%A6/%E5%93%B2%E5%AD%A6%E6%A6%82%E5%BF%B5%E6%A2%B3%E7%90%86/"
    }
  }, [_vm._v("Read More →")])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(181);

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  null,
  /* template */
  __webpack_require__(182),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_c('router-link', {
    attrs: {
      "to": "/Skills/%E5%93%B2%E5%AD%A6/%E5%90%8D%E5%8F%A5%E6%94%B6%E9%9B%86/"
    }
  }, [_vm._v("名句收集")])], 1), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("思想赋予了生命以意义。我们的心灵需要思想，就像身体需要食物一样。")])]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("未经审视的生活是不值得过的。\n——苏格拉底，公元前5世纪")])]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("我在好多年前就已经觉察到，我从早年以来，曾经把大量错误的意见当成真的加以接受。从那时起，我就已经断定，要想在科学上建立一些牢固的、永久的东西作为我的信念，我就必须在我的一生中有一次严肃地把我从前接受到心中的所有意见一齐去掉，重新开始从根本做起。\n——勒内·笛卡儿，《第一哲学沉思集》")])]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  }, [_c('router-link', {
    staticClass: "u-article_read-more",
    attrs: {
      "to": "/Skills/%E5%93%B2%E5%AD%A6/%E5%90%8D%E5%8F%A5%E6%94%B6%E9%9B%86/"
    }
  }, [_vm._v("Read More →")])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.articles), function(article) {
    return _c(article, {
      tag: "component"
    })
  }))
},staticRenderFns: []}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(183),
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