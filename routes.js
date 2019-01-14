import EmptyView from './src/common/u-empty-view.vue';

export default [
    { path: '/Profile', component: () => import('./Profile.vue'), meta: { title: '个人简历' } },
    { path: '/', component: require('./src/common/u-container.vue').default, children: [
        { path: '', component: () => import('./Index.vue') },
        { path: 'Apps', component: EmptyView, children: [
            { path: '易经', component: () => import('./Apps/易经/index.vue'), children: [
                // { path: '', component:  },
                { path: '卦', component: EmptyView, children: [
                    { path: '63', component: () => import('./Apps/易经/卦/1.63.乾.vue') },
                    { path: '0', component: () => import('./Apps/易经/卦/2.0.坤.vue') },
                    { path: '7', component: () => import('./Apps/易经/卦/11.7.泰.vue') },
                    { path: '56', component: () => import('./Apps/易经/卦/12.56.否.vue') },
                ] },
                { path: '先天八卦', component: () => import('./Apps/易经/先天八卦.vue') },
            ] },
        ] },
        { path: 'Skills', component: EmptyView, children: [
            { path: 'Web前端', component: () => import('./Skills/Web前端/Index.vue'), meta: { navShadowHidden: true }, children: [
                { path: '', component: () => import('./Skills/Web前端/List.vue') },
                { path: '20170907~跨产品的组件化解决方案', component: () => import('./Skills/Web前端/20170907~跨产品的组件化解决方案/index.md') },
                { path: '20170820~git的fork项目与原项目同步', component: () => import('./Skills/Web前端/20170820~git的fork项目与原项目同步.md') },
                { path: '20170628~尤大的Live笔记', component: () => import('./Skills/Web前端/20170628~尤大的Live笔记.md') },
                { path: '20170628~柯里化与反柯里化', component: () => import('./Skills/Web前端/20170628~柯里化与反柯里化/index.md') },
                { path: '20170628~Three入门', component: () => import('./Skills/Web前端/20170628~Three入门/Index.vue') },
                { path: '20170623~几款Markdown的JS解析器对比', component: () => import('./Skills/Web前端/20170623~几款Markdown的JS解析器对比/index.md') },
                { path: '20170405~几款前端框架对比', component: () => import('./Skills/Web前端/20170405~几款前端框架对比/index.md') },
                { path: '20161030~网易蜂巢的工业化前端架构', component: () => import('./Skills/Web前端/20161030~网易蜂巢的工业化前端架构/index.md') },
                { path: '20160531~拖拽那些事儿', component: () => import('./Skills/Web前端/20160531~拖拽那些事儿/index.md') },
                { path: '20160131~终结者——网易蜂巢WebTerminal的开发历程', component: () => import('./Skills/Web前端/20160131~终结者——网易蜂巢WebTerminal的开发历程/index.md') },
                { path: '20151220~中文网页字体的最佳选择', component: () => import('./Skills/Web前端/20151220~中文网页字体的最佳选择.md') },
                { path: '20150310~SourceMap详解', component: () => import('./Skills/Web前端/20150310~SourceMap详解/index.md') },
                { path: '20150105~JavaScript中正则表达式的应用', component: () => import('./Skills/Web前端/20150105~JavaScript中正则表达式的应用.md') },
                { path: '20141211~纯CSS画基本图形', component: () => import('./Skills/Web前端/20141211~纯CSS画基本图形/index.md') },
            ] },
            { path: 'Mac', component: () => import('./Skills/Mac/Index.vue'), children: [
                { path: '', component: () => import('./Skills/Mac/List.vue') },
                { path: 'Mac查看端口占用情况', component: () => import('./Skills/Mac/Mac查看端口占用情况.md') },
            ] },
            { path: 'Linux', component: EmptyView, children: [
                { path: '', component: EmptyView },
                { path: '20140921~Linux临时设置代理', component: () => import('./Skills/Linux/20140921~Linux临时设置代理.md') },
            ] },
            { path: '哲学', component: EmptyView, children: [
                { path: '', component: () => import('./Skills/哲学/List.vue') },
                { path: '哲学概念梳理', component: () => import('./Skills/哲学/哲学概念梳理.md') },
                { path: '名句收集', component: () => import('./Skills/哲学/名句收集.md') },
            ] },
            { path: '算法', component: EmptyView, children: [
                { path: '', component: EmptyView },
                { path: '贪吃蛇AI', component: () => import('./Skills/算法/贪吃蛇AI/Index.vue') },
            ] },
            { path: '数学', component: EmptyView, children: [
                { path: '', component: EmptyView },
                { path: '多维空间的正几何体', component: () => import('./Skills/数学/多维空间的正几何体/index.md'), children: [
                    { path: '', components: {
                        simplex4: () => import('./Skills/数学/多维空间的正几何体/simplex4.vue'),
                        hypercube4: () => import('./Skills/数学/多维空间的正几何体/hypercube4.vue'),
                    } },
                ] },
            ] },
        ] },
        { path: 'Collections', component: EmptyView, children: [
            { path: '进击的巨人', component: () => import('./Collections/进击的巨人/Index.vue'), meta: { navShadowHidden: true } },
        ] },
    ] },
    { path: '*', redirect: '/' },
];
