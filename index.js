import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Install common components
import { installComponents } from './lib/utils';
import Logo from './lib/specific/s-logo.vue';
import Container from './lib/specific/s-container.vue';
import ParticleCanvas from './lib/common/u-particle-canvas.vue';
installComponents([Logo, Container, ParticleCanvas]);

import routes from './views/routes';
const router = new VueRouter({ mode: 'history', routes });
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '乌瑟尔的世界';
    next();
});

new Vue({ router }).$mount('#app');
