const SET_REVIEWS = "SET_REVIEWS";

const defaultState = null;

export default function productReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_REVIEWS:
            return action.payload
        default:
            return state;

    }
}

export const setReviewsReducer = (reviews) => ({ type: SET_REVIEWS, payload: reviews })