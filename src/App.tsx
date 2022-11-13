import { Outlet, RouterProvider } from '@tanstack/react-router';
import AppHeader from './components/AppHeader';
import router from './routes/router';

function App() {
  return (
    <RouterProvider router={router}>
      <AppHeader />
      <Outlet />
    </RouterProvider>
  );
}

export default App;
