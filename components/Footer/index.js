import React from 'react'

import {
    Container,
    Title,
    Column,
    Text,
    IconContainer
} from './styles'

import {FiMail, FiInstagram, FiFacebook, FiPackage} from 'react-icons/fi'

export default function Footer() {
    return (
        <Container>
            <Column>
                <Title>
                    INSTITUCIONAL
                </Title>

                <Text clickable >
                    Sobre nós
                </Text>

                <Text clickable >
                    Contato
                </Text>

                <Text clickable >
                    Blog
                </Text>

                <Text clickable >
                    Troca e devolução
                </Text>
            </Column>


            <Column>
                <Title centered >
                    FALE CONOSCO
                </Title>

               <IconContainer>
                    <FiFacebook size = '25' />

                    <FiInstagram size = '25' />

                    <FiMail size = '25' />
               </IconContainer>
            </Column>

            <Column>
                <Title centered >
                    FORMAS DE PAGAMENTO
                </Title>

               <IconContainer>
                    <img src = {'/cards.webp'} alt = "formas de pagamento"/>
               </IconContainer>
            </Column>

            <Column>
                <Title centered >
                    ENCOMENDA
                </Title>

               <IconContainer>
                   <FiPackage size = '30'/>
               </IconContainer>
            </Column>

            <Column>
                <Title >
                    RECEBA NOVIDADES
                </Title>

               <Text>
                    Cadastre-se e receba as
                    <br/>
                    novidades :
               </Text>

               <div className = 'input-container' >  

                    <input
                      placeholder = 'DIGITE SEU EMAIL'
                      />

                    <span className = 'confirm'>
                        OK
                    </span>
               </div>
            </Column>

        </Container>
    )
}
