webpackJsonp([27],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_19fb2e12_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_20150105_JavaScript_md__ = __webpack_require__(163);
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
  __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_19fb2e12_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_20150105_JavaScript_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("JavaScript中正则表达式的应用")]), _vm._v(" "), _c('div', {
    staticClass: "u-article_meta"
  }, [_vm._v("2015-01-05")]), _vm._v(" "), _c('p', [_vm._v("本文只讲述正则表达式在JavaScript中的使用。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "创建正则对象"
    }
  }, [_vm._v("创建正则对象 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#创建正则对象",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "使用RegExp构造器函数"
    }
  }, [_vm._v("使用RegExp构造器函数 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#使用RegExp构造器函数",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("格式为"), _c('code', {
    pre: true
  }, [_vm._v("new RegExp(pattern[, flags])")]), _vm._v("，"), _c('code', {
    pre: true
  }, [_vm._v("pattern")]), _vm._v("为正则表达式的字面量，"), _c('code', {
    pre: true
  }, [_vm._v("flags")]), _vm._v("为正则表达式的标志。示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("var")]), _vm._v(" reg = "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("RegExp")]), _vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'\\d+'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'g'")]), _vm._v(");\n")])]), _vm._v(" "), _c('p', [_vm._v("如果指定标志，它可以是下面值中的一个或多个：")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', {
    pre: true
  }, [_vm._v("i")]), _vm._v("：忽略大小写。")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("m")]), _vm._v("：多行匹配，表示查找换行符两端的潜在匹配，影响正则中的"), _c('code', {
    pre: true
  }, [_vm._v("^")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("$")]), _vm._v("符号。如果加上该标志，则"), _c('code', {
    pre: true
  }, [_vm._v("^")]), _vm._v("表示行起始符，"), _c('code', {
    pre: true
  }, [_vm._v("$")]), _vm._v("表示行结束符；如果不加该标志，则"), _c('code', {
    pre: true
  }, [_vm._v("^")]), _vm._v("表示整个字符串的起始符，"), _c('code', {
    pre: true
  }, [_vm._v("$")]), _vm._v("表示整个字符串的结束符。一般在编辑器中的正则表达式是支持多行匹配的。")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("g")]), _vm._v("：全局匹配，表示该表达式将用来在输入字符串中查找所有可能的匹配，返回的结果可以是多个。如果不加该标志，则最多只会匹配一个。")])]), _vm._v(" "), _c('p', [_vm._v("标志的具体作用会在后面的例子中体现。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "使用Perl风格的文本格式"
    }
  }, [_vm._v("使用Perl风格的文本格式 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#使用Perl风格的文本格式",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("格式为"), _c('code', {
    pre: true
  }, [_vm._v("/pattern/flags")]), _vm._v("。示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("var")]), _vm._v(" reg = "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/\\d+/g")]), _vm._v(";\n")])]), _vm._v(" "), _c('h6', {
    attrs: {
      "id": "注意"
    }
  }, [_vm._v("注意 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#注意",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("文本格式中的参数不要使用引号，而构造器函数的参数则要使用引号。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "几个和正则表达式有关的函数"
    }
  }, [_vm._v("几个和正则表达式有关的函数 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#几个和正则表达式有关的函数",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "compile"
    }
  }, [_vm._v("compile "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#compile",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_c('code', {
    pre: true
  }, [_vm._v("regExp.compile(pattern[, flags])")]), _vm._v("：将正则表达式编译为内部格式，从而更快地执行。示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("var")]), _vm._v(" reg = "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/CAT/")]), _vm._v(";\nreg.compile("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'\\d+'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'g'")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// undefined")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log(reg);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// /\\d+/g")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("这个函数其实没啥用，想当于")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("var")]), _vm._v(" reg = "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/\\d+/g")]), _vm._v(";\n")])]), _vm._v(" "), _c('p', [_vm._v("所以忘记它吧(:QQ:再见:)。。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "test"
    }
  }, [_vm._v("test "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#test",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_c('code', {
    pre: true
  }, [_vm._v("regExp.test(string)")]), _vm._v("：测试正则表达式能否匹配该字符串，返回Boolean值。")]), _vm._v(" "), _c('p', [_vm._v("这个函数是最简单也是最常用的。示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_vm._v("/\\d+/.test('123,cat,456,Cat,789');    // true\n/789/.test('123,cat,456,Cat,789');    // false\n")])]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "标志i的作用"
    }
  }, [_vm._v("标志i的作用 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#标志i的作用",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_vm._v("/CAT/.test("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// false")]), _vm._v("\n/CAT/i.test("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// true")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("该标志在其它函数中与"), _c('code', {
    pre: true
  }, [_vm._v("test")]), _vm._v("相同，不再详述。")]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "标志m的作用"
    }
  }, [_vm._v("标志m的作用 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#标志m的作用",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_vm._v("/^cat/.test("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123\\ncat\\n456\\nCat\\n789'")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// false")]), _vm._v("\n/^cat/m.test("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123\\ncat\\n456\\nCat\\n789'")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// true")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("该标志在其它函数中与"), _c('code', {
    pre: true
  }, [_vm._v("test")]), _vm._v("相同，不再详述。")]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "标志g的作用"
    }
  }, [_vm._v("标志g的作用 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#标志g的作用",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("加与不加没有区别。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "exec"
    }
  }, [_vm._v("exec "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#exec",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_c('code', {
    pre: true
  }, [_vm._v("regExp.exec(string)")]), _vm._v("：返回正则表达式匹配该字符串的结果，如果匹配不到则返回"), _c('code', {
    pre: true
  }, [_vm._v("null")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("如果匹配成功，则返回一个数组对象，该对象的第0项是整个正则表达式所匹配的结果，后续项是正则表达式中各个捕获分组匹配的结果，index项是匹配的位置，input项是原参数中的字符串。")]), _vm._v(" "), _c('p', [_vm._v("这个函数是最复杂的(:晕:)，如果不好理解可以先跳过，看后面的几个函数。")]), _vm._v(" "), _c('p', [_vm._v("示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_vm._v("/\\d+/.exec('123,cat,456,Cat,789');    // [\"123\", index: 0, input: \"123,cat,456,Cat,789\"]\n/789/.exec('123,cat,456,Cat,789');    // null\n")])]), _vm._v(" "), _c('p', [_vm._v("下面是一个正则表达式中包含捕获分组的例子：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_vm._v("/(c)at/i.exec("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"cat\", \"c\", index: 4, input: \"123,cat,456,Cat,789\"]")]), _vm._v("\n")])]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "标志g的作用-2"
    }
  }, [_vm._v("标志g的作用 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#标志g的作用-2",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("如果正则表达式没有设置"), _c('code', {
    pre: true
  }, [_vm._v("g")]), _vm._v("，那么"), _c('code', {
    pre: true
  }, [_vm._v("exec")]), _vm._v("方法不会对正则表达式有任何的影响，如果设置了"), _c('code', {
    pre: true
  }, [_vm._v("g")]), _vm._v("，那么"), _c('code', {
    pre: true
  }, [_vm._v("exec")]), _vm._v("执行之后会更新正则表达式的"), _c('code', {
    pre: true
  }, [_vm._v("lastIndex")]), _vm._v("属性，表示本次匹配后，所匹配字符串的下一个字符的索引，下一次再用这个正则表达式匹配字符串的时候就会从上次的"), _c('code', {
    pre: true
  }, [_vm._v("lastIndex")]), _vm._v("属性开始匹配。")]), _vm._v(" "), _c('p', [_vm._v("示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("var")]), _vm._v(" reg = "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/\\d+/g")]), _vm._v(",\n    str = "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(";\n\nreg.exec(str);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"123\", index: 0, input: \"123,cat,456,Cat,789\"]")]), _vm._v("\nreg.exec(str);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"456\", index: 8, input: \"123,cat,456,Cat,789\"]")]), _vm._v("\nreg.exec(str);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"789\", index: 16, input: \"123,cat,456,Cat,789\"]")]), _vm._v("\nreg.exec(str);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// null")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("经常用while语句改写上面的例子：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("var")]), _vm._v(" reg = "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/\\d+/g")]), _vm._v(",\n    str = "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(",\n    cap;\n\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("while")]), _vm._v("(cap = reg.exec(str))\n\t"), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log(cap);\n\n"), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"123\", index: 0, input: \"123,cat,456,Cat,789\"]")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"456\", index: 8, input: \"123,cat,456,Cat,789\"]")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"789\", index: 16, input: \"123,cat,456,Cat,789\"]")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("下面是正则表达式中包含捕获分组的例子：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("var")]), _vm._v(" reg = "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/(c)at/ig")]), _vm._v(",\n    str = "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(";\n\nreg.exec(str);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"cat\", \"c\", index: 4, input: \"123,cat,456,Cat,789\"]")]), _vm._v("\nreg.exec(str);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"Cat\", \"C\", index: 12, input: \"123,cat,456,Cat,789\"]")]), _vm._v("\nreg.exec(str);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// null")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("下面是正则表达式中三个标志同时使用的例子：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("var")]), _vm._v(" reg = "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/^cat$/img")]), _vm._v(",\n    str = "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123\\ncat\\n456\\nCat\\n789'")]), _vm._v(";\n\nreg.exec(str);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"cat\", index: 4, input: \"123\\ncat\\n456\\nCat\\n789\"]")]), _vm._v("\nreg.exec(str);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"Cat\", index: 12, input: \"123\\ncat\\n456\\nCat\\n789\"]")]), _vm._v("\nreg.exec(str);    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// null")]), _vm._v("\n")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "search"
    }
  }, [_vm._v("search "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#search",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_c('code', {
    pre: true
  }, [_vm._v("string.search(regExp)")]), _vm._v("：返回正则表达式第一次匹配的位置，匹配不到则返回"), _c('code', {
    pre: true
  }, [_vm._v("-1")]), _vm._v("，类似"), _c('code', {
    pre: true
  }, [_vm._v("string.indexOf()")]), _vm._v("。示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(".search("), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/cat/")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// 4")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(".search("), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/789/")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// -1")]), _vm._v("\n")])]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "标志g的作用-3"
    }
  }, [_vm._v("标志g的作用 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#标志g的作用-3",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("加与不加没有区别。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "match"
    }
  }, [_vm._v("match "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#match",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_c('code', {
    pre: true
  }, [_vm._v("string.match(regExp)")]), _vm._v("：将匹配的字符串结果以数组的方式返回。")]), _vm._v(" "), _c('p', [_vm._v("这个函数也是很常用的。示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(".match("), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/\\d+/")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"123\"]")]), _vm._v("\n")])]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "标志g的作用-4"
    }
  }, [_vm._v("标志g的作用 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#标志g的作用-4",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("如果没有设置"), _c('code', {
    pre: true
  }, [_vm._v("g")]), _vm._v("，则"), _c('code', {
    pre: true
  }, [_vm._v("match")]), _vm._v("返回的结果和"), _c('code', {
    pre: true
  }, [_vm._v("exec")]), _vm._v("相同。但是如果正则表达式设置了"), _c('code', {
    pre: true
  }, [_vm._v("g")]), _vm._v("修饰符，则"), _c('code', {
    pre: true
  }, [_vm._v("match")]), _vm._v("和"), _c('code', {
    pre: true
  }, [_vm._v("exec")]), _vm._v("的行为就不一样了。在"), _c('code', {
    pre: true
  }, [_vm._v("match")]), _vm._v("中设置了"), _c('code', {
    pre: true
  }, [_vm._v("g")]), _vm._v("修饰符的正则表达式在完成一次成功匹配后不会停止，会继续找到所有可以匹配到的字符。")]), _vm._v(" "), _c('p', [_vm._v("示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(".match("), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/\\d+/g")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"123\", \"456\", \"789\"]")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("下面是正则表达式中三个标志同时使用的例子：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123\\ncat\\n456\\nCat\\n789'")]), _vm._v(".match("), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/^cat$/img")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"cat\", \"Cat\"]")]), _vm._v("\n")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "split"
    }
  }, [_vm._v("split "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#split",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_c('code', {
    pre: true
  }, [_vm._v("string.split(regExp)")]), _vm._v("：返回按照正则表达式匹配分割后的数组。示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(".split("), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/,cat,/i")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// [\"123\", \"456\", \"789\"]")]), _vm._v("\n")])]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "标志g的作用-5"
    }
  }, [_vm._v("标志g的作用 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#标志g的作用-5",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("加与不加没有区别。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "replace"
    }
  }, [_vm._v("replace "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#replace",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_c('code', {
    pre: true
  }, [_vm._v("string.replace(regExp, replacement)")]), _vm._v("：它的作用是将字符串中匹配正则表达式的部分用"), _c('code', {
    pre: true
  }, [_vm._v("replacement")]), _vm._v("替换，可以是字符串，也可以是函数。")]), _vm._v(" "), _c('p', [_vm._v("这个函数很强大，一但学会了用起来很风骚(:酷:)！示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(".replace("), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/\\d+/")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'000'")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// \"000,cat,456,Cat,789\"")]), _vm._v("\n")])]), _vm._v(" "), _c('h6', {
    attrs: {
      "id": "注意-2"
    }
  }, [_vm._v("注意 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#注意-2",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("原字符串并不会被修改，而是替换结果作为返回值被返回。")]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "标志g的作用-6"
    }
  }, [_vm._v("标志g的作用 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#标志g的作用-6",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("如果设置"), _c('code', {
    pre: true
  }, [_vm._v("g")]), _vm._v("修饰符，会替换掉所有匹配的部分。示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(".replace("), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/\\d+/g")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'000'")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// \"000,cat,000,Cat,000\"")]), _vm._v("\n")])]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "使用-引用捕获分组匹配的结果"
    }
  }, [_vm._v("使用$引用捕获分组匹配的结果 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#使用-引用捕获分组匹配的结果",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("就像在正则表达式里面我们可以使用"), _c('code', {
    pre: true
  }, [_vm._v("\\1")]), _vm._v("来引用第一个捕获分组所匹配的结果一样，我们在"), _c('code', {
    pre: true
  }, [_vm._v("replace")]), _vm._v("函数的替换字符串里也可以使用"), _c('code', {
    pre: true
  }, [_vm._v("$1")]), _vm._v("来引用相同的内容。示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(".replace("), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/(\\d)\\d(\\d)/g")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'$10$2'")]), _vm._v(");    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// \"103,cat,406,Cat,709\"")]), _vm._v("\n")])]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "使用函数"
    }
  }, [_vm._v("使用函数 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#使用函数",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_c('code', {
    pre: true
  }, [_vm._v("replacement")]), _vm._v("可以是函数，这时"), _c('code', {
    pre: true
  }, [_vm._v("replace")]), _vm._v("的功能就更加强大了(:酷:)(:酷:)。函数的第一个参数是整个正则表达式所匹配的结果，后续参数是正则表达式中各个捕获分组匹配的结果，倒数第二个参数为"), _c('code', {
    pre: true
  }, [_vm._v("index")]), _vm._v("项，倒数第一个参数为"), _c('code', {
    pre: true
  }, [_vm._v("input")]), _vm._v("项，和"), _c('code', {
    pre: true
  }, [_vm._v("exec")]), _vm._v("的结果类似，函数需要返回替换的结果。")]), _vm._v(" "), _c('p', [_vm._v("示例如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'123,cat,456,Cat,789'")]), _vm._v(".replace("), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/(\\d)\\d(\\d)/g")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("function")]), _vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("m, $"), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(", $"), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2")])]), _vm._v(") ")]), _vm._v("{\n\t"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" $"), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(" * $"), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2")]), _vm._v(";\n});    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// \"3,cat,24,Cat,63\"")]), _vm._v("\n")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h6', {
    attrs: {
      "id": "参考"
    }
  }, [_vm._v("参考 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#参考",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp"
    }
  }, [_vm._v("[W3School] JavaScript RegExp 对象")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://blog.sina.com.cn/s/blog_7256fe8f01017poa.html"
    }
  }, [_vm._v("http://blog.sina.com.cn/s/blog_7256fe8f01017poa.html")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://www.blog.lty0311.com/article/685.html"
    }
  }, [_vm._v("http://www.blog.lty0311.com/article/685.html")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://www.cnblogs.com/shunyao8210/archive/2008/11/13/1332591.html"
    }
  }, [_vm._v("http://www.cnblogs.com/shunyao8210/archive/2008/11/13/1332591.html")])])]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  }, [_c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("JavaScript")]), _vm._v(" "), _c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("正则表达式")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(162);

/***/ })

});