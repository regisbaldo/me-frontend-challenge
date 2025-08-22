<template>
  <svg
    class="detail-icon-container"
    :width="size"
    :height="size"
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="path" :fill="color" />
  </svg>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 14
  },
  color: {
    type: String,
    default: '#A3ACB6'
  }
});

const path = ref('');

onMounted(async () => {
  const svg = await import(`@/assets/icons/${props.name}.svg?raw`);
  const match = svg.default.match(/d="([^"]+)"/);
  if (match) {
    path.value = match[1];
  }
});
</script>

<style lang="scss">
.detail-icon-container {
  min-width: v-bind(size + 'px');
  min-height: v-bind(size + 'px');
  flex-shrink: 0;
}
</style>
