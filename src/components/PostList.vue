<template>
  <Container>
    <template v-if="!loading">
      <ul class="grid gap-5">
        <li v-for="post in blogs" :key="post._id" class="border-b-2 p-2 border-emerald-200">
          <PostItem :title="post.title" :tags="post.tags" :slug="post.slug" />
        </li>
      </ul>
    </template>
    <template v-else>
      <ul class="grid gap-5">
        <li
          v-for="i in 6"
          :key="i"
          class="border-b-2 p-2 border-emerald-200 animate-pulse grid gap-2"
        >
          <div class="h-4 bg-emerald-400 rounded w-1/2"></div>
          <div class="flex flex-wrap gap-1">
            <div class="h-4 bg-emerald-400 rounded w-1/6"></div>
            <div class="h-4 bg-emerald-400 rounded w-1/6"></div>
            <div class="h-4 bg-emerald-400 rounded w-1/6"></div>
          </div>
        </li>
      </ul>
    </template>
  </Container>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { BlogI } from '@/stores/blogs.types'
import Container from './Container.vue'
import PostItem from './PostItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Container,
    PostItem
  },
  props: {
    blogs: {
      type: Array as PropType<BlogI[]>,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  }
})
</script>
