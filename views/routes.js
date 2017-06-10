// const path2component = (path) => ((resolve) => require([path], resolve));

export default [
    { path: '/Profile', component: (resolve) => require(['./Profile.vue'], resolve), meta: { title: '个人简历' } },
    { path: '/', component: require('lib/specific/s-container.vue'), children: [
        { path: '', component: (resolve) => require(['./Index.vue'], resolve) },
        { path: 'Skills', component: (resolve) => require(['lib/specific/s-empty.vue'], resolve), children: [
            { path: '', component: (resolve) => require(['./Skills/List.vue'], resolve) },
            { path: encodeURIComponent('Web前端'), component: (resolve) => require(['./Skills/Web前端/Index.vue'], resolve) },
            { path: 'Mac', component: (resolve) => require(['./Skills/Mac/Index.vue'], resolve), children: [
                { path: encodeURIComponent('Mac查看端口占用情况'), component: (resolve) => require(['./Skills/Mac/Mac查看端口占用情况.md'], resolve) },
            ] },
            { path: 'Linux', component: (resolve) => require(['./Skills/Linux/Index.vue'], resolve), children: [
                { path: encodeURIComponent('Linux临时设置代理'), component: (resolve) => require(['./Skills/Linux/Linux临时设置代理.md'], resolve) },
            ] },
        ] },
    ] },
];
