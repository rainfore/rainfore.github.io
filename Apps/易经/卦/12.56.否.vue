<template>
<div>
    <h1>天地否</h1>
    <u-gua :id="id"></u-gua>
</div>
</template>

<script>
import UGua from './components/u-gua.vue';

export default {
    components: { UGua },
    data() {
        return {
            id: 56,
        };
    },
}
</script>

