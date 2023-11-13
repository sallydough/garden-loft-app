import React from 'react'
import './logo.css'
import logoApp from './garden-loft-logo.png'

const Logo = () => {
  return (
    <div className='logo-app'>
      <img className='logo-app-bg' src={logoApp} alt="" />
    </div>
  )
}

export default Logo