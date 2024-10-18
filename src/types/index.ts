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
  date: string
  paymentMethod: string
  status: string
}

export interface OrderUser {
  orderId: string
  totalPrice: number
  dateTime: string
  address: string
  email: string
  fullName: string
  phone: string
  listProducts: CartItem[]
  status: string
}

export interface CartItem {
  productId: string
  name: string
  size: string
  imageUrl: string
  price: number
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

export interface DataUser {
  userId: string
  userName: string
  passWord: string
  email: string
  address: string
  phoneNumber: string
  roleId: string
  roleName: string
  isShopOwner: boolean
  shopName: string
  shopAddress: string
  shopDescription: string
  shopLogo: string
  createdAt: string
  updatedAt: string
}
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