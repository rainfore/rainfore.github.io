Regular UI库的设计与思考

分类：技术沙龙

沙龙简介：随着regularjs在公司的前端项目中使用得越来越普及，我们需要一套公共组件库来完善常用组件、统一代码规范、快速构建项目、降低开发成本。目前Regular UI库已经包含了20多个CSS组件、30多个JS组件和4套主题、使用NEC的CSS规范和Google的JS规范、支持CommonJS和AMD、可以进行自定义打包和扩展，正在两个项目中实践。本次分享主要包括Regular UI库的设计思路、实现过程和对未来的思考，提供一些经验给大家参考。


2. CSS
    - 样式的封装与继承


1. 构建组件 + 处理组件之间的交互 + 处理组件与外界之间的交互

3. Regular实现

4. 三维
5. 例子

设计 + 实现 + 使用 + 未来


大部分DOM操作都可以用数据驱动和指令等方式解决

数据驱动


!! CSS封装
React的策略
CSS是一个全局的东西，我们只能通过规范来实现



<div class="m-example">
    <div class="u-progress u-progress-error u-progress-striped z-act">
        <div class="progress_bar" style="width: 72%;">72%</div>
    </div>
</div>

HTML：
```xml
<div class="u-progress u-progress-error u-progress-striped z-act">
    <div class="progress_bar" style="width: 72%;">72%</div>
</div>
```

Angular：
```xml
<uib-progressbar class="progress-striped active" value="72" type="error">72%</uib-progressbar>
```

React：
```xml
<ProgressBar bsStyle="error" now={72} striped active />
```

Regular：
```xml
<progress percent=72 state="error" striped active />
```

那些年，我在RegularJS中踩过的坑



<!-- .element: class="g-col-6" -->

```javascript
var B = A.extend({
    config: function(data) {
        this.data = _.extend({
            value: null,
            size: 'normal',
            children: []
        }, data, true);
        this.supr(data);
    }
});
```

```javascript
var B = A.extend({
    config: function(data) {
        this.supr(data);
        this.data = _.extend({
            value: null,
            size: 'normal',
            children: []
        }, data, true);
    }
});
```


<!-- .element: class="g-col-6" -->



##### Tip4: 小指令

```xml
<div class="m-pager" r-class={ {'z-dis': disabled} }>
    ...
</div>
```

```xml
<div class="m-pager" z-dis={disabled}>
    ...
</div>
```

`z-crt`, `z-sel`, `z-dis`, `r-autofocus`
