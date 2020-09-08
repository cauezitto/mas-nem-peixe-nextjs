import React from 'react'

import {
    Container,
    Item
} from './styles'

export default function CTAhome({items}) {
    return (
        <Container>
            {
                items.map(item => (
                    <Item key = {Math.random().toString(36).slice(2)} src = {item} >

                    </Item>
                ))
            }
        </Container>
    )
}
