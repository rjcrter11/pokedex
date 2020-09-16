import React from 'react'


function Pokemon({ pokemon }) {
    return (
        <div>
            <p>{pokemon.name}</p>
            <img src={pokemon.imgUrl} alt={pokemon.name} />
            <p> {pokemon.pokemonTypes} </p>
        </div>
    )
}

export default Pokemon