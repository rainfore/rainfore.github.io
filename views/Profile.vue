<template>
<div :class="$style.root">
    <article :class="$style.left">
        <div :class="$style.photo"><img :class="$style['photo-img']" src="/public/id-photo.png"></div>
        <h2 :class="$style.h2" color="dark">基本信息</h2>
        <ul :class="$style.list">
            <li :class="$style['list-item']">性别：男</li>
            <li :class="$style['list-item']">年龄：25</li>
            <li :class="$style['list-item']">出生年月：1992.09</li>
            <li :class="$style['list-item']">电话：159-0669-1306</li>
            <li :class="$style['list-item']">邮箱：<a :class="$style.a" href="mailto:rainforest92@126.com">rainforest92@126.com</a></li>
            <li :class="$style['list-item']">微信：rainforest92</li>
            <li :class="$style['list-item']">GitHub：<a :class="$style.a" target="_blank" href="https://github.com/rainfore">github.com/rainfore</a></li>
        </ul>
        <h2 :class="$style.h2" color="dark">教育背景</h2>
        <div :class="$style.p">
            <div :class="$style.date">2010 年 9 月 - 2014 年 7 月</div>
            <div>西安交通大学</div>
            <div>应用物理试验班（本科）</div>
        </div>
        <h2 :class="$style.h2" color="dark">技术分享</h2>
        <ul :class="$style.list">
            <li :class="$style['list-item']"><a :class="$style.a" target="_blank" href="https://www.zhihu.com/question/24558375/answer/139920107">Web前端的工业化时代</a></li>
            <li :class="$style['list-item']"><a :class="$style.a" target="_blank" href="http://rainfore.me/Shares/%E5%87%A0%E7%A7%8D%E6%A1%86%E6%9E%B6%E5%AF%B9%E6%AF%94/%E5%87%A0%E7%A7%8D%E6%A1%86%E6%9E%B6%E5%AF%B9%E6%AF%94.pdf">几种框架对比</a></li>
            <li :class="$style['list-item']"><a :class="$style.a" target="_blank" href="https://github.com/vusion/eslint-config/blob/master/README.zh-CN.md">我的ESLint代码规范</a></li>
            <li :class="$style['list-item']"><a :class="$style.a" target="_blank" href="http://rainfore.me/Shares/拖拽那些事儿/index.pdf">拖拽那些事儿</a></li>
            <li :class="$style['list-item']"><a :class="$style.a" target="_blank" href="http://rainfore.me/Memories/%E7%82%B9%E6%BB%B4/20160131%20-%20%E7%BB%88%E7%BB%93%E8%80%85%E2%80%94%E2%80%94%E7%BD%91%E6%98%93%E8%9C%82%E5%B7%A2WebTerminal%E7%9A%84%E5%BC%80%E5%8F%91%E5%8E%86%E7%A8%8B/index.html">终结者-WebTerminal的开发历程</a></li>
            <li :class="$style['list-item']"><a :class="$style.a" target="_blank" href="http://rainfore.me/Shares/Regular%20UI的设计与思考">Regular UI的设计与思考</a></li>
            <li :class="$style['list-item']"><a :class="$style.a" target="_blank" href="http://rainfore.me/Shares/Regular组件设计/index.pdf">Regular组件设计</a></li>
            <li :class="$style['list-item']"><a :class="$style.a" target="_blank" href="http://rainfore.me/Skills/Coding/Web%E5%89%8D%E7%AB%AF/20151220%20-%20%E4%B8%AD%E6%96%87%E7%BD%91%E9%A1%B5%E5%AD%97%E4%BD%93%E7%9A%84%E6%9C%80%E4%BD%B3%E9%80%89%E6%8B%A9/index.html">中文网页字体的最佳选择</a></li>
            <li :class="$style['list-item']"><a :class="$style.a" target="_blank" href="http://rainfore.me/Skills/Coding/Web%E5%89%8D%E7%AB%AF/20150310%20-%20Source%20Map%E8%AF%A6%E8%A7%A3/index.html">Source Map详解</a></li>
        </ul>
        <h2 :class="$style.h2" color="dark">自我评价</h2>
        <ul :class="$style.list">
            <li :class="$style['list-item']">技术宅，Vue粉，组件控</li>
            <li :class="$style['list-item']">快速学习、持续巩固</li>
            <li :class="$style['list-item']">创造力旺盛，执行力很强</li>
            <li :class="$style['list-item']" nowrap>追求完美，精益求精，有代码洁癖</li>
            <li :class="$style['list-item']">不擅长表达，但喜欢做分享</li>
            <li :class="$style['list-item']" nowrap>与同事相处融洽，能带动技术氛围</li>
        </ul>
        <img :class="$style.qrcode" src="/public/qrcode.jpg">
        <p :class="$style.p">感谢您在百忙之中阅读我的简历</p>
    </article>
    <article :class="$style.right">
        <header :class="$style.header">
            <h1 :class="$style.h1">赵雨森</h1>
            <div>2014年本科毕业，在网易工作，3年前端开发经验，1年带团队经验。</div>
            <div>致力于整合组件生态，解决前端工程化问题，创造基于Vue的IDE，减少前端与设计工作的耗散。</div>
            <div>目前职级：资深前端工程师；期待薪资：20k~25k</div>
        </header>
        <h2 :class="$style.h2">工作经历</h2>
        <div :class="$style.timeline"><span :class="$style.date">2014 年 11 月 - 2015 年 11 月</span><div :class="$style.cell" pull="right">网易 - 杭州研究院 - 前端技术部</div></div>
        <h3 :class="$style.h3">程序设计类实验辅助教学平台（PTA）</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">负责整个平台的前端开发。SPA架构，Gulp+Browserify+Stateman+Regular+MCSS</li>
            <li :class="$style['list-item']">负责题库编辑器的语法设计与开发，基于marked.js的源码，扩展Markdown语法</li>
        </ul>
        <!-- h3 :class="$style.h3">应用性能监控平台（NAPM）</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">参与平台部分模块的全栈开发，后端使用的Express架构。了解常用的SQL和ORM的使用</li>
        </ul -->
        <div :class="$style.timeline"><span :class="$style.date">2015 年 11 月 - 至今</span><div :class="$style.cell" pull="right">网易 - 杭州研究院 - 云计算平台产品部</div></div>
        <h3 :class="$style.h3">网易蜂巢（<a :class="$style.a" target="_blank" href="https://c.163.com">c.163.com</a>）</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">带领团队对整个系统的前端架构进行重构优化，减少冗余代码、压缩大型图片、添加ESLint代码检查、添加Babel编译、前端自动化测试等</li>
            <li :class="$style['list-item']">组织团队定期开展CodeReview和组内分享会</li>
            <li :class="$style['list-item']">负责总览页面、NCR、RDS、数据库助手、NOS、APM、账户安全等多个大型模块的开发</li>
            <li :class="$style['list-item']">负责通用组件库的整理和维护，从Regular UI（见下文）扩展到Cloud UI</li>
            <li :class="$style['list-item']">负责WebTerminal的开发，使用sh.js和WebSocket，期间研究过拖拽等复杂功能</li>
            <li :class="$style['list-item']">使用Regular+SVG开发监控图表，使用D3开发拓扑图</li>
            <li :class="$style['list-item']">统一表单验证流程，优化自动化生产图标流程</li>
        </ul>
        <h3 :class="$style.h3">ICP 备案系统（<a :class="$style.a" target="_blank" href="https://icp.c.163.com">icp.c.163.com</a>）</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">负责整个系统的前端架构搭建，使用Pusuit架构（见下文）</li>
            <li :class="$style['list-item']">带领实习生完成整体开发任务，参与创建主体等主要模块的开发</li>
        </ul>
        <h3 :class="$style.h3">运营平台</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">负责整个平台的前端架构搭建，优化部署流程，使用Vusion构架（见下文）</li>
        </ul>

        <h2 :class="$style.h2">个人研究</h2>
        <h3 :class="$style.h3">Regular UI（<a :class="$style.a" target="_blank" href="https://regular-ui.github.io">regular-ui.github.io</a>）</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">刚入职时自主研发的组件库，目前有50多个组件，包含DateTimePicker、Uploader、TreeView、Draggable、Resizable、Chart等多个复杂组件</li>
            <li :class="$style['list-item']">研究过Bootstrap、UIkit、Semantic UI、Material UI、AntDesign等组件库的源码</li>
        </ul>
        <h3 :class="$style.h3">Pursuit CLI（<a :class="$style.a" target="_blank" href="https://github.com/rainfore/pursuit-cli">github.com/rainfore/pursuit-cli</a>）</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">半成熟的构建工具，Gulp+ES6+Babel+Regular+MCSS+ESLint+Karma+SpriteSmith+...</li>
        </ul>
        <h3 :class="$style.h3">Vusion（<a :class="$style.a" target="_blank" href="https://github.com/vusion/vusion">github.com/vusion/vusion</a>）</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">本人研究前端架构的最新成果，基于Vue，贡献于Vue，结合CSSModule等功能</li>
            <li :class="$style['list-item']">总结前端工业化架构理论：模块化、组件化、规范化、⾃动化</li>
            <li :class="$style['list-item']">Vusion CLI + Vusion UI + Vusion IDE，最终形态是打造一款Vue的IDE与UI Library公共平台</li>
        </ul>
        <h2 :class="$style.h2">专业技能<small>知道 &lt; 了解 &lt; 熟悉/熟练 &lt; 掌握 &lt; 精通</small></h2>
        <ul :class="$style.list">
            <li :class="$style['list-item']">掌握HTML、CSS、JS的基础知识，熟悉HTML5、CSS3、ES6</li>
            <li :class="$style['list-item']">熟悉MV*框架Vue2和Regular，了解React和Angular2</li>
            <li :class="$style['list-item']">熟悉Vuex、VueRouter等Vue的生态插件，研究过Vue和vue-devtools的部分源码，提过issue</li>
            <li :class="$style['list-item']">熟悉Webpack和Gulp，能熟练编写loader和plugin</li>
            <li :class="$style['list-item']">熟悉LESS、SASS、PostCSS，能熟练编写PostCSS的plugin</li>
            <li :class="$style['list-item']">熟悉Node.js，能熟练编写各种前端工具；了解Express，接触过SQL和ORM，有少量后端经验</li>
            <li :class="$style['list-item']">掌握正则表达式，做过一些代码编译工作，如Markdown、CSS、JSDoc等</li>
            <li :class="$style['list-item']">熟悉Electron；使用过TypeScript和Flow；研究过ESLint各种rules</li>
            <li :class="$style['list-item']">熟悉SVG，了解Canvas，知道WebGL；精通PS，熟悉Flash，了解Android</li>
        </ul>
    </article>
