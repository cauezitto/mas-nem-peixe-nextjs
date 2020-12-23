import Description from 'components/Description'
import DivisorHeader from 'components/DivisorHeader'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Heading from 'components/Heading'
import InstagramPosts from 'components/InstagramPosts'
import ProductSection from 'components/ProductSection'
import ShippingAndInstallments from 'components/ShippingAndInstallments'
import { Wrapper } from 'components/Wrapper/styles'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import ProductList from 'styles/ProductsList'
import { useState } from 'react'
import Product from 'components/Product'
import { FiInstagram } from 'react-icons/fi'

interface ProductProps {
  title: string
  slug: string
  imageUrl: string
  category: string
  price: number
}

const Produto = () => {
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
      <ShippingAndInstallments />

      <ProductSection />
      <section>
        <DivisorHeader>
          <h2>Descrição</h2>
        </DivisorHeader>

        <Description />
      </section>

      <section>
        <Wrapper>
          <Heading>
            {' '}
            <Image src="/img/+.png" height={30} width={60} /> Aproveite e compre
            junto
          </Heading>

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
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'mas-nem-peixe' } }],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      name: 'lalau'
    }
  }
}

export default Produto
