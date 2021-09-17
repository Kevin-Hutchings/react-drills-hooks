import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeUsername = (name) => {
        setUsername(name);
    }

    const changePassword = (pass) => {
        setPassword(pass);
    }

    const loginAlert = () => {
        alert(`Username: ${username} Password: ${password}`);
    }

    return(
        <div>
            <input 
                type='text'
                onChange={(e) => changeUsername(e.target.value)}
            />
            <input
                type='text'
                onChange={(e) => changePassword(e.target.value)}
            />
            <button onClick={loginAlert}> Login </button>
        </div>
    )
}

export default Login;