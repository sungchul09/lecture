import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/App.css';
import Videos from 'pages/RouterPages/Videos';
import Home from 'pages/RouterPages/Home';
import NotFound from 'pages/RouterPages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/videos',
    element: <Videos />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
