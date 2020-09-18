import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { POKEMON } from '../graphql/get-pokemon'
import Pokemon from "../components/Pokemon/Pokemon"
import Pagination from '../components/Pagination/Pagination'
import Spinner from '../components/Spinner/Spinner'
import Search from '../components/Search/Search'
import './pokemonContainer.css'

function PokemonContainer() {
    const { loading, error, data: { queryPokemon = [] } = {} } = useQuery(POKEMON)
    const [inputValue, setInputValue] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(151)
    if (loading) return <Spinner />
    if (error) return <p>Error</p>;

    const indexOfLastPokemon = currentPage * postsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - postsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pokemonFilterOnChange = e => {
        setInputValue(e.target.value)
    }

    const pokesToFilter = [...queryPokemon]

    const filteredPokemon =
        pokesToFilter && pokesToFilter.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
        })

    return (
        <>
            <div className='container' >
                <Search pokemon={filteredPokemon} pokemonFilterOnChange={pokemonFilterOnChange} inputValue={inputValue} />
                {
                    filteredPokemon && filteredPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon).map(pokemon => (
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