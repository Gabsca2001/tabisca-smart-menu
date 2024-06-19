import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/home/Root'
import Starter from '../views/menu/Starter'
import Panini from '../views/menu/Panini'
import Pinze from '../views/menu/Pinze'
import NotFound from '../views/NotFound'
import AddItem from '../views/reserved/AddItem'
import Login from '../views/Login'
import HomePage from '../views/HomePage'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/context'
import { onAuthStateChanged } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../services/firebase-config';
import Menu from '../components/menu/Menu'
import Reserved from '../components/reserved/Reserved'
import ReservedPage from '../views/reserved/ReservedPage'
import PrimaPagina from '../views/menu/PrimaPagina'
import EditItem from '../views/reserved/EditItem'


const CheckAuthRoute = ({ children }) => {
    const navigate = useNavigate();
    const { setCurrentUser } = useContext(AuthContext);

    useEffect(() => {
        const checkAuth = () => {
            try {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        setCurrentUser(user);
                    } else {
                        navigate('/login');
                    }
                });
            } catch (err) {
                console.error(err);
            }
        }
        checkAuth();
    }, []);

    return children;
}



const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/login',
                    element: <Login />
                }

            ]
        },
        {
            path: '/menu',
            element: <Menu />,
            children: [
                {
                    path: '/menu',
                    element: <PrimaPagina />
                },
                {
                    path: 'antipasti',
                    element: <Starter />
                },
                {
                    path: 'panini',
                    element: <Panini />
                },
                {
                    path: 'pinze',
                    element: <Pinze />
                }
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