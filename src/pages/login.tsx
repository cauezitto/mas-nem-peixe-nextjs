import Button from 'components/Button'
import Heading from 'components/Heading'
import Input from 'components/Input'
import Label from 'components/Label'
import Link from 'components/Link'
import Image from 'next/image'
import Container from 'styles/pages/Login'

const Login = () => {
  return (
    <Container>
      <div className="sub-wrapper">
        <div className="subscribe-wrapper">
          <div className="logo">
            <Image src="/img/logo.webp" height={40} width={140} />
          </div>
          <div className="people">
            <Image src="/img/people.svg" height={460} width={340} />
          </div>
          <div className="subscribe">
            <Heading
              margin="50px 0 0 0"
              color="black"
              font="ubuntu"
              fontWeight="normal"
              fontSize="xxxmax"
            >
              Novo aqui?
            </Heading>

            <Link
              href="/cadastro"
              fontWeight="semiBold"
              color="orange"
              font="ubuntu"
              fontSize="xxxmax"
            >
              Se inscreva
            </Link>
          </div>
        </div>

        <div className="form-wrapper">
          <Heading
            color="white"
            font="ubuntu"
            justify="center"
            fontWeight="bold"
            fontSize="extra"
            margin="50px 0"
          >
            BEM - VINDO!
          </Heading>

          <form>
            <div className="login">
              <Label
                color="white"
                font="ubuntu"
                fontWeight="semiBold"
                fontSize="large"
              >
                &nbsp; LOGIN
                <Input
                  margin="10px 0"
                  radius={50}
                  height={50}
                  block
                  outline={false}
                  borderColor="white"
                />
              </Label>
            </div>

            <div className="password">
              <Label
                color="white"
                font="ubuntu"
                fontWeight="semiBold"
                fontSize="large"
              >
                &nbsp; SENHA
                <Input
                  margin="10px 0"
                  radius={50}
                  height={50}
                  block
                  outline={false}
                  borderColor="white"
                />
              </Label>
            </div>

            <div className="remenber">
              <input type="checkbox" name="remenber" id="remenber-check-box" />
              &nbsp; &nbsp; lembrar
            </div>

            <div className="forgeted">
              <Link href="/" color="white" font="ubuntu" fontSize="small">
                Esqueci minha senha
              </Link>
            </div>

            <div className="send">
              <Button
                text="ENVIAR"
                background="cyan"
                radius="rounded"
                fontFamily="ubuntu"
                fontSize="xlarge"
                fontWeight="semiBold"
                size="block"
              />
            </div>
          </form>
        </div>

        <div className="subscribe-mobile">
          Novo aqui?
          <Link
            href="/cadastro"
            color="orange"
            fontSize="xlarge"
            fontWeight="semiBold"
          >
            &nbsp; Se inscreva!
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Login
