import { combineReducers } from 'redux';

const authenticate = (state = {
  isFetching: false,
  error: false,
  token: ''
}, action) => {
  switch(action.type) {
    case 'REQUEST_AUTHENTICATE':
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      })
    case 'RECEIVE_UNAUTHORIZED':
      return Object.assign({}, state, {
        isFetching: false,
        error: true
      })
      
    case 'RECEIVE_AUTHENTICATE':
      localStorage.setItem('auth_token', action.data.token);
      return Object.assign({}, state, {
        isFetching: false,
        error: false
      })
    default:
      return state;
  }
}

export default combineReducers([authenticate]);
