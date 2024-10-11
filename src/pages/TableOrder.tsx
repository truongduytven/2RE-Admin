import { useAuth } from '@/auth/AuthContext'
import PageTitle from '@/components/global/PageTitle'
import Loading from '@/components/Loading/Loading'
import { DataTable } from '@/components/local/order/data-table'
import { columns } from '@/components/local/order/column'
import REAPI from '@/lib/2REAPI'
import { Order } from '@/types'
import { useEffect, useState } from 'react'

const defaultValue: Order[] = [
  {
    id: '',
    totalQuantity: 0,
    totalPrice: 0,
    nameUser: '',
    status: ''
  }
]

export default function TableOrder() {
  const [Data, setData] = useState<Order[]>(defaultValue)
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true)
        const response = await REAPI.get(`/product/order-from-shop/${user?.userId}`)
        const data = await response.data
        setData(data)
      } catch (error) {
        console.error('Error fetching orders:', error)
      } finally {
        setIsLoading(false)
      }
    }
    if (user) {
      fetchOrders()
    }
  }, [user])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title='Danh sách đơn hàng' className='ml-5'/>
      <DataTable columns={columns} data={Data} />
    </div>
  )
}
