const SET_LOAD = "SET_LOAD";
const REMOVE_LOAD = "REMOVE_LOAD";

const defaultState = [];

export default function loadReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_LOAD:
            return [...state, action.payload]
        case REMOVE_LOAD:
            return state.filter(st => st !== action.payload)
        default:
            return state;

    }
}


export const setLoad = (load) => ({ type: SET_LOAD, payload: load })
export const removeLoad = (load) => ({ type: REMOVE_LOAD, payload: load })