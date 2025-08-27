<template>
  <div class="item-info-container">
    <detail-icon v-if="icon" :name="icon" color="#566574" />
    <span class="text"> {{ text }} </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import DetailIcon from '@/components/DetailIcon.vue'
defineProps({
  icon: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: '-'
  }
})
</script>

<style lang="scss">
.item-info-container {
  display: flex;
  align-items: center;
  gap: 5px;

  & > .text {
    @include get-typography('caption');
    color: get-color('neutral', 500);
  }
}
</style>
