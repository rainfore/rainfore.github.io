export default [
    { path: '/Profile', component: (resolve) => require(['./Profile.vue'], resolve), meta: { title: '个人简历' } },
    { path: '/', component: require('lib/specific/s-container.vue'), children: [
        { path: '', component: (resolve) => require(['./Index.vue'], resolve) },
        { path: 'Skills', component: (resolve) => require(['lib/specific/s-empty.vue'], resolve), children: [
            { path: '', component: (resolve) => require(['./Skills/List.vue'], resolve) },
            { path: encodeURIComponent('Web前端'), component: (resolve) => require(['./Skills/Web前端/Index.vue'], resolve), meta: { navShadowHidden: true }, children: [
                { path: encodeURIComponent('中文网页字体的最佳选择'), component: (resolve) => require(['./Skills/Web前端/中文网页字体的最佳选择.md'], resolve) },
                { path: encodeURIComponent('JavaScript中正则表达式的应用'), component: (resolve) => require(['./Skills/Web前端/JavaScript中正则表达式的应用.md'], resolve) },
                { path: encodeURIComponent('几款Markdown的JS解析器对比'), component: (resolve) => require(['./Skills/Web前端/几款Markdown的JS解析器对比/index.md'], resolve) },
            ] },
            { path: 'Mac', component: (resolve) => require(['./Skills/Mac/Index.vue'], resolve), children: [
                { path: encodeURIComponent('Mac查看端口占用情况'), component: (resolve) => require(['./Skills/Mac/Mac查看端口占用情况.md'], resolve) },
            ] },
            { path: 'Linux', component: (resolve) => require(['./Article.vue'], resolve), children: [
                { path: encodeURIComponent('Linux临时设置代理'), component: (resolve) => require(['./Skills/Linux/Linux临时设置代理.md'], resolve) },
            ] },
            { path: encodeURIComponent('哲学'), component: (resolve) => require(['./Article.vue'], resolve), children: [
                { path: encodeURIComponent('哲学概念梳理'), component: (resolve) => require(['./Skills/哲学/哲学概念梳理.md'], resolve) },
                { path: encodeURIComponent('名句收集'), component: (resolve) => require(['./Skills/哲学/名句收集.md'], resolve) },
            ] },
        ] },
        { path: 'Collections', component: (resolve) => require(['lib/specific/s-empty.vue'], resolve), children: [
            { path: encodeURIComponent('进击的巨人'), component: (resolve) => require(['./Collections/进击的巨人/Index.vue'], resolve), meta: { navShadowHidden: true } },
        ] },
    ] },
];
