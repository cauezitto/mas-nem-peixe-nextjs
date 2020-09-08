import React from 'react'

import {
    Container,
    ButtonsContainer,
    Title,
    Price,
    Installments
} from './styles.js'

import {HiShoppingCart} from 'react-icons/hi'

import {MdDescription} from 'react-icons/md'

export default function ProductCard({product}) {
    return (
        <Container>
            <img src = {product.image} alt = {product.title} />

            <Title>
                {product.category}
                <br/>
                {product.title}
            </Title>

            <Price>
                {`R$ ${product.price}`}
            </Price>

            <Installments>
                {`ou então 6x R$ ${(product.price/6).toFixed(2)}`}
            </Installments>

            <ButtonsContainer>
                <button>
                   <HiShoppingCart />
                    <strong>
                        ENCOMENDAR
                    </strong>
                </button>

                <button>
                    <MdDescription />
                    <strong>
                        DETALHES
                    </strong>
                </button>
            </ButtonsContainer>
        </Container>
    )
}
