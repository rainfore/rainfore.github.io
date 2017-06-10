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
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    background: black;
}

.img {
    display: block;
    margin-top: -2px;
}
</style>
