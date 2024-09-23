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
                    <img id='card-img-gallery' src={`${x.image}/${quality}.${extension}`} alt={x.name} />
                    <div className="card-img-mobile"><img src={`${x.image}/${quality}.${extension}`} alt={x.name} /></div>
                    <div id='card-details-gallery' className={isDetails === x.localId ? 'active' : null}>
                        <div id="card-details-text" className={isDetails === x.localId ? 'active' : ''}>
                            <h2>{x.name}</h2>
                            <span>{x.rarity}</span>
                            {x.attacks && x.attacks.length> 0 ? (
                                x.attacks.map((attack, attackIndex) => {
                                    const effectId = (attack.effect ? <span style={{fontSize:12, wordBreak:'break-all'}}>Effect: {attack.effect}</span> : null)
                                    const attackName = (attack.name ? (
                                    <span style={{fontSize:16 }}>
                                        <span style={{ color: 'rgb(255,226,101)', fontSize:16 }}>Attack:</span> {attack.name}
                                    </span> ): null)
                                    const damage = (attack.name ? (<span style={{fontSize:12}}>Damage: {attack.damage}</span>) : null)
                                    return(
                                        <div className='attacks-card-details' key={attackIndex}>
                                            <span>{attackName}<br/>{damage}</span>
                                            <span>{effectId}</span>
                                        </div>
                                        )
                                    }   
                                )
                            ): ''}
                        </div>
                        <div id='btn-details' onClick={() => activeDetails(x.localId)}>
                            <span id='btn-border-details' className={isDetails === x.localId ? 'active' : '' }>
                                <div className='product-swiper-border-black-gallery'></div>
                                <div id='product-swiper-border-gallery'
                                className={isDetails === x.localId ? 'active' : '' }></div>
                            </span>
                        </div>
                    </div>
                    <div className='mobile-card-details'>
                        <h2 style={{alignItems:'flex-start'}}>{x.name}</h2>
                        <span id='rarity-mobile-card-detais'>Rarity: {x.rarity}</span>
                        {x.attacks && x.attacks.length> 0 ? (
                            x.attacks.map((attack, attackIndex) => {
                                const effectId = (attack.effect ? <span style={{fontSize:12, wordBreak:'break-all'}}>Effect: {attack.effect}</span> : null)
                                const attackName = (attack.name ? (
                                <span style={{fontSize:16 }}>
                                    <span style={{ color: 'rgb(255,226,101)', fontSize:16 }}>Attack:</span> {attack.name}
                                </span> ): null)
                                const damage = (attack.name ? (<span style={{fontSize:12}}>Damage: {attack.damage}</span>) : null)
                                return(
                                <div className='attacks-card-mobile' key={attackIndex}>
                                    <span>{attackName}<br/>{damage}</span>
                                    <span>{effectId}</span>
                                </div>
                                )
                            })
                        ):([''])}
                    </div>
                </div>
            )
        })}
    </div>
    <div id='main-gallery-border-down'></div>
    </>
  )
}
