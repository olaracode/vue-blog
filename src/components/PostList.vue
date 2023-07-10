<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import PostItem from './PostItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import { type Post } from './types'

interface FormattedPost extends Post {
  url: string
}

const posts = ref<FormattedPost[]>([])
const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json()
    const formatedResponse = json.map((post: Post) => ({
      id: post.id,
      title: post.title,
      body: post.body,
      userId: post.userId,
      url: '/post/' + post.id
    }))
    posts.value = formatedResponse
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getPosts()
})
</script>

<template>
  <div v-for="post in posts">
    <PostItem>
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
