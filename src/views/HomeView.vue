<template>
  <main>
    <h1>Home</h1>
    <p>Home page content</p>
    <PostList :blogs="blogsStore.blogs" :loading="blogsStore.blogLoading" />
  </main>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import { useBlogsStore } from '@/stores/blogs'
import PostList from '@/components/PostList.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    PostList
  },
  setup() {
    const blogsStore = useBlogsStore()
    onMounted(() => {
      blogsStore.getBlogs()
    })
    return {
      blogsStore
    }
  }
})
</script>
