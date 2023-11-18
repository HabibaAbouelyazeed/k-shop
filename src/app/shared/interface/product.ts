export interface Product {
  id: number,
  title: string,
  price: number,
  priceBeforeDiscount?: number,
  rating: number,
  thumbnail: string,
  state?: string,
  quantity?: number,
}
