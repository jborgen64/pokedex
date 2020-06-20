import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPoke } from '../../utils/actions/pokeActions'
import { FETCH_POKEMON } from '../../utils/actions/type';

function PokeCard() {

  useEffect(() => {
    fetchPoke()
  }, [])


  return (
    <div className="card mb-3" style={{ "max-width": "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src='' className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">name:  </h5>
            <p className="card-text">type: </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { fetchPoke }) (PokeCard);
