import { 
    START_SPINNER,
    GET_PRODUCT,
    GET_CATEGORIES, 
    GET_MANUFACTURERS,  
    GET_DEPARTMENT,
    GET_SERVICE,
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
    CREATE_CUSTOMER,
    CREATE_STAFF,
    CREATE_SUPPLIER,
    CREATE_OUTLET,
    CREATE_STORE,
    CREATE_INVENTORY,
    CREATE_STOCKADJUST,
    CREATE_EXPENSE,
    // CREATE_EXPENSES,
    CREATE_DESIGNATION,
    CREATE_ADJUSTMENTTYPE,
    UPDATE_CATEGORY, 
    UPDATE_PRODUCT, 
    UPDATE_SERVICE,
    UPDATE_MANUFACTURER,
    UPDATE_DEPARTMENT,
    UPDATE_CUSTOMER,
    UPDATE_STAFF,
    UPDATE_SUPPLIER,
    UPDATE_STORE,
    UPDATE_OUTLET,
    UPDATE_STOCKADJUST,
    UPDATE_EXPENSE,
    UPDATE_DESIGNATION,
    DELETE_CATEGORY, 
    DELETE_PRODUCT, 
    DELETE_SERVICE, 
    DELETE_MANUFACTURER,
    DELETE_DEPARTMENT,
    DELETE_CUSTOMER,
    DELETE_STAFF,
    DELETE_SUPPLIER,
    DELETE_STORE,
    DELETE_OUTLET,
    DELETE_STOCKADJUST,
    DELETE_EXPENSE,
    DELETE_DESIGNATION,
    FILTER_PRODUCT,
    FILTER_INVENTORY,
    FILTER_PRODUCTSTORE,
    SET_CURRENT,
    SHOW_ERROR, 
 } from './retail.types';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { clearStock } from '../stock/stock.action';
import Alert from './retail.utils';
import jwtDecode from 'jwt-decode'

const url = 'https://st-api.azurewebsites.net'

