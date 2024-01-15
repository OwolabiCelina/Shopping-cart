import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/Products/:id',
    //   name: 'products',
    //   components: Products
    // },
    {
      // path: '/about',
      // name: 'about',
    }
  ]
})

export default router
