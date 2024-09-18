import BannerMain from '../assets/images/banner.jpg'
import React from 'react'
import '../assets/scss/main.scss'

export default function Main() {
  return (
    <>
        <main>
        <div className='main-box'>
            <img src={BannerMain} alt="" />
        </div>
    </main>
    <div className='container-divider'>
      <div className='divider'></div>
    </div>
    </>
     )
}
