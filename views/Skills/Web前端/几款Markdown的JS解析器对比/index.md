2017-06-23

这些年，Markdown由于其容易上手、方便阅读的特色，基本上坐稳了网络标记语言的江山，在各网站中得到了广泛应用。相应JavaScript解析器也是此起彼伏，让我们这些前端程序员难以挑选。今天专门在GitHub上找到几款活跃的Markdown的JS解析器，在这里统一作个比较。

先说结论：踩完各种坑之后，推荐使用[markdown-it](https://github.com/markdown-it/markdown-it)。

## 仓库信息

<table>
    <thead>
        <tr>
            <th>Repo</th>
            <th>Travis CI</th>
            <th>NPM Version</th>
            <th>Dependencies</th>
            <th>`.min` File Size</th>
            <th>Stars</th>
            <th>Open Issues</th>
            <th>Last Commit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://github.com/markdown-it/markdown-it">markdown-it</a></td>
            <td><img src="https://img.shields.io/travis/markdown-it/markdown-it.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/npm/v/markdown-it.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/david/markdown-it/markdown-it.svg?maxAge=3600&style=flat-square&label=deps"></td>
            <td><img src="https://img.shields.io/github/size/markdown-it/markdown-it/dist/markdown-it.min.js.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/github/stars/markdown-it/markdown-it.svg?maxAge=3600&style=social&label=%E2%98%85"></td>
            <td><img src="https://img.shields.io/github/issues-raw/markdown-it/markdown-it.svg?maxAge=3600&style=flat-square"></td>
            <td>2017-06-20</td>
        </tr>
        <tr>
            <td><a href="https://github.com/jonschlinkert/remarkable">remarkable</a></td>
            <td><img src="https://img.shields.io/travis/jonschlinkert/remarkable.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/npm/v/remarkable.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/david/jonschlinkert/remarkable.svg?maxAge=3600&style=flat-square&label=deps"></td>
            <td><img src="https://img.shields.io/github/size/jonschlinkert/remarkable/dist/remarkable.min.js.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/github/stars/jonschlinkert/remarkable.svg?maxAge=3600&style=social&label=%E2%98%85"></td>
            <td><img src="https://img.shields.io/github/issues-raw/jonschlinkert/remarkable.svg?maxAge=3600&style=flat-square"></td>
            <td>2017-05-22</td>
        </tr>
        <tr>
            <td><a href="https://github.com/chjj/marked">marked</a></td>
            <td><img src="https://img.shields.io/travis/chjj/marked.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/npm/v/marked.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/david/chjj/marked.svg?maxAge=3600&style=flat-square&label=deps"></td>
            <td><img src="https://img.shields.io/github/size/chjj/marked/marked.min.js.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/github/stars/chjj/marked.svg?maxAge=3600&style=social&label=%E2%98%85"></td>
            <td><img src="https://img.shields.io/github/issues-raw/chjj/marked.svg?maxAge=3600&style=flat-square"></td>
            <td>2017-01-21</td>
        </tr>
        <tr>
            <td><a href="https://github.com/showdownjs/showdown">showdown</a></td>
            <td><img src="https://img.shields.io/travis/showdownjs/showdown.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/npm/v/showdown.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/david/showdownjs/showdown.svg?maxAge=3600&style=flat-square&label=deps"></td>
            <td><img src="https://img.shields.io/github/size/showdownjs/showdown/dist/showdown.min.js.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/github/stars/showdownjs/showdown.svg?maxAge=3600&style=social&label=%E2%98%85"></td>
            <td><img src="https://img.shields.io/github/issues-raw/showdownjs/showdown.svg?maxAge=3600&style=flat-square"></td>
            <td>2017-06-12</td>
        </tr>
        <tr>
            <td><a href="https://github.com/jgm/commonmark.js">commonmark</a></td>
            <td><img src="https://img.shields.io/travis/jgm/commonmark.js.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/npm/v/commonmark.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/david/jgm/commonmark.js.svg?maxAge=3600&style=flat-square&label=deps"></td>
            <td><img src="https://img.shields.io/github/size/jgm/commonmark.js/dist/commonmark.min.js.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/github/stars/jgm/commonmark.js.svg?maxAge=3600&style=social&label=%E2%98%85"></td>
            <td><img src="https://img.shields.io/github/issues-raw/jgm/commonmark.js.svg?maxAge=3600&style=flat-square"></td>
            <td>2017-01-08</td>
        </tr>
        <tr>
            <td><a href="https://github.com/evilstreak/markdown-js">markdown-js</a></td>
            <td><img src="https://img.shields.io/travis/evilstreak/markdown-js.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/npm/v/markdown.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/david/evilstreak/markdown-js.svg?maxAge=3600&style=flat-square&label=deps"></td>
            <td>49.77 kB</td>
            <td><img src="https://img.shields.io/github/stars/evilstreak/markdown-js.svg?maxAge=3600&style=social&label=%E2%98%85"></td>
            <td><img src="https://img.shields.io/github/issues-raw/evilstreak/markdown-js.svg?maxAge=3600&style=flat-square"></td>
            <td>2017-06-20</td>
        </tr>
        <tr>
            <td><a href="https://github.com/SimonWaldherr/micromarkdown.js">micromarkdown</a></td>
            <td><img src="https://img.shields.io/travis/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/npm/v/micromarkdown.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/david/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=flat-square&label=deps"></td>
            <td><img src="https://img.shields.io/github/size/SimonWaldherr/micromarkdown.js/dist/micromarkdown.min.js.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/github/stars/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=social&label=%E2%98%85"></td>
            <td><img src="https://img.shields.io/github/issues-raw/SimonWaldherr/micromarkdown.js.svg?maxAge=3600&style=flat-square"></td>
            <td>2016-03-19</td>
        </tr>
        <tr>
            <td><a href="https://github.com/Holixus/nano-markdown">nano-markdown</a></td>
            <td><img src="https://img.shields.io/travis/Holixus/nano-markdown.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/npm/v/nano-markdown.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/david/Holixus/nano-markdown.svg?maxAge=3600&style=flat-square&label=deps"></td>
            <td><img src="https://img.shields.io/github/size/Holixus/nano-markdown/dist/nanomd.min.js.svg?maxAge=3600&style=flat-square"></td>
            <td><img src="https://img.shields.io/github/stars/Holixus/nano-markdown.svg?maxAge=3600&style=social&label=%E2%98%85"></td>
            <td><img src="https://img.shields.io/github/issues-raw/Holixus/nano-markdown.svg?maxAge=3600&style=flat-square"></td>
            <td>2016-03-16</td>
        </tr>
    </tbody>
</table>

- marked以前很火，从13k的stars可以看出这点，后来作者不维护了，现在有507个issues还没关，所以不建议使用。

## 功能

<table>
    <thead>
        <tr>
            <th rowspan="2">Repo</th>
            <th>CommonMark(核心功能)</th>
            <th colspan="2">GFM(新增)</th>
            <th>Multi-Markdown(新增)</th>
        </tr>
        <tr>
            <th>标题、段落、链接、图片<br>列表、引用块、代码块等</th>
            <th>删除线、自动链接<br>表格、任务列表</th>
            <th>语法突出显示</th>
            <th>元数据、交叉引用、图片扩展<br>脚注、定义列表、数学、附录等</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://github.com/markdown-it/markdown-it">markdown-it</a></td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
            <td>部分支持</td>
        </tr>
        <tr>
            <td><a href="https://github.com/jonschlinkert/remarkable">remarkable</a></td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
            <td>部分支持</td>
        </tr>
        <tr>
            <td><a href="https://github.com/chjj/marked">marked</a></td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
            <td></td>
        </tr>
        <tr>
            <td><a href="https://github.com/showdownjs/showdown">showdown</a></td>
            <td>✓</td>
            <td>✓</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="https://github.com/jgm/commonmark.js">commonmark</a></td>
            <td>✓</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="https://github.com/evilstreak/markdown-js">markdown-js</a></td>
            <td><muted>不支持代码块</muted></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="https://github.com/SimonWaldherr/micromarkdown.js">micromarkdown</a></td>
            <td><muted>功能不全😂</muted></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="https://github.com/Holixus/nano-markdown">nano-markdown</a></td>
            <td><muted>功能不全😂</muted></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

这里有两个链接，可以比较各种Markdown解析器的生成结果：[test.html](test.html), [babelmark](https://babelmark.github.io)

对于表格，从下往上看：
- 最后两个库就是来刷存在感的，核心功能都支持的有问题，文件再小又能怎么样？
- markdown-js这个库做得一般，扩展性比较差，可惜占用了markdown这个npm包。。
- commonmark是一个目前比较通用的Markdown核心功能标准。
- markdown-it和remarkable两者提供了plugin机制，对高级Markdown扩展都支持得比较好，不过markdown-it比remarkable的插件要多得多。参见下表：

| 功能 | markdown-it | remarkable |
| - | - | - |
| sub script | [markdown-it-sub](https://www.npmjs.com/package/markdown-it-sub) | ✓ |
| super script | [markdown-it-sup](https://www.npmjs.com/package/markdown-it-sup) | ✓ |
| insert | [markdown-it-ins](https://www.npmjs.com/package/markdown-it-ins) | ✓ |
| mark | [markdown-it-mark](https://www.npmjs.com/package/markdown-it-mark) | ✓ |
| abbreviation | [markdown-it-abbr](https://www.npmjs.com/package/markdown-it-abbr) | ✓ |
| footnote | [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote) | ✓ |
| definition list | [markdown-it-deflist](https://www.npmjs.com/package/markdown-it-deflist) |   |
| meta data |   | [remarkable-meta](https://www.npmjs.com/package/remarkable-meta) |
| emoji | [markdown-it-emoji](https://www.npmjs.com/package/markdown-it-emoji) | [remarkable-emoji](https://www.npmjs.com/package/remarkable-emoji) |
| link attributes | [markdown-it-link-attributes](https://www.npmjs.com/package/markdown-it-link-attributes) | |
| custom container | [markdown-it-container](https://www.npmjs.com/package/markdown-it-container) | |
| task lists | [markdown-it-task-lists](https://www.npmjs.com/package/markdown-it-task-lists) | |
| header anchor | [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor) | |
| table of contents | [markdown-it-table-of-contents](https://www.npmjs.com/package/markdown-it-table-of-contents) | |
| mentions |  | [remarkable-mentions](https://www.npmjs.com/package/remarkable-mentions) |
| attrs | [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs) | |
| decorate | [markdown-it-decorate](https://www.npmjs.com/package/markdown-it-decorate) | |
| image size | [markdown-it-imsize](https://www.npmjs.com/package/markdown-it-imsize) | |
| implicit figures | [markdown-it-implicit-figures](https://www.npmjs.com/package/markdown-it-implicit-figures) | [remarkable-figure-plugin](https://www.npmjs.com/package/remarkable-figure-plugin) |
| math | [markdown-it-math](https://www.npmjs.com/package/markdown-it-math) | |
| katex | [markdown-it-katex](https://www.npmjs.com/package/markdown-it-katex) | |

## 性能

Clone了[CommonMark.js](https://github.com/jgm/CommonMark.js#performance)这个仓库，修改了一些脚本，然后跑出如下的评分：

测试了不同的Markdown文本，结果显示的是各解析器的每分钟操作数（ops/second）（越高越好）与showdown解析器的比值（因为它基本就是垫底的）。

各解析器的版本：markdown-it@8.3.1, remarkable@1.7.1, marked@0.3.6, showdown@1.7.1, commonmark@0.27.0, markdown@0.5.0, micromarkdown@0.3.4-a, nano-markdown@1.2.0。

最后求了个平均数，作为直观参考。

| Sample                   |markdown-it|remarkable |marked     |showdown   |commonmark |markdown-js|micro      |nano       |
|--------------------------|----------:|----------:|----------:|----------:|----------:|----------:|----------:|----------:|
|README.md                 |        5.8|       10.2|        5.4|          1|        4.7|        0.8|          0|       15.5|
|block-bq-flat.md          |       17.3|       10.5|        9.8|          1|       12.2|        2.2|          0|       17.2|
|block-bq-nested.md        |       24.1|       11.9|       15.3|          1|       16.4|        3.8|          0|       79.6|
|block-code.md             |       34.2|       37.6|       25.6|          1|        9.1|        8.0|          0|       40.4|
|block-fences.md           |       30.0|       32.3|       31.3|          1|       11.1|        3.3|          0|       17.1|
|block-heading.md          |       10.9|       19.9|        7.8|          1|        7.5|        3.6|          0|        9.2|
|block-hr.md               |       17.4|       48.3|       14.0|          1|       12.5|        3.1|          0|        9.5|
|block-html.md             |        8.0|       12.3|        1.7|          1|        4.3|        0.0|          0|        5.9|
|block-lheading.md         |        7.8|       16.0|       10.6|          1|        7.6|        4.2|          0|       13.3|
|block-list-flat.md        |       18.3|       29.4|       11.6|          1|        9.5|        3.7|          0|       24.8|
|block-list-nested.md      |       18.6|       26.9|        9.2|          1|        4.3|        4.6|          0|       67.4|
|block-ref-flat.md         |        1.0|        3.9|        0.8|          1|        2.0|        2.6|          0|       11.9|
|block-ref-nested.md       |        1.8|        2.9|        1.1|          1|        1.6|        0.1|          0|        8.3|
|inline-autolink.md        |        2.4|        5.9|        6.5|          1|        4.5|        4.5|          0|       22.8|
|inline-backticks.md       |       14.9|       18.4|        7.6|          1|        9.8|        3.7|          0|       25.1|
|inline-em-flat.md         |        4.5|        9.1|        2.7|          1|        3.1|        1.0|          0|        8.3|
|inline-em-nested.md       |        4.4|        8.0|        3.0|          1|        3.1|        0.9|          0|        8.6|
|inline-em-worst.md        |        5.5|        4.2|        2.8|          1|        3.6|        0.9|          0|        6.7|
|inline-entity.md          |        4.9|        6.6|        6.7|          1|        4.0|        1.8|          0|       10.9|
|inline-escape.md          |        8.8|       10.5|        2.1|          1|        2.9|        1.1|          0|        4.9|
|inline-html.md            |        6.2|        1.3|        6.9|          1|        4.3|        1.9|          0|       11.1|
|inline-links-flat.md      |        2.6|        7.1|        4.0|          1|        3.0|        1.5|          0|        7.0|
|inline-newlines.md        |        5.2|        7.7|        3.6|          1|        3.3|        1.7|          0|        9.9|
|lorem1.md                 |        8.3|       13.3|        9.1|          1|       12.3|        0.2|          0|       22.7|
|rawtabs.md                |       18.6|       15.9|       10.1|          1|        8.8|        3.7|          0|       17.7|
|平均值                     |       11.3|       14.8|        8.4|          1|        6.6|        2.5|          0|       19.0|

从后往前看：
- nano跑分最高，主要原因是功能实现不完整。。
- micro都跪了，在node下跑不了，原因是代码中居然有`document`。。
- markdown-js比showdown稍微高一些，不过在执行一个样本`inline-links-nested.md`陷入了死循环。
- remarkable在性能上要比markdown-it略胜一筹。

## markdown-it vs remarkable

根据前面的比较，最终肯定是在这两者之中作选择。

如果你去看两者的GitHub仓库，就会觉得它他们的文档、Demo和API都很像，甚至很多相同的commits。这里就要讲到这两个仓库的狗血剧情了。

大概14年底的事情。最先有个叫jonschlinkert的开发者，估计是看chjj的marked不给力，fork了一个仓库，叫remarked。后来改了个不那么山寨的名字，叫remarkable，准备放手大干一场。这前后有几个开发者也帮他提供代码，包括一个叫vitaly，改名后仓库的一血（first commit）也是这位仁兄的。刚开始搞得风生水起，后来好像jonschlinkert比较忙，开发不怎么积极，得罪了vitaly，因为好多代码是vitaly开发的。vitaly一怒之下决定分道扬镳，拉走几个小弟，直接开了个新矿markdown-it，这里有个[commit](https://github.com/markdown-it/markdown-it/commit/9afffbaefd4dce87ca609deb9f9b58accc69f032)就是他改名的证据。后来两人为了仓库的版权还老吵架，这里是一个[撕逼现场](https://talk.commonmark.org/t/remarkable-vs-markdown-it/1956)。

当然，我们选择解析器肯定不是优先考虑谁正统。就功能、插件和维护程度来说，推荐用[markdown-it](https://github.com/markdown-it/markdown-it)。性能上与remarkable比，差得不多。
