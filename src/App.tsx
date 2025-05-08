import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import LandingPageLayout from './landingPageLayout'
import MainPage from './pages/main/ui/Main'
import { Menu } from './pages/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
