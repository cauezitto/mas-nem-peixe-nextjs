import React from 'react';

import './styles.css'
import {FiMessageSquare, FiMenu, FiHeart, FiShoppingBag, FiUser} from 'react-icons/fi'
import {HiOutlineMenu} from 'react-icons/hi'
import Link from 'next/link';

function Header() {
  return (
    <div className="contaimer">
      <header className = 'header'>
        <FiShoppingBag className = "mobile-cart" />

        <Link href = '/' >
          <a className = 'logoContainer' >
          <img src = {'/logo.webp'} />
          </a>
        </Link>

        <nav className = 'linksContainer' >
          <strong className = 'link'>
            <FiMessageSquare />
            FALE CONOSCO
          </strong>

          <strong className = 'link'>
            <FiUser />
            MINHA CONTA
          </strong>

          <strong className = 'link'>
            <FiHeart />
            FAVORITOS
          </strong>

          <strong className = 'link'>
            <FiShoppingBag />
            CARRINHO
          </strong>
        </nav>

        <HiOutlineMenu className = 'menu' />
      </header>
      
    </div>
  );
}

export default Header;
