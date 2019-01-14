<template>
<div>
    <h1>乾为天</h1>
    <u-gua :id="id"></u-gua>
</div>
</template>

<script>
import UGua from './components/u-gua.vue';

export default {
    components: { UGua },
    data() {
        return {
            id: 63,
        };
    },
}
</script>

