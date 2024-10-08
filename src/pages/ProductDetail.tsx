import React, { useEffect, useState } from 'react'
import { ProductDetail } from '@/types'
import { useNavigate, useParams } from 'react-router-dom'
import Container from '@/components/ui/Container'

import { ArrowLeft, Heart } from 'lucide-react'

import { formatCurrency, formatProductType } from '@/lib/utils'
import { toast } from 'sonner'
import REAPI from '@/lib/2REAPI'
import Loading from '@/components/Loading/Loading'
import { useAuth } from '@/auth/AuthContext'
import { Badge } from '@/components/ui/badge'

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [mainImage, setMainImage] = useState<string>('')
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { user } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    scrollToTop()
  }, [id])

  useEffect(() => {
    const fetchProduct = async (productId: string) => {
      try {
        setIsLoading(true)
        const response = await REAPI.get(`/product/${productId}`)
        const product = response.data
        setProduct(product)
        setMainImage(product.mainImgUrl)
        toast.success('Tải chi tiết sản phẩm thành công!')
      } catch (error) {
        console.error('Fetching product detail failed:', error)
        toast.error('Tải chi tiết sản phẩm thất bại!')
      } finally {
        setIsLoading(false)
      }
    }
    if (id) {
      fetchProduct(id)
    }
  }, [id])

  useEffect(() => {
    const fetchFavorite = async () => {
      try {
        if (!user || !product) return
        const response = await REAPI.get(`/favorite/${user.userId}`)
        setIsFavorite(response.data.includes(product.productId))
      } catch (error) {
        console.error('Fetching favorite products failed:', error)
      }
    }
    fetchFavorite()
  }, [user, product])

  const handleImageHover = (image: string) => {
    setMainImage(image)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setMainImage(product ? product.mainImgUrl : '')
  }

  const handleFavoriteToggle = async () => {
    if (user) {
      try {
        const response = await REAPI.post(`/favorite/${user.userId}/${product!.productId}`)
        console.log(`${user.userId}/${product!.productId}`)
        const data = response.data.type
        if (data === 'Add') {
          setIsFavorite(true)
          toast.success('Thêm sản phẩm vào yêu thích thành công!')
        }
      } catch (error) {
        setIsFavorite(false)
        toast.error('Xóa sản phẩm khỏi yêu thích thành công!')
      }
    } else {
      toast.error('Vui lòng đăng nhập để thêm sản phẩm vào yêu thích!')
    }
  }

  if (isLoading) {
    return (
      <div className='w-full flex justify-center mt-32 items-center'>
        <Loading />
      </div>
    )
  }

  if (!product) {
    return (
      <div className='w-full flex justify-center mt-30 items-center'>
        <div>Không tìm thấy sản phẩm</div>
      </div>
    )
  }

  return (
    <Container className='w-screen h-screen flex justify-center items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-10'>
          <div className='flex justify-start items-center gap-2'>
            <ArrowLeft size={16} />
            <button className='hover:underline' onClick={() => navigate(-1)}>
              Trở về
            </button>
          </div>
          <div className='flex flex-row gap-14'>
            <div className='flex flex-1 flex-row gap-4'>
              <div className='flex flex-col gap-2 overflow-scroll h-[500px]'>
                {product.listImgUrl.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`related-${index}`}
                    className='w-full h-[80px] object-cover border border-gray-300 cursor-pointer transition duration-300 hover:border-black'
                    onMouseEnter={() => handleImageHover(image)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
              <img
                src={mainImage}
                alt={product.name}
                className='w-[400px] h-[500px] object-cover border border-gray-300'
              />
            </div>

            <div className='flex flex-1 flex-col gap-8 flex-grow h-full'>
              <div className='flex justify-between items-center'>
                <p className='text-3xl font-semibold'>{product.name}</p>
                <Heart
                  strokeWidth={1}
                  color={isFavorite ? 'red' : 'black'}
                  fill={isFavorite ? 'red' : 'transparent'}
                  className='w-9 h-9 p-2 border rounded-full hover:cursor-pointer'
                  onClick={handleFavoriteToggle}
                />
              </div>
              <p className='text-2xl font-bold'>{formatCurrency(product.price)}</p>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                  <strong>Tên cửa hàng:</strong> {product.shopOwner}
                </div>
                <div className='flex gap-2 items-center'>
                  <strong>Mô tả:</strong> {product.description}
                </div>
                <div className='flex gap-2 items-center'>
                  <strong>Kích cỡ:</strong> {product.size}
                </div>
                <div className='flex gap-2 items-center'>
                  <strong>Thương hiệu:</strong> {product.brand ? product.brand : 'Không xác định'}
                </div>
                <div className='flex gap-2 items-center'>
                  <strong>Tình trạng:</strong> {product.condition ? product.condition : 'Không xác định'}
                </div>
                <div className='flex gap-2 items-center'>
                  <strong>Loại:</strong> {formatProductType(product.category)}
                </div>
                <div className='flex gap-2 items-center'>
                  {product.status === 'Có sẵn' ? (<Badge className='bg-green-500'>{product.status}</Badge>) : (<Badge className='bg-red-500'>{product.status}</Badge>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductDetails
