import React from 'react'
import '../assets/styles/Layout.css'
import FloatMenu from './FloatMenu'


const HomeLayout = ({children}) => {

    return (
        <div id="layout">
            <FloatMenu />
            <div style={{marginTop: '8rem'}}></div>
            {children}
        </div>
    )
}

export default HomeLayout