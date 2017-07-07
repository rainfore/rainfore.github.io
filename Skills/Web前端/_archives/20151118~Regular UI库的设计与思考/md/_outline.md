## 前言

### 主题

### 自我介绍
#### 自我介绍
#### 做过的项目

### Regular UI简介
#### Regular UI的现状
#### 参考过哪些框架

## 组件
### 组件是神马
### 神马都是组件
### 组件分类
#### 按照复用性来分类
#### 按照NEC重新分配
    元件、模块、布局、页面、功能
    `<page>`、`<body>`
    `<grid>`、`<table>`
    `<draggable>`
    CSS元件、CSS模块、JS元件、JS模块

    ui ===> demo
#### 构建组件 HTML + CSS + JS -> 组件
    HTML：`<button>`, `<img>`, `<table>`，HTML元素
    JS：无模板无样式的，`<validation>`, `<draggable>`, `<droppable>`, `<sortable>`...
    HTML + CSS：`<button class="u-btn">`, `<icon>`, `<panel>`, `<table>`, `<img>`
    HTML + JS：`<uploader>`
    HTML + CSS + JS：`<datePicker>`, `<select2>`, `<modal>`
### 总结
## 组件化
### 神马都应该组件化
### 命名规范

### JS

### 其他

- 打包
- karma

## 主要内容

### 定位
> 保持加法的原则


## 规范

### 命名规范

### HTML规范

<dataPicker on-change={this._onChange($event)} />
<pager current=5 />
<numberInput value=3 />
<datePicker disabled />

regularjs的标签化很好的实现了组件在HTML层的封装
android和wpf、flex早就实现了标签化的封装了。

模板没有继承和多态
···
<div class="j-datepicker"></div>
···

$('j-datepicker').DatePicker();
var node = v.get('vefef');


### JS规范
Google的Javascript规范、代码的注释遵循jsDoc的规范。

### CSS规范
CSS遵循NEC规范
- 补充
- .m-list > li

Bootstrap
UIkit
lumx

```
btn--green
btn--m

fab__actions
```

```
Unit();
var Button = Unit.extend();
var PrimaryButton = Unit.extend();
var LargeButton = Unit.extend();

var ClearFix = Func.extend();
```

semantic-ui
```
.ui.inverted.progress
.ui.inverted.progress .bar
.ui.disabled.progress > .label
```

foundation
```
.button
.button.primary
.button.success
.button.disabled
```

```
<button class="btn" state="primary" disabled></button>

<div class="datepicker" disabled>
</div>

<div class="progress" state="primary" size="lg">
</div>

.progress[state=primary]
.progress[size=lg]
```

class Unit extends Component {
    
}

class Button extends Unit implements PrimaryType, LargeSize {
    

    void primary() {

    }
}


class Modal {
    protected T head
    protected T dialog
}

class ComplexModal extend Modal {
    protected T head
    protected T dialog
}

.m-tab
.tab_pane
.tab_bar
.tab_progress_li

@TODO


> 封装、继承、多态


### 主题
UI库不应该局限在一套视觉上。

虚主题（抽象主题）
实主题

每一套视觉可以对应一套实主题

主题之间的继承

### 组件规范

config: 
event: ''


### 黑科技

------
##### Tip2

HTML模板只用于表现组件的结构，因此不在模板标签中使用f-功能等样式，而用@extend方式在CSS中继承。

如用：<div class="m-pager"> + .m-pager {@extend .f-wsn}，而不用：<div class="m-pager f-wsn">

