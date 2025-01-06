<script setup lang="ts">
const journals: {msg: string, createdAt: Date}[] = [
  {
    msg: "Im going to live alone for going the college. I've already decided the which apartment i live in but the door is digital lock system, lock with button, unlock with PIN, This is better preventing robbers than conventional lock with metal key. however the PIN is weak, 4~12 numbers, somebody can break the battery case from outside, stolen such as peeping, social engineering if that happen, it becomes meaningless. So i will use SESAME that smart locking system, lock and unlock with smartphone, sharing virtual key safely with expire. but problems are left, one is wifi module for SESAME out of stock. another one is hard to make homebrew wifi module. I found the document and demo app code for esp32 managing SESAME. i will write in C language",
    createdAt: new Date("1/6/2025"),
  }
]
</script>

<template>
  <main class="max-w-[1200px] mx-auto">
    <h1 class="text-4xl font-bold text-orange-500">The log</h1>
    <p>I hate using thing called twitter, Instead here im gonna write some journals about what doing.</p>
    <h2 class="text-2xl">Journals</h2>
    <div v-for="journal in journals" class="my-3">
      <p>{{journal.msg}}</p>
      <time>At {{journal.createdAt.toLocaleDateString()}}</time>
    </div>
  </main>
</template>

<style scoped>

</style>