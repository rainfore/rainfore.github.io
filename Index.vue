<template>
<div :class="$style.root">
    <u-article v-for="comp in comps">
        <component :is="comp"></component>
    </u-article>
</div>
</template>

<script>
export default {
    data() {
        return {
            comps: [
                require('./Skills/Web前端/20170628~柯里化与反柯里化/index.md?partial=true'),
                require('./Skills/Web前端/20170623~几款Markdown的JS解析器对比/index.md?partial=true'),
                require('./Skills/Web前端/20161030~网易蜂巢的工业化前端架构/index.md?partial=true'),
                require('./Skills/Web前端/20151220~中文网页字体的最佳选择.md?partial=true'),
                require('./Skills/Web前端/20150310~SourceMap详解/index.md?partial=true'),
                require('./Skills/Web前端/20150105~JavaScript中正则表达式的应用.md?partial=true'),
            ],
        };
    },
};
</script>

<style module>

</style>