export const getproduct = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

    try {
        const res = await axios.get(`${url}/products`);

        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getservice = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

    try {
        const res = await axios.get(`${url}/services`);

        dispatch({
            type: GET_SERVICE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getCategories = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/categories`);

        dispatch({
            type: GET_CATEGORIES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getManufacturers = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/manufacturers`);

        dispatch({
            type: GET_MANUFACTURERS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getDepartments = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/departments`);

        dispatch({
            type: GET_DEPARTMENT,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getCustomers = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/customers`);

        dispatch({
            type: GET_CUSTOMER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getStaffs = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/staffs`);

        dispatch({
            type: GET_STAFF,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getSuppliers = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/suppliers`);

        dispatch({
            type: GET_SUPPLIER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getStores = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/stores`);

        dispatch({
            type: GET_STORE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getOutlets = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/outlets`);

        dispatch({
            type: GET_OUTLET,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getStockAdjust = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/adjust-types`);

        dispatch({
            type: GET_STOCKADJUST,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getPurchaseItem = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/purchase-items`);

        dispatch({
            type: GET_PURCHASEITEM,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getInventory = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get(`${url}/inventory`);

        dispatch({
            type: GET_INVENTORY,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getStoreProductId = ( id, hideModal ) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        dispatch({ type: START_SPINNER })
        const res = await axios.get(`${url}/inventory/store/${id}`);

        dispatch({
            type: GET_STOREPRODUCTBYID,
            payload: res.data
        })

        hideModal(window.$("#changeStoreModal").modal("hide"))
    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getExpensesItem = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {

        const res = await axios.get(`${url}/expense-items`)


        dispatch({
            type: GET_EXPENSESITEM,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getQualification = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {

        const res = await axios.get(`${url}/qualifications`)

        dispatch({
            type: GET_QUALIFICATION,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getDesignation = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {

        const res = await axios.get(`${url}/designations`)

        dispatch({
            type: GET_DESIGNATION,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getExpenses = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {

        const res = await axios.get(`${url}/expenses`)

        dispatch({
            type: GET_EXPENSES,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getSales = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {

        const res = await axios.get(`${url}/sales`)

        dispatch({
            type: GET_SALES,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const getStocks = () => async dispatch => {
    let token;
    token = localStorage.token
    
    if (token) {
        setAuthToken(localStorage.token);
    }

    const {outletid} = jwtDecode(token)

      try {
        const res = await axios.get(`${url}/inventory/outlet/${+outletid}`)

        dispatch({
            type: GET_STOCKS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: SHOW_ERROR,
            payload: err.message
        })
    }
}

export const createProduct = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/products`, formData, config);
  
        dispatch({
            type: CREATE_PRODUCT,
            payload: res.data,
        })

        Alert("Product was added successfully", 'success');
        formData.hideModal(window.$("#addproductModal").modal("hide"))
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#addproductModal").modal("hide"))
      }
}

export const createService = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/services`, formData, config);

        dispatch({
            type: CREATE_SERVICE,
            payload: res.data
        })

        Alert("Service was added successfully", 'success');
        formData.hideModal(window.$("#serviceModal").modal("hide"))
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#serviceModal").modal("hide"))
      }
}

export const createCategory = (formData) => async dispatch => {
    
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

        const res = await axios.post(`${url}/categories`, formData, config);
  
        dispatch({
            type: CREATE_CATEGORY,
            payload: res.data,
        })

        Alert("Category was added successfully", 'success')
        formData.hideModal(window.$("#addcategoryModal").modal("hide"))
       
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#addcategoryModal").modal("hide"))
      }
}

export const createManufacturer = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/manufacturers`, formData, config);

  
        dispatch({
            type: CREATE_MANUFACTURER,
            payload: res.data,
        })

        Alert("Manufacturer was added successfully", 'success')
        formData.hideModal(window.$("#addmanufacturerModal").modal("hide"))
       
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger')
      }
    }
export const createDepartment = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/departments`, formData, config);

  
        dispatch({
            type: CREATE_DEPARTMENT,
            payload: res.data,
        })

        Alert("Department was added successfully", 'success');
        formData.hideModal(window.$("#adddepartmentModal").modal("hide"))
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#adddepartmentModal").modal("hide"))
      }
}


export const createCustomer = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/customers`, formData, config);

  
        dispatch({
            type: CREATE_CUSTOMER,
            payload: res.data,
        })

        Alert("Customer was added successfully", 'success')
        formData.hideModal(window.$("#addcustomerModal").modal("hide"))
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

        Alert("Something went wrong", 'danger')
        formData.hideModal(window.$("#addcustomerModal").modal("hide"))
      }
}

export const createStaff = (formData) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }

      console.log(formData)
    
      try {
        dispatch({ type: START_SPINNER })
        const res = await axios.post(`${url}/staffs`, formData, config);

  
        dispatch({
            type: CREATE_STAFF,
            payload: res.data,
        })

        Alert("Staff was added successfully", 'success')
        formData.hideModal(window.$("#addstaffModal").modal("hide"))
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

        Alert("Something went wrong", 'danger')
        formData.hideModal(window.$("#addstaffModal").modal("hide"))
      }
}

export const createSupplier = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/suppliers`, formData, config);

  
        dispatch({
            type: CREATE_SUPPLIER,
            payload: res.data,
        })

        // Alert("Supplier was added successfully", 'success'));

        Alert("Supplier was added successfully", "success");
        formData.hideModal(window.$("#addsupplierModal").modal("hide"))
       
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger')
          formData.hideModal(window.$("#addsupplierModal").modal("hide"))
      }
}

export const createStore = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/stores`, formData, config);

  
        dispatch({
            type: CREATE_STORE,
            payload: res.data
        })

        Alert("Store was added successfully", 'success');
        formData.hideModal(window.$("#addStoreModal").modal("hide"))
        formData.setDescription('')

        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })


          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#addStoreModal").modal("hide"))
      }
}

export const createOutlet = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/outlets`, formData, config);

  
        dispatch({
            type: CREATE_OUTLET,
            payload: res.data,
        })

        Alert("Outlet was added successfully", 'success');
        formData.hideModal(window.$("#addOutletModal").modal("hide"))
        formData.setDescription('')
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#addOutletModal").modal("hide"))
      }
}

export const createInventory = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/inventory/purchase`, formData, config);

  
        dispatch({
            type: CREATE_INVENTORY,
            // payload: res.data,
        })

        Alert(res.data, 'success');
        dispatch(clearStock())
        formData.setHide(false)
       
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
          Alert("Something went wrong", 'danger');
      }
}

export const createAdjustmentType = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/adjust-types`, formData, config);
        
  
        dispatch({
            type: CREATE_ADJUSTMENTTYPE,
            payload: res.data,
        })

        Alert("Stock added successfully", 'success');
        formData.hideModal(window.$("#addstockAdjustsModal").modal("hide"))
        formData.setDescription('')
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#addstockAdjustsModal").modal("hide"))
      }
}

export const createStockAdjust = (formData) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }

      console.log(formData)
    
      try {
        dispatch({ type: START_SPINNER })
        const res = await axios.post(`${url}/inventory/adjust`, formData, config);
        
  
        dispatch({
            type: CREATE_STOCKADJUST,
            payload: res.data,
        })

        Alert("Stock Adjusted successfully", 'success');
        formData.hideModal(window.$("#addadjustmentTypeModal").modal("hide"))
        formData.setAdjustBy('')
        formData.setRemark('')
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#addadjustmentTypeModal").modal("hide"))
      }
}

export const createExpenseItem = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/expense-items`, formData, config);
        
  
        dispatch({
            type: CREATE_EXPENSE,
            payload: res.data,
        })

        Alert("Expense was added successfully", 'success');
        formData.hideModal(window.$("#addexpenseModal").modal("hide"))
        formData.setDescription('')
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#addexpenseModal").modal("hide"))
      }
}

export const createExpense = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/expenses`, formData, config);
        
  
        // dispatch({
        //     type: CREATE_EXPENSES,
        //     payload: res.data,
        // })

        Alert(res.data, 'success');
        formData.hideModal(window.$("#addexpensesModal").modal("hide"))
        formData.setAmount('')
        formData.setQuantity('')
        formData.setPrice('')
        formData.setAmount('')
        formData.setRef('')

        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#addexpensesModal").modal("hide"))
      }
}

export const createDesignation = (formData) => async dispatch => {
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
        const res = await axios.post(`${url}/designations`, formData, config);
        
  
        dispatch({
            type: CREATE_DESIGNATION,
            payload: res.data,
        })

        Alert("designation was added successfully", 'success');
        formData.hideModal(window.$("#adddesignationModal").modal("hide"))
        formData.setDescription('')
        } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#adddesignationModal").modal("hide"))
      }
}

export const updateProduct = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/products/${formData.id}`, formData, config);

  
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data,
        })

        Alert("Product was updated successfully", 'success');
        formData.hideModal(window.$("#editproductModal").modal("hide"))
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editproductModal").modal("hide"))
      }
}

export const updateService = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/services/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_SERVICE,
            payload: res.data,
        })

        Alert("Service was updated successfully", 'success');
        formData.hideModal(window.$("#editproductModal").modal("hide"))
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editproductModal").modal("hide"))
      }
}

export const updateCategory = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/categories/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_CATEGORY,
            payload: res.data,
        })

        Alert("Category was updated successfully", 'success');
        formData.hideModal(window.$("#editcategoryModal").modal("hide"));
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editcategoryModal").modal("hide"));
      }
}

export const updateManufacturer = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/manufacturers/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_MANUFACTURER,
            payload: res.data,
        })

        Alert("Manufacturer was updated successfully", 'success');
        formData.hideModal(window.$("#editmanufacturerModal").modal("hide"))

          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
      }
}

export const updateDepartment = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/departments/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_DEPARTMENT,
            payload: res.data
        })

        Alert("Department was updated successfully", 'success');
        formData.hideModal(window.$("#editdepartmentModal").modal("hide"))
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editdepartmentModal").modal("hide"))
      }
}

export const updateCustomer = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/customers/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_CUSTOMER,
            payload: res.data
        })

        Alert("Customer was updated successfully", 'success');
        formData.hideModal(window.$("#editcustomerModal").modal("hide"))
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message,
              
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editcustomerModal").modal("hide"))
      }
}

export const updateStaff = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/staffs/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_STAFF,
            payload: res.data
        })

        Alert("Staff was updated successfully", 'success');
        formData.hideModal(window.$("#editstaffModal").modal("hide"))
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message,
              
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editstaffModal").modal("hide"))
      }
}
export const updateSupplier = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/suppliers/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_SUPPLIER,
            payload: res.data
        })

        Alert("Supplier was updated successfully", 'success');
        
        formData.hideModal(window.$("#editsupplierModal").modal("hide"))
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editsupplierModal").modal("hide"))
      }
}
export const updateStore = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/stores/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_STORE,
            payload: res.data
        })

        Alert("Store was updated successfully", 'success');
        formData.hideModal(window.$("#editStoreModal").modal("hide"))
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editStoreModal").modal("hide"))
      }
}
export const updateOutlet = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/outlets/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_OUTLET,
            payload: res.data
        })

        Alert("Outlet was updated successfully", 'success');
        formData.hideModal(window.$("#editOutletModal").modal("hide"))
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editOutletModal").modal("hide"))
      }
}

export const updateStockAdjust = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/adjust-types/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_STOCKADJUST,
            payload: res.data
        })

        Alert("Stock was updated successfully", 'success');
        formData.hideModal(window.$("#editstockAdjustsModal").modal("hide"))
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editstockAdjustsModal").modal("hide"))
      }
}

export const updateExpense = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/expense-items/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_EXPENSE,
            payload: res.data
        })

        Alert("Expense was updated successfully", 'success');
        formData.hideModal(window.$("#editexpenseModal").modal("hide"))
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editexpenseModal").modal("hide"))
      }
}

export const updateDesignation = (formData) => async dispatch => {
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
        const res = await axios.put(`${url}/designations/${formData.id}`, formData, config);
  
        dispatch({
            type: UPDATE_DESIGNATION,
            payload: res.data
        })

        Alert("Expense was updated successfully", 'success');
        formData.hideModal(window.$("#editdesignationModal").modal("hide"))
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Something went wrong", 'danger');
          formData.hideModal(window.$("#editdesignationModal").modal("hide"))
      }
}

export const deleteCategory = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/categories/${id}`);
  
        dispatch({
            type: DELETE_CATEGORY,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Category cannot be deleted because of attached items", 'danger');
      }
}

export const deleteProduct = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/products/${id}`);
  
        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
      }
}

export const deleteService = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/services/${id}`);
  
        dispatch({
            type: DELETE_SERVICE,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
      }
}

export const deleteManufacturer = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/manufacturers/${id}`);
  
        dispatch({
            type: DELETE_MANUFACTURER,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Manufacturer cannot be deleted because of attached items", 'danger');
      }
}

export const deleteDepartment = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/departments/${id}`);
  
        dispatch({
            type: DELETE_DEPARTMENT,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
      }
}

