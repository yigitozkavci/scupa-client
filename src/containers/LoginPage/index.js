import { connect } from 'react-redux';
import { requestAuthenticate, receiveUnauthorized, receiveAuthenticate, logout } from '../../actions/auth';
import LoginBox from '../../components/LoginBox'
import fetch from 'isomorphic-fetch';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.auth.isFetching
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (email, password) => {
      dispatch(requestAuthenticate());

      let loginData = {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        cache: 'default',
        body: `email=${email}&password=${password}`
      }

      fetch('http://localhost:4000/auth_user', loginData)
        .then(response => {
          if(response.status >= 400) {
            dispatch(receiveUnauthorized());
          } else {
            response.json()
              .then(resp => {
                dispatch(receiveAuthenticate(resp.auth_token));
              });
          }
        });
    },
    logout: () => {
      dispatch(logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);
