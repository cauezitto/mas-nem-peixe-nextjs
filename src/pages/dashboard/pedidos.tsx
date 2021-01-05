import Dashboard from 'templates/dashboard'
import Link from 'next/link'
import Container from 'styles/pages/dashboard/Pedidos'
import Heading from 'components/Heading'
import ShadowBox from 'components/ShadowBox'
import Paragraph from 'components/Paragraph'
import { HiOutlineArrowRight } from 'react-icons/hi'

const Pedidos = () => {
  return (
    <Dashboard>
      <Container>
        <Heading
          font="ubuntuCondensed"
          color="cyan"
          fontSize="xxmax"
          justify="center"
          fontWeight="semiBold"
          margin="0"
        >
          Meus Pedidos
        </Heading>

        <Paragraph
          margin="20px 0"
          textAlign="center"
          fontSize="extra"
          font="manjari"
        >
          Acesse seu pedidos logo abaixo
        </Paragraph>

        <div className="orders">
          <div className="order-wrapper">
            <div className="state red" />
            <ShadowBox
              className="order"
              radius="large"
              height={120}
              paddingX="medium"
              paddingY="small"
            >
              <div className="cod">
                <Paragraph
                  fontWeight="semiBold"
                  fontSize="large"
                  font="ubuntu"
                  color="black"
                >
                  #canemnp1
                </Paragraph>
              </div>
              <div className="status item color-red">Status : Recusado</div>
              <div className="price">
                <Heading
                  margin="0"
                  color="black"
                  font="ubuntu"
                  fontSize="xlarge"
                >
                  R$ 40,00
                </Heading>
              </div>
              <div className="link item">
                <Link href="/dashboard/pedido/123" passHref>
                  <a>
                    <Paragraph
                      fontSize="large"
                      font="ubuntu"
                      fontWeight="semiBold"
                      color="black"
                    >
                      {'Conferir'} &nbsp; <HiOutlineArrowRight />
                    </Paragraph>
                  </a>
                </Link>
              </div>
            </ShadowBox>
          </div>

          <div className="order-wrapper">
            <div className="state green" />
            <ShadowBox
              className="order"
              radius="large"
              height={120}
              paddingX="medium"
              paddingY="small"
            >
              <div className="cod">
                <Paragraph
                  fontWeight="semiBold"
                  fontSize="large"
                  font="ubuntu"
                  color="black"
                >
                  #canemnp1
                </Paragraph>
              </div>
              <div className="status item color-green">Status : Aprovado</div>
              <div className="price">
                <Heading
                  margin="0"
                  color="black"
                  font="ubuntu"
                  fontSize="xlarge"
                >
                  R$ 40,00
                </Heading>
              </div>
              <div className="link item">
                <Link href="/dashboard/pedido/123" passHref>
                  <a>
                    <Paragraph
                      fontSize="large"
                      font="ubuntu"
                      fontWeight="semiBold"
                      color="black"
                    >
                      {'Conferir'} &nbsp; <HiOutlineArrowRight />
                    </Paragraph>
                  </a>
                </Link>
              </div>
            </ShadowBox>
          </div>

          <div className="order-wrapper">
            <div className="state yellow" />
            <ShadowBox
              className="order"
              radius="large"
              height={120}
              paddingX="medium"
              paddingY="small"
            >
              <div className="cod">
                <Paragraph
                  fontWeight="semiBold"
                  fontSize="large"
                  font="ubuntu"
                  color="black"
                >
                  #canemnp1
                </Paragraph>
              </div>
              <div className="status item color-yellow">Status : Pendente</div>
              <div className="price">
                <Heading
                  margin="0"
                  color="black"
                  font="ubuntu"
                  fontSize="xlarge"
                >
                  R$ 40,00
                </Heading>
              </div>
              <div className="link item">
                <Link href="/dashboard/pedido/123" passHref>
                  <a>
                    <Paragraph
                      fontSize="large"
                      font="ubuntu"
                      fontWeight="semiBold"
                      color="black"
                    >
                      {'Conferir'} &nbsp; <HiOutlineArrowRight />
                    </Paragraph>
                  </a>
                </Link>
              </div>
            </ShadowBox>
          </div>
        </div>
      </Container>
    </Dashboard>
  )
}

export default Pedidos
