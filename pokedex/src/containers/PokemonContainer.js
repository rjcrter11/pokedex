import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { POKEMON } from '../graphql/get-pokemon'
import Pokemon from "../components/Pokemon"
import Pagination from '../components/Pagination'
import './pokemonContainer.css'

function PokemonContainer() {
    const { loading, error, data: { queryPokemon = [] } = {} } = useQuery(POKEMON)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const indexOfLastPokemon = currentPage * postsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - postsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return (
        <>
            <div className='container' >
                {queryPokemon && queryPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon).map(pokemon => (
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <div className='pagination' >
                <Pagination postsPerPage={postsPerPage} totalPosts={queryPokemon.length} paginate={paginate} />
            </div>
        </>
    )
}

export default PokemonContainer