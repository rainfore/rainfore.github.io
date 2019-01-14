webpackJsonp([32],{"R/Zj":function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r={render:function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("u-article",[t("h1",[a._v("JavaScript中正则表达式的应用")]),t("div",{staticClass:"u-article_meta"},[a._v("2015-01-05")]),t("p",[a._v("本文只讲述正则表达式在JavaScript中的使用。")]),t("h3",{attrs:{id:"创建正则对象"}},[a._v("创建正则对象 "),t("a",{staticClass:"header-anchor",attrs:{href:"#创建正则对象","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("h4",{attrs:{id:"使用RegExp构造器函数"}},[a._v("使用RegExp构造器函数 "),t("a",{staticClass:"header-anchor",attrs:{href:"#使用RegExp构造器函数","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("格式为"),t("code",{pre:!0},[a._v("new RegExp(pattern[, flags])")]),a._v("，"),t("code",{pre:!0},[a._v("pattern")]),a._v("为正则表达式的字面量，"),t("code",{pre:!0},[a._v("flags")]),a._v("为正则表达式的标志。示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("var")]),a._v(" reg = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[a._v("RegExp")]),a._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'\\d+'")]),a._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'g'")]),a._v(");")])]),t("p",[a._v("如果指定标志，它可以是下面值中的一个或多个：")]),t("ul",[t("li",[t("code",{pre:!0},[a._v("i")]),a._v("：忽略大小写。")]),t("li",[t("code",{pre:!0},[a._v("m")]),a._v("：多行匹配，表示查找换行符两端的潜在匹配，影响正则中的"),t("code",{pre:!0},[a._v("^")]),a._v("、"),t("code",{pre:!0},[a._v("$")]),a._v("符号。如果加上该标志，则"),t("code",{pre:!0},[a._v("^")]),a._v("表示行起始符，"),t("code",{pre:!0},[a._v("$")]),a._v("表示行结束符；如果不加该标志，则"),t("code",{pre:!0},[a._v("^")]),a._v("表示整个字符串的起始符，"),t("code",{pre:!0},[a._v("$")]),a._v("表示整个字符串的结束符。一般在编辑器中的正则表达式是支持多行匹配的。")]),t("li",[t("code",{pre:!0},[a._v("g")]),a._v("：全局匹配，表示该表达式将用来在输入字符串中查找所有可能的匹配，返回的结果可以是多个。如果不加该标志，则最多只会匹配一个。")])]),t("p",[a._v("标志的具体作用会在后面的例子中体现。")]),t("h4",{attrs:{id:"使用Perl风格的文本格式"}},[a._v("使用Perl风格的文本格式 "),t("a",{staticClass:"header-anchor",attrs:{href:"#使用Perl风格的文本格式","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("格式为"),t("code",{pre:!0},[a._v("/pattern/flags")]),a._v("。示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("var")]),a._v(" reg = "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/\\d+/g")]),a._v(";")])]),t("h6",{attrs:{id:"注意"}},[a._v("注意 "),t("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("文本格式中的参数不要使用引号，而构造器函数的参数则要使用引号。")]),t("h3",{attrs:{id:"几个和正则表达式有关的函数"}},[a._v("几个和正则表达式有关的函数 "),t("a",{staticClass:"header-anchor",attrs:{href:"#几个和正则表达式有关的函数","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("h4",{attrs:{id:"compile"}},[a._v("compile "),t("a",{staticClass:"header-anchor",attrs:{href:"#compile","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[t("code",{pre:!0},[a._v("regExp.compile(pattern[, flags])")]),a._v("：将正则表达式编译为内部格式，从而更快地执行。示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("var")]),a._v(" reg = "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/CAT/")]),a._v(";\nreg.compile("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'\\d+'")]),a._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'g'")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// undefined")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[a._v("console")]),a._v(".log(reg);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// /\\d+/g")])])]),t("p",[a._v("这个函数其实没啥用，想当于")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("var")]),a._v(" reg = "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/\\d+/g")]),a._v(";")])]),t("p",[a._v("所以忘记它吧(:QQ:再见:)。。")]),t("h4",{attrs:{id:"test"}},[a._v("test "),t("a",{staticClass:"header-anchor",attrs:{href:"#test","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[t("code",{pre:!0},[a._v("regExp.test(string)")]),a._v("：测试正则表达式能否匹配该字符串，返回Boolean值。")]),t("p",[a._v("这个函数是最简单也是最常用的。示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[a._v("/\\d+/.test('123,cat,456,Cat,789');    // true\n/789/.test('123,cat,456,Cat,789');    // false")])]),t("h5",{attrs:{id:"标志i的作用"}},[a._v("标志i的作用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#标志i的作用","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[a._v("/CAT/.test("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// false")]),a._v("\n/CAT/i.test("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// true")])])]),t("p",[a._v("该标志在其它函数中与"),t("code",{pre:!0},[a._v("test")]),a._v("相同，不再详述。")]),t("h5",{attrs:{id:"标志m的作用"}},[a._v("标志m的作用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#标志m的作用","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[a._v("/^cat/.test("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123\\ncat\\n456\\nCat\\n789'")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// false")]),a._v("\n/^cat/m.test("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123\\ncat\\n456\\nCat\\n789'")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// true")])])]),t("p",[a._v("该标志在其它函数中与"),t("code",{pre:!0},[a._v("test")]),a._v("相同，不再详述。")]),t("h5",{attrs:{id:"标志g的作用"}},[a._v("标志g的作用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#标志g的作用","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("加与不加没有区别。")]),t("h4",{attrs:{id:"exec"}},[a._v("exec "),t("a",{staticClass:"header-anchor",attrs:{href:"#exec","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[t("code",{pre:!0},[a._v("regExp.exec(string)")]),a._v("：返回正则表达式匹配该字符串的结果，如果匹配不到则返回"),t("code",{pre:!0},[a._v("null")]),a._v("。")]),t("p",[a._v("如果匹配成功，则返回一个数组对象，该对象的第0项是整个正则表达式所匹配的结果，后续项是正则表达式中各个捕获分组匹配的结果，index项是匹配的位置，input项是原参数中的字符串。")]),t("p",[a._v("这个函数是最复杂的(:晕:)，如果不好理解可以先跳过，看后面的几个函数。")]),t("p",[a._v("示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[a._v("/\\d+/.exec('123,cat,456,Cat,789');    // [\"123\", index: 0, input: \"123,cat,456,Cat,789\"]\n/789/.exec('123,cat,456,Cat,789');    // null")])]),t("p",[a._v("下面是一个正则表达式中包含捕获分组的例子：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[a._v("/(c)at/i.exec("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["cat", "c", index: 4, input: "123,cat,456,Cat,789"]')])])]),t("h5",{attrs:{id:"标志g的作用-2"}},[a._v("标志g的作用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#标志g的作用-2","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("如果正则表达式没有设置"),t("code",{pre:!0},[a._v("g")]),a._v("，那么"),t("code",{pre:!0},[a._v("exec")]),a._v("方法不会对正则表达式有任何的影响，如果设置了"),t("code",{pre:!0},[a._v("g")]),a._v("，那么"),t("code",{pre:!0},[a._v("exec")]),a._v("执行之后会更新正则表达式的"),t("code",{pre:!0},[a._v("lastIndex")]),a._v("属性，表示本次匹配后，所匹配字符串的下一个字符的索引，下一次再用这个正则表达式匹配字符串的时候就会从上次的"),t("code",{pre:!0},[a._v("lastIndex")]),a._v("属性开始匹配。")]),t("p",[a._v("示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("var")]),a._v(" reg = "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/\\d+/g")]),a._v(",\n    str = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(";\n\nreg.exec(str);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["123", index: 0, input: "123,cat,456,Cat,789"]')]),a._v("\nreg.exec(str);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["456", index: 8, input: "123,cat,456,Cat,789"]')]),a._v("\nreg.exec(str);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["789", index: 16, input: "123,cat,456,Cat,789"]')]),a._v("\nreg.exec(str);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// null")])])]),t("p",[a._v("经常用while语句改写上面的例子：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("var")]),a._v(" reg = "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/\\d+/g")]),a._v(",\n    str = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(",\n    cap;\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("while")]),a._v("(cap = reg.exec(str))\n\t"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[a._v("console")]),a._v(".log(cap);\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["123", index: 0, input: "123,cat,456,Cat,789"]')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["456", index: 8, input: "123,cat,456,Cat,789"]')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["789", index: 16, input: "123,cat,456,Cat,789"]')])])]),t("p",[a._v("下面是正则表达式中包含捕获分组的例子：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("var")]),a._v(" reg = "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/(c)at/ig")]),a._v(",\n    str = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(";\n\nreg.exec(str);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["cat", "c", index: 4, input: "123,cat,456,Cat,789"]')]),a._v("\nreg.exec(str);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["Cat", "C", index: 12, input: "123,cat,456,Cat,789"]')]),a._v("\nreg.exec(str);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// null")])])]),t("p",[a._v("下面是正则表达式中三个标志同时使用的例子：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("var")]),a._v(" reg = "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/^cat$/img")]),a._v(",\n    str = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123\\ncat\\n456\\nCat\\n789'")]),a._v(";\n\nreg.exec(str);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["cat", index: 4, input: "123\\ncat\\n456\\nCat\\n789"]')]),a._v("\nreg.exec(str);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["Cat", index: 12, input: "123\\ncat\\n456\\nCat\\n789"]')]),a._v("\nreg.exec(str);    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// null")])])]),t("h4",{attrs:{id:"search"}},[a._v("search "),t("a",{staticClass:"header-anchor",attrs:{href:"#search","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[t("code",{pre:!0},[a._v("string.search(regExp)")]),a._v("：返回正则表达式第一次匹配的位置，匹配不到则返回"),t("code",{pre:!0},[a._v("-1")]),a._v("，类似"),t("code",{pre:!0},[a._v("string.indexOf()")]),a._v("。示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(".search("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/cat/")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// 4")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(".search("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/789/")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v("// -1")])])]),t("h5",{attrs:{id:"标志g的作用-3"}},[a._v("标志g的作用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#标志g的作用-3","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("加与不加没有区别。")]),t("h4",{attrs:{id:"match"}},[a._v("match "),t("a",{staticClass:"header-anchor",attrs:{href:"#match","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[t("code",{pre:!0},[a._v("string.match(regExp)")]),a._v("：将匹配的字符串结果以数组的方式返回。")]),t("p",[a._v("这个函数也是很常用的。示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(".match("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/\\d+/")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["123"]')])])]),t("h5",{attrs:{id:"标志g的作用-4"}},[a._v("标志g的作用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#标志g的作用-4","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("如果没有设置"),t("code",{pre:!0},[a._v("g")]),a._v("，则"),t("code",{pre:!0},[a._v("match")]),a._v("返回的结果和"),t("code",{pre:!0},[a._v("exec")]),a._v("相同。但是如果正则表达式设置了"),t("code",{pre:!0},[a._v("g")]),a._v("修饰符，则"),t("code",{pre:!0},[a._v("match")]),a._v("和"),t("code",{pre:!0},[a._v("exec")]),a._v("的行为就不一样了。在"),t("code",{pre:!0},[a._v("match")]),a._v("中设置了"),t("code",{pre:!0},[a._v("g")]),a._v("修饰符的正则表达式在完成一次成功匹配后不会停止，会继续找到所有可以匹配到的字符。")]),t("p",[a._v("示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(".match("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/\\d+/g")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["123", "456", "789"]')])])]),t("p",[a._v("下面是正则表达式中三个标志同时使用的例子：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123\\ncat\\n456\\nCat\\n789'")]),a._v(".match("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/^cat$/img")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["cat", "Cat"]')])])]),t("h4",{attrs:{id:"split"}},[a._v("split "),t("a",{staticClass:"header-anchor",attrs:{href:"#split","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[t("code",{pre:!0},[a._v("string.split(regExp)")]),a._v("：返回按照正则表达式匹配分割后的数组。示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(".split("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/,cat,/i")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// ["123", "456", "789"]')])])]),t("h5",{attrs:{id:"标志g的作用-5"}},[a._v("标志g的作用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#标志g的作用-5","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("加与不加没有区别。")]),t("h4",{attrs:{id:"replace"}},[a._v("replace "),t("a",{staticClass:"header-anchor",attrs:{href:"#replace","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[t("code",{pre:!0},[a._v("string.replace(regExp, replacement)")]),a._v("：它的作用是将字符串中匹配正则表达式的部分用"),t("code",{pre:!0},[a._v("replacement")]),a._v("替换，可以是字符串，也可以是函数。")]),t("p",[a._v("这个函数很强大，一但学会了用起来很风骚(:酷:)！示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(".replace("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/\\d+/")]),a._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'000'")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// "000,cat,456,Cat,789"')])])]),t("h6",{attrs:{id:"注意-2"}},[a._v("注意 "),t("a",{staticClass:"header-anchor",attrs:{href:"#注意-2","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("原字符串并不会被修改，而是替换结果作为返回值被返回。")]),t("h5",{attrs:{id:"标志g的作用-6"}},[a._v("标志g的作用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#标志g的作用-6","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("如果设置"),t("code",{pre:!0},[a._v("g")]),a._v("修饰符，会替换掉所有匹配的部分。示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(".replace("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/\\d+/g")]),a._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'000'")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// "000,cat,000,Cat,000"')])])]),t("h5",{attrs:{id:"使用-引用捕获分组匹配的结果"}},[a._v("使用$引用捕获分组匹配的结果 "),t("a",{staticClass:"header-anchor",attrs:{href:"#使用-引用捕获分组匹配的结果","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[a._v("就像在正则表达式里面我们可以使用"),t("code",{pre:!0},[a._v("\\1")]),a._v("来引用第一个捕获分组所匹配的结果一样，我们在"),t("code",{pre:!0},[a._v("replace")]),a._v("函数的替换字符串里也可以使用"),t("code",{pre:!0},[a._v("$1")]),a._v("来引用相同的内容。示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(".replace("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/(\\d)\\d(\\d)/g")]),a._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'$10$2'")]),a._v(");    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// "103,cat,406,Cat,709"')])])]),t("h5",{attrs:{id:"使用函数"}},[a._v("使用函数 "),t("a",{staticClass:"header-anchor",attrs:{href:"#使用函数","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("p",[t("code",{pre:!0},[a._v("replacement")]),a._v("可以是函数，这时"),t("code",{pre:!0},[a._v("replace")]),a._v("的功能就更加强大了(:酷:)(:酷:)。函数的第一个参数是整个正则表达式所匹配的结果，后续参数是正则表达式中各个捕获分组匹配的结果，倒数第二个参数为"),t("code",{pre:!0},[a._v("index")]),a._v("项，倒数第一个参数为"),t("code",{pre:!0},[a._v("input")]),a._v("项，和"),t("code",{pre:!0},[a._v("exec")]),a._v("的结果类似，函数需要返回替换的结果。")]),t("p",[a._v("示例如下：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'123,cat,456,Cat,789'")]),a._v(".replace("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[a._v("/(\\d)\\d(\\d)/g")]),a._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("function")]),a._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[a._v("m, $"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v(", $"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("2")])]),a._v(") ")]),a._v("{\n\t"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v(" * $"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("2")]),a._v(";\n});    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[a._v('// "3,cat,24,Cat,63"')])])]),t("hr"),t("h6",{attrs:{id:"参考"}},[a._v("参考 "),t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true",target:"_blank"}},[a._v("¶")])]),t("ul",[t("li",[t("a",{attrs:{href:"http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp",target:"_blank"}},[a._v("[W3School] JavaScript RegExp 对象")])]),t("li",[t("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_7256fe8f01017poa.html",target:"_blank"}},[a._v("http://blog.sina.com.cn/s/blog_7256fe8f01017poa.html")])]),t("li",[t("a",{attrs:{href:"http://www.blog.lty0311.com/article/685.html",target:"_blank"}},[a._v("http://www.blog.lty0311.com/article/685.html")])]),t("li",[t("a",{attrs:{href:"http://www.cnblogs.com/shunyao8210/archive/2008/11/13/1332591.html",target:"_blank"}},[a._v("http://www.cnblogs.com/shunyao8210/archive/2008/11/13/1332591.html")])])]),t("p",{staticClass:"u-article_footer"},[t("span",{staticClass:"u-article_tag"},[a._v("JavaScript")]),t("span",{staticClass:"u-article_tag"},[a._v("正则表达式")])])])},staticRenderFns:[]},e=t("OLXp")(null,r,!1,null,null,null);s.default=e.exports}});