interface ProductProps {
  name: string
  price: number
  description: string
  category: string
  images: Array<{
    title: string
    url: string
  }>
}

export default ProductProps
