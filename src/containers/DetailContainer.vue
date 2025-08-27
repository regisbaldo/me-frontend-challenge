<template>
  <div class="detail-container">
    <m-e-loader fullscreen v-if="loading" />

    <not-found-error v-else-if="error" @refresh="getOrder(orderId)" />

    <template v-else>
      <detail-header-info v-if="order?.header" :info="order?.header" />

      <detail-supplier-section v-if="order?.supplier" :info="order?.supplier" />

      <detail-addresses-section v-if="order?.addresses" :info="order?.addresses" />
    </template>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'

import DetailHeaderInfo from '../components/DetailHeaderInfo.vue'
import MELoader from '@/components/common/MELoader.vue'
import NotFoundError from '@/components/Order/NotFoundError.vue'
import DetailSupplierSection from '@/components/Order/DetailSupplierSection.vue'
import DetailAddressesSection from '@/components/Order/DetailAddressesSection.vue'

const orderId = 1

const orderStore = useOrderStore()
const { order, loading, error } = storeToRefs(orderStore)

const getOrder = async (id) => {
  await orderStore.getOrderData(id)
}

onMounted(async () => {
  await getOrder(orderId)
})
</script>

<style lang="scss">
.detail-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
}
</style>
