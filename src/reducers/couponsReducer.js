const SET_COUPONS = "SET_PRODUCTS";
const CREATE_COUPON = "CREATE_COUPON";

const defaultState = [];

export default function couponsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_COUPONS:
            return action.payload
        case CREATE_COUPON:
            return [...state, action.payload]
        default:
            return state;

    }
}


export const setCoupons = (coupons) => ({ type: SET_COUPONS, payload: coupons })
export const createCopontReducer = (coupon) => ({ type: CREATE_COUPON, payload: coupon })
