webpackJsonp([21],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_ce0f85f0_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_index_md__ = __webpack_require__(152);
var normalizeComponent = __webpack_require__(4)
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
  __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_ce0f85f0_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_index_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("几款Markdown的JS解析器对比")]), _vm._v(" "), _c('div', {
    staticClass: "u-article_meta"
  }, [_vm._v("2017-06-23")]), _vm._v(" "), _c('p', [_vm._v("这些年，Markdown由于其容易上手、方便阅读的特色，基本上坐稳了网络标记语言的江山，在各网站中得到了广泛应用。相应JavaScript解析器也是此起彼伏，让我们这些前端程序员难以挑选。今天专门在GitHub上找到几款活跃的Markdown的JS解析器，在这里统一作个比较。")]), _vm._v(" "), _c('p', [_vm._v("先说结论：踩完各种坑之后，推荐使用"), _c('a', {
    attrs: {
      "href": "https://github.com/markdown-it/markdown-it"
    }
  }, [_vm._v("markdown-it")]), _vm._v("。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "仓库信息"
    }
  }, [_vm._v("仓库信息 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#仓库信息",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Repo")]), _vm._v(" "), _c('th', [_vm._v("Travis CI")]), _vm._v(" "), _c('th', [_vm._v("NPM Version")]), _vm._v(" "), _c('th', [_vm._v("Dependencies")]), _vm._v(" "), _c('th', [_vm._v("`.min` File Size")]), _vm._v(" "), _c('th', [_vm._v("Stars")]), _vm._v(" "), _c('th', [_vm._v("Open Issues")]), _vm._v(" "), _c('th', [_vm._v("Last Commit")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/markdown-it/markdown-it"
    }
  }, [_vm._v("markdown-it")])]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/travis/markdown-it/markdown-it.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/npm/v/markdown-it.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/david/markdown-it/markdown-it.svg?maxAge=3600&style=flat-square&label=deps"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/size/markdown-it/markdown-it/dist/markdown-it.min.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/stars/markdown-it/markdown-it.svg?maxAge=3600&style=social&label=%E2%98%85"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/issues-raw/markdown-it/markdown-it.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_vm._v("2017-06-20")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/jonschlinkert/remarkable"
    }
  }, [_vm._v("remarkable")])]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/travis/jonschlinkert/remarkable.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/npm/v/remarkable.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/david/jonschlinkert/remarkable.svg?maxAge=3600&style=flat-square&label=deps"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/size/jonschlinkert/remarkable/dist/remarkable.min.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/stars/jonschlinkert/remarkable.svg?maxAge=3600&style=social&label=%E2%98%85"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/issues-raw/jonschlinkert/remarkable.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_vm._v("2017-05-22")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/chjj/marked"
    }
  }, [_vm._v("marked")])]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/travis/chjj/marked.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/npm/v/marked.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/david/chjj/marked.svg?maxAge=3600&style=flat-square&label=deps"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/size/chjj/marked/marked.min.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/stars/chjj/marked.svg?maxAge=3600&style=social&label=%E2%98%85"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/issues-raw/chjj/marked.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_vm._v("2017-01-21")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/showdownjs/showdown"
    }
  }, [_vm._v("showdown")])]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/travis/showdownjs/showdown.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/npm/v/showdown.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/david/showdownjs/showdown.svg?maxAge=3600&style=flat-square&label=deps"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/size/showdownjs/showdown/dist/showdown.min.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/stars/showdownjs/showdown.svg?maxAge=3600&style=social&label=%E2%98%85"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/issues-raw/showdownjs/showdown.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_vm._v("2017-06-12")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/jgm/commonmark.js"
    }
  }, [_vm._v("commonmark")])]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/travis/jgm/commonmark.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/npm/v/commonmark.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/david/jgm/commonmark.js.svg?maxAge=3600&style=flat-square&label=deps"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/size/jgm/commonmark.js/dist/commonmark.min.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/stars/jgm/commonmark.js.svg?maxAge=3600&style=social&label=%E2%98%85"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/issues-raw/jgm/commonmark.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_vm._v("2017-01-08")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/evilstreak/markdown-js"
    }
  }, [_vm._v("markdown-js")])]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/travis/evilstreak/markdown-js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/npm/v/markdown.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/david/evilstreak/markdown-js.svg?maxAge=3600&style=flat-square&label=deps"
    }
  })]), _vm._v(" "), _c('td', [_vm._v("49.77 kB")]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/stars/evilstreak/markdown-js.svg?maxAge=3600&style=social&label=%E2%98%85"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/issues-raw/evilstreak/markdown-js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_vm._v("2017-06-20")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/SimonWaldherr/micromarkdown.js"
    }
  }, [_vm._v("micromarkdown")])]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/travis/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/npm/v/micromarkdown.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/david/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=flat-square&label=deps"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/size/SimonWaldherr/micromarkdown.js/dist/micromarkdown.min.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/stars/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=social&label=%E2%98%85"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/issues-raw/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_vm._v("2016-03-19")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/Holixus/nano-markdown"
    }
  }, [_vm._v("nano-markdown")])]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/travis/Holixus/nano-markdown.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/npm/v/nano-markdown.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/david/Holixus/nano-markdown.svg?maxAge=3600&style=flat-square&label=deps"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/size/Holixus/nano-markdown/dist/nanomd.min.js.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/stars/Holixus/nano-markdown.svg?maxAge=3600&style=social&label=%E2%98%85"
    }
  })]), _vm._v(" "), _c('td', [_c('img', {
    attrs: {
      "src": "https://img.shields.io/github/issues-raw/Holixus/nano-markdown.svg?maxAge=3600&style=flat-square"
    }
  })]), _vm._v(" "), _c('td', [_vm._v("2016-03-16")])])])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("marked以前很火，从13k的stars可以看出这点，后来作者不维护了，现在有507个issues还没关，所以不建议使用。")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "功能"
    }
  }, [_vm._v("功能 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#功能",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "rowspan": "2"
    }
  }, [_vm._v("Repo")]), _vm._v(" "), _c('th', [_c('a', {
    attrs: {
      "href": "https://github.com/jgm/commonmark"
    }
  }, [_vm._v("CommonMark")]), _vm._v("(核心功能)")]), _vm._v(" "), _c('th', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('a', {
    attrs: {
      "href": "https://github.github.com/gfm"
    }
  }, [_vm._v("GFM")]), _vm._v("(新增)")]), _vm._v(" "), _c('th', [_c('a', {
    attrs: {
      "href": "https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide"
    }
  }, [_vm._v("MultiMarkdown")]), _vm._v("(新增)，"), _c('a', {
    attrs: {
      "href": "https://rawgit.com/fletcher/human-markdown-reference/master/index.html"
    }
  }, [_vm._v("Guide")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("标题、段落、链接、图片"), _c('br'), _vm._v("列表、引用块、代码块等")]), _vm._v(" "), _c('th', [_vm._v("删除线、自动链接"), _c('br'), _vm._v("表格、任务列表")]), _vm._v(" "), _c('th', [_vm._v("语法突出显示")]), _vm._v(" "), _c('th', [_vm._v("元数据、交叉引用、图片扩展"), _c('br'), _vm._v("脚注、定义列表、数学、附录等")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/markdown-it/markdown-it"
    }
  }, [_vm._v("markdown-it")])]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td', [_vm._v("部分支持")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/jonschlinkert/remarkable"
    }
  }, [_vm._v("remarkable")])]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td', [_vm._v("部分支持")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/chjj/marked"
    }
  }, [_vm._v("marked")])]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/showdownjs/showdown"
    }
  }, [_vm._v("showdown")])]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/jgm/commonmark.js"
    }
  }, [_vm._v("commonmark")])]), _vm._v(" "), _c('td', [_vm._v("✓")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/evilstreak/markdown-js"
    }
  }, [_vm._v("markdown-js")])]), _vm._v(" "), _c('td', [_c('muted', [_vm._v("不支持代码块")])], 1), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/SimonWaldherr/micromarkdown.js"
    }
  }, [_vm._v("micromarkdown")])]), _vm._v(" "), _c('td', [_c('muted', [_vm._v("功能不全😂")])], 1), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://github.com/Holixus/nano-markdown"
    }
  }, [_vm._v("nano-markdown")])]), _vm._v(" "), _c('td', [_c('muted', [_vm._v("功能不全😂")])], 1), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')])])]), _vm._v(" "), _c('p', [_vm._v("这里有两个链接，可以比较各种Markdown解析器的生成结果："), _c('a', {
    attrs: {
      "href": "/Skills/Web%E5%89%8D%E7%AB%AF/20170623~%E5%87%A0%E6%AC%BEMarkdown%E7%9A%84JS%E8%A7%A3%E6%9E%90%E5%99%A8%E5%AF%B9%E6%AF%94/test.html"
    }
  }, [_vm._v("test.html")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://babelmark.github.io"
    }
  }, [_vm._v("babelmark")])]), _vm._v(" "), _c('p', [_vm._v("对于表格，从下往上看：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("最后两个库就是来刷存在感的，核心功能都支持的有问题，文件再小又能怎么样？")]), _vm._v(" "), _c('li', [_vm._v("markdown-js这个库做得一般，扩展性比较差，可惜占用了markdown这个npm包。。")]), _vm._v(" "), _c('li', [_vm._v("commonmark是一个目前比较通用的Markdown核心功能标准。")]), _vm._v(" "), _c('li', [_vm._v("markdown-it和remarkable两者提供了plugin机制，对高级Markdown扩展都支持得比较好，不过markdown-it比remarkable的插件要多得多。参见下表：")])]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("功能")]), _vm._v(" "), _c('th', [_vm._v("markdown-it")]), _vm._v(" "), _c('th', [_vm._v("remarkable")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("sub script")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-sub"
    }
  }, [_vm._v("markdown-it-sub")])]), _vm._v(" "), _c('td', [_vm._v("✓")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("super script")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-sup"
    }
  }, [_vm._v("markdown-it-sup")])]), _vm._v(" "), _c('td', [_vm._v("✓")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("insert")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-ins"
    }
  }, [_vm._v("markdown-it-ins")])]), _vm._v(" "), _c('td', [_vm._v("✓")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("mark")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-mark"
    }
  }, [_vm._v("markdown-it-mark")])]), _vm._v(" "), _c('td', [_vm._v("✓")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("abbreviation")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-abbr"
    }
  }, [_vm._v("markdown-it-abbr")])]), _vm._v(" "), _c('td', [_vm._v("✓")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("footnote")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-footnote"
    }
  }, [_vm._v("markdown-it-footnote")])]), _vm._v(" "), _c('td', [_vm._v("✓")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("definition list")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-deflist"
    }
  }, [_vm._v("markdown-it-deflist")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("meta data")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/remarkable-meta"
    }
  }, [_vm._v("remarkable-meta")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("emoji")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-emoji"
    }
  }, [_vm._v("markdown-it-emoji")])]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/remarkable-emoji"
    }
  }, [_vm._v("remarkable-emoji")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("link attributes")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-link-attributes"
    }
  }, [_vm._v("markdown-it-link-attributes")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("custom container")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-container"
    }
  }, [_vm._v("markdown-it-container")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("task lists")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-task-lists"
    }
  }, [_vm._v("markdown-it-task-lists")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("header anchor")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-anchor"
    }
  }, [_vm._v("markdown-it-anchor")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("table of contents")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-table-of-contents"
    }
  }, [_vm._v("markdown-it-table-of-contents")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("mentions")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/remarkable-mentions"
    }
  }, [_vm._v("remarkable-mentions")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("attrs")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-attrs"
    }
  }, [_vm._v("markdown-it-attrs")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("decorate")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-decorate"
    }
  }, [_vm._v("markdown-it-decorate")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("image size")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-imsize"
    }
  }, [_vm._v("markdown-it-imsize")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("implicit figures")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-implicit-figures"
    }
  }, [_vm._v("markdown-it-implicit-figures")])]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/remarkable-figure-plugin"
    }
  }, [_vm._v("remarkable-figure-plugin")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("math")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-math"
    }
  }, [_vm._v("markdown-it-math")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("katex")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it-katex"
    }
  }, [_vm._v("markdown-it-katex")])]), _vm._v(" "), _c('td')])])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "性能"
    }
  }, [_vm._v("性能 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#性能",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("Fork了"), _c('a', {
    attrs: {
      "href": "https://github.com/rainfore/CommonMark.js#performance"
    }
  }, [_vm._v("CommonMark.js")]), _vm._v("这个仓库，修改了一些脚本，然后跑出如下的评分：")]), _vm._v(" "), _c('p', [_vm._v("测试了不同的Markdown文本，结果显示的是各解析器的每分钟操作数（ops/second）（越高越好）与showdown解析器的比值（因为它基本就是垫底的）。")]), _vm._v(" "), _c('p', [_vm._v("各解析器的版本："), _c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown-it"
    }
  }, [_vm._v("markdown-it@8.3.1")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/remarkable"
    }
  }, [_vm._v("remarkable@1.7.1")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/marked"
    }
  }, [_vm._v("marked@0.3.6")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/showdown"
    }
  }, [_vm._v("showdown@1.7.1")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/commonmark"
    }
  }, [_vm._v("commonmark@0.27.0")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/markdown"
    }
  }, [_vm._v("markdown@0.5.0")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/micromarkdown"
    }
  }, [_vm._v("micromarkdown@0.3.4-a")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/nano-markdown"
    }
  }, [_vm._v("nano-markdown@1.2.0")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("最后求了个平均数，作为直观参考。")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Sample")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("markdown-it")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("remarkable")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("marked")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("showdown")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("commonmark")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("markdown-js")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("micro")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("nano")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("README.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("5.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("10.2")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("5.4")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.7")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("15.5")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-bq-flat.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("17.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("10.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("9.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("12.2")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.2")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("17.2")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-bq-nested.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("24.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("11.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("15.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("16.4")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("79.6")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-code.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("34.2")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("37.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("25.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("9.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("8.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("40.4")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-fences.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("30.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("32.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("31.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("11.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("17.1")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-heading.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("10.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("19.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("7.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("7.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("9.2")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-hr.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("17.4")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("48.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("14.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("12.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("9.5")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-html.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("8.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("12.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.7")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("5.9")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-lheading.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("7.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("16.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("10.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("7.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.2")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("13.3")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-list-flat.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("18.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("29.4")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("11.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("9.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.7")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("24.8")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-list-nested.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("18.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("26.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("9.2")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("67.4")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-ref-flat.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("11.9")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block-ref-nested.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("8.3")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("inline-autolink.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.4")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("5.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("6.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("22.8")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("inline-backticks.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("14.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("18.4")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("7.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("9.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.7")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("25.1")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("inline-em-flat.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("9.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.7")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("8.3")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("inline-em-nested.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.4")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("8.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("8.6")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("inline-em-worst.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("5.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.2")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("6.7")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("inline-entity.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("6.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("6.7")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("10.9")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("inline-escape.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("8.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("10.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.9")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("inline-html.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("6.2")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("6.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("11.1")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("inline-links-flat.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("7.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("4.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("7.0")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("inline-newlines.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("5.2")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("7.7")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1.7")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("9.9")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("lorem1.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("8.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("13.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("9.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("12.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0.2")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("22.7")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("rawtabs.md")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("18.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("15.9")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("10.1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("8.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("3.7")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("17.7")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("平均值")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("11.3")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("14.8")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("8.4")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("6.6")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("2.5")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("19.0")])])])]), _vm._v(" "), _c('p', [_vm._v("从后往前看：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("nano跑分最高，主要原因是功能实现不完整。。")]), _vm._v(" "), _c('li', [_vm._v("micro都跪了，在node下跑不了，原因是代码中居然有"), _c('code', {
    pre: true
  }, [_vm._v("document")]), _vm._v("。。")]), _vm._v(" "), _c('li', [_vm._v("markdown-js比showdown稍微高一些，不过在执行一个样本"), _c('code', {
    pre: true
  }, [_vm._v("inline-links-nested.md")]), _vm._v("陷入了死循环。")]), _vm._v(" "), _c('li', [_vm._v("remarkable在性能上要比markdown-it略胜一筹。")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "markdown-it-vs-remarkable"
    }
  }, [_vm._v("markdown-it vs remarkable "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#markdown-it-vs-remarkable",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("根据前面的比较，最终肯定是在这两者之中作选择。")]), _vm._v(" "), _c('p', [_vm._v("如果你去看两者的GitHub仓库，就会觉得它他们的文档、Demo和API都很像，甚至很多相同的commits。这里就要讲到这两个仓库的狗血剧情了。")]), _vm._v(" "), _c('p', [_vm._v("大概14年底的事情。最先有个叫jonschlinkert的开发者，估计是看chjj的marked不给力，fork了一个仓库，叫remarked。后来改了个不那么山寨的名字，叫remarkable，准备放手大干一场。这前后有几个开发者也帮他提供代码，包括一个叫vitaly，改名后仓库的一血（first commit）也是这位仁兄的。刚开始搞得风生水起，后来好像jonschlinkert比较忙，开发不怎么积极，得罪了vitaly，因为好多代码是vitaly开发的。vitaly一怒之下决定分道扬镳，拉走几个小弟，直接开了个新矿markdown-it，这里有个"), _c('a', {
    attrs: {
      "href": "https://github.com/markdown-it/markdown-it/commit/9afffbaefd4dce87ca609deb9f9b58accc69f032"
    }
  }, [_vm._v("commit")]), _vm._v("就是他改名的证据。后来两人为了仓库的版权还老吵架，这里是一个"), _c('a', {
    attrs: {
      "href": "https://talk.commonmark.org/t/remarkable-vs-markdown-it/1956"
    }
  }, [_vm._v("撕逼现场")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("当然，我们选择解析器肯定不是优先考虑谁正统。就功能、插件和维护性来说，推荐用"), _c('a', {
    attrs: {
      "href": "https://github.com/markdown-it/markdown-it"
    }
  }, [_vm._v("markdown-it")]), _vm._v("。性能上与remarkable比，差得不是很多。")]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  }, [_c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("Markdown")]), _vm._v(" "), _c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("JavaScript")]), _vm._v(" "), _c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("Parser")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

var styleId = 'ICON-FONT-FILE-STYLE';
function createStyleContent(fontConfig) {
    var style = fontConfig||window.ICON_FONT_STYLE,
        fontName = style.name,  srcStr = [];

    for(var name in style){
        var path  = style[name].path,hash = style[name].md5;
        if(style.hasOwnProperty(name)) {
            switch (name) {
                case 'eot':
                    srcStr.push('url("'+path+'?'+hash+'#iefix") format("embedded-opentype")');
                    break;
                case 'woff':
                    srcStr.push('url("'+path+'?'+hash+'") format("woff")');
                    break;
                case 'ttf':
                    srcStr.push('url("'+path+'?'+hash+'") format("truetype")');
                    break;
                case 'svg':
                    srcStr.push('url("'+path+'?'+hash+'#'+fontName+'") format("svg")');
                    break;
                default:
                    break;
            }
        }
    }
    srcStr = srcStr.join(",\n\t");
    return '@font-face {\n\tfont-family: "'+fontName+'";\n\tsrc:'+srcStr+";\n}";
}

function addStyle(fontConfig) {
    var styleTag = document.createElement('style'),headElement  = document.getElementsByTagName('head')[0];
    styleTag.innerHTML = createStyleContent(fontConfig);
    styleTag.id = styleId;
    styleTag.type="text/css";
    if(headElement){
        headElement.appendChild(styleTag);
    }else{
        window.addEventListener('load',() => {
            headElement.appendChild(styleTag);
        })
    }
}

function updateStyle(fontConfig) {
    var styleTag = document.getElementById(styleId);
    if(!styleTag){
        addStyle(fontConfig);
    }else{
        styleTag.innerHTML = createStyleContent(fontConfig);
    }
}

module.exports= function() {
    if(window.HAS_CREATE_FONT_STYLE){
        return;
    }
    window.ICON_FONT_STYLE && addStyle();
    window.HAS_CREATE_FONT_STYLE = true;
}
if(false){
    window.ICON_FONT_STYLE && (window.ICON_FONT_STYLE.update = updateStyle);
}


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);

/***/ })

});/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({});
                                }