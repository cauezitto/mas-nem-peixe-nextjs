import Heading from 'components/Heading'
import Container from 'styles/pages/Cadastro'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'
import Image from 'next/image'
import { FiFacebook } from 'react-icons/fi'
import { ImGooglePlus } from 'react-icons/im'
import Link from 'next/link'
import StyledLink from 'components/Link'
import Label from 'components/Label'
import Input from 'components/Input'

const Cadastro = () => {
  return (
    <Container>
      <div className="sub-container">
        <div className="go2login">
          <div className="content">
            <div className="logo-wrapper">
              <Image src="/img/logo.webp" height={40} width={140} />
            </div>
            <div className="text-wrapper">
              <Heading
                font="ubuntu"
                fontWeight="bold"
                fontSize="max"
                justify="center"
              >
                Você por aqui! :)
              </Heading>
              <Paragraph
                fontWeight="semiBold"
                justify="center"
                textAlign="center"
                font="ubuntu"
                fontSize="large"
                margin="20px 0 30px 0"
              >
                Para se manter conectado conosco, <br /> por favor faça seu
                login
              </Paragraph>

              <Link href="/login" passHref>
                <a>
                  <Button
                    text="LOGIN"
                    size="large"
                    radius="rounded"
                    fontSize="large"
                    fontFamily="ubuntu"
                    fontWeight="semiBold"
                    outline
                    background="cyan"
                    color="cyan"
                  />
                </a>
              </Link>
            </div>
            &nbsp;
          </div>
        </div>

        <div className="go2login-mobile-wrapper">
          <div className="go2login-mobile">
            Você por aqui! :) &nbsp;
            <StyledLink
              href="/login"
              color="orange"
              fontSize="xlarge"
              fontWeight="semiBold"
            >
              Login
            </StyledLink>
          </div>
        </div>

        <div className="register-wrapper">
          <div className="title">
            <Heading
              justify="center"
              color="white"
              font="ubuntu"
              fontSize="max"
              margin="0"
            >
              Faça seu cadastro
            </Heading>
          </div>

          <div className="icons">
            <div className="icon-wrapper">
              <FiFacebook />
            </div>
            <div className="icon-wrapper">
              <ImGooglePlus />
            </div>
          </div>

          <div className="text">
            <Paragraph
              justify="center"
              textAlign="center"
              font="ubuntu"
              fontSize="xlarge"
            >
              ou use seu email para se registrar
            </Paragraph>
          </div>

          <div className="name">
            <Label color="white" fontWeight="bold" fontSize="large">
              &nbsp; NOME
              <Input
                outline={false}
                radius={50}
                height={45}
                block
                borderColor="white"
              />
            </Label>
          </div>

          <div className="email">
            <Label color="white" fontWeight="bold" fontSize="large">
              &nbsp; EMAIL
              <Input
                outline={false}
                radius={50}
                height={45}
                block
                borderColor="white"
              />
            </Label>
          </div>

          <div className="phone">
            <Label color="white" fontWeight="bold" fontSize="large">
              &nbsp; CELULAR
              <Input
                outline={false}
                radius={50}
                height={45}
                block
                borderColor="white"
              />
            </Label>
          </div>

          <div className="address">
            <Label color="white" fontWeight="bold" fontSize="large">
              &nbsp; CEP/ ENDEREÇO
              <Input
                outline={false}
                radius={50}
                height={45}
                block
                borderColor="white"
              />
            </Label>
          </div>

          <div className="password">
            <Label color="white" fontWeight="bold" fontSize="large">
              &nbsp; SENHA
              <Input
                outline={false}
                radius={50}
                height={45}
                block
                borderColor="white"
              />
            </Label>
          </div>

          <div className="send">
            <Button
              size="medium"
              text="ENVIAR"
              radius="rounded"
              fontSize="xlarge"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Cadastro
