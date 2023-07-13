<template>
  <div class="my-5">
    <Container>
      <div v-if="loading">
        <p>Cargando...</p>
      </div>
      <div v-else-if="blog">
        <Markdown :content="blog.content" />
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogsStore } from '@/stores/blogs'
import Container from '@/components/Container.vue'
import Markdown from '@/components/Markdown.vue'

export default defineComponent({
  name: 'BlogView',
  components: {
    Container,
    Markdown
  },
  setup() {
    const blogsStore = useBlogsStore()
    const route = useRoute()
    const loading = computed(() => blogsStore.blogLoading)
    const blog = computed(() => blogsStore.currentBlog)

    blogsStore.getBlogDetails(route.params.slug as string)

    return {
      blog,
      loading
    }
  }
})
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>
