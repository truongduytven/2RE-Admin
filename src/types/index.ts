export enum Gender {
  Male,
  Female,
  Other
}

export type User = {
  name: string
  address?: string
  gender: Gender
}

export interface Order {
  id: string
  totalQuantity: number
  totalPrice: number
  nameUser: string
  status: string
}

export interface CartItem {
  productId: string
  productName: string
  price: number
  imageUrl: string
}


export interface ProductDetail {
  productId: string
  shopId: string
  shopOwner: string
  category: string
  categoryId: string
  genderCategory: string
  genderCategoryId: string
  size: string
  sizeId: string
  name: string
  price: number
  sale: number
  mainImgUrl: string
  listImgUrl: string[]
  description: string
  brand: string
  condition: string
  status: string
  createdAt: string
  updatedAt: string
}

// {
//   "productId": "b1f8c9e3-3e2b-4c4d-8e1a-2e6f5c3d8e0b",
//   "shopId": "b1a3e477-9f5e-4bff-ae0a-5e8b42e0f8a0",
//   "shopOwner": "Second Chance Styles",
//   "categoryId": "c5e1f2b8-2f4c-4b3d-b7a8-4c5e6f7d8b9a",
//   "category": "Áo Khoác",
//   "genderCategoryId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
//   "genderCategory": "Nam",
//   "sizeId": "e5a1b4d6-5c4c-4f0e-bc9f-4b85b6c5f4a3",
//   "size": "M",
//   "name": "Áo Khoác Da Nam",
//   "price": 280000,
//   "sale": 600000,
//   "mainImgUrl": "https://product.hstatic.net/1000078312/product/ao-da-nam-trucker-jacket_71f1c31e72764a24833eedbeb00ecf50_master.jpg",
//   "listImgUrl": [
//     "https://product.hstatic.net/1000078312/product/ao-da-nam-kieu-jean_a349597f895c445b9aa61e5057438ef4_master.jpg"
//   ],
//   "description": "Áo khoác da cao cấp dành cho nam",
//   "brand": "Nike",
//   "condition": "70%",
//   "status": "Có sẵn",
//   "createdAt": "2024-10-12T14:26:13.8234751",
//   "updatedAt": "2024-10-12T14:26:13.8234752"
// }

export interface Order {
  id: string
  totalQuantity: number
  totalPrice: number
  nameUser: string 
  status: string
}

export type MothRevenue = {
  month: number
  revenue: number
}

export interface Dashboard {
  totalProducts: number
  totalOrders: number
  revenueThisMonth: number
  monthlyRevenue: MothRevenue[]
  totalRatings: number
}

export interface Product {
  productId: string
  shopOwner: string
  name: string
  price: number
  imgUrl: string
  brand: string
  condition: string
  status: string
  category: string
  genderCategory: string
  size: string
  sale: number
}

// {
//   "productId": "80bb1d76-a069-4d84-938c-093e69361edd",
//   "shopOwner": "Second Chance Styles",
//   "category": "Áo Khoác",
//   "genderCategory": "Nam",
//   "size": "XL",
//   "name": "Áo khoác dù",
//   "price": 120000,
//   "sale": 320000,
//   "imgUrl": "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/462257865_1190650772191304_1392401977120547997_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeErLHf7ymM8uyesrfOXC24lvGnJU8lIQsa8aclTyUhCxmdsMgKE1TZSU36NRk3XohQUxDlhjgbXrTVOcGCbhMET&_nc_ohc=hwkHpKGrjMMQ7kNvgFiBnO1&_nc_ht=scontent-sin6-4.xx&_nc_gid=APb3_YKYzZw9_Pl9nf05khJ&oh=00_AYDqKV6O7JLdiak193d3cpk7ivxU8avHllVw7TZTPP592Q&oe=67099017",
//   "brand": "Adidas",
//   "condition": "80%",
//   "status": "Có sẵn"
// },