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

const BottomMenu = () => (
  <S.Wrapper>
    <div className="sub-wrapper">
      <Link href="/dashboard/dados-pessoais/" passHref>
        <a>
          <MdInsertEmoticon />
        </a>
      </Link>

      <Link href="/dashboard/game/" passHref>
        <a>
          <AiOutlineTrophy />
        </a>
      </Link>

      <button>
        <FiPower />
      </button>

      <Link href="/dashboard/contato/" passHref>
        <a>
          <HiOutlineChatAlt2 />
        </a>
      </Link>

      <Link href="/dashboard/pedidos/" passHref>
        <a>
          <BiCube />
        </a>
      </Link>
    </div>
  </S.Wrapper>
)

export default BottomMenu
