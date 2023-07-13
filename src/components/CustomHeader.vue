<template>
  <Container>
    <div class="flex flex-col items-center my-10 text-center">
      <img alt="Vue logo" class="w-1/2 lg:w-1/6" src="@/assets/logo.svg" />
      <h1 class="text-xl font-bold">{{ msg }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from './Container.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Container
  },
  props: {
    msg: String,
    subtitle: String
  }
})
</script>
