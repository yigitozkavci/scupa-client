import * as React from 'react';
import './style.scss';
import { Col } from 'react-bootstrap';

interface ILoginBoxProps {
  isAuthenticated: boolean;
  isFetching: boolean;
  authenticate: (email: string, password: string) => void;
  logout: () => void;
}

// We don't need state here. Just to demonstrate.
interface ILoginBoxState {

}

class LoginBox extends React.Component<ILoginBoxProps, ILoginBoxState> {
  render() {
    let authStatus = this.props.isAuthenticated ? 'Authenticated' : 'Not authenticated' ;
    let loadingSpinner: any;
    let email: HTMLInputElement;
    let password: HTMLInputElement;
    if(this.props.isFetching)
      loadingSpinner = (<span>Loading...</span>)
    let authButton =
      this.props.isAuthenticated
        ? <button onClick={ this.props.logout }>Logout</button>
        : <button onClick={ () => this.props.authenticate(email.value, password.value) }>Authenticate</button>

    let loginFields: JSX.Element;
    if(this.props.isAuthenticated) {
      loginFields = <div className="login-fields"></div>
    } else {
      loginFields =
        <div className="login-fields">
          <input className="form-control" type="email" ref={ node => {
            email = node
          }} />
          <input className="form-control" type="password" ref={ node => {
            password = node
          }} />
        </div>
    }
    return (
      <div className="loginbox-container">
        <div className="loginbox">
          <Col xs={12} md={6} mdOffset={3}>
            <h2>Login Form</h2>
            { loginFields }
            <p> { authButton } </p>
            { loadingSpinner }
            <p className={ this.props.isAuthenticated ? 'authenticated' : 'not-authenticated' }>{ authStatus }</p>
          </Col>
        </div>
      </div>
    );
  }
}

export default LoginBox;
