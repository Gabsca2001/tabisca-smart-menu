import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/Root'
import Starter from '../views/Starter'
import Panini from '../views/Panini'
import Pinze from '../views/Pinze'
import NotFound from '../views/NotFound'

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
                {
                    path: '/antipasti',
                    element: <Starter />
                },
                {
                    path: '/panini',
                    element: <Panini />
                },
                {
                    path: '/pinze',
                    element: <Pinze />
                }
                
                
            ],

        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
);

export default router