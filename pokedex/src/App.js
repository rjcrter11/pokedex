import React, { useState } from 'react';
import pokemonLogo from './assets/pokemon-logo.png'
import PokemonContainer from './containers/PokemonContainer'
import './App.css';




function App() {


  return (
    <div className="App">
      <div className='logo' >
        <img src={pokemonLogo} alt="logo" />
      </div>
      <PokemonContainer />

    </div>
  );
}

export default App;
