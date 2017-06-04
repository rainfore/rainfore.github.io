<template>
<article :class="$style.root">
    <router-view></router-view>
</article>
</template>

<script>
export default {};
</script>

<style module>
.root {
    width: 960px;
    background: rgba(255,255,255,0.8);
    margin: 0 auto;
    padding: 20px;
}
</style>
