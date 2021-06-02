import {SALES_PRODUCT, ADD_PRODUCT, REMOVE_SINGLE_PRODUCT, CLEAR_SALE, REMOVE_PRODUCT} from './sale.types'

export const getSaleProduct = (product) => async dispatch => {
    dispatch({ type: SALES_PRODUCT, payload: product })
}

export const clearSale = () => async dispatch => {
    dispatch({ type: CLEAR_SALE })
}

export const addItem = (product) => async dispatch => {
    dispatch({ type: ADD_PRODUCT, payload: product})
};
  
export const removeItem = (product) => async dispatch => {
    dispatch({ type: REMOVE_PRODUCT, payload: product})
};
  
export const removeProduct = (id) => async dispatch => {
    dispatch({ type: REMOVE_SINGLE_PRODUCT, payload: id})
};
  
