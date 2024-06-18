import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeLayout from '../components/HomeLayout'

const Home = () => {
  return (
    <HomeLayout>
        <Outlet />
    </HomeLayout>

  )
}

export default Home