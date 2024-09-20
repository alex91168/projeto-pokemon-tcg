import React, {useRef} from 'react';
import Header from './Header'
import Footer from './Footer'
import Filter from './Filters'
import '../assets/scss/gallery.scss'

export default function Gallery() {
  const galleryRef = useRef(null)
  const footerRef = useRef(null)

  const scrollToTop = () => {
    galleryRef.current.scrollIntoView({ behavior: 'smooth'})
  }
  const scrollToBottom = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <>
    <Header />
    <div ref={galleryRef}></div>
    <div className='scroll-gallery' >
      <div className='up-gallery' onClick={scrollToTop}>Up</div>
      <div className='down-gallery' onClick={scrollToBottom}>Down</div>
    </div>
    
    <div className='filter-gallery-container'>
      <Filter />
    </div>
    <div ref={footerRef}></div>
    <Footer />
    </>
  )
}
