import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './user.types';
import axios from 'axios';
import Alert from '../retail/retail.utils';
  
 
const url = 'https://st-api.azurewebsites.net'
  // USER LOGIN
export const login = ({ username, password, setLoading }) => async (dispatch) => {
   
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const body = JSON.stringify({ username, password });
  
    try {
    
      setLoading(true)
      const res = await axios.post(`${url}/login`, body, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
  
    } catch (err) {
  
      dispatch({
        type: LOGIN_FAIL,
        payload: err.message,
      });

      Alert('Invalid Credentials', "danger");
      setLoading(false)
    }
  };

  // LOGOUT
export const logout = () => (dispatch) => dispatch({ type: LOGOUT });