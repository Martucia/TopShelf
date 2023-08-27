import axios from 'axios'
import { BASE_URL } from "../utils/constants";
import { setCategoriesReducer } from '../reducers/categoryReducer'
import { setLoad, removeLoad } from '../reducers/loadReducer';

export const getCategories = () => {
    return async dispatch => {
        dispatch(setLoad("getCategories"));
        try {
            const response = await axios.get(`${BASE_URL}/category/`);

            dispatch(setCategoriesReducer(response.data));

        } catch (e) {
            console.log(e)
        }
        dispatch(removeLoad("getCategories"));
    }
}