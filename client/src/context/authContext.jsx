import { createContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase-config';
import { signOut } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('currentUser')) || null
    );

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            setCurrentUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setCurrentUser(null);
            localStorage.removeItem('currentUser');
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
