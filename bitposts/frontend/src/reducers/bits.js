import { GET_BITS, DELETE_BIT } from '../action/types.js';

const initialState = {
    bits: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BITS:
            return {
                ...state,
                bits: action.payload
            }
        case DELETE_BIT:
            return {
                ...state,
                bits: state.bits.filter(bit => bit.id !==action.payload)
            }
        case ADD_BIT:
            return {
                ...state,
                bits: [...state.bits, action.payload]
            }
        default:
            return state;
    }
}

