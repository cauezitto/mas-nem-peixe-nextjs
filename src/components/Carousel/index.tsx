import { useState, useEffect } from 'react'
import Image from 'next/image'
import * as S from './styles'
import Nuka from 'nuka-carousel'
import ShippingAndInstallments from 'components/ShippingAndInstallments'

const Carousel = () => {
  const [contador, setContador] = useState(0)
  const [windowWidth, setWindowWidth] = useState(Number)

  useEffect(() => {
    setTimeout(() => {
      setContador(contador + 1)
    }, 8000)
  }, [])

  useEffect(() => {
    setWindowWidth(screen.width)

    console.log(screen.width)
  }, [])

  return (
    <>
      <S.Wrapper>
        <div className="desktop">
          <Nuka
            autoplay
            autoplayInterval={8000}
            renderCenterLeftControls={({ previousSlide }) => (
              <button style={{ display: 'none' }} onClick={previousSlide} />
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button style={{ display: 'none' }} onClick={nextSlide} />
            )}
          >
            <img
              src="/img/Banner.svg"
              alt="descrição do modo de encomendas com encomende a sua escrito ao centro, e uma sequencia de etapas escrito: escolha o modelo e encomende conosco, aguarde o envio e depois é só curtir"
            />

            <img
              src="/img/bannerHome1.webp"
              alt="descrição do modo de encomendas com encomende a sua escrito ao centro, e uma sequencia de etapas escrito: escolha o modelo e encomende conosco, aguarde o envio e depois é só curtir"
            />
          </Nuka>
        </div>
        <div className="mobile">
          <Nuka
            autoplay
            autoplayInterval={8000}
            renderCenterLeftControls={({ previousSlide }) => (
              <button style={{ display: 'none' }} onClick={previousSlide} />
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button style={{ display: 'none' }} onClick={nextSlide} />
            )}
          >
            <img src="img/banner1Mobile.jpeg" />

            <img src="img/banner2Mobile.png" />
          </Nuka>
        </div>
      </S.Wrapper>
    </>
  )
}

export default Carousel
