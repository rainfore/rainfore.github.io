<template>
<div :class="$style.root">
    <u-particle-canvas :class="$style.canvas"></u-particle-canvas>
    <router-view></router-view>
</div>
</template>

<script>
export default {

};
</script>

<style module>
body {
    margin: 0;
    background: #dae7ec;
}

.root {

}

.canvas {
    position: absolute;
    z-index: -1;
}

.header {
    background: black;
    width: 600px;
    height: 60px;
    margin: 0 auto;
}
</style>
