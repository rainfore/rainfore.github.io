<template>
<div :class="$style.root">
    <div :class="$style.卦" v-for="(卦, index) in 先天八卦" :key="卦.id" :style="{
        transform: `rotate(${-90 + 45 * index}deg`,
        transformOrigin: 'bottom',
    }">
        <div>{{ 卦.别名 }}</div>
        <div>{{ 卦.名 }}</div>
        <div>{{ 卦.符 }}</div>
        <div>{{ 卦.号 }}</div>
    </div>
    <div :class="$style.位"></div>
</div>
</template>

<script>
import { 先天八卦, 后天八卦 } from './data/八卦';

export default {
    data() {
        return {
            先天八卦,
        };
    },
};
</script>

<style module>
.root {
    position: relative;
    margin: 0 auto;
    width: 400px;
    height: 400px;
}

.卦 {
    position: absolute;
    text-align: center;
    top: 0;
    left: 200px;
    padding-bottom: 60px;
}
</style>
