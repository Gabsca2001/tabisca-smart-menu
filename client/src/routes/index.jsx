import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/Root'
import Starter from '../views/Starter'
import Panini from '../views/Panini'
import Pinze from '../views/Pinze'
import NotFound from '../views/NotFound'
import AddItem from '../views/AddItem'
import Login from '../views/Login'
import Home from '../views/Home'
import HomePage from '../views/HomePage'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/context'
import { onAuthStateChanged } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../services/db';
import ReservedLayout from '../components/ReservedLayout'


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
                    element: <Home />,
                    children: [
                        {
                            path: '/',
                            element: <HomePage />
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
                        },
                    ]
                },
                {
                    path: '/reserved',
                    element: <CheckAuthRoute><ReservedLayout /></CheckAuthRoute>,
                    children: [
                        {
                            path: '/reserved',
                            element: <AddItem />
                        }
                    ]
                },
                {
                    path: '/login',
                    element: <Login />
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