import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/Root'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <div>Home</div>,
                },
                
                
            ],

        }
    ]
);

export default router