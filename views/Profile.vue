<template>
<div :class="$style.root">
    <article :class="$style.left">
        <div :class="$style.photo"><img :class="$style['photo-img']" src="/public/id-photo.jpg"></div>
        <h2 :class="$style.h2" color="dark">基本信息</h2>
        <ul :class="$style.list">
            <li :class="$style['list-item']">性别：男</li>
            <li :class="$style['list-item']">年龄：25</li>
            <li :class="$style['list-item']">出生年月：1992.09</li>
            <li :class="$style['list-item']">电话：159-0669-1306</li>
            <li :class="$style['list-item']">邮箱：<a :class="$style.a" href="mail:rainforest92@126.com">rainforest92@126.com</a></li>
            <li :class="$style['list-item']">微信：rainforest92</li>
            <li :class="$style['list-item']">GitHub：<a :class="$style.a" href="https://github.com/rainfore">rainfore</a></li>
        </ul>
        <h2 :class="$style.h2" color="dark">教育背景</h2>
        <div :class="$style.p">
            <div :class="$style.date">2010 年 9 月 - 2014 年 7 月</div>
            <div>西安交通大学</div>
            <div>应用物理试验班（本科）</div>
        </div>
        <h2 :class="$style.h2" color="dark">技术分享</h2>
        <ul :class="$style.list">
            <li :class="$style['list-item']">Regular UI的设计与思考</li>
            <li :class="$style['list-item']">拖拽那些事儿</li>
            <li :class="$style['list-item']">前端工业化架构</li>
            <li :class="$style['list-item']">前端图表绘制</li>
        </ul>
        <h2 :class="$style.h2" color="dark">自我评价</h2>
        <ul :class="$style.list">
            <li :class="$style['list-item']">组件控</li>
            <li :class="$style['list-item']">有代码洁癖</li>
        </ul>
        <img :class="$style.qrcode" src="/public/qrcode.jpg">
        <p :class="$style.p">感谢您在百忙之中阅读我的简历!</p>
    </article>
    <article :class="$style.right">
        <header :class="$style.header">
            <h1 :class="$style.h1">赵雨森</h1>
            <p>本科，网易，3年前端开发经验，1年带团队经验，目前职级：资深前端工程师</p>
        </header>
        <h2 :class="$style.h2">工作经历</h2>
        <div :class="$style.timeline"><span :class="$style.date">2014 年 11 月 - 2015 年 11 月</span><div :class="$style.cell" pull="right">网易-杭州研究院-前端技术部</div></div>
        <h3 :class="$style.h3">程序设计类实验辅助教学平台（PTA）</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">负责整个平台的前端开发，整站SPA架构，基于Gulp构建</li>
            <li :class="$style['list-item']">负责题库编辑器的设计与开发，基于marked.js，扩展Markdown语法</li>
        </ul>
        <!-- h3 :class="$style.h3">应用性能监控平台（NAPM）</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">参与平台部分模块的全栈开发，后端使用的Express架构。了解常用的SQL和ORM的使用</li>
        </ul -->
        <div :class="$style.timeline"><span :class="$style.date">2014 年 11 月 - 至今</span><div :class="$style.cell" pull="right">网易-杭州研究院-云计算平台产品部</div></div>
        <h3 :class="$style.h3">网易蜂巢</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">带领团队对整个系统的前端架构进行重构优化，添加ESLint代码检查、添加Babel编译、前端自动化测试等</li>
            <li :class="$style['list-item']">组织团队进行CodeReview和组内分享会</li>
            <li :class="$style['list-item']">负责几个主要的大型模块的开发</li>
            <li :class="$style['list-item']">负责WebTerminal的开发，使用sh.js和WebSocket，研究拖拽等复杂功能</li>
            <li :class="$style['list-item']">使用MV*框架结合原生SVG开发图表库，使用D3开发拓扑图</li>
            <li :class="$style['list-item']">统一表单验证流程</li>
            <li :class="$style['list-item']">优化自动化生产图标流程</li>
        </ul>
        <h3 :class="$style.h3">ICP 备案系统</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">负责整个系统的前端架构搭建，基于Gulp</li>
        </ul>
        <h3 :class="$style.h3">运营平台</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">负责整个系统的前端架构搭建，基于Webpack+Vue+VueRouter</li>
        </ul>

        <h2 :class="$style.h2">个人研究</h2>
        <h3 :class="$style.h3">Regular UI</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">刚入职时自主研发的组件库，目前有50多个组件，包含DateTimePicker、Uploader、TreeView、Draggable、Resizable、Chart等复杂组件</li>
            <li :class="$style['list-item']">研究过Bootstrap、UIkit、Semantic UI、AntDesign等组件库的源码</li>
        </ul>
        <h3 :class="$style.h3">Pursuit CLI</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">模块化、组件化、规范化、⾃动化</li>
        </ul>
        <h3 :class="$style.h3">Vusion（正在研发...）</h3>
        <ul :class="$style.list">
            <li :class="$style['list-item']">Vusion CLI + Vusion UI + Vusion IDE</li>
            <li :class="$style['list-item']">Pursuit架构</li>
            <li :class="$style['list-item']">Regular UI</li>
        </ul>
        <h2 :class="$style.h2">专业技能</h2>
        <ul :class="$style.list">
            <li :class="$style['list-item']">掌握HTML、CSS、JS的基础知识，熟悉ES6+Babel</li>
            <li :class="$style['list-item']">熟悉MV*框架Vue2和Regular，了解React和Angular2</li>
            <li :class="$style['list-item']">熟悉Vuex、vue-router等Vue的渐进式功能，研究过vue-devtools源码</li>
            <li :class="$style['list-item']">熟悉Webpack和Gulp，编写过Webpack的loader和plugin，编写过Gulp的plugin</li>
            <li :class="$style['list-item']">使用过TypeScript和Flow</li>
            <li :class="$style['list-item']">熟悉LESS、SASS、PostCSS，编写过plugin，倾向于CSS Modules</li>
            <li :class="$style['list-item']">研究过Bootstrap、UIkit、AntDesign等组件库的源码</li>
            <li :class="$style['list-item']">熟悉SVG，了解Canvas</li>
            <li :class="$style['list-item']">研究过ESLint各种rules</li>
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
$brand-dark: #28517b;
$link-color: #ff9800;

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
    padding: 0.8cm 0.6cm;
    color: white;
}

.right {
    width: 72%;
    padding: 0.8cm;
}

.photo {
    display: block;
    margin: 0 auto;
    padding: 15px 0;
}

.photo-img {
    display: block;
    height: 96px;
    border: 2px solid white;
}

.header {
    background: #eee;
    margin: 0 -0.8cm;
    padding: 0.6cm 0.8cm 0.4cm;
}

.h1 {
    font-size: 24px;
    color: $brand-primary;
    margin: 0;
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
    margin: .5em 0;
}

.timeline {
    margin: .5em 0;
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

.left .list-item:before {
    background: white;
}

.a {
    color: $link-color;
}

.qrcode {
    width: 177px;
    margin-top: 2cm;
}
</style>
