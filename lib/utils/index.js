import Vue from 'vue';

export const installComponents = (Components) => {
    Components.forEach((Component) => Vue.component(Component.options ? Component.options.name : Component.name, Component));
};
