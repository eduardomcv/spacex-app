import { createReactRouter, createRouteConfig } from '@tanstack/react-router';
import Homepage from './Homepage';

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: '/',
    element: <Homepage />,
  }),
]);

export default createReactRouter({ routeConfig });
