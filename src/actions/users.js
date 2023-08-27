import axios from 'axios'
import { setUser } from "../reducers/usersReducer";
import { setLoad, removeLoad } from '../reducers/loadReducer';
import { BASE_URL } from "../utils/constants";
import { getConfig } from '../utils/functions';

export const registration = ({ name, email, password }) => {
    return async dispatch => {
        try {
            let response = await axios.post(`${BASE_URL}/auth/reg`, {
                name,
                email,
                password
            })

            dispatch(setUser(response.data.user, response.data.isAdmin))

            localStorage.setItem('token', response.data.token)

        } catch (e) {
            console.log(e)
            return e.response.data;
        }
    }
}


export const login = ({ email, password }) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, {
                email,
                password
            })

            dispatch(setUser(response.data.user, response.data.isAdmin))

            localStorage.setItem('token', response.data.token)

        } catch (e) {
            console.log(e)
            return e.response.data;
        }
    }
}

export const auth = () => {
    return async dispatch => {
        dispatch(setLoad("auth"));
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${BASE_URL}/auth/`, getConfig());

                dispatch(setUser(response.data.user, response.data.isAdmin))

                localStorage.setItem('token', response.data.token)
            }
        } catch (e) {
            localStorage.removeItem('token')
        }
        dispatch(removeLoad("auth"));
    }
}


