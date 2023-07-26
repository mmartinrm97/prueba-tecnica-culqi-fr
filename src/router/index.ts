import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    //Public
    {
      path: '/auth/login',
      name: 'Login',
      component: LoginView
    },

    //Auth
    {
      path: '/empleados',
      name: 'Empleados',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/EmpleadosView.vue')
    },

    //Default
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'Login' })
    }
  ]
})

export default router
