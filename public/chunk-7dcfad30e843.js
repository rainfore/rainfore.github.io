webpackJsonp([10],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-css-loader/index.js?{\"minimize\":true,\"localIdentName\":\"[name]_[local]\",\"modules\":true,\"importLoaders\":true}!../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6f3b0816\",\"scoped\":false,\"hasInlineConfig\":true}!../Projects/GitHub/Vusion/vusion-cli/node_modules/import-global-loader/index.js!../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/selector.js?type=styles&index=0!./Profile.vue", function() {
			var newContent = require("!!../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-css-loader/index.js?{\"minimize\":true,\"localIdentName\":\"[name]_[local]\",\"modules\":true,\"importLoaders\":true}!../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6f3b0816\",\"scoped\":false,\"hasInlineConfig\":true}!../Projects/GitHub/Vusion/vusion-cli/node_modules/import-global-loader/index.js!../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/selector.js?type=styles&index=0!./Profile.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "@page{size:A4;margin:0}body{font-size:12px;font-family:Helvetica,Tahoma,Arial,Microsoft YaHei,Hiragino Sans GB,WenQuanYi Micro Hei,sans-serif;background:#f4f4f4;margin:0;color:#222}em{font-style:normal;color:#3c7caa}.Profile_3AbERn{display:-webkit-box;display:-ms-flexbox;display:flex;background:#fff;width:21cm;height:29.7cm;margin:1.6cm auto;-webkit-box-shadow:0 0 4px rgba(0,0,0,.2);box-shadow:0 0 4px rgba(0,0,0,.2)}@media print{.Profile_3AbERn{margin:0;-webkit-box-shadow:none;box-shadow:none}}.Profile_left_YAVTB4{width:28%;background:#123456;padding:.72cm .5cm;color:#fff}.Profile_right_1GdWX9{width:72%;padding:.72cm}.Profile_photo_2s4d2F{display:block}.Profile_photo-img_sM1d0B{display:block;height:102px;border:3px solid #fff}.Profile_header_EAO8kl{background:#eee;margin:0 -.72cm;padding:.3cm .72cm}.Profile_h1_3tNNHY{font-family:PingFang SC,sans-serif;font-size:24px;font-weight:400;color:#3c7caa;margin:0;margin-bottom:.1em}.Profile_h2_1W63vg{position:relative;font-size:18px;font-weight:400;margin:.6em 0;color:#3c7caa;border-bottom:1px solid #3c7caa}.Profile_h2_1W63vg:before{position:absolute;content:\"\";display:block;left:0;width:4em;bottom:-2px;border-bottom:3px solid #3c7caa}.Profile_h2_1W63vg small{float:right;font-size:12px;line-height:2.8}.Profile_h2_1W63vg[color=dark]{color:#fff;border-color:#fff}.Profile_h2_1W63vg[color=dark]:before{border-color:#fff}.Profile_h3_1lvlER{font-size:14px;margin:.3em 0}.Profile_h3_1lvlER:before{content:\"\";display:inline-block;width:6px;height:6px;background:#3c7caa;margin:1px 6px 2px 0}.Profile_p_1MLdcF{margin:.3em 0}.Profile_timeline_2Rd8pJ{margin:.3em 0;color:#3c7caa}.Profile_date_3LRx3C{font-weight:700}.Profile_cell_241IlH{display:inline-block}.Profile_cell_241IlH[pull=right]{float:right}.Profile_list-item_ASUNID:before{content:\"\";display:inline-block;width:2px;height:2px;border-radius:100%;background:#000;margin:3px 8px 3px 2px}.Profile_list-item_ASUNID[nowrap]{white-space:nowrap}.Profile_left_YAVTB4 .Profile_list-item_ASUNID:before{background:#fff}.Profile_a_3_QAIl{color:#ffa120;text-decoration:underline}.Profile_qrcode_9dHLvW{display:block;width:140px;margin:1em auto;margin-top:10.2em}.Profile_qrcode_9dHLvW+p{text-align:center}", ""]);

// exports
exports.locals = {
	"root": "Profile_3AbERn",
	"left": "Profile_left_YAVTB4",
	"right": "Profile_right_1GdWX9",
	"photo": "Profile_photo_2s4d2F",
	"photo-img": "Profile_photo-img_sM1d0B",
	"header": "Profile_header_EAO8kl",
	"h1": "Profile_h1_3tNNHY",
	"h2": "Profile_h2_1W63vg",
	"h3": "Profile_h3_1lvlER",
	"p": "Profile_p_1MLdcF",
	"timeline": "Profile_timeline_2Rd8pJ",
	"date": "Profile_date_3LRx3C",
	"cell": "Profile_cell_241IlH",
	"list": "Profile_list_3tkQvR",
	"list-item": "Profile_list-item_ASUNID",
	"a": "Profile_a_3_QAIl",
	"qrcode": "Profile_qrcode_9dHLvW"
};

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_base_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_base_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_u_base_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const Profile = __WEBPACK_IMPORTED_MODULE_0_u_base_vue___default.a.extend({
    name: 's-profile',
});

/* harmony default export */ __webpack_exports__["default"] = (Profile);


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root
  }, [_c('article', {
    class: _vm.$style.left
  }, [_c('div', {
    class: _vm.$style.photo
  }, [_c('img', {
    class: _vm.$style['photo-img'],
    attrs: {
      "src": "/public/id-photo.png"
    }
  })]), _c('h2', {
    class: _vm.$style.h2,
    attrs: {
      "color": "dark"
    }
  }, [_vm._v("基本信息")]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("性别：男")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("年龄：25")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("出生年月：1992.09")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("电话：159-0669-1306")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("邮箱："), _c('a', {
    class: _vm.$style.a,
    attrs: {
      "href": "mailto:rainforest92@126.com"
    }
  }, [_vm._v("rainforest92@126.com")])]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("微信：rainforest92")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("GitHub："), _c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "https://github.com/rainfore"
    }
  }, [_vm._v("github.com/rainfore")])])]), _c('h2', {
    class: _vm.$style.h2,
    attrs: {
      "color": "dark"
    }
  }, [_vm._v("教育背景")]), _c('div', {
    class: _vm.$style.p
  }, [_c('div', {
    class: _vm.$style.date
  }, [_vm._v("2010 年 9 月 - 2014 年 7 月")]), _c('div', [_vm._v("西安交通大学")]), _c('div', [_vm._v("应用物理试验班（本科）")])]), _c('h2', {
    class: _vm.$style.h2,
    attrs: {
      "color": "dark"
    }
  }, [_vm._v("技术分享")]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "http://localhost/Skills/Coding/Web%E5%89%8D%E7%AB%AF/20161030%20-%20%E7%BD%91%E6%98%93%E8%9C%82%E5%B7%A2%E7%9A%84%E5%B7%A5%E4%B8%9A%E5%8C%96%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84/index.html"
    }
  }, [_vm._v("网易蜂巢的工业化前端架构")])]), _c('li', {
    class: _vm.$style['list-item']
  }, [_c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "http://rainfore.me/Shares/几种框架对比/几种框架对比.pdf"
    }
  }, [_vm._v("几种框架对比")])]), _c('li', {
    class: _vm.$style['list-item']
  }, [_c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "https://github.com/vusion/eslint-config/blob/master/README.zh-CN.md"
    }
  }, [_vm._v("我的ESLint代码规范")])]), _c('li', {
    class: _vm.$style['list-item']
  }, [_c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "http://rainfore.me/Shares/拖拽那些事儿/index.pdf"
    }
  }, [_vm._v("拖拽那些事儿")])]), _c('li', {
    class: _vm.$style['list-item']
  }, [_c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "http://rainfore.me/Memories/%E7%82%B9%E6%BB%B4/20160131%20-%20%E7%BB%88%E7%BB%93%E8%80%85%E2%80%94%E2%80%94%E7%BD%91%E6%98%93%E8%9C%82%E5%B7%A2WebTerminal%E7%9A%84%E5%BC%80%E5%8F%91%E5%8E%86%E7%A8%8B/index.html"
    }
  }, [_vm._v("终结者-WebTerminal的开发历程")])]), _c('li', {
    class: _vm.$style['list-item']
  }, [_c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "http://rainfore.me/Shares/Regular%20UI库的设计与思考"
    }
  }, [_vm._v("Regular UI的设计与思考")])]), _c('li', {
    class: _vm.$style['list-item']
  }, [_c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "http://rainfore.me/Shares/Regular组件设计/index.pdf"
    }
  }, [_vm._v("Regular组件设计")])]), _c('li', {
    class: _vm.$style['list-item']
  }, [_c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "http://rainfore.me/Skills/Coding/Web%E5%89%8D%E7%AB%AF/20151220%20-%20%E4%B8%AD%E6%96%87%E7%BD%91%E9%A1%B5%E5%AD%97%E4%BD%93%E7%9A%84%E6%9C%80%E4%BD%B3%E9%80%89%E6%8B%A9/index.html"
    }
  }, [_vm._v("中文网页字体的最佳选择")])]), _c('li', {
    class: _vm.$style['list-item']
  }, [_c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "http://rainfore.me/Skills/Coding/Web%E5%89%8D%E7%AB%AF/20150310%20-%20Source%20Map%E8%AF%A6%E8%A7%A3/index.html"
    }
  }, [_vm._v("Source Map详解")])])]), _c('h2', {
    class: _vm.$style.h2,
    attrs: {
      "color": "dark"
    }
  }, [_vm._v("自我评价")]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("技术宅，Vue粉，组件控")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("快速学习、持续巩固")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("创造力旺盛，执行力很强")]), _c('li', {
    class: _vm.$style['list-item'],
    attrs: {
      "nowrap": ""
    }
  }, [_vm._v("追求完美，精益求精，有代码洁癖")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("不擅长表达，但喜欢做分享")]), _c('li', {
    class: _vm.$style['list-item'],
    attrs: {
      "nowrap": ""
    }
  }, [_vm._v("与同事相处融洽，能带动技术氛围")])]), _c('img', {
    class: _vm.$style.qrcode,
    attrs: {
      "src": "/public/qrcode.jpg"
    }
  }), _c('p', {
    class: _vm.$style.p
  }, [_vm._v("感谢您在百忙之中阅读我的简历")])]), _c('article', {
    class: _vm.$style.right
  }, [_c('header', {
    class: _vm.$style.header
  }, [_c('h1', {
    class: _vm.$style.h1
  }, [_vm._v("赵雨森")]), _c('div', [_vm._v("2014年本科毕业，网易资深前端工程师，3年前端开发经验，1年带领团队经验。")]), _c('div', [_vm._v("致力于整合组件生态，解决前端工程化问题，打造一款"), _c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "https://github.com/vusion/vusion"
    }
  }, [_vm._v("前端IDE")]), _vm._v("，减少前端与设计之间的耗散。")])]), _c('h2', {
    class: _vm.$style.h2
  }, [_vm._v("工作经历")]), _c('div', {
    class: _vm.$style.timeline
  }, [_c('span', {
    class: _vm.$style.date
  }, [_vm._v("2014 年 11 月 - 2015 年 11 月")]), _c('div', {
    class: _vm.$style.cell,
    attrs: {
      "pull": "right"
    }
  }, [_vm._v("网易 - 杭州研究院 - 前端技术部")])]), _c('h3', {
    class: _vm.$style.h3
  }, [_vm._v("程序设计类实验辅助教学平台（PTA）")]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("负责整个平台的前端开发。SPA架构，Gulp+Browserify+Stateman+Regular+MCSS")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("负责题库编辑器的语法设计与开发，基于marked.js的源码，扩展Markdown语法")])]), _c('div', {
    class: _vm.$style.timeline
  }, [_c('span', {
    class: _vm.$style.date
  }, [_vm._v("2015 年 11 月 - 至今")]), _c('div', {
    class: _vm.$style.cell,
    attrs: {
      "pull": "right"
    }
  }, [_vm._v("网易 - 杭州研究院 - 云计算平台产品部")])]), _c('h3', {
    class: _vm.$style.h3
  }, [_vm._v("网易蜂巢（"), _c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "https://c.163.com"
    }
  }, [_vm._v("c.163.com")]), _vm._v("）")]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("带领团队对整个系统的前端架构进行重构优化，减少冗余代码、压缩大型图片、调整项目结构、优化部署流程、添加ESLint代码检查、添加Babel编译、添加前端自动化测试等")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("组织团队定期开展CodeReview和组内分享会")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("负责总览页面、NCR、RDS、数据库助手、NOS、APM、账户安全等多个大型模块的开发")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("负责通用组件库的整理和维护，从Regular UI（见下文）扩展到Cloud UI")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("负责WebTerminal的开发，使用sh.js和WebSocket，期间研究过拖拽等复杂功能")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("使用原生的SVG开发监控图表，使用D3库开发拓扑图")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("统一表单验证流程，优化自动化生产图标流程")])]), _c('h3', {
    class: _vm.$style.h3
  }, [_vm._v("ICP 备案系统（"), _c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "https://icp.c.163.com"
    }
  }, [_vm._v("icp.c.163.com")]), _vm._v("）")]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("负责整个系统的前端架构搭建，使用Pusuit架构（见下文）")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("带领实习生完成整体开发任务，参与创建主体等主要模块的开发")])]), _c('h3', {
    class: _vm.$style.h3
  }, [_vm._v("运营平台")]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("负责整个平台的前端架构搭建，优化部署流程，使用Vusion构架（见下文）")])]), _c('h2', {
    class: _vm.$style.h2
  }, [_vm._v("个人研究")]), _c('h3', {
    class: _vm.$style.h3
  }, [_vm._v("Regular UI（"), _c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "https://regular-ui.github.io"
    }
  }, [_vm._v("regular-ui.github.io")]), _vm._v("）")]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("刚入职时自主研发的组件库，目前有50多个组件，包含DateTimePicker、Uploader、TreeView、Draggable、Resizable、Chart等多个复杂组件")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("研究过Bootstrap、UIkit、Semantic UI、Material UI、AntDesign等组件库的源码")])]), _c('h3', {
    class: _vm.$style.h3
  }, [_vm._v("Pursuit CLI（"), _c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "https://github.com/rainfore/pursuit-cli"
    }
  }, [_vm._v("github.com/rainfore/pursuit-cli")]), _vm._v("）")]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("半成熟的构建工具，Gulp+ES6+Babel+Regular+MCSS+ESLint+Karma+SpriteSmith+...")])]), _c('h3', {
    class: _vm.$style.h3
  }, [_vm._v("Vusion（"), _c('a', {
    class: _vm.$style.a,
    attrs: {
      "target": "_blank",
      "href": "https://github.com/vusion/vusion"
    }
  }, [_vm._v("github.com/vusion/vusion")]), _vm._v("）")]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("本人研究前端架构的最新成果，理念是：基于Vue，贡献于Vue")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("总结了一套工业化前端架构理论：模块化、组件化、规范化、⾃动化")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("Vusion CLI + Vusion UI + Vusion IDE，最终形态是打造一款Vue的IDE与UI Library公共平台")])]), _c('h2', {
    class: _vm.$style.h2
  }, [_vm._v("专业技能"), _c('small', [_vm._v("知道 < 了解 < 熟悉/熟练 < 掌握 < 精通")])]), _c('ul', {
    class: _vm.$style.list
  }, [_c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("掌握HTML、CSS、JS的基础知识，熟悉HTML5、CSS3、ES6")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("熟悉MV*框架Vue2和Regular，了解React和Angular2")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("熟悉Vuex、VueRouter等Vue的生态插件，研究过Vue和vue-devtools的部分源码，提过issue")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("熟悉Webpack和Gulp，能熟练编写loader和plugin")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("熟悉LESS、SASS、PostCSS，能熟练编写PostCSS的plugin")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("熟悉Node.js，能熟练编写各种前端工具；了解Express，接触过SQL和ORM，有少量后端经验")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("掌握正则表达式，做过一些代码编译工作，如Markdown、CSS、JSDoc等")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("熟悉Electron；使用过TypeScript和Flow；研究过ESLint各种rules")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("熟悉SVG，了解Canvas，知道WebGL")]), _c('li', {
    class: _vm.$style['list-item']
  }, [_vm._v("精通PS，熟悉Flash和Sketch，了解Android")])])])])
},staticRenderFns: []}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var cssModules = {}
function injectStyle (ssrContext) {

              var oldLocals = this['$style'];
              var newLocals = __webpack_require__(109);
              if (oldLocals && oldLocals.root === 'Profile.vue')
                  newLocals = Object.assign({}, oldLocals, newLocals);
              cssModules['$style'] = newLocals;
            this['$style'] = cssModules['$style']
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(112),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});