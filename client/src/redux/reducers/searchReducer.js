import {  SEARCH_POKE_REQUEST, SEARCH_POKE_SUCCESS, SEARCH_POKE_FAILURE } from '../actions/type';

// const initialState = {

//     item: {
//         'id': 0,
//         'name': '',
//         'height': 0,
//         'sprites': {
//             'default': ''
//         },
//         'types': [
//             {
//                 'slot': 0,
//                 'type': {
//                     'name': '',
//                     'url': ''
//                 }
//             }
//         ]

//     }
// }

const initialState = {
    loading: false,
    data:  {
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
        
            },
    
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_POKE_REQUEST:
            console.log('search requested')
            return {
                ...state,
                loading: true
            }
        case SEARCH_POKE_SUCCESS:
            console.log('search success')
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case SEARCH_POKE_FAILURE:
            console.log('search failure')
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default: return state;
    }
}

