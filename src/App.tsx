import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import LandingPageLayout from './landingPageLayout'
import MainPage from './pages/main/ui/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
