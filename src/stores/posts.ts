import type { Post, Comment } from '@/components/types'
import { ref } from 'vue'
import { defineStore } from 'pinia'

interface FormattedPost extends Post {
  url: string
}

export const usePostStore = defineStore('post', () => {
  const posts = ref<FormattedPost[]>([])
  const selectedPost = ref<FormattedPost | null>(null)
  const selectedPostComments = ref<Comment[]>([])

  async function fetchPosts() {
    if (posts.value.length) return
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    const formattedPosts: FormattedPost[] = json.map((post: Post) => ({
      ...post,
      url: `/pinia/post/${post.id}`
    }))
    posts.value = formattedPosts
    return formattedPosts
  }

  async function changePost(id: number | string) {
    id = Number(id)
    if (posts.value.length === 0) {
      const res = await fetchPosts()
      if (!res) return
      const post = posts.value.find((post) => post.id === id)
      if (post) {
        selectedPost.value = post
      }
      return
    }
    const post = posts.value.find((post) => post.id === id)
    if (post) {
      selectedPost.value = post
    }
  }

  async function fetchPost(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    selectedPost.value = await response.json()
  }

  async function fetchPostComments(id: number | string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    selectedPostComments.value = await response.json()
  }

  return {
    posts,
    selectedPost,
    selectedPostComments,
    fetchPosts,
    fetchPost,
    fetchPostComments,
    changePost
  }
})
