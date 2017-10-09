<template>
<div :class="$style.root">
    <u-particle-canvas :class="$style.canvas"></u-particle-canvas>
    <nav :class="$style.nav" :shadow-hidden="navShadowHidden">
        <div :class="$style.wrapper">
            <u-logo></u-logo>
            <u-navbar :class="$style.navbar">
                <u-navbar-item to="/" exact>首页</u-navbar-item>
                <u-navbar-item to="/Skills/Web前端/">Web前端</u-navbar-item>
                <u-navbar-item to="/Skills/哲学/">哲学</u-navbar-item>
                <u-navbar-item to="/Skills/Mac/">Mac技巧</u-navbar-item>
            </u-navbar>
        </div>
    </nav>
    <div :class="$style.header"></div>
    <slot>
        <router-view></router-view>
    </slot>
</div>
</template>

<script>
export default {
    name: 'u-container',
    computed: {
        navShadowHidden() {
            return this.$route.matched.some((route) => route.meta.navShadowHidden);
        },
    },
};
</script>

<style module>
body {
    margin: 0;
    background: #f5f7f9;
    color: #363636;
    text-rendering: geometricPrecision;
}

::selection {
    color: #fff;
    background: rgba(210, 47, 37, 0.7);
}

.root {
    overflow-x: hidden;
}

.canvas {
    position: fixed;
    z-index: $z-index-background;
    top: 0;
    opacity: 0.4;
}

.nav {
    position: relative;
    z-index: $z-index-base;
    font-family: Cinzel, serif;
    text-transform: lowercase;
    border-top: 2px solid black;
    background: white;
    color: black;
    height:66px;
    box-shadow: $box-shadow-base;
}

.nav[shadow-hidden] {
    box-shadow: none;
}

.navbar {}

.wrapper {
    position: relative;
    width: 900px;
    margin: 0 auto;
}

@media screen and (max-width: $media-md-max-width) {
    .wrapper {
        width: auto;
    }

    .navbar {
        float: none !important;
    }
}

.header {
    position: relative;
    z-index: $z-index-base;
    clear: both;
}

</style>