export const deleteSupplier = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/suppliers/${id}`);
  
        dispatch({
            type: DELETE_SUPPLIER,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Supplier cannot be deleted because of attached items", 'danger');
      }
}

export const deleteCustomer = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/customers/${id}`);
  
        dispatch({
            type: DELETE_CUSTOMER,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
      }
}

export const deleteStaff = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/staffs/${id}`);
  
        dispatch({
            type: DELETE_STAFF,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
      }
}

export const deleteStore = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/stores/${id}`);
  
        dispatch({
            type: DELETE_STORE,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })

          Alert("Store cannot be deleted because of attached items", 'danger');
      }
}

export const deleteOutlet = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/outlets/${id}`);
  
        dispatch({
            type: DELETE_OUTLET,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
      }
}

export const deleteExpense = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/expense-items/${id}`);
  
        dispatch({
            type: DELETE_EXPENSE,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
      }
}

export const deleteStockAdjust = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/adjust-types/${id}`);
  
        dispatch({
            type: DELETE_STOCKADJUST,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
      }
}

export const deleteDesignation = (id) => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
         await axios.delete(`${url}/designations/${id}`);
  
        dispatch({
            type: DELETE_DESIGNATION,
            payload: id
        })
          
      } catch (err) {
          dispatch({
              type: SHOW_ERROR,
              payload: err.message
          })
      }
}


export const setCurrent = (item) => dispatch => {
    dispatch({ type: SET_CURRENT, payload: item})
}

export const filterProduct = (text) => (dispatch) => {
    dispatch({ type: FILTER_PRODUCT, payload: text });
  };

export const filterInventory = (text) => (dispatch) => {
    dispatch({ type: FILTER_INVENTORY, payload: text });
  };

export const filterProductStore = (text) => (dispatch) => {
    dispatch({ type: FILTER_PRODUCTSTORE, payload: text });
  };