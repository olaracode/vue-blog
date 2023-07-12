import { expect, describe, it, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useBlogsStore } from './blogs'

describe('useBlogsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should have an empty array of blog', () => {
    const store = useBlogsStore()
    expect(store.blogs).toStrictEqual([])
  })
  it('should have blogLoading set to false', () => {
    const store = useBlogsStore()
    expect(store.blogLoading).toBe(false)
  })
  it('should fetch blogs', async () => {
    const store = useBlogsStore()
    await store.getBlogs()
    expect(store.blogLoading).toBe(false)
    expect(store.blogs).not.toBe([])
  })
})
