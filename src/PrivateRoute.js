import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = localStorage.getItem('isLogin');
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to='/login' />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
