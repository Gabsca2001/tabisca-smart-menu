import React from 'react'
import FloatMenu from './FloatMenu'
import Header from './Header'

const MenuLayout = ({children}) => {
  return (
    <div id="layout">
      <Header />
      <FloatMenu />
      <div style={{ marginTop: '8rem' }}></div>
      <div>
        Ciao
      </div>
      {children}
    </div>
  )

}

export default MenuLayout