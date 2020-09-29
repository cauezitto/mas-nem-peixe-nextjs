import React from 'react'

import {
    Container,
    Subcontainer,
    Title,
    Column,
    Text,
    IconContainer
} from './styles'

import Description from './Description'

import {FiMail, FiInstagram, FiFacebook, FiPackage} from 'react-icons/fi'

export default function Footer() {
    return (
        <Container>
            <Subcontainer>
            <Column>
                <Title centered >
                    INSTITUCIONAL
                </Title>

                <Text clickable centered >
                    Sobre nós
                </Text>

                <Text clickable centered >
                    Contato
                </Text>

                <Text clickable centered >
                    Blog
                </Text>

                <Text clickable centered >
                    Troca e devolução
                </Text>
            </Column>

            <Column>
                <Title centered >
                    MINHA CONTA
                </Title>

                <Text clickable centered >
                    Criar Conta
                </Text>

                <Text clickable centered >
                    Minha conta
                </Text>

                <Text clickable centered >
                    Meus pedidos
                </Text>
            </Column>

            <Column>
                <Title centered >
                    HORRÁRIO DE ATENDIMENTO
                </Title>

                <Text centered >
                    Seg a Sex de 08h às 18h
                    <br/>
                    Sábado de 08 às 14h
                </Text>
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
                    QUALIDADE E SEGURANÇA
                </Title>

               <IconContainer>
                   <a href = 'https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fstonks-test-server.herokuapp.com%2F' target = '_blank' rel = 'Certificado google safe borwsing'>
                    <img src = {'/googleSafeBrowsing.webp'} alt = "google safe browsing"/>
                  </a>

                  <a>
                    <img src = {'/letsEncrypt.webp'} alt = "certificado lets encrypt"/>
                  </a>
               </IconContainer>
            </Column>
            </Subcontainer>

            <Column>
                <Title centered >
                    FALE CONOSCO
                </Title>

               <IconContainer>
                   <a href = 'https://www.facebook.com/Loja.MNP' target = '_blank'>
                    <FiFacebook size = '25' />
                  </a>

                  <a href = 'https://www.instagram.com/masnempeixeoficial' target = '_blank'>
                    <FiInstagram size = '25' />
                  </a>

                  <a>
                    <FiMail size = '25' />
                  </a>
               </IconContainer>
            </Column>

            <Description/>



        </Container>
    )
}



/*

*/