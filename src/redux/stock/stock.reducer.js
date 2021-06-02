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


const initialState = {
    stocks: [],
    name: null,
    loading: false
}

const Stock = (state = initialState, action) => {
    const { payload, type} = action
    switch(type){
        case START_SPINNER: {
            return{
                ...state,
                loading: true
            }
        }
        case GET_STOCK:
            return {
                ...state,
                stocks: payload
            }
        case CREATE_OUTLETSTOCK:
            return {
                ...state,
                stocks: payload,
                loading: false
            }
        case STORE_PRODUCT:
            return {
                ...state,
                stocks: state.stocks.map((stock) => stock.description === payload.description ? payload : stock),
                loading: false
            }
        case STORE_NAME:
            return {
                ...state,
                name: payload,
                loading: false
            }
        case REMOVE_STOCK:
            return {
                ...state,
                stocks: state.stocks.filter(stock => stock.id !== payload)
            }
        case CLEAR_STOCK:
        case STOCK_ERROR:
            return {
                ...state,
                stocks: []
            }
        
        default:
            return state
    }
}

export default Stock