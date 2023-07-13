import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { BlogI, BlogDetailsI } from './blogs.types'
const BASE_URL = 'https://express-blog-xa7v.onrender.com/'

const endpoints = {
  blogs: BASE_URL + 'blogs',
  blogDetails: (slug: string) => BASE_URL + 'blogs/' + slug,
  relatedPosts: (slug: string) => BASE_URL + 'blogs/related/' + slug
}

export const useBlogsStore = defineStore('blogs', () => {
  const blogs = ref<BlogI[]>([])
  const currentBlog = ref<BlogDetailsI | null>(null)
  const blogLoading = ref(false)
  const detailLoading = ref(false)
  const getBlogs = async () => {
    if (blogs.value.length > 0) return // so far no pagination implemented
    blogLoading.value = true
    try {
      const response = await fetch(endpoints.blogs)
      const data = await response.json()
      if (data) {
        blogs.value = [...blogs.value, ...data]
      }
    } catch (e) {
      console.log(e)
    }
    blogLoading.value = false
  }
  const getBlogDetails = async (slug: string) => {
    detailLoading.value = true
    try {
      const response = await fetch(endpoints.blogDetails(slug))
      const data = await response.json()
      if (data) {
        currentBlog.value = data
      }
    } catch (e) {
      console.log(e)
    }
    detailLoading.value = false
  }

  return {
    blogs,
    blogLoading,
    detailLoading,
    currentBlog,
    getBlogs,
    getBlogDetails
  }
})
