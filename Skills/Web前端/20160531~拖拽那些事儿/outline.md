## 拖拽概述

------

#### 拖拽的定义

- 应用层
- 代理层
- 事件层

------

#### 常见的框架

- WinForm 代理层
- Android 代理层
- HTML5 代理层
- ActionScript 事件层
- jQuery UI 事件层 + 应用层
- Dragula 应用层
- Regular UI - Drag&Drop 事件层
- Kendo UI 事件层

------

### HTML5 API

- draggable属性

- ondragstart
- ondrag
- ondragend
- ondragenter
- ondragover
- ondragleave
- ondrop

------

clientX
clientY
pageX
pageY
screenX
screenY

clientLeft
clientTop
clientWidth
clientHeight
offsetLeft
offsetTop
offsetWidth
offsetHeight
scrollTop
scrollLeft
scrollWidth
scrollHeight


proxy, helper, dragShadow, dragImage
range, container, restriction
source, handle
target

### TODOS

- document 和 window
- transform
- autoScroll
- revert


- 螺旋？








<restrictDraggable></restrictDraggable>

<dragger handle={this.$refs.modalHead}>
    <div class="m-modal">
        <div class="modal_hd">
        </div>
    </div>
</dragger>

<draggable>
    <li class="efwe">Test</li>
</draggable>


- 弹窗拖拽
- 拖拽约束

- 列表排序（标记型）
- 列表排序（占位型）
- 网格排序（占位型）
- 互相拖拽
- 拒绝

- slider
- pallette
- splitter
- resizable

为什么不用handle方式
1. 用handle时，draggable的source在动；用helper时source又不动，有点混乱


关于slider的坑，这次由于时间原因就不讲了
