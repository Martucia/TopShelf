import axios from 'axios'
import { addToCart, remove, changeQuantityInCart } from "../reducers/usersReducer";
import { setLoad, removeLoad } from '../reducers/loadReducer';
import { BASE_URL } from "../utils/constants";
import { getConfig } from '../utils/functions';

export const toCart = (productId, quantity) => {
    return async dispatch => {
        dispatch(setLoad("toCart"));
        try {
            const response = await axios.post(`${BASE_URL}/auth/cart`, {
                productId,
                quantity
            }, getConfig());

            dispatch(addToCart(response.data));

        } catch (e) {
            console.log(e)
        }
        dispatch(removeLoad("toCart"));
    }
}

export const removeFromCart = (productId) => {
    return async dispatch => {
        dispatch(setLoad("toCart"));
        try {
            const response = await axios.delete(`${BASE_URL}/auth/cart/${productId}`, getConfig());

            dispatch(remove(response.data));

        } catch (e) {
            console.log(e)
        }
        dispatch(removeLoad("toCart"));
    }
}

export const changeQuantity = (productId, type) => {
    return async dispatch => {
        try {
            if (type == "plus") {
                await axios.post(`${BASE_URL}/auth/cart`, {
                    productId
                }, getConfig());
            } else {
                await axios.put(`${BASE_URL}/auth/cart`, {
                    productId
                }, getConfig());
            }

            dispatch(changeQuantityInCart(productId, type));

        } catch (e) {
            console.log(e)
        }
    }
}