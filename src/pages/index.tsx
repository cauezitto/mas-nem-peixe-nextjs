import { useState } from 'react'
import Button from 'components/Button'
import Carousel from 'components/Carousel'
import Header from 'components/Header'
import ShippingAndInstallments from 'components/ShippingAndInstallments'
import { Wrapper } from 'components/Wrapper/styles'
import * as S from 'styles/pages/Home'
import Link from 'next/link'
import DivisorHeader from 'components/DivisorHeader'
import Product from 'components/Product'
import ProductList from 'styles/ProductsList'
import { FiInstagram } from 'react-icons/fi'
import InstagramPosts from 'components/InstagramPosts'
import Newsletter from 'components/Newsletter'
import Footer from 'components/Footer'

export default function Home() {
  const [products, setProducts] = useState([
    {
      title: `"mas nem peixe"`,
      slug: 'mas-nem-peixe',
      imageUrl: 'caneca.webp',
      category: 'caneca',
      price: 45
    },
    {
      title: `"mas nem peixe"`,
      slug: 'mas-nem-peixe',
      imageUrl: 'caneca.webp',
      category: 'caneca',
      price: 45
    },
    {
      title: `"mas nem peixe"`,
      slug: 'mas-nem-peixe',
      imageUrl: 'caneca.webp',
      category: 'caneca',
      price: 45
    },
    {
      title: `"mas nem peixe"`,
      slug: 'mas-nem-peixe',
      imageUrl: 'caneca.webp',
      category: 'caneca',
      price: 45
    },
    {
      title: `"mas nem peixe"`,
      slug: 'mas-nem-peixe',
      imageUrl: 'caneca.webp',
      category: 'caneca',
      price: 45
    },
    {
      title: `"mas nem peixe"`,
      slug: 'mas-nem-peixe',
      imageUrl: 'caneca.webp',
      category: 'caneca',
      price: 45
    },
    {
      title: `"mas nem peixe"`,
      slug: 'mas-nem-peixe',
      imageUrl: 'caneca.webp',
      category: 'caneca',
      price: 45
    },
    {
      title: `"mas nem peixe"`,
      slug: 'mas-nem-peixe',
      imageUrl: 'caneca.webp',
      category: 'caneca',
      price: 45
    }
  ])
  return (
    <>
      <Header />
      <Carousel />
      <ShippingAndInstallments />
      <Wrapper>
        <S.SingleLinkContainer>
          <Link href="/sobre" passHref>
            <a>
              <Button
                text="SOBRE NÓS"
                outline
                color="black"
                textShadow
                fontWeight="bold"
                fontSize="large"
                size="medium"
              />
            </a>
          </Link>
        </S.SingleLinkContainer>
      </Wrapper>
      <section>
        <DivisorHeader>
          <h2>CANECAS</h2>
        </DivisorHeader>

        <Wrapper>
          <ProductList>
            {products.map((product, index) => (
              <Product
                title={product.title}
                slug={product.slug}
                category={product.slug}
                imageUrl={product.imageUrl}
                price={product.price}
                key={index}
              />
            ))}
          </ProductList>
        </Wrapper>
      </section>

      <section>
        <InstagramPosts />
      </section>

      <section>
        <Newsletter />
      </section>

      <Footer />
    </>
  )
}
