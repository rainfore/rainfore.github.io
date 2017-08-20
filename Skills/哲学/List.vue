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
                require('./哲学概念梳理.md?partial=true').default,
                require('./名句收集.md?partial=true').default,
            ],
        };
    },
};
</script>
