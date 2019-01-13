<template>
<u-gua :id="id"></u-gua>
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

