import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import LandingPageLayout from './landingPageLayout'
import MainPage from './pages/main'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { ProductService } from './pages/ProductService'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { Legal } from './pages/Legal'

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
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/product-and-service',
        element: <ProductService />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/legal',
        element: <Legal />,
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
