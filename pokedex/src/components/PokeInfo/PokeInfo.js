import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import StatsBox from '../StatsBox/StatsBox';
import PokeInfoTitle from '../PokeInfoTitle/PokeInfoTitle';
import { typeImg } from '../../utils/classUtils';
import './PokeInfo.css';

const PokeInfo = () => {
    const [pokeInfo, setPokeInfo] = useState([])
    const [evolutionChain, setEvolutionChain] = useState('')
    const [loading, setLoading] = useState(true)

    const location = useLocation()
    const pokeImage = `https://pokeres.bastionbot.org/images/pokemon/${location.pathname}.png`

    const fetchKantoPokemon = async () => {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon${location.pathname}`);
        const data = await request.json();
        setPokeInfo(data);
    }

    const fetchSpecies = async () => {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon-species${location.pathname}/`);
        const data = await request.json();
        const evoChain = data.evolution_chain.url;

        return fetch(evoChain)
            .then(res => res.json())
            .then(evos => {
                setEvolutionChain(evos.chain.evolves_to[0].evolves_to[0].species.name)
                setLoading(false)
            })
    }


    const shiny = pokeInfo && pokeInfo.sprites && pokeInfo.sprites.front_shiny;

    useEffect(() => {
        fetchKantoPokemon()
        fetchSpecies()
    }, [])

    return (
        <div className='poke-info-container'>
            {
                loading ? (
                    <Spinner />
                ) : (
                        <div className="card-container" >
                            <div className="title-bar">
                                <PokeInfoTitle name={pokeInfo.name} id={pokeInfo.id} />
                                <div className="type-symbol">
                                    {
                                        pokeInfo && pokeInfo.types && pokeInfo.types.map(poke => (
                                            <img key={poke.type.url} src={typeImg(poke.type.name)} alt={pokeInfo.name} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="main-container">
                                <div className="poke-img">
                                    <img className="default" src={pokeImage} alt={pokeInfo.name} />
                                    <div className="shiny-container">
                                        <img className='shiny' src={shiny} alt={`${pokeInfo.name} shiny`} />
                                        <span>Shiny</span>
                                    </div>
                                </div>
                                <div className="stats">
                                    {
                                        pokeInfo && pokeInfo.stats && pokeInfo.stats.map(poke => (
                                            <StatsBox key={poke.stat.url} baseStat={poke.base_stat} statName={poke.stat.name} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="footer-container">
                                <div className='left-footer-box' >
                                    <div className="general-info" >
                                        <h4>Info</h4>
                                        <p>Weight: {pokeInfo.weight} </p>
                                        <p>Height: {pokeInfo.height} </p>
                                        <p>Base Experience: {pokeInfo.base_experience} </p>
                                    </div>
                                    <div className="abilities">
                                        <h4>Abilities</h4>
                                        {
                                            pokeInfo && pokeInfo.abilities && pokeInfo.abilities.map(poke => (
                                                <p key={poke.ability.url} > {poke.ability.name} </p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="right-footer-box">
                                    <h4>Final Evolution  </h4>
                                    <p>{evolutionChain}</p>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
export default PokeInfo;