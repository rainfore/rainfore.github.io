import Vue from 'vue';

export const installComponents = (Components) => {
    Components.forEach((Component) => Vue.component(Component.options ? Component.options.name : Component.name, Component));
};

export const findRoute = (routes, path) => {
    const route = routes.find((route) => route.path && path.startsWith(route.path));
    if (route) {
        let length = route.path.length;
        length = route.path[length - 1] === '/' ? length : length + 1;
        path = path.slice(length);
        return !path ? route : findRoute(route.children || [], path);
    } else
        return route;
};
