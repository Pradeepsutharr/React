import React from 'react'

function Login() {

    const handleSubmit = () => {
        e.preventdefault()
    }

    return (
        <div>
            <h2>login</h2>
            <input type='text' placeholder='username' />
            <input type='text' placeholder='password' />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login
