<template>
  <main>
    <Container>
      <div class="flex flex-col items-center my-10 text-center">
        <img alt="Vue logo" class="w-1/2 lg:w-1/6" src="@/assets/logo.svg" />
        <h1 class="text-xl font-bold">Blog Created using Vue</h1>
        <p>Using pinia as state management and a personal API created with express.js</p>
      </div>
    </Container>
    <PostList :blogs="blogsStore.blogs" :loading="blogsStore.blogLoading" />
  </main>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import { useBlogsStore } from '@/stores/blogs'
import PostList from '@/components/PostList.vue'
import Container from '@/components/Container.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    PostList,
    Container
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