</div>
</template>

<script>
import Base from 'u-base.vue';

const Profile = Base.extend({
    name: 's-profile',
});

export default Profile;
</script>

<style module>
$brand-primary: #3c7caa;
$brand-dark: #123456;
$link-color: #ffa120;

@page {
    size: A4;
    margin: 0;
}

body {
    font-size: 12px;
    font-family: Helvetica, Tahoma, Arial, "Microsoft YaHei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
    background: #f4f4f4;
    margin: 0;
    color: #222;
}

em {
    font-style: normal;
    color: $brand-primary;
}

.root {
    display: flex;
    background: white;
    width: 21cm;
    height: 29.7cm;
    margin: 1.6cm auto;
    box-shadow: $box-shadow-base;
}

@media print {
    .root {
        margin: 0;
        box-shadow: none;
    }
}

.left {
    width: 28%;
    background: $brand-dark;
    padding: 0.8cm 0.5cm;
    color: white;
}

.right {
    width: 72%;
    padding: 0.8cm;
}

.photo {
    display: block;
    padding: 0.3cm 0;
}

.photo-img {
    display: block;
    height: 98px;
    border: 3px solid white;
}

.header {
    background: #eee;
    margin: 0 -0.8cm;
    padding: 0.3cm 0.8cm 0.3cm;
}

