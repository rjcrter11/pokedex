import React from 'react'
import { useQuery } from '@apollo/client'
import { POKEMON } from '../graphql/get-pokemon'
import Pokemon from "../components/Pokemon"


function PokemonContainer() {
    const { loading, error, data: { queryPokemon = [] } = {} } = useQuery(POKEMON)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;



    return (
        <div>
            {queryPokemon && queryPokemon.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}

export default PokemonContainer