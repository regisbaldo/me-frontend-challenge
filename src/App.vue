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
  height: 100%;

  @include breakpoint-to('tablet') {
    padding: 15px;
  }

  @include breakpoint-to('mobile') {
    padding: 5px;
  }
}
</style>
