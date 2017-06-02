// const path2component = (path) => ((resolve) => require([path], resolve));

export default [
    { path: '/', component: require('./Index.vue') },
    { path: '/Profile', component: (resolve) => require(['./Profile.vue'], resolve) },
    { path: '/Skills', component: (resolve) => require(['./Skills/Index.vue'], resolve), children: [
        { path: '', component: (resolve) => require(['./Skills/List.vue'], resolve) },
        { path: 'Mac', component: (resolve) => require(['./Skills/Mac/Index.vue'], resolve), children: [
            { path: encodeURIComponent('Mac查看端口占用情况'), component: (resolve) => require(['./Skills/Mac/Mac查看端口占用情况.md'], resolve) },
        ] },
    ] },
];
