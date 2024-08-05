<script lang="ts" setup>
const colorMode = useColorMode();
const links: any = [
  [],
  [
    {
      icon: 'i-line-md-moon-alt-to-sunny-outline-loop-transition',
      click: () => {
        if (colorMode.value === 'light') colorMode.preference = 'dark';
        else colorMode.preference = 'light';
      }
    }
  ]
];
</script>

<template>
  <header
      class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3">
      <ULink class="text-2xl font-bold select-none" to="/">riya.<span
          class="text-primary">monster</span>
      </ULink>
      <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800"/>
    </div>
  </header>
</template>

<style scoped>

</style>