<script lang="ts" setup>
</script>

<template>
  <main>
    <UContainer class="h-[600px] flex">
      <img class="absolute top-[49px] right-0 -z-20" src="/hero-gradient.svg" alt="hero-gradient"/>
      <img class="absolute top-[49px] right-0 -z-20 lg:hidden" src="/hero-gradient-tablet.svg" alt="hero-gradient-tablet"/>
      <div class="my-auto w-auto lg:w-full">
        <h1 class="text-6xl font-bold backdrop-blur">
          What's up!<br/>
          I'm <span class="text-primary">riya</span>.
        </h1>
        <p>
          Work in progress...
        </p>
      </div>
      <Diamond
          class="h-[600px] w-screen absolute top-[49px] left-0 -z-10 lg:w-full lg:top-0 lg:relative lg:block lg:z-0"/>
    </UContainer>
  </main>
</template>

<style scoped>
</style>