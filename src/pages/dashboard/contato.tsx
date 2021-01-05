import Heading from 'components/Heading'
import Input from 'components/Input'
import Label from 'components/Label'
import Paragraph from 'components/Paragraph'
import Dashboard from 'templates/dashboard'
import Container from 'styles/pages/dashboard/contato'
import Options from 'components/Options'
import Button from 'components/Button'
import { useState } from 'react'

const dashboard = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [issue, setIssue] = useState('Motivo do chamado')
  return (
    <Dashboard>
      <Container>
        <Heading
          font="ubuntuCondensed"
          color="cyan"
          justify="center"
          fontSize="xxmax"
          fontWeight="semiBold"
        >
          Fale com nossa equipe
        </Heading>

        <Paragraph fontSize="xxlarge" margin="0 0 50px 0" textAlign="center">
          Mande sua mensagem para nós, e teremos prazer em te responder
        </Paragraph>

        <Options text={issue}>
          <div
            className="item"
            onClick={() => {
              setIssue('Me arrependi da compra')
            }}
          >
            Me arrependi da compra
          </div>
          <div
            className="item"
            onClick={() => {
              setIssue('Meu Produto não chegou')
            }}
          >
            Meu Produto não chegou
          </div>
          <div
            className="item"
            onClick={() => {
              setIssue('Meu produto veio com defeito')
            }}
          >
            Meu produto veio com defeito
          </div>
          <div
            className="item"
            onClick={() => {
              setIssue('Outro Motivo')
            }}
          >
            Outro motivo
          </div>
        </Options>

        <Label fontSize="xlarge" fontWeight="semiBold">
          Mensagem
          <Input
            textArea
            block
            background="lightGray"
            borderColor="lightGray"
            boxShadow
            radius={20}
            height={250}
            outline={false}
          />
        </Label>
        <br />
        <Button text="Enviar" fontSize="xlarge" />
      </Container>
    </Dashboard>
  )
}

export default dashboard
