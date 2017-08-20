webpackJsonp([26],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_8cdc47ba_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_index_md__ = __webpack_require__(157);
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
  __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_8cdc47ba_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_index_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("SourceMap详解")]), _vm._v(" "), _c('div', {
    staticClass: "u-article_meta"
  }, [_vm._v("2015-03-10")]), _vm._v(" "), _c('p', [_vm._v("在这个年代，对于前端开发来说，用户浏览器的运行代码和我们写的原始代码已经很不一样了。因为我们的代码一般都要经过压缩、合并，还有的是经过Sass、Less、Stylus、CoffeeScript、TypeScript等语言的预编译。这就使代码调试变得困难重重。")]), _vm._v(" "), _c('p', [_vm._v("通常JavaScript的解释器会告诉你，第几行第几列代码出错，但这对于转换后的代码毫无用处。举例来说，"), _c('code', {
    pre: true
  }, [_vm._v("jquery-1.11.2.js")]), _vm._v("压缩后只有3行，每行3万多字符，所有内部变量都改了名字。你看着报错信息，会感到毫无头绪(:晕:)，根本不知道它所对应的原始位置。")]), _vm._v(" "), _c('p', [_vm._v("SourceMap就是为了解决这个问题而生的。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "示例"
    }
  }, [_vm._v("示例 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#示例",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("不说废话，先上例子。")]), _vm._v(" "), _c('p', [_vm._v("首先我们用CoffeeScript写一个阶乘函数，将文件命名为"), _c('code', {
    pre: true
  }, [_vm._v("sample.coffee")]), _vm._v("：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-coffee"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-title"
    }
  }, [_vm._v("factorial")]), _vm._v(" = "), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("(num)")]), _vm._v(" ->")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("not")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/^\\d+$/")]), _vm._v(".test(num)\n        "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("throw")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'Error: Not an integer!'")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-title"
    }
  }, [_vm._v("_factorial")]), _vm._v(" = "), _c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("(num)")]), _vm._v(" ->")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" ("), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" num <= "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("then")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("else")]), _vm._v(" num * _factorial(num - "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v("))\n\n    "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" _factorial(num)\n\n"), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("window")]), _vm._v(".factorial = factorial\n")])]), _vm._v(" "), _c('p', [_vm._v("然后将代码编译再压缩，会得到"), _c('code', {
    pre: true
  }, [_vm._v("sample.min.js")]), _vm._v("：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_vm._v("("), _c('span', {
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
  }), _vm._v(")")]), _vm._v("{"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("var")]), _vm._v(" r;r="), _c('span', {
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
  }, [_vm._v("r")]), _vm._v(")")]), _vm._v("{"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("var")]), _vm._v(" t;"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v("(!"), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/^\\d+$/")]), _vm._v(".test(r))"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("throw")]), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Error: Not an integer!\"")]), _vm._v(";"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v("(t="), _c('span', {
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
  }, [_vm._v("r")]), _vm._v(")")]), _vm._v("{"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(">=r?"), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(":r*t(r"), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("-1")]), _vm._v(")})(r)},"), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("window")]), _vm._v(".factorial=r}).call("), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(");\n")])]), _vm._v(" "), _c('p', [_vm._v("当需要调试时，我们的处境就是看着压缩混淆后的JS代码来修改CoffeeScript代码。")]), _vm._v(" "), _c('figure', [_c('img', {
    attrs: {
      "src": "/Skills/Web%E5%89%8D%E7%AB%AF/20150310~SourceMap%E8%AF%A6%E8%A7%A3/screenshot/1.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', [_vm._v("当然，对于当前这个例子来说没多大困难，但如果是一个大工程的话，难度就不亚于看着二进制中间码来修改Java代码了。")]), _vm._v(" "), _c('p', [_vm._v("如果我们有从"), _c('code', {
    pre: true
  }, [_vm._v("sample.coffee")]), _vm._v("转换到"), _c('code', {
    pre: true
  }, [_vm._v("sample.min.js")]), _vm._v("对应的SourceMap文件，情况就大不一样。")]), _vm._v(" "), _c('p', [_vm._v("重新将代码编译再压缩，同时生成"), _c('code', {
    pre: true
  }, [_vm._v("sample.min.map")]), _vm._v("：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-json"
    }
  }, [_vm._v("{"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("\"version\"")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("3")]), _vm._v(","), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("\"file\"")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"sample.min.js\"")]), _vm._v(","), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("\"sources\"")]), _vm._v(":["), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"sample.coffee\"")]), _vm._v("],"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("\"names\"")]), _vm._v(":["), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"factorial\"")]), _vm._v(","), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"num\"")]), _vm._v(","), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"_factorial\"")]), _vm._v(","), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"test\"")]), _vm._v(","), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"window\"")]), _vm._v("],"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("\"mappings\"")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"CAAA,WAAA,GAAAA,EAAAA,GAAY,SAACC,GACZ,GAAAC,EAAA,KAAG,QAAYC,KAAKF,GACnB,KAAM,wBAKP,QAHAC,EAAa,SAACD,GACb,MAAkB,IAAPA,EAAc,EAAOA,EAAMC,EAAWD,EAAM,KAEtCA,IAEnBG,OAAOJ,UAAYA\"")]), _vm._v("}\n")])]), _vm._v(" "), _c('p', [_vm._v("然后再打开浏览器的调试工具。")]), _vm._v(" "), _c('p', [_vm._v("可以发现Sources中能够直接找到"), _c('code', {
    pre: true
  }, [_vm._v("sample.coffee")]), _vm._v("原始文件，并且可以调试CoffeeScript了耶！")]), _vm._v(" "), _c('figure', [_c('img', {
    attrs: {
      "src": "/Skills/Web%E5%89%8D%E7%AB%AF/20150310~SourceMap%E8%AF%A6%E8%A7%A3/screenshot/2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', [_vm._v("妈妈再也不用担心我调试压缩混淆代码头大了(:QQ:可怜:)。"), _c('a', {
    attrs: {
      "href": "/Skills/Web%E5%89%8D%E7%AB%AF/20150310~SourceMap%E8%AF%A6%E8%A7%A3/demo.zip"
    }
  }, [_vm._v("Demo下载")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "什么是SourceMap-"
    }
  }, [_vm._v("什么是SourceMap？ "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#什么是SourceMap-",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("Source maps offer a language-agnostic way of mapping production code to the original code that was authored.")]), _vm._v(" "), _c('p', [_vm._v("SourceMap提供了一种从生成代码到原始代码的映射方法，并且这种方法与语言无关。")])]), _vm._v(" "), _c('figure', [_c('img', {
    attrs: {
      "src": "/Skills/Web%E5%89%8D%E7%AB%AF/20150310~SourceMap%E8%AF%A6%E8%A7%A3/figure/1.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', [_vm._v("简单来说，SourceMap就是一个信息文件"), _c('code', {
    pre: true
  }, [_vm._v("sample.min.map")]), _vm._v("，里面储存着代码转换前后对应的位置信息，通常该文件的扩展名是"), _c('code', {
    pre: true
  }, [_vm._v(".map")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("如果要使用SourceMap调试代码，生成代码"), _c('code', {
    pre: true
  }, [_vm._v("sample.min.js")]), _vm._v("的末尾就必须有如下注释，用于指定SourceMap的路径：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("//# sourceMappingURL=/path/to/sample.min.map")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("该注释通常由SourceMap的生成工具添加。")]), _vm._v(" "), _c('p', [_vm._v("也可以在生成代码"), _c('code', {
    pre: true
  }, [_vm._v("sample.min.js")]), _vm._v("的Response Headers中设置X-SourceMap，来指定SourceMap的路径：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("X-SourceMap: /path/to/sample.min.map\n")])]), _vm._v(" "), _c('p', [_vm._v("另外也可以使用Date URI的形式来指定SourceMap：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-javascript"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("//# sourceMappingURL=data:application/json;base64,Asdi...")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("这样调试工具加载转换后的代码，就能找到对应的SourceMap，再根据SourceMap中的信息找到原始代码。从而我们就可以直接用原始代码调试bug和设置断点了。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "浏览器支持"
    }
  }, [_vm._v("浏览器支持 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#浏览器支持",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("目前，Chrome、Firefox、Safari和IE11都支持Javascript和CSS的SourceMap了，并且默认都是启用的，你可以用下面的方式确认一下。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "Chrome"
    }
  }, [_vm._v("Chrome "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#Chrome",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("按"), _c('key', [_vm._v("F12")]), _vm._v("打开Developer Tools，在Setting设置中找到Sources部分，选中"), _c('code', {
    pre: true
  }, [_vm._v("Enable JavaScript source maps")]), _vm._v("和"), _c('code', {
    pre: true
  }, [_vm._v("Enable CSS source maps")]), _vm._v("。")], 1), _vm._v(" "), _c('figure', [_c('img', {
    attrs: {
      "src": "/Skills/Web%E5%89%8D%E7%AB%AF/20150310~SourceMap%E8%AF%A6%E8%A7%A3/screenshot/3.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "Firefox"
    }
  }, [_vm._v("Firefox "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#Firefox",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("按"), _c('key', [_vm._v("F12")]), _vm._v("打开Developer Tools，在调试器Tab页的右上角找到调试器选项，选中"), _c('code', {
    pre: true
  }, [_vm._v("显示原始来源")]), _vm._v("。")], 1), _vm._v(" "), _c('figure', [_c('img', {
    attrs: {
      "src": "/Skills/Web%E5%89%8D%E7%AB%AF/20150310~SourceMap%E8%AF%A6%E8%A7%A3/screenshot/4.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "Safari"
    }
  }, [_vm._v("Safari "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#Safari",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("我木有Safari。。(:伤不起:)")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "IE11"
    }
  }, [_vm._v("IE11 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#IE11",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("按"), _c('key', [_vm._v("F12")]), _vm._v("打开Developer Tools，在调试程序Tab页中先选择对应的JS文件，然后在上方选中"), _c('code', {
    pre: true
  }, [_vm._v("加载已映射到此生成文件的源")]), _vm._v("。")], 1), _vm._v(" "), _c('figure', [_c('img', {
    attrs: {
      "src": "/Skills/Web%E5%89%8D%E7%AB%AF/20150310~SourceMap%E8%AF%A6%E8%A7%A3/screenshot/5.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "SourceMap的生成"
    }
  }, [_vm._v("SourceMap的生成 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#SourceMap的生成",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "Closure"
    }
  }, [_vm._v("Closure "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#Closure",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("最常用的方法是使用Google的"), _c('a', {
    attrs: {
      "href": "https://developers.google.com/closure/compiler"
    }
  }, [_vm._v("Closure编辑器")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("生成命令的格式如下：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v(" java -jar compiler.jar --js=sample.js --create_source_map=sample.min.map --source_map_format=V3 --js_output_file=sample.min.js")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("各个参数的意义如下：")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', {
    pre: true
  }, [_vm._v("--js")]), _vm._v("：转换前的代码文件路径；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--create_source_map")]), _vm._v("：生成的SourceMap文件路径；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--source_map_format")]), _vm._v("：SourceMap的版本，目前一律采用V3；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--js_output_file")]), _vm._v("：转换后的代码文件路径。")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "uglifyjs"
    }
  }, [_vm._v("uglifyjs "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#uglifyjs",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("uglifyjs是nodejs下的一款优秀的JS压缩优化工具，由于jQuery改用uglifyjs作为其压缩工具令其声名远播，支持SourceMap的生成。")]), _vm._v(" "), _c('p', [_vm._v("首先安装uglifyjs：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v(" npm install uglify-js -g")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("然后生成命令的格式如下：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v(" uglifyjs sample.js -cm -o sample.min.js --"), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("source")]), _vm._v("-map=sample.min.map")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("各个参数的意义如下：")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', {
    pre: true
  }, [_vm._v("-c")]), _vm._v("：使用压缩器。")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("-m")]), _vm._v("：使用混淆器。")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("-o")]), _vm._v("：转换后的代码文件路径。")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--source-map")]), _vm._v("：生成的SourceMap文件路径；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--source-map-root")]), _vm._v("：（可选）用于填充SourceMap文件的"), _c('code', {
    pre: true
  }, [_vm._v("sourceRoot")]), _vm._v("属性。")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--source-map-url")]), _vm._v("：（可选）SourceMap的URL路径，用于添加到生成代码的注释"), _c('code', {
    pre: true
  }, [_vm._v("//# sourceMappingURL=")]), _vm._v("中，默认对应"), _c('code', {
    pre: true
  }, [_vm._v("--source-map")]), _vm._v("的值；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--source-map-include-sources")]), _vm._v("：（可选）是否将原始代码的内容添加到SourceMap文件的"), _c('code', {
    pre: true
  }, [_vm._v("sourcesContent")]), _vm._v("属性中。")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--in-source-map")]), _vm._v("：（可选）SourceMap输入，如果要压缩的JS是从其他原始代码生成的，就要使用这一项。")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "Less"
    }
  }, [_vm._v("Less "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#Less",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("首先安装Less：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v(" npm install less -g")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("然后生成命令的格式如下：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v(" lessc sample.less sample.css --"), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("source")]), _vm._v("-map=sample.css.map")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("各个参数的意义如下：")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', {
    pre: true
  }, [_vm._v("--source-map")]), _vm._v("：生成的SourceMap文件路径；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--source-map-rootpath")]), _vm._v("：（可选）用于填充SourceMap文件的"), _c('code', {
    pre: true
  }, [_vm._v("sourceRoot")]), _vm._v("属性。")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--source-map-inline")]), _vm._v("：（可选）以Data URI Scheme的形式将SourceMap文件内容内嵌到css文件中。")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("--source-map-url")]), _vm._v("：（可选）SourceMap的URL路径，用于添加到生成代码的注释"), _c('code', {
    pre: true
  }, [_vm._v("//# sourceMappingURL=")]), _vm._v("中，默认对应"), _c('code', {
    pre: true
  }, [_vm._v("--source-map")]), _vm._v("的值。")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "CoffeeScript"
    }
  }, [_vm._v("CoffeeScript "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#CoffeeScript",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("生成命令的格式如下：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v(" coffee -cm sample.coffee")]), _vm._v("\n")])]), _vm._v(" "), _c('ul', [_c('li', [_c('code', {
    pre: true
  }, [_vm._v("-c")]), _vm._v("：将CoffeeScript编译成JavaScript。")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("-m")]), _vm._v("：生成SourceMap文件，后缀为"), _c('code', {
    pre: true
  }, [_vm._v(".js.map")]), _vm._v("。")])]), _vm._v(" "), _c('p', [_vm._v("可以进一步将生成的代码压缩：")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v(" uglifyjs sample.js -cm -o sample.min.js --"), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("source")]), _vm._v("-map=sample.min.map --"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("in")]), _vm._v("-source-map=sample.js.map")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("这样就可以将压缩后的代码"), _c('code', {
    pre: true
  }, [_vm._v("sample.min.js")]), _vm._v("直接映射回CoffeeScript的原始代码"), _c('code', {
    pre: true
  }, [_vm._v("sample.coffee")]), _vm._v("了。")]), _vm._v(" "), _c('p', [_vm._v("文章开头示例中的SourceMap就是这样生成的。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "SourceMap的内容"
    }
  }, [_vm._v("SourceMap的内容 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#SourceMap的内容",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("打开SourceMap文件，它大概是这个样子：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-json"
    }
  }, [_vm._v("{\n    version: 3,\n    file: \"out.js\",\n    sourceRoot: \"\",\n    sources: [\"foo.js\", \"bar.js\"],\n    sourceContent: null,\n    names: [\"src\", \"maps\", \"are\", \"fun\"],\n    mappings: \"AAgBC;SAAQ,CAAEA;EAAA,KAAG,QAAYC\"\n}\n")])]), _vm._v(" "), _c('p', [_vm._v("整个文件就是JSON格式，主要有以下几个属性：")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', {
    pre: true
  }, [_vm._v("version")]), _vm._v("：SourceMap的版本，目前为3；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("file")]), _vm._v("：转换后的文件名；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("sourceRoot")]), _vm._v("：转换前的文件所在的目录。如果与转换前的文件在同一目录，该项为空；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("sources")]), _vm._v("：转换前的文件。该项是一个数组，表示可能存在多个文件合并的情况；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("sourceContent")]), _vm._v("：转换前文件的内容。当没有配置"), _c('code', {
    pre: true
  }, [_vm._v("sources")]), _vm._v("的时候会使用该项；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("names")]), _vm._v("：转换前的所有变量名和属性名；")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("mappings")]), _vm._v("：记录位置信息的映射表，下文详细介绍。")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "mappings属性"
    }
  }, [_vm._v("mappings属性 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#mappings属性",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("这部分才是真正有趣的部分，从这里可以看到代码转换前后中各个位置是如何对应的。")]), _vm._v(" "), _c('p', [_vm._v("mappings属性是一个很长的字符串，它分成三级。")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("mappings字符串用"), _c('code', {
    pre: true
  }, [_vm._v(";")]), _vm._v("分割的一组对应生成代码中的一行；")]), _vm._v(" "), _c('li', [_vm._v("每一组用"), _c('code', {
    pre: true
  }, [_vm._v(",")]), _vm._v("分割的一段对应生成代码中的一个位置信息；")]), _vm._v(" "), _c('li', [_vm._v("每一段里是5个数字的Base64 VLQ编码，比如"), _c('code', {
    pre: true
  }, [_vm._v("[9,0,0,1,1]")]), _vm._v("这5个数字的编码是"), _c('code', {
    pre: true
  }, [_vm._v("SAACC")]), _vm._v("：\n"), _c('ul', [_c('li', [_vm._v("第0个数字，表示这个位置在生成代码的第几列；")]), _vm._v(" "), _c('li', [_vm._v("第1个数字，表示这个位置属于sources属性中的哪一个文件；")]), _vm._v(" "), _c('li', [_vm._v("第2个数字，表示这个位置属于原始代码的第几行；")]), _vm._v(" "), _c('li', [_vm._v("第3个数字，表示这个位置属于原始代码的第几列；")]), _vm._v(" "), _c('li', [_vm._v("第4个数字，表示这个位置属于names属性中的哪一个变量。这个数字不是必需的，可以省略。")]), _vm._v(" "), _c('li', [_vm._v("由于Base64 VLQ编码是变长的，所以每一段可以由多个字符构成。")])])])]), _vm._v(" "), _c('p', [_vm._v("关于Base64 VLQ编码本文不再详述，其实并不复杂，请参考："), _c('a', {
    attrs: {
      "href": "http://blog.allenm.me/2012/12/base64-vlq-encoding"
    }
  }, [_vm._v("Base64 VLQ编码规则")]), _vm._v("，"), _c('a', {
    attrs: {
      "href": "https://github.com/mozilla/source-map/blob/master/lib/source-map/base64-vlq.js"
    }
  }, [_vm._v("SourceMap中VLQ编码的JS实现")]), _vm._v("，"), _c('a', {
    attrs: {
      "href": "http://murzwin.com/base64vlq.html"
    }
  }, [_vm._v("VLQ在线编码解码工具")])]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "示例1"
    }
  }, [_vm._v("示例1 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#示例1",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("假设mappings属性的内容如下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-json"
    }
  }, [_vm._v("mappings: \";AAAA;AAAA,MAAA,SAAA;AACX,QAAA,UAAA\"\n")])]), _vm._v(" "), _c('p', [_vm._v("这表示生成代码分成4行，第0行为空行，第1行有1个位置信息，第2行有3个位置信息，第3行有3个位置信息。")]), _vm._v(" "), _c('h5', {
    attrs: {
      "id": "示例2"
    }
  }, [_vm._v("示例2 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#示例2",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("我们将文章开头示例中的Map文件的mappings属性拿过来试一下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-json"
    }
  }, [_vm._v("mappings: \"CAAA,WAAA,GAAAA,EAAAA,GAAY,SAACC,GACZ\"\n")])]), _vm._v(" "), _c('p', [_vm._v("这例子中的生成代码只有1行。我们使用"), _c('a', {
    attrs: {
      "href": "http://murzwin.com/base64vlq.html"
    }
  }, [_vm._v("VLQ在线编码解码工具")]), _vm._v("把内容解码一下：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-json"
    }
  }, [_vm._v("[1,0,0,0], [11,0,0,0], [3,0,0,0,0], [2,0,0,0,0], [3,0,0,12], [9,0,0,1,1], [3,0,1,-12]\n")])]), _vm._v(" "), _c('p', [_vm._v("__注意：__每组值都是相对于前一组值的。")]), _vm._v(" "), _c('p', [_vm._v("每一组加上前一组的值可以得到：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-json"
    }
  }, [_vm._v("[1,0,0,0], [12,0,0,0], [15,0,0,0,0], [17,0,0,0,0], [20,0,0,12], [29,0,0,13,1], [32,0,1,1,1]\n")])]), _vm._v(" "), _c('p', [_vm._v("整理一下可以得出如下结果：")]), _vm._v(" "), _c('p', [_c('code', {
    pre: true
  }, [_vm._v("(a,b)=>name(m,n)")]), _vm._v("表示生成代码中的a行b列对应原始代码中的m行n列的位置，并且在原始代码中这个位置的变量名是name。")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("(0,1)=>(0,0)\n(0,12)=>(0,0)\n(0,15)=>factorial(0,0)\n(0,17)=>factorial(0,0)\n(0,20)=>(0,12)\n(0,29)=>num(0,13)\n(0,32)=>num(1,1)\n")])]), _vm._v(" "), _c('p', [_vm._v("大家可以根据开头的示例代码验证一下上面的结果。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h6', {
    attrs: {
      "id": "扩展阅读"
    }
  }, [_vm._v("扩展阅读 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#扩展阅读",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit"
    }
  }, [_vm._v("SourceMap文档")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/mozilla/source-map"
    }
  }, [_vm._v("[GitHub] 此库可以生成SourceMap")])])]), _vm._v(" "), _c('h6', {
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
      "href": "http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html"
    }
  }, [_vm._v("JavaScript SourceMap 详解")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://blog.allenm.me/2012/12/whats-sourcemap"
    }
  }, [_vm._v("[Allen.M] 使用 SourceMap 来进行前端代码调试")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://www.alloyteam.com/2014/01/source-map-version-3-introduction"
    }
  }, [_vm._v("[AlloyTeam] source map 版本3介绍")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://www.cnblogs.com/fsjohnhuang/p/4208566.html"
    }
  }, [_vm._v("前端构建：SourceMaps详解")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://www.danding.net/2013/12/source-maps%E4%BB%8B%E7%BB%8D"
    }
  }, [_vm._v("SourceMaps介绍")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://blogs.msdn.com/b/davrous/archive/2014/08/22/enhance-your-javascript-debugging-life-thanks-to-the-source-map-support-available-in-ie11-chrome-opera-amp-firefox.aspx"
    }
  }, [_vm._v("Enhance your JavaScript debugging life using IE11, Chrome, Opera & Firefox source map support")])])]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  }, [_c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("Source")]), _vm._v(" "), _c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("Map")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(156);

/***/ })

});