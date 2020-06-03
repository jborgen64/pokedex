import React from 'react';
import './App.css';
import Navbar from '../components/navbar'
import SearchBar from '../components/searchBar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <SearchBar/>
    </div>
  );
}

export default App;
