import * as S from './styles'
import {
  FiMessageSquare,
  FiMenu,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiPhone,
  FiSearch,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin
} from 'react-icons/fi'
import { HiOutlineMenu } from 'react-icons/hi'
import Link from 'next/link'
import { Wrapper } from 'components/Wrapper/styles'
const Header = () => (
  <S.Wrapper>
    <Wrapper>
      <div className="contact-container">
        <div className="social-links">
          <a href="#">
            <FiFacebook />
          </a>
          <a href="#">
            <FiInstagram />
          </a>
          <a href="#">
            <FiTwitter />
          </a>
          <a href="#">
            <FiLinkedin />
          </a>
        </div>
        <div className="whatsapp-container">
          <a href="#">
            {' '}
            <FiPhone />
            &nbsp; WHATSAPP (11) 99446-3741
          </a>
        </div>
      </div>
    </Wrapper>
    <Wrapper>
      <div className="navigation-container">
        <HiOutlineMenu className="menu" />

        <Link href="/">
          <a className="logoContainer">
            <img src={'/img/logo.webp'} />
          </a>
        </Link>

        <nav className="linksContainer">
          <ul>
            <li>
              <Link href="/contato" passHref>
                <a>
                  <FiMessageSquare /> FALE CONOSCO
                </a>
              </Link>
            </li>
            <li>
              {' '}
              <FiUser /> MINHA CONTA
            </li>
            <li>
              {' '}
              <FiHeart /> FAVORITOS
            </li>
            <li>
              {' '}
              <Link href="/carrinho" passHref>
                <a>
                  <FiShoppingBag />
                  CARRINHO
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <FiShoppingBag className="mobile-cart" />
      </div>
    </Wrapper>

    <div className="search-container">
      <Wrapper>
        <div className="search-subcontainer">
          <div className="input-container">
            <input type="text" placeholder="DIGITE OQUE ESTÁ PORCURANDO" />
            <FiSearch size="20" />
          </div>
        </div>
      </Wrapper>
    </div>
  </S.Wrapper>
)

export default Header
