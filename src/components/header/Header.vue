<script lang="ts">
import {defineComponent} from "vue";
import Clock from "@/components/header/Clock.vue";

export default defineComponent({
  components: {Clock}
})
</script>

<template>
  <header class="">
    <ol class="menu-items">
      <li><img alt="🖤" class="item favicon" draggable="false" src="https://twemoji.maxcdn.com/v/latest/72x72/1f5a4.png"/></li>
      <li><h1 class="item title">riya.monster</h1></li>
      <li><p class="item">File</p></li>

      <ol class="icon-items">
        <li><Clock class="item"/></li>
      </ol>
    </ol>
  </header>
</template>

<style scoped>
* {
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

.favicon {
  height: 20px;
  width: 30px;
  padding: 3px 6px 0;
}

.title {
  padding-top: 2px;
  font-weight: bold;
}

.menu-items {
  display: flex;
  list-style: none;
  bottom: 0;
  overflow: hidden;
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  padding: 0 0%;
  margin-bottom: 0;
}

.menu-items .item {
  overflow: hidden;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  text-align: center;
  align-content: center;
  display: flex;
}

.menu-items li:hover {
  background-color: rgba(116, 116, 116, 0.321);
}

.icon-items {
  display: flex;
  list-style: none;
  bottom: 0;
  overflow: hidden;
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  padding: 0 0%;
  margin-bottom: 0;
  text-align: right;
  margin-left: auto;
}



header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #eeeeeede;
  box-sizing: border-box;
}
</style>