import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Install common components
import { installComponents } from './src/utils';
import Logo from './src/common/u-logo.vue';
import Button from 'u-button.vue';
import Container from './src/common/u-container.vue';
import Article from './src/common/u-article.vue';
import ParticleCanvas from './src/common/u-particle-canvas.vue';
import Navbar from './src/common/u-navbar.vue';
import NavbarItem from './src/common/u-navbar-item.vue';
installComponents([Logo, Button, Container, Article, ParticleCanvas, Navbar, NavbarItem]);

import 'u-base.vue/base.css';

import routes from './routes';
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "子霂 | Rainfore's Craft";
    next();
});

new Vue({ router }).$mount('#app');
