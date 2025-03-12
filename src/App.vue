<script setup>
import { RouterView, useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();
watch(
  () => route.name,
  { immediate: true }
);
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
#app {
  width: 393px;
  height: 852px;
  position: absolute;
  top: 1286px;
  left: -596px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  #app {
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    position: relative;
  }
}
</style>