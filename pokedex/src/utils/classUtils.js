import classNames from 'classnames'
import Grass from '../assets/grassType.png'
import Water from '../assets/waterType.png'
import Bug from '../assets/bugType.png'
import Dragon from '../assets/dragonType.png'
import Electric from '../assets/electricType.png'
import Fairy from '../assets/fairyType.png'
import Fighting from '../assets/fightingType.png'
import Fire from '../assets/fireType.png'
import Flying from '../assets/flyingType.png'
import Ghost from '../assets/ghostType.png'
import Ground from '../assets/groundType.png'
import Rock from '../assets/rockType.png'
import Normal from '../assets/normalType.png'
import Ice from '../assets/iceType.png'
import Poison from '../assets/poisonType.png'
import Psychic from '../assets/psychicType.png'

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


export const typeImg = (pokemon) => {

    switch (pokemon) {
        case 'water':
            return Water
        case 'grass':
            return Grass
        case 'normal':
            return Normal
        case 'fire':
            return Fire
        case 'electric':
            return Electric
        case 'ice':
            return Ice
        case 'fighting':
            return Fighting
        case 'poison':
            return Poison
        case 'ground':
            return Ground
        case 'flying':
            return Flying
        case 'psychic':
            return Psychic
        case 'bug':
            return Bug
        case 'rock':
            return Rock
        case 'ghost':
            return Ghost
        case 'dragon':
            return Dragon
        case 'fairy':
            return Fairy
        default:
            return null

    }
}
