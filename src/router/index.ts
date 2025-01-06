import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("../views/index.vue"),
    },
    {
      path: '/log',
      component: () => import("../views/log.vue")
    }
  ],
})

export default router
