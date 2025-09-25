import { api } from './axios'
import { Order } from './OrderInterface'

type GetOrderResult = [false, Order] | [true, null]

export const getOrder = async (id: string): Promise<GetOrderResult> => {
  try {
    const response = await api.get(`/orders/${id}`)
    return [false, response.data]
  } catch (error) {
    return [true, null]
  }
}
