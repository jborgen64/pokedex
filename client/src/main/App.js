import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import PokeCard from '../components/PokeCard';
import pokeAPI from '../utils/pokeAPI';
import { Provider } from 'react-redux';
import store from '../utils/store'

function App() {

  const [pokemon, setPokemon] = useState({})

  // useEffect(() => {
  //   pokeAPI.pokeSearch()
  //     .then((res) => setPokemon(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Provider store={store}>
    <div className="App">
      <Navbar />
      <br />
      <SearchBar />
      <br />
      <PokeCard />
    </div>
    </Provider>
  );
}

export default App;
