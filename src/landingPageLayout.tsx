import React from 'react'
import { Outlet } from 'react-router'
import Header from './shared/header/ui/Header'
import Footer from './shared/footer/ui/Footer'

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
