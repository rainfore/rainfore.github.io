webpackJsonp([25],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6470f54a_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_20151220_md__ = __webpack_require__(155);
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
  __WEBPACK_IMPORTED_MODULE_0__Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6470f54a_hasScoped_false_Projects_GitHub_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_20151220_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("中文网页字体的最佳选择")]), _vm._v(" "), _c('div', {
    staticClass: "u-article_meta"
  }, [_vm._v("2015-12-20")]), _vm._v(" "), _c('p', [_vm._v("本文是一道前端小菜，涉及到的代码只有一句，其实就是为了讲述中文网页中"), _c('code', {
    pre: true
  }, [_vm._v("body {font-family: ...}")]), _vm._v("填哪些字体和怎样填比较好。")]), _vm._v(" "), _c('p', [_vm._v("主要应该注意以下几个方面：")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "中文字体统一使用英文名称"
    }
  }, [_vm._v("中文字体统一使用英文名称 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#中文字体统一使用英文名称",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("尽管我们在操作系统中常常看到宋体、微软雅黑、华文细黑这样的字体名称，但实际上这只是字体的显示名称，而不是字体文件的名称。虽然说在大多数情况下直接使用显示名称也可以，但是在以下两种情况下你的字体声明是无效的：")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_vm._v("用户工作在一些比较极端的环境下。比如说用户安装了中文版的操作系统（这意味着系统有中文字体），但是却切换到了以英文为主要语言。这种情况在那些希望加强英语锻炼的中文用户当中是很常见的。这时候，操作系统很可能无法按照显示名称找到正确的字体。")])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("编码问题。比如CSS文件编码和内部声明编码不一致时，会导致中文字体显示名称乱码，从而操作系统无法识别。")])])]), _vm._v(" "), _c('p', [_vm._v("所以为了省得蛋疼，中文字体统一使用英文名称就行。")]), _vm._v(" "), _c('p', [_vm._v("比如使用：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-css"
    }
  }, [_vm._v("{"), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-family")]), _vm._v(": STHeiti, "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Microsoft YaHei\"")]), _vm._v(", SimSun;}\n")])]), _vm._v(" "), _c('p', [_vm._v("而不使用：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-css"
    }
  }, [_vm._v("{"), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-family")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"华文黑体\"")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"微软雅黑\"")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"宋体\"")]), _vm._v(";}\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "不要忘记声明西文字体"
    }
  }, [_vm._v("不要忘记声明西文字体 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#不要忘记声明西文字体",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("记住这个事实：绝大部分中文字体里包含西文字母，但是基本上都很丑，而西文字体里不包含中文字符。")]), _vm._v(" "), _c('p', [_vm._v("在网页里中英混排是很常见的，你绝对不会喜欢用中文字体显示西文的效果，所以一定不要忘了先声明西文字体，并且西文字体应该在中文字体之前。例如：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-css"
    }
  }, [_vm._v("{"), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-family")]), _vm._v(": Georgia, SimSun;}\n{"), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-family")]), _vm._v(": Arial, "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Microsoft YaHei\"")]), _vm._v(";}\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "补充字体族是个好习惯"
    }
  }, [_vm._v("补充字体族是个好习惯 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#补充字体族是个好习惯",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("当列举的字体都不存在时，你可以让浏览器使用系统默认的字体族。例如：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-css"
    }
  }, [_vm._v("{"), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-family")]), _vm._v(": Georgia, SimSun, serif;}\n{"), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-family")]), _vm._v(": Arial, "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Microsoft YaHei\"")]), _vm._v(", sans-serif;}\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "正文字体应该尽量使用黑体"
    }
  }, [_vm._v("正文字体应该尽量使用黑体 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#正文字体应该尽量使用黑体",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("在数字屏幕时代，屏幕作为文字媒介具有两方面的特点：")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("像素（Pixel）通常是计算机图像的最小的完整采样。屏幕是由一定数量的像素组成的，这一特征使得屏幕作为文字的媒介，并不适宜显示过分细小的字体细节。")]), _vm._v(" "), _c('li', [_vm._v("自发光与反光的媒介与纸张等传统媒介不同，屏幕以自身发光原理的应用来满足读者阅读的需要。作为一种自发光的媒介，屏幕的亮度与光的漫发射作用，以及镜面的屏幕还会产生反光作用，这些都与文字的清晰度和识别性有着直接的关系。")])]), _vm._v(" "), _c('p', [_vm._v("宋体是一款专门为报纸使用而设计的字体，这款字体在报纸上视觉表现良好，字型清晰，阅读流畅。然而由于含有过细笔画的文字和笔画粗细差异较大的字体，在屏幕上显示的时候，容易出现视觉上笔画不连贯等问题，影响文字的阅读效率。目前在常规像素密度的显示屏上还是必须用黑体才能保证正文字号的中文清晰易读。（这里的“宋体”和“黑体”均指字体的一类风格）")]), _vm._v(" "), _c('p', [_vm._v("从字体的样式来看，宋体是衬线的，黑体是非衬线的。所以应该把中文网页正文的"), _c('code', {
    pre: true
  }, [_vm._v("font-family")]), _vm._v("尽量写成以"), _c('code', {
    pre: true
  }, [_vm._v("sans-serif")]), _vm._v("结尾。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "照顾不同的操作系统"
    }
  }, [_vm._v("照顾不同的操作系统 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#照顾不同的操作系统",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("我们先看看各平台最佳中文字体的现状：")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "Windows"
    }
  }, [_vm._v("Windows "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#Windows",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("Windows在Vista之前都以"), _c('strong', [_vm._v("中易宋体")]), _vm._v("（在Windows里显示名称为"), _c('strong', [_vm._v("宋体")]), _vm._v("，英文名为"), _c('strong', [_vm._v("SimSun")]), _vm._v("）为简体中文默认字体。它在正文字号时为点阵，尚可接受，但字号稍大就难以接受了。中易宋体没有粗体，它的西文部分也完全没法用。")]), _vm._v(" "), _c('p', [_vm._v("从Vista开始，微软提供了"), _c('strong', [_vm._v("微软雅黑")]), _vm._v("作为新的简体中文默认字体。这款字体跟上了时代，但褒贬不一。微软雅黑有粗体，西文部分达到了Windows的水准。在自己的网页设计中要不要用微软雅黑来显示正文，这是一大抉择。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "Mac-OS-X"
    }
  }, [_vm._v("Mac OS X "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#Mac-OS-X",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("OS X一直用"), _c('strong', [_vm._v("华文黑体")]), _vm._v("（重组后称"), _c('strong', [_vm._v("黑体-简")]), _vm._v("）作简体中文默认字体，这个字体族有常规体和粗体，西文部分很差劲（和中易宋体西文差的原因倒还不太一样）。")]), _vm._v(" "), _c('p', [_vm._v("从OS X 10.6开始，系统自带了"), _c('strong', [_vm._v("冬青黑体简体中文")]), _vm._v("（该字体在10.7以前没有中文名，叫作"), _c('strong', [_vm._v("Hiragino Sans GB")]), _vm._v("）。这款字体至今没有成为系统的简体中文默认字体，但它是目前OS X上最好的简体中文字体。")]), _vm._v(" "), _c('p', [_vm._v("OS X的字体渲染技术显然是目前所有操作系统中最佳的。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "iOS"
    }
  }, [_vm._v("iOS "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#iOS",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("简体中文字体只有自带的华文黑体（黑体-简）可选。字体渲染风格与OS X类似。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "GNU-Linux"
    }
  }, [_vm._v("GNU/Linux "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#GNU-Linux",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("Linux社区常用的简体中文字体似乎主要有"), _c('strong', [_vm._v("文泉驿点阵宋体")]), _vm._v("、"), _c('strong', [_vm._v("文泉驿正黑")]), _vm._v("和"), _c('strong', [_vm._v("文泉驿微米黑")]), _vm._v("，另有一些人会把Windows或OS X的字体拿去用。文泉驿点阵宋体类似Windows的中易宋体，而文泉驿正黑是在无自由黑体可用的情况下被迫制作的质量不太高的黑体。文泉驿微米黑是Linux社区现有的最佳简体中文字体，但它没有粗体。")]), _vm._v(" "), _c('p', [_vm._v("各Linux发行版默认的字体渲染效果参差不齐，成熟一些的（比如Ubuntu）在某些方面会略强于Windows。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "Android"
    }
  }, [_vm._v("Android "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#Android",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("Android自带支持简体中文的"), _c('strong', [_vm._v("Droid Sans")]), _vm._v("。文泉驿微米黑由Droid Sans衍生而来，主要扩展了它的中文部分"), _c('strong', [_vm._v("Droid Sans Fallback")]), _vm._v("。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "所以"
    }
  }, [_vm._v("所以 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#所以",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("为网页设定字体时，以下目的必须达成：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("对于Windows：在中易宋体和微软雅黑之间二选一。没有微软雅黑的系统会回退到中易宋体。")]), _vm._v(" "), _c('li', [_vm._v("对于Mac OS X：首先使用冬青黑体简体中文。没有冬青黑体简体中文的系统会回退到华文黑体。")]), _vm._v(" "), _c('li', [_vm._v("对于iOS：系统会自动使用华文黑体。")]), _vm._v(" "), _c('li', [_vm._v("对于Linux：首先使用文泉驿微米黑。没有文泉驿微米黑的系统会回退到别的字体。")]), _vm._v(" "), _c('li', [_vm._v("对于Android：系统会自动使用Droid Sans。")])]), _vm._v(" "), _c('p', [_vm._v("所以"), _c('code', {
    pre: true
  }, [_vm._v("font-family")]), _vm._v("属性可以这么写（中文字体之前的"), _c('code', {
    pre: true
  }, [_vm._v("...")]), _vm._v("代表西文字体，根据自己的口味选择就好）：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-css"
    }
  }, [_vm._v("{"), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-family")]), _vm._v(": ..., "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Microsoft YaHei\"")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Hiragino Sans GB\"")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"WenQuanYi Micro Hei\"")]), _vm._v(", sans-serif;}\n")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "补充1"
    }
  }, [_vm._v("补充1 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#补充1",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("为什么不把中易宋体（SimSun）、华文黑体（STHeiti［10.6之前］或Heiti SC［从10.6开始］）和Droid Sans写出来？")]), _vm._v(" "), _c('p', [_vm._v("因为它们是系统默认字体，以上字体都没有的话就会自动调用。除非你的用户中很多人的系统locale都不是中文，否则不必写出STHeiti之类。中易宋体（SimSun）尽管身为宋体，在Windows中却也是简体中文的默认sans-serif字体。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "补充2"
    }
  }, [_vm._v("补充2 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#补充2",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("需要把微软雅黑放在"), _c('code', {
    pre: true
  }, [_vm._v("font-family")]), _vm._v("里中文字体的最前面。")]), _vm._v(" "), _c('p', [_vm._v("如果把冬青黑体简体中文用作的第一个中文字体，对于安装了冬青黑体简体中文的Windows用户来说，因为Windows对PostScript轮廓的字体渲染得很糟糕，效果会几乎没法阅读；而如果把微软雅黑放在冬青黑体简体中文前面，微软雅黑在OS X里的渲染效果起码可以接受，尽管并不舒适。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "补充3"
    }
  }, [_vm._v("补充3 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#补充3",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("如果你不清楚自己对西文字体的口味，可以这样简单设定：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-css"
    }
  }, [_vm._v("{"), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-family")]), _vm._v(": Helvetica, Tahoma, Arial, ...}\n")])]), _vm._v(" "), _c('p', [_vm._v("首先查找Helvetica（Mac），然后查找Tahoma（Win），都找不到就用Arial（Mac&Win）。")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "补充4"
    }
  }, [_vm._v("补充4 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#补充4",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("应当注意的WebKit怪癖：")]), _vm._v(" "), _c('p', [_vm._v("如果你将西文字体设置为Georgia之类的serif字体，即与列表后面的sans-serif中文字体不属于一类，且WebKit内核的UA（OS X的Safari是个典型）找不到你指定的任何中文字体，可能会导致UA用系统默认的 serif中文字体。")]), _vm._v(" "), _c('p', [_vm._v("例如：OS X的Safari遇到了"), _c('code', {
    pre: true
  }, [_vm._v("{font-family: Georgia, sans-serif;}")]), _vm._v("，就会用华文宋体显示中文。所以在某些情况下加上华文黑体也是有必要的。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "综上"
    }
  }, [_vm._v("综上 "), _c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#综上",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")])]), _vm._v(" "), _c('p', [_vm._v("以下案例为最佳实践：")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "v-pre": "",
      "class": "lang-css"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-selector-tag"
    }
  }, [_vm._v("body")]), _vm._v(" {"), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-family")]), _vm._v(": Helvetica, Tahoma, Arial, "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Microsoft YaHei\"")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Hiragino Sans GB\"")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"WenQuanYi Micro Hei\"")]), _vm._v(", sans-serif;}\n")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h6', {
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
      "href": "https://github.com/zenozeng/fonts.css"
    }
  }, [_vm._v("[GitHub] 跨平台 CSS 中文字体解决方案")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://www.youziku.com"
    }
  }, [_vm._v("[有字库] 中文在线字体")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://www.zhihu.com/question/19617163"
    }
  }, [_vm._v("[知乎] 为什么没有很多漂亮的、可用于屏幕显示（而非印刷）的简体中文字体可用？")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://www.zhihu.com/question/19785560"
    }
  }, [_vm._v("[知乎] 常用字体里，哪些更适合于印刷，哪些更适合于屏幕显示，有没有两者兼顾的？")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://www.zhihu.com/question/19680724"
    }
  }, [_vm._v("[知乎] 网页设计中最常用的字体有哪些？（中文和英文）")])])]), _vm._v(" "), _c('h6', {
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
      "href": "https://ruby-china.org/topics/14005"
    }
  }, [_vm._v("Web 中文字体应用指南")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://www.zhihu.com/question/19685531"
    }
  }, [_vm._v("[知乎][肖琦] 为什么很多网站使用微软雅黑？")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://www.zhihu.com/question/19911793"
    }
  }, [_vm._v("[知乎][梁海] 如何保证网页的字体在各平台都尽量显示为最高质量的黑体？")])])]), _vm._v(" "), _c('p', {
    staticClass: "u-article_footer"
  }, [_c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("中文字体")]), _vm._v(" "), _c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("网页字体")]), _vm._v(" "), _c('span', {
    staticClass: "u-article_tag"
  }, [_vm._v("字体")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);

/***/ })

});