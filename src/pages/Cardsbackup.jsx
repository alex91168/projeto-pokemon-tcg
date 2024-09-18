import React from 'react'
import '../assets/scss/cards.scss'
import Mismagius from '../assets/images/429.png'
import Card from '../assets/images/carta.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Cards() {
  return (
<>  
    <div className='cards-container'>
        <div className="card-box">
        <div id='card-moving'>
                <img src={Card} alt="" />
            </div>
            <div className="border-text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, molestias accusamus! Nobis aliquid rem omnis! Rem, et illo ullam deserunt amet distinctio! Commodi eligendi totam error, quidem, laborum quos impedit reiciendis sed tenetur, a ad?</p>
              <button>Veja mais</button>
              <img src={Mismagius} alt="" />
            </div>

        </div>
    </div>
    <div className="cards-container-box">
      <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          id='cards-container-swiper'
          modules={[Pagination]}
          className="mySwiper"
        >
      
          <SwiperSlide id="card-swiper-item"><img src={Card} alt="" /></SwiperSlide>
          <SwiperSlide id="card-swiper-item"><img src={Card} alt="" /></SwiperSlide>
          <SwiperSlide id="card-swiper-item"><img src={Card} alt="" /></SwiperSlide>
          <SwiperSlide id="card-swiper-item"><img src={Card} alt="" /></SwiperSlide>
          <SwiperSlide id="card-swiper-item"><img src={Card} alt="" /></SwiperSlide>
          <SwiperSlide id="card-swiper-item"><img src={Card} alt="" /></SwiperSlide>
          <SwiperSlide id="card-swiper-item"><img src={Card} alt="" /></SwiperSlide>
        </Swiper>
    </div>
</>
  )
}
