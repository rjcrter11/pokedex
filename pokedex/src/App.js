import React from 'react';
import pokemonLogo from './assets/pokemon-logo.png'
import { useQuery, gql } from '@apollo/client'
import './App.css';

const POKEMON = gql`
  query GetAllPokemon {
    queryPokemon {
    id
    name 
    captured
    imgUrl
    pokemonTypes
  }
  }
`;

function App() {

  const { loading, error, data } = useQuery(POKEMON)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="App">
      <img src={pokemonLogo} alt="logo" />
      {
        !loading && data.queryPokemon &&
        data.queryPokemon.map(poke => (
          <div key={poke.id}>
            <p> {poke.name}</p>
            <img alt='pokemonImg' src={poke.imgUrl} />
          </div>
        ))
      }

    </div>
  );
}

export default App;
