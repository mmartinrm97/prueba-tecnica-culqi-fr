import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/api/interfaces/responseApi'

export const useAuthUserStore = defineStore('authUser', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(localStorage.getItem('jwt_token') ?? null)

  // Setter para actualizar el usuario en el store
  const setUser = (newUser: User): void => {
    user.value = newUser
  }

  // Getter para obtener el usuario actual
  const getUser = (): User | null => {
    return user.value
  }

  const authenticated = (): boolean => {
    return token.value !== null
  }

  return {
    user,
    token,
    setUser,
    getUser,
    authenticated,
  }
})
