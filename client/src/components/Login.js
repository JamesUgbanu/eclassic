import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <div className="product__container">
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

Login.propTypes = {
  isAuthenticated: PropTypes.func,
  login: PropTypes.func,
  auth: PropTypes.object
};

export default Login;
