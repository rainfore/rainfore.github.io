webpackJsonp([9],{

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-css-loader/index.js?{\"minimize\":true,\"localIdentName\":\"[name]_[local]\",\"modules\":true,\"importLoaders\":true}!../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-29af75a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../Projects/GitHub/Vusion/vusion-cli/node_modules/import-global-loader/index.js!../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
			var newContent = require("!!../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-css-loader/index.js?{\"minimize\":true,\"localIdentName\":\"[name]_[local]\",\"modules\":true,\"importLoaders\":true}!../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-29af75a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../Projects/GitHub/Vusion/vusion-cli/node_modules/import-global-loader/index.js!../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Index_background_2XiuU1{position:fixed;z-index:0;top:0;width:100%;height:100%;background:url(" + __webpack_require__(165) + ") no-repeat;background-size:cover}", ""]);

// exports
exports.locals = {
	"background": "Index_background_2XiuU1"
};

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Yosemite.jpg?ffe908108fcf28062c29875da5b2a3e2";

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.$style.background
  }), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var cssModules = {}
function injectStyle (ssrContext) {

              var oldLocals = this['$style'];
              var newLocals = __webpack_require__(163);
              if (oldLocals && oldLocals.root === 'Index.vue')
                  newLocals = Object.assign({}, oldLocals, newLocals);
              cssModules['$style'] = newLocals;
            this['$style'] = cssModules['$style']
}
var Component = __webpack_require__(2)(
  /* script */
  null,
  /* template */
  __webpack_require__(166),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});