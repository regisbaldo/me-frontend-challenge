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
  margin: 25px;
  background: $base;
  height: 100vh;

  @media (max-width: 768px) {
    margin: 15px;
  }

  @media (max-width: 480px) {
    margin: 5px;
  }
}
</style>
