import { Wrapper } from 'components/Wrapper/styles'
import * as S from './styles'
import Image from 'next/image'
import Nuka from 'nuka-carousel'
import { useState, useEffect } from 'react'
import { FaFacebookF, FaRegHeart, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
import Button from 'components/Button'
import DivisorHeader from 'components/DivisorHeader'

const images = ['/img/caneca.webp', '/img/caneca.webp']

const ProductSection = () => {
  const [quant, setQuant] = useState(1)
  const [slide, setSlide] = useState(0)
  const [cep, setCep] = useState('')

  const handleAdd = () => {
    setQuant(quant + 1)
  }

  const handleSub = () => {
    if (quant === 1) {
      return
    }
    setQuant(quant - 1)
  }

  function mask(e: any) {
    const value = e.target.value as string
    return value.replace(/[^\d]/g, '')
  }

  // useEffect(() => {
  //   if (cep.length === 8) {
  //     alert('opah')
  //   }
  // }, [cep])
  return (
    <Wrapper>
      <S.Wrapper>
        <S.MobileAside>
          <div className="price-and-installments">
            <span className="price">
              <span>R$</span> 34,00
            </span>

            <span className="installments">ou então 6x de R$ 5,60</span>

            <span className="info">Mais informações</span>
          </div>

          <div className="quant-selector-wrapper">
            <button onClick={handleSub}>
              <FiMinusCircle />
            </button>
            <span>{quant}</span>
            <button onClick={handleAdd}>
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
            <h3>CALCULE FRETE E PRAZO</h3>

            <div className="cep-input-wrapper">
              <input
                placeholder="00000-000"
                type="text"
                maxLength={8}
                value={cep}
                onChange={(e) => setCep(mask(e))}
              />

              <button>OK</button>
            </div>

            <table className={cep.length === 8 ? '' : 'hidden'}>
              <tr>
                <th>Entrega </th>
                <th>Frete</th>
                <th>Prazo</th>
              </tr>

              <tr>
                <td>DLOG </td>
                <td>R$ 11,13 </td>
                <td>R$ 11,13 </td>
              </tr>

              <tr>
                <td>CORREIOS </td>
                <td>R$ 11,13 </td>
                <td>R$ 11,13 </td>
              </tr>
            </table>
          </div>
        </S.MobileAside>
        <S.ProductImageWrapper>
          <S.CarouselImageWrapper>
            <span>{' Deslize para o lado e veja mais >>'}</span>
            <Nuka
              autoplay
              slideIndex={slide}
              afterSlide={(index) => setSlide(index)}
              autoplayInterval={10000}
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

          <div className="share-wrapper">
            <span>COMPARTILHE</span>

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
        </S.ProductImageWrapper>

        <S.ProductAside>
          <h1>{`Caneca "Mas Nem peixe?"`}</h1>
          <div className="header-info">
            <span>
              <b>Referência:</b> CANEMNP
            </span>

            <button className="favorite">
              <FaRegHeart /> &nbsp; Adicionar aos favoritos
            </button>
          </div>

          <div className="desktop">
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
              <button onClick={handleSub}>
                <FiMinusCircle />
              </button>
              <span>{quant}</span>
              <button onClick={handleAdd}>
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
                <input
                  placeholder="00000-000"
                  type="text"
                  maxLength={8}
                  value={cep}
                  onChange={(e) => setCep(mask(e))}
                />

                <button>OK</button>
              </div>

              <table className={cep.length === 8 ? '' : 'hidden'}>
                <tr>
                  <th>Entrega </th>
                  <th>Frete</th>
                  <th>Prazo</th>
                </tr>

                <tr>
                  <td>DLOG </td>
                  <td>R$ 11,13 </td>
                  <td>R$ 11,13 </td>
                </tr>

                <tr>
                  <td>CORREIOS </td>
                  <td>R$ 11,13 </td>
                  <td>R$ 11,13 </td>
                </tr>
              </table>
            </div>
          </div>
        </S.ProductAside>
      </S.Wrapper>
    </Wrapper>
  )
}
export default ProductSection
