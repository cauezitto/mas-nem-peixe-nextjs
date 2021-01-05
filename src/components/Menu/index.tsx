import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'
import Label from 'components/Label'
import Paragraph from 'components/Paragraph'
import { FiPower, FiPackage } from 'react-icons/fi'
import { MdInsertEmoticon } from 'react-icons/md'
import { BiCube } from 'react-icons/bi'
import { AiOutlineTrophy } from 'react-icons/ai'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
const Menu = () => (
  <S.Wrapper>
    <div className="profile-wrapper">
      <div className="profile" />
      <Paragraph
        justify="center"
        textAlign="center"
        color="white"
        font="ubuntuCondensed"
        fontSize="xxlarge"
      >
        Mah oeh, Silvio!
      </Paragraph>
    </div>

    <div className="links-wrapper">
      <Link href="/dashboard/dados-pessoais" passHref>
        <a>
          {' '}
          <MdInsertEmoticon /> &nbsp; Dados
        </a>
      </Link>

      <Link href="/dashboard/pedidos" passHref>
        <a>
          <BiCube /> &nbsp; Pedidos
        </a>
      </Link>

      <Link href="/dashboard/game" passHref>
        <a>
          <AiOutlineTrophy /> &nbsp; Pontuação
        </a>
      </Link>

      <Link href="/dashboard/contato" passHref>
        <a>
          <HiOutlineChatAlt2 /> &nbsp; Fale conosco
        </a>
      </Link>
    </div>

    <div className="logout-wrapper">
      <FiPower />

      <Paragraph color="white" fontSize="xlarge" margin="10px 0">
        Deslogar
      </Paragraph>
    </div>
  </S.Wrapper>
)

export default Menu
