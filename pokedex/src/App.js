import React from 'react';
import { Route } from 'react-router-dom'
import pokemonLogo from './assets/pokemon-logo.png'
import PokemonContainer from './containers/PokemonContainer'
import PokeInfo from './components/PokeInfo'
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='logo' >
        <img src={pokemonLogo} alt="logo" />
      </div>
      <Route exact path='/'>
        <PokemonContainer />
      </Route>
      <Route path='/:pokeID' >
        <PokeInfo />
      </Route>

    </div>
  );
}

export default App;
