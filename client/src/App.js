import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPoke } from './redux/actions/pokeAction'
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PokeCard from './components/PokeCard';
import PokeList from './components/PokeList';
import Wrapper from './components/Wrapper'


function App({ searchedPoke }) {


  return (
    <div className="App">
      <Navbar />
      <br />
      <SearchBar />
      <br />
      <Wrapper>
        { !searchedPoke.search ? <PokeList />  :  <PokeCard /> }
      </Wrapper>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pokeData: state.fetchedPoke.data,
    searchedPoke: state.searchedPoke
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchPoke: () => dispatch(fetchPoke())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


