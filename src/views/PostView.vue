<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import type { Post, Comment } from '@/components/types'

const postId = ref<string | string[]>('')
const post = ref<Post>()
const comments = ref<Comment[]>([])

const getPostId = () => {
  const route = useRoute()
  postId.value = route.params.id
}

const getComments = async () => {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + postId.value + '/comments'
    )
    const json = await res.json()
    comments.value = json
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}

const getPost = async () => {
  getPostId()
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId.value)
    const json = await res.json()
    post.value = json
    getComments()
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getPost()
})
</script>

<template>
  <main>
    <PageHeader
      title="Post/:id"
      description="
      Dynamic Routing and local stage management example"
      file="/views/PostView.vue"
    />

    <div v-if="post">
      <h2 class="green">
        {{ post.title }}
      </h2>
      <p>
        {{ post.body }}
      </p>

      <hr />
      <div v-if="comments">
        <div class="comment-title">
          <h3>Coments</h3>
          <p class="green">{{ comments.length }}</p>
        </div>
        <div v-for="comment in comments">
          <h4 class="green">
            {{ comment.name }}
          </h4>
          <p>
            {{ comment.body }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
div {
  margin-top: 3vh;
}
.comment-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
hr {
  margin-top: 2vh;
  margin-bottom: 2vh;
}
h4 {
  font-weight: 900;
}
</style>
