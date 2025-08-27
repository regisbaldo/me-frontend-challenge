<template>
  <div class="badge-wrapper">
    <span class="text"> {{ text }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
.badge-wrapper {
  background: get-color('primary', 50);
  padding: 4px 6px;
  border-radius: 8px;
  display: flex;

  & > .text {
    color: get-color('primary', 500);
    @include get-typography('badge');
  }
}
</style>
