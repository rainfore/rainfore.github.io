<template>
<article :class="$style.root">
    <router-view></router-view>
</article>
</template>

<script>
export default {
    data() {
        return {
            content: undefined,
        };
    },
    // watch: {
    //     $route: {
    //         immediate: true,
    //         handler($route) {
    //             if ($route.params.article === 'Mac查看端口占用情况') {
    //                 require(['./查看端口占用情况.md'], (content) => {
    //                     this.content = content;
    //                 });
    //             }
    //         },
    //     },
    // },
};
</script>

<style module>
.root {
    width: 960px;
    background: rgba(255,255,255,0.8);
    margin: 0 auto;
    padding: 20px;
}
</style>
