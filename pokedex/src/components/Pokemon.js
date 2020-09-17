import React from 'react'
import { useHistory } from 'react-router-dom'
import { classTypes } from '../utils/classUtils'
import './pokemon.css'


function Pokemon({ pokemon }) {

    const history = useHistory()

    const handleClick = () => {
        history.push(`/${pokemon.id}`)
    }

    return (
        <div className='poke-card' onClick={handleClick} >
            <p className='name' >{pokemon.name}</p>
            <div className='img-container' >
                <img src={pokemon.imgUrl} alt={pokemon.name} />
            </div>
            <div className='types-container' >
                <span className={`${pokemon.pokemonTypes[0] ? classTypes(pokemon.pokemonTypes[0]) : ''}`}
                > {pokemon.pokemonTypes[0]} </span>
                <span className={`${pokemon.pokemonTypes[1] ? classTypes(pokemon.pokemonTypes[1]) : ''}`} > {pokemon.pokemonTypes[1]} </span>
            </div>

        </div>
    )
}


export default Pokemon