import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPoke } from '../../redux/actions/pokeAction'
import { searchPoke } from '../../redux/actions/searchAction';

function PokeList({ pokeData, fetchPoke, searchPoke }) {

 
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [pokeName, setPokeName] = useState('');


  useEffect(() => {
    async function setPoke() {
      await fetchPoke();
    }
    setPoke()
  }, [])


//  async function findPoke(input) {
//   await searchPoke(input)
// }

  return pokeData.loading ? (
    <h2>Loading...</h2>
  ) : pokeData.error ? (
    <h2>{pokeData.error}</h2>
  ) : (
     
          <div>{pokeData && pokeData.results && pokeData.results.map(poke => 
            <div className="card mb-3" style={{ "maxWidth": "400px" }} onClick={() => searchPoke(poke.name)} key={poke.name}>
            <div className="row no-gutters">
              <div className="col-md-4">
              <img src={`https://img.pokemondb.net/sprites/black-white/normal/${poke.name}.png`} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-body">{poke.name} </h3>
                </div>
              </div>
            </div>
          </div>
      )}
      </div>
    
      )
}


const mapStateToProps = state => {
  return {
    pokeData: state.fetchedPoke.data,
    searchedPoke: state.searchedPoke.data

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPoke: () => dispatch(fetchPoke()),
    searchPoke: (search) => dispatch(searchPoke(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeList)