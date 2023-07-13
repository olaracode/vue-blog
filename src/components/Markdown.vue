<template>
  <div v-html="content"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Renderer, marked } from 'marked'
// @ts-ignore -> for some reason this import throws an error
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const renderer = new Renderer()
renderer.code = (code, lang) => {
  const highlighted = lang ? hljs.highlight(lang, code).value : hljs.highlightAuto(code).value
  return `<pre><code class="hljs ${lang}">${highlighted}</code></pre>`
}

export default defineComponent({
  name: 'Markdown',
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const content = marked(props.content, { renderer })
    return {
      content
    }
  }
})
</script>
