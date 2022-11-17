import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, RouterProvider } from '@tanstack/react-router';
import { lazy } from 'react';
import AppHeader from './components/AppHeader';
import { router } from './routes/router';

const client = new QueryClient();

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(async () => {
        const res = await import('@tanstack/react-router-devtools');
        return { default: res.TanStackRouterDevtools };
      });

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router}>
        <AppHeader />
        <Outlet />
      </RouterProvider>
      <TanStackRouterDevtools router={router} />
    </QueryClientProvider>
  );
}

export default App;
