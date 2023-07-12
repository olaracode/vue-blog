<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <nav>
        <RouterLink to="/">Local state</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
