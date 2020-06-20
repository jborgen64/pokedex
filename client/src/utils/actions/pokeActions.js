import { FETCH_POKEMON, SAVE_POKEMON } from '../actions/type';

export const fetchPoke = () => dispatch => {
        console.log('fetching')
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(pokemon => dispatch({
            type: FETCH_POKEMON,
            data: pokemon
        }));
    }
