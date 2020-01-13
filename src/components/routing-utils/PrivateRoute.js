import React from 'react';

import { Route, Redirect } from 'react-router-dom';

export function PrivateRoute({ component: Component, isAuth, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: 'login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}
