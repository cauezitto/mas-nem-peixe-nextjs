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
const Carrinho = () => {
  const [quant, setQuant] = useState(1)

  const handleAdd = () => {
    setQuant(quant + 1)
  }

  const handleSub = () => {
    if (quant === 1) {
      return
    }
    setQuant(quant - 1)
  }
  return (
    <>
      <Header />
      <section>
        <DivisorHeader size="extra">MEU CARRINHO</DivisorHeader>
        <Wrapper>
          <Legend>Abaixo você confere os produtos do seu carrinho</Legend>

          <T.Table>
            <T.Tr spaced>
              <T.Th>Produto</T.Th>
              <T.Th>Preço Unítario</T.Th>
              <T.Th>Quantidade</T.Th>
              <T.Th> </T.Th>
            </T.Tr>

            <T.Tr>
              <T.Td align="justify">
                <div className="sub-wrapper">
                  <Image src="/img/caneca.webp" width="190" height="150" />

                  <div className="product-info">
                    <h3>CANECA PRETA</h3>

                    <span>
                      <b>Refeência:</b> CANEMNP
                    </span>
                  </div>
                </div>
              </T.Td>
              <T.Td>
                <Heading font="ubuntu">R$34,00</Heading>
              </T.Td>
              <T.Td>
                <QuantController
                  size="large"
                  quant={quant}
                  handleAdd={handleAdd}
                  handleSub={handleSub}
                />
              </T.Td>
              <T.Td>
                <CgCloseO color="red" size={30} />
              </T.Td>
            </T.Tr>
          </T.Table>
        </Wrapper>
      </section>
      <section>
        <DivisorHeader>
          <h2 className="variable">
            <FiInstagram /> &nbsp; <b>SIGA NOSSO INSTAGRAM</b>
          </h2>
          <h2 className="variable">&nbsp; @MASNEMPEIXEOFICIAL</h2>
        </DivisorHeader>

        <InstagramPosts />
      </section>
    </>
  )
}

export default Carrinho
