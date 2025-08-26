<template>
  <div class="collapser-wrapper">
    <button class="collapser-header" @click="toggle" :aria-expanded="isOpen">
      <detail-icon
        name="chevron"
        class="icon"
        color="#1052e0"
        size="12"
        view-box="0 0 12 7"
        :class="{ rotate: isOpen }"
      />

      <span class="text"> {{ text }}</span>
    </button>

    <Transition name="collapse">
      <div v-show="isOpen" class="collapser-body">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DetailIcon from './DetailIcon.vue';
import { defineProps } from 'vue';

defineProps({
  text: {
    type: String,
    default: ''
  }
});

const isOpen = ref(true);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss" scoped>
.collapser-wrapper {
  width: 100%;
  padding-bottom: 10px;
  background: transparent;

  & > .collapser-header {
    display: flex;
    gap: 5px;
    align-items: center;
    align-content: center;
    background: none;
    border: none;
    cursor: pointer;

    & > .icon {
      transition: transform 0.2s ease;
      background: get-color('primary', 50);
      border-radius: 50%;
      padding: 2px;

      &.rotate {
        transform: rotate(180deg);
      }
    }

    & > .text {
      @include get-typography('h6');
      color: get-color('neutral', 700);
    }
  }

  & > .collapser-body {
    padding-top: 20px;
  }

  .collapse-enter-active,
  .collapse-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    max-height: 300px;
    overflow: hidden;
  }

  .collapse-enter-from,
  .collapse-leave-to {
    max-height: 0;
    padding-top: 0;
  }

  .collapse-enter-to,
  .collapse-leave-from {
    max-height: 300px;
    padding-top: 20px;
  }

  .collapser-body {
    overflow: hidden;
    transition: padding-top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>
