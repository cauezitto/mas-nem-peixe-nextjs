import { createContext, useContext, useState, useEffect } from 'react'
import CartProps from 'types/CartProps'
import handleCartStorage from 'utils/handleCart'

type SetValue = (value: any) => void
interface cartContextProps {
  cart: CartProps
  setCart: SetValue
}
const CartContext = createContext<cartContextProps | null>(null)

const StatesProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartProps>({
    products: [
      {
        name: '"Mas Nem Peixe?"',
        category: 'Caneca',
        price: 34.5,
        quant: 5,
        images: [
          {
            title: 'canemnp',
            url: '/img/caneca.webp'
          }
        ],
        description: 'canecona legal'
      },
      {
        name: '"Mas Nem Peixe?"',
        price: 34.5,
        quant: 5,
        category: 'Caneca',
        images: [
          {
            title: 'canemnp',
            url: '/img/caneca.webp'
          }
        ],
        description: 'canecona legal'
      }
    ],
    total: 'R$34,50'
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      handleCartStorage.addToCart(cart)
    }
  }, [cart])

  useEffect(() => {
    setIsLoading(false)
    setCart(handleCartStorage.getCart())
  }, [])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default StatesProvider

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('Use count precisa estar dentro de um provider')
  }

  const { cart, setCart } = context

  return { cart, setCart }
}
