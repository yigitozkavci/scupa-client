/// <reference path="typings.d.ts" />

let initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('auth_token'),
  error: false,
  isFetching: false
}

function auth(state = initialState, action: AuthAction) {
  switch(action.type) {
    case 'REQUEST_AUTHENTICATE':
      return Object.assign({}, state, {
        isFetching: true
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
        error: false,
        isAuthenticated: true
      })

    case 'LOGOUT':
      localStorage.removeItem('auth_token');
      return Object.assign({}, state, {
        isAuthenticated: false
      })

    default:
      return state;
  }
}

export default auth;

