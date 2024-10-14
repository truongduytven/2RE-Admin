import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from '@/components/local/products/data-table-column-header'

import { Product } from '@/types/index'
import { Badge } from '@/components/ui/badge'
import { formatCurrency } from '@/lib/utils'
import DataViewDetail from '@/components/local/products/data-view-detail'
import { Link } from 'react-router-dom'
import { Ellipsis, Eye } from 'lucide-react'

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'productId',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Mã sản phẩm' />,
    cell: ({ row }) => {
      return (
        <div className='ml-5'>
          <p>{row.getValue('productId') ? (row.getValue('productId') as string)?.slice(0, 8) : ''} </p>
        </div>
      )
    },
    enableHiding: false
  },
  {
    accessorKey: 'imgUrl',
    header: ({ column }) => <DataTableColumnHeader column={column} title='ảnh sản phẩm' />,
    cell: ({ row }) => {
      return (
        <div className='flex justify-center items-center'>
          <img src={row.getValue('imgUrl')} alt='ảnh' className='w-12 h-12 object-cover' />
        </div>
      )
    }
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Tên sản phẩm' />,
    cell: ({ row }) => {
      return <div className='max-w-[500px] truncate font-semibold'>{row.getValue('name')}</div>
    }
  },
  {
    accessorKey: 'size',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Kích cỡ' />,
    cell: ({ row }) => {
      return <div className='mx-10'>{row.getValue('size')}</div>
    }
  },
  {
    accessorKey: 'genderCategory',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Giới' />,
    cell: ({ row }) => {
      return <div className='mx-5'>{row.getValue('genderCategory')}</div>
    }
  },
  {
    accessorKey: 'price',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Tổng giá tiền' />,
    cell: ({ row }) => {
      return <div className='mx-5'>{formatCurrency(row.getValue('price'))}</div>
    }
  },
  {
    accessorKey: 'category',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Ngày tạo' />,
    cell: ({ row }) => {
      return <div className='mx-5'>{row.getValue('category')}</div>
    }
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Trạng thái' />,
    cell: ({ row }) => {
      return (
        <div className='flex w-full justify-center'>
          {row.getValue('status') === 'Có sẵn' ? (
            <Badge className='bg-green-500 hover:bg-green-600'>Có sẵn</Badge>
          ) : (
            <Badge className='bg-red-500 hover:bg-red-600'>Hết hàng</Badge>
          )}
        </div>
      )
    }
  },
  // {
  //   accessorKey: 'status',
  //   header: ({ column }) => <DataTableColumnHeader column={column} title='Status' />,
  //   cell: ({ row }) => {
  //     const status = row.getValue('status') as IUserStatus
  //     const color = status === IUserStatus.Active ? '#4DB848' : '#E53E3E'
  //     const content = status === IUserStatus.Active ? 'Active' : 'Inactive'
  //     return <Chip content={content} color={color} />
  //   }
  // },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <Link to={`/products/${row.getValue('productId')}`}
          className='cursor-pointer flex-1 flex text-sm font-bold items-center justify-end'
        >
          <Ellipsis className='ml-2' size={20} />
        </Link>
      )
    }
  }
]
