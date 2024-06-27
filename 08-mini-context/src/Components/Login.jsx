import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({ username, password })
    };

    return (
        <div>
            <h2>login</h2>
            <input className="block"
                type="text"      
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)} />

            <input className="block" type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}

export default Login;
