import React, {act, useState} from 'react';
import '../assets/scss/cards.scss';
import Mismagius from '../assets/images/429.png';
import SV49 from '../assets/images/SV49.png';
import SV69 from '../assets/images/SV69.png';
import SV76 from '../assets/images/SV76.png';
import Star from '../assets/images/star-icon.png';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'

export default function Cards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectIndex = (selectedIndex, e) => {
    if (selectedIndex !== activeIndex) {
      setActiveIndex(selectedIndex);
    }
  }  

  const listCards = [
    {
      id: 1,
      name: "Charizard-GX",
      desc: "A icônica Charizard-GX da coleção Shining Legends é um favorito entre colecionadores, simbolizando força e determinação com suas habilidades poderosas e design impressionante.",
      img: SV49,
    },
    {
      id: 2,
      name: "Umbreon-GX",
      desc: "Umbreon-GX é a escolha perfeita para fãs de Eevee, com sua arte sombria e táticas astutas que cativam jogadores e colecionadores, destacando-se em qualquer batalha.",
      img: SV69,
    },
    {
      id: 3,
      name: "Sylveon-GX",
      desc: "Sylveon-GX combina um design encantador com habilidades estratégicas, fazendo dela uma das cartas mais desejadas, especialmente entre os fãs de Eevee e suas evoluções.",
      img: SV76,
    }
  ];
  return (
    <>  
      <div className='cards-container'>
        <img className='img-moving-out' src={Mismagius} alt="" />
        <div className="card-box">
        <div className='product-swiper-border-black-top'></div>
        <div className='product-swiper-border-top'></div>
          <div className="card-text">
            <h1>Galeria <span id="hidden-text">Hidden</span><span id="fates-text">Fates</span> <span className='stars-bootstrap'><i class="bi bi-stars"></i></span></h1>
            <p>A expansão especial Hidden Fates foi lançada em agosto de 2019. Os pacotes não podiam ser comprados individualmente em caixas de booster e continham 68 cartas, 94 cartas da Shiny Vault e 1 carta secreta. Entre as cartas notáveis estão Charizard-GX Full Art Holo, Umbreon-GX e Sylveon-GX.</p>
          </div>
          <Link id='card-link-text' to='/gallery'>
          <div id='button-card-box'>
           Ver galeria 
          </div>
          </Link>
          <div className='card-details' key={activeIndex}>
            <h3>{listCards[activeIndex].name}</h3>
            <p>{listCards[activeIndex].desc}</p>
          </div>           
          <div className="carrossel-container-main">
            <Carousel 
              className='carousel-main-box' 
              slide={false} 
              indicators={false} 
              interval={null} 
              activeIndex= {activeIndex}
              onSelect= {selectIndex}>
              {listCards.map((item, index) => 
                (<Carousel.Item key={item.id}> 
                  <img
                  //className="d-block w-100"
                  id="carousel-img-card"
                  src={item.img}
                  alt={`Slide ${index + 1}`}/> 
                </Carousel.Item>
                ))}
            </Carousel>
            <div className={`effect-swiper-pulsing-${activeIndex + 1}`}></div>
            <div className="stars-item">
                  <img src={Star} alt="" id='star-f'/>
                  <img src={Star} alt="" id='star-fi'/>
                  <img src={Star} alt="" id='star-fir'/>
                  <img src={Star} alt="" id='star-firt'/>
                  <img src={Star} alt="" id='star-firs'/>
              </div>
          </div>
          <div className='product-swiper-border-black'></div>
          <div className='product-swiper-border'></div>
        </div>
      </div>
    </>
  );
}
