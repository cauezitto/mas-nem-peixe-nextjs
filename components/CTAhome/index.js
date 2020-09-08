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
                    <Item src = {item} >

                    </Item>
                ))
            }
        </Container>
    )
}
