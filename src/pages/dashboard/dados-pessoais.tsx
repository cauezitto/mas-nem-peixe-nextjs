import Heading from 'components/Heading'
import Dashboard from 'templates/dashboard'
import Container from 'styles/pages/dashboard/Dados'
import Label from 'components/Label'
import Input from 'components/Input'
import { useState } from 'react'
import Button from 'components/Button'
const DadosPessoais: React.FC = () => {
  return (
    <Dashboard>
      <Container>
        <Heading
          font="ubuntuCondensed"
          color="cyan"
          justify="center"
          fontSize="xxmax"
          fontWeight="semiBold"
          margin="0"
        >
          Meus dados
        </Heading>
        <div className="profile"></div>
        {/* <label htmlFor="">trocar foto</label> */}
        <form>
          <div className="data-wrapper">
            <div className="name">
              <Label
                color="cyan"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; NOME
                <Input
                  value="Silvio Abravanel dos Santos"
                  height={50}
                  radius={50}
                  background="lightGray"
                  outline={false}
                  borderColor="lightGray"
                  boxShadow
                  block
                />
              </Label>
            </div>

            <div className="email">
              <Label
                color="cyan"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; EMAIL
                <Input
                  value="silviosantos@sbt.com.br"
                  height={50}
                  radius={50}
                  background="lightGray"
                  outline={false}
                  borderColor="lightGray"
                  boxShadow
                  block
                />
              </Label>
            </div>

            <div className="phone">
              <Label
                color="cyan"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; CELULAR
                <Input
                  value="11 2588-9923"
                  height={50}
                  radius={50}
                  background="lightGray"
                  outline={false}
                  borderColor="lightGray"
                  boxShadow
                  block
                />
              </Label>
            </div>

            <div className="address">
              <Label
                color="cyan"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; CEP/ENDEREÇO
                <Input
                  value="03923150/ rua qualquer num bairro chique de gente rica, n° 123"
                  height={50}
                  radius={50}
                  background="lightGray"
                  outline={false}
                  borderColor="lightGray"
                  boxShadow
                  block
                />
              </Label>
            </div>

            <div className="password">
              <Label
                color="cyan"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; SENHA
                <Input
                  value="4171800c"
                  height={50}
                  radius={50}
                  background="lightGray"
                  outline={false}
                  borderColor="lightGray"
                  boxShadow
                  block
                />
              </Label>
            </div>
          </div>

          <Button
            text="ATUALIZAR DADOS"
            fontFamily="ubuntu"
            fontWeight="semiBold"
            fontSize="xlarge"
          />
        </form>
      </Container>
    </Dashboard>
  )
}

export default DadosPessoais
