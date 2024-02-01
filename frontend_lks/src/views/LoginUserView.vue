<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
      <label for="name">Username:</label>
      <input v-model="name" type="text" id="name" required>

      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required>

      <button type="submit">Login</button>
    </form>

    <p>{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useSocieties from '../composable/societies'

const router = useRouter()
const { login } = useSocieties()

const name = ref('')
const password = ref('')
const errorMessage = ref('')

const loginUser = async () => {
  try {
    await login({ name: name.value, password: password.value })
    // Jika login berhasil, arahkan ke halaman yang sesuai
    router.push({ name: 'user' })
  } catch (error) {
    console.error('Login error:', error)
    // Tangani kesalahan login dan tampilkan pesan kesalahan
    errorMessage.value = 'Login failed. Please check your credentials and try again.'
  }
}
</script>
