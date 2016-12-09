/// <reference path="../typings.d.ts" />

import { connect } from 'react-redux';
import { requestAuthenticate, receiveUnauthorized, receiveAuthenticate, logout } from './actions';
import LoginBox from './LoginBox'
import * as fetch from 'isomorphic-fetch';
const mapStateToProps = (state: State) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.auth.isFetching
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    authenticate: (email: string, password: string) => {
      dispatch(requestAuthenticate());

      let loginData: RequestInit = {
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
