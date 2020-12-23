import ProductProps from './product'

interface Product extends ProductProps {
  quant: number
}

interface CartProps {
  products: Array<Product>
  total: string
}

export default CartProps
