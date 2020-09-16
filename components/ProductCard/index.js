import React from 'react'

import {
    Container,
    Button,
    Title,
    Price,
    Installments
} from './styles.js'

export default function ProductCard({product}) {
    return (
        <Container>
            <img src = {product.image} alt = {product.title} loading = "lazy" />

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

            <Button>
                EU QUERO!
            </Button>
        </Container>
    )
}
