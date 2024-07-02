import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({ username, password })
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" value={username} placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" value={password} placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit} type="submit" >Submit</button>
        </div>
    )
}

export default Login
