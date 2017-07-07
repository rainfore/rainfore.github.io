---
created-date: 2016-04-15
modified-date: 2016-04-15
tags: [ NEJ, Regular, Router, Module ]
---

目前，公司里许多的前端单页系统都采用的是NEJ+Regular结合的方式。NEJ作为主体框架处理路由、模块、cache等大部分功能，Regular主要实现复杂交互性的组件，作为模块中的一部分。

有时可能会遇到这样的模块，模块不大或者整个模块交互性都比较复杂，这时用Regular实现起来更高效一些。

会看到有同事采取这种方式，把一个大的Regular组件插入到空空的NEJ模块中：

NEJ模块的html文件（`module/test/index.html`）：
```html
<meta charset="utf-8">
<textarea name="ntp" id="module-test">
    <div class="j-flag"></div>
</textarea>
<!-- @TEMPLATE -->
<textarea name="js" data-src="./index.js"></textarea>
<!-- /@TEMPLATE -->
```

NEJ模块的js文件（`module/test/index.js`）：
```javascript
_pro.__onShow = function(_options) {
    new TestComponent({
        data: {...}
    }).$inject(this.__eFlag);
    ...
}
```

或者是这种方式，把大模块的功能拆成几个小组件分别插入到空空的NEJ模块中：

NEJ模块的html文件（`module/test/index.html`）：
```html
<meta charset="utf-8">
<textarea name="ntp" id="module-test">
    <div class="j-flag"></div>
    <div class="j-flag"></div>
    <div class="j-flag"></div>
</textarea>
<!-- @TEMPLATE -->
<textarea name="js" data-src="./index.js"></textarea>
<!-- /@TEMPLATE -->
```

NEJ模块的js文件（`module/test/index.js`）：
```javascript
_pro.__onShow = function(_options) {
    new TestTab(...).$inject(this.__eFlags[0]);
    new TestSummary(...).$inject(this.__eFlags[1]);
    new TestDetail(...).$inject(this.__eFlags[2]);
    ...
}
```

这时的目录结构大概是这样的：

```
src
|— html                   # 前端模板
    |— module             # 前端模块
        |— test           # Test模块
            |-- index.html
            |-- index.js
|— js
    |— cache              # NEJ cache
    |— lib                # 引用库
    |— page               # 页面入口js
    |— component          # Regular组件
        |— testComponent  # TestComponent组件
            |-- index.html
            |-- index.js
    |— widget             # NEJ控件
    |— ...
|— ...
```

可以发现，`module/test`这部分代码基本上是架空的，因为业务逻辑都在TestComponent中处理了，其实TestComponent才是真正的模块。而`component`目录下主要是放公共组件的地方，把TestComponent放在`component`目录下也有点累赘。两部分代码都有种绕了一大圈的赶脚。

在一个项目中，如果一两个模块这样做可以容忍，但是多了就会有点小抓狂：

![抓狂](/public/emoticons/抓狂.jpg)：能不能把这些东西简化一下？

当然可以！！！

其实我们想要的功能很简单——用NEJ强大的路由系统直接引导Regular强大的动态模板。

## RegularModule使用指南

这时候广告就来了：

> 只需三步，[RegularModule](https://github.com/NetEaseWD/NEJ/blob/master/src/util/dispatcher/regularModule.js)帮你解决一切问题！

### 1. 直接在模块中上Regular

直接在`module`目录下写Regular代码，方式和写Regular的其他组件一样。

按照上面的例子就是，直接把TestComponent的代码搬到`module/test`目录中。

这样就省去了NEJ空模块的代码，并且在`module`目录下专心放业务模块，在`component`目录下专心放公共组件，也比较合理。

改变后的目录结构：

```
src
|— html                   # 前端模板
    |— module             # 前端模块
        |— test           # Test的Regular模块
            |-- index.html
            |-- index.js
|— js
    |— cache              # NEJ cache
    |— lib                # 引用库
    |— page               # 页面入口js
    |— component          # Regular组件
        |-x testComponent没了
    |— widget             # NEJ控件
    |— ...
|— ...
```

Regular模块的js文件（`module/test/index.js`）：

```javascript
define([
    'regular!./index.html'
    ...
], function(template, ...) {
    var TestModule = Component.extend({
        template: template,
        config: function() {
            ...
        }
    });
    return TestModule;
});
```

Regular模块的html文件（`module/test/index.html`）：

```html
<div on-click={this.soEasy()}>{'按Regular模板写就行'}</div>
```

### 2. 在模块的js文件中注册模块

对于上面的Regular模块组件，NEJ肯定路由不到的。接下来就需要注册umi：

```javascript
define([
    'util/dispatcher/regularModule',
    'regular!./index.html'
    ...
], function(_m, template, ...) {
    var TestModule = Component.extend({
        template: template,
        config: function() {
            ...
        }
    });
    return _m._$regist('test', TestModule);    // 注册umi
});
```

### 3. 添加模块配置

最后一步，也是最关键的一步，在模块配置文件中添加配置。

这与以往的NEJ模块不同，要用js的方式把该模块引入，然后添加到相应的位置：

```javascript
NEJ.define([
    'base/klass',
    'base/util',
    'util/dispatcher/dispatcher',
    'pro/widget/module',
    '{pro}../html/module/test/index.js'
], function(_k, _u, _s, _m, _$$TestModule, _p){
    /**
     * 启动模块配置
     */
    _pro.__startup = function() {
        _t._$startup({
            // 规则配置
            rules: {
                title: {
                    '/m/test/': 'Test模块',
                    ...
                },
                alias: {
                    'test': '/m/test/',
                    ...
                }
            },
            // 模块配置
            modules: {
                '/m/test/': _$$TestModule,
                // '/m/test/': 'module/test/index.html',    // 原来的配置
                ...
            }
        });
    }
});
```

这样就大功告成了。

### 补充1：NEJ的模块方法

NEJ的模块方法在RegularModule中可以继续用，例如：

```javascript
define([
    'util/dispatcher/regularModule',
    'regular!./index.html'
    ...
], function(_m, template, ...) {
    var TestModule = Component.extend({
        template: template,
        config: function() {
            ...
        },
        __onShow: function(_options) {
            console.log('show', _options);
        },
        __onRefresh: function(_options) {
            console.log('refresh', _options);
        },
        __onMessage: function(_options) {
            console.log('message', _options);
        },
        __onBeforeHide: function(_options) {
            console.log('beforeHide', _options);
        },
        __onHide: function() {
            console.log('hide');
        }
    });
    return _m._$regist('test', TestModule);
});
```

### 补充2：模块组件切换时的重置问题

默认情况下，当模块切换出去再切换进来，即`__onHide`再`__onShow`时，Regular组件是**不会销毁**的。

但有些情况下，比如一些表单模块或者要刷新的列表模块，我们希望模块切换后整个组件的内容重置。

可以自己实现`reset`方法，在`__onHide`时把组件中的`data`清理一次，但这样有些麻烦。

在RegularModule中有另一种方法，在`__onHide`时把这个组件destroy掉，在`__onShow`时RegularModule会重新构建这个组件。示例如下：

```javascript
define([
    'util/dispatcher/regularModule',
    'regular!./index.html'
    ...
], function(_m, template, ...) {
    var TestModule = Component.extend({
        template: template,
        config: function() {
            ...
        },
        __onHide: function() {
            this.destroy();    // 起到reset的作用
        }
    });
    return _m._$regist('test', TestModule);
});
```
