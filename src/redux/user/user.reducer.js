import { LOGIN_SUCCESS, LOGIN_FAIL, SPINNER, LOGOUT } from './user.types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
  };
  
  const Reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case SPINNER: 
      return {
          ...state,
          loading: true
      }
      case LOGIN_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
        };
      default:
        return state;
    }
  };

  export default Reducer;