import Dashboard from 'templates/dashboard'
import Link from 'next/link'
import Container from 'styles/pages/dashboard/pedido'
import Heading from 'components/Heading'
import ShadowBox from 'components/ShadowBox'
import Paragraph from 'components/Paragraph'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const Order = () => {
  return (
    <Dashboard paddingSmall>
      <Container>
        <div className="table desktop">
          <ShadowBox
            className="table-head"
            radius="medium"
            paddingX="small"
            paddingY="small"
          >
            <Paragraph
              font="ubuntu"
              fontSize="large"
              color="black"
              fontWeight="semiBold"
            >
              PEDIDO
            </Paragraph>

            <Paragraph
              font="ubuntu"
              fontSize="large"
              color="black"
              fontWeight="semiBold"
            >
              DATA
            </Paragraph>

            <Paragraph
              font="ubuntu"
              fontSize="large"
              color="black"
              fontWeight="semiBold"
            >
              STATUS
            </Paragraph>

            <Paragraph
              font="ubuntu"
              fontSize="large"
              color="black"
              fontWeight="semiBold"
            >
              VALOR
            </Paragraph>

            <Paragraph
              font="ubuntu"
              fontSize="large"
              color="black"
              fontWeight="semiBold"
            >
              A RECEBER
            </Paragraph>
          </ShadowBox>

          <ShadowBox className="t-body" paddingX="small" paddingY="medium">
            <div className="t-row">
              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                #canecamnp2
              </Paragraph>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                11/20
              </Paragraph>

              <div className="item color-red">
                Pagamento <br /> Recusado
              </div>

              <Paragraph
                font="ubuntu"
                fontSize="large"
                color="black"
                fontWeight="semiBold"
              >
                R$ 30,00
              </Paragraph>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                05/01/2021
              </Paragraph>
            </div>
          </ShadowBox>
        </div>

        <div className="table table-mobile">
          <ShadowBox
            paddingX="small"
            paddingY="small"
            radius="large"
            className="grid"
          >
            <div className="item">
              <Heading
                font="ubuntu"
                fontSize="large"
                color="cyan"
                fontWeight="semiBold"
              >
                PEDIDO
              </Heading>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                #canecamnp2
              </Paragraph>
            </div>

            <div className="item">
              <Heading
                font="ubuntu"
                fontSize="large"
                color="cyan"
                fontWeight="semiBold"
              >
                DATA
              </Heading>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                05/01/2021
              </Paragraph>
            </div>

            <div className="item">
              <Heading
                font="ubuntu"
                fontSize="large"
                color="cyan"
                fontWeight="semiBold"
              >
                STATUS
              </Heading>

              <div className="item color-red">
                Pagamento <br /> Recusado
              </div>
            </div>

            <div className="item">
              <Heading
                font="ubuntu"
                fontSize="large"
                color="cyan"
                fontWeight="semiBold"
              >
                VALOR
              </Heading>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                R$30,00
              </Paragraph>
            </div>

            <div></div>

            <div className="item">
              <Heading
                font="ubuntu"
                fontSize="large"
                color="cyan"
                fontWeight="semiBold"
              >
                A RECEBER
              </Heading>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                20/01/2021
              </Paragraph>
            </div>
          </ShadowBox>
        </div>

        <div className="shipping">
          <ShadowBox paddingX="small" paddingY="small" radius="large">
            <Heading
              margin="0 0 20px 0"
              justify="center"
              color="cyan"
              font="ubuntu"
              fontSize="xxlarge"
              fontWeight="semiBold"
            >
              Dados do correio
            </Heading>

            <Paragraph
              justify="center"
              color="black"
              font="ubuntu"
              textAlign="center"
              fontSize="xlarge"
            >
              Código de rastreio: BR001235OQ
            </Paragraph>
          </ShadowBox>
        </div>

        <div className="address">
          <ShadowBox
            paddingX="small"
            paddingY="small"
            radius="large"
            height={300}
          >
            <Heading
              margin="0 0 20px 0"
              justify="center"
              color="cyan"
              font="ubuntu"
              fontSize="xxlarge"
              fontWeight="semiBold"
            >
              Endereço da entrega
            </Heading>

            <Paragraph
              justify="center"
              color="black"
              font="ubuntu"
              textAlign="center"
              fontSize="large"
              fontWeight="semiBold"
            >
              Rua dos banqueiros, 172 - vila bancaria bloco 15B, Apt 1532. Cep
              03918-050 . São Paulo SP
            </Paragraph>
          </ShadowBox>
        </div>

        <div className="back2orders desktop">
          <Link href="/dashboard/pedidos" passHref>
            <a>
              <MdKeyboardArrowLeft size={50} />
              Voltar à tela <br /> anterior
            </a>
          </Link>
        </div>
      </Container>
    </Dashboard>
  )
}

export default Order
