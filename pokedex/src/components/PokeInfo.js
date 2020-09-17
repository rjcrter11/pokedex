import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import Spinner from '../components/Spinner'

const PokeInfo = () => {
    const [pokeInfo, setPokeInfo] = useState([])

    const location = useLocation()

    console.log(location.pathname)

    function fetchKantoPokemon() {
        fetch(`https://pokeapi.co/api/v2/pokemon${location.pathname}`)
            .then(res => res.json())
            .then(pokemon => setPokeInfo(pokemon))
    }

    console.log(pokeInfo)

    useEffect(() => {
        fetchKantoPokemon()
    }, [])

    if (!pokeInfo) return <Spinner />

    return (
        <div>
            <h2> {pokeInfo.name} </h2>
            {
                pokeInfo && pokeInfo.stats && pokeInfo.stats.map(poke => (
                    <p key={poke.stat.url} > {poke.stat.name} : {poke.base_stat} </p>
                ))
            }
        </div>
    )
}

export default PokeInfo