import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPoke } from '../../utils/actions/pokeActions'

class PokeCard extends Component {

  // async componentWillMount() {
  //   await this.props.fetchPoke();
  // }

  render() {

    const types = this.props.pokemon.types[0].type.name
    console.log(types)

    return (

        <div className="card mb-3" style={{ "maxWidth": "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={this.props.pokemon.sprites.front_default} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">name: {this.props.pokemon.name} </h5>
              <p className="card-text">type: {types} </p>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

PokeCard.propTypes = {
  fetchPoke: PropTypes.func.isRequired,
  pokemon: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
  pokemon: state.pokemon.item
})

export default connect(mapStateToProps, { fetchPoke })(PokeCard);
