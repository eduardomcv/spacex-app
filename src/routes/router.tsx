import { createReactRouter, createRouteConfig } from '@tanstack/react-router';
import LaunchesList from './LaunchesList';

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: '/',
    element: <LaunchesList />,
  }),
]);

export default createReactRouter({ routeConfig });
