import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPoke } from '../../utils/actions/pokeActions'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

   

  onChange(e) {
    const { value } = e.target;
    this.setState({name: e.target.value});
    console.log(value)
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.fetchPoke(this.state.name)
    console.log('submitted ' + this.state.name)
  }


  render() {

    return (
    <form onSubmit={this.onSubmit}> 
    <div className="form-group">
      <h1>Search Pokemon</h1>
      <input type="text" className="form-control" onChange={this.onChange} aria-describedby="pokeSearch"/>
    </div>

    <button type="submit" className="btn btn-primary">search</button>
  </form>
  );
  }
}

SearchBar.propTypes = {
  fetchPoke: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  pokemon: state.pokemon.item
})

export default connect(mapStateToProps, { fetchPoke })(SearchBar);
