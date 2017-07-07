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
                require('./Mac查看端口占用情况.md?partial=true'),
            ],
        };
    },
};
</script>
