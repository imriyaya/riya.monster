<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
const pages: {title: string, path: string}[] = [
  {
    title: "Home",
    path: "/"
  }
]
</script>

<template>
  <header class="mx-auto max-w-[1200px] p-5 flex">
    <RouterLink class="text-3xl font-bold mr-5" to="/"><span class="text-orange-500">riya</span>.monster</RouterLink>
    <RouterLink v-for="page in pages" :to="page.path" class="text-xl mx-5 my-auto font-bold" :class="route.fullPath === page.path ? 'text-orange-500' : ''">{{page.title}}</RouterLink>
  </header>
</template>

<style scoped>

</style>