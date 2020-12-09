import { Wrapper } from 'components/Wrapper/styles'
import { Fragment } from 'react'
import { FiCreditCard, FiPackage } from 'react-icons/fi'
import { BiShoppingBag } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Nuka from 'nuka-carousel'
import * as S from './styles'

const ShippingAndInstallments = () => (
  <>
    <Wrapper>
      <S.Wrapper desktop>
        <S.Info>
          {' '}
          <FiPackage /> &nbsp; <b>FRETE GRÁTIS</b> &nbsp; A PARTIR DE R$200,00
        </S.Info>
        <S.Info>
          {' '}
          <FiCreditCard /> &nbsp; <b>PARCELE</b> &nbsp; EM ATÉ 3X SEM JUROS
        </S.Info>
        <S.Info>
          {' '}
          <BiShoppingBag /> &nbsp; <b>COMPRE</b> COM SEGURANÇA
        </S.Info>
      </S.Wrapper>
    </Wrapper>

    <S.Wrapper mobile>
      <Nuka
        autoplay
        autoplayInterval={8000}
        renderCenterLeftControls={({ previousSlide }) => (
          <IoIosArrowBack size="30" onClick={previousSlide} />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <IoIosArrowForward size="30" onClick={nextSlide} />
        )}
      >
        <S.Info mobile>
          {' '}
          <FiPackage /> &nbsp; <b>FRETE GRÁTIS</b> &nbsp; A PARTIR DE R$200,00
        </S.Info>
        <S.Info mobile>
          {' '}
          <FiCreditCard /> &nbsp; <b>PARCELE</b> &nbsp; EM ATÉ 3X SEM JUROS
        </S.Info>
        <S.Info mobile>
          {' '}
          <BiShoppingBag /> &nbsp; <b>COMPRE</b> COM SEGURANÇA
        </S.Info>
      </Nuka>
    </S.Wrapper>
  </>
)

export default ShippingAndInstallments
