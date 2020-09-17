import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { typeImg } from '../utils/classUtils'

const PokeInfo = () => {
    const [pokeInfo, setPokeInfo] = useState([])

    const location = useLocation()
    const pokeImage = `https://pokeres.bastionbot.org/images/pokemon/${location.pathname}.png`

    function fetchKantoPokemon() {
        fetch(`https://pokeapi.co/api/v2/pokemon${location.pathname}`)
            .then(res => res.json())
            .then(pokemon => setPokeInfo(pokemon))
    }


    console.log(pokeInfo)

    const shiny = pokeInfo && pokeInfo.sprites && pokeInfo.sprites.front_shiny





    useEffect(() => {
        fetchKantoPokemon()
    }, [])

    if (!pokeInfo) return <Spinner />

    return (
        <div>
            <div>
                <h2> {pokeInfo.name} </h2>
                <span>Kanto Index: {pokeInfo.id} </span>
                {
                    pokeInfo && pokeInfo.types && pokeInfo.types.map(poke => (
                        <img key={poke.type.url} src={typeImg(poke.type.name)} alt={pokeInfo.name} />
                    ))
                }
            </div>
            <img src={pokeImage} alt={pokeInfo.name} />

            <img className='shiny' src={shiny} alt={`${pokeInfo.name} shiny`} />

            <div>
                <p>Weight: {pokeInfo.weight} </p>
                <p>Height: {pokeInfo.height} </p>
                <p>Base Experience: {pokeInfo.base_experience} </p>
            </div>
            <h4>Abilities</h4>
            {
                pokeInfo && pokeInfo.abilities && pokeInfo.abilities.map(poke => (
                    <p key={poke.ability.url} > {poke.ability.name} </p>
                ))
            }
            <h4>Stats</h4>
            {
                pokeInfo && pokeInfo.stats && pokeInfo.stats.map(poke => (
                    <p key={poke.stat.url} > {poke.stat.name} : {poke.base_stat} </p>
                ))
            }

        </div>
    )
}

export default PokeInfo