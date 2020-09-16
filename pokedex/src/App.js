import React from 'react';
import pokemonLogo from './assets/pokemon-logo.png'
import PokemonContainer from './containers/PokemonContainer'
import './App.css';



function App() {

  return (
    <div className="App">
      <img src={pokemonLogo} alt="logo" />
      <PokemonContainer />
    </div>
  );
}

export default App;
