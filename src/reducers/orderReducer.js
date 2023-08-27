const SET_ORDER = "SET_ORDER";

const defaultState = null;

export default function orderReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ORDER:
            return action.payload
        default:
            return state;

    }
}

export const setOrderReducer = (order) => ({ type: SET_ORDER, payload: order })