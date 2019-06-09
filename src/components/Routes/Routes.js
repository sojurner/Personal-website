import React from 'react';
import { Route } from 'react-router-dom';
import { mainRoutes } from '../../assets/data/routes';

const Routes = () => {
  return mainRoutes.map((routeProps, index) => (
    <Route
      exact={
        routeProps.path === '/' || routeProps.path === '/about' ? true : false
      }
      key={`route-${index}`}
      {...routeProps}
    />
  ));
};

export default Routes;
