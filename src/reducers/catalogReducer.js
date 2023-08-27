const SET_PRODUCTS = "SET_PRODUCTS";
const CREATE_PRODUCT = "CREATE_PRODUCT";

const defaultState = null;

export default function catalogReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload
        case CREATE_PRODUCT:
            return [...state, action.payload]
        default:
            return state;

    }
}


export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products })
export const createProductReducer = (product) => ({ type: CREATE_PRODUCT, payload: product })

