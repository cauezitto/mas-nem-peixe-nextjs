import DivisorHeader from 'components/DivisorHeader'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Heading from 'components/Heading'
import Input from 'components/Input'
import InstagramPosts from 'components/InstagramPosts'
import Newsletter from 'components/Newsletter'
import Product from 'components/Product'
import Wrapper from 'components/Wrapper'
import ProductList from 'styles/ProductsList'
import Favoritos from 'styles/pages/Favoritos'
import products from 'utils/products.json'
import { FiCopy } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { useRef } from 'react'

const Favorites = () => {
  const copy = () => {
    const input = document.querySelector('.link-input') as HTMLInputElement
    console.log(input)
    input.select()
    document.execCommand('copy')
    alert('link copiado!')
  }

  const copyMobile = () => {
    const input = document.querySelector(
      '.link-input-mobile'
    ) as HTMLInputElement
    console.log(input)
    input.select()
    document.execCommand('copy')
    alert('link copiado!')
  }
  return (
    <Favoritos>
      <Header />
      <DivisorHeader>Favoritos</DivisorHeader>
      <Wrapper>
        <ProductList>
          {products.map((product, index) => (
            <Product
              key={index}
              title={product.title}
              category={product.category}
              price={product.price}
              imageUrl={product.imageUrl}
              slug={product.slug}
            />
          ))}
        </ProductList>

        <div className="share-wrapper">
          <Heading color="black" justify="center">
            {' '}
            Envie o link para seus amigos
          </Heading>

          <div className="space-between center">
            <Input
              className="link-input desktop"
              value="https://masnempeixe.com.br/favoritos/s5AlbZhJ7TK8ThQtrlzHOV"
              borderColor="orange"
              width={570}
            />

            <Input
              className="mobile link-input-mobile"
              value="https://masnempeixe.com.br/favoritos/s5AlbZhJ7TK8ThQtrlzHOV"
              borderColor="orange"
              width={350}
              textArea
            />
            <FiCopy className="copy desktop" onClick={copy} />
            <FiCopy className="copy mobile" onClick={copyMobile} />
          </div>

          <div className="options">
            <a href="#">
              <div className="option facebook">
                <FaFacebookF /> &nbsp; Facebook
              </div>
            </a>

            <a href="#">
              <div className="option twitter">
                <FaTwitter /> &nbsp; Twitter
              </div>
            </a>

            <a href="#">
              <div className="option whatsapp">
                <FaWhatsapp /> &nbsp; Whatsapp
              </div>
            </a>

            <a href="#">
              <div className="option plus">
                <GoPlus /> &nbsp; Mais
              </div>
            </a>
          </div>
        </div>
      </Wrapper>
      <InstagramPosts />
      <Newsletter />
      <Footer />
    </Favoritos>
  )
}

export default Favorites
