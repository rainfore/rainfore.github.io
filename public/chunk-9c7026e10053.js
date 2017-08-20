webpackJsonp([17],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_66c06ec4_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_20170820_git_md__ = __webpack_require__(135);
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_66c06ec4_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_20170820_git_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("git同步远程仓库")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "1--添加远程仓库"
    }
  }, [_vm._v("1. 添加远程仓库 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#1--添加远程仓库",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("我们在创建一个git项目时, 至少可以看到一个名为"), _c('code', {
    pre: true
  }, [_vm._v("origin")]), _vm._v("的远程库, git默认使用这个名字来标识你本地工程所对应的远程仓库。")]), _vm._v(" "), _c('p', [_vm._v("一个git项目除了默认的"), _c('code', {
    pre: true
  }, [_vm._v("origin")]), _vm._v("仓库外，还可以为其添加一个新的远程仓库, 可以随意指定一个名字, 这里我们用"), _c('code', {
    pre: true
  }, [_vm._v("upstream")]), _vm._v("。")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-shell"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-meta"
    }
  }, [_vm._v("$")]), _c('span', {
    attrs: {
      "class": "bash"
    }
  }, [_vm._v(" git remote add upstream [url]")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("执行"), _c('code', {
    pre: true
  }, [_vm._v("git remote")]), _vm._v("命令将会显示所有远程仓库的名称：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-shell"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-meta"
    }
  }, [_vm._v("$")]), _c('span', {
    attrs: {
      "class": "bash"
    }
  }, [_vm._v(" git remote")]), _vm._v("\n  origin\n  upstream\n")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "2--合并远程仓库"
    }
  }, [_vm._v("2. 合并远程仓库 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#2--合并远程仓库",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "-1-同步远程仓库的信息到本地"
    }
  }, [_vm._v("（1）同步远程仓库的信息到本地 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#-1-同步远程仓库的信息到本地",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-shell"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-meta"
    }
  }, [_vm._v("$")]), _c('span', {
    attrs: {
      "class": "bash"
    }
  }, [_vm._v(" git remote update upstream")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "-2-merge到本地分支"
    }
  }, [_vm._v("（2）merge到本地分支 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#-2-merge到本地分支",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-shell"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-meta"
    }
  }, [_vm._v("$")]), _c('span', {
    attrs: {
      "class": "bash"
    }
  }, [_vm._v(" git merge upstream/branch_name")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("搞定。")]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  })])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(134);

/***/ })

});