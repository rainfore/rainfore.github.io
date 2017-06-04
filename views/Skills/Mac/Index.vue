<template>
<div>
    <div :class="$style.background"></div>
    <article :class="$style.article">
        <router-view></router-view>
    </article>
</div>
</template>

<script>
export default {
    data() {
        return {
            content: undefined,
        };
    },
};
</script>

<style module>
.background {
    position: absolute;
    z-index: $z-index-background;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(/public/Yosemite.jpg) no-repeat;
    background-size: cover;
}

.article {
    position: relative;
    z-index: $z-index-base;
    width: 760px;
    min-height: 400px;
    background: white;
    margin: 40px auto;
    margin-top: 120px;
    padding: 20px;
    box-shadow: $box-shadow-base;
}
</style>
