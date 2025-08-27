import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getOrder } from '@/services/order'

export const useOrderStore = defineStore('order', () => {
  const order = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const getOrderData = async (id) => {
    loading.value = true
    error.value = null

    const [err, data] = await getOrder(id)
    console.log(err, data, order.value);

    if (!err) order.value = data

    error.value = err
    loading.value = false
  }

  return {
    order,
    loading,
    error,
    getOrderData
  }
})
