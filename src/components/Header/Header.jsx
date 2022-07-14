import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to</h5>
        <h1><span class="sign__word">The_Chibuzor's Art.</span></h1>
        <h5 className="text-light">I'm going to blow your mind.</h5>
      </div>
    </header>
  )
}

export default Header;