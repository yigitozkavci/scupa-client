import React from 'react';
import './style.scss';
import { Col } from 'react-bootstrap';

const LoginBox = ({ isAuthenticated, isFetching, authenticate, logout }) => {
  let email, password;
  let status = isAuthenticated ? 'Authenticated' : 'Not authenticated' ;
  let loadingSpinner;
  if(isFetching)
    loadingSpinner = (<span>Loading...</span>)
  let authButton = 
    isAuthenticated
      ? <button onClick={ logout }>Logout</button>
      : <button onClick={ () => authenticate(email.value, password.value) }>Authenticate</button>
  return (
    <div className="loginbox-container">
      <div className="loginbox">
        <Col xs={12} md={6} mdOffset={3}>
          <h2>Login Form</h2>
          <input className="form-control" type="email" ref={ node => {
            email = node
          }} />
          <input className="form-control" type="password" ref={ node => {
            password = node
          }} />
          <p>
            { authButton }
          </p>
          { loadingSpinner }
          <p className={ isAuthenticated ? 'authenticated' : 'not-authenticated' }>{ status }</p>
        </Col>
      </div>
    </div>
  );
}

export default LoginBox;


