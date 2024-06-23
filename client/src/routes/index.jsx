import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/home/Root'
import Starter from '../views/menu/Starter'
import Panini from '../views/menu/Panini'
import Pinze from '../views/menu/Pinse.jsx'
import NotFound from '../views/NotFound'
import AddItem from '../views/reserved/AddItem'
import Login from '../views/Login'
import HomePage from '../views/HomePage'
import Home from '../components/home/Home'
import Storia from '../views/Storia'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext.jsx'
import { useContext } from 'react';
import Menu from '../components/menu/Menu'
import Reserved from '../components/reserved/Reserved'
import ReservedPage from '../views/reserved/ReservedPage'
import PrimaPagina from '../views/menu/PrimaPagina'
import EditItem from '../views/reserved/EditItem'


const CheckAuthRoute = ({ children }) => {

    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (!currentUser) {
            navigate('/login');
        }
    }, [currentUser, navigate]);

    return children;
}



const router = createBrowserRouter(
    [
        {
            element: <Root />,
            children: [
                {
                    element: <Home/>,
                    children: [
                        {
                            path: '/',
                            element: <HomePage />
                        },
                        {
                            path: 'storia',
                            element: <Storia />
                        },
                        {
                            path: '/login',
                            element: <Login />
                        },
                    ],
                },
                {
                    element: <Menu />,
                    children: [
                        {
                            path: 'menu',
                            element: <PrimaPagina />
                        },
                        {
                            path: '/menu/antipasti',
                            element: <Starter />
                        },
                        {
                            path: '/menu/panini',
                            element: <Panini />
                        },
                        {
                            path: '/menu/pinse',
                            element: <Pinze />
                        }
                    ]
                },
            ]
        },
        {
            path: '/reserved',
            element:
                <CheckAuthRoute>
                    <Reserved />
                </CheckAuthRoute>,
            children: [
                {
                    path: '/reserved',
                    element: <ReservedPage />
                },
                {
                    path: 'additem',
                    element: <AddItem />
                },
                {
                    path: 'edititem',
                    element: <EditItem />
                }
            ]
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
);

export default router