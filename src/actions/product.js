import axios from 'axios'
import { setLoad, removeLoad } from '../reducers/loadReducer';
import { setProductReducer } from '../reducers/productReducer';
import { BASE_URL } from "../utils/constants";
import { getConfig } from '../utils/functions';

export const getProduct = (id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${BASE_URL}/product/${id}`, getConfig());

            dispatch(setProductReducer(response.data.product));

        } catch (e) {
            console.log(e)
        }
    }
}



