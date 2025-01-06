<script setup lang="ts">
import { RouterView } from 'vue-router'
import CommonHeader from "@/components/CommonHeader.vue";
</script>

<template>
  <CommonHeader />
  <RouterView />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>