import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <div>
        { !isAuthenticated() && (
          <div className="login__box"><h1>Login to continue</h1>
        <button className="login__btn" onClick={login}>Login</button>
        </div>
        )
  }
      </div>
    );
  }
}

export default Login;
