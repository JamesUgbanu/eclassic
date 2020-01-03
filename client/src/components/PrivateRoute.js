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
   <Component {...props} />
      : <Redirect to='/login' />
)}
  />
);

export default PrivateRoute;
