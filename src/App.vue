<template>
  <div class="main-container">
    <order-container />
  </div>
</template>

<script setup>
import OrderContainer from './containers/OrderContainer.vue'
</script>

<style lang="scss">
.main-container {
  padding: 24px;
  background: $base;
  height: 100%;
  max-width: $breakpoint-xlarge;

  @include breakpoint-to('tablet') {
    padding: 15px;
  }

  @include breakpoint-to('mobile') {
    padding: 5px;
  }
}
</style>
