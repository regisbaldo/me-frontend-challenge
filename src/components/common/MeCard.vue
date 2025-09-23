<template>
  <div class="me-card">
    <header class="me-card__header">
      <p class="me-card__header__subtitle" v-if="subtitle">{{ subtitle }}</p>

      <div class="me-card__header__title">
        <p class="me-card__header__title-text" v-if="title">{{ title }}</p>
        <slot name="extra-title-info"></slot>
      </div>
    </header>

    <section v-if="$slots.body">
      <slot name="body"></slot>
    </section>
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
.me-card {
  box-shadow: 0px 4px 8px 0px $neutral-box-shadow;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: $white;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  @include breakpoint-to('mobile') {
    padding: 12px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 2px;

    &__subtitle {
      @include get-typography('caption');
      color: get-color('neutral', 500);
    }

    &__title {
      display: flex;
      align-items: center;
      gap: 8px;

      &-text {
        @include get-typography('body');
        color: get-color('neutral', 700);
      }
    }
  }
}
</style>
