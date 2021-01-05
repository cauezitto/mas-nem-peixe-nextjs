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
import { useState } from 'react'
import MenuMobile from 'components/MenuMobile'
const Header = () => {
  const [mobileMenuClass, setMobileMenuClass] = useState('menu-mobile hidden')
  const [menuClass, setMenuClass] = useState('menu noRotated')
  const hiddeOrShowMenu = () => {
    if (mobileMenuClass === 'menu-mobile hidden') {
      setMobileMenuClass('menu-mobile visible')
      setMenuClass('menu rotated')
      return
    }

    setMenuClass('menu noRotated')
    setMobileMenuClass('menu-mobile hidden')
  }
  return (
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
          <HiOutlineMenu className={menuClass} onClick={hiddeOrShowMenu} />

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
                <Link href="/favoritos" passHref>
                  <a>
                    <FiHeart /> FAVORITOS
                  </a>
                </Link>
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
          <Link href="/carrinho">
            <a className="mobile-cart">
              <FiShoppingBag />
            </a>
          </Link>
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

      <div className={mobileMenuClass}>
        <MenuMobile onClose={hiddeOrShowMenu} />
      </div>
    </S.Wrapper>
  )
}

export default Header
