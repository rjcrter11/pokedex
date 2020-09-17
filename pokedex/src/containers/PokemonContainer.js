import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { POKEMON } from '../graphql/get-pokemon'
import Pokemon from "../components/Pokemon"
import Pagination from '../components/Pagination'
import Spinner from '../components/Spinner'
import './pokemonContainer.css'

function PokemonContainer() {
    const { loading, error, data: { queryPokemon = [] } = {} } = useQuery(POKEMON)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(9)
    if (loading) return <Spinner />
    if (error) return <p>Error</p>;

    const indexOfLastPokemon = currentPage * postsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - postsPerPage;


    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const firstPage = () => setCurrentPage(1)
    const lastPage = () => setCurrentPage(17)



    return (
        <>
            <div className='container' >
                {queryPokemon && queryPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon).map(pokemon => (
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <div className='pagination' >
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={queryPokemon.length}
                    paginate={paginate}
                    firstPage={firstPage}
                    lastPage={lastPage}
                />
            </div>
        </>
    )
}

export default PokemonContainer