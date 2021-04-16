import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue'),
    alias: '/catalog'
  },
  {
    path: '/busket',
    name: 'Busket',
    component: () => import('../views/Busket.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
