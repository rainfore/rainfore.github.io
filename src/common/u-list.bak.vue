<template>
<div>
    <h2 v-for="article in list"><router-link :to="article.path">{{ article.title }}</router-link></h2>
</div>
</template>

<script>
import { findRoute } from 'src/utils';

export default {
    data() {
        const routes = findRoute(this.$router.options.routes, this.$route.path).children;
        return {
            list: routes.filter((route) => route.path).map((route) => {
                if (/^\d{8}~/.test(route.path)) {
                    return {
                        path: route.path + '/',
                        title: route.path.split('~')[1],
                    };
                } else {
                    return {
                        path: route.path + '/',
                        title: route.path,
                    };
                }
            }),
        };
    },
};
</script>
