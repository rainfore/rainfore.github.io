<template>
<div :class="$style.root">
    <u-particle-canvas :class="$style.canvas"></u-particle-canvas>
    <header :class="$style.header">Header</header>
</div>
</template>

<script>
export default {

};
</script>

<style module>
body {
    margin: 0;
}

.root {

}

.canvas {
    position: absolute;
    z-index: 0;
}

.header {
    background: black;
    width: 600px;
    height: 60px;
    margin: 0 auto;
}
</style>
