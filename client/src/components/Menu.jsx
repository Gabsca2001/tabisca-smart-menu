import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuLayout from './MenuLayout'

const Menu = () => {
  return (
    <MenuLayout>
        <Outlet />
    </MenuLayout>
  )
}

export default Menu