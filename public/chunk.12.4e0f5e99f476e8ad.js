webpackJsonp([12],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(47)("440bba5c", content, true);

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports
exports.i(__webpack_require__(48), "");

// module
exports.push([module.i, ".JDQsmTKznNkcfMrW{position:relative;z-index:4;width:100%;height:280px;background:#fff url(" + __webpack_require__(124) + ") 50% no-repeat;background-size:auto 100%;border-top:1px solid $border-color-light;box-shadow:$box-shadow-base}", ""]);

// exports
exports.locals = {
	"header": "JDQsmTKznNkcfMrW"
};

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "header.5767f62d00da5e98.jpg";

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.$style.header
  }), _c('router-view')], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4146e48a_hasScoped_false_preserveWhitespace_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(125);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(122);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4146e48a_hasScoped_false_preserveWhitespace_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});