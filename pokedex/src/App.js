import React from 'react';
import { Route, useHistory } from 'react-router-dom'
import pokemonLogo from './assets/pokemon-logo.png'
import PokemonContainer from './containers/PokemonContainer'
import PokeInfo from './components/PokeInfo/PokeInfo'
import './App.css';

function App() {

  const history = useHistory()

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div className="App">
      <div className='logo' >
        <img onClick={handleClick} src={pokemonLogo} alt="logo" />
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
