<template>
<router-link :class="$style.root" to="/">
    <img :class="$style.img" src="/public/logo.png" height="80">
</router-link>
</template>

<script>
export default {
    name: 'u-logo',
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

@media screen and (max-width: $media-md-max-width) {
    .root {
        left: 50%;
        margin-left: -100px;
    }
}

.img {
    display: block;
    margin-top: -2px;
}
</style>
