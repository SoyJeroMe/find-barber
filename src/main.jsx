import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from '../src/components/register/Register.jsx'
import RegisterStylist from './components/register/RegisterStylist.jsx'
import RegisterCurrentUser from './components/register/RegisterCurrentUser.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/register-stylist',
    element: <RegisterStylist />
  },
  {
    path: '/register-currrent-user',
    element: <RegisterCurrentUser />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
