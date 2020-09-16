import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { POKEMON } from '../graphql/get-pokemon'
import Pokemon from "../components/Pokemon"

function fetchKantoPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(allpokemon => console.log(allpokemon))
}


function PokemonContainer() {
    const { loading, error, data: { queryPokemon = [] } = {} } = useQuery(POKEMON)

    useEffect(() => {
        fetchKantoPokemon()
    }, [])

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