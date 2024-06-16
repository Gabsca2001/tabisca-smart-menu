import React from 'react'
import NavbarCustom from './NavbarCustom'

const Layout = ({children}) => {
  return (
    <div>
        <NavbarCustom />
        <div>Layout</div>
        {children}
    </div>
  )
}

export default Layout