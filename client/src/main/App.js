import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPoke } from '../redux/actions/pokeAction'
import './App.css';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import PokeCard from '../components/PokeCard';
import PokeList from '../components/PokeList';


function App() {

  useEffect(() => {
    
    fetchPoke();
  
   }, [])
 

  return (
      <div className="App">
        <Navbar />
        <br />
        <SearchBar />
        <br />
        <PokeList />
        <PokeCard />
      </div>
  );
}

const mapStateToProps = state => {
  return {
    pokeData: state.fetchedPoke.data
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchPoke: () => dispatch(fetchPoke())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


