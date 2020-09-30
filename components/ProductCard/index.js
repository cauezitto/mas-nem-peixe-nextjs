import React from 'react'

import {
    Container,
    Button,
    Title,
    Price,
    Installments
} from './styles.js'

import {string_to_slug} from '../../utils/str2slug'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ProductCard({product}) {
    return (
        <Link 
            href = {`/produto/${string_to_slug(product.category + ' ' + product.title)}`}
        >
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
        </Link>
    )
}
