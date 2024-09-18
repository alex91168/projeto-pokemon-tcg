import React from 'react'
import '../assets/scss/header.scss'
import Icon from '../assets/images/hidden-fates.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <ol>
          <div id='li-1'>
            <Link id='header-link-text' to='/'>Inicio</Link>
            <Link id='header-link-text' to=''>Galeria</Link>
          </div>
          <div id='li-2'>
            <Link id='header-link-text' to=''>Saiba mais</Link>
            <Link id='header-link-text' to=''>Preferencias</Link>
          </div>
        </ol>
        <div className='icon-main'>
          <img src={Icon} alt="" />
        </div>
    </header>
  )
}
