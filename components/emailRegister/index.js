import React from 'react'
import {
    Container,
    TextContainer,
    Form
} from './styles'

import {FiMail} from 'react-icons/fi'

export default function EmailRegister() {
    return (
        <Container>
            <TextContainer>
                <FiMail/>
                <h1>
                    Receba as nossas melhores ofertas
                </h1>
            </TextContainer>

            <Form>
                <input
                    placeholder = 'DIGITE SEU EMAIL'
                    type = 'email'
                    autoCorrect = 'false'
                />

                <button>
                    Cadastrar
                </button>
            </Form>
        </Container>
    )
}
