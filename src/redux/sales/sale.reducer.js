import {SALES_PRODUCT, ADD_PRODUCT, CLEAR_SALE, REMOVE_SINGLE_PRODUCT, REMOVE_PRODUCT} from './sale.types'
import {addSaleProduct, addItemToCart, removeItemFromCart} from './sale.utils'

const INITIALSTATE = {
    sales: [],
    loading: false
}


const SaleReducer = (state = INITIALSTATE, action) => {
    const {type, payload} = action
    switch(type){
        case SALES_PRODUCT:
            return {
                ...state,
                sales: addSaleProduct(state.sales, payload),
                loading: false
            }
        case ADD_PRODUCT:
            return {
                ...state,
                sales: addItemToCart(state.sales, payload),
                loading: false
            }
        case CLEAR_SALE:
            return {
                ...state,
                sales: [],
                loading: false
            }
        case REMOVE_SINGLE_PRODUCT:
            return {
                ...state,
                sales: state.sales.filter((sale) => sale.id !== payload),
                loading: false
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                sales: removeItemFromCart(state.sales, payload),
                loading: false
            }
        default: 
            return state
    }
}

export default SaleReducer