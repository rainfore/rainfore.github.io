<template>
<a :class="$style.root">
    <img :class="$style.img" src="/public/logo.png" height="80">
</a>
</template>

<script>
export default {
    name: 's-logo',
};
</script>

<style module>
.root {
    display: block;
    float: left;
    background: black;
}

.img {
    display: block;
    margin-top: -2px;
}
</style>
