import { FETCH_POKEMON, SAVE_POKEMON } from '../actions/type';

export const fetchPoke = (search) => dispatch => {
        console.log('fetching')
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(res => res.json())
        .then(pokemon => dispatch({
            type: FETCH_POKEMON,
            data: pokemon
        }));
    }
