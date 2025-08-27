import { api } from './axios'

export const getOrder = async (id) => {
  try {
    const response = await api.get(`/orders/${id}`)
    return [false, response.data]
  } catch (error) {
    return [error, null]
  }
}
