<template>
  <li v-for="i in 6" :key="i" class="border-b-2 p-2 border-emerald-200 animate-pulse grid gap-2">
    <div class="h-4 bg-emerald-400 rounded w-1/2"></div>
    <div class="flex flex-wrap gap-1">
      <div class="h-4 bg-emerald-400 rounded w-1/6"></div>
      <div class="h-4 bg-emerald-400 rounded w-1/6"></div>
      <div class="h-4 bg-emerald-400 rounded w-1/6"></div>
    </div>
  </li>
</template>
