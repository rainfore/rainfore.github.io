<template>
<div>
    <div :class="$style.header"></div>
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
.header {
    /*position: absolute;
    z-index: $z-index-background;*/
    position: relative;
    z-index: 4;
    width: 100%;
    height: 360px;
    background: #f7f1e3 url(/public/fed.jpg) center center no-repeat;
    background-size: auto 100%;
    box-shadow: $box-shadow-base;
}

.article {
    position: relative;
    z-index: $z-index-base;
    width: 760px;
    min-height: 400px;
    background: white;
    margin: 40px auto;
    padding: 20px;
    box-shadow: $box-shadow-base;
}
</style>
