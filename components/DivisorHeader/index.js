import React from 'react'

import {
    Container,
    Line
} from './styles.js'

export default function DivisorHeader({title}) {
    return (
        <Container>
             <Line/>
                <h1>
                    {title}
                </h1>
            <Line/>
        </Container>
    )
}
