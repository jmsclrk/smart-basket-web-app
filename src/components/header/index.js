import React from 'react'
import './styles.scss'
import Logo from './../../assets/graphics/logo.png'

const Header = (props) => {
  return(
    <header data-test="header-component">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} data-test="logo-img" alt="sb-logo" />
        </div>
      </div>
    </header>
  )
}

export default Header
