<template>
  <order-collapser class="addresses-section-container" text="Addresses">
    <order-card
      v-for="(address, index) in items"
      :key="index"
      :title="address.title"
      :subtitle="address.subtitle"
    >
      <template #extra-title-info v-if="address.code">
        <order-badge :text="`#${address.code}`"></order-badge>
      </template>

      <template #body>
        <order-grid :columns="address.columns" />
      </template>
    </order-card>
  </order-collapser>
</template>

<script setup>
import { computed } from 'vue'
import OrderCollapser from '@/components/Order/OrderCollapser.vue'
import OrderCard from '@/components/common/MeCard.vue'
import OrderGrid from '@/components/Order/OrderGrid.vue'
import OrderBadge from '@/components/Order/OrderBadge.vue'

const props = defineProps({
  info: {
    type: Array,
    required: true
  }
})

const items = computed(() => {
  return props.info.map((address) => {
    return {
      title: address.name,
      subtitle: address.label,
      code: address.code,
      columns: [
        {
          items: [
            {
              icon: 'light-location-check',
              text: address.address
            },
            {
              icon: 'light-user',
              text: address.contact?.name
            }
          ]
        },
        {
          items: [
            {
              icon: 'light-envelope',
              text: address.contact?.email
            },
            {
              icon: 'light-phone',
              text: address.contact?.phone
            },
            {
              icon: 'light-fax',
              text: address.contact?.fax
            }
          ]
        }
      ]
    }
  })
})
</script>

<style lang="scss">
.addresses-section-container {
  & > .collapser-body > .measure {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    width: 100%;

    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
