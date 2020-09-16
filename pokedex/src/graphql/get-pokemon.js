
import { gql } from '@apollo/client'

export const POKEMON = gql`
  query GetAllPokemon {
    queryPokemon(order:{asc:id}) {
    id
    name 
    captured
    imgUrl
    pokemonTypes
  }
  }
`;