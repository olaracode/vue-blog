<template>
  <RouterLink :to="`blog/${slug}`">
    <span class="text-2xl font-bold hover:text-emerald-300">
      {{ title }}
    </span>
  </RouterLink>
  <div class="flex flex-wrap gap-4">
    <div v-for="tag in tags">
      <p class="p-1 px-2 rounded-md text-xs bg-emerald-400 hover:text-emerald-50">
        {{ tag }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
export default defineComponent({
  name: 'PostItem',
  components: {
    RouterLink
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  }
})
</script>