.h1 {
    font-family: 'PingFang SC', sans-serif;
    font-size: 24px;
    font-weight: normal;
    color: $brand-primary;
    margin: 0;
    margin-bottom: 0.1em;
}

.h2 {
    position: relative;
    font-size: 18px;
    font-weight: normal;
    margin: 0.6em 0;
    color: $brand-primary;
    border-bottom: 1px solid $brand-primary;
}

.h2:before {
    position: absolute;
    content: '';
    display: block;
    left: 0;
    width: 4em;
    bottom: -2px;
    border-bottom: 3px solid $brand-primary;
}

.h2 small {
    float: right;
    font-size: 12px;
    line-height: 2.8;
    /*color: #999;*/
}

.h2[color="dark"] {
    color: white;
    border-color: white;
}

.h2[color="dark"]:before {
    border-color: white;
}

.h3 {
    font-size: 14px;
    margin: 0.3em 0;
    /*color: $link-color;*/
}

.h3:before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: $brand-primary;
    margin: 1px 6px 1px 0;
}

.p {
    margin: .3em 0;
}

.timeline {
    margin: .3em 0;
    color: $brand-primary;
}

.date {
    font-weight: bold;
}

.cell {
    display: inline-block;
}

.cell[pull="right"] {
    float: right;
}

.list {
    /*padding-left: 1.4em;*/
}

.list-item {
    /*list-style: square;*/
}

.list-item:before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 2px;
    border-radius: 100%;
    background: black;
    margin: 3px 8px 3px 2px;
}

.list-item[nowrap] {
    white-space: nowrap;
}

.left .list-item:before {
    background: white;
}

.a {
    color: $link-color;
    text-decoration: underline;
}

.qrcode {
    display: block;
    width: 140px;
    margin: 1em auto;
    margin-top: 8.5em;
}

.qrcode + p {
    text-align: center;
}
</style>
