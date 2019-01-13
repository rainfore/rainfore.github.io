<template>
<div>
    <component :is="article" v-for="article in articles" :key="article.title"></component>
</div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                require('./Mac查看端口占用情况.md?partial=true').default,
            ],
        };
    },
};
</script>
