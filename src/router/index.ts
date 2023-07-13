import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import protectedRoutes from './protected'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/blog/:slug',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    ...protectedRoutes.routes
  ]
})

router.beforeEach((to, from, next) => {
  if (protectedRoutes.names.includes((to.name as string) || '') && !localStorage.getItem('token')) {
    next({ name: from.name || 'login' })
    return
  }
  next()
})

export default router
