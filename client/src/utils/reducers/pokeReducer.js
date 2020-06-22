import { FETCH_POKEMON, SAVE_POKEMON } from '../actions/type';

const initialState = {
    item: {
        'id': 0,
        'name': '',
        'height': 0,
        'sprites': {
            'default': ''
        },
        'types': [
            {
                'slot': 0,
                'type': {
                    'name': '',
                    'url': ''
                }
            }
        ]

    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POKEMON:
            console.log('howdy from pokeReducer')
            return {
                ...state,
                item: action.data
            }
        default:
            return state;
    }
}