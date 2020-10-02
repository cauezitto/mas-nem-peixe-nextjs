import {useState, useEffect} from 'react'

import {Container, 
        Wrapper, 
        Panel, 
        ProductContainer, 
        CarouselContainer,
        Preview,
        Share,
        ColoredMediaContainer,
        PriceAndInstalments,
        Quant,
        BuyorCart,
        Shipment
    } from './style'

import Carousel from 'nuka-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
        FiFacebook, 
        FiInstagram, 
        FiTwitter,
    } from 'react-icons/fi'

import {FaWhatsapp} from 'react-icons/fa'
import {BiPlusMedical} from 'react-icons/bi'
import {AiOutlineHeart, 
        AiOutlineMinusCircle,
        AiOutlinePlusCircle
    } from 'react-icons/ai'

import {cepMask} from '../../utils/inputMask'

export default function ProductSection({product}) {

    const [cep, setCep] = useState('')

    return (
        <Container>
            <Wrapper>

                <ProductContainer>
                    <CarouselContainer>
                        <span className = 'message' >
                            Deslize para o lado e veja mais  {'> >'}
                        </span>
                        <Carousel 
                        autoplay
                        autoplayInterval = {8000}
                        renderCenterLeftControls={({ previousSlide }) => (
                            <button style = {{display: 'none'}} onClick={previousSlide}/>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <button style = {{display: 'none'}}  onClick={nextSlide}/>
                        )}  >
                                <img src={product.image}/>

                                <img src={product.image}/>
                        
                        </Carousel>
                        
                        <Preview>
                            <img src = {product.image}/>
                            <img src = {product.image}/>
                        </Preview>

                        <Share>
                            <span>
                                COMPARTILHE
                            </span>

                            <div>
                                <ColoredMediaContainer color = '#3c5998' >
                                        <FiFacebook/>
                                            Facebook
                                </ColoredMediaContainer>

                                <ColoredMediaContainer color = '#1ea1f2' >
                                        <FiTwitter/>
                                            Twitter
                                </ColoredMediaContainer>

                                <ColoredMediaContainer color = '#56c247' >
                                        <FaWhatsapp/>
                                            Whatsapp
                                </ColoredMediaContainer>

                                <ColoredMediaContainer color = '#f8644f' >
                                        <BiPlusMedical/>
                                            Mais
                                </ColoredMediaContainer>
                            </div>

                        </Share>
                    </CarouselContainer>
                </ProductContainer>

                <Panel>
                    <h1>
                        {product.category + ' ' + product.title}
                    </h1>

                    <span className = 'reference' >
                        <strong>Referência:</strong> {product.reference}
                    </span>

                    <div className = 'favorite-container' >
                        <AiOutlineHeart strokeWidth = '30' />
                        Adicionar aos favoritos
                    </div>

                    <PriceAndInstalments>
                        <span>
                            <span 
                                itemprop="priceCurrency" 
                                content="BRL"
                                className = 'price'
                                >R$</span>
                            <span
                                itemprop="price" 
                                content="33.99"
                                className = 'price'
                                >33,99
                            </span>
                        </span>

                        <span
                            className='instalments'
                        >
                            ou 6x  sem juros {' '}
                            <strong>
                                R$ 5,60
                            </strong>
                        </span>

                        <span className = 'information'>
                            Mais informações
                        </span>
                    </PriceAndInstalments>

                    <Quant>
                        <button>
                            <AiOutlineMinusCircle/>
                        </button>

                        <span>
                            1
                        </span>

                        <button>
                            <AiOutlinePlusCircle/>
                        </button>
                    </Quant>

                    <BuyorCart>
                            <button className = 'buy' type = 'submit' >
                                Comprar
                            </button>

                            ou

                            <button className = 'cart' type = 'submit' >
                                Adicionar ao carrinho
                            </button>
                    </BuyorCart>

                    <Shipment>
                        <strong>
                            Calcular Frete e prazo
                        </strong>

                       <div style = {{display: 'flex'}} >
                        <input
                                placeholder = '00000-000'
                                className = 'input-container'
                                maxLength = '10'
                                value = {cep}
                                onChange = {e =>{setCep(cepMask(e.target.value))}}
                            />
                        
                        <button>
                            OK
                        </button>
                       </div>
                    </Shipment>
                </Panel>
            </Wrapper>
        </Container>
    )
}
