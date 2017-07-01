---
created-date: 2014-12-11
modified-date: 2014-12-11
tags: [ CSS, 图形 ]
---

<style>
.square {margin: .146em; width: .707em; height: .707em; background: #2ecc71;}
.rectangle {margin: .238em .075em; width: .850em; height: .525em; background: #2ecc71;}
.circle {width: 1em; height: 1em; border-radius: 50%; background: #e67e22;}
.oval {margin: .191em 0; width: 1em; height: .618em; border-radius: .5em / .309em; background: #e67e22;}
.triangle-top {margin: 0 .067em .25em; width: 0; border-left: .433em solid transparent; border-right: .433em solid transparent; border-bottom: .75em solid #f1c40f;}
.triangle-bottom {margin: .25em .067em 0; width: 0; border-left: .433em solid transparent; border-right: .433em solid transparent; border-top: .75em solid #f1c40f;}
.triangle-left {margin: .067em 0; margin-left: .25em; width: 0; border-top: .433em solid transparent; border-bottom: .433em solid transparent; border-left: .75em solid #f1c40f;}
.triangle-right {margin: .067em 0; margin-right: .25em; width: 0; border-top: .433em solid transparent; border-bottom: .433em solid transparent; border-right: .75em solid #f1c40f;}
.triangle-topleft {margin: .146em; width: 0; border-top: .707em solid #f1c40f; border-right: .707em solid transparent;}
.triangle-topright {margin: .146em; width: 0; border-top: .707em solid #f1c40f; border-left: .707em solid transparent;}
.triangle-bottomleft {margin: .146em; width: 0; border-bottom: .707em solid #f1c40f; border-right: .707em solid transparent;}
.triangle-bottomright {margin: .146em; width: 0; border-bottom: .707em solid #f1c40f; border-left: .707em solid transparent;}
.parallelogram {margin: .25em .211em; width: .578em; height: .5em; -webkit-transform: skew(-30deg); -moz-transform: skew(-30deg); -ms-transform: skew(-30deg); -o-transform: skew(-30deg); transform: skew(-30deg); background: #2ecc71;}
.trapezoid {margin-top: .067em; margin-bottom: .5em; width: .5em; border-left: .25em solid transparent; border-right: .25em solid transparent; border-bottom: .433em solid #2ecc71;}
.pentagon {position: relative; margin: .345em .025em .096em; width: .588em; border-left: .181em solid transparent; border-right: .181em solid transparent; border-top: .559em solid #2ecc71;}
.pentagon:before {content: ''; position: absolute; bottom: .555em; /* .559em */ left: -.181em; width: 0; border-left: .476em solid transparent; border-right: .476em solid transparent; border-bottom: .345em solid #2ecc71;}
.hexagon {position: relative; margin: .25em .067em; width: .866em; height: .5em; background: #2ecc71;}
.hexagon:before, .hexagon:after {content: ''; position: absolute; left: 0; width: 0; border-left: .433em solid transparent; border-right: .433em solid transparent;}
.hexagon:before {top: -.248em; /* -.25em */ border-bottom: .25em solid #2ecc71;}
.hexagon:after {bottom: -.248em; /* -.25em */ border-top: .25em solid #2ecc71;}
.octagon {position: relative; margin: .308em .038em; width: .924em; height: .383em; background: #2ecc71;}
.octagon:before, .octagon:after {content: ''; position: absolute; left: 0; width: .383em; border-left: .271em solid transparent; border-right: .271em solid transparent;}
.octagon:before {top: -.266em; /* -.271em */ border-bottom: .271em solid #2ecc71;}
.octagon:after {bottom: -.266em; /* -.271em */ border-top: .271em solid #2ecc71;}
.star5 {position: relative; margin: .345em .025em .309em; width: 0; border-right: .476em solid transparent; border-left: .476em solid transparent; border-top: .345em solid #9b59b6;}
.star5:before, .star5:after {content: ''; position: absolute; top: -.351em; width: 0; border-right: .476em solid transparent; border-left: .476em solid transparent; border-top: .345em solid #9b59b6;}
.star5:before {left: -.459em; -webkit-transform: rotate(-72deg); -moz-transform: rotate(-72deg); -ms-transform: rotate(-72deg); -o-transform: rotate(-72deg); transform: rotate(-72deg);}
.star5:after {left: -.492em; -webkit-transform: rotate(72deg); -moz-transform: rotate(72deg); -ms-transform: rotate(72deg); -o-transform: rotate(72deg); transform: rotate(72deg);}
.star6 {position: relative; margin: 0 .067em; width: 0; border-left: .433em solid transparent; border-right: .433em solid transparent; border-bottom: .75em solid #9b59b6;}
.star6:after {content: ''; position: absolute; top: .25em; left: -.433em; width: 0; border-left: .433em solid transparent; border-right: .433em solid transparent; border-top: .75em solid #9b59b6;}
.star8 {position: relative; margin: .146em; width: .707em; height: .707em; background: #9b59b6;}
.star8:after {content: ''; position: absolute; left: 0; width: .707em; height: .707em; background: #9b59b6;-webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg);}
.star12 {position: relative; margin: .146em; width: .707em; height: .707em; background: #9b59b6;}
.star12:before, .star12:after {content: ''; position: absolute; left: 0; width: .707em; height: .707em; background: #9b59b6;}
.star12:before {-webkit-transform: rotate(-30deg); -moz-transform: rotate(-30deg); -ms-transform: rotate(-30deg); -o-transform: rotate(-30deg); transform: rotate(-30deg);}
.star12:after {-webkit-transform: rotate(30deg); -moz-transform: rotate(30deg); -ms-transform: rotate(30deg); -o-transform: rotate(30deg); transform: rotate(30deg);}
.egg {margin: 0 .167em; width: 0.667em; height: 1em; background-color: #e74c3c; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;}
.heart {position: relative; margin: 0.043em auto 0; width: .561em;}
.heart:before, .heart:after {content: ''; position: absolute; top: 0; left: 0; width: .561em; height: .841em; background: #e74c3c; border-radius: .280em .280em 0 0; -webkit-transform-origin: 50% 66.7%; -moz-transform-origin: 50% 66.7%; -ms-transform-origin: 50% 66.7%; -o-transform-origin: 50% 66.7%; transform-origin: 50% 66.7%;}
.heart:before {-webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg);}
.heart:after {-webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg);}
.pacman {width: 0; border-right: .5em solid transparent; border-top: .5em solid #e74c3c;
 border-left: .5em solid #e74c3c; border-bottom: .5em solid #e74c3c; border-radius: .5em;}
.diamond {position: relative; margin-top: .5em; width: 0; border-left: .5em solid transparent; border-right: .5em solid transparent; border-top: .5em solid #34495e;}
.diamond:after {content: ''; position: absolute; top: -.748em; /* -.75em */ left: -.5em; width: .5em; border-left: .25em solid transparent; border-right: .25em solid transparent; border-bottom: .25em solid #34495e;}
.infinity {position: relative; margin: .257em; width: 0;}
.infinity:before, .infinity:after {content: ''; position: absolute; width: .243em; height: .243em; border: .120em solid #34495e;}
.infinity:before {left: -.258em; border-radius: .4em .4em 0 .4em; -webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg);}
.infinity:after {left: .258em; border-radius: .4em .4em .4em 0; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg);}
.yinyang {position: relative; width: 1em; height: .5em; border-bottom: .5em solid #34495e; border-radius: 100%; background: white; -webkit-animation: rotate 5s linear infinite;}
.yinyang:before, .yinyang:after {content: ''; position: absolute; top: 50%; width: .171em; /* .167em */ height: .167em; border-radius: 50%;}
.yinyang:before {left: 0; background: white; border: .167em solid #34495e;}
.yinyang:after {left: 50%; background: #34495e; border: .167em solid white;}
@keyframes rotate {from {-webkit-transform:rotate(0deg);} to {-webkit-transform:rotate(360deg);}}
@-webkit-keyframes rotate {from {-webkit-transform:rotate(0deg);} to {-webkit-transform:rotate(360deg);}}
@-moz-keyframes rotate {from {-webkit-transform:rotate(0deg);} to {-webkit-transform:rotate(360deg);}}
</style>
<style>
.m-boxes {text-align: center;}
.m-box {box-sizing: content-box; display: inline-block; margin: 20px 30px;}
.m-box .shape {width: 200px; height: 200px; background: #ddd; font-size: 200px; border-radius: 50%; border: 5px solid #eee; margin-bottom: 10px;}
.m-box .text {}
</style>

CSS真是强大啊！学习了一篇文章制作出下面的图形，并做了一些改进。首先，使用单位`em`，意味着可以方便的使用父容器的`font-size`属性来改变图形的大小。其次，为了美观，将所有的图形与单位圆内切来标准化。不多说了，直接对照下面的类名看[这里的CSS](css/shape.css)吧，也可以打开开发人员工具查看参数，还是觉得最后一个八卦最霸气！

<div class="m-boxes">
    <div class="m-box">
        <div class="shape"><div class="square"></div></div>
        <div class="text">正方形</div>
        <div class="text">`.square`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="rectangle"></div></div>
        <div class="text">长方形</div>
        <div class="text">`.rectangle`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="circle"></div></div>
        <div class="text">圆形</div>
        <div class="text">`.circle`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="oval"></div></div>
        <div class="text">椭圆</div>
        <div class="text">`.oval`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="triangle-top"></div></div>
        <div class="text">正三角形-上</div>
        <div class="text">`.triangle-top`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="triangle-bottom"></div></div>
        <div class="text">正三角形-下</div>
        <div class="text">`.triangle-bottom`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="triangle-left"></div></div>
        <div class="text">正三角形-左</div>
        <div class="text">`.triangle-left`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="triangle-right"></div></div>
        <div class="text">正三角形-右</div>
        <div class="text">`.triangle-right`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="triangle-topleft"></div></div>
        <div class="text">等腰直角三角形-左上</div>
        <div class="text">`.triangle-topleft`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="triangle-topright"></div></div>
        <div class="text">等腰直角三角形-右上</div>
        <div class="text">`.triangle-topright`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="triangle-bottomleft"></div></div>
        <div class="text">等腰直角三角形-左下</div>
        <div class="text">`.triangle-bottomleft`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="triangle-bottomright"></div></div>
        <div class="text">等腰直角三角形-右下</div>
        <div class="text">`.triangle-bottomright`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="parallelogram"></div></div>
        <div class="text">平行四边形</div>
        <div class="text">`.parallelogram`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="trapezoid"></div></div>
        <div class="text">等腰梯形</div>
        <div class="text">`.trapezoid`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="pentagon"></div></div>
        <div class="text">正五边形</div>
        <div class="text">`.pentagon`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="hexagon"></div></div>
        <div class="text">正六边形</div>
        <div class="text">`.hexagon`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="octagon"></div></div>
        <div class="text">正八边形</div>
        <div class="text">`.octagon`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="star5"></div></div>
        <div class="text">五角星</div>
        <div class="text">`.star5`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="star6"></div></div>
        <div class="text">六角星</div>
        <div class="text">`.star6`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="star8"></div></div>
        <div class="text">八角星</div>
        <div class="text">`.star8`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="star12"></div></div>
        <div class="text">十二角星</div>
        <div class="text">`.star12`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="egg"></div></div>
        <div class="text">鸡蛋</div>
        <div class="text">`.egg`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="heart"></div></div>
        <div class="text">心形</div>
        <div class="text">`.heart`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="pacman"></div></div>
        <div class="text">吃豆人</div>
        <div class="text">`.pacman`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="diamond"></div></div>
        <div class="text">钻石</div>
        <div class="text">`.diamond`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="infinity"></div></div>
        <div class="text">无穷</div>
        <div class="text">`.infinity`</div>
    </div>
    <div class="m-box">
        <div class="shape"><div class="yinyang"></div></div>
        <div class="text">八卦</div>
        <div class="text">`.yinyang`</div>
    </div>
</div>

------

###### 参考

- http://spion.blog.163.com/blog/static/187244272201272791123671/0
