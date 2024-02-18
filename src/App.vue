<script lang="ts" setup>
import Header from './components/header/Header.vue'
</script>

<template>
  <div class="background"/>
  <main id="main">
    <Header/>
    <div id="content">
      <h1>Hello World</h1>
    </div>
  </main>
</template>

<style scoped>
#content {
  position: relative;
  margin-top: 50px;
}
</style>
