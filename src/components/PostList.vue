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
        <PostListSkeleton />
      </ul>
    </template>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from './Container.vue'
import PostItem from './PostItem.vue'
import PostListSkeleton from './PostListSkeleton.vue'
import type { BlogI } from '@/stores/blogs.types'
import type { PropType } from 'vue'

export default defineComponent({
  components: {
    Container,
    PostItem,
    PostListSkeleton
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
