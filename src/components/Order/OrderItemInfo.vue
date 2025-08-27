<template>
  <div class="item-info-container">
    <order-icon v-if="icon" :name="icon" color="#566574" />

    <a v-if="isLink" :href="linkHref" target="_blank" rel="noopener noreferrer" class="text link">
      {{ text }}
    </a>

    <span v-else class="text">
      {{ text }}
    </span>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import OrderIcon from '@/components/Order/OrderIcon.vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: '-'
  },
  type: {
    type: String,
    validator: (value) => ['email', 'phone', 'text'].includes(value),
    default: 'text'
  }
})

const isLink = computed(() => ['email', 'phone'].includes(props.type))

const linkHref = computed(() => {
  if (props.type === 'email') return `mailto:${props.text}`
  if (props.type === 'phone') return `tel:${props.text}`
  return ''
})
</script>

<style lang="scss">
.item-info-container {
  display: flex;
  align-items: center;
  gap: 4px;

  & > .text {
    @include get-typography('caption');
    color: get-color('neutral', 500);

    &.link {
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: get-color('primary', 500);
        text-decoration: underline;
      }
    }
  }
}
</style>
