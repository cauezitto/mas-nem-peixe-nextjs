import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Dashboard from 'templates/dashboard'

const Game = () => {
  return (
    <Dashboard>
      <Heading
        font="ubuntuCondensed"
        color="cyan"
        fontSize="xxmax"
        fontWeight="semiBold"
      >
        Minhas pontuações
      </Heading>

      <Paragraph margin="20% 0 0 0" textAlign="center" fontSize="max">
        Em breve novidades! <br />
        fique ligado :)
      </Paragraph>
    </Dashboard>
  )
}

export default Game
