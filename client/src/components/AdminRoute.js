import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from '../Auth/Auth';

const auth = new Auth();

const AdminRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      auth.isAuthenticated() && auth.isAdmin(localStorage.getItem('id_token'))
        ? <Component {...props} />
        : (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}
          />
        )
    )}
  />
);

export default AdminRoute;
