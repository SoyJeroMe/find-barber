import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from '../src/pages/register/Register.jsx'
import RegisterStylist from '../src/pages/register/RegisterStylist.jsx'
import RegisterCurrentUser from '../src/pages/register/RegisterCurrentUser.jsx'
import BarberPage from '../src/pages/barberPage/BarberPage.jsx'
import AppDescription from '../src/pages/appDescription/AppDescription.jsx'
// import Contact from '../src/pages/contact/Contact.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Learning from './pages/learning/Learning.jsx'
import JoinUs from './pages/join-us/JoinUs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/register-stylist',
    element: <RegisterStylist />,
  },
  {
    path: '/register-currrent-user',
    element: <RegisterCurrentUser />,
  },
  {
    path: '/barber-page',
    element: <BarberPage />,
  },
  {
    path: '/app-description',
    element: <AppDescription />,
  },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },
  {
    path: 'learning',
    element: <Learning />
  },
  {
    path: 'join-us',
    element: <JoinUs />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
