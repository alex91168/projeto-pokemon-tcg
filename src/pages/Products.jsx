import '../assets/scss/products.scss';
import Gengar from '../assets/images/gengar.png';
//produtos remover quando usar realtime
import Produtos from '../assets/images/hiddenfates-1.png';
import Produtos2 from '../assets/images/produto-2.png';
import Produtos2Icon from '../assets/images/produto-2-icon.png';
import Produtos3 from '../assets/images/produto-3.png';
import Produtos3icon from '../assets/images/produto-3-icon.png';

import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function App() {
    const products = [
        { id: 1, name: "Coleção Poderes Supremos de Destinos Ocultos do Pokémon Estampas Ilustradas", desc: "Presenciar um Pokémon Lendário na imensidão vasta em que eles habitam já é surpreendentemente raro, ainda mais três de uma vez só! Esta coleção Poderes Supremos contém 3 cartas holográficas com arte expandida de Rayquaza-GX Brilhante, além de versões especiais douradas de Solgaleo-GX e Lunala-GX. Você também receberá uma carta holográfica extragrande com arte expandida de Rayquaza-GX, 8 pacotes de booster de Destinos Ocultos do Pokémon Estampas Ilustradas e mais!", img: Produtos, img2: Produtos },
        { id: 2, name: "Lata Destinos Ocultos do Pokémon Estampas Ilustradas", desc: "Você é capaz de domar o poder selvagem de um Pokémon-GX? Escolha as chamas ardentes de Charizard-GX, as ondas furiosas de Gyarados-GX ou a eletricidade chocante de Raichu-GX na lata Destinos Ocultos do Pokémon Estampas Ilustradas. Cada uma destas fantásticas latas contém uma carta holográfica espetacular de Pokémon-GX, além de 4 pacotes de booster de Destinos Ocultos do Pokémon Estampas Ilustradas!", img: Produtos2, img2:Produtos2Icon },
        { id: 3, name: "Coleção Mewtwo/Mew de Destinos Ocultos do Pokémon Estampas Ilustradas", desc: "Aumente a sua coleção adicionando dois Pokémon com incríveis poderes de tipo Psíquico, mas com personalidades bastante diferentes! Cada coleção inclui uma carta holográfica de Mewtwo ou Mew, além de 3 pacotes de booster de Destinos Ocultos do Pokémon Estampas Ilustradas!", img: Produtos3, img2:Produtos3icon }
    ];

    const [activeProd, setActiveProd] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    
    const handleSwiperInit = (swiper) => {
        setSwiperInstance(swiper);
    };

    const goToPrevSlide = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    };

    const goToNextSlide = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };

    return (
        <>
            <div className="products-container-box">
                <div id='products-main-img'>
                    <img src={Gengar} alt="Gengar" />
                </div>
                <div id="products-text-container">
                    <h1>{products[activeProd].name}</h1>
                    <span>{products[activeProd].desc}</span>
                    <img key={activeProd} id='products-img-box' src={products[activeProd].img} alt={products[activeProd].name} />
                </div>
            </div>
            <div className='products-swiper-box'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    id='products-swiper'
                    onSlideChange={(swiper) => setActiveProd(swiper.activeIndex)}
                    onInit={handleSwiperInit} 
                    navigation={false} 
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={product.id} >
                            <img id='swiper-slide-img' src={product.img2} alt={product.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                <div className="swiper-button-prev" onClick={goToPrevSlide}></div>
                <div className="swiper-button-next" onClick={goToNextSlide}></div>
                <div className='product-swiper-border-black'></div>
                <div className='product-swiper-border'></div>
                <div className='product-swiper-border-yellow'></div>
            </div>
        </>
    );
}
