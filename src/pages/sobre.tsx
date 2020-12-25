import Footer from 'components/Footer'
import Header from 'components/Header'
import Heading from 'components/Heading'
import InstagramPosts from 'components/InstagramPosts'
import Newsletter from 'components/Newsletter'
import Paragraph from 'components/Paragraph'
import Wrapper from 'components/Wrapper'
import Sobre from 'styles/pages/Sobre'
import Image from 'next/image'
import { FiInstagram, FiShoppingCart } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import ShadowBox from 'components/ShadowBox'
import { useState } from 'react'
import Link from 'next/link'

const sobre = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [letter, setLetter] = useState('V')

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

      <section className="video-section">
        <Wrapper>
          <div className="sub-wrapper">
            <Heading color="white" fontSize="xxxmax">
              Saiba + <br />
              só clicar <br /> no player
            </Heading>

            <div className="orange-gradient" />

            <img src="/img/phone.png" alt="player de video" />
          </div>
        </Wrapper>
      </section>

      <Wrapper>
        <section className="mission-and-vision">
          <div className="item">
            <div className="icon">
              <Image
                src="/img/mission.png"
                width={150}
                height={150}
                alt="alvo dentro de um circulo azul"
              />
            </div>
            <ShadowBox
              width={320}
              radius="small"
              paddingX="small"
              paddingY="small"
              height={426}
            >
              <Heading justify="center" fontSize="max">
                Missão
              </Heading>

              <Paragraph textAlign="center" font="manjari" fontSize="large">
                {' '}
                Podemos resumir nossa missão em uma palavra : VEGANIZAR Temos o
                propósito de expandir o veganismo cada vez mais, conscientizando
                o maior número de pessoas possível e trazendo mais uma opção no
                mercado vegano, um lugar único onde pessoas com os mesmos
                interesses e lutas possam se encontrar e se unir.
              </Paragraph>
            </ShadowBox>
          </div>

          <div className="item">
            <div className="icon">
              <Image
                src="/img/vision.png"
                width={150}
                height={150}
                alt="alvo dentro de um circulo azul"
              />
            </div>
            <ShadowBox
              width={320}
              radius="small"
              paddingX="small"
              paddingY="small"
              height={426}
            >
              <Heading justify="center" fontSize="max" margin="60px 0 70px 0">
                VISÃO
              </Heading>

              <Paragraph textAlign="center" font="manjari" fontSize="large">
                Desejamos nos tornar a maior loja vegana no Brasil, com a maior
                diversidade de produtos e subcategorias!
              </Paragraph>
            </ShadowBox>
          </div>
        </section>

        <section className="values">
          <Heading fontSize="max" justify="center" margin="5rem 0 50px 0">
            NOSSOS VALORES
          </Heading>

          <div className="text-box-wrapper">
            <div className="text-selector-wrapper">
              <span
                className={letter === 'V' ? 'selected' : ''}
                onClick={() => setLetter('V')}
              >
                V
              </span>
              <span
                className={letter === 'E' ? 'selected' : ''}
                onClick={() => setLetter('E')}
              >
                E
              </span>
              <span
                className={letter === 'G' ? 'selected' : ''}
                onClick={() => setLetter('G')}
              >
                G
              </span>
              <span
                className={letter === 'A' ? 'selected' : ''}
                onClick={() => setLetter('A')}
              >
                A
              </span>
              <span
                className={letter === 'N' ? 'selected' : ''}
                onClick={() => setLetter('N')}
              >
                N{' '}
              </span>
            </div>
            <ShadowBox
              className="text-box"
              height={400}
              paddingX="medium"
              paddingY="small"
            >
              <div className={letter === 'V' ? 'show' : 'hidden'}>
                <Heading color="black" justify="center" margin="50px 0">
                  VALORIZAMOS NOSSOS CLIENTES
                </Heading>

                <Paragraph textAlign="center" fontSize="xlarge" font="manjari">
                  Vocês são muito importantes para nós e queremos retribuir o
                  carinho e confiança por produzir e entregar com o máximo de
                  qualidade, garantindo sua satisfação e encantando em todas as
                  nossas oportunidades, nosso objetivo é mais do que vender é a
                  sua felicidade com nosso produto a cada vez que usar, para nós
                  esse é o maior valor que poderíamos receber de volta. E não se
                  esqueçam estamos sempre aqui para o que precisar, ok?
                </Paragraph>
              </div>

              <div className={letter === 'E' ? 'show' : 'hidden'}>
                <Heading color="black" justify="center" margin="50px 0">
                  Ética e responsabilidade com os animais
                </Heading>

                <Paragraph textAlign="center" fontSize="xlarge" font="manjari">
                  Muitos animais são mortos diariamente e de forma dolorosa por
                  diversas indústrias como da carne, leite, ovos, lã e etc, por
                  isso buscamos cada vez mais através das redes sociais e
                  diversos meios de comunicação conscientizar sobre tudo que
                  está envolvido, e mais do que isso ajudar pessoas a aderirem
                  um estilo de vida sem sofrimento para eles! todos nossos
                  produtos são 100% veganos e sempre colocamos a composição
                  deles na descrição para que você possa comprar com confiança
                  no nosso trabalho.
                </Paragraph>
              </div>

              <div className={letter === 'G' ? 'show' : 'hidden'}>
                <Heading color="black" justify="center" margin="50px 0">
                  Garra e determinação
                </Heading>

                <Paragraph textAlign="center" fontSize="xlarge" font="manjari">
                  Damos o nosso melhor sempre, e lutamos pelos nossos sonhos e
                  valores! sabemos que sem eles não chegaremos aos nossos
                  objetivos, a MNP foi criada com base nessa força de vontade e
                  foco, nos jogamos de cabeça nessa linda jornada para continuar
                  lutando ao lado de vocês pelos animais, e não vamos parar até
                  que um dia possamos viver em um mundo que pensa com gentileza
                  neles.
                </Paragraph>
              </div>

              <div className={letter === 'A' ? 'show' : 'hidden'}>
                <Heading color="black" justify="center" margin="50px 0">
                  Amamos o que fazemos
                </Heading>

                <Paragraph textAlign="center" fontSize="xlarge" font="manjari">
                  Somos apaixonados pelo o que fazemos e pelos animais, cada
                  detalhe é pensado como muito amor e comprometimento, e
                  tentamos transmitir isso de diversas formas no nosso dia a
                  dia, ficamos muito felizes em saber que muitos de vocês
                  compartilham do mesmo sentimento e essa troca é fantástica!
                </Paragraph>
              </div>

              <div className={letter === 'N' ? 'show' : 'hidden'}>
                <Heading color="black" justify="center" margin="50px 0">
                  Novidades sempre!
                </Heading>

                <Paragraph
                  textAlign="center"
                  fontSize="xlarge"
                  font="manjari"
                  color="black"
                >
                  Buscamos sempre estar trazendo novos produtos criativos para
                  vocês, estamos em constante desconstrução e abertos as suas
                  dicas e sugestões, a evolução faz parte do nosso processo por
                  isso estamos sempre inovando neles, para que possamos atingir
                  a maior quantidade de pessoas possíveis e deixar nossa “marca”
                  em todas elas.
                </Paragraph>
              </div>
            </ShadowBox>
          </div>
        </section>

        <section className="go2contact">
          <Heading fontSize="max" justify="center">
            FALE CONOSCO
          </Heading>

          <Paragraph
            font="manjari"
            fontSize="xlarge"
            textAlign="center"
            color="black"
          >
            Abaixo listamos as formas de contato disponíveis em nossa loja.
            Estamos ansiosos em lhe atender da melhor maneira possível.
          </Paragraph>

          <Link href="/contato" passHref>
            <a>FALE CONOSCO</a>
          </Link>
        </section>
      </Wrapper>
      <InstagramPosts />
      <Newsletter />
      <Footer />
    </Sobre>
  )
}

export default sobre
