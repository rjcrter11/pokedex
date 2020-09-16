import classNames from 'classnames'

export const classTypes = (pokemon) => {

    var pokeType = classNames({
        types: true,
        'grass': pokemon === 'Grass',
        'normal': pokemon === 'Normal',
        'fire': pokemon === 'Fire',
        'water': pokemon === 'Water',
        'electric': pokemon === 'Electric',
        'ice': pokemon === 'Ice',
        'fighting': pokemon === 'Fighting',
        'poison': pokemon === 'Poison',
        'ground': pokemon === 'Ground',
        'flying': pokemon === 'Flying',
        'psychic': pokemon === 'Psychic',
        'bug': pokemon === 'Bug',
        'rock': pokemon === 'Rock',
        'ghost': pokemon === 'Ghost',
        'dragon': pokemon === 'Dragon',
        'fairy': pokemon === 'Fairy',
    })

    return pokeType

}

