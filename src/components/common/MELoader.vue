<template>
  <div class="me-loader-wrapper" :class="{ fullscreen }">
    <div class="loader" :style="{ '--size': size + 'px' }"></div>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: Number,
    default: 40
  },

  fullscreen: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.me-loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: 10;
  }
}

.loader {
  width: var(--size);
  height: var(--size);
  border: 2px solid get-color('primary', 500);
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
