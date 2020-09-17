import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { POKEMON } from '../graphql/get-pokemon'
import Pokemon from "../components/Pokemon"
import Pagination from '../components/Pagination'
import Spinner from '../components/Spinner'
import Search from '../components/Search'
import './pokemonContainer.css'

function PokemonContainer() {
    const { loading, error, data: { queryPokemon = [] } = {} } = useQuery(POKEMON)
    const [inputValue, setInputValue] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(9)
    if (loading) return <Spinner />
    if (error) return <p>Error</p>;


    const indexOfLastPokemon = currentPage * postsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - postsPerPage;


    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const petFilterOnChange = e => {
        setInputValue(e.target.value)
    }

    const filteredPokemon =
        queryPokemon && queryPokemon.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
        })

    return (
        <>
            <Search pokemon={filteredPokemon} petFilterOnChange={petFilterOnChange} inputValue={inputValue} />
            <div className='container' >

                {filteredPokemon && filteredPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon).map(pokemon => (
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <div className='pagination' >
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={queryPokemon.length}
                    paginate={paginate}
                />
            </div>
        </>
    )
}

export default PokemonContainer