<template>
  <!-- Onboarding Section -->
  <div class="flex w-1/2 flex-col">
    <!-- Image Section-->
    <div class="relative flex h-2/3 items-center justify-center">
      <img
        alt="Hero Image"
        class="absolute h-full w-full object-cover"
        src="../assets/images/hero.png"
      />
    </div>
    <!--      Separator-->
    <!--            <div class="flex items-center justify-between">-->
    <!--              <hr class="w-full border-4 border-primary" />-->
    <!--            </div>-->
    <!--          Text Section-->
    <div
      class="items-left flex h-1/3 flex-col justify-center border-t-8 border-primary bg-secondary px-20"
    >
      <div class="h-auto w-24 pb-4">
        <img alt="Culqi Logo" src="../assets/images/culqi_logo_white.svg" />
      </div>
      <div class="text-left">
        <span class="text-3xl font-bold text-gray-50">
          Dale más power ⚡ a tus empleados hoy 💪
        </span>
        <p class="py-4 font-light leading-7 text-gray-50">
          Te ayudamos a gestionarlos de manera más sencilla
        </p>
      </div>
    </div>
  </div>
  <!-- Sign In Section -->
  <div class="flex w-1/2 flex-col justify-center">
    <div class="my-auto flex flex-col justify-center px-8 lg:px-14 xl:px-24">
      <!--        Content Section-->
      <div class="pt-40">
        <h1 class="whitespace-nowrap text-center text-3xl font-bold leading-loose tracking-wide">
          Inicia sesión
        </h1>
        <form @submit.prevent="handleLogin">
          <div class="pt-6">
            <label class="font-medium" for="email"
              >Correo Electrónico <span class="text-red-500">*</span>
            </label>
            <div
              class="mt-2 flex w-full items-center overflow-hidden rounded-xl border border-gray-300 transition-all focus-within:border-success"
            >
              <input
                id="email"
                v-model="email"
                class="w-full border-0 p-4 font-light focus:outline-none focus:ring-0"
                name="email"
                placeholder="Ingresa el correo electrónico"
                type="text"
                autofocus
              />
            </div>
          </div>
          <div class="pt-6">
            <label class="font-medium" for="password"
              >Contraseña<span class="text-red-500">*</span></label
            >
            <div
              class="mt-2 flex w-full items-center overflow-hidden rounded-xl border border-gray-300 transition-all focus-within:border-success"
            >
              <input
                id="password"
                v-model="password"
                class="w-full border-0 p-4 font-light focus:outline-none focus:ring-0"
                name="password"
                placeholder="Ingresa la contraseña"
                type="password"
              />
            </div>

            <div v-if="apiError" class="pt-6 text-error flex items-center">
              <ErrorIcon class="fill-current h-5 w-5" />
              <span class="ml-2">{{ apiError }}</span>
            </div>
          </div>
          <div class="pt-8">
            <button
              class="w-full rounded-xl bg-secondary px-8 py-4 text-white shadow-lg hover:bg-secondary/80 focus:outline-none focus:ring-4 focus:ring-primary"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <div class="pt-8">
          <div class="text-center font-light text-gray-500">
            ¿Eres nuevo aquí?
            <a class="font-semibold text-primary hover:text-primary/80" href="#">
              Crea una cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Terms Section -->
    <div class="flex flex-col items-center justify-center whitespace-nowrap p-10 text-center">
      <span class="text-gray-500">© 2023 Culqi. Todos los derechos reservados.</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import empleadosApi from '@/api/empleadosApi'
import router from '@/router'
import ErrorIcon from '@/assets/icons/error.svg'
import type { APILoginErrorResponse, APILoginSuccessResponse } from '@/api/interfaces/loginApi'
import { useAuthUserStore } from '@/stores/useAuthUserStore'

const email = ref('c.quispe@culqi.com')
const password = ref('admin123')
const apiError = ref<string | null>(null)

const handleLogin = async () => {
  const authUserStore = useAuthUserStore()
  try {
    const response = await empleadosApi.post<APILoginSuccessResponse>('/auth/login', {
      correo: email.value,
      password: password.value
    })

    const token = response.data.data.token
    authUserStore.setUser(response.data.data.user) // Almacena el usuario en el store
    localStorage.setItem('jwt_token', token)

    await router.push({ name: 'empleados' })
  } catch (error) {
    if (error.isAxiosError && error.response) {
      // Error de la API con respuesta
      apiError.value = (error.response.data as APILoginErrorResponse).message
      console.error('Error de inicio de sesión:', apiError.value)
    } else {
      // Error de red o error no relacionado con la API
      console.error('Error de inicio de sesión (no relacionado):', error.message)
    }
  }
}
</script>

<style scoped></style>
