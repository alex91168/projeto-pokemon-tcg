import React, { useState, useEffect } from 'react'
import '../assets/scss/filters.scss'
import Fuse from 'fuse.js';
import Catalog from './Catalog'

import grassImage from '../assets/images/grass-type.png';
import fireImage from '../assets/images/fire-type.png';
import waterImage from '../assets/images/water-type.png';
import lightningImage from '../assets/images/lightning-type.png';
import psychicImage from '../assets/images/psychic-type.png';
import fightingImage from '../assets/images/fighter-type.png';
import fairyImage from '../assets/images/fairy-type.png';
import colorlessImage from '../assets/images/colorless-type.png';
import darknessImage from '../assets/images/darkness-type.png';
import metalImage from '../assets/images/metal-type.png';
import dragonImage from '../assets/images/dragon-type.png';
import Loading from '../assets/images/loading.png'

export default function Filters() {
    const [cards, setCards] = useState([]);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchCards = async () => {
            const responses = await Promise.all([
                fetch('https://api.tcgdex.net/v2/en/sets/sm115'),
                fetch('https://api.tcgdex.net/v2/en/sets/sma')
            ])
            responses.forEach(response => {
                if(!response.ok){
                    throw new Error('Error')
                }
            })
            const data = await Promise.all(responses.map(response => response.json()))
            const dataCards = [...data[0].cards];
            const dataCardsTwo = [...data[1].cards];
            const idSetOne = dataCards.map(x => x.localId);
            const idSetTwo = dataCardsTwo.map(x => x.localId);
            
            const rarityResponses = await Promise.all([
                ...idSetOne.map(id => fetch(`https://api.tcgdex.net/v2/en/sets/sm115/${id}`)),
                ...idSetTwo.map(id => fetch(`https://api.tcgdex.net/v2/en/sets/sma/${id}`)),
            ])
            
            rarityResponses.forEach(response => {
                if(!response.ok){
                    throw new Error('Error ')
                }
            })
            const allCards = await Promise.all(rarityResponses.map(response => response.json()))
            const filteredCards = allCards.map(x => ({
                name: x.name,
                category: x.category,
                image: x.image,
                localId: x.localId,
                rarity: x.rarity,
                suffix: x.suffix,
                types: x.types,
                attacks: x.attacks
            }));
            setCards(filteredCards)
            setResults(filteredCards);
            setLoading(false);
        }
        fetchCards();
    }, [])

    const fuse = new Fuse (cards, {
        keys: ["name", "category", "localId"],
        threshold: 0.3,
        minMatchCharLength: 1,}
        
    );

    const searching = (e) => {
        const searchQuery = e.target.value
        setQuery(searchQuery)

        if(searchQuery){
            const searchResults = fuse.search(searchQuery).map(results => results.item)
            setResults(searchResults)
        }
        else {
            setResults(cards)
        }
    };
    
    const [isTrainerChecked, setIsTrainerChecked] = useState(false);
    const [isGxChecked, setisGxChecked] = useState(false);

    const handleCheckboxChange = () => {
        
        setIsTrainerChecked(prev => !prev);
    };

    const handleCheckboxChangeNew = () => {
        setisGxChecked(prev => !prev);
    };

    useEffect(() => {
        let filteredResults = cards

        if (isTrainerChecked) {
            filteredResults = filteredResults.filter(card => card.category === 'Trainer')
        }
        if (isGxChecked) {
            filteredResults = filteredResults.filter(card => card.suffix === 'GX')
        }
        // Query
        if (query) {
            const fuse = new Fuse(filteredResults, { keys: ["name", "category", "localId"],threshold: 0.3,
                minMatchCharLength: 1, })
            filteredResults = fuse.search(query).map(result => result.item)
        }

        setResults(filteredResults)
    }, [isTrainerChecked, isGxChecked, query, cards]);

    const [typeP, setTypeP] = useState(new Set())
    const [isTypeSelected, setIsTypeSelected] = useState(new Set())

    useEffect(() => {
        const pokemonTypes = new Set(cards.flatMap(x => x.types).filter(Boolean));
        setTypeP(pokemonTypes)
    }, [cards])

    const checkedBox = (type) => {
        return () => {
            setIsTypeSelected( prev => {
                const newSelectedTypes = new Set(prev)
                if(newSelectedTypes.has(type)) {
                    newSelectedTypes.delete(type);
                } else {
                    newSelectedTypes.add(type);
                }
                return newSelectedTypes;
            });
        }
    }

    useEffect(() => {
        let filterCards = cards;

        if(isTypeSelected.size > 0) {
            //console.log("Teste:", Array.from(isTypeSelected)); 
            filterCards = filterCards.filter(card => Array.isArray(card.types) && card.types.some(type => isTypeSelected.has(type)));
        }
        if (query) {
            const fuse = new Fuse(filterCards, { 
                keys: ["name", "category", "localId"],
                threshold: 0.3,
                minMatchCharLength: 1, })
                filterCards = fuse.search(query).map(result => result.item)
        }
        setResults(filterCards)
        
    }, [isTypeSelected, query, cards])

    const imgTypeBr = {
        'Grass': { pt: 'Planta', img: grassImage },
        'Fire': { pt: 'Fogo', img: fireImage },
        'Water': { pt: 'Água', img: waterImage },
        'Lightning': { pt: 'Raio', img: lightningImage },
        'Psychic': { pt: 'Psíquico', img: psychicImage },
        'Fighting': { pt: 'Lutador', img: fightingImage },
        'Fairy': { pt: 'Fada', img: fairyImage },
        'Colorless': { pt: 'Incolor', img: colorlessImage },
        'Darkness': { pt: 'Escuridão', img: darknessImage },
        'Metal': { pt: 'Metal', img: metalImage },
        'Dragon': { pt: 'Dragão', img: dragonImage }
    };
    const removerFiltro = () => {
    setIsTypeSelected(new Set())
    setIsTrainerChecked(false)
    setisGxChecked (false)
    }
    const [filterHidden, setFilterHidden] = useState(false);

    const showFilterContainer = () => {
        setFilterHidden(prev => !prev);
    } 
    const hiddenMobile = () => {
        setFilterHidden(false);
    }
    console.log(typeP)
  return (
    <>
    {loading ? (
        <div className='loading-main'>
            <div>
                <div id='loading-svg'></div>
                <img id='loading-img' src={Loading} alt="" style={{width:200, height:200}}/>
            </div>
        </div>
    ):(
    <>
    <div className='filter-main-container'>
        <div className="filter-main-box">
            <div className='search-input-box'>
                <input
                type="search"
                placeholder='Filter por cartas'
                onChange={searching}
                />
                <div className='filter-mobile'>
                    <button 
                        id='filter-mobile-btn' 
                        onClick={showFilterContainer}> <span>Filtros <i className="bi bi-funnel"></i></span>
                    </button>
                </div>                
            </div>
            <div id='types-filter-container' className={filterHidden ? 'active' : ''} >
                <div className='types-filter-box'>
                    <div className="type-box">
                        <label htmlFor="GX" className={isGxChecked ? 'selected' : ''}>
                        GX
                        <input type="checkbox"
                        checked={isGxChecked}
                        id='GX'
                        onChange={handleCheckboxChangeNew}
                        />
                        <span className='custom-checkbox'></span>
                        </label>
                    </div>
                    <div className="type-box">
                        <label htmlFor="treinador" className={isTrainerChecked ? 'selected' : ''}>
                            Treinador
                            <input type="checkbox"
                            id='treinador'
                            checked={isTrainerChecked}
                            onChange={handleCheckboxChange}
                            />
                            <span className='custom-checkbox'></span>
                        </label>
                    </div>
                </div>
                <div className='types-filter-type-box'>
                    {[...typeP].map((x, index) => {
                        const {pt, img} = imgTypeBr[x] || {pt: x, img:null}
                        return(
                            <div className="type-box" key={index}>
                                <label htmlFor={x} className={isTypeSelected.has(x) ? 'selected' : ''} >
                                    {img && <img src={img} alt={pt} style={{ width: '20px', height: '20px', marginRight: '5px' }} />}
                                    {pt}
                                    <input
                                        type="checkbox"
                                        onChange={() => checkedBox(x)()}
                                        checked={isTypeSelected.has(x)}
                                        id={x}
                                    />
                                    <span className="custom-checkbox"></span>
                                </label>
                            </div>
                        )})}
                </div>
                <div id='hidden-filter-container-mobile'>
                    <button 
                     onClick={hiddenMobile}>
                        Ocultar 
                        <i className="bi bi-caret-up-fill"></i>
                     </button>
                </div>
                <div className='filter-remove-button'>
                    <button 
                        id='filter-remove' 
                        onClick={removerFiltro}>Remover filtros
                    </button>
                </div>
            </div>
            <div className="mobile-filter-container-main">
                <button
                    id='filter-remove'
                    onClick={removerFiltro}>Remover filtros
                </button>
            </div>
        </div>
    </div>

    <Catalog results={results}/>
    </>)}
    </>
  );
}
