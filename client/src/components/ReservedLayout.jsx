import React from 'react'
import { Outlet } from 'react-router-dom'

const ReservedLayout = () => {
  return (
    <>
      <div> Reserved Layout </div>
      <Outlet />
    </>
  )
}

export default ReservedLayout