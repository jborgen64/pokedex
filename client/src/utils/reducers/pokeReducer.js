import { FETCH_POKEMON, SAVE_POKEMON } from '../actions/type';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POKEMON:
            return {
                ...state,
                items: action.data
            }
        default:
            return state;
    }
}