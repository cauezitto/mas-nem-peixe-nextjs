import Contato from 'styles/pages/Contato'
import Button from 'components/Button'
import DivisorHeader from 'components/DivisorHeader'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Heading from 'components/Heading'
import Input from 'components/Input'
import InstagramPosts from 'components/InstagramPosts'
import Label from 'components/Label'
import Paragraph from 'components/Paragraph'
import Wrapper from 'components/Wrapper'
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiTwitter
} from 'react-icons/fi'
import { IoIosPin, IoMdChatboxes, IoMdPin } from 'react-icons/io'
import { FaFacebookF } from 'react-icons/fa'
import Newsletter from 'components/Newsletter'
const Contact = () => {
  return (
    <Contato>
      <Header />
      <Wrapper>
        <Heading justify="center" fontSize="extra" font="ubuntuCondensed">
          <div className="title-wrapper">
            Estamos aqui para te ajudar &nbsp;
            <IoMdChatboxes />
          </div>
        </Heading>
        <Paragraph
          justify="center"
          textAlign="center"
          fontSize="xlarge"
          font="ubuntu"
        >
          Preencha o formulário abaixo e entre em contato conosco
        </Paragraph>
        <br />
        <hr />
        <br />
        <form className="column">
          <Label
            font="ubuntu"
            color="cyan"
            fontSize="xlarge"
            fontWeight="semiBold"
          >
            <div className="desktop">Nome ( campo obrigatorio)</div>
            <div className="mobile">Nome * </div>
            <Input margin="10px 0" outline={false} height={50} block />
          </Label>
          <br />

          <Label
            font="ubuntu"
            color="cyan"
            fontSize="xlarge"
            fontWeight="semiBold"
          >
            <div className="desktop">Email ( campo obrigatorio)</div>
            <div className="mobile">Email * </div>
            <Input margin="10px 0" outline={false} height={50} block />
          </Label>
          <br />

          <Label
            font="ubuntu"
            color="cyan"
            fontSize="xlarge"
            fontWeight="semiBold"
          >
            <div className="desktop">Telefone ( campo obrigatorio)</div>
            <div className="mobile">Telefone * </div>
            <Input margin="10px 0" outline={false} height={50} block />
          </Label>
          <br />

          <Label
            font="ubuntu"
            color="cyan"
            fontSize="xlarge"
            fontWeight="semiBold"
          >
            Nº do pedido
            <Input margin="10px 0" outline={false} height={50} block />
          </Label>
          <br />
          <Label
            font="ubuntu"
            color="cyan"
            fontSize="xlarge"
            fontWeight="semiBold"
          >
            Mensagem
            <Input
              margin="15px 0"
              height={200}
              outline={false}
              textArea
              block
            />
          </Label>
          <br />
          <Button text="Enviar" fontFamily="ubuntu" fontSize="xlarge" />
        </form>
        <br />
        <div className="space-between">
          <div className="contact-item">
            <a href="/" className="icon">
              <FiMail />
            </a>
            <br />
            <Paragraph fontSize="large" font="ubuntu">
              fabiani@masnempeixe.com.br
            </Paragraph>
          </div>
          &nbsp;
          <div className="contact-item">
            <a href="/" className="icon">
              <IoMdPin />
            </a>
            <br />
            <Paragraph fontSize="large" textAlign="center" font="ubuntu">
              Rua dos banqueiros 172, <br /> Vila bancaria, São Paulo - SP{' '}
              <br /> 03918-050
            </Paragraph>
          </div>
          &nbsp;
          <div className="contact-item">
            <a href="/" className="icon">
              <FiPhone />
            </a>
            <br />
            <Paragraph fontSize="large" font="ubuntu">
              (11)99446-3741
            </Paragraph>
          </div>
        </div>
        &nbsp;
        <hr />
        <div className="social-media">
          <Heading font="ubuntuCondensed">Nossas redes sociais</Heading>

          <div className="social-media-links">
            <a href="/" className="icon mini">
              <FiFacebook />
            </a>
            &nbsp;
            <a href="/" className="icon mini">
              <FiInstagram />
            </a>
            &nbsp;
            <a href="/" className="icon mini">
              <FiTwitter />
            </a>
            &nbsp;
            <a href="/" className="icon mini">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </Wrapper>
      <section>
        <InstagramPosts />
        <Newsletter />
      </section>
      <Footer />
    </Contato>
  )
}

export default Contact
