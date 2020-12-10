import { Wrapper } from 'components/Wrapper/styles'
import * as S from './styles'
import Image from 'next/image'
import Nuka from 'nuka-carousel'
import { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import Button from 'components/Button'

const images = ['/img/caneca.webp', '/img/caneca.webp']

const ProductSection = () => {
  const [slide, setSlide] = useState(0)
  return (
    <Wrapper>
      <S.Wrapper>
        <S.ProductImageWrapper>
          <S.CarouselImageWrapper>
            <span>{' Deslize para o lado e veja mais >>'}</span>
            <Nuka
              autoplay
              slideIndex={slide}
              afterSlide={(index) => setSlide(index)}
              autoplayInterval={8000}
              renderCenterLeftControls={({ previousSlide }) => (
                <button style={{ display: 'none' }} onClick={previousSlide} />
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button style={{ display: 'none' }} onClick={nextSlide} />
              )}
            >
              {images.map((image, index) => (
                <div key={index}>
                  <Image src={image} width={360} height={300} />
                </div>
              ))}
            </Nuka>

            <div className="selectors-circles">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={index === slide ? 'selected' : ''}
                  onClick={() => {
                    setSlide(index)
                  }}
                />
              ))}
            </div>

            <div className="preview-images">
              {images.map((image, index) => (
                <div
                  onClick={() => {
                    setSlide(index)
                  }}
                  key={index}
                  className={index === slide ? 'selected' : 'not-selected'}
                >
                  <Image src={image} width={120} height={100} />
                </div>
              ))}
            </div>
          </S.CarouselImageWrapper>
        </S.ProductImageWrapper>

        <S.ProductAside>
          <h1>{`Caneca "Mas Nem peixe?"`}</h1>
          <span>
            <b>Referência:</b> CANEMNP
          </span>

          <button className="favorite">
            <FaRegHeart /> &nbsp; Adicionar aos favoritos
          </button>

          <div className="price-and-installments">
            <span className="price">
              <span>R$</span>33,99
            </span>

            <span className="installments">
              ou 6x sem juros <b>R$ 5,60</b>
            </span>

            <span className="info">Mais informações</span>
          </div>

          <div className="quant-selector-wrapper">
            <button>
              <FiMinusCircle />
            </button>
            <span>1</span>
            <button>
              <FiPlusCircle />
            </button>
          </div>

          <div className="buy-or-favorite">
            <Button
              text="COMPRAR"
              size="block"
              color="white"
              fontSize="large"
              fontWeight="semiBold"
              radius="medium"
              fontFamily="ubuntu"
              textShadow
            />

            <span>OU</span>

            <Button
              text="ADCIONAR AO CARRINHO"
              size="block"
              color="black"
              fontSize="large"
              fontWeight="semiBold"
              radius="medium"
              fontFamily="ubuntu"
              outline
            />
          </div>

          <div className="shipping-wrapper">
            <h3>Calcular frete e prazo</h3>

            <div className="cep-input-wrapper">
              <input placeholder="00000-000" type="text" maxLength={9} />

              <button>OK</button>
            </div>
          </div>
        </S.ProductAside>
      </S.Wrapper>
    </Wrapper>
  )
}
export default ProductSection
