<script setup lang="ts">
import PostList from '../components/PostList.vue'
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <main>
    <PageHeader
      title="Home"
      description="Home page with a list of posts using local state"
      file="/components/PostList.vue"
    />
    <PostList />
  </main>
</template>

<style></style>
