import React, { useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/db'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/context'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            setCurrentUser(user);
            navigate('/reserved');
        } catch (err) {
            setCurrentUser(null);
            setError(err.message);
        }
    };
    
    return (
        <div>
            {
                currentUser && <p>{currentUser.email} is signed in</p>
            }
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign In</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Login