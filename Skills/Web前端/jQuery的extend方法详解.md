---
date: 2013-12-21
tags: [ jQuery, extend ]
---

在写jQuery插件时经常用到两个extend扩展方法：`$.fn.extend`和`$.extend`。

### $.fn.extend(object)

扩展jQuery元素集来提供新的方法（通常用来制作插件），对`jQuery.prototype`进行扩展，可以理解成为jQuery类添加实例方法。

示例如下：

``` javascript
$.fn.extend({
	check: function() {
		return this.each(function() {this.checked = true;});
	},
	uncheck: function() {
		return this.each(function() {this.checked = false;});
	}
});
```

用法：

``` javascript
$('input[type=checkbox]').check();
$('input[type=radio]').uncheck();
```

### $.extend(object)

该方法用于扩展jQuery对象本身，可以理解为添加静态方法。

示例如下：

``` javascript
$.extend({
	min: function(a, b) {return a < b ? a : b;},
	max: function(a, b) {return a > b ? a : b;}
});
```

用法：

``` javascript
$.min(2, 3);    // 2
$.max(4, 5);    // 5
```

### $.extend的扩展对象功能：$.extend(target, obj1, obj2, obj3, ...)

`$.extend`方法除了可以扩展jQuery对象本身，还可以用来合并多个对象。

该方法将`obj1`, `obj2`, `obj3`, ...合并到`target`中，返回值为合并后的`target`。

示例如下：

``` javascript
var css1 = {width: '12px', color: 'red'};
var css2 = {width: '18px', padding: '5px'};
var css3 = {color: 'blue', margin: '9px'};

$.extend(css1, css2, css3);
console.log(css1);    // {width: '18px', color: 'blue', padding: '5px', margin: '9px'}
```

由此可见，后面的参数如果和前面的参数存在相同的key，那么后面的会覆盖前面的value。

使用该方法后，会修改`target`的结构。如果想要得到合并的结果却又不想修改`target`的结构，可以如下使用：

``` javascript
var target = $.extend({}, obj1, obj2, obj3, ...);
```

也就是将`{}`作为`target`参数，这样就可以将`obj1`, `obj2`, `obj3`, ...合并后返回到`target`中了。

示例如下：

``` javascript
var css1 = {width: '12px', color: 'red'};
var css2 = {width: '18px', padding: '5px'};
var css3 = {color: 'blue', margin: '9px'};

$.extend({}, css1, css2, css3);    // {width: '18px', color: 'blue', padding: '5px', margin: '9px'}
```

### $.extend的深层拷贝：$.extend(boolean, target, obj1, obj2, obj3, ...)

第一个参数为boolean值，代表是否进行深层拷贝，其余参数和前面介绍的一致。

什么叫深层拷贝，我们先看一个原来的例子：

``` javascript
$.extend(
	{name: 'John', location: {city: 'Boston', county: 'USA'}},
	{last: 'Resig', location: {state: 'MA', county: 'China'}}
);    // {name: 'John', last: 'Resig', location: {state: 'MA', county: 'China'}}
```

可以发现，`location`做为一个整体嵌入到第一个参数中。

如果设置第一个参数为`true`：

``` javascript
$.extend(
	true,
	{name: 'John', location: {city: 'Boston', county: 'USA'}},
	{last: 'Resig', location: {state: 'MA', county: 'China'}}
);
/* {
        name: 'John',
        last: 'Resig',
        location: {city: 'Boston', state: 'MA', county: 'China'}
   } */
```

可以看出，`obj2`中的`state: 'MA'`嵌入到了`obj1`中。

以上就是使用jQuery两个扩展方法时经常碰到的一些细节。

------

###### 参考

- <http://www.cnblogs.com/RascallySnake/archive/2010/05/07/1729563.html>
- <http://www.jb51.net/article/39288.htm>
- <http://blog.csdn.net/quickgu/article/details/5030262>
