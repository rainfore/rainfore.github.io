<template>
<div>
    <div :class="$style.header"></div>
    <s-article></s-article>
</div>
</template>

<style module>
.header {
    /*position: absolute;
    z-index: $z-index-background;*/
    position: relative;
    z-index: 4;
    width: 100%;
    height: 280px;
    background: white url(/public/fed.jpg) center center no-repeat;
    background-size: auto 100%;
    border-top: 1px solid $border-color-light;
    box-shadow: $box-shadow-base;
}
</style>
