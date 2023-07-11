import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PageHeader from '@/components/PageHeader.vue'

describe('PageHeader.vue', () => {
  it('renders the title, description, and file of the page', () => {
    const title = 'Test Title'
    const description = 'Test Description'
    const file = 'Test File'

    const wrapper = mount(PageHeader, {
      props: {
        title,
        description,
        file
      }
    })

    expect(wrapper.find('h1').text()).toBe(title)
    expect(wrapper.find('p').text()).toBe(description)
    expect(wrapper.find('.green').text()).toBe(file)
  })
})
