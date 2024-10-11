import { ColumnDef } from '@tanstack/react-table'
// import { format } from 'date-fns'

import { DataTableColumnHeader } from '@/components/local/order/data-table-column-header'

import { Order } from '@/types/index'
import { Badge } from '@/components/ui/badge'
import { formatCurrency } from '@/lib/utils'
import DataViewDetail from './data-view-detail'

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Mã đơn hàng' />,
    cell: ({ row }) => {
      return (
        <div className='ml-5'>
          <p>{row.getValue('id') ? (row.getValue('id') as string)?.slice(0, 8) : ''} </p>
        </div>
      )
    },
    enableHiding: false
  },
  {
    accessorKey: 'nameUser',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Tên khách hàng' />,
    cell: ({ row }) => {
      return <div className='max-w-[500px] truncate font-semibold'>{row.getValue('nameUser')}</div>
    }
  },
  {
    accessorKey: 'totalQuantity',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Tổng sản phẩm' />,
    cell: ({ row }) => {
      return <div className='mx-10'>{row.getValue('totalQuantity')}</div>
    },
  },
  {
    accessorKey: 'totalPrice',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Tổng giá tiền' />,
    cell: ({ row }) => {
      return <div className='mx-5'>{formatCurrency(row.getValue('totalPrice'))}</div>
    },
  },
  // {
  //   accessorKey: 'CreateDate',
  //   header: ({ column }) => <DataTableColumnHeader column={column} title='Ngày tạo' />,
  //   cell: ({ row }) => {
  //     const createdOnDate = new Date(row.getValue('CreateDate') ? row.getValue('CreateDate') : new Date())
  //     return <div>{format(createdOnDate, 'dd/MM/yyyy')}</div>
  //   }
  // },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Trạng thái' />,
    cell: ({ row }) => {
      return <Badge className='bg-green-500 hover:bg-green-600'>{row.getValue('status')}</Badge>
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
      return <DataViewDetail row={row} />
    }
  }
]
