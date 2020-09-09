import React from 'react'

import {
    Container
} from './styles.js'

export default function Banner({height}) {
    return (
        <Container height = {height} >
            <img src = {'/bannerHome1.webp'}/>
        </Container>
    )
}
