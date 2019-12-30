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
  auth.isAuthenticated() && auth.isAdmin() ?
   <Component {...props} />
      : <Redirect to='/' />
)}
  />
);

export default AdminRoute;
