import React from 'react'
import classNames from 'classnames'
import './pokemon.css'

function Pokemon({ pokemon }) {

    var pokeType1 = classNames({
        types: true,
        'grass': pokemon.pokemonTypes[0] === 'Grass' || pokemon.pokemonTypes[1] === 'Grass',
        'normal': pokemon.pokemonTypes[0] === 'Normal' || pokemon.pokemonTypes[1] === 'Normal',
        'fire': pokemon.pokemonTypes[0] === 'Fire' || pokemon.pokemonTypes[1] === "Fire",
        'water': pokemon.pokemonTypes[0] === 'Water' || pokemon.pokemonTypes[1] === 'Water',
        'electric': pokemon.pokemonTypes[0] === 'Electric' || pokemon.pokemonTypes[1] === 'Electric',
        'ice': pokemon.pokemonTypes[0] === 'Ice' || pokemon.pokemonTypes[1] === 'Ice',
        'fighting': pokemon.pokemonTypes[0] === 'Fighting' || pokemon.pokemonTypes[1] === 'Fighting',
        'poison': pokemon.pokemonTypes[0] === 'Poison' || pokemon.pokemonTypes[1] === 'Poison',
        'ground': pokemon.pokemonTypes[0] === 'Ground' || pokemon.pokemonTypes[1] === 'Ground',
        'flying': pokemon.pokemonTypes[0] === 'Flying' || pokemon.pokemonTypes[1] === 'Flying',
        'psychic': pokemon.pokemonTypes[0] === 'Psychic' || pokemon.pokemonTypes[1] === 'Psychic',
        'bug': pokemon.pokemonTypes[0] === 'Bug' || pokemon.pokemonTypes[1] === 'Bug',
        'rock': pokemon.pokemonTypes[0] === 'Rock' || pokemon.pokemonTypes[1] === 'Rock',
        'ghost': pokemon.pokemonTypes[0] === 'Ghost' || pokemon.pokemonTypes[1] === 'Ghost',
        'dragon': pokemon.pokemonTypes[0] === 'Dragon' || pokemon.pokemonTypes[1] === 'Dragon',
    })

    var pokeType2 = classNames({
        types: true,
        'grass': pokemon.pokemonTypes[1] === 'Grass',
        'normal': pokemon.pokemonTypes[1] === 'Normal',
        'fire': pokemon.pokemonTypes[1] === "Fire",
        'water': pokemon.pokemonTypes[1] === 'Water',
        'electric': pokemon.pokemonTypes[1] === 'Electric',
        'ice': pokemon.pokemonTypes[1] === 'Ice',
        'fighting': pokemon.pokemonTypes[1] === 'Fighting',
        'poison': pokemon.pokemonTypes[1] === 'Poison',
        'ground': pokemon.pokemonTypes[1] === 'Ground',
        'flying': pokemon.pokemonTypes[1] === 'Flying',
        'psychic': pokemon.pokemonTypes[1] === 'Psychic',
        'bug': pokemon.pokemonTypes[1] === 'Bug',
        'rock': pokemon.pokemonTypes[1] === 'Rock',
        'ghost': pokemon.pokemonTypes[1] === 'Ghost',
        'dragon': pokemon.pokemonTypes[1] === 'Dragon',

    })


    console.log(pokemon.pokemonTypes)
    return (
        <div className='poke-card' >
            <p className='name' >{pokemon.name}</p>
            <img src={pokemon.imgUrl} alt={pokemon.name} />

            <div>
                <span className={pokeType1}
                > {pokemon.pokemonTypes[0]} </span>
                <span className={pokeType2} > {pokemon.pokemonTypes[1]} </span>
            </div>


        </div>
    )
}





export default Pokemon