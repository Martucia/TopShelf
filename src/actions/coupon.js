import axios from 'axios'
import { BASE_URL } from "../utils/constants";
import { setLoad, removeLoad } from '../reducers/loadReducer';
import { getConfig } from '../utils/functions';
import { setCoupons } from '../reducers/couponsReducer';

export const createCoupon = (data) => {
    return async dispatch => {
        dispatch(setLoad("createCoupon"));
        try {
            const response = await axios.post(`${BASE_URL}/coupon/`, data, getConfig());

            dispatch(createCopontReducer(response.data));

        } catch (e) {
            console.log(e)
        }
        dispatch(removeLoad("createCoupon"));
    }
}

export const useCoupon = (text, setError, setCoupon) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${BASE_URL}/coupon/${text}`, getConfig());

            setCoupon(response.data);

        } catch (e) {
            console.log(e)
            setError(e.response.data.message)
        }
    }
}

export const getCoupons = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${BASE_URL}/coupon`, getConfig());

            dispatch(setCoupons(response.data));

        } catch (e) {
            console.log(e)
            setError(e.response.data.message)
        }
    }
}