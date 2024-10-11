import Loader from '@/components/Loading/Loader'
import Loading from '@/components/Loading/Loading'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import REAPI from '@/lib/2REAPI'
import { formatCurrency } from '@/lib/utils'
import { Order } from '@/types'
import { Row } from '@tanstack/react-table'
import { Eye } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

interface Product {
  productId: string
  productName: string
  price: number
  imageUrl: string
}

export default function DataViewDetail({ row }: DataTableRowActionsProps<Order>) {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const handleViews = async (id: string) => {
    try {
      setIsLoading(true)
      const response = await REAPI.get(`/shop/detail-cart-from-shop/${id}`)
      const data = response.data
      setProducts(data)
      setIsLoading(false)
    } catch {
      console.log('Error fetching products')
    }
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          onClick={() => handleViews(row.getValue('id'))}
          className='cursor-pointer flex-1 flex text-sm font-bold items-center justify-end'
        >
          Xem chi tiết <Eye className='ml-2' size={20} />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Chi tiết đơn hàng</SheetTitle>
          <SheetDescription>
            <div className='flex flex-col mt-10 gap-2'>
              <div className='text-lg'>
                <span className='font-bold'>Tên:</span> {row.getValue('nameUser')}
              </div>
              <div className='text-lg'>
                <span className='font-bold'>Mã đơn hàng:</span>{' '}
                {row.getValue('id') ? (row.getValue('id') as string)?.slice(0, 8) : ''}
              </div>
              <div className='text-lg'>
                <span className='font-bold'>Trạng thái:</span> {row.getValue('status')}
              </div>
              <div className='text-lg'>
                <span className='font-bold'>Tổng tiền:</span> {formatCurrency(row.getValue('totalPrice'))}
              </div>
              <div className='text-lg mb-4'>
                <span className='font-bold'>Sản phẩm:</span>
              </div>
              <div className='w-full flex flex-col gap-4 overflow-y-auto max-h-64'>
                {isLoading ? (
                  <Loading />
                ) : (
                  products.map((product) => (
                    <Link to={`/productDetails/${product.productId}`}>
                      <div key={product.productId} className='relative flex gap-4 justify-between items-center'>
                        <div className='flex items-center gap-3'>
                          <div className='w-16 h-16 bg-gray-200'>
                            <img
                              src={product.imageUrl}
                              className='w-full h-full object-cover'
                              alt={product.productName}
                            />
                          </div>
                          <div>
                            <div className='text-base'>{product.productName}</div>
                            <div className='text-black'>{formatCurrency(product.price)}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button className='mt-10 text-left' type='submit'>
              Xác nhận
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
