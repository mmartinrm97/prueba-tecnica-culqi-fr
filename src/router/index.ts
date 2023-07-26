import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import { adminRoute } from '@/admin/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Public
    {
      path: '/auth/login',
      name: 'Login',
      component: LoginView
    },

    //Admin
    {
      ...adminRoute,
      path: '/admin'
    },

    //Default
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'Login' })
    }
  ]
})

export default router
