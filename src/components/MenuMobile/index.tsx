import * as S from './styles'
import { FiMessageSquare, FiHeart, FiCoffee, FiPackage } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
import Heading from 'components/Heading'
import { CgCloseO } from 'react-icons/cg'

type Props = {
  onClose: VoidFunction
}

const MenuMobile = ({ onClose }: Props) => (
  <S.Wrapper>
    <div className="close">
      <CgCloseO
        onClick={() => {
          onClose()
        }}
      />
    </div>
    <S.Top>
      <div className="row">
        <S.Profile />

        <Heading
          color="white"
          font="ubuntu"
          fontWeight="semiBold"
          margin="auto auto auto 15px"
        >
          Olá seja bem vindo!
        </Heading>
      </div>

      <Link href="/dashboard/dados-pessoais/" passHref>
        <a>
          <FiCoffee /> &nbsp; Miha conta <IoIosArrowForward />
        </a>
      </Link>

      <Link href="/dashboard/pedidos/" passHref>
        <a>
          <FiPackage /> &nbsp; Meus pedidos <IoIosArrowForward />
        </a>
      </Link>
    </S.Top>
    <S.Bottom>
      <Link href="/favoritos/" passHref>
        <a>
          <FiHeart strokeWidth="3" /> &nbsp; Favoritos
        </a>
      </Link>

      <Link href="/contato/" passHref>
        <a>
          <FiMessageSquare strokeWidth="3" /> &nbsp; Fale conosco
        </a>
      </Link>
    </S.Bottom>
  </S.Wrapper>
)

export default MenuMobile
