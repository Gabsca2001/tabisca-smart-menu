import React from 'react'
import { Outlet } from 'react-router-dom'
import ReservedLayout from './ReservedLayout'

const Reserved = () => {
  return (
    <ReservedLayout>
        <Outlet />
    </ReservedLayout>
  )
}

export default Reserved