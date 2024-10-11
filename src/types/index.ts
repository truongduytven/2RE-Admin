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
  shopOwner: string
  category: string
  genderCategory: string
  size: string
  name: string
  price: number
  mainImgUrl: string
  listImgUrl: string[]
  description: string
  brand: string
  condition: string
  status: string
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