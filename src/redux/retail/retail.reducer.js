import { 
    START_SPINNER,
    GET_PRODUCT, 
    GET_SERVICE, 
    GET_CATEGORIES,
    GET_MANUFACTURERS,  
    GET_DEPARTMENT,
    GET_CUSTOMER,
    GET_STAFF,
    GET_SUPPLIER,
    GET_OUTLET,
    GET_STORE,
    GET_STOCKADJUST,
    GET_PURCHASEITEM,
    GET_INVENTORY,
    GET_STOREPRODUCTBYID,
    GET_EXPENSES,
    GET_EXPENSESITEM,
    GET_QUALIFICATION,
    GET_DESIGNATION,
    GET_STOCKS,
    GET_SALES,
    CREATE_PRODUCT, 
    CREATE_SERVICE, 
    CREATE_CATEGORY,
    CREATE_MANUFACTURER, 
    CREATE_DEPARTMENT,
    CREATE_SUPPLIER,
    CREATE_CUSTOMER,
    CREATE_STAFF,
    CREATE_STORE,
    CREATE_OUTLET,
    CREATE_INVENTORY,
    CREATE_STOCKADJUST,
    CREATE_EXPENSE,
    CREATE_DESIGNATION,
    CREATE_ADJUSTMENTTYPE,
    UPDATE_CATEGORY,
    UPDATE_MANUFACTURER,
    UPDATE_PRODUCT,
    UPDATE_SERVICE,
    UPDATE_DEPARTMENT,
    UPDATE_SUPPLIER,
    UPDATE_CUSTOMER,
    UPDATE_STAFF,
    UPDATE_OUTLET,
    UPDATE_STORE,
    UPDATE_EXPENSE,
    UPDATE_STOCKADJUST,
    UPDATE_DESIGNATION,
    DELETE_CATEGORY,
    DELETE_PRODUCT,
    DELETE_SERVICE,
    DELETE_MANUFACTURER,
    DELETE_DEPARTMENT,
    DELETE_SUPPLIER,
    DELETE_CUSTOMER,
    DELETE_STAFF,
    DELETE_STORE,
    DELETE_OUTLET,
    DELETE_STOCKADJUST,
    DELETE_DESIGNATION,
    FILTER_PRODUCT,
    FILTER_INVENTORY,
    FILTER_PRODUCTSTORE,
    SET_CURRENT,
    SHOW_ERROR,
    DELETE_EXPENSE,
} from './retail.types';

const initialState = {
    productItems: [],
    categoryItems: [],
    manufacturerItems: [],
    departmentItems: [],
    serviceItems: [],
    stores: [],
    sales: [],
    outlets: [],
    customers: [],
    staffs: [],
    suppliers: [],
    inventories: [],
    stockAdjusts: [],
    stocks: [],
    adjustmentTypes: [],
    storeProducts: [],
    expenseItems: [],
    expenses: [],
    qualifications: [],
    designations: [],
    statusCode: null,
    current: null,
    filtered: null,
    loading: false,
    error: {}
}

