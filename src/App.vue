<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Container from '@/components/Container.vue'
</script>

<template>
  <header class="bg-emerald-950 text-white">
    <Container>
      <nav class="flex py-5 items-center justify-between">
        <RouterLink to="/"> <img alt="Vue logo" class="w-10" src="@/assets/logo.svg" /></RouterLink>
        <RouterLink to="/login">
          <span class="font-bold text-lg hover:underline">Login</span>
        </RouterLink>
      </nav>
    </Container>
  </header>
  <RouterView />
</template>
