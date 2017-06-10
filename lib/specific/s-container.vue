<template>
<div :class="$style.root">
    <u-particle-canvas :class="$style.canvas"></u-particle-canvas>
    <nav :class="$style.navbar">
        <div :class="$style.wrapper">
            <s-logo></s-logo>
            <ul :class="$style.nav">
                <li :class="$style['nav-item']"><a>首页</a></li>
                <li :class="$style['nav-item']"><a>Web前端</a></li>
                <li :class="$style['nav-item']"><a>摄影</a></li>
                <li :class="$style['nav-item']"><a>分享</a></li>
            </ul>
        </div>
    </nav>
    <div :class="$style.header"></div>
    <!-- <div :class="$style.body"> -->
        <slot>
            <router-view></router-view>
        </slot>
    <!-- </div> -->
</div>
</template>

<script>
export default {
    name: 's-container',
};
</script>

<style module>
body {
    margin: 0;
    background: #f5f7f9;
    text-rendering: geometricPrecision;
}

.root {}

.canvas {
    position: fixed;
    z-index: $z-index-background;
    top: 0;
    opacity: 0.4;
}

.navbar {
    position: relative;
    z-index: $z-index-base;
    font-family: Cinzel, serif;
    text-transform: lowercase;
    border-top: 2px solid black;
    background: white;
    height:66px;
    box-shadow: $box-shadow-base;
}

.wrapper {
    position: relative;
    width: 900px;
    margin: 0 auto;
}

.nav {
    float: right;
}

.nav-item {
    display: inline-block;
}

.nav-item a {
    display: inline-block;
    line-height: 62px;
    padding: 0 20px;
    text-align: center;
    transition: all .2s;
}

.nav-item a:hover {
    color: #d22f25;
}

.header {
    position: relative;
    z-index: $z-index-base;
    clear: both;
}

.body {
    position: relative;
    z-index: $z-index-base;
    margin: 40px auto;
    width: 900px;
}
</style>
