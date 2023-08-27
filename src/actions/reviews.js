import axios from 'axios'
import { setLoad, removeLoad } from '../reducers/loadReducer';
import { addReviewReducer, editReviewReducer } from '../reducers/productReducer';
import { setReviewsReducer } from '../reducers/reviewsReducer';
import { BASE_URL } from "../utils/constants";
import { getConfig } from '../utils/functions';

export const getReviews = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${BASE_URL}/review/`);

            dispatch(setReviewsReducer(response.data));

        } catch (e) {
            console.log(e)
        }
    }
}

export const addReview = (productId, text, mark) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${BASE_URL}/review/${productId}`, { text, mark }, getConfig());

            dispatch(addReviewReducer(response.data));
        } catch (e) {
            console.log(e)
        }
    }
}

export const editReview = (id, text, mark) => {
    return async dispatch => {
        try {
            const response = await axios.patch(`${BASE_URL}/review/${id}`, { text, mark }, getConfig());

            dispatch(editReviewReducer(response.data));
        } catch (e) {
            console.log(e)
        }
    }
}