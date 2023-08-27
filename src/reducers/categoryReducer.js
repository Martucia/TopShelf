const SET_CATEGORIES = "SET_CATEGORIES";

const defaultState = [];

export default function categortReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.payload
        default:
            return state;

    }
}


export const setCategoriesReducer = (categories) => ({ type: SET_CATEGORIES, payload: categories })