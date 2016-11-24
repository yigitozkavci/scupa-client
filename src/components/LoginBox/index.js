import React from 'react';
import './style.css';

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
      </div>
    </div>
  );
}

export default LoginBox;

