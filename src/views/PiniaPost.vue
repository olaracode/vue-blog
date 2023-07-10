<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import { usePostStore } from '@/stores/posts'
const store = ref(usePostStore())
onMounted(() => {
  const id = useRoute().params.id
  store.value.changePost(id as string)
  store.value.fetchPostComments(id as string)
})
</script>

<template>
  <PageHeader
    title="Pinia + Dynamic Routing"
    description="Dynamic routing + pinia state management"
    file="/views/PiniaPost.vue"
  />
  <div v-if="store.selectedPost">
    <h2 class="green">
      {{ store.selectedPost.title }}
    </h2>
    <p>
      {{ store.selectedPost.body }}
    </p>

    <hr />
    <div v-if="store.selectedPostComments">
      <div class="comment-title">
        <h3>Coments</h3>
        <p class="green">{{ store.selectedPostComments.length }}</p>
      </div>
      <div v-for="comment in store.selectedPostComments">
        <h4 class="green">
          {{ comment.name }}
        </h4>
        <p>
          {{ comment.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  margin-top: 3vh;
}
.comment-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
hr {
  margin-top: 2vh;
  margin-bottom: 2vh;
}
h4 {
  font-weight: 900;
}
</style>