const Product = (state = initialState, action) => {
    const {type, payload } = action
    switch(type){
        case START_SPINNER: 
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCT:
            return {
                ...state,
                productItems: payload,
                loading: false
            }
        case GET_SERVICE:
            return {
                ...state,
                serviceItems: payload,
                loading: false
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categoryItems: payload,
                loading: false
            }
        case GET_MANUFACTURERS:
            return {
                ...state,
                manufacturerItems: payload,
                loading: false
            }
        case GET_DEPARTMENT:
            return {
                ...state,
                departmentItems: payload,
                loading: false
            }
        case GET_CUSTOMER:
            return {
                ...state,
                customers: payload,
                loading: false
            }
        case GET_STAFF:
            return {
                ...state,
                staffs: payload,
                loading: false
            }
        case GET_SUPPLIER:
            return {
                ...state,
                suppliers: payload,
                loading: false
            }
        case GET_STORE:
            return {
                ...state,
                stores: payload,
                loading: false
            }
        case GET_SALES:
            return {
                ...state,
                sales: payload,
                loading: false
            }
        case GET_OUTLET:
            return {
                ...state,
                outlets: payload,
                loading: false
            }
        case GET_STOCKADJUST:
            return {
                ...state,
                stockAdjusts: payload,
                loading: false
            }
        case GET_PURCHASEITEM:
            return {
                ...state,
                purchaseItems: payload,
                loading: false
            }
        case GET_INVENTORY:
            return {
                ...state,
                inventories: payload,
                loading: false
            }
        case GET_STOREPRODUCTBYID: 
            return {
                ...state,
                storeProducts: payload,
                loading: false
            }  
        case GET_EXPENSESITEM:
            return {
                ...state,
                expenseItems: payload,
                loading: false
            }
        case GET_EXPENSES:
            return {
                ...state,
                expenses: payload,
                loading: false
            }
        case GET_QUALIFICATION:
            return {
                ...state,
                qualifications: payload,
                loading: false
            }
        case GET_DESIGNATION:
            return {
                ...state,
                designations: payload,
                loading: false
            }
        case GET_STOCKS:
            return {
                ...state,
                stocks: payload,
                loading: false
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                productItems: [payload, ...state.productItems],
                loading: false
            }
        case CREATE_SERVICE:
            return {
                ...state,
                serviceItems: [payload, ...state.serviceItems],
                loading: false
            }
        case CREATE_CATEGORY:
            return {
                ...state,
                categoryItems: [...state.categoryItems, payload],
                loading: false
            }
        case CREATE_MANUFACTURER:
            return {
                ...state,
                manufacturerItems: [...state.manufacturerItems, payload],
                loading: false
            }
        case CREATE_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, payload],
                loading: false
            }
        case CREATE_STAFF:
            return {
                ...state,
                staffs: [...state.staffs, payload],
                loading: false
            }
        case CREATE_SUPPLIER:
            return {
                ...state,
                suppliers: [...state.suppliers, payload],
                loading: false
            }
        case CREATE_DEPARTMENT:
            return {
                ...state,
                departmentItems: [...state.departmentItems, payload],
                loading: false
            }
        case CREATE_OUTLET:
            return {
                ...state,
                outlets: [...state.outlets, payload],
                loading: false
            }
        case CREATE_STORE:
            return {
                ...state,
                stores: [...state.stores, payload],
                loading: false
            }
        case CREATE_INVENTORY:
            return {
                ...state,
                inventories: [...state.inventories, payload],
                loading: false
            }
        case CREATE_ADJUSTMENTTYPE:
            return {
                ...state,
                adjustmentTypes: [...state.adjustmentTypes, payload],
                loading: false
            }
        case CREATE_STOCKADJUST:
            return {
                ...state,
                stockAdjusts: [...state.stockAdjusts, payload],
                loading: false
            }
        case CREATE_EXPENSE:
            return {
                ...state,
                expenseItems: [...state.expenseItems, payload],
                loading: false
            }
        case CREATE_DESIGNATION:
            return {
                ...state,
                designations: [...state.designations, payload],
                loading: false
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                productItems: state.productItems.map((productItem) => productItem.id === payload.id ? payload : productItem),
                loading: false
            }
        case UPDATE_SERVICE:
            return {
                ...state,
                serviceItems: state.serviceItems.map((serviceItem) => serviceItem.id === payload.id ? payload : serviceItem),
                loading: false
            }
        case UPDATE_MANUFACTURER:
            return {
                ...state,
                manufacturerItems: state.manufacturerItems.map((manufacturerItem) => manufacturerItem.id === payload.id ? payload : manufacturerItem),
                loading: false
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                categoryItems: state.categoryItems.map((categoryItem) => categoryItem.id === payload.id ? payload : categoryItem),
                loading: false
            }
        case UPDATE_DEPARTMENT:
            return {
                ...state,
                departmentItems: state.departmentItems.map((departmentItem) => departmentItem.id === payload.id ? payload : departmentItem),
                loading: false
            }
        case UPDATE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.map((customer) => customer.id === payload.id ? payload : customer),
                loading: false
            }
        case UPDATE_STAFF:
            return {
                ...state,
                staffs: state.staffs.map((staff) => staff.id === payload.id ? payload : staff),
                loading: false
            }
        case UPDATE_SUPPLIER:
            return {
                ...state,
                suppliers: state.suppliers.map((supplier) => supplier.id === payload.id ? payload : supplier),
                loading: false
            }
        case UPDATE_STORE:
            return {
                ...state,
                stores: state.stores.map((store) => store.id === payload.id ? payload : store),
                loading: false
            }
        case UPDATE_OUTLET:
            return {
                ...state,
                outlets: state.outlets.map((outlet) => outlet.id === payload.id ? payload : outlet),
                loading: false
            }
        case UPDATE_STOCKADJUST:
            return {
                ...state,
                stockAdjusts: state.stockAdjusts.map((stock) => stock.id === payload.id ? payload : stock),
                loading: false
            }
        case UPDATE_EXPENSE:
            return {
                ...state,
                expenseItems: state.expenseItems.map((expenseItem) => expenseItem.id === payload.id ? payload : expenseItem),
                loading: false
            }
        case UPDATE_DESIGNATION:
            return {
                ...state,
                designations: state.designations.map((designation) => designation.id === payload.id ? payload : designation),
                loading: false
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categoryItems: state.categoryItems.filter(categoryItem => categoryItem.id !== payload),
                loading: false
            }
        case DELETE_SERVICE:
            return {
                ...state,
                serviceItems: state.serviceItems.filter(serviceItem => serviceItem.id !== payload),
                loading: false
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                productItems: state.productItems.filter(productItem => productItem.id !== payload),
                loading: false
            }
        case DELETE_MANUFACTURER:
            return {
                ...state,
                manufacturerItems: state.manufacturerItems.filter(manufacturerItem => manufacturerItem.id !== payload),
                loading: false
            }
        case DELETE_DEPARTMENT:
            return {
                ...state,
                departmentItems: state.departmentItems.filter(departmentItem => departmentItem.id !== payload),
                loading: false
            }
        case DELETE_SUPPLIER:
            return {
                ...state,
                suppliers: state.suppliers.filter(supplier => supplier.id !== payload),
                loading: false
            }
        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== payload),
                loading: false
            }
        case DELETE_STAFF:
            return {
                ...state,
                staffs: state.staffs.filter(staff => staff.id !== payload),
                loading: false
            }
        case DELETE_STORE:
            return {
                ...state,
                stores: state.stores.filter(store => store.id !== payload),
                loading: false
            }
        case DELETE_OUTLET:
            return {
                ...state,
                outlets: state.outlets.filter(outlet => outlet.id !== payload),
                loading: false
            }
        case DELETE_STOCKADJUST:
            return {
                ...state,
                stockAdjusts: state.stockAdjusts.filter(stock => stock.id !== payload),
                loading: false
            }
        case DELETE_EXPENSE:
            return {
                ...state,
                expenseItems: state.expenseItems.filter(expenseItem => expenseItem.id !== payload),
                loading: false
            }
        case DELETE_DESIGNATION:
            return {
                ...state,
                designations: state.designations.filter(designation => designation.id !== payload),
                loading: false
            }
        case FILTER_PRODUCT:
            return {
                ...state,
                filtered: state.productItems.filter(productItem => {
                    const regex = new RegExp(`${payload}`, 'gi');
                    return (productItem.description.match(regex || productItem.generic.match(regex)))
                }),
                loading: false
            }
        case FILTER_INVENTORY:
            return {
                ...state,
                filtered: state.inventories.filter(inventory => {
                    const regex = new RegExp(`${payload}`, 'gi');
                    return (inventory.description.match(regex))
                }),
                loading: false
            }
        case FILTER_PRODUCTSTORE:
            return {
                ...state,
                filtered: state.storeProducts.filter(product => {
                    const regex = new RegExp(`${payload}`, 'gi');
                    return product.description.match(regex)
                }),
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: payload,
                loading: false
            } 
        case SHOW_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}

export default Product