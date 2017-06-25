---
date: 2015-01-05
tags: [ JavaScript, 正则表达式 ]
---

本文只讲述正则表达式在JavaScript中的使用。<!--，正则表达式的概念和语法请参见。-->

### 创建正则对象

#### 使用RegExp构造器函数

格式为`new RegExp(pattern[, flags])`，`pattern`为正则表达式的字面量，`flags`为正则表达式的标志。示例如下：

``` javascript
var reg = new RegExp('\d+', 'g');
```

如果指定标志，它可以是下面值中的一个或多个：
- `i`：忽略大小写。
- `m`：多行匹配，表示查找换行符两端的潜在匹配，影响正则中的`^`、`$`符号。如果加上该标志，则`^`表示行起始符，`$`表示行结束符；如果不加该标志，则`^`表示整个字符串的起始符，`$`表示整个字符串的结束符。一般在编辑器中的正则表达式是支持多行匹配的。
- `g`：全局匹配，表示该表达式将用来在输入字符串中查找所有可能的匹配，返回的结果可以是多个。如果不加该标志，则最多只会匹配一个。

标志的具体作用会在后面的例子中体现。

#### 使用Perl风格的文本格式

格式为`/pattern/flags`。示例如下：

``` javascript
var reg = /\d+/g;
```

###### 注意
文本格式中的参数不要使用引号，而构造器函数的参数则要使用引号。

### 几个和正则表达式有关的函数

#### compile

`regExp.compile(pattern[, flags])`：将正则表达式编译为内部格式，从而更快地执行。示例如下：

``` javascript
var reg = /CAT/;
reg.compile('\d+', 'g');    // undefined
console.log(reg);    // /\d+/g
```

这个函数其实没啥用，想当于

``` javascript
var reg = /\d+/g;
```

所以忘记它吧(:QQ:再见:)。。

#### test

`regExp.test(string)`：测试正则表达式能否匹配该字符串，返回Boolean值。

这个函数是最简单也是最常用的。示例如下：

``` javascript
/\d+/.test('123,cat,456,Cat,789');    // true
/789/.test('123,cat,456,Cat,789');    // false
```

##### 标志i的作用

``` javascript
/CAT/.test('123,cat,456,Cat,789');    // false
/CAT/i.test('123,cat,456,Cat,789');    // true
```

该标志在其它函数中与`test`相同，不再详述。

##### 标志m的作用

``` javascript
/^cat/.test('123\ncat\n456\nCat\n789');    // false
/^cat/m.test('123\ncat\n456\nCat\n789');    // true
```

该标志在其它函数中与`test`相同，不再详述。

##### 标志g的作用

加与不加没有区别。

#### exec

`regExp.exec(string)`：返回正则表达式匹配该字符串的结果，如果匹配不到则返回`null`。

如果匹配成功，则返回一个数组对象，该对象的第0项是整个正则表达式所匹配的结果，后续项是正则表达式中各个捕获分组匹配的结果，index项是匹配的位置，input项是原参数中的字符串。

这个函数是最复杂的(:晕:)，如果不好理解可以先跳过，看后面的几个函数。

示例如下：

``` javascript
/\d+/.exec('123,cat,456,Cat,789');    // ["123", index: 0, input: "123,cat,456,Cat,789"]
/789/.exec('123,cat,456,Cat,789');    // null
```

下面是一个正则表达式中包含捕获分组的例子：

``` javascript
/(c)at/i.exec('123,cat,456,Cat,789');    // ["cat", "c", index: 4, input: "123,cat,456,Cat,789"]
```

##### 标志g的作用

如果正则表达式没有设置`g`，那么`exec`方法不会对正则表达式有任何的影响，如果设置了`g`，那么`exec`执行之后会更新正则表达式的`lastIndex`属性，表示本次匹配后，所匹配字符串的下一个字符的索引，下一次再用这个正则表达式匹配字符串的时候就会从上次的`lastIndex`属性开始匹配。

示例如下：

``` javascript
var reg = /\d+/g,
    str = '123,cat,456,Cat,789';

reg.exec(str);    // ["123", index: 0, input: "123,cat,456,Cat,789"]
reg.exec(str);    // ["456", index: 8, input: "123,cat,456,Cat,789"]
reg.exec(str);    // ["789", index: 16, input: "123,cat,456,Cat,789"]
reg.exec(str);    // null
```

经常用while语句改写上面的例子：

