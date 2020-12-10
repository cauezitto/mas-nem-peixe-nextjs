import DivisorHeader from 'components/DivisorHeader'
import Footer from 'components/Footer'
import Header from 'components/Header'
import InstagramPosts from 'components/InstagramPosts'
import ProductSection from 'components/ProductSection'
import ShippingAndInstallments from 'components/ShippingAndInstallments'
import { GetStaticPaths, GetStaticProps } from 'next'

const produto = () => {
  return (
    <>
      <Header />
      <ShippingAndInstallments />

      <ProductSection />

      <DivisorHeader>
        <h2>Descrição</h2>
      </DivisorHeader>

      <InstagramPosts />
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

export default produto
