import Footer from 'components/Footer'
import Header from 'components/Header'
import Heading from 'components/Heading'
import InstagramPosts from 'components/InstagramPosts'
import Newsletter from 'components/Newsletter'
import Paragraph from 'components/Paragraph'
import Wrapper from 'components/Wrapper'
import Sobre from 'styles/pages/Sobre'
import Image from 'next/image'
import { FiInfo, FiInstagram, FiShoppingCart } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

const sobre = () => {
  return (
    <Sobre>
      <Header />
      <img src="/img/bannerSobre.png" alt="" className="banner" />
      <Wrapper>
        <div className="history">
          <div className="historia">
            <Heading
              justify="center"
              fontSize="max"
              color="cyan"
              margin="80px 0"
              fontWeight="bold"
            >
              HISTÓRIA
            </Heading>

            <Paragraph
              color="black"
              font="manjari"
              fontSize="xxlarge"
              textAlign="center"
            >
              “Mas nem peixe?” se você é vegano ou vegetariano(a) já deve ter
              ouvido pelo menos uma vez ou até mais do que possa contar, comigo
              não foi diferente!, cansada de ouvir sempre a mesma pergunta
              decidi dar um ressignificado a ela, uma nova forma de ver e de
              pensar, se um pergunta tão simples causa tanta dúvida o que
              acontece com todas as outras? estava aí a oportunidade de
              desmistificar questões da causa animal.
            </Paragraph>
          </div>

          <div className="line1">
            <img src="/img/line1.png" alt="line" />
          </div>

          <div className="instagram">
            <Heading justify="center" fontSize="max" color="cyan">
              <FiInstagram /> &nbsp; INSTAGRAM
            </Heading>

            <Paragraph
              color="black"
              textAlign="center"
              justify="center"
              fontSize="xlarge"
              font="manjari"
            >
              A ideia estava no papel e precisava dar vida a ela, a partir daí
              criei uma página no instagram com o objetivo de ajudar pessoas
              iniciantes a entender mais a causa, com dicas e receitas super
              fáceis. O que eu não esperava era ter uma troca tão positiva,
              muitas pessoas passaram a me enviar mensagem agradecendo e outras
              elogiando a página, também pude conhecer histórias lindas de cada
              um de vocês. <br /> <br /> <br /> <br />
              Fui com objetivo de ajudar e no final era eu que estava sendo
              ajudada, não sabia o quanto precisava até realmente vivenciar. A
              minha surpresa foi quanto pequenas empresas começaram a buscar
              parcerias com a MNP, foi aí que eu percebi que mais que um hobby
              poderia virar a minha renda, viver de algo que eu acredito e amo e
              o melhor expandir o veganismo cada vez mais. Sai do meu emprego e
              passei em investir tempo nesse projeto
            </Paragraph>
          </div>

          <div className="polvo">
            <img src="/img/polvo.png" alt="polvo" />
          </div>

          <div className="line2">
            <img src="/img/line2.png" alt="line" />
          </div>

          <div className="loja">
            <Heading
              fontSize="max"
              justify="center"
              font="manjari"
              color="cyan"
            >
              <FiShoppingCart />
              &nbsp; Loja MNP
            </Heading>

            <Paragraph
              color="black"
              textAlign="center"
              justify="center"
              fontSize="xlarge"
              font="manjari"
            >
              Sabe aquela dificuldade em encontrar produtos veganos com
              procedência confiável? A loja MNP surgiu com objetivo de
              solucionar esse problema, e ainda integrar vários estilos nerds e
              criativos no pacote, com uma pegada de bom humor que vai alegrar o
              seu dia. Quebrando tabus e desmitificando a causa animal. Um lugar
              onde todos possam achar o que precisam seja para se presentear ou
              até outra pessoa. E o mais importante aqui só entre amor e
              respeito! E aí partiu veganizar?
            </Paragraph>
          </div>

          <div className="line3">
            <img src="/img/line3.png" alt="line" />
          </div>

          <div className="wait">
            <GoLocation />
            <Heading fontSize="max" justify="center" color="cyan">
              O que esperar?
            </Heading>

            <Paragraph
              color="black"
              textAlign="center"
              justify="center"
              fontSize="xlarge"
              font="manjari"
            >
              Muitas novidades, meus amores :) e cada vez mais produtos únicos
              feitos especialmente para você, partiu tornar o veganismo cada vez
              mais acessível.
            </Paragraph>
          </div>

          <div className="wave">
            <Image src="/img/wave.png" height={150} width={230} alt="onda" />
          </div>
        </div>
      </Wrapper>
      <InstagramPosts />
      <Newsletter />
      <Footer />
    </Sobre>
  )
}

export default sobre
