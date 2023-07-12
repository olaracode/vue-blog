import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PostList from '@/components/PostList.vue'
import { postList, settings } from '@/utils/test/data'

describe('PostList', () => {
  it('renders the correct number of posts', async () => {
    const wrapper = mount(PostList, {
      global: {
        plugins: [settings.router]
      },
      props: {
        blogs: postList,
        loading: false
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('span')).toHaveLength(postList.length)
  })
})
