<script lang="ts" setup>
</script>

<template>
  <div>
    <NuxtLoadingIndicator/>
    <CommonHeader/>
    <UContainer class="">
      <slot/>
    </UContainer>
    <CommonFooter/>
    <UNotifications/>
  </div>
</template>

<style scoped>

</style>