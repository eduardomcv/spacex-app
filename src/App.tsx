import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, RouterProvider } from '@tanstack/react-router';
import AppHeader from './components/AppHeader';
import router from './routes/router';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router}>
        <AppHeader />
        <Outlet />
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
