const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const CHANGE_QUANTITY = "CHANGE_QUANTITY"
const CLEAN_CART = "CLEAN_CART"

const defaultState = {
    currentUser: {},
    isAuth: null,
    isAdmin: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload.user,
                isAuth: true,
                isAdmin: action.payload.isAdmin
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false,
                isAdmin: false,
                cart: []
            }
        case ADD_TO_CART:
            return {
                ...state,
                currentUser: { ...state.currentUser, cart: action.payload },
                isAuth: true
            }
        case CHANGE_QUANTITY:
            const qt = action.payload.type == "plus" ? 1 : -1;

            return {
                ...state,
                currentUser: {
                    ...state.currentUser, cart: state.currentUser.cart.map(product => product.product._id == action.payload.productId ? {
                        ...product,
                        quantity: product.quantity + qt
                    }
                        : product)
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    cart: state.currentUser.cart.filter(product => product.product._id !== action.payload)
                },
                isAuth: true
            }
        case CLEAN_CART:
            return { ...state, currentUser: { ...state.currentUser, cart: [] } }
        default:
            return state
    }
}


export const setUser = (user, isAdmin) => ({ type: SET_USER, payload: { user, isAdmin } })
export const addToCart = cart => ({ type: ADD_TO_CART, payload: cart })
export const logout = () => ({ type: LOGOUT })
export const remove = id => ({ type: REMOVE_FROM_CART, payload: id })
export const changeQuantityInCart = (productId, type) => ({ type: CHANGE_QUANTITY, payload: { productId, type } })
export const cleanCart = () => ({ type: CLEAN_CART });
