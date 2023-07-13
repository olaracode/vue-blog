const protectedRoutes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/AuthView.vue')
  }
]

const routes = {
  routes: protectedRoutes,
  names: protectedRoutes.map((route) => route.name)
}

export default routes
