import React from 'react';

import './styles.css'
import {FiMessageSquare, FiMenu, FiHeart, FiShoppingBag, FiUser} from 'react-icons/fi'
import {HiOutlineMenu} from 'react-icons/hi'

function Header() {
  return (
    <div className="contaimer">
      <header className = 'header'>
        <FiShoppingBag className = "mobile-cart" />

        <div className = 'logoContainer' >
         <img src = {'/logo.webp'} />
        </div>

        <div className = 'linksContainer' >
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
        </div>

        <HiOutlineMenu className = 'menu' />
      </header>
      
    </div>
  );
}

export default Header;
