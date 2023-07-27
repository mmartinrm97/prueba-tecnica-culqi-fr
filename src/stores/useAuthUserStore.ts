import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/api/interfaces/responseApi'

export const useAuthUserStore = defineStore('authUser', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(localStorage.getItem('jwt_token') ?? null)

  // Si existe un usuario en el localStorage, lo asignamos al store
  const userFromLocalStorage = localStorage.getItem('user');
  if (userFromLocalStorage) {
    user.value = JSON.parse(userFromLocalStorage);
  }

  // Setter para actualizar el usuario en el store
  const setUser = (newUser: User): void => {
    user.value = newUser
  }

  const setToken = (newToken: string): void =>{
    token.value = newToken
  }

  // Getter para obtener el usuario actual
  const getUser = (): User | null => {
    return user.value
  }

  const authenticated = (): boolean => {
    return token.value !== null
  }

  // Método para limpiar los datos del usuario y token al hacer logout
  const logout = (): void => {
    user.value = null;
    token.value = null;
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user');
  };

  return {
    user,
    token,
    setUser,
    getUser,
    setToken,
    authenticated,
    logout,
  }
})
