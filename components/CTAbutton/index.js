import React from 'react'

import {
    Container,
    Button
} from './styles'

export default function Sobre({text}) {
    return (
        <Container>
            <Button>
                <strong>
                    {text}
                </strong>
            </Button>
        </Container>
    )
}
