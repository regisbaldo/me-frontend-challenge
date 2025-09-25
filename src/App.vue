<template>
  <div class="main-container">
    <order-container />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const OrderContainer = defineAsyncComponent(() => import('./containers/OrderContainer.vue'))
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
