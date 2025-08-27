<template>
  <div class="order-container">
    <m-e-loader fullscreen v-if="loading" />

    <not-found-error v-else-if="error" @refresh="getOrder(orderId)" />

    <template v-else>
      <order-header-info v-if="order?.header" :info="order?.header" />

      <order-supplier-section v-if="order?.supplier" :info="order?.supplier" />

      <order-addresses-section v-if="order?.addresses" :info="order?.addresses" />
    </template>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'

import OrderHeaderInfo from '@/components/Order/OrderHeaderInfo.vue'
import MELoader from '@/components/common/MELoader.vue'
import NotFoundError from '@/components/Order/NotFoundError.vue'
import OrderSupplierSection from '@/components/Order/OrderSupplierSection.vue'
import OrderAddressesSection from '@/components/Order/OrderAddressesSection.vue'

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
.order-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
  padding-bottom: 150px;
}
</style>
