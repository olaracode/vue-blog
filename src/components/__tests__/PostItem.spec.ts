import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PostItem from '../PostItem.vue'

describe('PostItem', () => {
  it('renders the icon, heading, and content', () => {
    const icon = 'test-icon'
    const heading = 'Test Heading'
    const content = 'Test Content'

    const wrapper = mount(PostItem, {
      slots: {
        icon,
        heading,
        default: content
      }
    })

    expect(wrapper.find('i').text()).toBe(icon)
    expect(wrapper.find('h3').text()).toBe(heading)
    expect(wrapper.find('.content').text()).toBe(content)
  })
})
