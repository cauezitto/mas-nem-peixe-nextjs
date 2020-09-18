import {
    Container,
    SocialLinksContainer,
    WhatsappNumberContainer
} from './styles'

import {
    FiFacebook,
    FiInstagram,
    FiMail,
    FiLinkedin,
    FiTwitter,
    FiPhone
} from 'react-icons/fi'
export default function Contact() {
    return (
        <Container>
            <SocialLinksContainer>
                <a href = 'https://www.facebook.com/Loja.MNP' target = '_blank'>
                    <FiFacebook style = {{gridArea: 'left'}} />
                </a>

                <a href = 'https://instagram.com/masnempeixeoficial' target = '_blank' >
                    <FiInstagram style = {{gridArea: 'center'}} />
                </a>

                <a href = 'https://twitter.com/Masnempeixefc' target = '_blank'>
                <FiTwitter style = {{gridArea: 'center'}} />
                </a>

                <a>
                <FiMail style = {{gridArea: 'right'}} />
                </a>
            </SocialLinksContainer>

            <WhatsappNumberContainer>
                <h1>
                    <FiPhone/>
                    {' Whatsapp (11) 99446-3741'}
                </h1>
            </WhatsappNumberContainer>
        </Container>
    )
}
