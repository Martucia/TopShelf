const SET_PRODUCT = "SET_PRODUCT";
const ADD_REVIEW = "ADD_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";

const defaultState = null;

export default function productReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRODUCT:
            return action.payload
        case ADD_REVIEW:
            return { ...state, review: action.payload }

        case EDIT_REVIEW:
            return { ...state, review: action.payload }
        default:
            return state;

    }
}

export const setProductReducer = (product) => ({ type: SET_PRODUCT, payload: product })
export const addReviewReducer = (review) => ({ type: ADD_REVIEW, payload: review })
export const editReviewReducer = (review) => ({ type: EDIT_REVIEW, payload: review })
