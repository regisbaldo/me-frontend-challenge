export interface Order {
  header?: {
    number: number
    serial: number
    buyer: string
    price: number
    currency: string
    createdAt: string
    status: string
    contact: {
      name: string
      email: string
      phone: string
      fax: string
    }
  }
  supplier?: {
    code: string
    name: string
    readAt: string
    lastReplyAt: string
    document: {
      type: string
      value: string
    }
    address: string
    contact: {
      name: string
      email: string
      phone: string
      fax: string
    }
  }
  addresses?: Array<{
    label: string
    name: string
    code: string | null
    address: string
    contact: {
      name: string
      email: string
      phone: string
      fax: string
    }
  }>
}
