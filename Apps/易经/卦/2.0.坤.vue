<template>
<div>
    <h1>坤为地</h1>
    <u-gua :id="id"></u-gua>
</div>
</template>

<script>
import UGua from './components/u-gua.vue';

export default {
    components: { UGua },
    data() {
        return {
            id: 0,
        };
    },
}
</script>

