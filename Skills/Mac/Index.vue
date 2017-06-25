<template>
<div>
    <div :class="$style.background"></div>
    <u-article></u-article>
</div>
</template>

<style module>
.background {
    position: fixed;
    z-index: $z-index-background;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(/public/Yosemite.jpg) no-repeat;
    background-size: cover;
}
</style>
