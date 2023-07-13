import { defineStore } from 'pinia'
import { ref } from 'vue'
const BASE_URL = 'https://express-blog-xa7v.onrender.com'

const endpoints = {
  login: `${BASE_URL}/auth/login`,
  register: `${BASE_URL}/auth/users`
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const login = async (email: string, password: string) => {
    const response = await fetch(endpoints.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json()
    if (data) {
      token.value = data.token
      localStorage.setItem('token', data.token)
    }
  }
  const register = async (email: string, password: string) => {
    const response = await fetch(endpoints.register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json()
    console.log(data)
  }

  const logout = () => {
    token.value = null
    localStorage.removeItem('token')
  }
  return { token, login, register, logout }
})
