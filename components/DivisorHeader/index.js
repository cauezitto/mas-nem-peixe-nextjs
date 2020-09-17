import React from 'react'

import {
    Container,
    Line
} from './styles.js'

export default function DivisorHeader({Component, lineWidth, fontSize}) {
    return (
        <Container fontSize = {fontSize} >
             <Line width = {lineWidth} />
                <Component/>
            <Line invert width = {lineWidth} />
        </Container>
    )
}
