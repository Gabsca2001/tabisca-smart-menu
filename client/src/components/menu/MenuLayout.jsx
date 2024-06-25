import React from 'react'
import FloatMenu from './FloatMenu'
import Header from './Header'
import Footer from '../Footer'
import '../../assets/styles/Layout.css'
import CookieBanner from '../CookieBanner'

const MenuLayout = ({children}) => {


  return (
    <div id="layout">

      <Header />
      <FloatMenu />
      <div style={{ marginTop: '8rem' }}></div>
      {children}
      <CookieBanner />
      <Footer />
    </div>
  )

}

export default MenuLayout