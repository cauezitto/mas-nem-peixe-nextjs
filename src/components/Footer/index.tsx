import { Wrapper } from 'components/Wrapper/styles'
import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => (
  <>
    <S.Wrapper>
      <Wrapper>
        <S.SubWrapper>
          <S.Block area="one">
            <h3>INSTITUCIONAL</h3>

            <nav>
              <Link href="/sobre" passHref>
                <a>Sobre nós</a>
              </Link>

              <Link href="/contato" passHref>
                <a>Contato</a>
              </Link>

              <Link href="/regulamentos" passHref>
                <a>Troca e devolução</a>
              </Link>
            </nav>
          </S.Block>

          <S.Block area="two">
            <h3>MINHA CONTA</h3>

            <nav>
              <a>Criar conta</a>
              <a>Minha conta</a>
              <a>Meus pedidos</a>
            </nav>
          </S.Block>

          <S.Block area="three">
            <h3>HORÁRIO DE ATENDIMENTO</h3>

            <nav>
              <p>
                Seg a Sex de 08h às 18h <br /> Sábado de 08h às 14h{' '}
              </p>
            </nav>
          </S.Block>

          <S.Block area="four">
            <h3>FORMAS DE PAGAMENTO</h3>

            <Image src="/img/cards.png" width={155} height={50} />
          </S.Block>

          <S.Block area="five">
            <h3>QUALIDADE E SEGURANÇA</h3>

            <S.Row>
              <Image
                src="/img/googleSafeBrowsing.webp"
                width={140}
                height={30}
              />
              &nbsp; &nbsp; &nbsp;
              <Image src="/img/letsEncrypt.webp" width={55} height={50} />
            </S.Row>
          </S.Block>

          <S.Block area="six">
            <h3>FALE CONOSCO</h3>

            <S.Row>
              <S.IconWrapper>
                {' '}
                <FiFacebook />{' '}
              </S.IconWrapper>
              <S.IconWrapper>
                {' '}
                <FiInstagram />{' '}
              </S.IconWrapper>
              <S.IconWrapper>
                {' '}
                <FiTwitter />{' '}
              </S.IconWrapper>
              <S.IconWrapper>
                {' '}
                <FiLinkedin />{' '}
              </S.IconWrapper>
            </S.Row>
          </S.Block>
        </S.SubWrapper>
      </Wrapper>
    </S.Wrapper>

    <Wrapper>
      <S.Description>
        <div className="copywrite-container">
          © Mas Nem Peixe | Todos os direitos reservados.
        </div>

        <header>
          <Image src="/img/logo.webp" width={200} height={60} alt="logo" />
          <h2>
            Bem-vindo à Mas Nem Peixe?, <br /> A Sua Loja Vegana Favorita!
          </h2>
        </header>

        <p>
          Sabe aquela dificuldade em encontrar produtos veganos com procedência
          confiável? então... ela acabou! a “Mas Nem Peixe?” chega para integrar
          ao veganismo o estilo nerd e criativo, com uma pegada de bom humor que
          vai alegrar o seu dia.
        </p>

        <p>
          Aqui você encontra artigos de decoração e uso pessoal pensados
          especialmente em você! <br /> Nossas{' '}
          <Link href="/#" passHref>
            <a>canecas</a>
          </Link>{' '}
          vão te ajudar a sair da rotina e dar uma cara nova ao seu home office,
          com os temas mais variados, por exemplo : séries, filmes, anime,
          ativismo e os melhores memes.
        </p>

        <p>
          Em breve teremos uma diversidade de produtos, mas para você não perder
          nenhuma novidade, é importante se{' '}
          <Link href="/#" passHref>
            <a>cadastrar</a>
          </Link>
          , assim você fica por dentro de tudo! Também não vai vacilar e
          esquecer de nos seguir no{' '}
          <Link href="/#" passHref>
            <a>Facebook</a>
          </Link>{' '}
          e{' '}
          <Link href="/#" passHref>
            <a>Instagram</a>
          </Link>{' '}
          além dos melhores spoilers do que está por vir tem dicas, indicações,
          memes, receitas e etc. <br /> E se quiser saber mais sobre a gente é
          só dar uma passadinha no{' '}
          <Link href="/#" passHref>
            <a>sobre nós</a>
          </Link>{' '}
          . Éh depois disso podemos dizer que já somos amigos, então sinta-se a
          vontade para tirar qualquer dúvida, estamos prontos para te ajudar no
          que precisar C:
        </p>

        <h3>Como faço para comprar? </h3>

        <p>
          Trabalhamos por encomenda, então é só selecionar sua caneca e comprar
          normalmente e te entregamos no prazo de 15 dias* qualquer variação na
          data de entrega devido a greve nos Correios entraremos em contato para
          te manter por dentro.
        </p>

        <h3>Pode parcelar ou é só no boleto? </h3>

        <p>Tá liberado parcelar até 6x sem juros no cartão!</p>
      </S.Description>
    </Wrapper>
  </>
)

export default Footer
