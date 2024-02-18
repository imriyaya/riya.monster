<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const clock = ref("");

    function tick(): void {
      const date = new Date();
      const week = date.toLocaleString("en-US", { weekday: "long" }).substring(0, 3);
      const month = date.toLocaleString("en-US", { month: "long" }).substring(0, 3);
      const day_of_month = date.getDate();
      const hours = (date.getHours().toString()).padStart(2, '0');
      const minutes = (date.getMinutes().toString()).padStart(2, '0');
      const seconds = (date.getSeconds().toString()).padStart(2, '0');
      clock.value = `${week} ${month} ${day_of_month} ${hours}:${minutes}:${seconds}`;
    }

    onMounted(() => {
      setInterval(() => {
        tick();
      }, 0, 1000);
    });

    return {
      clock
    };
  },
});
</script>

<template>
  <p>{{clock}}</p>
</template>

<style scoped>

</style>