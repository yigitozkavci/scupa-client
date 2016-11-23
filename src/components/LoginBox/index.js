import React from 'react';

const LoginBox = ({ token, authenticate }) => {
  return (
    <div>
      <p>Token: { token }</p>
      <button onClick={ () => authenticate('yigitozkavci8@gmail.com', '220513') }>Authenticate</button>
    </div>
  );
}

export default LoginBox;

