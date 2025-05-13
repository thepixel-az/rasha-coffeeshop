import { Outlet } from 'react-router'
import { Header, Footer } from '@/shared/components'

const LandingPageLayout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default LandingPageLayout
