<template>
  <div class="card-wrapper">
    <div class="header">
      <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>

      <div class="title-container">
        <p class="title" v-if="title">{{ title }}</p>
        <slot name="extra-title-info"></slot>
      </div>
    </div>

    <div class="body" v-if="$slots.body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  },

  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.card-wrapper {
  box-shadow: 0px 4px 8px 0px $neutral-box-shadow;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  @include breakpoint-to('mobile') {
    padding: 12px;
  }

  & > .header {
    display: flex;
    flex-direction: column;
    gap: 2px;

    & > .subtitle {
      @include get-typography('caption');
      color: get-color('neutral', 500);
    }
    & > .title-container {
      display: flex;
      align-items: center;
      gap: 8px;

      & > .title {
        @include get-typography('body');
        color: get-color('neutral', 700);
      }
    }
  }
}
</style>
