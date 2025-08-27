<template>
  <div class="collapser-wrapper">
    <button class="collapser-header" @click="toggle" :aria-expanded="isOpen">
      <detail-icon
        name="chevron"
        class="icon"
        color="#1052e0"
        size="20"
        view-box="-2 1 16 5"
        :class="{ rotate: isOpen }"
      />

      <span class="text"> {{ text }}</span>
    </button>

    <Transition name="collapse">
      <div
        v-show="isOpen"
        class="collapser-body"
        ref="contentRef"
        :style="{ '--content-height': contentHeight + 'px' }"
      >
        <div class="measure" ref="measureRef">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import DetailIcon from './DetailIcon.vue'
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    default: ''
  }
})

const isOpen = ref(true)
const contentRef = ref(null)
const measureRef = ref(null)
const contentHeight = ref(0)

const updateHeight = () => {
  if (measureRef.value) {
    contentHeight.value = measureRef.value.scrollHeight
  }
}

const toggle = () => {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  updateHeight()
  window.addEventListener('resize', updateHeight)
})

const observer = new ResizeObserver(() => {
  updateHeight()
})

watch(measureRef, (el) => {
  if (el) {
    observer.observe(el)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight)
  if (measureRef.value) {
    observer.unobserve(measureRef.value)
  }
  observer.disconnect()
})
</script>

<style lang="scss" scoped>
.collapser-wrapper {
  width: 100%;
  background: transparent;

  & > .collapser-header {
    display: flex;
    gap: 8px;
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
    padding-top: 16px;
  }

  .collapse-enter-active,
  .collapse-leave-active {
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
  }

  .collapse-enter-from,
  .collapse-leave-to {
    max-height: 0;
  }

  .collapse-enter-to,
  .collapse-leave-from {
    max-height: var(--content-height);
  }
}
</style>
