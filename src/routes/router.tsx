import { createReactRouter, createRouteConfig } from '@tanstack/react-router';
import Launch from './Launch';
import LaunchesList from './LaunchesList';

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: '/',
    component: LaunchesList,
  }),
  createRoute({
    path: '/launch',
    component: Launch,
  }),
]);

export const router = createReactRouter({ routeConfig });
