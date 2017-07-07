<template>
<div>
    <div :class="$style.header"></div>
    <router-view></router-view>
</div>
</template>

<style module>
.header {
    position: relative;
    z-index: 4;
    width: 100%;
    height: 280px;
    background: white url('./header.jpg') center center no-repeat;
    background-size: auto 100%;
    border-top: 1px solid $border-color-light;
    box-shadow: $box-shadow-base;
}
</style>
