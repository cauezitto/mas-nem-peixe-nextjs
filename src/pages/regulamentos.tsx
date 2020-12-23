import DivisorHeader from 'components/DivisorHeader'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Heading from 'components/Heading'
import InstagramPosts from 'components/InstagramPosts'
import Link from 'components/Link'
import Newsletter from 'components/Newsletter'
import Paragraph from 'components/Paragraph'
import Wrapper from 'components/Wrapper'
import { FiInstagram } from 'react-icons/fi'
import Regulamentos from 'styles/pages/Regulamentos'
import Image from 'next/image'
import { useState } from 'react'

const Regulations = () => {
  const [textShow1, settextShow1] = useState(false)
  const [textShow2, settextShow2] = useState(false)
  const [textShow3, settextShow3] = useState(false)
  return (
    <Regulamentos>
      <Header />
      <DivisorHeader
        margin="50px 0 10px 0"
        font="ubuntuCondensed"
        size="xxxlarge"
      >
        TROCA E DEVOLUÇÃO
      </DivisorHeader>

      <Paragraph
        justify="center"
        textAlign="center"
        color="cyan"
        fontSize="xxxlarge"
      >
        Satisfação garantida ou seu dinheiro de volta
      </Paragraph>

      <Wrapper>
        <main>
          <div className="regulation-item">
            <Heading
              font="ubuntu"
              color="cyan"
              fontWeight="semiBold"
              fontSize="xlarge"
            >
              {' '}
              <div className="mobile">
                <Image
                  src="/img/+.png"
                  height={24}
                  width={48}
                  onClick={() => settextShow1(!textShow1)}
                  className="mobile"
                />
              </div>
              {`"ME ARREPENDI DO PRODUTO"`}
            </Heading>

            <Paragraph color="black" font="ubuntu" fontSize="large">
              <div className="desktop">
                Se isso aconteceu ANTES da entrega do seu pedido, é só recusar o
                recebimento da mercadoria e falar com nossa equipe de
                atendimento para fazer o seu estorno do valor pago, que
                acontecerá quando a encomenda retornar ao nosso endereço. Caso
                tenha acontecido DEPOIS do recebimento do pedido, o registro de
                desistência deverá ser feito com nossa equipe de <br />{' '}
                atendimento em até <b>7 dias corridos</b> após o recebimento do
                pedido, após esse período não será mais aceito a solicitação de
                cancelamento. Pode ficar tranquilo(a), o frete é por nossa
                conta, tudo que deverá ser feito é embrulhar o produto na
                embalagem na qual veio, com a cópia da nota fiscal, caso venha
                com algum brinde deverá ser colocado junto ao produto, sem
                indícios de uso.
              </div>

              {textShow1 && (
                <div className="mobile">
                  Se isso aconteceu ANTES da entrega do seu pedido, é só recusar
                  o recebimento da mercadoria e falar com nossa equipe de
                  atendimento para fazer o seu estorno do valor pago, que
                  acontecerá quando a encomenda retornar ao nosso endereço. Caso
                  tenha acontecido DEPOIS do recebimento do pedido, o registro
                  de desistência deverá ser feito com nossa equipe de <br />{' '}
                  atendimento em até <b>7 dias corridos</b> após o recebimento
                  do pedido, após esse período não será mais aceito a
                  solicitação de cancelamento. Pode ficar tranquilo(a), o frete
                  é por nossa conta, tudo que deverá ser feito é embrulhar o
                  produto na embalagem na qual veio, com a cópia da nota fiscal,
                  caso venha com algum brinde deverá ser colocado junto ao
                  produto, sem indícios de uso.
                </div>
              )}
            </Paragraph>
          </div>

          <div className="regulation-item">
            <Heading
              font="ubuntu"
              fontWeight="semiBold"
              color="cyan"
              fontSize="xlarge"
            >
              {' '}
              <div className="mobile">
                <Image
                  src="/img/+.png"
                  height={30}
                  width={60}
                  onClick={() => settextShow2(!textShow2)}
                  className="mobile"
                />
              </div>{' '}
              {`“MEU PEDIDO VEIO COM DEFEITO OU ERRADO”`}
            </Heading>

            <Paragraph color="black" font="ubuntu" fontSize="large">
              <div className="desktop">
                O registro de defeito ou divergência encontrada nos produtos
                comprados em nosso site deve ser realizado <b>em até 7 dias</b>{' '}
                corridos após recebimento do produto, com nossa equipe de
                atendimento. O frete ficará por nossa conta, tudo que deverá ser
                feito é embrulhar o produto na embalagem na qual veio, com a
                cópia da nota fiscal, caso venha com algum brinde deverá ser
                colocado junto ao produto, sem indícios de uso. Nossos produtos
                são feitos por encomenda, dessa forma para o recebimento de um
                novo pedido deverá ser aguardado o período de confecção +
                entrega da compra estipulado.
              </div>

              {textShow2 && (
                <div className="mobile">
                  O registro de defeito ou divergência encontrada nos produtos
                  comprados em nosso site deve ser realizado{' '}
                  <b>em até 7 dias</b> corridos após recebimento do produto, com
                  nossa equipe de atendimento. O frete ficará por nossa conta,
                  tudo que deverá ser feito é embrulhar o produto na embalagem
                  na qual veio, com a cópia da nota fiscal, caso venha com algum
                  brinde deverá ser colocado junto ao produto, sem indícios de
                  uso. Nossos produtos são feitos por encomenda, dessa forma
                  para o recebimento de um novo pedido deverá ser aguardado o
                  período de confecção + entrega da compra estipulado.
                </div>
              )}
            </Paragraph>
          </div>

          <div className="regulation-item">
            <Heading
              font="ubuntu"
              fontWeight="semiBold"
              color="cyan"
              fontSize="xlarge"
            >
              {' '}
              <div className="mobile">
                <Image
                  src="/img/+.png"
                  height={30}
                  width={60}
                  onClick={() => settextShow3(!textShow3)}
                />
              </div>{' '}
              {`“MEU PEDIDO VEIO COM DEFEITO OU ERRADO”`}
            </Heading>

            <Paragraph color="black" font="ubuntu" fontSize="large">
              <div className="desktop">
                <b> Pagamento com cartão de crédito:</b> O estorno será
                realizado <b>em até 10 (dez)</b> dias úteis após a liberação do
                produto pelo setor responsável pela análise da garantia. O valor
                poderá ser visualizado em até duas faturas subsequentes,
                dependendo da data de vencimento do cartão. Este prazo é um
                procedimento interno do Banco, advindo do contrato entre a
                operadora e o consumidor. <br /> <br />
                <b>Pagamento com boleto bancário:</b> O reembolso será realizado{' '}
                <b> em até 10 (dez)</b> dias úteis após a liberação do produto
                pelo setor responsável pela análise da garantia, através do
                Mercado Pago, o valor poderá ser resgatado acessando o site do
                Mercado Pago com o mesmo email usado na compra e seguindo as
                instruções, uma conta bancária deverá ser indicada pelo cliente.{' '}
                <br /> <br />
                Restou alguma dúvida? Entre em contato com nossa central de
                atendimento{' '}
                <b>
                  <Link href="/contato" color="orange" font="ubuntu">
                    clicando aqui
                  </Link>
                </b>
              </div>

              {textShow3 && (
                <div className="mobile">
                  <b> Pagamento com cartão de crédito:</b> O estorno será
                  realizado <b>em até 10 (dez)</b> dias úteis após a liberação
                  do produto pelo setor responsável pela análise da garantia. O
                  valor poderá ser visualizado em até duas faturas subsequentes,
                  dependendo da data de vencimento do cartão. Este prazo é um
                  procedimento interno do Banco, advindo do contrato entre a
                  operadora e o consumidor. <br /> <br />
                  <b>Pagamento com boleto bancário:</b> O reembolso será
                  realizado <b> em até 10 (dez)</b> dias úteis após a liberação
                  do produto pelo setor responsável pela análise da garantia,
                  através do Mercado Pago, o valor poderá ser resgatado
                  acessando o site do Mercado Pago com o mesmo email usado na
                  compra e seguindo as instruções, uma conta bancária deverá ser
                  indicada pelo cliente. <br /> <br />
                  Restou alguma dúvida? Entre em contato com nossa central de
                  atendimento{' '}
                  <b>
                    <Link href="/contato" color="orange" font="ubuntu">
                      clicando aqui
                    </Link>
                  </b>
                </div>
              )}
            </Paragraph>
          </div>
        </main>
      </Wrapper>

      <InstagramPosts />
      <Newsletter />

      <Footer />
    </Regulamentos>
  )
}

export default Regulations
