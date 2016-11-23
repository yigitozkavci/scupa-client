import React from 'react';
import './style.css';

const LoginBox = ({ isAuthenticated, isFetching, authenticate, logout }) => {
  let email, password;
  let status = isAuthenticated ? 'Authenticated' : 'Not authenticated' ;
  let loadingSpinner;
  if(isFetching)
    loadingSpinner = (<span>Loading...</span>)
  return (
    <div>
      <p className={ isAuthenticated ? 'authenticated' : 'not-authenticated' }>{ status }</p>
      <button onClick={ () => authenticate(email.value, password.value) }>Authenticate</button>
      <button onClick={ logout }>Logout</button>
      { loadingSpinner }
      <h2>Login Form</h2>
      <input type="email" ref={ node => {
        email = node
      }} />
      <input type="password" ref={ node => {
        password = node
      }} />
    </div>
  );
}

export default LoginBox;

