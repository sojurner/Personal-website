import React from 'react';
import { Route } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { mainRoutes } from '../../assets/data/routes';

const Routes = () => {
  const routes = mainRoutes.map((routeProps, index) => (
    <Route
      exact={
        routeProps.path === '/' || routeProps.path === '/about' ? true : false
      }
      key={`route-${index}`}
      {...routeProps}
    />
  ));
  return <React.Suspense fallback={<Loading />}>{routes}</React.Suspense>;
};

export default Routes;
