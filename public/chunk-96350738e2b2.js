webpackJsonp([18],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_59f63bee_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_index_md__ = __webpack_require__(139);
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
  __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_59f63bee_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_index_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("柯里化与反柯里化")]), _vm._v(" "), _c('div', {
    staticClass: "u-article_meta"
  }, [_vm._v("2015-06-28")]), _vm._v(" "), _c('figure', [_c('img', {
    attrs: {
      "src": "/Skills/Web%E5%89%8D%E7%AB%AF/20170628~%E6%9F%AF%E9%87%8C%E5%8C%96%E4%B8%8E%E5%8F%8D%E6%9F%AF%E9%87%8C%E5%8C%96/feature.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "什么是柯里化-"
    }
  }, [_vm._v("什么是柯里化？ "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#什么是柯里化-",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("柯里化来源于数学家Haskell Curry的名字（编程语言Haskell也是以他的名字命名的）。")]), _vm._v(" "), _c('blockquote', [_c('p', [_c('strong', [_vm._v("柯里化（Curry），又称部分求值（Partial Evaluation）")]), _vm._v("。其含义是给函数分步传递参数，每次传递参数后部分应用参数，并返回一个更具体的函数接受剩下的参数，这中间可嵌套多层这样的接受部分参数函数，直至返回最后结果。")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "典型示例"
    }
  }, [_vm._v("典型示例 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#典型示例",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("下面是一个部分求和的例子：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("const")]), _vm._v(" curry = "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("func")]), _vm._v(") =>")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" args = [];\n    "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("function")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-title"
    }
  }, [_vm._v("result")]), _vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("...rest")]), _vm._v(") ")]), _vm._v("{\n        "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" (rest.length === "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("0")]), _vm._v(")\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" func(...args);\n\n        args.push(...rest);\n        "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" result;\n    }\n}\n\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" add = "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("...args")]), _vm._v(") =>")]), _vm._v(" args.reduce("), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("a, b")]), _vm._v(") =>")]), _vm._v(" a + b);\n\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" sum = curry(add);\n\nsum("), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(","), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2")]), _vm._v(")("), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("3")]), _vm._v(");\nsum("), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("4")]), _vm._v(");\nsum(); "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// 10")]), _vm._v("\n")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "柯里化的基础"
    }
  }, [_vm._v("柯里化的基础 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#柯里化的基础",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("上面的"), _c('code', {
    pre: true
  }, [_vm._v("curry")]), _vm._v("函数是一个高阶函数（high-order function）。高阶函数是指操作函数的函数，它接收一个或者多个函数作为参数，并返回一个新函数。此外，还依赖于闭包的特性，用来保存中间过程中输入的参数。即柯里化的基础：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("函数可以作为参数传递")]), _vm._v(" "), _c('li', [_vm._v("函数能够作为函数的返回值")]), _vm._v(" "), _c('li', [_vm._v("闭包")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "柯里化的应用"
    }
  }, [_vm._v("柯里化的应用 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#柯里化的应用",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "1--延迟计算"
    }
  }, [_vm._v("1. 延迟计算 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#1--延迟计算",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("上面的例子已经很好地说明这一点了。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "2--动态创建函数"
    }
  }, [_vm._v("2. 动态创建函数 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#2--动态创建函数",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("例如兼容现代浏览器和IE浏览器的添加事件方法，我们通常会这样写：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("const")]), _vm._v(" addEvent = "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("elem, type, fn, cature")]), _vm._v(") =>")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" ("), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("window")]), _vm._v(".addEventListener) {\n        elem.addEventListener(type, (e) => fn.call(elem, e), capture);\n    } "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("else")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" ("), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("window")]), _vm._v(".attachEvent) {\n        elem.attachEvent("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'on'")]), _vm._v(" + type, (e) => fn.call(elem, e);\n    }\n}\n")])]), _vm._v(" "), _c('p', [_vm._v("这种方法显然有个问题，就是每次添加事件处理都要执行一遍"), _c('code', {
    pre: true
  }, [_vm._v("if {...} else if {...}")]), _vm._v("。其实用下面的方法只需判断一次即可：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("const")]), _vm._v(" addEvent = "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("(")]), _vm._v(") =>")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" ("), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("window")]), _vm._v(".addEventListener) {\n        "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("elem, type, fn, capture")]), _vm._v(") =>")]), _vm._v(" {\n            elem.addEventListener(type, (e) => fn.call(elem, e), capture);\n        };\n    } "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("else")]), _vm._v(" {\n        "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("elem, type, fn, capture")]), _vm._v(") =>")]), _vm._v(" {\n            elem.attachEvent("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'on'")]), _vm._v(" + type, (e) => fn.call(elem, e);\n        };\n    }\n})();\n")])]), _vm._v(" "), _c('p', [_vm._v("这个例子，第一次"), _c('code', {
    pre: true
  }, [_vm._v("if {...} else if {...}")]), _vm._v("判断之后，完成了部分计算，动态创建新的函数来处理后面传入的参数，以后就不必重新进行计算了。这是一个典型的柯里化应用。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "3--参数复用"
    }
  }, [_vm._v("3. 参数复用 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#3--参数复用",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("当多次调用同一个函数，并且传递的参数绝大多数是相同的时候，那么该函数就是一个很好的柯里化候选。")]), _vm._v(" "), _c('p', [_vm._v("例如我们经常会用"), _c('code', {
    pre: true
  }, [_vm._v("Function.prototype.bind")]), _vm._v("方法来解决上述问题。")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("const")]), _vm._v(" obj = { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'test'")]), _vm._v(" };\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" foo = "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("function")]), _vm._v(" ("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("prefix, suffix")]), _vm._v(") ")]), _vm._v("{\n    "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log(prefix + "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".name + suffix);\n}.bind(obj, "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'curry-'")]), _vm._v(");\n\nfoo("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'-function'")]), _vm._v("); "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// curry-test-function")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("与"), _c('code', {
    pre: true
  }, [_vm._v("call")]), _vm._v("/"), _c('code', {
    pre: true
  }, [_vm._v("apply")]), _vm._v("方法直接执行不同，"), _c('code', {
    pre: true
  }, [_vm._v("bind")]), _vm._v("方法将第一个参数设置为函数执行的上下文，其他参数依次传递给调用方法（函数的主体本身不执行，可以看成是延迟执行），并动态创建返回一个新的函数。这很符合柯里化的特征。下面来手动实现一下"), _c('code', {
    pre: true
  }, [_vm._v("bind")]), _vm._v("方法：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Function")]), _vm._v(".prototype.bind = "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("function")]), _vm._v(" ("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("...args")]), _vm._v(") ")]), _vm._v("{\n    "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("...rest")]), _vm._v(") =>")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".call(...args, ...rest);\n};\n")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "什么是反柯里化-"
    }
  }, [_vm._v("什么是反柯里化？ "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#什么是反柯里化-",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("上面讲了柯里化，我们知道它的主要特点是逐步传参，逐步缩小函数的适用范围。反过来，反柯里化的作用就是扩大函数的适用范围，使本来作为特定对象所拥有的功能的函数可以被任意对象所用。")]), _vm._v(" "), _c('p', [_vm._v("即把如下给定的函数调用形式：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_vm._v("obj.func(arg1, arg2);\n")])]), _vm._v(" "), _c('p', [_vm._v("转化成如下的函数调用形式：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_vm._v("func(obj, arg1, arg2);\n")])]), _vm._v(" "), _c('p', [_vm._v("这就是反柯里化的形式化描述。")]), _vm._v(" "), _c('p', [_vm._v("当然这里有个前提，就是函数"), _c('code', {
    pre: true
  }, [_vm._v("func")]), _vm._v("需要语言上支持"), _c('a', {
    attrs: {
      "href": "https://zh.wikipedia.org/wiki/%E9%B8%AD%E5%AD%90%E7%B1%BB%E5%9E%8B"
    }
  }, [_vm._v("鸭子类型")]), _vm._v("。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "1--最简形式"
    }
  }, [_vm._v("1. 最简形式 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#1--最简形式",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("用箭头函数可以很简单地实现反柯里化：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("const")]), _vm._v(" uncurry = "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("func")]), _vm._v(") =>")]), _vm._v(" (...args) => func.call(...args);\n\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" split = uncurry("), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("String")]), _vm._v(".prototype.split);\nsplit("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'a,b,c'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("','")]), _vm._v("); "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// ['a', 'b', 'c']")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "2--进击的形式"
    }
  }, [_vm._v("2. 进击的形式 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#2--进击的形式",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("可以看出，"), _c('code', {
    pre: true
  }, [_vm._v("uncurry")]), _vm._v("函数和上面的"), _c('code', {
    pre: true
  }, [_vm._v("bind")]), _vm._v("方法有点神似。下面的形式可以表示出它们与"), _c('code', {
    pre: true
  }, [_vm._v("call")]), _vm._v("方法之间的关系。")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("const")]), _vm._v(" uncurry = "), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("func")]), _vm._v(") =>")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Function")]), _vm._v(".prototype.call.bind(func);\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "3--终极形式"
    }
  }, [_vm._v("3. 终极形式 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#3--终极形式",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("利用"), _c('code', {
    pre: true
  }, [_vm._v("bind")]), _vm._v("方法可以再剥掉一层，得出反柯里化的终极形式：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("const")]), _vm._v(" uncurry = "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Function")]), _vm._v(".prototype.bind.bind("), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Function")]), _vm._v(".prototype.call);\n")])]), _vm._v(" "), _c('p', [_vm._v("最后以一个反柯里化的"), _c('code', {
    pre: true
  }, [_vm._v("bind")]), _vm._v("函数的终极形式结束，其实就是代入上上个式子得出的结果。")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("const")]), _vm._v(" bind = "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Function")]), _vm._v(".prototype.call.bind("), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Function")]), _vm._v(".prototype.bind);\n")])]), _vm._v(" "), _c('p', [_vm._v("可见柯里化与反柯里化演绎出了各种JavaScript的奇技淫巧。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h6', {
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
      "href": "http://www.cnblogs.com/zztt/p/4142891.html"
    }
  }, [_vm._v("浅析 JavaScript 中的 函数 currying 柯里化")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://www.cnblogs.com/zztt/p/4152147.html"
    }
  }, [_vm._v("浅析 JavaScript 中的 函数 uncurrying 反柯里化")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://www.zhangxinxu.com/wordpress/2013/02/js-currying/"
    }
  }, [_vm._v("JS中的柯里化(currying)")])])]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  }, [_c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("柯里化")]), _vm._v(" "), _c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("Curry")]), _vm._v(" "), _c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("JavaScript")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);

/***/ })

});