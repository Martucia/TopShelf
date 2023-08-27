import axios from 'axios'
import { setLoad, removeLoad } from '../reducers/loadReducer';
import { createProductReducer, setProducts } from '../reducers/catalogReducer';
import { BASE_URL } from "../utils/constants";
import { setSearchProducts } from '../reducers/searchReducer';
import { getConfig } from '../utils/functions';

export const getProducts = (type, set, queryParams = '') => {
    return async dispatch => {
        try {
            const response = await axios.get(`${BASE_URL}/product/` + queryParams);

            if (type == "shelf" || type == "bests") {
                set(response.data);
            } else {
                dispatch(setProducts(response.data));
            }

        } catch (e) {
            console.log(e)
        }

    }
}

export const createProduct = (data) => {
    return async dispatch => {
        dispatch(setLoad("createProduct"));
        try {
            const response = await axios.post(`${BASE_URL}/product/create`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": 'multipart/form-data'
                    }
                });

            dispatch(createProductReducer(response.data));

        } catch (e) {
            console.log(e)
        }
        dispatch(removeLoad("createProduct"));
    }
}

export const getGroup = (type, set) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${BASE_URL}/product/group/${type}`); // ?type=+ type

            set(response.data);

        } catch (e) {
            console.log(e)
        }

    }
}

export const findProducts = (query, type) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${BASE_URL}/product/search?q=${query}`, getConfig());

            if (type == "onChange") {
                dispatch(setSearchProducts(response.data));
            } else {
                dispatch(setProducts(response.data));
            }

        } catch (e) {
            console.log(e)
        }
    }
}