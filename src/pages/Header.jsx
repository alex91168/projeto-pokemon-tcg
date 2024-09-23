import React, {useState} from 'react'
import '../assets/scss/header.scss'
import Icon from '../assets/images/hidden-fates.png'
import { Link } from 'react-router-dom'

export default function Header() {
  const [openHeader, setOpenHeader] = useState(false);

  const headerBtn = () => {
    setOpenHeader(prev => !prev);
  }

  return (
    <>
    <header>
        <ol>
          <div id='li-1'>
            <Link id='header-link-text' to='/'>Inicio</Link>
            <Link id='header-link-text' to=''onClick={headerBtn}>Saiba mais</Link>
          </div>
          <div id='li-2'>
            <Link id='header-link-text' to='/gallery'>Galeria</Link>
            <Link id='header-link-text' to='' onClick={headerBtn}>Preferencias</Link>
          </div>
        </ol>
        <div className='icon-main'>
          <img src={Icon} alt="" />
        </div>
    </header>
          <div className={openHeader ? 'active': null} id='emConstrução'>
            <div id='close-emConstrução' onClick={() => setOpenHeader(false)} style={{cursor:'pointer'}}><i class="bi bi-x"></i></div>
            <p>Em construção... </p>
          </div>
    </>
  )
}
