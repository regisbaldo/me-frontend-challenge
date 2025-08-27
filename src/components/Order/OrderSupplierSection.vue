<template>
  <order-card :title="info?.name" subtitle="Supplier">
    <template #extra-title-info>
      <order-badge :text="`#${info?.code}`"></order-badge>
    </template>

    <template #body>
      <order-grid :columns="columns" />
    </template>
  </order-card>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import OrderBadge from '@/components/Order/OrderBadge.vue'
import OrderCard from '@/components/common/MeCard.vue'
import OrderGrid from '@/components/Order/OrderGrid.vue'

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
})

const columns = computed(() => {
  return [
    {
      items: [
        {
          icon: 'light-address-card',
          text: props.info?.document
            ? `${props.info.document.type}: ${props.info.document.value}`
            : ''
        },
        {
          icon: 'light-location-check',
          text: props.info?.address || ''
        },
        {
          icon: 'light-user',
          text: props.info?.contact?.name || ''
        }
      ]
    },
    {
      items: [
        {
          icon: 'light-envelope',
          text: props.info?.contact?.email || ''
        },
        {
          icon: 'light-phone',
          text: props.info?.contact?.phone || ''
        },
        {
          icon: 'light-fax',
          text: props.info?.contact?.fax || ''
        },
        {
          icon: 'light-eye',
          text: props.info?.readAt
        }
      ]
    }
  ]
})
</script>
