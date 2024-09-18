import React, {act, useState} from 'react';
import '../assets/scss/cards.scss';
import Mismagius from '../assets/images/429.png';
import Card from '../assets/images/carta.png';
import SV49 from '../assets/images/SV49.png';
import SV69 from '../assets/images/SV69.png';
import SV76 from '../assets/images/SV76.png';
import Star from '../assets/images/star-icon.png';
import Carousel from 'react-bootstrap/Carousel';

export default function Cards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectIndex = (selectedIndex, e) => {
    if (selectedIndex !== activeIndex) {
      setActiveIndex(selectedIndex);
    }
  }  

  const listCards = [
    {id:1, name:"Charizard-GX Shiny", desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ratione reiciendis necessitatibus ducimus omnis deleniti.", img:SV49},
    {id:2, name:"sdsdsds", desc:"sdsds3as2", img:SV69},
    {id:3, name:"asdsdss", desc:"sdsds32sd", img:SV76},
    {id:4, name:"23sdssd", desc:"sdsdssds32", img:Card},
  ]; 
  return (
    <>  
      <div className='cards-container'>
        <img className='img-moving-out' src={Mismagius} alt="" />
        <div className="card-box">
        <div className='product-swiper-border-black-top'></div>
        <div className='product-swiper-border-top'></div>
          <div className="card-text">
            <h1>Galeria <span id="hidden-text">Hidden</span><span id="fates-text">Fates</span></h1>
            <p>A expansão especial Hidden Fates foi lançada em agosto de 2019. Os pacotes não podiam ser comprados individualmente em caixas de booster e continham 68 cartas, 94 cartas da Shiny Vault e 1 carta secreta. Entre as cartas notáveis estão Charizard-GX Full Art Holo, Umbreon-GX e Sylveon-GX.</p>
          </div>
          <div id='button-card-box'>
            Ver galeria 
           {/*<button id='button-card'>Ver galeria</button>*/} 
          </div>
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
                  className="d-block w-100"
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
