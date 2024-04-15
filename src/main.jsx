import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Layouts/Home';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Contact from './Components/Layouts/Contact';
import Teacher from './Components/Layouts/Teacher';
import { Result } from 'postcss';
import Achievement from './Components/Layouts/Achievement';
import Profile from './Components/Layouts/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/teacher',
        element: <Teacher></Teacher>
      },
      {
        path: '/result',
        element: <Result></Result>
      },
      {
        path: '/achievement',
        element: <Achievement></Achievement>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
