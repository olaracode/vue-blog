<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import PostItem from '@/components/PostItem.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import { RouterLink } from 'vue-router'
import { computed, onMounted, watchEffect, ref } from 'vue'
import { usePostStore } from '@/stores/posts'

const store = ref(usePostStore())

onMounted(() => {
  store.value.fetchPosts()
})
</script>

<template>
  <PageHeader
    title="Home/Pinia"
    description="Page using pinia as a state management solution"
    file="views/PiniaHome.vue"
  />
  <div v-if="store.posts">
    <PostItem v-for="post in store.posts">
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>
        <RouterLink :to="post.url">
          <p>
            {{ post.title }}
          </p>
        </RouterLink>
      </template>

      {{ post.body }}
    </PostItem>
  </div>
</template>
