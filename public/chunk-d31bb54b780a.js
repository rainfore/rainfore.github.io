webpackJsonp([12],{

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  null,
  /* template */
  __webpack_require__(200),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("多维空间")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "零维空间"
    }
  }, [_vm._v("零维空间 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#零维空间",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('mi', [_vm._v("p")])], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p} = ()\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "0.75em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "1em",
      "vertical-align": "-0.25em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0.16668em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('p', [_vm._v("零维空间的坐标参数的个数为0，正几何体为一个"), _c('em', [_vm._v("点")]), _vm._v("。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一维空间"
    }
  }, [_vm._v("一维空间 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一维空间",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("易知，一维空间的正几何体为一条"), _c('em', [_vm._v("线段")]), _vm._v("。为了方便，我们取长度为1的线段，后面也均取边长为1的几何体。")]), _vm._v(" "), _c('p', [_vm._v("线段的两点坐标为：")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("1")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("1")]), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_1} = (0),\n\\vec{p_2} = (1)\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "0.75em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "1em",
      "vertical-align": "-0.25em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('p', [_vm._v("可以看出，从零维扩展到一维，坐标参数的个数+1，正几何体的点数+1。")]), _vm._v(" "), _c('p', [_vm._v("这里我们计算一下线段的几何中心：")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mi', [_vm._v("c")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mfrac', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("1")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("+")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1)], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_c} = \\frac{\\vec{p_1} + \\vec{p_2}}{2} = (\\frac{1}{2})\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "1.39144em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "2.07744em",
      "vertical-align": "-0.686em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathit mtight"
  }, [_vm._v("c")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mbin"
  }, [_vm._v("+")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二维空间"
    }
  }, [_vm._v("二维空间 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二维空间",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("二维空间的正几何体为"), _c('em', [_vm._v("正三角形")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("可以看出，从一维扩展到二维，坐标参数的个数+1，正几何体的点数+1。")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("1")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("1")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mi', [_vm._v("x")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mi', [_vm._v("y")]), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_1} = (0, 0),\n\\vec{p_2} = (1, 0),\n\\vec{p_3} = (x, y)\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "0.75em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "1em",
      "vertical-align": "-0.25em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("3")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("x")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathit",
    staticStyle: {
      "margin-right": "0.03588em"
    }
  }, [_vm._v("y")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('p', [_vm._v("新增的点"), _c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1)], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_3}")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "0.71444em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "0.9088799999999999em",
      "vertical-align": "-0.19444em"
    }
  }), _c('span', {
    staticClass: "base textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("3")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _vm._v("与之前两点之间的距离均为1，我们可以列出方程计算出它的坐标：")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mrow', [_c('mo', {
    attrs: {
      "fence": "true"
    }
  }, [_vm._v("{")]), _c('mtable', [_c('mtr', [_c('mtd', [_c('mrow', [_c('msup', [_c('mi', [_vm._v("x")]), _c('mn', [_vm._v("2")])], 1), _c('mo', [_vm._v("+")]), _c('msup', [_c('mi', [_vm._v("y")]), _c('mn', [_vm._v("2")])], 1), _c('mo', [_vm._v("=")]), _c('mn', [_vm._v("1")])], 1)], 1)], 1), _c('mtr', [_c('mtd', [_c('mrow', [_c('mo', [_vm._v("(")]), _c('mi', [_vm._v("x")]), _c('mo', [_vm._v("−")]), _c('mn', [_vm._v("1")]), _c('msup', [_c('mo', [_vm._v(")")]), _c('mn', [_vm._v("2")])], 1), _c('mo', [_vm._v("+")]), _c('msup', [_c('mi', [_vm._v("y")]), _c('mn', [_vm._v("2")])], 1), _c('mo', [_vm._v("=")]), _c('mn', [_vm._v("1")])], 1)], 1)], 1)], 1)], 1), _c('mo', [_vm._v("⟹")]), _c('mrow', [_c('mo', {
    attrs: {
      "fence": "true"
    }
  }, [_vm._v("{")]), _c('mtable', [_c('mtr', [_c('mtd', [_c('mrow', [_c('mi', [_vm._v("x")]), _c('mo', [_vm._v("=")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1)], 1)], 1)], 1), _c('mtr', [_c('mtd', [_c('mrow', [_c('mi', [_vm._v("y")]), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("±")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\begin{cases}\n    x^2 + y^2 = 1 \\\\\n    (x - 1)^2 + y^2 = 1\n\\end{cases}\n\\Longrightarrow\n\\begin{cases}\n    x = \\frac{1}{2} \\\\\n    y = \\pm \\frac{\\sqrt{3}}{2}\n\\end{cases}\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "2.38883em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "4.27766em",
      "vertical-align": "-1.88883em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "minner displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen style-wrap reset-textstyle textstyle uncramped",
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "delimsizing size4"
  }, [_vm._v("{")])]), _c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mtable"
  }, [_c('span', {
    staticClass: "col-align-l"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "-0.6819999999999999em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("x")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "-0.413em",
      "margin-right": "0.05em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle uncramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])]), _c('span', {
    staticClass: "mbin"
  }, [_vm._v("+")]), _c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit",
    staticStyle: {
      "margin-right": "0.03588em"
    }
  }, [_vm._v("y")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "-0.413em",
      "margin-right": "0.05em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle uncramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])]), _c('span', {
    staticStyle: {
      "top": "0.7579999999999999em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("x")]), _c('span', {
    staticClass: "mbin"
  }, [_vm._v("−")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mclose"
  }, [_c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "-0.413em",
      "margin-right": "0.05em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle uncramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])]), _c('span', {
    staticClass: "mbin"
  }, [_vm._v("+")]), _c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit",
    staticStyle: {
      "margin-right": "0.03588em"
    }
  }, [_vm._v("y")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "-0.413em",
      "margin-right": "0.05em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle uncramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("⟹")]), _c('span', {
    staticClass: "minner displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen style-wrap reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "delimsizing mult"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.9500099999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "delimsizinginner delim-size4"
  }, [_c('span', [_vm._v("⎩")])])]), _c('span', {
    staticStyle: {
      "top": "0.9500099999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "delimsizinginner delim-size4"
  }, [_c('span', [_vm._v("⎪")])])]), _c('span', {
    staticStyle: {
      "top": "-0.000010000000000287557em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "delimsizinginner delim-size4"
  }, [_c('span', [_vm._v("⎨")])])]), _c('span', {
    staticStyle: {
      "top": "-1.1500100000000002em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "delimsizinginner delim-size4"
  }, [_c('span', [_vm._v("⎪")])])]), _c('span', {
    staticStyle: {
      "top": "-1.4500200000000003em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "delimsizinginner delim-size4"
  }, [_c('span', [_vm._v("⎧")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])]), _c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mtable"
  }, [_c('span', {
    staticClass: "col-align-l"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "-1.06739em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("x")]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })])])]), _c('span', {
    staticStyle: {
      "top": "1.20283em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathit",
    staticStyle: {
      "margin-right": "0.03588em"
    }
  }, [_vm._v("y")]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mord"
  }, [_vm._v("±")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })])])])])])]), _vm._v(" "), _c('p', [_vm._v("为了方便，我们取正。于是正三角形的三个点的坐标如下：")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("1")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("1")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_1} = (0, 0),\n\\vec{p_2} = (1, 0),\n\\vec{p_3} = (\\frac{1}{2}, \\frac{\\sqrt{3}}{2})\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "1.5842200000000002em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "2.27022em",
      "vertical-align": "-0.686em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("3")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('p', [_vm._v("我们计算一下正三角形的几何中心：")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mi', [_vm._v("c")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mfrac', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("1")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("+")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("+")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1)], 1), _c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_c} = \\frac{\\vec{p_1} + \\vec{p_2} + \\vec{p_3}}{3}\n          = (\\frac{1}{2}, \\frac{\\sqrt{3}}{6})\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "1.5842200000000002em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "2.27022em",
      "vertical-align": "-0.686em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathit mtight"
  }, [_vm._v("c")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mbin"
  }, [_vm._v("+")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mbin"
  }, [_vm._v("+")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("3")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三维空间"
    }
  }, [_vm._v("三维空间 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三维空间",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("二维空间的正几何体为"), _c('em', [_vm._v("正四面体")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("同理，从二维扩展到三维，坐标参数的个数+1，正几何体的点数+1。")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("1")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("1")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("4")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mi', [_vm._v("x")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mi', [_vm._v("y")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mi', [_vm._v("z")]), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_1} = (0, 0, 0),\n\\vec{p_2} = (1, 0, 0),\n\\vec{p_3} = (\\frac{1}{2}, \\frac{\\sqrt{3}}{2}, 0),\n\\vec{p_4} = (x, y, z)\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "1.5842200000000002em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "2.27022em",
      "vertical-align": "-0.686em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("3")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("4")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("x")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathit",
    staticStyle: {
      "margin-right": "0.03588em"
    }
  }, [_vm._v("y")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathit",
    staticStyle: {
      "margin-right": "0.04398em"
    }
  }, [_vm._v("z")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('p', [_vm._v("于是正四面体的四个点的坐标如下：")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("1")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("1")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("4")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_1} = (0, 0, 0),\n\\vec{p_2} = (1, 0, 0),\n\\vec{p_3} = (\\frac{1}{2}, \\frac{\\sqrt{3}}{2}, 0),\n\\vec{p_4} = (\\frac{1}{2}, \\frac{\\sqrt{3}}{6}, \\frac{\\sqrt{6}}{3})\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "1.5842200000000002em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "2.27022em",
      "vertical-align": "-0.686em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("3")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("4")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('p', [_vm._v("我们计算一下正四面体的几何中心：")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mi', [_vm._v("c")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mfrac', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("1")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("+")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("+")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("+")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("4")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1)], 1), _c('mrow', [_c('mn', [_vm._v("4")])], 1)], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("1")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_c} = \\frac{\\vec{p_1} + \\vec{p_2} + \\vec{p_3} + \\vec{p_4}}{4}\n          = (\\frac{1}{2}, \\frac{\\sqrt{3}}{6}, \\frac{\\sqrt{6}}{12})\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "1.5842200000000002em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "2.27022em",
      "vertical-align": "-0.686em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathit mtight"
  }, [_vm._v("c")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("4")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mbin"
  }, [_vm._v("+")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mbin"
  }, [_vm._v("+")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("3")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mbin"
  }, [_vm._v("+")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("4")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "四维空间"
    }
  }, [_vm._v("四维空间 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#四维空间",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("四维空间的正几何体叫"), _c('em', [_vm._v("单形")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("同理，从三维扩展到四维，坐标参数的个数+1，正几何体的点数+1。")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("1")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("1")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("4")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("5")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mi', [_vm._v("x")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mi', [_vm._v("y")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mi', [_vm._v("z")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mi', [_vm._v("a")]), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_1} = (0, 0, 0, 0),\n\\vec{p_2} = (1, 0, 0, 0),\n\\vec{p_3} = (\\frac{1}{2}, \\frac{\\sqrt{3}}{2}, 0, 0),\n\\vec{p_4} = (\\frac{1}{2}, \\frac{\\sqrt{3}}{6}, \\frac{\\sqrt{6}}{3}, 0),\n\\vec{p_5} = (x, y, z, a)\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "1.5842200000000002em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "2.27022em",
      "vertical-align": "-0.686em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("3")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("4")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("5")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("x")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathit",
    staticStyle: {
      "margin-right": "0.03588em"
    }
  }, [_vm._v("y")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathit",
    staticStyle: {
      "margin-right": "0.04398em"
    }
  }, [_vm._v("z")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("a")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('p', [_vm._v("于是单形的五个点的坐标如下：")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "katex-display"
  }, [_c('span', {
    staticClass: "katex"
  }, [_c('span', {
    staticClass: "katex-mathml"
  }, [_c('math', [_c('semantics', [_c('mrow', [_c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("1")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mn', [_vm._v("1")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("3")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("4")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mn', [_vm._v("0")]), _c('mo', [_vm._v(")")]), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mover', {
    attrs: {
      "accent": "true"
    }
  }, [_c('mrow', [_c('msub', [_c('mi', [_vm._v("p")]), _c('mn', [_vm._v("5")])], 1)], 1), _c('mo', [_vm._v("⃗")])], 1), _c('mo', [_vm._v("=")]), _c('mo', [_vm._v("(")]), _c('mfrac', [_c('mrow', [_c('mn', [_vm._v("1")])], 1), _c('mrow', [_c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("3")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("6")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("1")]), _c('mn', [_vm._v("2")])], 1)], 1), _c('mo', {
    attrs: {
      "separator": "true"
    }
  }, [_vm._v(",")]), _c('mfrac', [_c('mrow', [_c('msqrt', [_c('mrow', [_c('mn', [_vm._v("1")]), _c('mn', [_vm._v("0")])], 1)], 1)], 1), _c('mrow', [_c('mn', [_vm._v("4")])], 1)], 1), _c('mo', [_vm._v(")")])], 1), _c('annotation', {
    attrs: {
      "encoding": "application/x-tex"
    }
  }, [_vm._v("\\vec{p_1} = (0, 0, 0, 0),\n\\vec{p_2} = (1, 0, 0, 0),\n\\vec{p_3} = (\\frac{1}{2}, \\frac{\\sqrt{3}}{2}, 0, 0),\n\\vec{p_4} = (\\frac{1}{2}, \\frac{\\sqrt{3}}{6}, \\frac{\\sqrt{6}}{3}, 0),\n\\vec{p_5} = (\\frac{1}{2}, \\frac{\\sqrt{3}}{6}, \\frac{\\sqrt{6}}{12}, \\frac{\\sqrt{10}}{4})\n")])], 1)], 1)], 1), _c('span', {
    staticClass: "katex-html",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "strut",
    staticStyle: {
      "height": "1.5842200000000002em"
    }
  }), _c('span', {
    staticClass: "strut bottom",
    staticStyle: {
      "height": "2.27022em",
      "vertical-align": "-0.686em"
    }
  }), _c('span', {
    staticClass: "base displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("1")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("2")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("3")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("4")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord accent"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord displaystyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord"
  }, [_c('span', {
    staticClass: "mord mathit"
  }, [_vm._v("p")]), _c('span', {
    staticClass: "msupsub"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.15em",
      "margin-right": "0.05em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle scriptstyle cramped mtight"
  }, [_c('span', {
    staticClass: "mord mathrm mtight"
  }, [_vm._v("5")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticStyle: {
      "top": "0em",
      "margin-left": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "accent-body accent-vec"
  }, [_c('span', [_vm._v("⃗")])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mrel"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "mopen"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "0em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("3")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("2")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("6")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mpunct"
  }, [_vm._v(",")]), _c('span', {
    staticClass: "mord reset-textstyle displaystyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mopen sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  }), _c('span', {
    staticClass: "mfrac"
  }, [_c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0.686em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle cramped"
  }, [_c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("4")])])])]), _c('span', {
    staticStyle: {
      "top": "-0.22999999999999998em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped frac-line"
  })]), _c('span', {
    staticStyle: {
      "top": "-0.677em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord textstyle uncramped"
  }, [_c('span', {
    staticClass: "mord sqrt"
  }, [_c('span', {
    staticClass: "sqrt-sign",
    staticStyle: {
      "top": "-0.06722000000000006em"
    }
  }, [_c('span', {
    staticClass: "style-wrap reset-textstyle textstyle uncramped"
  }, [_vm._v("√")])]), _c('span', {
    staticClass: "vlist"
  }, [_c('span', {
    staticStyle: {
      "top": "0em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "mord textstyle cramped"
  }, [_c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "mord mathrm"
  }, [_vm._v("0")])])]), _c('span', {
    staticStyle: {
      "top": "-0.8272200000000001em"
    }
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _c('span', {
    staticClass: "reset-textstyle textstyle uncramped sqrt-line"
  })]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])])])])]), _c('span', {
    staticClass: "baseline-fix"
  }, [_c('span', {
    staticClass: "fontsize-ensurer reset-size5 size5"
  }, [_c('span', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("​")])]), _vm._v("​")])])]), _c('span', {
    staticClass: "mclose sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"
  })]), _c('span', {
    staticClass: "mclose"
  }, [_vm._v(")")])])])])])]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  })])
},staticRenderFns: []}

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(199);

/***/ })

});