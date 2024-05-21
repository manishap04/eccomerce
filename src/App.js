import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import About from './screens/about.js';
import Home from './screens/home.js';
import Register from './screens/Register.js';
import Login from './screens/Login.js';
import RouteLayout from './screens/RouteLayout.js';

function App() {
  let browserRouter = createBrowserRouter([
    {
      path: '',
      element: <RouteLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={browserRouter}></RouterProvider>
    </div>
  );
}

export default App;
