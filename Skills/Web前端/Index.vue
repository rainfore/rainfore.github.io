<template>
<div>
    <div :class="$style.header"></div>
    <u-article></u-article>
</div>
</template>

<style module>
.header {
    position: relative;
    z-index: 4;
    width: 100%;
    height: 280px;
    background: white url('./background.jpg') center center no-repeat;
    background-size: auto 100%;
    border-top: 1px solid $border-color-light;
    box-shadow: $box-shadow-base;
}
</style>
