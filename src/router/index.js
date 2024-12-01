import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/manager/home' },
    {
      path: '/manager', component: () => import('../views/Manager.vue'), children: [
        { path: 'home', name: 'home', meta: { title: '主页' }, component: () => import('../views/Home.vue') },
        { path: 'link', name: 'link', meta: { title: 'link' }, component: () => import('../views/Link.vue') },
      ]
    },
  ]
})

router.beforeEach((to, form, next) => {
  console.log(to);
  document.title = to.meta.title
  next()
})

export default router
