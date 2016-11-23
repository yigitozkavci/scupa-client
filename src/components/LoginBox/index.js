import React from 'react';
import './style.css';

const LoginBox = ({ isAuthenticated, authenticate, logout }) => {
  let email, password;
  let status = isAuthenticated ? 'Authenticated' : 'Not authenticated' 

  return (
    <div>
      <p>Token: { status }</p>
      <button onClick={ () => authenticate(email.value, password.value) }>Authenticate</button>
      <button onClick={ logout }>Logout</button>
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

