import { defineStore } from 'pinia'
import { ref } from 'vue'
const BASE_URL = 'https://express-blog-xa7v.onrender.com/'

const endpoints = {
  blogs: BASE_URL + 'blogs',
  blogDetails: (slug: string) => BASE_URL + 'blogs/' + slug,
  relatedPosts: (slug: string) => BASE_URL + 'blogs/related/' + slug
}

export const useBlogsStore = defineStore('blogs', () => {
  const blogs = ref([])
  const blogLoading = ref(false)
  const getBlogs = async () => {
    blogLoading.value = true
    try {
      const response = await fetch(endpoints.blogs)
      const data = await response.json()
      if (data) {
        blogs.value = data
      }
    } catch (e) {
      console.log(e)
    }
    blogLoading.value = false
  }
  return {
    blogs,
    blogLoading,
    getBlogs
  }
})
