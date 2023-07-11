<script setup lang="ts">
const { title, description, file } = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
  <p>
    File: <span class="green">{{ file }}</span>
  </p>
</template>
