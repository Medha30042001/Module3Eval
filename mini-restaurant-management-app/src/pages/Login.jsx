import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const inputRef = useRef();

    const handleLogin = () => {
        if(email === 'admin@gmail.com' && password === 'admin1234'){
            navigate('/admin/dashboard');
        }else if(email === 'customer@gmail.com' && password === 'customer1234'){
            navigate('/customer/dashboard');
        }else{
            alert('Wrong credentials');
            return;
        }
    }

    useEffect(() => {
        inputRef.current.focus();
    }, []);

  return (
    <>
        <div>
            <h1>Login Page</h1>
            <input type="email"
             placeholder='Enter email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             autoComplete='none'
             ref={inputRef}/>

             <input type="password"
             placeholder='Enter password'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             autoComplete='new-password'/>

             <button onClick={handleLogin}>Login</button>
        </div>
    </>
  )
}

export default Login