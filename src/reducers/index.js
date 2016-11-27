const authenticate = (state = {
  isFetching: false,
  error: false,
  isAuthenticated: false,
  schools: []
}, action) => {
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

    case 'START_SCHOOLS_INDEX':
      return Object.assign({}, state, {
        ifFetching: true
      })

    case 'SUCCESS_SCHOOLS_INDEX':
      return Object.assign({}, state, {
        ifFetching: false,
        schools: action.data
      })

    case 'FAIL_SCHOOLS_INDEX':
      return Object.assign({}, state, {
        ifFetching: false,
        error: true
      })

    default:
      return state;
  }
}

export default authenticate;
