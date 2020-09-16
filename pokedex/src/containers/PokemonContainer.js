import React from 'react'
import { useQuery } from '@apollo/client'
import { POKEMON } from '../graphql/get-pokemon'
import Pokemon from "../components/Pokemon"
import './pokemonContainer.css'

function PokemonContainer() {
    const { loading, error, data: { queryPokemon = [] } = {} } = useQuery(POKEMON)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;



    return (
        <div className='container' >
            {queryPokemon && queryPokemon.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}

export default PokemonContainer