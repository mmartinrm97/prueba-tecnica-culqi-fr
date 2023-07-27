import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import { adminRoute } from '@/admin/router'
import { useAuthUserStore } from '@/stores/useAuthUserStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Public
    {
      path: '/auth/login',
      name: 'login',
      component: LoginView
    },

    //Admin
    {
      ...adminRoute,
      path: '/admin',
      meta: { requiresAuth: true }
    },

    // Redirigir a la vista "empleados" cuando la ruta es inválida y el usuario está autenticado
    {
      path: '/:pathMatch(.*)*',
      redirect: (to) => {
        const authUserStore = useAuthUserStore()
        return authUserStore.authenticated() ? {name: 'empleados'} : {name: 'login'}
      }
    }
  ]
})

// Agregar el guardia de navegación
router.beforeEach((to, from, next) => {
  const authUserStore = useAuthUserStore()

  // Verificar si la ruta requiere autenticación
  if (to.meta.requiresAuth) {
    // Verificar si el usuario está autenticado y si el token es válido
    if (authUserStore.authenticated()) {
      // Permitir el acceso a la ruta protegida
      next()
    } else {
      // Redirigir al usuario a la página de inicio de sesión
      next({ name: 'login' })
    }
  } else {
    // Permitir el acceso a rutas públicas
    next()
  }
})

export default router
