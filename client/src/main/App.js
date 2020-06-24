import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import PokeCard from '../components/PokeCard';
import { Provider } from 'react-redux';
import store from '../utils/store'
import { fetchPoke } from '../utils/actions/pokeActions'

function App() {

  // function searchPoke(search) {
  //   console.log("search pokemon...", search);
  //   fetchPoke(search)
  //     .then((res) => {
  //       console.log("POKEBACK:", res.data);
  //       // setState(res.data);
  //     })
  //     .catch((err) => console.log("ERRUH:", err));
  // }

  // //submits search form
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const search = event.target.value;
  //   searchPoke(search);
  //   console.log(search);
  // };

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
