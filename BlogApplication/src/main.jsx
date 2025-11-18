import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Layout from './componants/Layout';
import ErrorBoundary from './componants/ErrorBoundary';
import Blog from './componants/Blog';
import Contact from './componants/Contact';
import Home from './componants/Home';
import Login from './componants/Login';
import SignIn from './componants/SignIn';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,             // Layout wraps everything! all componants
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "SignIn",
        element: <SignIn />
      },
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  

    <RouterProvider router={router} />

)
