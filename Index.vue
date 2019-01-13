<template>
<div>
    <component v-for="article in articles" :key="article.title" :is="article"></component>
</div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                require('./Skills/Web前端/20170907~跨产品的组件化解决方案/index.md?partial=true').default,
                require('./Skills/Web前端/20170820~git的fork项目与原项目同步.md?partial=true').default,
                require('./Skills/Web前端/20170628~柯里化与反柯里化/index.md?partial=true').default,
                require('./Skills/Web前端/20170623~几款Markdown的JS解析器对比/index.md?partial=true').default,
                require('./Skills/Web前端/20170405~几款前端框架对比/index.md?partial=true').default,
                require('./Skills/Web前端/20161030~网易蜂巢的工业化前端架构/index.md?partial=true').default,
                require('./Skills/Web前端/20160531~拖拽那些事儿/index.md?partial=true').default,
                require('./Skills/Web前端/20160131~终结者——网易蜂巢WebTerminal的开发历程/index.md?partial=true').default,
                require('./Skills/Web前端/20151220~中文网页字体的最佳选择.md?partial=true').default,
                require('./Skills/Web前端/20150310~SourceMap详解/index.md?partial=true').default,
                require('./Skills/Web前端/20150105~JavaScript中正则表达式的应用.md?partial=true').default,
            ],
        };
    },
};
</script>
