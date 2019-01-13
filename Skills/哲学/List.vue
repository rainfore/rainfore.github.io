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
                require('./哲学概念梳理.md?partial=true').default,
                require('./名句收集.md?partial=true').default,
            ],
        };
    },
};
</script>
