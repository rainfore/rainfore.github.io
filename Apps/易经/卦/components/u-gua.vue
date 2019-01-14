<template>
<div :class="$style.卦">
    <div :class="$style.爻" v-for="(binary, index) in binaries" :key="index" :阳="binary" :style="{ bottom: index * 70 + 'px' }">
    </div>
</div>
</template>

<script>
export default {
    name: 'u-gua',
    props: {
        id: { type: Number, default: 0 },
    },
    data() {
        const binaries = this.id.toString(2).padStart(6, '0').split('').reverse().map((bool) => !!(+bool));

        return {
            binaries,
        };
    }
}
</script>

<style module>
.卦 {
    position: relative;
    width: 240px;
    height: 390px;
}

.爻 {
    position: absolute;
    width: 100%;
    height: 40px;
}

.爻::before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100%;
    background: black;
}

.爻::after {
    display: block;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 42%;
    height: 100%;
    background: black;
}

.爻[阳] {
    background: black;
}
</style>
