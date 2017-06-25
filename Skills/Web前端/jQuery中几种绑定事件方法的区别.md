---
date: 2013-12-21
tags: [ jQuery, 绑定, 事件 ]
---

当使用jQuery绑定事件到DOM元素上时，我们都会在`.bind()`, `.live()`, `.delegate()`, `.on()`这四种方法中选择。那它们之间到底有什么区别？在什么场合下选择哪种方法是最有效的呢？

### bind(type,[data],fn)

为每个匹配元素的特定事件绑定事件处理函数。示例如下：

``` javascript
$('div').bind('click', function(e) {alert('Hello!')});
$('div').click(function(e) {alert('Hello!')});
```

上面两行代码等效。

### live(type, [data], fn)

给所有匹配的元素附加一个事件处理函数，即使这个元素是以后再添加进来的也有效。示例如下：

``` javascript
$('div').live('click', function(e) {alert('Hello!')});
$('body').append('<div>new div</div>');
```

单击后来生成的`#newDiv`，会弹出对话框。使用`.bind()`则不会弹出对话框。

事实上，`.live()`方法会绑定相应的事件到所选择的元素的根元素上，即document元素上。
该方法从1.7开始已经不被推荐了。

### delegate(selector,[type],[data],fn)

指定的元素（属于被选元素的子元素）添加一个或多个事件处理程序，并规定当这些事件发生时运行的函数。示例如下：

``` javascript
$("#container").delegate('div', 'click', function() {alert('Hello!')})
```

`.delegate()`这个方法可作为`.live()`方法的替代，使得每次事件绑定到特定的DOM元素。

### on(events,[selector],[data],fn)

在选择元素上绑定一个或多个事件的事件处理函数。

该方法是最新的1.9版本整合了之前的三种方式的新事件绑定机制。
事实上`.bind()`, `.live()`, `.delegate()`都是通过`.on()`来实现的。示例如下：

``` javascript
// .bind()
$('div').bind('click', function(e) {alert('Hello!')});
$('div').on('click', function(e) {alert('Hello!')});

// .live()
$('div').live('click', function(e) {alert('Hello!')});
$('document').on('click', 'div', function(e) {alert('Hello!')});

// .delegate()
$("#container").delegate('div', 'click', function() {alert('Hello!')})
$("#container").on('click', 'div', function() {alert('Hello!')})
```

### 结论

- `.bind()`是直接绑定在元素上。
- `.live()`则是通过冒泡的方式来绑定到document元素上。和`.bind()`的优势是支持动态数据，但不推荐使用了。
- `.delegate()`则是更精确的小范围使用事件委托，同时我们可以添加一事件处理方法到动态添加的元素上，性能优于`.live()`。
- 我们可以用`.on()`来代替上述的3种方法。

------

###### 参考

- <http://www.cnblogs.com/piercalex/archive/2013/03/30/2990679.html>
