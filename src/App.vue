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
  margin: 25px 25px 150px 25px;
  background: $base;
  height: 100%;

  @media (max-width: 768px) {
    margin: 15px 15px 150px 15px;
  }

  @media (max-width: 480px) {
    margin: 5px 5px 150px 5px;
  }
}
</style>
