<template>
  <main>
    <CustomHeader
      msg="Blog page created using Vue"
      subtitle="Using pinia as state management and marked + highlight.js for markdown rendering"
    />
    <PostList :blogs="blogsStore.blogs" :loading="blogsStore.blogLoading" />
  </main>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import { useBlogsStore } from '@/stores/blogs'
import PostList from '@/components/PostList.vue'
import CustomHeader from '@/components/CustomHeader.vue'
import Container from '@/components/Container.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    PostList,
    CustomHeader
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
