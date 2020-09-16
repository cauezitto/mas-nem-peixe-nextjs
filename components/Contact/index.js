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
                <FiFacebook style = {{gridArea: 'left'}} />

                <FiInstagram style = {{gridArea: 'center'}} />
 
                <FiTwitter style = {{gridArea: 'center'}} />

                <FiMail style = {{gridArea: 'right'}} />
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
