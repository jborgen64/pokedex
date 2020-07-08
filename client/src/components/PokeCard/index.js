import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchPoke } from '../../redux/actions/searchAction'

class PokeCard extends Component {

  render() {

    const types = this.props.searchedPoke.types[0].type.name

    return (

      <div className="card mb-3" style={{ "maxWidth": "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={this.props.searchedPoke.sprites.front_default} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">name: {this.props.searchedPoke.name} </h5>
              <p className="card-text">type: {types} </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PokeCard.propTypes = {
  searchPoke: PropTypes.func.isRequired,
  searchedPoke: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
  searchedPoke: state.searchedPoke.data
})

export default connect(mapStateToProps, { searchPoke })(PokeCard);
