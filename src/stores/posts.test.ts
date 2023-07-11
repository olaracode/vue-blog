import { expect, describe, it, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { usePostStore } from './posts'

describe('usePostStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have the correct interface', () => {
    const store = usePostStore()
    expect(store.posts).toEqual([])
    expect(store.selectedPost).toEqual(null)
    expect(store.selectedPostComments).toEqual([])
    expect(store.fetchPosts).toBeInstanceOf(Function)
    expect(store.fetchPost).toBeInstanceOf(Function)
    expect(store.fetchPostComments).toBeInstanceOf(Function)
    expect(store.changePost).toBeInstanceOf(Function)
  })
  it('should fetch posts', async () => {
    const store = usePostStore()
    await store.fetchPosts()
    expect(store.posts).toHaveLength(100)
  })
  it("should fetch a post's comments", async () => {
    const store = usePostStore()
    await store.fetchPostComments(1)
    expect(store.selectedPostComments).toHaveLength(5)
  })
  it('should change a post', async () => {
    const store = usePostStore()
    await store.fetchPosts()
    expect(store.selectedPost).toEqual(null)
    store.changePost(1)
    expect(store.selectedPost?.title).toEqual(store.posts[0].title)
  })
  it('should fetch the posts if there is no posts when changing a post', async () => {
    const store = usePostStore()
    expect(store.posts).toHaveLength(0)
    await store.changePost(1)
    expect(store.posts).toHaveLength(100)
    expect(store.selectedPost?.title).toEqual(store.posts[0].title)
  })
})
