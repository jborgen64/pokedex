import React from 'react';

function SearchBar() {
  return (
    <form>
    <div className="form-group">
      <h1>Search Pokemon</h1>
      <input type="text" className="form-control" aria-describedby="pokeSearch"/>
    </div>

    <button type="submit" className="btn btn-primary">search</button>
  </form>
  );
}

export default SearchBar;
