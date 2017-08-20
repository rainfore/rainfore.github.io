<template>
<div>
    <component v-for="article in articles" :is="article"></component>
</div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                require('./20170820~git同步远程仓库.md?partial=true').default,
                require('./20170628~尤大的Live笔记.md?partial=true').default,
                require('./20170628~柯里化与反柯里化/index.md?partial=true').default,
                // require('./20170628~Three入门/Index.vue?partial=true').default,
                require('./20170623~几款Markdown的JS解析器对比/index.md?partial=true').default,
                require('./20170405~几款前端框架对比/index.md?partial=true').default,
                require('./20161030~网易蜂巢的工业化前端架构/index.md?partial=true').default,
                require('./20160531~拖拽那些事儿/index.md?partial=true').default,
                require('./20160131~终结者——网易蜂巢WebTerminal的开发历程/index.md?partial=true').default,
                require('./20151220~中文网页字体的最佳选择.md?partial=true').default,
                require('./20150310~SourceMap详解/index.md?partial=true').default,
                require('./20150105~JavaScript中正则表达式的应用.md?partial=true').default,
                require('./20141211~纯CSS画基本图形/index.md?partial=true').default,
            ],
        };
    },
};
</script>
