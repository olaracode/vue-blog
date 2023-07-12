import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PostItem from '../PostItem.vue'
import settings from '@/utils/test/data/settings'
describe('PostItem', () => {
  it('renders the correct title', async () => {
    const wrapper = mount(PostItem, {
      global: {
        plugins: [settings.router]
      },
      props: {
        title: 'Hello World',
        slug: 'hello-world',
        tags: ['hello', 'world']
      }
    })
    expect(wrapper.find('span').text()).toBe('Hello World')
  })
})
