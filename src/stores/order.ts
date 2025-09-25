import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getOrder } from '@/services/order'
import { OrderInterface } from '@/services/OrderInterface'

export const useOrderStore = defineStore('order', () => {
  const order = ref<OrderInterface | null>(null)
  const loading = ref<boolean>(false)
  const error = ref<boolean | null>(null)

  const getOrderData = async (id: string) => {
    loading.value = true
    error.value = null

    const [err, data] = await getOrder(id)
    if (!err) order.value = data

    error.value = err
    loading.value = false
  }

  order
  return {
    order,
    loading,
    error,
    getOrderData
  }
})
