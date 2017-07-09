export default [
    { path: '/Profile', component: (resolve) => require(['./Profile.vue'], resolve), meta: { title: '个人简历' } },
    { path: '/', component: require('./src/common/u-container.vue'), children: [
        { path: '', component: (resolve) => require(['./Index.vue'], resolve) },
        { path: 'Skills', component: (resolve) => require(['./src/common/u-empty-view.vue'], resolve), children: [
            { path: encodeURIComponent('Web前端'), component: (resolve) => require(['./Skills/Web前端/Index.vue'], resolve), meta: { navShadowHidden: true }, children: [
                { path: '', component: (resolve) => require(['./Skills/Web前端/List.vue'], resolve) },
                { path: encodeURIComponent('20170628~尤大的Live笔记'), component: (resolve) => require(['./Skills/Web前端/20170628~尤大的Live笔记.md'], resolve) },
                { path: encodeURIComponent('20170628~柯里化与反柯里化'), component: (resolve) => require(['./Skills/Web前端/20170628~柯里化与反柯里化/index.md'], resolve) },
                { path: encodeURIComponent('20170628~Three入门'), component: (resolve) => require(['./Skills/Web前端/20170628~Three入门/Index.vue'], resolve) },
                { path: encodeURIComponent('20170623~几款Markdown的JS解析器对比'), component: (resolve) => require(['./Skills/Web前端/20170623~几款Markdown的JS解析器对比/index.md'], resolve) },
                { path: encodeURIComponent('20170405~几款前端框架对比'), component: (resolve) => require(['./Skills/Web前端/20170405~几款前端框架对比/index.md'], resolve) },
                { path: encodeURIComponent('20161030~网易蜂巢的工业化前端架构'), component: (resolve) => require(['./Skills/Web前端/20161030~网易蜂巢的工业化前端架构/index.md'], resolve) },
                { path: encodeURIComponent('20160531~拖拽那些事儿'), component: (resolve) => require(['./Skills/Web前端/20160531~拖拽那些事儿/index.md'], resolve) },
                { path: encodeURIComponent('20160131~终结者——网易蜂巢WebTerminal的开发历程'), component: (resolve) => require(['./Skills/Web前端/20160131~终结者——网易蜂巢WebTerminal的开发历程/index.md'], resolve) },
                { path: encodeURIComponent('20151220~中文网页字体的最佳选择'), component: (resolve) => require(['./Skills/Web前端/20151220~中文网页字体的最佳选择.md'], resolve) },
                { path: encodeURIComponent('20150310~SourceMap详解'), component: (resolve) => require(['./Skills/Web前端/20150310~SourceMap详解/index.md'], resolve) },
                { path: encodeURIComponent('20150105~JavaScript中正则表达式的应用'), component: (resolve) => require(['./Skills/Web前端/20150105~JavaScript中正则表达式的应用.md'], resolve) },
                { path: encodeURIComponent('20141211~纯CSS画基本图形'), component: (resolve) => require(['./Skills/Web前端/20141211~纯CSS画基本图形/index.md'], resolve) },
            ] },
            { path: 'Mac', component: (resolve) => require(['./Skills/Mac/Index.vue'], resolve), children: [
                { path: '', component: (resolve) => require(['./Skills/Mac/List.vue'], resolve) },
                { path: encodeURIComponent('Mac查看端口占用情况'), component: (resolve) => require(['./Skills/Mac/Mac查看端口占用情况.md'], resolve) },
            ] },
            { path: 'Linux', component: (resolve) => require(['./src/common/u-empty-view.vue'], resolve), children: [
                { path: '', component: (resolve) => require(['./src/common/u-empty-view.vue'], resolve) },
                { path: encodeURIComponent('20140921~Linux临时设置代理'), component: (resolve) => require(['./Skills/Linux/20140921~Linux临时设置代理.md'], resolve) },
            ] },
            { path: encodeURIComponent('哲学'), component: (resolve) => require(['./src/common/u-empty-view.vue'], resolve), children: [
                { path: '', component: (resolve) => require(['./Skills/哲学/List.vue'], resolve) },
                { path: encodeURIComponent('哲学概念梳理'), component: (resolve) => require(['./Skills/哲学/哲学概念梳理.md'], resolve) },
                { path: encodeURIComponent('名句收集'), component: (resolve) => require(['./Skills/哲学/名句收集.md'], resolve) },
            ] },
            { path: encodeURIComponent('算法'), component: (resolve) => require(['./src/common/u-empty-view.vue'], resolve), children: [
                { path: '', component: (resolve) => require(['./src/common/u-empty-view.vue'], resolve) },
                { path: encodeURIComponent('贪吃蛇AI'), component: (resolve) => require(['./Skills/算法/贪吃蛇AI/Index.vue'], resolve) },
            ] },
            { path: encodeURIComponent('数学'), component: (resolve) => require(['./src/common/u-empty-view.vue'], resolve), children: [
                { path: '', component: (resolve) => require(['./src/common/u-empty-view.vue'], resolve) },
                { path: encodeURIComponent('多维空间的正几何体'), component: (resolve) => require(['./Skills/数学/多维空间的正几何体/index.md'], resolve), children: [
                    { path: '', components: {
                        simplex4: (resolve) => require(['./Skills/数学/多维空间的正几何体/simplex4.vue'], resolve),
                        hypercube4: (resolve) => require(['./Skills/数学/多维空间的正几何体/hypercube4.vue'], resolve),
                    } },
                ] },
            ] },
        ] },
        { path: 'Collections', component: (resolve) => require(['./src/common/u-empty-view.vue'], resolve), children: [
            { path: encodeURIComponent('进击的巨人'), component: (resolve) => require(['./Collections/进击的巨人/Index.vue'], resolve), meta: { navShadowHidden: true } },
        ] },
    ] },
    { path: '*', redirect: '/' },
];
