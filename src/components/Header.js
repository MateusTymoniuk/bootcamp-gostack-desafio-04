import React from 'react';

import './Header.css';

import logo from '../assets/facebook-logo.png';

function Header() {
  return (
    <div className='header'>
      <img className='facebook-logo' src={logo} />
      <span className='profile'>Meu perfil</span>
    </div>
  )
}

export default Header;