<template>
  <div class="main-container">
    <detail-container />
  </div>
</template>

<script setup>
import DetailContainer from './containers/DetailContainer.vue';
</script>

<style lang="scss">
.main-container {
  margin: 20px;
  background: $base;
  height: 100vh;
}
</style>
