export default [
    { path: '/Profile', component: () => import('./Profile.vue'), meta: { title: '个人简历' } },
    { path: '/', component: require('./src/common/u-container.vue').default, children: [
        { path: '', component: () => import('./Index.vue') },
        { path: 'Skills', component: () => import('./src/common/u-empty-view.vue'), children: [
            { path: encodeURIComponent('Web前端'), component: () => import('./Skills/Web前端/Index.vue'), meta: { navShadowHidden: true }, children: [
                { path: '', component: () => import('./Skills/Web前端/List.vue') },
                { path: encodeURIComponent('20170820~git的fork项目与原项目同步'), component: () => import('./Skills/Web前端/20170820~git的fork项目与原项目同步.md') },
                { path: encodeURIComponent('20170628~尤大的Live笔记'), component: () => import('./Skills/Web前端/20170628~尤大的Live笔记.md') },
                { path: encodeURIComponent('20170628~柯里化与反柯里化'), component: () => import('./Skills/Web前端/20170628~柯里化与反柯里化/index.md') },
                { path: encodeURIComponent('20170628~Three入门'), component: () => import('./Skills/Web前端/20170628~Three入门/Index.vue') },
                { path: encodeURIComponent('20170623~几款Markdown的JS解析器对比'), component: () => import('./Skills/Web前端/20170623~几款Markdown的JS解析器对比/index.md') },
                { path: encodeURIComponent('20170405~几款前端框架对比'), component: () => import('./Skills/Web前端/20170405~几款前端框架对比/index.md') },
                { path: encodeURIComponent('20161030~网易蜂巢的工业化前端架构'), component: () => import('./Skills/Web前端/20161030~网易蜂巢的工业化前端架构/index.md') },
                { path: encodeURIComponent('20160531~拖拽那些事儿'), component: () => import('./Skills/Web前端/20160531~拖拽那些事儿/index.md') },
                { path: encodeURIComponent('20160131~终结者——网易蜂巢WebTerminal的开发历程'), component: () => import('./Skills/Web前端/20160131~终结者——网易蜂巢WebTerminal的开发历程/index.md') },
                { path: encodeURIComponent('20151220~中文网页字体的最佳选择'), component: () => import('./Skills/Web前端/20151220~中文网页字体的最佳选择.md') },
                { path: encodeURIComponent('20150310~SourceMap详解'), component: () => import('./Skills/Web前端/20150310~SourceMap详解/index.md') },
                { path: encodeURIComponent('20150105~JavaScript中正则表达式的应用'), component: () => import('./Skills/Web前端/20150105~JavaScript中正则表达式的应用.md') },
                { path: encodeURIComponent('20141211~纯CSS画基本图形'), component: () => import('./Skills/Web前端/20141211~纯CSS画基本图形/index.md') },
            ] },
            { path: 'Mac', component: () => import('./Skills/Mac/Index.vue'), children: [
                { path: '', component: () => import('./Skills/Mac/List.vue') },
                { path: encodeURIComponent('Mac查看端口占用情况'), component: () => import('./Skills/Mac/Mac查看端口占用情况.md') },
            ] },
            { path: 'Linux', component: () => import('./src/common/u-empty-view.vue'), children: [
                { path: '', component: () => import('./src/common/u-empty-view.vue') },
                { path: encodeURIComponent('20140921~Linux临时设置代理'), component: () => import('./Skills/Linux/20140921~Linux临时设置代理.md') },
            ] },
            { path: encodeURIComponent('哲学'), component: () => import('./src/common/u-empty-view.vue'), children: [
                { path: '', component: () => import('./Skills/哲学/List.vue') },
                { path: encodeURIComponent('哲学概念梳理'), component: () => import('./Skills/哲学/哲学概念梳理.md') },
                { path: encodeURIComponent('名句收集'), component: () => import('./Skills/哲学/名句收集.md') },
            ] },
            { path: encodeURIComponent('算法'), component: () => import('./src/common/u-empty-view.vue'), children: [
                { path: '', component: () => import('./src/common/u-empty-view.vue') },
                { path: encodeURIComponent('贪吃蛇AI'), component: () => import('./Skills/算法/贪吃蛇AI/Index.vue') },
            ] },
            { path: encodeURIComponent('数学'), component: () => import('./src/common/u-empty-view.vue'), children: [
                { path: '', component: () => import('./src/common/u-empty-view.vue') },
                { path: encodeURIComponent('多维空间的正几何体'), component: () => import('./Skills/数学/多维空间的正几何体/index.md'), children: [
                    { path: '', components: {
                        simplex4: () => import('./Skills/数学/多维空间的正几何体/simplex4.vue'),
                        hypercube4: () => import('./Skills/数学/多维空间的正几何体/hypercube4.vue'),
                    } },
                ] },
            ] },
        ] },
        { path: 'Collections', component: () => import('./src/common/u-empty-view.vue'), children: [
            { path: encodeURIComponent('进击的巨人'), component: () => import('./Collections/进击的巨人/Index.vue'), meta: { navShadowHidden: true } },
        ] },
    ] },
    { path: '*', redirect: '/' },
];
