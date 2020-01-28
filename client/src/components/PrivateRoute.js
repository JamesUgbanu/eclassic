import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from '../Auth/Auth';

const auth = new Auth();

const PrivateRoute = ({ 
    component: Component,
    ...rest 
}) => (
  <Route
    {...rest}
    render={props => (
  auth.isAuthenticated() ?
   <Component auth={auth} {...props} />
      :  (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}
        />
      )
)}
  />
);

export default PrivateRoute;
