import { defineConfig } from 'umi';

export default defineConfig({
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
      ],
    },
  ],
  fastRefresh: {},
});
