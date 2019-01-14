webpackJsonp([25],{Rz5M:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("u-article",[i("h1",[t._v("几款Markdown的JS解析器对比")]),i("div",{staticClass:"u-article_meta"},[t._v("2017-06-23")]),i("p",[t._v("这些年，Markdown由于其容易上手、方便阅读的特色，基本上坐稳了网络标记语言的江山，在各网站中得到了广泛应用。相应JavaScript解析器也是此起彼伏，让我们这些前端程序员难以挑选。今天专门在GitHub上找到几款活跃的Markdown的JS解析器，在这里统一作个比较。")]),i("p",[t._v("先说结论：踩完各种坑之后，推荐使用"),i("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank"}},[t._v("markdown-it")]),t._v("。")]),i("h2",{attrs:{id:"仓库信息"}},[t._v("仓库信息 "),i("a",{staticClass:"header-anchor",attrs:{href:"#仓库信息","aria-hidden":"true",target:"_blank"}},[t._v("¶")])]),i("table",[i("thead",[i("tr",[i("th",[t._v("Repo")]),i("th",[t._v("Travis CI")]),i("th",[t._v("NPM Version")]),i("th",[t._v("Dependencies")]),i("th",[t._v("`.min` File Size")]),i("th",[t._v("Stars")]),i("th",[t._v("Open Issues")]),i("th",[t._v("Last Commit")])])]),i("tbody",[i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/markdown-it/markdown-it"}},[t._v("markdown-it")])]),i("td",[i("img",{attrs:{src:"https://img.shields.io/travis/markdown-it/markdown-it.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/npm/v/markdown-it.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/david/markdown-it/markdown-it.svg?maxAge=3600&style=flat-square&label=deps"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/size/markdown-it/markdown-it/dist/markdown-it.min.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/stars/markdown-it/markdown-it.svg?maxAge=3600&style=social&label=%E2%98%85"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/issues-raw/markdown-it/markdown-it.svg?maxAge=3600&style=flat-square"}})]),i("td",[t._v("2017-06-20")])]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/jonschlinkert/remarkable"}},[t._v("remarkable")])]),i("td",[i("img",{attrs:{src:"https://img.shields.io/travis/jonschlinkert/remarkable.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/npm/v/remarkable.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/david/jonschlinkert/remarkable.svg?maxAge=3600&style=flat-square&label=deps"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/size/jonschlinkert/remarkable/dist/remarkable.min.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/stars/jonschlinkert/remarkable.svg?maxAge=3600&style=social&label=%E2%98%85"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/issues-raw/jonschlinkert/remarkable.svg?maxAge=3600&style=flat-square"}})]),i("td",[t._v("2017-05-22")])]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/chjj/marked"}},[t._v("marked")])]),i("td",[i("img",{attrs:{src:"https://img.shields.io/travis/chjj/marked.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/npm/v/marked.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/david/chjj/marked.svg?maxAge=3600&style=flat-square&label=deps"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/size/chjj/marked/marked.min.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/stars/chjj/marked.svg?maxAge=3600&style=social&label=%E2%98%85"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/issues-raw/chjj/marked.svg?maxAge=3600&style=flat-square"}})]),i("td",[t._v("2017-01-21")])]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/showdownjs/showdown"}},[t._v("showdown")])]),i("td",[i("img",{attrs:{src:"https://img.shields.io/travis/showdownjs/showdown.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/npm/v/showdown.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/david/showdownjs/showdown.svg?maxAge=3600&style=flat-square&label=deps"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/size/showdownjs/showdown/dist/showdown.min.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/stars/showdownjs/showdown.svg?maxAge=3600&style=social&label=%E2%98%85"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/issues-raw/showdownjs/showdown.svg?maxAge=3600&style=flat-square"}})]),i("td",[t._v("2017-06-12")])]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/jgm/commonmark.js"}},[t._v("commonmark")])]),i("td",[i("img",{attrs:{src:"https://img.shields.io/travis/jgm/commonmark.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/npm/v/commonmark.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/david/jgm/commonmark.js.svg?maxAge=3600&style=flat-square&label=deps"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/size/jgm/commonmark.js/dist/commonmark.min.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/stars/jgm/commonmark.js.svg?maxAge=3600&style=social&label=%E2%98%85"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/issues-raw/jgm/commonmark.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[t._v("2017-01-08")])]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/evilstreak/markdown-js"}},[t._v("markdown-js")])]),i("td",[i("img",{attrs:{src:"https://img.shields.io/travis/evilstreak/markdown-js.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/npm/v/markdown.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/david/evilstreak/markdown-js.svg?maxAge=3600&style=flat-square&label=deps"}})]),i("td",[t._v("49.77 kB")]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/stars/evilstreak/markdown-js.svg?maxAge=3600&style=social&label=%E2%98%85"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/issues-raw/evilstreak/markdown-js.svg?maxAge=3600&style=flat-square"}})]),i("td",[t._v("2017-06-20")])]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/SimonWaldherr/micromarkdown.js"}},[t._v("micromarkdown")])]),i("td",[i("img",{attrs:{src:"https://img.shields.io/travis/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/npm/v/micromarkdown.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/david/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=flat-square&label=deps"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/size/SimonWaldherr/micromarkdown.js/dist/micromarkdown.min.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/stars/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=social&label=%E2%98%85"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/issues-raw/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[t._v("2016-03-19")])]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/Holixus/nano-markdown"}},[t._v("nano-markdown")])]),i("td",[i("img",{attrs:{src:"https://img.shields.io/travis/Holixus/nano-markdown.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/npm/v/nano-markdown.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/david/Holixus/nano-markdown.svg?maxAge=3600&style=flat-square&label=deps"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/size/Holixus/nano-markdown/dist/nanomd.min.js.svg?maxAge=3600&style=flat-square"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/stars/Holixus/nano-markdown.svg?maxAge=3600&style=social&label=%E2%98%85"}})]),i("td",[i("img",{attrs:{src:"https://img.shields.io/github/issues-raw/Holixus/nano-markdown.svg?maxAge=3600&style=flat-square"}})]),i("td",[t._v("2016-03-16")])])])]),i("ul",[i("li",[t._v("marked以前很火，从13k的stars可以看出这点，后来作者不维护了，现在有507个issues还没关，所以不建议使用。")])]),i("h2",{attrs:{id:"功能"}},[t._v("功能 "),i("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true",target:"_blank"}},[t._v("¶")])]),i("table",[i("thead",[i("tr",[i("th",{attrs:{rowspan:"2"}},[t._v("Repo")]),i("th",[i("a",{attrs:{href:"https://github.com/jgm/commonmark"}},[t._v("CommonMark")]),t._v("(核心功能)")]),i("th",{attrs:{colspan:"2"}},[i("a",{attrs:{href:"https://github.github.com/gfm"}},[t._v("GFM")]),t._v("(新增)")]),i("th",[i("a",{attrs:{href:"https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide"}},[t._v("MultiMarkdown")]),t._v("(新增)，"),i("a",{attrs:{href:"https://rawgit.com/fletcher/human-markdown-reference/master/index.html"}},[t._v("Guide")])])]),i("tr",[i("th",[t._v("标题、段落、链接、图片"),i("br"),t._v("列表、引用块、代码块等")]),i("th",[t._v("删除线、自动链接"),i("br"),t._v("表格、任务列表")]),i("th",[t._v("语法突出显示")]),i("th",[t._v("元数据、交叉引用、图片扩展"),i("br"),t._v("脚注、定义列表、数学、附录等")])])]),i("tbody",[i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/markdown-it/markdown-it"}},[t._v("markdown-it")])]),i("td",[t._v("✓")]),i("td",[t._v("✓")]),i("td",[t._v("✓")]),i("td",[t._v("部分支持")])]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/jonschlinkert/remarkable"}},[t._v("remarkable")])]),i("td",[t._v("✓")]),i("td",[t._v("✓")]),i("td",[t._v("✓")]),i("td",[t._v("部分支持")])]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/chjj/marked"}},[t._v("marked")])]),i("td",[t._v("✓")]),i("td",[t._v("✓")]),i("td",[t._v("✓")]),i("td")]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/showdownjs/showdown"}},[t._v("showdown")])]),i("td",[t._v("✓")]),i("td",[t._v("✓")]),i("td"),i("td")]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/jgm/commonmark.js"}},[t._v("commonmark")])]),i("td",[t._v("✓")]),i("td"),i("td"),i("td")]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/evilstreak/markdown-js"}},[t._v("markdown-js")])]),i("td",[i("muted",[t._v("不支持代码块")])],1),i("td"),i("td"),i("td")]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/SimonWaldherr/micromarkdown.js"}},[t._v("micromarkdown")])]),i("td",[i("muted",[t._v("功能不全😂")])],1),i("td"),i("td"),i("td")]),i("tr",[i("td",[i("a",{attrs:{href:"https://github.com/Holixus/nano-markdown"}},[t._v("nano-markdown")])]),i("td",[i("muted",[t._v("功能不全😂")])],1),i("td"),i("td"),i("td")])])]),i("p",[t._v("这里有两个链接，可以比较各种Markdown解析器的生成结果："),i("a",{attrs:{href:"/Skills/Web前端/20170623~几款Markdown的JS解析器对比/test.html",target:"_blank"}},[t._v("test.html")]),t._v(", "),i("a",{attrs:{href:"https://babelmark.github.io",target:"_blank"}},[t._v("babelmark")])]),i("p",[t._v("对于表格，从下往上看：")]),i("ul",[i("li",[t._v("最后两个库就是来刷存在感的，核心功能都支持的有问题，文件再小又能怎么样？")]),i("li",[t._v("markdown-js这个库做得一般，扩展性比较差，可惜占用了markdown这个npm包。。")]),i("li",[t._v("commonmark是一个目前比较通用的Markdown核心功能标准。")]),i("li",[t._v("markdown-it和remarkable两者提供了plugin机制，对高级Markdown扩展都支持得比较好，不过markdown-it比remarkable的插件要多得多。参见下表：")])]),i("table",[i("thead",[i("tr",[i("th",[t._v("功能")]),i("th",[t._v("markdown-it")]),i("th",[t._v("remarkable")])])]),i("tbody",[i("tr",[i("td",[t._v("sub script")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-sub",target:"_blank"}},[t._v("markdown-it-sub")])]),i("td",[t._v("✓")])]),i("tr",[i("td",[t._v("super script")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-sup",target:"_blank"}},[t._v("markdown-it-sup")])]),i("td",[t._v("✓")])]),i("tr",[i("td",[t._v("insert")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-ins",target:"_blank"}},[t._v("markdown-it-ins")])]),i("td",[t._v("✓")])]),i("tr",[i("td",[t._v("mark")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-mark",target:"_blank"}},[t._v("markdown-it-mark")])]),i("td",[t._v("✓")])]),i("tr",[i("td",[t._v("abbreviation")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-abbr",target:"_blank"}},[t._v("markdown-it-abbr")])]),i("td",[t._v("✓")])]),i("tr",[i("td",[t._v("footnote")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-footnote",target:"_blank"}},[t._v("markdown-it-footnote")])]),i("td",[t._v("✓")])]),i("tr",[i("td",[t._v("definition list")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-deflist",target:"_blank"}},[t._v("markdown-it-deflist")])]),i("td")]),i("tr",[i("td",[t._v("meta data")]),i("td"),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/remarkable-meta",target:"_blank"}},[t._v("remarkable-meta")])])]),i("tr",[i("td",[t._v("emoji")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-emoji",target:"_blank"}},[t._v("markdown-it-emoji")])]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/remarkable-emoji",target:"_blank"}},[t._v("remarkable-emoji")])])]),i("tr",[i("td",[t._v("link attributes")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-link-attributes",target:"_blank"}},[t._v("markdown-it-link-attributes")])]),i("td")]),i("tr",[i("td",[t._v("custom container")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-container",target:"_blank"}},[t._v("markdown-it-container")])]),i("td")]),i("tr",[i("td",[t._v("task lists")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-task-lists",target:"_blank"}},[t._v("markdown-it-task-lists")])]),i("td")]),i("tr",[i("td",[t._v("header anchor")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-anchor",target:"_blank"}},[t._v("markdown-it-anchor")])]),i("td")]),i("tr",[i("td",[t._v("table of contents")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-table-of-contents",target:"_blank"}},[t._v("markdown-it-table-of-contents")])]),i("td")]),i("tr",[i("td",[t._v("mentions")]),i("td"),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/remarkable-mentions",target:"_blank"}},[t._v("remarkable-mentions")])])]),i("tr",[i("td",[t._v("attrs")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-attrs",target:"_blank"}},[t._v("markdown-it-attrs")])]),i("td")]),i("tr",[i("td",[t._v("decorate")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-decorate",target:"_blank"}},[t._v("markdown-it-decorate")])]),i("td")]),i("tr",[i("td",[t._v("image size")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-imsize",target:"_blank"}},[t._v("markdown-it-imsize")])]),i("td")]),i("tr",[i("td",[t._v("implicit figures")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-implicit-figures",target:"_blank"}},[t._v("markdown-it-implicit-figures")])]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/remarkable-figure-plugin",target:"_blank"}},[t._v("remarkable-figure-plugin")])])]),i("tr",[i("td",[t._v("math")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-math",target:"_blank"}},[t._v("markdown-it-math")])]),i("td")]),i("tr",[i("td",[t._v("katex")]),i("td",[i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it-katex",target:"_blank"}},[t._v("markdown-it-katex")])]),i("td")])])]),i("h2",{attrs:{id:"性能"}},[t._v("性能 "),i("a",{staticClass:"header-anchor",attrs:{href:"#性能","aria-hidden":"true",target:"_blank"}},[t._v("¶")])]),i("p",[t._v("Fork了"),i("a",{attrs:{href:"https://github.com/rainfore/CommonMark.js#performance",target:"_blank"}},[t._v("CommonMark.js")]),t._v("这个仓库，修改了一些脚本，然后跑出如下的评分：")]),i("p",[t._v("测试了不同的Markdown文本，结果显示的是各解析器的每分钟操作数（ops/second）（越高越好）与showdown解析器的比值（因为它基本就是垫底的）。")]),i("p",[t._v("各解析器的版本："),i("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it",target:"_blank"}},[t._v("markdown-it@8.3.1")]),t._v(", "),i("a",{attrs:{href:"https://www.npmjs.com/package/remarkable",target:"_blank"}},[t._v("remarkable@1.7.1")]),t._v(", "),i("a",{attrs:{href:"https://www.npmjs.com/package/marked",target:"_blank"}},[t._v("marked@0.3.6")]),t._v(", "),i("a",{attrs:{href:"https://www.npmjs.com/package/showdown",target:"_blank"}},[t._v("showdown@1.7.1")]),t._v(", "),i("a",{attrs:{href:"https://www.npmjs.com/package/commonmark",target:"_blank"}},[t._v("commonmark@0.27.0")]),t._v(", "),i("a",{attrs:{href:"https://www.npmjs.com/package/markdown",target:"_blank"}},[t._v("markdown@0.5.0")]),t._v(", "),i("a",{attrs:{href:"https://www.npmjs.com/package/micromarkdown",target:"_blank"}},[t._v("micromarkdown@0.3.4-a")]),t._v(", "),i("a",{attrs:{href:"https://www.npmjs.com/package/nano-markdown",target:"_blank"}},[t._v("nano-markdown@1.2.0")]),t._v("。")]),i("p",[t._v("最后求了个平均数，作为直观参考。")]),i("table",[i("thead",[i("tr",[i("th",[t._v("Sample")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("markdown-it")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("remarkable")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("marked")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("showdown")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("commonmark")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("markdown-js")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("micro")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("nano")])])]),i("tbody",[i("tr",[i("td",[t._v("README.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("5.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("10.2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("5.4")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.7")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("15.5")])]),i("tr",[i("td",[t._v("block-bq-flat.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("17.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("10.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("9.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("17.2")])]),i("tr",[i("td",[t._v("block-bq-nested.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("24.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("11.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("15.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("16.4")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("79.6")])]),i("tr",[i("td",[t._v("block-code.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("34.2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("37.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("25.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("9.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("40.4")])]),i("tr",[i("td",[t._v("block-fences.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("30.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("32.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("31.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("11.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("17.1")])]),i("tr",[i("td",[t._v("block-heading.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("10.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("19.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("7.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("7.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("9.2")])]),i("tr",[i("td",[t._v("block-hr.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("17.4")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("48.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("14.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("9.5")])]),i("tr",[i("td",[t._v("block-html.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.7")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("5.9")])]),i("tr",[i("td",[t._v("block-lheading.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("7.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("16.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("10.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("7.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("13.3")])]),i("tr",[i("td",[t._v("block-list-flat.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("18.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("29.4")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("11.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("9.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.7")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("24.8")])]),i("tr",[i("td",[t._v("block-list-nested.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("18.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("26.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("9.2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("67.4")])]),i("tr",[i("td",[t._v("block-ref-flat.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("11.9")])]),i("tr",[i("td",[t._v("block-ref-nested.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8.3")])]),i("tr",[i("td",[t._v("inline-autolink.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.4")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("5.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("6.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("22.8")])]),i("tr",[i("td",[t._v("inline-backticks.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("14.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("18.4")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("7.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("9.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.7")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("25.1")])]),i("tr",[i("td",[t._v("inline-em-flat.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("9.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.7")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8.3")])]),i("tr",[i("td",[t._v("inline-em-nested.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.4")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8.6")])]),i("tr",[i("td",[t._v("inline-em-worst.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("5.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("6.7")])]),i("tr",[i("td",[t._v("inline-entity.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("6.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("6.7")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("10.9")])]),i("tr",[i("td",[t._v("inline-escape.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("10.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.9")])]),i("tr",[i("td",[t._v("inline-html.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("6.2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("6.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("11.1")])]),i("tr",[i("td",[t._v("inline-links-flat.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("7.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("7.0")])]),i("tr",[i("td",[t._v("inline-newlines.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("5.2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("7.7")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1.7")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("9.9")])]),i("tr",[i("td",[t._v("lorem1.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("13.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("9.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0.2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("22.7")])]),i("tr",[i("td",[t._v("rawtabs.md")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("18.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("15.9")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("10.1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("3.7")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("17.7")])]),i("tr",[i("td",[t._v("平均值")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("11.3")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("14.8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8.4")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("6.6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("2.5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("19.0")])])])]),i("p",[t._v("从后往前看：")]),i("ul",[i("li",[t._v("nano跑分最高，主要原因是功能实现不完整。。")]),i("li",[t._v("micro都跪了，在node下跑不了，原因是代码中居然有"),i("code",{pre:!0},[t._v("document")]),t._v("。。")]),i("li",[t._v("markdown-js比showdown稍微高一些，不过在执行一个样本"),i("code",{pre:!0},[t._v("inline-links-nested.md")]),t._v("陷入了死循环。")]),i("li",[t._v("remarkable在性能上要比markdown-it略胜一筹。")])]),i("h2",{attrs:{id:"markdown-it-vs-remarkable"}},[t._v("markdown-it vs remarkable "),i("a",{staticClass:"header-anchor",attrs:{href:"#markdown-it-vs-remarkable","aria-hidden":"true",target:"_blank"}},[t._v("¶")])]),i("p",[t._v("根据前面的比较，最终肯定是在这两者之中作选择。")]),i("p",[t._v("如果你去看两者的GitHub仓库，就会觉得它他们的文档、Demo和API都很像，甚至很多相同的commits。这里就要讲到这两个仓库的狗血剧情了。")]),i("p",[t._v("大概14年底的事情。最先有个叫jonschlinkert的开发者，估计是看chjj的marked不给力，fork了一个仓库，叫remarked。后来改了个不那么山寨的名字，叫remarkable，准备放手大干一场。这前后有几个开发者也帮他提供代码，包括一个叫vitaly，改名后仓库的一血（first commit）也是这位仁兄的。刚开始搞得风生水起，后来好像jonschlinkert比较忙，开发不怎么积极，得罪了vitaly，因为好多代码是vitaly开发的。vitaly一怒之下决定分道扬镳，拉走几个小弟，直接开了个新矿markdown-it，这里有个"),i("a",{attrs:{href:"https://github.com/markdown-it/markdown-it/commit/9afffbaefd4dce87ca609deb9f9b58accc69f032",target:"_blank"}},[t._v("commit")]),t._v("就是他改名的证据。后来两人为了仓库的版权还老吵架，这里是一个"),i("a",{attrs:{href:"https://talk.commonmark.org/t/remarkable-vs-markdown-it/1956",target:"_blank"}},[t._v("撕逼现场")]),t._v("。")]),i("p",[t._v("当然，我们选择解析器肯定不是优先考虑谁正统。就功能、插件和维护性来说，推荐用"),i("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank"}},[t._v("markdown-it")]),t._v("。性能上与remarkable比，差得不是很多。")]),i("p",{staticClass:"u-article_footer"},[i("span",{staticClass:"u-article_tag"},[t._v("Markdown")]),i("span",{staticClass:"u-article_tag"},[t._v("JavaScript")]),i("span",{staticClass:"u-article_tag"},[t._v("Parser")])])])},staticRenderFns:[]},s=i("OLXp")(null,e,!1,null,null,null);a.default=s.exports}});