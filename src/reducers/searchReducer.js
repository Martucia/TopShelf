const SET_SEARCH = "SET_SEARCH";

const defaultState = [];

export default function searchReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SEARCH:
            return action.payload
        default:
            return state;

    }
}

export const setSearchProducts = (products) => ({ type: SET_SEARCH, payload: products });