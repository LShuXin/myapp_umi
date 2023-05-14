import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {},
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: [
    { path: '/user', component: '@/pages/user', title: '用户中心' },
    { path: '/login', component: '@/pages/login', title: '登录' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/index', redirect: '/work1' },
        { path: '/work1', component: '@/pages/work1', title: 'work1' },
        {
          path: '/work2',
          component: '@/pages/work2',
          wrappers: ['@/wrappers/auth'],
          title: 'work2',
        },
        {
          path: '/moment/:id',
          component: '@/pages/moment/detail',
          title: '动态详情',
        },
        {
          path: '/live/:id',
          component: '@/pages/live/liveroom',
          title: '直播间',
        },
        {
          path: '/ssrcp',
          component: '@/pages/ssr/ssrcp',
          title: '服务端渲染页面1',
        },
        {
          path: '/ssrfp',
          component: '@/pages/ssr/ssrfp',
          title: '服务端渲染页面2',
        },
      ],
    },
  ],
  fastRefresh: {},
});
