<template>
<div>
    <h1>地天泰</h1>
    <u-gua :id="id"></u-gua>
</div>
</template>

<script>
import UGua from './components/u-gua.vue';

export default {
    components: { UGua },
    data() {
        return {
            id: 7,
        };
    },
}
</script>

