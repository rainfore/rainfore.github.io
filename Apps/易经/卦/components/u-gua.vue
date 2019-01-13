<template>
<div :class="$style.gua">
    <div :class="$style.yao" v-for="(binary, index) in binaries" :key="index" :yang="binary">
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
        const binaries = this.id.toString(2).padStart(6, '0').split('').map((bool) => !!(+bool));

        return {
            binaries,
        };
    }
}
</script>

<style module>
.gua {
    width: 240px;
}

.yao {
    position: relative;
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
}

.yao::before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 42%;
    height: 100%;
    background: black;
}

.yao::after {
    display: block;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 42%;
    height: 100%;
    background: black;
}

.yao[yang] {
    background: black;
}
</style>
