<template>
  <main>
    <CustomHeader />
    <Container>
      <div class="rounded-md shadow-sm p-5 bg-emerald-50">
        <h1 class="text-lg font-bold text-center">Login to vue-blog</h1>
        <form class="grid gap-5" @submit.prevent="handleSubmit">
          <div class="flex flex-col">
            <label for="email">Email</label>
            <input
              class="p-2 rounded bg-emerald-200 active:bg-emerald-100 outline-emerald-600"
              type="email"
              id="email"
              name="email"
              v-model="email"
            />
          </div>
          <div class="flex flex-col">
            <label for="password">Password</label>
            <input
              class="p-2 rounded bg-emerald-200 active:bg-emerald-100 outline-emerald-600"
              type="password"
              id="password"
              name="password"
              v-model="password"
            />
          </div>
          <div>
            <button
              class="w-full p-2 rounded bg-emerald-600 text-white active:bg-emerald-700"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Container>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomHeader from '@/components/CustomHeader.vue'
import Container from '@/components/Container.vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'LoginView',
  components: {
    CustomHeader,
    Container
  },
  setup() {
    const router = useRouter()
    const { login, token } = useAuthStore()
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      // Handle form submission here
      login(email.value, password.value).then(() => {
        // Redirect to home page
        router.push({ path: '/auth' })
      })
    }

    return {
      email,
      password,
      handleSubmit
    }
  }
})
</script>
