webpackJsonp([19],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2c74319b_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_20170628_Live_md__ = __webpack_require__(141);
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2c74319b_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_20170628_Live_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("尤大的Live笔记")]), _vm._v(" "), _c('h1', [_vm._v("不吹不黑聊聊前端框架")]), _vm._v(" "), _c('p', [_vm._v("好，那我们开始了。首先欢迎大家参加这个Live。定个基调，所以做了一个比较，放到文档里面。上来，前端是一个产品形态差异很大的。")]), _vm._v(" "), _c('p', [_vm._v("与其去浪费时间，不如这样我们作为开发者。")]), _vm._v(" "), _c('p', [_vm._v("基本框架是组件。一般是页面为单位，所有的HTML都是页面，一旦成为应用的话，很快这个应用就可以抽象成为组件树的。")]), _vm._v(" "), _c('p', [_vm._v("经验和对工具本身的理解")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "组件分类"
    }
  }, [_vm._v("组件分类 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#组件分类",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("展示型")]), _vm._v(" "), _c('li', [_vm._v("接入型")]), _vm._v(" "), _c('li', [_vm._v("交互型")]), _vm._v(" "), _c('li', [_vm._v("功能型")])]), _vm._v(" "), _c('p', [_vm._v("模板和JSX")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "渲染机制"
    }
  }, [_vm._v("渲染机制 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#渲染机制",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("colocate，一个组件一个目录\n声明式、命令式，view = render(state)")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "变化侦测-pull和push"
    }
  }, [_vm._v("变化侦测：pull和push "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#变化侦测-pull和push",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("- Vue，用混合式的策略\n")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "状态管理"
    }
  }, [_vm._v("状态管理 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#状态管理",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("- 从原事件 -> 状态改变 -> view的改变\n")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "路由"
    }
  }, [_vm._v("路由 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#路由",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "CSS"
    }
  }, [_vm._v("CSS "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#CSS",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("主流的CSS方案")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Shadow DOM")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "传统CSS的一些问题"
    }
  }, [_vm._v("传统CSS的一些问题 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#传统CSS的一些问题",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("作用域")]), _vm._v(" "), _c('li', [_vm._v("Critical CSS")]), _vm._v(" "), _c('li', [_vm._v("Atomic CSS")]), _vm._v(" "), _c('li', [_vm._v("分发复用")]), _vm._v(" "), _c('li', [_vm._v("跨平台复用")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "构建工具"
    }
  }, [_vm._v("构建工具 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#构建工具",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("请求工具")]), _vm._v(" "), _c('li', [_vm._v("http2")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "服务端数据通信"
    }
  }, [_vm._v("服务端数据通信 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#服务端数据通信",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "服务端渲染"
    }
  }, [_vm._v("服务端渲染 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#服务端渲染",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://zhuanlan.zhihu.com/p/27205354"
    }
  }, [_vm._v("大神面对面：Vue.js 作者尤雨溪专访")])])]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  })])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);

/***/ })

});