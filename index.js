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

new Vue({ router }).$mount('#app');
