<script setup lang="ts">
const props = defineProps({
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
  <h1>{{ props.title }}</h1>
  <p>{{ props.description }}</p>
  <p>
    File: <span class="green">{{ props.file }}</span>
  </p>
</template>
