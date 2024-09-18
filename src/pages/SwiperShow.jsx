import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import swiper2 from '../assets/images/banner.jpg'
import swiper3 from '../assets/images/banner-2.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/scss/swipermain.scss'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {

  return (
      <div className="swiper-main-promo">
        <Swiper
          id='banner-main'
          spaceBetween={30}
          centeredSlides={true}
          
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[ Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide ><iframe width="100%" height="90%" src="https://www.youtube.com/embed/oPXf_GxrM6o?si=QyRPGxQ0eG9tJS6e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
          <SwiperSlide ><img src={swiper2} alt="" /></SwiperSlide>
          <SwiperSlide ><img src={swiper3} alt="" /></SwiperSlide>
        </Swiper>
      </div>
  );
}
