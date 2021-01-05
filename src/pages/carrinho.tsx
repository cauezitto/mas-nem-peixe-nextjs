import DivisorHeader from 'components/DivisorHeader'
import Header from 'components/Header'
import Heading from 'components/Heading'
import InstagramPosts from 'components/InstagramPosts'
import * as T from 'components/Table'
import Wrapper from 'components/Wrapper'
import Image from 'next/image'
import { FiInstagram } from 'react-icons/fi'
import { Legend } from 'styles/pages/Carrinho'
import { CgCloseO } from 'react-icons/cg'
import QuantController from 'components/QuantController'
import { useState } from 'react'
import { useCart } from 'contexts/States/StatesContext'
import PriceHandler from '../utils/handlePrice'
import Footer from 'components/Footer'
import * as S from 'styles/pages/Carrinho'
import ShadowBox from 'components/ShadowBox'
import Input from 'components/Input'
import Button from 'components/Button'
import Link from 'components/Link'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import ProductList from 'styles/ProductsList'
import Product from 'components/Product'
const Carrinho = () => {
  const { cart, setCart } = useCart()
  const [shipping, setShipping] = useState('correios')
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

  const handleDelete = (position: number) => {
    let total = 0.0

    const products = cart.products.filter(
      (product) => product !== cart.products[position]
    )
    console.log(products)

    products.map((product) => {
      total = total + product.price * product.quant
    })

    setCart({
      products,
      total: PriceHandler.priceNumberToReadblePrice(total)
    })
  }

  const handleAdd = (position: number) => {
    const products = cart.products
    let total = 0

    console.log(products[position].quant)
    products[position].quant = products[position].quant + 1

    products.map((product) => {
      total = total + product.price * product.quant
    })

    setCart({
      products,
      total: PriceHandler.priceNumberToReadblePrice(total)
    })
  }

  const handleSub = (position: number) => {
    const products = cart.products

    let total = 0

    if (products[position].quant === 1) {
      return
    }

    products[position].quant = products[position].quant - 1

    products.map((product) => {
      total = total + product.price * product.quant
    })

    setCart({
      products,
      total: PriceHandler.priceNumberToReadblePrice(total)
    })
  }
  return (
    <>
      <Header />
      <section>
        <DivisorHeader size="extra">MEU CARRINHO</DivisorHeader>
        <Wrapper>
          <Legend>Abaixo você confere os produtos do seu carrinho</Legend>

          <S.GridContent>
            <div className="mobile-table">
              <ShadowBox paddingX="small" paddingY="small">
                <h3>Produto</h3>
              </ShadowBox>

              {cart.products.map((product, index) => (
                <ShadowBox key={index} paddingX="small" paddingY="small">
                  <div className="align-center column">
                    <div className="block end">
                      <CgCloseO
                        color="red"
                        size={30}
                        onClick={() => {
                          handleDelete(index)
                        }}
                      />
                    </div>
                    <Image src="/img/caneca.webp" width="190" height="150" />
                    <h3>{`${product.category} ${product.name}`}</h3>
                    <span>
                      <b>Referência:</b> CANEMNP
                    </span>
                    <Heading font="ubuntu">
                      {PriceHandler.priceNumberToReadblePrice(product.price)}
                    </Heading>
                    <QuantController
                      size="large"
                      quant={product.quant}
                      handleAdd={() => {
                        handleAdd(index)
                      }}
                      handleSub={() => {
                        handleSub(index)
                      }}
                    />
                  </div>
                </ShadowBox>
              ))}
            </div>

            <div className="table">
              <T.Table>
                <thead>
                  <T.Tr spaced>
                    <T.Th>Produto</T.Th>
                    <T.Th>Preço Unítario</T.Th>
                    <T.Th>Quantidade</T.Th>
                    <T.Th> </T.Th>
                  </T.Tr>
                </thead>

                <tbody>
                  {cart.products.map((product, index) => (
                    <T.Tr key={index}>
                      <T.Td align="justify">
                        <div className="sub-wrapper">
                          <Image
                            src="/img/caneca.webp"
                            width="190"
                            height="150"
                          />

                          <div className="product-info">
                            <h3>
                              {' '}
                              {product.category} &nbsp; {product.name}
                            </h3>

                            <span>
                              <b>Referência:</b> CANEMNP
                            </span>
                          </div>
                        </div>
                      </T.Td>
                      <T.Td>
                        <Heading font="ubuntu">
                          {PriceHandler.priceNumberToReadblePrice(
                            product.price
                          )}
                        </Heading>
                      </T.Td>
                      <T.Td>
                        <QuantController
                          size="large"
                          quant={product.quant}
                          handleAdd={() => {
                            handleAdd(index)
                          }}
                          handleSub={() => {
                            handleSub(index)
                          }}
                        />
                      </T.Td>
                      <T.Td>
                        <CgCloseO
                          color="red"
                          size={30}
                          onClick={() => {
                            handleDelete(index)
                          }}
                        />
                      </T.Td>
                    </T.Tr>
                  ))}
                </tbody>
              </T.Table>
            </div>

            <div className="shipping">
              <ShadowBox paddingX="xsmall" paddingY="medium">
                <div className="space-between-variable">
                  <div>
                    <h3 className="xxlarge semiBold">CALCULE FRETE E PRAZO</h3>
                    <br />
                    <Link
                      href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm"
                      target="_blank"
                      fontSize="xlarge"
                    >
                      Não sei meu cep
                    </Link>
                  </div>
                  &nbsp;
                  <div className="start cep-input-wrapper">
                    <Input height={50} width={200} />
                    &nbsp;
                    <Button text="OK" fontSize="xlarge" size="small" />
                  </div>
                </div>

                <div className="table">
                  <div className="row">
                    <div className="item underline head">ENTREGA</div>
                    <div className="item underline head">FRETE</div>
                    <div className="item underline head">PRAZO</div>
                  </div>

                  <div className="row">
                    <div className="item cell underline">DLOG</div>
                    <div className="item cell underline">R$10,14</div>
                    <div className="item cell underline">10 dia(s) utéis</div>
                    <div className="item cell">
                      {shipping === 'DLOG' ? (
                        <IoCheckmarkCircleSharp />
                      ) : (
                        <button
                          className="unset-option"
                          onClick={() => setShipping('DLOG')}
                        />
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="item cell">CORREIOS</div>
                    <div className="item cell">R$8,14</div>
                    <div className="item cell">15 dia(s) utéis</div>
                    <div className="item cell">
                      {shipping === 'correios' ? (
                        <IoCheckmarkCircleSharp />
                      ) : (
                        <button
                          className="unset-option"
                          onClick={() => setShipping('correios')}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </ShadowBox>
            </div>

            <div className="resume">
              <ShadowBox>
                <header className="text-center">
                  <h2 className="padding-small semiBold">Resumo do Pedido</h2>
                  <hr />
                </header>
                <div className="padding-medium">
                  <ul className="unstyled-list">
                    {cart.products.map((product, index) => (
                      <li key={index}>
                        {product.quant} &nbsp; {product.name.substring(0, 18)}
                        &nbsp;
                        {PriceHandler.priceNumberToReadblePrice(product.price)}
                      </li>
                    ))}
                  </ul>
                  <br />
                  <span className="shipping-price">Frete R$10,14</span>
                </div>
                <footer>
                  <hr />

                  <div className="row padding-medium space-between">
                    <span className="xxlarge total-title">Total:</span>
                    <strong>R$ 44,14</strong>
                  </div>
                </footer>
              </ShadowBox>
            </div>

            <div className="cupom">
              <ShadowBox paddingX="medium" paddingY="medium">
                <div className="center variable">
                  <h3>CUPOM DE DESCONTO</h3>
                  &nbsp; &nbsp; &nbsp;
                  <div className="center">
                    <Input height={50} />
                    &nbsp; &nbsp; &nbsp;
                    <Button
                      background="cyan"
                      text="OK"
                      fontSize="large"
                      fontFamily="ubuntu"
                    />
                  </div>
                </div>
              </ShadowBox>
            </div>

            <div className="buttons">
              <Button
                text="CONTINUAR COMPRANDO"
                size="large"
                background="mediumGray"
                fontFamily="ubuntu"
              />
              &nbsp; &nbsp; &nbsp; &nbsp;
              <Button
                text="FINALIZAR COMPRA"
                size="large"
                fontFamily="ubuntu"
              />
            </div>
          </S.GridContent>
        </Wrapper>
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

export default Carrinho
