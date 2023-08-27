import axios from 'axios'
import { setLoad, removeLoad } from '../reducers/loadReducer';
import { BASE_URL } from "../utils/constants";
import { setOrderReducer } from '../reducers/orderReducer';
import { cleanCart } from '../reducers/usersReducer';
import { getConfig } from '../utils/functions';

export const createOrder = (shipping) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${BASE_URL}/order/`, shipping, getConfig());

            dispatch(setOrderReducer(response.data));
            dispatch(cleanCart());

        } catch (e) {
            console.log(e)
        }
    }
}