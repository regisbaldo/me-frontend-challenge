<template>
  <detail-collapser class="addresses-section-container" text="Addresses">
    <detail-card
      v-for="(address, index) in items"
      :key="index"
      :title="address.title"
      :subtitle="address.subtitle"
    >
      <template #extra-title-info v-if="address.code">
        <detail-badge :text="`#${address.code}`"></detail-badge>
      </template>

      <template #body>
        <detail-grid :columns="address.columns" />
      </template>
    </detail-card>
  </detail-collapser>
</template>

<script setup>
import { computed } from 'vue'
import DetailCollapser from '../DetailCollapser.vue'
import DetailCard from '../DetailCard.vue'
import DetailGrid from '../DetailGrid.vue'
import DetailBadge from '../DetailBadge.vue'

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
              icon: 'user',
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
  & > .collapser-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
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
