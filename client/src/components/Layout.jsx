import React from 'react'
import Header from './Header'
import '../assets/styles/Layout.css'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div id="layout">
        <Header />
        <div style={{height: '8rem'}}>
        </div>
        {children}
        <Footer />
    </div>
  )
}

export default Layout