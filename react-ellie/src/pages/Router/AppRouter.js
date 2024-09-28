import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/App.css';
import Videos from 'pages/Router/Videos';
import Home from 'pages/Router/Home';
import NotFound from 'pages/Router/NotFound';
import Root from 'pages/Router/Root';
import VideoDetail from 'components/Router/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'videos/', element: <Videos /> },
      { path: 'videos/:videoId', element: <VideoDetail /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
