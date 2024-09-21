import React, {useState} from 'react'
import '../assets/scss/catalog.scss'

export default function Catalog({results = []}) {
    const [isDetails, setIsDetails] = useState(null);
    const activeDetails = (localId) => {
        setIsDetails( prevId => (prevId === localId ? null : localId))
    }
    const quality = 'low'; // high, low 
    const extension = 'png'; // webp, jpg, png
  return (
    <>
    <div id='main-gallery-border'></div>
    <div className='main-gallery-container'>
        {results.map((x, index) => {
            return(
                <div id='card-box-gallery' key={x.localId}>
                <img id='card-img-gallery' src={`${x.image}/${quality}.${extension}`} alt="" />
                <div id='card-details-gallery' className={isDetails === x.localId ? 'active' : ''}>
                    <div id="card-details-text" className={isDetails === x.localId ? 'active' : ''}>
                        <h2>{x.name}</h2>
                        <span>{x.rarity}</span>
                    </div>
                    <div id='btn-details' onClick={() => activeDetails(x.localId)}>
                        <span id='btn-border-details' className={isDetails === x.localId ? 'active' : '' }>
                            <div className='product-swiper-border-black-gallery'></div>
                            <div id='product-swiper-border-gallery'
                            className={isDetails === x.localId ? 'active' : '' }></div>
                        </span>
                    </div>
                </div>

            </div>
            )
        })}
    </div>
    <div id='main-gallery-border-down'></div>
    </>
  )
}
