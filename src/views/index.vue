<script setup lang="ts">
import Rose from "@/components/Rose.vue";
</script>

<template>
  <img class="absolute opacity-0 lg:opacity-100 w-full right-0 -z-20" src="../assets/hero-gradient.svg" alt=""/>
  <img class="absolute lg:hidden w-full right-0 -z-20" src="../assets/hero-gradient-tablet.svg" alt=""/>
  <main class="w-screen h-screen flex">
    <div class="mx-auto max-w-[1200px] w-screen h-screen">
      <div class="h-full block lg:flex columns-auto lg:columns-2">
        <div class="p-10 pt-32 w-auto lg:w-1/2 my-auto mx-auto">
          <h1 class="text-6xl font-bold backdrop-blur">
            What's up!<br/>
            I'm <span class="text-primary">riya</span>.
          </h1>
          <p class="w-3/4 p-3 text-lg font-bold">
            I'm <span class="text-primary">fluent developer</span>! <br/>
            Working on web, embedded devices such as consumer games, low-level programming language,
          </p>
        </div>
        <Rose class="w-auto lg:w-1/2 h-2/3 lg:h-2/3 my-auto"/>
      </div>
    </div>
  </main>
</template>
