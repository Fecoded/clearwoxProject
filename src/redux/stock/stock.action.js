import {
    GET_STOCK,
    CREATE_OUTLETSTOCK,
    STORE_PRODUCT,
    REMOVE_STOCK,
    CLEAR_STOCK,
    STOCK_ERROR,
    STORE_NAME,
    START_SPINNER
} from './stock.types'
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

const url = 'https://st-api.azurewebsites.net'

export const getOutletStock = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get(`${url}/purchase-items`);

        dispatch({
            type: GET_STOCK,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: STOCK_ERROR,
            payload: err.message
        })
    }

}

export const getStoreProduct = (product) => async dispatch => {
    dispatch({ type: STORE_PRODUCT, payload: product })
}
export const getStoreName = (name) => async dispatch => {
    dispatch({ type: STORE_NAME, payload: name })
}

export const createOutletStock = (formData) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        dispatch({ type: START_SPINNER })
        const res = await axios.post(`${url}/purchase-items`, formData, config)


        dispatch({
            type: CREATE_OUTLETSTOCK,
            payload: res.data,
        })

        formData.setQuantity('')

    } catch (err) {
        dispatch({
            type: STOCK_ERROR,
            payload: err.message
        })
    }
}

export const removeStock = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        await axios.delete(`${url}/purchase-items/${id}`);

        dispatch({
            type: REMOVE_STOCK,
            payload: id
        })

    } catch (err) {
        dispatch({
            type: STOCK_ERROR,
            payload: err.message
        })
    }
}

export const clearStock = () => dispatch => {
    dispatch({ type: CLEAR_STOCK })
}