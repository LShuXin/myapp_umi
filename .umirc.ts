import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: [
    { path: '/user', component: '@/pages/user' },
    { path: '/login', component: '@/pages/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/index', redirect: '/work1' },
        { path: '/work1', component: '@/pages/work1' },
        {
          path: '/work2',
          component: '@/pages/work2',
          wrappers: ['@/wrappers/auth'],
        },
      ],
    },
  ],
  fastRefresh: {},
});