``` javascript
var reg = /\d+/g,
    str = '123,cat,456,Cat,789',
    cap;

while(cap = reg.exec(str))
	console.log(cap);

// ["123", index: 0, input: "123,cat,456,Cat,789"]
// ["456", index: 8, input: "123,cat,456,Cat,789"]
// ["789", index: 16, input: "123,cat,456,Cat,789"]
```

下面是正则表达式中包含捕获分组的例子：

``` javascript
var reg = /(c)at/ig,
    str = '123,cat,456,Cat,789';

reg.exec(str);    // ["cat", "c", index: 4, input: "123,cat,456,Cat,789"]
reg.exec(str);    // ["Cat", "C", index: 12, input: "123,cat,456,Cat,789"]
reg.exec(str);    // null
```

下面是正则表达式中三个标志同时使用的例子：

``` javascript
var reg = /^cat$/img,
    str = '123\ncat\n456\nCat\n789';

reg.exec(str);    // ["cat", index: 4, input: "123\ncat\n456\nCat\n789"]
reg.exec(str);    // ["Cat", index: 12, input: "123\ncat\n456\nCat\n789"]
reg.exec(str);    // null
```

#### search

`string.search(regExp)`：返回正则表达式第一次匹配的位置，匹配不到则返回`-1`，类似`string.indexOf()`。示例如下：

``` javascript
'123,cat,456,Cat,789'.search(/cat/);    // 4
'123,cat,456,Cat,789'.search(/789/);    // -1
```

##### 标志g的作用

加与不加没有区别。

#### match

`string.match(regExp)`：将匹配的字符串结果以数组的方式返回。

这个函数也是很常用的。示例如下：

``` javascript
'123,cat,456,Cat,789'.match(/\d+/);    // ["123"]
```

##### 标志g的作用

如果没有设置`g`，则`match`返回的结果和`exec`相同。但是如果正则表达式设置了`g`修饰符，则`match`和`exec`的行为就不一样了。在`match`中设置了`g`修饰符的正则表达式在完成一次成功匹配后不会停止，会继续找到所有可以匹配到的字符。

示例如下：

``` javascript
'123,cat,456,Cat,789'.match(/\d+/g);    // ["123", "456", "789"]
```

下面是正则表达式中三个标志同时使用的例子：

``` javascript
'123\ncat\n456\nCat\n789'.match(/^cat$/img);    // ["cat", "Cat"]
```

#### split

`string.split(regExp)`：返回按照正则表达式匹配分割后的数组。示例如下：

``` javascript
'123,cat,456,Cat,789'.split(/,cat,/i);    // ["123", "456", "789"]
```

##### 标志g的作用

加与不加没有区别。

#### replace

`string.replace(regExp, replacement)`：它的作用是将字符串中匹配正则表达式的部分用`replacement`替换，可以是字符串，也可以是函数。

这个函数很强大，一但学会了用起来很风骚(:酷:)！示例如下：

``` javascript
'123,cat,456,Cat,789'.replace(/\d+/, '000');    // "000,cat,456,Cat,789"
```

###### 注意
原字符串并不会被修改，而是替换结果作为返回值被返回。

##### 标志g的作用

如果设置`g`修饰符，会替换掉所有匹配的部分。示例如下：

``` javascript
'123,cat,456,Cat,789'.replace(/\d+/g, '000');    // "000,cat,000,Cat,000"
```

##### 使用$引用捕获分组匹配的结果

就像在正则表达式里面我们可以使用`\1`来引用第一个捕获分组所匹配的结果一样，我们在`replace`函数的替换字符串里也可以使用`$1`来引用相同的内容。示例如下：

``` javascript
'123,cat,456,Cat,789'.replace(/(\d)\d(\d)/g, '$10$2');    // "103,cat,406,Cat,709"
```

##### 使用函数

`replacement`可以是函数，这时`replace`的功能就更加强大了(:酷:)(:酷:)。函数的第一个参数是整个正则表达式所匹配的结果，后续参数是正则表达式中各个捕获分组匹配的结果，倒数第二个参数为`index`项，倒数第一个参数为`input`项，和`exec`的结果类似，函数需要返回替换的结果。

示例如下：

``` javascript
'123,cat,456,Cat,789'.replace(/(\d)\d(\d)/g, function(m, $1, $2) {
	return $1 * $2;
});    // "3,cat,24,Cat,63"
```

------

###### 参考

- [[W3School] JavaScript RegExp 对象](http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)
- <http://blog.sina.com.cn/s/blog_7256fe8f01017poa.html>
- <http://www.blog.lty0311.com/article/685.html>
- <http://www.cnblogs.com/shunyao8210/archive/2008/11/13/1332591.html>
